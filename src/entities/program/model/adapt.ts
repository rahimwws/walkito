/**
 * What today actually is, once the plan has met the user.
 *
 * A pure function. Same input, same output — no clock, no storage, no
 * randomness, nothing to mock. Everything it needs is passed in, which is what
 * makes the fourteen rules in the spec checkable as fourteen assertions.
 *
 * The rule that matters most is the first one. On a high-pain day the session
 * is not cancelled: it becomes work that does not load the fascia, capped at
 * three minutes. The user still has a session, still finishes it, still keeps
 * their streak. An app that answers a flare with "rest today" has removed the
 * one thing keeping the person in the program on the morning they most want to
 * quit.
 */

import { BASELINE_DAY, type Block } from './blocks';
import { planFor, withFocus, type Focus } from './catalogue';
import { MINUTES_BY_KIND, firstDayOfKind, type DayKind } from './day-templates';
import { EXERCISES_BY_ID, type Exercise } from './exercises';
import { prescriptionFor, type Prescription } from './prescription';

/** Pain at or above this is a flare. */
export const FLARE_PAIN = 7;
/** A jump this far above the seven-day average is a spike. */
export const SPIKE_JUMP = 3;
/** An offload session is capped here, whatever the day's template said. */
export const OFFLOAD_MINUTES = 3;
/** Yesterday counted as heavy above this multiple of the usual day. */
export const HEAVY_DAY_RATIO = 1.4;
/** A gap this long steps the plan back and restarts on a mobility day. */
export const LONG_ABSENCE_DAYS = 5;

/** Why the day came out the way it did. Internal; drives copy elsewhere. */
export type AdaptReason =
  /** Pain at or above the flare threshold. */
  | 'flare'
  /** Pain jumped well above the recent average. */
  | 'spike'
  /** The block closes here. */
  | 'retest'
  /** Yesterday was a long day on the feet. */
  | 'heavy-day'
  /** Back after an absence. */
  | 'return'
  /** Nothing adapted it. */
  | 'plan';

export type ResolvedExercise = {
  exercise: Exercise;
  /** Null where the exercise carries no dose worth printing. */
  prescription: Prescription | null;
};

export type ResolvedDay = {
  dayNumber: number;
  blockIndex: number;
  kind: DayKind;
  minutes: number;
  /** No training: the day is three tests. */
  retest: boolean;
  /** Loaded work removed. */
  offload: boolean;
  exercises: readonly ResolvedExercise[];
  /** The offset after this day's rules have had their say. Never positive. */
  progressionOffset: number;
  reason: AdaptReason;
};

export type ResolveInput = {
  dayNumber: number;
  block: Block;
  kind: DayKind;
  painToday: number | null;
  pain7dAvg: number | null;
  hoursOnFeetYesterday: number | null;
  hoursBaseline: number | null;
  daysSinceLastSession: number;
  /** 0 = on plan, -1 = one step back. */
  progressionOffset: number;
  /** Where the plan leans. Absent means the plan as written. */
  focus?: Focus;
};

/**
 * What an offload day falls back to when a block's list has no unloaded work.
 *
 * Block 1's Recovery day is entirely track A, so filtering it would leave an
 * empty session — and an empty session on the worst morning is the same as
 * cancelling it. Both of these are seated, neither loads the fascia.
 */
const OFFLOAD_FALLBACK = ['short_foot_seated', 'toe_spread'] as const;

/** Whether the jump from the recent average counts as a spike. */
export function isSpike(painToday: number | null, pain7dAvg: number | null): boolean {
  if (painToday == null || pain7dAvg == null) return false;
  return painToday - pain7dAvg >= SPIKE_JUMP;
}

/** Whether yesterday was heavy enough to pull today's load. */
function wasHeavyDay(hoursYesterday: number | null, baseline: number | null): boolean {
  if (hoursYesterday == null || baseline == null || baseline <= 0) return false;
  return hoursYesterday > baseline * HEAVY_DAY_RATIO;
}

function resolve(ids: readonly string[], blockIndex: number, offset: number): ResolvedExercise[] {
  return ids
    .map((id) => EXERCISES_BY_ID[id])
    .filter((exercise): exercise is Exercise => exercise != null)
    .map((exercise) => ({
      exercise,
      prescription: prescriptionFor(exercise, blockIndex, offset),
    }));
}

/**
 * The unloaded version of a day's list.
 *
 * Track B only, which drops the two heel-raise variants along with everything
 * else that puts the fascia under tension. The `loadsFascia` check is redundant
 * against the current catalogue — every loaded exercise is already track A —
 * and it stays anyway, so that adding a loaded track-B exercise later cannot
 * quietly leak into a flare day.
 */
function offloadList(ids: readonly string[]): readonly string[] {
  const kept = ids.filter((id) => {
    const exercise = EXERCISES_BY_ID[id];
    return exercise != null && exercise.track === 'B' && !exercise.loadsFascia;
  });
  return kept.length > 0 ? kept : OFFLOAD_FALLBACK;
}

/**
 * Today, resolved.
 *
 * The rules are first-match, in the order the spec gives them, with one
 * deliberate exception noted at `nextOffset` below.
 */
export function resolveDay(input: ResolveInput): ResolvedDay {
  const {
    dayNumber,
    block,
    kind,
    painToday,
    pain7dAvg,
    hoursOnFeetYesterday,
    hoursBaseline,
    daysSinceLastSession,
    progressionOffset,
    focus = 'foot',
  } = input;
  /** The ordinary list for a kind of day, with the focus applied. Not used on
   * offload days, which are the unloaded minimum by design. */
  const planned = (of: DayKind) => withFocus(planFor(block.index, of), block.index, of, focus);

  const blockIndex = block.index;
  const spike = isSpike(painToday, pain7dAvg);

  /**
   * The offset this day leaves behind.
   *
   * A spike steps the plan back, and it does so whichever offload rule actually
   * fired. The spec attaches the step-back to rule 2, but rule 1 is checked
   * first and swallows every spike that also crosses the flare threshold — so
   * pain jumping 3 → 7 would match rule 1 and never reach the line that sets
   * the offset. Reading the step-back as a consequence of the spike itself
   * rather than of its position in the table is what makes that case behave,
   * and it is the only reading under which the plan steps back on the days it
   * most obviously should.
   */
  const stepBack = Math.min(progressionOffset, -1);

  // Rule 1 — flare. The most important branch in the app.
  if (painToday != null && painToday >= FLARE_PAIN) {
    return {
      dayNumber,
      blockIndex,
      kind,
      minutes: OFFLOAD_MINUTES,
      retest: false,
      offload: true,
      exercises: resolve(offloadList(planFor(blockIndex, kind)), blockIndex, progressionOffset),
      progressionOffset: spike ? stepBack : progressionOffset,
      reason: 'flare',
    };
  }

  // Rule 2 — a jump above the recent average, even at a tolerable number.
  if (spike) {
    return {
      dayNumber,
      blockIndex,
      kind,
      minutes: OFFLOAD_MINUTES,
      retest: false,
      offload: true,
      exercises: resolve(offloadList(planFor(blockIndex, kind)), blockIndex, progressionOffset),
      progressionOffset: stepBack,
      reason: 'spike',
    };
  }

  // Rule 3 — the block closes, or the plan opens. Three tests, no training.
  if (dayNumber === block.retestDay || dayNumber === BASELINE_DAY) {
    return {
      dayNumber,
      blockIndex,
      kind,
      minutes: 0,
      retest: true,
      offload: false,
      exercises: [],
      progressionOffset,
      reason: 'retest',
    };
  }

  // Rule 4 — yesterday was a long day on the feet. Only a Strength day gives
  // way; the condition is read as matching only when there is something to
  // swap, so a heavy day before a Mobility day falls through rather than
  // silently swallowing the rules below it.
  if (kind === 'strength' && wasHeavyDay(hoursOnFeetYesterday, hoursBaseline)) {
    return {
      dayNumber,
      blockIndex,
      kind: 'recovery',
      minutes: MINUTES_BY_KIND.recovery,
      retest: false,
      offload: false,
      exercises: resolve(planned('recovery'), blockIndex, progressionOffset),
      progressionOffset,
      reason: 'heavy-day',
    };
  }

  // Rule 5 — back after a while away. One step back, and the way back in is
  // the block's mobility day rather than whatever the calendar says.
  if (daysSinceLastSession >= LONG_ABSENCE_DAYS) {
    const offset = stepBack;
    return {
      dayNumber,
      blockIndex,
      kind: 'mobility',
      minutes: MINUTES_BY_KIND.mobility,
      retest: false,
      offload: false,
      exercises: resolve(planned('mobility'), blockIndex, offset),
      progressionOffset: offset,
      reason: 'return',
    };
  }

  // Rule 6 — the plan, unadapted.
  return {
    dayNumber,
    blockIndex,
    kind,
    minutes: MINUTES_BY_KIND[kind],
    retest: false,
    offload: false,
    exercises: resolve(planned(kind), blockIndex, progressionOffset),
    progressionOffset,
    reason: 'plan',
  };
}

/**
 * Whether a step back has been earned off.
 *
 * Two consecutive days at or below the seven-day average. Both days have to
 * carry a real reading — a day with nothing logged is not evidence of calm, and
 * counting it would clear the offset on silence.
 */
export function offsetClears(
  readings: readonly { pain: number | null; average: number | null }[],
): boolean {
  if (readings.length < 2) return false;
  const recent = readings.slice(-2);
  return recent.every(
    ({ pain, average }) => pain != null && average != null && pain <= average,
  );
}

/**
 * The offset carried into tomorrow.
 *
 * Only ever moves one step at a time and never above zero. Clearing is all the
 * way back to the plan rather than one notch, because the offset is a single
 * step by construction — there is nothing between -1 and 0.
 */
export function nextOffset(
  current: number,
  readings: readonly { pain: number | null; average: number | null }[],
): number {
  if (current >= 0) return 0;
  return offsetClears(readings) ? 0 : current;
}

/**
 * What a mid-session pain report does.
 *
 * Below five is discomfort and the session continues. At five or above it ends
 * — and it ends *complete*. The work stops, but the day is not taken away from
 * them, and tomorrow starts one step back rather than one step down.
 */
export const IN_SESSION_STOP_PAIN = 5;

export type InSessionOutcome = {
  stop: boolean;
  /** Marked complete either way. Stopping early is not failing. */
  markComplete: boolean;
  progressionOffset: number;
  /** Shown only when the session ends. */
  copy: string | null;
};

export function inSessionPain(reported: number, progressionOffset: number): InSessionOutcome {
  if (reported < IN_SESSION_STOP_PAIN) {
    return { stop: false, markComplete: false, progressionOffset, copy: null };
  }
  return {
    stop: true,
    markComplete: true,
    progressionOffset: Math.min(progressionOffset, -1),
    copy: 'Stopping here. Tomorrow starts one step back.',
  };
}

/** The block's mobility day, which is what a return lands on. */
export function mobilityDayOf(block: Block): number | null {
  return firstDayOfKind(block.startDay, block.endDay, 'mobility');
}
