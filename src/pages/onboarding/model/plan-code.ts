/**
 * A plan code from ChatGPT or Claude, as onboarding answers.
 *
 * The assistant already asked where it hurts, which side, how many days, how
 * long and what kit is at home, so those steps are answered here and stepped
 * over (`codeFilled`). Everything else is still asked. The safety check in
 * particular is never answered by a code: it runs whenever something hurts,
 * which a code with a sore area makes true.
 *
 * Pure, with type-only imports, so a test can reach it (see `answers.ts`).
 */

import type { LegZone } from '@/entities/leg-zone/model/leg-zones';
import type { PlanArea, PlanCodeParams } from '@/shared/lib/plan-code';

import { CODE_FILLED } from './answers';
import { NO_PAIN } from './pain-areas';

/** The zone each area marks on the leg map, or none for "general". */
const ZONE: Readonly<Record<PlanArea, LegZone | null>> = {
  heel_arch: 'heel',
  achilles: 'achilles',
  flat_feet: 'arch',
  // The inner edge of the shin bone, where shin splints are felt.
  shin: 'tibia',
  general_plus: null,
};

/** The goal an area implies, where it implies one. Values from `goalValuesFor`
 * that every role is offered, so the preselection is always on screen. */
const GOAL: Readonly<Partial<Record<PlanArea, string>>> = {
  flat_feet: 'flatfeet',
  general_plus: 'injuryfree',
};

/** The kit the equipment step asks about. A backpack has no answer there. */
const KIT = ['step', 'towel', 'band', 'ball'] as const;

export function answersFromPlanCode(params: PlanCodeParams): Record<string, string[]> {
  const zone = ZONE[params.area];
  const kit = KIT.filter((item) => params.equipment.includes(item));
  const filled = ['pain', 'planDays', 'planMinutes', 'equipment'];
  const out: Record<string, string[]> = {
    pain: zone != null ? [zone] : [NO_PAIN],
    planDays: [`days${params.days}`],
    planMinutes: [`min${params.minutes}`],
    equipment: kit.length > 0 ? [...kit] : ['none'],
  };
  if (zone != null) {
    out.side = [params.side];
    filled.push('side');
  }
  const goal = GOAL[params.area];
  if (goal != null) out.goal = [goal];
  out[CODE_FILLED] = filled;
  return out;
}
