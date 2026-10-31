import * as Haptics from 'expo-haptics';
import { useCallback, useEffect, useRef, useState, type ReactElement } from 'react';
import { Platform } from 'react-native';

import {
  buyPass,
  openStoreSubscriptions,
  passWindow,
  purchases,
  refreshCompAccess,
  settlePass,
  syncPassFromServer,
  type PassSettled,
  type Plan,
  type Subscription,
} from '@/entities/purchase';
import { settleAccount } from '@/entities/session';
import { track, type PassPlacement } from '@/shared/lib/analytics';
import { useT } from '@/shared/lib/i18n';

import { PassCheckoutSheet, type CheckoutStage } from './pass-checkout-sheet';

/** What the screen selling the pass wants to hear, and where it was sold. */
export type PassCheckoutStart = {
  placement: PassPlacement;
  /** The store said yes: before the server's days have arrived. */
  onPurchased?: () => void;
  /**
   * The checkout is over, the pass bought, its sheet gone: after "Done", after
   * "Turn off auto-renewal" once the store's page has closed again, or as
   * soon as the days are in with no renewing subscription to speak of. The
   * window is null when the server had not answered in time. `renewing` is
   * the subscription left renewing beside the pass ("Done" chosen over
   * turning it off), and null with none, or once the store's page was opened
   * to turn it off.
   */
  onDone?: (settled: PassSettled) => void;
  /**
   * Stands in for the store's answer on what still renews beside the pass,
   * for "Your 3 months are set": the review account, whose access is granted
   * by account and which no store bills, so the screen can still be reached.
   * Left out, the store is asked.
   */
  renewing?: Subscription | null;
};

export type PassCheckout = {
  /** Buys this pass: the store's sheet straight away, no account asked for. */
  start: (plan: Plan, options: PassCheckoutStart) => void;
  /**
   * The sign-in alone, for a Restore Purchases that found nothing in this
   * phone's store while only the anonymous account of first launch is
   * signed in: a pass is kept on an account, so one bought on another phone
   * is found by signing in to it. `onRestored` once access has arrived.
   */
  signInToRestore: (onRestored: () => void) => void;
  /** From the tap until the checkout is over (or backed out of). */
  busy: boolean;
  /** The store's refusal, a purchase waiting on Ask to Buy, in the app's words. */
  notice: string | null;
  /** The checkout's sheet. Mount it inside the host's own modal, if it has one. */
  sheet: ReactElement;
};

/** A pass being bought, from the tap to the end. */
type Buying = {
  readonly kind: 'buy';
  readonly options: PassCheckoutStart;
};

/** A restore that needs an account signed in to first. */
type Restoring = {
  readonly kind: 'restore';
  readonly onRestored: () => void;
};

type Task = Buying | Restoring;

const IDLE: CheckoutStage = { kind: 'idle' };
/** Past a sheet's slide away: if iOS has not said it is gone by then, it is
 * taken as gone. Android's modal says nothing, and slides faster. */
const HIDE_FALLBACK_MS = Platform.OS === 'ios' ? 900 : 380;
/** The longest a sign-in to restore waits for the account's passes and access
 * before it goes on with what is known. */
const READ_AFTER_SIGN_IN_MS = 8000;

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

/**
 * Buying the 3-month pass, the one way every screen that sells one buys it:
 * the limited offer (`features/home-offer`, through the offer wall and the
 * offer page), the cancel flow's budget answer and the review account's
 * offers sheet (`pages/settings`).
 *
 * 1. **The store's sheet** (`buyPass`, which tracks `pass_purchase`), with no
 *    account asked for first, as for a subscription. A first purchase is
 *    followed by the setup screens (`armSetup`), whose first one asks for an
 *    account. The days are kept on whatever account is signed in, the
 *    anonymous one of first launch included, and move with the store
 *    customer if it then signs in to an account that already existed, or
 *    restores after a reinstall (`grant_pass`, 0018).
 * 2. **The server's days**: "Setting up your 3 months" while `settlePass`
 *    asks for them, 10 s at most. A timeout is no failure: the store's
 *    record already opens the app, and the next refresh catches up.
 * 3. **"Your 3 months are set"**, only when a subscription still renews
 *    beside the pass: when the 3 months start, "Turn off auto-renewal" (the
 *    store's own page: Apple's sheet, Google Play's subscription center on
 *    that subscription) and "Done". `pass_autorenew_prompt`. The checkout
 *    ends only once the store's page has closed, so the host keeps the
 *    screen it presents over until then.
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

  /** What is under way, from the tap to the end. */
  const current = useRef<Task | null>(null);
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
    const task = current.current;
    const outcome = settled.current;
    current.current = null;
    settled.current = null;
    if (live.current) setBusy(false);
    if (task?.kind === 'buy' && outcome != null) task.options.onDone?.(outcome);
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
      // The review account's stand-in, where no store bills anything.
      const renewing = options.renewing ?? outcome.renewing;
      settled.current = { window: outcome.window, renewing };
      if (!live.current) return;
      if (renewing != null) {
        track('pass_autorenew_prompt', { placement: options.placement });
        setStage({ kind: 'set', startsAt: outcome.window?.startsAt ?? renewing.expiresAt });
        return;
      }
      hide(true, finish);
    },
    [finish, hide, t],
  );

  /**
   * Signed in to restore: the server is asked for any pass of this account's
   * (with this phone's store id, which it links first), then the store, so
   * `entitled()` is current. A bounded wait; a late answer still opens the
   * app through the store's listener.
   */
  const restoreAfterSignIn = useCallback(
    async (task: Restoring) => {
      const ask = async () => {
        const id = await purchases.appUserId().catch(() => null);
        await Promise.all([syncPassFromServer(id), refreshCompAccess()]);
        await purchases.refresh();
      };
      await Promise.race([ask().catch(() => undefined), wait(READ_AFTER_SIGN_IN_MS)]);
      if (current.current === task) current.current = null;
      if (!live.current) return;
      setBusy(false);
      if (purchases.entitled()) task.onRestored();
      else setNotice(t('offer.nothingRestored'));
    },
    [t],
  );

  const start = useCallback(
    (plan: Plan, options: PassCheckoutStart) => {
      if (current.current != null) return;
      current.current = { kind: 'buy', options } satisfies Buying;
      settled.current = null;
      setBusy(true);
      setNotice(null);
      void purchase(plan, options);
    },
    [purchase],
  );

  const signInToRestore = useCallback((onRestored: () => void) => {
    if (current.current != null) return;
    current.current = { kind: 'restore', onRestored };
    settled.current = null;
    setBusy(true);
    setNotice(null);
    setStage({ kind: 'sign-in' });
  }, []);

  const closeSignIn = () => {
    current.current = null;
    setBusy(false);
    hide(true, () => undefined);
  };

  const signedIn = () => {
    const task = current.current;
    if (task == null) return;
    // Signed in here satisfies an account still owed from the setup screens.
    settleAccount();
    if (task.kind === 'restore') hide(true, () => void restoreAfterSignIn(task));
  };

  /**
   * The store's own page first, then the end. Ending first let the host take
   * its sheet down in the same moment Apple's tried to present over it, and
   * nothing showed. RevenueCat's sheet resolves once Apple's has closed, so
   * the host's screen stays under it until then.
   */
  const turnOffRenewal = () => {
    const held = settled.current?.renewing ?? null;
    hide(true, () => {
      if (held == null) {
        finish();
        return;
      }
      void openStoreSubscriptions(held)
        .catch(() => undefined)
        .then(() => {
          // Sent to turn it off: the host does not tell them it still renews.
          const outcome = settled.current;
          if (outcome != null) settled.current = { ...outcome, renewing: null };
          finish();
        });
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

  return { start, signInToRestore, busy, notice, sheet };
}
