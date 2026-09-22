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
 */
export const SUPPORT_EMAIL = 'hello@walkito.app';
