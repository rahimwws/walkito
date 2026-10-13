import * as Haptics from 'expo-haptics';
import { useEffect, useRef, useState, type MutableRefObject } from 'react';

import {
  cancelComebackPushes,
  requestNotificationAccess,
  scheduleTrialReminder,
} from '@/entities/notifications';
import { purchases, type Plan, type PurchaseResult } from '@/entities/purchase';
import { armSetup } from '@/entities/session';
import { useT } from '@/shared/lib/i18n';

import { priceOf, trialEndsAt, type FreeTrial } from './plan-terms';
import type { OfferGuard } from './use-offer-screen';

/** How many days before a free trial ends its reminder lands. The trial
 * offer's own line ("We'll remind you 3 days before…") reads this number. */
export const TRIAL_REMINDER_DAYS = 3;

/**
 * Buying and restoring from the offer screen after the paywall's "Not now".
 *
 * The store's own results, said the paywall's way: a cancel says nothing, a
 * pending purchase says it is waiting, a failure says nothing was charged.
 * Success needs no screen of its own: access flips, the offer screen goes, and
 * the root layout puts the setup screens after the first purchase in front
 * (`armSetup`, armed already when onboarding finished; armed again here only
 * for a first purchase, so a returning subscriber is not walked through it).
 *
 * A trial bought here gets the reminder the screen promised, laid from the
 * product's own trial length and price. Permission is asked for then if it
 * never was; refused, there is no reminder, and the screen did not promise
 * one (`notificationsPossible`).
 */
export function useOfferPurchase(guard: MutableRefObject<OfferGuard>) {
  const t = useT();
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const live = useRef(true);
  useEffect(() => {
    live.current = true;
    return () => {
      live.current = false;
    };
  }, []);

  const hold = async <R>(work: () => Promise<R>): Promise<R> => {
    setNotice(null);
    setBusy(true);
    guard.current.busy = true;
    try {
      return await work();
    } finally {
      guard.current.busy = false;
      // A purchase that went through takes this screen away with it.
      if (live.current) setBusy(false);
    }
  };

  const say = (message: string, haptic: Haptics.NotificationFeedbackType | null) => {
    if (haptic != null) void Haptics.notificationAsync(haptic);
    if (live.current) setNotice(message);
  };

  const buy = async (plan: Plan, trial: FreeTrial | null): Promise<void> => {
    if (busy) return;
    const firstPurchase = !purchases.hadAccess();
    const result: PurchaseResult = await hold(() => purchases.buy(plan));
    switch (result.status) {
      case 'purchased':
        void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        if (firstPurchase) armSetup();
        void cancelComebackPushes();
        if (trial != null) void remindBeforeTrialEnds(trial, priceOf(plan));
        return;
      // Backed out of the store's own sheet: they know what they did.
      case 'cancelled':
        return;
      case 'pending':
        say(t('offer.pending'), null);
        return;
      case 'failed':
        say(result.message, Haptics.NotificationFeedbackType.Error);
        return;
      case 'unavailable':
        say(t('offer.storeUnreachable'), Haptics.NotificationFeedbackType.Warning);
        return;
    }
  };

  const restore = async (): Promise<void> => {
    if (busy) return;
    const result = await hold(() => purchases.restore());
    if (result.status === 'restored') {
      void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      void cancelComebackPushes();
      return;
    }
    if (result.status === 'nothing-found') say(t('offer.nothingRestored'), null);
    else if (result.status === 'failed') say(t('offer.restoreFailed'), Haptics.NotificationFeedbackType.Error);
    // `unavailable`: there was no store to ask.
  };

  return { busy, notice, buy, restore };
}

/** The reminder the trial offer promised, `TRIAL_REMINDER_DAYS` before the
 * trial ends. */
async function remindBeforeTrialEnds(trial: FreeTrial, price: string): Promise<void> {
  const endsAt = trialEndsAt(trial, Date.now());
  if (!(await requestNotificationAccess())) return;
  await scheduleTrialReminder({ trialEndsAt: endsAt, price, daysBefore: TRIAL_REMINDER_DAYS });
}
