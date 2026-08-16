# Personal Budget Tracker

A budgeting app that reads credit card and bank statements (PDF or screenshot), auto-categorizes
transactions, handles split expenses and receipt itemization, tracks savings goals, and shows
monthly spending against a budget per category — the Copilot subscription, replaced.

Runs inside a Claude.ai artifact — no hosting, no accounts, no code to deploy, and no API key.
This is the zero-cost sibling of [`../budget-tracker`](../budget-tracker) in this repo: that one
is a real hosted webpage you can reach from any device but needs your own metered Anthropic API
key; this one costs nothing beyond your normal Claude.ai usage, but lives only inside the one
conversation you set it up in. See **Where your data lives** below before you rely on either.

## Getting it running

1. Open a new conversation on Claude.ai.
2. Attach `AI_README.md` to the conversation and paste the contents of
   `budget-tracker-shareable.jsx` in a message. Claude will render it as an artifact.
3. In the artifact, open Settings and rename the placeholder cards to your actual cards.
4. Start uploading statements from the Upload tab.

## Where your data lives

Storage is scoped to the artifact, which in practice means the one Claude conversation you set
it up in — not your account, not the code, that conversation. Consequences worth knowing before
you put months of data in:

- Paste the same file into a new conversation and you get a fresh, empty tracker. Your old data
  isn't corrupted, it just isn't there.
- If that conversation is deleted or you lose track of which one it was, the data goes with it.
  No recovery, no support to appeal to.
- There's no "open it from another device and it's there" — it's this one conversation only.

So: **Settings → Download backup**, regularly. That JSON file is the only copy of your data that
outlives the conversation.

## Why this needs no API key (and the hosted version does)

Claude.ai artifacts get a built-in, free bridge to Claude — the code calls
`fetch("https://api.anthropic.com/v1/messages", ...)` with no API key attached, and the artifact
sandbox authenticates that call using your own Claude.ai session instead of a metered key. That's
what makes statement parsing free here: it's billed as ordinary Claude.ai usage, not a
per-statement dollar charge. A plain webpage (like `../budget-tracker`) has no Claude.ai session
to borrow from, so it has to call the API directly with your own paid key instead. Same feature,
two different costs, because they're two different hosting models.

## How it works

1. **Upload** — pick a card, upload a statement (PDF or screenshot). Claude reads every
   transaction; built-in rules categorize the obvious ones, AI guesses the rest.
2. **Review** — fix any wrong categories, mark shared expenses as **split** (your share vs.
   total people), and **itemize** Costco/Target/Walmart/Sam's Club-type charges from a receipt
   photo so a single warehouse-club charge becomes real per-category line items.
3. **Dashboard** — monthly spending by category with an inline, editable budget per category
   (progress bar goes green → amber → red as you approach/exceed it), a drill-down into any
   category's transactions, and a "not counted in total" section for refunds, card payments, and
   transfers to savings/brokerage accounts so nothing silently disappears from the picture.
4. **Goals** — a savings/investing goals tracker, seeded with what's typically top of mind at
   this stage: an emergency fund, a family-support target with a deadline, a wedding fund, and a
   brokerage portfolio target. Update "saved so far" yourself whenever you check an account —
   it's not wired to your transactions automatically.
5. **Settings** — cards, merchant rules, JSON backup/restore, and a full reset.

## Customize before first use

- **Cards** (Settings): defaults are placeholders — replace with your real card names.
- **Categories**: edit the `CATEGORIES` array near the top of `budget-tracker-shareable.jsx` if
  the defaults don't match how you think about spending. They're set up for Bay Area / South
  Asian grocery habits (a separate "Groceries – Indian" line, BART/Clipper/VTA transit, common
  Indian grocery chains in the default merchant rules) — trim or rename anything that doesn't
  fit.
- **Budgets**: the starter numbers in `DEFAULT_BUDGETS` are a first guess sized to a take-home
  around $5.3k/month with rent near $1.6k — not a verdict on your actual spending. Adjust every
  line right on the Dashboard once you've seen a real month or two of data.
- **Goals**: seeded with an emergency fund, family support, wedding, and investing-portfolio
  target based on numbers you'd mentioned before. Edit amounts, deadlines, or add your own goal
  in the Goals tab — nothing here is fetched automatically, it's just a place to see progress at
  a glance.
- **Merchant rules**: add your own via the `+rule` button in Review, or edit `DEFAULT_RULES`
  directly. Order matters when patterns overlap (e.g. "UBER EATS" must be listed before the
  plain "UBER" rule, or Uber Eats charges get misfiled as a ride) — the file's rules are already
  ordered correctly, just keep that in mind if you add more.

## Sharing

The file has no transactions, real card names, or keys in it — handing someone the `.jsx` file
or this repo only hands over code. If you want someone else to have their own copy, point them
at this repo; they'll get an empty tracker in their own conversation. If you specifically want
someone to see *your* data (a partner splitting expenses with you, for instance), you'd have to
share the actual Claude conversation this lives in — which gives them full read/write access to
everything in it. Only do that with someone you'd trust with your full spending history.

## Privacy

- Statement and receipt files are read by Claude as part of this conversation, same as any file
  you'd otherwise attach to a chat. If you're not comfortable with a statement passing through
  that, crop or redact account numbers before upload.
- Nothing here talks to any server other than Anthropic's, and only through the artifact's own
  built-in bridge — there's no separate backend, and no API key to protect.

## Known limits

- Long statements can miss lines during parsing — if a month's total looks off, upload the
  statement in sections instead of one big file.
- Refunds landing in a later month than the original charge slightly distort both months.
- No automatic bank linking — statements are uploaded manually.
- Splits reduce only *your* share of a charge; there's no tracking of what someone else owes
  you back.
- Goals are manual — nothing here reads your actual bank/brokerage balances.

Not a bank; not financial advice. A personal spending tracker with no server, no sync beyond
manual backups, and no recovery path if the conversation is lost and you never downloaded one.
