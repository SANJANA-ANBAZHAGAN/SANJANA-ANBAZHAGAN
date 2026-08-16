// Calls the Anthropic API directly from the browser to read statement/receipt files.
// Your API key (Settings tab) is used only for this — sent straight to api.anthropic.com over
// HTTPS, stored only in this browser's localStorage, never written anywhere else, never
// committed to any repo. Every parse call costs a small amount against your own Anthropic
// account; Haiku is the default model because it's cheap and plenty accurate for this.
(function () {
  const API_URL = "https://api.anthropic.com/v1/messages";
  const API_VERSION = "2023-06-01";

  const MODELS = [
    { id: "claude-haiku-4-5-20251001", label: "Claude Haiku 4.5 (cheapest, recommended)" },
    { id: "claude-sonnet-5", label: "Claude Sonnet 5 (more accurate, costs more)" },
  ];

  function fileToContentBlock(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = () => reject(new Error("Could not read file"));
      reader.onload = () => {
        const dataUrl = reader.result; // "data:<mime>;base64,<data>"
        const comma = dataUrl.indexOf(",");
        const meta = dataUrl.slice(5, dataUrl.indexOf(";"));
        const data = dataUrl.slice(comma + 1);
        const isPdf = meta === "application/pdf" || /\.pdf$/i.test(file.name);
        resolve({
          type: isPdf ? "document" : "image",
          source: { type: "base64", media_type: isPdf ? "application/pdf" : meta || "image/jpeg", data },
        });
      };
      reader.readAsDataURL(file);
    });
  }

  async function callClaude({ apiKey, model, system, content, maxTokens = 4096 }) {
    if (!apiKey) throw new Error("No Anthropic API key set. Add one in Settings.");
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": API_VERSION,
        "anthropic-dangerous-direct-browser-access": "true",
      },
      body: JSON.stringify({
        model,
        max_tokens: maxTokens,
        system,
        messages: [{ role: "user", content }],
      }),
    });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      let msg = `Anthropic API error ${res.status}`;
      try {
        const j = JSON.parse(body);
        if (j.error && j.error.message) msg = j.error.message;
      } catch (_) {
        if (body) msg += `: ${body.slice(0, 200)}`;
      }
      throw new Error(msg);
    }
    const json = await res.json();
    const text = (json.content || []).filter((b) => b.type === "text").map((b) => b.text).join("\n");
    return text;
  }

  function extractJson(text) {
    // Claude is asked to return only JSON, but strip code fences / stray prose defensively.
    const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
    const raw = fenced ? fenced[1] : text;
    const start = raw.search(/[[{]/);
    const endBracket = raw.lastIndexOf("]");
    const endBrace = raw.lastIndexOf("}");
    const end = Math.max(endBracket, endBrace);
    if (start === -1 || end === -1) throw new Error("Claude's response didn't contain JSON we could parse.");
    return JSON.parse(raw.slice(start, end + 1));
  }

  async function parseStatement({ apiKey, model, file, cardName, existingCategories }) {
    const block = await fileToContentBlock(file);
    const system = `You extract transactions from a bank/credit card statement (PDF or screenshot) for a personal budgeting app.
Return ONLY a JSON array, no prose, no markdown fences. Each element:
{"date": "YYYY-MM-DD", "merchant": "cleaned merchant/description", "amount": number, "category": "one of the provided categories or null"}
Rules:
- amount is a plain number in dollars. Purchases/charges are positive. Refunds, credits, and payments received are negative.
- Skip the statement's own summary/total lines — only individual transactions.
- Clean up merchant text (strip trailing store numbers/codes) but keep it recognizable.
- If you can confidently guess a category from this list, use it exactly as written; otherwise use null: ${JSON.stringify(existingCategories)}
- If you truly cannot read the statement, return [].`;
    const content = [
      block,
      { type: "text", text: `This statement is for the card "${cardName}". Extract every transaction as instructed.` },
    ];
    const text = await callClaude({ apiKey, model, system, content, maxTokens: 8192 });
    const parsed = extractJson(text);
    if (!Array.isArray(parsed)) throw new Error("Expected a JSON array of transactions.");
    return parsed;
  }

  async function itemizeReceipt({ apiKey, model, file, totalAmount, existingCategories }) {
    const block = await fileToContentBlock(file);
    const system = `You itemize a receipt photo for a personal budgeting app so a single charge can be split across spending categories.
Return ONLY a JSON array, no prose, no markdown fences. Each element:
{"name": "item or item group", "amount": number, "category": "one of the provided categories"}
Rules:
- Group similar items together (e.g. all produce as one "Produce" line) rather than listing every SKU.
- Amounts should sum to approximately ${totalAmount} (the actual charge total, including tax/fees allocated proportionally). Small rounding differences are fine.
- Categories must be exactly one of: ${JSON.stringify(existingCategories)}`;
    const content = [
      block,
      { type: "text", text: `Total charge was $${totalAmount}. Itemize this receipt into spending categories.` },
    ];
    const text = await callClaude({ apiKey, model, system, content, maxTokens: 4096 });
    const parsed = extractJson(text);
    if (!Array.isArray(parsed)) throw new Error("Expected a JSON array of line items.");
    return parsed;
  }

  async function suggestCategory({ apiKey, model, merchant, existingCategories }) {
    const system = `Pick the single best category for a transaction from this exact list: ${JSON.stringify(existingCategories)}. Return ONLY the category string, nothing else.`;
    const text = await callClaude({
      apiKey,
      model,
      system,
      content: [{ type: "text", text: `Merchant/description: "${merchant}"` }],
      maxTokens: 32,
    });
    const guess = text.trim().replace(/^["']|["']$/g, "");
    return existingCategories.includes(guess) ? guess : null;
  }

  window.ClaudeParse = { MODELS, parseStatement, itemizeReceipt, suggestCategory };
})();
