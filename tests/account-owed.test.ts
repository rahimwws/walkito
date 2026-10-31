import { describe, expect, mock, test } from 'bun:test';

import { kv } from '@/shared/lib/storage';

// The session module reaches the Supabase client, which the test runner cannot
// load; only the two reads it makes are needed here.
mock.module('@/shared/lib/supabase', () => ({
  isAnonymousSession: async () => true,
  signedInBefore: () => false,
}));

const OWED_KEY = 'session/account-owed';

/**
 * An account owed on Android after "Continue for now": asked again on the next
 * launch, never a wall. Holding the tabs on the stored flag alone kept the
 * person on the setup screens for good, this launch and every one after.
 */
describe('an account owed after "Continue for now"', () => {
  test('a launch after a deferral holds the save screen, and passing it again lets them through', async () => {
    kv.set(OWED_KEY, true);
    const setup = await import('@/entities/session/model/setup');

    expect(setup.accountHeld()).toBe(true);

    setup.deferAccount();
    expect(setup.accountHeld()).toBe(false);
    // Still asked on the next launch.
    expect(kv.getBoolean(OWED_KEY)).toBe(true);

    // A second deferral on the same launch changes nothing and still lets them through.
    setup.deferAccount();
    expect(setup.accountHeld()).toBe(false);
    expect(kv.getBoolean(OWED_KEY)).toBe(true);
  });

  test('signing in settles it for good', async () => {
    const setup = await import('@/entities/session/model/setup');
    setup.deferAccount();
    setup.settleAccount();
    expect(setup.accountHeld()).toBe(false);
    expect(kv.getBoolean(OWED_KEY)).toBe(false);
  });
});
