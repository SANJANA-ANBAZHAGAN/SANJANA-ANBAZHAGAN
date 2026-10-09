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
  weeklyFocus: "No reply to Friday's check-in again, so this week holds your usual training split and 1,550-1,650 kcal / 100-110g protein targets steady, with North Indian Monday and Sunday, a South Indian Thursday, and extra fuel for Wednesday and Saturday's runs — tell me how your runs, sleep and energy felt and I'll tune next week around it.",

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
        dow: "mon", day: "Monday", emoji: "🔥", title: "North Indian — Bhurji, Tikka & Dal Tadka",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Paneer bhurji + roti", food: "Paneer bhurji: 100g paneer crumbled and scrambled with 1/2 onion, 1 tomato, green chilli, turmeric, 1 tsp oil + 1 small roti + coriander", kcal: 410, protein: 22, fiber: 4, nutrients: "Calcium, Protein, Iron, Vit C" },
          { meal: "Snack", time: "10 AM", short: "Chaas + roasted chana", food: "1 glass spiced buttermilk (low-fat curd, cumin, mint) + 2 tbsp roasted chana", kcal: 150, protein: 9, fiber: 3, nutrients: "Calcium, Probiotics, Protein" },
          { meal: "Lunch", time: "1 PM", short: "Chicken tikka plate", food: "110g tandoori chicken tikka (from Sunday's batch, reheated in a pan with capsicum + onion) + 1 small roti + mint-coriander chutney + cucumber-tomato kachumber + 2 tbsp low-fat curd", kcal: 400, protein: 40, fiber: 5, nutrients: "B12, Iron, Niacin, Vit C" },
          { meal: "Snack", time: "4 PM", short: "Yogurt + walnuts", food: "150g Greek yogurt + 8 walnut halves", kcal: 195, protein: 16, fiber: 2, nutrients: "Calcium, Omega-3, Probiotics" },
          { meal: "Dinner", time: "7 PM", short: "Dal tadka + rice + palak", food: "3/4 cup dal (from Sunday's batch) finished with a fresh cumin-garlic-dried chilli tadka in 1 tsp oil + 1/2 cup brown rice + sauteed spinach with garlic and lemon + 1 boiled egg (from Sunday's batch)", kcal: 440, protein: 25, fiber: 11, nutrients: "Iron, Folate, Fibre, B12" },
        ],
        tip: "North Indian from morning to night, all light: paneer bhurji in 1 tsp oil, grilled tikka, a tadka dal with no cream anywhere. The only fresh cooking is the bhurji and the 2-minute tadka.",
      },
      {
        dow: "tue", day: "Tuesday", emoji: "🫒", title: "Chickpea Bowl & Miso Tofu",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Berry chia yogurt bowl", food: "150g Greek yogurt + 1/2 cup berries + 1 tbsp chia seeds + 2 tbsp granola", kcal: 340, protein: 21, fiber: 8, nutrients: "Calcium, Omega-3, Vit C, Probiotics" },
          { meal: "Snack", time: "10 AM", short: "Dal rasam shot + egg", food: "1/2 cup dal (from Sunday's batch) simmered with tomato, black pepper, cumin and a splash of water into a thin rasam-style soup, sipped warm + 1 boiled egg (from Sunday's batch)", kcal: 185, protein: 14, fiber: 4, nutrients: "Folate, Iron, B12, Vit C" },
          { meal: "Lunch", time: "1 PM", short: "Mediterranean chickpea bowl", food: "1 cup spiced chickpeas (from Sunday's batch) tossed with cucumber, tomato, red onion, 1/4 avocado, lemon + 1 tsp olive oil + 2 tbsp Greek yogurt-mint dressing + 1/2 roti on the side", kcal: 450, protein: 22, fiber: 16, nutrients: "Iron, Folate, Healthy fats, Fibre" },
          { meal: "Snack", time: "4 PM", short: "Yogurt + almonds", food: "150g Greek yogurt + 12 almonds + cinnamon", kcal: 190, protein: 17, fiber: 3, nutrients: "Calcium, Vit E, Magnesium" },
          { meal: "Dinner", time: "7 PM", short: "Miso-gochugaru tofu stir-fry", food: "130g miso-gochugaru tofu (from Sunday's batch, re-crisped in a pan) + sauteed bok choy + 1/3 cup edamame + 1/2 cup brown rice + sesame seeds", kcal: 390, protein: 28, fiber: 8, nutrients: "Iron, Calcium, Vit A, Fibre" },
        ],
        tip: "Tuesday is pure reheat-and-assemble. Chickpeas get a Mediterranean twist today, a chaat on Wednesday and a sundal on Thursday, so they never feel like the same leftovers.",
      },
      {
        dow: "wed", day: "Wednesday", emoji: "🏃‍♀️", title: "Run Day — Chicken Wrap & Curry-Leaf Tilapia",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Banana chia overnight oats", food: "1/2 cup rolled oats soaked overnight in 150g Greek yogurt + a splash of milk + 1 tbsp chia + 1/2 banana + cinnamon", kcal: 400, protein: 24, fiber: 8, nutrients: "Calcium, Omega-3, Potassium, Fibre" },
          { meal: "Pre-Run", time: "11 AM", short: "Banana + peanut butter", food: "1 banana + 1 tbsp peanut butter", kcal: 190, protein: 5, fiber: 3, nutrients: "Potassium, Magnesium — fast fuel" },
          { meal: "Lunch", time: "1 PM", short: "Tikka chicken wrap", food: "110g tandoori chicken (from Sunday's batch) in a whole wheat tortilla with mint chutney, yogurt-cucumber slaw, lettuce", kcal: 450, protein: 38, fiber: 6, nutrients: "B12, Iron, Folate" },
          { meal: "Post-Run", time: "4 PM", short: "Chana chaat + yogurt + toast", food: "1/2 cup chickpeas (from Sunday's batch) as a chaat with lemon, chaat masala, onion, tomato + 100g Greek yogurt + 1 slice toast", kcal: 300, protein: 21, fiber: 8, nutrients: "Iron, Folate, Calcium, Fibre" },
          { meal: "Dinner", time: "7 PM", short: "Curry-leaf tilapia + lemon rice", food: "130g tilapia pan-cooked in 1 tsp oil with mustard seeds, curry leaves, black pepper, turmeric + 1/2 cup lemon rice (leftover brown rice tossed with lemon, turmeric, mustard seeds) + green bean poriyal (100g beans, tiny bit of coconut or none)", kcal: 400, protein: 33, fiber: 6, nutrients: "Omega-3, B12, Selenium, Vit C" },
        ],
        tip: "Run day sits a bit higher on calories. Take the first few bites of the banana and peanut butter about 60-90 minutes before heading out, and the tilapia is a 10-minute cook once you're back and hungry.",
      },
      {
        dow: "thu", day: "Thursday", emoji: "🥥", title: "South Indian — Dosa, Chettinad Paneer & Egg Roast",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Dosa + sambar dal + egg", food: "2 small dosas (store-bought batter, 1 tsp oil total) + 3/4 cup dal (from Sunday's batch) simmered with sambar powder, tomato and carrot + 1 boiled egg (from Sunday's batch) + tomato chutney", kcal: 420, protein: 24, fiber: 8, nutrients: "Folate, Iron, B12, Fibre" },
          { meal: "Snack", time: "10 AM", short: "Chickpea sundal + chaas", food: "1/2 cup chickpeas (from Sunday's batch) tempered with mustard seeds, curry leaves, green chilli, lemon + 1 glass spiced buttermilk", kcal: 190, protein: 10, fiber: 7, nutrients: "Iron, Folate, Calcium, Fibre" },
          { meal: "Lunch", time: "1 PM", short: "Pepper paneer + lemon rice", food: "Chettinad-style pepper paneer: 100g paneer cubes pan-roasted with crushed black pepper, fennel, curry leaves, onion, 1 tsp oil + 1/2 cup lemon rice (brown rice, lemon, turmeric, mustard seeds) + beans poriyal + 2 tbsp curd", kcal: 465, protein: 24, fiber: 7, nutrients: "Calcium, Protein, Vit C, Fibre" },
          { meal: "Snack", time: "4 PM", short: "Yogurt + walnuts", food: "200g Greek yogurt + 8 walnut halves", kcal: 220, protein: 22, fiber: 2, nutrients: "Calcium, Omega-3, Probiotics" },
          { meal: "Dinner", time: "7 PM", short: "Kerala-style egg roast", food: "3 eggs boiled fresh, halved, and tossed in a pepper-fennel-curry leaf onion-tomato masala (1 tsp oil) + cabbage poriyal (1 cup cabbage, mustard seeds, curry leaves)", kcal: 350, protein: 20, fiber: 5, nutrients: "B12, Biotin, Choline, Vit C" },
        ],
        tip: "This is your South Indian day: dosa and sambar-style dal for breakfast, a Chettinad pepper paneer for lunch, egg roast at night. Move the frozen Thursday dal portion to the fridge Wednesday night.",
      },
      {
        dow: "fri", day: "Friday", emoji: "🥢", title: "Besan Chilla, Miso Tofu & Gochugaru Chicken",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Besan chilla + egg", food: "2 besan veggie chillas with onion, tomato, spinach, ajwain, minimal oil + mint-coriander chutney + 1 boiled egg (from Sunday's batch)", kcal: 340, protein: 24, fiber: 6, nutrients: "Folate, Iron, B12, Fibre" },
          { meal: "Snack", time: "10 AM", short: "Edamame + orange", food: "1/2 cup shelled edamame with sea salt + 1 small orange", kcal: 140, protein: 9, fiber: 6, nutrients: "Folate, Vit C, Iron, Fibre" },
          { meal: "Lunch", time: "1 PM", short: "Cold miso tofu rice bowl", food: "130g miso-gochugaru tofu (from Sunday's batch, served cold) + mixed greens, cucumber, carrot, 1/3 cup brown rice + 1/4 avocado + 1 boiled egg (from Sunday's batch) + sesame-lime dressing", kcal: 440, protein: 30, fiber: 9, nutrients: "Iron, Calcium, Healthy fats, Fibre" },
          { meal: "Snack", time: "4 PM", short: "Apple + peanut butter", food: "1 apple + 1 tbsp peanut butter", kcal: 200, protein: 6, fiber: 5, nutrients: "Vit E, Magnesium, Potassium, Fibre" },
          { meal: "Dinner", time: "7 PM", short: "Gochugaru chicken soba", food: "110g tandoori chicken (from Sunday's batch) sliced over 1 cup cooked soba, bok choy and broccoli tossed with 1 tsp gochugaru, 1 tsp soy sauce, 1 tsp sesame oil, lime", kcal: 430, protein: 36, fiber: 6, nutrients: "B12, Iron, Niacin, Fibre" },
        ],
        tip: "The same chicken that was tikka on Monday turns Korean-style tonight, because the gochugaru-soy dressing changes everything. Thaw the frozen chicken portion in the fridge Thursday night.",
      },
      {
        dow: "sat", day: "Saturday", emoji: "💪", title: "Long Run — Chickpea Recovery Bowl & Miso Salmon",
        meals: [
          { meal: "Breakfast", time: "7 AM", short: "Scrambled eggs + avocado toast", food: "2 scrambled eggs + 1 slice whole grain toast + 1/4 avocado + small OJ", kcal: 340, protein: 18, fiber: 6, nutrients: "B12, Vit C, Folate, Potassium" },
          { meal: "Pre-Run", time: "9 AM", short: "Banana + peanut butter", food: "1 banana + 1 tbsp peanut butter", kcal: 190, protein: 5, fiber: 3, nutrients: "Potassium, Magnesium — fast fuel" },
          { meal: "Post-Run", time: "12 PM", short: "Chickpea sweet potato bowl", food: "1 cup chickpeas (from Sunday's batch, defrosted) warmed with cumin and chaat masala + 2 boiled eggs (from Sunday's batch) + roasted sweet potato (100g) + spinach + 100g Greek yogurt-mint dressing", kcal: 590, protein: 38, fiber: 16, nutrients: "B12, Vit A, Iron, Potassium, Fibre" },
          { meal: "Snack", time: "4 PM", short: "Apple + pumpkin seeds", food: "1 apple + 2 tbsp roasted pumpkin seeds", kcal: 185, protein: 7, fiber: 5, nutrients: "Zinc, Magnesium, Fibre" },
          { meal: "Dinner", time: "7 PM", short: "Miso-glazed salmon + rice", food: "Wild-caught salmon (130g) brushed with 1 tbsp of the leftover miso paste, baked 200°C 12 min + 1/2 cup brown rice + sauteed greens and lemon", kcal: 440, protein: 31, fiber: 5, nutrients: "Omega-3, B12, Potassium, Iron" },
        ],
        tip: "The long run earns the biggest meal of the week. Eat the recovery bowl within 60-90 minutes of finishing, and move the frozen chickpea portion to the fridge Friday night.",
      },
      {
        dow: "sun", day: "Sunday", emoji: "📦", title: "Uttapam, Tofu Fried Rice & Paneer Tikka Masala",
        meals: [
          { meal: "Breakfast", time: "9 AM", short: "Egg uttapam + chutney", food: "2 veg uttapams (store-bought batter, topped with onion, tomato, carrot) each with an egg cooked into the top + tomato chutney", kcal: 380, protein: 22, fiber: 6, nutrients: "B12, Folate, Vit A, Fibre" },
          { meal: "Snack", time: "11 AM", short: "Yogurt + berries", food: "150g Greek yogurt + 1/2 cup berries + 1 tbsp pumpkin seeds", kcal: 190, protein: 18, fiber: 3, nutrients: "Calcium, Zinc, Vit C" },
          { meal: "Lunch", time: "1 PM", short: "Tofu egg fried rice", food: "130g miso-gochugaru tofu (from Sunday's batch, defrosted and crumbled) + 1 egg scrambled into 1/2 cup freshly cooked brown rice with 1/3 cup edamame, carrot, spring onion, soy sauce", kcal: 460, protein: 30, fiber: 8, nutrients: "B12, Iron, Calcium, Fibre" },
          { meal: "Snack", time: "4 PM", short: "Apple + almonds", food: "1 apple + 12 almonds", kcal: 175, protein: 6, fiber: 5, nutrients: "Vit E, Magnesium, Potassium, Fibre" },
          { meal: "Dinner", time: "7 PM", short: "Light paneer tikka masala", food: "100g paneer (defrosted) simmered in a gravy of blended onion, tomato, 1/2 cup low-fat curd, garam masala, kasuri methi, no cream, 1 tsp oil + 1 small roti + 1/3 cup brown rice + cucumber salad", kcal: 450, protein: 26, fiber: 6, nutrients: "Calcium, Protein, Vit C, Fibre" },
        ],
        tip: "Prep day. Do your Sunday batch cooking while the uttapams and fried rice happen, and tonight's masala is a gentle 20-minute cook that finishes the paneer.",
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
          "Chicken breast 450g raw (cooks down to ~330g: Mon lunch 110g + Wed lunch 110g + Fri dinner 110g)",
          "Paneer 300g (Mon breakfast 100g + Thu lunch 100g + Sun dinner 100g)",
          "Firm tofu 400g block (Tue dinner 130g + Fri lunch 130g + Sun lunch 130g)",
          "Tilapia fillet 130g (Wed dinner)",
          "Wild-caught salmon fillet 130g (Sat dinner)",
          "Eggs (18, 1.5 dozen: 8 for the Sunday boil, the rest cooked fresh)",
          "Greek yogurt ~1.2kg (a 1kg tub + a small pot: 8 snacks/breakfasts of 100-200g plus dressings)",
          "Low-fat plain curd (Indian-style) 750g (marinade, chaas x2, chutneys, gravy, kachumber)",
        ],
      },
      {
        name: "Legumes & Cans",
        items: [
          "Dried chickpeas (kabuli chana) 250g (1.25 cups), soaked overnight — makes ~3 cups: Tue 1 cup + Wed 1/2 + Thu 1/2 + Sat 1 cup",
          "Split yellow moong dal 150g (makes ~2.2 cups: Mon dinner 3/4 + Tue snack 1/2 + Thu breakfast 3/4)",
          "Roasted chana (small pack, 2 tbsp for Monday's snack)",
          "Edamame, frozen shelled 200g (Tue, Fri, Sun)",
          "Miso paste (white/shiro), small tub",
        ],
      },
      {
        name: "Grains & Wraps",
        items: [
          "Brown rice 300g (1.25 cups dry for the Sunday batch: Mon, Tue, Wed, Thu, Fri, Sat; plus a little for fresh-cooked rice on Sun)",
          "Rolled oats, small pack (Wed overnight oats)",
          "Besan (gram flour) 100g (Fri chillas)",
          "Idli/dosa batter, store-bought 400g (Thu dosas + Sun uttapams)",
          "Whole wheat tortilla (1)",
          "Whole wheat soba noodles ~100g (Fri)",
          "Whole wheat flour (atta) or store-bought rotis (4 small: Mon x2, Tue 1/2, Sun 1)",
          "Whole grain bread (small loaf — Wed post-run + Sat toast)",
          "Granola, small pack",
        ],
      },
      {
        name: "Vegetables",
        items: [
          "Baby spinach 200g (Mon dinner, Fri chilla, Sat bowl)",
          "Bok choy (1 bunch: Tue + Fri)",
          "Broccoli (1 small head, Fri)",
          "Green beans 250g (Wed + Thu poriyal)",
          "Cabbage, small (1/4 for Thu poriyal)",
          "Sweet potato (1)",
          "Capsicum (2)",
          "Carrots (4)",
          "Tomatoes (10)",
          "Cucumber (4)",
          "Mixed salad greens/lettuce, 1 bag",
          "Spring onion (1 bunch)",
          "Red onion (2)",
          "Brown onion (6)",
          "Garlic (2 bulbs)",
          "Fresh ginger (1 large piece)",
          "Green chillies (5)",
          "Curry leaves (2 sprigs)",
          "Fresh coriander (2 bunches)",
          "Fresh mint (1 bunch)",
          "Avocado (1: Tue, Fri, Sat quarters)",
        ],
      },
      {
        name: "Fruits",
        items: [
          "Berries 200g (fresh or frozen: Tue + Sun)",
          "Bananas (3)",
          "Apples (4)",
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
          "Almonds 40g",
          "Walnuts 30g",
          "Pumpkin seeds 30g",
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
          "Black peppercorns (for the Chettinad paneer and egg roast)",
          "Fennel seeds",
          "Kashmiri red chilli powder",
          "Garam masala",
          "Tandoori masala",
          "Chaat masala",
          "Mustard seeds",
          "Sambar powder",
          "Ajwain (carom seeds)",
          "Kasuri methi (dried fenugreek leaves)",
          "Gochugaru (Korean red chilli flakes)",
        ],
      },
      {
        name: "Drinks",
        items: [
          "Green tea",
          "Milk, small carton (Wed overnight oats)",
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
    note: "Sunday, ~90 minutes total. Start steps 1, 2, 3 and 6 at the same time across the hobs and oven — the timings below are built around that.",
    multitask: "Chickpeas (step 1, pressure cooker), dal (step 3, second hob), and brown rice (step 6, third pot) start together, and the chicken goes in the oven (step 2). While those run, press and marinate the tofu (step 4), then sear it as the oven frees up. Eggs (step 5) boil in a small pot while you chop. Chutney (step 7), paneer and fish portioning (step 8), chopping (step 9) and final labeling (step 10) fill the gaps.",
    steps: [
      { num: 1, task: "Plain Spiced Chickpeas", how: "Pressure-cook 250g soaked dried chickpeas (1.25 cups) with 1 tsp salt, 1/2 tsp turmeric and 1 bay leaf for 20-25 min (or 60+ min on the hob) until soft. Drain and keep them lightly seasoned so each dish can flavor them differently. Makes ~3 cups. Split into 1 cup (Tue Mediterranean bowl), 1/2 cup (Wed chaat), 1/2 cup (Thu sundal) and 1 cup (Sat recovery bowl). FREEZE the Saturday portion and move it to the fridge Friday night. Covers Tue lunch + Wed post-run + Thu snack + Sat post-run.", timing: "0-30 min" },
      { num: 2, task: "Tandoori Chicken Batch", how: "Marinate 450g chicken breast (cut into 3 large pieces) in 3/4 cup low-fat curd + 1.5 tbsp tandoori masala + 1 tsp Kashmiri chilli + juice of 1 lemon + 1 tbsp ginger-garlic + 1 tsp oil, 20 min. Bake at 200°C for 20-22 min (or pan-grill 12-15 min per side), rest, then slice and split into 3 portions of ~110g cooked. Covers Mon lunch (tikka plate) + Wed lunch (wrap) + Fri dinner (gochugaru soba). Freeze the Friday portion and thaw it in the fridge on Thursday night.", timing: "0-30 min" },
      { num: 3, task: "Plain Moong Dal", how: "Boil 150g split yellow moong dal with 600ml water, 1/2 tsp turmeric and 1 tsp salt for 20-25 min until soft and mashable. Makes ~2.2 cups. Keep it plain: Mon dinner gets a fresh cumin-garlic tadka (3/4 cup), Tue snack becomes a thin rasam-style soup (1/2 cup), Thu breakfast becomes sambar-style (3/4 cup). Freeze the Thu portion and move it to the fridge Wednesday night. Covers Mon dinner + Tue snack + Thu breakfast.", timing: "0-25 min" },
      { num: 4, task: "Miso-Gochugaru Tofu + Paste", how: "Mix 3 tbsp white miso + 1 tbsp soy sauce + 1 tbsp honey + 1 tbsp grated ginger + 1 tsp sesame oil + 1 tsp gochugaru + 2 tbsp water. Press 400g tofu, cut into 3 slabs (~130g each), coat in about 2/3 of the paste and pan-sear until crisp (~12 min). Keep the remaining paste in a jar for Saturday's salmon glaze. Covers Tue dinner + Fri lunch (served cold) + Sun lunch (freeze this one, defrost overnight, crumble into fried rice).", timing: "10-25 min" },
      { num: 5, task: "Boil Eggs", how: "8 eggs, cold water start, boil 9 min, then ice bath. Keep unpeeled in the fridge and peel as needed. Covers Mon dinner (1), Tue snack (1), Thu breakfast (1), Fri breakfast (1), Fri lunch (1), Sat post-run (2) = 7 used, 1 spare. (Thu dinner, Sat breakfast and Sun meals use fresh eggs.)", timing: "10-20 min" },
      { num: 6, task: "Brown Rice", how: "Cook 1.25 cups dry brown rice (30 min) for Mon, Tue, Wed (lemon rice), Thu (lemon rice), Fri and Sat portions at ~1/2 cup each. Refrigerate Mon-Wed portions, freeze Thu-Sat portions and move each to the fridge the night before. Sunday's meals use freshly cooked rice.", timing: "0-30 min" },
      { num: 7, task: "Mint-Coriander Chutney", how: "Blend 1 bunch each coriander + mint with 2 green chillies, lemon juice, 2 tbsp curd, and a pinch of salt. Covers Mon lunch, Wed wrap, Fri chilla and any snack dips.", timing: "5 min" },
      { num: 8, task: "Portion Paneer + Fish", how: "Cut paneer into 3 portions of 100g: leave Monday's and Thursday's in the fridge, freeze Sunday's and move it to the fridge Saturday night. Pat dry and bag the tilapia (130g) and salmon (130g); freeze both and move them to the fridge the night before Wed and Sat. Fish is best cooked fresh, not pre-cooked.", timing: "5 min" },
      { num: 9, task: "Chop & Wash", how: "Mince ginger and garlic, slice onions, wash and chop spinach, bok choy, green beans, capsicum, carrots, and cabbage. Portion into small containers so weeknight cooking is just assembly.", timing: "10 min" },
      { num: 10, task: "Portion + Label", how: "Pack snack bags (12 almonds, 8 walnut halves) and slice fruit. Chickpeas, dal, tofu, chicken, eggs and rice go into labeled containers on one fridge shelf, with the frozen portions marked by the day they need to move to the fridge.", timing: "10 min" },
    ],
    newIngredients: [
      { name: "Miso paste", note: "A fermented soybean paste that adds savory depth to this week's tofu marinade and Saturday's salmon glaze — look for white (shiro) miso, which is mild and a bit sweet. Sold at most supermarkets in the refrigerated or Asian aisle; it keeps for months in the fridge." },
      { name: "Gochugaru", note: "Korean red chilli flakes with a gentle fruity heat, used in the tofu paste and Friday's chicken soba. Smoky rather than sharp, so you can be generous." },
      { name: "Kasuri methi", note: "Dried fenugreek leaves — crush a pinch between your palms into Sunday's paneer tikka masala for that restaurant-style North Indian aroma without any cream. Sold at any Indian grocer and keeps for months." },
      { name: "Sundal", note: "A South Indian snack of tempered chickpeas with mustard seeds, curry leaves and green chilli. Thursday's version is just warmed chickpeas with a quick tempering in a few drops of oil, ready in 3 minutes." },
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
