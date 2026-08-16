#!/usr/bin/env node
// Pulls recent activities from Strava and writes strava-export.json for the dashboard's
// Settings > Strava Import to pick up.
//
// Why this script exists instead of the dashboard talking to Strava directly: Strava's API
// does not send CORS headers on the /oauth/token endpoint (and is inconsistent on others), so a
// browser cannot refresh a token or reliably call the API cross-origin. Running this from Node
// sidesteps that entirely - no backend/server needed, just run it locally whenever you want
// fresh data.
//
// One-time setup (see README.md "Connecting Strava" for the full walkthrough):
//   1. Create an API app at https://www.strava.com/settings/api
//   2. Do the one-time browser authorization to get a refresh_token
//   3. Save { "client_id": ..., "client_secret": ..., "refresh_token": ... } to .strava.json
//      in this folder (it's gitignored - never commit it)
//
// Usage:  node scripts/strava_sync.js

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const CONFIG_PATH = path.join(ROOT, ".strava.json");
const OUTPUT_PATH = path.join(ROOT, "strava-export.json");

function fail(msg) {
  console.error(msg);
  process.exit(1);
}

function loadConfig() {
  if (!fs.existsSync(CONFIG_PATH)) {
    fail(
      `Missing ${CONFIG_PATH}\n\n` +
        "Create it with:\n" +
        '{\n  "client_id": "YOUR_CLIENT_ID",\n  "client_secret": "YOUR_CLIENT_SECRET",\n  "refresh_token": "YOUR_REFRESH_TOKEN"\n}\n\n' +
        "See README.md > 'Connecting Strava' for how to get these values."
    );
  }
  try {
    return JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"));
  } catch (e) {
    fail(`Could not parse ${CONFIG_PATH}: ${e.message}`);
  }
}

function saveConfig(cfg) {
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(cfg, null, 2));
}

function niceType(raw) {
  if (!raw) return "Workout";
  return raw.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
}

async function refreshToken(cfg) {
  const res = await fetch("https://www.strava.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: cfg.client_id,
      client_secret: cfg.client_secret,
      grant_type: "refresh_token",
      refresh_token: cfg.refresh_token,
    }),
  });
  if (!res.ok) {
    const text = await res.text();
    fail(`Strava token refresh failed (${res.status}): ${text}`);
  }
  const data = await res.json();
  if (data.refresh_token && data.refresh_token !== cfg.refresh_token) {
    cfg.refresh_token = data.refresh_token;
    saveConfig(cfg);
  }
  return data.access_token;
}

async function fetchActivities(accessToken, afterEpoch) {
  const all = [];
  let page = 1;
  for (;;) {
    const url = `https://www.strava.com/api/v3/athlete/activities?per_page=100&page=${page}${afterEpoch ? `&after=${afterEpoch}` : ""}`;
    const res = await fetch(url, { headers: { Authorization: `Bearer ${accessToken}` } });
    if (!res.ok) {
      const text = await res.text();
      fail(`Strava activities fetch failed (${res.status}): ${text}`);
    }
    const batch = await res.json();
    all.push(...batch);
    if (batch.length < 100) break;
    page++;
  }
  return all;
}

async function main() {
  const cfg = loadConfig();
  const afterEpoch = cfg.last_sync_epoch || Math.floor(Date.now() / 1000) - 90 * 86400; // default: last 90 days
  console.log("Refreshing Strava access token...");
  const accessToken = await refreshToken(cfg);

  console.log("Fetching activities...");
  const activities = await fetchActivities(accessToken, afterEpoch);

  const runs = [];
  const workouts = [];
  let latestEpoch = afterEpoch;

  activities.forEach((a) => {
    const date = (a.start_date_local || a.start_date || "").slice(0, 10);
    if (!date) return;
    const durationMin = (a.moving_time || a.elapsed_time || 0) / 60;
    const distanceKm = (a.distance || 0) / 1000;
    const type = niceType(a.sport_type || a.type);
    const startEpoch = Math.floor(new Date(a.start_date).getTime() / 1000);
    if (startEpoch > latestEpoch) latestEpoch = startEpoch;

    workouts.push({ date, type, durationMin: Math.round(durationMin * 10) / 10 });

    if ((a.sport_type === "Run" || a.type === "Run") && distanceKm > 0.3) {
      runs.push({
        date,
        distanceKm: Math.round(distanceKm * 100) / 100,
        durationMin: Math.round(durationMin * 10) / 10,
        avgHR: a.average_heartrate ? Math.round(a.average_heartrate) : null,
        maxHR: a.max_heartrate ? Math.round(a.max_heartrate) : null,
      });
    }
  });

  cfg.last_sync_epoch = latestEpoch + 1;
  saveConfig(cfg);

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify({ exportedAt: new Date().toISOString(), runs, workouts }, null, 2));
  console.log(`Wrote ${OUTPUT_PATH}`);
  console.log(`${runs.length} run(s), ${workouts.length} workout(s) total.`);
  console.log("Now go to the dashboard's Settings tab and use 'Import Strava Export' to load it in.");
}

main().catch((e) => fail(e.stack || e.message));
