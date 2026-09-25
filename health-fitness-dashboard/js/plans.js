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

  // One-line coach note for the week — the Friday Routine (or a manual chat) updates this
  // after the check-in, so it reflects how the week actually went rather than staying generic.
  weeklyFocus: "Haven't heard from you yet this week, so this plan keeps your usual training splits and holds the 1,550-1,650 kcal / 100-110g protein targets steady — drop a one-line note whenever you get a sec on workouts, runs, energy, or sleep, and I'll tune next week's plan around it.",

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
    // A specific Monday-Sunday plan (not a rotating template) — every meal and snack, with
    // timing, macros, key nutrients, and a per-day tip, same format as a chat-written weekly
    // plan. The Friday Routine (or a manual chat) replaces this whole week each time, keeping
    // this same shape: 5 meals/day with `time`, plus a `tip` per day.
    week: [
      {
        dow: "mon", day: "Monday", emoji: "🫘", title: "North Indian — Rajma & Paneer Day",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Besan chilla + eggs", food: "2 besan (gram flour) veggie chillas with onion, tomato, spinach, ajwain, minimal oil + mint-coriander chutney + 2 boiled eggs (from Sunday's batch)", kcal: 360, protein: 28, fiber: 6, nutrients: "Folate, Iron, B12, Fibre" },
          { meal: "Snack", time: "10 AM", short: "Sprouted moong chaat", food: "1/2 cup sprouted moong chaat with cucumber, tomato, onion, lemon, chaat masala", kcal: 150, protein: 9, fiber: 6, nutrients: "Folate, Fibre, Vit C, Iron" },
          { meal: "Lunch", time: "1 PM", short: "Rajma rice bowl", food: "Rajma rice bowl: 1.25 cups rajma in a light tomato-onion gravy (from Sunday's batch) + 1/2 cup brown rice + kachumber salad + a spoon of low-fat curd", kcal: 510, protein: 23, fiber: 15, nutrients: "Iron, Folate, Fibre, Calcium" },
          { meal: "Snack", time: "4 PM", short: "Yogurt + walnuts", food: "150g Greek yogurt + 8 walnuts", kcal: 160, protein: 12, fiber: 2, nutrients: "Calcium, Omega-3, Probiotics" },
          { meal: "Dinner", time: "7 PM", short: "Paneer bhurji", food: "Paneer bhurji: 110g paneer (from Sunday's batch) scrambled with onion-tomato-capsicum, turmeric, minimal oil + 1 small roti + sauteed spinach", kcal: 420, protein: 30, fiber: 6, nutrients: "Calcium, Protein, Iron, Vit A" },
        ],
        tip: "Sunday's rajma and paneer are just reheats/quick-sears today — the only from-scratch cook is breakfast's chillas, so this is your lightest cooking day of the week.",
      },
      {
        dow: "tue", day: "Tuesday", emoji: "🥢", title: "Gochugaru-Soy Tofu & Tikka Day",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Yogurt-mango chia bowl", food: "150g Greek yogurt + diced mango (or berries) + 1 tbsp chia seeds + 2 tbsp granola + a sprinkle of pumpkin seeds", kcal: 350, protein: 19, fiber: 7, nutrients: "Calcium, Vit C, Omega-3, Fibre" },
          { meal: "Snack", time: "10 AM", short: "Boiled eggs + tomatoes", food: "2 boiled eggs (from Sunday's batch) + cherry tomatoes + black pepper", kcal: 190, protein: 14, fiber: 1, nutrients: "B12, Biotin, Vit C" },
          { meal: "Lunch", time: "1 PM", short: "Hariyali tikka salad", food: "Hariyali chicken tikka salad: 110g mint-coriander marinated chicken tikka (from Sunday's batch) over mixed greens, cucumber, capsicum, 1/4 cup roasted chickpeas + lemon-sesame dressing", kcal: 480, protein: 34, fiber: 9, nutrients: "Iron, Folate, Fibre, B12" },
          { meal: "Snack", time: "4 PM", short: "Apple + almonds", food: "1 apple + 12 almonds", kcal: 175, protein: 6, fiber: 5, nutrients: "Vit E, Magnesium, Potassium, Fibre" },
          { meal: "Dinner", time: "7 PM", short: "Gochugaru tofu bowl", food: "Gochugaru-soy tofu rice bowl: 170g pan-seared gochugaru-soy tofu (from Sunday's batch) + 1/2 cup brown rice + sauteed bok choy, carrot, edamame + sesame seeds", kcal: 460, protein: 28, fiber: 8, nutrients: "Iron, Calcium, Vit A, Fibre" },
        ],
        tip: "Tuesday's tofu just needs a quick pan-crisp from Sunday's marinade, and the tikka salad is a reheat too — the freshest cook tonight is crisping the tofu and toasting the sesame seeds.",
      },
      {
        dow: "wed", day: "Wednesday", emoji: "🏃‍♀️", title: "Run Day — Rajma & Tikka Fuel",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Masala oats + eggs", food: "Savory masala oats (1/2 cup oats cooked with onion, tomato, cumin, turmeric) topped with 2 fried/boiled eggs + coriander", kcal: 420, protein: 23, fiber: 7, nutrients: "Folate, Iron, Fibre, B12" },
          { meal: "Pre-Run", time: "11 AM", short: "Banana + peanut butter", food: "1 banana + 1 tbsp peanut butter", kcal: 190, protein: 5, fiber: 3, nutrients: "Potassium, Magnesium — fast fuel" },
          { meal: "Lunch", time: "1 PM", short: "Hariyali tikka wrap", food: "Hariyali chicken tikka wrap: 110g chicken tikka (from Sunday's batch) in a whole wheat tortilla with yogurt-mint slaw, cucumber, lettuce", kcal: 480, protein: 32, fiber: 6, nutrients: "B12, Iron, Folate" },
          { meal: "Post-Run", time: "4 PM", short: "Rajma soup", food: "Rajma soup: 1 cup rajma (from Sunday's batch, thinned, cumin tempering) + a small slice toast", kcal: 240, protein: 14, fiber: 9, nutrients: "Iron, Folate, Potassium, Fibre" },
          { meal: "Dinner", time: "7 PM", short: "Gochugaru-lime tilapia", food: "Gochugaru-lime baked tilapia (110g, gochugaru-lime-garlic glaze, 200°C 12 min) + whole wheat soba noodles + steamed broccoli", kcal: 400, protein: 28, fiber: 6, nutrients: "Omega-3, B12, Selenium, Fibre" },
        ],
        tip: "Today runs a bit higher on calories to fuel the tempo run — the wrap and soup are both reheats from Sunday, so glazing and baking the tilapia is the only real fresh cook tonight, about 12 minutes.",
      },
      {
        dow: "thu", day: "Thursday", emoji: "🥥", title: "South Indian Day",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Ragi dosa + sambar", food: "2 ragi (finger millet) dosas + sambar (3/4 cup, from Sunday's batch) + coconut chutney + 1 boiled egg (from Sunday's batch)", kcal: 400, protein: 22, fiber: 7, nutrients: "Calcium, Iron, Fibre, Folate, B12" },
          { meal: "Snack", time: "10 AM", short: "Buttermilk + peanuts", food: "1 glass spiced buttermilk (low-fat curd based) + 2 tbsp roasted peanuts", kcal: 190, protein: 10, fiber: 3, nutrients: "Calcium, Protein, Probiotics" },
          { meal: "Lunch", time: "1 PM", short: "Curd rice + poriyal", food: "Curd rice (2/3 cup low-fat curd + rice, mustard-curry leaf tempering) + paneer poriyal (100g paneer from Sunday's batch + green beans + carrot, minimal oil)", kcal: 480, protein: 30, fiber: 6, nutrients: "Calcium, Protein, Vit A, Fibre" },
          { meal: "Snack", time: "4 PM", short: "Yogurt + berries", food: "150g Greek yogurt + berries", kcal: 160, protein: 12, fiber: 3, nutrients: "Calcium, Vit C, Probiotics" },
          { meal: "Dinner", time: "7 PM", short: "South Indian egg curry", food: "South Indian egg curry: 2 eggs simmered in a light coconut-tomato curry (minimal coconut, no cream) + brown rice (1/3 cup) + cabbage poriyal", kcal: 410, protein: 22, fiber: 8, nutrients: "B12, Iron, Fibre, Vit A" },
        ],
        tip: "South Indian, cover to cover today — the same dal batch that seasons Sunday's sambar goes into tonight's dal soup on Sunday, so today the only fresh cook is the egg curry.",
      },
      {
        dow: "fri", day: "Friday", emoji: "🫒", title: "Mediterranean Tikka & Salmon Day",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Yogurt parfait", food: "150g Greek yogurt + 2 tbsp granola + berries + 1 tbsp chia seeds + drizzle honey", kcal: 320, protein: 18, fiber: 7, nutrients: "Calcium, Omega-3, Vit C, Probiotics" },
          { meal: "Snack", time: "10 AM", short: "Boiled eggs + tomatoes", food: "2 boiled eggs (from Sunday's batch) + cherry tomatoes + black pepper", kcal: 190, protein: 14, fiber: 1, nutrients: "B12, Biotin, Vit C" },
          { meal: "Lunch", time: "1 PM", short: "Tikka quinoa bowl", food: "Hariyali chicken tikka bowl: 110g chicken tikka (from Sunday's batch, last use) + mixed greens, cucumber, cherry tomato, olives, 1/3 cup quinoa + lemon-olive oil dressing", kcal: 520, protein: 34, fiber: 9, nutrients: "Iron, Folate, Fibre, B12" },
          { meal: "Snack", time: "4 PM", short: "Apple + almonds", food: "1 apple + 12 almonds", kcal: 175, protein: 6, fiber: 5, nutrients: "Vit E, Magnesium, Potassium, Fibre" },
          { meal: "Dinner", time: "7 PM", short: "Gochugaru-lime salmon", food: "Gochugaru-lime wild-caught salmon (130g, 200°C 12-14 min) + roasted zucchini & capsicum + 1/3 cup quinoa", kcal: 430, protein: 32, fiber: 6, nutrients: "Omega-3, B12, Potassium, Vit A" },
        ],
        tip: "The chicken tikka batch wraps up today, its last appearance before Sunday's fresh cook, and the salmon is the one fresh cook tonight, about 12-14 minutes in the oven while the veg roasts alongside it.",
      },
      {
        dow: "sat", day: "Saturday", emoji: "💪", title: "Long Run — Recovery Power Bowl",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Scrambled eggs + avocado toast", food: "2 scrambled eggs + 1 slice whole grain toast + 1/4 avocado + small OJ", kcal: 340, protein: 18, fiber: 6, nutrients: "B12, Vit C, Folate, Potassium" },
          { meal: "Pre-Run", time: "9 AM", short: "Banana + peanut butter", food: "1 banana + 1 tbsp peanut butter", kcal: 190, protein: 5, fiber: 3, nutrients: "Potassium, Magnesium — fast fuel" },
          { meal: "Post-Run", time: "12 PM", short: "Egg-quinoa recovery bowl", food: "Egg-quinoa recovery bowl: 3 boiled eggs (from Sunday's batch) + 2 tbsp roasted chickpeas + 1/2 cup quinoa + roasted sweet potato + spinach + yogurt-mint dressing", kcal: 600, protein: 38, fiber: 12, nutrients: "B12, Vit A, Iron, Potassium, Fibre" },
          { meal: "Snack", time: "4 PM", short: "Apple + pumpkin seeds", food: "1 apple + 2 tbsp roasted pumpkin seeds", kcal: 185, protein: 7, fiber: 5, nutrients: "Zinc, Magnesium, Fibre" },
          { meal: "Dinner", time: "7 PM", short: "Grilled king fish + rice", food: "Grilled king fish (130g, herb-lemon chimichurri: coriander, garlic, olive oil) + brown rice (1/3 cup) + sauteed greens", kcal: 440, protein: 33, fiber: 6, nutrients: "Omega-3, B12, Potassium, Iron" },
        ],
        tip: "The long run earns today's highest calories — eat the recovery bowl within 60-90 min of finishing; the boiled eggs are from Sunday's batch, everything else is a quick fresh assembly.",
      },
      {
        dow: "sun", day: "Sunday", emoji: "📦", title: "Meal Prep — Batch Cook Day",
        meals: [
          { meal: "Breakfast", time: "9 AM", short: "Smoothie bowl", food: "Smoothie bowl: 150g Greek yogurt + frozen berries + banana + 1 tbsp chia seeds + 2 tbsp granola + a sprinkle of pumpkin seeds", kcal: 400, protein: 23, fiber: 8, nutrients: "Calcium, Omega-3, Potassium, Vit C, Fibre" },
          { meal: "Snack", time: "11 AM", short: "Boiled eggs + celery", food: "2 boiled eggs (from today's batch) + celery sticks + 1 tsp peanut butter", kcal: 220, protein: 15, fiber: 2, nutrients: "B12, Zinc, Magnesium, Biotin" },
          { meal: "Lunch", time: "1 PM", short: "Gochugaru tofu salad", food: "Gochugaru-soy tofu salad: 150g tofu (from today's batch, last use) + mixed greens, cucumber, capsicum, edamame + sesame-lime dressing", kcal: 420, protein: 25, fiber: 8, nutrients: "Iron, Vit C, Fibre" },
          { meal: "Snack", time: "4 PM", short: "Paneer tikka bites", food: "Paneer tikka bites: 90g paneer (from today's batch, last use) pan-seared with tandoori spices, skewer-style + cucumber sticks", kcal: 220, protein: 18, fiber: 2, nutrients: "Calcium, Protein" },
          { meal: "Dinner", time: "7 PM", short: "Dal soup + egg", food: "Dal soup: last of today's South Indian dal batch (1 cup, tempered fresh with mustard-cumin-curry leaves) + spinach + 1 boiled egg (from today's batch) + a squeeze of lemon", kcal: 350, protein: 18, fiber: 8, nutrients: "Iron, Folate, Fibre, Vit C, B12" },
        ],
        tip: "Today's the big batch-cook morning — rajma, hariyali chicken tikka, gochugaru-soy tofu, South Indian dal, and paneer all get made, and lunch, snack, and dinner use up the last of three batches so nothing goes to waste.",
      },
    ],
    // 2-3x/week, optional — comes out of the day's remaining calories like any other snack.
    desserts: [
      { name: "Greek yogurt dark chocolate bark", food: "Greek yogurt mixed with a little honey, spread thin, topped with 70%+ dark chocolate chips & chopped walnuts, frozen 1hr", kcal: 140, protein: 10, fiber: 1 },
      { name: "Baked cinnamon apple + yogurt", food: "Baked apple with cinnamon, topped with a spoon of Greek yogurt and a few walnuts", kcal: 150, protein: 6, fiber: 4 },
      { name: "Protein mug cake", food: "1-min microwave mug cake: protein powder, unsweetened cocoa powder, mashed banana, egg white", kcal: 170, protein: 18, fiber: 3 },
    ],
  },

  grocery: {
    note: "Everything for this week's plan above. Smaller quantities since you're cooking just for yourself — scale up if you want extra to freeze.",
    categories: [
      {
        name: "Proteins",
        items: [
          "Chicken breast 400g",
          "Paneer 320g",
          "Firm tofu 350g block",
          "Tilapia fillet 110g",
          "Wild-caught salmon fillet 130g",
          "King fish fillet 130g",
          "Eggs (24, or 2 dozen)",
          "Greek yogurt (5 x 150g pots)",
          "Low-fat plain curd (Indian-style) 500g tub",
        ],
      },
      {
        name: "Legumes & Cans",
        items: [
          "Dried rajma (kidney beans) 1 cup (200g), soaked overnight",
          "Moong-urad dal mix, for sambar/dal soup 90g",
          "Moong beans for sprouting 1/4 cup (or ready-made sprouts 1/2 cup)",
          "Canned chickpeas, small (1/4 cup for Tuesday's salad + 2 tbsp for Saturday's bowl)",
          "Crushed tomatoes (1 small can)",
        ],
      },
      {
        name: "Grains & Wraps",
        items: [
          "Brown rice 250g (1.25 cups dry)",
          "Quinoa 100g (1/2 cup dry)",
          "Rolled oats, small pack (for Wednesday's masala oats)",
          "Besan (gram flour) 200g (for Monday's chillas)",
          "Store-bought ragi dosa batter 500g (or ragi flour + urad dal to make your own)",
          "Whole wheat tortilla/wrap (1-2)",
          "Whole wheat soba noodles, small pack",
          "Whole wheat flour (atta) or store-bought rotis (1-2)",
          "Whole grain bread (small loaf)",
          "Granola (small pack)",
        ],
      },
      {
        name: "Vegetables",
        items: [
          "Baby spinach 200g",
          "Broccoli (1 small head)",
          "Sweet potato (1)",
          "Capsicum, mixed colors (3)",
          "Carrots (6)",
          "Cherry tomatoes (2 punnets)",
          "Tomatoes (7, for gravies/curries)",
          "Cucumber (6)",
          "Zucchini (1)",
          "Cabbage, small (for poriyal)",
          "Green beans 150g (for poriyal)",
          "Bok choy (1 bunch)",
          "Celery (1 bunch)",
          "Mixed salad greens/lettuce, 1 bag",
          "Edamame, frozen small pack",
          "Red onion (4)",
          "Brown onion (4)",
          "Garlic (2 bulbs)",
          "Fresh ginger (1 piece)",
          "Green chillies (4)",
          "Curry leaves (1 sprig)",
          "Fresh coriander (1 bunch)",
          "Fresh mint (1 bunch)",
          "Fresh or frozen grated coconut, small pack (for chutney + egg curry)",
          "Avocado (1)",
          "Olives, small jar (for Friday's bowl)",
        ],
      },
      {
        name: "Fruits",
        items: [
          "Berries 200g (fresh or frozen)",
          "Mango (1, or extra berries)",
          "Bananas (4)",
          "Apples (4)",
          "Lemon (7)",
          "Orange juice, small (1 serving, for Saturday breakfast)",
        ],
      },
      {
        name: "Fats & Extras",
        items: [
          "Extra virgin olive oil",
          "Sesame oil",
          "Almonds 100g",
          "Walnuts 30g",
          "Pumpkin seeds 60g",
          "Chia seeds 60g",
          "Roasted peanuts, small pack",
          "Peanut butter (natural, larger jar — used in snacks)",
          "Honey",
          "Low-sodium soy sauce",
          "Sesame seeds (garnish)",
        ],
      },
      {
        name: "Spices — check cupboard first",
        items: [
          "Cumin",
          "Coriander powder",
          "Turmeric",
          "Chaat masala",
          "Tandoori masala (for Sunday's paneer bites)",
          "Ajwain (carom seeds, for chillas)",
          "Mustard seeds",
          "Sambar powder",
          "Tamarind (small block or paste)",
          "Ginger-garlic paste",
          "Gochugaru (Korean red chilli flakes)",
        ],
      },
      {
        name: "Drinks",
        items: [
          "Green tea",
        ],
      },
    ],
  },

  hairHealth: {
    note: "Daily check-in, not a strict quota — most days is what matters, not every single day.",
    bloodTestNote: "Book your blood test this week if you haven't yet — ask for: ferritin, full blood count, TSH/T3/T4 thyroid, vitamin D, B12. This is the most important thing on this list.",
    items: [
      { key: "eggs", label: "Eggs", why: "Biotin + B12 + zinc = hair growth" },
      { key: "spinachLemon", label: "Spinach + lemon together", why: "Iron absorption x3 with vitamin C" },
      { key: "pumpkinSeeds", label: "Pumpkin seeds", why: "Zinc + omega-3 — stops bulb shedding" },
      { key: "walnutsChia", label: "Walnuts or chia seeds", why: "Omega-3 for scalp health" },
      { key: "ironVitC", label: "Iron-rich meal + vitamin C together", why: "Treats temple thinning directly" },
      { key: "water", label: "2.5L water", why: "Follicle hydration" },
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
    note: "Sunday, ~90 minutes total. Start steps 1, 2, 3 and 4 at the same time across two hobs/oven — the timings below are built around that.",
    multitask: "Rajma (step 1, hob) + hariyali chicken tikka marinate & grill (step 2, oven/pan) + South Indian dal batch (step 4, second hob, 20-25 min) + gochugaru-soy tofu marinate & sear (step 3, pan) all start together. Paneer (step 5) goes in a pan once the chicken's resting. Brown rice & quinoa (step 6) go on once the rajma is simmering steadily. Eggs (step 7) boil in a small pot alongside everything. Gochugaru-lime sauce (step 8), fish portioning (step 9), ragi dosa batter check (step 10), aromatics chopping (step 11), and final portioning (step 12) fill the gaps while everything simmers.",
    steps: [
      { num: 1, task: "Rajma (Kidney Bean) Batch", how: "Cook 1 cup dried rajma (soaked overnight) in a light tomato-onion gravy, 35-40 min on the hob (or 15-20 min pressure-cooked), makes ~2.5 cups. Split: 1.25 cups finished in gravy for Monday's lunch bowl, 1 cup thinned with water for Wednesday's post-run soup (season fresh with cumin before serving) — a small buffer stays. Covers Mon lunch + Wed post-run.", timing: "0-40 min (or 0-20 min pressure-cooked)" },
      { num: 2, task: "Hariyali Chicken Tikka Batch — Marinate, Grill, Split 3 Ways", how: "Marinate 400g chicken breast in low-fat yogurt + a blended mint-coriander-green chilli-ginger-garlic paste + lemon, 20 min. Grill/bake (200°C 18-20 min or pan 12-15 min), then split: 110g for Tuesday's salad, 110g for Wednesday's wrap, 110g for Friday's bowl — same chicken, three different formats. Covers Tue lunch + Wed lunch + Fri lunch.", timing: "0-30 min" },
      { num: 3, task: "Gochugaru-Soy Tofu Batch", how: "Press 350g firm tofu, marinate 15 min in gochugaru + low-sodium soy sauce + sesame oil + a little honey, then pan-sear until crisp (~15 min). Split: 170g for Tuesday's rice bowl, 150g for Sunday's salad. Covers Tue dinner + Sun lunch.", timing: "0-20 min" },
      { num: 4, task: "South Indian Dal Batch (Sambar + Soup)", how: "Cook 90g moong-urad dal mix with carrot, tomato, tamarind, and sambar powder, 20-25 min, makes ~1.75 cups. Keep it thin: 3/4 cup for Thursday's sambar. Simmer the remaining ~1 cup down slightly for Sunday's dal soup (temper fresh with mustard-cumin-curry leaves just before serving). Covers Thu breakfast + Sun dinner.", timing: "0-25 min" },
      { num: 5, task: "Paneer Batch", how: "Cube 320g paneer, pan-sauté with turmeric and minimal oil (~5 min) until lightly golden. Split: 110g scrambled into Monday's bhurji, 100g into Thursday's poriyal, 90g skewered with tandoori spices for Sunday's snack bites. Covers Mon dinner + Thu lunch + Sun snack.", timing: "5-15 min" },
      { num: 6, task: "Brown Rice + Quinoa", how: "Cook 1.25 cups dry brown rice (30 min) for Mon/Tue/Thu/Sat portions. Separately cook 1/2 cup dry quinoa (15 min) for Fri + Sat.", timing: "0-30 min" },
      { num: 7, task: "Boil Eggs", how: "14 eggs, cold water start, boil 9 min, then ice bath. Peel all 14. Covers Mon breakfast (2), Tue snack (2), Thu breakfast (1), Fri snack (2), Sat post-run (3), Sun snack (2), Sun dinner (1) — 13 used, 1 spare. (Wednesday breakfast's, Thursday dinner's, and Saturday breakfast's eggs are cooked fresh, not part of this batch.)", timing: "10-20 min" },
      { num: 8, task: "Gochugaru-Lime Sauce (small jar)", how: "Mix 3 tbsp gochugaru + lime juice + a little honey + a splash of soy sauce + a little water to loosen. Used for Wednesday's baked tilapia glaze and Friday's salmon glaze — split into two portions before use so each fish gets a fresh coat.", timing: "3 min" },
      { num: 9, task: "Portion Fish for the Week", how: "Pat dry and portion the tilapia (Wed, 110g), salmon (Fri, 130g), and king fish (Sat, 130g) into individual bags. Refrigerate what you'll use in 1-2 days, freeze the rest and move it to the fridge the night before to thaw — fish is best cooked fresh each day, not pre-cooked.", timing: "5 min" },
      { num: 10, task: "Ragi Dosa Batter Check", how: "If using store-bought ragi dosa batter, give it a quick stir. If making your own, prep now so it has time to ferment before Thursday's breakfast.", timing: "5 min" },
      { num: 11, task: "Chop & Portion Aromatics", how: "Mince a batch of ginger and garlic, slice onions, wash and chop spinach + coriander + mint + celery + bok choy + green beans/cabbage for poriyal. Blend extra mint-coriander for the hariyali marinade while you're at it. Portion into small containers so weeknight cooking is just assembly.", timing: "10 min" },
      { num: 12, task: "Portion + Label", how: "Pack what you can into lunch containers, snack bags (almonds/walnuts + 1 fruit per day). Rajma, dal, paneer, and tofu batches go into labeled containers on one fridge shelf; the gochugaru-lime sauce jar and coconut chutney go in the door.", timing: "10 min" },
    ],
    newIngredients: [
      { name: "Ragi (finger millet)", note: "A nutrient-dense millet flour used for this week's South Indian dosas instead of the usual rice/urad dal batter — higher in calcium and fibre. Sold at any Indian grocer; store-bought ragi dosa batter also works if you don't want to grind your own." },
      { name: "Gochugaru", note: "Korean red chilli flakes, coarser and a little smokier than regular chilli powder, used in this week's tofu marinade and fish glaze. Sold at Korean/Asian grocers or online; a mix of paprika + a pinch of cayenne is a rough stand-in in a pinch." },
      { name: "Hariyali marinade", note: "A North Indian 'green' marinade of blended mint, coriander, green chilli, and yogurt used for this week's chicken tikka instead of the usual tandoori-red version — same technique, different herbs, nothing extra to buy." },
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
