/* =========================================================================
   Generate Prompt Use-Case
   ========================================================================= */

export function generatePrompt(category, values) {
  if (!category || typeof category.build !== "function") return "";
  try {
    return category.build(values);
  } catch (err) {
    return `[error building prompt: ${err.message}]`;
  }
}

export function generateNaivePrompt(category, values) {
  if (!category || typeof category.naive !== "function") return "";
  try {
    return category.naive(values);
  } catch (err) {
    return "";
  }
}
