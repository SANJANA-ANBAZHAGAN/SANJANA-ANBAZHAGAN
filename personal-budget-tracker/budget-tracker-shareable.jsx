import { useState, useEffect, useRef, useMemo } from "react";

// ---------- Constants ----------
// Categories tuned for Bay Area life: Indian groceries as their own line (so they don't get
// lumped into "Groceries – Other" and hide how much of the grocery budget is which), transit
// options that actually exist around Fremont/the East Bay, and a couple of goal-shaped buckets
// (Wedding Planning, Family Support) that mirror the Goals tab below instead of drowning in
// "Shopping". Edit freely — this is a starting point, not a fixed schema.
const CATEGORIES = [
  "Rent",
  "Groceries – Indian",
  "Groceries – Other",
  "Restaurants & Delivery",
  "Coffee & Snacks",
  "Transport & Transit",
  "Gas & EV Charging",
  "Utilities & Phone",
  "Subscriptions",
  "Shopping",
  "Amazon",
  "Travel",
  "Car",
  "Health & Fitness",
  "Personal Care",
  "Wedding Planning",
  "Family Support",
  "Savings & Investing Transfer",
  "Refunds",
  "Excluded",
  "Uncategorized",
];

// Categories that are money moving, not money spent — kept out of the "total spend" number
// and shown separately so nothing is silently hidden.
const NON_SPEND_CATEGORIES = ["Refunds", "Excluded", "Savings & Investing Transfer"];

const DEFAULT_CARDS = ["Checking / Debit", "Credit Card 1", "Credit Card 2"];

// Starter monthly budget targets — rough numbers sized to a take-home in the ~$5.3k/month
// range with rent around $1.6k, deliberately leaving room to hit savings goals. These are a
// first guess, not a verdict: adjust every line in Settings once you've seen a real month or
// two of data.
const DEFAULT_BUDGETS = {
  Rent: 1640,
  "Groceries – Indian": 120,
  "Groceries – Other": 150,
  "Restaurants & Delivery": 200,
  "Coffee & Snacks": 50,
  "Transport & Transit": 80,
  "Gas & EV Charging": 60,
  "Utilities & Phone": 130,
  Subscriptions: 50,
  Shopping: 150,
  Amazon: 100,
  Travel: 150,
  Car: 150,
  "Health & Fitness": 60,
  "Personal Care": 50,
  "Wedding Planning": 150,
  "Family Support": 200,
};

// Seeded from what you've told me before. "current" is a manual number you update — this app
// doesn't try to guess which transactions are "goal progress," you just tell it.
function defaultGoals() {
  return [
    { id: uid(), name: "Emergency fund", target: 20000, current: 0, deadline: "6 months of expenses" },
    { id: uid(), name: "Parents support", target: 10000, current: 0, deadline: "Dec 2026" },
    { id: uid(), name: "Wedding", target: 11000, current: 0, deadline: "2027–2028" },
    { id: uid(), name: "Investing portfolio", target: 100000, current: 10000, deadline: "" },
  ];
}

const DEFAULT_RULES = [
  // --- Utilities & Phone ---
  { pattern: "PG&E", category: "Utilities & Phone" },
  { pattern: "PGANDE", category: "Utilities & Phone" },
  { pattern: "AT&T", category: "Utilities & Phone" },
  { pattern: "COMCAST", category: "Utilities & Phone" },
  { pattern: "XFINITY", category: "Utilities & Phone" },
  { pattern: "VERIZON", category: "Utilities & Phone" },
  { pattern: "T-MOBILE", category: "Utilities & Phone" },

  // --- delivery apps BEFORE the plain ride-hailing rules below, since "UBER EATS" contains "UBER" ---
  { pattern: "DOORDASH", category: "Restaurants & Delivery" },
  { pattern: "UBER EATS", category: "Restaurants & Delivery" },
  { pattern: "UBEREATS", category: "Restaurants & Delivery" },
  { pattern: "GRUBHUB", category: "Restaurants & Delivery" },
  { pattern: "POSTMATES", category: "Restaurants & Delivery" },

  // --- Coffee & Snacks ---
  { pattern: "STARBUCKS", category: "Coffee & Snacks" },
  { pattern: "PEET'S", category: "Coffee & Snacks" },
  { pattern: "PEETS", category: "Coffee & Snacks" },
  { pattern: "BLUE BOTTLE", category: "Coffee & Snacks" },
  { pattern: "PHILZ", category: "Coffee & Snacks" },

  // --- Transport & Transit (after the delivery-app rules above) ---
  { pattern: "UBER", category: "Transport & Transit" },
  { pattern: "LYFT", category: "Transport & Transit" },
  { pattern: "BART", category: "Transport & Transit" },
  { pattern: "CLIPPER", category: "Transport & Transit" },
  { pattern: "VTA", category: "Transport & Transit" },
  { pattern: "CALTRAIN", category: "Transport & Transit" },

  // --- Gas & EV Charging (COSTCO GAS before any generic Costco handling) ---
  { pattern: "CHEVRON", category: "Gas & EV Charging" },
  { pattern: "SHELL OIL", category: "Gas & EV Charging" },
  { pattern: "76 -", category: "Gas & EV Charging" },
  { pattern: "ARCO", category: "Gas & EV Charging" },
  { pattern: "TESLA SUPERCHARGER", category: "Gas & EV Charging" },
  { pattern: "EVGO", category: "Gas & EV Charging" },
  { pattern: "CHARGEPOINT", category: "Gas & EV Charging" },
  { pattern: "COSTCO GAS", category: "Gas & EV Charging" },

  // --- Amazon ---
  { pattern: "AMAZON", category: "Amazon" },
  { pattern: "AMZN", category: "Amazon" },

  // --- Groceries – Indian ---
  { pattern: "PATEL BROTHERS", category: "Groceries – Indian" },
  { pattern: "INDIA BAZAAR", category: "Groceries – Indian" },
  { pattern: "NAMASTE", category: "Groceries – Indian" },
  { pattern: "SUBZI", category: "Groceries – Indian" },
  { pattern: "SPICE", category: "Groceries – Indian" },

  // --- Groceries – Other ---
  { pattern: "TRADER JOE", category: "Groceries – Other" },
  { pattern: "SAFEWAY", category: "Groceries – Other" },
  { pattern: "WHOLE FOODS", category: "Groceries – Other" },
  { pattern: "SPROUTS", category: "Groceries – Other" },
  { pattern: "LUCKY", category: "Groceries – Other" },
  { pattern: "99 RANCH", category: "Groceries – Other" },

  // --- Car ---
  { pattern: "GEICO", category: "Car" },
  { pattern: "STATE FARM", category: "Car" },
  { pattern: "TESLA FINANCE", category: "Car" },
  { pattern: "TESLA INSURANCE", category: "Car" },

  // --- Subscriptions ---
  { pattern: "NETFLIX", category: "Subscriptions" },
  { pattern: "DISNEY PLUS", category: "Subscriptions" },
  { pattern: "DISNEYPLUS", category: "Subscriptions" },
  { pattern: "HULU", category: "Subscriptions" },
  { pattern: "SPOTIFY", category: "Subscriptions" },
  { pattern: "APPLE.COM/BILL", category: "Subscriptions" },
  { pattern: "ICLOUD", category: "Subscriptions" },
  { pattern: "GOOGLE *ONE", category: "Subscriptions" },
  { pattern: "GOOGLE ONE", category: "Subscriptions" },
  { pattern: "YOUTUBE PREMIUM", category: "Subscriptions" },
  { pattern: "YOUTUBETV", category: "Subscriptions" },
  { pattern: "HBO MAX", category: "Subscriptions" },
  { pattern: "MAX.COM", category: "Subscriptions" },
  { pattern: "PARAMOUNT+", category: "Subscriptions" },
  { pattern: "PEACOCK", category: "Subscriptions" },
  { pattern: "NYTIMES", category: "Subscriptions" },
  { pattern: "OPENAI", category: "Subscriptions" },
  { pattern: "CHATGPT", category: "Subscriptions" },
  { pattern: "ANTHROPIC", category: "Subscriptions" },

  // --- Travel ---
  { pattern: "UNITED AIR", category: "Travel" },
  { pattern: "ALASKA AIR", category: "Travel" },
  { pattern: "DELTA AIR", category: "Travel" },
  { pattern: "AIRBNB", category: "Travel" },
  { pattern: "MARRIOTT", category: "Travel" },
  { pattern: "HILTON", category: "Travel" },
  { pattern: "EXPEDIA", category: "Travel" },

  // --- money moving to savings/brokerage, not spend ---
  { pattern: "ROBINHOOD", category: "Savings & Investing Transfer" },
  { pattern: "VANGUARD", category: "Savings & Investing Transfer" },
  { pattern: "FIDELITY", category: "Savings & Investing Transfer" },
  { pattern: "SCHWAB", category: "Savings & Investing Transfer" },
  { pattern: "SOFI", category: "Savings & Investing Transfer" },
  { pattern: "MARCUS", category: "Savings & Investing Transfer" },
  { pattern: "ALLY", category: "Savings & Investing Transfer" },
  { pattern: "WEALTHFRONT", category: "Savings & Investing Transfer" },
  { pattern: "BETTERMENT", category: "Savings & Investing Transfer" },
];

// Merchants whose charges should be itemized from a receipt
const ITEMIZABLE = [
  { match: /COSTCO(?!.*GAS)/i, label: "Costco" },
  { match: /TARGET/i, label: "Target" },
  { match: /WAL-?MART/i, label: "Walmart" },
  { match: /SAM'?S CLUB/i, label: "Sam's Club" },
];

const PAYMENT_RE =
  /PAYMENT\s*-?\s*THANK\s*YOU|AUTOPAY|AUTOMATIC PAYMENT|ONLINE PAYMENT|E-?PAYMENT|MOBILE PAYMENT|CARDMEMBER SERV|CHASE CREDIT CRD/i;

// Storage is scoped to the artifact, so separate conversations keep separate ledgers even with
// this same value — no need to change it for privacy. Change it only to run more than one
// distinct tracker (e.g. personal vs. a shared one later).
const STORAGE_KEY = "personal-budget-tracker-v1";

// ---------- Helpers ----------
const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36);

const normMerchant = (m) => m.toUpperCase().replace(/\s+/g, " ").trim();

const fmt = (n) =>
  (n < 0 ? "-$" : "$") +
  Math.abs(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const monthKey = (dateStr) => dateStr.slice(0, 7); // YYYY-MM
const monthLabel = (key) => {
  const [y, m] = key.split("-");
  return new Date(+y, +m - 1, 1).toLocaleString("en-US", { month: "long", year: "numeric" });
};

const effective = (t) => t.amount * ((t.ourShares ?? 1) / (t.totalPeople ?? 1));

const itemizableLabel = (merchant) => {
  for (const it of ITEMIZABLE) if (it.match.test(merchant)) return it.label;
  return null;
};

const applyRules = (merchant, rules) => {
  const M = normMerchant(merchant);
  for (const r of rules) if (M.includes(r.pattern.toUpperCase())) return r.category;
  return null;
};

const stripFences = (s) => s.replace(/```json|```/g, "").trim();

// Normalize dates the LLM might return in any of several formats to YYYY-MM-DD
function normalizeDate(raw) {
  if (!raw || typeof raw !== "string") return null;
  const s = raw.trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return s;
  let m = s.match(/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/);
  if (m) {
    let [, mo, d, y] = m;
    if (y.length === 2) y = (+y > 70 ? "19" : "20") + y;
    return `${y}-${mo.padStart(2, "0")}-${d.padStart(2, "0")}`;
  }
  m = s.match(/^(\d{4})[/\-.](\d{1,2})[/\-.](\d{1,2})$/);
  if (m) return `${m[1]}-${m[2].padStart(2, "0")}-${m[3].padStart(2, "0")}`;
  const t = new Date(s);
  if (!isNaN(t.getTime())) {
    const y = t.getFullYear();
    const mo = String(t.getMonth() + 1).padStart(2, "0");
    const d = String(t.getDate()).padStart(2, "0");
    return `${y}-${mo}-${d}`;
  }
  return null;
}

// This fetch works from inside a Claude.ai artifact without an API key — the artifact sandbox
// proxies requests to this exact endpoint using your own Claude.ai session, so parsing a
// statement costs nothing beyond your normal Claude.ai usage. It will NOT work if this file is
// run outside an artifact (e.g. as a plain webpage) — there it needs a real API key instead.
async function callClaude(content) {
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 8000,
      messages: [{ role: "user", content }],
    }),
  });
  const data = await response.json();
  if (data.error) throw new Error(data.error.message || "API error");
  return (data.content || [])
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("\n");
}

const fileToBase64 = (file) =>
  new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(r.result.split(",")[1]);
    r.onerror = () => rej(new Error("Could not read " + file.name));
    r.readAsDataURL(file);
  });

const fileBlock = async (file) => {
  const data = await fileToBase64(file);
  if (file.type === "application/pdf") {
    return { type: "document", source: { type: "base64", media_type: "application/pdf", data } };
  }
  return { type: "image", source: { type: "base64", media_type: file.type || "image/png", data } };
};

// ---------- Root ----------
export default function App() {
  const [data, setData] = useState(null); // {transactions, rules, cards, uploads, budgets, goals}
  const [tab, setTab] = useState("dashboard");
  const [toast, setToast] = useState(null);
  const loaded = useRef(false);
  const saveTimer = useRef(null);

  useEffect(() => {
    (async () => {
      let init = {
        transactions: [],
        rules: DEFAULT_RULES,
        cards: DEFAULT_CARDS,
        uploads: [],
        budgets: { ...DEFAULT_BUDGETS },
        goals: defaultGoals(),
      };
      try {
        const res = await window.storage.get(STORAGE_KEY, true);
        if (res && res.value) {
          const parsed = JSON.parse(res.value);
          init = { ...init, ...parsed, budgets: { ...DEFAULT_BUDGETS, ...(parsed.budgets || {}) }, goals: parsed.goals || defaultGoals() };
        }
      } catch (e) {
        /* first run – key doesn't exist yet */
      }
      setData(init);
      loaded.current = true;
    })();
  }, []);

  // debounced save
  useEffect(() => {
    if (!loaded.current || !data) return;
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(async () => {
      try {
        await window.storage.set(STORAGE_KEY, JSON.stringify(data), true);
      } catch (e) {
        showToast("Saving failed – changes may be lost", true);
      }
    }, 600);
  }, [data]);

  const showToast = (msg, bad = false) => {
    setToast({ msg, bad });
    setTimeout(() => setToast(null), 3500);
  };

  if (!data)
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-100 text-stone-500 font-mono text-sm">
        Opening the ledger…
      </div>
    );

  const pendingCount = data.transactions.filter((t) => t.status === "pending" && !t.replaced).length;

  const tabs = [
    { id: "dashboard", label: "Dashboard" },
    { id: "review", label: "Review", badge: pendingCount },
    { id: "upload", label: "Upload" },
    { id: "goals", label: "Goals" },
    { id: "settings", label: "Settings" },
  ];

  return (
    <div className="min-h-screen bg-stone-100 text-slate-900" style={{ fontFamily: "ui-sans-serif, system-ui" }}>
      <header className="bg-slate-900 text-stone-100 px-5 pt-5 pb-0">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-baseline justify-between">
            <h1 className="text-lg font-semibold tracking-tight">Budget Tracker</h1>
            <span className="font-mono text-xs text-emerald-400">
              {data.transactions.filter((t) => !t.replaced).length} entries
            </span>
          </div>
          <nav className="flex gap-1 mt-4 -mb-px overflow-x-auto">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={
                  "px-4 py-2 text-sm rounded-t-lg transition-colors whitespace-nowrap " +
                  (tab === t.id ? "bg-stone-100 text-slate-900 font-medium" : "text-stone-300 hover:text-white")
                }
              >
                {t.label}
                {t.badge > 0 && (
                  <span className="ml-1.5 bg-amber-400 text-slate-900 text-xs font-mono rounded-full px-1.5">
                    {t.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6 pb-24">
        {tab === "upload" && <UploadTab data={data} setData={setData} showToast={showToast} goReview={() => setTab("review")} />}
        {tab === "review" && <ReviewTab data={data} setData={setData} showToast={showToast} />}
        {tab === "dashboard" && <DashboardTab data={data} setData={setData} showToast={showToast} />}
        {tab === "goals" && <GoalsTab data={data} setData={setData} showToast={showToast} />}
        {tab === "settings" && <SettingsTab data={data} setData={setData} showToast={showToast} />}
      </main>

      {toast && (
        <div
          className={
            "fixed bottom-5 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg shadow-lg text-sm text-white " +
            (toast.bad ? "bg-red-700" : "bg-slate-900")
          }
        >
          {toast.msg}
        </div>
      )}
    </div>
  );
}

// ---------- Upload ----------
function UploadTab({ data, setData, showToast, goReview }) {
  const [card, setCard] = useState(data.cards[0] || "");
  const [files, setFiles] = useState([]);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState("");

  const process = async () => {
    if (!card) return showToast("Pick a card label first", true);
    if (!files.length) return showToast("Choose at least one statement file", true);
    setBusy(true);
    let added = 0,
      dupes = 0,
      badDates = 0;
    try {
      let newTxns = [];
      for (let i = 0; i < files.length; i++) {
        const f = files[i];
        setProgress(`Reading ${f.name} (${i + 1}/${files.length})…`);
        const block = await fileBlock(f);
        const text = await callClaude([
          block,
          {
            type: "text",
            text:
              "This is a credit card or bank statement (or a cropped screenshot of one). Extract EVERY transaction line — do not skip any, do not summarize, do not use ellipses or 'more transactions below' shortcuts. Every single visible row must appear in your response. " +
              'Respond with ONLY a JSON array, no prose, no markdown fences. Each element: ["YYYY-MM-DD","MERCHANT DESCRIPTION",amount]. ' +
              "Dates MUST be in strict YYYY-MM-DD format — never MM/DD or DD/MM or with the year first. " +
              "Amount is a positive number for purchases/charges and NEGATIVE for refunds, returns, or credits. " +
              "Include payments to the card too (e.g. AUTOPAY) — they will be filtered later. " +
              "Use the transaction date, not the post date, when both exist. Keep merchant text as printed, trimmed. " +
              "If the year is missing on lines, infer it from the statement period.",
          },
        ]);
        let rows;
        try {
          rows = JSON.parse(stripFences(text));
        } catch {
          throw new Error(`Couldn't parse transactions from ${f.name}. Try a clearer copy or split it into pages.`);
        }
        const uploadId = uid();
        for (const r of rows) {
          if (!Array.isArray(r) || r.length < 3) continue;
          let [date, merchant, amount] = r;
          const normDate = normalizeDate(date);
          if (!normDate) {
            badDates++;
            continue;
          }
          date = normDate;
          if (!merchant || typeof amount !== "number") continue;
          const key = `${card}|${date}|${normMerchant(merchant)}|${amount.toFixed(2)}`;
          const exists =
            data.transactions.some(
              (t) => `${t.cardLabel}|${t.date}|${normMerchant(t.merchant)}|${t.amount.toFixed(2)}` === key
            ) ||
            newTxns.some(
              (t) => `${t.cardLabel}|${t.date}|${normMerchant(t.merchant)}|${t.amount.toFixed(2)}` === key
            );
          if (exists) {
            dupes++;
            continue;
          }
          newTxns.push({
            id: uid(),
            cardLabel: card,
            date,
            merchant: merchant.trim(),
            amount,
            category: null,
            ourShares: 1,
            totalPeople: 1,
            status: "pending",
            uploadId,
            fileName: f.name,
          });
        }
        setData((d) => ({
          ...d,
          uploads: [
            ...d.uploads,
            {
              id: uploadId,
              cardLabel: card,
              fileName: f.name,
              when: new Date().toISOString(),
              count: newTxns.filter((t) => t.uploadId === uploadId).length,
            },
          ],
        }));
      }

      setProgress("Categorizing…");
      const unknown = new Set();
      for (const t of newTxns) {
        if (PAYMENT_RE.test(t.merchant)) t.category = "Excluded";
        else if (t.amount < 0) t.category = "Refunds";
        else {
          const il = itemizableLabel(t.merchant);
          if (il && !applyRules(t.merchant, data.rules)) {
            t.category = `${il} *`;
            t.needsItemization = true;
          } else {
            const c = applyRules(t.merchant, data.rules);
            if (c) t.category = c;
            else unknown.add(normMerchant(t.merchant));
          }
        }
      }
      if (unknown.size) {
        try {
          const text = await callClaude([
            {
              type: "text",
              text:
                "Categorize these merchant strings from a US credit card statement. Categories: " +
                CATEGORIES.filter((c) => !["Refunds", "Excluded"].includes(c)).join("; ") +
                '. Use "Groceries – Indian" for Indian grocery stores. Respond ONLY with a JSON object mapping each merchant string EXACTLY as given to a category. Use "Uncategorized" when unsure. No prose, no fences.\n' +
                JSON.stringify([...unknown]),
            },
          ]);
          const map = JSON.parse(stripFences(text));
          for (const t of newTxns)
            if (!t.category)
              t.category = CATEGORIES.includes(map[normMerchant(t.merchant)]) ? map[normMerchant(t.merchant)] : "Uncategorized";
        } catch {
          for (const t of newTxns) if (!t.category) t.category = "Uncategorized";
        }
      }

      added = newTxns.length;
      setData((d) => ({ ...d, transactions: [...d.transactions, ...newTxns] }));
      showToast(
        `Added ${added} transactions` +
          (dupes ? `, skipped ${dupes} duplicates` : "") +
          (badDates ? `, ${badDates} with unreadable dates skipped` : "")
      );
      setFiles([]);
      if (added) goReview();
    } catch (e) {
      showToast(e.message, true);
    } finally {
      setBusy(false);
      setProgress("");
    }
  };

  return (
    <div className="space-y-5">
      <Section title="Upload a statement">
        <p className="text-sm text-stone-600 mb-4">
          PDF statements or cropped screenshots both work. Only upload <b>closed</b> statements, never the live
          activity view. Duplicates on the same card are skipped automatically.
        </p>
        <label className="block text-xs uppercase tracking-wide text-stone-500 mb-1">Card</label>
        <select
          value={card}
          onChange={(e) => setCard(e.target.value)}
          className="w-full border border-stone-300 rounded-lg px-3 py-2 bg-white mb-4"
        >
          {data.cards.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <label className="block text-xs uppercase tracking-wide text-stone-500 mb-1">Statement file(s)</label>
        <input
          type="file"
          multiple
          accept="application/pdf,image/*"
          onChange={(e) => setFiles([...e.target.files])}
          className="w-full text-sm mb-4"
        />
        {files.length > 0 && (
          <ul className="text-xs font-mono text-stone-600 mb-4 space-y-0.5">
            {files.map((f) => (
              <li key={f.name}>· {f.name}</li>
            ))}
          </ul>
        )}
        <button
          onClick={process}
          disabled={busy}
          className="w-full bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white rounded-lg py-2.5 font-medium"
        >
          {busy ? progress || "Working…" : "Process statements"}
        </button>
      </Section>
      {data.uploads.length > 0 && (
        <Section title="Upload history">
          <ul className="divide-y divide-stone-200 text-sm">
            {[...data.uploads]
              .reverse()
              .slice(0, 12)
              .map((u) => (
                <li key={u.id} className="py-2 flex justify-between gap-3">
                  <span className="truncate">{u.fileName}</span>
                  <span className="font-mono text-xs text-stone-500 whitespace-nowrap">
                    {u.cardLabel} · {new Date(u.when).toLocaleDateString()}
                  </span>
                </li>
              ))}
          </ul>
        </Section>
      )}
    </div>
  );
}

// ---------- Review ----------
function ReviewTab({ data, setData, showToast }) {
  const [splitFor, setSplitFor] = useState(null);
  const [itemizeFor, setItemizeFor] = useState(null);

  const pending = data.transactions.filter((t) => t.status === "pending" && !t.replaced);

  const update = (id, patch) =>
    setData((d) => ({
      ...d,
      transactions: d.transactions.map((t) => (t.id === id ? { ...t, ...patch } : t)),
    }));

  const saveRule = (t) => {
    const pattern = normMerchant(t.merchant).slice(0, 24);
    setData((d) => ({ ...d, rules: [...d.rules, { pattern, category: t.category }] }));
    showToast(`Rule saved: "${pattern}" → ${t.category}`);
  };

  const confirmAll = () => {
    setData((d) => ({
      ...d,
      transactions: d.transactions.map((t) => (t.status === "pending" ? { ...t, status: "confirmed" } : t)),
    }));
    showToast(`Confirmed ${pending.length} transactions`);
  };

  if (!pending.length)
    return (
      <Section title="Review">
        <p className="text-sm text-stone-600">
          Nothing waiting for review. Upload a statement and new transactions will land here for a quick check
          before they count.
        </p>
      </Section>
    );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm uppercase tracking-wide text-stone-500">{pending.length} to review</h2>
        <button
          onClick={confirmAll}
          className="bg-emerald-700 hover:bg-emerald-800 text-white text-sm rounded-lg px-4 py-2 font-medium"
        >
          Confirm all
        </button>
      </div>
      <div className="space-y-2">
        {pending.map((t) => (
          <TxnCard
            key={t.id}
            t={t}
            data={data}
            onCategory={(c) => update(t.id, { category: c, needsItemization: c.endsWith(" *") })}
            onSaveRule={() => saveRule(t)}
            onSplit={() => setSplitFor(t)}
            onItemize={() => setItemizeFor(t)}
            onConfirm={() => update(t.id, { status: "confirmed" })}
          />
        ))}
      </div>
      {splitFor && (
        <SplitModal
          t={splitFor}
          onClose={() => setSplitFor(null)}
          onSave={(ourShares, totalPeople) => {
            update(splitFor.id, { ourShares, totalPeople });
            setSplitFor(null);
          }}
        />
      )}
      {itemizeFor && (
        <ItemizeModal
          t={itemizeFor}
          onClose={() => setItemizeFor(null)}
          showToast={showToast}
          onItems={(items) => {
            setData((d) => ({
              ...d,
              transactions: [
                ...d.transactions.map((x) => (x.id === itemizeFor.id ? { ...x, replaced: true } : x)),
                ...items.map((it) => ({
                  id: uid(),
                  cardLabel: itemizeFor.cardLabel,
                  date: itemizeFor.date,
                  merchant: `${itemizeFor.merchant.trim()} · ${it.desc}`,
                  amount: it.amount,
                  category: it.category,
                  ourShares: itemizeFor.ourShares ?? 1,
                  totalPeople: itemizeFor.totalPeople ?? 1,
                  status: itemizeFor.status,
                  parentId: itemizeFor.id,
                  uploadId: itemizeFor.uploadId,
                })),
              ],
            }));
            setItemizeFor(null);
            showToast(`Split into ${items.length} line items`);
          }}
        />
      )}
    </div>
  );
}

function TxnCard({ t, data, onCategory, onSaveRule, onSplit, onItemize, onConfirm }) {
  const cats = useMemo(() => {
    const dynamic = t.category && t.category.endsWith(" *") ? [t.category] : [];
    return [...new Set([...dynamic, ...CATEGORIES])];
  }, [t.category]);
  const isSplit = (t.totalPeople ?? 1) > 1;
  return (
    <div className="bg-white rounded-xl border border-stone-200 p-3">
      <div className="flex justify-between items-baseline gap-3">
        <span className="text-sm font-medium truncate">{t.merchant}</span>
        <span className={"font-mono text-sm whitespace-nowrap " + (t.amount < 0 ? "text-emerald-700" : "")}>
          {fmt(t.amount)}
        </span>
      </div>
      <div className="text-xs text-stone-500 font-mono mt-0.5">
        {t.date} · {t.cardLabel}
        {isSplit && (
          <span className="text-amber-700">
            {" "}
            · split {t.ourShares}/{t.totalPeople} → {fmt(effective(t))}
          </span>
        )}
        {t.needsItemization && <span className="text-amber-700"> · itemization pending</span>}
      </div>
      <div className="flex flex-wrap gap-2 mt-2 items-center">
        <select
          value={t.category || "Uncategorized"}
          onChange={(e) => onCategory(e.target.value)}
          className="border border-stone-300 rounded-lg px-2 py-1 text-sm bg-white flex-1 min-w-32"
        >
          {cats.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <Btn onClick={onSaveRule} title="Remember this category for this merchant">
          +rule
        </Btn>
        <Btn onClick={onSplit}>Split…</Btn>
        {(t.needsItemization || itemizableLabel(t.merchant)) && <Btn onClick={onItemize}>Itemize…</Btn>}
        <Btn onClick={onConfirm} primary>
          ✓
        </Btn>
      </div>
    </div>
  );
}

function SplitModal({ t, onClose, onSave }) {
  const [shares, setShares] = useState(t.ourShares > 1 || t.totalPeople > 1 ? t.ourShares : 1);
  const [total, setTotal] = useState(t.totalPeople > 1 ? t.totalPeople : 2);
  const valid = total > 0 && shares > 0 && shares <= total;
  return (
    <Modal title={`Split: ${t.merchant}`} onClose={onClose}>
      <p className="text-sm text-stone-600 mb-3">
        Full charge {fmt(t.amount)}. Only your share counts toward your spending.
      </p>
      <div className="grid grid-cols-2 gap-3 mb-3">
        <label className="text-sm">
          <span className="block text-xs uppercase tracking-wide text-stone-500 mb-1">Your shares</span>
          <input
            type="number"
            min="1"
            value={shares}
            onChange={(e) => setShares(+e.target.value)}
            className="w-full border border-stone-300 rounded-lg px-3 py-2"
          />
        </label>
        <label className="text-sm">
          <span className="block text-xs uppercase tracking-wide text-stone-500 mb-1">Total people</span>
          <input
            type="number"
            min="1"
            value={total}
            onChange={(e) => setTotal(+e.target.value)}
            className="w-full border border-stone-300 rounded-lg px-3 py-2"
          />
        </label>
      </div>
      {valid && (
        <p className="font-mono text-sm mb-4">
          Counted: {fmt(t.amount * (shares / total))}{" "}
          <span className="text-stone-500">
            ({shares}/{total})
          </span>
        </p>
      )}
      <div className="flex gap-2">
        <button
          disabled={!valid}
          onClick={() => onSave(shares, total)}
          className="flex-1 bg-emerald-700 disabled:opacity-50 text-white rounded-lg py-2 text-sm font-medium"
        >
          Save split
        </button>
        <button onClick={() => onSave(1, 1)} className="px-4 border border-stone-300 rounded-lg text-sm">
          Not split
        </button>
      </div>
    </Modal>
  );
}

function ItemizeModal({ t, onClose, onItems, showToast }) {
  const [file, setFile] = useState(null);
  const [busy, setBusy] = useState(false);

  const run = async () => {
    if (!file) return;
    setBusy(true);
    try {
      const block = await fileBlock(file);
      const text = await callClaude([
        block,
        {
          type: "text",
          text:
            `This is a retail receipt for a ${fmt(t.amount)} charge at ${t.merchant}. Read the line items and assign each a category from: ` +
            CATEGORIES.filter((c) => !["Refunds", "Excluded", "Amazon", "Rent", "Savings & Investing Transfer", "Uncategorized"].includes(c)).join("; ") +
            '. Group adjacent items of the same category together to keep the list short. Include tax distributed proportionally. Respond ONLY with a JSON array, no prose, no fences: [["short description",amount,"category"],...]. Amounts must sum to approximately the charge total.',
        },
      ]);
      const rows = JSON.parse(stripFences(text));
      const items = rows
        .filter((r) => Array.isArray(r) && r.length >= 3 && typeof r[1] === "number")
        .map((r) => ({
          desc: String(r[0]),
          amount: r[1],
          category: CATEGORIES.includes(r[2]) ? r[2] : "Uncategorized",
        }));
      if (!items.length) throw new Error("No line items found on that receipt");
      const sum = items.reduce((s, i) => s + i.amount, 0);
      const drift = t.amount - sum;
      if (Math.abs(drift) > 0.02) items.push({ desc: "adjustment", amount: +drift.toFixed(2), category: items[0].category });
      onItems(items);
    } catch (e) {
      showToast(e.message, true);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Modal title={`Itemize: ${t.merchant}`} onClose={onClose}>
      <p className="text-sm text-stone-600 mb-3">
        Upload a photo or PDF of the receipt and the {fmt(t.amount)} charge gets split into real categories. Or
        skip — it stays filed under its own "{(itemizableLabel(t.merchant) || t.merchant) + " *"}" bucket until you
        itemize it.
      </p>
      <input
        type="file"
        accept="application/pdf,image/*"
        onChange={(e) => setFile(e.target.files[0])}
        className="w-full text-sm mb-4"
      />
      <div className="flex gap-2">
        <button
          onClick={run}
          disabled={!file || busy}
          className="flex-1 bg-emerald-700 disabled:opacity-50 text-white rounded-lg py-2 text-sm font-medium"
        >
          {busy ? "Reading receipt…" : "Itemize from receipt"}
        </button>
        <button onClick={onClose} className="px-4 border border-stone-300 rounded-lg text-sm">
          Skip for now
        </button>
      </div>
    </Modal>
  );
}

// ---------- Dashboard ----------
function DashboardTab({ data, setData, showToast }) {
  const live = data.transactions.filter((t) => !t.replaced);
  const months = useMemo(() => [...new Set(live.map((t) => monthKey(t.date)))].sort().reverse(), [data.transactions]);
  const [month, setMonth] = useState(months[0] || null);
  const [openCat, setOpenCat] = useState(null);
  const [itemizeFor, setItemizeFor] = useState(null);
  useEffect(() => {
    if (!month && months.length) setMonth(months[0]);
  }, [months]);

  if (!months.length)
    return (
      <Section title="Dashboard">
        <p className="text-sm text-stone-600">
          The ledger is empty. Upload your first statements and this becomes your monthly spending picture.
        </p>
      </Section>
    );

  const inMonth = live.filter((t) => monthKey(t.date) === (month || months[0]));
  const byCat = {};
  for (const t of inMonth) {
    const c = t.category || "Uncategorized";
    byCat[c] = byCat[c] || { total: 0, txns: [] };
    byCat[c].total += effective(t);
    byCat[c].txns.push(t);
  }
  const spendCats = Object.entries(byCat)
    .filter(([c]) => !NON_SPEND_CATEGORIES.includes(c))
    .sort((a, b) => b[1].total - a[1].total);
  const secondaryCats = Object.entries(byCat)
    .filter(([c]) => NON_SPEND_CATEGORIES.includes(c))
    .sort((a, b) => b[1].total - a[1].total);
  const totalSpend = spendCats.reduce((s, [, v]) => s + v.total, 0);
  const totalBudget = Object.entries(data.budgets).reduce((s, [c, b]) => (spendCats.some(([cat]) => cat === c) || true ? s + (b || 0) : s), 0);
  const refunds = byCat["Refunds"]?.total || 0;
  const maxCat = spendCats[0]?.[1].total || 1;
  const pendingItemization = inMonth.filter((t) => t.needsItemization).length;

  const setBudget = (cat, val) => {
    setData((d) => {
      const budgets = { ...d.budgets };
      if (val > 0) budgets[cat] = val;
      else delete budgets[cat];
      return { ...d, budgets };
    });
  };

  const latestPerCard = {};
  for (const t of live) {
    if (!latestPerCard[t.cardLabel] || t.date > latestPerCard[t.cardLabel]) latestPerCard[t.cardLabel] = t.date;
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-3">
        <select
          value={month || ""}
          onChange={(e) => setMonth(e.target.value)}
          className="border border-stone-300 rounded-lg px-3 py-2 bg-white text-sm"
        >
          {months.map((m) => (
            <option key={m} value={m}>
              {monthLabel(m)}
            </option>
          ))}
        </select>
        <div className="text-right">
          <div className="text-2xl font-semibold font-mono tracking-tight">{fmt(totalSpend)}</div>
          <div className="text-xs text-stone-500">
            spend{totalBudget > 0 && <> · budgeted {fmt(totalBudget)}</>}
            {refunds !== 0 && <> · refunds {fmt(refunds)}</>}
          </div>
        </div>
      </div>

      {pendingItemization > 0 && (
        <div className="bg-amber-50 border border-amber-200 text-amber-900 text-sm rounded-lg px-3 py-2">
          {pendingItemization} charge{pendingItemization > 1 ? "s" : ""} still waiting for receipt itemization —
          marked with *
        </div>
      )}

      <Section title="By category, against your budget">
        <div className="space-y-2">
          {spendCats.map(([cat, v]) => {
            const budget = data.budgets[cat];
            let pct = Math.max(2, (v.total / maxCat) * 100);
            let barColor = "bg-emerald-700";
            if (budget) {
              pct = Math.min(100, (v.total / budget) * 100);
              barColor = v.total > budget ? "bg-red-600" : v.total > budget * 0.8 ? "bg-amber-500" : "bg-emerald-700";
            }
            return (
              <div key={cat}>
                <button onClick={() => setOpenCat(openCat === cat ? null : cat)} className="w-full text-left py-1">
                  <div className="flex justify-between items-baseline text-sm">
                    <span className={cat.endsWith(" *") ? "text-amber-800" : ""}>{cat}</span>
                    <span className="font-mono">
                      {fmt(v.total)}
                      {budget ? ` / ${fmt(budget)}` : ""}
                    </span>
                  </div>
                  <div className="h-1.5 bg-stone-200 rounded-full mt-1">
                    <div className={`h-1.5 rounded-full ${barColor}`} style={{ width: `${pct}%` }} />
                  </div>
                </button>
                <div className="flex items-center gap-2 text-xs text-stone-500 pb-1.5">
                  <span>Monthly budget</span>
                  <input
                    type="number"
                    min="0"
                    value={budget || ""}
                    placeholder="none"
                    onChange={(e) => setBudget(cat, +e.target.value)}
                    className="w-20 border border-stone-300 rounded px-1.5 py-0.5"
                  />
                </div>
                {openCat === cat && (
                  <ul className="mt-1 mb-2 divide-y divide-stone-100 border border-stone-200 rounded-lg bg-white">
                    {v.txns
                      .sort((a, b) => (a.date < b.date ? 1 : -1))
                      .map((t) => (
                        <li key={t.id} className="px-3 py-2 text-sm flex justify-between gap-3 items-center">
                          <div className="min-w-0">
                            <div className="truncate">{t.merchant}</div>
                            <div className="text-xs font-mono text-stone-500">
                              {t.date} · {t.cardLabel}
                              {(t.totalPeople ?? 1) > 1 && ` · ${t.ourShares}/${t.totalPeople} split`}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 whitespace-nowrap">
                            {t.needsItemization && (
                              <button
                                onClick={() => setItemizeFor(t)}
                                className="text-xs border border-amber-300 text-amber-800 rounded px-2 py-0.5"
                              >
                                Itemize
                              </button>
                            )}
                            <span className="font-mono text-sm">{fmt(effective(t))}</span>
                          </div>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      {secondaryCats.length > 0 && (
        <Section title="Not counted in total">
          <p className="text-xs text-stone-500 mb-2">
            Refunds, card payments, and transfers to savings/brokerage accounts. Shown so nothing is silently
            hidden — check here if a transaction looks missing from the main breakdown.
          </p>
          <div className="space-y-1">
            {secondaryCats.map(([cat, v]) => (
              <div key={cat}>
                <button onClick={() => setOpenCat(openCat === cat ? null : cat)} className="w-full text-left py-1.5">
                  <div className="flex justify-between items-baseline text-sm text-stone-500">
                    <span>{cat}</span>
                    <span className="font-mono">{fmt(v.total)}</span>
                  </div>
                </button>
                {openCat === cat && (
                  <ul className="mt-1 mb-2 divide-y divide-stone-100 border border-stone-200 rounded-lg bg-white">
                    {v.txns
                      .sort((a, b) => (a.date < b.date ? 1 : -1))
                      .map((t) => (
                        <li key={t.id} className="px-3 py-2 text-sm flex justify-between gap-3 items-center">
                          <div className="min-w-0">
                            <div className="truncate">{t.merchant}</div>
                            <div className="text-xs font-mono text-stone-500">
                              {t.date} · {t.cardLabel}
                            </div>
                          </div>
                          <span className="font-mono text-sm">{fmt(effective(t))}</span>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section title="Data coverage">
        <ul className="text-sm divide-y divide-stone-200">
          {Object.entries(latestPerCard).map(([c, d]) => (
            <li key={c} className="py-1.5 flex justify-between">
              <span>{c}</span>
              <span className="font-mono text-stone-500">through {d}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-stone-500 mt-2">A month is complete once every card shows coverage past month-end.</p>
      </Section>

      {itemizeFor && (
        <ItemizeModal
          t={itemizeFor}
          onClose={() => setItemizeFor(null)}
          showToast={showToast}
          onItems={(items) => {
            setData((d) => ({
              ...d,
              transactions: [
                ...d.transactions.map((x) => (x.id === itemizeFor.id ? { ...x, replaced: true } : x)),
                ...items.map((it) => ({
                  id: uid(),
                  cardLabel: itemizeFor.cardLabel,
                  date: itemizeFor.date,
                  merchant: `${itemizeFor.merchant.trim()} · ${it.desc}`,
                  amount: it.amount,
                  category: it.category,
                  ourShares: itemizeFor.ourShares ?? 1,
                  totalPeople: itemizeFor.totalPeople ?? 1,
                  status: itemizeFor.status,
                  parentId: itemizeFor.id,
                  uploadId: itemizeFor.uploadId,
                })),
              ],
            }));
            setItemizeFor(null);
            showToast(`Split into ${items.length} line items`);
          }}
        />
      )}
    </div>
  );
}

// ---------- Goals ----------
function GoalsTab({ data, setData, showToast }) {
  const [form, setForm] = useState({ name: "", target: "", deadline: "" });

  const updateGoal = (id, patch) =>
    setData((d) => ({ ...d, goals: d.goals.map((g) => (g.id === id ? { ...g, ...patch } : g)) }));

  const removeGoal = (id) => setData((d) => ({ ...d, goals: d.goals.filter((g) => g.id !== id) }));

  const addGoal = () => {
    if (!form.name.trim() || !(+form.target > 0)) return showToast("Name and a target amount are required", true);
    setData((d) => ({
      ...d,
      goals: [...d.goals, { id: uid(), name: form.name.trim(), target: +form.target, current: 0, deadline: form.deadline.trim() }],
    }));
    setForm({ name: "", target: "", deadline: "" });
  };

  return (
    <div className="space-y-4">
      <Section title="Savings & investing goals">
        <p className="text-sm text-stone-600 mb-4">
          Not pulled from transactions automatically — update "saved so far" yourself whenever you check an
          account. Seeded from what you've told me before: emergency fund, parents, wedding, and your brokerage
          target. Edit the numbers, deadlines, or add your own.
        </p>
        <div className="space-y-4">
          {data.goals.map((g) => {
            const pct = g.target > 0 ? Math.min(100, (g.current / g.target) * 100) : 0;
            const barColor = pct >= 100 ? "bg-emerald-700" : pct >= 60 ? "bg-emerald-600" : "bg-amber-500";
            return (
              <div key={g.id} className="border border-stone-200 rounded-lg p-3">
                <div className="flex justify-between items-baseline gap-2">
                  <input
                    value={g.name}
                    onChange={(e) => updateGoal(g.id, { name: e.target.value })}
                    className="font-medium text-sm border-b border-transparent hover:border-stone-300 focus:border-stone-400 outline-none bg-transparent flex-1"
                  />
                  <button onClick={() => removeGoal(g.id)} className="text-xs text-red-700 shrink-0">
                    remove
                  </button>
                </div>
                <div className="text-xs text-stone-500 font-mono mt-0.5">
                  {fmt(g.current)} of {fmt(g.target)}
                  {g.deadline && ` · ${g.deadline}`}
                  {pct >= 100 ? " · reached 🎉" : ` · ${pct.toFixed(0)}%`}
                </div>
                <div className="h-2 bg-stone-200 rounded-full mt-2">
                  <div className={`h-2 rounded-full ${barColor}`} style={{ width: `${Math.max(2, pct)}%` }} />
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <label className="text-xs text-stone-500">Saved so far</label>
                  <input
                    type="number"
                    value={g.current}
                    onChange={(e) => updateGoal(g.id, { current: +e.target.value || 0 })}
                    className="w-28 border border-stone-300 rounded-lg px-2 py-1 text-sm"
                  />
                  <label className="text-xs text-stone-500 ml-2">Target</label>
                  <input
                    type="number"
                    value={g.target}
                    onChange={(e) => updateGoal(g.id, { target: +e.target.value || 0 })}
                    className="w-28 border border-stone-300 rounded-lg px-2 py-1 text-sm"
                  />
                  <label className="text-xs text-stone-500 ml-2">Deadline</label>
                  <input
                    value={g.deadline}
                    onChange={(e) => updateGoal(g.id, { deadline: e.target.value })}
                    placeholder="optional"
                    className="w-32 border border-stone-300 rounded-lg px-2 py-1 text-sm"
                  />
                </div>
              </div>
            );
          })}
          {!data.goals.length && <p className="text-sm text-stone-500">No goals yet — add one below.</p>}
        </div>
      </Section>
      <Section title="Add a goal">
        <div className="flex flex-wrap gap-2">
          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="flex-1 min-w-32 border border-stone-300 rounded-lg px-3 py-2 text-sm"
          />
          <input
            placeholder="Target $"
            type="number"
            value={form.target}
            onChange={(e) => setForm({ ...form, target: e.target.value })}
            className="w-28 border border-stone-300 rounded-lg px-3 py-2 text-sm"
          />
          <input
            placeholder="Deadline (optional)"
            value={form.deadline}
            onChange={(e) => setForm({ ...form, deadline: e.target.value })}
            className="w-40 border border-stone-300 rounded-lg px-3 py-2 text-sm"
          />
          <Btn onClick={addGoal} primary>
            Add
          </Btn>
        </div>
      </Section>
    </div>
  );
}

// ---------- Settings ----------
function SettingsTab({ data, setData, showToast }) {
  const [newCard, setNewCard] = useState("");
  const [rp, setRp] = useState("");
  const [rc, setRc] = useState(CATEGORIES[0]);
  const [confirmClear, setConfirmClear] = useState(false);

  return (
    <div className="space-y-5">
      <Section title="Cards">
        <ul className="divide-y divide-stone-200 text-sm mb-3">
          {data.cards.map((c) => (
            <li key={c} className="py-1.5 flex justify-between items-center">
              {c}
              <button
                onClick={() => setData((d) => ({ ...d, cards: d.cards.filter((x) => x !== c) }))}
                className="text-xs text-red-700"
              >
                remove
              </button>
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <input
            value={newCard}
            onChange={(e) => setNewCard(e.target.value)}
            placeholder="e.g. Chase Sapphire"
            className="flex-1 border border-stone-300 rounded-lg px-3 py-2 text-sm"
          />
          <Btn
            onClick={() => {
              if (newCard.trim()) {
                setData((d) => ({ ...d, cards: [...d.cards, newCard.trim()] }));
                setNewCard("");
              }
            }}
            primary
          >
            Add
          </Btn>
        </div>
      </Section>

      <Section title={`Merchant rules (${data.rules.length})`}>
        <p className="text-xs text-stone-500 mb-2">
          If a merchant string contains the pattern, it gets the category automatically. Rules also grow from the
          +rule button in Review. Order matters when patterns overlap (e.g. "UBER EATS" must come before "UBER") —
          newer rules are checked last, so add specific overrides carefully.
        </p>
        <div className="max-h-64 overflow-y-auto divide-y divide-stone-200 text-sm mb-3">
          {data.rules.map((r, i) => (
            <div key={i} className="py-1.5 flex justify-between items-center gap-2">
              <span className="font-mono text-xs truncate">{r.pattern}</span>
              <span className="text-xs text-stone-500 whitespace-nowrap">{r.category}</span>
              <button
                onClick={() => setData((d) => ({ ...d, rules: d.rules.filter((_, j) => j !== i) }))}
                className="text-xs text-red-700"
              >
                ×
              </button>
            </div>
          ))}
        </div>
        <div className="flex gap-2 flex-wrap">
          <input
            value={rp}
            onChange={(e) => setRp(e.target.value)}
            placeholder="pattern e.g. NAMASTE PLAZA"
            className="flex-1 min-w-40 border border-stone-300 rounded-lg px-3 py-2 text-sm"
          />
          <select value={rc} onChange={(e) => setRc(e.target.value)} className="border border-stone-300 rounded-lg px-2 py-2 text-sm bg-white">
            {CATEGORIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <Btn
            onClick={() => {
              if (rp.trim()) {
                setData((d) => ({ ...d, rules: [...d.rules, { pattern: rp.trim().toUpperCase(), category: rc }] }));
                setRp("");
              }
            }}
            primary
          >
            Add
          </Btn>
        </div>
      </Section>

      <Section title="Data">
        <p className="text-xs text-stone-500 mb-3">
          Everything — transactions, rules, budgets, goals — is stored in this artifact's storage, scoped to this
          Claude.ai conversation. Paste this file into a new conversation and you get a fresh, empty tracker; this
          one's data doesn't follow it. Download a backup regularly.
        </p>
        <div className="flex gap-2">
          <Btn
            onClick={() => {
              const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
              const a = document.createElement("a");
              a.href = URL.createObjectURL(blob);
              a.download = "budget-tracker-backup.json";
              a.click();
            }}
          >
            Download backup
          </Btn>
          <Btn onClick={() => setConfirmClear(true)} danger>
            Clear everything
          </Btn>
        </div>
      </Section>

      {confirmClear && (
        <Modal title="Clear everything?" onClose={() => setConfirmClear(false)}>
          <p className="text-sm text-stone-600 mb-4">
            This erases every transaction, upload record, card, rule, budget, and goal — back to the starter
            defaults. There's no undo. Download a backup first if you want one.
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setData({
                  transactions: [],
                  rules: DEFAULT_RULES,
                  cards: DEFAULT_CARDS,
                  uploads: [],
                  budgets: { ...DEFAULT_BUDGETS },
                  goals: defaultGoals(),
                });
                setConfirmClear(false);
                showToast("Tracker reset to defaults");
              }}
              className="flex-1 bg-red-700 hover:bg-red-800 text-white rounded-lg py-2 text-sm font-medium"
            >
              Yes, clear everything
            </button>
            <button onClick={() => setConfirmClear(false)} className="px-4 border border-stone-300 rounded-lg text-sm">
              Cancel
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ---------- UI bits ----------
function Section({ title, children }) {
  return (
    <section className="bg-white rounded-xl border border-stone-200 p-4">
      <h2 className="text-xs uppercase tracking-wider text-stone-500 mb-3">{title}</h2>
      {children}
    </section>
  );
}

function Btn({ children, onClick, primary, danger, title }) {
  return (
    <button
      onClick={onClick}
      title={title}
      className={
        "text-sm rounded-lg px-3 py-1.5 border " +
        (primary ? "bg-emerald-700 border-emerald-700 text-white" : danger ? "border-red-300 text-red-700" : "border-stone-300 text-slate-800 bg-white")
      }
    >
      {children}
    </button>
  );
}

function Modal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 bg-slate-900/50 flex items-end sm:items-center justify-center z-50 p-3" onClick={onClose}>
      <div className="bg-white rounded-xl w-full max-w-md p-4" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-medium text-sm truncate pr-3">{title}</h3>
          <button onClick={onClose} className="text-stone-400 text-lg leading-none">
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
