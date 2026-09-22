import type { Language } from '@/shared/lib/i18n';
import type { BriefSegment } from '@/shared/ui/daily-brief';

import { PROGRESS_BRIEF_EN } from '@/shared/lib/i18n/catalogue/en/progress';
import { PROGRESS_BRIEF_ES } from '@/shared/lib/i18n/catalogue/es/progress';
import { PROGRESS_BRIEF_RU } from '@/shared/lib/i18n/catalogue/ru/progress';

/**
 * The screen's four brief sentences, per language, assembled into one table.
 *
 * **Why the segments are not ordinary catalogue entries.** A `SourceEntry` is a
 * string or a plural of strings, and `t()` returns a string. `DailyBrief` does
 * not take a string — it takes an ordered list of tokens it lays out as sibling
 * `<Text>` nodes, some grey, some emphasised, some carrying a glyph. The unit a
 * translator has to be able to rearrange is therefore the *array*, not the
 * words inside one entry, so each language holds its own `BriefSegment[]`
 * alongside its `progress` strings and this file is where the three meet.
 *
 * **Why the imports reach past the barrel.** `@/shared/lib/i18n` exports `t()`
 * and the language store, not the per-language domain objects, and the barrel
 * belongs to the i18n layer rather than to this page. Until it re-exports these
 * three, the deep paths are confined to this file — one place to fix, and the
 * page above never sees them.
 *
 * The shape is checked here rather than in the catalogue: annotating the table
 * against `BriefSegment` is what rejects a mistyped `icon` or an invented `k`,
 * and it does so without the catalogue importing from `@/shared/ui`, which
 * would put React Native in the module graph that `parity.test.ts` loads under
 * bun.
 */
export type ProgressBriefCopy = {
  /** Pain fell across the window. */
  trendBetter: readonly BriefSegment[];
  trendWorse: readonly BriefSegment[];
  /** The 7-day tab, which counts rather than trends. */
  week: readonly BriefSegment[];
  /** Too little history to compare two halves of the window. */
  tooEarly: readonly BriefSegment[];
};

const BRIEFS: Record<Language, ProgressBriefCopy> = {
  en: PROGRESS_BRIEF_EN,
  ru: PROGRESS_BRIEF_RU,
  es: PROGRESS_BRIEF_ES,
};

export function progressBrief(language: Language): ProgressBriefCopy {
  return BRIEFS[language];
}
