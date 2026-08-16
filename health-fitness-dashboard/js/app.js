(function () {
  const PROFILE = window.PROFILE;
  const PLANS = window.PLANS;
  const ALL_PLAN_MEALS = PLANS.nutrition.week.flatMap((d) => d.meals);
  const charts = {};
  let AppState = { selectedDate: Store.todayStr(), weekStart: null, reportMonth: Store.todayStr().slice(0, 7), tab: "overview" };
  AppState.weekStart = startOfWeekStr(AppState.selectedDate);

  // ---------- utilities ----------
  function parseLocalDate(s) {
    return new Date(s + "T00:00:00");
  }
  function addDaysStr(s, n) {
    const d = parseLocalDate(s);
    d.setDate(d.getDate() + n);
    return Store.fmtDate(d);
  }
  function startOfWeekStr(s) {
    const d = parseLocalDate(s);
    const dow = d.getDay(); // 0 Sun .. 6 Sat
    const diff = dow === 0 ? -6 : 1 - dow;
    d.setDate(d.getDate() + diff);
    return Store.fmtDate(d);
  }
  function fmtDateNice(s) {
    return parseLocalDate(s).toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
  }
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function hasSpeechRecognition() {
    return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
  }
  function sourceLabel(source) {
    return { apple_health: "Apple Health", strava: "Strava", manual: "Manual" }[source] || "Manual";
  }
  function paceStr(p) {
    if (!p || !isFinite(p)) return "—";
    const m = Math.floor(p);
    const s = Math.round((p - m) * 60);
    return `${m}:${String(s).padStart(2, "0")}`;
  }
  function toast(msg) {
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => t.classList.remove("show"), 2600);
  }
  function currentPlanWeek() {
    const start = parseLocalDate(Store.state.planStartDate);
    const today = parseLocalDate(Store.todayStr());
    const diffDays = Math.floor((today - start) / 86400000);
    const week = Math.floor(diffDays / 7) + 1;
    return Math.max(1, Math.min(PLANS.runningPlan.weeks.length, week));
  }
  function scheduleForDate(dateStr) {
    return PROFILE.schedule[parseLocalDate(dateStr).getDay()];
  }
  function seriesFromMap(map) {
    return Object.entries(map)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([date, value]) => ({ date, value }));
  }

  function metricCard(title, value, unit, targetText, status, barPct) {
    const pct = isFinite(barPct) ? Math.max(0, Math.min(100, barPct)) : 0;
    return `<div class="card metric-card">
      <h3>${title}</h3>
      <div><span class="value">${value}</span>${unit ? `<span class="unit">${unit}</span>` : ""}</div>
      <div class="target">${targetText}</div>
      <div class="progress-bar"><div class="progress-bar__fill ${status}" style="width:${pct}%"></div></div>
    </div>`;
  }

  function quickMealChips() {
    return ALL_PLAN_MEALS.map(
      (m, i) =>
        `<button class="chip" data-chip-idx="${i}" title="${escapeHtml(m.food)}">
          <span class="chip__name">${escapeHtml(m.short || m.meal)}</span>
          <span class="chip__meta">${m.kcal}kcal · ${m.protein}g protein</span>
        </button>`
    ).join("");
  }

  function bannersHTML(totals) {
    const T = PROFILE.targets;
    let html = "";
    if (totals.calories > T.calorieMax) html += `<div class="banner warn"><span class="banner__icon">🌙</span><span>A bit over your calorie range today (${totals.calories - T.calorieMax}kcal over ${T.calorieMax}) — no need to fix it now, just something to notice for tomorrow.</span></div>`;
    if (totals.protein > 0 && totals.protein < T.proteinFlagG) html += `<div class="banner warn"><span class="banner__icon">💪</span><span>Protein's at ${totals.protein}g so far, under your ${T.proteinFlagG}g floor — a shake, Greek yogurt, or extra chicken/tofu would close the gap if you've got room left today.</span></div>`;
    return html;
  }

  function dateNavHTML(date) {
    return `<div class="flex-between mb">
      <button class="btn secondary small" data-nav="-1">← Prev day</button>
      <input type="date" class="js-date-picker" value="${date}" />
      <button class="btn secondary small" data-nav="1">Next day →</button>
    </div>`;
  }
  function bindDateNav(panel, rerender) {
    panel.querySelector('[data-nav="-1"]').addEventListener("click", () => {
      AppState.selectedDate = addDaysStr(AppState.selectedDate, -1);
      rerender();
    });
    panel.querySelector('[data-nav="1"]').addEventListener("click", () => {
      AppState.selectedDate = addDaysStr(AppState.selectedDate, 1);
      rerender();
    });
    panel.querySelector(".js-date-picker").addEventListener("change", (e) => {
      AppState.selectedDate = e.target.value;
      rerender();
    });
  }

  // ---------- Daily Overview ----------
  function renderOverview() {
    checkAchievements();
    refreshHeaderLevel();
    const panel = document.getElementById("tab-overview");
    const date = AppState.selectedDate;
    const totals = Store.dayTotals(date);
    const water = Store.state.water[date] || 0;
    const steps = Store.state.steps[date] || 0;
    const sleep = Store.state.sleep[date];
    const sleepHours = sleep ? sleep.hours : null;
    const activeCal = Store.state.activeCalories[date];
    const restingHR = Store.state.restingHR[date];
    const standHours = Store.state.standHours[date];
    const T = PROFILE.targets;

    const calStatus = totals.calories === 0 ? "neutral" : totals.calories > T.calorieMax ? "bad" : totals.calories < T.calorieMin ? "warn" : "good";
    const proStatus = totals.calories === 0 && totals.protein === 0 ? "neutral" : totals.protein < T.proteinFlagG ? "bad" : totals.protein < T.proteinMinG ? "warn" : "good";
    const waterStatus = water === 0 ? "neutral" : water < T.waterMinL ? "warn" : "good";
    const stepsStatus = steps === 0 ? "neutral" : steps < T.stepsMin ? "warn" : "good";
    const sleepStatus = !sleepHours ? "neutral" : sleepHours < 7 || sleepHours > 9.5 ? "warn" : "good";

    const focusSched = scheduleForDate(date);
    const focusCycle = getCyclePhase(date);
    const focusIronToday = isIronDay(date);
    const focusLabel = date === Store.todayStr() ? "Today" : fmtDateNice(date);

    panel.innerHTML = `
      ${dateNavHTML(date)}
      <div class="card mb">
        <h3>${focusLabel}'s Focus</h3>
        <div class="checklist" style="margin-top:4px;">
          <div class="check-row" style="cursor:default;"><span class="sheet__icon">${focusSched.type === "rest" ? "😴" : "💪"}</span><span>${focusSched.label}</span></div>
          ${focusCycle ? `<div class="check-row" style="cursor:default;"><span class="sheet__icon">🌙</span><span>${focusCycle.label} · day ${focusCycle.dayInCycle} — ${focusCycle.nutrition}</span></div>` : ""}
          <div class="check-row" style="cursor:default;"><span class="sheet__icon">💊</span><span>${focusIronToday ? "Iron day — take Vitron-C Iron with your multivitamin" : "Not an iron day — multivitamin, omega-3 & magnesium only"}</span></div>
        </div>
      </div>
      ${bannersHTML(totals)}
      <div class="ring-row mb">
        ${ringHTML((totals.calories / T.calorieMax) * 100, calStatus, "🔥", `${totals.calories || 0}/${T.calorieMax}`, "Calories")}
        ${ringHTML((totals.protein / T.proteinMaxG) * 100, proStatus, "💪", `${totals.protein || 0}/${T.proteinMinG}g`, "Protein")}
        ${ringHTML((water / T.waterMinL) * 100, waterStatus, "💧", `${water || 0}/${T.waterMinL}L`, "Water")}
        ${ringHTML((steps / T.stepsMax) * 100, stepsStatus, "👟", `${steps ? (steps / 1000).toFixed(1) + "K" : 0}/${(T.stepsMin / 1000).toFixed(0)}K`, "Steps")}
        ${ringHTML(((sleepHours || 0) / 9) * 100, sleepStatus, "😴", `${sleepHours || 0}/9h`, "Sleep")}
      </div>
      <div class="grid grid-cards mb">
        ${metricCard("Active Calories", activeCal ?? "—", "kcal", "From Apple Health", "neutral", ((activeCal || 0) / 400) * 100)}
        ${metricCard("Resting HR", restingHR ?? "—", "bpm", "From Apple Health", "neutral", 0)}
        ${metricCard("Stand Hours", standHours ?? "—", "hrs", "From Apple Health", "neutral", ((standHours || 0) / 12) * 100)}
      </div>
      <div class="card">
        <h2>Quick log — ${fmtDateNice(date)}</h2>
        <div class="form-row">
          <div class="field"><label>Steps</label><input type="number" id="ql-steps" value="${steps || ""}" placeholder="e.g. 8500" /></div>
          <div class="field"><label>Weight (kg)</label><input type="number" step="0.1" id="ql-weight" value="${Store.state.weight[date] || ""}" placeholder="e.g. 56.2" /></div>
          <div class="field"><label>Sleep (hrs)</label><input type="number" step="0.1" id="ql-sleep" value="${sleepHours || ""}" placeholder="e.g. 7.5" /></div>
        </div>
        <div class="flex-between">
          <div>
            <button class="btn secondary small" data-water="0.25">+250ml water</button>
            <button class="btn secondary small" data-water="0.5">+500ml water</button>
          </div>
          <button class="btn" id="ql-save">Save</button>
        </div>
      </div>
    `;
    bindDateNav(panel, renderOverview);
    panel.querySelector("#ql-save").addEventListener("click", () => {
      const s = panel.querySelector("#ql-steps").value;
      const w = panel.querySelector("#ql-weight").value;
      const sl = panel.querySelector("#ql-sleep").value;
      if (s !== "") Store.setSteps(date, Number(s));
      if (w !== "") Store.setWeight(date, Number(w));
      if (sl !== "") Store.setSleep(date, Number(sl), (sleep && sleep.quality) || "");
      toast("Saved");
      renderOverview();
    });
    panel.querySelectorAll("[data-water]").forEach((btn) =>
      btn.addEventListener("click", () => {
        Store.addWater(date, Number(btn.dataset.water));
        renderOverview();
      })
    );
  }

  // ---------- Nutrition Tracker ----------
  function renderNutrition() {
    checkAchievements();
    const panel = document.getElementById("tab-nutrition");
    const date = AppState.selectedDate;
    const totals = Store.dayTotals(date);
    const meals = Store.state.meals[date] || [];
    const T = PROFILE.targets;
    const appleNut = Store.state.appleNutrition[date];

    const calStatus = totals.calories === 0 ? "neutral" : totals.calories > T.calorieMax ? "bad" : totals.calories < T.calorieMin ? "warn" : "good";
    const proStatus = totals.protein === 0 ? "neutral" : totals.protein < T.proteinFlagG ? "bad" : totals.protein < T.proteinMinG ? "warn" : "good";
    const fiberStatus = totals.fiber === 0 ? "neutral" : totals.fiber < T.fiberMinG ? "warn" : "good";
    const cycleForNutrition = getCyclePhase(date);

    panel.innerHTML = `
      ${dateNavHTML(date)}
      ${cycleForNutrition ? `<div class="banner good"><span class="banner__icon">🌙</span><span>${cycleForNutrition.label} phase (day ${cycleForNutrition.dayInCycle}): ${cycleForNutrition.nutrition}</span></div>` : ""}
      ${bannersHTML(totals)}
      <div class="grid grid-cards mb">
        ${metricCard("Calories", totals.calories, "kcal", `Target ${T.calorieMin}-${T.calorieMax}`, calStatus, (totals.calories / T.calorieMax) * 100)}
        ${metricCard("Protein", totals.protein, "g", `Aiming for ${T.proteinMinG}-${T.proteinMaxG}g`, proStatus, (totals.protein / T.proteinMaxG) * 100)}
        ${metricCard("Fiber", totals.fiber, "g", `Target ${T.fiberMinG}-${T.fiberMaxG}g`, fiberStatus, (totals.fiber / T.fiberMaxG) * 100)}
      </div>
      ${
        appleNut
          ? `<div class="card mb"><h3>Synced from MyFitnessPal (via Apple Health)</h3><p class="muted">${appleNut.calories}kcal, ${appleNut.protein}g protein, ${appleNut.fiber}g fiber, ${appleNut.waterL}L water logged for this day. Not included in the totals above yet.</p>
        <div class="flex-between"><button class="btn small" id="log-mfp">Log these totals as today's meal</button>${appleNut.waterL ? `<button class="btn secondary small" id="log-mfp-water">+ Add ${appleNut.waterL}L to water</button>` : ""}</div>
      </div>`
          : ""
      }
      <div class="card mb">
        <h2>From your plan</h2>
        <p class="muted" style="margin-top:-4px;">Tap one to log it instantly — no typing.</p>
        <div class="chip-row">${quickMealChips()}</div>
      </div>
      <div class="card mb">
        <h2>Log anything else</h2>
        <p class="muted" style="margin-top:-4px;">Made something that's not in your plan? Type it, or ${hasSpeechRecognition() ? "tap the mic to dictate" : "use your keyboard's dictation button"} — enter the numbers as best you can estimate, close enough is fine.</p>
        <div class="form-row">
          <div class="field"><label>Meal</label>
            <select id="m-name"><option>Breakfast</option><option>Mid-morning snack</option><option>Lunch</option><option>Afternoon snack</option><option>Dinner</option><option>Other</option></select>
          </div>
          <div class="field"><label>Food / notes</label>
            <div style="display:flex;gap:6px;">
              <input type="text" id="m-food" placeholder="e.g. Chicken + quinoa bowl" style="flex:1;" />
              ${hasSpeechRecognition() ? '<button type="button" class="btn secondary" id="m-food-mic" title="Dictate">🎤</button>' : ""}
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="field"><label>Calories</label><input type="number" id="m-cal" /></div>
          <div class="field"><label>Protein (g)</label><input type="number" id="m-pro" /></div>
          <div class="field"><label>Fiber (g)</label><input type="number" id="m-fib" /></div>
        </div>
        <button class="btn" id="m-add">Add meal</button>
      </div>
      <div class="card">
        <h2>Logged — ${fmtDateNice(date)}</h2>
        ${
          meals.length === 0
            ? '<p class="muted">Nothing logged yet today — add something whenever you get to it.</p>'
            : `<table><thead><tr><th>Meal</th><th>Food</th><th>Kcal</th><th>Protein</th><th>Fiber</th><th></th></tr></thead>
          <tbody>${meals.map((m) => `<tr><td>${m.meal}</td><td>${escapeHtml(m.food || "")}</td><td>${m.calories}</td><td>${m.protein}g</td><td>${m.fiber}g</td><td><button class="icon-btn" data-del="${m.id}">✕</button></td></tr>`).join("")}</tbody></table>`
        }
      </div>
    `;
    bindDateNav(panel, renderNutrition);
    const micBtn = panel.querySelector("#m-food-mic");
    if (micBtn) {
      micBtn.addEventListener("click", () => {
        const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recog = new Recognition();
        recog.lang = "en-US";
        recog.interimResults = false;
        micBtn.textContent = "●";
        recog.onresult = (e) => {
          panel.querySelector("#m-food").value = e.results[0][0].transcript;
        };
        recog.onend = () => {
          micBtn.textContent = "🎤";
        };
        recog.onerror = () => {
          micBtn.textContent = "🎤";
          toast("Couldn't catch that — try again or type it");
        };
        recog.start();
      });
    }
    panel.querySelectorAll("[data-chip-idx]").forEach((btn) =>
      btn.addEventListener("click", () => {
        const m = ALL_PLAN_MEALS[Number(btn.dataset.chipIdx)];
        Store.addMeal(date, { meal: m.meal, food: m.short, calories: m.kcal, protein: m.protein, fiber: m.fiber });
        toast(`Logged ${m.short}`);
        renderNutrition();
      })
    );
    if (appleNut) {
      const mfpBtn = panel.querySelector("#log-mfp");
      if (mfpBtn)
        mfpBtn.addEventListener("click", () => {
          Store.addMeal(date, { meal: "Synced from MyFitnessPal", food: "via Apple Health", calories: appleNut.calories, protein: appleNut.protein, fiber: appleNut.fiber });
          toast("Logged");
          renderNutrition();
        });
      const mfpWaterBtn = panel.querySelector("#log-mfp-water");
      if (mfpWaterBtn)
        mfpWaterBtn.addEventListener("click", () => {
          Store.addWater(date, appleNut.waterL);
          toast("Water added");
          renderNutrition();
        });
    }
    panel.querySelector("#m-add").addEventListener("click", () => {
      const meal = panel.querySelector("#m-name").value;
      const food = panel.querySelector("#m-food").value;
      const calories = Number(panel.querySelector("#m-cal").value) || 0;
      const protein = Number(panel.querySelector("#m-pro").value) || 0;
      const fiber = Number(panel.querySelector("#m-fib").value) || 0;
      if (!calories && !protein) {
        toast("Add at least calories or protein");
        return;
      }
      Store.addMeal(date, { meal, food, calories, protein, fiber });
      renderNutrition();
    });
    panel.querySelectorAll("[data-del]").forEach((btn) =>
      btn.addEventListener("click", () => {
        Store.removeMeal(date, btn.dataset.del);
        renderNutrition();
      })
    );
  }

  // ---------- Workout Tracker ----------
  function computeStreak() {
    let streak = 0;
    const d = new Date();
    for (let i = 0; i < 730; i++) {
      const ds = Store.fmtDate(d);
      const sched = PROFILE.schedule[d.getDay()];
      const log = Store.state.workoutLog[ds];
      const isToday = ds === Store.todayStr();
      let satisfied = false;
      if (sched.type === "rest") satisfied = true;
      else if (log && (log.done || log.restOk)) satisfied = true;
      if (satisfied) streak++;
      else if (isToday) {
        // today pending — don't break the streak yet, just don't count it
      } else break;
      d.setDate(d.getDate() - 1);
    }
    return streak;
  }

  // ---------- Achievements + gamification ----------
  const ACHIEVEMENTS = [
    { key: "first_meal", icon: "🍽️", label: "First Bite", desc: "Log your first meal", check: (s) => Object.values(s.meals).some((arr) => arr.length > 0) },
    { key: "first_run", icon: "🏃", label: "First Run", desc: "Log your first run", check: (s) => s.runs.length >= 1 },
    { key: "five_runs", icon: "🏃‍♀️", label: "On a Roll", desc: "Log 5 runs", check: (s) => s.runs.length >= 5 },
    { key: "streak_3", icon: "🔥", label: "3-Day Streak", desc: "3 days of workouts/rest checked off in a row", check: () => computeStreak() >= 3 },
    { key: "streak_7", icon: "🔥🔥", label: "Week Warrior", desc: "7-day streak", check: () => computeStreak() >= 7 },
    { key: "streak_30", icon: "🔥🔥🔥", label: "Unstoppable", desc: "30-day streak", check: () => computeStreak() >= 30 },
    { key: "first_checkin", icon: "⚖️", label: "First Check-In", desc: "Log a weight/body check-in", check: (s) => Object.keys(s.weight).length >= 1 },
    { key: "hydration_hero", icon: "💧", label: "Hydration Hero", desc: "Hit your water target on 5 different days", check: (s) => Object.values(s.water).filter((v) => v >= PROFILE.targets.waterMinL).length >= 5 },
    { key: "hair_care", icon: "💇", label: "Hair Care Habit", desc: "4+ hair-health items checked, on 5 different days", check: (s) => Object.values(s.hairChecklist).filter((d) => Object.values(d).filter(Boolean).length >= 4).length >= 5 },
    { key: "supplement_streak", icon: "💊", label: "Supplement Streak", desc: "Log supplements on 5 different days", check: (s) => Object.values(s.supplements).filter((d) => Object.values(d).some(Boolean)).length >= 5 },
    { key: "cycle_aware", icon: "🌸", label: "Cycle Aware", desc: "Set up the Cycle Tracker", check: (s) => !!(s.cycleSettings && s.cycleSettings.lastPeriodStart) },
    { key: "meal_prep_pro", icon: "📦", label: "Meal Prep Pro", desc: "Check off every Sunday prep step in one week", check: (s) => Object.values(s.mealPrepChecked).some((wk) => PLANS.mealPrep.steps.every((st) => wk[st.num])) },
    {
      key: "perfect_day",
      icon: "🎯",
      label: "Perfect Day",
      desc: "Hit calories, protein, and water targets all in one day",
      check: (s) =>
        Object.keys(s.meals).some((d) => {
          const t = Store.dayTotals(d);
          const w = s.water[d] || 0;
          const T = PROFILE.targets;
          return t.calories >= T.calorieMin && t.calories <= T.calorieMax && t.protein >= T.proteinMinG && w >= T.waterMinL;
        }),
    },
    { key: "backed_up", icon: "💾", label: "Safety First", desc: "Back up your data at least once", check: (s) => !!s.lastBackupAt },
  ];

  function checkAchievements() {
    const s = Store.state;
    if (!s.seenAchievements) s.seenAchievements = [];
    const newlyUnlocked = ACHIEVEMENTS.filter((a) => !s.seenAchievements.includes(a.key) && a.check(s));
    newlyUnlocked.forEach((a, i) => {
      Store.markAchievementSeen(a.key);
      setTimeout(() => celebrateAchievement(a), i * 1000);
    });
  }

  function celebrateAchievement(a) {
    confettiBurst();
    toast(`🎉 Achievement unlocked: ${a.icon} ${a.label}`);
  }

  function confettiBurst() {
    const colors = ["#d1567f", "#f08bab", "#1e2740", "#2f9e6e", "#d98c3d"];
    for (let i = 0; i < 20; i++) {
      const el = document.createElement("div");
      el.className = "confetti-piece";
      el.style.left = Math.random() * 100 + "vw";
      el.style.background = colors[i % colors.length];
      el.style.animationDelay = Math.random() * 0.3 + "s";
      el.style.transform = `rotate(${Math.random() * 360}deg)`;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 1900);
    }
  }

  function achievementsGridHTML() {
    const s = Store.state;
    const unlockedCount = ACHIEVEMENTS.filter((a) => a.check(s)).length;
    return `<div class="section-title"><h2>Achievements</h2><span class="badge good">${unlockedCount}/${ACHIEVEMENTS.length}</span></div>
      <div class="grid grid-cards mb">
        ${ACHIEVEMENTS.map((a) => {
          const unlocked = a.check(s);
          return `<div class="card badge-card ${unlocked ? "unlocked" : "locked"}">
            <div class="badge-card__icon">${unlocked ? a.icon : "🔒"}</div>
            <div class="badge-card__label">${a.label}</div>
            <div class="badge-card__desc muted">${a.desc}</div>
          </div>`;
        }).join("")}
      </div>`;
  }

  // Total distinct days with any activity logged — powers the header's level pill.
  function totalActiveDays() {
    const s = Store.state;
    const days = new Set([
      ...Object.keys(s.meals).filter((d) => s.meals[d].length > 0),
      ...Object.keys(s.water),
      ...Object.keys(s.workoutLog),
      ...Object.keys(s.weight),
    ]);
    return days.size;
  }
  const LEVEL_TITLES = ["Getting Started", "Building Momentum", "Consistency Builder", "Habit Former", "Steady Streaker", "Dedicated", "Health Enthusiast", "Wellness Pro"];
  function levelInfo() {
    const days = totalActiveDays();
    const level = Math.floor(days / 7) + 1;
    return { level, title: LEVEL_TITLES[Math.min(level - 1, LEVEL_TITLES.length - 1)], days };
  }
  function refreshHeaderLevel() {
    const el = document.getElementById("header-date");
    if (!el) return;
    const dateStr = new Date().toLocaleDateString(undefined, { weekday: "long", year: "numeric", month: "long", day: "numeric" });
    const lv = levelInfo();
    el.innerHTML = `Welcome back, ${PROFILE.name} — ${dateStr} <span class="level-pill">Lv ${lv.level} · ${lv.title}</span>`;
  }

  function ringHTML(pct, status, icon, valueText, label) {
    const r = 34,
      c = 2 * Math.PI * r;
    const clamped = pct <= 0 ? 0 : Math.max(4, Math.min(100, pct));
    const offset = c * (1 - clamped / 100);
    const colorVar = { good: "var(--good)", warn: "var(--warn)", bad: "var(--bad)", neutral: "var(--border)" }[status] || "var(--primary)";
    return `<div class="ring-card">
      <div class="ring-wrap">
        <svg viewBox="0 0 76 76" class="ring-svg">
          <circle cx="38" cy="38" r="${r}" class="ring-track" />
          <circle cx="38" cy="38" r="${r}" class="ring-fill" style="stroke:${colorVar};stroke-dasharray:${c};stroke-dashoffset:${offset};" />
        </svg>
        <div class="ring-center">
          <div class="ring-icon">${icon}</div>
          <div class="ring-value">${valueText}</div>
        </div>
      </div>
      <div class="ring-label">${label}</div>
    </div>`;
  }

  function weeklyStats(weekStart) {
    const mandatoryDows = [1, 2, 3, 4, 6];
    let done = 0;
    for (let i = 0; i < 7; i++) {
      const ds = addDaysStr(weekStart, i);
      const d = parseLocalDate(ds);
      if (mandatoryDows.includes(d.getDay())) {
        const log = Store.state.workoutLog[ds];
        if (log && log.done) done++;
      }
    }
    return { done, total: mandatoryDows.length };
  }
  function dayCardHTML(ds) {
    const d = parseLocalDate(ds);
    const sched = PROFILE.schedule[d.getDay()];
    const log = Store.state.workoutLog[ds];
    const isToday = ds === Store.todayStr();
    let checkCls = "",
      checkIcon = "";
    if (sched.type === "rest") {
      checkCls = "rest";
      checkIcon = "😴";
    } else if (log && log.done) {
      checkCls = "done";
      checkIcon = "✓";
    } else if (log && log.restOk) {
      checkCls = "rest";
      checkIcon = "😴";
    }
    const sourceTag = log && log.source === "apple_health" ? '<div class="muted" style="font-size:11px;">via Apple Health</div>' : "";
    return `<div class="day-card ${isToday ? "today" : ""}">
      <div class="dow">${d.toLocaleDateString(undefined, { weekday: "short" })}</div>
      <div class="date-num">${d.getDate()}</div>
      <div class="label">${sched.label}</div>
      <button class="check ${checkCls}" data-toggle-day="${ds}" ${sched.type === "rest" ? "disabled" : ""}>${checkIcon}</button>
      ${sourceTag}
    </div>`;
  }
  function renderWorkouts() {
    checkAchievements();
    const panel = document.getElementById("tab-workouts");
    const weekStart = AppState.weekStart;
    const streak = computeStreak();
    const stats = weeklyStats(weekStart);
    const days = [...Array(7)].map((_, i) => addDaysStr(weekStart, i));
    const todayCycle = getCyclePhase(Store.todayStr());

    panel.innerHTML = `
      <div class="streak-banner">
        <div><div class="big">🔥 ${streak} day streak</div><div>Keep those non-rest days checked off</div></div>
        <div><div class="big">${stats.done}/${stats.total}</div><div>this week's mandatory sessions</div></div>
      </div>
      ${todayCycle ? `<div class="banner good"><span class="banner__icon">🌙</span><span>Today: Day ${todayCycle.dayInCycle} · ${todayCycle.label} — ${todayCycle.workout}</span></div>` : ""}
      <div class="flex-between mb">
        <button class="btn secondary small" data-wk="-1">← Prev week</button>
        <strong>${fmtDateNice(weekStart)} – ${fmtDateNice(addDaysStr(weekStart, 6))}</strong>
        <button class="btn secondary small" data-wk="1">Next week →</button>
      </div>
      <div class="week-grid">${days.map(dayCardHTML).join("")}</div>
      <p class="muted mt">Tap a circle to mark done. Friday cycles: done → rest → clear. Rest days are auto-satisfied.</p>
    `;
    panel.querySelector('[data-wk="-1"]').addEventListener("click", () => {
      AppState.weekStart = addDaysStr(AppState.weekStart, -7);
      renderWorkouts();
    });
    panel.querySelector('[data-wk="1"]').addEventListener("click", () => {
      AppState.weekStart = addDaysStr(AppState.weekStart, 7);
      renderWorkouts();
    });
    panel.querySelectorAll("[data-toggle-day]").forEach((btn) =>
      btn.addEventListener("click", () => {
        const ds = btn.dataset.toggleDay;
        const sched = scheduleForDate(ds);
        if (sched.type === "rest") return;
        const log = Store.state.workoutLog[ds];
        if (!log || (!log.done && !log.restOk)) Store.setWorkoutDone(ds, true, sched.label, "manual");
        else if (log.done) {
          if (sched.type === "flex") Store.setWorkoutRest(ds, sched.label);
          else Store.clearWorkoutLog(ds);
        } else Store.clearWorkoutLog(ds);
        renderWorkouts();
      })
    );
  }

  // ---------- Running Progress ----------
  function renderPaceChart(runs) {
    const ctx = document.getElementById("pace-chart");
    if (!ctx) return;
    if (charts.pace) charts.pace.destroy();
    const labels = runs.map((r) => fmtDateNice(r.date));
    const data = runs.map((r) => Math.round(r.paceMinPerKm * 100) / 100);
    const R = PROFILE.running;
    charts.pace = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          { label: "Your pace (min/km)", data, borderColor: "#7c5cfc", backgroundColor: "rgba(124,92,252,0.15)", tension: 0.3, fill: false, pointRadius: 4 },
          { label: "10K goal — fast", data: labels.map(() => R.goal10k.targetPaceFastMinPerKm), borderColor: "#16a34a", borderDash: [6, 4], pointRadius: 0 },
          { label: "10K goal — easy", data: labels.map(() => R.goal10k.targetPaceEasyMinPerKm), borderColor: "#d97706", borderDash: [6, 4], pointRadius: 0 },
        ],
      },
      options: { responsive: true, maintainAspectRatio: false, scales: { y: { reverse: true, title: { display: true, text: "min/km (lower = faster)" } } } },
    });
  }
  function renderRunning() {
    checkAchievements();
    const panel = document.getElementById("tab-running");
    const runs = [...Store.state.runs].sort((a, b) => a.date.localeCompare(b.date));
    const R = PROFILE.running;
    const longest = runs.reduce((m, r) => Math.max(m, r.distanceKm), 0);
    const latestPace = runs.length ? runs[runs.length - 1].paceMinPerKm : null;
    const progressPct = Math.min(100, (longest / R.goal10k.distanceKm) * 100);
    const estTime = latestPace ? Math.round(latestPace * R.goal10k.distanceKm) : null;
    const weekNum = currentPlanWeek();
    const planWeek = PLANS.runningPlan.weeks.find((w) => w.week === weekNum);

    panel.innerHTML = `
      <div class="grid grid-2 mb">
        <div class="card">
          <h3>10K Goal Progress</h3>
          <p>Longest run so far: <strong>${longest.toFixed(1)} km</strong> of ${R.goal10k.distanceKm} km goal</p>
          <div class="progress-bar"><div class="progress-bar__fill good" style="width:${progressPct}%"></div></div>
          <p class="muted mt">5K PR: ${R.pr5k.durationMin} min (${paceStr(R.pr5k.paceMinPerKm)}/km). Goal: 10K in ${R.goal10k.targetMinMin}-${R.goal10k.targetMaxMin} min.</p>
          ${estTime ? `<p>At your most recent pace, a 10K would take ~<strong>${estTime} min</strong>.</p>` : ""}
        </div>
        <div class="card">
          <h3>This Week's Target</h3>
          ${planWeek ? `<p><strong>Week ${planWeek.week}</strong> of ${PLANS.runningPlan.weeks.length}</p><p>Wed: ${planWeek.wed}</p><p>Sat: ${planWeek.sat}</p><p class="muted">${planWeek.focus}</p>` : '<p class="muted">Set a plan start date in Settings to see weekly targets.</p>'}
        </div>
      </div>
      <div class="card mb">
        <h2>Log a run</h2>
        <div class="form-row">
          <div class="field"><label>Date</label><input type="date" id="r-date" value="${Store.todayStr()}" /></div>
          <div class="field"><label>Distance (km)</label><input type="number" step="0.01" id="r-dist" /></div>
          <div class="field"><label>Duration (min)</label><input type="number" step="0.1" id="r-dur" /></div>
          <div class="field"><label>Avg HR (optional)</label><input type="number" id="r-avghr" /></div>
          <div class="field"><label>Max HR (optional)</label><input type="number" id="r-maxhr" /></div>
        </div>
        <div class="field"><label>Notes</label><input type="text" id="r-notes" placeholder="How did it feel?" /></div>
        <button class="btn" id="r-add">Add run</button>
      </div>
      <div class="card mb"><h3>Pace Progress</h3><div class="chart-wrap"><canvas id="pace-chart"></canvas></div></div>
      <div class="card">
        <h2>Run log</h2>
        ${
          runs.length === 0
            ? '<p class="muted">No runs yet — log your next one below.</p>'
            : `<table><thead><tr><th>Date</th><th>Distance</th><th>Duration</th><th>Pace</th><th>Avg HR</th><th>Max HR</th><th>Source</th><th></th></tr></thead>
          <tbody>${[...runs]
            .reverse()
            .map((r) => `<tr><td>${fmtDateNice(r.date)}</td><td>${r.distanceKm} km</td><td>${r.durationMin} min</td><td>${paceStr(r.paceMinPerKm)}/km</td><td>${r.avgHR || "—"}</td><td>${r.maxHR || "—"}</td><td class="muted">${sourceLabel(r.source)}</td><td><button class="icon-btn" data-delrun="${r.id}">✕</button></td></tr>`)
            .join("")}</tbody></table>`
        }
      </div>
    `;
    panel.querySelector("#r-add").addEventListener("click", () => {
      const date = panel.querySelector("#r-date").value;
      const distanceKm = Number(panel.querySelector("#r-dist").value);
      const durationMin = Number(panel.querySelector("#r-dur").value);
      const avgHR = Number(panel.querySelector("#r-avghr").value) || null;
      const maxHR = Number(panel.querySelector("#r-maxhr").value) || null;
      const notes = panel.querySelector("#r-notes").value;
      if (!date || !distanceKm || !durationMin) {
        toast("Date, distance and duration are required");
        return;
      }
      Store.addRun({ date, distanceKm, durationMin, avgHR, maxHR, notes, source: "manual" });
      renderRunning();
    });
    panel.querySelectorAll("[data-delrun]").forEach((btn) =>
      btn.addEventListener("click", () => {
        Store.removeRun(btn.dataset.delrun);
        renderRunning();
      })
    );
    renderPaceChart(runs);
  }

  // ---------- Body Goals ----------
  function renderBandChart(canvasId, key, series, min, max, unit) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;
    if (charts[key]) charts[key].destroy();
    const labels = series.map((s) => fmtDateNice(s.date));
    const data = series.map((s) => s.value);
    charts[key] = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          { label: "Goal min", data: labels.map(() => min), borderColor: "transparent", backgroundColor: "rgba(22,163,74,0.12)", pointRadius: 0, fill: "+1" },
          { label: "Goal max", data: labels.map(() => max), borderColor: "transparent", pointRadius: 0, fill: false },
          { label: `Actual (${unit})`, data, borderColor: "#7c5cfc", backgroundColor: "rgba(124,92,252,0.15)", tension: 0.3, pointRadius: 4 },
        ],
      },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { labels: { filter: (item) => !item.text.startsWith("Goal") } } } },
    });
  }
  function renderThresholdChart(canvasId, key, series, threshold) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;
    if (charts[key]) charts[key].destroy();
    const labels = series.map((s) => fmtDateNice(s.date));
    const data = series.map((s) => s.value);
    charts[key] = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          { label: "Actual", data, borderColor: "#7c5cfc", backgroundColor: "rgba(124,92,252,0.15)", tension: 0.3, pointRadius: 4 },
          { label: `Target: below ${threshold}`, data: labels.map(() => threshold), borderColor: "#d97706", borderDash: [6, 4], pointRadius: 0 },
        ],
      },
      options: { responsive: true, maintainAspectRatio: false },
    });
  }
  function daysInMonth(yyyymm) {
    const [y, m] = yyyymm.split("-").map(Number);
    const count = new Date(y, m, 0).getDate();
    return [...Array(count)].map((_, i) => `${yyyymm}-${String(i + 1).padStart(2, "0")}`);
  }
  function addMonthsStr(yyyymm, n) {
    const [y, m] = yyyymm.split("-").map(Number);
    const d = new Date(y, m - 1 + n, 1);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
  }
  function monthlyReport(yyyymm) {
    const days = daysInMonth(yyyymm);
    const weightPts = seriesFromMap(Store.state.weight).filter((p) => p.date.startsWith(yyyymm));
    const bfPts = seriesFromMap(Store.state.bodyFat).filter((p) => p.date.startsWith(yyyymm));
    const runsInMonth = Store.state.runs.filter((r) => r.date.startsWith(yyyymm));
    const sleepVals = days.map((d) => (Store.state.sleep[d] ? Store.state.sleep[d].hours : null)).filter((v) => v != null);
    const mandatoryDows = [1, 2, 3, 4, 6];
    let expected = 0,
      done = 0;
    days.forEach((d) => {
      if (mandatoryDows.includes(parseLocalDate(d).getDay())) {
        expected++;
        const log = Store.state.workoutLog[d];
        if (log && log.done) done++;
      }
    });
    return {
      weightChange: weightPts.length >= 2 ? weightPts[weightPts.length - 1].value - weightPts[0].value : null,
      weightCount: weightPts.length,
      bfChange: bfPts.length >= 2 ? bfPts[bfPts.length - 1].value - bfPts[0].value : null,
      bfCount: bfPts.length,
      runsCompleted: runsInMonth.length,
      runsDistance: runsInMonth.reduce((a, r) => a + r.distanceKm, 0),
      workoutsDone: done,
      workoutsExpected: expected,
      avgSleep: sleepVals.length ? sleepVals.reduce((a, b) => a + b, 0) / sleepVals.length : null,
    };
  }

  function renderGoals() {
    checkAchievements();
    const panel = document.getElementById("tab-goals");
    const G = PROFILE.goals;
    const weightSeries = seriesFromMap(Store.state.weight);
    const bfSeries = seriesFromMap(Store.state.bodyFat);
    const vfSeries = seriesFromMap(Store.state.visceralFat);
    const latestWeight = weightSeries.length ? weightSeries[weightSeries.length - 1].value : G.weight.fromKg;
    const latestBF = bfSeries.length ? bfSeries[bfSeries.length - 1].value : G.bodyFatPct.from;
    const latestVF = vfSeries.length ? vfSeries[vfSeries.length - 1].value : G.visceralFat.from;
    const report = monthlyReport(AppState.reportMonth);
    const monthLabel = parseLocalDate(`${AppState.reportMonth}-01`).toLocaleDateString(undefined, { month: "long", year: "numeric" });

    panel.innerHTML = `
      ${achievementsGridHTML()}
      <div class="grid grid-cards mb">
        <div class="card"><h3>Weight</h3><div class="value">${latestWeight}<span class="unit">kg</span></div><p class="muted">Start ${G.weight.fromKg}kg → Goal ${G.weight.toMinKg}-${G.weight.toMaxKg}kg</p></div>
        <div class="card"><h3>Body Fat</h3><div class="value">${latestBF}<span class="unit">%</span></div><p class="muted">Start ${G.bodyFatPct.from}% → Goal ${G.bodyFatPct.toMin}-${G.bodyFatPct.toMax}%</p></div>
        <div class="card"><h3>Visceral Fat</h3><div class="value">${latestVF}</div><p class="muted">Start ${G.visceralFat.from} → Goal below ${G.visceralFat.below}</p></div>
      </div>
      <div class="card mb"><h3>Weight Trend</h3><div class="chart-wrap"><canvas id="weight-chart"></canvas></div></div>
      <div class="card mb"><h3>Body Fat % Trend</h3><div class="chart-wrap"><canvas id="bf-chart"></canvas></div></div>
      <div class="card mb"><h3>Visceral Fat Trend</h3><div class="chart-wrap"><canvas id="vf-chart"></canvas></div></div>
      <div class="card mb">
        <div class="flex-between mb">
          <button class="btn secondary small" data-month="-1">← Prev month</button>
          <strong>${monthLabel}</strong>
          <button class="btn secondary small" data-month="1">Next month →</button>
        </div>
        <div class="grid grid-cards">
          <div class="metric-card"><h3>Weight change</h3><div class="value">${report.weightChange != null ? (report.weightChange > 0 ? "+" : "") + report.weightChange.toFixed(1) : "—"}${report.weightChange != null ? '<span class="unit">kg</span>' : ""}</div><div class="target">${report.weightCount} check-in${report.weightCount === 1 ? "" : "s"} this month</div></div>
          <div class="metric-card"><h3>Body fat change</h3><div class="value">${report.bfChange != null ? (report.bfChange > 0 ? "+" : "") + report.bfChange.toFixed(1) : "—"}${report.bfChange != null ? '<span class="unit">%</span>' : ""}</div><div class="target">${report.bfCount} check-in${report.bfCount === 1 ? "" : "s"} this month</div></div>
          <div class="metric-card"><h3>Runs completed</h3><div class="value">${report.runsCompleted}</div><div class="target">${report.runsDistance.toFixed(1)} km total</div></div>
          <div class="metric-card"><h3>Workouts hit</h3><div class="value">${report.workoutsDone}<span class="unit">/${report.workoutsExpected}</span></div><div class="target">mandatory sessions</div></div>
          <div class="metric-card"><h3>Avg sleep</h3><div class="value">${report.avgSleep != null ? report.avgSleep.toFixed(1) : "—"}${report.avgSleep != null ? '<span class="unit">hrs</span>' : ""}</div><div class="target">nights logged</div></div>
        </div>
      </div>
      <div class="card">
        <h2>Log a check-in</h2>
        <div class="form-row">
          <div class="field"><label>Date</label><input type="date" id="g-date" value="${Store.todayStr()}" /></div>
          <div class="field"><label>Weight (kg)</label><input type="number" step="0.1" id="g-weight" /></div>
          <div class="field"><label>Body fat (%)</label><input type="number" step="0.1" id="g-bf" /></div>
          <div class="field"><label>Visceral fat</label><input type="number" step="1" id="g-vf" /></div>
        </div>
        <button class="btn" id="g-save">Save check-in</button>
      </div>
    `;
    panel.querySelectorAll("[data-month]").forEach((btn) =>
      btn.addEventListener("click", () => {
        AppState.reportMonth = addMonthsStr(AppState.reportMonth, Number(btn.dataset.month));
        renderGoals();
      })
    );
    panel.querySelector("#g-save").addEventListener("click", () => {
      const date = panel.querySelector("#g-date").value;
      const w = panel.querySelector("#g-weight").value;
      const bf = panel.querySelector("#g-bf").value;
      const vf = panel.querySelector("#g-vf").value;
      if (w !== "") Store.setWeight(date, Number(w));
      if (bf !== "") Store.setBodyFat(date, Number(bf));
      if (vf !== "") Store.setVisceralFat(date, Number(vf));
      toast("Check-in saved");
      renderGoals();
    });
    renderBandChart("weight-chart", "weight", weightSeries, G.weight.toMinKg, G.weight.toMaxKg, "kg");
    renderBandChart("bf-chart", "bodyFat", bfSeries, G.bodyFatPct.toMin, G.bodyFatPct.toMax, "%");
    renderThresholdChart("vf-chart", "visceralFat", vfSeries, G.visceralFat.below);
  }

  // ---------- Wellness (hair health, supplements, sleep) ----------
  function ordinalDay(dateStr) {
    const d = parseLocalDate(dateStr);
    const start = new Date(d.getFullYear(), 0, 0);
    return Math.floor((d - start) / 86400000);
  }
  function isIronDay(dateStr) {
    return ordinalDay(dateStr) % 2 === 0;
  }

  // Rough 4-phase model from a start date + average cycle length. Not a diagnosis, just a pattern to notice.
  function getCyclePhase(dateStr) {
    const cfg = Store.state.cycleSettings;
    if (!cfg || !cfg.lastPeriodStart) return null;
    const cycleLen = cfg.cycleLengthDays || 28;
    const start = parseLocalDate(cfg.lastPeriodStart);
    const target = parseLocalDate(dateStr);
    const diffDays = Math.floor((target - start) / 86400000);
    const dayInCycle = (((diffDays % cycleLen) + cycleLen) % cycleLen) + 1;
    const ovulationDay = Math.max(cycleLen - 14, 10);
    const menstrualEnd = Math.min(5, ovulationDay - 1);
    let phaseKey;
    if (dayInCycle <= menstrualEnd) phaseKey = "menstrual";
    else if (dayInCycle < ovulationDay) phaseKey = "follicular";
    else if (dayInCycle <= ovulationDay + 1) phaseKey = "ovulatory";
    else phaseKey = "luteal";
    return { dayInCycle, cycleLen, phaseKey, ...PLANS.cyclePhases.phases[phaseKey] };
  }

  function renderWellness() {
    checkAchievements();
    const panel = document.getElementById("tab-wellness");
    const date = AppState.selectedDate;
    const hair = Store.state.hairChecklist[date] || {};
    const hairDone = PLANS.hairHealth.items.filter((i) => hair[i.key]).length;
    const supp = Store.state.supplements[date] || {};
    const ironToday = isIronDay(date);

    const sleepDates = [...Array(7)].map((_, i) => addDaysStr(Store.todayStr(), -i));
    const sleepVals = sleepDates.map((d) => (Store.state.sleep[d] ? Store.state.sleep[d].hours : null)).filter((v) => v != null);
    const sleepAvg = sleepVals.length ? sleepVals.reduce((a, b) => a + b, 0) / sleepVals.length : null;

    const cycle = getCyclePhase(date);
    const cfg = Store.state.cycleSettings;

    panel.innerHTML = `
      ${dateNavHTML(date)}
      <div class="card mb">
        <h2>Cycle Tracking</h2>
        <p class="muted" style="margin-top:-2px;">${PLANS.cyclePhases.note}</p>
        ${
          cycle
            ? `<div class="flex-between mb">
                <div><strong>Day ${cycle.dayInCycle}</strong> of ~${cycle.cycleLen} · <span class="badge neutral">${cycle.label}</span></div>
              </div>
              <p><strong>Nutrition:</strong> ${cycle.nutrition}</p>
              <p><strong>Workout:</strong> ${cycle.workout}</p>`
            : `<p class="muted">Add your last period start date to see phase-based nutrition and workout tips here and on the Workouts tab.</p>`
        }
        <div class="form-row mt">
          <div class="field"><label>Last period start</label><input type="date" id="cycle-start" value="${(cfg && cfg.lastPeriodStart) || ""}" /></div>
          <div class="field"><label>Avg cycle length (days)</label><input type="number" id="cycle-length" value="${(cfg && cfg.cycleLengthDays) || 28}" /></div>
        </div>
        <p class="muted" style="margin-top:-4px;">Days from the first day of one period to the first day of the next — 28 is a fine default if you're not sure. Doesn't need to be exact.</p>
        <button class="btn small" id="cycle-save">${cycle ? "Update" : "Save"}</button>
      </div>
      <div class="card mb">
        <div class="flex-between">
          <h2>Hair Health Checklist</h2>
          <span class="badge ${hairDone >= 4 ? "good" : "neutral"}">${hairDone}/${PLANS.hairHealth.items.length} today</span>
        </div>
        <p class="muted" style="margin-top:-2px;">${PLANS.hairHealth.note}</p>
        <div class="checklist">
          ${PLANS.hairHealth.items
            .map(
              (i) => `<label class="check-row">
            <input type="checkbox" data-hair="${i.key}" ${hair[i.key] ? "checked" : ""} />
            <span>${i.label}${i.why ? `<br><span class="muted" style="font-size:11.5px;">${i.why}</span>` : ""}</span>
          </label>`
            )
            .join("")}
        </div>
        ${PLANS.hairHealth.bloodTestNote ? `<div class="banner warn mt"><span class="banner__icon">🩸</span><span>${PLANS.hairHealth.bloodTestNote}</span></div>` : ""}
      </div>
      <div class="card mb">
        <h2>Supplements</h2>
        <p class="muted" style="margin-top:-2px;">${PLANS.supplements.note}</p>
        <div class="checklist">
          ${PLANS.supplements.items
            .map((i) => {
              const skip = i.key === "iron" && !ironToday;
              return `<label class="check-row ${skip ? "check-row--skip" : ""}">
            <input type="checkbox" data-supp="${i.key}" ${supp[i.key] ? "checked" : ""} ${skip ? "disabled" : ""} />
            <span>${i.label} <span class="muted" style="font-size:11.5px;">— ${skip ? "not today, alternate-day" : i.time}</span></span>
          </label>`;
            })
            .join("")}
        </div>
      </div>
      <div class="card">
        <h3>Sleep — last 7 days</h3>
        <div class="stat-value">${sleepAvg != null ? sleepAvg.toFixed(1) : "—"}<span class="unit">hrs avg</span></div>
        ${
          sleepAvg == null
            ? '<p class="muted">Log sleep on the Overview tab to see this fill in.</p>'
            : sleepAvg < 7
              ? '<p class="muted">Running under 7h this week — worth an earlier night when you can, especially with the training load.</p>'
              : '<p class="muted">Nice, at or above 7h average this week.</p>'
        }
      </div>
    `;
    bindDateNav(panel, renderWellness);
    panel.querySelector("#cycle-save").addEventListener("click", () => {
      const start = panel.querySelector("#cycle-start").value;
      const len = Number(panel.querySelector("#cycle-length").value) || 28;
      if (!start) {
        toast("Add a date first");
        return;
      }
      Store.setCycleSettings(start, len);
      toast("Cycle info saved");
      renderWellness();
    });
    panel.querySelectorAll("[data-hair]").forEach((cb) =>
      cb.addEventListener("change", () => {
        Store.toggleHairItem(date, cb.dataset.hair);
        renderWellness();
      })
    );
    panel.querySelectorAll("[data-supp]").forEach((cb) =>
      cb.addEventListener("change", () => {
        Store.toggleSupplement(date, cb.dataset.supp);
        renderWellness();
      })
    );
  }

  // ---------- Plans ----------
  function renderPlans() {
    checkAchievements();
    const panel = document.getElementById("tab-plans");
    const dowOrder = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    const dowLabels = { mon: "Monday", tue: "Tuesday", wed: "Wednesday", thu: "Thursday", fri: "Friday", sat: "Saturday", sun: "Sunday" };
    const weekNum = currentPlanWeek();
    const mealPrepState = Store.state.mealPrepChecked[startOfWeekStr(Store.todayStr())] || {};
    const groceryWeekKey = startOfWeekStr(Store.todayStr());
    const groceryState = Store.state.groceryChecked[groceryWeekKey] || {};

    panel.innerHTML = `
      ${PLANS.weeklyFocus ? `<div class="card mb" style="border-left:3px solid var(--primary);"><strong>This week's focus</strong><p class="muted" style="margin-top:4px;">${PLANS.weeklyFocus}</p></div>` : ""}
      <div class="section-title"><h2>Weekly Workout Plan</h2></div>
      ${dowOrder
        .map((k) => {
          const w = PLANS.workouts[k];
          return `<div class="accordion" data-acc>
            <div class="accordion__head">${dowLabels[k]} — ${w.title}</div>
            <div class="accordion__body">
              ${w.warmup ? `<p><strong>Warm-up:</strong> ${w.warmup}</p>` : ""}
              ${w.note ? `<p class="muted">${w.note}</p>` : ""}
              <ul>${w.blocks.map((b) => `<li><strong>${b.exercise}</strong> — ${b.sets}</li>`).join("")}</ul>
              ${w.cooldown ? `<p><strong>Cool-down:</strong> ${w.cooldown}</p>` : ""}
            </div>
          </div>`;
        })
        .join("")}

      <div class="section-title"><h2>10K Running Plan</h2></div>
      <div class="card mb" style="overflow-x:auto;">
        <table><thead><tr><th>Week</th><th>Wed (Run+Core)</th><th>Sat (Long Run)</th><th>Focus</th></tr></thead>
        <tbody>${PLANS.runningPlan.weeks.map((w) => `<tr style="${w.week === weekNum ? "background:var(--surface-2);" : ""}"><td>${w.week === weekNum ? "👉 " : ""}${w.week}</td><td>${w.wed}</td><td>${w.sat}</td><td class="muted">${w.focus}</td></tr>`).join("")}</tbody></table>
      </div>

      <div class="section-title"><h2>This Week's Meal Plan</h2></div>
      <div class="card mb"><ul>${PLANS.nutrition.guidelines.map((g) => `<li>${g}</li>`).join("")}</ul></div>
      ${PLANS.nutrition.week
        .map((d, i) => {
          const t = d.meals.reduce((a, m) => ({ kcal: a.kcal + m.kcal, protein: a.protein + m.protein, fiber: a.fiber + m.fiber }), { kcal: 0, protein: 0, fiber: 0 });
          return `<div class="accordion" data-acc>
            <div class="accordion__head">${d.emoji || ""} ${d.day} — ${d.title} <span class="muted" style="font-weight:400;">(~${t.kcal} kcal, ${t.protein}g protein, ${t.fiber}g fiber)</span></div>
            <div class="accordion__body">
              <table><thead><tr><th>Meal</th><th>Time</th><th>What to eat</th><th>Kcal</th><th>Pro</th><th>Fib</th></tr></thead>
              <tbody>${d.meals
                .map(
                  (m) =>
                    `<tr><td>${m.meal}</td><td class="muted">${m.time || ""}</td><td>${m.food}${m.nutrients ? `<br><span class="muted" style="font-size:11.5px;">${m.nutrients}</span>` : ""}</td><td>${m.kcal}</td><td>${m.protein}g</td><td>${m.fiber}g</td></tr>`
                )
                .join("")}</tbody></table>
              ${d.tip ? `<p class="muted mt">💡 ${d.tip}</p>` : ""}
              <button class="btn small mt" data-log-template="${i}">Log this as today's meals</button>
            </div>
          </div>`;
        })
        .join("")}

      ${
        PLANS.nutrition.desserts && PLANS.nutrition.desserts.length
          ? `<div class="section-title"><h2>Healthy Treats</h2></div>
      <div class="card mb">
        <p class="muted">2-3x/week is plenty — pick one, log it like any other snack, and it comes out of your day's remaining calories same as anything else.</p>
        <table><thead><tr><th>Treat</th><th>What it is</th><th>Kcal</th><th>Pro</th><th>Fib</th></tr></thead>
        <tbody>${PLANS.nutrition.desserts.map((d) => `<tr><td>${d.name}</td><td>${d.food}</td><td>${d.kcal}</td><td>${d.protein}g</td><td>${d.fiber}g</td></tr>`).join("")}</tbody></table>
      </div>`
          : ""
      }

      <div class="section-title"><h2>Grocery List</h2></div>
      <div class="card">
        <p class="muted">${PLANS.grocery.note}</p>
        ${PLANS.grocery.categories
          .map(
            (cat) => `
          <div class="grocery-cat">
            <h4>${cat.name}</h4>
            <ul>${cat.items
              .map(
                (item) =>
                  `<li><label style="display:flex;align-items:center;gap:8px;"><input type="checkbox" data-grocery="${escapeHtml(item)}" ${groceryState[item] ? "checked" : ""} style="width:auto;" /> <span style="${groceryState[item] ? "text-decoration:line-through;color:var(--text-muted);" : ""}">${item}</span></label></li>`
              )
              .join("")}</ul>
          </div>`
          )
          .join("")}
      </div>

      <div class="section-title"><h2>Sunday Meal Prep — ${PLANS.mealPrep.steps.length} steps, ~90 min</h2></div>
      <div class="card mb">
        <p class="muted">${PLANS.mealPrep.note}</p>
        <p class="muted" style="margin-top:6px;"><strong>Multitask:</strong> ${PLANS.mealPrep.multitask}</p>
        <div class="checklist">
          ${PLANS.mealPrep.steps
            .map(
              (s) => `<label class="check-row" style="align-items:flex-start;">
            <input type="checkbox" data-prep="${s.num}" ${mealPrepState[s.num] ? "checked" : ""} style="margin-top:3px;" />
            <span><strong>${s.num}. ${s.task}</strong> <span class="muted">(${s.timing})</span><br><span class="muted" style="font-size:12.5px;">${s.how}</span></span>
          </label>`
            )
            .join("")}
        </div>
      </div>
      ${
        PLANS.mealPrep.newIngredients && PLANS.mealPrep.newIngredients.length
          ? `<div class="card">
        <h3>New ingredients to know this week</h3>
        <ul>${PLANS.mealPrep.newIngredients.map((n) => `<li><strong>${n.name}:</strong> ${n.desc}</li>`).join("")}</ul>
      </div>`
          : ""
      }
    `;
    panel.querySelectorAll("[data-acc] .accordion__head").forEach((h) => h.addEventListener("click", () => h.parentElement.classList.toggle("open")));
    panel.querySelectorAll("[data-log-template]").forEach((btn) =>
      btn.addEventListener("click", () => {
        const idx = Number(btn.dataset.logTemplate);
        const tmpl = PLANS.nutrition.week[idx];
        tmpl.meals.forEach((m) => Store.addMeal(Store.todayStr(), { meal: m.meal, food: m.food, calories: m.kcal, protein: m.protein, fiber: m.fiber }));
        toast(`Logged ${tmpl.day} to today's meals`);
        checkAchievements();
      })
    );
    panel.querySelectorAll("[data-grocery]").forEach((cb) =>
      cb.addEventListener("change", () => {
        Store.toggleGrocery(groceryWeekKey, cb.dataset.grocery);
        renderPlans();
      })
    );
    panel.querySelectorAll("[data-prep]").forEach((cb) =>
      cb.addEventListener("change", () => {
        Store.toggleMealPrepItem(startOfWeekStr(Store.todayStr()), cb.dataset.prep);
        renderPlans();
      })
    );
  }

  // ---------- Settings ----------
  function renderSettings() {
    checkAchievements();
    const panel = document.getElementById("tab-settings");
    const lastBackup = Store.state.lastBackupAt;
    const daysSinceBackup = lastBackup ? Math.floor((Date.now() - new Date(lastBackup).getTime()) / 86400000) : null;
    const backupBadge = !lastBackup ? '<span class="badge warn">Never backed up</span>' : daysSinceBackup >= 14 ? `<span class="badge warn">${daysSinceBackup} days ago</span>` : `<span class="badge good">${daysSinceBackup === 0 ? "today" : daysSinceBackup + "d ago"}</span>`;
    panel.innerHTML = `
      <div class="card mb">
        <h2>Apple Health Import</h2>
        <p class="muted">In the iPhone Health app: tap your profile icon → <strong>Export All Health Data</strong> → share the exported .zip to your computer (AirDrop, Files, email) → unzip it → select the <code>export.xml</code> file below. Parsing happens entirely in your browser; nothing is uploaded anywhere.</p>
        <input type="file" id="ah-file" accept=".xml" />
        <p id="ah-status" class="muted mt"></p>
      </div>
      <div class="card mb">
        <h2>Strava Import</h2>
        <p class="muted">Strava's API doesn't allow browser apps to talk to it directly (no CORS), so a one-time local script bridges the gap: <code>node scripts/strava_sync.js</code> run from the <code>health-fitness-dashboard</code> folder. It talks to Strava server-side and writes <code>strava-export.json</code> — select that file below. Full setup steps (getting your API keys and a refresh token) are in <code>README.md → Connecting Strava</code>.</p>
        <input type="file" id="strava-file" accept=".json" />
        <p id="strava-status" class="muted mt"></p>
      </div>
      <div class="card mb">
        <h2>10K Plan Start Date</h2>
        <p class="muted">Used to compute "this week's target" on the Running tab and Plans tab.</p>
        <input type="date" id="plan-start" value="${Store.state.planStartDate}" style="max-width:200px;" />
      </div>
      <div class="card mb">
        <h2>Manual Data Entry (any date)</h2>
        <p class="muted">For days without an Apple Watch / smart scale reading.</p>
        <div class="form-row">
          <div class="field"><label>Date</label><input type="date" id="md-date" value="${Store.todayStr()}" /></div>
          <div class="field"><label>Steps</label><input type="number" id="md-steps" /></div>
          <div class="field"><label>Resting HR</label><input type="number" id="md-rhr" /></div>
          <div class="field"><label>Stand hours</label><input type="number" id="md-stand" /></div>
        </div>
        <div class="form-row">
          <div class="field"><label>Weight (kg)</label><input type="number" step="0.1" id="md-weight" /></div>
          <div class="field"><label>Body fat (%)</label><input type="number" step="0.1" id="md-bf" /></div>
          <div class="field"><label>Visceral fat</label><input type="number" id="md-vf" /></div>
          <div class="field"><label>Sleep (hrs)</label><input type="number" step="0.1" id="md-sleep" /></div>
        </div>
        <button class="btn" id="md-save">Save</button>
      </div>
      <div class="card mb">
        <div class="flex-between"><h2 style="margin:0;">Backup</h2>${backupBadge}</div>
        <p class="muted">Your data lives only in this browser's local storage. ${!lastBackup ? "You haven't exported one yet — worth doing now." : daysSinceBackup >= 14 ? "It's been a while — worth doing again." : "Export a backup regularly, or to move it to a new device/browser."}</p>
        <div class="flex-between">
          <button class="btn secondary" id="export-backup">Export Backup (.json)</button>
          <label class="btn secondary" style="cursor:pointer;">Import Backup<input type="file" id="import-backup" accept=".json" style="display:none;" /></label>
        </div>
      </div>
      <div class="card">
        <h2>Reset</h2>
        <button class="btn danger" id="reset-all">Erase all data</button>
      </div>
    `;
    panel.querySelector("#ah-file").addEventListener("change", async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      panel.querySelector("#ah-status").textContent = "Parsing… this can take a minute for large exports.";
      try {
        const result = await AppleHealthImport.parseFile(file);
        Store.mergeAppleHealth(result);
        const dayCount = Object.keys(result.daily).length;
        panel.querySelector("#ah-status").textContent = `Imported ${dayCount} days and ${result.runs.length} runs.`;
        toast("Apple Health data imported");
        renderAll();
      } catch (err) {
        console.error(err);
        panel.querySelector("#ah-status").textContent = "Could not parse that file — make sure you selected export.xml.";
      }
    });
    panel.querySelector("#strava-file").addEventListener("change", async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      panel.querySelector("#strava-status").textContent = "Importing…";
      try {
        const text = await file.text();
        const result = JSON.parse(text);
        Store.mergeStrava(result);
        panel.querySelector("#strava-status").textContent = `Imported ${(result.runs || []).length} run(s) and ${(result.workouts || []).length} workout(s).`;
        toast("Strava data imported");
        renderAll();
      } catch (err) {
        console.error(err);
        panel.querySelector("#strava-status").textContent = "Could not read that file — make sure you selected strava-export.json.";
      }
    });
    panel.querySelector("#plan-start").addEventListener("change", (e) => {
      Store.setPlanStartDate(e.target.value);
      toast("Plan start date updated");
    });
    panel.querySelector("#md-save").addEventListener("click", () => {
      const d = panel.querySelector("#md-date").value;
      const map = [
        ["md-steps", (v) => Store.setSteps(d, Number(v))],
        ["md-rhr", (v) => Store.setRestingHR(d, Number(v))],
        ["md-stand", (v) => Store.setStandHours(d, Number(v))],
        ["md-weight", (v) => Store.setWeight(d, Number(v))],
        ["md-bf", (v) => Store.setBodyFat(d, Number(v))],
        ["md-vf", (v) => Store.setVisceralFat(d, Number(v))],
        ["md-sleep", (v) => Store.setSleep(d, Number(v), "")],
      ];
      map.forEach(([id, fn]) => {
        const v = panel.querySelector("#" + id).value;
        if (v !== "") fn(v);
      });
      toast("Saved");
      renderAll();
    });
    panel.querySelector("#export-backup").addEventListener("click", () => {
      const blob = new Blob([Store.exportBackup()], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `health-dashboard-backup-${Store.todayStr()}.json`;
      a.click();
      Store.markBackedUp();
      toast("Backup downloaded");
      renderSettings();
    });
    panel.querySelector("#import-backup").addEventListener("change", async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const text = await file.text();
      try {
        Store.importBackup(text);
        toast("Backup imported");
        renderAll();
      } catch (err) {
        toast("Invalid backup file");
      }
    });
    panel.querySelector("#reset-all").addEventListener("click", () => {
      if (confirm("This will permanently erase all logged data in this browser. Continue?")) {
        Store.resetAll();
        toast("All data erased");
        renderAll();
      }
    });
  }

  // ---------- tabs & init ----------
  function renderTab(name) {
    switch (name) {
      case "overview":
        renderOverview();
        break;
      case "nutrition":
        renderNutrition();
        break;
      case "workouts":
        renderWorkouts();
        break;
      case "running":
        renderRunning();
        break;
      case "goals":
        renderGoals();
        break;
      case "wellness":
        renderWellness();
        break;
      case "plans":
        renderPlans();
        break;
      case "settings":
        renderSettings();
        break;
    }
  }
  function renderAll() {
    renderTab(AppState.tab);
  }
  function switchTab(name) {
    document.querySelectorAll(".tab-btn, .bn-btn[data-tab]").forEach((b) => b.classList.toggle("active", b.dataset.tab === name));
    const moreBtn = document.querySelector('.bn-btn[data-sheet="more"]');
    if (moreBtn) moreBtn.classList.toggle("active", ["goals", "wellness", "plans", "settings"].includes(name));
    document.querySelectorAll(".tab-panel").forEach((p) => p.classList.toggle("active", p.id === "tab-" + name));
    AppState.tab = name;
    renderTab(name);
  }

  // ---------- Bottom nav / quick-log sheet (phone-first) ----------
  function openSheet(id) {
    closeSheets();
    document.getElementById(id).classList.add("open");
    document.getElementById("sheet-backdrop").classList.add("open");
  }
  function closeSheets() {
    document.querySelectorAll(".sheet").forEach((s) => s.classList.remove("open"));
    document.getElementById("sheet-backdrop").classList.remove("open");
  }
  function focusFieldOnTab(tabName, fieldId) {
    switchTab(tabName);
    setTimeout(() => {
      const el = document.querySelector(`#tab-${tabName} #${fieldId}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.focus();
      }
    }, 60);
  }

  document.addEventListener("DOMContentLoaded", () => {
    refreshHeaderLevel();
    document.querySelectorAll(".tab-btn, #bottom-nav .bn-btn[data-tab]").forEach((b) => b.addEventListener("click", () => switchTab(b.dataset.tab)));

    document.getElementById("fab").addEventListener("click", () => {
      const sched = scheduleForDate(Store.todayStr());
      document.getElementById("quick-today-label").textContent = sched.type === "rest" ? "today's a rest day" : sched.label;
      openSheet("quick-sheet");
    });
    document.querySelector('.bn-btn[data-sheet="more"]').addEventListener("click", () => openSheet("more-sheet"));
    document.getElementById("sheet-backdrop").addEventListener("click", closeSheets);
    document.querySelectorAll("#more-sheet [data-tab]").forEach((b) =>
      b.addEventListener("click", () => {
        closeSheets();
        switchTab(b.dataset.tab);
      })
    );
    document.querySelectorAll("#quick-sheet [data-quick]").forEach((b) =>
      b.addEventListener("click", () => {
        const action = b.dataset.quick;
        const today = Store.todayStr();
        if (action === "water250" || action === "water500") {
          Store.addWater(today, action === "water250" ? 0.25 : 0.5);
          toast("Water logged");
          closeSheets();
          if (AppState.tab === "overview") renderOverview();
        } else if (action === "workout-done") {
          const sched = scheduleForDate(today);
          if (sched.type === "rest") {
            toast("Today's a rest day — nothing to mark");
          } else {
            Store.setWorkoutDone(today, true, sched.label, "manual");
            toast("Marked done — nice work");
          }
          closeSheets();
          if (AppState.tab === "workouts") renderWorkouts();
        } else if (action === "log-meal") {
          closeSheets();
          focusFieldOnTab("nutrition", "m-food");
        } else if (action === "log-run") {
          closeSheets();
          focusFieldOnTab("running", "r-dist");
        }
      })
    );

    renderOverview();
  });
})();
