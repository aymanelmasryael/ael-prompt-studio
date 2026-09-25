/* =========================================================================
   DOM Rendering
   ========================================================================= */

import { PROVIDERS, PROVIDER_IDS } from "../domain/models/Provider.js";
import { esc, fmtMs, fmtCost } from "../shared/utils/format.js";
import { ROUTER_MODES } from "../domain/services/RouterService.js";

const AVATAR_INITIALS = n => n.replace(/[^a-z0-9]/gi, "").slice(0, 2).toUpperCase();

export function renderStatusStrip(S, el) {
  const active = PROVIDER_IDS.filter(id => S.providerResults[id].status === "running").length;
  const done = PROVIDER_IDS.filter(id => S.providerResults[id].status === "done").length;
  const keysConfigured = PROVIDER_IDS.filter(id => S.apiKeys[id]).length;

  el.innerHTML = `
    <div class="chip"><span class="lab">mode</span><b style="color:${S.mockMode ? "#fbbf24" : "#34d399"}">${S.mockMode ? "DEMO" : "LIVE"}</b></div>
    <div class="chip"><span class="lab">providers</span><b>${S.enabledProviders.size}/${PROVIDER_IDS.length}</b></div>
    <div class="chip"><span class="lab">keys</span><b style="color:${keysConfigured > 0 ? "#34d399" : "#fbbf24"}">${keysConfigured}/${PROVIDER_IDS.length}</b></div>
    <div class="chip"><span class="lab">running</span><b>${active}</b></div>
    <div class="chip"><span class="lab">done</span><b>${done}</b></div>
    <div class="chip"><span class="lab">session</span><b style="color:#34d399">${fmtCost(S.ledger.totalUsd)}</b></div>
  `;
}

export function renderPresence(peers, ME, el) {
  const list = Array.from(peers.values());
  const all = [ME, ...list];
  el.avatars.innerHTML = all.map(p => `
    <div class="avatar ${p === ME ? "self" : ""}" style="--c:${p.color}"
         title="${esc(p.name)}${p === ME ? " (you)" : ""} · ${esc(p.focus || p.activity || "idle")}">
      ${AVATAR_INITIALS(p.name)}
    </div>`).join("");

  el.soloHint.textContent = list.length
    ? `${list.length} collaborator${list.length > 1 ? "s" : ""} live`
    : "solo session — open a 2nd tab";

  document.querySelectorAll("[data-chips]").forEach(node => {
    const key = node.dataset.chips;
    const who = list.filter(p => p.focus === key);
    node.innerHTML = who.map(p =>
      `<div class="peer-chip" style="--c:${p.color}" title="${esc(p.name)}">${AVATAR_INITIALS(p.name)}</div>`
    ).join("");
    const panel = node.closest(".panel");
    if (panel) panel.classList.toggle("peer-focus", who.length > 0);
  });
}

export function renderCategoryChips(categories, selectedId, el) {
  // Group templates by top-level bucket
  const buckets = categorize(categories);
  const total = categories.length;

  // "All" chip + one chip per bucket
  const parts = [`<div class="cat-chip ${!selectedId ? "active" : ""}" data-cat="">⭐ All <span class="cat-count">${total}</span></div>`];

  for (const [name, items] of Object.entries(buckets)) {
    const active = selectedId && items.some(i => i.id === selectedId) ? "active" : "";
    parts.push(`<div class="cat-chip ${active}" data-cat="bucket:${name}">${bucketEmoji(name)} ${name} <span class="cat-count">${items.length}</span></div>`);
  }

  el.innerHTML = parts.join("");
}

function bucketEmoji(name) {
  const m = {
    "Essentials": "⭐", "Business": "💼", "Marketing": "📣", "Social Media": "📱",
    "SEO & Traffic": "🔝", "Copywriting": "📝", "Sales & Outbound": "📞",
    "Crypto & Web3": "₿", "Career": "🎯", "Operations": "⚙️",
    "Product & Tech": "🛠️", "Personal": "💗", "Niche & Special": "✨"
  };
  return m[name] || "📁";
}

function categorize(categories) {
  const map = {};
  for (const c of categories) {
    const bucket = getBucketFor(c.id);
    if (!map[bucket]) map[bucket] = [];
    map[bucket].push(c);
  }
  return map;
}

function getBucketFor(id) {
  const buckets = {
    "Essentials": ["email","recipe","workout","travel","routine","pitch","social","interview","act-as"],
    "Business": ["business-plan","swot","pitch-deck","pricing","okr","competitor","persona","brand-voice","saas-growth","saas-metrics","b2b-sales","ecommerce","digital-product","small-business","entrepreneur","no-code"],
    "Marketing": ["landing-page-copy","youtube-seo","google-rank","organic-traffic","long-copy","objection-handling","high-ticket","sales-letter","sales-funnel","referral","cause-marketing"],
    "Social Media": ["instagram-carousel","tiktok-script","twitter-thread","linkedin-post","facebook-ads","twitter-engagement","pinterest","social-stories","instagram-caption","ugc","poll-quiz","live-commerce"],
    "Copywriting": ["product-desc","blog-outline","tweet-thread","ad-copy","email-subject"],
    "Sales & Outbound": ["cold-email","cold-call","phone-lead","outside-sales","warm-outreach","sales-consistency","sales-engineer","trade-show"],
    "Crypto & Web3": ["crypto-strategy","defi","nft-strategy"],
    "Career": ["cover-letter","resume-bullets","linkedin-bio","networking-msg","salary-nego","career-change","job-landing","linkedin-sales","career-path"],
    "Operations": ["time-mgmt","stress-mgmt","better-sleep","customer-service","chatbot"],
    "Product & Tech": ["code-review","api-docs","bug-report","system-design","product-scale","prompt-engineering","excel-formula","virtual-event"],
    "Personal": ["meal-plan","budget","habit-tracker","gift-ideas","packing-list"],
    "Niche & Special": ["airbnb-host","garden","etsy","smma","micro-influencer"]
  };
  for (const [bucket, ids] of Object.entries(buckets)) {
    if (ids.includes(id)) return bucket;
  }
  return "Essentials";
}

export function renderTemplateList(categories, selectedId, query, el, filter) {
  const q = (query || "").toLowerCase().trim();
  let filtered = categories;

  // Apply bucket filter
  if (filter && filter.startsWith("bucket:")) {
    const bucketName = filter.slice(7);
    filtered = categories.filter(c => getBucketFor(c.id) === bucketName);
  }

  // Apply search
  if (q) {
    filtered = filtered.filter(c =>
      c.label.toLowerCase().includes(q) ||
      c.id.toLowerCase().includes(q) ||
      (c.tags || []).some(t => t.includes(q))
    );
  }

  if (!filtered.length) {
    el.innerHTML = `<div class="empty-state">
      <div class="empty-icon">🔍</div>
      <div class="empty-text">No templates found</div>
      <div class="empty-sub">Try a different search or filter</div>
    </div>`;
    return;
  }

  // Group by bucket for display
  const grouped = {};
  for (const c of filtered) {
    const bucket = getBucketFor(c.id);
    if (!grouped[bucket]) grouped[bucket] = [];
    grouped[bucket].push(c);
  }

  const html = Object.entries(grouped).map(([bucket, items]) => `
    <div class="template-group">
      <div class="template-group-header">
        <span class="tg-emoji">${bucketEmoji(bucket)}</span>
        <span class="tg-name">${bucket}</span>
        <span class="tg-count">${items.length}</span>
      </div>
      <div class="template-group-items">
        ${items.map(c => `
          <div class="template-item ${c.id === selectedId ? "active" : ""}" data-cat="${c.id}">
            <span class="t-emoji">${c.emoji}</span>
            <span class="t-name">${esc(c.label)}</span>
            <span class="t-fields">${c.fields.length}f</span>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");

  el.innerHTML = html;
}

export function renderSelectedTemplate(category, el) {
  if (!category) {
    el.innerHTML = `<span class="placeholder">← Choose a template from the library</span>`;
    return;
  }
  el.innerHTML = `<b>${category.emoji} ${esc(category.label)}</b> · ${category.fields.length} fields`;
}

export function renderFieldForm(category, values, el) {
  if (!category) {
    el.innerHTML = `<span class="placeholder">Choose a template to see its fields</span>`;
    return;
  }

  const html = category.fields.map(f => {
    const val = values[f.key] ?? f.def ?? "";
    let control = "";
    if (f.type === "chips") {
      control = `<div class="field-chips" data-field="${esc(f.key)}">` +
        f.chips.map(chip => `
          <div class="field-chip ${chip === val ? "active" : ""}" data-value="${esc(chip)}">${esc(chip)}</div>
        `).join("") +
      `</div>`;
    } else if (f.type === "text") {
      control = `<textarea class="field-textarea" data-field="${esc(f.key)}" placeholder="${esc(f.placeholder || "")}" rows="2">${esc(val)}</textarea>`;
    }
    return `
      <div class="field-row">
        <label class="field-label">${esc(f.label)}</label>
        ${control}
      </div>
    `;
  }).join("");

  el.innerHTML = html;
}

export function renderProviderGrid(S, el) {
  el.innerHTML = PROVIDER_IDS.map(id => {
    const p = PROVIDERS[id];
    const r = S.providerResults[id];
    const enabled = S.enabledProviders.has(id);
    const statusClass = r.status === "idle" ? "" : r.status;

    const metrics = [];
    if (r.latencyMs != null) metrics.push(`<span class="pc-metric">latency <b>${fmtMs(r.latencyMs)}</b></span>`);
    if (r.outputTokens != null) metrics.push(`<span class="pc-metric">tok <b>${r.inputTokens || 0}→${r.outputTokens}</b></span>`);
    if (r.cost != null) metrics.push(`<span class="pc-metric">cost <b style="color:#34d399">${fmtCost(r.cost)}</b></span>`);
    if (r.mock) metrics.push(`<span class="pc-metric" style="color:#fbbf24">MOCK</span>`);

    let body;
    if (!enabled) {
      body = `<span class="placeholder">● Disabled · click to enable</span>`;
    } else if (r.status === "idle") {
      body = `<span class="placeholder">Ready · press Test →</span>`;
    } else if (r.status === "running") {
      body = esc(r.text || "…");
    } else if (r.status === "done") {
      body = esc(r.text);
    } else if (r.status === "error") {
      body = `<span style="color:#fda4af">⚠ ${esc(r.error)}</span>`;
    }

    return `
      <div class="provider-card ${statusClass}" data-pid="${id}">
        <div class="pc-head">
          <div class="pc-logo" style="--c:${p.color}">${p.name[0]}</div>
          <div>
            <div class="pc-name">${p.name} <span style="color:${enabled ? "#34d399" : "#6b7d96"};cursor:pointer" data-toggle="${id}">${enabled ? "●" : "○"}</span></div>
            <div class="pc-model">${p.model}</div>
          </div>
          <div class="spacer"></div>
          <div class="pc-status ${statusClass}">${r.status}</div>
        </div>
        <div class="pc-body">${body}</div>
        <div class="pc-foot">${metrics.join("")}</div>
      </div>
    `;
  }).join("");
}

export function renderCost(S, els) {
  els.total.textContent = fmtCost(S.ledger.totalUsd);

  const entries = PROVIDER_IDS
    .map(id => ({ id, name: PROVIDERS[id].name, color: PROVIDERS[id].color, usd: S.ledger.byProvider[id] || 0 }))
    .filter(x => x.usd > 0)
    .sort((a, b) => b.usd - a.usd);

  const maxUsd = Math.max(0.000001, ...entries.map(e => e.usd));

  els.bars.innerHTML = entries.length
    ? entries.map(e => `
      <div class="cost-bar">
        <span class="name">${e.name}</span>
        <span class="track"><i style="width:${(e.usd / maxUsd * 100).toFixed(1)}%;background:${e.color}"></i></span>
        <span class="val">${fmtCost(e.usd)}</span>
      </div>
    `).join("")
    : `<div class="placeholder" style="text-align:center;padding:6px">Run a comparison to see costs</div>`;
}

export function renderKeyList(S, el) {
  el.innerHTML = PROVIDER_IDS.map(id => {
    const p = PROVIDERS[id];
    const val = S.apiKeys[id] || "";
    const ok = Boolean(val);
    return `
      <div class="key-row">
        <label><span style="width:6px;height:6px;border-radius:50%;background:${p.color};display:inline-block"></span>${p.name}</label>
        <div class="key-input-row">
          <input type="password" data-key="${id}" value="${esc(val)}" placeholder="sk-... (optional — mock will be used)" autocomplete="off">
          <span class="key-status ${ok ? "ok" : ""}">${ok ? "set" : "empty"}</span>
        </div>
      </div>
    `;
  }).join("");
}

export function renderCompareBadge(S, el) {
  const running = PROVIDER_IDS.filter(id => S.providerResults[id].status === "running").length;
  const done = PROVIDER_IDS.filter(id => S.providerResults[id].status === "done").length;
  const errors = PROVIDER_IDS.filter(id => S.providerResults[id].status === "error").length;

  if (running > 0) { el.textContent = `running ${running}…`; el.className = "badge running"; }
  else if (errors > 0) { el.textContent = `${done} done · ${errors} err`; el.className = "badge err"; }
  else if (done > 0) { el.textContent = `${done} done`; el.className = "badge"; }
  else { el.textContent = "idle"; el.className = "badge"; }
}

export function renderRouterRules(S, el) {
  el.innerHTML = ROUTER_MODES.map(m => `
    <div class="rule" style="${m.id === S.routerMode ? "border-color:rgba(0,116,255,.5);background:rgba(0,116,255,.05)" : ""}">
      <span style="color:var(--dim)">${m.id}</span>
      <span style="color:#d5e6fb">${m.desc}</span>
    </div>
  `).join("");
}
