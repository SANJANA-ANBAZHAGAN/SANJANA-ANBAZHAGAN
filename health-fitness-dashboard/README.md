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

**What doesn't come from Apple Health:** protein, fiber, and meal-level calories — Apple Health only has those if you log food through an app like MyFitnessPal that syncs to Health. If it detects that data, the Nutrition tab shows a "Log MyFitnessPal totals" button that adds it to today's meals in one click (it won't do this automatically, to avoid double-counting if you also log manually).

## Connecting Strava

Strava has a real public API, but its `/oauth/token` endpoint doesn't send CORS headers, so a browser page cannot call it directly (you'll just get a blocked/failed request, not a helpful error). The fix is a tiny local script (`scripts/strava_sync.js`, uses only Node's built-in `fetch` — no npm install needed) that talks to Strava from your machine, not the browser, and writes a file the dashboard imports the same way it imports Apple Health data.

**One-time setup:**

1. Go to [strava.com/settings/api](https://www.strava.com/settings/api) and create an API application (any name/website works, e.g. "My Dashboard" / `http://localhost`). Note your **Client ID** and **Client Secret**.
2. Authorize it for your own account. Visit this URL in your browser (replace `YOUR_CLIENT_ID`):
   ```
   https://www.strava.com/oauth/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=http://localhost&response_type=code&scope=activity:read_all
   ```
3. Click "Authorize". You'll land on a `localhost` page that fails to load — that's expected. Copy the `code=...` value out of the browser's address bar.
4. Exchange that code for a refresh token (run this in a terminal, filling in your values):
   ```
   curl -X POST https://www.strava.com/oauth/token \
     -d client_id=YOUR_CLIENT_ID \
     -d client_secret=YOUR_CLIENT_SECRET \
     -d code=THE_CODE_FROM_STEP_3 \
     -d grant_type=authorization_code
   ```
   The response includes a `refresh_token` — save it.
5. Create `health-fitness-dashboard/.strava.json` (this file is gitignored — it will never be committed):
   ```json
   {
     "client_id": "YOUR_CLIENT_ID",
     "client_secret": "YOUR_CLIENT_SECRET",
     "refresh_token": "THE_REFRESH_TOKEN_FROM_STEP_4"
   }
   ```

**Every time you want fresh data:**
```
cd health-fitness-dashboard
node scripts/strava_sync.js
```
This writes `strava-export.json` (also gitignored). In the dashboard, go to **Settings → Strava Import** and select that file. Re-running the script only pulls activities since your last sync, and re-importing never duplicates a run that's already in the dashboard (it matches by date/duration/distance) — including one that came in via Apple Health instead, so it's safe to use both.

## Data & privacy

- All logged data (meals, runs, check-ins, imported Apple Health/Strava data) is stored in `localStorage` in your browser — never sent to any server.
- The Apple Health `export.xml` parsing happens client-side; the file is never uploaded anywhere.
- Your Strava client secret and refresh token live only in `.strava.json` on your own machine — gitignored, never committed, never sent anywhere except Strava's own token endpoint.
- Use **Settings → Export Backup** to download a `.json` snapshot of everything, and **Import Backup** to restore it (e.g., after clearing browser data, or on a new device/browser).

## File structure

```
health-fitness-dashboard/
├── index.html                 # page shell + tab structure
├── css/styles.css             # all styling (light/dark aware)
├── scripts/strava_sync.js     # local Strava sync (run with node, no install needed)
├── .strava.json               # your Strava keys - gitignored, you create this
├── strava-export.json         # sync output - gitignored, generated
└── js/
    ├── profile.js             # your bio, targets, goals, weekly schedule
    ├── plans.js                # workout plan, 10K running plan, nutrition templates, grocery list
    ├── store.js                # localStorage data layer
    ├── appleHealthImport.js    # export.xml parser
    ├── app.js                  # UI rendering + interactions
    └── vendor/chart.umd.js     # Chart.js, vendored locally (no external CDN dependency)
```
