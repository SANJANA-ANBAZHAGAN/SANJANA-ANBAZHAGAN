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
  weeklyFocus: "No check-in reply again this week, so training and this week's meal plan run on your usual splits, paces, and 1,550-1,650 kcal/100-110g protein targets — drop a note anytime on how the week actually felt and next week's plan and note will reflect it.",

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
        dow: "mon", day: "Monday", emoji: "🫘", title: "Rajma & Egg-Paneer Day",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Paneer-egg bhurji", food: "Paneer-egg bhurji: 60g crumbled paneer + 2 eggs scrambled with onion, tomato, green chilli, turmeric, cumin + 1 slice multigrain toast", kcal: 350, protein: 28, fiber: 4, nutrients: "Calcium, B12, Iron, Protein" },
          { meal: "Snack", time: "10 AM", short: "Roasted chana + orange", food: "2 tbsp roasted chickpeas (from Sunday's batch, air-fried with chaat masala) + 1 orange", kcal: 175, protein: 9, fiber: 6, nutrients: "Folate, Vit C, Fibre, Iron" },
          { meal: "Lunch", time: "1 PM", short: "Rajma chawal bowl", food: "Rajma chawal: 1.5 cups rajma (kidney beans, from Sunday's batch, tomato-onion masala) + 1/2 cup brown rice + cucumber-onion-tomato salad + a spoon of low-fat curd", kcal: 530, protein: 28, fiber: 13, nutrients: "Iron, Folate, Fibre, Calcium" },
          { meal: "Snack", time: "4 PM", short: "Yogurt + walnuts", food: "150g Greek yogurt + 8 walnuts", kcal: 160, protein: 12, fiber: 2, nutrients: "Calcium, Omega-3, Probiotics" },
          { meal: "Dinner", time: "7 PM", short: "Light egg curry + roti", food: "Light egg curry: 3 boiled eggs in a tomato-onion masala (no cream) + 1 small roti + sauteed spinach", kcal: 400, protein: 24, fiber: 6, nutrients: "B12, Iron, Folate, Protein" },
        ],
        tip: "Sunday's rajma just needs plating for lunch — no cooking — and tonight's egg curry is a 15-minute tomato-onion base, so the only real cooking today is breakfast's bhurji.",
      },
      {
        dow: "tue", day: "Tuesday", emoji: "🌶️", title: "Gochugaru Chicken Day",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Sesame-scallion eggs", food: "Sesame-scallion egg scramble: 2 whole eggs + 1 egg white with scallion, sesame seeds + 1 slice whole grain toast + 1 tsp chia sprinkled on top", kcal: 340, protein: 24, fiber: 6, nutrients: "B12, Selenium, Iron, Omega-3" },
          { meal: "Snack", time: "10 AM", short: "Yogurt + mango + chia", food: "150g Greek yogurt + diced mango (or berries) + 1 tsp chia seeds", kcal: 175, protein: 14, fiber: 3, nutrients: "Calcium, Vit C, Omega-3" },
          { meal: "Lunch", time: "1 PM", short: "Gochugaru chicken bowl", food: "Gochugaru chicken rice bowl: 130g grilled gochugaru-glazed chicken (from Sunday's batch) + 1/2 cup brown rice + sauteed broccoli, carrot, bok choy + quick kimchi-cucumber salad", kcal: 510, protein: 36, fiber: 9, nutrients: "B12, Vit C, Iron, Probiotics" },
          { meal: "Snack", time: "4 PM", short: "Apple + almonds", food: "1 apple + 12 almonds", kcal: 175, protein: 6, fiber: 4, nutrients: "Vit E, Magnesium, Potassium" },
          { meal: "Dinner", time: "7 PM", short: "Miso-baked tilapia", food: "Miso-baked tilapia (110g, miso-ginger-lemon glaze, 200°C 12 min) + whole wheat soba noodles + steamed bok choy", kcal: 390, protein: 28, fiber: 6, nutrients: "Omega-3, B12, Selenium" },
        ],
        tip: "The chicken's already cooked from Sunday, so lunch is just reheating and assembly — tonight's tilapia is the one from-scratch cook today, about 12 minutes in the oven.",
      },
      {
        dow: "wed", day: "Wednesday", emoji: "🏃‍♀️", title: "Run Day — Dal & Rajma Fuel",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Moong dal cheela", food: "2 moong dal cheelas (savoury lentil crepe, from Sunday's batter) + tomato-mint chutney + 1 boiled egg", kcal: 370, protein: 22, fiber: 7, nutrients: "Folate, Iron, Protein, Fibre" },
          { meal: "Pre-Run", time: "11 AM", short: "Banana + curd", food: "1 banana + 150g low-fat curd", kcal: 200, protein: 9, fiber: 3, nutrients: "Potassium, Calcium — fast fuel" },
          { meal: "Lunch", time: "1 PM", short: "Gochugaru chicken wrap", food: "Gochugaru chicken wrap: 110g chicken (from Sunday's batch) in a whole wheat tortilla with yogurt-mint slaw, cucumber, lettuce", kcal: 480, protein: 32, fiber: 6, nutrients: "B12, Iron, Folate, Vit C" },
          { meal: "Post-Run", time: "4 PM", short: "Dal soup", food: "South Indian dal soup (1 cup, thin, from Sunday's batch, cumin-curry leaf tempering) + a small slice toast", kcal: 230, protein: 13, fiber: 6, nutrients: "Iron, Folate, Fibre, Potassium" },
          { meal: "Dinner", time: "7 PM", short: "Rajma soup + egg", food: "Rajma soup: 1 cup rajma (from Sunday's batch, thinned with stock) + 1 boiled egg + 1 small roti", kcal: 470, protein: 26, fiber: 10, nutrients: "Iron, Folate, Fibre, B12" },
        ],
        tip: "Today runs a bit higher on calories to fuel the tempo run — lunch and both soups tonight are just reheats from Sunday's batches, so the only actual cooking is breakfast's cheela.",
      },
      {
        dow: "thu", day: "Thursday", emoji: "🥥", title: "South Indian Day",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Dosa + sambar", food: "2 ragi/rice dosas + sambar (3/4 cup, from Sunday's batch) + coconut chutney + 1 boiled egg", kcal: 420, protein: 22, fiber: 7, nutrients: "Folate, Iron, Fibre, B12" },
          { meal: "Snack", time: "10 AM", short: "Chana + raita", food: "2 tbsp roasted chickpeas (from Sunday's batch) + cucumber raita (low-fat curd) + a few pumpkin seeds", kcal: 185, protein: 13, fiber: 5, nutrients: "Iron, Probiotics, Zinc, Fibre" },
          { meal: "Lunch", time: "1 PM", short: "Lemon rice + paneer poriyal", food: "Lemon rice (2/3 cup, mustard-curry leaf tempering) + paneer poriyal (70g paneer from Sunday's batch + green beans + carrot, minimal oil)", kcal: 460, protein: 30, fiber: 6, nutrients: "Calcium, Protein, Vit A, Fibre" },
          { meal: "Snack", time: "4 PM", short: "Rajma chaat", food: "Rajma chaat: 1/2 cup rajma (from Sunday's batch) + onion, tomato, chaat masala, lemon", kcal: 200, protein: 12, fiber: 8, nutrients: "Iron, Folate, Fibre, Vit C" },
          { meal: "Dinner", time: "7 PM", short: "Paruppu + poriyal", food: "Paruppu (moong/toor dal, 3/4 cup, from Sunday's batch, thickened with fresh mustard-cumin-curry leaf tempering) + brown rice (1/3 cup) + cabbage-carrot poriyal", kcal: 380, protein: 20, fiber: 10, nutrients: "Iron, Folate, Fibre, Vit A" },
        ],
        tip: "South Indian, cover to cover today — the same dal batch shows up three ways this week (breakfast's sambar, Wednesday's soup, tonight's thicker paruppu), just tempered differently each time.",
      },
      {
        dow: "fri", day: "Friday", emoji: "🫒", title: "Mediterranean Bowl Day",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Yogurt parfait", food: "150g Greek yogurt + 2 tbsp granola + berries + 1 tbsp chia seeds + drizzle honey", kcal: 320, protein: 18, fiber: 7, nutrients: "Calcium, Omega-3, Vit C, Probiotics" },
          { meal: "Snack", time: "10 AM", short: "Boiled eggs + tomatoes", food: "2 boiled eggs + cherry tomatoes + black pepper", kcal: 190, protein: 14, fiber: 1, nutrients: "B12, Biotin, Vit C" },
          { meal: "Lunch", time: "1 PM", short: "Chickpea-paneer salad", food: "1/2 cup chickpeas (from Sunday's batch) + 40g paneer (from Sunday's batch) + cucumber, cherry tomato, olives, mixed greens + lemon-olive oil dressing", kcal: 540, protein: 30, fiber: 10, nutrients: "Iron, Folate, Calcium, Fibre" },
          { meal: "Snack", time: "4 PM", short: "Apple + almonds", food: "1 apple + 12 almonds", kcal: 175, protein: 6, fiber: 4, nutrients: "Vit E, Magnesium, Potassium" },
          { meal: "Dinner", time: "7 PM", short: "Miso salmon + quinoa", food: "Miso-glazed wild-caught salmon (130g, 200°C 12-14 min) + roasted zucchini & capsicum + 1/3 cup quinoa", kcal: 430, protein: 32, fiber: 6, nutrients: "Omega-3, B12, Potassium, Vit A" },
        ],
        tip: "Both batches (chickpea and paneer) wind down today — this is their last appearance before Sunday's fresh cook — and the salmon just needs 12 minutes in the oven while the veg roasts alongside it.",
      },
      {
        dow: "sat", day: "Saturday", emoji: "💪", title: "Long Run — Chicken Power Bowl",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Scrambled eggs + avocado toast", food: "2 scrambled eggs + 1 slice whole grain toast + 1/4 avocado + small OJ", kcal: 340, protein: 18, fiber: 6, nutrients: "B12, Vit C, Folate, Potassium" },
          { meal: "Pre-Run", time: "9 AM", short: "Banana + peanut butter", food: "1 banana + 1 tbsp peanut butter", kcal: 190, protein: 5, fiber: 3, nutrients: "Potassium, Magnesium — fast fuel" },
          { meal: "Post-Run", time: "12 PM", short: "Gochugaru chicken power bowl", food: "Recovery bowl: 150g gochugaru chicken (from Sunday's batch) + 1/2 cup quinoa + roasted sweet potato + spinach + sesame-lime dressing", kcal: 560, protein: 40, fiber: 9, nutrients: "B12, Vit A, Iron, Potassium" },
          { meal: "Snack", time: "4 PM", short: "Apple + pumpkin seeds", food: "1 apple + 2 tbsp roasted pumpkin seeds", kcal: 185, protein: 7, fiber: 5, nutrients: "Zinc, Magnesium, Fibre" },
          { meal: "Dinner", time: "7 PM", short: "Grilled king fish + rice", food: "Grilled king fish (130g, herb-lemon chimichurri: coriander, garlic, olive oil) + brown rice (1/3 cup) + sauteed greens", kcal: 440, protein: 33, fiber: 6, nutrients: "Omega-3, B12, Potassium, Iron" },
        ],
        tip: "The long run earns the day's highest calories — eat the post-run bowl within 60-90 min of finishing, and this is the chicken batch's third and final appearance this week.",
      },
      {
        dow: "sun", day: "Sunday", emoji: "📦", title: "Meal Prep — Batch Cook Day",
        meals: [
          { meal: "Breakfast", time: "9 AM", short: "Smoothie bowl", food: "Smoothie bowl: 150g Greek yogurt + frozen berries + banana + 1 tbsp chia seeds + 2 tbsp granola", kcal: 390, protein: 22, fiber: 7, nutrients: "Calcium, Omega-3, Potassium, Vit C" },
          { meal: "Snack", time: "11 AM", short: "Boiled eggs + celery", food: "2 boiled eggs + celery sticks + 1 tsp peanut butter", kcal: 220, protein: 15, fiber: 2, nutrients: "B12, Zinc, Magnesium, Biotin" },
          { meal: "Lunch", time: "1 PM", short: "Chickpea-paneer salad", food: "1/2 cup chickpeas (from today's batch) + 40g paneer (from today's batch) + mixed greens, cucumber, cherry tomatoes, capsicum + lemon-olive oil dressing", kcal: 470, protein: 27, fiber: 10, nutrients: "B12, Iron, Folate, Vit C" },
          { meal: "Snack", time: "4 PM", short: "Apple + almonds + tea", food: "1 apple + 10 almonds + green tea", kcal: 170, protein: 6, fiber: 4, nutrients: "Magnesium, Potassium, Vit E" },
          { meal: "Dinner", time: "7 PM", short: "Dal & veg soup", food: "Dal & veg soup: last of today's South Indian dal batch (1 cup) thinned with veg broth + spinach + a squeeze of lemon", kcal: 400, protein: 21, fiber: 6, nutrients: "Iron, Folate, Fibre, Potassium" },
        ],
        tip: "Today's the big batch-cook — rajma, gochugaru chicken, South Indian dal, paneer, and chickpeas all get made this morning, and tonight's soup uses the last of the dal so nothing goes to waste.",
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
          "Chicken breast 450g",
          "Paneer 180g",
          "Tilapia fillet 110g",
          "Wild-caught salmon fillet 130g",
          "King fish fillet 130g",
          "Eggs (18, or 1.5 dozen)",
          "Greek yogurt (5 x 150g pots)",
          "Low-fat plain curd (Indian-style) 400g tub",
        ],
      },
      {
        name: "Legumes & Cans",
        items: [
          "Kidney beans / rajma (2 cans, or 1 cup dried, soaked overnight)",
          "Chickpeas (1.5 cans, or 3/4 cup dried)",
          "Toor dal or moong dal, for sambar/paruppu (South Indian dal mix) 150g",
          "Moong dal, for cheela batter 100g",
          "Crushed tomatoes (1 small can)",
        ],
      },
      {
        name: "Grains & Wraps",
        items: [
          "Brown rice 300g (1.5 cups dry)",
          "Quinoa 130g (3/4 cup dry)",
          "Ragi (finger millet) flour or store-bought dosa batter 400g",
          "Whole wheat tortillas/wraps (2)",
          "Whole wheat soba noodles, small pack",
          "Whole wheat flour (atta) or store-bought rotis (4-5)",
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
          "Capsicum, mixed colors (2)",
          "Carrots (6)",
          "Cherry tomatoes (2 punnets)",
          "Tomatoes (6, for gravies/masala)",
          "Cucumber (5)",
          "Zucchini (1)",
          "Cabbage, small (for poriyal)",
          "Green beans 150g (for poriyal)",
          "Bok choy (1 bunch)",
          "Celery (1 bunch)",
          "Mixed salad greens/lettuce, 1 bag",
          "Red onion (4)",
          "Brown onion (3)",
          "Garlic (2 bulbs)",
          "Fresh ginger (1 piece)",
          "Green chillies (3)",
          "Curry leaves (1 sprig)",
          "Scallions/spring onion (1 bunch)",
          "Fresh coriander (1 bunch)",
          "Fresh mint (1 bunch)",
          "Fresh or frozen grated coconut, small pack (for chutney)",
          "Avocado (1)",
          "Olives, small jar (for Friday's salad)",
        ],
      },
      {
        name: "Fruits",
        items: [
          "Berries 200g (fresh or frozen)",
          "Mango (1, or extra berries)",
          "Bananas (5)",
          "Apples (5)",
          "Orange (1)",
          "Lemon (7)",
        ],
      },
      {
        name: "Fats & Extras",
        items: [
          "Extra virgin olive oil",
          "Sesame oil",
          "Almonds 100g",
          "Walnuts 60g",
          "Pumpkin seeds 60g",
          "Chia seeds 60g",
          "Peanut butter (natural, larger jar — used in snacks)",
          "Honey",
          "Low-sodium soy sauce",
          "White or yellow miso paste, small tub",
          "Sesame seeds (garnish)",
        ],
      },
      {
        name: "Spices — check cupboard first",
        items: [
          "Cumin",
          "Coriander powder",
          "Garam masala",
          "Turmeric",
          "Chaat masala",
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
    note: "Sunday, ~90 minutes total. Start steps 1, 2, 3, 5 and 8 at the same time — the timings below are built around that. Moong dal cheela batter (step 6) can be ground now and keeps refrigerated 3-4 days.",
    multitask: "Rajma cook (step 1, hob) + gochugaru chicken marinate & grill (step 2, oven/pan) + South Indian dal batch (step 3, hob 25 min) + chickpea boil (step 5, second hob) + eggs (step 8, small pot) all start together. Paneer (step 4) goes in a pan once the chicken is resting. The moong dal cheela batter (step 6) blends in the gaps once the blender's free. Brown rice & quinoa (step 7) go on once the rajma is simmering steadily. Miso-ginger sauce (step 9), fish portioning (step 10), aromatics chopping (step 11), and final portioning (step 12) fill the gaps while everything simmers.",
    steps: [
      { num: 1, task: "Rajma (Kidney Bean) Batch", how: "Cook 2 cans (or 1 cup dried, soaked overnight) kidney beans in a tomato-onion masala, 20-25 min, makes ~3 cups. Split: 1.5 cups saucy for Monday's rajma chawal, 1 cup thinned with water/stock for Wednesday's dinner soup, 0.5 cup drained plain for Thursday's rajma chaat snack. Covers Mon lunch + Wed dinner + Thu snack.", timing: "0-25 min" },
      { num: 2, task: "Gochugaru Chicken Batch — Marinate, Grill, Split 3 Ways", how: "Marinate 450g chicken breast in gochugaru + soy sauce + grated garlic + ginger + a little honey + sesame oil, 20 min. Grill/bake (200°C 18-20 min or pan 12-15 min), then split: 130g for Tuesday's rice bowl, 110g for Wednesday's wrap, 150g for Saturday's post-run power bowl — same chicken, three different formats. Covers Tue lunch + Wed lunch + Sat post-run.", timing: "0-30 min" },
      { num: 3, task: "South Indian Dal Batch (Sambar + Paruppu)", how: "Cook 150g toor/moong dal with carrot, a veg of choice, tamarind, and sambar powder, 20-25 min, makes ~3.5 cups. Keep it thin for soup/sambar: 1 cup for Wed's post-run soup, 3/4 cup for Thu breakfast sambar. Simmer the rest down thicker with a fresh mustard-cumin-curry leaf tempering for Thursday's paruppu (3/4 cup) — leaves ~1 cup thin extra for Sunday's dinner soup. Covers Wed post-run + Thu breakfast + Thu dinner + Sun dinner.", timing: "0-25 min" },
      { num: 4, task: "Paneer Batch", how: "Cube 180g paneer, pan-sear lightly with turmeric and chilli powder, minimal oil, ~5 min. Bag 70g for Thursday's poriyal, 40g for Friday's salad, 40g for Sunday's salad. Covers Thu lunch + Fri lunch + Sun lunch.", timing: "5-10 min" },
      { num: 5, task: "Chickpea Batch", how: "Boil 1.5 cans (or 3/4 cup dried, soaked) chickpeas plain, makes ~2 cups. Set aside: 1/2 cup air-fried crisp with chaat masala for Monday's roasted-chana snack, 3/4 cup plain for Friday's salad, 3/4 cup plain for Sunday's salad. Covers Mon snack + Fri lunch + Sun lunch.", timing: "0-25 min" },
      { num: 6, task: "Moong Dal Cheela Batter", how: "Soak 100g moong dal for a few hours, then blend with a little ginger, green chilli, and cumin into a smooth batter. Keeps refrigerated 3-4 days. Covers Wed breakfast only.", timing: "5 min blend (plus soak time)" },
      { num: 7, task: "Brown Rice + Quinoa", how: "Cook 1.5 cups dry brown rice (30 min) for Mon/Tue/Thu/Sat/Wed portions. Separately cook 3/4 cup dry quinoa (15 min) for Fri + Sat.", timing: "0-30 min" },
      { num: 8, task: "Boil Eggs", how: "8 eggs, cold water start, boil 9 min, then ice bath. Peel 7. Covers Wed breakfast + dinner, Thu breakfast, Fri snack, Sun snack (Mon's, Tue's and Sat's eggs are cooked fresh, not part of this batch).", timing: "10-20 min" },
      { num: 9, task: "Miso-Ginger Sauce (small jar)", how: "Mix 3 tbsp miso paste + grated ginger + lemon juice + a little honey + a splash of water to loosen. Used for Tuesday's baked tilapia glaze and Friday's salmon glaze — split into two small portions before use so each fish gets a fresh coat.", timing: "3 min" },
      { num: 10, task: "Portion Fish for the Week", how: "Pat dry and portion the tilapia (Tue, 110g) and salmon (Fri, 130g) and king fish (Sat, 130g) into individual bags. Refrigerate what you'll use in 1-2 days, freeze the rest and move it to the fridge the night before to thaw — fish is best cooked fresh each day, not pre-cooked.", timing: "5 min" },
      { num: 11, task: "Chop & Portion Aromatics", how: "Mince a batch of ginger and garlic, slice onions, wash and chop spinach + coriander + mint + scallions + bok choy + green beans/cabbage for poriyal. Portion into small containers so weeknight cooking is just assembly.", timing: "10 min" },
      { num: 12, task: "Portion + Label", how: "Pack what you can into lunch containers, snack bags (almonds/walnuts + 1 fruit per day). Rajma, dal, and chickpea batches go into labeled containers on one fridge shelf; the miso-ginger sauce jar and coconut chutney go in the door.", timing: "10 min" },
    ],
    newIngredients: [
      { name: "Gochugaru (Korean red chilli flakes)", note: "Used in this week's chicken marinade — coarser and a little sweeter/smokier than regular chilli powder, milder heat than it looks. Sold at Korean/Asian grocers or online; if you can't find it, a mix of paprika + a pinch of cayenne is a reasonable stand-in." },
      { name: "Miso paste", note: "A fermented soybean paste used this week as a quick glaze for the tilapia and salmon — salty-savoury (umami), a little goes a long way. White/yellow miso is milder than red miso; sold at most supermarkets in the Asian aisle or at Asian grocers, keeps for months in the fridge." },
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
