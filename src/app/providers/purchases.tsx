import { useEffect } from 'react';
import { AppState } from 'react-native';

import { purchases, startPurchases } from '@/entities/purchase';
import { startAuth } from '@/entities/session';

/**
 * Starts the store once, and re-checks the subscription on the way back in.
 *
 * Mounted at the root, like the health pipeline, so configuration happens once
 * for the life of the app rather than once per visit to the paywall. Nothing
 * here renders and nothing here blocks: the entitlement gate reads a cached
 * answer that is correct from the first frame, and this only keeps it fresh.
 */
export function usePurchases(): void {
  /**
   * The Supabase session, watched for the life of the app.
   *
   * Here rather than in its own provider because it is the same shape of thing
   * and the same lifetime: one subscription, started once, torn down never.
   * `onAuthStateChange` fires for the restore on launch as well, so there is no
   * separate initial read that could disagree with it.
   */
  useEffect(() => startAuth(), []);

  useEffect(() => {
    // Deliberately unawaited and deliberately uncaught-by-the-caller. A store
    // that fails to start leaves the app not-entitled, which is the same state
    // it was in a moment earlier — there is nothing for a user to do about it
    // and nothing worth interrupting launch for.
    void startPurchases();
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
}
