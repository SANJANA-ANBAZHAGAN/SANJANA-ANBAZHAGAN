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
  weeklyFocus: "No check-in reply came through this week either, so nothing specific to adjust — keep the Wednesday/Saturday runs easy and the strength split steady as planned, and drop a line anytime on how training actually felt so next Friday's note can be specific again.",

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
        dow: "mon", day: "Monday", emoji: "🥥", title: "Sambar & Rajma Day",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Ragi dosa + sambar", food: "2 ragi dosas (fermented ragi-rice batter, non-stick pan, no oil) + sambar (3/4 cup, from Sunday batch) + coconut chutney (1 tbsp)", kcal: 340, protein: 20, fiber: 6, nutrients: "Calcium, Iron, Fibre, Folate" },
          { meal: "Snack", time: "10 AM", short: "Sprout chaat + curd", food: "Sprouted moong-cucumber chaat: 40g sprouted moong + cucumber + lemon + chaat masala, side of 100g low-fat curd", kcal: 185, protein: 13, fiber: 5, nutrients: "Folate, Probiotics, Vit C, Iron" },
          { meal: "Lunch", time: "1 PM", short: "Chettinad chicken + lemon rice", food: "Chettinad-spiced grilled chicken (150g, from Sunday's batch, tossed with black pepper-curry leaf masala) + lemon rice (3/4 cup) + cucumber-onion salad", kcal: 520, protein: 42, fiber: 8, nutrients: "B12, Potassium, Iron, Vit C" },
          { meal: "Snack", time: "4 PM", short: "Orange + almonds", food: "1 orange + 12 almonds", kcal: 175, protein: 7, fiber: 4, nutrients: "Vit C, Vit E, Magnesium" },
          { meal: "Dinner", time: "7 PM", short: "Rajma + poriyal", food: "Rajma (1 cup, from Sunday's batch, tomato-onion base, no cream) + 1/3 cup brown rice + cabbage-carrot poriyal (mustard-curry leaf tempering, minimal oil)", kcal: 400, protein: 22, fiber: 11, nutrients: "Iron, Folate, Fibre, Vit A" },
        ],
        tip: "Both the sambar and rajma come straight off Sunday's stove — reheating is the only 'cooking' either one needs today, so this is your lowest-effort day of the week.",
      },
      {
        dow: "tue", day: "Tuesday", emoji: "🌶️", title: "Gochugaru Tofu & Miso",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Veggie egg scramble", food: "2 whole eggs + 1 egg white scrambled with scallion, mushroom, spinach + 1 slice whole grain toast", kcal: 330, protein: 26, fiber: 4, nutrients: "B12, Biotin, Iron, Folate" },
          { meal: "Snack", time: "10 AM", short: "Yogurt + pineapple", food: "150g Greek yogurt + pineapple chunks + 1 tsp chia seeds", kcal: 170, protein: 14, fiber: 3, nutrients: "Calcium, Vit C, Omega-3" },
          { meal: "Lunch", time: "1 PM", short: "Gochugaru tofu stir-fry", food: "Gochugaru tofu & veg stir-fry: 150g pan-seared tofu (from Sunday's batch) + broccoli + carrot + snap peas + gochugaru-soy-sesame sauce + 1/2 cup brown rice", kcal: 520, protein: 27, fiber: 12, nutrients: "Iron, Calcium, Zinc, Vit C" },
          { meal: "Snack", time: "4 PM", short: "Banana + walnuts", food: "1 banana + 8 walnuts", kcal: 190, protein: 5, fiber: 4, nutrients: "Omega-3, Potassium, Magnesium" },
          { meal: "Dinner", time: "7 PM", short: "Miso salmon + bok choy", food: "Miso-glazed wild salmon (120g, pan-seared, from Sunday's miso-ginger sauce jar) + steamed bok choy + 1/3 cup quinoa + sesame seeds", kcal: 410, protein: 32, fiber: 6, nutrients: "Omega-3, B12, Calcium, Vit A" },
        ],
        tip: "The gochugaru sauce and the miso-ginger glaze are two separate small jars from Sunday — five minutes of mixing then covers both today's stir-fry and tonight's salmon.",
      },
      {
        dow: "wed", day: "Wednesday", emoji: "🏃‍♀️", title: "Run Day — Sambar Fuel",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Ragi idli + sambar", food: "3 steamed ragi idlis (no oil) + sambar (1 cup, from Sunday's batch) + tomato chutney", kcal: 370, protein: 16, fiber: 8, nutrients: "Folate, Iron, Fibre, Calcium" },
          { meal: "Pre-Run", time: "11 AM", short: "Banana + curd", food: "1 banana + 150g low-fat curd", kcal: 200, protein: 9, fiber: 3, nutrients: "Potassium, Calcium — fast fuel" },
          { meal: "Lunch", time: "1 PM", short: "Grilled king fish + lemon rice", food: "Grilled king fish (140g, lemon-pepper, pan-seared) + lemon rice (3/4 cup) + cucumber-tomato salad", kcal: 540, protein: 44, fiber: 7, nutrients: "B12, Omega-3, Potassium, Vit C" },
          { meal: "Post-Run", time: "4 PM", short: "Yogurt + berries + chia", food: "150g Greek yogurt + mixed berries + 1 tbsp chia seeds", kcal: 210, protein: 14, fiber: 5, nutrients: "Calcium, Omega-3, Vit C" },
          { meal: "Dinner", time: "7 PM", short: "Gochugaru tofu lettuce wraps", food: "Gochugaru tofu lettuce wraps: 100g pan-seared tofu (from Sunday's batch) + shredded carrot + scallion + lettuce cups + gochugaru-sesame sauce + a few tbsp rice", kcal: 390, protein: 22, fiber: 6, nutrients: "Iron, Calcium, Zinc, Fibre" },
        ],
        tip: "Idli-sambar fuels the run without weighing you down, and the light tofu wraps at dinner mean nothing heavy to digest before bed after a run day.",
      },
      {
        dow: "thu", day: "Thursday", emoji: "🫓", title: "Rajma & Chana Comfort",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Paneer bhurji", food: "Paneer bhurji: 90g grated paneer scrambled with onion, tomato, ginger, green chilli, turmeric, cumin + 1 multigrain roti", kcal: 340, protein: 22, fiber: 5, nutrients: "Calcium, Iron, Vit A, Vit C" },
          { meal: "Snack", time: "10 AM", short: "Yogurt + pumpkin seeds", food: "150g Greek yogurt + 1 tbsp pumpkin seeds", kcal: 185, protein: 15, fiber: 3, nutrients: "Calcium, Zinc, Probiotics" },
          { meal: "Lunch", time: "1 PM", short: "Rajma chawal + egg", food: "Rajma (1 cup, from Sunday's batch) + 1/3 cup brown rice + 1 boiled egg + side salad", kcal: 520, protein: 34, fiber: 12, nutrients: "Iron, Folate, B12, Fibre" },
          { meal: "Snack", time: "4 PM", short: "Apple + almonds", food: "Apple + 10 almonds", kcal: 170, protein: 6, fiber: 4, nutrients: "Vit E, Magnesium, Potassium" },
          { meal: "Dinner", time: "7 PM", short: "Chana masala + palak", food: "Chana masala (1 cup, light tomato-onion gravy, no cream) + sauteed palak (spinach) + 1 small roti + side of low-fat curd", kcal: 410, protein: 28, fiber: 10, nutrients: "Iron, Folate, Vit A, Calcium" },
        ],
        tip: "Two North Indian classics today — rajma at lunch, chana at dinner — both light tomato-based gravies with zero cream, so neither one undoes the calorie budget.",
      },
      {
        dow: "fri", day: "Friday", emoji: "🫒", title: "Chicken Shawarma Bowl",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Yogurt parfait", food: "150g Greek yogurt + 2 tbsp granola + berries + 1 tbsp chia seeds + drizzle honey", kcal: 300, protein: 16, fiber: 6, nutrients: "Calcium, Omega-3, Vit C, Probiotics" },
          { meal: "Snack", time: "10 AM", short: "Boiled eggs + tomatoes", food: "2 boiled eggs + cherry tomatoes + black pepper", kcal: 190, protein: 14, fiber: 1, nutrients: "B12, Biotin, Vit C" },
          { meal: "Lunch", time: "1 PM", short: "Chicken shawarma bowl", food: "Shawarma-spiced grilled chicken (130g, from Sunday's batch) + 1/2 cup quinoa + cucumber-tomato-red onion + tahini-lemon dressing + pickled cabbage", kcal: 545, protein: 38, fiber: 12, nutrients: "B12, Iron, Folate, Fibre" },
          { meal: "Snack", time: "4 PM", short: "Apple + almonds", food: "Apple + 12 almonds", kcal: 175, protein: 6, fiber: 4, nutrients: "Vit E, Magnesium, Potassium" },
          { meal: "Dinner", time: "7 PM", short: "Baked tilapia + quinoa", food: "Baked tilapia (140g, lemon-herb-garlic, 200°C) + roasted zucchini & capsicum + 1/3 cup quinoa + side salad", kcal: 430, protein: 34, fiber: 7, nutrients: "Omega-3, B12, Potassium, Vit C" },
        ],
        tip: "The shawarma spice mix (cumin, paprika, garlic, lemon) is just a toss on Sunday's plain-grilled chicken portion — no separate cooking, just a different coat of spice.",
      },
      {
        dow: "sat", day: "Saturday", emoji: "💪", title: "Long Run — Miso Fish",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Scrambled eggs + avocado toast", food: "2 scrambled eggs + 1 slice whole grain toast + 1/4 avocado + small OJ", kcal: 340, protein: 18, fiber: 6, nutrients: "B12, Vit C, Folate, Potassium" },
          { meal: "Pre-Run", time: "9 AM", short: "Banana + peanut butter", food: "1 banana + 1 tbsp peanut butter", kcal: 190, protein: 5, fiber: 3, nutrients: "Potassium, Magnesium — fast fuel" },
          { meal: "Post-Run", time: "12 PM", short: "Chicken quinoa power bowl", food: "Recovery power bowl: 120g grilled chicken (from Sunday's batch) + 1/2 cup quinoa + roasted sweet potato + spinach + pumpkin seeds + olive oil + lemon", kcal: 540, protein: 38, fiber: 9, nutrients: "B12, Vit A, Iron, Zinc" },
          { meal: "Snack", time: "4 PM", short: "Yogurt + mango + chia", food: "150g Greek yogurt + mango chunks + 1 tbsp chia seeds", kcal: 210, protein: 14, fiber: 4, nutrients: "Calcium, Omega-3, Vit C" },
          { meal: "Dinner", time: "7 PM", short: "Miso king fish + bok choy", food: "Miso-glazed king fish (130g, pan-seared, from Sunday's sauce jar) + brown rice (1/3 cup) + sauteed bok choy + sesame seeds", kcal: 440, protein: 32, fiber: 6, nutrients: "Omega-3, B12, Calcium, Iron" },
        ],
        tip: "The long run earns the highest-calorie day on the plan — eating the post-run bowl within 60-90 min of finishing matters more for recovery than hitting an exact macro number.",
      },
      {
        dow: "sun", day: "Sunday", emoji: "📦", title: "Meal Prep — Tofu & Greens",
        meals: [
          { meal: "Breakfast", time: "9 AM", short: "Smoothie bowl", food: "Smoothie bowl: 150g Greek yogurt + frozen berries + banana + 1 tbsp chia seeds + 2 tbsp granola", kcal: 380, protein: 21, fiber: 7, nutrients: "Calcium, Omega-3, Potassium, Vit C" },
          { meal: "Snack", time: "11 AM", short: "Boiled eggs + celery", food: "2 boiled eggs + celery + 1 tsp peanut butter", kcal: 230, protein: 16, fiber: 2, nutrients: "B12, Zinc, Magnesium, Biotin" },
          { meal: "Lunch", time: "1 PM", short: "Grilled chicken salad", food: "Grilled chicken salad: 130g grilled chicken (from Sunday's batch) + mixed greens + cucumber + cherry tomatoes + capsicum + 2 tbsp chickpeas + lemon-olive oil dressing", kcal: 440, protein: 42, fiber: 8, nutrients: "B12, Iron, Folate, Vit C" },
          { meal: "Snack", time: "4 PM", short: "Apple + almonds + tea", food: "Apple + 10 almonds + green tea", kcal: 170, protein: 6, fiber: 4, nutrients: "Magnesium, Potassium, Vit E" },
          { meal: "Dinner", time: "7 PM", short: "Sambar soup + egg", food: "Sambar soup: 1 cup sambar (from today's batch, thinned with extra veg) + 1 boiled egg + 1 slice rye bread", kcal: 370, protein: 19, fiber: 9, nutrients: "Iron, Folate, Fibre, Vit A" },
        ],
        tip: "Today's the big batch-cook — the chicken, tofu, rajma, and sambar you make this morning are what turns Monday through Saturday into quick assembly instead of cooking from scratch every night.",
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
          "Chicken breast 550g",
          "Firm tofu 260g",
          "Paneer 90g",
          "Tilapia fillet 140g",
          "Wild-caught salmon fillet 120g",
          "King fish fillet 130g",
          "Eggs (12)",
          "Greek yogurt (5 x 150g pots)",
          "Low-fat plain curd (Indian-style) 400g tub",
        ],
      },
      {
        name: "Legumes & Cans",
        items: [
          "Rajma / kidney beans (1 cup dried or 2 cans)",
          "Chickpeas (1 can)",
          "Toor dal (or sambar dal mix) 150g",
          "Urad dal 50g (only if fermenting your own ragi batter)",
          "Crushed tomatoes (1 small can)",
        ],
      },
      {
        name: "Grains & Wraps",
        items: [
          "Brown rice 300g (1.5 cups dry)",
          "Quinoa 150g (3/4 cup dry)",
          "Ragi (finger millet) flour or store-bought ragi dosa/idli batter 500g",
          "Whole wheat flour (atta) 300g",
          "Whole grain bread (small loaf)",
          "Rye bread (few slices)",
          "Granola (small pack)",
        ],
      },
      {
        name: "Vegetables",
        items: [
          "Baby spinach 300g",
          "Broccoli (1 head)",
          "Sweet potato (1)",
          "Capsicum, red + yellow (2)",
          "Carrots (5)",
          "Cherry tomatoes (2 punnets)",
          "Tomatoes (5, for gravies)",
          "Cucumber (4)",
          "Zucchini (1)",
          "Bok choy (1 bunch)",
          "Snap peas 150g",
          "Cabbage, small (for poriyal)",
          "Lettuce, 1 small head (for tofu wraps)",
          "Celery (1 bunch)",
          "Red onion (4)",
          "Brown onion (2)",
          "Garlic (2 bulbs)",
          "Fresh ginger (1 piece)",
          "Green chillies (3)",
          "Curry leaves (1 sprig)",
          "Scallions/spring onion (1 bunch)",
          "Fresh coriander (1 bunch)",
          "Fresh mint (1 bunch)",
          "Avocado (1)",
        ],
      },
      {
        name: "Fruits",
        items: [
          "Berries 250g (fresh or frozen)",
          "Bananas (5)",
          "Apples (4)",
          "Orange (1)",
          "Mango (1)",
          "Pineapple, small (fresh or tinned in juice)",
          "Lemon (6)",
        ],
      },
      {
        name: "Fats & Extras",
        items: [
          "Extra virgin olive oil",
          "Sesame oil",
          "Almonds 100g",
          "Walnuts 80g",
          "Pumpkin seeds 60g",
          "Chia seeds 100g",
          "Peanut butter (natural)",
          "Tahini",
          "Honey",
          "Low-sodium soy sauce",
          "White or yellow miso paste (small tub)",
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
          "Black peppercorns (for Chettinad masala)",
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
    note: "Sunday, ~90 minutes total. Start steps 1, 2, 3, 4 and 7 at the same time — the timings below are built around that. Ragi batter (step 9) needs starting the night before if you're fermenting your own.",
    multitask: "Rajma (step 1, hob ~30 min) + chicken marinate & grill (step 2, oven/pan) + sambar/dal (step 3, hob 25 min) + chana masala (step 10, second burner, 15 min) all start together. Gochugaru tofu (step 4) goes in a pan once the chicken is resting. Both sauce jars (steps 5-6) mix in the gaps. Brown rice & quinoa (step 7) go on once the rajma is simmering steadily. Eggs (step 8) boil on a free burner. Aromatics chopping (step 11), fish portioning (step 12), and final portioning (step 13) fill the gaps while everything simmers.",
    steps: [
      { num: 1, task: "Rajma Batch", how: "1 cup dried (or 2 cans) kidney beans simmered in a tomato-onion-ginger-garlic base with cumin, turmeric, garam masala, no cream, 25 min, makes ~4 cups. Covers Mon dinner (1 cup) + Thu lunch (1 cup).", timing: "0-30 min" },
      { num: 2, task: "Chicken Batch — Marinate, Grill, Split 3 Ways", how: "Marinate 550g chicken breast in low-fat yogurt + lemon + ginger-garlic paste, 20 min. Grill/bake in batches (200°C 18-20 min or pan 12-15 min), then split: toss 150g in Chettinad black pepper-curry leaf masala for Mon lunch, toss 130g in shawarma spice (cumin, paprika, garlic) for Fri lunch, keep the remaining ~270g plain for Sat post-run bowl (120g) + Sun salad (130g), with a little buffer. Covers Mon lunch + Fri lunch + Sat post-run + Sun lunch.", timing: "0-30 min" },
      { num: 3, task: "Sambar / Dal Batch", how: "Cook 150g toor/sambar dal mix with carrot, a veg of choice, tamarind, and sambar powder, 20-25 min, makes ~3 cups. Covers Mon breakfast (3/4 cup) + Wed breakfast (1 cup) + Sun dinner soup (1 cup).", timing: "0-25 min" },
      { num: 4, task: "Gochugaru Tofu Batch", how: "Pan-sear 260g firm tofu cubes in a gochugaru-soy-sesame marinade until crisp-edged, ~10 min. Split: 150g for Tue's stir-fry, 100g reserved for Wed's lettuce wraps (toss with a little extra sauce fresh that evening). Covers Tue lunch + Wed dinner.", timing: "10-20 min" },
      { num: 5, task: "Miso-Ginger Sauce (jar)", how: "Mix 3 tbsp miso paste + 1 tbsp grated ginger + 1 tbsp sesame oil + 1 tsp honey + a splash of water to loosen. Covers Tue's salmon glaze + Sat's king fish glaze.", timing: "3 min" },
      { num: 6, task: "Gochugaru-Sesame Sauce (jar)", how: "Mix 2 tbsp gochugaru + 2 tbsp low-sodium soy sauce + 2 tsp sesame oil + 1 clove grated garlic + 1 tsp honey. Shake in a jar. Used in the tofu batch (step 4) and for tossing Tue's stir-fry veg + Wed's wrap filling.", timing: "3 min" },
      { num: 7, task: "Brown Rice + Quinoa", how: "Cook 1.5 cups dry brown rice (30 min) for Mon/Tue/Wed/Thu/Sat/Sun portions. Separately cook 3/4 cup dry quinoa (15 min) for Fri + Sat.", timing: "0-30 min" },
      { num: 8, task: "Boil Eggs", how: "9 eggs, cold water start, boil 9 min, then ice bath. Peel 6-7. Covers Thu lunch, Fri snack, Sun snack + Sun dinner.", timing: "10-20 min" },
      { num: 9, task: "Ragi Idli/Dosa Batter", how: "If fermenting your own: mix ragi flour + rice + urad dal, soak and ferment overnight Saturday so it's ready to steam/pan-cook Sunday evening for Monday's dosa and Wednesday's idli. Otherwise, buy a ready-made ragi dosa/idli batter pack — most Indian grocers stock it fresh or frozen. Covers Mon breakfast + Wed breakfast.", timing: "prep Sat night if fermenting, 5 min Sunday" },
      { num: 10, task: "Chana Masala", how: "1 can chickpeas simmered in a tomato-onion base with cumin + garam masala, 15 min. Set aside 2 tbsp for Sunday's salad garnish, the rest for Thu dinner. Covers Thu dinner + Sun lunch garnish.", timing: "15 min, runs alongside step 1" },
      { num: 11, task: "Chop & Portion Aromatics", how: "Mince a batch of ginger and garlic, slice onions, wash and chop spinach + coriander + mint + scallions. Portion into small containers so weeknight cooking is just assembly.", timing: "10 min" },
      { num: 12, task: "Portion Fish for the Week", how: "Pat dry and portion the wild salmon (Tue), tilapia (Fri), and king fish (Sat) into individual bags. Refrigerate what you'll use in 1-2 days, freeze the rest and move it to the fridge the night before to thaw — fish is best cooked fresh each day, not pre-cooked.", timing: "5 min" },
      { num: 13, task: "Portion + Label", how: "Pack what you can into lunch containers, snack bags (almonds/walnuts + 1 fruit per day). Rajma, sambar, and chana batches go into labeled containers on one fridge shelf; the miso and gochugaru sauce jars go in the door.", timing: "10 min" },
    ],
    newIngredients: [
      { name: "Ragi (finger millet) flour", note: "Used for dosa/idli batter Monday and Wednesday — higher in calcium and fibre than plain rice batter, with a mild nutty flavour. Buy pre-mixed ragi dosa/idli batter if you don't want to ferment your own; most Indian grocers stock it fresh or frozen." },
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
