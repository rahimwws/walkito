import { requireOptionalNativeModule } from 'expo';

import { kv } from '@/shared/lib/storage';

/**
 * Apple's own review prompt, asked for at a win and nowhere else.
 *
 * The native prompt rather than a sheet of our own: App Review 5.6.1 allows
 * only the system one, and iOS decides whether it actually appears (at most
 * three times a year). Asked at most once every 120 days from our side too, so
 * a string of good days does not spend the year's three on one week.
 *
 * Lazily required, like the other native modules added after a dev client was
 * built: a binary without it drops the request instead of failing at import.
 */
const LAST_KEY = 'review/last-asked';
const GAP_MS = 120 * 24 * 60 * 60 * 1000;

export type ReviewWin = 'test-improved' | 'pain-down' | 'streak-7';

export async function askForReview(_win: ReviewWin, now: number = Date.now()): Promise<boolean> {
  const last = Number(kv.getString(LAST_KEY) ?? 0);
  if (now - last < GAP_MS) return false;
  // Probed first: requiring the JS package against a binary without the native
  // side reports an error on the way to throwing, even inside a `try`.
  if (requireOptionalNativeModule('ExpoStoreReview') == null) return false;
  try {
    const StoreReview = require('expo-store-review') as typeof import('expo-store-review');
    if (!(await StoreReview.hasAction())) return false;
    kv.set(LAST_KEY, String(now));
    await StoreReview.requestReview();
    return true;
  } catch {
    return false;
  }
}
