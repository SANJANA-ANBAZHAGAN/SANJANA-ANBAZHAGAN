# Health & Fitness Dashboard

A personal, private dashboard for tracking daily nutrition, workouts, running progress, and body-composition goals — built around a specific coaching plan (see `js/plans.js`) and designed to pull in real data exported from Apple Health.

It's a static site: plain HTML/CSS/JS, no build step, no server, no account. All your data stays in your browser's `localStorage` on whatever device you open it on.

## Sections

1. **Daily Overview** — calories, protein, water, steps, sleep, plus Apple Health extras (active calories, resting heart rate, stand hours) in one view, with a quick-log form for backfilling.
2. **Nutrition Tracker** — log meals against your targets (1,550-1,650 kcal, 105-110g protein, 28-35g fiber). Flags a banner if calories go over 1,650 or protein drops below 100g.
3. **Workout Tracker** — a Mon-Sun calendar pre-filled with your weekly split (Upper A, Lower A, Run+Core, Upper B, Lower B/Rest, Long Run, Rest+Meal Prep), a streak counter, and weekly completion count.
4. **Running Progress** — log runs (distance, duration, HR) and see a pace chart against your 10K goal pace band, plus this week's target from the built-in 10K training plan.
5. **Body Goals** — weight / body fat % / visceral fat trend charts against your goal bands.
6. **Plans** — your full coaching content: the weekly workout plan with exercises/sets/reps, the 12-week 10K training plan, 4 rotating nutrition day templates (with a one-click "log this as today's meals" button), and a checkable grocery list.
7. **Settings** — Apple Health import, manual data entry for any date, JSON backup/restore, and reset.

Your profile numbers, targets, and goals live in `js/profile.js`. The workout/nutrition/running plan content lives in `js/plans.js`. Edit either file directly whenever your coach (or you) adjusts something — no rebuild needed, just refresh the page.

## Running it

No install needed. Either:

- **Open directly**: double-click `index.html`. Everything works from the local file system.
- **Or serve it** (slightly nicer, avoids occasional browser file:// quirks):
  ```
  cd health-fitness-dashboard
  python3 -m http.server 8000
  ```
  then visit `http://localhost:8000`.

### Deploying to GitHub Pages (so you can check it from your phone too)

1. Push this repo to GitHub (already done if you're reading this from the repo).
2. Repo Settings → Pages → Source: deploy from branch → select the branch and `/health-fitness-dashboard` as the folder (or move these files to a `docs/` folder / a dedicated `gh-pages` branch — whichever GitHub Pages option you prefer).
3. Your dashboard will be live at `https://<username>.github.io/<repo>/`.

Note: **localStorage is per-browser, per-device.** Hosting it on GitHub Pages makes the app reachable from anywhere, but your logged data still only lives in whichever browser you used to log it. Use **Settings → Export Backup** regularly, and **Import Backup** on another device/browser if you want your history to follow you. (If you eventually want true cross-device sync, that requires a small backend/database — happy to build that as a v2 if you want it.)

## Importing your Apple Health data

The dashboard can pull in steps, active calories, resting heart rate, sleep, weight, body fat %, stand hours, and running workouts (with heart rate) directly from Apple's official export — no third-party app or account required, and nothing leaves your device.

**On your iPhone:**
1. Open the **Health** app.
2. Tap your profile picture (top right) → scroll down → **Export All Health Data**.
3. Confirm — this generates a `.zip` file (can take a few minutes for a large history).
4. Share/AirDrop/email that zip to your computer.

**On your computer:**
1. Unzip it. You'll get a folder containing `export.xml` (this can be large — hundreds of MB if you have years of Watch data).
2. In the dashboard, go to **Settings → Apple Health Import** and select that `export.xml` file.
3. Parsing happens entirely in your browser (via JavaScript `DOMParser`/regex over the file), so it can take anywhere from a few seconds to a minute or two for a big export. When it's done you'll see a summary of how many days and runs were imported.

Repeat this export/import whenever you want to refresh the dashboard with your latest Apple Health data (e.g., weekly). Re-importing is safe — it won't duplicate your manually-logged meals, manually-marked workouts, or runs that were already imported.

**What doesn't come from Apple Health:** protein, fiber, and meal-level calories — Apple Health only has those if you log food through an app like MyFitnessPal that syncs to Health. If it detects that data, it'll show a small reference note in the Nutrition tab, but won't add it to your totals automatically (to avoid double-counting if you also log manually). Log your meals directly in the Nutrition tab for the most reliable macro tracking.

## Data & privacy

- All logged data (meals, runs, check-ins, imported Apple Health data) is stored in `localStorage` in your browser — never sent to any server.
- The Apple Health `export.xml` parsing happens client-side; the file is never uploaded anywhere.
- Use **Settings → Export Backup** to download a `.json` snapshot of everything, and **Import Backup** to restore it (e.g., after clearing browser data, or on a new device/browser).

## File structure

```
health-fitness-dashboard/
├── index.html                 # page shell + tab structure
├── css/styles.css             # all styling (light/dark aware)
└── js/
    ├── profile.js             # your bio, targets, goals, weekly schedule
    ├── plans.js                # workout plan, 10K running plan, nutrition templates, grocery list
    ├── store.js                # localStorage data layer
    ├── appleHealthImport.js    # export.xml parser
    ├── app.js                  # UI rendering + interactions
    └── vendor/chart.umd.js     # Chart.js, vendored locally (no external CDN dependency)
```
