/**
 * The after-session check-in, as the plan stores it and as PostHog reads it.
 *
 * The sheet asks four things and the plan needs three: "About right" and
 * "Hard" both keep the level (`ok`), and only "It hurt" steps it back
 * (`hard`). That is the plan's `feedback`, and `session_feedback` keeps
 * sending it as it always has, so its charts do not split.
 *
 * Beside it goes `feel`, the answer as it was given, so easy, right and hard
 * each arrive as their own value instead of "About right" and "Hard" both
 * reading `ok`.
 */

import type { SessionFeel } from '@/shared/lib/analytics';

/** The four answers, in the order they are read: from not enough to too much. */
export type Feel = SessionFeel;

/** What the plan stores: the dose's reading of the answer. */
export type Feedback = 'easy' | 'ok' | 'hard';

/**
 * Whether "It hurt" may be sent to PostHog as `feel: 'hurt'`.
 *
 * Off until Rahman decides. A pain answer is health data under the app's own
 * rule (`events.ts`: "an event that wants a number from the pain log is the
 * wrong event"; `exercise_cant_do` masks "it hurts" as `other` for the same
 * reason). Off, "It hurt" sends what it always sent, `{ feedback: 'hard' }`
 * and no `feel`. To send it, set this to `true`: the answer then also carries
 * `feel: 'hurt'`.
 */
export const SEND_HURT_TO_ANALYTICS = false;

/** "No" to two more good reps is the effort the work is meant to reach, so
 * "Hard" keeps the level as "About right" does. Only pain steps the plan
 * down. */
const FEEDBACK_OF: Readonly<Record<Feel, Feedback>> = {
  easy: 'easy',
  right: 'ok',
  hard: 'ok',
  hurt: 'hard',
};

export function feedbackOf(feel: Feel): Feedback {
  return FEEDBACK_OF[feel];
}

/** What PostHog may read of an answer: the plan's `feedback`, and the answer
 * itself unless it is "It hurt" and `sendHurt` is off. */
export function feelForAnalytics(feel: Feel, sendHurt: boolean = SEND_HURT_TO_ANALYTICS): Feel | null {
  if (feel === 'hurt' && !sendHurt) return null;
  return feel;
}
