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
  'streakSheet.allCount': 'Rough days and 2-minute days all count.',

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
  // ── Two ways a day counts ────────────────────────────────────────────────
  'streakSheet.levelsTitle': 'Two ways a day counts',
  /** The shoe with its flame, on the week strip. */
  'streakSheet.levelFull': 'A session or a Library routine lights the shoe.',
  /** The flame alone, on the week strip. Never lesser: it counts the same. */
  'streakSheet.levelCheckin': 'A check-in alone lights the flame. It keeps your streak just the same.',
  'streakSheet.dayCheckin': '{day}, checked in',
  'streakSheet.dayTodayCheckin': 'Today, {day}, checked in',

  // ── Freezes ──────────────────────────────────────────────────────────────
  /** Also the header chip's spoken label. */
  'streakSheet.freezes': { one: '{count} freeze banked', other: '{count} freezes banked' },
  'streakSheet.freezesRule': 'You earn one each week, two at most. A day with nothing on it uses one, and your streak holds.',
  /** Only when one was spent in the last seven days. Never says a day was missed. */
  'streakSheet.freezeSpent': 'A freeze covered a quiet day this week, so your streak kept going.',

  // ── The weekly goal, under the week on Home ──────────────────────────────
  // `{count}` is the week's planned sessions, `{done}` those done. A count,
  // never a verdict: a week that ends short just shows it.
  'weekGoal.progress': { one: '{done} of {count} session this week', other: '{done} of {count} sessions this week' },
  'weekGoal.inARow': { one: '{count} week in a row', other: '{count} weeks in a row' },

  // ── Walkito's accessories, on the milestone sheet ────────────────────────
  // By longest streak: 7 days, 14, 30 and 100. Shown beside him on Home.
  'accessory.shoe': 'From today, Walkito wears a shoe badge.',
  'accessory.medal': 'From today, Walkito wears a medal.',
  'accessory.trophy': 'From today, Walkito keeps a trophy beside him.',
  'accessory.crown': 'From today, Walkito wears a crown.',
} as const satisfies Record<string, SourceEntry>;
