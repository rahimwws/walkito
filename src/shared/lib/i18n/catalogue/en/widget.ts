/** Home-screen widget strings. Filled per domain; see `./core.ts` for the rules.
 *
 * Short on purpose: the small widget is about 155 points wide and every line
 * here has to fit it at the default text size, next to a mascot. */

import type { SourceEntry } from '../entry';

export const WIDGET_EN = {
  // ── Small: the check-in ──────────────────────────────────────────────────
  'widget.question': 'How’s the foot today?',
  /** Before noon: the first steps out of bed. Short, to fit the small widget. */
  'widget.questionMorning': 'First steps this morning?',
  'widget.hurts': 'It hurts',
  'widget.fine': 'No pain',
  'widget.ackNoPain': 'Logged: no pain today.',
  'widget.tapToCheckIn': 'Tap to check in',

  // ── Medium: the goal and the week ────────────────────────────────────────
  'widget.goalTitle': 'Today’s goal',
  'widget.goalValue': '{done}/{total}',
  'widget.goalUnknown': '-',
  'widget.goalRest': 'Rest',
  'widget.goalTest': 'Retest',
  'widget.checkin': 'Check-in',
  // ── Live Activity: an onboarding left half-way ───────────────────────────
  /** The Lock Screen line while the onboarding is unfinished. `count` is the
   * minutes left, rounded up from the screens still to come. */
  'widget.resumeTitle': { one: '{count} minute from your plan', other: '{count} minutes from your plan' },
  'widget.resumeReady': 'Your plan is ready',
  'widget.resumeCta': 'Pick up here',
  'widget.resumeReadyCta': 'See my plan',
} as const satisfies Record<string, SourceEntry>;
