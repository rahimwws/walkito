/**
 * The coach's own lines on a step and which lines may be counted.
 *
 * Pure, for the reason `answers.ts` gives: the step table loads
 * react-native, and the rules here are the ones a test has to walk.
 */

import type { AnalyticsEvents } from '@/shared/lib/analytics';

import type { Phrase } from './steps';

type Answers = Readonly<Record<string, unknown>>;

/** `steps.ts`'s `NAME_SLOT`, repeated: that file loads react-native. The
 * slot stays in the line for the page's `withName`, which drops it with its
 * comma for somebody who gave no name. */
const NAME_SLOT = { name: '{name}' } as const;

/**
 * The coach's own line on a step, under the question: a beat as a part of the flow
 * begins, the halfway line, and the plan ready. A closure
 * like the step table's `Phrase`, so each key keeps its own placeholders.
 * Resolve it with the page's `say`, so a missing name leaves no stray comma.
 *
 * Where the page has a line of its own for the answer (the `area_*` line on
 * the pain question), that line takes its place: the pain beat is for before
 * anything is marked, and is null after. On `building` the line is for once
 * the plan is ready; the step says it then.
 */
export function coachLine(stepKey: string, answers: Answers): Phrase | null {
  switch (stepKey) {
    case 'toe':
      return (t) => t('onboarding.coach.toeTry');
    case 'pain': {
      const pain = answers.pain;
      return Array.isArray(pain) && pain.length > 0 ? null : (t) => t('onboarding.coach.beatFeet');
    }
    case 'goal':
      return (t) => t('onboarding.coach.beatGoal');
    case 'midway':
      return (t) => t('onboarding.coach.midway', NAME_SLOT);
    case 'building':
      return (t) => t('onboarding.coach.planReady', NAME_SLOT);
    default:
      return null;
  }
}

// ── Analytics ───────────────────────────────────────────────────────────────

type ReactionId = AnalyticsEvents['onboarding_reaction_viewed']['reaction'];

/** The reactions whose keys say nothing about a body: the name, who they are,
 * the habit, the kit. */
const SHAREABLE = /^(name$|role_|habit_|equipment_)/;

/**
 * The id a reaction is counted under, or null when it must not be counted.
 *
 * A reaction's key names the answer that chose it: `area_heel` is where it
 * hurts, `duration_year` how long, `tried_physio` a treatment, `safety_seated`
 * a red flag. Counting those would be sending health data, so only the keys
 * that describe a person and not a body pass. On null, track nothing.
 */
export function reactionAnalyticsId(id: string): ReactionId | null {
  return SHAREABLE.test(id) ? (id as ReactionId) : null;
}
