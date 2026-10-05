/**
 * Superwall's public API keys, one per platform.
 *
 * Public on purpose, like RevenueCat's SDK keys: they identify the app to
 * Superwall and are compiled into the bundle. Superwall → Settings → Keys.
 *
 * Android's comes from `EXPO_PUBLIC_SUPERWALL_ANDROID_KEY` (EAS environment)
 * until it is written here; with no key for a platform Superwall is not
 * started there at all and the app's own paywall is the only one.
 */
export const SUPERWALL_KEYS: { ios?: string; android?: string } = {
  ios: 'pk_ZDTPjlTrdgYkCn_gig2iP',
  android: process.env.EXPO_PUBLIC_SUPERWALL_ANDROID_KEY || undefined,
};
