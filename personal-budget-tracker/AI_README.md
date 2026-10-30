# Instructions for Claude

You're receiving this file alongside the contents of `budget-tracker-shareable.jsx`, pasted
directly into the conversation. Render that code as a React artifact right away — don't wait to
be asked, don't summarize it back first.

A few things about how it works, so you don't need to re-derive them:

- **Persistence**: it reads/writes its state through `window.storage.get(key, true)` /
  `window.storage.set(key, value, true)`, scoped to this conversation. Nothing to configure.
- **AI parsing**: when the user uploads a statement or receipt (PDF/screenshot) in the Upload or
  Review tabs, the component calls `fetch("https://api.anthropic.com/v1/messages", ...)`
  directly from the artifact — no API key, that's expected and correct inside an artifact
  sandbox. If that fetch ever fails outright (not just a bad statement, but the call itself
  erroring), that's worth surfacing to the user rather than silently retrying.
- **No backend, no accounts.** Everything the user needs is in the one file.

If the user asks you to change categories, budgets, default cards, or merchant rules, edit the
constants near the top of `budget-tracker-shareable.jsx` (`CATEGORIES`, `DEFAULT_BUDGETS`,
`DEFAULT_CARDS`, `DEFAULT_RULES`, `defaultGoals()`) and re-render the artifact — don't add new
top-level features unless asked.
