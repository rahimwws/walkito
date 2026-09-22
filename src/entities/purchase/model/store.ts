import Constants from 'expo-constants';
import * as Device from 'expo-device';
import { Platform } from 'react-native';

import { type Purchases as Store, unconfigured } from './purchase';

/**
 * Which store the app talks to, decided once at startup.
 *
 * Three answers:
 *
 * - A key configured, on hardware or with the Test Store, gets RevenueCat.
 * - A simulator with no usable key reports the subscription as **live**, so the
 *   paywall cannot wall off development of everything behind it.
 * - Anything else gets the honest `unconfigured`, which grants nothing.
 */

/**
 * The publishable RevenueCat keys, per platform.
 *
 * `EXPO_PUBLIC_` because they are inlined into the bundle at build time, which
 * is correct for these: RevenueCat's SDK keys are public by design and carry no
 * authority beyond reading offerings and starting a purchase the user has to
 * approve. The *secret* key — the one that can grant entitlements server-side —
 * must never appear in this file or any other one that ships.
 *
 * Read through an explicit `Platform.select` rather than one key: Android will
 * need its own, and a single shared constant is how a build ends up quietly
 * talking to the wrong project.
 */
const KEY = Platform.select({
  ios: process.env.EXPO_PUBLIC_REVENUECAT_IOS_KEY,
  android: process.env.EXPO_PUBLIC_REVENUECAT_ANDROID_KEY,
  default: undefined,
});

/**
 * A RevenueCat Test Store key.
 *
 * These work without any App Store Connect setup at all — purchases complete,
 * entitlements activate, and it all runs on the simulator, because the
 * transaction never touches StoreKit. That makes them the right way to develop
 * the paywall, and a serious hazard to ship: RevenueCat's own guidance is
 * "never ship production apps configured with Test Store API keys". So the
 * production guard below refuses to use one rather than trusting anybody to
 * remember.
 */
const isTestKey = KEY?.startsWith('test_') === true;

/**
 * A RevenueCat **secret** key, which must never be here.
 *
 * `sk_` keys can grant entitlements and delete subscribers, and RevenueCat's
 * guidance is "never embed secret API keys in your app". An `EXPO_PUBLIC_`
 * variable is inlined into the JavaScript bundle at build time, so a secret key
 * in this slot is not merely unused — it is published to every device that
 * installs the app, where extracting it takes a text editor.
 *
 * This has already happened once on this project, which is why it is a check in
 * code and not a line in a README. It is rejected in development too: the point
 * is to make the mistake loud immediately, not at submission.
 */
const isSecretKey = KEY?.startsWith('sk_') === true;

/**
 * Which build this is: `development`, `preview`, or `production`.
 *
 * Read from the config rather than from `__DEV__`, because `__DEV__` cannot
 * make the distinction that matters here. A TestFlight build and an App Store
 * build are both release builds with `__DEV__` false — but a Test Store key is
 * exactly right in the first and must never reach the second. Guarding on
 * `__DEV__` would have made testing purchases on a real device impossible,
 * which is the one place they most need testing.
 */
const VARIANT = (Constants.expoConfig?.extra?.variant as string | undefined) ?? 'development';
const isProduction = VARIANT === 'production';

/**
 * Whether the configured key is one this build is allowed to use.
 *
 * Two failures are guarded. A secret key is refused outright. A test key is
 * refused in the production build, where it would ship an app that hands out
 * subscriptions free and reports them as real revenue — but allowed in
 * development and preview, so the whole purchase flow can be exercised on a
 * real device through TestFlight.
 *
 * Both fall through to `unconfigured` — a paywall that visibly cannot sell,
 * which is the loud failure, rather than one that silently sells wrong.
 */
const keyIsUsable =
  KEY != null && KEY.length > 0 && !isSecretKey && (!isTestKey || !isProduction);

// Dev-only, and deliberately not a silent return. A misconfigured key makes the
// paywall inert, and "nothing happened" is the hardest kind of bug to notice.
if (__DEV__ && isSecretKey) {
  console.error(
    '[purchases] A RevenueCat SECRET key (sk_…) is set in ' +
      `EXPO_PUBLIC_REVENUECAT_${Platform.OS.toUpperCase()}_KEY. It has been ignored.\n` +
      'Secret keys can grant entitlements and delete subscribers, and EXPO_PUBLIC_ ' +
      'variables are compiled into the shipped bundle. Revoke it in RevenueCat and ' +
      'use the public SDK key for this platform instead.',
  );
}

/**
 * True on a phone, false on a simulator or emulator.
 *
 * Read once at module scope: hardware does not change under a running app.
 */
export const onSimulator = !Device.isDevice;

/**
 * The paid product, handed out free, where it cannot be bought.
 *
 * StoreKit has no purchase flow on the simulator — there is no Apple ID signed
 * in to a sandbox — so without this, a simulator run is walled off from
 * everything past the paywall, which is most of the app.
 *
 * It reports `entitled` and `configured: false`, and those are not in tension.
 * `configured` answers "can this take money", which is no; `entitled` answers
 * "should the app be unlocked", which is yes. Keeping them apart is what stops
 * the paywall claiming a charge succeeded: `buy` still returns `unavailable`,
 * the sheet closes, and nobody is charged.
 *
 * This cannot reach a user: `Device.isDevice` is false only on a simulator or
 * emulator, and neither is something you can ship.
 */
const simulator: Store = {
  ...unconfigured,
  entitled: () => true,
};

function pick(): Store {
  // The real store first, even on the simulator. With a Test Store key the
  // whole flow works there — sheet, purchase, entitlement — and exercising the
  // real code path beats stubbing past it.
  if (keyIsUsable) {
    // Required lazily rather than imported at the top of the file. A static
    // import is evaluated when the module graph loads, which would run
    // RevenueCat's native bridge setup even in the builds that have already
    // decided not to use it.
    //
    // Guarded because a build missing the native module should degrade to "no
    // store" rather than crash on launch — the difference between a broken
    // paywall and a broken app.
    try {
      const { revenueCatStore } = require('./revenuecat') as typeof import('./revenuecat');
      // The real store, on a simulator too.
      //
      // This used to hand the simulator an unlocked copy, so the paywall could
      // not wall off development once it became a hard gate. That made the
      // paywall untestable: it never appeared. With a Test Store key the whole
      // purchase works on a simulator — sheet, transaction, entitlement — so
      // the way past the wall is to buy, exactly as it is on a device. The
      // stand-in below still covers the case that actually locks you out, which
      // is having no usable store at all.
      return revenueCatStore;
    } catch {
      return onSimulator ? simulator : unconfigured;
    }
  }

  return onSimulator ? simulator : unconfigured;
}

/**
 * The one the app talks to.
 *
 * The paywall's in-flight, failed, cancelled, restored and nothing-found
 * branches were all written against this contract before there was anything
 * behind it, so none of them needed touching when there was.
 */
export const purchases: Store = pick();

/**
 * Start the store, once, at launch.
 *
 * Separate from picking it because configuration is a side effect with a
 * network call in it, and module scope is the wrong place for either. Resolves
 * when the first entitlement answer is in.
 */
export async function startPurchases(): Promise<void> {
  if (!purchases.configured || !keyIsUsable || KEY == null) return;
  const { startRevenueCat } = require('./revenuecat') as typeof import('./revenuecat');
  await startRevenueCat(KEY, !isProduction);
}

/**
 * Why the store is not selling, in one line, or null when it is.
 *
 * For the developer, not the user — a paywall that silently cannot charge is
 * the bug that gets discovered in review.
 */
export function storeDiagnosis(): string | null {
  if (purchases.configured) return null;
  if (KEY == null || KEY.length === 0) {
    return `No EXPO_PUBLIC_REVENUECAT_${Platform.OS.toUpperCase()}_KEY set.`;
  }
  if (isSecretKey) {
    return 'A secret (sk_) key is configured and has been ignored. Use the public SDK key.';
  }
  if (isTestKey && isProduction) {
    return 'A Test Store key is configured in the production build and has been ignored.';
  }
  return 'The RevenueCat native module could not be loaded.';
}
