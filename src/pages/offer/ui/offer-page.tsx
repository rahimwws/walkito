import * as Haptics from 'expo-haptics';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { AppState, Platform, StyleSheet, View } from 'react-native';
import Animated, { Easing, FadeOut, ReduceMotion } from 'react-native-reanimated';

import {
  cancelWinback,
  notificationsAllowed,
  scheduleNextDayPush,
  scheduleWinback,
  wakeLabel,
  wakeMinutes,
} from '@/entities/notifications';
import { useBoost } from '@/entities/offer';
import { painAreasOf, whereKey } from '@/entities/leg-zone';
import { firstName, getIntake, useProfileName } from '@/entities/profile';
import { planSettings, sessions } from '@/entities/program';
import {
  OFFERINGS,
  PACKAGES,
  firstCharge,
  firstChargeSavingPercent,
  grantDevAccess,
  isSamplePlan,
  onSimulator,
  paywallSkipped,
  purchases,
  skipPaywall,
  useTrialOnFirstPaywall,
  type PaywallPeriod,
  type Plan,
  markWelcomeOwed,
} from '@/entities/purchase';
import { armHomeTour, firstSession, firstSessionAgain, firstSessionOfferedAgain, setHomeTourStage, useFirstSessionAgain } from '@/entities/session';
import { freeTrialOf, remindBeforeTrialEnds, TRIAL_REMINDER_DAYS } from '@/features/home-offer';
import { register, track, type PaywallPlacement, type PlanShown } from '@/shared/lib/analytics';
import { logAppsFlyerEvent } from '@/shared/lib/appsflyer';
import { useLanguage, useT, type Key } from '@/shared/lib/i18n';
import { usePaywall } from '@/shared/lib/paywall';
import { recordAppEvent } from '@/shared/lib/supabase';

import { afterDayOneTitle } from '../model/after-day-one';
import { giftOpens, giftPlan } from '../model/gift';
import { giftSeen, markGiftSeen } from '../model/gift-store';
import { firstChoice, lineupFor, plansOf, shownKinds, type Shelves } from '../model/lineup';
import { nextDay } from '../model/next-day';
import { chargeTimeline, hasIntroMonth, sheetLine, splitHighlight } from '../model/plans';
import { paywallVariant } from '../model/variant';
import { CancelQuestion, takeCancelQuestion, type CancelReason } from './cancel-question';
import { ExitGift } from './exit-gift';
import { FirstSession } from './first-session';
import { PlansStep, type PlansStepRow } from './plans-step';

/** The goal they picked, in the words onboarding offered it in. */
const GOAL_WORDS: Readonly<Record<string, Key>> = {
  mornings: 'onboarding.goal.mornings',
  comeback: 'onboarding.goal.backToRunning',
  race: 'onboarding.goal.race',
  flatfeet: 'onboarding.goal.flatfeet',
  allday: 'onboarding.goal.allday',
  steady: 'onboarding.goal.steady',
  injuryfree: 'onboarding.goal.injuryfree',
};

const DURATION: Readonly<Record<string, Key>> = {
  weeks: 'onboarding.duration.weeks',
  months: 'onboarding.duration.months',
  year: 'onboarding.duration.year',
  longer: 'onboarding.duration.longer',
};

/** A view leaving: a quick fade, so the next one is the one you read. */
const STEP_OUT = FadeOut.duration(300).easing(Easing.out(Easing.quad)).reduceMotion(ReduceMotion.System);

/**
 * The `offer` route: the hard paywall, and the offers after its "Not now".
 *
 * A full screen, a guarded state of the root stack, so there is nothing behind
 * it to reach, and no way into the app without buying. Somebody who has not
 * skipped the plans sees them (`Paywall`). "Not now" (`skipPaywall`) leads to
 * Home's free first run, and the root guards take this route away; the same
 * plans then stand over Home (`PaywallWall`, in `OfferWall`) at every launch
 * until a purchase (or a restore) hands over to the setup screens. Nothing
 * else is offered on the way: no second price, no deadline.
 */
export function OfferPage() {
  // Before the plans, once: the first session (`FirstSession`), two free
  // minutes of the plan and "How did that feel?". Done or passed on, the
  // plans follow; it is offered at every launch until one or the other, and
  // never to somebody arriving for the comeback price, or who has already
  // been past the plans.
  const comeback = useBoost();
  const profileName = firstName(useProfileName());
  // And once more for somebody who passed on it and then tapped a Day 1
  // reminder: that tap opens the two minutes, not the plans, whether it
  // launched the app (read before this mounts) or found it running.
  const [tasting, setTasting] = useState(() => !paywallSkipped() && (firstSession() == null || firstSessionAgain()));
  const again = useFirstSessionAgain();
  useEffect(() => {
    if (again && !paywallSkipped()) setTasting(true);
  }, [again]);
  return (
    <View style={styles.full}>
      {tasting && !comeback ? (
        <Animated.View key="first" exiting={STEP_OUT} style={StyleSheet.absoluteFill}>
          <FirstSession
            name={profileName}
            onDone={() => {
              firstSessionOfferedAgain();
              setTasting(false);
            }}
          />
        </Animated.View>
      ) : (
        <Animated.View key="plans" exiting={STEP_OUT} style={StyleSheet.absoluteFill}>
          <Paywall />
        </Animated.View>
      )}
    </View>
  );
}

/**
 * The plans over Home, for somebody who said "Not now" and is looking around
 * (`OfferWall`, raised by a locked tap): the same plans at the same prices as
 * the paywall, opening on them. "Not now" and the close (`onClose`) put them
 * down again; there is no other way past. Whatever was offered before is what
 * is offered here.
 */
export function PaywallWall({ onClose, afterDayOne = false }: { onClose: () => void; afterDayOne?: boolean }) {
  return <Paywall wall onClose={onClose} afterDayOne={afterDayOne} />;
}


/**
 * The paywall: Walkito, as a monthly or an annual subscription or a lifetime
 * purchase (Android: whatever its offerings still hold, the weekly
 * subscription among them).
 *
 * One page, opening on the plans (`plans-step.tsx`): her goal over two plans
 * side by side at equal weight, then the chosen plan's first charges with
 * their dates. Which plan is first and chosen, and which shelf each card
 * comes from, is the lineup (`lineup.ts`), switched remotely by the PostHog
 * flag `paywall_default_plan` (`monthly_trial` unless it says otherwise).
 * Every price is the store's, and each card's largest figure is the amount
 * billed, which Apple requires to be the most prominent price on a
 * subscription screen. Over the button, one line says what the store's
 * sheet will ask for and from when; under it, "Not now", the renewal terms,
 * Restore, Terms and Privacy.
 *
 * Its one way past without buying is "Not now" (`skipPaywall`), which leads
 * to Home's free first session, never into the app.
 */
function Paywall({ wall = false, onClose, afterDayOne = false }: { wall?: boolean; onClose?: () => void; afterDayOne?: boolean }) {
  const router = useRouter();
  const t = useT();
  const language = useLanguage();
  const { name } = useLocalSearchParams<{ name?: string }>();

  /**
   * Which offering to sell, by name.
   *
   * Apple has no notion of "the same product, cheaper": a discount is a
   * different product, so the comeback annual is its own product and the
   * `offer` offering sells it, to somebody who came back, or arrived from the
   * win-back notification or the offer email. Never because of a code: an
   * invite code used to unlock this price, and App Review rejected 1.0.3 (35)
   * for it (Guideline 3.1.1). A code is only ever Apple's own offer code,
   * redeemed in Apple's sheet ("Have a code?").
   */
  const boosted = useBoost() && !wall;
  const trialAudience = useTrialOnFirstPaywall();
  /** The lineup, settled as the view opens: the plans never change order
   * under somebody's eyes. */
  const [lineup] = useState(() => lineupFor(paywallVariant(), { comeback: boosted, trialAudience }));
  const offeringId = OFFERINGS[lineup.offering];
  /** Where this view opened, for analytics: settled as it opens. */
  const [placement] = useState<PaywallPlacement>(() => (!wall ? 'onboarding' : afterDayOne ? 'after_day1' : 'locked'));

  /** Which plan is selected: the lineup's, until she picks another. */
  const [tier, setTier] = useState<PaywallPeriod>(lineup.chosen);
  /** True from the tap until the store answers. Locks the button rather than
   * letting a second tap open a second transaction. */
  const [busy, setBusy] = useState(false);
  /** The one line the store gets to say, for buying and restoring alike, over
   * the button where the tap that caused it happened. */
  const [notice, setNotice] = useState<string | null>(null);
  /** "What stopped you?" is up, for the plan whose sheet was closed. */
  const [asking, setAsking] = useState<PaywallPeriod | null>(null);
  /** A plan already on the page, brought back into view after "It costs too
   * much" (see `answered` below). */
  const [reveal, setReveal] = useState<{ kind: PaywallPeriod; at: number } | null>(null);

  /**
   * The first session was done before this view (`FirstSession`, or Home's
   * "Day 1" card for the wall): the head says so ("Day 1 done") rather than
   * "your plan is ready". Read once, as the view opens.
   */
  const [afterSession] = useState(() => !boosted && (firstSession() === 'done' || (wall && sessions().length > 0)));
  const profileName = firstName(useProfileName());

  /**
   * Over the plans: what they are for, in her own answers. Her goal, in the
   * words she picked it in, with where it hurts, this morning's first steps
   * and how long under it. Our paywall only: none of it goes to Superwall or
   * to analytics.
   */
  const [head] = useState(() => {
    const intake = getIntake();
    const chips: string[] = [];
    if (intake != null) {
      const where = whereKey(painAreasOf(intake.pain)[0], intake.side);
      if (where != null) chips.push(t(where));
      if (intake.morningPain != null && where != null) chips.push(t('offer.stripMornings', { score: intake.morningPain }));
      const duration = intake.painDuration != null ? DURATION[intake.painDuration] : undefined;
      if (duration != null) chips.push(t(duration));
    }
    const goal = intake?.goal != null ? GOAL_WORDS[intake.goal] : undefined;
    const why =
      goal == null
        ? null
        : intake?.goal === 'allday' && (intake.role === 'feet' || intake.role === 'both')
          ? t('onboarding.goal.shift')
          : t(goal);
    const headline = (key: 'offer.plans.headline' | 'offer.plans.headlineComeback') =>
      splitHighlight(t(key))
        .map((run) => run.text)
        .join('');
    const named = profileName.length > 0;
    // Over Home after Day 1: what she just did, and when the next day opens.
    if (placement === 'after_day1') {
      const next = nextDay();
      const minutes = next == null ? null : (planSettings().reminderMinutes ?? wakeMinutes(next.at));
      return {
        eyebrow: named ? t('offer.next.titleNamed', { name: profileName }) : t('offer.next.title'),
        title: afterDayOneTitle(next, minutes == null ? null : wakeLabel(minutes, language), t),
        chips,
      };
    }
    const eyebrow = boosted
      ? null
      : afterSession
        ? named
          ? t('offer.next.titleNamed', { name: profileName })
          : t('offer.next.title')
        : named
          ? t('offer.head.eyebrowNamed', { name: profileName })
          : t('offer.head.eyebrow');
    return {
      eyebrow,
      title: boosted ? headline('offer.plans.headlineComeback') : (why ?? headline('offer.plans.headline')),
      chips: boosted ? [] : chips,
    };
  });

  /**
   * Superwall's paywall for this moment, over this one. Every campaign holds
   * this screen as a 100% holdout (see AGENTS.md), so nothing covers it; a
   * dashboard paywall given traffic again would stand in. A beat after mount,
   * once per view, and never over Home.
   */
  const paywall = usePaywall();
  useEffect(() => {
    if (__DEV__ && onSimulator) return;
    if (wall) return;
    const placement = boosted ? 'paywall_comeback' : 'paywall_first';
    const timer = setTimeout(() => paywall.register(placement, { offering: offeringId }), 600);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * The three shelves the lineup draws from, from the store. The standard one
   * is always read, because a discount has to be measured against a real
   * price rather than a printed one, and a card whose shelf is missing falls
   * back to it (`plansOf`).
   */
  const [shelves, setShelves] = useState<Shelves>({ standard: null, trial: null, offer: null });
  /**
   * Whether the store has answered: "still loading" and "the dashboard has no
   * such package" both look like a null plan, and only the second is a card
   * that must not be tapped. A failed fetch leaves it false, so a dropped
   * connection never greys a plan out.
   */
  const [loaded, setLoaded] = useState(false);
  /** The last attempt to ask the store failed. The cards stay enabled, the
   * page says the store is unreachable, and it asks again on the next
   * foreground and on the button: this screen must never be a dead end. */
  const [unreachable, setUnreachable] = useState(false);
  const [attempt, setAttempt] = useState(0);

  const fetchShelves = async (): Promise<Shelves> => {
    const wanted = new Set([lineup.annualFrom, lineup.monthlyFrom, lineup.lifetimeFrom]);
    const read = (shelf: keyof Shelves) => (wanted.has(shelf) ? purchases.offering(OFFERINGS[shelf]) : Promise.resolve(null));
    const [standard, trial, offer] = await Promise.all([purchases.offering(OFFERINGS.standard), read('trial'), read('offer')]);
    return { standard, trial, offer };
  };
  const stock = (next: Shelves) => {
    setShelves(next);
    setLoaded(true);
    setUnreachable(false);
  };

  useEffect(() => {
    if (!purchases.configured) return;
    let live = true;
    fetchShelves().then(
      (next) => {
        if (live) stock(next);
      },
      () => {
        if (live) setUnreachable(true);
      },
    );
    return () => {
      live = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attempt]);

  // Ask again when the app comes back while the store has not answered: the
  // usual reason it could not be reached is a connection that has since come
  // back.
  useEffect(() => {
    if (loaded || !purchases.configured) return;
    const subscription = AppState.addEventListener('change', (next) => {
      if (next === 'active') setAttempt((n) => n + 1);
    });
    return () => subscription.remove();
  }, [loaded]);

  const plans = plansOf(shelves, lineup);
  const kinds = shownKinds(lineup, plans, loaded);
  const devPreview = __DEV__ && onSimulator;

  /**
   * The win-back's promise: the comeback annual's first year against the
   * standard annual, both from the store. Until both have been read there is
   * no honest number to send, and no notification goes.
   */
  const winbackPercent = useRef<number | null>(null);

  /**
   * The same view, for the offer emails and the win-back: the store's own
   * prices for the comeback annual and the standard one, in this
   * storefront's currency, once the store has answered.
   */
  const recorded = useRef(false);
  useEffect(() => {
    if (!loaded || recorded.current) return;
    recorded.current = true;
    let live = true;
    void Promise.all([shelves.offer ?? purchases.offering(OFFERINGS.offer), shelves.standard]).then(
      ([cheap, full]) => {
        if (!live) return;
        const low = cheap?.annual ?? null;
        const high = full?.annual ?? null;
        const percent = firstChargeSavingPercent(low, high);
        winbackPercent.current = percent;
        void recordAppEvent('paywall_viewed', {
          offering: offeringId,
          plan: 'annual',
          offer_price: low != null && percent != null ? firstCharge(low).display : null,
          standard_price: high?.product.display ?? null,
          percent,
        });
      },
      () => undefined,
    );
    return () => {
      live = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  /** Shown, and on the way out left without buying: on mount and unmount, so
   * every way of leaving is counted. A purchase or restore marks the exit as
   * not a dismissal. */
  const converted = useRef(false);
  useEffect(() => {
    // On every event after this one, the purchase events among them: which
    // lineup the sheet was opened from.
    register({ paywall_variant: lineup.variant });
    track('paywall_viewed', {
      offering: offeringId,
      boosted,
      after_session: afterSession,
      wall,
      default_plan: lineup.chosen,
      variant: lineup.variant,
      placement,
    });
    return () => {
      if (!converted.current) track('paywall_dismissed', { offering: offeringId });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * The exit gift: `walkito_annual_offer` from the `offer` offering, once,
   * after a closed payment sheet (`giftOpens`), and only in a lineup that
   * does not already show that price (`lineup.gift`, the yearly one). Kept
   * only where StoreKit says this customer can have its first-year price
   * (`giftPlan`). "What stopped you?" follows it.
   */
  const [gift, setGift] = useState<Plan | null>(null);
  const [giftShown, setGiftShown] = useState(false);
  const [giftBusy, setGiftBusy] = useState(false);
  const giftFor = useRef<PaywallPeriod>(lineup.chosen);
  useEffect(() => {
    if (!lineup.gift || giftSeen() || !purchases.configured) return undefined;
    let live = true;
    purchases
      .offering(OFFERINGS.offer)
      .then((offering) => {
        if (live) setGift(giftPlan(offering));
      })
      .catch(() => undefined);
    return () => {
      live = false;
    };
  }, [lineup.gift]);
  const giftEvent = gift == null ? null : { offering: OFFERINGS.offer, product: gift.product.id };
  const afterGift = () => {
    setGiftShown(false);
    if (takeCancelQuestion()) setAsking(giftFor.current);
  };
  const declineGift = () => {
    if (giftBusy) return;
    if (giftEvent != null) track('exit_gift_declined', giftEvent);
    afterGift();
  };
  const buyGift = async () => {
    if (gift == null || giftBusy) return;
    setGiftBusy(true);
    const result = await purchases.buy(gift);
    setGiftBusy(false);
    if (result.status === 'purchased') {
      if (giftEvent != null) track('exit_gift_purchased', giftEvent);
      converted.current = true;
      setGiftShown(false);
      finish();
      return;
    }
    if (result.status === 'cancelled') {
      declineGift();
      return;
    }
    setGiftShown(false);
    if (result.status === 'pending') setNotice(t('offer.pending'));
    else if (result.status === 'failed') setNotice(result.message);
    else setNotice(t('offer.storeUnreachable'));
  };

  /**
   * The plans, once the store has answered: each card with the store's own
   * figures, the lineup that ordered them, and the default as a selection,
   * so the default is never missing from `paywall_plan_selected`. Then
   * Meta's standard "View content", through AppsFlyer, with neutral words
   * only. Once per view.
   */
  const plansShown = useRef(false);
  useEffect(() => {
    if (!loaded || plansShown.current) return;
    plansShown.current = true;
    const shown: PlanShown[] = kinds.flatMap((kind) => {
      const plan = plans[kind];
      if (plan == null) return [];
      return [
        {
          plan: kind,
          product_id: plan.product.id,
          price: plan.product.price,
          price_string: plan.priceString,
          currency: plan.product.currencyCode,
          intro:
            plan.intro?.kind === 'free-trial'
              ? 'free_trial'
              : plan.intro?.kind === 'pay-up-front'
                ? 'pay_up_front'
                : plan.intro?.kind === 'pay-as-you-go'
                  ? 'pay_as_you_go'
                  : 'none',
        },
      ];
    });
    const chosen = firstChoice(lineup, kinds);
    track('paywall_plans_shown', {
      offering: offeringId,
      trial: [plans.annual, plans.monthly].some((plan) => plan != null && freeTrialOf(plan) != null),
      default_plan: chosen,
      variant: lineup.variant,
      rc_offering: shelves[lineup.offering]?.identifier ?? shelves.standard?.identifier,
      plans_shown: shown,
      currency: plans[chosen]?.product.currencyCode,
      placement,
    });
    track('paywall_plan_selected', { plan: chosen, default: true, variant: lineup.variant });
    logAppsFlyerEvent('af_content_view', {
      af_content_type: 'subscription',
      af_content_id: plans[chosen]?.product.id ?? chosen,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);
  /** Meta's "Initiate checkout" has been sent on this visit. */
  const checkoutLogged = useRef(false);

  // Never leave the selection on a plan that cannot be bought.
  useEffect(() => {
    if (!loaded || devPreview) return;
    if (plans[tier] == null && kinds.length > 0) setTier(firstChoice(lineup, kinds));
    // `plans` and `kinds` follow `shelves`; the tier is what this watches.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded, tier, shelves]);

  useEffect(() => {
    if (!__DEV__ || !loaded || plans[lineup.chosen] != null) return;
    // The diagnosis, at the moment it is knowable. Without it this
    // misconfiguration surfaces as a card nobody can explain.
    console.error(
      `[paywall] No ${lineup.chosen} plan on "${OFFERINGS[lineup.offering]}" or "${OFFERINGS.standard}", so the lineup's ` +
        `default (${lineup.variant}) cannot be sold. Check the ${PACKAGES.annual}/${PACKAGES.monthly} packages in RevenueCat.`,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  /**
   * The comeback discount, computed rather than asserted: the comeback
   * annual's first payment against the standard annual, both from the
   * store. Null when there is nothing to claim; then nothing on screen
   * claims a discount.
   */
  const discounted = firstChargeSavingPercent(plans.annual, shelves.standard?.annual ?? null) != null;
  /** The comeback badge: assumed while the store is answering, so the page
   * does not open plain and change its mind; kept only for a real discount. */
  const offerShown = boosted && (discounted || (purchases.configured && !loaded));

  useEffect(() => {
    if (!boosted || !discounted) return;
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  }, [boosted, discounted]);

  /**
   * The win-back, scheduled as the app is backgrounded with this screen open
   * and pulled back if she returns on her own. Once only, never after the
   * discount has been given, and never for somebody who skipped the paywall.
   */
  const sent = useRef(false);
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (next) => {
      if (next === 'background') {
        if (sent.current || boosted || paywallSkipped()) return;
        const percent = winbackPercent.current;
        if (percent == null) return;
        sent.current = true;
        void notificationsAllowed().then((allowed) => {
          if (allowed) void scheduleWinback(percent, name);
        });
      } else if (next === 'active') {
        void cancelWinback();
      }
    });
    return () => subscription.remove();
  }, [boosted, name]);

  /**
   * The morning after: "Day 2 is ready", for somebody who did the first
   * session and left this screen without buying, at the time of her
   * reminder (or the hour she wakes).
   */
  useEffect(() => {
    if (!afterSession) return undefined;
    const subscription = AppState.addEventListener('change', (state) => {
      if (state !== 'background' || converted.current) return;
      const next = nextDay();
      if (next == null || next.ahead === 0) return;
      const minutes = planSettings().reminderMinutes ?? wakeMinutes(next.at);
      void scheduleNextDayPush({ at: next.at + minutes * 60_000, day: next.day, name });
    });
    return () => subscription.remove();
  }, [afterSession, name]);

  const close = () => {
    if (!wall && router.canGoBack()) router.back();
  };
  /** Bought or restored: a success buzz, then away. */
  const finish = () => {
    void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    markWelcomeOwed();
    if (__DEV__ && onSimulator) grantDevAccess();
    close();
  };

  /** Buy, or, with no store wired up, say so (`unavailable` is not an error). */
  const start = async () => {
    if (busy) return;
    track('paywall_cta_tapped', { offering: offeringId, plan: tier });
    // The plan object from the same fetch that put the price on screen.
    const plan = plans[tier];
    // A simulator in development has no StoreKit purchase to make: the button
    // plays the purchase's ending. Sample prices buy through the store's path.
    if (__DEV__ && onSimulator && (plan == null || !isSamplePlan(plan))) {
      converted.current = true;
      finish();
      return;
    }
    setNotice(null);
    setBusy(true);
    if (plan == null) {
      if (purchases.configured && !loaded) {
        // Ask again now: a fresh answer fills the cards in, and buying waits
        // for a second tap, so nobody is charged a price they never saw.
        try {
          stock(await fetchShelves());
          setBusy(false);
          Haptics.selectionAsync();
          return;
        } catch {
          setUnreachable(true);
        }
      }
      setBusy(false);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
      setNotice(t(loaded ? 'offer.planUnavailable' : 'offer.storeUnreachable'));
      return;
    }
    if (!checkoutLogged.current) {
      checkoutLogged.current = true;
      logAppsFlyerEvent('af_initiated_checkout', {
        af_content_type: plan.isLifetime ? 'lifetime' : 'subscription',
        af_content_id: plan.product.id,
      });
    }
    const result = await purchases.buy(plan);
    setBusy(false);

    if (result.status === 'purchased') {
      converted.current = true;
      // The reminder the rail promised, from the trial's own length.
      const trial = freeTrialOf(plan);
      if (trial != null) void remindBeforeTrialEnds(trial, plan.priceString);
      finish();
      return;
    }
    // Backed out of the store's own sheet: the exit gift once, where the
    // lineup has one; then, once, "What stopped you?".
    if (result.status === 'cancelled') {
      if (giftOpens({ cancelled: true, seen: giftSeen(), plan: gift, comeback: boosted }) && giftEvent != null) {
        markGiftSeen();
        giftFor.current = tier;
        setGiftShown(true);
        track('exit_gift_shown', giftEvent);
        return;
      }
      if (takeCancelQuestion()) setAsking(tier);
      return;
    }
    if (result.status === 'pending') {
      setNotice(t('offer.pending'));
      return;
    }
    if (result.status === 'failed') {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      setNotice(result.message);
      return;
    }
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    setNotice(t('offer.storeUnreachable'));
  };

  const restore = async () => {
    if (busy) return;
    setNotice(null);
    setBusy(true);
    const result = await purchases.restore();
    setBusy(false);
    if (result.status === 'restored') {
      converted.current = true;
      finish();
      return;
    }
    if (result.status === 'nothing-found') {
      setNotice(t('offer.nothingRestored'));
      return;
    }
    if (result.status === 'failed') {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      setNotice(t('offer.restoreFailed'));
    }
  };

  const select = (period: PaywallPeriod) => {
    if (period === tier) return;
    Haptics.selectionAsync();
    setTier(period);
    track('paywall_plan_selected', { plan: period, variant: lineup.variant });
  };

  /**
   * "Not now", and the close at the top: on to Home, for the "Day 1" card's
   * free two-minute session and the tour after it. `skipPaywall` records it;
   * the root guards then take this route away.
   */
  const skip = () => {
    if (paywallSkipped()) return close();
    armHomeTour();
    if (afterSession) setHomeTourStage('tour');
    skipPaywall();
  };

  const shownNotice = notice ?? (unreachable ? t('offer.storeUnreachable') : null);

  /** The chosen plan's charges with their dates, and the line over the
   * button that says what the store's sheet will ask for. "Now" is read on
   * each render, so a page left open past midnight dates from the day the
   * sheet opens. */
  const now = Date.now();
  const stops = chargeTimeline(tier, plans[tier], now, TRIAL_REMINDER_DAYS, t);
  const day = new Intl.DateTimeFormat(language, { month: 'long', day: 'numeric' });
  const dayInYear = new Intl.DateTimeFormat(language, { month: 'long', day: 'numeric', year: 'numeric' });
  const confirm = sheetLine(
    tier,
    plans[tier],
    now,
    t,
    t(Platform.OS === 'android' ? 'offer.sheet.storeGoogle' : 'offer.sheet.storeApple'),
    // A year on is the same day: the year says which.
    (at) => (new Date(at).getFullYear() === new Date(now).getFullYear() ? day : dayInYear).format(new Date(at)),
  );

  /**
   * "What stopped you?" answered. Recorded, and nothing new is offered: for
   * "It costs too much" the page points back to a cheaper way in it already
   * showed (the monthly's free week or lower first month, when this customer
   * can have it, or the one-time lifetime), by choosing it and bringing it
   * into view. No new price, no sheet, no timer (Guideline 5.6).
   */
  const answered = (reason: CancelReason | null) => {
    if (asking == null) return;
    track('purchase_cancel_reason', { reason: reason ?? 'dismissed', plan: asking, offering: offeringId });
    setAsking(null);
    if (reason !== 'price') return;
    const target = (['monthly', 'lifetime'] as const).find(
      (kind) =>
        kind !== asking &&
        kinds.includes(kind) &&
        (kind === 'monthly' ? hasIntroMonth(plans.monthly) || (plans.monthly != null && freeTrialOf(plans.monthly) != null) : plans.lifetime != null),
    );
    if (target == null) return;
    setTier(target);
    setReveal({ kind: target, at: Date.now() });
    track('paywall_cancel_reminded', { plan: target });
  };

  const rows: PlansStepRow[] = kinds.map((kind) => ({
    kind,
    plan: plans[kind],
    missing: loaded && plans[kind] == null && !devPreview,
  }));

  return (
    <PlansStep
      head={head}
      rows={rows}
      selected={tier}
      onSelect={select}
      leadBadge={offerShown ? t('offer.comebackBadge') : null}
      stops={stops}
      confirm={confirm}
      reveal={reveal}
      busy={busy}
      onBuy={start}
      notice={shownNotice}
      onRestore={restore}
      // Apple's own offer-code sheet, never a field of ours (Guideline 3.1.1).
      onRedeemCode={
        purchases.canRedeemCode
          ? () => {
              Haptics.selectionAsync();
              track('paywall_code_opened');
              void purchases.redeemCode();
            }
          : undefined
      }
      onSkip={wall ? onClose : skip}>
      <CancelQuestion visible={asking != null} onAnswer={answered} inModal={wall} />
      {gift != null && (
        <ExitGift plan={gift} visible={giftShown} busy={giftBusy} onBuy={() => void buyGift()} onDecline={declineGift} />
      )}
    </PlansStep>
  );
}

const styles = StyleSheet.create({
  full: { flex: 1 },
});
