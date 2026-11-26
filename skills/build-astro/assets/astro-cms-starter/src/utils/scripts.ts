import { parseFragment, serialize } from "parse5";

/** Aceita apenas scripts, comentários e espaços. */
export function normalizeScriptSnippet(code: string): string {
  const errors: string[] = [];
  const fragment = parseFragment(code, {
    onParseError: (error) => errors.push(error.code),
  });
  let count = 0;

  for (const node of fragment.childNodes) {
    if (node.nodeName === "#comment") continue;
    if ("value" in node && !node.value.trim()) continue;
    if ("tagName" in node && node.tagName === "script") {
      count++;
      continue;
    }
    throw new Error("Use apenas tags <script>, sem <noscript>, imagens ou outro HTML.");
  }

  if (errors.length > 0 || count === 0) {
    throw new Error("Informe um snippet com tags <script> completas e HTML válido.");
  }

  return serialize(fragment);
}
