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
  'progress.scoreNote': 'Keep it up - this week works on {goal}.',
  'progress.scoreNoteNoGoal': 'Keep it up - the plan adjusts as you go.',

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
  'progress.currentStreak': 'Current streak',
  'progress.longestStreak': 'Longest streak',

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
  'progress.strengthTitle': 'Strength and balance',
  'progress.strengthEmpty': 'Your first test sets these numbers.',
  'progress.strengthSince': 'Your first test against your latest.',
  'progress.strengthOnce': 'From your first test. The next one shows the change.',
  'progress.calfChange': 'Calf raises {from} → {to}',
  'progress.balanceChange': 'Balance {from}s → {to}s',
  'progress.archChange': 'Arch hold {from}s → {to}s',
  'progress.calfOnce': 'Calf raises {value}',
  'progress.balanceOnce': 'Balance {value}s',
  'progress.archOnce': 'Arch hold {value}s',
  'progress.painTitle': 'Morning pain',
  'progress.painNow': '{value} / 10 this week',
  'progress.painEmpty': 'A few mornings of check-ins draw the line.',
  'progress.painCaption': 'Day-to-day ups and downs are normal - watch the line.',
  'progress.goalsTitle': 'Goals',
  'progress.goalsEmpty': 'Your goals appear after your first test.',
  'progress.goalReached': 'Reached',
  'progress.streakCaption': 'Rest days, rough days and 2-minute days all count.',

  // ── The redesigned screen ────────────────────────────────────────────────
  // Morning pain card. `{delta}` arrives signed and formatted ("-1.2"), so the
  // sentence only places it.
  'progress.avgWeek': 'Average over the last 7 days',
  'progress.avgMonth': 'Average over the last month',
  'progress.avgQuarter': 'Average over the last 3 months',
  'progress.painOutOf': '/10',
  'progress.deltaWeek': '{delta} vs the week before',
  'progress.deltaMonth': '{delta} vs the month before',
  'progress.deltaQuarter': '{delta} vs the 3 months before',
  'progress.deltaSame': 'Same as before',
  /** The dashed line across the chart: where the first week sat. */
  'progress.startLine': 'Start {value}',
  /** A weekly bar's dates, both already formatted. */
  'progress.tooltipRange': '{from} - {to}',
  'progress.painChartA11y': 'Morning pain chart, average {value} out of 10',
  'progress.painBarA11y': '{date}: {value} out of 10',
  'progress.painBarEmptyA11y': '{date}: no check-in',
  'progress.painNoneInRange': 'No morning check-ins in this stretch yet.',
  /** The empty chart: how many mornings until it is drawn. */
  'progress.painToGo': {
    one: '{count} more morning check-in and your chart starts.',
    other: '{count} more morning check-ins and your chart starts.',
  },
  'progress.painToGoSteps': '{done} of {total} check-ins',

  // Strength tests card. The value and its unit are set apart, so the unit is
  // its own entry; `{delta}` carries its sign.
  'progress.calfName': 'Calf raises',
  'progress.balanceName': 'Balance',
  'progress.archName': 'Arch hold',
  'progress.repsUnit': { one: 'rep', other: 'reps' },
  'progress.secondsUnit': 's',
  'progress.repsDelta': { one: '{delta} rep', other: '{delta} reps' },
  'progress.secondsDelta': '{delta} s',
  'progress.baseline': 'Baseline',
  'progress.noChange': 'No change',
  'progress.strengthNoTest': 'Not tested yet',
  'progress.strengthDeltaCaption': 'Changes are counted from your first test.',
  'progress.nextTest': 'Next test on {date}',
  'progress.nextTestToday': 'Your next test is due today',
  'progress.strengthRowA11y': '{name}: {value} {unit}, {change}',

  // Goals card.
  'progress.goalPercent': '{pct}%',
  'progress.goalA11y': '{goal}, {pct}% there',

  // Consistency card.
  'progress.consistencyTitle': 'Consistency',
  'progress.last4Weeks': 'Last 4 weeks',
  'progress.heatDone': 'Showed up',
  'progress.heatRest': 'Rest day',
  'progress.heatA11y': '{done} of {total} days in the last 4 weeks',
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
