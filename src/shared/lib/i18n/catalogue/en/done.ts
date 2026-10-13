/** The session-complete moment: the mascot, "nice work", the streak pill and the tiles. Filled per domain; see
 * `./core.ts` for the rules.
 *
 * The title ("Nice work.") and the chip ("{count} days in a row") are
 * `widgets.sessionDoneTitle` and `widgets.sessionDoneStreak`, already in every
 * language; this file has the tiles under them. Showing up and effort only:
 * nothing here may ever carry a pain figure. */

import type { SourceEntry } from '../entry';

export const DONE_EN = {
  // ── The three tiles: their headers ───────────────────────────────────────
  'sessionDone.tileSession': 'Session',
  'sessionDone.tileMoves': 'Moves',
  /** Every day of care so far: a check-in, a session, a rest day the plan gave. */
  'sessionDone.tileShowedUp': 'Showed up',
  /** The session tile's figure, short enough for a third of a phone. */
  'sessionDone.minutes': '{count} min',

  // ── Each tile read aloud as one ──────────────────────────────────────────
  'sessionDone.tileSessionA11y': { one: 'Session, {count} minute', other: 'Session, {count} minutes' },
  'sessionDone.tileMovesA11y': { one: '{count} move done', other: '{count} moves done' },
  'sessionDone.tileShowedUpA11y': { one: 'Showed up on {count} day', other: 'Showed up on {count} days' },
} as const satisfies Record<string, SourceEntry>;
