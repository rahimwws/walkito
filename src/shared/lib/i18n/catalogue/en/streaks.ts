/** The streak sheet: the big number, the week, the tiles and the milestone ladder. Filled per domain; see
 * `./core.ts` for the rules.
 *
 * Showing up and runs only. Nothing here mentions a pain figure or a test, and
 * no line counts a day that was missed: a day gone by with nothing on it is
 * read out as its name alone. */

import type { SourceEntry } from '../entry';

export const STREAKS_EN = {
  // ── The run ──────────────────────────────────────────────────────────────
  /** Under the big number, and the whole hero read aloud. */
  'streakSheet.inARow': { one: '{count} day in a row', other: '{count} days in a row' },

  // ── The tiles ────────────────────────────────────────────────────────────
  // Three share a phone's width, about 86pt each: keep the headers short.
  'streakSheet.current': 'Current streak',
  /** Every day that counted since the plan began. Never goes down. */
  'streakSheet.showedUp': 'Showed up',
  'streakSheet.longest': 'Longest streak',
  'streakSheet.currentA11y': { one: 'Current streak: {count} day', other: 'Current streak: {count} days' },
  'streakSheet.showedUpA11y': { one: 'Showed up on {count} day', other: 'Showed up on {count} days' },
  'streakSheet.longestA11y': { one: 'Longest streak: {count} day', other: 'Longest streak: {count} days' },

  // ── What counts ──────────────────────────────────────────────────────────
  'streakSheet.allCount': 'Rest days, rough days and 2-minute days all count.',

  // ── The week, read aloud ─────────────────────────────────────────────────
  // `{day}` is the weekday spelled out by the platform, in the app's language.
  'streakSheet.dayDone': '{day}, showed up',
  'streakSheet.dayRest': '{day}, rest day',
  /** Today, while nothing has counted yet. */
  'streakSheet.dayToday': 'Today, {day}',
  'streakSheet.dayTodayDone': 'Today, {day}, showed up',
  'streakSheet.dayAhead': '{day}, still to come',

  // ── The milestone ladder, read aloud ─────────────────────────────────────
  'streakSheet.milestoneReached': {
    one: '{count} day in a row, reached',
    other: '{count} days in a row, reached',
  },
  'streakSheet.milestoneAhead': {
    one: '{count} day in a row, still ahead',
    other: '{count} days in a row, still ahead',
  },
} as const satisfies Record<string, SourceEntry>;
