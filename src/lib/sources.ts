import { sourceGroups, type Source } from "../content/sources";

export const sourceByNumber = new Map<number, Source>(sourceGroups.flatMap((g) => g.items.map((item) => [item.n, item] as const)));

/** Plain-text version of a reference (drops the *italic* markers). */
export function plainReference(source: Source) {
  return source.text.replace(/\*/g, "");
}
