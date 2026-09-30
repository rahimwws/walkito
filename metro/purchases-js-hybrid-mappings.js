/**
 * Stands in for `@revenuecat/purchases-js-hybrid-mappings` in the iOS and
 * Android bundles. `metro.config.js` points the import here; the web bundle
 * still gets the real package.
 *
 * The real package is RevenueCat's browser SDK (purchases-js, with its Svelte
 * paywall and Stripe checkout) wrapped for React Native, about 1.5 MB of
 * bytecode. `react-native-purchases` requires it unconditionally, but only
 * calls it in "browser mode": Expo Go, the Rork sandbox, or the web. A dev or
 * store build of this app is none of those, because it links the native
 * `RNPurchases` module, and it cannot run in Expo Go at all (MMKV and HealthKit
 * are Nitro modules). So on a phone it is dead weight: required, evaluated,
 * never called.
 *
 * `purchases.js` still requires `browser/nativeModule.js` at the top level,
 * and that requires this file, so it has to evaluate cleanly. Every access is
 * inside a function body, so nothing here may throw until one of them is
 * actually called. If one ever is, the purchase flow has gone somewhere it
 * never should on a phone, and the error says so plainly instead of failing
 * later with "undefined is not a function".
 */

'use strict';

function unavailable() {
  throw new Error(
    '[walkito] RevenueCat browser mode was entered in a native build. ' +
      '@revenuecat/purchases-js-hybrid-mappings is replaced by a stub on iOS ' +
      'and Android (see metro.config.js); the native RNPurchases module should ' +
      'have been used instead.',
  );
}

/** The package's one export. Only the static entry points are reachable:
 * every instance method is reached through `getInstance()`, which throws. */
class PurchasesCommon {
  static configure() {
    return unavailable();
  }
  static getInstance() {
    return unavailable();
  }
  static setLogLevel() {
    return unavailable();
  }
  static setLogHandler() {
    return unavailable();
  }
  static isConfigured() {
    return unavailable();
  }
  static setProxyUrl() {
    return unavailable();
  }
}

exports.PurchasesCommon = PurchasesCommon;
