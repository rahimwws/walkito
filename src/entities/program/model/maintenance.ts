/**
 * Day 85 onward. The program does not end; its goal changes.
 *
 * Everything before this file is about moving a number. This one is about not
 * giving it back, which is a different job and needs a different dose. Three
 * loaded days a week produced the change; two hold it — and a schedule someone
 * is still running in a year is worth more than the one they abandon in March.
 *
 * Pure, the same way `adapt.ts` is pure: a day number goes in, a `ResolvedDay`
 * comes out. Nothing here reads the clock or storage.
 */

import type { ResolvedDay, ResolvedExercise } from './adapt';
import { BLOCK_LENGTH, lastDayOf, type PlanLength } from './blocks';
import { slotFor } from './day-templates';
import { EXERCISES_BY_ID, type Exercise } from './exercises';
import { ZONES, type ZoneKey } from './levels';
import { prescriptionFor } from './prescription';

/** Every maintenance session runs this long. */
export const MAINTENANCE_MINUTES = 8;

/**
 * The block maintenance takes its dose from.
 *
 * Sustain — bodyweight, no towel, three sets of fifteen. It is the version the
 * plan spent twelve weeks arriving at precisely so that it could be kept, so
 * maintenance keeps it rather than inventing a lighter one.
 */
export const MAINTENANCE_BLOCK = 6;

/**
 * The morning stretch stays daily, and stays a minute.
 *
 * Not part of any session, which is why it is a bare number here and not a row
 * in the week below: from Block 2 the stretch belongs to the morning check-in,
 * before the foot takes weight. Folding it into the Monday and Thursday
 * sessions would mean five days a week without it, on the one habit that has to
 * happen every day to do anything at all.
 */
export const MAINTENANCE_MORNING_MINUTES = 1;

/**
 * The maintenance week, by slot. Everything absent from it is rest.
 *
 * Monday and Thursday rather than two days in a row: three days apart and then
 * four is still the "a day between loads" rule the program week is built on,
 * taken to the lowest frequency that is still training. Thursday carries the
 * band and hip work because the ankle and the hip are what stop the arch taking
 * the load back, and they need less frequency than the calf does.
 */
const MAINTENANCE_WEEK: Readonly<Record<number, readonly string[]>> = {
  1: ['heel_raise_plain', 'short_foot_single'],
  4: ['heel_raise_plain', 'band_inversion', 'hip_abduction'],
};

/**
 * Four weeks between retests instead of two.
 *
 * Written against `BLOCK_LENGTH` rather than as 28, so the two cadences stay
 * one relationship — halving the block length later must not silently leave
 * maintenance measuring on a rhythm nothing else uses.
 */
export const MAINTENANCE_RETEST_INTERVAL = BLOCK_LENGTH * 2;

/**
 * Whether a day belongs to maintenance.
 *
 * Either trigger is enough. The day number covers the user who left the app
 * closed through the end of their plan; the completed final retest covers the
 * one who finished it this morning, because they are through as of that
 * measurement rather than at the next midnight.
 */
export function isMaintenance(
  dayNumber: number,
  planLength: PlanLength,
  finalRetestDone = false,
): boolean {
  return finalRetestDone || dayNumber > lastDayOf(planLength);
}

/**
 * Every maintenance retest day up to and including `throughDay`.
 *
 * Counted from the plan's last day, not from day 1. The final block retest is
 * the last measurement of the program and the first of maintenance, so the next
 * one is 28 days after it rather than at whatever the fortnightly rhythm would
 * have said next.
 */
export function maintenanceRetestDays(
  planLength: PlanLength,
  throughDay: number,
): readonly number[] {
  // A non-finite `throughDay` would spin this loop forever, and it can arrive
  // that way from a corrupt stored start date. Refusing to start beats hanging
  // the only thread the UI has.
  if (!Number.isFinite(throughDay)) return [];
  const end = lastDayOf(planLength);
  const days: number[] = [];
  for (
    let day = end + MAINTENANCE_RETEST_INTERVAL;
    day <= throughDay;
    day += MAINTENANCE_RETEST_INTERVAL
  ) {
    days.push(day);
  }
  return days;
}

/** Whether a day is one of them. */
export function isMaintenanceRetestDay(dayNumber: number, planLength: PlanLength): boolean {
  const elapsed = dayNumber - lastDayOf(planLength);
  return elapsed > 0 && elapsed % MAINTENANCE_RETEST_INTERVAL === 0;
}

/**
 * The soonest maintenance retest on or after `dayNumber`.
 *
 * On a retest day the answer is that day, because the measurement has not been
 * taken at the moment anything asks — a countdown that reads "in 28 days" on
 * the morning of a retest is telling the user to come back after it.
 */
export function nextMaintenanceRetestDay(dayNumber: number, planLength: PlanLength): number {
  const end = lastDayOf(planLength);
  const elapsed = dayNumber - end;
  // At or before the end of the plan there is no elapsed maintenance yet, and
  // the first retest is one full interval out.
  const steps = elapsed <= 0 ? 1 : Math.max(1, Math.ceil(elapsed / MAINTENANCE_RETEST_INTERVAL));
  return end + steps * MAINTENANCE_RETEST_INTERVAL;
}

/** Two. Derived from the week rather than asserted, so the table is the truth. */
export function maintenanceSessionsPerWeek(): number {
  return Object.keys(MAINTENANCE_WEEK).length;
}

export type MaintenanceInput = {
  dayNumber: number;
  planLength: PlanLength;
  /**
   * Carried through untouched.
   *
   * Maintenance does not step the plan back: there is nowhere left to step to,
   * and Block 6 is already the unloaded version. A flare in maintenance is
   * handled by the same offload rules as anywhere else, upstream of here.
   */
  progressionOffset?: number;
};

function resolveAll(ids: readonly string[], offset: number): readonly ResolvedExercise[] {
  return ids
    .map((id) => EXERCISES_BY_ID[id])
    .filter((exercise): exercise is Exercise => exercise != null)
    .map((exercise) => ({
      exercise,
      prescription: prescriptionFor(exercise, MAINTENANCE_BLOCK, offset),
    }));
}

/**
 * A maintenance day, in the same shape every other day arrives in.
 *
 * Five of seven slots come back as recovery with nothing in them. That is not a
 * gap in the schedule — it is the schedule, and the day still counts toward the
 * streak because the app assigned it. See `streak.ts`.
 */
export function resolveMaintenanceDay(input: MaintenanceInput): ResolvedDay {
  const { dayNumber, planLength, progressionOffset = 0 } = input;
  const ids = MAINTENANCE_WEEK[slotFor(dayNumber)];
  const kind = ids == null ? 'recovery' : 'strength';
  const base = { dayNumber, blockIndex: MAINTENANCE_BLOCK, progressionOffset };

  // A retest replaces whatever slot it lands on, exactly as a block retest does
  // during the program. Landing one on a Monday and asking for the session as
  // well would make the measurement a warm-down.
  if (isMaintenanceRetestDay(dayNumber, planLength)) {
    return {
      ...base,
      kind,
      minutes: 0,
      retest: true,
      offload: false,
      exercises: [],
      reason: 'retest',
    };
  }

  if (ids == null) {
    return {
      ...base,
      kind: 'recovery',
      minutes: 0,
      retest: false,
      offload: false,
      exercises: [],
      reason: 'plan',
    };
  }

  return {
    ...base,
    kind: 'strength',
    minutes: MAINTENANCE_MINUTES,
    retest: false,
    offload: false,
    exercises: resolveAll(ids, progressionOffset),
    reason: 'plan',
  };
}

export type TransitionInput = {
  name: string;
  /** The calf figure from the day-one baseline, or null if there was none. */
  calfBefore: number | null;
  /** The figure the final retest reported. */
  calfAfter: number | null;
};

/**
 * The line that hands the user over to maintenance.
 *
 * This copy is the whole reason the app is still open after the pain has gone,
 * and it is deliberately not a congratulation. Told they are cured, a person
 * stops; told what half of people lose and what keeps them out of that half,
 * they have a reason to do Monday. Replacing it with "well done" ends the
 * relationship at the exact moment it should begin.
 *
 * Three lines. The blank line the spec draws between the first and the other
 * two is a gap in the layout, not an empty string in this array — a renderer
 * that gets one of those has to decide what an empty paragraph is worth.
 */
export function maintenanceTransitionLines(input: TransitionInput): readonly string[] {
  const { name, calfBefore, calfAfter } = input;
  const called = name.trim();
  // With no name the sentence simply starts, the same way the morning brief
  // handles it. "You’re through." reads as written; a lower-case opening with
  // the name lopped off does not.
  const opening = called.length > 0 ? `${called}, you’re through.` : 'You’re through.';

  // The arrow sentence is dropped rather than reworded when the number did not
  // actually go up. "↗ from 24 to 24" would be the app inventing a result, and
  // the user it lies to is precisely the one who already knows.
  const first =
    calfBefore != null && calfAfter != null && calfAfter > calfBefore
      ? `${opening} Your calf went ↗ from ${Math.round(calfBefore)} to ${Math.round(calfAfter)}.`
      : opening;

  return [
    first,
    'About half of people lose this again within five years.',
    'Two sessions a week is how you stay in the other half.',
  ];
}

/** Consecutive days above the maintenance pain baseline that count as a slip. */
export const REGRESSION_PAIN_DAYS = 7;

/**
 * What is offered when it does, and where it goes.
 *
 * Block 4 is Build, and the copy says Build — the two are written next to each
 * other so a renamed block cannot leave the app offering one thing and running
 * another. It is an offer, phrased as a question: the user decides whether
 * their numbers slipping means anything, and nothing here restarts a plan on
 * their behalf.
 */
export const REGRESSION_COPY = 'Your numbers slipped. Want to run Build again?';
export const REGRESSION_TARGET_BLOCK = 4;

export type RegressionInput = {
  levelsNow: Readonly<Record<ZoneKey, number>>;
  /** The previous maintenance retest, or null when this is the first. */
  levelsBefore: Readonly<Record<ZoneKey, number>> | null;
  painAboveBaselineDays: number;
};

/**
 * Whether maintenance is losing ground.
 *
 * Any single zone dropping is enough. Averaging the four would let a calf
 * falling two levels hide behind a balance that happened to rise, and the point
 * of measuring four things separately is that they are allowed to disagree.
 *
 * Pain alone can trigger it too, because a week above baseline is a slip the
 * user is already living with whether or not a retest has caught up to it.
 */
export function regressionDetected(input: RegressionInput): boolean {
  const { levelsNow, levelsBefore, painAboveBaselineDays } = input;
  if (painAboveBaselineDays >= REGRESSION_PAIN_DAYS) return true;
  // Nothing to compare against is not a regression. A first maintenance retest
  // offering to restart Build would be the app reading its own blank slate as
  // bad news.
  if (levelsBefore == null) return false;
  return ZONES.some((zone) => levelsNow[zone] < levelsBefore[zone]);
}
