import { dayNumberFor, logFor, programState, todayKey, weekPlan } from '@/entities/program';
import type { PartName } from '@/shared/config';

/**
 * Which part of the foot or leg each move mostly works, for the coloured
 * tiles on "Your week". A move that is not about one part (breathing) has
 * none and is not counted.
 */
export const PART_OF: Readonly<Record<string, PartName>> = {
  heel_raise_towel: 'heel',
  heel_raise_plain: 'heel',
  heel_raise_double: 'heel',
  heel_raise_seated: 'heel',
  heel_raise_hold: 'heel',
  heel_toe_walk: 'heel',
  fascia_stretch: 'arch',
  short_foot_seated: 'arch',
  short_foot_double: 'arch',
  short_foot_single: 'arch',
  foot_roll: 'arch',
  towel_scrunch: 'arch',
  sole_massage: 'arch',
  barefoot_home: 'arch',
  calf_stretch_straight: 'calf',
  calf_stretch_bent: 'calf',
  heel_drop_straight: 'calf',
  pogo_hops: 'calf',
  tibialis_raise: 'calf',
  band_inversion: 'ankle',
  single_leg_hold: 'ankle',
  eyes_closed_stand: 'ankle',
  ankle_rocks: 'ankle',
  knee_to_wall: 'ankle',
  balance_pillow: 'ankle',
  step_down: 'ankle',
  hip_abduction: 'ankle',
  toe_spread: 'toes',
  big_toe_lift: 'toes',
};

export const PART_ORDER: readonly PartName[] = ['heel', 'arch', 'calf', 'ankle', 'toes'];

/** Moves ticked this week (Monday to today), counted by part. */
export function partsThisWeek(): Record<PartName, number> {
  const counts: Record<PartName, number> = { heel: 0, arch: 0, calf: 0, ankle: 0, toes: 0 };
  const state = programState();
  const today = todayKey();
  for (const day of weekPlan().days) {
    if (day.date > today) continue;
    for (const id of logFor(dayNumberFor(state, day.date))?.exercisesDone ?? []) {
      const part = PART_OF[id];
      if (part != null) counts[part] += 1;
    }
  }
  return counts;
}
