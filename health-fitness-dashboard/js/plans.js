// Your coaching content: workouts, running plan, nutrition plan, grocery list.
// This is reference content rendered in the "Plans" tab. Edit freely as your coach adjusts things.
window.PLANS = {

  // Rebuilt from her "Workout Plan V2" PDF — PCOS/insulin-resistance focused, APT
  // (anterior pelvic tilt) correction built in, 3 gym days/week + 2 active-rest walk
  // days + 1 run day + 1 full rest day.
  workouts: {
    // Daily, before every session — not just gym days.
    aptRoutine: {
      title: "Anterior Pelvic Tilt (APT) — Fix It First",
      timing: "Daily · 10 min · Mat + resistance band · Before every session",
      note: "Tight hip flexors + weak glutes + weak deep core tip your pelvis forward — that's the belly-poke-out-even-when-thin look and the tight lower back. Fix the imbalance and the tilt corrects itself. Do this every day, not just gym days.",
      exercises: [
        { exercise: "Hip Flexor Lunge Stretch", target: "Hip flexors (tight — KEY)", sets: "1 ea side", reps: "45 sec hold", rest: "—", cue: "Kneeling lunge, push hips forward gently, tuck pelvis under. The #1 APT fix — never skip it." },
        { exercise: "90/90 Hip Stretch", target: "Hip flexors, glute med", sets: "1 ea side", reps: "45 sec hold", rest: "—", cue: "Both legs at 90°, torso upright, lean slightly over front shin. Hips stay level." },
        { exercise: "Dead Bug", target: "Deep core (TVA)", sets: "3", reps: "8 ea side", rest: "30 sec", cue: "Lower back FLAT the entire time — exhale hard before moving. If back lifts, make the movement smaller." },
        { exercise: "Glute Bridge", target: "Glutes, posterior chain", sets: "3", reps: "15", rest: "30 sec", cue: "Drive through heels, squeeze glutes hard at top, hold 2 sec." },
        { exercise: "Resistance Band Clamshell", target: "Glute med, outer hip", sets: "2 ea side", reps: "15", rest: "30 sec", cue: "Band above knees, side-lying. Open top knee without rotating your pelvis." },
        { exercise: "Hollow Body Hold", target: "Anterior core, APT correction", sets: "3", reps: "20-30 sec hold", rest: "30 sec", cue: "Press lower back into the floor — if it lifts, raise legs higher. This is the opposite of APT." },
        { exercise: "Cat-Cow", target: "Spine mobility, lower back", sets: "1", reps: "10 rounds", rest: "—", cue: "Slow and deliberate — inhale on cow, exhale on cat. Do this one last." },
      ],
    },
    warmup: {
      title: "Pre-Workout Warm-Up",
      timing: "10 min · Every session · Non-negotiable",
      note: "Increases strength 10-15% and cuts injury risk 50%. The incline treadmill walk starts glucose uptake in your legs before you even touch a weight.",
      exercises: [
        { exercise: "Treadmill Walk (incline 2-3)", sets: "1", reps: "5 min", cue: "Brisk walk, not a stroll — incline activates glutes and calves." },
        { exercise: "Leg Swings (front/back)", sets: "1", reps: "10 ea leg", cue: "Loose and controlled, hold the wall for balance." },
        { exercise: "Leg Swings (side to side)", sets: "1", reps: "10 ea leg", cue: "Opens hip flexors and groin." },
        { exercise: "Hip Circles", sets: "1", reps: "10 ea direction", cue: "Big slow circles, hands on hips." },
        { exercise: "Arm Circles", sets: "1", reps: "10 ea way", cue: "Big slow circles forward then backward." },
        { exercise: "Bodyweight Squats", sets: "1", reps: "10", cue: "Slow and controlled, sit back like a chair." },
        { exercise: "Glute Bridges (no weight)", sets: "1", reps: "12", cue: "Push hips up, squeeze glutes hard at top — activates them before training." },
        { exercise: "Cat-Cow", sets: "1", reps: "8 rounds", cue: "Mobilises the lumbar spine stiffened by sitting." },
      ],
    },
    coreEngagementGuide: [
      "Brace — imagine someone's about to punch your stomach, tighten your abs to protect yourself.",
      "Breathe — never hold your breath. Exhale on effort, inhale on return.",
      "Neutral spine — a small natural curve in your lower back, not flat, not arched.",
      "Ribs down — pull your lower ribs down slightly. This stops the lower back arching (that's APT).",
      "Test it — hand on belly, hand on lower back, brace, feel your belly go slightly in and firm. That's correct activation.",
    ],
    stretchLibrary: {
      timing: "10-12 min · Yoga mat · After every session · Reduces soreness 30%",
      note: "Stretching while warm is when you gain real flexibility — these also directly counter sitting all day and support your APT correction. For insulin resistance, cooldown keeps glucose uptake elevated longer after you finish.",
      lowerBody: [
        { exercise: "Hip Flexor Lunge Stretch", hold: "45 sec ea side", cue: "Your most important stretch — directly corrects APT, every session, no exceptions." },
        { exercise: "Standing Quad Stretch", hold: "40 sec ea side", cue: "Squeeze the glute of the stretching leg to deepen it." },
        { exercise: "Seated Hamstring Stretch", hold: "45 sec both", cue: "Hinge from the hips, not the back, reach toward your toes." },
        { exercise: "Pigeon Pose / Figure-4", hold: "50 sec ea side", cue: "Loosens glutes so they can activate properly." },
        { exercise: "90/90 Hip Stretch", hold: "45 sec ea side", cue: "Torso upright, hips stay level." },
        { exercise: "Calf Stretch (straight leg)", hold: "40 sec ea leg", cue: "Hands on wall, back heel flat, leg straight." },
        { exercise: "Calf Stretch (bent knee)", hold: "40 sec ea leg", cue: "Same position, bend the back knee slightly — targets the Achilles." },
        { exercise: "Child's Pose", hold: "60 sec", cue: "Decompresses the spine after loading." },
      ],
      upperBody: [
        { exercise: "Chest Opener", hold: "30 sec", cue: "Clasp hands behind back, squeeze shoulder blades, lift chest." },
        { exercise: "Cross-Body Shoulder Stretch", hold: "30 sec ea side", cue: "Pull one arm across chest with the opposite hand." },
        { exercise: "Thread the Needle", hold: "30 sec ea side", cue: "On all fours, thread one arm under your body, rotate torso." },
        { exercise: "Neck Side Stretch", hold: "20 sec ea side", cue: "Tilt ear to shoulder gently — never pull." },
        { exercise: "Doorway / Band Chest Stretch", hold: "30 sec", cue: "Band behind you at waist height, gently pull and lift." },
        { exercise: "Cat-Cow Spine Mobilisation", hold: "8 rounds", cue: "Slow and deliberate — feel every vertebra move." },
      ],
    },
    bandRoutine: {
      title: "Resistance Band Routine — Home / Rest Days",
      timing: "No gym needed · 15-20 min · Mat + band · Active recovery days",
      note: "Use on Tuesday/Thursday rest-walk days if you want extra activation, or whenever you can't make the gym. Supports APT correction and adds glucose-disposing glute work.",
      exercises: [
        { exercise: "Band Glute Bridge", target: "Glutes, hamstrings", sets: "3", reps: "15", rest: "30 sec", cue: "Push knees outward against the band the whole time, 2-sec hold at top." },
        { exercise: "Band Clamshell", target: "Glute medius, outer hip", sets: "2 ea side", reps: "15", rest: "30 sec", cue: "Side-lying, open top knee without rotating your pelvis." },
        { exercise: "Band Lateral Walk", target: "Hip abductors, glute med", sets: "2 ea way", reps: "12", rest: "30 sec", cue: "Slight squat, keep tension in the band the whole time, chest tall." },
        { exercise: "Band Donkey Kick", target: "Glutes", sets: "2 ea side", reps: "15", rest: "30 sec", cue: "Kick straight back and up, hold the squeeze 1 sec." },
        { exercise: "Band Pull-Apart", target: "Rear delts, posture", sets: "3", reps: "15", rest: "20 sec", cue: "Pull apart to chest, squeeze shoulder blades — fixes rounded desk shoulders." },
        { exercise: "Band Good Morning", target: "Hamstrings, lower back", sets: "2", reps: "12", rest: "30 sec", cue: "Band around neck, hinge at the hips, push them back." },
        { exercise: "Band Pallof Press", target: "Core, obliques, waist", sets: "2 ea side", reps: "10", rest: "30 sec", cue: "Press straight out, resist the band pulling you sideways." },
        { exercise: "Band Dead Bug", target: "Deep core (TVA)", sets: "2 ea side", reps: "8", rest: "30 sec", cue: "Lower back flat throughout, press up against band tension." },
      ],
    },

    mon: {
      title: "Lower Body A — Glute Focus",
      timing: "45-50 min · Gym",
      note: "Most important session of the week — glutes + hamstrings are your largest muscle group. Maximum glucose disposal, direct attack on insulin resistance and belly fat. Never skip.",
      blocks: [
        { exercise: "Hip Thrust (Barbell or DB)", target: "Glutes — PRIMARY", sets: "4", reps: "8-10", rest: "90 sec", cue: "Drive through heels, squeeze glutes hard at top for 1 full second. #1 exercise — never cut this, do all 4 sets." },
        { exercise: "Romanian Deadlift (DB)", target: "Hamstrings, glutes", sets: "3", reps: "10-12", rest: "75 sec", cue: "Push hips back, not bending at the waist — weights stay close to your shins." },
        { exercise: "Leg Press (Machine)", target: "Quads, glutes", sets: "3", reps: "12-15", rest: "75 sec", cue: "Lower to 90°, no deeper if your lower back lifts off the pad." },
        { exercise: "Cable Kickback / Donkey Kick", target: "Glute squeeze", sets: "3", reps: "15 ea", rest: "60 sec", cue: "Controlled only — don't swing the leg." },
        { exercise: "Hip Abduction (Machine)", target: "Outer glutes (glute med)", sets: "3", reps: "15-20", rest: "60 sec", cue: "No momentum, slow on the way back in, sit tall." },
        { exercise: "Seated / Lying Hamstring Curl", target: "Hamstrings", sets: "3", reps: "12-15", rest: "60 sec", cue: "Pause 1 sec at the bottom, lower in 2 full seconds." },
        { exercise: "Standing Calf Raise", target: "Calves", sets: "3", reps: "15-20", rest: "45 sec", cue: "Hold 2 sec at top, lower slowly in 3 seconds." },
        { exercise: "Lateral Band Walk", target: "Hip abductors, outer glutes", sets: "3", reps: "12 ea way", rest: "45 sec", cue: "Keep tension in the band — don't let knees cave in." },
      ],
      cooldown: "Walk 10 min, then the full stretch routine, then eat within 45 minutes.",
    },
    tue: {
      title: "Rest — Walk 20-30 min",
      type: "rest",
      note: "10 min walk after lunch and after dinner — non-negotiable on rest days. Post-meal walks lower blood glucose by up to 30%. Optional: the resistance band routine below, or swap in Upper Body B if this is a 4-day week.",
      blocks: [],
    },
    wed: {
      title: "Upper Body A + Core + APT",
      timing: "45-50 min · Gym",
      note: "Builds a defined back, toned arms, and shoulder width. Core work at the end targets the deep stabiliser muscles tied to insulin sensitivity.",
      blocks: [
        { exercise: "Lat Pulldown (Machine)", target: "Back width, lats", sets: "4", reps: "8-10", rest: "90 sec", cue: "Pull to upper chest (not behind neck), squeeze shoulder blades down and together." },
        { exercise: "Dumbbell Shoulder Press", target: "Shoulders (all heads)", sets: "3", reps: "10-12", rest: "75 sec", cue: "Press straight up without arching your lower back." },
        { exercise: "Seated Cable Row", target: "Mid-back, biceps", sets: "3", reps: "10-12", rest: "75 sec", cue: "Pull to your belly button, keep torso still — no rocking." },
        { exercise: "Lateral Raises (DB)", target: "Side deltoids", sets: "3", reps: "12-15", rest: "60 sec", cue: "Lead with elbows, raise to shoulder height only, lower in 2 full seconds." },
        { exercise: "Dumbbell Bicep Curl", target: "Biceps", sets: "3", reps: "12", rest: "60 sec", cue: "Elbows pinned to your sides, full range, slow 3-sec lower." },
        { exercise: "Tricep Rope Pushdown", target: "Triceps", sets: "3", reps: "12-15", rest: "60 sec", cue: "Elbows fixed at your sides, splay rope ends outward and squeeze at the bottom." },
        { exercise: "Face Pull (wide grip cable)", target: "Rear delts, rotator cuff", sets: "3", reps: "15", rest: "45 sec", cue: "Pull to your face, elbows flare out and back, hold 2 sec. Non-negotiable for desk posture." },
        { exercise: "Dead Bug (Core)", target: "Deep core, TVA", sets: "3", reps: "10 ea side", rest: "45 sec", cue: "Lower back flat the whole time — directly helps insulin resistance." },
      ],
      cooldown: "Full stretch routine. No cable machine for face pulls? Sub bent-over dumbbell rear delt fly.",
    },
    thu: {
      title: "Rest — Walk 20-30 min",
      type: "rest",
      note: "Same as Tuesday — 10 min walk after lunch and after dinner. Also an option for Upper Body B on a 4-day week.",
      blocks: [],
    },
    fri: {
      title: "Lower Body B — Quad Focus",
      timing: "45-50 min · Gym",
      note: "Second leg session — hitting legs twice weekly nearly doubles your weekly glucose disposal. The single most important structural change for insulin resistance and belly fat.",
      blocks: [
        { exercise: "Goblet Squat (DB)", target: "Quads, glutes", sets: "4", reps: "10-12", rest: "90 sec", cue: "Chest tall, sit down between your knees, drive knees out, 3-sec descent — don't drop." },
        { exercise: "Reverse Lunge (DB)", target: "Quads, glutes, balance", sets: "3", reps: "10 ea leg", rest: "75 sec", cue: "Step straight back, front knee tracks over your toes." },
        { exercise: "Bulgarian Split Squat (DB)", target: "Quads, glutes — tough!", sets: "3", reps: "8-10 ea", rest: "90 sec", cue: "Rear foot elevated, lower until front thigh is parallel. Take the full rest — this will burn." },
        { exercise: "Leg Extension (Machine)", target: "Quads isolation", sets: "3", reps: "15", rest: "60 sec", cue: "Hold 2 sec at top, 3-sec slow lower — the eccentric builds most muscle." },
        { exercise: "Sumo Squat (DB)", target: "Inner thighs, glutes", sets: "3", reps: "12-15", rest: "60 sec", cue: "Wide stance, toes out 45°, push knees out as you lower." },
        { exercise: "Glute Bridge (Weighted)", target: "Glutes, hamstrings", sets: "3", reps: "15", rest: "60 sec", cue: "Squeeze at the top for 2 full seconds." },
        { exercise: "Hollow Body Hold", target: "Core, anterior chain", sets: "3", reps: "20-30 sec hold", rest: "45 sec", cue: "Press lower back into the floor — if it lifts, raise legs higher." },
        { exercise: "Russian Twist (light weight)", target: "Obliques, waist", sets: "3", reps: "20 total", rest: "45 sec", cue: "Rotate from the waist, touch the weight to the floor each side." },
      ],
      cooldown: "Walk 10 min immediately, full stretch routine, foam roll glutes and IT band especially.",
    },
    sat: {
      title: "Run + Stretch",
      timing: "40-50 min · Outdoor / treadmill",
      note: "Follow this week's target from the 14-Week Running Plan below.",
      blocks: [],
      cooldown: "Post-run (non-negotiable): 3 min walk → 6 stretches (hip flexor, quad, hamstring, pigeon, both calves) → foam roll calves/IT band/glutes → eat protein + carbs within 45 min. This prevents every common running injury.",
    },
    sun: {
      title: "Rest — Meal Prep + Light Walk",
      type: "rest",
      note: "Full rest. Meal prep. 20 min walk after your biggest meal.",
      blocks: [],
    },

    // Optional 4th gym session — not assigned to a fixed weekday. The PDF's own progression
    // guide says add this from Month 4+, but it's here from day one for weeks you want to do
    // 4 days instead of 3 — swap it into any rest day (Tue/Thu/Sun).
    upperB: {
      title: "Upper Body B — Chest, Shoulders, Arms, Core (Optional 4th Session)",
      timing: "45 min · Gym · Swap into Tue, Thu, or Sun on a 4-day week",
      note: "Builds the pectoral muscles underneath the breast tissue for a natural lift — flat press for overall chest mass, incline press for the upper pec that creates the lift, fly for the full stretch. Face pulls and rear delt work pull shoulders back, which alone improves posture and lift.",
      blocks: [
        { exercise: "Dumbbell Chest Press (Bench)", target: "Chest, triceps", sets: "4", reps: "8-10", rest: "90 sec", cue: "Feet flat, arch naturally, dumbbells to chest, drive up and slightly inward — don't flare elbows too wide." },
        { exercise: "Arnold Press (DB)", target: "All 3 shoulder heads", sets: "3", reps: "10", rest: "75 sec", cue: "Palms face you at the start, rotate to palms away as you press up, reverse on the way down." },
        { exercise: "Incline Dumbbell Press — LIFT FOCUS", target: "Upper chest (KEY for lift)", sets: "3", reps: "10-12", rest: "75 sec", cue: "Bench at 30-45° only. Press up and slightly inward — this upper pec lifts the chest from underneath. Do NOT skip this one." },
        { exercise: "Hammer Curl (DB)", target: "Biceps, brachialis, forearms", sets: "3", reps: "12", rest: "60 sec", cue: "Neutral grip, elbows fixed, 3-sec lower builds the peak." },
        { exercise: "Overhead Tricep Extension (DB)", target: "Triceps (long head)", sets: "3", reps: "12", rest: "60 sec", cue: "One dumbbell, both hands, overhead — elbows point forward and stay close." },
        { exercise: "Cable Chest Fly / DB Fly", target: "Chest, shoulder", sets: "3", reps: "12-15", rest: "60 sec", cue: "Slight bend in elbows throughout — think hugging a tree. Squeeze chest at close, don't go too heavy." },
        { exercise: "Plank Hold", target: "Full core, shoulders", sets: "3", reps: "30-40 sec hold", rest: "45 sec", cue: "Forearms down, straight line, hips not raised not sagging. Squeeze glutes and core and quads together." },
        { exercise: "Pallof Press (anti-rotation cable)", target: "Core, obliques", sets: "3", reps: "10 ea side", rest: "45 sec", cue: "Stand sideways to the cable, press straight out, hold 2 sec. Resist it trying to rotate you — targets waist tightening." },
      ],
      cooldown: "Incline angle matters: 30-45° only — any steeper turns it into a shoulder exercise. Flat + incline together = complete chest development. No cable machine for Pallof press? Sub band Pallof press anchored to a door.",
    },

    progression: {
      note: "Progressive overload is the only rule that matters long-term — same weight, same reps, forever means nothing changes after week 3. Log every session: exercise | weight used | reps completed | how it felt.",
      weightRule: "Add weight ONLY when you complete ALL sets at the TOP of the rep range with perfect form and still feel like you could do 2 more reps. Dumbbells: go up 1 size (1-2kg). Machines: add 1 pin (2.5-5kg). If the new weight feels too heavy, drop back and add 1 extra rep instead — reps before weight.",
      phases: [
        { phase: "Learn Movements", weeks: "1-2", whatToDo: "Light weight, 100% focus on form. Don't push to failure. Record all weights used.", signs: "You complete all reps with good form and don't feel broken the next day." },
        { phase: "Build Confidence", weeks: "3-4", whatToDo: "Same weights as weeks 1-2, add 1 extra rep per set if possible. Focus on feeling the target muscle work.", signs: "You hit the top of the rep range consistently and feel the right muscle working." },
        { phase: "First Progression", weeks: "5-6", whatToDo: "All sets at the top of the rep range with good form? Add 0.5-2kg next session. Add a resistance band to all glute exercises.", signs: "First weight increases happen. Your lower back feels less tight — APT improving." },
        { phase: "Overload Begins", weeks: "7-8", whatToDo: "Progressive overload every 1-2 weeks. Keep a training log. Don't miss leg days.", signs: "Muscles feel genuinely worked, not just tired. Clothes starting to fit differently." },
        { phase: "Strength Building", weeks: "9-12", whatToDo: "Increase weights more regularly. Add 1 set to your main compound lifts (hip thrust, squat, press). You're no longer a beginner.", signs: "Noticeable strength vs week 1. People ask if you've lost weight. Lower back pain gone." },
        { phase: "Intermediate Transition", weeks: "Month 4+", whatToDo: "Start periodisation — heavier weeks followed by lighter deload weeks. Add Upper Body B as a 4th session if doing 3-day weeks.", signs: "Different body, different strength — you've built the foundation." },
      ],
    },

    pcosRules: {
      note: "Specific rules for insulin resistance / PCOS — the structural reason this plan looks the way it does.",
      rules: [
        { rule: "Never skip Lower Body sessions", why: "Leg muscles are your primary glucose disposal organs — missing one is like missing a medication dose." },
        { rule: "Walk 10 min after every meal", why: "Post-meal walks lower blood glucose by up to 30%." },
        { rule: "Keep sessions under 60 minutes", why: "Beyond 60 min, cortisol rises sharply and worsens insulin resistance + belly fat storage." },
        { rule: "Train after a light snack (evening training)", why: "A light protein snack 1.5h before keeps energy stable without spiking insulin." },
        { rule: "Do the APT routine daily", why: "Anterior pelvic tilt compresses abdominal organs and worsens insulin sensitivity." },
        { rule: "Don't do excessive cardio", why: "Long cardio raises cortisol — 2 runs/week at your current volume is the sweet spot." },
        { rule: "Prioritise sleep above all else", why: "3 nights of poor sleep worsens insulin resistance by 25%. 7-8 hours, non-negotiable." },
        { rule: "Track your weights every session", why: "Progressive overload is the mechanism that drives long-term insulin sensitivity improvement." },
        { rule: "Add resistance bands to all leg sessions", why: "Activates the glute medius — a large, often-underworked muscle with real glucose disposal." },
      ],
    },
  },

  // 14-week build to 10K from your 5K/45min base, from Workout Plan V2. Runs happen
  // Saturday only per the new weekly schedule (the plan's own header says "Wed + Sat" —
  // that looks like leftover text from an earlier version, since the Option A weekly
  // schedule only lists one run day. Flagged this for her to confirm; built for
  // Saturday-only in the meantime.
  runningPlan: {
    startNote: "14-week build to 10K. Plan starts the week you begin logging runs (Settings tab lets you set/override the start date). Breathing cue for intervals: in through the nose for 2 steps, out through the mouth for 2 steps — if you can't talk in full sentences, slow down.",
    weeks: [
      { week: 1, wed: "—", sat: "Run 2 min / Walk 1 min x 8 rounds (~25 min)", focus: "Foundation — get comfortable, pace doesn't matter, just complete it." },
      { week: 2, wed: "—", sat: "Run 2 min / Walk 1 min x 8 rounds (~25 min)", focus: "Foundation — same format, let it start feeling familiar." },
      { week: 3, wed: "—", sat: "Run 2 min / Walk 1 min x 8 rounds (~25 min)", focus: "Foundation — notice your breathing settling into the 2-2 rhythm." },
      { week: 4, wed: "—", sat: "Run 2 min / Walk 1 min x 8 rounds (~25 min)", focus: "Foundation — last week of this format before building." },
      { week: 5, wed: "—", sat: "Run 5 min / Walk 1 min x 5 rounds (~30 min)", focus: "Building — maintain the 2-2 breathing through the full 5-min intervals. This is where endurance builds." },
      { week: 6, wed: "—", sat: "Run 5 min / Walk 1 min x 5 rounds (~30 min)", focus: "Building — the 5-min stretches should start feeling more manageable." },
      { week: 7, wed: "—", sat: "Run 5 min / Walk 1 min x 5 rounds (~30 min)", focus: "Building — last week before continuous running." },
      { week: 8, wed: "—", sat: "Run 20 min non-stop (~25 min)", focus: "Continuous — belly breathing, run slow enough to hold a conversation. Aerobic base building." },
      { week: 9, wed: "—", sat: "Run 20 min non-stop (~25 min)", focus: "Continuous — same effort, let it get easier." },
      { week: 10, wed: "—", sat: "Run 20 min non-stop (~25 min)", focus: "Continuous — last week before stretching the distance." },
      { week: 11, wed: "—", sat: "25-30 min continuous, easy long-run pace", focus: "Race prep — nasal breathing where possible, trains breathing efficiency." },
      { week: 12, wed: "—", sat: "25-30 min continuous, easy long-run pace", focus: "Race prep — this is your long run, stay at an easy, conversational pace." },
      { week: 13, wed: "—", sat: "25-30 min continuous, easy long-run pace", focus: "Race prep — one more steady week at this volume." },
      { week: 14, wed: "—", sat: "25-30 min continuous — roughly 10K-ready depending on pace", focus: "By here you're running 25-30 min continuously without stopping. That's your 14-week build complete." },
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
