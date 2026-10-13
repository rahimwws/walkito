import type { Tempo } from '../exercises';

import type { PlanDose } from './dose';

/**
 * A dose, laid out second by second: every set on every foot, the rest between
 * sets and the moment the feet change.
 *
 * One layout for the whole app. The plan sums it to fit a session into its
 * minutes (`doseSeconds`), and the player walks it to say which set, which rep
 * and which foot the user is on, so the time a day promises and the time the
 * player counts down are the same number by construction.
 *
 * It used to be two formulas. The plan counted rests; the player ran one
 * countdown over the whole move with no sets, no reps and no rest in it, so a
 * towel scrunch was six silent minutes of a clock nobody could follow.
 *
 * Pure: no React, no storage. The one import is a type.
 */

export type TimelineSide = 'right' | 'left';

/** What the user is doing in a stretch of a move. */
export type Segment =
  | {
      kind: 'work';
      /** Seconds into the move this segment starts at. */
      start: number;
      seconds: number;
      /** 1-based. */
      set: number;
      sets: number;
      /** Null for a move done on both feet at once. */
      side: TimelineSide | null;
      /** Counted reps, or null for a single hold. */
      reps: number | null;
      /** A hold inside each rep, or the whole set when there are no reps. */
      holdSec: number | null;
      tempo: Tempo | null;
      /** One rep without a tempo or a hold, in seconds. */
      repSec: number;
    }
  | { kind: 'rest'; start: number; seconds: number; /** The set that follows. */ set: number; sets: number }
  | { kind: 'switch'; start: number; seconds: number; to: TimelineSide; set: number; sets: number };

/** Between sets of counted work. */
export const REST_SEC = 15;
/** Changing feet. */
export const SWITCH_SEC = 5;
/** Letting go between two holds inside a set. */
export const RELAX_SEC = 2;
/** One plain rep: up and down at a steady pace. */
export const REP_SEC = 3;

function positive(value: number | undefined): number {
  return value != null && Number.isFinite(value) && value > 0 ? value : 0;
}

function repLength(dose: Pick<PlanDose, 'tempo' | 'holdSec' | 'repSec'>): number {
  if (dose.tempo != null) return positive(dose.tempo.up) + positive(dose.tempo.hold) + positive(dose.tempo.down);
  if (positive(dose.holdSec) > 0) return positive(dose.holdSec) + RELAX_SEC;
  return positive(dose.repSec) || REP_SEC;
}

/** How long one set on one foot takes. */
function workSeconds(dose: PlanDose): number {
  const reps = Math.floor(positive(dose.reps));
  if (reps > 0) return reps * repLength(dose);
  return positive(dose.holdSec) || 30;
}

/**
 * The segments of a dose, in order.
 *
 * A one-foot move alternates feet inside each set (right, then left), so each
 * foot rests while the other works. Counted work then rests between sets; a
 * held stretch or balance done one foot at a time needs no rest of its own,
 * since the other foot's hold is the rest, and goes straight back to the right.
 */
export function doseTimeline(dose: PlanDose): Segment[] {
  const sets = Math.max(1, Math.floor(positive(dose.sets)) || 1);
  const reps = Math.floor(positive(dose.reps)) || null;
  const holdSec = positive(dose.holdSec) || null;
  const work = workSeconds(dose);
  const sides: (TimelineSide | null)[] = dose.perSide ? ['right', 'left'] : [null];
  const alternatingHold = dose.perSide && reps == null;
  const out: Segment[] = [];
  let at = 0;
  const push = (segment: Segment) => {
    out.push(segment);
    at += segment.seconds;
  };
  for (let set = 1; set <= sets; set += 1) {
    sides.forEach((side, i) => {
      if (i > 0 && side != null) push({ kind: 'switch', start: at, seconds: SWITCH_SEC, to: side, set, sets });
      push({
        kind: 'work',
        start: at,
        seconds: work,
        set,
        sets,
        side,
        reps,
        holdSec,
        tempo: dose.tempo ?? null,
        repSec: positive(dose.repSec) || REP_SEC,
      });
    });
    if (set === sets) continue;
    if (alternatingHold) push({ kind: 'switch', start: at, seconds: SWITCH_SEC, to: 'right', set: set + 1, sets });
    else push({ kind: 'rest', start: at, seconds: REST_SEC, set: set + 1, sets });
  }
  return out;
}

/** The whole move, in seconds. */
export function timelineSeconds(segments: readonly Segment[]): number {
  const last = segments[segments.length - 1];
  return last == null ? 0 : last.start + last.seconds;
}

/** Where a rep is inside a work segment. */
export type RepReading = {
  /** 1-based, counted within the set. Null for a single hold. */
  rep: number | null;
  reps: number | null;
  /**
   * `up`, `hold` and `down` for a tempo rep; `hold` and `relax` for a held rep
   * (and `hold` for a single hold); `rep` for plain reps at a steady pace.
   */
  phase: 'up' | 'hold' | 'down' | 'relax' | 'rep';
  /** Whole seconds left in this phase; for plain reps, in the set. */
  secondsLeft: number;
};

export type TimelineReading = {
  index: number;
  segment: Segment;
  /** Seconds into this segment. */
  into: number;
  /** Whole seconds left in this segment. */
  secondsLeft: number;
  /** For a work segment. */
  rep: RepReading | null;
};

function repAt(segment: Extract<Segment, { kind: 'work' }>, into: number): RepReading {
  const left = (end: number) => Math.max(1, Math.ceil(end - into));
  if (segment.reps == null) {
    return { rep: null, reps: null, phase: 'hold', secondsLeft: left(segment.seconds) };
  }
  const reps = segment.reps;
  if (segment.tempo != null) {
    const up = positive(segment.tempo.up);
    const hold = positive(segment.tempo.hold);
    const per = up + hold + positive(segment.tempo.down);
    if (per <= 0) return { rep: reps, reps, phase: 'rep', secondsLeft: left(segment.seconds) };
    const index = Math.min(reps - 1, Math.floor(into / per));
    const inRep = into - index * per;
    const rep = index + 1;
    if (inRep < up) return { rep, reps, phase: 'up', secondsLeft: left(index * per + up) };
    if (inRep < up + hold) return { rep, reps, phase: 'hold', secondsLeft: left(index * per + up + hold) };
    return { rep, reps, phase: 'down', secondsLeft: left((index + 1) * per) };
  }
  if (segment.holdSec != null) {
    const per = segment.holdSec + RELAX_SEC;
    const index = Math.min(reps - 1, Math.floor(into / per));
    const inRep = into - index * per;
    const rep = index + 1;
    if (inRep < segment.holdSec) return { rep, reps, phase: 'hold', secondsLeft: left(index * per + segment.holdSec) };
    return { rep, reps, phase: 'relax', secondsLeft: left((index + 1) * per) };
  }
  const index = Math.min(reps - 1, Math.floor(into / segment.repSec));
  return { rep: index + 1, reps, phase: 'rep', secondsLeft: left(segment.seconds) };
}

/**
 * Where the move stands, `elapsed` seconds in. Past the end it reads the last
 * segment with nothing left, which is what "the move is over" looks like.
 */
export function timelineAt(segments: readonly Segment[], elapsed: number): TimelineReading | null {
  if (segments.length === 0) return null;
  const at = Math.max(0, elapsed);
  let index = segments.findIndex((segment) => at < segment.start + segment.seconds);
  if (index < 0) index = segments.length - 1;
  const segment = segments[index];
  const into = Math.min(segment.seconds, at - segment.start);
  const secondsLeft = Math.max(0, Math.ceil(segment.seconds - into));
  return {
    index,
    segment,
    into,
    secondsLeft,
    rep: segment.kind === 'work' ? repAt(segment, into) : null,
  };
}
