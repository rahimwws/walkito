/** The weekly recap card on Progress. Filled per domain; see
 * `./core.ts` for the rules.
 *
 * Three counts of showing up, never a denominator: nothing here says how many
 * days were missed, and a rest day the plan set counts like any other. */

import type { SourceEntry } from '../entry';

export const RECAP_EN = {
  'weekRecap.eyebrow': 'This week',
  /** The days that counted: a check-in, a session or the plan's own rest. */
  'weekRecap.title': { one: '{count} day done this week', other: '{count} days done this week' },
  /** Nothing has counted yet this week. A welcome, never a zero. */
  'weekRecap.titleNone': 'Your week starts today',

  // ── The three tiles: headers, then read out whole ────────────────────────
  'weekRecap.showedUp': 'Showed up',
  'weekRecap.sessions': 'Sessions done',
  'weekRecap.checkins': 'Check-ins',
  'weekRecap.showedUpA11y': { one: 'Showed up {count} day', other: 'Showed up {count} days' },
  'weekRecap.sessionsA11y': { one: '{count} session done', other: '{count} sessions done' },
  'weekRecap.checkinsA11y': { one: '{count} check-in', other: '{count} check-ins' },
} as const satisfies Record<string, SourceEntry>;
