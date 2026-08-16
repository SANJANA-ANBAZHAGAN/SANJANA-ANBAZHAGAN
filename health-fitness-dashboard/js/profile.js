// Static profile: who you are, targets, and goals.
// Edit this file any time your numbers change (new InBody scan, new goals, etc).
window.PROFILE = {
  name: "Sanjana",
  bio: {
    sex: "female",
    age: 25,
    heightCm: 152,
    job: "desk job (9-5)",
    location: "USA",
  },
  metrics: {
    weightKg: 56.5,
    bmi: 24.5,
    bodyFatPct: 33.2,
    muscleMassKg: 35.4,
    visceralFat: 8,
    bmrKcal: 1171,
    rmrKcal: 1325,
  },
  targets: {
    calorieMin: 1550,
    calorieMax: 1650,
    proteinMinG: 105,
    proteinMaxG: 110,
    proteinFlagG: 100, // flag if a day's protein falls below this
    fiberMinG: 28,
    fiberMaxG: 35,
    waterMinL: 2.5,
    stepsMin: 8000,
    stepsMax: 10000,
  },
  goals: {
    weight: { fromKg: 56.5, toMinKg: 52, toMaxKg: 54 },
    bodyFatPct: { from: 33.2, toMin: 25, toMax: 27 },
    visceralFat: { from: 8, below: 6 },
  },
  schedule: {
    // 0 = Sunday ... 6 = Saturday
    0: { label: "Rest + Meal Prep", type: "rest" },
    1: { label: "Upper Body A", type: "workout" },
    2: { label: "Lower Body A (glute focus)", type: "workout" },
    3: { label: "Run + Core", type: "workout" },
    4: { label: "Upper Body B", type: "workout" },
    5: { label: "Lower Body B or Rest", type: "flex" },
    6: { label: "Long Run + Stretch", type: "workout" },
  },
  running: {
    pr5k: { distanceKm: 5, durationMin: 45, paceMinPerKm: 9 },
    goal10k: {
      distanceKm: 10,
      targetMinMin: 80,
      targetMaxMin: 100,
      weeksMin: 10,
      weeksMax: 12,
      targetPaceFastMinPerKm: 8,
      targetPaceEasyMinPerKm: 10,
    },
  },
};
