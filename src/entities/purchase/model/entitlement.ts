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
