import { describe, expect, test } from 'bun:test';

import { REFERRAL_BONUS_MAX_INVITES, referralBonusDays } from './bonus';

describe('referralBonusDays', () => {
  test('four weeks for each friend', () => {
    expect(referralBonusDays(0)).toBe(0);
    expect(referralBonusDays(1)).toBe(28);
    expect(referralBonusDays(2)).toBe(56);
  });

  test('stops counting at the cap', () => {
    const capped = referralBonusDays(REFERRAL_BONUS_MAX_INVITES);
    expect(referralBonusDays(REFERRAL_BONUS_MAX_INVITES + 5)).toBe(capped);
  });

  test('a bad count earns nothing rather than taking time away', () => {
    expect(referralBonusDays(-2)).toBe(0);
    expect(referralBonusDays(Number.NaN)).toBe(0);
  });
});
