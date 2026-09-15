/**
 * The stretch that happens before the foot touches the floor.
 *
 * From Block 2 the plantar stretch leaves the session and attaches to the
 * morning check-in instead. That move is not organisational tidiness — it is
 * the point of the exercise. The tissue shortens overnight, and the first
 * loaded step of the day is what tears it again; a stretch done at six in the
 * evening cannot undo a step taken at seven in the morning. Sitting on the edge
 * of the bed and pulling the toes back before standing is the single
 * highest-value instruction in the program, and it only works if it is attached
 * to waking up rather than to training.
 *
 * Block 1 is the exception: there the stretch is still inside the Strength day,
 * because the first fortnight is about getting the foot moving at all and there
 * is no loaded work yet for it to protect.
 */

import { blockFor, type PlanLength } from './blocks';
import { exerciseById, type Exercise } from './exercises';
import { prescriptionFor, type Prescription } from './prescription';
import { logFor, writeLog } from './state';

/** The catalogue entry the morning stretch uses. */
export const MORNING_STRETCH_ID = 'fascia_stretch';

/** The first block in which it moves out of the session. */
export const FIRST_MORNING_STRETCH_BLOCK = 2;

/** How long it takes, for a schedule that needs a figure. */
export const MORNING_STRETCH_MINUTES = 1;

/**
 * The line, wherever it appears.
 *
 * One constant because it has to be identical in the check-in and in the
 * notification that fires at wake time — a user who reads two different
 * versions of the same instruction has to work out which one is right, and the
 * whole value of this is that it is done without thinking.
 */
export const MORNING_STRETCH_COPY =
  'Before you stand up: pull your toes back, 10 seconds, 10 times.';

/** Whether a block runs the stretch as part of the morning rather than the session. */
export function hasMorningStretch(blockIndex: number): boolean {
  return blockIndex >= FIRST_MORNING_STRETCH_BLOCK;
}

export type MorningStretch = {
  exercise: Exercise;
  prescription: Prescription | null;
  copy: string;
  done: boolean;
};

/**
 * The morning stretch for a day, or null where the plan has none.
 *
 * Null in Block 1 and null past the end of the plan's blocks — maintenance
 * keeps the stretch daily, but a caller in maintenance should ask
 * `maintenance.ts` for its schedule rather than have this function guess which
 * block it is standing in.
 */
export function morningStretchFor(
  dayNumber: number,
  planLength: PlanLength,
): MorningStretch | null {
  const block = blockFor(dayNumber, planLength);
  if (block == null || !hasMorningStretch(block.index)) return null;

  const exercise = exerciseById(MORNING_STRETCH_ID);
  return {
    exercise,
    prescription: prescriptionFor(exercise, block.index),
    copy: MORNING_STRETCH_COPY,
    done: morningStretchDone(dayNumber),
  };
}

/** Whether the user has ticked it off today. */
export function morningStretchDone(dayNumber: number): boolean {
  return logFor(dayNumber)?.morningStretchDone === true;
}

/**
 * Record it, or take it back.
 *
 * Reversible on purpose. A tick that cannot be unticked turns a log into a
 * score, and the moment a user believes the record is a score they stop
 * recording honestly.
 */
export function setMorningStretchDone(dayNumber: number, done: boolean): void {
  writeLog(dayNumber, { morningStretchDone: done });
}
