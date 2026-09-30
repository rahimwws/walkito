/**
 * The two documents a subscription paywall must link to, and where support
 * lives.
 *
 * Apple requires a functional Terms (EULA) and Privacy Policy link on any
 * screen selling an auto-renewable subscription, and a link that 404s fails
 * review the same way a missing one does. These are the app's own documents
 * rather than Apple's standard EULA, which is why `terms` does not point at
 * `apple.com/legal/.../stdeula/`.
 *
 * Verified as distinct pages, not just as 200s: walkito.site serves the home
 * page with a 200 for any unknown path, so a status code proves nothing on this
 * host. Both were confirmed by their titles — "Terms of Use | Walkito" and
 * "Privacy | Walkito".
 */
export const LEGAL = {
  terms: 'https://walkito.site/terms/',
  privacy: 'https://walkito.site/privacy/',
  /** Where "Contact support" goes. A page rather than a `mailto:`, so the user
   * gets a form and we get a routable address — see `SUPPORT_EMAIL` below for
   * the one place that still needs a bare address. */
  support: 'https://walkito.site/support/',
} as const;

/**
 * Where "a person replies" actually goes.
 *
 * Here rather than in the quick-action provider that first needed it: the
 * profile screen needs the same address, and two copies of a support address is
 * how one of them ends up pointing at a mailbox nobody reads.
 *
 * On walkito.site, not walkito.app: walkito.app has no MX record, so every
 * message to hello@walkito.app bounced (it did on 24 September). The mailbox
 * that exists is the Hostinger one, and the emails the app sends reply-to it.
 */
export const SUPPORT_EMAIL = 'hello@walkito.site';

/**
 * The numeric id App Store Connect assigned to Walkito — the one in
 * `apps.apple.com/app/id6813076846`, and the `ascAppId` in `eas.json`. Not the
 * bundle identifier.
 */
export const APPLE_APP_ID = '6813076846';

/**
 * Where "rate the app" sends someone: the App Store's own write-a-review page.
 *
 * Until the first version is live on the store this page says the app is not
 * available, so the button only does something useful from launch day on.
 *
 * `expo-store-review` is the other way to do this — Apple's own in-app prompt.
 * It is not used here because it cannot be relied on: iOS decides whether to
 * show it at all, caps it at three times a year, and does nothing in a
 * simulator, so a tap has no observable result. This link always works.
 */
export const APP_STORE_REVIEW_URL = `https://apps.apple.com/app/id${APPLE_APP_ID}?action=write-review`;
