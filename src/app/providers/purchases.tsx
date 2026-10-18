import { useEffect } from 'react';
import { AppState } from 'react-native';

import { syncExpiryNotice } from '@/entities/notifications';
import { purchases, startCompAccess, startPass, startPurchases } from '@/entities/purchase';
import { onboardingDone } from '@/entities/session';
import { startAppsFlyer } from '@/shared/lib/appsflyer';
import { holdForTracking } from '@/shared/lib/tracking';

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
    //
    // On a first launch that will ask App Tracking Transparency (iOS, the
    // onboarding still ahead), AppsFlyer waits for the answer before it
    // starts, so the install carries the IDFA when it was allowed. The
    // question itself is asked by the onboarding, a couple of screens in.
    holdForTracking(!onboardingDone());
    void startAppsFlyer();
    void startPurchases();
    // Access granted by account, read now and after every sign-in.
    startCompAccess();
    // The 3-month pass's days, as the server counts them: read now, after
    // every sign-in and on every return to the app (`entities/purchase`,
    // `pass.ts`). `entitled()` is the store, the account's grant or this.
    startPass();
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
     * 3-month pass has.
     *
     * A subscription has no end to warn about: it renews, and the App Store
     * itself tells a subscriber about a price or a cancellation. So for every
     * subscriber with no pass `passEndsAt()` is null and this cancels any
     * warning left over. It is null too for somebody whose access goes on past
     * their pass (a subscription that renews, lifetime, access granted by
     * account): nothing of theirs ends. For somebody who holds a pass, the end
     * can move after purchase — the server's grant queues it behind a
     * subscription, a second pass adds 90 days, a restore on a new device
     * establishes it, a refund removes it — and each arrives as a store, pass
     * or comp change and nothing else, so this is the only place that sees all
     * of them. `passEndsAt()` is the later of the store's record and the
     * server's end.
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
