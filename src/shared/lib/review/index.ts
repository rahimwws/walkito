import { requireOptionalNativeModule } from 'expo';
import { useSyncExternalStore } from 'react';
import { AppState, Linking, Platform } from 'react-native';

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

/** What the prompt is asked at. `third-open` is not a win in the plan's
 * sense: the third time the app is opened, by which point somebody has come
 * back to it twice of their own accord (see `countAppOpens`). */
export type ReviewWin = 'test-improved' | 'pain-down' | 'streak-7' | 'third-open';

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

// ── Held ─────────────────────────────────────────────────────────────────────

/**
 * Whether the app is saying well done itself right now (a streak milestone's
 * sheet, or one about to rise), so Apple's prompt waits until it is over: the
 * system's card over ours is two celebrations at once, and the milestone of
 * seven is also the review's `streak-7`. Counted, so one holder cannot
 * release another's hold.
 */
let holds = 0;
const heldListeners = new Set<() => void>();

function heldChanged(): void {
  for (const listener of heldListeners) listener();
}

/** Holds the prompt until the function it returns is called. */
export function holdReview(): () => void {
  holds += 1;
  heldChanged();
  let released = false;
  return () => {
    if (released) return;
    released = true;
    holds -= 1;
    heldChanged();
  };
}

export function reviewHeld(): boolean {
  return holds > 0;
}

export function useReviewHeld(): boolean {
  return useSyncExternalStore(
    (listener) => {
      heldListeners.add(listener);
      return () => heldListeners.delete(listener);
    },
    reviewHeld,
    reviewHeld,
  );
}

// ── Opens ────────────────────────────────────────────────────────────────────

/**
 * How many times the app has been opened, for the prompt at the third.
 *
 * An open is a cold start, or coming back to the app after at least half an
 * hour away from it. A return from a glance at a message is the same visit
 * and is not counted; half an hour gone is a visit of its own, whether or not
 * iOS kept the process alive in between. Counted from the first launch of a
 * build that has this, onboarding's included, and kept in MMKV so a relaunch
 * carries the count on.
 */
const OPENS_KEY = 'review/app-opens';
const THIRD_OPEN_KEY = 'review/third-open-asked';
/** Away at least this long and the return counts as an open. */
const AWAY_MS = 30 * 60 * 1000;
export const THIRD_OPEN = 3;

let opens = kv.getNumber(OPENS_KEY) ?? 0;
/** This process has counted its own cold start. Module scope, so a remount of
 * whatever calls `countAppOpens` (a fast refresh in development) does not
 * count the same launch twice. */
let launchCounted = false;
const openListeners = new Set<() => void>();

function opened(): void {
  opens += 1;
  kv.set(OPENS_KEY, opens);
  for (const listener of openListeners) listener();
}

/**
 * Starts counting: this launch, then every return after `AWAY_MS` in the
 * background. `inactive` (Control Centre, the app switcher held open) is not
 * leaving. Returns the unsubscribe.
 */
export function countAppOpens(): () => void {
  let awaySince: number | null = null;
  if (!launchCounted) {
    launchCounted = true;
    // HealthKit relaunches the app in the background every hour or so: that is
    // not an open. Such a launch counts when it is first brought to the front.
    if (AppState.currentState === 'background') awaySince = 0;
    else opened();
  }
  const subscription = AppState.addEventListener('change', (next) => {
    if (next === 'background') {
      if (awaySince == null) awaySince = Date.now();
      return;
    }
    if (next !== 'active' || awaySince == null) return;
    if (Date.now() - awaySince >= AWAY_MS) opened();
    awaySince = null;
  });
  return () => subscription.remove();
}

function subscribeOpens(listener: () => void): () => void {
  openListeners.add(listener);
  return () => {
    openListeners.delete(listener);
  };
}

const openCount = () => opens;

export function useAppOpens(): number {
  return useSyncExternalStore(subscribeOpens, openCount, openCount);
}

/** The prompt at the third open has been asked for, ever. */
export function thirdOpenAsked(): boolean {
  return kv.getBoolean(THIRD_OPEN_KEY) === true;
}

/**
 * The prompt at the third open, once in the life of the install, passed
 * through `askForReview`, whose 120-day gap still stands: a rating given from
 * the founders' note a day earlier is not followed by this one.
 *
 * Marked as asked only when the system took the request, or when the gap
 * turned it down (it was asked recently enough). A phone that cannot show the
 * sheet (an old dev client, Android before the listing is live) keeps its ask
 * for a later open, and only an app in front asks at all: a request from the
 * background shows nothing and would spend it.
 */
export async function askAtThirdOpen(now: number = Date.now()): Promise<boolean> {
  if (thirdOpenAsked() || opens < THIRD_OPEN) return false;
  if (AppState.currentState !== 'active') return false;
  const last = Number(kv.getString(LAST_KEY) ?? 0);
  if (now - last < GAP_MS) {
    kv.set(THIRD_OPEN_KEY, true);
    return false;
  }
  const shown = await askForReview('third-open', now);
  if (shown) kv.set(THIRD_OPEN_KEY, true);
  return shown;
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
