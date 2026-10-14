import { useSyncExternalStore } from 'react';
import { Platform } from 'react-native';

import { FIRST_PRODUCTS, PRODUCTS, type Subscription } from '@/entities/purchase';

/**
 * The App Review account, in Settings.
 *
 * review@walkito.app has access granted by account (`comp_access`), not a
 * store subscription, so the two screens that are only for subscribers would
 * never reach a reviewer: the cancel flow behind "Manage subscription" (where
 * the budget answer sells the 3-month pass) and the limited offer (shown only
 * to somebody who skipped the paywall). With `review_mode` on the account's
 * profile (`0017_three_month_pass.sql`), Settings shows both: "Manage
 * subscription" over this stand-in, and a "Special offers" row.
 */

/**
 * The subscription the review account's "Manage subscription" stands on: a
 * yearly plan of this platform's store that renews, with no date, since no
 * store bills it. Nothing is charged or changed by it; "Cancel anyway" opens
 * the store's own page, as for anybody.
 */
export function reviewStandIn(): Subscription {
  const ios = Platform.OS === 'ios';
  return {
    kind: 'subscription',
    productId: ios ? PRODUCTS.annual : FIRST_PRODUCTS.annual,
    period: 'annual',
    willRenew: true,
    expiresAt: null,
    periodType: 'normal',
    store: ios ? 'app_store' : 'play_store',
    familyShared: false,
    managementUrl: null,
  };
}

/**
 * Development only: "Special offers" open by itself over Settings
 * (`walkito.dev://?previewLimitedOffer`, with the sample prices on), whether
 * or not review mode is. The number changes with every link, so a second one
 * opens it again.
 */
let preview: number | null = null;
const listeners = new Set<() => void>();

export function devPreviewLimitedOffer(): void {
  if (!__DEV__) return;
  preview = Date.now();
  for (const listener of listeners) listener();
}

export function useLimitedOfferPreview(): number | null {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    () => preview,
    () => null,
  );
}
