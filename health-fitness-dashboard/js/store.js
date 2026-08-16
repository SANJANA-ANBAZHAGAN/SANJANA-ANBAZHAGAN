// localStorage-backed data layer. Everything lives in the browser on this device.
// Use Settings > Export Backup / Import Backup to move data between browsers/devices.
(function () {
  const KEY = "hfd_data_v2";

  function blank() {
    return {
      createdAt: todayStr(),
      planStartDate: todayStr(),
      meals: {}, // date -> [{id, meal, food, calories, protein, fiber}]
      water: {}, // date -> liters (number)
      steps: {}, // date -> number
      sleep: {}, // date -> {hours, quality, source}
      weight: {}, // date -> kg
      bodyFat: {}, // date -> pct
      visceralFat: {}, // date -> number
      activeCalories: {}, // date -> kcal
      restingHR: {}, // date -> bpm
      standHours: {}, // date -> count
      appleNutrition: {}, // date -> {calories, protein, fiber, waterL} logged via a food app synced to Apple Health (reference only, not auto-merged into manual totals)
      workoutLog: {}, // date -> {done, type, source, note, restOk}
      runs: [], // [{id, date, distanceKm, durationMin, paceMinPerKm, avgHR, maxHR, notes, source}]
      groceryChecked: {}, // itemName -> bool
      hairChecklist: {}, // date -> {eggs, spinachLemon, pumpkinSeeds, walnutsChia, ironVitC, water: bool}
      supplements: {}, // date -> {multivitamin, iron, omega3, magnesium: bool}
      mealPrepChecked: {}, // weekStartDate -> {protein, rice, veg, eggs, oats, containers: bool}
    };
  }

  function todayStr() {
    const d = new Date();
    return fmtDate(d);
  }
  function fmtDate(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }

  // Cross-source dedup: a run already logged (manually or from another integration) on the same
  // date with a similar duration/distance is treated as the same activity and skipped.
  function mergeRunsAndWorkouts(s, runs, workouts, sourceTag, notesText) {
    (runs || []).forEach((r) => {
      const exists = s.runs.some(
        (existing) =>
          existing.date === r.date &&
          Math.abs(existing.durationMin - r.durationMin) < 2 &&
          Math.abs((existing.distanceKm || 0) - (r.distanceKm || 0)) < 0.3
      );
      if (!exists) {
        s.runs.push({
          id: `${sourceTag}_${r.date}_${Math.random().toString(36).slice(2, 7)}`,
          date: r.date,
          distanceKm: r.distanceKm,
          durationMin: r.durationMin,
          paceMinPerKm: r.durationMin / r.distanceKm,
          avgHR: r.avgHR || null,
          maxHR: r.maxHR || null,
          notes: notesText,
          source: sourceTag,
        });
      }
    });
    s.runs.sort((a, b) => a.date.localeCompare(b.date));

    (workouts || []).forEach((w) => {
      if (!s.workoutLog[w.date] || s.workoutLog[w.date].source !== "manual") {
        s.workoutLog[w.date] = { done: true, type: w.type, source: sourceTag, note: "" };
      }
    });
  }

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) {
        const fresh = blank();
        save(fresh);
        return fresh;
      }
      const parsed = JSON.parse(raw);
      // shallow-fill any missing keys from newer schema versions
      return Object.assign(blank(), parsed);
    } catch (e) {
      console.error("Failed to load store, resetting.", e);
      const fresh = blank();
      save(fresh);
      return fresh;
    }
  }

  function save(state) {
    localStorage.setItem(KEY, JSON.stringify(state));
  }

  const Store = {
    fmtDate,
    todayStr,
    state: load(),

    persist() {
      save(this.state);
    },

    addMeal(date, meal) {
      if (!this.state.meals[date]) this.state.meals[date] = [];
      meal.id = meal.id || `${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
      this.state.meals[date].push(meal);
      this.persist();
    },
    removeMeal(date, id) {
      if (!this.state.meals[date]) return;
      this.state.meals[date] = this.state.meals[date].filter((m) => m.id !== id);
      this.persist();
    },
    dayTotals(date) {
      const meals = this.state.meals[date] || [];
      return meals.reduce(
        (acc, m) => {
          acc.calories += Number(m.calories) || 0;
          acc.protein += Number(m.protein) || 0;
          acc.fiber += Number(m.fiber) || 0;
          return acc;
        },
        { calories: 0, protein: 0, fiber: 0 }
      );
    },

    setWater(date, liters) {
      this.state.water[date] = liters;
      this.persist();
    },
    addWater(date, deltaLiters) {
      const cur = this.state.water[date] || 0;
      this.state.water[date] = Math.max(0, Math.round((cur + deltaLiters) * 100) / 100);
      this.persist();
    },

    setSteps(date, steps, source = "manual") {
      this.state.steps[date] = steps;
      this.persist();
    },
    setSleep(date, hours, quality, source = "manual") {
      this.state.sleep[date] = { hours, quality, source };
      this.persist();
    },
    setWeight(date, kg) {
      this.state.weight[date] = kg;
      this.persist();
    },
    setBodyFat(date, pct) {
      this.state.bodyFat[date] = pct;
      this.persist();
    },
    setVisceralFat(date, val) {
      this.state.visceralFat[date] = val;
      this.persist();
    },
    setActiveCalories(date, kcal) {
      this.state.activeCalories[date] = kcal;
      this.persist();
    },
    setRestingHR(date, bpm) {
      this.state.restingHR[date] = bpm;
      this.persist();
    },
    setStandHours(date, n) {
      this.state.standHours[date] = n;
      this.persist();
    },

    setWorkoutDone(date, done, type, source = "manual", note = "") {
      this.state.workoutLog[date] = { done, type, source, note };
      this.persist();
    },
    setWorkoutRest(date, type) {
      this.state.workoutLog[date] = { done: false, restOk: true, type, source: "manual", note: "" };
      this.persist();
    },
    clearWorkoutLog(date) {
      delete this.state.workoutLog[date];
      this.persist();
    },
    toggleGrocery(item) {
      this.state.groceryChecked[item] = !this.state.groceryChecked[item];
      this.persist();
    },

    toggleHairItem(date, key) {
      if (!this.state.hairChecklist[date]) this.state.hairChecklist[date] = {};
      this.state.hairChecklist[date][key] = !this.state.hairChecklist[date][key];
      this.persist();
    },
    toggleSupplement(date, key) {
      if (!this.state.supplements[date]) this.state.supplements[date] = {};
      this.state.supplements[date][key] = !this.state.supplements[date][key];
      this.persist();
    },
    toggleMealPrepItem(weekStart, key) {
      if (!this.state.mealPrepChecked[weekStart]) this.state.mealPrepChecked[weekStart] = {};
      this.state.mealPrepChecked[weekStart][key] = !this.state.mealPrepChecked[weekStart][key];
      this.persist();
    },

    addRun(run) {
      run.id = run.id || `${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
      if (!run.paceMinPerKm && run.distanceKm > 0) {
        run.paceMinPerKm = run.durationMin / run.distanceKm;
      }
      this.state.runs.push(run);
      this.state.runs.sort((a, b) => a.date.localeCompare(b.date));
      this.persist();
    },
    removeRun(id) {
      this.state.runs = this.state.runs.filter((r) => r.id !== id);
      this.persist();
    },

    setPlanStartDate(date) {
      this.state.planStartDate = date;
      this.persist();
    },

    mergeAppleHealth(parsed) {
      // parsed: { daily: {date: {steps, activeCalories, restingHR, sleepHours, weightKg, bodyFatPct, standHours}}, runs: [...], workouts: [...] }
      const s = this.state;
      Object.entries(parsed.daily || {}).forEach(([date, d]) => {
        if (d.steps != null) s.steps[date] = d.steps;
        if (d.activeCalories != null) s.activeCalories[date] = d.activeCalories;
        if (d.restingHR != null) s.restingHR[date] = d.restingHR;
        if (d.sleepHours != null) s.sleep[date] = { hours: d.sleepHours, quality: d.sleepQualityNote || "", source: "apple_health" };
        if (d.weightKg != null) s.weight[date] = d.weightKg;
        if (d.bodyFatPct != null) s.bodyFat[date] = d.bodyFatPct;
        if (d.standHours != null) s.standHours[date] = d.standHours;
        if (d.dietaryCalories != null || d.dietaryProtein != null || d.dietaryFiber != null || d.dietaryWaterL != null) {
          s.appleNutrition[date] = {
            calories: d.dietaryCalories || 0,
            protein: d.dietaryProtein || 0,
            fiber: d.dietaryFiber || 0,
            waterL: d.dietaryWaterL || 0,
          };
        }
      });

      mergeRunsAndWorkouts(s, parsed.runs, parsed.workouts, "apple_health", "Imported from Apple Health");
      this.persist();
    },

    mergeStrava(parsed) {
      // parsed: { runs: [{date, distanceKm, durationMin, avgHR, maxHR}], workouts: [{date, type, durationMin}] }
      mergeRunsAndWorkouts(this.state, parsed.runs, parsed.workouts, "strava", "Imported from Strava");
      this.persist();
    },

    exportBackup() {
      return JSON.stringify(this.state, null, 2);
    },
    importBackup(jsonStr) {
      const parsed = JSON.parse(jsonStr);
      this.state = Object.assign(blank(), parsed);
      this.persist();
    },
    resetAll() {
      this.state = blank();
      this.persist();
    },
  };

  window.Store = Store;
})();
