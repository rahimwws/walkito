/**
 * AppsFlyer: who sent an install, and what it went on to pay.
 *
 * The dev key reaches the bundle the way RevenueCat's SDK keys do, as an
 * `EXPO_PUBLIC_` variable from the EAS environment (and `.env.local`), never
 * from the repository. It is compiled into every binary, but AppsFlyer's
 * server-to-server events API accepts the same key, and this repository is
 * public: in the source it would be one search away from anyone wanting to
 * send the app fake installs. AppsFlyer → App settings → Dev key; one key
 * covers both apps (iOS `id6813076846`, Android `com.walkito.app`). Without
 * it AppsFlyer simply does not start.
 *
 * The OneLink domain and template are here for the code that reads links;
 * the native side (`ios.associatedDomains`, `android.intentFilters`) declares
 * them again in app.json, and `scripts/verify-config` checks the two agree.
 */
export const APPSFLYER = {
  devKey: process.env.EXPO_PUBLIC_APPSFLYER_DEV_KEY ?? '',
  /** The App Store id, which AppsFlyer's iOS SDK needs and Android does not. */
  iosAppId: '6813076846',
  oneLinkHost: 'walkito.onelink.me',
  oneLinkTemplate: '2L97',
} as const;
