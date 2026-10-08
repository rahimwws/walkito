/**
 * From the flow's answers to the plan the user was promised.
 *
 * Pure, and kept out of `steps.ts` for the reason `answers.ts` gives: the step
 * table imports icon components and cannot be loaded under `bun test`, and these
 * are the rules that decide what plan someone actually gets.
 */

import type { Intake } from '@/entities/profile';
import { EQUIPMENT, type DaysPerWeek, type PlanLength, type PlanSettings, type ProgramFocus, type SessionMinutes } from '@/entities/program';

import {
  durationOf,
  footTypeFor,
  habitOf,
  morningPainOf,
  recentStart,
  roleOf,
  safetyPlan,
  sportFor,
} from './journey';
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

function strings(answers: Answers, key: string): string[] {
  const value = answers[key];
  return Array.isArray(value) ? value.filter((v): v is string => typeof v === 'string') : [];
}

/** The 30-second check's answers, when it ran. */
export type MiniTestAnswers = {
  arch: 'yes' | 'no' | 'unsure' | null;
  balanceLeft: number | null;
  balanceRight: number | null;
};

export function intakeFrom(
  answers: Answers,
  miniTest: MiniTestAnswers | null = null,
  now: number = Date.now(),
): Intake {
  const side = first(answers, 'side');
  const safety = strings(answers, 'safety');
  return {
    // The pain step stores leg zones; the plan speaks in complaints. Grouped
    // here so `focusFor` and everything reading the saved intake see "heel",
    // "calf", never "soleus" or "tib_ant".
    pain: painAreasFor(answers.pain),
    side: side === 'left' || side === 'right' || side === 'both' ? side : null,
    sport: sportFor(answers),
    runner: first(answers, 'runner'),
    goal: first(answers, 'goal'),
    // No longer asked: weight and shoe size bought nothing the user could see,
    // and the challenge repeated the goal. Kept in the type for old intakes.
    challenge: null,
    load: first(answers, 'load'),
    sessionsPerWeek: null,
    sex: first(answers, 'sex'),
    age: measured(answers, 'age', 'years'),
    weightKg: null,
    shoe: null,
    // Asked after the purchase now, and written there.
    watch: null,
    role: roleOf(answers),
    painDuration: durationOf(answers),
    morningPain: morningPainOf(answers),
    safety,
    tried: strings(answers, 'tried'),
    habit: habitOf(answers),
    miniTest,
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
export function startingPlan(intake: Intake, answers: Answers = {}): StartingPlan {
  const plan = PLANS[recommendedIndex(intake.runner)];
  // Also lighter for a pain only weeks old, which is the irritable kind, and
  // for a week one that starts seated after the safety check.
  const gentle =
    intake.runner === 'new' ||
    (intake.age != null && intake.age >= EASY_START_AGE) ||
    recentStart(answers) ||
    safetyPlan(answers).seated;
  return {
    planLength: plan.weeks >= 12 ? 84 : 42,
    progressionOffset: gentle ? -1 : 0,
    focus: focusFor(intake.pain),
  };
}

const DAYS: Readonly<Record<string, DaysPerWeek>> = { days3: 3, days5: 5, days7: 7 };
const MINUTES: Readonly<Record<string, SessionMinutes>> = { min3: 3, min5: 5, min10: 10 };

/**
 * The plan settings onboarding asked for: days a week, minutes a session, what
 * is at home, and when to be reminded. Only what was answered — a question
 * stepped over leaves the default alone.
 */
export function planSettingsFrom(
  answers: Answers,
  reminderMinutes: number | null,
  miniTest: MiniTestAnswers | null = null,
): Partial<PlanSettings> {
  const out: Partial<PlanSettings> = {};
  if (safetyPlan(answers).seated) out.seatedStart = true;
  const foot = footTypeFor(miniTest?.arch ?? null);
  if (foot !== 'unknown') out.footType = foot;
  const days = DAYS[first(answers, 'planDays') ?? ''];
  if (days != null) out.daysPerWeek = days;
  const minutes = MINUTES[first(answers, 'planMinutes') ?? ''];
  if (minutes != null) out.defaultMinutes = minutes;
  const have = answers.equipment;
  if (Array.isArray(have) && have.length > 0) {
    out.equipmentMissing = EQUIPMENT.filter((item) => !have.includes(item));
  }
  if (reminderMinutes != null) out.reminderMinutes = reminderMinutes;
  return out;
}
