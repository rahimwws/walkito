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

/**
 * Whether Superwall is started at all. Off: the app's own paywall is the only
 * one, whatever the dashboard holds.
 *
 * While it was on, nothing in the app decided what a placement showed: the
 * dashboard did, per audience, with no build and no update. Every campaign
 * was a 100% holdout, so nothing was drawn, but one changed split would put a
 * dashboard paywall (English only, its copy outside the catalogue and its
 * rules) over ours from the offer's first step, and the SDK's own placements
 * (`app_launch`, `session_start`, `paywall_decline`) need no call from us.
 * The SDK has no "count but never present", so the only setting that
 * guarantees ours is not to start it.
 *
 * Off costs what Superwall counted: who reached `paywall_first`,
 * `paywall_comeback`, `paywall_expired` and `cancel_budget`, and the
 * `superwall_event` series. PostHog (`paywall_viewed`, `purchase_*`) and
 * RevenueCat count the same people. The native module stays linked, so this
 * is JavaScript only and `true` brings everything back.
 */
export const SUPERWALL_ON: boolean = false;
