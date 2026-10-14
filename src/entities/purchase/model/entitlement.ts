import { useSyncExternalStore } from 'react';

import { purchases } from './store';

/**
 * Whether the subscription is live, as a hook.
 *
 * `useSyncExternalStore` rather than state in a provider, matching how the
 * health cache is read: the store is the source of truth and React subscribes
 * to it, so there is no second copy that can disagree and no provider that has
 * to be mounted above every consumer for the answer to be correct.
 *
 * Re-renders only when the answer actually changes — the adapter compares
 * before it notifies, so a renewal that leaves the user entitled does not churn
 * every gated screen in the app.
 */
export function useEntitled(): boolean {
  return useSyncExternalStore(
    (listener) => purchases.subscribe(listener),
    () => purchases.entitled(),
    // Server snapshot, for parity. Nothing renders this on a server today, but
    // the hook throws in a server pass without it and a crash is a poor way to
    // find that out.
    () => false,
  );
}

/**
 * When a 3-month pass ends with nothing after it to keep the app open, as a
 * hook, in epoch ms: null while a subscription that renews past it, a lifetime
 * purchase or access by account outlasts it (`purchases.passEndsAt`). The
 * value the 7-day push is laid from, so Home's card and the push agree. A
 * number rather than the Date, so the snapshot holds still between changes.
 */
export function usePassEndsAt(): number | null {
  return useSyncExternalStore(
    (listener) => purchases.subscribe(listener),
    () => purchases.passEndsAt()?.getTime() ?? null,
    () => null,
  );
}
