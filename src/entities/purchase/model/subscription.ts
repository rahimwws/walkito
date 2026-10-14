import { useEffect, useState } from 'react';
import { AppState, Linking, Platform } from 'react-native';

import { SUBSCRIPTIONS_URL, playSubscriptionUrl } from '@/shared/config';

import type { Subscription } from './purchase';
import { purchases } from './store';

/** Every mounted `useSubscription`, asked afresh after Apple's sheet closes. */
const askers = new Set<() => void>();

/**
 * How long after Apple's sheet closes the store is asked once more. Turning
 * renewal off makes no transaction on the phone: RevenueCat hears of it from
 * Apple's server, a few seconds later, and the second answer is the one that
 * has it.
 */
const ASK_AGAIN_MS = 4000;

function askAgain(): void {
  for (const ask of askers) ask();
  setTimeout(() => {
    for (const ask of askers) ask();
  }, ASK_AGAIN_MS);
}

/**
 * The subscription held, as a hook: what Settings → Manage subscription is
 * drawn from.
 *
 * Asked of the store when the screen mounts, again whenever the store says
 * access changed, afresh on every return to the app and after Apple's own
 * sheet closes, which is where a cancellation arrives: the person turns
 * renewal off in the store and comes back to a row that says so. `undefined`
 * until the first answer, so a screen can hold its row back rather than draw
 * one and take it away.
 */
export function useSubscription(): Subscription | null | undefined {
  const [held, setHeld] = useState<Subscription | null | undefined>(undefined);
  useEffect(() => {
    let live = true;
    const ask = (fresh: boolean) => {
      void purchases.subscription(fresh).then((next) => {
        if (live) setHeld(next);
      });
    };
    const fresh = () => ask(true);
    ask(false);
    askers.add(fresh);
    const offStore = purchases.subscribe(() => ask(false));
    const appState = AppState.addEventListener('change', (state) => {
      if (state === 'active') ask(true);
    });
    return () => {
      live = false;
      askers.delete(fresh);
      offStore();
      appState.remove();
    };
  }, []);
  return held;
}

/**
 * The store's own page for the subscription held: where it is cancelled (and,
 * on Google Play, paused). Never ours — a subscription is the store's to end.
 *
 * Apple's sheet over the app where it can be shown; Google Play's subscription
 * center, open on this subscription, on Android; the store's page in the
 * browser or its app otherwise. A subscription bought in the other store can
 * only be changed there, so it goes to that store's page.
 */
export async function openStoreSubscriptions(held: Subscription | null): Promise<void> {
  const here = Platform.OS === 'ios' ? 'app_store' : 'play_store';
  if (held != null && held.store !== here) {
    const elsewhere =
      held.managementUrl ?? (held.store === 'play_store' ? SUBSCRIPTIONS_URL.playStore : SUBSCRIPTIONS_URL.appStore);
    await Linking.openURL(elsewhere).catch(() => {});
    return;
  }
  if (await purchases.manageSubscriptions()) {
    askAgain();
    return;
  }
  if (Platform.OS === 'android') {
    const opened = await Linking.openURL(held != null ? playSubscriptionUrl(held.productId) : SUBSCRIPTIONS_URL.playStore).then(
      () => true,
      () => false,
    );
    if (!opened) await Linking.openURL(SUBSCRIPTIONS_URL.playStore).catch(() => {});
    return;
  }
  await Linking.openURL(held?.managementUrl ?? SUBSCRIPTIONS_URL.appStore).catch(() => {});
}

/** Google Play's subscription center on the subscription held, where Play's
 * own pause is: Android's answer to "I'm taking a break". */
export async function openPlayPause(held: Subscription): Promise<void> {
  const opened = await Linking.openURL(playSubscriptionUrl(held.productId)).then(
    () => true,
    () => false,
  );
  if (!opened) await Linking.openURL(SUBSCRIPTIONS_URL.playStore).catch(() => {});
}
