import { router } from 'expo-router';
import { useEffect, useRef } from 'react';
import { AppState } from 'react-native';

import {
  Notifications,
  firstStepDueNow,
  isFirstStepTap,
  markFirstStepHandled,
  setFirstStepReady,
} from '@/entities/notifications';
import { askForPlans, lookingAround, purchases } from '@/entities/purchase';

type From = 'notification' | 'app_open';

/**
 * The first-step routine's morning (`entities/notifications`, `first-step.ts`):
 * the notification's tap, or her first open that morning when notifications
 * are off.
 *
 * A subscriber gets the two-minute session, `/routine/first_steps`. Anybody
 * else gets the plans with "Your first-step routine is ready" over them: the
 * plans over Home while she is looking around, and the paywall she is on
 * otherwise. It names the routine and nothing else, so offers being off does
 * not hold it (a plan reminder, guideline 4.5.4).
 *
 * `tabsReachable` is the root's: the routine page sits over the tabs, and
 * before them (the onboarding, the paywall, the setup) only the line is set.
 */
export function useFirstStep(onboarded: boolean, tabsReachable: boolean): void {
  const reachable = useRef(tabsReachable);
  reachable.current = tabsReachable;
  /** A tap or an open that came before the tabs could take the routine. */
  const waiting = useRef<From | null>(null);

  const open = (from: From) => {
    markFirstStepHandled();
    if (!purchases.entitled()) {
      setFirstStepReady(true);
      if (lookingAround()) askForPlans('first_step');
      return;
    }
    if (!reachable.current) {
      waiting.current = from;
      return;
    }
    setTimeout(() => router.push({ pathname: '/routine/[id]', params: { id: 'first_steps', from } }), 400);
  };
  const openRef = useRef(open);
  openRef.current = open;

  useEffect(() => {
    if (tabsReachable && waiting.current != null) {
      const from = waiting.current;
      waiting.current = null;
      openRef.current(from);
    }
  }, [tabsReachable]);

  useEffect(() => {
    const tapped = Notifications.addNotificationResponseReceivedListener((response) => {
      if (isFirstStepTap(response)) openRef.current('notification');
    });
    void Notifications.getLastNotificationResponseAsync().then((last) => {
      if (last != null && isFirstStepTap(last) && Date.now() - last.notification.date < 60_000) openRef.current('notification');
    });
    return () => tapped.remove();
  }, []);

  useEffect(() => {
    if (!onboarded) return undefined;
    const check = () => {
      if (firstStepDueNow()) openRef.current('app_open');
    };
    if (AppState.currentState === 'active') check();
    const subscription = AppState.addEventListener('change', (next) => {
      if (next === 'active') check();
    });
    return () => subscription.remove();
  }, [onboarded]);
}
