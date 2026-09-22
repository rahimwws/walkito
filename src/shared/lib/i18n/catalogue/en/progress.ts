/** progress strings. Filled per domain; see `../en/core.ts` for the rules. */

import type { SourceEntry } from '../entry';

export const PROGRESS_EN = {
  // ── Range control ────────────────────────────────────────────────────────
  // The three segments across the top. Bare spans, read as a set — which is
  // why they are not the same keys as the window phrases below.
  'progress.range7Days': '7 days',
  'progress.rangeMonth': '1 month',
  'progress.range3Months': '3 months',

  // ── The window, as it appears inside the trend sentence ───────────────────
  // English reuses the segment's own words; Russian cannot. "за последние 7
  // дней" but "за последний месяц" — the qualifier agrees with the noun, so
  // each language holds the finished phrase and the sentence contributes only
  // the preposition in front of it.
  'progress.window7Days': '7 days',
  'progress.windowMonth': 'month',
  'progress.window3Months': '3 months',

  // ── Score card ───────────────────────────────────────────────────────────
  'progress.score': 'Score',
  'progress.scoreA11y': '{score} out of 100',
  'progress.scoreTitle': 'You’re doing great!',
  'progress.scoreStreak': { one: '{count} day streak!', other: '{count} days streak!' },
  /** `{block}` is the block's name, which `blockName()` in `entities/program`
   * still returns in English only. See the report note. */
  'progress.scoreNote': 'Keep it up to finish the {block} block.',

  // ── Performance card ─────────────────────────────────────────────────────
  'progress.performance': 'Performance',
  // Two whole readings rather than one plus an appended band, so a language
  // that puts the word before the figures can do so.
  'progress.performanceA11y': '{value} of {max}',
  'progress.performanceA11yBand': '{value} of {max}, {band}',
  'progress.bandVeryLow': 'Very Low',
  'progress.bandLow': 'Low',
  'progress.bandMedium': 'Medium',
  'progress.bandHigh': 'High',

  // ── Streak tiles ─────────────────────────────────────────────────────────
  // The counts themselves come from `streak.dayCount` in core, so the two
  // tiles and the streak sheet can never write a day differently.
  'progress.currentStreak': 'Current Streak',
  'progress.longestStreak': 'Longest Streak',

  // ── The path ─────────────────────────────────────────────────────────────
  'progress.retestToday': 'Retest today',
  'progress.todayMinutes': 'Today · {minutes} min',
  'progress.retest': 'Retest',
  'progress.blockDivider': 'Block {block} · {name}',
  'progress.weekDivider': 'Week {week}',

  // ── Pain legend ──────────────────────────────────────────────────────────
  'progress.painEasy': 'Easy',
  'progress.painSore': 'Sore',
  'progress.painSharp': 'Sharp',
  'progress.painLegend': 'The ring around a day shows the pain you logged that day.',
  'progress.painLegendDismiss': 'Dismiss',
} as const satisfies Record<string, SourceEntry>;

/**
 * The brief sentences at the top of the screen, as ordered segments.
 *
 * Separate from `PROGRESS_EN` because a `SourceEntry` is a string or a plural
 * of strings, and these are arrays the renderer lays out in order. They are
 * assembled and type-checked in `pages/progress/model/brief-copy.ts`, against
 * `BriefSegment` from `@/shared/ui/daily-brief` — the type is *not* imported
 * here on purpose, so the catalogue keeps no path into a module that pulls in
 * React Native. `parity.test.ts` runs under bun, which cannot parse it.
 *
 * Array order is word order: `DailyBrief` renders the segments as sibling
 * `<Text>` nodes with no reordering layer. A translator moves the array.
 *
 * `{from}`, `{to}` and `{logged}` are bare numerals; `{window}` and `{days}`
 * are finished noun phrases, already agreed by the catalogue entry that
 * produced them.
 */
export const PROGRESS_BRIEF_EN = {
  /** Pain fell over the window. The arrow and the colour both come off that
   * comparison, so an improving month can never be painted red. */
  trendBetter: [
    { k: 'frame', text: 'over the last' },
    { k: 'metric', icon: 'window', text: '{window}' },
    { k: 'frame', text: 'your morning pain went' },
    { k: 'metric', icon: 'down', text: 'from {from} to {to}', tail: '.', tone: 'good' },
  ],
  trendWorse: [
    { k: 'frame', text: 'over the last' },
    { k: 'metric', icon: 'window', text: '{window}' },
    { k: 'frame', text: 'your morning pain went' },
    { k: 'metric', icon: 'up', text: 'from {from} to {to}', tail: '.', tone: 'warn' },
  ],
  /** The 7-day tab counts; it never trends. */
  week: [
    { k: 'metric', icon: 'window', text: '{logged} of 7 days' },
    { k: 'frame', text: 'logged this week.' },
  ],
  /** Not enough history to compare two halves of the window honestly. */
  tooEarly: [
    { k: 'metric', icon: 'window', text: '{days} in', tail: '.' },
    { k: 'frame', text: 'Too early to call a trend.' },
  ],
} as const;
