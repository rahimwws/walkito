import { CHAINS, PROGRESSING, planMeta, type ChainName } from './catalogue-meta';
import { doseFor, doseSeconds, scaleSets } from './dose';
import { allowed, atOrBelow, type EligibilityContext } from './eligibility';
import type { PlanDay, PlannedExercise, SessionMinutes } from './week';

/**
 * This morning's version of today's planned day — section 4.5.
 *
 * The week says what the day is for; this says how much of it the foot can take
 * today. First matching condition wins, then the step-back owed from a painful
 * session, then the user's own choice of minutes.
 */

export type TodayReason = 'flare' | 'spike' | 'heavy-day' | 'short-sleep' | null;

export type TodaySignals = {
  painToday: number | null;
  /** Mean of the seven mornings before today. */
  pain7Avg: number | null;
  stepsYesterday: number | null;
  /** 28-day average daily steps. */
  steps28Avg: number | null;
  /** Hours slept last night, when Health has it. */
  sleepHours: number | null;
  /** Sessions still owed a step back after in-session pain ≥ 6. */
  stepDownOwed: number;
  /** The user's pick on the today card; null keeps the plan's minutes. */
  minutesChoice: SessionMinutes | null;
  defaultMinutes: SessionMinutes;
};

export const FLARE_PAIN = 7;
export const SPIKE_OVER_AVERAGE = 3;
export const HEAVY_DAY_RATIO = 1.4;
export const SHORT_SLEEP_HOURS = 6;
export const FLARE_MINUTES = 3;
/** In-session pain at or above this ends the session and steps the next two back. */
export const IN_SESSION_STOP = 6;
export const STEP_DOWN_SESSIONS = 2;

/** Seated, fascia-free work for a flare day, when the plan's own day has too little of it. */
const FLARE_POOL = ['short_foot_seated', 'toe_spread', 'heel_raise_seated', 'fascia_stretch', 'big_toe_lift', 'sole_massage'];

export type AdjustedDay = PlanDay & { reason: TodayReason; steppedDown: boolean };

function stepDown(exercise: PlannedExercise, ctx: EligibilityContext, hasStep: boolean): PlannedExercise {
  const meta = planMeta(exercise.id);
  const chain = meta?.chain;
  if (chain != null && chain !== 'accessory' && (PROGRESSING as readonly string[]).includes(chain)) {
    const index = CHAINS[chain as ChainName].indexOf(exercise.id);
    const below = index > 0 ? atOrBelow(chain as ChainName, index - 1, ctx) : null;
    if (below != null) {
      const level = planMeta(below.id)?.level ?? 1;
      return { ...exercise, id: below.id, level, dose: doseFor(below.id, level, hasStep) };
    }
  }
  const level = Math.max(1, exercise.level - 1);
  return { ...exercise, level, dose: doseFor(exercise.id, level, hasStep) };
}

function dedupe(list: PlannedExercise[]): PlannedExercise[] {
  const out: PlannedExercise[] = [];
  for (const e of list) if (!out.some((o) => o.id === e.id)) out.push(e);
  return out;
}

export function adjustToday(day: PlanDay, signals: TodaySignals, ctx: EligibilityContext): AdjustedDay {
  const hasStep = !ctx.equipmentMissing.includes('step');
  if (day.type === 'rest' || day.type === 'test') {
    return { ...day, reason: null, steppedDown: false };
  }
  let exercises = day.exercises;
  let minutes = signals.minutesChoice ?? day.minutes;
  let type = day.type;
  let reason: TodayReason = null;
  let steppedDown = false;

  const pain = signals.painToday;
  const spike = pain != null && signals.pain7Avg != null && pain - signals.pain7Avg >= SPIKE_OVER_AVERAGE;
  const heavy =
    signals.stepsYesterday != null &&
    signals.steps28Avg != null &&
    signals.steps28Avg > 0 &&
    signals.stepsYesterday > HEAVY_DAY_RATIO * signals.steps28Avg;

  if (pain != null && pain >= FLARE_PAIN) {
    reason = 'flare';
    const safe = (e: PlannedExercise) => {
      const meta = planMeta(e.id);
      return meta != null && !meta.fascia && meta.position === 'seated';
    };
    exercises = exercises.filter(safe);
    for (const id of FLARE_POOL) {
      if (exercises.length >= 3) break;
      const meta = planMeta(id);
      if (meta == null || meta.fascia || !allowed(id, ctx)) continue;
      exercises = [...exercises, { id, level: 1, dose: doseFor(id, 1, hasStep), focus: false }];
    }
    // Keep the focus goal present if any seated exercise serves it.
    if (!exercises.some((e) => e.focus) && exercises.length > 0) exercises = [{ ...exercises[0], focus: true }, ...exercises.slice(1)];
    minutes = FLARE_MINUTES;
    exercises = fitTo(exercises, minutes);
    return { ...day, exercises, minutes, reason, steppedDown };
  }
  if (spike) {
    reason = 'spike';
    exercises = exercises.map((e) => stepDown(e, ctx, hasStep));
    steppedDown = true;
  } else if (heavy && type === 'strength') {
    reason = 'heavy-day';
    type = 'recovery';
    const focus = exercises.find((e) => e.focus);
    const recovery = CHAINS.recovery.filter((id) => allowed(id, ctx)).slice(0, 1);
    const stretch = CHAINS.mobility.filter((id) => allowed(id, ctx)).slice(0, 1);
    exercises = [
      ...(focus != null ? [stepDown(focus, ctx, hasStep)] : []),
      ...[...recovery, ...stretch].map((id) => ({ id, level: 1, dose: doseFor(id, 1, hasStep), focus: false })),
    ];
  } else if (signals.sleepHours != null && signals.sleepHours < SHORT_SLEEP_HOURS) {
    reason = 'short-sleep';
    exercises = exercises.map((e) => stepDown(e, ctx, hasStep));
    steppedDown = true;
  }

  if (signals.stepDownOwed > 0 && !steppedDown) {
    exercises = exercises.map((e) => stepDown(e, ctx, hasStep));
    steppedDown = true;
  }

  exercises = dedupe(exercises);
  if (signals.minutesChoice != null && signals.minutesChoice !== signals.defaultMinutes) {
    exercises = scaleToMinutes(exercises, signals.minutesChoice, signals.defaultMinutes);
  }
  return { ...day, type, exercises, minutes, reason, steppedDown };
}

/**
 * The user picked 3 or 10 minutes: scale the sets, and at 3 keep only the
 * focus exercise and one other. The focus exercise always stays.
 */
export function scaleToMinutes(exercises: PlannedExercise[], minutes: SessionMinutes, planned: SessionMinutes): PlannedExercise[] {
  const factor = minutes / planned;
  let list = exercises.map((e) => ({ ...e, dose: scaleSets(e.dose, Math.max(0.5, Math.min(1.6, factor))) }));
  if (minutes === 3) {
    const focus = list.filter((e) => e.focus);
    const rest = list.filter((e) => !e.focus);
    list = [...focus, ...rest].slice(0, Math.max(focus.length, 2));
  }
  return list;
}

function fitTo(exercises: PlannedExercise[], minutes: number): PlannedExercise[] {
  const total = exercises.reduce((sum, e) => sum + doseSeconds(e.dose), 0);
  const budget = minutes * 60;
  if (total <= budget || total === 0) return exercises;
  const factor = budget / total;
  return exercises.map((e) => ({ ...e, dose: scaleSets(e.dose, factor) }));
}

/**
 * The two-minute version — section 4.6. The focus exercise only, a set or two.
 * Offered when pain is 7 or more, or the day is nearly over and nothing has
 * started. It counts: something always beats nothing.
 */
export function twoMinuteVersion(day: PlanDay): PlanDay {
  const focus = day.exercises.find((e) => e.focus) ?? day.exercises[0];
  if (focus == null) return { ...day, minutes: 2 };
  const one: PlannedExercise = { ...focus, dose: { ...focus.dose, sets: Math.min(2, focus.dose.sets) } };
  return { ...day, exercises: [one], minutes: 2 };
}

/** Evening, from this hour on, a day with nothing started offers the short version. */
export const SHORT_VERSION_FROM_HOUR = 18;

export function offersShortVersion(painToday: number | null, hour: number, started: boolean): boolean {
  if (painToday != null && painToday >= FLARE_PAIN) return true;
  return !started && hour >= SHORT_VERSION_FROM_HOUR;
}
