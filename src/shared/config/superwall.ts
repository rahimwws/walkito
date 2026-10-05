/**
 * Superwall's public API keys, one per platform.
 *
 * Public on purpose, like RevenueCat's SDK keys: they identify the app to
 * Superwall and are compiled into the bundle. Superwall → Settings → API keys,
 * per app (iOS 57295, Android 57297). With no key for a platform Superwall is
 * not started there at all and the app's own paywall is the only one.
 */
export const SUPERWALL_KEYS: { ios?: string; android?: string } = {
  ios: 'pk_ZDTPjlTrdgYkCn_gig2iP',
  android: 'pk_QCCRU79zJqv_9hD5KhzZK',
};
