/**
 * From the flow's answers to the plan the user was promised.
 *
 * Pure, and kept out of `steps.ts` for the reason `answers.ts` gives: the step
 * table imports icon components and cannot be loaded under `bun test`, and these
 * are the rules that decide what plan someone actually gets.
 */

import type { Intake } from '@/entities/profile';
import type { PlanLength, ProgramFocus } from '@/entities/program';

import { painAreasFor } from './pain-areas';
import { PLANS, recommendedIndex } from './plans';

type Answers = Readonly<Record<string, unknown>>;

function first(answers: Answers, key: string): string | null {
  const value = answers[key];
  if (Array.isArray(value)) return typeof value[0] === 'string' ? value[0] : null;
  return typeof value === 'string' ? value : null;
}

/** A measure step's number, or null when it is missing or nonsense. */
function measured(answers: Answers, key: string, field: string): number | null {
  const value = answers[key] as { unit?: string; fields?: Record<string, string> } | undefined;
  const raw = value?.fields?.[field];
  const n = raw == null ? NaN : Number.parseFloat(raw);
  return Number.isFinite(n) && n > 0 ? n : null;
}

function weightKg(answers: Answers): number | null {
  const body = answers.body as { unit?: string } | undefined;
  if (body?.unit === 'lb') {
    const lb = measured(answers, 'body', 'lb');
    return lb == null ? null : Math.round(lb * 0.453592);
  }
  return measured(answers, 'body', 'kg');
}

export function intakeFrom(
  answers: Answers,
  shoe: { size: number; unit: 'eu' | 'us' } | null,
  now: number = Date.now(),
): Intake {
  const side = first(answers, 'side');
  return {
    // The pain step stores leg zones; the plan speaks in complaints. Grouped
    // here so `focusFor` and everything reading the saved intake see "heel",
    // "calf", never "soleus" or "tib_ant".
    pain: painAreasFor(answers.pain),
    side: side === 'left' || side === 'right' || side === 'both' ? side : null,
    sport: first(answers, 'sport'),
    runner: first(answers, 'runner'),
    goal: first(answers, 'goal'),
    challenge: first(answers, 'challenge'),
    load: first(answers, 'load'),
    sessionsPerWeek: first(answers, 'sessionsPerWeek'),
    sex: first(answers, 'sex'),
    age: measured(answers, 'age', 'years'),
    weightKg: weightKg(answers),
    shoe,
    watch: first(answers, 'watch'),
    completedAt: now,
  };
}

/** Starting a step lighter than the plan as written. */
export const EASY_START_AGE = 55;

/**
 * Where the plan leans, from where it hurts.
 *
 * Heel and foot win whenever they are picked: that is the complaint this plan
 * was written for, and someone with a sore heel *and* a sore knee is best served
 * by the heel plan. Only when neither is picked does the calf or the hip take
 * the lead.
 */
export function focusFor(pain: readonly string[]): ProgramFocus {
  if (pain.includes('heel') || pain.includes('foot')) return 'foot';
  if (pain.includes('achilles') || pain.includes('calf') || pain.includes('shin')) return 'calf';
  if (pain.includes('knee') || pain.includes('hip')) return 'hip';
  return 'foot';
}

export type StartingPlan = {
  planLength: PlanLength;
  progressionOffset: number;
  focus: ProgramFocus;
};

/**
 * The plan the plan screen showed, made real.
 *
 * Length from the same `recommendedIndex` the summary screen uses — the two
 * must never disagree, since one is a promise and the other is what is kept.
 *
 * One step lighter for a new runner or anyone 55 and over. Not a judgement: the
 * offset clears itself after two calm mornings (`settleOffset`), so the cost of
 * starting gently is a couple of days and the cost of starting too hard is a
 * flare in week one.
 */
export function startingPlan(intake: Intake): StartingPlan {
  const plan = PLANS[recommendedIndex(intake.runner)];
  const gentle = intake.runner === 'new' || (intake.age != null && intake.age >= EASY_START_AGE);
  return {
    planLength: plan.weeks >= 12 ? 84 : 42,
    progressionOffset: gentle ? -1 : 0,
    focus: focusFor(intake.pain),
  };
}
