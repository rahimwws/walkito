import { requireOptionalNativeModule } from 'expo';
import { useSyncExternalStore } from 'react';
import { Linking, Platform } from 'react-native';

import { APP_STORE_REVIEW_URL, PLAY_STORE_URL } from '@/shared/config';
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

// ── Asked for by the user ───────────────────────────────────────────────────

/**
 * A rating the user asked to give: the founders' note's "Rate Walkito".
 *
 * Queued rather than shown at once, because the tap also closes the note and,
 * at the end of onboarding, swaps the whole tree for Home (or the paywall). A
 * prompt raised during that swap would be dismissed with the screen it sat on.
 * The root layout takes the request once the next screen is up — see
 * `useQueuedReview` — and calls `reviewNow`.
 */
let queued = false;
const listeners = new Set<() => void>();

export function queueReview(): void {
  queued = true;
  for (const listener of listeners) listener();
}

/** Takes the queued request, if there is one, so it is acted on once. */
export function takeQueuedReview(): boolean {
  if (!queued) return false;
  queued = false;
  for (const listener of listeners) listener();
  return true;
}

export function useReviewQueued(): boolean {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    () => queued,
    () => false,
  );
}

/**
 * The rating, now: Apple's own star sheet over the app, or the store's
 * write-a-review page where the sheet cannot be raised (no native module, or
 * `hasAction` false — Android before the Play listing, or an old build).
 *
 * Skips our own 120-day gap, since the user asked, but records the ask so the
 * prompt at a win does not follow it a day later. iOS may still choose not to
 * show the sheet (it allows three a year, and none in TestFlight); a request
 * the user made is worth that risk, and the store page stays one tap away in
 * Profile.
 */
export async function reviewNow(now: number = Date.now()): Promise<'sheet' | 'store' | 'none'> {
  kv.set(LAST_KEY, String(now));
  if (requireOptionalNativeModule('ExpoStoreReview') != null) {
    try {
      const StoreReview = require('expo-store-review') as typeof import('expo-store-review');
      if (await StoreReview.hasAction()) {
        await StoreReview.requestReview();
        return 'sheet';
      }
    } catch {
      // Fall through to the store page.
    }
  }
  const url = Platform.OS === 'ios' ? APP_STORE_REVIEW_URL : PLAY_STORE_URL;
  if (url == null) return 'none';
  await Linking.openURL(url).catch(() => {});
  return 'store';
}
