/**
 * The pain question's answer, read two ways.
 *
 * The question is asked on the leg map, so what gets stored is the zones that
 * were touched — `['heel', 'arch']` — or `['none']`. The screens that talk
 * back about it (the building lines, the plan's reflection) speak in broader
 * complaints: "heel pain", "foot pain". This is the one place that says which
 * zone belongs to which complaint.
 *
 * Pure and with a type-only import, for the reason `answers.ts` gives: the step
 * table and the map both load react-native, and this is the part with a rule
 * in it that a test should be able to reach.
 */

// The model file rather than the slice's barrel: the barrel also exports the
// map component, which loads react-native, and this file is unit-tested.
import { PAIN_AREA_OF as AREA, type LegZone, type PainArea } from '@/entities/leg-zone/model/leg-zones';

/** Stored instead of zones when the user says nothing hurts. */
export const NO_PAIN = 'none';

export type { PainArea };

function isZone(value: string): value is LegZone {
  return Object.prototype.hasOwnProperty.call(AREA, value);
}

/** The zones in an answer, dropping anything that is not one — `none`, or a
 * value left over from before the question was a map. */
export function zonesIn(answer: unknown): LegZone[] {
  if (!Array.isArray(answer)) return [];
  return answer.filter((value): value is LegZone => typeof value === 'string' && isZone(value));
}

/**
 * The complaints an answer amounts to, in the order they were first touched,
 * each once — or `['none']` when the user said nothing hurts.
 *
 * The shape the reflection code already reads, so nothing downstream had to
 * learn about zones.
 */
export function painAreasFor(answer: unknown): string[] {
  if (Array.isArray(answer) && answer.includes(NO_PAIN)) return [NO_PAIN];
  const areas: string[] = [];
  for (const zone of zonesIn(answer)) {
    const area = AREA[zone];
    if (!areas.includes(area)) areas.push(area);
  }
  return areas;
}
