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
  weeklyFocus: "Another quiet Friday with no check-in reply, so training stays as-is — easy Wed/Sat runs, strength split unchanged — and this week's meal plan defaults to your usual targets; drop a line anytime and next week's note will reflect how things actually went.",

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
        dow: "mon", day: "Monday", emoji: "🫓", title: "Tandoori & Chana Day",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Besan cheela", food: "2 besan (chickpea flour) cheelas with onion, tomato, capsicum, cumin, turmeric + mint-coriander chutney + side of low-fat curd", kcal: 330, protein: 18, fiber: 6, nutrients: "Folate, Iron, Fibre, Protein" },
          { meal: "Snack", time: "10 AM", short: "Sprout chaat + yogurt", food: "Sprouted moong-cucumber chaat: 40g sprouted moong + cucumber + lemon + chaat masala, side of 100g Greek yogurt", kcal: 190, protein: 16, fiber: 5, nutrients: "Folate, Probiotics, Vit C, Iron" },
          { meal: "Lunch", time: "1 PM", short: "Tandoori chicken tikka bowl", food: "Tandoori chicken tikka (150g, from Sunday's batch) + brown rice (1/2 cup) + cucumber-onion-tomato salad + mint chutney", kcal: 520, protein: 40, fiber: 6, nutrients: "B12, Potassium, Iron, Vit C" },
          { meal: "Snack", time: "4 PM", short: "Orange + almonds", food: "1 orange + 12 almonds", kcal: 175, protein: 6, fiber: 4, nutrients: "Vit C, Vit E, Magnesium" },
          { meal: "Dinner", time: "7 PM", short: "Chana masala + roti", food: "Chana masala (1 cup, plain-boiled chickpeas from Sunday's batch, quick tomato-onion simmer, no cream) + 1 small roti + sauteed spinach", kcal: 420, protein: 22, fiber: 11, nutrients: "Iron, Folate, Fibre, Vit A" },
        ],
        tip: "Sunday's plain chickpeas just need a 5-minute tomato-onion simmer tonight — the tandoori chicken needs zero cooking at all, just plating, so lunch and dinner are both mostly assembly.",
      },
      {
        dow: "tue", day: "Tuesday", emoji: "🥜", title: "Peanut-Sesame Tofu Day",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Veggie egg scramble", food: "2 whole eggs + 1 egg white scrambled with scallion, mushroom, spinach + 1 slice whole grain toast", kcal: 330, protein: 26, fiber: 4, nutrients: "B12, Biotin, Iron, Folate" },
          { meal: "Snack", time: "10 AM", short: "Yogurt + apple + chia", food: "150g Greek yogurt + sliced apple + 1 tsp chia seeds", kcal: 170, protein: 14, fiber: 3, nutrients: "Calcium, Vit C, Omega-3" },
          { meal: "Lunch", time: "1 PM", short: "Peanut-sesame tofu stir-fry", food: "Peanut-sesame tofu & veg stir-fry: 150g pan-seared tofu (from Sunday's batch) + broccoli + carrot + snap peas + peanut-sesame-soy sauce + 1/2 cup brown rice", kcal: 520, protein: 26, fiber: 11, nutrients: "Iron, Calcium, Zinc, Vit C" },
          { meal: "Snack", time: "4 PM", short: "Banana + walnuts", food: "1 banana + 8 walnuts", kcal: 190, protein: 5, fiber: 4, nutrients: "Omega-3, Potassium, Magnesium" },
          { meal: "Dinner", time: "7 PM", short: "Baked tilapia + quinoa", food: "Baked tilapia (140g, lemon-herb-garlic, 200°C) + roasted zucchini & capsicum + 1/3 cup quinoa", kcal: 420, protein: 34, fiber: 6, nutrients: "Omega-3, B12, Potassium, Vit A" },
        ],
        tip: "The tofu came off the stove yesterday — tonight's fish is the only from-scratch cooking on your plate today, about 12 minutes in the oven while the veg roasts alongside it.",
      },
      {
        dow: "wed", day: "Wednesday", emoji: "🏃‍♀️", title: "Run Day — Sambar Fuel",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Moong dal idli + sambar", food: "3 steamed moong dal idlis (no oil) + sambar (1 cup, from Sunday's batch) + coconut chutney + 1 boiled egg", kcal: 430, protein: 22, fiber: 8, nutrients: "Folate, Iron, Fibre, Calcium" },
          { meal: "Pre-Run", time: "11 AM", short: "Banana + curd", food: "1 banana + 150g low-fat curd", kcal: 200, protein: 9, fiber: 3, nutrients: "Potassium, Calcium — fast fuel" },
          { meal: "Lunch", time: "1 PM", short: "Tandoori chicken wrap", food: "Tandoori chicken tikka wrap (130g, from Sunday's batch) in a whole wheat tortilla with yogurt-mint sauce + lettuce + cucumber + red onion", kcal: 540, protein: 38, fiber: 7, nutrients: "B12, Iron, Folate, Vit C" },
          { meal: "Post-Run", time: "4 PM", short: "Yogurt + berries + chia", food: "150g Greek yogurt + mixed berries + 1 tbsp chia seeds", kcal: 210, protein: 14, fiber: 5, nutrients: "Calcium, Omega-3, Vit C" },
          { meal: "Dinner", time: "7 PM", short: "Peanut-sesame tofu lettuce wraps", food: "Peanut-sesame tofu lettuce wraps: 120g pan-seared tofu (from Sunday's batch) + shredded carrot + scallion + lettuce cups + peanut-sesame sauce + a few tbsp rice", kcal: 400, protein: 22, fiber: 6, nutrients: "Iron, Calcium, Zinc, Fibre" },
        ],
        tip: "Idli-sambar fuels the run without weighing you down, and the light tofu wraps at dinner mean nothing heavy to digest before bed — same tandoori chicken as Monday, but a wrap instead of a bowl so it doesn't feel repeated.",
      },
      {
        dow: "thu", day: "Thursday", emoji: "🥥", title: "South Indian Day",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Moong dal idli + sambar", food: "3 steamed moong dal idlis (no oil) + sambar (3/4 cup, from Sunday's batch) + coconut chutney", kcal: 370, protein: 18, fiber: 7, nutrients: "Folate, Iron, Fibre, Calcium" },
          { meal: "Snack", time: "10 AM", short: "Yogurt + pumpkin seeds", food: "150g Greek yogurt + cucumber + chaat masala + 1 tsp pumpkin seeds", kcal: 190, protein: 16, fiber: 2, nutrients: "Calcium, Zinc, Probiotics" },
          { meal: "Lunch", time: "1 PM", short: "Curd rice + paneer poriyal", food: "Curd rice (2/3 cup, low-fat curd, mustard-curry leaf tempering) + paneer poriyal (65g paneer + green beans + carrot, minimal oil) + papad", kcal: 520, protein: 30, fiber: 7, nutrients: "Calcium, Protein, Vit A, Fibre" },
          { meal: "Snack", time: "4 PM", short: "Apple + roasted chana", food: "Apple + 2 tbsp roasted chickpeas (from Sunday's batch) + a few almonds", kcal: 190, protein: 10, fiber: 5, nutrients: "Iron, Folate, Vit E, Fibre" },
          { meal: "Dinner", time: "7 PM", short: "Paruppu + poriyal", food: "Paruppu (moong dal, 3/4 cup, from Sunday's batch, mustard-cumin-curry leaf tempering) + brown rice (1/3 cup) + cabbage-carrot poriyal", kcal: 380, protein: 20, fiber: 10, nutrients: "Iron, Folate, Fibre, Vit A" },
        ],
        tip: "South Indian, cover to cover today — curd rice at lunch is a cool, no-cook option for a busy afternoon, and dinner's dal is the same Sunday batch as breakfast's sambar, just tempered thicker instead of thinned.",
      },
      {
        dow: "fri", day: "Friday", emoji: "🫒", title: "Mediterranean Bowl Day",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Yogurt parfait", food: "150g Greek yogurt + 2 tbsp granola + berries + 1 tbsp chia seeds + drizzle honey", kcal: 320, protein: 18, fiber: 6, nutrients: "Calcium, Omega-3, Vit C, Probiotics" },
          { meal: "Snack", time: "10 AM", short: "Boiled eggs + tomatoes", food: "2 boiled eggs + cherry tomatoes + black pepper", kcal: 190, protein: 14, fiber: 1, nutrients: "B12, Biotin, Vit C" },
          { meal: "Lunch", time: "1 PM", short: "Chickpea-paneer Mediterranean salad", food: "1/2 cup chickpeas (from Sunday's batch) + 1/2 cup quinoa + 40g pan-seared paneer + cucumber + cherry tomato + olives + mixed greens + lemon-olive oil dressing", kcal: 540, protein: 30, fiber: 10, nutrients: "Iron, Folate, Calcium, Fibre" },
          { meal: "Snack", time: "4 PM", short: "Apple + almonds", food: "Apple + 12 almonds", kcal: 175, protein: 6, fiber: 4, nutrients: "Vit E, Magnesium, Potassium" },
          { meal: "Dinner", time: "7 PM", short: "Peanut-sesame tofu soba bowl", food: "Peanut-sesame tofu soba bowl: 150g pan-seared tofu (from Sunday's batch) + whole wheat noodles + shredded carrot + cucumber + scallion + peanut-sesame sauce", kcal: 480, protein: 28, fiber: 8, nutrients: "Iron, Calcium, Zinc, Fibre" },
        ],
        tip: "Last of the tofu batch tonight, in its third and final format this week — noodles instead of rice or lettuce cups, so it still feels new even though it's the same base ingredient a third time.",
      },
      {
        dow: "sat", day: "Saturday", emoji: "💪", title: "Long Run — Tandoori Power Bowl",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Scrambled eggs + avocado toast", food: "2 scrambled eggs + 1 slice whole grain toast + 1/4 avocado + small OJ", kcal: 340, protein: 18, fiber: 6, nutrients: "B12, Vit C, Folate, Potassium" },
          { meal: "Pre-Run", time: "9 AM", short: "Banana + peanut butter", food: "1 banana + 1 tbsp peanut butter", kcal: 190, protein: 5, fiber: 3, nutrients: "Potassium, Magnesium — fast fuel" },
          { meal: "Post-Run", time: "12 PM", short: "Tandoori chicken power bowl", food: "Recovery power bowl: 150g tandoori chicken (from Sunday's batch) + 1/2 cup quinoa + roasted sweet potato + spinach + pumpkin seeds + lemon-yogurt dressing", kcal: 560, protein: 40, fiber: 9, nutrients: "B12, Vit A, Iron, Zinc" },
          { meal: "Snack", time: "4 PM", short: "Chana chaat", food: "Chana chaat: 1/2 cup plain chickpeas (from Sunday's batch) + cucumber + onion + chaat masala + lemon", kcal: 210, protein: 11, fiber: 7, nutrients: "Iron, Folate, Fibre, Vit C" },
          { meal: "Dinner", time: "7 PM", short: "Grilled king fish + rice", food: "Grilled king fish (130g, herb-lemon chimichurri: coriander, garlic, olive oil) + brown rice (1/3 cup) + sauteed greens", kcal: 440, protein: 33, fiber: 6, nutrients: "Omega-3, B12, Potassium, Iron" },
        ],
        tip: "The long run earns the highest-calorie day on the plan — eating the post-run bowl within 60-90 min of finishing matters more for recovery than hitting an exact macro number. Tandoori chicken's third and final appearance this week.",
      },
      {
        dow: "sun", day: "Sunday", emoji: "📦", title: "Meal Prep — Batch Cook Day",
        meals: [
          { meal: "Breakfast", time: "9 AM", short: "Smoothie bowl", food: "Smoothie bowl: 150g Greek yogurt + frozen berries + banana + 1 tbsp chia seeds + 2 tbsp granola + 1 tsp pumpkin seeds", kcal: 400, protein: 23, fiber: 7, nutrients: "Calcium, Omega-3, Potassium, Vit C" },
          { meal: "Snack", time: "11 AM", short: "Boiled eggs + celery", food: "2 boiled eggs + celery + 1 tsp peanut butter", kcal: 230, protein: 16, fiber: 2, nutrients: "B12, Zinc, Magnesium, Biotin" },
          { meal: "Lunch", time: "1 PM", short: "Chickpea-paneer salad", food: "1/2 cup chickpeas (from today's batch) + 40g pan-seared paneer + mixed greens + cucumber + cherry tomatoes + capsicum + lemon-olive oil dressing", kcal: 480, protein: 28, fiber: 10, nutrients: "B12, Iron, Folate, Vit C" },
          { meal: "Snack", time: "4 PM", short: "Apple + almonds + tea", food: "Apple + 10 almonds + green tea", kcal: 170, protein: 6, fiber: 4, nutrients: "Magnesium, Potassium, Vit E" },
          { meal: "Dinner", time: "7 PM", short: "Tofu & veg broth soup", food: "Tofu & veg broth soup: 120g pan-seared tofu (from today's batch) + bok choy + mushroom + rice noodles + ginger-scallion broth", kcal: 410, protein: 26, fiber: 6, nutrients: "Iron, Calcium, Zinc, Fibre" },
        ],
        tip: "Today's the big batch-cook — the tandoori chicken, peanut-sesame tofu, chickpeas, and South Indian dal you make this morning are what turns Monday through Saturday into quick assembly instead of cooking from scratch every night.",
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
          "Chicken breast 500g",
          "Firm tofu 450g",
          "Paneer 120g",
          "Tilapia fillet 140g",
          "King fish fillet 130g",
          "Eggs (12)",
          "Greek yogurt (6 x 150g pots)",
          "Low-fat plain curd (Indian-style) 500g tub",
        ],
      },
      {
        name: "Legumes & Cans",
        items: [
          "Chickpeas (2 cans, or 1 cup dried)",
          "Toor dal or moong dal (South Indian dal mix) 150g",
          "Urad dal 50g (only if fermenting your own idli batter)",
          "Besan (chickpea flour) 150g",
          "Crushed tomatoes (1 small can)",
        ],
      },
      {
        name: "Grains & Wraps",
        items: [
          "Brown rice 300g (1.5 cups dry)",
          "Quinoa 150g (3/4 cup dry)",
          "Ragi (finger millet) flour or store-bought idli/dosa batter 500g",
          "Whole wheat tortillas/wraps (4)",
          "Whole wheat noodles or soba, small pack",
          "Rice noodles, small pack",
          "Whole grain bread (small loaf)",
          "Granola (small pack)",
          "Papad (a few, for Thursday's lunch)",
        ],
      },
      {
        name: "Vegetables",
        items: [
          "Baby spinach 250g",
          "Broccoli (1 head)",
          "Snap peas 150g",
          "Sweet potato (1)",
          "Capsicum, mixed colors (3)",
          "Carrots (6)",
          "Cherry tomatoes (2 punnets)",
          "Tomatoes (6, for gravies/chutney)",
          "Cucumber (5)",
          "Zucchini (1)",
          "Cabbage, small (for poriyal)",
          "Green beans 150g (for poriyal)",
          "Bok choy (1 bunch)",
          "Mushrooms 150g",
          "Celery (1 bunch)",
          "Lettuce, 1 small head (for tofu wraps + salads)",
          "Mixed salad greens, 1 bag",
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
          "Berries 250g (fresh or frozen)",
          "Bananas (5)",
          "Apples (4)",
          "Orange (1, or small OJ)",
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
          "Chia seeds 80g",
          "Peanut butter (natural, larger jar — used in sauce + snacks)",
          "Tahini",
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
          "Garam masala",
          "Turmeric",
          "Tandoori masala",
          "Chaat masala",
          "Mustard seeds",
          "Sambar powder",
          "Tamarind (small block or paste)",
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
    note: "Sunday, ~90 minutes total. Start steps 1, 2, 3, 4 and 7 at the same time — the timings below are built around that. Idli batter (step 9) needs starting the night before if you're fermenting your own.",
    multitask: "Chana/chickpea boil (step 1, hob) + chicken marinate & grill (step 2, oven/pan) + South Indian dal batch (step 3, hob 25 min) + eggs (step 8, second burner) all start together. Peanut-sesame tofu (step 4) goes in a pan once the chicken is resting. The peanut-sesame sauce (step 5) and coconut chutney (step 6) mix/blend in the gaps. Brown rice & quinoa (step 7) go on once the chana is simmering steadily. Paneer portioning (step 10), aromatics chopping (step 11), fish portioning (step 12), and final portioning (step 13) fill the gaps while everything simmers.",
    steps: [
      { num: 1, task: "Chickpea Batch", how: "Boil 2 cans (or 1 cup dried, soaked) chickpeas plain — no gravy yet — makes ~3.5 cups. Set aside: 1 cup gets a quick tomato-onion-cumin simmer Monday evening for chana masala, 1/2 cup stays plain for Thursday's roasted-chana snack, 1/2 cup stays plain for Saturday's chana chaat, 1/2 cup stays plain for Friday's + Sunday's salads. Covers Mon dinner + Thu snack + Fri lunch + Sat snack + Sun lunch.", timing: "0-25 min" },
      { num: 2, task: "Tandoori Chicken Batch — Marinate, Grill, Split 3 Ways", how: "Marinate 500g chicken breast in low-fat yogurt + tandoori masala + lemon + ginger-garlic paste, 20 min. Grill/bake (200°C 18-20 min or pan 12-15 min), then split: 150g for Monday's tikka bowl, 130g for Wednesday's wrap, 150g for Saturday's post-run power bowl — same chicken, three different formats. Covers Mon lunch + Wed lunch + Sat post-run.", timing: "0-30 min" },
      { num: 3, task: "South Indian Dal Batch (Sambar + Paruppu)", how: "Cook 150g toor/moong dal with carrot, a veg of choice, tamarind, and sambar powder, 20-25 min, makes ~4 cups. Keep it thin for sambar: 1 cup for Wed breakfast, 3/4 cup for Thu breakfast. Simmer the rest down thicker with a fresh mustard-cumin-curry leaf tempering for Thursday's paruppu (3/4 cup). Covers Wed breakfast + Thu breakfast + Thu dinner.", timing: "0-25 min" },
      { num: 4, task: "Peanut-Sesame Tofu Batch", how: "Pan-sear 450g firm tofu cubes in a peanut-sesame-soy marinade until crisp-edged, ~10 min. Split: 150g for Tue's stir-fry, 150g for Fri's soba bowl, 120g for Sun's broth soup — three different formats from one batch. Covers Tue lunch + Fri dinner + Sun dinner.", timing: "10-20 min" },
      { num: 5, task: "Peanut-Sesame Sauce (jar)", how: "Mix 4 tbsp natural peanut butter + 2 tbsp low-sodium soy sauce + 2 tsp sesame oil + 1 clove grated garlic + 1 tsp honey + water to loosen. Used in the tofu batch (step 4) and for tossing Tue's stir-fry veg + Wed's wrap filling + Fri's noodles.", timing: "3 min" },
      { num: 6, task: "Coconut Chutney (small batch)", how: "Blend grated coconut + green chilli + a little ginger + roasted chana dal, with a mustard-curry leaf tempering. Makes a small jar. Covers Wed breakfast + Thu breakfast.", timing: "5 min" },
      { num: 7, task: "Brown Rice + Quinoa", how: "Cook 1.5 cups dry brown rice (30 min) for Mon/Tue/Thu/Sat/Sun portions. Separately cook 3/4 cup dry quinoa (15 min) for Fri + Sat.", timing: "0-30 min" },
      { num: 8, task: "Boil Eggs", how: "8 eggs, cold water start, boil 9 min, then ice bath. Peel 7. Covers Wed breakfast, Thu breakfast, Fri snack, Sun snack (Tue's and Sat's eggs are cooked fresh scrambled, not part of this batch).", timing: "10-20 min" },
      { num: 9, task: "Idli Batter", how: "If fermenting your own: mix rice/ragi flour + moong or urad dal, soak and ferment overnight Saturday so it's ready to steam Wednesday and Thursday mornings (10 min each, fresh both days). Otherwise, buy a ready-made idli/dosa batter pack — most Indian grocers stock it fresh or frozen. Covers Wed breakfast + Thu breakfast.", timing: "prep Sat night if fermenting, 5 min Sunday" },
      { num: 10, task: "Portion Paneer", how: "Cube 120g paneer. Bag 65g for Thursday's poriyal, 40g for Friday's salad, 40g for Sunday's salad — pan-sear fresh each day, paneer doesn't hold well pre-cooked. Covers Thu lunch + Fri lunch + Sun lunch.", timing: "5 min" },
      { num: 11, task: "Chop & Portion Aromatics", how: "Mince a batch of ginger and garlic, slice onions, wash and chop spinach + coriander + mint + scallions + green beans/cabbage for poriyal. Portion into small containers so weeknight cooking is just assembly.", timing: "10 min" },
      { num: 12, task: "Portion Fish for the Week", how: "Pat dry and portion the tilapia (Tue) and king fish (Sat) into individual bags. Refrigerate what you'll use in 1-2 days, freeze the rest and move it to the fridge the night before to thaw — fish is best cooked fresh each day, not pre-cooked.", timing: "5 min" },
      { num: 13, task: "Portion + Label", how: "Pack what you can into lunch containers, snack bags (almonds/walnuts + 1 fruit per day). Chickpea and dal batches go into labeled containers on one fridge shelf; the peanut-sesame sauce jar and coconut chutney go in the door.", timing: "10 min" },
    ],
    newIngredients: [
      { name: "Ragi (finger millet) flour", note: "Used in this week's idli batter alongside rice/dal — higher in calcium and fibre than plain rice batter, with a mild nutty flavour. Buy pre-mixed idli/dosa batter if you don't want to ferment your own; most Indian grocers stock it fresh or frozen." },
      { name: "Besan (chickpea flour)", note: "Used for Monday's cheela (a savoury pancake) — high in plant protein and fibre, common in North Indian cooking. Sold as 'chickpea flour', 'gram flour', or 'besan' at any Indian grocer." },
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
