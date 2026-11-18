import type { AccentName } from '@/shared/config';
import type { FluentName } from '@/shared/ui/fluent-icon';

/**
 * The story the onboarding tells, taken from the web funnel (funnel/src/flow.ts):
 * who the plan is for, how her feet get in her way, and what she wants back.
 *
 * Pure, so it can be tested under `bun test`: what is kept on the phone is
 * `story-store.ts`. The paywall reads it too (her plan's name over the plans,
 * her goals as chips), which is why it lives below both pages.
 */

/** Who the plan is for, from her usual day: the web funnel's three kinds. */
export type PlanKind = 'desk' | 'runner' | 'feet';

/**
 * From who she said she is (`role`) and, for everyday walking, her usual day
 * (`day`). Running (alone or with a job on her feet) is a runner; a job on her
 * feet, or a day spent mostly on them, is on her feet; anyone else sits.
 */
export function kindFrom(role: string | null, day: string | null): PlanKind {
  if (role === 'running' || role === 'both') return 'runner';
  if (role === 'feet' || day === 'feet') return 'feet';
  return 'desk';
}

export type LifeOption = {
  /** How her feet get in her way: the answer to "Foot pain changes your whole day". */
  value: string;
  /** Its mirror: the goal she can pick back. Both are stable keys. */
  goal: string;
  emoji: FluentName;
  accent: AccentName;
};

/** The six ways her feet get in her way, each with the goal it mirrors. */
export const LIFE: readonly LifeOption[] = [
  { value: 'mornings', goal: 'mornings', emoji: 'sunrise', accent: 'orange' },
  { value: 'walks', goal: 'walk', emoji: 'leg', accent: 'teal' },
  { value: 'shift', goal: 'shift', emoji: 'briefcase', accent: 'blue' },
  { value: 'runs', goal: 'runs', emoji: 'runningShoe', accent: 'amber' },
  { value: 'shoes', goal: 'shoes', emoji: 'sandal', accent: 'violet' },
  { value: 'evening', goal: 'evenings', emoji: 'moon', accent: 'violet' },
];

/** A runner sees running first. */
export function lifeFor(kind: PlanKind): readonly LifeOption[] {
  if (kind !== 'runner') return LIFE;
  return [...LIFE.filter((o) => o.value === 'runs'), ...LIFE.filter((o) => o.value !== 'runs')];
}

/** Her goals before she picks: the mirror of what she said, or simply walking. */
export function suggestedGoals(life: readonly string[]): string[] {
  const mirror = LIFE.filter((o) => life.includes(o.value)).map((o) => o.goal);
  return mirror.length > 0 ? mirror : ['walk'];
}

/** Her goals in the order they are listed, unknown values dropped. */
export function goalsInOrder(goals: readonly string[]): LifeOption[] {
  return LIFE.filter((o) => goals.includes(o.goal));
}

/** The goal a sentence names: the first she picked, in list order, else walking. */
export function leadGoal(goals: readonly string[]): string {
  return goalsInOrder(goals)[0]?.goal ?? 'walk';
}

/** The plan runs twelve weeks, as the web funnel and the app's plan say. */
export const PLAN_WEEKS = 12;
