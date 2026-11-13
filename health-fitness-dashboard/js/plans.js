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
    wed: {
      title: "Rest — Walk 20-30 min",
      type: "rest",
      note: "10 min walk after lunch and after dinner — non-negotiable on rest days. Post-meal walks lower blood glucose by up to 30%. Optional: the resistance band routine below.",
      blocks: [],
    },
    thu: {
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
    fri: {
      title: "Upper Body B — Chest, Shoulders, Arms, Core",
      timing: "45 min · Gym",
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

    // 3-session full-body alternative for weeks you can only manage 3 gym days instead of 4.
    // Not from the PDF (it only designs the 4-day split) — built from the same exercises
    // already in your plan above, recombined to hit everything in fewer sessions. Swap these
    // in on your normal gym days (e.g. Mon/Thu/Fri) and skip the rest that week.
    fullBody: {
      note: "On a week you can only get to the gym 3x, do these instead of the split sessions — each one hits legs, back, chest, and core so nothing gets skipped entirely. Same APT routine, warm-up, and stretch library apply exactly the same way.",
      sessions: [
        {
          title: "Full Body A — Glutes + Back Emphasis",
          timing: "45-50 min · Gym",
          blocks: [
            { exercise: "Hip Thrust (Barbell or DB)", target: "Glutes — PRIMARY", sets: "3", reps: "10-12", rest: "90 sec", cue: "Drive through heels, squeeze glutes hard at top for 1 full second." },
            { exercise: "Lat Pulldown (Machine)", target: "Back width, lats", sets: "3", reps: "10-12", rest: "75 sec", cue: "Pull to upper chest, squeeze shoulder blades down and together." },
            { exercise: "Romanian Deadlift (DB)", target: "Hamstrings, glutes", sets: "3", reps: "10", rest: "75 sec", cue: "Push hips back, not bending at the waist — weights stay close to your shins." },
            { exercise: "Dumbbell Shoulder Press", target: "Shoulders (all heads)", sets: "3", reps: "10-12", rest: "60 sec", cue: "Press straight up without arching your lower back." },
            { exercise: "Goblet Squat (DB)", target: "Quads, glutes", sets: "2", reps: "10-12", rest: "75 sec", cue: "Chest tall, sit down between your knees, drive knees out." },
            { exercise: "Dead Bug (Core)", target: "Deep core, TVA", sets: "3", reps: "10 ea side", rest: "45 sec", cue: "Lower back flat the whole time — exhale hard before moving." },
            { exercise: "Lateral Band Walk", target: "Hip abductors, outer glutes", sets: "2", reps: "12 ea way", rest: "45 sec", cue: "Keep tension in the band, don't let knees cave in." },
          ],
          cooldown: "Walk 10 min, full stretch routine, eat within 45 minutes.",
        },
        {
          title: "Full Body B — Quads + Chest Emphasis",
          timing: "45-50 min · Gym",
          blocks: [
            { exercise: "Leg Press (Machine)", target: "Quads, glutes", sets: "3", reps: "12-15", rest: "75 sec", cue: "Lower to 90°, no deeper if your lower back lifts off the pad." },
            { exercise: "Dumbbell Chest Press (Bench)", target: "Chest, triceps", sets: "3", reps: "8-10", rest: "90 sec", cue: "Dumbbells to chest, drive up and slightly inward." },
            { exercise: "Bulgarian Split Squat (DB)", target: "Quads, glutes", sets: "2", reps: "8-10 ea", rest: "90 sec", cue: "Rear foot elevated, lower until front thigh is parallel." },
            { exercise: "Seated Cable Row", target: "Mid-back, biceps", sets: "3", reps: "10-12", rest: "75 sec", cue: "Pull to your belly button, keep torso still." },
            { exercise: "Lateral Raises (DB)", target: "Side deltoids", sets: "2", reps: "12-15", rest: "60 sec", cue: "Lead with elbows, raise to shoulder height only." },
            { exercise: "Hollow Body Hold", target: "Core, anterior chain", sets: "3", reps: "20-30 sec hold", rest: "45 sec", cue: "Press lower back into the floor — if it lifts, raise legs higher." },
            { exercise: "Standing Calf Raise", target: "Calves", sets: "2", reps: "15-20", rest: "45 sec", cue: "Hold 2 sec at top, lower slowly in 3 seconds." },
          ],
          cooldown: "Walk 10 min, full stretch routine, foam roll glutes and IT band.",
        },
        {
          title: "Full Body C — Balance + Arms/Core Finisher",
          timing: "45-50 min · Gym",
          blocks: [
            { exercise: "Reverse Lunge (DB)", target: "Quads, glutes, balance", sets: "3", reps: "10 ea leg", rest: "75 sec", cue: "Step straight back, front knee tracks over your toes." },
            { exercise: "Face Pull (wide grip cable)", target: "Rear delts, rotator cuff", sets: "3", reps: "15", rest: "45 sec", cue: "Pull to your face, elbows flare out and back, hold 2 sec." },
            { exercise: "Hip Abduction (Machine)", target: "Outer glutes (glute med)", sets: "2", reps: "15-20", rest: "60 sec", cue: "No momentum, slow on the way back in." },
            { exercise: "Incline Dumbbell Press", target: "Upper chest", sets: "2", reps: "10-12", rest: "75 sec", cue: "Bench at 30-45°, press up and slightly inward." },
            { exercise: "Dumbbell Bicep Curl + Tricep Pushdown (superset)", target: "Biceps + triceps", sets: "2", reps: "12 ea", rest: "60 sec", cue: "Go straight from curls into pushdowns, rest after the pair." },
            { exercise: "Plank Hold", target: "Full core, shoulders", sets: "3", reps: "30-40 sec hold", rest: "45 sec", cue: "Straight line, hips not raised not sagging, squeeze everything." },
            { exercise: "Russian Twist (light weight)", target: "Obliques, waist", sets: "2", reps: "20 total", rest: "45 sec", cue: "Rotate from the waist, touch the weight to the floor each side." },
          ],
          cooldown: "Walk 10 min, full stretch routine.",
        },
      ],
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
  weeklyFocus: "No check-in reply this week, so keep it steady and simple: protect both runs (Wed easy, Sat long) with the banana/toast pre-run fuel and eat the post-run meal within 90 minutes, keep strength as it is, and let one Sunday batch of tandoori chicken, rajma and toor dal carry you through a North Indian Monday, South Indian Thursday and an Indian Sunday — reply any Friday with how runs, sleep and energy felt and I'll tune next week around it.",

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
        dow: "mon", day: "Monday", emoji: "🫓", title: "North Indian Comfort",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Paneer-egg bhurji + roti", food: "80g paneer crumbled and scrambled with 1 egg, onion, tomato, capsicum, turmeric and cumin in 1/2 tsp oil + 1 small roti", kcal: 410, protein: 24, fiber: 4, nutrients: "Calcium, B12, Choline, Vit C" },
          { meal: "Snack", time: "10 AM", short: "Yogurt, berries + seeds", food: "170g Greek yogurt + 1/2 cup berries + 1 tbsp pumpkin seeds", kcal: 195, protein: 20, fiber: 3, nutrients: "Calcium, Zinc, Vit C, Probiotics" },
          { meal: "Lunch", time: "1 PM", short: "Rajma chawal + raita", food: "3/4 cup rajma (from Sunday's batch) simmered 10 min in an onion-tomato-ginger-garlic masala with 1/2 tsp oil, cumin and garam masala (no cream) + 1/2 cup brown rice + kachumber (cucumber, tomato, red onion, lemon) + 100g Greek yogurt raita", kcal: 410, protein: 24, fiber: 12, nutrients: "Iron, Folate, Magnesium, Fibre" },
          { meal: "Snack", time: "4 PM", short: "Chaas + roasted chana", food: "1 glass spiced buttermilk (100g low-fat curd, water, roasted cumin, mint) + 3 tbsp roasted chana", kcal: 165, protein: 10, fiber: 4, nutrients: "Calcium, Probiotics, Protein" },
          { meal: "Dinner", time: "7 PM", short: "Tandoori chicken + roti", food: "110g tandoori chicken (from Sunday's batch) re-crisped in a hot pan + 2 small rotis + 150g spinach sauteed with garlic in 1/2 tsp oil + mint-coriander chutney + onion-cucumber salad with lemon", kcal: 430, protein: 44, fiber: 8, nutrients: "B12, Niacin, Iron, Vit C" },
        ],
        tip: "North Indian all day, kept light: bhurji and rajma in half a teaspoon of oil, chicken grilled not fried. Squeeze lemon over the spinach at dinner — the vitamin C helps you absorb the iron from it and the rajma.",
      },
      {
        dow: "tue", day: "Tuesday", emoji: "🥢", title: "Soup & Stir-Fry",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Berry yogurt oats", food: "1/2 cup rolled oats cooked in water, cooled slightly, then stirred with 150g Greek yogurt + 1/2 cup berries + 1 tbsp pumpkin seeds + cinnamon", kcal: 370, protein: 24, fiber: 7, nutrients: "Calcium, Zinc, Magnesium, Fibre" },
          { meal: "Snack", time: "10 AM", short: "Apple + peanut butter", food: "1 apple + 2 tsp peanut butter", kcal: 160, protein: 4, fiber: 5, nutrients: "Vit E, Potassium, Fibre" },
          { meal: "Lunch", time: "1 PM", short: "Lemony dal soup + eggs", food: "1 cup toor dal (from Sunday's batch) thinned with water or stock and simmered with a handful of spinach, 1 grated carrot, garlic, cumin and a big squeeze of lemon (1/2 tsp olive oil) + 2 boiled eggs (from Sunday's batch) + 1 slice whole grain toast", kcal: 450, protein: 28, fiber: 10, nutrients: "Folate, Iron, B12, Vit A" },
          { meal: "Snack", time: "4 PM", short: "Chilli-lime edamame", food: "3/4 cup shelled edamame (from frozen, microwaved 3 min) tossed with lime, flaky salt and a pinch of gochugaru + cucumber sticks", kcal: 140, protein: 13, fiber: 6, nutrients: "Folate, Iron, Magnesium, Protein" },
          { meal: "Dinner", time: "7 PM", short: "Peanut-lime tofu stir-fry", food: "150g firm tofu cubed and pan-seared in 1 tsp sesame oil until golden, then tossed with 2 tbsp peanut-lime sauce (from Sunday's batch) + broccoli, capsicum and bok choy + 1/2 cup brown rice + spring onion", kcal: 495, protein: 34, fiber: 9, nutrients: "Iron, Calcium, Vit C, Healthy fats" },
        ],
        tip: "The same toor dal that becomes Thursday's sambar turns into a Mediterranean-style lemony soup today. Press the tofu for 10 minutes under a heavy pan before searing — that's what gets it crisp. Keep the other half of the block submerged in fresh water in the fridge for Friday. Move the salmon to the fridge tonight.",
      },
      {
        dow: "wed", day: "Wednesday", emoji: "🏃‍♀️", title: "Run Day Fuel",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Eggs + avocado toast", food: "2 eggs scrambled in 1/2 tsp oil + 1 slice whole grain toast + 1/4 avocado + 1/2 cup berries on the side", kcal: 340, protein: 17, fiber: 7, nutrients: "B12, Choline, Folate, Potassium" },
          { meal: "Pre-Run", time: "11 AM", short: "Banana + peanut butter", food: "1 banana + 1 tbsp peanut butter, 60-90 min before you head out", kcal: 190, protein: 5, fiber: 3, nutrients: "Potassium, Magnesium — fast fuel" },
          { meal: "Lunch", time: "1 PM", short: "Peanut chicken soba salad", food: "110g tandoori chicken (from Sunday's batch) shredded + 50g dry soba, cooked and rinsed cold + shredded cabbage, carrot and cucumber + 1/3 cup edamame + 2 tbsp peanut-lime sauce (from Sunday's batch) + sesame seeds and lime", kcal: 535, protein: 50, fiber: 8, nutrients: "B12, Niacin, Iron, Magnesium" },
          { meal: "Post-Run", time: "4 PM", short: "Yogurt, banana + chia", food: "170g Greek yogurt + 1/2 banana + 1 tbsp chia seeds + 1 tsp honey", kcal: 250, protein: 19, fiber: 6, nutrients: "Calcium, Omega-3, Potassium, Probiotics" },
          { meal: "Dinner", time: "7 PM", short: "Lemon-herb salmon + sweet potato", food: "130g wild-caught salmon baked at 200°C for 12 min with lemon, garlic, black pepper and 1/2 tsp olive oil + 120g roasted sweet potato wedges + 1 cup green beans, steamed then tossed with lemon zest", kcal: 400, protein: 34, fiber: 7, nutrients: "Omega-3, Vit D, Vit A, Selenium" },
        ],
        tip: "Run day sits a bit higher on calories on purpose. The chicken from Monday's tandoori dinner is unrecognisable today — cold soba, crunchy veg and peanut-lime dressing, more Bangkok than Delhi. Cook the soba while the salmon bakes tonight's way: lemon and herbs, no rice.",
      },
      {
        dow: "thu", day: "Thursday", emoji: "🥥", title: "South Indian Day",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Idli, sambar + eggs", food: "2 idlis (store-bought batter, ~100g, steamed, no oil) + 1/2 cup sambar (toor dal from Sunday's batch thinned with water, 1 tsp sambar powder, 1/2 tsp tamarind paste, tomato and carrot) + 2 boiled eggs (from Sunday's batch)", kcal: 385, protein: 22, fiber: 6, nutrients: "B12, Choline, Iron, Folate" },
          { meal: "Snack", time: "10 AM", short: "Yogurt + berries", food: "200g Greek yogurt + 1/2 cup berries", kcal: 160, protein: 20, fiber: 2, nutrients: "Calcium, Vit C, Probiotics" },
          { meal: "Lunch", time: "1 PM", short: "Paruppu rice + poriyal", food: "3/4 cup toor dal (from Sunday's batch) with a garlic, cumin, curry leaf and dried-chilli tadka (1/2 tsp oil) + 1/2 cup brown rice + carrot-beans poriyal (1 cup, mustard seeds, curry leaves, 1/2 tsp oil) + 100g Greek yogurt", kcal: 410, protein: 23, fiber: 10, nutrients: "Folate, Iron, Magnesium, Vit A" },
          { meal: "Snack", time: "4 PM", short: "Chaas, chana + carrot", food: "1 glass spiced buttermilk (100g low-fat curd, water, curry leaves, ginger) + 3 tbsp roasted chana + carrot sticks", kcal: 185, protein: 10, fiber: 6, nutrients: "Calcium, Probiotics, Vit A" },
          { meal: "Dinner", time: "7 PM", short: "Baked paneer 65 + lemon rice", food: "100g paneer (defrosted) cubed and coated in 2 tbsp low-fat curd, Kashmiri chilli, ginger-garlic and curry leaves, then baked at 220°C for 15 min or pan-roasted in 1 tsp oil — never deep-fried + 1/2 cup lemon rice (Sunday's brown rice tempered with mustard seeds, turmeric and lemon, 1/2 tsp oil) + cucumber-carrot kosambari (1 cup, lemon, coriander)", kcal: 490, protein: 24, fiber: 6, nutrients: "Calcium, Protein, Vit C, Vit A" },
        ],
        tip: "South Indian from morning to night with one dal pot doing two jobs: tangy sambar at breakfast, garlicky paruppu at lunch. Paneer 65 is usually deep-fried — baking it in a curd-chilli coat keeps the flavour without the oil. Move Friday's chicken, rajma and rice to the fridge tonight.",
      },
      {
        dow: "fri", day: "Friday", emoji: "🌯", title: "Burrito Bowl Friday",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Gochugaru eggs on toast", food: "2 eggs softly scrambled in 1/2 tsp sesame oil with spring onion and a pinch of gochugaru + 1 slice whole grain toast + 1/2 cup berries", kcal: 320, protein: 17, fiber: 5, nutrients: "B12, Choline, Vit C, Selenium" },
          { meal: "Snack", time: "10 AM", short: "Yogurt + almonds", food: "150g Greek yogurt + 12 almonds + cinnamon", kcal: 190, protein: 17, fiber: 3, nutrients: "Calcium, Vit E, Magnesium" },
          { meal: "Lunch", time: "1 PM", short: "Chicken rajma burrito bowl", food: "110g tandoori chicken (from Sunday's batch, defrosted) warmed with cumin, paprika and lime + 1/2 cup rajma (from Sunday's batch, defrosted) + 1/2 cup brown rice + pico de gallo (tomato, red onion, coriander, lime) + shredded lettuce + 1/4 avocado + 2 tbsp Greek yogurt as 'sour cream'", kcal: 515, protein: 49, fiber: 12, nutrients: "B12, Iron, Folate, Potassium" },
          { meal: "Snack", time: "4 PM", short: "Apple + peanut butter", food: "1 apple + 2 tsp peanut butter", kcal: 160, protein: 4, fiber: 5, nutrients: "Vit E, Potassium, Fibre" },
          { meal: "Dinner", time: "7 PM", short: "Miso-glazed tofu + bok choy", food: "150g firm tofu sliced into slabs, seared in 1 tsp oil and glazed with 1 tsp miso + 1 tsp honey + 1 tsp soy sauce + splash of water + bok choy and mushrooms sauteed with ginger + 1/2 cup brown rice (defrosted) + sesame seeds", kcal: 450, protein: 31, fiber: 8, nutrients: "Iron, Calcium, Selenium, Probiotics" },
        ],
        tip: "Easy and fun so you can enjoy your Friday evening. The same chicken and rajma from Monday's very Indian lunch become a Mexican-style bowl. Tonight's tofu gets a sweet-savoury miso glaze instead of Tuesday's peanut sauce. Move Saturday's salmon to the fridge tonight.",
      },
      {
        dow: "sat", day: "Saturday", emoji: "💪", title: "Long Run Recovery",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Berry overnight oats", food: "1/2 cup rolled oats soaked overnight in 100g Greek yogurt + a splash of milk + 1 tsp chia + 1/2 cup berries + cinnamon", kcal: 330, protein: 17, fiber: 7, nutrients: "Calcium, Omega-3, Magnesium, Fibre" },
          { meal: "Pre-Run", time: "9 AM", short: "Honey toast + banana", food: "1 slice whole grain toast + 1 tsp honey + 1/2 banana", kcal: 150, protein: 4, fiber: 3, nutrients: "Quick carbs, Potassium — fast fuel" },
          { meal: "Post-Run", time: "12 PM", short: "Smashed rajma egg toast", food: "3/4 cup rajma (from Sunday's batch, defrosted) warmed and roughly smashed with cumin, chilli flakes, lemon and salt, spread on 2 slices whole grain toast + 2 eggs fried in 1/2 tsp oil + tomato-onion-coriander salsa + 1/4 avocado", kcal: 570, protein: 32, fiber: 15, nutrients: "Iron, Folate, B12, Potassium" },
          { meal: "Snack", time: "4 PM", short: "Yogurt, berries & seeds", food: "150g Greek yogurt + 1/2 cup berries + 1 tbsp pumpkin seeds", kcal: 195, protein: 18, fiber: 3, nutrients: "Calcium, Zinc, Vit C" },
          { meal: "Dinner", time: "7 PM", short: "Salmon peanut-slaw bowl", food: "130g wild-caught salmon (defrosted) pan-seared skin-side down in 1/2 tsp oil, finished with lime + cabbage-carrot-cucumber slaw tossed with 2 tbsp peanut-lime sauce (from Sunday's batch) + 1/2 cup brown rice (defrosted) + spring onion and sesame seeds", kcal: 505, protein: 38, fiber: 6, nutrients: "Omega-3, Vit D, B12, Selenium" },
        ],
        tip: "The long run earns the biggest day of the week. Eat the rajma toast within 60-90 minutes of finishing — beans, eggs and carbs together are a great refuel. The last of the peanut-lime sauce goes on tonight's slaw, so nothing in that jar goes to waste.",
      },
      {
        dow: "sun", day: "Sunday", emoji: "📦", title: "Easy Indian Sunday",
        meals: [
          { meal: "Breakfast", time: "9 AM", short: "Egg dosa + sambar", food: "2 dosas (store-bought batter, ~100g, 1/2 tsp oil total), each topped with 1 beaten egg, onion and coriander + 1/2 cup sambar (toor dal from Sunday's batch, defrosted, thinned with sambar powder, tamarind, tomato and carrot)", kcal: 405, protein: 22, fiber: 6, nutrients: "B12, Choline, Iron, Folate" },
          { meal: "Snack", time: "11 AM", short: "Yogurt + berries + seeds", food: "150g Greek yogurt + 1/2 cup berries + 1 tbsp pumpkin seeds", kcal: 190, protein: 18, fiber: 3, nutrients: "Calcium, Zinc, Vit C" },
          { meal: "Lunch", time: "1:30 PM", short: "Light palak paneer + roti", food: "80g paneer (defrosted) cubed and simmered in a spinach purée (200g spinach blanched and blended with onion, garlic, ginger and cumin, 1 tsp oil) finished with 2 tbsp low-fat curd instead of cream + 1 small roti + kachumber", kcal: 440, protein: 24, fiber: 8, nutrients: "Iron, Calcium, Folate, Vit C" },
          { meal: "Snack", time: "4 PM", short: "Chaas + roasted chana", food: "1 glass spiced buttermilk (100g low-fat curd, water, roasted cumin, mint) + 3 tbsp roasted chana", kcal: 165, protein: 10, fiber: 4, nutrients: "Calcium, Probiotics, Protein" },
          { meal: "Dinner", time: "7 PM", short: "Pepper chicken + curd rice", food: "110g tandoori chicken (from Sunday's batch, defrosted) tossed in a pan with sliced onion, curry leaves and lots of crushed black pepper (1/2 tsp oil), Chettinad-style + 1/2 cup brown rice (defrosted) mixed with 100g Greek yogurt, grated cucumber and a mustard-seed tempering + 1.5 cups beans poriyal", kcal: 450, protein: 48, fiber: 7, nutrients: "B12, Niacin, Calcium, Probiotics" },
        ],
        tip: "South Indian breakfast, North Indian lunch, Chettinad-style dinner, with the last frozen portions of this week's batch. Do next week's prep this afternoon while the dosa pan cools — and make palak paneer with curd instead of cream; you won't miss it.",
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
          "Chicken breast 600g raw (cooks down to ~440g: Mon dinner 110g + Wed lunch 110g + Fri lunch 110g + Sun dinner 110g)",
          "Paneer 260g, i.e. one 250-300g block (Mon breakfast 80g + Thu dinner 100g + Sun lunch 80g)",
          "Firm tofu 300g, one block (Tue dinner 150g + Fri dinner 150g)",
          "Wild-caught salmon 2 fillets, ~130g each, fresh or frozen from a reputable counter (Wed dinner + Sat dinner)",
          "Eggs (18: 13 needed — 4 for the Sunday boil (Tue lunch 2 + Thu breakfast 2), plus fresh Mon 1, Wed 2, Fri 2, Sat 2, Sun 2 — and 5 spare)",
          "Greek yogurt ~1.6kg (a 1kg tub + a 750g pot: Mon 270g, Tue 150g, Wed 170g, Thu 300g, Fri 180g, Sat 250g, Sun 250g)",
          "Low-fat plain curd (Indian-style) 600g (chicken marinade ~180g, chaas Mon/Thu/Sun 300g, paneer 65 coat + palak paneer finish ~60g, spare)",
        ],
      },
      {
        name: "Legumes & Cans",
        items: [
          "Dried rajma (red kidney beans) 150g, soaked overnight Saturday — makes ~2.25 cups: Mon lunch 3/4 + Fri lunch 1/2 + Sat post-run 3/4 = 2 cups, ~1/4 cup spare",
          "Toor dal (split pigeon peas) 190g — makes ~3 cups: Tue lunch 1 + Thu breakfast 1/2 + Thu lunch 3/4 + Sun breakfast 1/2 = 2.75 cups, ~1/4 cup spare",
          "Roasted chana, small pack (3 tbsp each Mon, Thu and Sun)",
          "Edamame, frozen shelled 200g (Tue snack 3/4 cup ~110g + Wed lunch 1/3 cup ~50g, plus spare)",
          "Miso paste (white/shiro) — use up last week's tub (Fri tofu glaze, 1 tsp)",
        ],
      },
      {
        name: "Grains & Wraps",
        items: [
          "Brown rice 280g (1.5 cups dry for the Sunday batch, ~4.5 cups cooked: 8 portions of 1/2 cup for Mon lunch, Tue dinner, Thu lunch + dinner, Fri lunch + dinner, Sat dinner, Sun dinner)",
          "Rolled oats, small pack (Tue 1/2 cup + Sat 1/2 cup)",
          "Soba (buckwheat) noodles, small pack (Wed lunch, 50g)",
          "Idli/dosa batter, store-bought ~250g — buy midweek so it's fresh (Thu 2 idlis ~100g + Sun 2 dosas ~100g)",
          "Whole wheat flour (atta) or store-bought rotis (4 small: Mon breakfast 1 + Mon dinner 2 + Sun lunch 1)",
          "Whole grain bread, small loaf (6 slices: Tue lunch 1, Wed breakfast 1, Fri breakfast 1, Sat pre-run 1, Sat post-run 2)",
        ],
      },
      {
        name: "Vegetables",
        items: [
          "Spinach 450g (Mon dinner 150g + Tue soup ~60g + Sun palak paneer 200g)",
          "Bok choy (2 small heads: Tue dinner + Fri dinner)",
          "Broccoli (1 small head, Tue dinner)",
          "Mushrooms 100g (Fri dinner)",
          "Capsicum (2: Mon breakfast, Tue dinner)",
          "Cabbage, small (1/2: Wed soba salad + Sat slaw)",
          "Green beans 300g (Wed dinner 100g + Thu poriyal ~75g + Sun poriyal ~125g)",
          "Sweet potato (1 small, Wed dinner)",
          "Carrots (6: Tue soup, Wed salad, Thu sambar + poriyal + snack sticks + kosambari, Sat slaw, Sun sambar)",
          "Tomatoes (10: Mon bhurji + rajma + kachumber, Thu sambar, Fri pico x2, Sat salsa, Sun sambar + kachumber, spare)",
          "Cucumbers (5: Mon kachumber + salad, Tue snack, Wed salad, Thu kosambari, Sat slaw, Sun curd rice + kachumber)",
          "Lettuce, 1 small head (Fri bowl)",
          "Spring onion (1 bunch)",
          "Red onion (3: kachumber, pico, salsa)",
          "Brown onion (5: bhurji, rajma masala, dosa topping, palak, pepper chicken)",
          "Garlic (2 bulbs)",
          "Fresh ginger (1 large piece)",
          "Green chillies (4)",
          "Curry leaves (3 sprigs)",
          "Fresh coriander (2 bunches)",
          "Fresh mint (1 bunch: chutney + chaas)",
          "Avocado (1: Wed, Fri and Sat, a quarter each)",
        ],
      },
      {
        name: "Fruits",
        items: [
          "Berries 600g, fresh or frozen (8 x 1/2 cup: Mon, Tue, Wed, Thu, Fri, Sat x2, Sun)",
          "Bananas (3: Wed pre-run 1 + Wed post-run 1/2 + Sat pre-run 1/2, 1 spare)",
          "Apples (3: Tue, Fri, spare)",
          "Lemons (5) + limes (4)",
        ],
      },
      {
        name: "Fats & Extras",
        items: [
          "Cooking oil (light olive or sunflower)",
          "Sesame oil",
          "Peanut butter, natural (sauce 3 tbsp + Tue/Fri snacks + Wed pre-run)",
          "Almonds 20g (Fri 12)",
          "Pumpkin seeds 40g (Mon, Tue, Sat, Sun, 1 tbsp each)",
          "Chia seeds, small pack (Wed post-run + Sat oats)",
          "Honey",
          "Low-sodium soy sauce",
          "Tamarind paste, small jar (sambar, Thu + Sun)",
          "Sesame seeds (garnish)",
        ],
      },
      {
        name: "Spices — check cupboard first",
        items: [
          "Cumin seeds + ground cumin",
          "Coriander powder",
          "Turmeric",
          "Black peppercorns (Sun pepper chicken)",
          "Kashmiri red chilli powder",
          "Garam masala",
          "Tandoori masala",
          "Sambar powder",
          "Mustard seeds",
          "Dried red chillies",
          "Paprika",
          "Gochugaru (Korean red chilli flakes)",
          "Cinnamon",
        ],
      },
      {
        name: "Drinks",
        items: [
          "Green tea",
          "Milk, small carton (Sat overnight oats)",
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
    note: "Sunday, ~75 minutes total. Start steps 1, 2, 3 and 4 together across the pressure cooker, hob and oven, then make the sauce, boil the eggs and portion everything while they cook.",
    multitask: "Rajma (step 1, pressure cooker, soaked Saturday night) and toor dal (step 2, second pot or a second pressure-cooker run) start together, the marinated chicken goes into the oven (step 3) and brown rice takes the third hob (step 4). While those run, whisk the peanut-lime sauce (step 5), boil the eggs once the dal pot frees up (step 6), then portion the paneer and fish (step 7), chop (step 8) and pack and label everything with freeze/thaw days (step 9).",
    steps: [
      { num: 1, task: "Plain Rajma (soak Saturday night)", how: "Soak 150g dried rajma overnight in plenty of water, drain and rinse, then pressure-cook with fresh water, 1 tsp salt and a bay leaf for 25-30 min (6-7 whistles) until completely soft and creamy inside. Never slow-cook dried kidney beans — they need a proper hard boil or pressure-cook to be safe. Makes ~2.25 cups. Split into 3 portions: Mon lunch 3/4 cup (fridge), Fri lunch 1/2 cup and Sat post-run 3/4 cup (FREEZE, move to the fridge Thursday night). Covers Mon lunch + Fri lunch + Sat post-run.", timing: "0-35 min" },
      { num: 2, task: "Plain Toor Dal", how: "Rinse 190g toor dal, then cook with 650ml water, 1/2 tsp turmeric and 1/2 tsp oil (pressure cooker 3-4 whistles, or ~35 min on the hob) until soft. Whisk smooth, salt lightly and keep plain. Makes ~3 cups. Portions: Tue lunch 1 cup (lemony soup), Thu breakfast 1/2 cup (sambar) + Thu lunch 3/4 cup (paruppu tadka) — all fridge — and Sun breakfast 1/2 cup (sambar) FROZEN, moved to the fridge Saturday night. Covers Tue lunch + Thu breakfast + Thu lunch + Sun breakfast.", timing: "0-35 min" },
      { num: 3, task: "Tandoori Chicken Batch", how: "Cut 600g chicken breast into 4 even pieces and marinate in 3/4 cup low-fat curd + 1 tbsp ginger-garlic + 1 tbsp tandoori masala + 1 tsp Kashmiri chilli + 1/2 tsp turmeric + 1/2 tsp garam masala + juice of 1 lemon + 1 tsp oil + salt, 20 min (or overnight). Bake at 200°C for 22-25 min until 74°C inside, rest 5 min, then split into 4 portions of ~110g cooked. Keep it plain-ish — each day re-seasons it. Mon dinner + Wed lunch in the fridge; Fri lunch + Sun dinner FROZEN (move Thursday night and Saturday night). Covers Mon dinner + Wed lunch + Fri lunch + Sun dinner.", timing: "0-45 min" },
      { num: 4, task: "Brown Rice", how: "Rinse and cook 1.5 cups (280g) brown rice in 3.5 cups water, ~35 min, for ~4.5 cups cooked. Cool quickly, then portion into 8 containers of 1/2 cup: Mon lunch and Tue dinner in the fridge; Thu lunch, Thu dinner (lemon rice), Fri lunch, Fri dinner, Sat dinner and Sun dinner (curd rice) FROZEN, each moved to the fridge the night before. Covers Mon lunch + Tue dinner + Thu lunch + Thu dinner + Fri lunch + Fri dinner + Sat dinner + Sun dinner.", timing: "0-35 min" },
      { num: 5, task: "Peanut-Lime Sauce", how: "Whisk 3 tbsp natural peanut butter + 2 tbsp low-sodium soy sauce + 1.5 tbsp lime juice + 1 tsp honey + 1 tsp gochugaru + 1 tbsp grated ginger + 1 grated garlic clove + 3 tbsp warm water until smooth. Makes ~1/2 cup (8 tbsp); you need 6: Tue dinner 2 tbsp + Wed lunch 2 tbsp + Sat dinner 2 tbsp, with ~2 tbsp spare. Keeps 7 days in a jar in the fridge — loosen with a little warm water if it thickens. Covers Tue dinner + Wed lunch + Sat dinner.", timing: "5 min" },
      { num: 6, task: "Boil Eggs", how: "4 eggs, cold-water start, boil 9 min, then ice bath. Keep unpeeled in the fridge. Covers Tue lunch (2) + Thu breakfast (2). All other egg meals (Mon, Wed, Fri, Sat, Sun) use fresh eggs.", timing: "35-50 min" },
      { num: 7, task: "Portion Paneer & Fish", how: "Cut paneer into 80g (Mon breakfast, fridge), 100g (Thu dinner) and 80g (Sun lunch); FREEZE the last two and move them to the fridge the night before — soak thawed paneer in warm water for 10 min to soften it again. Freeze both salmon fillets as single portions: move one to the fridge Tuesday night (Wed dinner) and one Friday night (Sat dinner). Fish is best cooked fresh, not pre-cooked. Keep the tofu sealed until Tuesday, then store the second half in fresh water (change daily) for Friday.", timing: "5 min" },
      { num: 8, task: "Chop & Wash", how: "Mince extra ginger and garlic, slice onions, wash and dry spinach, shred cabbage and carrot for Wednesday's salad, trim green beans and cut broccoli. Blend a small mint-coriander chutney (1/2 bunch each, 1 green chilli, lemon, 1 tbsp curd) for Monday's dinner. Store in small containers so weeknight cooking is just assembly.", timing: "10 min" },
      { num: 9, task: "Pack + Label", how: "Pack snack bags (12 almonds, 4 x 1 tbsp pumpkin seeds, 3 x 3 tbsp roasted chana). Rajma, dal, chicken, rice, sauce and eggs go into labeled containers on one fridge shelf; write the move-to-fridge day on every frozen container (chicken Thu + Sat, rajma Thu, rice nightly from Wed, dal Sat, paneer Wed + Sat, salmon Tue + Fri).", timing: "10 min" },
    ],
    newIngredients: [
      { name: "Rajma (red kidney beans)", note: "The beans in Punjabi rajma chawal — creamy when cooked properly. Dried beans MUST be soaked and then pressure-cooked or boiled hard (not slow-cooked) to be safe; canned rajma is a fine shortcut if you're short on time (two 400g cans, drained)." },
      { name: "Toor dal (split pigeon peas)", note: "The everyday dal of South India and the base of sambar — nutty, a little sweeter than moong, and takes a bit longer to cook. Sold at Indian grocers and most supermarkets; sometimes labelled arhar or tuvar dal." },
      { name: "Tamarind paste", note: "Gives sambar its gentle sourness. Buy the ready-made paste in a jar (no soaking needed) — 1/2 tsp per bowl is plenty, and it keeps for months in the fridge." },
      { name: "Sambar powder", note: "A South Indian spice blend (coriander, cumin, fenugreek, dried chilli and more) that turns plain dal and veg into sambar. Sold at Indian grocers; keeps for months." },
      { name: "Soba noodles", note: "Japanese buckwheat noodles with a nutty taste, great cold. Cook 4-5 minutes, then rinse under cold water so they don't clump. Check the pack for a higher buckwheat percentage if you want more fibre." },
      { name: "Gochugaru", note: "Korean red chilli flakes with a gentle fruity heat — used in this week's peanut-lime sauce, Tuesday's edamame and Friday's eggs. Smoky rather than sharp, so you can be generous." },
      { name: "Wild-caught salmon", note: "A mild, rich, omega-3-heavy fish that is much less 'fishy' than most. Buy wild-caught from a reputable counter (or frozen fillets), which is also the safer choice for parasites." },
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
