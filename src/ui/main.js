/* =========================================================================
   AEL Prompt Studio · Main Entry
   Author: Ayman Elmasry · AEL Digital Studio
   ========================================================================= */

import { $, esc, pick } from "../shared/utils/format.js";
import { createAppState, DEFAULT_CONTRACT } from "./state.js";
import {
  renderStatusStrip, renderPresence, renderCategoryChips,
  renderTemplateList, renderSelectedTemplate, renderFieldForm,
  renderProviderGrid, renderCost, renderKeyList,
  renderCompareBadge, renderRouterRules
} from "./rendering.js";
import { log, clearLogs } from "./logging.js";
import { parseContract } from "../domain/contracts/parser.js";
import { compileTs, highlightTs } from "../domain/contracts/compiler.js";
import { renderDiags } from "../domain/contracts/diagnostics.js";
import { CATEGORIES, getCategory } from "../domain/models/Category.js";
import { PROVIDERS, PROVIDER_IDS } from "../domain/models/Provider.js";
import { ROUTER_MODES, routeRequest } from "../domain/services/RouterService.js";
import { resetLedger, recordCost } from "../domain/services/CostService.js";
import { createIdentity, persistIdentity, createChannel, postMessage, NAMES, COLORS } from "../collaboration/channel.js";
import { createPeerMap, handleMessage, currentActivity, startHeartbeat, setupBeforeUnload } from "../collaboration/presence.js";
import { testAcrossProviders, getAdapter } from "../application/use-cases/TestAcrossProviders.js";
import { generatePrompt, generateNaivePrompt } from "../application/use-cases/GeneratePrompt.js";
import { saveKey } from "../infrastructure/storage/SecureKeyStore.js";
import { MockAdapter } from "../infrastructure/providers/MockAdapter.js";

/* ---------- State ---------- */
const { S } = createAppState();
let contract = parseContract(S.contractSrc);

/* ---------- Identity & Collab ---------- */
const ME = createIdentity();
persistIdentity(ME);
const peers = createPeerMap();
const chan = createChannel();

/* ---------- DOM Cache ---------- */
const el = {
  statusStrip: $("#statusStrip"),
  avatars: $("#avatars"),
  soloHint: $("#soloHint"),
  btnPeer: $("#btnPeer"),
  btnAbout: $("#btnAbout"),
  brandBtn: $("#brandBtn"),
  aboutModal: $("#aboutModal"),
  aboutClose: $("#aboutClose"),
  year: $("#year"),

  searchTemplates: $("#searchTemplates"),
  categoryChips: $("#categoryChips"),
  templateList: $("#templateList"),
  libraryBadge: $("#libraryBadge"),

  selectedTemplate: $("#selectedTemplate"),
  contractSrc: $("#contractSrc"),
  contractBadge: $("#contractBadge"),
  contractDiags: $("#contractDiags"),
  btnRecompile: $("#btnRecompile"),
  fieldForm: $("#fieldForm"),
  builtPrompt: $("#builtPrompt"),
  btnCopyPrompt: $("#btnCopyPrompt"),
  btnRunAll: $("#btnRunAll"),
  btnRouteAuto: $("#btnRouteAuto"),
  btnDemoMode: $("#btnDemoMode"),
  btnExport: $("#btnExport"),

  providerGrid: $("#providerGrid"),
  compareBadge: $("#compareBadge"),
  btnClearCompare: $("#btnClearCompare"),

  costTotal: $("#costTotal"),
  costBars: $("#costBars"),
  btnResetCost: $("#btnResetCost"),

  keyList: $("#keyList"),

  logStream: $("#logStream"),
  btnClearLogs: $("#btnClearLogs")
};

/* ---------- Init ---------- */
el.contractSrc.value = S.contractSrc;

function recompileContract() {
  contract = parseContract(S.contractSrc);
  const badge = el.contractBadge;
  if (contract.diags.length) {
    badge.textContent = contract.diags.length + " err";
    badge.classList.add("err");
    badge.classList.remove("running");
  } else {
    badge.textContent = "compiled · " + contract.fields.length + " fields";
    badge.classList.remove("err", "running");
  }
  renderDiags(el.contractDiags, contract.diags,
    `contract "${contract.name}" compiled — ${contract.fields.length} field(s), 0 errors`);
}

function renderAll() {
  renderStatusStrip(S, el.statusStrip);
  renderCategoryChips(CATEGORIES, S.selectedCategoryId, el.categoryChips);
  renderTemplateList(CATEGORIES, S.selectedCategoryId, el.searchTemplates?.value || "", el.templateList, S.libraryFilter);
  renderSelectedTemplate(getCategory(S.selectedCategoryId), el.selectedTemplate);
  renderFieldForm(getCategory(S.selectedCategoryId), S.fieldValues, el.fieldForm);
  renderProviderGrid(S, el.providerGrid);
  renderCost(S, { total: el.costTotal, bars: el.costBars });
  renderKeyList(S, el.keyList);
  renderCompareBadge(S, el.compareBadge);
  renderRouterRules(S, el.routerList || { innerHTML: "" });
  renderPresence(peers, ME, el);
  if (el.libraryBadge) el.libraryBadge.textContent = CATEGORIES.length + " templates";
}

// Safe routerList element
el.routerList = document.getElementById("rulesList");

/* ---------- Initial logs ---------- */
recompileContract();
renderAll();
log("sys", "AEL Prompt Studio bootstrapped", "studio");
log("ok", `loaded ${CATEGORIES.length} categories · ${PROVIDER_IDS.length} providers`, "studio");
log("info", "running in DEMO mode — add API keys to go live", "studio");
log("sys", "BroadcastChannel online — open a 2nd tab to collaborate", "collab");
log("sys", "workbench by Ayman Elmasry · aymanelmasry.com", "brand");

postMessage(chan, { type: "hello", focus: null, activity: "observing" }, ME);

/* ---------- Collaboration wiring ---------- */
if (chan) {
  chan.onmessage = e => handleMessage(
    peers, ME, e.data, log,
    () => renderPresence(peers, ME, el),
    applyRemotePatch
  );
}
startHeartbeat(peers, ME, m => postMessage(chan, m, ME),
  () => currentActivity(S, ME),
  () => renderPresence(peers, ME, el));
setupBeforeUnload(m => postMessage(chan, m, ME));

/* ---------- Helpers ---------- */
function broadcastPatch(patch) {
  postMessage(chan, { type: "state", patch }, ME);
}

function applyRemotePatch(patch, who, color) {
  Object.assign(S, patch);
  if (patch.contractSrc != null) {
    el.contractSrc.value = patch.contractSrc;
    recompileContract();
  }
  renderAll();
  log("sys", `${who} updated state`, "collab", who, color);
}

function refreshBuiltPrompt() {
  const cat = getCategory(S.selectedCategoryId);
  if (!cat) {
    S.builtPrompt = "";
    el.builtPrompt.textContent = "— awaiting template —";
    return;
  }
  S.builtPrompt = generatePrompt(cat, S.fieldValues);
  S.naivePrompt = generateNaivePrompt(cat, S.fieldValues);
  el.builtPrompt.textContent = S.builtPrompt || "— fill fields to build prompt —";
}

/* ---------- Event: Category / Template selection ---------- */
el.categoryChips.addEventListener("click", e => {
  const chip = e.target.closest("[data-cat]");
  if (!chip) return;
  const val = chip.dataset.cat;

  // Bucket filter
  if (!val) {
    S.libraryFilter = null;
  } else if (val.startsWith("bucket:")) {
    S.libraryFilter = val;
    renderCategoryChips(CATEGORIES, S.selectedCategoryId, el.categoryChips);
    renderTemplateList(CATEGORIES, S.selectedCategoryId, el.searchTemplates?.value || "", el.templateList, S.libraryFilter);
    log("sys", "filter → " + val.slice(7), "library");
    return;
  } else {
    S.libraryFilter = null;
    selectCategory(val);
    return;
  }

  renderCategoryChips(CATEGORIES, S.selectedCategoryId, el.categoryChips);
  renderTemplateList(CATEGORIES, S.selectedCategoryId, el.searchTemplates?.value || "", el.templateList, S.libraryFilter);
});

el.templateList.addEventListener("click", e => {
  const item = e.target.closest("[data-cat]");
  if (!item) return;
  selectCategory(item.dataset.cat);
});

function selectCategory(id) {
  const cat = getCategory(id);
  if (!cat) return;
  S.selectedCategoryId = id;
  S.fieldValues = {};
  for (const f of cat.fields) S.fieldValues[f.key] = f.def;
  renderCategoryChips(CATEGORIES, id, el.categoryChips);
  renderTemplateList(CATEGORIES, id, el.searchTemplates?.value || "", el.templateList, S.libraryFilter);
  renderSelectedTemplate(cat, el.selectedTemplate);
  renderFieldForm(cat, S.fieldValues, el.fieldForm);
  refreshBuiltPrompt();
  log("info", `template → ${cat.label}`, "studio");
}

/* ---------- Event: search ---------- */
el.searchTemplates?.addEventListener("input", () => {
  renderTemplateList(CATEGORIES, S.selectedCategoryId, el.searchTemplates.value, el.templateList, S.libraryFilter);
});

/* ---------- Event: Field form ---------- */
el.fieldForm.addEventListener("click", e => {
  const chip = e.target.closest(".field-chip");
  if (!chip) return;
  const row = chip.closest("[data-field]");
  if (!row) return;
  const key = row.dataset.field;
  const val = chip.dataset.value;
  S.fieldValues[key] = val;
  row.querySelectorAll(".field-chip").forEach(c => c.classList.toggle("active", c === chip));
  refreshBuiltPrompt();
});

el.fieldForm.addEventListener("input", e => {
  const ta = e.target.closest(".field-textarea");
  if (!ta) return;
  const key = ta.dataset.field;
  S.fieldValues[key] = ta.value;
  refreshBuiltPrompt();
});

/* ---------- Event: Contract editor ---------- */
el.contractSrc.addEventListener("input", e => {
  S.contractSrc = e.target.value;
  recompileContract();
  broadcastPatch({ contractSrc: S.contractSrc });
});

el.btnRecompile?.addEventListener("click", () => {
  recompileContract();
  log("sys", "contract recompiled", "contract");
});

/* ---------- Event: Demo mode ---------- */
el.btnDemoMode?.addEventListener("click", () => {
  S.mockMode = !S.mockMode;
  log("sys", `mode → ${S.mockMode ? "DEMO (mock)" : "LIVE (real API calls)"}`, "studio");
  renderStatusStrip(S, el.statusStrip);
});

/* ---------- Event: Run on all providers ---------- */
el.btnRunAll.addEventListener("click", async () => {
  if (S.running) return;
  if (!S.selectedCategoryId) { log("warn", "choose a template first", "studio"); return; }

  S.running = true;
  el.btnRunAll.disabled = true;
  el.btnRouteAuto.disabled = true;

  const request = buildRequest();
  const enabledIds = PROVIDER_IDS.filter(id => S.enabledProviders.has(id));

  log("sys", `running on ${enabledIds.length} provider(s)`, "studio");

  for (const id of enabledIds) S.providerResults[id] = { status: "idle", text: "" };
  renderProviderGrid(S, el.providerGrid);

  await testAcrossProviders(request, enabledIds, S.ledger, onProviderUpdate);

  S.running = false;
  el.btnRunAll.disabled = false;
  el.btnRouteAuto.disabled = false;
  renderAll();
});

/* ---------- Event: Auto-route ---------- */
el.btnRouteAuto.addEventListener("click", async () => {
  if (S.running) return;
  if (!S.selectedCategoryId) { log("warn", "choose a template first", "studio"); return; }

  S.running = true;
  el.btnRunAll.disabled = true;
  el.btnRouteAuto.disabled = true;

  const decision = routeRequest(S.selectedCategoryId, S.routerMode);
  log("sys", `smart router → ${decision.reason}`, "router");

  const request = buildRequest();
  const adapter = getAdapter(decision.providerId);
  const isMock = adapter instanceof MockAdapter;

  onProviderUpdate(decision.providerId, { status: "running", mock: isMock });

  try {
    const result = await adapter.send(request, {
      onChunk: (chunk, acc) => onProviderUpdate(decision.providerId, { status: "running", text: acc })
    });
    const cost = recordCost(S.ledger, decision.providerId, result.inputTokens, result.outputTokens);
    onProviderUpdate(decision.providerId, {
      status: "done", text: result.text, latencyMs: result.latencyMs,
      inputTokens: result.inputTokens, outputTokens: result.outputTokens,
      cost, mock: result.mock
    });
    log("ok", `routed → ${PROVIDERS[decision.providerId].name}`, "router");
  } catch (err) {
    onProviderUpdate(decision.providerId, { status: "error", error: err.message });
    log("err", `router failed: ${err.message}`, "router");
  }

  S.running = false;
  el.btnRunAll.disabled = false;
  el.btnRouteAuto.disabled = false;
  renderAll();
});

function buildRequest() {
  return {
    task: S.selectedCategoryId || "general",
    prompt: S.builtPrompt || "",
    max_tokens: 512,
    temperature: 0.7,
    system: null
  };
}

function onProviderUpdate(providerId, patch) {
  S.providerResults[providerId] = { ...S.providerResults[providerId], ...patch };
  renderProviderGrid(S, el.providerGrid);
  renderCompareBadge(S, el.compareBadge);
  renderCost(S, { total: el.costTotal, bars: el.costBars });
  renderStatusStrip(S, el.statusStrip);
}

/* ---------- Event: provider toggle ---------- */
el.providerGrid.addEventListener("click", e => {
  const t = e.target.closest("[data-toggle]");
  if (!t) return;
  const id = t.dataset.toggle;
  if (S.enabledProviders.has(id)) S.enabledProviders.delete(id);
  else S.enabledProviders.add(id);
  renderProviderGrid(S, el.providerGrid);
  renderStatusStrip(S, el.statusStrip);
  log("sys", `${PROVIDERS[id].name} ${S.enabledProviders.has(id) ? "enabled" : "disabled"}`, "studio");
});

/* ---------- Event: clear compare / reset cost ---------- */
el.btnClearCompare?.addEventListener("click", () => {
  for (const id of PROVIDER_IDS) S.providerResults[id] = { status: "idle", text: "" };
  renderProviderGrid(S, el.providerGrid);
  renderCompareBadge(S, el.compareBadge);
  log("sys", "comparison cleared", "studio");
});

el.btnResetCost?.addEventListener("click", () => {
  resetLedger(S.ledger);
  renderCost(S, { total: el.costTotal, bars: el.costBars });
  renderStatusStrip(S, el.statusStrip);
  log("sys", "cost ledger reset", "cost");
});

/* ---------- Event: API keys ---------- */
el.keyList.addEventListener("input", e => {
  const id = e.target.dataset.key;
  if (!id) return;
  const val = e.target.value.trim();
  S.apiKeys[id] = val;
  saveKey(id, val);
  renderStatusStrip(S, el.statusStrip);
  const statusEl = e.target.parentElement.querySelector(".key-status");
  if (statusEl) {
    statusEl.textContent = val ? "set" : "empty";
    statusEl.classList.toggle("ok", !!val);
  }
});

/* ---------- Event: export ---------- */
el.btnExport?.addEventListener("click", () => {
  const data = {
    category: S.selectedCategoryId,
    fields: S.fieldValues,
    contract: contract.name,
    builtPrompt: S.builtPrompt,
    naivePrompt: S.naivePrompt,
    timestamp: new Date().toISOString()
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `ael-prompt-${S.selectedCategoryId || "export"}.json`;
  a.click();
  URL.revokeObjectURL(url);
  log("ok", "prompt exported as JSON", "studio");
});

/* ---------- Event: copy built prompt ---------- */
el.btnCopyPrompt?.addEventListener("click", async () => {
  const text = S.builtPrompt;
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
    log("ok", "prompt copied to clipboard", "studio");
    const orig = el.btnCopyPrompt.textContent;
    el.btnCopyPrompt.textContent = "✓ copied";
    setTimeout(() => { el.btnCopyPrompt.textContent = orig; }, 1200);
  } catch (e) {
    log("err", `copy failed: ${e.message}`, "studio");
  }
});

/* ---------- Event: clear logs ---------- */
el.btnClearLogs?.addEventListener("click", clearLogs);

/* ---------- Event: demo peer ---------- */
el.btnPeer?.addEventListener("click", () => {
  const id = "demo-" + Math.random().toString(36).slice(2, 7);
  const p = {
    id, name: pick(NAMES) + "-" + Math.floor(Math.random() * 90 + 10),
    color: pick(COLORS), focus: null, activity: "idle",
    lastSeen: Date.now(), demo: true
  };
  peers.set(id, p);
  log("sys", `demo collaborator ${p.name} joined`, "collab", p.name, p.color);
  renderPresence(peers, ME, el);

  const tick = () => {
    if (!peers.has(id)) return;
    p.focus = pick(["library", "studio", "compare", "cost", "keys", null]);
    p.lastSeen = Date.now();
    if (Math.random() < 0.4) {
      const msgs = [
        "profiled Claude on email task",
        "compared latency across 4 providers",
        "switched router to cost mode",
        "exported a cold-email prompt",
        "reset the cost ledger"
      ];
      log("info", pick(msgs), "collab", p.name, p.color);
    }
    renderPresence(peers, ME, el);
    setTimeout(tick, 2600 + Math.random() * 4000);
  };
  setTimeout(tick, 1200);
});

/* ---------- Focus tracking ---------- */
document.addEventListener("focusin", e => {
  const panel = e.target.closest("[data-panel]");
  const key = panel ? panel.dataset.panel : null;
  if (key !== ME.focus) {
    ME.focus = key;
    postMessage(chan, { type: "presence", focus: ME.focus, activity: currentActivity(S, ME) }, ME);
    renderPresence(peers, ME, el);
  }
});

document.addEventListener("focusout", () => {
  setTimeout(() => {
    if (!document.activeElement || !document.activeElement.closest("[data-panel]")) {
      ME.focus = null;
      postMessage(chan, { type: "presence", focus: null, activity: currentActivity(S, ME) }, ME);
      renderPresence(peers, ME, el);
    }
  }, 60);
});

/* ---------- About modal ---------- */
function openAbout() { el.aboutModal.classList.add("open"); }
function closeAbout() { el.aboutModal.classList.remove("open"); }
el.btnAbout?.addEventListener("click", openAbout);
el.brandBtn?.addEventListener("click", openAbout);
el.aboutClose?.addEventListener("click", closeAbout);
el.aboutModal?.addEventListener("click", e => { if (e.target === el.aboutModal) closeAbout(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeAbout(); });
if (el.year) el.year.textContent = new Date().getFullYear();

/* ---------- Boot ---------- */
refreshBuiltPrompt();
renderAll();
