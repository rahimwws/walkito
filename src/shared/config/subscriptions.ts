/**
 * Where a subscription is managed, and the retention offers the cancel flow
 * may make in its place (`pages/settings`, Settings → Manage subscription).
 *
 * Here rather than in the purchase entity because they are written-down
 * contracts with the stores, like the legal links: a URL Google documents and
 * two identifiers typed by hand into App Store Connect. A typo in either is a
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
 * The App Store promotional offers the cancel flow may make, by the
 * identifier each has in App Store Connect (Subscriptions → the subscription
 * → Promotional Offers). RevenueCat signs them with the In-App Purchase key it
 * holds, and the store says per customer whether one can be had.
 *
 * Each must exist on every subscription it should be offered on: the next
 * year at 40% off on the yearly products, the free month on the yearly and
 * monthly ones. An offer missing from a product is simply not shown there.
 * The figures on screen come from the store's answer, never from these names:
 * `nextYear40` says what the offer was set up as, and the screen prints the
 * percentage the store's two prices give.
 */
export const RETENTION_OFFERS = {
  /** Pay up front, one year, 40% under the product's price. */
  nextYear40: 'walkito_annual_retention_40',
  /** Free, one month. */
  freeMonth: 'walkito_retention_free_month',
} as const;
