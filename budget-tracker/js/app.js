(function () {
  const charts = {};
  let AppState = {
    tab: "dashboard",
    dashboardMonth: currentMonthStr(),
    dashboardCategoryFilter: "all",
    uploadCardId: null,
    itemizingTxId: null, // transaction currently mid-receipt-itemization
  };

  // ---------- utilities ----------
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function toast(msg, isError) {
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.classList.toggle("error", !!isError);
    t.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => t.classList.remove("show"), isError ? 4200 : 2600);
  }
  function fmtMoney(n) {
    n = Number(n) || 0;
    const neg = n < 0;
    const s = Math.abs(n).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return `${neg ? "-" : ""}$${s}`;
  }
  function currentMonthStr() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
  }
  function shiftMonth(monthStr, delta) {
    const [y, m] = monthStr.split("-").map(Number);
    const d = new Date(y, m - 1 + delta, 1);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
  }
  function fmtMonthLabel(monthStr) {
    const [y, m] = monthStr.split("-").map(Number);
    return new Date(y, m - 1, 1).toLocaleDateString(undefined, { month: "long", year: "numeric" });
  }
  function cardName(id) {
    const c = Store.state.cards.find((c) => c.id === id);
    return c ? c.name : "Unknown card";
  }
  function categoryOptionsHtml(selected) {
    const cats = Store.state.categories;
    return (
      `<option value="" ${!selected ? "selected" : ""}>— uncategorized —</option>` +
      cats.map((c) => `<option value="${escapeHtml(c)}" ${c === selected ? "selected" : ""}>${escapeHtml(c)}</option>`).join("")
    );
  }
  function cardOptionsHtml(selected) {
    return Store.state.cards
      .map((c) => `<option value="${c.id}" ${c.id === selected ? "selected" : ""}>${escapeHtml(c.name)}</option>`)
      .join("");
  }
  function apiKeySet() {
    return !!Store.state.settings.apiKey;
  }
  function requireApiKey() {
    if (!apiKeySet()) {
      toast("Add your Anthropic API key in Settings first.", true);
      return false;
    }
    return true;
  }

  function updateReviewBadges() {
    const n = Store.unreviewedTransactions().length;
    document.getElementById("review-badge-tab").innerHTML = n ? `<span class="tab-badge">${n}</span>` : "";
    document.getElementById("review-badge-bn").style.display = n ? "block" : "none";
  }

  // ---------- Dashboard ----------
  function categoryTotalsForMonth(monthStr) {
    const txs = Store.transactionsForMonth(monthStr);
    const totals = {};
    let spend = 0;
    let income = 0;
    txs.forEach((t) => {
      const amt = Store.effectiveAmount(t);
      if (t.category === "Income") {
        income += -amt;
      } else {
        const cat = t.category || "Uncategorized";
        totals[cat] = (totals[cat] || 0) + amt;
        spend += amt;
      }
    });
    return { totals, spend, income };
  }

  function renderDashboard() {
    const panel = document.getElementById("tab-dashboard");
    const month = AppState.dashboardMonth;
    const { totals, spend, income } = categoryTotalsForMonth(month);
    const net = income - spend;
    const budgets = Store.state.budgets;
    const categories = Store.state.categories.filter((c) => c !== "Income");

    const budgetRows = categories
      .map((cat) => {
        const spent = totals[cat] || 0;
        const budget = budgets[cat];
        let pct = 0,
          status = "good";
        if (budget) {
          pct = Math.min(100, (spent / budget) * 100);
          status = spent > budget ? "bad" : spent > budget * 0.8 ? "warn" : "good";
        }
        return `<div class="budget-row">
          <div class="budget-row__top">
            <span class="budget-row__cat">${escapeHtml(cat)}</span>
            <span class="budget-row__nums">${fmtMoney(spent)}${budget ? ` / ${fmtMoney(budget)}` : ""}</span>
          </div>
          ${budget ? `<div class="progress-bar"><div class="progress-bar__fill ${status}" style="width:${pct}%"></div></div>` : ""}
          <div class="budget-row__input">
            <label style="margin:0">Monthly budget</label>
            <input type="number" min="0" step="10" class="js-budget-input" data-cat="${escapeHtml(cat)}" value="${budget || ""}" placeholder="none set" />
          </div>
        </div>`;
      })
      .join("");

    const catFilterOptions =
      `<option value="all">All categories</option>` +
      categories.map((c) => `<option value="${escapeHtml(c)}" ${AppState.dashboardCategoryFilter === c ? "selected" : ""}>${escapeHtml(c)}</option>`).join("");

    const filteredTxs = Store.transactionsForMonth(month)
      .filter((t) => AppState.dashboardCategoryFilter === "all" || t.category === AppState.dashboardCategoryFilter)
      .sort((a, b) => b.date.localeCompare(a.date));

    const txRows = filteredTxs.length
      ? filteredTxs.map((t) => txRowHtml(t, { showReviewActions: false })).join("")
      : `<div class="empty-state"><div class="empty-state__icon">🧾</div>No transactions ${AppState.dashboardCategoryFilter === "all" ? "this month yet" : "in this category this month"}.</div>`;

    panel.innerHTML = `
      <div class="flex-between mb">
        <button class="btn secondary small" id="dash-prev">← Prev month</button>
        <h2 style="margin:0">${fmtMonthLabel(month)}</h2>
        <button class="btn secondary small" id="dash-next">Next month →</button>
      </div>

      <div class="grid grid-cards mb">
        <div class="card metric-card">
          <h3>Spent</h3>
          <div class="stat-value bad">${fmtMoney(spend)}</div>
        </div>
        <div class="card metric-card">
          <h3>Income</h3>
          <div class="stat-value good">${fmtMoney(income)}</div>
        </div>
        <div class="card metric-card">
          <h3>Net</h3>
          <div class="stat-value ${net >= 0 ? "good" : "bad"}">${fmtMoney(net)}</div>
        </div>
      </div>

      <div class="grid grid-2 mb">
        <div class="card">
          <h3>Spending by category</h3>
          <div class="chart-wrap"><canvas id="cat-chart"></canvas></div>
        </div>
        <div class="card">
          <h3>Budgets</h3>
          ${categories.length ? budgetRows : `<p class="muted">Add categories in Cards &amp; Rules to start budgeting.</p>`}
        </div>
      </div>

      <div class="section-title"><h2>Transactions</h2></div>
      <div class="card">
        <div class="field" style="max-width:260px">
          <select id="dash-cat-filter">${catFilterOptions}</select>
        </div>
        <div id="dash-tx-list">${txRows}</div>
      </div>
    `;

    panel.querySelector("#dash-prev").addEventListener("click", () => {
      AppState.dashboardMonth = shiftMonth(AppState.dashboardMonth, -1);
      renderDashboard();
    });
    panel.querySelector("#dash-next").addEventListener("click", () => {
      AppState.dashboardMonth = shiftMonth(AppState.dashboardMonth, 1);
      renderDashboard();
    });
    panel.querySelector("#dash-cat-filter").addEventListener("change", (e) => {
      AppState.dashboardCategoryFilter = e.target.value;
      renderDashboard();
    });
    panel.querySelectorAll(".js-budget-input").forEach((el) => {
      el.addEventListener("change", (e) => {
        Store.setBudget(e.target.dataset.cat, e.target.value);
        renderDashboard();
      });
    });
    bindTxRowEvents(panel, renderDashboard);

    drawCategoryChart(totals, budgets);
  }

  function drawCategoryChart(totals, budgets) {
    const ctx = document.getElementById("cat-chart");
    if (!ctx) return;
    const entries = Object.entries(totals)
      .filter(([, v]) => v > 0)
      .sort((a, b) => b[1] - a[1]);
    const labels = entries.map(([k]) => k);
    const values = entries.map(([, v]) => Math.round(v * 100) / 100);
    const colors = entries.map(([cat, v]) => {
      const b = budgets[cat];
      if (!b) return "#1f8a6f";
      return v > b ? "#cc4a4a" : v > b * 0.8 ? "#d98c3d" : "#2f9e6e";
    });
    if (charts.cat) charts.cat.destroy();
    if (!labels.length) return;
    charts.cat = new Chart(ctx, {
      type: "bar",
      data: { labels, datasets: [{ data: values, backgroundColor: colors, borderRadius: 6 }] },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { callbacks: { label: (ctx) => fmtMoney(ctx.parsed.x) } } },
        scales: { x: { ticks: { callback: (v) => fmtMoney(v) } } },
      },
    });
  }

  // ---------- shared: transaction row ----------
  function txRowHtml(t, opts = {}) {
    const showReviewActions = opts.showReviewActions !== false;
    const eff = Store.effectiveAmount(t);
    const isCredit = eff < 0;
    return `<div class="tx-row" data-tx="${t.id}">
      <div class="tx-row__main">
        <div class="tx-row__merchant">${escapeHtml(t.merchant)}</div>
        <div class="tx-row__meta">${t.date} · ${escapeHtml(cardName(t.cardId))}${t.split && t.split.enabled ? ` · <span class="split-badge">split ${t.split.myPct}%</span>` : ""}</div>
      </div>
      <div class="tx-row__cat">
        <select class="js-tx-cat" data-tx="${t.id}">${categoryOptionsHtml(t.category)}</select>
      </div>
      <div class="tx-row__amount ${isCredit ? "credit" : ""}">${fmtMoney(eff)}</div>
      ${
        showReviewActions
          ? `<div class="tx-row__actions">
              <button class="btn secondary small js-tx-split" data-tx="${t.id}" title="Split this expense">${t.split && t.split.enabled ? "Edit split" : "Split"}</button>
              <button class="btn secondary small js-tx-itemize" data-tx="${t.id}" title="Itemize with a receipt photo">Itemize</button>
              <button class="icon-btn js-tx-delete" data-tx="${t.id}" title="Delete">✕</button>
              <button class="btn small js-tx-done" data-tx="${t.id}">Done</button>
            </div>`
          : `<div class="tx-row__actions"><button class="icon-btn js-tx-delete" data-tx="${t.id}" title="Delete">✕</button></div>`
      }
    </div>`;
  }

  function bindTxRowEvents(panel, rerender) {
    panel.querySelectorAll(".js-tx-cat").forEach((el) => {
      el.addEventListener("change", (e) => {
        Store.updateTransaction(e.target.dataset.tx, { category: e.target.value || null, categorySource: "manual" });
        rerender();
      });
    });
    panel.querySelectorAll(".js-tx-delete").forEach((el) => {
      el.addEventListener("click", (e) => {
        if (confirm("Delete this transaction?")) {
          Store.deleteTransaction(e.target.dataset.tx);
          rerender();
          updateReviewBadges();
        }
      });
    });
    panel.querySelectorAll(".js-tx-done").forEach((el) => {
      el.addEventListener("click", (e) => {
        Store.markReviewed(e.target.dataset.tx);
        rerender();
        updateReviewBadges();
      });
    });
    panel.querySelectorAll(".js-tx-split").forEach((el) => {
      el.addEventListener("click", (e) => openSplitPrompt(e.target.dataset.tx, rerender));
    });
    panel.querySelectorAll(".js-tx-itemize").forEach((el) => {
      el.addEventListener("click", (e) => {
        AppState.itemizingTxId = e.target.dataset.tx;
        rerender();
      });
    });
  }

  function openSplitPrompt(txId, rerender) {
    const t = Store.state.transactions.find((t) => t.id === txId);
    if (!t) return;
    const current = t.split && t.split.enabled ? t.split.myPct : Store.state.settings.splitDefaultPct;
    const input = prompt(`What % of "${t.merchant}" (${fmtMoney(t.amount)}) is your share? Enter 100 to turn off the split.`, current);
    if (input === null) return;
    const pct = Math.max(0, Math.min(100, Number(input)));
    if (isNaN(pct)) return toast("Enter a number between 0 and 100", true);
    Store.updateTransaction(txId, { split: { enabled: pct < 100, myPct: pct } });
    rerender();
  }

  // ---------- Upload ----------
  function renderUpload() {
    const panel = document.getElementById("tab-upload");
    const cards = Store.state.cards;
    if (!cards.length) {
      panel.innerHTML = `<div class="card empty-state">
        <div class="empty-state__icon">🗂️</div>
        <p>Add a card first so uploads know which account they belong to.</p>
        <button class="btn" id="upload-go-cards">Go to Cards &amp; Rules</button>
      </div>`;
      panel.querySelector("#upload-go-cards").addEventListener("click", () => switchTab("cards"));
      return;
    }
    if (!AppState.uploadCardId || !cards.some((c) => c.id === AppState.uploadCardId)) {
      AppState.uploadCardId = cards[0].id;
    }
    panel.innerHTML = `
      ${!apiKeySet() ? `<div class="banner warn"><span class="banner__icon">🔑</span><span>No Anthropic API key set — statement parsing won't work until you add one in Settings.</span></div>` : ""}
      <div class="card">
        <h3>Upload a statement</h3>
        <div class="field">
          <label>Card</label>
          <select id="upload-card">${cardOptionsHtml(AppState.uploadCardId)}</select>
        </div>
        <div class="dropzone" id="dropzone">
          <div class="dropzone__icon">📄</div>
          <div>Click to choose, or drag a PDF / screenshot here</div>
          <div class="dropzone__hint">One statement at a time. Claude reads it and extracts transactions.</div>
        </div>
        <input type="file" id="upload-file" accept="application/pdf,image/*" style="display:none" />
        <div id="upload-status" class="mt"></div>
      </div>
      <p class="muted mt">Long statements sometimes miss lines — if the total looks off, split the statement into sections and upload each separately.</p>
    `;
    const cardSelect = panel.querySelector("#upload-card");
    cardSelect.addEventListener("change", (e) => (AppState.uploadCardId = e.target.value));
    const dz = panel.querySelector("#dropzone");
    const fileInput = panel.querySelector("#upload-file");
    dz.addEventListener("click", () => fileInput.click());
    dz.addEventListener("dragover", (e) => {
      e.preventDefault();
      dz.classList.add("dragover");
    });
    dz.addEventListener("dragleave", () => dz.classList.remove("dragover"));
    dz.addEventListener("drop", (e) => {
      e.preventDefault();
      dz.classList.remove("dragover");
      if (e.dataTransfer.files[0]) handleStatementFile(e.dataTransfer.files[0]);
    });
    fileInput.addEventListener("change", (e) => {
      if (e.target.files[0]) handleStatementFile(e.target.files[0]);
      fileInput.value = "";
    });
  }

  async function handleStatementFile(file) {
    if (!requireApiKey()) return;
    const status = document.getElementById("upload-status");
    status.innerHTML = `<p><span class="spinner"></span> Reading "${escapeHtml(file.name)}" with Claude — this can take up to a minute for a long statement…</p>`;
    try {
      const { apiKey, model } = Store.state.settings;
      const card = Store.state.cards.find((c) => c.id === AppState.uploadCardId);
      const rows = await ClaudeParse.parseStatement({
        apiKey,
        model,
        file,
        cardName: card.name,
        existingCategories: Store.state.categories,
      });
      const candidates = rows
        .filter((r) => r.date && r.merchant && r.amount != null)
        .map((r) => ({ date: r.date, merchant: r.merchant, amount: r.amount, cardId: card.id, category: r.category }));
      const { added, duplicates } = Store.addTransactions(candidates, { batchId: Store.uid("batch") });
      status.innerHTML = `<div class="banner good"><span class="banner__icon">✅</span><span>Imported ${added.length} transaction${added.length === 1 ? "" : "s"}${duplicates ? ` (${duplicates} duplicate${duplicates === 1 ? "" : "s"} skipped)` : ""}. Head to Review to categorize and confirm them.</span></div>`;
      updateReviewBadges();
      if (added.length) {
        toast(`${added.length} transactions ready to review`);
        setTimeout(() => switchTab("review"), 900);
      }
    } catch (err) {
      console.error(err);
      status.innerHTML = `<div class="banner bad"><span class="banner__icon">⚠️</span><span>${escapeHtml(err.message || "Something went wrong reading that file.")}</span></div>`;
    }
  }

  // ---------- Review ----------
  function renderReview() {
    const panel = document.getElementById("tab-review");
    const items = Store.unreviewedTransactions().sort((a, b) => b.date.localeCompare(a.date));
    if (!items.length) {
      panel.innerHTML = `<div class="card empty-state"><div class="empty-state__icon">🎉</div>All caught up — nothing waiting for review.</div>`;
      return;
    }
    const itemizing = AppState.itemizingTxId ? items.find((t) => t.id === AppState.itemizingTxId) : null;
    panel.innerHTML = `
      <div class="flex-between mb">
        <p class="muted">${items.length} transaction${items.length === 1 ? "" : "s"} waiting for review.</p>
        <button class="btn secondary small" id="review-mark-all">Mark all done</button>
      </div>
      ${itemizing ? itemizePanelHtml(itemizing) : ""}
      <div class="card"><div id="review-list">${items.map((t) => txRowHtml(t, { showReviewActions: true })).join("")}</div></div>
    `;
    panel.querySelector("#review-mark-all").addEventListener("click", () => {
      items.forEach((t) => Store.markReviewed(t.id));
      renderReview();
      updateReviewBadges();
    });
    bindTxRowEvents(panel, renderReview);
    if (itemizing) bindItemizeEvents(panel, itemizing);
  }

  function itemizePanelHtml(t) {
    return `<div class="card mb" id="itemize-panel">
      <div class="flex-between">
        <h3 style="margin:0">Itemize "${escapeHtml(t.merchant)}" — ${fmtMoney(t.amount)}</h3>
        <button class="icon-btn" id="itemize-cancel">✕</button>
      </div>
      <p class="muted">Upload a photo of the receipt and Claude will break this single charge into itemized categories.</p>
      <div class="dropzone" id="itemize-dropzone">
        <div class="dropzone__icon">🧾</div>
        <div>Click to choose a receipt photo</div>
      </div>
      <input type="file" id="itemize-file" accept="image/*" style="display:none" />
      <div id="itemize-status" class="mt"></div>
      <div id="itemize-results"></div>
    </div>`;
  }

  function bindItemizeEvents(panel, t) {
    panel.querySelector("#itemize-cancel").addEventListener("click", () => {
      AppState.itemizingTxId = null;
      renderReview();
    });
    const dz = panel.querySelector("#itemize-dropzone");
    const fileInput = panel.querySelector("#itemize-file");
    dz.addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", async (e) => {
      const file = e.target.files[0];
      fileInput.value = "";
      if (!file) return;
      if (!requireApiKey()) return;
      const status = panel.querySelector("#itemize-status");
      status.innerHTML = `<p><span class="spinner"></span> Reading receipt…</p>`;
      try {
        const { apiKey, model } = Store.state.settings;
        const items = await ClaudeParse.itemizeReceipt({
          apiKey,
          model,
          file,
          totalAmount: t.amount,
          existingCategories: Store.state.categories,
        });
        status.innerHTML = "";
        renderItemizeResults(panel, t, items);
      } catch (err) {
        console.error(err);
        status.innerHTML = `<div class="banner bad"><span class="banner__icon">⚠️</span><span>${escapeHtml(err.message)}</span></div>`;
      }
    });
  }

  function renderItemizeResults(panel, t, items) {
    const results = panel.querySelector("#itemize-results");
    results.innerHTML = `
      <div id="itemize-rows">
        ${items
          .map(
            (it, i) => `<div class="receipt-item-row" data-idx="${i}">
              <input type="text" class="js-item-name" value="${escapeHtml(it.name)}" />
              <input type="number" step="0.01" class="js-item-amount" value="${Number(it.amount).toFixed(2)}" />
              <select class="js-item-cat">${categoryOptionsHtml(it.category)}</select>
              <button class="icon-btn js-item-remove">✕</button>
            </div>`
          )
          .join("")}
      </div>
      <div class="flex-between mt">
        <span class="muted">Total: <span id="itemize-total"></span> (charge was ${fmtMoney(t.amount)})</span>
        <button class="btn small" id="itemize-save">Save as ${items.length} transactions</button>
      </div>
    `;
    const updateTotal = () => {
      const sum = [...results.querySelectorAll(".js-item-amount")].reduce((s, el) => s + (Number(el.value) || 0), 0);
      results.querySelector("#itemize-total").textContent = fmtMoney(sum);
    };
    updateTotal();
    results.querySelectorAll(".js-item-amount").forEach((el) => el.addEventListener("input", updateTotal));
    results.querySelectorAll(".js-item-remove").forEach((el) =>
      el.addEventListener("click", (e) => {
        e.target.closest(".receipt-item-row").remove();
        updateTotal();
      })
    );
    results.querySelector("#itemize-save").addEventListener("click", () => {
      const rows = [...results.querySelectorAll(".receipt-item-row")].map((row) => ({
        date: t.date,
        merchant: row.querySelector(".js-item-name").value.trim() || t.merchant,
        amount: Number(row.querySelector(".js-item-amount").value) || 0,
        cardId: t.cardId,
        category: row.querySelector(".js-item-cat").value || null,
      }));
      if (!rows.length) return toast("Add at least one item", true);
      Store.deleteTransaction(t.id);
      const { added } = Store.addTransactions(rows, { batchId: Store.uid("itemized") });
      added.forEach((a) => Store.markReviewed(a.id));
      AppState.itemizingTxId = null;
      toast(`Split into ${added.length} itemized transactions`);
      renderReview();
      updateReviewBadges();
    });
  }

  // ---------- Cards & Rules ----------
  function renderCards() {
    const panel = document.getElementById("tab-cards");
    const cards = Store.state.cards;
    const categories = Store.state.categories;
    const rules = Store.state.rules;
    panel.innerHTML = `
      <div class="grid grid-2 mb">
        <div class="card">
          <h3>Cards</h3>
          ${
            cards.length
              ? cards.map((c) => `<div class="flex-between mt" data-card="${c.id}">
                  <span>${escapeHtml(c.name)}</span>
                  <button class="icon-btn js-card-remove" data-id="${c.id}">✕</button>
                </div>`).join("")
              : `<p class="muted">No cards yet.</p>`
          }
          <div class="form-row mt">
            <div class="field"><input type="text" id="new-card-name" placeholder="e.g. Chase Sapphire" /></div>
            <button class="btn" id="add-card">Add card</button>
          </div>
        </div>

        <div class="card">
          <h3>Categories</h3>
          ${categories.map((c) => `<div class="flex-between mt"><span>${escapeHtml(c)}</span><button class="icon-btn js-cat-remove" data-cat="${escapeHtml(c)}">✕</button></div>`).join("")}
          <div class="form-row mt">
            <div class="field"><input type="text" id="new-cat-name" placeholder="e.g. Pet Care" /></div>
            <button class="btn" id="add-cat">Add category</button>
          </div>
        </div>
      </div>

      <div class="card">
        <h3>Merchant rules</h3>
        <p class="muted">If a transaction's description contains this text, it's auto-categorized. Newest rules match first.</p>
        <div id="rules-list">
          ${rules
            .map(
              (r) => `<div class="rule-row" data-rule="${r.id}">
                <span class="rule-row__pattern">${escapeHtml(r.pattern)}</span>
                <span class="rule-row__arrow">→</span>
                <span class="rule-row__cat">${escapeHtml(r.category)}</span>
                <button class="icon-btn js-rule-remove" data-id="${r.id}">✕</button>
              </div>`
            )
            .join("")}
        </div>
        <div class="form-row mt">
          <div class="field"><input type="text" id="new-rule-pattern" placeholder="text to match, e.g. netflix" /></div>
          <div class="field"><select id="new-rule-cat">${categoryOptionsHtml(null)}</select></div>
          <button class="btn" id="add-rule">Add rule</button>
        </div>
      </div>
    `;
    panel.querySelector("#add-card").addEventListener("click", () => {
      const el = panel.querySelector("#new-card-name");
      if (!el.value.trim()) return;
      Store.addCard(el.value);
      renderCards();
    });
    panel.querySelectorAll(".js-card-remove").forEach((el) =>
      el.addEventListener("click", (e) => {
        if (confirm("Remove this card? Its past transactions stay, but you won't be able to upload new statements to it until you re-add it.")) {
          Store.removeCard(e.target.dataset.id);
          renderCards();
        }
      })
    );
    panel.querySelector("#add-cat").addEventListener("click", () => {
      const el = panel.querySelector("#new-cat-name");
      if (!el.value.trim()) return;
      Store.addCategory(el.value);
      renderCards();
    });
    panel.querySelectorAll(".js-cat-remove").forEach((el) =>
      el.addEventListener("click", (e) => {
        if (confirm("Remove this category? Its budget target is removed too; existing transactions keep the label but it won't be selectable anymore.")) {
          Store.removeCategory(e.target.dataset.cat);
          renderCards();
        }
      })
    );
    panel.querySelector("#add-rule").addEventListener("click", () => {
      const pat = panel.querySelector("#new-rule-pattern");
      const cat = panel.querySelector("#new-rule-cat");
      if (!pat.value.trim() || !cat.value) return toast("Enter text to match and pick a category", true);
      Store.addRule(pat.value, cat.value);
      renderCards();
    });
    panel.querySelectorAll(".js-rule-remove").forEach((el) =>
      el.addEventListener("click", (e) => {
        Store.removeRule(e.target.dataset.id);
        renderCards();
      })
    );
  }

  // ---------- Settings ----------
  function renderSettings() {
    const panel = document.getElementById("tab-settings");
    const s = Store.state.settings;
    const modelOptions = ClaudeParse.MODELS.map((m) => `<option value="${m.id}" ${m.id === s.model ? "selected" : ""}>${escapeHtml(m.label)}</option>`).join("");
    const lastBackup = Store.state.lastBackupAt ? new Date(Store.state.lastBackupAt).toLocaleString() : "never";
    const daysSinceBackup = Store.state.lastBackupAt ? (Date.now() - new Date(Store.state.lastBackupAt)) / 86400000 : Infinity;

    panel.innerHTML = `
      <div class="card mb">
        <h3>Anthropic API key</h3>
        <p class="muted">Used only to read the statements/receipts you upload. Stored in this browser's localStorage — never sent anywhere except directly to Anthropic, never committed to this repo. Get one at <span class="muted">console.anthropic.com</span> (API calls cost a small amount against your own account; this app does not charge you anything itself).</p>
        <div class="flex-between mb"><span class="key-status"><span class="key-status__dot ${apiKeySet() ? "set" : ""}"></span>${apiKeySet() ? "Key is set" : "No key set"}</span></div>
        <div class="form-row">
          <div class="field"><input type="password" id="api-key-input" placeholder="sk-ant-..." value="${apiKeySet() ? "••••••••••••••••" : ""}" /></div>
          <button class="btn" id="save-key">Save key</button>
          ${apiKeySet() ? `<button class="btn secondary" id="clear-key">Clear</button>` : ""}
        </div>
        <div class="field mt">
          <label>Model for parsing</label>
          <select id="model-select">${modelOptions}</select>
        </div>
      </div>

      <div class="card mb">
        <h3>Splitting shared expenses</h3>
        <div class="field" style="max-width:220px">
          <label>Your default share when you mark something as split (%)</label>
          <input type="number" id="split-default" min="0" max="100" value="${s.splitDefaultPct}" />
        </div>
      </div>

      <div class="card mb">
        <h3>Backup &amp; restore</h3>
        <p class="muted">Your data lives only in this browser. This is the only way to move it to another device or recover it if you clear browser data.</p>
        <p class="muted">Last backup: ${lastBackup}</p>
        ${daysSinceBackup > 14 && Store.state.transactions.length ? `<div class="banner warn"><span class="banner__icon">💾</span><span>It's been a while since your last backup — download one now.</span></div>` : ""}
        <div class="form-row">
          <button class="btn" id="export-backup">Download backup (.json)</button>
          <button class="btn secondary" id="import-backup-btn">Import backup</button>
          <input type="file" id="import-backup-file" accept="application/json" style="display:none" />
        </div>
      </div>

      <div class="card">
        <h3>Reset</h3>
        <p class="muted">Deletes everything — cards, transactions, rules, budgets, your API key. Cannot be undone.</p>
        <button class="btn danger" id="reset-all">Reset all data</button>
      </div>
    `;

    panel.querySelector("#save-key").addEventListener("click", () => {
      const val = panel.querySelector("#api-key-input").value.trim();
      if (!val || val.startsWith("•")) return;
      Store.setSettings({ apiKey: val });
      toast("API key saved");
      renderSettings();
    });
    const clearBtn = panel.querySelector("#clear-key");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        Store.setSettings({ apiKey: "" });
        renderSettings();
      });
    }
    panel.querySelector("#model-select").addEventListener("change", (e) => Store.setSettings({ model: e.target.value }));
    panel.querySelector("#split-default").addEventListener("change", (e) => Store.setSettings({ splitDefaultPct: Math.max(0, Math.min(100, Number(e.target.value) || 0)) }));

    panel.querySelector("#export-backup").addEventListener("click", () => {
      const blob = new Blob([Store.exportBackup()], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `budget-tracker-backup-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      Store.markBackedUp();
      toast("Backup downloaded");
      renderSettings();
    });
    panel.querySelector("#import-backup-btn").addEventListener("click", () => panel.querySelector("#import-backup-file").click());
    panel.querySelector("#import-backup-file").addEventListener("change", (e) => {
      const file = e.target.files[0];
      e.target.value = "";
      if (!file) return;
      if (!confirm("This replaces all current data with the backup file. Continue?")) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          Store.importBackup(reader.result);
          toast("Backup restored");
          renderAll();
          updateReviewBadges();
        } catch (err) {
          toast("Couldn't read that backup file", true);
        }
      };
      reader.readAsText(file);
    });
    panel.querySelector("#reset-all").addEventListener("click", () => {
      if (confirm("This deletes everything. Are you sure?") && confirm("Really sure? This cannot be undone.")) {
        Store.resetAll();
        renderAll();
        updateReviewBadges();
        toast("All data reset");
      }
    });
  }

  // ---------- tab wiring ----------
  function renderTab(name) {
    switch (name) {
      case "dashboard":
        renderDashboard();
        break;
      case "upload":
        renderUpload();
        break;
      case "review":
        renderReview();
        break;
      case "cards":
        renderCards();
        break;
      case "settings":
        renderSettings();
        break;
    }
  }
  function renderAll() {
    renderTab(AppState.tab);
    updateReviewBadges();
  }
  function switchTab(name) {
    document.querySelectorAll(".tab-btn, .bn-btn[data-tab]").forEach((b) => b.classList.toggle("active", b.dataset.tab === name));
    document.querySelectorAll(".tab-panel").forEach((p) => p.classList.toggle("active", p.id === "tab-" + name));
    AppState.tab = name;
    if (name !== "review") AppState.itemizingTxId = null;
    renderTab(name);
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("header-date").textContent = new Date().toLocaleDateString(undefined, { weekday: "long", year: "numeric", month: "long", day: "numeric" });
    document.querySelectorAll(".tab-btn, #bottom-nav .bn-btn[data-tab]").forEach((b) => b.addEventListener("click", () => switchTab(b.dataset.tab)));
    updateReviewBadges();
    renderDashboard();
  });
})();
