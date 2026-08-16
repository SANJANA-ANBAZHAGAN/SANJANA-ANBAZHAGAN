# Budget Tracker

A personal spending tracker built to do the two things you're paying $100/year for elsewhere:
categorized spending against a budget, and statement-based import instead of manual entry —
plus the split-expense idea from a friend's Claude-artifact ledger, minus the fragile
one-conversation storage.

It's a static site: plain HTML/CSS/JS, no build step, no account. All your data — cards,
transactions, rules, budgets, and your Anthropic API key — lives in your browser's
`localStorage` on whatever device you open it on. The one place it talks to the network is a
direct call to Anthropic's API when you upload a statement or receipt, using your own API key.

## Why it needs an API key

Reading a PDF or screenshot statement and pulling out clean transaction rows isn't something a
plain web page can do on its own — that's the part your friend's tool leaned on Claude for,
running inside a Claude.ai conversation. This app does the same thing, but as a standalone site
instead of a Claude.ai artifact, which means it needs to call the Anthropic API directly rather
than borrowing conversation credit. That means:

- You need your own key from [console.anthropic.com](https://console.anthropic.com) (API keys
  live under Settings → API Keys). Anthropic API usage is billed per token — not free, but
  cheap: parsing a statement with the default model (Haiku) typically costs a fraction of a
  cent to a few cents depending on length.
- The key is entered once in **Settings** and stored only in this browser's `localStorage` —
  same trust model as anything else in this app. It is never written to any file in this repo
  and never sent anywhere except straight to `api.anthropic.com` over HTTPS.
- Everything else (categorization rules, budgets, the dashboard, marking transactions
  reviewed) works with zero API calls and zero cost — the key is only used on Upload and on
  the receipt-itemize action.

If you'd rather not use an API key at all, you can still get most of the value: add your
transactions manually isn't built in yet, but every rule-based category, budget, and the
dashboard work the same regardless of how a transaction got in.

## Running it

No install needed. Either:

- **Open directly**: double-click `index.html`.
- **Or serve it** (avoids occasional browser `file://` quirks with the file upload flow):
  ```
  cd budget-tracker
  python3 -m http.server 8000
  ```
  then visit `http://localhost:8000`.

### Deploying to GitHub Pages (so you can check it from your phone too)

1. Push this repo to GitHub (already done if you're reading this from the repo).
2. Repo Settings → Pages → Source: deploy from branch → select the branch and
   `/budget-tracker` as the folder.
3. It'll be live at `https://<username>.github.io/<repo>/`.

Note: **localStorage is per-browser, per-device**, same caveat as the health dashboard in this
repo. Hosting on GitHub Pages makes the app reachable from anywhere, but your data (and your
API key) still only live in whichever browser you set it up in. Use **Settings → Download
backup** regularly, and **Import backup** on another device/browser if you want your history to
follow you.

## How it works

1. **Cards & Rules** — name your cards/accounts, edit spending categories, and set up merchant
   rules (e.g. "chewy" → Pet Care) so recurring charges auto-categorize without a review each
   time. Comes pre-loaded with rules for common US merchants.
2. **Upload** — pick a card, upload a statement (PDF or screenshot). Claude reads it and
   extracts transactions; rule matches are applied automatically, everything else lands
   uncategorized. Re-uploading an overlapping statement is safe — matching transactions
   (same card, date, amount, and merchant) are skipped as duplicates.
3. **Review** — fix any wrong or missing categories, mark an expense as **split** (enter your
   share %; e.g. 50 for an even household split), or **itemize** a single charge by uploading a
   receipt photo — Claude breaks Costco/Target-type charges into per-category line items that
   replace the original transaction. Mark each done (or "mark all done") once it looks right.
4. **Dashboard** — monthly spending by category (chart + list), set a monthly budget per
   category right on the page and watch the bar go green → amber → red, and drill into any
   category's transactions for the month.
5. **Settings** — your API key and model choice, default split %, JSON backup/restore, and a
   full reset.

## Splitting shared expenses

Mark a transaction split and enter your share as a percentage. The dashboard and budgets always
use *your* share (the split-adjusted amount), not the full charge — so a $100 dinner split 50/50
counts as $50 against your spending, the same idea as your friend's household ledger but scoped
to your own share rather than a shared two-person view.

## Data & privacy

- Cards, transactions, rules, budgets, and your API key are stored in `localStorage` in your
  browser — never sent to any server run by this app, because there is no server.
- Uploaded statement/receipt files are sent directly from your browser to Anthropic's API (to
  be parsed) and nowhere else. If you're not comfortable with a statement passing through a
  third party, crop or redact account numbers before upload.
- Use **Settings → Download backup** to get a `.json` snapshot of everything (including your
  API key, so keep that file as trusted as the key itself), and **Import backup** to restore it.

## Known limits

- Long statements can miss lines during parsing — if the dashboard total looks off versus the
  real statement, upload it in sections instead of one big file.
- Refunds landing in a later month than the original charge slightly distort both months.
- No automatic bank linking — statements are uploaded manually, same as most free tools.
- No tracking of money owed between people — splits only reduce *your* share, they don't track
  what the other person owes you.

## File structure

```
budget-tracker/
├── index.html                 # page shell + tab structure
├── css/styles.css             # all styling (light/dark aware)
└── js/
    ├── store.js                # localStorage data layer: cards, transactions, rules, budgets, settings
    ├── claudeParse.js           # direct browser calls to the Anthropic API for statement/receipt parsing
    ├── app.js                   # UI rendering + interactions
    └── vendor/chart.umd.js      # Chart.js, vendored locally (no external CDN dependency)
```

Not a bank; not financial advice. It's a personal spending tracker with no server, no sync
beyond manual backups, and no recovery path if you lose the browser data and never downloaded a
backup — see **Data & privacy** above.
