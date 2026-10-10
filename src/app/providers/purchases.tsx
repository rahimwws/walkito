import { useEffect } from 'react';
import { AppState } from 'react-native';

import { syncExpiryNotice } from '@/entities/notifications';
import { purchases, startCompAccess, startPurchases } from '@/entities/purchase';
import { startAppsFlyer } from '@/shared/lib/appsflyer';

/**
 * Starts the store once, and re-checks the subscription on the way back in.
 *
 * Mounted at the root, like the health pipeline, so configuration happens once
 * for the life of the app rather than once per visit to the paywall. Nothing
 * here renders and nothing here blocks: the entitlement gate reads a cached
 * answer that is correct from the first frame, and this only keeps it fresh.
 */
export function usePurchases(): void {
  useEffect(() => {
    // Deliberately unawaited and deliberately uncaught-by-the-caller. A store
    // that fails to start leaves the app not-entitled, which is the same state
    // it was in a moment earlier — there is nothing for a user to do about it
    // and nothing worth interrupting launch for.
    //
    // AppsFlyer first, alongside rather than before: RevenueCat's start asks
    // it for the install's AppsFlyer id (`linkAppsFlyer`) and waits a few
    // seconds at most. Production builds only; a no-op everywhere else.
    void startAppsFlyer();
    void startPurchases();
    // Access granted by account, read now and after every sign-in.
    startCompAccess();
  }, []);

  useEffect(() => {
    /**
     * The one case the push listener cannot cover.
     *
     * A subscription bought, cancelled or refunded in the App Store app —
     * outside this process — produces no callback here. RevenueCat notices on
     * its next fetch, so foregrounding is the moment to ask: it is exactly when
     * the user might have come back from doing that.
     */
    const sub = AppState.addEventListener('change', (state) => {
      if (state === 'active') void purchases.refresh();
    });
    return () => sub.remove();
  }, []);

  useEffect(() => {
    /**
     * Keep the week-before warning pointed at the real end date — which only a
     * legacy one-time pass has.
     *
     * A subscription has no end to warn about: it renews, and the App Store
     * itself tells a subscriber about a price or a cancellation. So for every
     * subscriber `passEndsAt()` is null and this cancels any warning left over.
     * For somebody who still holds a pass, the end can move after purchase — a
     * restore on a new device establishes it, invite days extend it, a refund
     * removes it — and each arrives as a store change and nothing else, so this
     * is the only place that sees all of them.
     *
     * Idempotent — `syncExpiryNotice` cancels the pending request before
     * scheduling, and the request has a fixed identifier — so running it again
     * on every change costs nothing and cannot stack up duplicates.
     */
    const sync = () => void syncExpiryNotice(purchases.passEndsAt());
    sync();
    return purchases.subscribe(sync);
  }, []);
}
