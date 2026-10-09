import Calendar03Icon from '@hugeicons/core-free-icons/Calendar03Icon';
import ChartIncreaseIcon from '@hugeicons/core-free-icons/ChartIncreaseIcon';
import FlashIcon from '@hugeicons/core-free-icons/FlashIcon';
import Notification01Icon from '@hugeicons/core-free-icons/Notification01Icon';
import Route02Icon from '@hugeicons/core-free-icons/Route02Icon';
import RunningShoesIcon from '@hugeicons/core-free-icons/RunningShoesIcon';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { AppState, BackHandler, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { Easing, FadeIn, FadeInDown, ReduceMotion } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { cancelWinback, notificationsAllowed, scheduleWinback } from '@/entities/notifications';
import { useBoost } from '@/entities/offer';
import { painAreasOf, whereKey } from '@/entities/leg-zone';
import { firstName, getIntake, useProfileName } from '@/entities/profile';
import { planSettings } from '@/entities/program';
import {
  OFFERINGS,
  PACKAGES,
  PRINTED_PRICES as PRINTED,
  annualSavingPercent,
  discountPercent,
  fetchShelf,
  grantDevAccess,
  onSimulator,
  perWeek,
  planOn,
  purchases,
  type Plan,
  type PlanPeriod,
  type Shelf,
} from '@/entities/purchase';
import { PRIMARY, accents, fonts, meterColors, palette, type AccentName } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useT, type Key } from '@/shared/lib/i18n';
import { formatPrice } from '@/shared/lib/money';
import { usePaywall } from '@/shared/lib/paywall';
import { recordAppEvent } from '@/shared/lib/supabase';
import { useColorScheme } from '@/shared/lib/theme';
import { CelebrationSheet } from '@/shared/ui/celebration-sheet';
import { PlanChip } from '@/shared/ui/plan-chip';
import { PlanOption } from '@/shared/ui/plan-option';
import { PrimaryButton } from '@/shared/ui/primary-button';
import { LegalLinks, SubscriptionTerms, type DisclosedPlan } from '@/shared/ui/subscription-terms';

import { introSeen, markIntroSeen } from '../model/intro';
import { IntroHow, IntroPlan, StepBar } from './offer-intro';

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

/**
 * The three arguments the screen opens on, as catalogue keys rather than copy.
 *
 * `as const satisfies` rather than a plain annotation: the keys have to survive
 * as literal types for `t()` to accept them, and widening them to `Key` would
 * make every call here demand the union of every placeholder in the app.
 */
const FEATURES = [
  {
    icon: Route02Icon,
    accent: 'violet',
    title: 'offer.featurePlanTitle',
    blurb: 'offer.featurePlanBlurb',
  },
  {
    icon: FlashIcon,
    accent: 'orange',
    title: 'offer.featureAdaptiveTitle',
    blurb: 'offer.featureAdaptiveBlurb',
  },
  {
    icon: ChartIncreaseIcon,
    accent: 'teal',
    title: 'offer.featureProgressTitle',
    blurb: 'offer.featureProgressBlurb',
  },
] as const satisfies readonly {
  icon: IconSvgElement;
  accent: AccentName;
  title: Key;
  blurb: Key;
}[];

/**
 * What Premium holds, as the app's own chips, on the first view's plans.
 * The same chip, tint and glyph size as the plan screen's.
 */
const CHIPS = [
  { icon: Calendar03Icon, accent: 'violet', label: 'offer.chipWeekly' },
  { icon: FlashIcon, accent: 'orange', label: 'offer.chipSessions' },
  { icon: ChartIncreaseIcon, accent: 'teal', label: 'offer.chipTests' },
  { icon: RunningShoesIcon, accent: 'blue', label: 'offer.chipRoutines' },
  { icon: Notification01Icon, accent: 'amber', label: 'offer.chipReminders' },
] as const satisfies readonly { icon: IconSvgElement; accent: AccentName; label: Key }[];

const GIFT_ART = require('@assets/home/mascot-gift.png');

/** A first progress check is the second test, a fortnight after today's. */
const FIRST_CHECK_DAYS = 14;

/** Long enough that the number lands before the rest arrives under it. */
const STAGGER_MS = 90;

/**
 * The paywall: Walkito Premium, as an annual or a weekly subscription.
 *
 * It opens on what the app is for, not on a percentage. The annual plan is
 * preselected and marked as the best value — but only while the store's own
 * prices make it one — and the weekly plan sits under it as the alternative.
 *
 * Every price is the store's. Each row leads with the billed amount and its
 * period ("$44.99 per year"), which App Review Guideline 3.1.2 requires to be
 * the most prominent price on a subscription screen; the annual plan's weekly
 * equivalent is a smaller line underneath. The disclosure Apple asks for —
 * what is included, each plan's length and price, auto-renewal, where payment
 * is charged, how to cancel — sits under the plans, the selected plan's price
 * and renewal are repeated directly above the button, and Terms of Use,
 * Privacy Policy and Restore Purchases are on the line under it.
 *
 * A full screen, and the only way past it is to buy or to restore. It used to
 * be a form sheet over Home — but a sheet has something behind it, iOS knows
 * that, and every version finds one more way back to what it can see. It is a
 * guarded state of the root stack, so there is nothing behind it to reach. That
 * is why the top padding comes from the safe-area inset rather than a constant.
 */
export function OfferPage() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();

  const { name } = useLocalSearchParams<{ name?: string }>();
  /** Which plan is selected. The annual one, by default — see the note on the
   * component. */
  const [tier, setTier] = useState<PlanPeriod>('annual');
  /** True from the tap until the store answers. Locks the button rather than
   * letting a second tap open a second transaction. */
  const [busy, setBusy] = useState(false);
  /**
   * The one line the store gets to say, for both buying and restoring.
   *
   * A single slot because only one of them can be in flight at a time, and two
   * message rows would mean two places to look for the same kind of news. It
   * sits over the button, where the tap that caused it happened.
   */
  const [notice, setNotice] = useState<string | null>(null);

  /**
   * Raised once the store confirms, and the reason the screen does not close on
   * the spot. Vanishing straight into the app made the one moment worth
   * marking look like nothing happening.
   */
  const [celebrating, setCelebrating] = useState<'purchased' | 'restored' | null>(null);

  /**
   * Which offering to sell, by name.
   *
   * Apple has no notion of "the same product, cheaper" — a discount is a
   * different product — so the cheaper annual subscription is its own product
   * and the `offer` offering sells it. It is shown to somebody who dismissed the
   * paywall and came back, or who arrived from the win-back notification or
   * the offer email. Never on a first view.
   *
   * Never because of a code. An invite code used to unlock this price, and App
   * Review rejected 1.0.3 (35) for it (Guideline 3.1.1: a discount unlocked by
   * a code typed into the app). A code is now only ever Apple's own offer code,
   * redeemed in Apple's sheet ("Have a code?" below).
   */
  const winback = useBoost();
  const boosted = winback;
  const offeringId = boosted ? OFFERINGS.offer : OFFERINGS.standard;

  /**
   * Which step is on screen: how the plan starts, how a day works, then the
   * plans. Only on a first, full-price view, and only once on this phone (see
   * `introSeen`); every other view opens on the plans.
   */
  const [flow] = useState(() => !boosted && !introSeen());
  const [step, setStep] = useState<1 | 2 | 3>(flow ? 1 : 3);
  useEffect(() => {
    if (flow) track('paywall_step_viewed', { step });
    if (step === 3) markIntroSeen();
  }, [flow, step]);
  // Android's back button walks the steps back. On the first one it does what
  // it always did on the gate.
  useEffect(() => {
    if (!flow || step === 1) return;
    const subscription = BackHandler.addEventListener('hardwareBackPress', () => {
      setStep((current) => (current === 3 ? 2 : 1));
      return true;
    });
    return () => subscription.remove();
  }, [flow, step]);
  const next = () => setStep((current) => (current === 1 ? 2 : 3));

  const profileName = firstName(useProfileName());
  const settings = planSettings();

  /**
   * Their own numbers across the top of the first step: where it hurts, this
   * morning's first steps, how long. Our paywall only: none of it is sent to
   * Superwall (`paywallPersonalisation` never carries the body).
   */
  const strip = (() => {
    const intake = getIntake();
    if (intake == null) return [];
    const out: string[] = [];
    const where = whereKey(painAreasOf(intake.pain)[0], intake.side);
    if (where != null) out.push(t(where));
    if (intake.morningPain != null && where != null) out.push(t('offer.stripMornings', { score: intake.morningPain }));
    const duration = intake.painDuration != null ? DURATION[intake.painDuration] : undefined;
    if (duration != null) out.push(t(duration));
    return out;
  })();

  /** What they came for, in their words from onboarding, said back under the
   * title as theirs. Our paywall only, like the strip. */
  const why = (() => {
    const intake = getIntake();
    const key = intake?.goal != null ? GOAL_WORDS[intake.goal] : undefined;
    if (key == null) return null;
    if (intake?.goal === 'allday' && (intake.role === 'feet' || intake.role === 'both'))
      return t('onboarding.goal.shift');
    return t(key);
  })();

  /**
   * Superwall's paywall for this moment, over this one.
   *
   * The placement says which price the user has earned, so the dashboard can
   * show a paywall with the matching products. This screen stays underneath as
   * the fallback: no campaign, no network or no Superwall at all, and it is the
   * paywall the user sees. A beat after mount, so the screen has arrived — and,
   * at the end of onboarding, the founders' note has gone — before anything
   * covers it. Once per view.
   *
   * Registered as the paywall opens, on its first step rather than on the
   * plans, so Superwall counts everyone who saw it and not only those who
   * read on to the prices. Every campaign holds this screen as a 100% holdout
   * (see AGENTS.md), so nothing covers it; a dashboard paywall given traffic
   * again would stand in from the first step.
   */
  const paywall = usePaywall();
  useEffect(() => {
    // A simulator in development cannot buy through Superwall (no StoreKit
    // products), so our own paywall stays up and its button carries on.
    if (__DEV__ && onSimulator) return;
    const placement = winback ? 'paywall_comeback' : 'paywall_first';
    const timer = setTimeout(() => paywall.register(placement, { offering: offeringId }), 600);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * The offering being sold, and the standard one to strike through against.
   *
   * Both are fetched, because a discount has to be measured against a real
   * price rather than a printed one: comparing a store figure to a constant is
   * how a sheet ends up claiming a saving off a number nobody charges.
   */
  const [shelf, setShelf] = useState<Shelf>({ offering: null, standard: null });
  /**
   * Whether the store has answered.
   *
   * Needed to tell "still loading" from "the dashboard has no such package".
   * Both look like a null plan, and only one of them is a row the user must not
   * be allowed to tap. Set only by an answer: a fetch that failed leaves it
   * false, so a dropped connection never greys a plan out.
   */
  const [loaded, setLoaded] = useState(false);
  /**
   * Whether the last attempt to ask the store failed.
   *
   * Offline, an outage, or StoreKit returning no products. The rows stay
   * enabled and the screen says the store is unreachable; it asks again when
   * the app comes back to the foreground and when Continue is tapped. This
   * screen is the only way into the app for somebody who has not paid, so a
   * failed fetch must never be a dead end.
   */
  const [unreachable, setUnreachable] = useState(false);
  /** Bumped to ask the store again. */
  const [attempt, setAttempt] = useState(0);

  /** Takes a store answer in. */
  const stock = (next: Shelf) => {
    setShelf(next);
    setLoaded(true);
    setUnreachable(false);
  };

  useEffect(() => {
    if (!purchases.configured) return;
    let live = true;
    fetchShelf(offeringId).then(
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
  }, [offeringId, attempt]);

  // Ask again when the app comes back while the store has not answered: the
  // usual reason it could not be reached is a connection that has since come
  // back, and somebody who fixed it in Settings should not have to do more.
  useEffect(() => {
    if (loaded || !purchases.configured) return;
    const subscription = AppState.addEventListener('change', (next) => {
      if (next === 'active') setAttempt((n) => n + 1);
    });
    return () => subscription.remove();
  }, [loaded]);

  /**
   * The win-back's promise, from the store, once this view has seen it.
   *
   * The notification is scheduled as the app goes to the background, and it
   * says what the comeback price takes off. That figure is the discounted
   * annual against the standard annual, both from the store; until both have
   * been read there is no honest number to send, and no notification goes.
   */
  const winbackPercent = useRef<number | null>(null);

  /**
   * The same view, for the offer emails and the win-back.
   *
   * The emails go four and fourteen days after the first view, and quote the
   * store's own prices for the discounted annual subscription and the standard
   * one — read here, in this storefront's currency, because the server has no
   * way to know what the App Store would charge this person. Marked
   * `plan: 'annual'` so the emails can tell these prices from ones recorded
   * before the annual existed. Once per view, whichever offering this view is
   * selling, and only once the store has answered — a view recorded with no
   * prices would be no use to the emails.
   */
  const recorded = useRef(false);
  useEffect(() => {
    if (!loaded || recorded.current) return;
    recorded.current = true;
    let live = true;
    void Promise.all([
      purchases.offering(OFFERINGS.offer),
      purchases.offering(OFFERINGS.standard),
    ]).then(
      ([cheap, full]) => {
        if (!live) return;
        const low = cheap?.annual ?? null;
        const high = full?.annual ?? null;
        const percent =
          low != null && high != null
            ? discountPercent(low.product.price, high.product.price)
            : null;
        winbackPercent.current = percent;
        void recordAppEvent('paywall_viewed', {
          offering: offeringId,
          plan: 'annual',
          offer_price: low != null && percent != null ? low.product.display : null,
          standard_price: high?.product.display ?? null,
          percent,
        });
      },
      () => {
        // The store just answered for this screen, so this is rare; the view
        // is simply not recorded, and no win-back figure is set.
      },
    );
    return () => {
      live = false;
    };
    // Once per view: a change of offering mid-view is the same view.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  /**
   * Shown, and — on the way out — left without buying.
   *
   * On mount and unmount rather than on a button, so every way of leaving is
   * counted. A purchase or restore marks the exit as not a dismissal.
   */
  const converted = useRef(false);
  useEffect(() => {
    track('paywall_viewed', { offering: offeringId, boosted });
    return () => {
      if (!converted.current) track('paywall_dismissed', { offering: offeringId });
    };
    // Once per presentation; the offering is settled before the screen opens.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const annualPlan = planOn(shelf, 'annual');
  /** The weekly plan at its ordinary price — see `planOn`. */
  const weeklyPlan = planOn(shelf, 'weekly');
  const currency = annualPlan?.product.currencyCode ?? weeklyPlan?.product.currencyCode;
  const money = (amount: number) => formatPrice(amount, currency);

  /**
   * A plan the store answered about and had nothing for.
   *
   * Not the user's problem: it is an offering with no `$rc_annual` or
   * `$rc_weekly` package. The row stays visible but cannot be picked, so the
   * failure is a greyed row rather than a Continue that says the App Store is
   * unreachable when it plainly answered. Guarded on `loaded` so a row is never
   * disabled merely because the fetch has not landed.
   */
  const annualMissing = loaded && annualPlan == null;
  const weeklyMissing = loaded && weeklyPlan == null;

  useEffect(() => {
    if (!loaded) return;
    // Never leave the selection on a row that cannot be bought.
    if (annualMissing && !weeklyMissing && tier === 'annual') setTier('weekly');
    else if (weeklyMissing && !annualMissing && tier === 'weekly') setTier('annual');
  }, [loaded, annualMissing, weeklyMissing, tier]);

  useEffect(() => {
    if (!__DEV__ || !loaded) return;
    // The diagnosis, at the moment it is knowable. Without it this
    // misconfiguration surfaces as a greyed row nobody can explain.
    const id = shelf.offering?.identifier ?? offeringId;
    if (annualMissing) {
      console.error(
        `[paywall] Offering "${id}" has no ${PACKAGES.annual} package, so the annual ` +
          'subscription cannot be sold. Add it in the RevenueCat dashboard (Offerings → ' +
          'Packages → Annual) and attach the annual product to it.',
      );
    }
    if (weeklyMissing) {
      console.error(
        `[paywall] Neither "${id}" nor "${OFFERINGS.standard}" has a ${PACKAGES.weekly} ` +
          'package, so the weekly subscription cannot be sold.',
      );
    }
  }, [loaded, annualMissing, weeklyMissing, shelf, offeringId]);

  /**
   * What each plan costs, from the store, with the printed figures as a
   * fallback for a build that has no store to ask.
   *
   * `display` is the store's own string wherever one exists — it knows where
   * the symbol goes and which separator the locale uses. The per-week figure
   * has to be computed, so it is formatted from the numeric price.
   */
  const annualAmount = annualPlan?.product.price ?? PRINTED.annual;
  const annualText = annualPlan?.product.display ?? money(PRINTED.annual);
  const weeklyText = weeklyPlan?.product.display ?? money(PRINTED.weekly);

  /**
   * The invite or comeback discount, computed rather than asserted.
   *
   * The discounted annual against the standard annual, both from the store, so
   * changing either price in App Store Connect moves the badge instead of
   * leaving it advertising a percentage nobody is getting. Null when there is
   * no store, when `offer` is missing and the standard plan stands in, or when
   * the two cost the same — and then nothing on screen claims a discount.
   */
  const fullAnnual = shelf.standard?.annual ?? null;
  const offerPct =
    annualPlan != null && fullAnnual != null
      ? discountPercent(annualPlan.product.price, fullAnnual.product.price)
      : null;
  const discounted = offerPct != null;

  /**
   * Whether this view presents itself as the offer: the badge and the headline
   * about a price.
   *
   * While the store is still answering, a returning visitor is
   * assumed to be getting the offer, so the screen does not open plain and then
   * change its mind. Once it has answered, only a real discount keeps it.
   */
  const offerShown = boosted && (discounted || (purchases.configured && !loaded));

  /**
   * How much the annual plan saves against a year of the weekly one.
   *
   * Only from two store prices — a saving computed from the printed fallbacks
   * would be a claim with no product behind it. Null when the annual plan is
   * not actually cheaper, and then neither the "Best value" badge nor the
   * saving line is drawn.
   */
  const savingPct =
    annualPlan != null && weeklyPlan != null
      ? annualSavingPercent(annualPlan.product.price, weeklyPlan.product.price)
      : null;

  // Arriving on the better price is worth marking. A tap, not a sound.
  useEffect(() => {
    if (!discounted) return;
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  }, [discounted]);

  /**
   * The win-back.
   *
   * Scheduled the moment the app is backgrounded with this screen open, and
   * pulled back if the user returns on their own before it fires — someone who
   * came back by themselves has not earned a "come back" message, and sending
   * one anyway is how an app teaches people to turn its notifications off.
   *
   * Once only, and never after the discount has already been given.
   */
  const sent = useRef(false);
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (next) => {
      if (next === 'background') {
        if (sent.current || boosted) return;
        const percent = winbackPercent.current;
        // No store figure, no promise. See `winbackPercent`.
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

  /** Paid, or as good as: the entitlement guard takes the screen away; this is
   * for the case where it was pushed. */
  const close = () => {
    if (router.canGoBack()) router.back();
  };

  /**
   * Buy, or — with no store wired up — say so.
   *
   * `unavailable` is not an error and must not read as one. Nothing was
   * charged, nothing was refused, and there is no store to blame; telling the
   * user "that didn't go through" would describe a transaction that was never
   * attempted.
   */
  const start = async () => {
    if (busy) return;
    // A simulator in development has no StoreKit purchase to make. "Start my
    // plan" plays the purchase's ending instead, so the flow after it — the
    // setup screens — can be walked through.
    if (__DEV__ && onSimulator) {
      converted.current = true;
      setCelebrating('purchased');
      return;
    }
    setNotice(null);
    setBusy(true);
    // The plan object, not a product identifier. It came out of the same fetch
    // that produced the price on screen, so the two cannot be for different
    // things.
    const plan = tier === 'annual' ? annualPlan : weeklyPlan;
    if (plan == null) {
      if (purchases.configured && !loaded) {
        // The store has not answered this screen yet. Ask it again now rather
        // than only saying it is unreachable: the tap is the moment somebody
        // has decided, and the connection may well be back. A fresh answer
        // fills the rows and the price line in; buying waits for a second tap,
        // so nobody is charged a price they never saw on this screen.
        try {
          stock(await fetchShelf(offeringId));
          setBusy(false);
          Haptics.selectionAsync();
          return;
        } catch {
          setUnreachable(true);
        }
      }
      setBusy(false);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
      // A store that never answered is unreachable; a store that answered
      // without this package is misconfigured, and telling somebody to try again
      // in a moment sends them to retry something that will never succeed.
      setNotice(t(loaded ? 'offer.planUnavailable' : 'offer.storeUnreachable'));
      return;
    }
    const result = await purchases.buy(plan);
    setBusy(false);

    if (result.status === 'purchased') {
      converted.current = true;
      // No haptic here: the sheet fires its own as it lands, and two success
      // buzzes a frame apart read as a stutter rather than as emphasis.
      setCelebrating('purchased');
      return;
    }
    // The user backed out of Apple's own sheet. They know what they did; a
    // message here would be the app commenting on their decision.
    if (result.status === 'cancelled') return;
    // Ask to Buy, or a bank confirming. Nothing went wrong, so no error buzz;
    // if it is approved, the store pushes the entitlement and the guard takes
    // this screen away on its own.
    if (result.status === 'pending') {
      setNotice(t('offer.pending'));
      return;
    }
    if (result.status === 'failed') {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      setNotice(result.message);
      return;
    }
    // `unavailable`: no store was reached at all. Not an error, because nothing
    // failed and nobody was charged; not a success either.
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
      setCelebrating('restored');
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
    // `unavailable` says nothing: there was no store to ask.
  };

  const select = (period: PlanPeriod) => {
    Haptics.selectionAsync();
    setTier(period);
    track('paywall_plan_selected', { plan: period });
  };

  /**
   * Whether a plan's price is one the store gave.
   *
   * With no store at all — a simulator, a build without a key — the printed
   * fallbacks stand in so the layout is whole. With a store that has not
   * answered, they do not: the disclosure and the line over the button are
   * the terms of a charge, and a fallback there would quote a figure, in
   * dollars, that this storefront may not charge.
   */
  const priced = (plan: Plan | null) => plan != null || !purchases.configured;

  /** The plans this screen is offering, for the disclosure — the same strings
   * the rows print, so the two cannot quote different figures. */
  const disclosed: DisclosedPlan[] = [
    ...(annualMissing || !priced(annualPlan) ? [] : [{ period: 'annual' as const, price: annualText }]),
    ...(weeklyMissing || !priced(weeklyPlan) ? [] : [{ period: 'weekly' as const, price: weeklyText }]),
  ];
  const ctaPriced = priced(tier === 'annual' ? annualPlan : weeklyPlan);
  /** What the store said last, or that it could not be reached. */
  const shownNotice = notice ?? (unreachable ? t('offer.storeUnreachable') : null);

  if (step < 3) {
    return (
      <View style={[styles.screen, { paddingTop: insets.top + 16 }]}>
        <StepBar step={step} />
        <ScrollView
          style={styles.body}
          contentContainerStyle={styles.introContent}
          showsVerticalScrollIndicator={false}>
          {/* Keyed on the step, so the next one arrives rather than appears. */}
          <Animated.View key={step} entering={FadeIn.duration(280).reduceMotion(ReduceMotion.System)}>
            {step === 1 ? (
              <IntroPlan
                name={profileName}
                strip={strip}
                why={why}
                minutes={settings.defaultMinutes}
                daysPerWeek={settings.daysPerWeek}
                checkOn={Date.now() + FIRST_CHECK_DAYS * 86_400_000}
              />
            ) : (
              <IntroHow />
            )}
          </Animated.View>
        </ScrollView>
        <View style={[styles.cta, { paddingBottom: Math.max(insets.bottom, 16) + 4 }]}>
          <PrimaryButton label={t('offer.next')} onPress={next} />
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.screen, { paddingTop: insets.top + 16 }]}>
      {flow && <StepBar step={3} />}
      {/* The body scrolls and the button does not, so on a short phone or at a
          large text size Continue is never pushed off a screen that has no
          other way out. */}
      <ScrollView
        style={styles.body}
        contentContainerStyle={styles.bodyContent}
        showsVerticalScrollIndicator={false}>
        {boosted ? (
          <>
            {/* Only once the better price is in. A badge that was always there would
                make the standard price look like the discounted one.

                No percentage at display size above it any more. It was set at
                108pt over a billed amount at 22pt, and App Review Guideline 3.1.2
                wants the amount charged to be the most prominent price on a
                subscription screen. The discount is still on the row, as a badge
                and a struck-through price, beside the figure it comes from. */}
            {offerShown && (
              <Animated.View
                entering={FadeIn.duration(420).reduceMotion(ReduceMotion.System)}
                style={styles.badge}>
                <Text style={styles.badgeText}>
                  {t('offer.comebackBadge')}
                </Text>
              </Animated.View>
            )}

            <Animated.Text
              entering={FadeIn.delay(STAGGER_MS).duration(320).reduceMotion(ReduceMotion.System)}
              style={[offerShown ? styles.headline : styles.title, { color: colors.foreground }]}>
              {!offerShown ? t('offer.headline') : t('offer.headlineComeback')}
            </Animated.Text>
            <Animated.Text
              entering={FadeIn.delay(STAGGER_MS * 2).duration(320).reduceMotion(ReduceMotion.System)}
              style={[styles.sub, { color: meter.caption }]}>
              {t('offer.sub')}
            </Animated.Text>

            <View style={styles.features}>
              {FEATURES.map((feature, i) => {
                const tone = accents[scheme][feature.accent];
                return (
                  <Animated.View
                    key={feature.title}
                    entering={FadeInDown.delay(STAGGER_MS * (3 + i))
                      .duration(360)
                      .easing(Easing.bezier(0.23, 1, 0.32, 1).factory())
                      .reduceMotion(ReduceMotion.System)}
                    style={styles.feature}>
                    <View style={[styles.tile, { backgroundColor: tone.track }]}>
                      <HugeiconsIcon icon={feature.icon} size={19} color={tone.fill} strokeWidth={2.6} />
                    </View>
                    <View style={styles.featureCopy}>
                      <Text style={[styles.featureTitle, { color: colors.foreground }]}>
                        {t(feature.title)}
                      </Text>
                      <Text style={[styles.featureBlurb, { color: meter.caption }]}>
                        {t(feature.blurb)}
                      </Text>
                    </View>
                  </Animated.View>
                );
              })}
            </View>
          </>
        ) : (
          <View style={styles.start}>
            {/* White, so the dark scheme takes it as drawn; the light one inks it. */}
            <Animated.Image
              entering={FadeInDown.duration(360).reduceMotion(ReduceMotion.System)}
              source={GIFT_ART}
              style={[styles.gift, scheme === 'light' && { tintColor: colors.foreground }]}
              resizeMode="contain"
            />
            <Animated.Text
              entering={FadeIn.delay(STAGGER_MS).duration(320).reduceMotion(ReduceMotion.System)}
              style={[styles.title, styles.startTitle, { color: colors.foreground }]}>
              {t('offer.startTitle')}
            </Animated.Text>
            <Animated.Text
              entering={FadeIn.delay(STAGGER_MS * 2).duration(320).reduceMotion(ReduceMotion.System)}
              style={[styles.sub, styles.startSub, { color: meter.caption }]}>
              {t('offer.startSub')}
            </Animated.Text>
            <Animated.View
              entering={FadeInDown.delay(STAGGER_MS * 3)
                .duration(360)
                .easing(Easing.bezier(0.23, 1, 0.32, 1).factory())
                .reduceMotion(ReduceMotion.System)}
              style={styles.chips}>
              {CHIPS.map((chip) => (
                <PlanChip
                  key={chip.label}
                  label={t(chip.label)}
                  icon={chip.icon}
                  tone={accents[scheme][chip.accent]}
                  accessibilityRole="text"
                />
              ))}
            </Animated.View>
          </View>
        )}

        <Animated.View
          accessibilityRole="radiogroup"
          entering={FadeInDown.delay(STAGGER_MS * 6)
            .duration(360)
            .reduceMotion(ReduceMotion.System)}
          style={styles.tiers}>
          {/* The annual plan first, and selected. `price` is the billed amount
              and `note` the per-week figure, in that order of prominence. */}
          <PlanOption
            title={t('offer.annualTitle')}
            badge={
              offerShown && offerPct != null
                ? t('offer.badgeOff', { percent: offerPct })
                : // "Best value" is a claim, so it waits for the store's prices
                  // to make it one.
                  savingPct != null
                  ? t('offer.badgeBest')
                  : undefined
            }
            price={t('offer.annualPrice', { price: annualText })}
            was={
              // Only when there is something to strike through, and only the
              // store's own standard price.
              offerShown && offerPct != null && fullAnnual != null
                ? fullAnnual.product.display
                : undefined
            }
            note={
              !offerShown && savingPct != null
                ? t('offer.annualNoteSave', {
                    perWeek: money(perWeek(annualAmount)),
                    percent: savingPct,
                  })
                : t('offer.annualNote', { perWeek: money(perWeek(annualAmount)) })
            }
            disabled={annualMissing}
            selected={tier === 'annual' && !annualMissing}
            onPress={() => select('annual')}
          />
          <PlanOption
            title={t('offer.weeklyTitle')}
            price={t('offer.weeklyPrice', { price: weeklyText })}
            note={t('offer.weeklyNote')}
            disabled={weeklyMissing}
            selected={tier === 'weekly' && !weeklyMissing}
            onPress={() => select('weekly')}
          />
        </Animated.View>

        {/* One line of trust under the plans, and true: "Before your first
            step" in Library is free and keeps playing after access ends. */}
        <Animated.Text
          entering={FadeIn.delay(STAGGER_MS * 6.5).duration(320).reduceMotion(ReduceMotion.System)}
          style={[styles.freeLine, { color: meter.label }]}>
          {t('offer.freeLine')}
        </Animated.Text>

        <Animated.View
          entering={FadeInDown.delay(STAGGER_MS * 7)
            .duration(360)
            .reduceMotion(ReduceMotion.System)}>
          <SubscriptionTerms plans={disclosed} style={styles.termsBlock} />
        </Animated.View>
      </ScrollView>

      {/* Outside the scroll, so the one action this screen exists for — and what
          it will charge — is always on screen. */}
      <View style={[styles.cta, { paddingBottom: Math.max(insets.bottom, 16) + 4 }]}>
        {shownNotice != null && (
          <Text style={[styles.notice, { color: meter.label }]}>{shownNotice}</Text>
        )}
        {ctaPriced && (
          <Text style={[styles.ctaTerms, { color: meter.label }]}>
            {tier === 'annual'
              ? t('offer.ctaAnnual', { price: annualText })
              : t('offer.ctaWeekly', { price: weeklyText })}
          </Text>
        )}
        <PrimaryButton
          label={busy ? t('offer.processing') : t('offer.startPlan')}
          disabled={busy}
          onPress={start}
        />
        <LegalLinks onRestore={restore} disabled={busy} />
        {/* For somebody holding an App Store offer code: Apple's own sheet,
            which redeems it in the store, and the subscription it starts
            arrives through the usual purchase listener. Never a field of
            ours: a code typed into the app that unlocks or discounts anything
            is what App Review rejected 1.0.3 (35) for (Guideline 3.1.1).
            Only where the store has such a sheet (iOS). */}
        {purchases.canRedeemCode && (
          <Pressable
            accessibilityRole="button"
            onPress={() => {
              Haptics.selectionAsync();
              track('paywall_code_opened');
              void purchases.redeemCode();
            }}
            hitSlop={8}
            style={({ pressed }) => [styles.codeLink, pressed && { opacity: 0.6 }]}>
            <Text style={[styles.codeText, { color: meter.label }]}>{t('offer.haveCode')}</Text>
          </Pressable>
        )}
      </View>

      {/* Owns the dismissal. The paywall vanishing into Home is what backing out
          looks like too, so the one moment worth marking was the one that read
          as nothing having happened. */}
      <CelebrationSheet
        visible={celebrating != null}
        title={t(celebrating === 'restored' ? 'offer.restoredTitle' : 'offer.purchasedTitle')}
        headline={celebrating === 'restored' ? undefined : t('offer.premium')}
        headlineColor={PRIMARY}
        blurb={t(celebrating === 'restored' ? 'offer.restoredBlurb' : 'offer.purchasedBlurb')}
        ctaLabel={t('offer.start')}
        onClose={() => {
          setCelebrating(null);
          if (__DEV__ && onSimulator) grantDevAccess();
          close();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // `paddingTop` comes from the safe-area inset at the call site.
    paddingHorizontal: 22,
    gap: 12,
  },
  /** The scrolling half. `flex: 1` so it yields to the pinned button below
   * rather than pushing it off the screen. */
  body: { flex: 1 },
  bodyContent: { gap: 16, paddingBottom: 16 },
  /** Pinned. Padding rather than margin so the safe-area inset is part of the
   * block's own box. */
  cta: {
    paddingTop: 4,
    gap: 10,
  },
  /** The selected plan's billed amount and renewal, right above the button. */
  ctaTerms: {
    ...fonts.medium(13),
    lineHeight: 17,
    textAlign: 'center',
  },
  notice: {
    ...fonts.medium(13),
    lineHeight: 17,
    textAlign: 'center',
  },
  termsBlock: {
    paddingTop: 10,
  },
  freeLine: {
    ...fonts.semibold(14),
    lineHeight: 19,
    textAlign: 'center',
  },
  codeLink: {
    alignSelf: 'center',
    paddingVertical: 2,
  },
  codeText: fonts.semibold(14),
  badge: {
    alignSelf: 'center',
    marginTop: -4,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    borderCurve: 'continuous',
    backgroundColor: PRIMARY,
  },
  badgeText: {
    ...fonts.bold(11, 0.9),
    color: '#FFFFFF',
  },
  /** The standard sheet's opening line, with no figure above it. */
  title: {
    marginTop: 8,
    ...fonts.heavy(30, -0.8),
    lineHeight: 34,
    textAlign: 'center',
  },
  /** The offer's opening line, under the badge. A size smaller than `title`
   * because it is a longer sentence. It names no figure: the billed amount on
   * the row stays the most prominent price on the screen. */
  headline: {
    marginTop: 4,
    ...fonts.bold(22, -0.4),
    lineHeight: 28,
    textAlign: 'center',
  },
  sub: {
    marginTop: -6,
    ...fonts.regular(16),
    lineHeight: 22,
    textAlign: 'center',
  },
  features: {
    marginTop: 10,
    gap: 20,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  tile: {
    width: 36,
    height: 36,
    borderRadius: 12,
    borderCurve: 'continuous',
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureCopy: {
    flex: 1,
    gap: 2,
  },
  featureTitle: fonts.semibold(16),
  featureBlurb: {
    ...fonts.regular(15),
    lineHeight: 20,
  },
  tiers: {
    marginTop: 4,
  },
  /** The two steps before the plans: room under the bar. */
  introContent: { paddingTop: 22, paddingBottom: 16 },
  /** The first view's opening, over the plans: the mascot, a line, the chips. */
  start: {
    alignItems: 'center',
    gap: 6,
  },
  gift: { width: 104, height: 104 },
  startTitle: { marginTop: 4 },
  startSub: { marginTop: 0 },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    marginTop: 12,
  },
});
