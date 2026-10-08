import {
  PROGRAM,
  dayNumberFor,
  doseSeconds,
  programState,
  type PlanDay,
  type PlannedExercise,
  type ProgramDay,
} from '@/entities/program';
import type { PlaylistStep } from '@/widgets/session-player';

/**
 * The bridges between the weekly plan and the parts of the app still shaped
 * around the fixed program: the day the player and the day sheet take, and the
 * playlist a planned session runs as.
 */

/**
 * The old program's day shape, which the card and the player still take.
 *
 * The block is the fixed program's for that date, kept so anything still
 * reading it (the player's load notes, the retest's block index) gets a
 * sensible answer; the week decides everything the user actually sees.
 */
export function asProgramDay(day: PlanDay): ProgramDay {
  const n = Math.max(1, dayNumberFor(programState(), day.date));
  return {
    index: n - 1,
    day: n,
    kind: day.type === 'test' || day.type === 'rest' ? 'recovery' : day.type,
    minutes: day.minutes,
    checkpoint: day.type === 'test',
    block: PROGRAM[n - 1]?.block ?? PROGRAM[PROGRAM.length - 1]?.block ?? 1,
  };
}

/**
 * A planned session as the player's playlist: each exercise's own length from
 * its dose, one foot at a time where the dose says so, and counted reps at a
 * tempo where it has one.
 */
export function playlistOf(exercises: readonly PlannedExercise[]): PlaylistStep[] {
  return exercises.map((e) => ({
    exerciseId: e.id,
    seconds: doseSeconds(e.dose),
    perSide: e.dose.perSide,
    ...(e.dose.tempo != null && e.dose.reps != null
      ? { cadence: { tempo: e.dose.tempo, reps: e.dose.reps, sets: e.dose.sets } }
      : {}),
    ...(e.dose.addWeight === true ? { addWeight: true } : {}),
  }));
}
