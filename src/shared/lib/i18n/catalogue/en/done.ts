/** The session-complete moment: "nice work", the streak pill and the tiles. Filled per domain; see
 * `./core.ts` for the rules.
 *
 * The title ("Nice work.") and the chip ("{count} days in a row") are
 * `widgets.sessionDoneTitle` and `widgets.sessionDoneStreak`, already in every
 * language; this file has the tiles under them. Showing up and effort only:
 * nothing here may ever carry a pain figure. */

import type { SourceEntry } from '../entry';

export const DONE_EN = {
  // ── The three tiles: their headers ───────────────────────────────────────
  'sessionDone.tileMoves': 'Moves',
  /** Every day of care so far: a check-in, a session, a rest day the plan gave. */
  'sessionDone.tileShowedUp': 'Showed up',
  /** The session tile's figure, short enough for a third of a phone. */
  'sessionDone.minutes': '{count} min',

  // ── Each tile read aloud as one ──────────────────────────────────────────
  'sessionDone.tileSessionA11y': { one: 'Session, {count} minute', other: 'Session, {count} minutes' },
  'sessionDone.tileMovesA11y': { one: '{count} move done', other: '{count} moves done' },
  'sessionDone.tileShowedUpA11y': { one: 'Showed up on {count} day', other: 'Showed up on {count} days' },

  // ── Redesign v1.1: the Done screen ──
  'sessionDone.dayDone': 'Day {day} done',
  'sessionDone.title': 'Done',
  'sessionDone.tileMinutes': 'Minutes',
  'sessionDone.tileWeek': 'Days this week',
  'sessionDone.tileWeekA11y': { one: '{count} day this week', other: '{count} days this week' },
  'sessionDone.feel.question': 'How did that feel?',
  'sessionDone.feel.easy': 'Easy',
  'sessionDone.feel.right': 'Just right',
  'sessionDone.feel.hard': 'Hard',
  'sessionDone.feel.hurt': 'It hurt',
  'sessionDone.easier': 'Make tomorrow easier',
  'sessionDone.easierDone': 'Tomorrow starts one step back.',
  'sessionDone.tomorrowAt': 'Tomorrow at {time}',
  'sessionDone.nextOn': 'Next session on {day}',

  // ── Redesign v1.1 (Bend): the Done screen's title, sets tile and day path ──
  'sessionDone.complete': 'Session complete',
  'sessionDone.tileSets': 'Sets',
  'sessionDone.tileSetsA11y': { one: '{count} set done', other: '{count} sets done' },
  /** A node of the day path: the plan day by its number. */
  'sessionDone.path.day': 'Day {day}',
  'sessionDone.path.completed': 'Completed',
  // ── Redesign v1.1 (BitePal): the month card and what comes next ──
  'sessionDone.month.title': 'Days done this month',
  'sessionDone.month.unit': { one: 'day', other: 'days' },
  'sessionDone.month.a11y': { one: '{count} day done this month', other: '{count} days done this month' },
  'sessionDone.nextLabel': 'Up next',
} as const satisfies Record<string, SourceEntry>;
