import type { Key } from '@/shared/lib/i18n';

/**
 * The two shapes the same programme can take.
 *
 * Decided from what the user said about their running, never offered as a
 * choice — see `plan-summary.ts`. `weeks` only picks how the opening blocks
 * are laid out (`planLength`): the plan itself has no end, so no screen names
 * a length, and nothing here is copy except the name, which is a catalogue
 * key.
 */
export type TrainingPlan = {
  /** How the opening blocks are paced: 6 for somebody already running, 12 for
   * somebody starting out. Internal; also the `plan_weeks` analytics value. */
  weeks: number;
  /** The plan's name, set large on the plan screen. */
  wordmark: Key;
};

export const PLANS = [
  { weeks: 6, wordmark: 'onboarding.plan.wordmarkMomentum' },
  { weeks: 12, wordmark: 'onboarding.plan.wordmarkFoundations' },
] as const satisfies readonly TrainingPlan[];

/**
 * Which one this person gets.
 *
 * Read off the answer the user already gave about themselves rather than
 * defaulting to one: the flow has just spent fifteen screens earning the right
 * to make an actual decision.
 */
export function recommendedIndex(runner: string | null): number {
  return runner === 'regular' || runner === 'racing' || runner === 'serious' ? 0 : 1;
}
