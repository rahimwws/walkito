import { describe, expect, test } from 'bun:test';

import { PAIN_ZONES } from '../../../entities/leg-zone/model/leg-zones';

import { OUTLOOK_STOPS, STRENGTHENED, zoneGain } from './outlook';

describe('zoneGain', () => {
  test('every zone starts at zero and only ever improves', () => {
    for (const painless of [false, true]) {
      for (const zone of PAIN_ZONES) {
        const course = Array.from({ length: OUTLOOK_STOPS }, (_, stop) => zoneGain(zone, stop, painless));
        expect(course[0]).toBe(0);
        for (let i = 1; i < course.length; i += 1) expect(course[i]).toBeGreaterThan(course[i - 1]);
        expect(course[course.length - 1]).toBeLessThanOrEqual(100);
      }
    }
  });

  test('the tendon is the slowest to settle at every stop', () => {
    for (let stop = 1; stop < OUTLOOK_STOPS; stop += 1) {
      for (const zone of PAIN_ZONES) {
        expect(zoneGain('achilles', stop, false)).toBeLessThanOrEqual(zoneGain(zone, stop, false));
      }
    }
  });

  test('stops outside the range clamp rather than read off the end', () => {
    expect(zoneGain('heel', -1, false)).toBe(0);
    expect(zoneGain('heel', 99, false)).toBe(zoneGain('heel', OUTLOOK_STOPS - 1, false));
  });

  test('the healthy leg is shown on zones the map can draw', () => {
    for (const zone of STRENGTHENED) expect(PAIN_ZONES).toContain(zone);
  });
});
