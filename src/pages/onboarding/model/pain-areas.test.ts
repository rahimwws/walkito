import { describe, expect, test } from 'bun:test';

import { NO_PAIN, painAreasFor, zonesIn } from './pain-areas';

describe('painAreasFor', () => {
  test('groups zones into the complaint a person would name', () => {
    expect(painAreasFor(['arch', 'toes', 'inner_ankle'])).toEqual(['foot']);
    expect(painAreasFor(['soleus', 'calf'])).toEqual(['calf']);
    expect(painAreasFor(['tibia', 'tib_ant'])).toEqual(['shin']);
  });

  test('keeps the order zones were first touched in', () => {
    expect(painAreasFor(['achilles', 'heel', 'arch'])).toEqual(['achilles', 'heel', 'foot']);
  });

  test('"nothing hurts" wins over anything else in the answer', () => {
    expect(painAreasFor([NO_PAIN])).toEqual([NO_PAIN]);
    expect(painAreasFor(['heel', NO_PAIN])).toEqual([NO_PAIN]);
  });

  test('an unanswered question is no complaint at all', () => {
    expect(painAreasFor(undefined)).toEqual([]);
    expect(painAreasFor([])).toEqual([]);
  });
});

describe('zonesIn', () => {
  test('drops values that are not zones', () => {
    expect(zonesIn(['heel', NO_PAIN, 'knee', 42])).toEqual(['heel']);
    expect(zonesIn('heel')).toEqual([]);
  });
});
