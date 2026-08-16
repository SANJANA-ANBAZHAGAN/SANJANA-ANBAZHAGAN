// Your coaching content: workouts, running plan, nutrition plan, grocery list.
// This is reference content rendered in the "Plans" tab. Edit freely as your coach adjusts things.
window.PLANS = {

  workouts: {
    mon: {
      title: "Upper Body A — gym or home",
      warmup: "5 min brisk walk/row/jump rope + arm circles, band pull-aparts x15",
      blocks: [
        { name: "Push", exercise: "Flat DB/Barbell bench press (or push-ups)", sets: "3 x 10-12" },
        { name: "Pull", exercise: "Bent-over row or lat pulldown", sets: "3 x 10-12" },
        { name: "Shoulders", exercise: "Seated DB shoulder press", sets: "3 x 10" },
        { name: "Arms", exercise: "Bicep curls", sets: "3 x 12" },
        { name: "Arms", exercise: "Tricep pushdown or dips", sets: "3 x 12" },
        { name: "Core", exercise: "Plank", sets: "3 x 30-45s" },
      ],
      cooldown: "Chest + lat stretch, 5 min",
    },
    tue: {
      title: "Lower Body A — gym (glute focus)",
      warmup: "5 min bike + glute bridges x15, banded lateral walks x10/side",
      blocks: [
        { name: "Glutes", exercise: "Barbell or DB hip thrust", sets: "4 x 10-12" },
        { name: "Hamstrings/Glutes", exercise: "Romanian deadlift", sets: "3 x 10" },
        { name: "Quads/Glutes", exercise: "Bulgarian split squat", sets: "3 x 10/leg" },
        { name: "Glutes", exercise: "Cable kickback or banded glute bridge", sets: "3 x 15/side" },
        { name: "Calves", exercise: "Standing calf raise", sets: "3 x 15" },
      ],
      cooldown: "Hip flexor + hamstring stretch, 5 min",
    },
    wed: {
      title: "Run + Core",
      note: "Follow this week's target from the 10K Running Plan below for distance/pace.",
      blocks: [
        { name: "Core circuit (3 rounds)", exercise: "Dead bug x12, bicycle crunch x20, plank x40s, leg raises x12", sets: "3 rounds" },
      ],
      cooldown: "Light stretch, 5 min",
    },
    thu: {
      title: "Upper Body B — gym or home",
      warmup: "5 min brisk walk/row + band pull-aparts x15",
      blocks: [
        { name: "Push", exercise: "Incline press or incline push-up", sets: "3 x 10-12" },
        { name: "Pull", exercise: "Single-arm DB row", sets: "3 x 10-12/side" },
        { name: "Shoulders", exercise: "Lateral raise", sets: "3 x 12" },
        { name: "Upper back", exercise: "Face pull", sets: "3 x 15" },
        { name: "Arms", exercise: "Hammer curl", sets: "3 x 12" },
        { name: "Arms", exercise: "Overhead tricep extension", sets: "3 x 12" },
        { name: "Core", exercise: "Side plank", sets: "3 x 30s/side" },
      ],
      cooldown: "Shoulder + upper back stretch, 5 min",
    },
    fri: {
      title: "Lower Body B — or Rest",
      warmup: "5 min bike + bodyweight squats x15",
      blocks: [
        { name: "Quads/Glutes", exercise: "Back or goblet squat", sets: "3 x 10" },
        { name: "Posterior chain", exercise: "Deadlift (conventional or trap bar)", sets: "3 x 8" },
        { name: "Glutes/Balance", exercise: "Walking lunge", sets: "3 x 12/leg" },
        { name: "Glutes", exercise: "Glute bridge march", sets: "3 x 12/side" },
        { name: "Glute medius", exercise: "Side-lying hip abduction", sets: "3 x 15/side" },
      ],
      cooldown: "Full lower body stretch, 5 min. Listen to your body — if legs are fried from Tue/Wed/Sat, take the rest.",
    },
    sat: {
      title: "Long Run + Stretch",
      note: "Follow this week's long run distance from the 10K Running Plan below. Easy, conversational pace.",
      blocks: [
        { name: "Post-run mobility", exercise: "Full body stretch: calves, quads, hamstrings, hip flexors, glutes", sets: "10 min" },
        { name: "Optional", exercise: "Foam roll quads/calves/IT band", sets: "5 min" },
      ],
    },
    sun: {
      title: "Rest + Meal Prep",
      blocks: [
        { name: "Recovery", exercise: "Light walk, foam rolling, extra sleep", sets: "as needed" },
        { name: "Meal prep checklist", exercise: "Cook grains/protein for the week, wash & chop veg, portion snacks, batch overnight oats/egg muffins", sets: "60-90 min" },
      ],
    },
  },

  // 10K training plan: from 5K/45min (9:00/km) to 10K in 80-100 min over 10-12 weeks.
  // Wed = shorter run (tempo/intervals), Sat = long run (easy pace).
  runningPlan: {
    startNote: "Plan starts the week you begin logging runs in the dashboard (Settings tab lets you set/override the start date).",
    weeks: [
      { week: 1, wed: "4 km easy", sat: "5.5 km easy", focus: "Rebuild base after your 5K PR. All easy/conversational pace." },
      { week: 2, wed: "4 km w/ 4x2min tempo", sat: "6 km easy", focus: "Introduce light tempo surges." },
      { week: 3, wed: "5 km w/ 5x2min tempo", sat: "6.5 km easy", focus: "Slight volume bump." },
      { week: 4, wed: "4 km easy (recovery)", sat: "5 km easy (recovery)", focus: "Down week — cut ~20% volume, let legs recover." },
      { week: 5, wed: "5 km w/ 6x2min tempo", sat: "7 km easy", focus: "Back to progression, add intervals." },
      { week: 6, wed: "5.5 km w/ 4x3min tempo", sat: "7.5 km easy", focus: "Steady build." },
      { week: 7, wed: "6 km w/ 5x3min tempo", sat: "8 km easy", focus: "Peak build week." },
      { week: 8, wed: "4.5 km easy (recovery)", sat: "6 km easy (recovery)", focus: "Down week." },
      { week: 9, wed: "6 km w/ 20min tempo", sat: "8.5 km easy", focus: "Sustained tempo effort." },
      { week: 10, wed: "6 km w/ 20min tempo", sat: "9 km easy", focus: "Longest run before taper. Could race 10K here if ready." },
      { week: 11, wed: "5 km easy", sat: "9.5-10 km easy (dress rehearsal)", focus: "Practice race-day fueling/shoes/pacing." },
      { week: 12, wed: "3 km easy shakeout", sat: "10K — goal race/time trial", focus: "Taper. Target 80-100 min (8:00-10:00/km)." },
    ],
  },

  nutrition: {
    guidelines: [
      "Daily targets: 1,550-1,650 kcal · 105-110g protein · 28-35g fiber · 2.5L+ water.",
      "Aim for 25-35g protein per meal so you hit the daily target without one huge dinner.",
      "Pair a protein + a fiber source at every meal (beans, veg, whole grains, fruit) to hit the fiber target and stay full on a calorie deficit.",
      "Any swap works as long as it lands in the same calorie/protein/fiber ballpark — use the dashboard's Nutrition Tracker to check.",
      "Have a bottle of water on your desk and refill 2-3x through the workday — that alone gets you to 2.5L.",
      "Don't cut below this range to speed things up — between the strength training, the running, and everything else your body's doing, this deficit is already working. Going lower risks muscle loss, worse recovery, and undercuts the running.",
      "Extra hunger in the week before your period is normal, not a willpower problem — metabolism can run 100-300 kcal higher in the luteal phase. Give yourself an extra 150-200 kcal that week without guilt.",
      "When hunger hits between meals, check your last meal's protein first — under 35g there is the usual culprit. Otherwise reach for volume: cucumber, celery, broth, an extra egg (~70kcal, 6g protein), or sparkling water with lemon.",
    ],
    // 4 rotating day templates, ~1550-1650 kcal / ~108g protein / ~30g fiber each.
    // Non-veg option listed first, veg swap in parentheses.
    days: [
      {
        day: "Template 1",
        meals: [
          { meal: "Breakfast", short: "Eggs + toast + avocado", food: "2 whole eggs + 2 egg whites scrambled, 1 slice whole-grain toast, 1/2 avocado (veg swap: same, eggs are veg)", kcal: 360, protein: 26, fiber: 6 },
          { meal: "Mid-morning snack", short: "Greek yogurt + berries", food: "1 cup plain non-fat Greek yogurt + 1/2 cup berries", kcal: 150, protein: 16, fiber: 3 },
          { meal: "Lunch", short: "Chicken quinoa bowl", food: "150g grilled chicken breast (veg swap: 150g tofu or paneer) + 1/2 cup cooked quinoa + roasted broccoli & bell peppers, olive oil drizzle", kcal: 460, protein: 38, fiber: 8 },
          { meal: "Afternoon snack", short: "Protein shake", food: "Protein shake (1 scoop whey or plant protein + water/almond milk)", kcal: 130, protein: 24, fiber: 1 },
          { meal: "Dinner", short: "Salmon + sweet potato", food: "150g baked salmon (veg swap: 150g tempeh) + roasted sweet potato + side salad with chickpeas", kcal: 480, protein: 32, fiber: 9 },
        ],
      },
      {
        day: "Template 2",
        meals: [
          { meal: "Breakfast", short: "Protein overnight oats", food: "Overnight oats: 1/2 cup oats, 1 scoop protein powder, 1 tbsp chia seeds, almond milk, banana", kcal: 380, protein: 30, fiber: 8 },
          { meal: "Mid-morning snack", short: "Egg + apple", food: "1 boiled egg + small apple", kcal: 150, protein: 8, fiber: 4 },
          { meal: "Lunch", short: "Turkey black bean bowl", food: "Turkey & black bean bowl (veg swap: black beans + tofu): 120g protein + 1/2 cup black beans + brown rice + salsa", kcal: 460, protein: 34, fiber: 10 },
          { meal: "Afternoon snack", short: "Cottage cheese + veg", food: "Cottage cheese 3/4 cup + cucumber/carrot sticks", kcal: 140, protein: 18, fiber: 2 },
          { meal: "Dinner", short: "Shrimp stir-fry + rice", food: "Stir-fried shrimp (veg swap: edamame) + mixed vegetables + 1/2 cup jasmine rice", kcal: 470, protein: 30, fiber: 6 },
        ],
      },
      {
        day: "Template 3",
        meals: [
          { meal: "Breakfast", short: "Yogurt parfait", food: "Greek yogurt parfait: 1 cup Greek yogurt, granola, mixed berries, 1 tbsp nut butter", kcal: 390, protein: 28, fiber: 6 },
          { meal: "Mid-morning snack", short: "Protein bar", food: "Protein bar (~20g protein, look for one with 3g+ fiber)", kcal: 180, protein: 20, fiber: 4 },
          { meal: "Lunch", short: "Lentil soup + chicken", food: "Lentil & veggie soup (1.5 cups) + 100g grilled chicken or paneer on the side", kcal: 440, protein: 32, fiber: 11 },
          { meal: "Afternoon snack", short: "Hummus + veggies", food: "Hummus (3 tbsp) + bell pepper & carrot sticks", kcal: 140, protein: 6, fiber: 4 },
          { meal: "Dinner", short: "Turkey taco bowl", food: "Ground turkey (veg swap: crumbled tempeh) taco bowl: lettuce, black beans, salsa, small corn tortilla, light cheese", kcal: 470, protein: 30, fiber: 7 },
        ],
      },
      {
        day: "Template 4",
        meals: [
          { meal: "Breakfast", short: "Veggie egg muffins", food: "Veggie egg muffins (3, made with whole eggs + spinach + feta) + 1 slice whole-grain toast", kcal: 360, protein: 27, fiber: 4 },
          { meal: "Mid-morning snack", short: "Skyr + walnuts", food: "1 cup skyr/Greek yogurt + handful walnuts", kcal: 170, protein: 18, fiber: 2 },
          { meal: "Lunch", short: "Grain + chickpea bowl", food: "Grain bowl: 1/2 cup farro or quinoa, roasted chickpeas, roasted veg, 100g grilled chicken or tofu, tahini dressing", kcal: 470, protein: 30, fiber: 10 },
          { meal: "Afternoon snack", short: "Protein shake + pear", food: "Protein shake + 1 small pear", kcal: 150, protein: 24, fiber: 4 },
          { meal: "Dinner", short: "Cod + brussels + rice", food: "Baked cod (veg swap: baked tofu) + roasted brussels sprouts + 1/2 cup wild rice", kcal: 440, protein: 28, fiber: 8 },
        ],
      },
    ],
  },

  grocery: {
    note: "One week's list to cover the 4 nutrition templates above (rotate/repeat through the week). Adjust quantities for how many days you'll cook vs. eat out.",
    categories: [
      {
        name: "Protein",
        items: [
          "Eggs (1-2 dozen)",
          "Chicken breast (~700g)",
          "Salmon or cod fillets (~450g)",
          "Shrimp (~300g, optional)",
          "Ground turkey (~450g)",
          "Tofu, tempeh, paneer or edamame (veg protein swaps)",
          "Greek yogurt / skyr (large tub or 6-8 single cups)",
          "Cottage cheese",
          "Whey or plant protein powder",
          "Protein bars (2-3)",
        ],
      },
      {
        name: "Legumes & Grains",
        items: [
          "Quinoa",
          "Brown rice / jasmine rice / wild rice",
          "Farro or oats",
          "Black beans (canned or dry)",
          "Chickpeas (canned or dry)",
          "Green or red lentils",
          "Whole-grain bread",
          "Small corn tortillas",
        ],
      },
      {
        name: "Produce",
        items: [
          "Spinach",
          "Broccoli",
          "Bell peppers",
          "Brussels sprouts",
          "Mixed salad greens",
          "Cucumber",
          "Carrots",
          "Sweet potatoes",
          "Bananas",
          "Berries (fresh or frozen)",
          "Apples & pears",
          "Avocado",
          "Garlic & onion",
        ],
      },
      {
        name: "Dairy & Alt",
        items: [
          "Almond milk (unsweetened)",
          "Feta or light shredded cheese",
        ],
      },
      {
        name: "Pantry",
        items: [
          "Olive oil",
          "Tahini",
          "Nut butter",
          "Chia seeds",
          "Walnuts / almonds",
          "Granola (low-sugar)",
          "Salsa",
          "Low-sodium taco seasoning",
        ],
      },
    ],
  },

  hairHealth: {
    note: "Daily check-in, not a strict quota — most days is what matters, not every single day.",
    items: [
      { key: "eggs", label: "Eggs" },
      { key: "spinachLemon", label: "Spinach + lemon together" },
      { key: "pumpkinSeeds", label: "Pumpkin seeds" },
      { key: "walnutsChia", label: "Walnuts or chia seeds" },
      { key: "ironVitC", label: "Iron-rich meal + vitamin C together" },
      { key: "water", label: "2.5L water" },
    ],
  },

  // Her existing regimen - this app tracks adherence to it, it does not decide dosing.
  // Iron is every-other-day by design; the dashboard marks which days are "iron days" for her automatically.
  supplements: {
    note: "Tracking what you're already taking - not medical advice. Check with your doctor before changing dosing, especially iron.",
    items: [
      { key: "multivitamin", label: "Sports Research Multivitamin", time: "Morning", frequency: "daily" },
      { key: "iron", label: "Vitron-C Iron", time: "Morning", frequency: "alternate" },
      { key: "omega3", label: "Omega-3 Fish Oil", time: "Dinner", frequency: "daily" },
      { key: "magnesium", label: "Magnesium Glycinate", time: "Bedtime", frequency: "daily" },
    ],
  },

  mealPrep: {
    note: "Sunday, ~60-90 min. Check off as you go.",
    items: [
      { key: "protein", label: "Protein batch cooked" },
      { key: "rice", label: "Brown rice cooked" },
      { key: "veg", label: "Vegetables roasted" },
      { key: "eggs", label: "Eggs boiled" },
      { key: "oats", label: "Overnight oats prepped" },
      { key: "containers", label: "Containers labelled and packed" },
    ],
  },

  // General phase guide, not a diagnosis - actual timing varies person to person.
  cyclePhases: {
    note: "A rough guide based on a typical cycle — everyone's is a little different, so treat this as a starting point to notice patterns against, not a rule to force yourself into.",
    phases: {
      menstrual: {
        label: "Menstrual",
        nutrition: "Iron losses are highest right now — lean into iron-rich meals + vitamin C together (same combo as your hair-health checklist). Extra hunger or lower energy is normal, not a setback.",
        workout: "Lower intensity is completely fine — walk, stretch, easy movement. If you feel strong, don't force rest either; follow your actual energy.",
      },
      follicular: {
        label: "Follicular",
        nutrition: "Energy and insulin sensitivity tend to run higher here — a good window to fuel properly around your harder training.",
        workout: "Often the best window to push — heavier lifts, faster paces. Good stretch to schedule your harder sessions if you have flexibility.",
      },
      ovulatory: {
        label: "Ovulatory",
        nutrition: "Similar to follicular — appetite and energy are usually steady.",
        workout: "Peak strength/power window for a lot of people — a good day for a harder effort if one's on the calendar.",
      },
      luteal: {
        label: "Luteal",
        nutrition: "Metabolic rate can run 100-300 kcal higher here — this is the extra-hunger week. Give yourself the extra 150-200 kcal instead of fighting it.",
        workout: "Dial back if you need to — more core/mobility, an easier run instead of a hard one. Permission to swap a heavy day for a walk.",
      },
    },
  },
};
