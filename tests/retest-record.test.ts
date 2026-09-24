/**
 * A retest is written down and read against the one before.
 *
 * `recordRetest` had no caller, so this path had never run in the app: levels
 * stayed empty and the expiry screen had nothing to compare.
 */

import { describe, expect, test } from 'bun:test';

import { recordRetest, retestResults } from '@/entities/program/model/program';

describe('recording retests', () => {
  test('the day-one baseline, then day 14 measured against it', () => {
    const baseline = recordRetest(1, { calf: 9, otherCalf: 16, arch: 15, balance: 8 });
    const calfAtStart = baseline.rows.find((row) => row.zone === 'calf');
    // Nothing before the baseline: the row holds rather than jumping from zero.
    expect(calfAtStart?.from).toBe(calfAtStart?.to);

    const later = recordRetest(14, { calf: 16, otherCalf: 17, arch: 25, balance: 14 });
    const calf = later.rows.find((row) => row.zone === 'calf');
    expect(calf?.from).toBe('9');
    expect(calf?.to).toBe('16');
    expect(calf?.level).toBeGreaterThan(calf?.wasLevel ?? 0);
    expect(later.delta).toBe(7);

    const stored = retestResults();
    expect(stored.map((row) => row.dayNumber)).toEqual([1, 14]);
    expect(stored[0].blockIndex).toBe(0);
    expect(stored[1].calf).toEqual({ left: 16, right: 17 });
  });
});
