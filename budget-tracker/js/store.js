// localStorage-backed data layer. Everything — including your Anthropic API key — lives only
// in this browser on this device. Nothing is sent anywhere except direct calls to Anthropic's
// API (to parse a statement/receipt you upload). Use Settings > Export Backup regularly.
(function () {
  const KEY = "budget_tracker_data_v1";

  const DEFAULT_CATEGORIES = [
    "Groceries",
    "Dining & Takeout",
    "Transport",
    "Shopping",
    "Bills & Utilities",
    "Subscriptions",
    "Rent",
    "Travel",
    "Health & Fitness",
    "Entertainment",
    "Personal Care",
    "Income",
    "Transfer / Payment",
    "Other",
  ];

  // Starter merchant rules: substring match (case-insensitive) against the transaction description.
  // Edit/add your own in Settings — these just save you re-categorizing the obvious ones every time.
  const DEFAULT_RULES = [
    { pattern: "netflix", category: "Subscriptions" },
    { pattern: "spotify", category: "Subscriptions" },
    { pattern: "hulu", category: "Subscriptions" },
    { pattern: "disney+", category: "Subscriptions" },
    { pattern: "amazon prime", category: "Subscriptions" },
    { pattern: "icloud", category: "Subscriptions" },
    { pattern: "amazon", category: "Shopping" },
    { pattern: "target", category: "Shopping" },
    { pattern: "whole foods", category: "Groceries" },
    { pattern: "trader joe", category: "Groceries" },
    { pattern: "safeway", category: "Groceries" },
    { pattern: "costco", category: "Groceries" },
    { pattern: "sprouts", category: "Groceries" },
    { pattern: "uber eats", category: "Dining & Takeout" },
    { pattern: "doordash", category: "Dining & Takeout" },
    { pattern: "grubhub", category: "Dining & Takeout" },
    { pattern: "starbucks", category: "Dining & Takeout" },
    { pattern: "uber", category: "Transport" },
    { pattern: "lyft", category: "Transport" },
    { pattern: "chevron", category: "Transport" },
    { pattern: "shell oil", category: "Transport" },
    { pattern: "bart", category: "Transport" },
    { pattern: "clipper", category: "Transport" },
    { pattern: "pg&e", category: "Bills & Utilities" },
    { pattern: "pge", category: "Bills & Utilities" },
    { pattern: "comcast", category: "Bills & Utilities" },
    { pattern: "xfinity", category: "Bills & Utilities" },
    { pattern: "at&t", category: "Bills & Utilities" },
    { pattern: "verizon", category: "Bills & Utilities" },
    { pattern: "t-mobile", category: "Bills & Utilities" },
    { pattern: "planet fitness", category: "Health & Fitness" },
    { pattern: "equinox", category: "Health & Fitness" },
    { pattern: "cvs", category: "Health & Fitness" },
    { pattern: "walgreens", category: "Health & Fitness" },
    { pattern: "payroll", category: "Income" },
    { pattern: "direct dep", category: "Income" },
    { pattern: "venmo", category: "Transfer / Payment" },
    { pattern: "zelle", category: "Transfer / Payment" },
    { pattern: "autopay", category: "Transfer / Payment" },
    { pattern: "credit card payment", category: "Transfer / Payment" },
  ];

  function defaultData() {
    return {
      version: 1,
      cards: [], // {id, name}
      categories: [...DEFAULT_CATEGORIES],
      rules: DEFAULT_RULES.map((r, i) => ({ id: `rule_default_${i}`, ...r })),
      budgets: {}, // categoryName -> monthly $ target
      transactions: [], // see addTransactions() for shape
      settings: {
        apiKey: "",
        model: "claude-haiku-4-5",
        splitDefaultPct: 50, // your default share % when marking something split
      },
      lastBackupAt: null,
    };
  }

  function uid(prefix) {
    return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
  }

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) {
        const fresh = defaultData();
        save(fresh);
        return fresh;
      }
      const parsed = JSON.parse(raw);
      const merged = Object.assign(defaultData(), parsed);
      merged.settings = Object.assign(defaultData().settings, parsed.settings || {});
      return merged;
    } catch (e) {
      console.error("Failed to load budget store, resetting.", e);
      const fresh = defaultData();
      save(fresh);
      return fresh;
    }
  }

  function save(state) {
    localStorage.setItem(KEY, JSON.stringify(state));
  }

  // Dedup key for an imported transaction: same card, date, amount and first bit of the
  // merchant text is treated as "already imported" so re-uploading a statement (or uploading
  // overlapping date ranges) never double-counts.
  function txFingerprint(t) {
    return [t.cardId, t.date, Number(t.amount).toFixed(2), String(t.merchant || "").toLowerCase().slice(0, 24)].join("|");
  }

  const Store = {
    state: load(),
    uid,

    persist() {
      save(this.state);
    },

    // ---------- cards ----------
    addCard(name) {
      const card = { id: uid("card"), name: name.trim() };
      this.state.cards.push(card);
      this.persist();
      return card;
    },
    renameCard(id, name) {
      const c = this.state.cards.find((c) => c.id === id);
      if (c) c.name = name.trim();
      this.persist();
    },
    removeCard(id) {
      this.state.cards = this.state.cards.filter((c) => c.id !== id);
      this.persist();
    },

    // ---------- categories ----------
    addCategory(name) {
      name = name.trim();
      if (name && !this.state.categories.includes(name)) {
        this.state.categories.push(name);
        this.persist();
      }
    },
    removeCategory(name) {
      this.state.categories = this.state.categories.filter((c) => c !== name);
      delete this.state.budgets[name];
      this.persist();
    },

    // ---------- budgets ----------
    setBudget(category, amount) {
      const n = Number(amount);
      if (n > 0) this.state.budgets[category] = n;
      else delete this.state.budgets[category];
      this.persist();
    },

    // ---------- merchant rules ----------
    addRule(pattern, category) {
      const rule = { id: uid("rule"), pattern: pattern.trim().toLowerCase(), category };
      this.state.rules.unshift(rule); // newest/most-specific rules win first
      this.persist();
      return rule;
    },
    removeRule(id) {
      this.state.rules = this.state.rules.filter((r) => r.id !== id);
      this.persist();
    },
    categorize(merchantText) {
      const text = String(merchantText || "").toLowerCase();
      const hit = this.state.rules.find((r) => text.includes(r.pattern));
      return hit ? hit.category : null;
    },

    // ---------- transactions ----------
    // candidates: [{date, merchant, amount, cardId}] amount is a plain number, positive = spend, negative = refund/credit
    // Returns { added: [...], duplicates: n }
    addTransactions(candidates, opts = {}) {
      const existing = new Set(this.state.transactions.map(txFingerprint));
      const added = [];
      let duplicates = 0;
      candidates.forEach((c) => {
        const t = {
          id: uid("tx"),
          date: c.date,
          merchant: c.merchant,
          amount: Number(c.amount),
          cardId: c.cardId,
          category: c.category || this.categorize(c.merchant) || null,
          categorySource: c.category ? "ai" : this.categorize(c.merchant) ? "rule" : null,
          split: { enabled: false, myPct: this.state.settings.splitDefaultPct },
          reviewed: false,
          importBatchId: opts.batchId || null,
          notes: "",
        };
        const fp = txFingerprint(t);
        if (existing.has(fp)) {
          duplicates++;
          return;
        }
        existing.add(fp);
        this.state.transactions.push(t);
        added.push(t);
      });
      this.state.transactions.sort((a, b) => b.date.localeCompare(a.date));
      this.persist();
      return { added, duplicates };
    },
    updateTransaction(id, patch) {
      const t = this.state.transactions.find((t) => t.id === id);
      if (!t) return;
      Object.assign(t, patch);
      this.persist();
    },
    deleteTransaction(id) {
      this.state.transactions = this.state.transactions.filter((t) => t.id !== id);
      this.persist();
    },
    unreviewedTransactions() {
      return this.state.transactions.filter((t) => !t.reviewed);
    },
    markReviewed(id) {
      this.updateTransaction(id, { reviewed: true });
    },

    // "your share" of a transaction after applying a split
    effectiveAmount(t) {
      if (t.split && t.split.enabled) {
        return (Number(t.amount) * Number(t.split.myPct)) / 100;
      }
      return Number(t.amount);
    },

    transactionsForMonth(monthStr) {
      // monthStr: "YYYY-MM"
      return this.state.transactions.filter((t) => t.date.startsWith(monthStr));
    },

    // ---------- settings ----------
    setSettings(patch) {
      Object.assign(this.state.settings, patch);
      this.persist();
    },

    // ---------- backup ----------
    exportBackup() {
      return JSON.stringify(this.state, null, 2);
    },
    markBackedUp() {
      this.state.lastBackupAt = new Date().toISOString();
      this.persist();
    },
    importBackup(jsonStr) {
      const parsed = JSON.parse(jsonStr);
      this.state = Object.assign(defaultData(), parsed);
      this.state.settings = Object.assign(defaultData().settings, parsed.settings || {});
      this.persist();
    },
    resetAll() {
      this.state = defaultData();
      this.persist();
    },
  };

  window.Store = Store;
})();
