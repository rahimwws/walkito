/**
 * The two documents a subscription paywall must link to.
 *
 * **These are empty and the App Store will reject the build until they are
 * filled.** Apple requires a functional Terms (EULA) and Privacy Policy link on
 * any screen selling an auto-renewable subscription.
 *
 * Left blank rather than pointed at a plausible-looking URL: a link that 404s
 * fails review the same way a missing one does, and a guessed address is worse
 * than an obvious gap because it looks finished. `openLegal` no-ops on an empty
 * string, so the links are inert until someone pastes the real thing here.
 *
 * If the app uses Apple's standard EULA rather than its own, `terms` is
 * `https://www.apple.com/legal/internet-services/itunes/dev/stdeula/`.
 */
export const LEGAL = {
  terms: '',
  privacy: '',
} as const;
