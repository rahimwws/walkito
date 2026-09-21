import { describe, expect, test } from 'bun:test';

import { REST_HOURS } from '../src/entities/program/model/program';

const HOUR = 3_600_000;

/** The calculation `nextSessionAt` performs, isolated from the log it reads. */
function unlockAt(completedAt: number, now: number): number {
  const tomorrow = new Date(now);
  tomorrow.setHours(24, 0, 0, 0);
  return Math.max(tomorrow.getTime(), completedAt + REST_HOURS * HOUR);
}

describe('the rest between sessions', () => {
  test('is twelve hours', () => {
    expect(REST_HOURS).toBe(12);
  });

  test('an evening session does not open the next one at midnight', () => {
    // 19:39, which is when this was reported: midnight is 4h20m away, and the
    // card said "unlocks in 5h". Twelve hours puts it at 07:39 tomorrow.
    const evening = new Date(2026, 8, 21, 19, 39).getTime();
    const at = unlockAt(evening, evening);
    expect(at).toBe(evening + 12 * HOUR);
    expect(new Date(at).getHours()).toBe(7);
  });

  test('a morning session still waits for tomorrow', () => {
    // Finishing at 07:00 puts twelve hours at 19:00 the same evening, which
    // would hand out two sessions in one day. The calendar wins.
    const morning = new Date(2026, 8, 21, 7, 0).getTime();
    const at = unlockAt(morning, morning);
    const midnight = new Date(2026, 8, 22, 0, 0).getTime();
    expect(at).toBe(midnight);
  });

  test('the later of the two always wins', () => {
    const lateNight = new Date(2026, 8, 21, 23, 30).getTime();
    // Midnight is half an hour away; the rest is twelve hours.
    expect(unlockAt(lateNight, lateNight)).toBe(lateNight + 12 * HOUR);
  });
});
