/**
 * AppsFlyer: who sent an install, and what it went on to pay.
 *
 * The dev key is public on purpose, like RevenueCat's and Superwall's SDK keys:
 * it identifies the app to AppsFlyer and is compiled into every binary.
 * AppsFlyer → App settings → Dev key. One key covers both apps (iOS
 * `id6813076846`, Android `com.walkito.app`).
 *
 * The OneLink domain and template are here for the code that reads links;
 * the native side (`ios.associatedDomains`, `android.intentFilters`) declares
 * them again in app.json, and `scripts/verify-config` checks the two agree.
 */
export const APPSFLYER = {
  devKey: 'sd2XAb2T2GQZt3JjgaJiSZ',
  /** The App Store id, which AppsFlyer's iOS SDK needs and Android does not. */
  iosAppId: '6813076846',
  oneLinkHost: 'walkito.onelink.me',
  oneLinkTemplate: '2L97',
} as const;
