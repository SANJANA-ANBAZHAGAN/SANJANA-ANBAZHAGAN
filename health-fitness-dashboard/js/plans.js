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
  weeklyFocus: "Still no check-in reply, so I've kept the plan steady with one change to try: Wednesday's run moves to after work, so have the banana and peanut butter at 4 PM and treat the 7 PM chicken souvlaki plate as your recovery meal; Saturday's long run is still fuelled by toast and honey beforehand and chickpea shakshuka within 90 minutes after. This week's batch is chicken, chickpeas and moong dal, covering a Punjabi Monday, a Kerala-style Thursday and an easy Indian Sunday. Reply any Friday with how your runs, sleep and energy felt and I'll tune the next week around it.",

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
        dow: "mon", day: "Monday", emoji: "🫓", title: "Punjabi Comfort Day",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Paneer besan chilla", food: "40g besan whisked with water, turmeric, ajwain, chopped onion, tomato and coriander into a thin batter, cooked as 2 chillas in 1/2 tsp oil, filled with 50g crumbled paneer + 100g Greek yogurt on the side", kcal: 365, protein: 28, fiber: 5, nutrients: "Calcium, Folate, Iron, Protein" },
          { meal: "Snack", time: "10 AM", short: "Apple + almonds", food: "1 apple + 14 almonds", kcal: 195, protein: 4, fiber: 6, nutrients: "Vit E, Magnesium, Fibre" },
          { meal: "Lunch", time: "1 PM", short: "Chana masala + rice", food: "3/4 cup chickpeas (from Sunday's batch) simmered 10 min in an onion-tomato-ginger-garlic masala with 1/2 tsp oil, cumin, garam masala and a pinch of amchur (no cream) + 1/2 cup brown rice (from Sunday's batch) + kachumber (cucumber, tomato, red onion, lemon) + 100g Greek yogurt raita with roasted cumin", kcal: 430, protein: 24, fiber: 14, nutrients: "Iron, Folate, Magnesium, Fibre" },
          { meal: "Snack", time: "4 PM", short: "Chaas + veg sticks", food: "1 glass masala chaas (100g low-fat curd, water, roasted cumin, mint, pinch of salt) + cucumber and carrot sticks with a pinch of chaat masala", kcal: 105, protein: 5, fiber: 3, nutrients: "Calcium, Probiotics, Vit A" },
          { meal: "Dinner", time: "7 PM", short: "Light chicken tikka masala", food: "110g ginger-garlic chicken (from Sunday's batch) cut into chunks and simmered 8 min in a tomato-onion masala (1 tsp oil, Kashmiri chilli, garam masala, kasuri methi) finished with 2 tbsp low-fat curd instead of cream + 2 small rotis + 150g spinach sauteed with garlic and a squeeze of lemon", kcal: 490, protein: 46, fiber: 9, nutrients: "B12, Niacin, Iron, Vit C" },
        ],
        tip: "North Indian all day, done light: a besan chilla instead of parathas, chana masala in half a teaspoon of oil, and tikka masala that gets its creaminess from curd, not cream. Stir the curd in off the heat so it doesn't split. Move Tuesday's tilapia to the fridge tonight.",
      },
      {
        dow: "tue", day: "Tuesday", emoji: "🥢", title: "Korean-Inspired Day",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Rolled omelette + toast", food: "Gyeran-mari-style rolled omelette: 2 eggs beaten with finely chopped spring onion and carrot, cooked thin in 1/2 tsp sesame oil and rolled up + 1 slice whole grain toast + 1/4 avocado", kcal: 315, protein: 18, fiber: 6, nutrients: "B12, Choline, Vit A, Potassium" },
          { meal: "Snack", time: "10 AM", short: "Yogurt, berries + seeds", food: "150g Greek yogurt + 1/2 cup berries + 1 tbsp pumpkin seeds", kcal: 185, protein: 18, fiber: 3, nutrients: "Calcium, Zinc, Vit C, Probiotics" },
          { meal: "Lunch", time: "1 PM", short: "Chicken bibimbap bowl", food: "110g ginger-garlic chicken (from Sunday's batch) sliced and warmed in a pan with garlic, 1 tsp soy and a pinch of gochugaru + 1/2 cup brown rice (from Sunday's batch) + ~80g spinach wilted with sesame oil and garlic + julienned carrot and cucumber + 50g sauteed mushrooms + 2 tbsp miso-sesame dressing (from Sunday's batch) + sesame seeds", kcal: 430, protein: 41, fiber: 6, nutrients: "B12, Niacin, Iron, Vit A" },
          { meal: "Snack", time: "4 PM", short: "Roasted sweet potato", food: "Goguma-style: 150g sweet potato roasted whole (or microwaved 5-6 min) with a sprinkle of cinnamon + 12 almonds + a cup of green tea", kcal: 220, protein: 5, fiber: 6, nutrients: "Vit A, Potassium, Vit E" },
          { meal: "Dinner", time: "7 PM", short: "Gochugaru-glazed tilapia", food: "150g tilapia pan-seared in 1 tsp oil, then glazed for the last minute with 1 tsp gochugaru + 1 tsp honey + 1 tsp soy + 1 grated garlic clove + splash of water + 1/2 cup brown rice (from Sunday's batch) + bok choy and broccoli stir-fried in 1/2 tsp sesame oil with ginger", kcal: 400, protein: 37, fiber: 7, nutrients: "Selenium, B12, Vit C, Calcium" },
        ],
        tip: "Monday's tikka chicken turns into bibimbap today — same batch, totally different meal. Roasted sweet potato is a classic Korean winter snack; roast two on Monday night and Wednesday's dinner side is already done. Pat the tilapia completely dry before it hits the pan so it sears instead of steaming.",
      },
      {
        dow: "wed", day: "Wednesday", emoji: "🏃‍♀️", title: "Mediterranean Run Day",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Berry yogurt oats", food: "1/2 cup rolled oats cooked in water, cooled slightly, then stirred with 150g Greek yogurt + 1/2 cup berries + 1 tsp chia seeds + cinnamon", kcal: 300, protein: 21, fiber: 8, nutrients: "Calcium, Magnesium, Omega-3, Fibre" },
          { meal: "Snack", time: "10 AM", short: "Eggs + cherry tomatoes", food: "2 eggs boiled 9 min (do them while the oats cook) + a handful of cherry tomatoes and cucumber slices with black pepper and a pinch of za'atar or dried oregano", kcal: 160, protein: 13, fiber: 2, nutrients: "B12, Choline, Vit C" },
          { meal: "Lunch", time: "1 PM", short: "Chickpea salad + paneer", food: "3/4 cup chickpeas (from Sunday's batch) + diced cucumber, tomato, red onion and lots of parsley + 1 tsp olive oil and lemon + 60g paneer cubes seared in a dry non-stick pan + 2 tbsp garlic-lemon Greek yogurt dressing + 1 small whole wheat pita, warmed", kcal: 590, protein: 31, fiber: 15, nutrients: "Iron, Folate, Calcium, Vit C" },
          { meal: "Pre-Run", time: "4 PM", short: "Banana + peanut butter", food: "1 banana + 1 tbsp peanut butter, 60-90 min before you head out after work", kcal: 190, protein: 5, fiber: 3, nutrients: "Potassium, Magnesium — fast fuel" },
          { meal: "Post-Run", time: "7 PM", short: "Chicken souvlaki plate", food: "110g ginger-garlic chicken (from Sunday's batch) warmed with oregano, lemon zest and garlic + 200g roasted sweet potato wedges (1/2 tsp olive oil) + 1 cup steamed green beans + tzatziki (60g Greek yogurt, grated cucumber, garlic, mint)", kcal: 455, protein: 45, fiber: 10, nutrients: "B12, Niacin, Vit A, Potassium" },
        ],
        tip: "Run day sits a little higher on calories on purpose, and this week the run moves to after work: the banana at 4 PM fuels it and dinner is your recovery meal, so eat it within an hour of getting home. The chickpea salad keeps well, so it's fine to pack it the night before.",
      },
      {
        dow: "thu", day: "Thursday", emoji: "🥥", title: "Kerala-Style South Indian",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Quick pongal + curd", food: "Quick ven pongal: 1/2 cup moong dal (from Sunday's batch) + 1/2 cup brown rice (from Sunday's batch) simmered together with water until soft and porridgy, then tempered with 1/2 tsp ghee, crushed black pepper, cumin, grated ginger and curry leaves + 150g Greek yogurt as the curd on the side", kcal: 325, protein: 25, fiber: 5, nutrients: "Folate, Magnesium, Calcium, Probiotics" },
          { meal: "Snack", time: "10 AM", short: "Neer mor + orange", food: "1 glass neer mor (100g low-fat curd, water, ginger, curry leaves, green chilli) + 1 orange + 12 almonds", kcal: 205, protein: 8, fiber: 5, nutrients: "Vit C, Calcium, Probiotics, Vit E" },
          { meal: "Lunch", time: "1 PM", short: "King fish fry + thoran", food: "150g king fish steak rubbed with Kashmiri chilli, turmeric, black pepper, ginger-garlic and lemon, pan-seared in 1 tsp coconut oil (not deep-fried) + 1/2 cup brown rice (from Sunday's batch) + cabbage thoran (1.5 cups shredded cabbage, 1 tbsp grated coconut, mustard seeds, curry leaves, 1/2 tsp oil)", kcal: 430, protein: 39, fiber: 7, nutrients: "Omega-3, Selenium, B12, Vit C" },
          { meal: "Snack", time: "4 PM", short: "Chickpea sundal", food: "1/2 cup chickpeas (from Sunday's batch) tossed in a mustard seed, curry leaf and dried chilli tempering (1/2 tsp oil) with grated carrot, a squeeze of lemon and coriander", kcal: 165, protein: 8, fiber: 7, nutrients: "Iron, Folate, Vit A, Fibre" },
          { meal: "Dinner", time: "7 PM", short: "Keerai kootu + egg podimas", food: "3/4 cup moong dal (from Sunday's batch) simmered with 150g chopped spinach, garlic and cumin (1/2 tsp oil) + egg podimas (2 eggs scrambled with onion, green chilli, curry leaves and turmeric in 1/2 tsp oil) + 1 small roti", kcal: 450, protein: 31, fiber: 11, nutrients: "Iron, Folate, B12, Vit K" },
        ],
        tip: "South Indian with a Kerala lean this week. King fish (seer/surmai) is mild and meaty — get the pan really hot so the masala crisps instead of going soggy. One pot of moong dal does two jobs today: peppery pongal in the morning, spinach kootu at night. Move Friday's chicken and moong dal to the fridge tonight.",
      },
      {
        dow: "fri", day: "Friday", emoji: "🍜", title: "Wrap & Ramen Friday",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Berry overnight oats", food: "1/2 cup rolled oats soaked overnight in 150g Greek yogurt + a splash of milk + 1 tsp chia seeds, topped with 1/2 cup berries and cinnamon", kcal: 320, protein: 21, fiber: 8, nutrients: "Calcium, Omega-3, Magnesium, Fibre" },
          { meal: "Snack", time: "10 AM", short: "Apple + peanut butter", food: "1 apple + 1 tbsp peanut butter", kcal: 190, protein: 5, fiber: 5, nutrients: "Vit E, Potassium, Fibre" },
          { meal: "Lunch", time: "1 PM", short: "Chicken shawarma wrap", food: "110g ginger-garlic chicken (from Sunday's batch, defrosted) warmed with cumin, paprika, cinnamon and lemon, wrapped in 1 large whole wheat pita/flatbread with shredded lettuce, tomato, cucumber, red onion, 1/4 avocado and 3 tbsp garlic Greek yogurt sauce", kcal: 480, protein: 46, fiber: 9, nutrients: "B12, Niacin, Potassium, Vit C" },
          { meal: "Snack", time: "4 PM", short: "Miso-sesame edamame", food: "3/4 cup shelled edamame (from frozen, microwaved 3 min) tossed with 1 tbsp miso-sesame dressing (from Sunday's batch) + cucumber sticks", kcal: 170, protein: 14, fiber: 6, nutrients: "Folate, Iron, Magnesium, Protein" },
          { meal: "Dinner", time: "7 PM", short: "Miso moong dal ramen", food: "3/4 cup moong dal (from Sunday's batch, defrosted) thinned with 1.5 cups water and simmered with ginger, garlic, bok choy and mushrooms, finished off the heat with 1 tsp white miso and a drizzle of sesame oil + 40g soba noodles + 1 jammy egg (boiled 6.5 min) + spring onion and gochugaru", kcal: 430, protein: 26, fiber: 9, nutrients: "Folate, Iron, B12, Selenium" },
        ],
        tip: "Easy Friday so you can enjoy your evening. The moong dal that made Thursday's pongal becomes a silky, savoury ramen broth tonight — stir the miso in off the heat so it keeps its flavour. Move Saturday's tilapia and paneer to the fridge before bed, and put the oats to soak if you want overnight oats again.",
      },
      {
        dow: "sat", day: "Saturday", emoji: "💪", title: "Long Run Recovery",
        meals: [
          { meal: "Pre-Run", time: "7 AM", short: "Honey toast + banana", food: "1 slice whole grain toast + 1 tsp honey + 1/2 banana, 45-60 min before the long run, plus a glass of water", kcal: 150, protein: 4, fiber: 3, nutrients: "Quick carbs, Potassium — fast fuel" },
          { meal: "Post-Run", time: "9:30 AM", short: "Chickpea shakshuka", food: "2 eggs poached in a quick tomato, capsicum and onion sauce with cumin and paprika (1 tsp oil) + 1/2 cup chickpeas (from Sunday's batch, defrosted) stirred into the sauce + 1 slice whole grain toast + 1/4 avocado + 100g Greek yogurt dollop", kcal: 560, protein: 38, fiber: 15, nutrients: "B12, Iron, Folate, Potassium" },
          { meal: "Lunch", time: "1 PM", short: "Paneer tikka salad", food: "80g paneer (defrosted) marinated 10 min in 2 tbsp low-fat curd, tandoori masala and lemon, then grilled or pan-roasted in a dry pan + mixed lettuce, cucumber, capsicum and red onion + mint-yogurt dressing (2 tbsp Greek yogurt, mint, lemon) + 1/2 cup brown rice (from Sunday's batch)", kcal: 385, protein: 22, fiber: 5, nutrients: "Calcium, Protein, Vit C" },
          { meal: "Snack", time: "4 PM", short: "Apple + almonds", food: "1 apple + 12 almonds + a cup of green tea", kcal: 180, protein: 3, fiber: 6, nutrients: "Vit E, Magnesium, Fibre" },
          { meal: "Dinner", time: "7 PM", short: "Miso-glazed tilapia bowl", food: "150g tilapia (defrosted) pan-seared in 1/2 tsp oil and brushed with 2 tbsp miso-sesame dressing (from Sunday's batch) for the last minute + 1/2 cup brown rice (from Sunday's batch) + green beans and broccoli sauteed in 1/2 tsp oil + quick smashed cucumber salad with rice vinegar and sesame seeds", kcal: 400, protein: 40, fiber: 7, nutrients: "Selenium, B12, Vit C, Vit K" },
        ],
        tip: "The long run earns the biggest breakfast of the week. Get the shakshuka in within 60-90 minutes of finishing: eggs, chickpeas and toast give you protein and carbs together. The last of the miso-sesame dressing goes on tonight's fish. Soak 60g moong dal in water before bed for Sunday's chillas, and move the last tilapia to the fridge.",
      },
      {
        dow: "sun", day: "Sunday", emoji: "📦", title: "Easy Indian Sunday",
        meals: [
          { meal: "Breakfast", time: "9 AM", short: "Moong dal chilla", food: "60g moong dal (soaked overnight) blended with ginger, green chilli, cumin and a pinch of hing into a batter, cooked as 2 thin chillas in 1 tsp oil + mint-coriander chutney + 150g Greek yogurt on the side", kcal: 355, protein: 30, fiber: 6, nutrients: "Folate, Iron, Calcium, Protein" },
          { meal: "Snack", time: "11 AM", short: "Fruit chaat + almonds", food: "1 cup chopped apple, orange and pomegranate with chaat masala, black salt and lemon + 12 almonds", kcal: 195, protein: 4, fiber: 6, nutrients: "Vit C, Vit E, Potassium" },
          { meal: "Lunch", time: "1:30 PM", short: "Light egg curry + rice", food: "2 boiled eggs simmered in a tomato-onion-ginger gravy with turmeric, Kashmiri chilli and coriander powder (1 tsp oil, no coconut cream) + 1/2 cup brown rice (from Sunday's batch) + kachumber + 100g Greek yogurt raita", kcal: 415, protein: 29, fiber: 5, nutrients: "B12, Choline, Vit C, Calcium" },
          { meal: "Snack", time: "4 PM", short: "Yogurt, berries + seeds", food: "150g Greek yogurt + 1/2 cup berries + 1 tbsp pumpkin seeds — eat it while next week's prep is on the hob", kcal: 185, protein: 18, fiber: 3, nutrients: "Calcium, Zinc, Vit C, Probiotics" },
          { meal: "Dinner", time: "7 PM", short: "Tawa tilapia + bhindi", food: "150g tilapia (defrosted) rubbed with Kashmiri chilli, turmeric, ginger-garlic and lemon and cooked on a hot tawa in 1 tsp oil + 150g bhindi (okra) sabzi with onion and amchur (1/2 tsp oil) + 2 small rotis", kcal: 420, protein: 40, fiber: 9, nutrients: "Selenium, B12, Vit K, Folate" },
        ],
        tip: "An easy Indian Sunday. The moong dal from the batch shows up raw this time: soaked and blended into chillas. Dry the bhindi completely before you slice it and cook it uncovered so it doesn't go slimy. Do next week's prep this afternoon, and eat the yogurt bowl while the pots run.",
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
          "Chicken breast 600g raw (cooks down to ~440g: Mon dinner 110g + Tue lunch 110g + Wed dinner 110g + Fri lunch 110g)",
          "Paneer 200g, one small block (Mon breakfast 50g + Wed lunch 60g + Sat lunch 80g)",
          "Tilapia 3 fillets, ~150g each, fresh or frozen (Tue dinner + Sat dinner + Sun dinner)",
          "King fish (seer/surmai) 1 steak, ~150g, from a reputable fish counter (Thu lunch)",
          "Eggs, 1 dozen (11 needed: Tue breakfast 2, Wed snack 2, Thu dinner 2, Fri dinner 1, Sat post-run 2, Sun lunch 2, plus 1 spare)",
          "Greek yogurt ~1.5kg (a 1kg tub + a 500g tub: Mon 200g, Tue 150g, Wed 240g, Thu 150g, Fri 195g, Sat 130g, Sun 400g)",
          "Low-fat plain curd (Indian-style) 500g (chicken marinade 120g, Mon chaas 100g, Thu neer mor 100g, Mon tikka masala + Sat paneer marinade 60g, ~120g spare)",
        ],
      },
      {
        name: "Legumes & Cans",
        items: [
          "Dried chickpeas (kabuli chana) 200g, soaked overnight Saturday. Makes ~3 cups: Mon lunch 3/4 + Wed lunch 3/4 + Thu sundal 1/2 + Sat shakshuka 1/2 = 2.5 cups, ~1/2 cup spare. Or use 2 x 400g cans, drained",
          "Yellow moong dal (split mung) 250g pack: 130g for the Sunday batch, ~2.25 cups cooked (Thu breakfast 1/2 + Thu dinner 3/4 + Fri dinner 3/4 = 2 cups), plus 60g raw for Sunday's chillas, ~60g spare",
          "Besan (gram flour), small pack (Mon chillas, 40g)",
          "Edamame, frozen shelled: use up last week's bag, or buy 200g (Fri snack 3/4 cup)",
          "White miso paste: use up last week's tub (dressing 2 tbsp + Fri ramen 1 tsp)",
        ],
      },
      {
        name: "Grains & Wraps",
        items: [
          "Brown rice 280g (1.5 cups dry for the Sunday batch, ~4.5 cups cooked: 8 portions of 1/2 cup for Mon lunch, Tue lunch + dinner, Thu breakfast + lunch, Sat lunch + dinner, Sun lunch)",
          "Rolled oats, small pack (Wed 1/2 cup + Fri 1/2 cup)",
          "Soba noodles: use up last week's pack (Fri ramen, 40g)",
          "Whole wheat pitas/flatbreads, pack of 4 (Wed lunch 1 small + Fri wrap 1 large; freeze the rest)",
          "Whole wheat flour (atta) or store-bought rotis (5 small: Mon dinner 2 + Thu dinner 1 + Sun dinner 2)",
          "Whole grain bread, small loaf (3 slices: Tue breakfast 1, Sat pre-run 1, Sat post-run 1; freeze the rest)",
        ],
      },
      {
        name: "Vegetables",
        items: [
          "Spinach 400g (Mon dinner 150g + Tue bibimbap ~80g + Thu kootu 150g)",
          "Sweet potatoes, 2 medium ~400g (Tue snack 150g + Wed dinner 200g)",
          "Bok choy (2 small heads: Tue dinner + Fri ramen)",
          "Broccoli (1 small head: Tue dinner + Sat dinner)",
          "Mushrooms 150g (Tue bibimbap 50g + Fri ramen ~100g)",
          "Cabbage, 1 small (Thu thoran ~1/4; the rest keeps 2 weeks)",
          "Green beans 250g (Wed dinner 1 cup + Sat dinner 1/2 cup)",
          "Okra (bhindi) 150g (Sun dinner)",
          "Capsicum (2: Sat shakshuka + Sat salad)",
          "Carrots (4: Mon snack sticks, Tue omelette + bibimbap, Thu sundal)",
          "Cucumbers (6: Mon kachumber + snack, Tue bibimbap, Wed snack + salad + tzatziki, Fri wrap + snack, Sat salad + dinner, Sun kachumber)",
          "Tomatoes (9: Mon chilla + chana masala + kachumber + tikka masala, Wed salad, Fri wrap, Sat shakshuka x2, Sun egg curry + kachumber)",
          "Cherry tomatoes, 1 small punnet (Wed snack)",
          "Lettuce or romaine, 1 head (Fri wrap + Sat salad)",
          "Spring onion (1 bunch)",
          "Red onion (3: kachumbers, Wed salad, Fri wrap, Sat salad)",
          "Brown onion (6: Mon chilla, chana masala, tikka masala, Thu podimas, Sat shakshuka, Sun egg curry + bhindi)",
          "Garlic (2 bulbs)",
          "Fresh ginger (1 large piece)",
          "Green chillies (4)",
          "Curry leaves (3 sprigs)",
          "Fresh coriander (2 bunches)",
          "Fresh mint (1 bunch: chaas, tzatziki, Sat dressing, Sun chutney)",
          "Flat-leaf parsley (1 small bunch, Wed salad)",
          "Grated coconut, a small frozen or unsweetened desiccated pack (Thu thoran, 1 tbsp)",
          "Avocado (1: Tue, Fri and Sat, a quarter each)",
        ],
      },
      {
        name: "Fruits",
        items: [
          "Berries 300g, fresh or frozen (4 x 1/2 cup: Tue, Wed, Fri, Sun)",
          "Bananas (2: Wed pre-run 1 + Sat pre-run 1/2, 1/2 spare)",
          "Apples (4: Mon, Fri, Sat, Sun chaat)",
          "Oranges (2: Thu snack + Sun chaat)",
          "Pomegranate, 1 small (Sun chaat; freeze leftover arils)",
          "Lemons (6) + limes (2)",
        ],
      },
      {
        name: "Fats & Extras",
        items: [
          "Cooking oil (light olive or sunflower) + extra virgin olive oil",
          "Sesame oil",
          "Coconut oil, small jar (Thu king fish)",
          "Ghee (1/2 tsp for Thu pongal)",
          "Peanut butter, natural (Wed pre-run + Fri snack, 1 tbsp each)",
          "Almonds 75g (Mon 14, Tue 12, Thu 12, Sat 12, Sun 12)",
          "Pumpkin seeds 30g (Tue + Sun, 1 tbsp each)",
          "Chia seeds (Wed + Fri, 1 tsp each)",
          "Honey",
          "Low-sodium soy sauce",
          "Rice vinegar, small bottle (miso dressing + Sat cucumber salad)",
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
          "Tandoori masala (Sat paneer tikka)",
          "Kasuri methi (Mon tikka masala)",
          "Amchur (dry mango powder)",
          "Chaat masala + black salt",
          "Ajwain + hing (asafoetida)",
          "Mustard seeds",
          "Dried red chillies",
          "Black peppercorns (Thu pongal)",
          "Paprika + dried oregano (or za'atar)",
          "Gochugaru (Korean red chilli flakes)",
          "Cinnamon",
        ],
      },
      {
        name: "Drinks",
        items: [
          "Green tea",
          "Milk, small carton (Fri overnight oats)",
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
    note: "Sunday, ~70 minutes total. Start steps 1, 2 and 3 together across the pressure cooker, hob and oven, then add the moong dal, whisk the dressing and portion everything while they cook.",
    multitask: "Chickpeas (step 1, pressure cooker, soaked Saturday night), brown rice (step 2, hob) and the marinated chicken (step 3, oven) all start at minute 0. Once the chickpeas are done, the moong dal (step 4) goes into the pressure cooker or a second pot. While everything cooks, whisk the miso-sesame dressing (step 5), portion the paneer and fish (step 6) and chop (step 7), then pack and label everything with its move-to-fridge day (step 8).",
    steps: [
      { num: 1, task: "Chickpeas (soak Saturday night)", how: "Soak 200g dried chickpeas overnight in plenty of water, drain and rinse, then pressure-cook with fresh water, 1 tsp salt and a bay leaf for 15-20 min (5-6 whistles) until tender all the way through. Or simmer 60-75 min. Makes ~3 cups. Keep plain. Portions: Mon lunch 3/4 cup + Wed lunch 3/4 cup (fridge); Thu sundal 1/2 cup + Sat shakshuka 1/2 cup FROZEN (move Wed night and Fri night). ~1/2 cup spare for a salad. Covers Mon lunch + Wed lunch + Thu snack + Sat post-run.", timing: "0-30 min" },
      { num: 2, task: "Brown Rice", how: "Rinse and cook 1.5 cups (280g) brown rice in 3.5 cups water, ~35 min, for ~4.5 cups cooked. Spread on a tray to cool within an hour, then portion into 8 containers of 1/2 cup: Mon lunch, Tue lunch and Tue dinner in the fridge; Thu breakfast, Thu lunch, Sat lunch, Sat dinner and Sun lunch FROZEN, each moved to the fridge the night before. Covers Mon lunch + Tue lunch + Tue dinner + Thu breakfast + Thu lunch + Sat lunch + Sat dinner + Sun lunch.", timing: "0-35 min" },
      { num: 3, task: "Ginger-Garlic Chicken Batch", how: "Cut 600g chicken breast into 4 even pieces and marinate in 1/2 cup low-fat curd + 1 tbsp ginger-garlic paste + juice of 1/2 lemon + 1/2 tsp turmeric + 1/2 tsp black pepper + 1 tsp oil + salt for 15 min or more. Keep it neutral, because each day re-seasons it: tikka masala, bibimbap, souvlaki, shawarma. Bake at 200°C for 22-25 min until 74°C inside, rest 5 min, then split into 4 portions of ~110g cooked. Mon dinner, Tue lunch and Wed dinner in the fridge (eat within 4 days); Fri lunch FROZEN, moved to the fridge Thursday night. Covers Mon dinner + Tue lunch + Wed dinner + Fri lunch.", timing: "0-45 min" },
      { num: 4, task: "Plain Moong Dal", how: "Rinse 130g yellow moong dal (no soaking needed) and cook with 450ml water, 1/2 tsp turmeric and 1/2 tsp oil, 2 whistles in the pressure cooker or ~20 min on the hob, until soft but still thick. Whisk lightly, salt a little and keep plain. Makes ~2.25 cups. Portions: Thu breakfast 1/2 cup + Thu dinner 3/4 cup + Fri dinner 3/4 cup, all FROZEN (Thu portions move to the fridge Wed night, Fri's Thu night). Keep the other ~60g raw moong in the pack and soak it Saturday night for Sunday's chillas. Covers Thu breakfast + Thu dinner + Fri dinner (+ Sun breakfast from the raw dal).", timing: "30-50 min" },
      { num: 5, task: "Miso-Sesame Dressing", how: "Whisk 2 tbsp white miso + 2 tbsp rice vinegar + 1 tbsp sesame oil + 1 tbsp honey + 1 tbsp grated ginger + 1 tsp soy sauce + 1/2 tsp gochugaru + 2-3 tbsp warm water until smooth. Makes ~8 tbsp; you need 5: Tue lunch 2 tbsp + Fri snack 1 tbsp + Sat dinner 2 tbsp, with ~3 tbsp spare for an extra salad. Keeps 7 days in a jar in the fridge. Covers Tue lunch + Fri snack + Sat dinner.", timing: "5 min" },
      { num: 6, task: "Portion Paneer & Fish", how: "Cut paneer into 50g (Mon breakfast) and 60g (Wed lunch), both in the fridge in a box of water, changed every couple of days, and 80g (Sat lunch) FROZEN, moved to the fridge Friday night. Soak thawed paneer in warm water for 10 min to soften it again. Freeze the 3 tilapia fillets and the king fish steak as single portions, then thaw each in the fridge the night before: tilapia Mon night (Tue dinner), king fish Wed night (Thu lunch), tilapia Fri night (Sat dinner), tilapia Sat night (Sun dinner). Fish is best cooked fresh, not pre-cooked.", timing: "5 min" },
      { num: 7, task: "Chop & Wash", how: "Make a small jar of ginger-garlic paste (or mince a big batch), slice 2 onions, wash and dry the spinach, cut the broccoli into florets, trim the green beans and shred 1/4 of the cabbage for Thursday's thoran. Store each in a small container so weeknight cooking is mostly assembly.", timing: "10 min" },
      { num: 8, task: "Pack + Label", how: "Pack snack bags (14 + 4 x 12 almonds, 2 x 1 tbsp pumpkin seeds). Chickpeas, chicken, rice, dressing and paneer go into labeled containers on one fridge shelf. Write the move-to-fridge day on every frozen container: chickpeas Wed + Fri, chicken Thu, moong dal Wed + Thu, rice the night before each use (from Wed), paneer Fri, fish Mon/Wed/Fri/Sat.", timing: "10 min" },
    ],
    newIngredients: [
      { name: "Yellow moong dal (split mung beans)", desc: "The quickest-cooking, gentlest dal. It needs no soaking and is soft in about 20 minutes. This week it's the base of pongal, keerai kootu and a miso ramen broth, and soaked raw it blends into Sunday's chillas. Sold at Indian grocers and most supermarkets." },
      { name: "King fish (seer / surmai / vanjaram)", desc: "A firm, meaty, mild fish that's loved along the Kerala and Tamil coasts and isn't 'fishy' at all. It's usually sold as steaks. Buy from a reputable counter and pan-sear on high heat. If you can't find it, swap in a tilapia or wild salmon fillet." },
      { name: "Besan (gram flour)", desc: "Flour made from chickpeas, with more protein and fibre than wheat flour. Whisked with water and spices it makes a thin savoury chilla in minutes. Keeps for months in an airtight jar." },
      { name: "Rice vinegar", desc: "A mild, slightly sweet vinegar used in Japanese and Korean cooking. It balances the salty miso in this week's dressing and makes a quick cucumber salad. Much gentler than white vinegar." },
      { name: "Gochugaru", desc: "Korean red chilli flakes with a gentle, fruity heat, used in this week's bibimbap chicken, tilapia glaze and ramen. They're smoky rather than sharp, so you can be generous." },
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
