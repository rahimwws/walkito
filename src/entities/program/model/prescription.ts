/**
 * How much of an exercise to do, and when that changes.
 *
 * The heel raise is the only exercise whose dose moves across the plan, and
 * moving it is what produces the effect — the same three sets forever is calf
 * work, not a loading program. So the table below is the mechanism, and the
 * progression offset is the one thing allowed to walk it backwards.
 */

import { HEEL_RAISE_TEMPO, type Tempo } from './exercises';

export type Prescription = {
  sets: number;
  /** Reps per set, or undefined for a held exercise. */
  reps?: number;
  /** Seconds per hold, or undefined for a counted exercise. */
  holdSec?: number;
  tempo?: Tempo;
  /**
   * What the row shows next to the title: "3 × 12", "3 × 30s".
   *
   * Built here rather than at the call site so every surface that prints a dose
   * prints the same string — Today's Tasks and the player cannot drift.
   */
  label: string;
};

/** The two exercises whose dose the block table governs. */
export const HEEL_RAISE_IDS = ['heel_raise_towel', 'heel_raise_plain'] as const;

/** The lowest block that prescribes heel raises at all. */
export const FIRST_LOADED_BLOCK = 2;
const LAST_BLOCK = 6;

type HeelRaiseStep = {
  sets: number;
  reps: number;
  /** Internal note on what is being carried. Not shown; `LOAD_NOTES` is. */
  load: string;
};

/**
 * Sets and reps by block.
 *
 * Reps fall as load rises, which is the shape a strength progression takes:
 * five sets of eight with a loaded backpack is more work than three of twelve
 * with none, even though the rep count is lower. Block 6 unloads deliberately —
 * it is the version the user keeps doing after the program, so it has to be one
 * they will actually keep doing.
 */
const HEEL_RAISES: Readonly<Record<number, HeelRaiseStep>> = {
  2: { sets: 3, reps: 12, load: 'bodyweight' },
  3: { sets: 4, reps: 10, load: 'backpack' },
  4: { sets: 5, reps: 8, load: 'backpack, heavier' },
  5: { sets: 5, reps: 8, load: 'backpack, heavier' },
  6: { sets: 3, reps: 15, load: 'bodyweight, no towel' },
};

/**
 * What to say on the first Strength day of a block whose load changed.
 *
 * Only the blocks that actually change carry a line. Block 5 repeats Block 4's
 * dose, so it says nothing rather than announcing a change that did not happen.
 */
export const LOAD_NOTES: Readonly<Record<number, string>> = {
  3: 'Add a backpack. Heavy enough that the last rep is the last rep.',
  4: 'Add more. Eight reps should be all you have.',
  6: 'Towel off. Bodyweight. This is the version you keep doing.',
};

/**
 * The block whose dose actually applies, once the offset is taken into account.
 *
 * Clamped at both ends. It never rises above the block the user is in, because
 * the plan does not accelerate, and it never falls below Block 2, because Block
 * 1 has no heel raise to fall back to — one step back from the first loaded
 * block is the first loaded block, not nothing.
 */
export function effectiveBlock(blockIndex: number, progressionOffset: number): number {
  const offset = Math.min(progressionOffset, 0);
  return Math.max(FIRST_LOADED_BLOCK, Math.min(blockIndex + offset, LAST_BLOCK));
}

/** "3 × 12", "3 × 30s", or "2 min" for a single held block. */
function doseLabel(sets: number, reps?: number, holdSec?: number): string {
  if (reps != null) return `${sets} × ${reps}`;
  if (holdSec != null) {
    // One set of a hold is a duration and reads as one: a two-minute foot roll
    // is "2 min", not "1 × 120s", which describes the same thing as if it were
    // a training set the user has to count through.
    if (sets === 1) return holdSec >= 60 ? `${Math.round(holdSec / 60)} min` : `${holdSec}s`;
    return `${sets} × ${holdSec}s`;
  }
  return `${sets} sets`;
}

/**
 * The heel-raise dose for a block, or null where the program has none.
 *
 * Null in Block 1 is not a missing case — Settle prescribes no loaded work at
 * all, and a caller asking for it there should show nothing rather than a
 * default.
 */
export function heelRaisePrescription(
  blockIndex: number,
  progressionOffset = 0,
): Prescription | null {
  if (blockIndex < FIRST_LOADED_BLOCK) return null;
  const step = HEEL_RAISES[effectiveBlock(blockIndex, progressionOffset)];
  if (step == null) return null;
  return {
    sets: step.sets,
    reps: step.reps,
    tempo: HEEL_RAISE_TEMPO,
    label: doseLabel(step.sets, step.reps),
  };
}

/** The load note for a block, if its load changed from the one before it. */
export function loadNoteFor(blockIndex: number): string | null {
  return LOAD_NOTES[blockIndex] ?? null;
}

/**
 * Which short-foot variant a block runs.
 *
 * The volume never changes — three sets of ten five-second holds throughout.
 * The progression is the position: seated, then standing on two legs, then on
 * one. Adding reps to an exercise the user cannot yet hold correctly would only
 * add repetitions of a bad rep.
 */
export function shortFootVariant(blockIndex: number): string | null {
  if (blockIndex < 2) return null;
  if (blockIndex === 2) return 'short_foot_seated';
  if (blockIndex === 3) return 'short_foot_double';
  return 'short_foot_single';
}

/**
 * The dose for any exercise on a given day.
 *
 * Heel raises come from the block table because they progress; everything else
 * comes from its own catalogue defaults, because it does not. Returning null
 * means the exercise carries no dose worth printing — the habit row, mainly.
 */
export function prescriptionFor(
  exercise: {
    id: string;
    defaultSets?: number;
    defaultReps?: number;
    defaultHoldSec?: number;
    tempo?: Tempo;
  },
  blockIndex: number,
  progressionOffset = 0,
): Prescription | null {
  if ((HEEL_RAISE_IDS as readonly string[]).includes(exercise.id)) {
    return heelRaisePrescription(blockIndex, progressionOffset);
  }
  const { defaultSets, defaultReps, defaultHoldSec, tempo } = exercise;
  // A held exercise need not declare a set count — a two-minute roll is one
  // block, not one set of one. Requiring `defaultSets` here silently gave the
  // roll and the breathing reset no dose at all, and the player fell back to a
  // flat minute for both.
  if (defaultSets == null && defaultHoldSec == null) return null;
  const sets = defaultSets ?? 1;
  return {
    sets,
    reps: defaultReps,
    holdSec: defaultHoldSec,
    tempo,
    // A short-foot row is ten five-second holds, and "3 × 10" is what the user
    // counts. The hold length is technique, and it lives in the cue.
    label: doseLabel(sets, defaultReps, defaultReps == null ? defaultHoldSec : undefined),
  };
}
