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
  weeklyFocus: "No reply to Friday's check-in, so this week keeps your usual training split and 1,550-1,650 kcal / 100-110g protein targets steady, with South Indian Monday and North Indian Thursday — tell me how your runs and energy felt and I'll tune next week's pacing and fuel around it.",

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
        dow: "mon", day: "Monday", emoji: "🥥", title: "South Indian — Idli & Dal Day",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Idli + sambar + egg", food: "3 small steamed idlis (store-bought batter) + 3/4 cup sambar-style dal (from Sunday's batch) + 1 boiled egg (from Sunday's batch) + tomato-coriander chutney", kcal: 380, protein: 21, fiber: 6, nutrients: "Folate, Iron, B12, Fibre" },
          { meal: "Snack", time: "10 AM", short: "Chia yogurt cup", food: "150g Greek yogurt + 1 tbsp chia seeds + 1/2 tsp honey", kcal: 190, protein: 17, fiber: 5, nutrients: "Calcium, Omega-3, Probiotics" },
          { meal: "Lunch", time: "1 PM", short: "Tandoori chicken lemon-rice bowl", food: "110g tandoori chicken (from Sunday's batch) over 1/2 cup lemon rice (brown rice tempered with mustard seeds, curry leaves, turmeric, lemon) + cucumber-carrot kachumber + 2 tbsp low-fat curd", kcal: 450, protein: 38, fiber: 6, nutrients: "B12, Iron, Vit C, Fibre" },
          { meal: "Snack", time: "4 PM", short: "Apple + almonds", food: "1 apple + 12 almonds", kcal: 175, protein: 6, fiber: 5, nutrients: "Vit E, Magnesium, Potassium, Fibre" },
          { meal: "Dinner", time: "7 PM", short: "Egg podimas + roti", food: "South Indian egg podimas: 2 eggs scrambled with onion, tomato, green chilli, curry leaves, turmeric, minimal oil + 1 small roti + cabbage poriyal (1 cup cabbage, mustard seeds, tiny bit of coconut or none)", kcal: 400, protein: 22, fiber: 7, nutrients: "B12, Biotin, Iron, Vit C, Fibre" },
        ],
        tip: "South Indian from first bite to last — Sunday's dal does double duty as sambar this morning, and tonight's podimas is a 10-minute fresh cook with nothing to prep.",
      },
      {
        dow: "tue", day: "Tuesday", emoji: "🫘", title: "Chana Masala & Miso Tofu Day",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Yogurt-berry granola bowl", food: "150g Greek yogurt + 1/2 cup berries + 2 tbsp granola + 1 tbsp pumpkin seeds", kcal: 350, protein: 22, fiber: 6, nutrients: "Calcium, Zinc, Vit C, Probiotics" },
          { meal: "Snack", time: "10 AM", short: "Boiled eggs + tomatoes", food: "2 boiled eggs (from Sunday's batch) + cherry tomatoes or sliced tomato + black pepper", kcal: 190, protein: 14, fiber: 1, nutrients: "B12, Biotin, Vit C" },
          { meal: "Lunch", time: "1 PM", short: "Punjabi chana masala bowl", food: "1 cup chana masala (from Sunday's batch, onion-tomato gravy, no cream) + 1/3 cup brown rice + 1/2 roti + kachumber + 2 tbsp low-fat curd", kcal: 440, protein: 22, fiber: 15, nutrients: "Iron, Folate, Fibre, Calcium" },
          { meal: "Snack", time: "4 PM", short: "Apple + almonds", food: "1 apple + 12 almonds", kcal: 175, protein: 6, fiber: 5, nutrients: "Vit E, Magnesium, Potassium, Fibre" },
          { meal: "Dinner", time: "7 PM", short: "Miso-ginger tofu bowl", food: "170g miso-ginger tofu (from Sunday's batch, crisped in a pan) + 1/3 cup brown rice + sauteed bok choy + 1/3 cup edamame + sesame seeds", kcal: 420, protein: 38, fiber: 8, nutrients: "Iron, Calcium, Vit A, Fibre" },
        ],
        tip: "Chana masala is the first of its three appearances this week — Tuesday's the pure reheat day, and the only fresh cook is crisping the tofu for a few minutes.",
      },
      {
        dow: "wed", day: "Wednesday", emoji: "🏃‍♀️", title: "Run Day — Chicken Wrap & Tilapia",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Masala oats + egg", food: "Savory masala oats (1/2 cup oats cooked with onion, tomato, cumin, turmeric) topped with 1 fried egg, 1 tbsp pumpkin seeds + coriander", kcal: 400, protein: 21, fiber: 7, nutrients: "Folate, Iron, Zinc, Fibre" },
          { meal: "Pre-Run", time: "11 AM", short: "Banana + peanut butter", food: "1 banana + 1 tbsp peanut butter", kcal: 190, protein: 5, fiber: 3, nutrients: "Potassium, Magnesium — fast fuel" },
          { meal: "Lunch", time: "1 PM", short: "Tandoori chicken wrap", food: "110g tandoori chicken (from Sunday's batch) in a whole wheat tortilla with mint chutney, yogurt-cucumber slaw, lettuce", kcal: 450, protein: 38, fiber: 6, nutrients: "B12, Iron, Folate" },
          { meal: "Post-Run", time: "4 PM", short: "Chana chaat + yogurt + toast", food: "1/2 cup chana masala (from Sunday's batch, served cool as a chaat with lemon + chaat masala) + 100g Greek yogurt + 1 slice toast", kcal: 300, protein: 21, fiber: 8, nutrients: "Iron, Folate, Calcium, Fibre" },
          { meal: "Dinner", time: "7 PM", short: "Gochugaru-lime tilapia", food: "Gochugaru-lime baked tilapia (130g, 200°C 12 min) + 1 cup cooked whole wheat soba + steamed broccoli + 1 tsp sesame oil", kcal: 380, protein: 34, fiber: 6, nutrients: "Omega-3, B12, Selenium, Fibre" },
        ],
        tip: "Run day runs a little higher on calories — everything except the tilapia is a reheat from Sunday, and the fish bakes in 12 minutes while the soba boils.",
      },
      {
        dow: "thu", day: "Thursday", emoji: "🔥", title: "North Indian — Paneer Tikka & Dal Tadka",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Besan chilla + egg", food: "2 besan (gram flour) veggie chillas with onion, tomato, spinach, ajwain, minimal oil + mint-coriander chutney + 1 boiled egg (from Sunday's batch)", kcal: 340, protein: 24, fiber: 6, nutrients: "Folate, Iron, B12, Fibre" },
          { meal: "Snack", time: "10 AM", short: "Chaas + roasted chana", food: "1 glass spiced buttermilk (low-fat curd, cumin, mint) + 2 tbsp roasted chana", kcal: 150, protein: 9, fiber: 3, nutrients: "Calcium, Probiotics, Protein" },
          { meal: "Lunch", time: "1 PM", short: "Paneer tikka plate", food: "100g paneer cubes (marinated this morning in curd, tandoori masala, lemon) pan-grilled with capsicum + onion + 1 small roti + mint chutney + cucumber salad", kcal: 460, protein: 26, fiber: 6, nutrients: "Calcium, Protein, Vit C" },
          { meal: "Snack", time: "4 PM", short: "Yogurt + walnuts", food: "150g Greek yogurt + 8 walnut halves", kcal: 195, protein: 16, fiber: 2, nutrients: "Calcium, Omega-3, Probiotics" },
          { meal: "Dinner", time: "7 PM", short: "Dal tadka + roti + palak", food: "3/4 cup dal (from Sunday's batch) with a fresh cumin-garlic-chilli tadka + 2 small rotis + sauteed spinach + 1 boiled egg (from Sunday's batch)", kcal: 480, protein: 25, fiber: 11, nutrients: "Iron, Folate, Fibre, B12" },
        ],
        tip: "The one prep moment today is dropping 100g of paneer into the tikka marinade after breakfast — 2 minutes, and it's ready to grill by lunch.",
      },
      {
        dow: "fri", day: "Friday", emoji: "🥢", title: "Miso Tofu & Tilapia Day",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Paneer bhurji toast", food: "Paneer bhurji: 100g paneer scrambled with onion, tomato, green chilli, turmeric, minimal oil on 1 slice whole grain toast + sliced tomato", kcal: 400, protein: 24, fiber: 5, nutrients: "Calcium, Protein, Iron" },
          { meal: "Snack", time: "10 AM", short: "Edamame + orange", food: "1/2 cup shelled edamame with sea salt + 1 small orange", kcal: 140, protein: 9, fiber: 6, nutrients: "Folate, Vit C, Iron, Fibre" },
          { meal: "Lunch", time: "1 PM", short: "Miso tofu salad bowl", food: "170g miso-ginger tofu (from Sunday's batch, served cold) + mixed greens, cucumber, carrot, 1/3 cup quinoa + 1/4 avocado + sesame-miso dressing", kcal: 470, protein: 34, fiber: 9, nutrients: "Iron, Calcium, Healthy fats, Fibre" },
          { meal: "Snack", time: "4 PM", short: "Apple + almonds", food: "1 apple + 12 almonds", kcal: 175, protein: 6, fiber: 5, nutrients: "Vit E, Magnesium, Potassium, Fibre" },
          { meal: "Dinner", time: "7 PM", short: "Miso-ginger tilapia", food: "Miso-ginger glazed tilapia (130g, 200°C 12 min) + 1/2 cup quinoa + roasted zucchini & capsicum", kcal: 400, protein: 33, fiber: 7, nutrients: "Omega-3, B12, Selenium, Vit C" },
        ],
        tip: "The same miso-ginger paste works double duty — it's the tofu marinade from Sunday and tonight's fish glaze, so there's nothing new to make.",
      },
      {
        dow: "sat", day: "Saturday", emoji: "💪", title: "Long Run — Chana Recovery Bowl",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Scrambled eggs + avocado toast", food: "2 scrambled eggs + 1 slice whole grain toast + 1/4 avocado + small OJ", kcal: 340, protein: 18, fiber: 6, nutrients: "B12, Vit C, Folate, Potassium" },
          { meal: "Pre-Run", time: "9 AM", short: "Banana + peanut butter", food: "1 banana + 1 tbsp peanut butter", kcal: 190, protein: 5, fiber: 3, nutrients: "Potassium, Magnesium — fast fuel" },
          { meal: "Post-Run", time: "12 PM", short: "Chana-egg recovery bowl", food: "1 cup chana masala (from Sunday's batch, defrosted — freeze it Sunday) + 2 boiled eggs (from Sunday's batch) + roasted sweet potato (100g) + spinach + 100g Greek yogurt-mint dressing", kcal: 590, protein: 38, fiber: 16, nutrients: "B12, Vit A, Iron, Potassium, Fibre" },
          { meal: "Snack", time: "4 PM", short: "Apple + pumpkin seeds", food: "1 apple + 2 tbsp roasted pumpkin seeds", kcal: 185, protein: 7, fiber: 5, nutrients: "Zinc, Magnesium, Fibre" },
          { meal: "Dinner", time: "7 PM", short: "Herb-lemon salmon + rice", food: "Pan-seared wild-caught salmon (130g, coriander-garlic-lemon-olive oil) + 1/2 cup brown rice + sauteed greens", kcal: 430, protein: 31, fiber: 5, nutrients: "Omega-3, B12, Potassium, Iron" },
        ],
        tip: "The long run earns today's highest calories — eat the recovery bowl within 60-90 minutes of finishing, and move the frozen chana portion to the fridge Friday night.",
      },
      {
        dow: "sun", day: "Sunday", emoji: "📦", title: "Palak Paneer & Prep Day",
        meals: [
          { meal: "Breakfast", time: "9 AM", short: "Egg uttapam + chutney", food: "2 veg uttapams (store-bought batter, topped with onion, tomato, carrot) each with an egg cooked into the top + tomato chutney", kcal: 380, protein: 22, fiber: 6, nutrients: "B12, Folate, Vit A, Fibre" },
          { meal: "Snack", time: "11 AM", short: "Yogurt + berries", food: "150g Greek yogurt + 1/2 cup berries + 1 tbsp pumpkin seeds", kcal: 190, protein: 18, fiber: 3, nutrients: "Calcium, Zinc, Vit C" },
          { meal: "Lunch", time: "1 PM", short: "Gochugaru egg fried rice", food: "2 eggs scrambled into 1/2 cup freshly cooked brown rice with 1/3 cup edamame, carrot, spring onion, 1 tsp gochugaru, soy sauce", kcal: 450, protein: 24, fiber: 8, nutrients: "B12, Iron, Folate, Fibre" },
          { meal: "Snack", time: "4 PM", short: "Apple + almonds", food: "1 apple + 12 almonds", kcal: 175, protein: 6, fiber: 5, nutrients: "Vit E, Magnesium, Potassium, Fibre" },
          { meal: "Dinner", time: "7 PM", short: "Light palak paneer + roti", food: "Palak paneer: 100g paneer in a blended spinach-onion-tomato gravy (no cream, 1 tsp oil) + 1 small roti + 1/3 cup brown rice", kcal: 450, protein: 28, fiber: 8, nutrients: "Calcium, Iron, Vit A, Folate" },
        ],
        tip: "Prep day — rice and dal for next week cook while you eat, and tonight's palak paneer is a gentle 20-minute fresh cook that finishes off the paneer.",
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
          "Chicken breast 320g (cooks down to ~240g — covers Mon lunch 110g + Wed lunch 110g)",
          "Paneer 300g (Thu lunch 100g + Fri breakfast 100g + Sun dinner 100g)",
          "Firm tofu 350g block (Tue dinner 170g + Fri lunch 170g)",
          "Tilapia fillets 260g (2 x 130g: Wed + Fri dinner)",
          "Wild-caught salmon fillet 130g (Sat dinner)",
          "Eggs (18, 1.5 dozen)",
          "Greek yogurt 900g tub (6 x 150g: Mon, Tue, Wed, Thu, Sat, Sun)",
          "Low-fat plain curd (Indian-style) 500g tub (marinades, chaas, chutney, kachumber)",
        ],
      },
      {
        name: "Legumes & Cans",
        items: [
          "Dried chickpeas (kabuli chana) 200g (1 cup), soaked overnight — makes ~2.5 cups for Tue lunch 1 cup + Wed post-run 1/2 cup + Sat post-run 1 cup",
          "Split yellow moong dal 120g (Mon sambar 3/4 cup + Thu dal tadka 3/4 cup)",
          "Roasted chana (small pack, 2 tbsp for Thursday's snack)",
          "Edamame, frozen shelled 200g (Tue, Fri, Sun)",
          "Miso paste (white/shiro), small tub",
        ],
      },
      {
        name: "Grains & Wraps",
        items: [
          "Brown rice 200g (1 cup dry — Mon, Tue x2, Sat, Sun x2)",
          "Quinoa 65g (1/3 cup dry — Fri lunch + dinner)",
          "Rolled oats, small pack (Wed)",
          "Besan (gram flour) 100g (Thu chillas)",
          "Idli/dosa batter, store-bought 400g (Mon idlis + Sun uttapams)",
          "Whole wheat tortilla (1)",
          "Whole wheat soba noodles, small pack (Wed)",
          "Whole wheat flour (atta) or store-bought rotis (6 small: Mon 1, Tue 1/2, Thu 3, Sun 1)",
          "Whole grain bread (small loaf — Fri + Sat toast, Wed post-run)",
          "Granola, small pack",
        ],
      },
      {
        name: "Vegetables",
        items: [
          "Baby spinach 400g (Thu x2, Sat, Sun palak paneer)",
          "Broccoli (1 small head)",
          "Sweet potato (1)",
          "Capsicum, mixed colors (3)",
          "Carrots (5)",
          "Tomatoes (10 — gravies, chutney, chilla, kachumber, bhurji, uttapam)",
          "Cherry tomatoes (1 punnet)",
          "Cucumber (5)",
          "Zucchini (1)",
          "Cabbage, small (1/4 for Mon poriyal; use the rest for slaw)",
          "Bok choy (1 bunch)",
          "Mixed salad greens/lettuce, 1 bag",
          "Spring onion (1 bunch)",
          "Red onion (3)",
          "Brown onion (6)",
          "Garlic (2 bulbs)",
          "Fresh ginger (1 large piece)",
          "Green chillies (5)",
          "Curry leaves (1 sprig)",
          "Fresh coriander (2 bunches)",
          "Fresh mint (1 bunch)",
          "Avocado (1)",
        ],
      },
      {
        name: "Fruits",
        items: [
          "Berries 300g (fresh or frozen)",
          "Bananas (3)",
          "Apples (5)",
          "Lemons (6) + 1 lime",
          "Small orange (1, Fri snack)",
          "Orange juice, small (1 serving, Sat breakfast)",
        ],
      },
      {
        name: "Fats & Extras",
        items: [
          "Extra virgin olive oil",
          "Sesame oil",
          "Almonds 60g",
          "Walnuts 30g",
          "Pumpkin seeds 50g",
          "Chia seeds 30g",
          "Peanut butter (natural)",
          "Honey",
          "Low-sodium soy sauce",
          "Sesame seeds (garnish)",
        ],
      },
      {
        name: "Spices — check cupboard first",
        items: [
          "Cumin seeds + ground cumin",
          "Coriander powder",
          "Turmeric",
          "Kashmiri red chilli powder",
          "Garam masala",
          "Chana masala powder (or extra garam masala + amchur)",
          "Tandoori masala",
          "Chaat masala",
          "Mustard seeds",
          "Sambar powder",
          "Ajwain (carom seeds)",
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
    multitask: "Chana (step 1, pressure cooker) + tandoori chicken marinate & bake (step 2, oven) + dal (step 4, second hob) + tofu marinate & sear (step 3, pan) all start together. Rice and quinoa (step 6) go on once the chana is on its gravy simmer. Eggs (step 5) boil in a small pot alongside everything. Chutney (step 7), glaze (step 8), fish portioning (step 9), chopping (step 10), and final portioning (step 11) fill the gaps while everything simmers.",
    steps: [
      { num: 1, task: "Chana Masala Batch", how: "Pressure-cook 1 cup soaked dried chickpeas 20-25 min (or 60+ min on the hob) until soft. Make a light gravy: sauté 1 chopped onion + 3 chopped tomatoes + 1 tbsp ginger-garlic with 1 tsp oil, 1 tsp chana masala powder, 1/2 tsp turmeric, 1 tsp cumin, 1 tsp coriander powder, add chickpeas + a splash of water, simmer 10 min. Makes ~2.5 cups. Split: 1 cup for Tue lunch, 1/2 cup for Wed post-run chaat, 1 cup for Sat post-run bowl — FREEZE the Saturday portion and move it to the fridge Friday night. Covers Tue lunch + Wed post-run + Sat post-run.", timing: "0-35 min (pressure-cooker) + 10 min gravy" },
      { num: 2, task: "Tandoori Chicken Batch", how: "Marinate 320g chicken breast (cut into 2 large pieces) in 1/2 cup low-fat curd + 1 tbsp tandoori masala + 1 tsp Kashmiri chilli + lemon + 1 tbsp ginger-garlic, 20 min. Bake at 200°C for 18-20 min (or pan-grill 12-15 min per side), rest, then slice and split into 2 portions of ~110g cooked. Covers Mon lunch + Wed lunch.", timing: "0-30 min" },
      { num: 3, task: "Miso-Ginger Tofu + Paste", how: "Mix 3 tbsp white miso + 1 tbsp soy sauce + 1 tbsp honey + 1 tbsp grated ginger + 1 tsp sesame oil + 2 tbsp water. Press 350g tofu, cut into 2 halves, coat in 2 tbsp of the paste and pan-sear until crisp (~12 min). Keep the other 2 tbsp of paste in a jar. Covers Tue dinner (170g) + Fri lunch (170g, served cold) + the paste for Fri's tilapia glaze.", timing: "10-25 min" },
      { num: 4, task: "Sambar-Style Moong Dal", how: "Boil 120g split moong dal with 1 chopped carrot, 1 tomato, turmeric, and 1 tsp sambar powder for 20-25 min until soft. Makes ~1.75 cups. Keep 3/4 cup thin for Mon breakfast sambar and 3/4 cup a little thicker for Thu's dal tadka (fresh cumin-garlic tadka goes on Thursday night). Covers Mon breakfast + Thu dinner.", timing: "0-25 min" },
      { num: 5, task: "Boil Eggs", how: "8 eggs, cold water start, boil 9 min, then ice bath and peel. Covers Mon breakfast (1), Tue snack (2), Thu breakfast (1), Thu dinner (1), Sat post-run (2) — 7 used, 1 spare. (Mon dinner, Wed breakfast, Sat breakfast, and Sun meals use fresh eggs.)", timing: "10-20 min" },
      { num: 6, task: "Brown Rice + Quinoa", how: "Cook 1 cup dry brown rice (30 min) for Mon, Tue (x2), and Sat portions (Sunday's meals use freshly cooked rice). Cook 1/3 cup dry quinoa (15 min) for Fri lunch + dinner.", timing: "0-30 min" },
      { num: 7, task: "Mint-Coriander Chutney", how: "Blend 1 bunch each coriander + mint with 2 green chillies, lemon juice, 2 tbsp curd, and a pinch of salt. Covers Wed wrap, Thu chilla + tikka plate, and any snack dips.", timing: "5 min" },
      { num: 8, task: "Gochugaru-Lime Glaze (small jar)", how: "Mix 1 tbsp gochugaru + juice of 1 lime + 1 tsp honey + 1 tsp soy sauce + a little water. Used for Wed's baked tilapia only — Friday's tilapia uses the miso paste from step 3.", timing: "3 min" },
      { num: 9, task: "Portion Fish for the Week", how: "Pat dry and portion the tilapia (2 x 130g) and salmon (130g) into individual bags. Keep Wednesday's tilapia in the fridge; freeze Friday's tilapia and Saturday's salmon, moving each to the fridge the night before. Fish is best cooked fresh, not pre-cooked.", timing: "5 min" },
      { num: 10, task: "Chop & Wash", how: "Mince ginger and garlic, slice onions, wash and chop spinach, bok choy, zucchini, capsicum, carrots, cabbage. Portion into small containers so weeknight cooking is just assembly.", timing: "10 min" },
      { num: 11, task: "Portion + Label", how: "Pack snack bags (12 almonds + 1 fruit per day). Chana, dal, tofu, chicken, and eggs go into labeled containers on one fridge shelf; chutney and glaze jars in the door. Sunday's meals are cooked fresh (and the rice for next week starts then).", timing: "10 min" },
    ],
    newIngredients: [
      { name: "Miso paste", note: "A fermented soybean paste that adds savory depth to this week's tofu marinade and fish glaze — look for white (shiro) miso, which is mild and a bit sweet. Sold at most supermarkets in the refrigerated or Asian aisle; it keeps for months in the fridge." },
      { name: "Tandoori masala", note: "A North Indian spice blend (chilli, cumin, coriander, garam masala) used with curd to marinate this week's chicken and paneer tikka — the red cousin of last week's green hariyali marinade. Sold at any Indian grocer." },
      { name: "Egg podimas", note: "A South Indian-style egg scramble cooked with onion, tomato, green chilli, and curry leaves — a quick 10-minute dinner, no special ingredient required." },
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
