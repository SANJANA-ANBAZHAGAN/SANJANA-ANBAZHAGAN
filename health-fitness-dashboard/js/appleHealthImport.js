// Parses the official Apple Health export.xml (Health app > profile icon > Export All Health Data).
// Runs entirely in your browser - your health data never leaves this device.
//
// Usage: AppleHealthImport.parseFile(file).then(result => Store.mergeAppleHealth(result))
(function () {
  function parseAttrs(tagInner) {
    const attrs = {};
    const re = /([\w:-]+)="([^"]*)"/g;
    let m;
    while ((m = re.exec(tagInner))) {
      attrs[m[1]] = m[2];
    }
    return attrs;
  }

  function parseAppleDate(s) {
    if (!s) return null;
    // "2024-01-01 07:55:00 -0500" -> "2024-01-01T07:55:00-0500" (no space before the offset, or Date() rejects it)
    const iso = s.replace(" ", "T").replace(" ", "");
    const d = new Date(iso);
    return isNaN(d.getTime()) ? null : d;
  }

  function dateKey(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }

  function toKg(value, unit) {
    const v = parseFloat(value);
    if (!unit) return v;
    if (unit.toLowerCase() === "lb") return v * 0.453592;
    return v; // already kg
  }

  function toKm(value, unit) {
    const v = parseFloat(value);
    if (!unit) return v;
    const u = unit.toLowerCase();
    if (u === "mi") return v * 1.60934;
    return v; // km
  }

  function toMin(value, unit) {
    const v = parseFloat(value);
    if (!unit) return v;
    const u = unit.toLowerCase();
    if (u === "sec" || u === "s") return v / 60;
    if (u === "hr" || u === "h") return v * 60;
    return v; // min
  }

  function toKcal(value, unit) {
    const v = parseFloat(value);
    if (!unit) return v;
    const u = unit.toLowerCase();
    if (u === "kj") return v / 4.184;
    return v; // Cal == kcal
  }

  function niceActivityType(raw) {
    if (!raw) return "Workout";
    return raw.replace("HKWorkoutActivityType", "").replace(/([a-z])([A-Z])/g, "$1 $2");
  }

  // Binary search: returns [avg, max] heart rate for samples with t between start & end (ms epoch), sorted array of {t, v}
  function hrStatsInRange(sortedSamples, startMs, endMs) {
    if (!sortedSamples.length) return { avg: null, max: null };
    let lo = 0,
      hi = sortedSamples.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (sortedSamples[mid].t < startMs) lo = mid + 1;
      else hi = mid;
    }
    let sum = 0,
      count = 0,
      max = 0;
    for (let i = lo; i < sortedSamples.length && sortedSamples[i].t <= endMs; i++) {
      sum += sortedSamples[i].v;
      count++;
      if (sortedSamples[i].v > max) max = sortedSamples[i].v;
    }
    if (!count) return { avg: null, max: null };
    return { avg: Math.round(sum / count), max: Math.round(max) };
  }

  async function parseFile(file) {
    const text = await file.text();
    return parseXmlString(text);
  }

  function parseXmlString(text) {
    const daily = {}; // date -> accumulators
    const heartRateSamples = []; // {t, v}
    const stepSums = {};
    const activeCalSums = {};
    const restingHRList = {}; // date -> [values]
    const standHourCount = {};
    const weightByDate = {}; // date -> {t, kg} keep the latest
    const bodyFatByDate = {};
    const sleepByDate = {}; // date -> hours accumulator
    const dietaryProtein = {},
      dietaryFiber = {},
      dietaryWater = {},
      dietaryCalories = {};
    const runs = [];
    const workouts = [];

    function ensureDay(k) {
      if (!daily[k]) daily[k] = {};
      return daily[k];
    }

    // --- Records ---
    const recordRe = /<Record\b([^>]*?)>/g;
    let m;
    while ((m = recordRe.exec(text))) {
      const a = parseAttrs(m[1]);
      const type = a.type;
      if (!type) continue;
      const start = parseAppleDate(a.startDate);
      const end = parseAppleDate(a.endDate) || start;
      if (!start) continue;
      const value = a.value;

      switch (type) {
        case "HKQuantityTypeIdentifierStepCount": {
          const k = dateKey(start);
          stepSums[k] = (stepSums[k] || 0) + (parseFloat(value) || 0);
          break;
        }
        case "HKQuantityTypeIdentifierActiveEnergyBurned": {
          const k = dateKey(start);
          activeCalSums[k] = (activeCalSums[k] || 0) + toKcal(value, a.unit);
          break;
        }
        case "HKQuantityTypeIdentifierRestingHeartRate": {
          const k = dateKey(start);
          (restingHRList[k] = restingHRList[k] || []).push(parseFloat(value) || 0);
          break;
        }
        case "HKQuantityTypeIdentifierHeartRate": {
          heartRateSamples.push({ t: start.getTime(), v: parseFloat(value) || 0 });
          break;
        }
        case "HKQuantityTypeIdentifierBodyMass": {
          const k = dateKey(start);
          const kg = toKg(value, a.unit);
          if (!weightByDate[k] || start.getTime() > weightByDate[k].t) weightByDate[k] = { t: start.getTime(), kg };
          break;
        }
        case "HKQuantityTypeIdentifierBodyFatPercentage": {
          const k = dateKey(start);
          let pct = parseFloat(value) || 0;
          if (pct <= 1) pct *= 100; // HealthKit stores as fraction 0..1
          if (!bodyFatByDate[k] || start.getTime() > bodyFatByDate[k].t) bodyFatByDate[k] = { t: start.getTime(), pct };
          break;
        }
        case "HKCategoryTypeIdentifierAppleStandHour": {
          if (value === "HKCategoryValueAppleStandHourStood") {
            const k = dateKey(start);
            standHourCount[k] = (standHourCount[k] || 0) + 1;
          }
          break;
        }
        case "HKCategoryTypeIdentifierSleepAnalysis": {
          if (value && value.indexOf("Asleep") !== -1) {
            const k = dateKey(end); // credit sleep to the day you woke up
            const hrs = (end.getTime() - start.getTime()) / 3600000;
            sleepByDate[k] = (sleepByDate[k] || 0) + hrs;
          }
          break;
        }
        case "HKQuantityTypeIdentifierDietaryProtein": {
          const k = dateKey(start);
          dietaryProtein[k] = (dietaryProtein[k] || 0) + (parseFloat(value) || 0);
          break;
        }
        case "HKQuantityTypeIdentifierDietaryFiber": {
          const k = dateKey(start);
          dietaryFiber[k] = (dietaryFiber[k] || 0) + (parseFloat(value) || 0);
          break;
        }
        case "HKQuantityTypeIdentifierDietaryWater": {
          const k = dateKey(start);
          const liters = a.unit && a.unit.toLowerCase() === "l" ? parseFloat(value) : (parseFloat(value) || 0) / 1000;
          dietaryWater[k] = (dietaryWater[k] || 0) + liters;
          break;
        }
        case "HKQuantityTypeIdentifierDietaryEnergyConsumed": {
          const k = dateKey(start);
          dietaryCalories[k] = (dietaryCalories[k] || 0) + toKcal(value, a.unit);
          break;
        }
        default:
          break;
      }
    }

    heartRateSamples.sort((x, y) => x.t - y.t);

    // --- Workouts ---
    const workoutRe = /<Workout\b([^>]*?)>/g;
    while ((m = workoutRe.exec(text))) {
      const a = parseAttrs(m[1]);
      const start = parseAppleDate(a.startDate);
      const end = parseAppleDate(a.endDate) || start;
      if (!start) continue;
      const k = dateKey(start);
      const type = niceActivityType(a.workoutActivityType);
      const durationMin = a.duration ? toMin(a.duration, a.durationUnit) : (end.getTime() - start.getTime()) / 60000;
      const distanceKm = a.totalDistance ? toKm(a.totalDistance, a.totalDistanceUnit) : 0;

      workouts.push({ date: k, type, durationMin });

      if (a.workoutActivityType === "HKWorkoutActivityTypeRunning" && distanceKm > 0.3) {
        const { avg, max } = hrStatsInRange(heartRateSamples, start.getTime(), end.getTime());
        runs.push({
          date: k,
          distanceKm: Math.round(distanceKm * 100) / 100,
          durationMin: Math.round(durationMin * 10) / 10,
          avgHR: avg,
          maxHR: max,
        });
      }
    }

    // --- Assemble daily object ---
    const allDateKeys = new Set([
      ...Object.keys(stepSums),
      ...Object.keys(activeCalSums),
      ...Object.keys(restingHRList),
      ...Object.keys(weightByDate),
      ...Object.keys(bodyFatByDate),
      ...Object.keys(standHourCount),
      ...Object.keys(sleepByDate),
      ...Object.keys(dietaryProtein),
      ...Object.keys(dietaryFiber),
      ...Object.keys(dietaryWater),
      ...Object.keys(dietaryCalories),
    ]);

    allDateKeys.forEach((k) => {
      const d = ensureDay(k);
      if (stepSums[k] != null) d.steps = Math.round(stepSums[k]);
      if (activeCalSums[k] != null) d.activeCalories = Math.round(activeCalSums[k]);
      if (restingHRList[k]) d.restingHR = Math.round(restingHRList[k].reduce((a, b) => a + b, 0) / restingHRList[k].length);
      if (weightByDate[k]) d.weightKg = Math.round(weightByDate[k].kg * 10) / 10;
      if (bodyFatByDate[k]) d.bodyFatPct = Math.round(bodyFatByDate[k].pct * 10) / 10;
      if (standHourCount[k] != null) d.standHours = standHourCount[k];
      if (sleepByDate[k] != null) d.sleepHours = Math.round(sleepByDate[k] * 10) / 10;
      if (dietaryProtein[k] != null) d.dietaryProtein = Math.round(dietaryProtein[k]);
      if (dietaryFiber[k] != null) d.dietaryFiber = Math.round(dietaryFiber[k]);
      if (dietaryWater[k] != null) d.dietaryWaterL = Math.round(dietaryWater[k] * 100) / 100;
      if (dietaryCalories[k] != null) d.dietaryCalories = Math.round(dietaryCalories[k]);
    });

    return { daily, runs, workouts };
  }

  window.AppleHealthImport = { parseFile, parseXmlString };
})();
