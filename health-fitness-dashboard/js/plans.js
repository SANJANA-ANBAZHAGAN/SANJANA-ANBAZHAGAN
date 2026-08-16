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
  weeklyFocus: "Standing focus this week: hit your protein target most days, keep the Wednesday/Saturday runs on the 10K plan even if they're shorter than planned, and don't stress if the scale doesn't move — consistency is the goal, not perfection.",

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
        dow: "mon", day: "Monday", emoji: "🥢", title: "Tofu Scramble + Korean Tofu Bowl",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Tofu scramble", food: "150g firm tofu crumbled + turmeric + cumin + spinach + cherry tomatoes + 1 slice whole grain toast", kcal: 340, protein: 22, fiber: 5, nutrients: "Calcium, Iron, Vit C, Folate, Vit A" },
          { meal: "Snack", time: "10 AM", short: "Yogurt + chia + berries", food: "150g Greek yogurt + 1 tbsp chia seeds + berries + honey", kcal: 195, protein: 14, fiber: 4, nutrients: "Calcium, Omega-3, Zinc, Vit C" },
          { meal: "Lunch", time: "1 PM", short: "Korean tofu bowl", food: "Korean-style tofu bowl: 150g crispy tofu + 1/2 cup brown rice + shredded carrot + cucumber + spinach + gochujang-style sauce (gochugaru/chilli + soy + honey + sesame oil + garlic)", kcal: 510, protein: 24, fiber: 7, nutrients: "Calcium, Iron, Zinc, Potassium, Vit A" },
          { meal: "Snack", time: "4 PM", short: "Apple + almonds", food: "Apple + 15 almonds", kcal: 185, protein: 4, fiber: 5, nutrients: "Magnesium, Potassium, Vit E" },
          { meal: "Dinner", time: "7 PM", short: "Grilled chicken + sweet potato", food: "Grilled chicken (130g) + roasted sweet potato + steamed broccoli + garlic + olive oil + lemon", kcal: 460, protein: 40, fiber: 9, nutrients: "B12, Vit A, Vit C, Potassium, Calcium" },
        ],
        tip: "Tofu scramble tip: crumble tofu with your hands directly into the pan — it mimics scrambled eggs perfectly when seasoned with turmeric and cumin.",
      },
      {
        dow: "tue", day: "Tuesday", emoji: "🌯", title: "Egg Fried Quinoa + Spiced Chickpea Wrap",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "3-egg omelette", food: "3-egg omelette + spinach + capsicum + cherry tomatoes + olive oil + green tea", kcal: 360, protein: 24, fiber: 4, nutrients: "B12, Biotin, Iron, Vit C, Folate" },
          { meal: "Snack", time: "10 AM", short: "Yogurt + pumpkin seeds + kiwi", food: "150g Greek yogurt + 1 tbsp pumpkin seeds + 1 kiwi", kcal: 195, protein: 14, fiber: 3, nutrients: "Calcium, Zinc, Vit C, Magnesium" },
          { meal: "Lunch", time: "1 PM", short: "Egg fried quinoa", food: "Egg fried quinoa: 1/2 cup quinoa + 2 eggs + broccoli + carrot + capsicum + soy sauce + sesame oil + ginger + garlic", kcal: 490, protein: 24, fiber: 8, nutrients: "Iron, Folate, Vit C, Zinc, Magnesium, all amino acids" },
          { meal: "Snack", time: "4 PM", short: "Banana + walnuts", food: "1 banana + 10 walnuts", kcal: 195, protein: 3, fiber: 3, nutrients: "Omega-3, Potassium, Magnesium" },
          { meal: "Dinner", time: "7 PM", short: "Spiced chickpea wrap", food: "Spiced chickpea wrap: 1 wheat tortilla + 100g spiced chickpeas (cumin+paprika+garlic) + spinach + cucumber + tomato + Greek yogurt sauce", kcal: 430, protein: 20, fiber: 10, nutrients: "Iron, Fibre, Zinc, Folate, Vit C, Calcium" },
        ],
        tip: "Quinoa is a complete protein — all essential amino acids in one grain. Swap brown rice for quinoa any day this week for a protein boost.",
      },
      {
        dow: "wed", day: "Wednesday", emoji: "🏃‍♀️", title: "Run Day — Chicken Miso Bowl",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Scrambled eggs + avocado toast", food: "2 scrambled eggs + 1.5 whole grain toast + 1/2 avocado + small OJ", kcal: 415, protein: 20, fiber: 7, nutrients: "B12, Vit C, Folate, Potassium, Biotin" },
          { meal: "Pre-Run", time: "11 AM", short: "Banana + yogurt", food: "1 banana + 150g Greek yogurt", kcal: 200, protein: 10, fiber: 3, nutrients: "Potassium, Calcium, Magnesium — fast fuel" },
          { meal: "Lunch", time: "1 PM", short: "Chicken miso bowl", food: "Chicken miso bowl: 130g grilled chicken + 1/2 cup brown rice + edamame (50g) + shredded carrot + bok choy + miso-sesame dressing (white miso + soy + sesame oil + ginger + honey)", kcal: 530, protein: 46, fiber: 8, nutrients: "B12, Iron, Potassium, Zinc, Calcium, Folate" },
          { meal: "Post-Run", time: "4 PM", short: "Yogurt + berries + chia", food: "150g Greek yogurt + mixed berries + 1 tbsp chia seeds + honey", kcal: 210, protein: 14, fiber: 5, nutrients: "Calcium, Omega-3, Vit C, Zinc" },
          { meal: "Dinner", time: "7 PM", short: "Paneer tikka flatbread", food: "Paneer tikka masala flatbread: 1 wheat tortilla + 100g paneer tikka + tomato masala sauce + rocket/spinach + mint yogurt", kcal: 450, protein: 24, fiber: 6, nutrients: "Calcium, Iron, Vit A, Vit C" },
        ],
        tip: "Miso dressing: 1 tbsp white miso + 1 tbsp soy + 1 tsp sesame oil + 1 tsp honey + 1 tsp grated ginger. Shake in a jar. Makes 3 servings — refrigerate the rest.",
      },
      {
        dow: "thu", day: "Thursday", emoji: "🌮", title: "Lentil Taco Bowl + Tofu Stir Fry",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Overnight oats", food: "Overnight oats: 50g oats + 150g Greek yogurt + 1 tbsp chia seeds + banana + 1 tbsp almond butter", kcal: 420, protein: 22, fiber: 9, nutrients: "Magnesium, Zinc, Calcium, Potassium, Omega-3" },
          { meal: "Snack", time: "10 AM", short: "Boiled eggs + almonds", food: "2 boiled eggs + cherry tomatoes + 10 almonds", kcal: 210, protein: 14, fiber: 2, nutrients: "B12, Zinc, Vit C, Biotin" },
          { meal: "Lunch", time: "1 PM", short: "Lentil taco bowl", food: "Lentil taco bowl: 100g spiced lentils + 1/2 cup brown rice + roasted sweet potato + shredded cabbage + Greek yogurt + lime + coriander", kcal: 490, protein: 22, fiber: 12, nutrients: "Iron, Fibre, Folate, Vit A, Potassium, Calcium" },
          { meal: "Snack", time: "4 PM", short: "Yogurt + berries + honey", food: "150g Greek yogurt + mixed berries + 1 tsp honey", kcal: 175, protein: 12, fiber: 3, nutrients: "Calcium, Zinc, Vit C" },
          { meal: "Dinner", time: "7 PM", short: "Tofu veg stir fry", food: "Tofu and vegetable stir fry: 150g crispy tofu + broccoli + capsicum + carrot + baby corn + garlic + ginger + soy + sesame oil + 1/3 cup brown rice", kcal: 430, protein: 22, fiber: 9, nutrients: "Calcium, Iron, Vit C, Vit A, Zinc, Magnesium" },
        ],
        tip: "Thursday is your highest fibre day at 35g — great for gut health and keeping you full. The lentil taco bowl was batch-made Sunday, just reheat and assemble.",
      },
      {
        dow: "fri", day: "Friday", emoji: "🫓", title: "Paneer Tikka Masala Flatbread + Chickpea Bowl",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "3-egg omelette + feta", food: "3-egg omelette + spinach + feta crumble + capsicum + green tea", kcal: 370, protein: 26, fiber: 4, nutrients: "B12, Biotin, Iron, Calcium, Vit C, Zinc" },
          { meal: "Snack", time: "10 AM", short: "Apple + walnuts + tea", food: "Apple + 15 walnuts + chamomile tea", kcal: 200, protein: 4, fiber: 4, nutrients: "Omega-3, Magnesium, Potassium" },
          { meal: "Lunch", time: "1 PM", short: "Paneer tikka flatbread (leftover)", food: "Paneer tikka flatbread (leftover from batch): 1 tortilla + 100g paneer tikka + rocket + tomato + mint yogurt drizzle", kcal: 450, protein: 24, fiber: 5, nutrients: "Calcium, Iron, Vit A, Vit C" },
          { meal: "Snack", time: "4 PM", short: "Yogurt + chia + berries", food: "150g Greek yogurt + 1 tbsp chia seeds + berries", kcal: 185, protein: 13, fiber: 4, nutrients: "Calcium, Omega-3, Zinc, Vit C" },
          { meal: "Dinner", time: "7 PM", short: "Chickpea + spinach bowl", food: "Warm chickpea and spinach bowl: 120g chickpeas + big spinach base + roasted capsicum + sweet potato + lemon-tahini dressing + 1 boiled egg on top", kcal: 480, protein: 24, fiber: 11, nutrients: "Iron, Zinc, Folate, Fibre, Vit C, Vit A, B12" },
        ],
        tip: "Friday is lighter on protein — add an extra boiled egg to lunch or swap the Greek yogurt snack for a bigger pot (200g) to bring it up to 100g easily.",
      },
      {
        dow: "sat", day: "Saturday", emoji: "💪", title: "Long Run Recovery — Chicken + Quinoa Power Bowl",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Scrambled eggs + avocado toast", food: "2 scrambled eggs + 1.5 whole grain toast + 1/2 avocado + small OJ", kcal: 415, protein: 20, fiber: 7, nutrients: "B12, Vit C, Folate, Potassium, Biotin" },
          { meal: "Pre-Run", time: "9 AM", short: "Banana + peanut butter", food: "1 banana + 1 tbsp peanut butter", kcal: 195, protein: 5, fiber: 3, nutrients: "Potassium, Magnesium — fast fuel" },
          { meal: "Post-Run", time: "12 PM", short: "Chicken quinoa power bowl", food: "Recovery power bowl: 130g chicken + 1/2 cup quinoa + roasted sweet potato + spinach + pumpkin seeds + olive oil + lemon", kcal: 580, protein: 46, fiber: 10, nutrients: "B12, Vit A, Iron, Magnesium, Zinc, all amino acids" },
          { meal: "Snack", time: "4 PM", short: "Yogurt + mango + granola", food: "150g Greek yogurt + mango chunks + 1 tbsp chia seeds + granola (2 tbsp)", kcal: 230, protein: 15, fiber: 4, nutrients: "Calcium, Omega-3, Vit C, Zinc" },
          { meal: "Dinner", time: "7 PM", short: "Korean tofu bowl (leftover)", food: "Korean tofu bowl (leftover crispy tofu from batch) + fresh brown rice + cucumber + carrot + gochujang sauce", kcal: 460, protein: 22, fiber: 7, nutrients: "Calcium, Iron, Zinc, Potassium, Vit A" },
        ],
        tip: "Highest calorie day — the long run earns it. Quinoa in the recovery bowl gives you complete protein + complex carbs. Best post-run combo on the plan.",
      },
      {
        dow: "sun", day: "Sunday", emoji: "📦", title: "Meal Prep Day — Light + Easy",
        meals: [
          { meal: "Breakfast", time: "9 AM", short: "Smoothie bowl", food: "Smoothie bowl: 150g Greek yogurt + frozen berries + banana + 1 tbsp chia seeds + 2 tbsp granola + drizzle honey", kcal: 420, protein: 18, fiber: 7, nutrients: "Calcium, Omega-3, Potassium, Vit C, Zinc" },
          { meal: "Snack", time: "11 AM", short: "Boiled eggs + peanut butter", food: "2 boiled eggs + celery + 1 tbsp peanut butter", kcal: 200, protein: 14, fiber: 2, nutrients: "B12, Zinc, Magnesium, Biotin" },
          { meal: "Lunch", time: "1 PM", short: "Simple chicken salad", food: "Simple chicken salad: 130g grilled chicken + big spinach + cucumber + cherry tomatoes + capsicum + lemon-olive oil + pumpkin seeds", kcal: 420, protein: 40, fiber: 5, nutrients: "B12, Iron, Folate, Vit C, Zinc, Potassium" },
          { meal: "Snack", time: "4 PM", short: "Apple + almonds + tea", food: "Apple + 10 almonds + green tea", kcal: 165, protein: 3, fiber: 4, nutrients: "Magnesium, Potassium, Vit E" },
          { meal: "Dinner", time: "7 PM", short: "Spiced lentil soup", food: "Spiced lentil soup: 80g red lentils + carrot + spinach + tomato + cumin + turmeric + garlic + lemon + 1 slice rye bread", kcal: 380, protein: 20, fiber: 11, nutrients: "Iron, Folate, Fibre, Vit A, Vit C, Magnesium" },
        ],
        tip: "Lightest day of the week — eating easy while you cook for the week ahead. Everything prepped today = zero thinking Monday to Friday.",
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
          "Firm tofu 300g",
          "Paneer 200g",
          "Eggs (18)",
          "Greek yogurt (8 x 150g pots)",
          "Feta cheese 80g",
        ],
      },
      {
        name: "Legumes & Cans",
        items: [
          "Red lentils 300g",
          "Chickpeas (2 cans)",
          "Crushed tomatoes (1 can)",
          "Edamame 200g (frozen)",
        ],
      },
      {
        name: "Grains & Wraps",
        items: [
          "Brown rice 1kg",
          "Quinoa 400g",
          "Whole grain bread (1 loaf)",
          "Rye bread (1 loaf)",
          "Wheat tortillas (pack of 8)",
          "Oats 500g",
          "Granola (small pack)",
        ],
      },
      {
        name: "Vegetables",
        items: [
          "Baby spinach 400g",
          "Rocket/arugula 100g",
          "Broccoli (2 heads)",
          "Sweet potatoes (5)",
          "Capsicum, red + yellow (4)",
          "Carrots (5)",
          "Cherry tomatoes (2 punnets)",
          "Cucumber (2)",
          "Bok choy (1 bunch)",
          "Celery (1 bunch)",
          "Cabbage (1/2 small)",
          "Red onion (3)",
          "Brown onion (3)",
          "Garlic (2 bulbs)",
          "Fresh ginger (1 piece)",
          "Fresh coriander (1 bunch)",
          "Fresh mint (1 bunch)",
        ],
      },
      {
        name: "Fruits",
        items: [
          "Berries 500g (fresh or frozen)",
          "Bananas (6)",
          "Apples (5)",
          "Kiwi (3)",
          "Mango (1)",
          "Oranges (3)",
          "Lemon (4)",
          "Lime (3)",
        ],
      },
      {
        name: "Fats & Extras",
        items: [
          "Extra virgin olive oil",
          "Avocados (4)",
          "Almonds 150g",
          "Walnuts 100g",
          "Pumpkin seeds 150g",
          "Chia seeds 200g",
          "Peanut butter (natural)",
          "Almond butter",
          "Tahini",
          "Sesame oil",
          "Low-sodium soy sauce",
          "White miso paste (small tub)",
          "Rice vinegar (small)",
          "Cornstarch (small)",
          "Dark chocolate chips or bar (70%+)",
          "Honey",
          "Ground cinnamon",
          "Unsweetened cocoa powder",
        ],
      },
      {
        name: "Spices — check cupboard first",
        items: [
          "Cumin",
          "Coriander",
          "Garam masala",
          "Turmeric",
          "Paprika",
          "Chilli flakes",
          "Gochugaru (or regular chilli powder)",
          "Garlic powder",
          "Mixed herbs",
          "Sesame seeds (optional garnish)",
        ],
      },
      {
        name: "Drinks",
        items: [
          "Green tea",
          "Chamomile tea",
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
    multitask: "Chicken (oven 22 min) + Rice (hob 30 min) + Quinoa (hob 15 min) + Lentils (hob 25 min) all start together. Tofu pan-fries while the oven runs. Roast veg + chickpeas go in after the chicken comes out.",
    steps: [
      { num: 1, task: "Crispy Tofu Batch", how: "Press 300g firm tofu 15 min between paper towels. Cube into 2cm pieces. Toss in 2 tbsp soy sauce + 1 tsp sesame oil + 1 tsp garlic powder + 1 tbsp cornstarch. Pan-fry medium-high heat 3-4 min each side until golden and crispy. Reheat in a dry pan 2 min when serving. Covers Mon lunch + Sat dinner.", timing: "0-25 min" },
      { num: 2, task: "Grilled Chicken Batch", how: "Season 400g chicken breast: half with miso-sesame (white miso + soy + sesame oil + honey + ginger), half plain (olive oil + garlic + lemon + salt). Bake 200°C 20 min. Covers Wed lunch + Fri lunch + Sat recovery bowl + Sun salad.", timing: "0-22 min" },
      { num: 3, task: "Paneer Tikka Batch", how: "Marinate 200g cubed paneer: Greek yogurt + turmeric + cumin + garam masala + paprika + lemon + garlic + ginger, 30 min minimum. Pan-grill on high heat 3 min each side until charred. Covers Wed dinner + Fri lunch flatbreads.", timing: "0-35 min" },
      { num: 4, task: "Spiced Lentils", how: "Cook 200g red lentils in 500ml water + turmeric + cumin + garlic + salt, 20 min until soft. Split into two: half for Thu taco bowl (add paprika + lime), half for Sun dinner soup (add carrot + spinach + tomato). Makes 4 portions total.", timing: "0-25 min" },
      { num: 5, task: "Brown Rice + Quinoa", how: "Cook 1.5 cups brown rice (30 min). Separately cook 1 cup quinoa (15 min) in its own pot. Rice covers Mon + Thu + Sat. Quinoa covers Tue + Wed + Sat recovery bowl.", timing: "0-30 min" },
      { num: 6, task: "Roast Veg", how: "Chop sweet potato, broccoli, capsicum, carrots. Toss with olive oil + salt + mixed herbs. Roast 200°C 22 min. Covers Thu + Fri + multiple dinners.", timing: "5-30 min" },
      { num: 7, task: "Spiced Chickpeas", how: "Drain 1 can chickpeas. Toss in olive oil + cumin + paprika + garlic powder + salt. Either roast 200°C 20 min (crispy) or pan-fry 8 min. Covers Tue dinner wrap + Fri dinner bowl.", timing: "5-20 min" },
      { num: 8, task: "Boil Eggs", how: "10 eggs, cold water start, boil 9 min, then ice bath. Peel 8. Covers snacks Mon-Fri + Fri dinner bowl topping.", timing: "10-20 min" },
      { num: 9, task: "Miso Dressing (jar)", how: "Mix 2 tbsp white miso + 2 tbsp low-sodium soy + 2 tsp sesame oil + 2 tsp honey + 1 tbsp grated ginger + 1 tbsp rice vinegar. Shake in a jar. Covers Wed lunch + extra bowls.", timing: "3 min" },
      { num: 10, task: "Overnight Oat Jars", how: "2 jars: 50g oats + 150g Greek yogurt + 1 tbsp chia seeds + banana slices + almond butter. Refrigerate. Ready Mon + Thu — make 2 more Wed night.", timing: "5 min" },
      { num: 11, task: "Portion + Label", how: "Pack 5 lunch boxes + 5 dinner boxes. Snack bags: 15 almonds or walnuts + 1 fruit each day. Oat jars at the front of the fridge, miso dressing jar in the fridge door.", timing: "10 min" },
    ],
    newIngredients: [
      { name: "White miso paste", desc: "Japanese fermented soybean paste — salty, umami, slightly sweet. Find it in Asian grocery stores or Whole Foods. Keeps months in the fridge." },
      { name: "Gochugaru", desc: "Korean chilli flakes — mild heat, fruity flavour. Sub with regular chilli flakes if you can't find it; slightly less authentic but works fine." },
      { name: "Edamame", desc: "Young soybeans, usually sold frozen. Defrost in boiling water 3 min. High protein, high fibre, great texture in bowls." },
      { name: "Rice vinegar", desc: "Mild, slightly sweet vinegar used in Asian dressings. Very cheap, keeps forever — find it next to the soy sauce in any supermarket." },
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
