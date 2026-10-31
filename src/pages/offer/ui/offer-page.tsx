import * as Haptics from 'expo-haptics';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { AppState, BackHandler, ScrollView, StyleSheet, View } from 'react-native';
import Animated, { Easing, FadeIn, FadeOut, ReduceMotion } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { OfferScreen, type PassSale } from '@/features/home-offer';
import { usePassCheckout } from '@/widgets/pass-checkout';
import { cancelWinback, notificationsAllowed, scheduleWinback } from '@/entities/notifications';
import { useBoost } from '@/entities/offer';
import { painAreasOf, whereKey } from '@/entities/leg-zone';
import { firstName, getIntake, useProfileName } from '@/entities/profile';
import { planSettings } from '@/entities/program';
import {
  OFFERINGS,
  PACKAGES,
  fetchShelf,
  firstCharge,
  firstChargeSavingPercent,
  grantDevAccess,
  isSamplePlan,
  markPaywallSoldTrial,
  onSimulator,
  paywallSkipped,
  planOn,
  purchases,
  skipPaywall,
  usePaywallSkipped,
  useTrialOnFirstPaywall,
  type PaywallPeriod,
  type Plan,
  type Shelf,
} from '@/entities/purchase';
import { armHomeTour } from '@/entities/session';
import { freeTrialOf, remindBeforeTrialEnds } from '@/features/home-offer';
import { PRIMARY, meterColors, palette } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useT, type Key } from '@/shared/lib/i18n';
import { usePaywall } from '@/shared/lib/paywall';
import { recordAppEvent } from '@/shared/lib/supabase';
import { useColorScheme } from '@/shared/lib/theme';
import { CelebrationSheet } from '@/shared/ui/celebration-sheet';

import { introSeen, markIntroSeen } from '../model/intro';
import { EXTRA_PLANS } from '../model/plans';
import { OfferHero } from './offer-hero';
import { IntroHow, IntroNext, IntroPlan, StepBar } from './offer-intro';
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

/** A first progress check is the second test: the first is tomorrow (today is
 * the two-minute first session), the next a fortnight after it. */
const FIRST_CHECK_DAYS = 1 + 14;

/** A step arriving: a slow fade over the one leaving, so the two overlap. */
const STEP_IN = FadeIn.duration(460)
  .easing(Easing.bezier(0.23, 1, 0.32, 1).factory())
  .reduceMotion(ReduceMotion.System);
/** A step leaving: quicker, so the new one is the one you read. */
const STEP_OUT = FadeOut.duration(300).easing(Easing.out(Easing.quad)).reduceMotion(ReduceMotion.System);

/**
 * The `offer` route: the hard paywall, and the offers after its "Not now".
 *
 * A full screen, a guarded state of the root stack, so there is nothing behind
 * it to reach, and no way into the app without buying. Somebody who has not
 * skipped the plans sees them (`Paywall`). "Not now" (`skipPaywall`) does not
 * leave this screen: the plans fade out where they stand and the one-time
 * trial offer arrives in their place (`OfferScreen` from `features/home-offer`),
 * then the comeback price against its deadline, then the standard plans. That
 * is what the screen shows from then on, at every launch, until a purchase
 * (or a restore) hands over to the setup screens.
 */
export function OfferPage() {
  const skipped = usePaywallSkipped();
  // The limited offer's 3-month pass, bought through the pass checkout. Its
  // sheets cannot outlive this route, and need not: the root guards take the
  // route away the moment the paywall is skipped (the offers then stand over
  // Home, in `OfferWall`, which keeps itself up while its checkout is busy),
  // so the offers drawn here are only ever a route on its way out. A pass
  // bought here anyway opens the app and takes the route with it; the
  // server's days are still asked for, and nobody this gate is for holds a
  // renewing subscription to be told about (that would be access).
  const checkout = usePassCheckout();
  const pass: PassSale = {
    buy: (plan, onPurchased) => checkout.start(plan, { placement: 'limited_offer', onPurchased }),
    signInToRestore: checkout.signInToRestore,
    busy: checkout.busy,
    notice: checkout.notice,
  };
  // The plans fade out where they stand (`STEP_OUT`) while the offers fade in
  // over them (`STEP_IN`); the offer's own entrance starts once they are gone.
  // The plans have no entrance of their own here: each step brings its own.
  return (
    <View style={styles.full}>
      {skipped ? (
        <Animated.View key="offers" entering={STEP_IN} exiting={STEP_OUT} style={StyleSheet.absoluteFill}>
          <OfferScreen pass={pass} />
        </Animated.View>
      ) : (
        <Animated.View key="plans" exiting={STEP_OUT} style={StyleSheet.absoluteFill}>
          <Paywall />
        </Animated.View>
      )}
      {checkout.sheet}
    </View>
  );
}

/**
 * The paywall: Walkito Plus, as an annual or a monthly subscription or a
 * lifetime purchase (Android: whatever its offerings still hold, the weekly
 * subscription among them).
 *
 * The plans themselves are the third step (`plans-step.tsx`, BitePal's
 * paywall with our mascot): the annual plan leads and is chosen, and "Show
 * all plans" opens the others under it. Every price is the store's, and each
 * card's largest figure is the amount billed, which App Review Guideline
 * 3.1.2 requires to be the most prominent price on a subscription screen. What
 * it charges, that it renews and where to cancel sit under the button, with
 * Terms of Use, Privacy Policy and Restore Purchases.
 *
 * Its one way past without buying is "Not now" (`skipPaywall`), which appears
 * three seconds after "Show all plans" and leads to the one-time trial offer
 * on this same screen (`OfferPage`), never into the app. The top padding
 * comes from the safe-area inset rather than a constant.
 */
function Paywall() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();

  const { name } = useLocalSearchParams<{ name?: string }>();
  /** Which plan is selected. The annual one, by default — see the note on the
   * component. */
  const [tier, setTier] = useState<PaywallPeriod>('annual');
  /** True from the tap until the store answers. Locks the button rather than
   * letting a second tap open a second transaction. */
  const [busy, setBusy] = useState(false);
  /** How tall step two's sheet came out, so the hero keeps its pieces above it. */
  const [sheetHeight, setSheetHeight] = useState(0);
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

  /**
   * The free week, on a first view, for somebody a Meta ad brought (the
   * `trial` offering; the monthly and lifetime come from the standard one,
   * `planOn`); everybody else gets the annual at its full price, the `default`
   * offering (`trialOnFirstPaywall`). Followed until the plans show, so an
   * AppsFlyer report that lands during the first steps still counts, then held:
   * the plans never change under somebody's eyes. The free week shows only when
   * the store calls this customer eligible.
   */
  const trialAudience = useTrialOnFirstPaywall();
  const [sellsTrial, setSellsTrial] = useState(trialAudience);
  useEffect(() => {
    if (step !== 3) setSellsTrial(trialAudience);
  }, [step, trialAudience]);
  const offeringId = boosted ? OFFERINGS.offer : sellsTrial ? OFFERINGS.trial : OFFERINGS.standard;
  // Kept, so the offer after a skip does not offer the same free week again.
  useEffect(() => {
    if (step === 3 && offeringId === OFFERINGS.trial) markPaywallSoldTrial();
  }, [step, offeringId]);

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
   * says what the comeback price takes off. That figure is the comeback
   * annual's first year (paid up front) against the standard annual, both from
   * the store; until both have been read there is no honest number to send,
   * and no notification goes.
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
    void Promise.all([purchases.offering(OFFERINGS.offer), purchases.offering(OFFERINGS.standard)]).then(
      ([cheap, full]) => {
        if (!live) return;
        const low = cheap?.annual ?? null;
        const high = full?.annual ?? null;
        // The comeback annual is the same yearly subscription with its first
        // year paid up front at less: what it saves is that first payment
        // against the standard year, and the price the emails quote is it.
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

  /**
   * Each plan the offering holds, by kind, from the store. The annual is the
   * offering's own (its price is what the offering is for); the others fall
   * back to the standard offering's, the same product at its ordinary price
   * (`planOn`). iOS sells annual, monthly and lifetime; Android's offerings
   * still hold the first line-up, annual and weekly, until its own versions
   * of the new products exist, and the step draws whatever is there.
   */
  const plans: Readonly<Record<PaywallPeriod, Plan | null>> = {
    annual: planOn(shelf, 'annual'),
    monthly: planOn(shelf, 'monthly'),
    weekly: planOn(shelf, 'weekly'),
    lifetime: planOn(shelf, 'lifetime'),
  };
  const annualPlan = plans.annual;

  /**
   * The annual plan, which the store answered about and had nothing for.
   *
   * Not the user's problem: it is an offering with no `$rc_annual` package.
   * The card stays visible but cannot be picked, so the failure is a greyed
   * card rather than a Continue that says the App Store is unreachable when it
   * plainly answered. Guarded on `loaded` so a card is never disabled merely
   * because the fetch has not landed. The other plans are simply left out when
   * the store has none of them.
   */
  const annualMissing = loaded && annualPlan == null;
  /** The plans "Show all plans" opens. Before the store answers, the ones iOS
   * sells, with no figure yet; after, the ones it really has. */
  const extraKinds = EXTRA_PLANS.filter((kind) => (loaded ? plans[kind] != null : kind !== 'weekly'));

  useEffect(() => {
    if (!loaded) return;
    // Never leave the selection on a plan that cannot be bought.
    if (tier === 'annual' && annualMissing && extraKinds.length > 0) setTier(extraKinds[0]);
    else if (tier !== 'annual' && plans[tier] == null && !annualMissing) setTier('annual');
    // `plans` and `extraKinds` follow `shelf`, which only changes with `loaded`
    // or a fresh answer; the tier is what this watches.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded, annualMissing, tier, shelf]);

  useEffect(() => {
    if (!__DEV__ || !loaded) return;
    // The diagnosis, at the moment it is knowable. Without it this
    // misconfiguration surfaces as a greyed card nobody can explain.
    const id = shelf.offering?.identifier ?? offeringId;
    if (annualMissing) {
      console.error(
        `[paywall] Offering "${id}" has no ${PACKAGES.annual} package, so the annual ` +
          'subscription cannot be sold. Add it in the RevenueCat dashboard (Offerings → ' +
          'Packages → Annual) and attach the annual product to it.',
      );
    }
  }, [loaded, annualMissing, shelf, offeringId]);

  /**
   * The comeback discount, computed rather than asserted.
   *
   * The comeback annual's first payment against the standard annual, both
   * from the store, so changing either price in App Store Connect moves the
   * claim instead of leaving it advertising a saving nobody is getting. Null
   * when there is no store, when `offer` is missing and the standard plan
   * stands in, or when the two cost the same; then nothing on screen claims a
   * discount.
   */
  const fullAnnual = shelf.standard?.annual ?? null;
  const offerPct = firstChargeSavingPercent(annualPlan, fullAnnual);
  const discounted = offerPct != null;

  /**
   * Whether this view presents itself as the offer: the comeback badge and
   * headline.
   *
   * While the store is still answering, a returning visitor is
   * assumed to be getting the offer, so the screen does not open plain and then
   * change its mind. Once it has answered, only a real discount keeps it.
   */
  const offerShown = boosted && (discounted || (purchases.configured && !loaded));

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
   * Once only, and never after the discount has already been given. Never for
   * somebody who skipped the paywall either: the offer screen carries their
   * offers (the one-time trial, then the comeback with its own pushes), and a
   * second "come back" nudge from here would talk over them.
   */
  const sent = useRef(false);
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (next) => {
      if (next === 'background') {
        if (sent.current || boosted || paywallSkipped()) return;
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
    // The plan object, not a product identifier. It came out of the same fetch
    // that produced the price on screen, so the two cannot be for different
    // things.
    const plan = plans[tier];
    // A simulator in development has no StoreKit purchase to make. The button
    // plays the purchase's ending instead, so the flow after it — the setup
    // screens — can be walked through. Sample prices (`?samplePrices`) buy
    // through the store's own path, which grants the pretend purchase.
    if (__DEV__ && onSimulator && (plan == null || !isSamplePlan(plan))) {
      converted.current = true;
      setCelebrating('purchased');
      return;
    }
    setNotice(null);
    setBusy(true);
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
      // The reminder the plans step promised, from the trial's own length.
      const trial = freeTrialOf(plan);
      if (trial != null) void remindBeforeTrialEnds(trial, plan.priceString);
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

  const select = (period: PaywallPeriod) => {
    if (period === tier) return;
    Haptics.selectionAsync();
    setTier(period);
    track('paywall_plan_selected', { plan: period });
  };

  /**
   * "Not now", and the close over the sky: on to Home, for the "Day 1"
   * card's two-minute session and the tour after it, which are free; the
   * one-time trial offer follows the tour (`OfferWall` in the root layout).
   *
   * `skipPaywall` records it (and tracks `paywall_skipped`, once per person);
   * the root guards then take this route away and open the tabs, so this
   * does not navigate. Leaving unmounts this view, which counts as
   * `paywall_dismissed` as any other way out does.
   */
  const skip = () => {
    armHomeTour();
    skipPaywall();
  };

  /** The simulator has no store: the plans still look and select as they will. */
  const devPreview = __DEV__ && onSimulator;
  /** What the store said last, or that it could not be reached. */
  const shownNotice = notice ?? (unreachable ? t('offer.storeUnreachable') : null);

  // One page per step. They cross-fade in place over each other (`STEP_IN`,
  // `STEP_OUT` below), with the bar and the button where they were, so moving
  // on reads as the page changing under them rather than a new screen.
  let page: ReactNode;
  if (step === 2) {
    page = (
      <View style={styles.full}>
        <StatusBar style="light" />
        <OfferHero top={insets.top + 52} covered={sheetHeight} />
        <View style={[styles.skyBar, { paddingTop: insets.top + 16 }]}>
          <StepBar step={2} onSky onSelect={(target) => setStep(target as 1 | 2 | 3)} />
        </View>
        {/* The step's copy as a sheet over the hero, the button at its foot. */}
        <Animated.View
          onLayout={(event) => setSheetHeight(Math.round(event.nativeEvent.layout.height))}
          style={[
            styles.sheet,
            { backgroundColor: colors.background, paddingBottom: Math.max(insets.bottom, 16) + 4 },
          ]}>
          <View style={[styles.grabber, { backgroundColor: meter.track }]} />
          <IntroHow />
          <IntroNext onPress={next} />
        </Animated.View>
      </View>
    );
  } else if (step === 1) {
    page = (
      <View style={[styles.screen, { paddingTop: insets.top + 16 }]}>
        <StepBar step={step} onSelect={(target) => setStep(target as 1 | 2 | 3)} />
        <ScrollView
          style={styles.body}
          contentContainerStyle={styles.introContent}
          showsVerticalScrollIndicator={false}>
          {/* Keyed on the step, so the next one arrives rather than appears. */}
          <Animated.View entering={FadeIn.duration(280).reduceMotion(ReduceMotion.System)}>
            <IntroPlan
              name={profileName}
              strip={strip}
              why={why}
              minutes={settings.defaultMinutes}
              daysPerWeek={settings.daysPerWeek}
              checkOn={Date.now() + FIRST_CHECK_DAYS * 86_400_000}
            />
          </Animated.View>
        </ScrollView>
        <View style={[styles.cta, { paddingBottom: Math.max(insets.bottom, 16) + 4 }]}>
          <IntroNext onPress={next} />
        </View>
      </View>
    );
  } else {
    /** A row for the step: the plan, and whether the store answered without it. */
    const row = (kind: PaywallPeriod): PlansStepRow => ({
      kind,
      plan: plans[kind],
      missing: loaded && plans[kind] == null && !devPreview,
    });
    page = (
      <PlansStep
        stepBar={flow ? <StepBar step={3} onSky onSelect={(target) => setStep(target as 1 | 2 | 3)} /> : undefined}
        lead={row('annual')}
        extras={extraKinds.map(row)}
        selected={tier}
        onSelect={select}
        leadBadge={offerShown ? t('offer.comebackBadge') : t('offer.plans.mostPopular')}
        comeback={offerShown}
        busy={busy}
        onBuy={start}
        notice={shownNotice}
        onRestore={restore}
        // For somebody holding an App Store offer code: Apple's own sheet,
        // which redeems it in the store, and the subscription it starts
        // arrives through the usual purchase listener. Never a field of ours:
        // a code typed into the app that unlocks or discounts anything is what
        // App Review rejected 1.0.3 (35) for (Guideline 3.1.1). Only where the
        // store has such a sheet (iOS).
        onRedeemCode={
          purchases.canRedeemCode
            ? () => {
                Haptics.selectionAsync();
                track('paywall_code_opened');
                void purchases.redeemCode();
              }
            : undefined
        }
        covered={busy || celebrating != null}
        onExpand={() => track('paywall_plans_expanded')}
        onSkip={skip}>
        {/* Owns the dismissal. The paywall vanishing into Home is what backing out
          looks like too, so the one moment worth marking was the one that read
          as nothing having happened. */}
        <CelebrationSheet
          visible={celebrating != null}
          title={t(celebrating === 'restored' ? 'offer.restoredTitle' : 'offer.purchasedTitle')}
          headline={celebrating === 'restored' ? undefined : t('offer.plans.name')}
          headlineColor={PRIMARY}
          blurb={t(celebrating === 'restored' ? 'offer.restoredBlurb' : 'offer.purchasedBlurb')}
          ctaLabel={t('offer.start')}
          onClose={() => {
            setCelebrating(null);
            if (__DEV__ && onSimulator) grantDevAccess();
            close();
          }}
        />
      </PlansStep>
    );
  }

  return (
    <View style={styles.full}>
      <Animated.View key={step} entering={STEP_IN} exiting={STEP_OUT} style={StyleSheet.absoluteFill}>
        {page}
      </Animated.View>
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
  /** Pinned. Padding rather than margin so the safe-area inset is part of the
   * block's own box. */
  cta: {
    paddingTop: 4,
    gap: 10,
  },
  /** The two steps before the plans: room under the bar. */
  introContent: { paddingTop: 22, paddingBottom: 16 },
  /** Step two: the hero edge to edge, under the bar and the sheet. */
  full: { flex: 1 },
  skyBar: { paddingHorizontal: 22 },
  sheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 10,
    paddingHorizontal: 22,
    gap: 20,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    borderCurve: 'continuous',
  },
  grabber: { alignSelf: 'center', width: 40, height: 5, borderRadius: 2.5, marginBottom: -6 },
});
