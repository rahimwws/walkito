import * as Haptics from 'expo-haptics';
import { useCallback, useEffect, useRef, useState, type ReactElement } from 'react';
import { Platform } from 'react-native';

import {
  buyPass,
  openStoreSubscriptions,
  passWindow,
  settlePass,
  type PassSettled,
  type Plan,
} from '@/entities/purchase';
import { accountSaved, settleAccount } from '@/entities/session';
import { track, type PassPlacement } from '@/shared/lib/analytics';
import { useT } from '@/shared/lib/i18n';

import { PassCheckoutSheet, type CheckoutStage } from './pass-checkout-sheet';

/** What the screen selling the pass wants to hear, and where it was sold. */
export type PassCheckoutStart = {
  placement: PassPlacement;
  /** The store said yes: before the server's days have arrived. */
  onPurchased?: () => void;
  /**
   * The checkout is over, the pass bought, its sheet gone: after "Done" or
   * "Turn off auto-renewal", or as soon as the days are in with no renewing
   * subscription to speak of. The window is null when the server had not
   * answered in time.
   */
  onDone?: (settled: PassSettled) => void;
};

export type PassCheckout = {
  /** Buys this pass: an account first if there is none, then the store. */
  start: (plan: Plan, options: PassCheckoutStart) => void;
  /** From the tap until the checkout is over (or backed out of). */
  busy: boolean;
  /** The store's refusal, a purchase waiting on Ask to Buy, in the app's words. */
  notice: string | null;
  /** The checkout's sheet. Mount it inside the host's own modal, if it has one. */
  sheet: ReactElement;
};

const IDLE: CheckoutStage = { kind: 'idle' };
/** Past a sheet's slide away: if iOS has not said it is gone by then, it is
 * taken as gone. Android's modal says nothing, and slides faster. */
const HIDE_FALLBACK_MS = Platform.OS === 'ios' ? 900 : 380;

/**
 * Buying the 3-month pass, the one way every screen that sells one buys it:
 * the limited offer (`features/home-offer`, through the offer wall and the
 * offer page), the cancel flow's budget answer and the review account's
 * offers sheet (`pages/settings`).
 *
 * 1. **An account first.** A pass is kept on the account (the server counts
 *    its days there), so it follows the person to every phone. With only the
 *    anonymous account of first launch, the sign-in comes up first (Apple on
 *    iOS, Google on Android, or an emailed code), and the purchase only
 *    after a sign-in that worked; closed, nothing is bought.
 * 2. **The store's sheet** (`buyPass`, which tracks `pass_purchase`).
 * 3. **The server's days**: "Setting up your 3 months" while `settlePass`
 *    asks for them, 10 s at most. A timeout is no failure: the store's
 *    record already opens the app, and the next refresh catches up.
 * 4. **"Your 3 months are set"**, only when a subscription still renews
 *    beside the pass: when the 3 months start, "Turn off auto-renewal" (the
 *    store's own page: Apple's sheet, Google Play's subscription center on
 *    that subscription) and "Done". `pass_autorenew_prompt`.
 *
 * A store sheet never rises while this sheet is still moving: each step waits
 * for the one before it to have gone.
 */
export function usePassCheckout(): PassCheckout {
  const t = useT();
  const [stage, setStage] = useState<CheckoutStage>(IDLE);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  const live = useRef(true);
  useEffect(() => {
    live.current = true;
    return () => {
      live.current = false;
    };
  }, []);

  /** The pass and the host's wishes, from the tap to the end. */
  const current = useRef<{ plan: Plan; options: PassCheckoutStart } | null>(null);
  /** What the server and the store said after the purchase. */
  const settled = useRef<PassSettled | null>(null);
  /** What runs once the sheet has gone (`hide`). */
  const afterHide = useRef<(() => void) | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const runAfterHide = useCallback(() => {
    if (hideTimer.current != null) clearTimeout(hideTimer.current);
    hideTimer.current = null;
    const next = afterHide.current;
    afterHide.current = null;
    next?.();
  }, []);

  /** The sheet down, then `then`: on iOS when it reports gone, and in any
   * case once a slide away is over. Straight away when it was not up. */
  const hide = useCallback(
    (shownNow: boolean, then: () => void) => {
      setStage(IDLE);
      if (!shownNow) {
        then();
        return;
      }
      afterHide.current = then;
      if (hideTimer.current != null) clearTimeout(hideTimer.current);
      hideTimer.current = setTimeout(runAfterHide, HIDE_FALLBACK_MS);
    },
    [runAfterHide],
  );

  useEffect(
    () => () => {
      if (hideTimer.current != null) clearTimeout(hideTimer.current);
    },
    [],
  );

  const finish = useCallback(() => {
    const done = current.current;
    const outcome = settled.current;
    current.current = null;
    settled.current = null;
    if (live.current) setBusy(false);
    if (done != null && outcome != null) done.options.onDone?.(outcome);
  }, []);

  const purchase = useCallback(
    async (plan: Plan, options: PassCheckoutStart) => {
      const before = passWindow().expiresAt;
      const result = await buyPass(plan, options.placement);
      if (result.status !== 'purchased') {
        current.current = null;
        if (!live.current) return;
        setBusy(false);
        switch (result.status) {
          // Backed out of the store's own sheet: they know what they did.
          case 'cancelled':
            return;
          case 'pending':
            setNotice(t('offer.pending'));
            return;
          case 'failed':
            void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
            setNotice(result.message);
            return;
          case 'unavailable':
            setNotice(t('offer.storeUnreachable'));
            return;
        }
      }
      void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      options.onPurchased?.();
      // The days are asked for whether or not the screen is still here: a
      // purchase that opened the app takes the offer away with it.
      if (live.current) setStage({ kind: 'setting-up' });
      const outcome = await settlePass(before);
      settled.current = outcome;
      if (!live.current) return;
      if (outcome.renewing != null) {
        track('pass_autorenew_prompt', { placement: options.placement });
        setStage({ kind: 'set', startsAt: outcome.window?.startsAt ?? outcome.renewing.expiresAt });
        return;
      }
      hide(true, finish);
    },
    [finish, hide, t],
  );

  const start = useCallback(
    (plan: Plan, options: PassCheckoutStart) => {
      if (current.current != null) return;
      current.current = { plan, options };
      settled.current = null;
      setBusy(true);
      setNotice(null);
      void accountSaved().then((saved) => {
        if (!live.current || current.current == null) return;
        if (saved) void purchase(plan, options);
        else setStage({ kind: 'sign-in' });
      });
    },
    [purchase],
  );

  const closeSignIn = () => {
    current.current = null;
    setBusy(false);
    hide(true, () => undefined);
  };

  const signedIn = () => {
    const pending = current.current;
    if (pending == null) return;
    // Signed in here satisfies an account still owed from the setup screens.
    settleAccount();
    hide(true, () => void purchase(pending.plan, pending.options));
  };

  const turnOffRenewal = () => {
    const held = settled.current?.renewing ?? null;
    hide(true, () => {
      finish();
      if (held != null) void openStoreSubscriptions(held);
    });
  };

  const done = () => hide(true, finish);

  const sheet = (
    <PassCheckoutSheet
      stage={stage}
      onClose={closeSignIn}
      onSignedIn={signedIn}
      onTurnOffRenewal={turnOffRenewal}
      onDone={done}
      onHidden={runAfterHide}
    />
  );

  return { start, busy, notice, sheet };
}
