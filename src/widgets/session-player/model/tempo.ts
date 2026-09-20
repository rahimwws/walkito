/**
 * Where a rep is, at a given second of a move.
 *
 * Arithmetic and nothing else. The player owns one wall-clock deadline per move
 * and reads its playhead off that; this module turns the seconds elapsed under
 * the playhead into the phase the user is actually in. Keeping the two apart is
 * the whole point — a phase boundary living inside a worklet can only be
 * checked by watching a screen and counting, and "three up, two held, three
 * down" is exactly the kind of off-by-one that survives being watched.
 *
 * Pure, therefore: no Reanimated, no React, and no runtime dependency on the
 * catalogue. The one import is a type, which the compiler erases.
 */

import type { Tempo } from '@/entities/program';

/** The three parts of a tempo rep, in the order they happen. */
export type Phase = 'up' | 'hold' | 'down';

export type PhaseReading = {
  phase: Phase;
  /**
   * Whole seconds left in this phase, counting down.
   *
   * Never zero while the dose is still running: a phase with no time left is
   * already the next phase. Zero therefore means one thing only, which is that
   * `done` is true.
   */
  secondsLeft: number;
  /** 1-based, and counted within the current set rather than across the dose —
   * "rep 4 of 12" restarts at each set, because that is how a set is counted. */
  rep: number;
  /** 1-based. */
  set: number;
  /** Every rep of every set is behind us. */
  done: boolean;
};

/**
 * A dose, in the shape `prescriptionFor` hands one back.
 *
 * Structural rather than the entity's own `Prescription` so nothing here has to
 * load the program to work out how long three sets take. It also means a caller
 * can ask about a dose it assembled itself, which is what the tests do.
 */
export type Dose = {
  sets: number;
  reps?: number;
  holdSec?: number;
  tempo?: Tempo;
};

/**
 * A duration, or zero where one was not given.
 *
 * A missing, negative or non-finite phase is treated as absent rather than as
 * time running backwards: a malformed tempo should shorten a rep, never invert
 * it, because an inverted rep is a countdown that climbs.
 */
function span(seconds: number | undefined): number {
  return seconds != null && Number.isFinite(seconds) && seconds > 0 ? seconds : 0;
}

/** One rep, start to finish. */
export function repSeconds(tempo: Tempo): number {
  return span(tempo.up) + span(tempo.hold) + span(tempo.down);
}

/** A count of whole things — reps, sets — or zero where there is no count. */
function count(value: number | undefined): number {
  return Math.floor(span(value));
}

/** The whole tempo move, in seconds. Zero when there is nothing to run. */
export function tempoSeconds(tempo: Tempo, reps: number, sets: number): number {
  return repSeconds(tempo) * count(reps) * count(sets);
}

/**
 * How long a dose takes, or null when it carries no time at all.
 *
 * Null rather than a default, because the default belongs to the caller: the
 * player already has one, and a module that invented a second one would put two
 * per-move durations in the app that could disagree. Counted work with neither
 * a tempo nor a hold — fifteen ankle rocks — is exactly that case: a real dose
 * that says nothing about seconds.
 */
export function doseSeconds(dose: Dose | null | undefined): number | null {
  if (dose == null) return null;

  const sets = count(dose.sets);
  if (sets <= 0) return null;

  if (dose.tempo != null) {
    const seconds = tempoSeconds(dose.tempo, dose.reps ?? 0, sets);
    return seconds > 0 ? seconds : null;
  }

  const hold = span(dose.holdSec);
  if (hold <= 0) return null;
  // A hold repeated inside a set — ten five-second short-foot holds, three
  // times over — is the same arithmetic a tempo rep gets, with one phase
  // instead of three. A set that is a single long hold simply has one rep.
  return hold * Math.max(1, count(dose.reps ?? 1)) * sets;
}

/**
 * The phase, rep and set a move is in, `elapsedSec` into it.
 *
 * Reps run straight into one another and sets run straight into reps: there is
 * no rest written into the arithmetic, because there is none written into the
 * prescription either. Adding one here would make the player disagree with
 * every other surface that prints the dose.
 */
export function phaseAt(
  elapsedSec: number,
  tempo: Tempo,
  reps: number,
  sets: number,
): PhaseReading {
  const perRep = repSeconds(tempo);
  const perSet = count(reps);
  const setCount = count(sets);

  // A tempo with no seconds in it, or a dose with no reps in it, has nothing to
  // count down. Reported as done rather than divided by, so a broken dose
  // leaves the player through the one exit it already has — the move ran out —
  // instead of through a NaN in the readout.
  if (perRep <= 0 || perSet <= 0 || setCount <= 0) {
    return { phase: 'down', secondsLeft: 0, rep: 1, set: 1, done: true };
  }

  const elapsed = Math.max(0, elapsedSec);
  if (elapsed >= perRep * perSet * setCount) {
    return { phase: 'down', secondsLeft: 0, rep: perSet, set: setCount, done: true };
  }

  /** Which rep of the whole dose we are in, 0-based. */
  const index = Math.floor(elapsed / perRep);
  /** How far into that rep, in seconds. */
  const into = elapsed - index * perRep;
  const rep = (index % perSet) + 1;
  const set = Math.floor(index / perSet) + 1;

  const up = span(tempo.up);
  const hold = span(tempo.hold);

  // Strictly less-than at each boundary, so a phase whose last second has just
  // run out is the next phase rather than this one showing zero. A phase given
  // no seconds at all is skipped by the same comparison.
  if (into < up) return { phase: 'up', secondsLeft: Math.ceil(up - into), rep, set, done: false };
  if (into < up + hold) {
    return { phase: 'hold', secondsLeft: Math.ceil(up + hold - into), rep, set, done: false };
  }
  return { phase: 'down', secondsLeft: Math.ceil(perRep - into), rep, set, done: false };
}

/** Which foot a per-side move is on. Neutral names: the app knows whether the
 * pain is in one foot or both, never which foot, so it cannot say "the sore
 * one". Both sides are worked regardless — training only the painful side is
 * how the other one starts compensating. */
export type Side = 'right' | 'left';

export type SideReading = {
  side: Side;
  /** Whole seconds left on this side. */
  secondsLeft: number;
  /** True for the second half, so the caller can say "one more side" rather
   * than leaving the user to guess whether the switch has happened. */
  last: boolean;
};

/**
 * When a per-side move hands over from the right foot to the left.
 *
 * Half the move, then snapped to a whole rep where there are reps to snap to.
 * Eleven of the eighteen exercises are per-side — the stretches, the heel
 * raises, the single-leg holds — and their prescribed dose covers both feet
 * together. Running the whole of it without saying so left the user doing one
 * foot for twice as long as intended, or splitting it by eye, which is the same
 * as not prescribing it.
 *
 * Snapped because a tempo move cut at the midpoint hands over halfway through a
 * rep: the calf is loaded, the clock says swap, and the honest thing to do with
 * that instruction is ignore it. A rep boundary is a moment where changing feet
 * is a real option.
 */
export function sideSwitchAt(totalSeconds: number, tempo?: Tempo | null): number {
  const half = totalSeconds / 2;
  if (tempo == null) return half;

  const perRep = repSeconds(tempo);
  if (perRep <= 0) return half;

  // Nearest rep boundary, but never zero and never the whole move — either
  // would leave one foot with no time at all.
  const reps = Math.max(1, Math.round(half / perRep));
  const snapped = reps * perRep;
  return snapped >= totalSeconds ? half : snapped;
}

/**
 * Which foot to be on, `elapsedSec` into a per-side move.
 *
 * Callers that are not per-side must not ask: there is no "both" reading here,
 * because a move done on both feet at once has no side to report and a null
 * would put the question in every render path rather than at the one place that
 * knows.
 */
export function sideAt(
  elapsedSec: number,
  totalSeconds: number,
  tempo?: Tempo | null,
): SideReading {
  const switchAt = sideSwitchAt(totalSeconds, tempo);
  const elapsed = Math.max(0, elapsedSec);

  if (elapsed < switchAt) {
    return { side: 'right', secondsLeft: Math.ceil(switchAt - elapsed), last: false };
  }
  return {
    side: 'left',
    secondsLeft: Math.max(0, Math.ceil(totalSeconds - elapsed)),
    last: true,
  };
}
