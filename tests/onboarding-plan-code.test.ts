import { describe, expect, test } from 'bun:test';

import { CODE_FILLED, codeFilled } from '../src/pages/onboarding/model/answers';
import { painAreasFor } from '../src/pages/onboarding/model/pain-areas';
import { answersFromPlanCode } from '../src/pages/onboarding/model/plan-code';
import { decodePlanCode, encodePlanCode, type PlanCodeParams } from '../src/shared/lib/plan-code';

/**
 * A plan code from ChatGPT or Claude, as onboarding answers. The steps it
 * answers are stepped over; the safety check never is, so a code that names a
 * sore area has to leave the pain answer saying something hurts.
 */

const base: PlanCodeParams = {
  source: 'chatgpt',
  area: 'heel_arch',
  minutes: 5,
  days: 5,
  equipment: ['step', 'towel'],
  side: 'left',
};

/** `hurts` from the step table, which cannot load under bun (it imports icons). */
const hurts = (answers: Record<string, string[]>) => answers.pain.some((value) => value !== 'none');

describe('answers from a plan code', () => {
  test('a sore area marks its zone and its side, and still hurts', () => {
    const a = answersFromPlanCode(base);
    expect(a.pain).toEqual(['heel']);
    expect(a.side).toEqual(['left']);
    expect(hurts(a)).toBe(true);
    expect(painAreasFor(a.pain)).toEqual(['heel']);
    expect(codeFilled(a, 'pain')).toBe(true);
    expect(codeFilled(a, 'side')).toBe(true);
    // The safety check is never answered by a code.
    expect(a.safety).toBeUndefined();
    expect(codeFilled(a, 'safety')).toBe(false);
  });

  test('each area lands on the map', () => {
    expect(answersFromPlanCode({ ...base, area: 'achilles' }).pain).toEqual(['achilles']);
    expect(answersFromPlanCode({ ...base, area: 'shin' }).pain).toEqual(['tibia']);
    const flat = answersFromPlanCode({ ...base, area: 'flat_feet' });
    expect(flat.pain).toEqual(['arch']);
    expect(flat.goal).toEqual(['flatfeet']);
  });

  test('general is no pain, no side, and the stronger-feet goal', () => {
    const a = answersFromPlanCode({ ...base, area: 'general_plus' });
    expect(a.pain).toEqual(['none']);
    expect(hurts(a)).toBe(false);
    expect(a.side).toBeUndefined();
    expect(codeFilled(a, 'side')).toBe(false);
    expect(a.goal).toEqual(['injuryfree']);
  });

  test('the schedule and the kit', () => {
    const a = answersFromPlanCode({ ...base, minutes: 10, days: 3, equipment: ['band', 'ball', 'backpack'] });
    expect(a.planMinutes).toEqual(['min10']);
    expect(a.planDays).toEqual(['days3']);
    expect(a.equipment).toEqual(['band', 'ball']);
    for (const key of ['planDays', 'planMinutes', 'equipment']) expect(codeFilled(a, key)).toBe(true);
    expect(answersFromPlanCode({ ...base, equipment: [] }).equipment).toEqual(['none']);
    // A backpack alone has no answer on the equipment step.
    expect(answersFromPlanCode({ ...base, equipment: ['backpack'] }).equipment).toEqual(['none']);
  });

  test('round trip from a real code', () => {
    const params = decodePlanCode(encodePlanCode(base));
    expect(params).not.toBeNull();
    const a = answersFromPlanCode(params!);
    expect(a[CODE_FILLED]).toEqual(['pain', 'planDays', 'planMinutes', 'equipment', 'side']);
  });
});
