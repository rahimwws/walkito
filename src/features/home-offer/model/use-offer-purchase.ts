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
 * How the offer sells the 3-month pass: through the pass checkout
 * (`widgets/pass-checkout`, which asks for an account first and waits for the
 * server's days), owned by whoever hosts the offer. A feature cannot reach a
 * widget, so the host hands it in; where none is handed in, the pass card is
 * not offered at all.
 */
export type PassSale = {
  /** Starts the checkout for this pass. `onPurchased` runs once the store
   * says it went through. */
  buy: (plan: Plan, onPurchased: () => void) => void;
  /** The checkout is in flight. */
  busy: boolean;
  /** What the checkout has to say: a failure, a purchase waiting on Ask to Buy. */
  notice: string | null;
};

export type OfferPurchaseOptions = {
  /** A first purchase arms the setup screens after it (the offer screen's
   * case). Off for a sheet opened from inside the app. */
  armsSetup?: boolean;
  /** Bought or restored: a sheet closes itself. */
  onPurchased?: () => void;
};

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
 *
 * The 3-month pass is bought through `buyPass`, which hands it to the host's
 * pass checkout (`PassSale`) and does the same afterwards: the setup armed for
 * a first purchase, the comeback's pushes taken back.
 */
export function useOfferPurchase(guard: MutableRefObject<OfferGuard>, options: OfferPurchaseOptions = {}) {
  const { armsSetup = true, onPurchased } = options;
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
    const firstPurchase = armsSetup && !purchases.hadAccess();
    const result: PurchaseResult = await hold(() => purchases.buy(plan));
    switch (result.status) {
      case 'purchased':
        void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        if (firstPurchase) armSetup();
        void cancelComebackPushes();
        if (trial != null) void remindBeforeTrialEnds(trial, priceOf(plan));
        onPurchased?.();
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

  /** The 3-month pass, through the host's checkout. What follows the purchase
   * beyond this (closing a sheet) is the host's, once its checkout is done:
   * the checkout may still have "Your 3 months are set" to show. */
  const buyPass = (plan: Plan, sale: PassSale): void => {
    if (busy || sale.busy) return;
    setNotice(null);
    const firstPurchase = armsSetup && !purchases.hadAccess();
    sale.buy(plan, () => {
      if (firstPurchase) armSetup();
      void cancelComebackPushes();
    });
  };

  const restore = async (): Promise<void> => {
    if (busy) return;
    const result = await hold(() => purchases.restore());
    if (result.status === 'restored') {
      void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      void cancelComebackPushes();
      onPurchased?.();
      return;
    }
    if (result.status === 'nothing-found') say(t('offer.nothingRestored'), null);
    else if (result.status === 'failed') say(t('offer.restoreFailed'), Haptics.NotificationFeedbackType.Error);
    // `unavailable`: there was no store to ask.
  };

  return { busy, notice, buy, buyPass, restore };
}

/** The reminder the trial offer promised, `TRIAL_REMINDER_DAYS` before the
 * trial ends. */
async function remindBeforeTrialEnds(trial: FreeTrial, price: string): Promise<void> {
  const endsAt = trialEndsAt(trial, Date.now());
  if (!(await requestNotificationAccess())) return;
  await scheduleTrialReminder({ trialEndsAt: endsAt, price, daysBefore: TRIAL_REMINDER_DAYS });
}
