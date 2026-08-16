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
  weeklyFocus: "No check-in reply came through this week so there's nothing specific to flag — keep the Wednesday/Saturday runs easy and consistent, and just tell me how the week actually went next Friday so this note can speak to it instead of staying general.",

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
        dow: "mon", day: "Monday", emoji: "🫓", title: "North Indian Protein Day",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Paneer bhurji", food: "Paneer bhurji: 100g grated paneer scrambled with onion, tomato, ginger, green chilli, turmeric, cumin, coriander + 1 multigrain roti", kcal: 350, protein: 23, fiber: 5, nutrients: "Calcium, Iron, Vit A, Vit C" },
          { meal: "Snack", time: "10 AM", short: "Chana chaat + curd", food: "Roasted chana chaat: 40g roasted chana + cucumber + tomato + onion + chaat masala + lemon, side of 100g low-fat curd", kcal: 190, protein: 13, fiber: 6, nutrients: "Folate, Iron, Vit C, Probiotics" },
          { meal: "Lunch", time: "1 PM", short: "Tandoori chicken + rajma", food: "Tandoori chicken tikka (130g, yogurt-marinated, grilled not fried) + light rajma curry (1/2 cup, tomato-onion base, no cream) + cucumber-onion salad + 1 small roti", kcal: 500, protein: 42, fiber: 8, nutrients: "Iron, B12, Potassium, Folate" },
          { meal: "Snack", time: "4 PM", short: "Apple + almonds", food: "Apple + 12 almonds", kcal: 180, protein: 5, fiber: 4, nutrients: "Vit E, Magnesium, Potassium" },
          { meal: "Dinner", time: "7 PM", short: "Chana masala + palak", food: "Chana masala (light tomato-onion gravy, no cream) 1 cup + sauteed palak (spinach) + 1/3 cup brown rice", kcal: 420, protein: 18, fiber: 12, nutrients: "Iron, Folate, Vit A, Fibre" },
        ],
        tip: "Marinate the tandoori chicken (yogurt + tandoori spices + lemon) the night before or first thing this morning — 20 min is the minimum, but a few hours gets you better flavour with zero extra effort at lunch.",
      },
      {
        dow: "tue", day: "Tuesday", emoji: "🌶️", title: "Gochugaru Tofu Bowl",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Veggie egg scramble", food: "2 whole eggs + 1 egg white scrambled with scallion, mushroom, spinach + 1 slice whole grain toast + green tea", kcal: 330, protein: 23, fiber: 4, nutrients: "B12, Biotin, Iron, Folate" },
          { meal: "Snack", time: "10 AM", short: "Yogurt + kiwi + chia", food: "150g Greek yogurt + 1 kiwi + 1 tsp chia seeds", kcal: 180, protein: 14, fiber: 5, nutrients: "Calcium, Vit C, Omega-3" },
          { meal: "Lunch", time: "1 PM", short: "Gochugaru tofu stir-fry", food: "Gochugaru tofu & veg stir-fry: 150g firm tofu pan-seared + broccoli + carrot + snap peas + gochugaru-soy-sesame sauce + 1/2 cup brown rice", kcal: 530, protein: 28, fiber: 10, nutrients: "Iron, Calcium, Zinc, Vit C" },
          { meal: "Snack", time: "4 PM", short: "Banana + walnuts", food: "1 banana + 8 walnuts", kcal: 190, protein: 4, fiber: 4, nutrients: "Omega-3, Potassium, Magnesium" },
          { meal: "Dinner", time: "7 PM", short: "Miso-glazed salmon", food: "Miso-glazed wild salmon (110g, pan-seared) + steamed bok choy + 1/3 cup brown rice + sesame seeds", kcal: 420, protein: 32, fiber: 5, nutrients: "Omega-3, B12, Vit A, Calcium" },
        ],
        tip: "Gochugaru sauce (1 tbsp gochugaru + soy + sesame oil + garlic + a touch of honey) keeps 5 days refrigerated — double the batch Sunday and it covers today's stir-fry plus Saturday's fish glaze.",
      },
      {
        dow: "wed", day: "Wednesday", emoji: "🏃‍♀️", title: "Run Day — Idli-Sambar Fuel",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Idli + sambar", food: "3 steamed idlis (no oil) + sambar (1 cup, moong/toor dal + veg) + coconut chutney (1 tbsp)", kcal: 380, protein: 16, fiber: 8, nutrients: "Folate, Iron, Fibre, Vit C" },
          { meal: "Pre-Run", time: "11 AM", short: "Banana + curd", food: "1 banana + 150g low-fat curd", kcal: 200, protein: 9, fiber: 3, nutrients: "Potassium, Calcium — fast fuel" },
          { meal: "Lunch", time: "1 PM", short: "Grilled tilapia + lemon rice", food: "Grilled tilapia (150g, lemon-pepper, pan-seared) + lemon rice (3/4 cup) + cucumber salad", kcal: 550, protein: 43, fiber: 5, nutrients: "B12, Omega-3, Potassium, Vit C" },
          { meal: "Post-Run", time: "4 PM", short: "Yogurt + berries + chia", food: "150g Greek yogurt + mixed berries + 1 tbsp chia seeds", kcal: 210, protein: 14, fiber: 5, nutrients: "Calcium, Omega-3, Vit C" },
          { meal: "Dinner", time: "7 PM", short: "Moong dal chilla", food: "Moong dal chilla (2, savoury lentil crepes) + mint-coriander chutney + side salad", kcal: 400, protein: 20, fiber: 9, nutrients: "Iron, Folate, Fibre, Vit C" },
        ],
        tip: "Idli-sambar fuels the run without weighing you down — the dal in sambar gives slow-release carbs plus protein. Steam the idlis, no oil needed.",
      },
      {
        dow: "thu", day: "Thursday", emoji: "🥥", title: "South Indian Reset",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Dosa + egg + sambar", food: "1 plain dosa (fermented batter, non-stick pan) + sambar (3/4 cup) + 1 boiled egg + tomato chutney", kcal: 380, protein: 19, fiber: 6, nutrients: "Folate, Iron, B12, Fibre" },
          { meal: "Snack", time: "10 AM", short: "Yogurt + pumpkin seeds", food: "150g Greek yogurt + 1 tbsp pumpkin seeds", kcal: 190, protein: 15, fiber: 2, nutrients: "Calcium, Zinc, Probiotics" },
          { meal: "Lunch", time: "1 PM", short: "Moong dal + poriyal", food: "Moong dal (1 cup) + 1/3 cup brown rice + beans-carrot poriyal (mustard-curry leaf tempering, minimal oil) + cucumber raita", kcal: 460, protein: 25, fiber: 11, nutrients: "Iron, Folate, Fibre, Calcium" },
          { meal: "Snack", time: "4 PM", short: "Roasted chana + orange", food: "Roasted chana (30g) + 1 orange", kcal: 170, protein: 9, fiber: 5, nutrients: "Vit C, Folate, Iron" },
          { meal: "Dinner", time: "7 PM", short: "South-spiced tilapia + curd rice", food: "Pan-grilled South-spiced tilapia (130g, mustard seed-curry leaf-turmeric-lemon) + curd rice (3/4 cup, low-fat curd) + cucumber", kcal: 440, protein: 32, fiber: 4, nutrients: "Omega-3, B12, Calcium, Probiotics" },
        ],
        tip: "South Indian doesn't have to mean low-protein — the boiled egg with dosa and grilled fish at dinner keep today over 100g protein without any cream or deep-frying.",
      },
      {
        dow: "fri", day: "Friday", emoji: "🫒", title: "Mediterranean Salmon Plate",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Yogurt parfait", food: "150g Greek yogurt + 2 tbsp granola + berries + 1 tbsp chia seeds + drizzle honey", kcal: 290, protein: 16, fiber: 6, nutrients: "Calcium, Omega-3, Vit C, Probiotics" },
          { meal: "Snack", time: "10 AM", short: "Boiled eggs + tomatoes", food: "2 boiled eggs + cherry tomatoes + black pepper", kcal: 190, protein: 14, fiber: 1, nutrients: "B12, Biotin, Vit C" },
          { meal: "Lunch", time: "1 PM", short: "Chickpea + feta salad", food: "Mediterranean chickpea & feta salad: 140g chickpeas + cucumber + tomato + red onion + 30g feta + olive oil-lemon dressing + spinach base", kcal: 480, protein: 24, fiber: 12, nutrients: "Iron, Folate, Calcium, Fibre" },
          { meal: "Snack", time: "4 PM", short: "Apple + almonds", food: "Apple + 12 almonds", kcal: 180, protein: 5, fiber: 4, nutrients: "Vit E, Magnesium, Potassium" },
          { meal: "Dinner", time: "7 PM", short: "Baked salmon + quinoa", food: "Baked wild salmon (150g, lemon-herb-garlic) + roasted zucchini & capsicum + 1/3 cup quinoa", kcal: 510, protein: 41, fiber: 5, nutrients: "Omega-3, B12, Potassium, Vit C" },
        ],
        tip: "Baked salmon at 200°C for 12-14 min is foolproof — pat it dry and salt it 10 min ahead so it sears instead of steaming, and it's done as soon as it flakes easily.",
      },
      {
        dow: "sat", day: "Saturday", emoji: "💪", title: "Long Run Day — Chicken Power Bowl",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Scrambled eggs + avocado toast", food: "2 scrambled eggs + 1 slice whole grain toast + 1/4 avocado + small OJ", kcal: 380, protein: 18, fiber: 6, nutrients: "B12, Vit C, Folate, Potassium" },
          { meal: "Pre-Run", time: "9 AM", short: "Banana + peanut butter", food: "1 banana + 1 tbsp peanut butter", kcal: 195, protein: 5, fiber: 3, nutrients: "Potassium, Magnesium — fast fuel" },
          { meal: "Post-Run", time: "12 PM", short: "Chicken quinoa power bowl", food: "Recovery power bowl: 120g grilled chicken + 1/2 cup quinoa + roasted sweet potato + spinach + pumpkin seeds + olive oil + lemon", kcal: 555, protein: 40, fiber: 9, nutrients: "B12, Vit A, Iron, Zinc, all amino acids" },
          { meal: "Snack", time: "4 PM", short: "Yogurt + mango + chia", food: "150g Greek yogurt + mango chunks + 1 tbsp chia seeds", kcal: 220, protein: 15, fiber: 4, nutrients: "Calcium, Omega-3, Vit C" },
          { meal: "Dinner", time: "7 PM", short: "Gochugaru king fish", food: "Gochugaru king fish (130g, pan-seared) + brown rice (1/3 cup) + sauteed bok choy + sesame", kcal: 460, protein: 33, fiber: 7, nutrients: "Omega-3, B12, Calcium, Iron" },
        ],
        tip: "The long run earns the highest-calorie day on the plan — eating the post-run bowl within 60-90 min of finishing matters more for recovery than hitting an exact macro number.",
      },
      {
        dow: "sun", day: "Sunday", emoji: "📦", title: "Meal Prep Day — Light + Easy",
        meals: [
          { meal: "Breakfast", time: "9 AM", short: "Smoothie bowl", food: "Smoothie bowl: 150g Greek yogurt + frozen berries + banana + 1 tbsp chia seeds + 2 tbsp granola", kcal: 400, protein: 17, fiber: 7, nutrients: "Calcium, Omega-3, Potassium, Vit C" },
          { meal: "Snack", time: "11 AM", short: "Boiled eggs + celery", food: "3 boiled eggs + celery + 1 tsp peanut butter", kcal: 260, protein: 21, fiber: 2, nutrients: "B12, Zinc, Magnesium, Biotin" },
          { meal: "Lunch", time: "1 PM", short: "Simple chicken salad", food: "Simple grilled chicken salad: 140g grilled chicken + spinach + cucumber + cherry tomatoes + capsicum + lemon-olive oil + pumpkin seeds", kcal: 425, protein: 44, fiber: 5, nutrients: "B12, Iron, Folate, Vit C" },
          { meal: "Snack", time: "4 PM", short: "Apple + almonds + tea", food: "Apple + 10 almonds + green tea", kcal: 165, protein: 3, fiber: 4, nutrients: "Magnesium, Potassium, Vit E" },
          { meal: "Dinner", time: "7 PM", short: "Spiced lentil soup", food: "Spiced lentil soup: 80g red lentils + carrot + spinach + tomato + cumin + turmeric + garlic + lemon + 1 slice rye bread", kcal: 380, protein: 20, fiber: 11, nutrients: "Iron, Folate, Fibre, Vit A" },
        ],
        tip: "Everything today doubles as prep for the week ahead — the extra grilled chicken and lentil soup portions go straight into Monday's and Thursday's containers while you cook.",
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
          "Firm tofu 150g",
          "Paneer 100g",
          "Tilapia fillets 300g",
          "Wild-caught salmon fillet 150g",
          "King fish fillet 130g",
          "Eggs (15)",
          "Greek yogurt (6 x 150g pots)",
          "Low-fat plain curd (Indian-style) 500g tub",
          "Feta cheese 40g",
        ],
      },
      {
        name: "Legumes & Cans",
        items: [
          "Rajma / kidney beans (1 can or 1 cup dried)",
          "Chickpeas (2 cans)",
          "Moong dal 250g",
          "Toor dal (or sambar dal mix) 150g",
          "Red lentils (masoor) 100g",
          "Crushed tomatoes (1 small can)",
        ],
      },
      {
        name: "Grains & Wraps",
        items: [
          "Brown rice 1kg",
          "Quinoa 200g",
          "Idli/dosa batter (store-bought, or rice + urad dal to ferment) 500g",
          "Whole wheat flour (atta) 500g",
          "Whole grain bread (small loaf)",
          "Rye bread (few slices)",
          "Granola (small pack)",
        ],
      },
      {
        name: "Vegetables",
        items: [
          "Baby spinach 400g",
          "Broccoli (1 head)",
          "Sweet potatoes (3)",
          "Capsicum, red + yellow (3)",
          "Carrots (5)",
          "Cherry tomatoes (2 punnets)",
          "Tomatoes (5, for gravies)",
          "Cucumber (3)",
          "Zucchini (2)",
          "Bok choy (1 bunch)",
          "Snap peas 150g",
          "Green beans or cabbage (for poriyal, small)",
          "Celery (1 bunch)",
          "Red onion (4)",
          "Brown onion (2)",
          "Garlic (2 bulbs)",
          "Fresh ginger (1 piece)",
          "Green chillies (4)",
          "Curry leaves (1 sprig)",
          "Fresh coriander (1 bunch)",
          "Fresh mint (1 bunch)",
        ],
      },
      {
        name: "Fruits",
        items: [
          "Berries 300g (fresh or frozen)",
          "Bananas (5)",
          "Apples (4)",
          "Kiwi (1)",
          "Mango (1)",
          "Oranges (2)",
          "Lemon (5)",
        ],
      },
      {
        name: "Fats & Extras",
        items: [
          "Extra virgin olive oil",
          "Avocado (1)",
          "Almonds 100g",
          "Walnuts 80g",
          "Pumpkin seeds 100g",
          "Chia seeds 100g",
          "Peanut butter (natural)",
          "Honey",
          "Sesame oil",
          "Low-sodium soy sauce",
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
          "Paprika",
          "Chaat masala",
          "Mustard seeds",
          "Sambar powder",
          "Tamarind (small block or paste)",
          "Gochugaru (or regular chilli powder)",
          "Ginger-garlic paste",
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
    note: "Sunday, ~90 minutes total. Start steps 1, 2, 3 and 5 at the same time — the timings below are built around that.",
    multitask: "Rajma + chana masala (step 1, hob ~30 min) + tandoori chicken (step 2, oven/pan) + moong dal & sambar (step 4, hob 25 min) + brown rice & quinoa (step 7, hob 30 min) all start together. Plain chicken (step 3) goes in the oven once the tandoori batch comes out. Roast veg & poriyal (step 5) go in after. Eggs (step 6) boil on a free burner. Sauce jar (step 8), fish portioning (step 10), and chopping (step 9) fill the gaps while things simmer.",
    steps: [
      { num: 1, task: "Rajma & Chana Masala Batch", how: "Rajma: 1 cup dried (or 1 can) kidney beans simmered in a tomato-onion-ginger-garlic base with cumin, turmeric, garam masala, no cream, 25 min. Chana masala: 1 can chickpeas in a separate tomato-onion base with cumin + garam masala, 15 min. Covers Mon lunch + Mon dinner.", timing: "0-30 min" },
      { num: 2, task: "Tandoori Chicken Marinate & Grill", how: "130g chicken breast in low-fat yogurt + paprika + cumin + garam masala + ginger-garlic paste + lemon, marinate 20 min minimum. Pan-grill or oven 200°C 18-20 min until charred at the edges. Covers Mon lunch.", timing: "0-25 min" },
      { num: 3, task: "Plain Grilled Chicken Batch", how: "Season 260g chicken breast with olive oil, garlic, lemon, salt, pepper. Bake 200°C 20 min. Covers Sat post-run bowl + Sun lunch salad.", timing: "0-22 min" },
      { num: 4, task: "Moong Dal + Sambar", how: "Cook 200g moong dal with turmeric + garlic + salt, 20 min, for Thu lunch (tempered with mustard seeds + curry leaves before serving). Separately cook sambar dal (toor/moong mix) with carrot + a veg of choice, tamarind, and sambar powder. Covers Wed + Thu breakfasts.", timing: "0-25 min" },
      { num: 5, task: "Roast Veg + Poriyal Veg", how: "Roast sweet potato + zucchini + capsicum (olive oil, salt, herbs, 200°C, 20 min) for Fri + Sat dinners. Separately saute chopped beans or cabbage with mustard seed-curry leaf tempering for Thu's poriyal.", timing: "5-25 min" },
      { num: 6, task: "Boil Eggs", how: "10-11 eggs, cold water start, boil 9 min, then ice bath. Peel 8-9. Covers Thu breakfast, Fri snack, Sat breakfast, Sun snack.", timing: "10-20 min" },
      { num: 7, task: "Brown Rice + Quinoa", how: "Cook 1.5 cups brown rice (30 min) for Mon/Wed/Thu/Sat/Tue portions. Separately cook 3/4 cup quinoa (15 min) for Fri + Sat.", timing: "0-30 min" },
      { num: 8, task: "Gochugaru-Sesame Sauce (jar)", how: "Mix 2 tbsp gochugaru + 2 tbsp low-sodium soy sauce + 2 tsp sesame oil + 1 clove grated garlic + 1 tsp honey. Shake in a jar. Covers Tue's stir-fry + Sat's fish glaze.", timing: "3 min" },
      { num: 9, task: "Chop & Portion Aromatics", how: "Mince a batch of ginger and garlic, slice onions, wash and chop spinach + coriander + mint. Portion into small containers so weeknight cooking is just assembly.", timing: "10 min" },
      { num: 10, task: "Portion Fish for the Week", how: "Pat dry and portion the tilapia (Wed + Thu), salmon (Fri), and king fish (Sat) into individual bags. Refrigerate what you'll use in 1-2 days, freeze the rest and move it to the fridge the night before to thaw — fish is best cooked fresh each day, not pre-cooked.", timing: "5 min" },
      { num: 11, task: "Portion + Label", how: "Pack what you can into lunch containers, snack bags (almonds/walnuts + 1 fruit per day). Rajma, chana, and dal batches go into labeled containers on one fridge shelf; the gochugaru sauce jar goes in the door.", timing: "10 min" },
    ],
    newIngredients: [],
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
