/* =========================================================================
   Application State
   ========================================================================= */

import { PROVIDER_IDS } from "../domain/models/Provider.js";
import { parseContract } from "../domain/contracts/parser.js";
import { createCostLedger } from "../domain/services/CostService.js";
import { loadAllKeys } from "../infrastructure/storage/SecureKeyStore.js";

export const DEFAULT_CONTRACT = `contract PromptRequest {
  task: enum(general, code, summarize, translate, creative, analyze) = general
  prompt: string @min(1) @max(8000)
  max_tokens: int = 512 @range(1,4096)
  temperature: float = 0.7 @range(0.0,2.0)
  top_p: float? @range(0.0,1.0)
  system: string? @max(2000)
}`;

export function createAppState() {
  const S = {
    selectedCategoryId: null,
    libraryFilter: null,
    selectedTemplateId: null,
    contractSrc: DEFAULT_CONTRACT,
    fieldValues: {},
    builtPrompt: "",
    naivePrompt: "",

    enabledProviders: new Set(PROVIDER_IDS),
    providerResults: {},
    mockMode: true,

    routerMode: "balanced",
    lastRoutedTo: null,

    apiKeys: loadAllKeys(PROVIDER_IDS),
    ledger: createCostLedger(),

    running: false
  };

  for (const id of PROVIDER_IDS) {
    S.providerResults[id] = { status: "idle", text: "" };
  }

  const contract = parseContract(S.contractSrc);

  return { S, contract };
}
