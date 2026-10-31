/**
 * Where a subscription is managed, and the promotional offer the cancel flow
 * may make in its place (`pages/settings`, Settings → Manage subscription).
 *
 * Here rather than in the purchase entity because they are written-down
 * contracts with the stores, like the legal links: a URL Google documents and
 * an identifier typed by hand into App Store Connect. A typo in either is a
 * button that opens nothing or an offer that never appears, so each lives in
 * one place.
 */

/** The Android application id, as Google Play knows it: the `package` of a
 * Play deep link. The same as the iOS bundle identifier (`app.config.ts`). */
export const PLAY_PACKAGE = 'com.walkito.app';

/**
 * The stores' own pages listing this person's subscriptions, for when the
 * in-app sheet cannot be shown: a build without the store, a subscription
 * bought in the other store, Apple's sheet failing to present.
 */
export const SUBSCRIPTIONS_URL = {
  appStore: 'https://apps.apple.com/account/subscriptions',
  playStore: 'https://play.google.com/store/account/subscriptions',
} as const;

/**
 * Google Play's subscription center, open on one subscription: where it is
 * cancelled, and where it is paused (Play's pause lives there, never in the
 * app). The `sku` is the subscription id without a base plan, as Google
 * documents the link.
 */
export function playSubscriptionUrl(sku: string): string {
  const id = sku.split(':')[0];
  return `${SUBSCRIPTIONS_URL.playStore}?sku=${encodeURIComponent(id)}&package=${PLAY_PACKAGE}`;
}

/**
 * The App Store promotional offer the cancel flow may make, by the identifier
 * it has in App Store Connect (Subscriptions → the subscription → Promotional
 * Offers). RevenueCat signs it with the In-App Purchase key it holds, and the
 * store says per customer whether one can be had.
 *
 * It must exist on every subscription it should be offered on: the yearly and
 * monthly ones. An offer missing from a product is simply not shown there.
 * What the screen says comes from the store's answer, never from this name.
 *
 * The budget answer used to be a promotional offer too (the next year at 40%
 * off); it is the 3-month pass at the retention price now, a product of its
 * own (`OFFERINGS.retentionBudget` in the purchase entity).
 */
export const RETENTION_OFFERS = {
  /** Free, one month. */
  freeMonth: 'walkito_retention_free_month',
} as const;
