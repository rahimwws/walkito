import ChartIncreaseIcon from '@hugeicons/core-free-icons/ChartIncreaseIcon';
import FlashIcon from '@hugeicons/core-free-icons/FlashIcon';
import Route02Icon from '@hugeicons/core-free-icons/Route02Icon';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { AppState, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  FadeInDown,
  FadeOut,
  ReduceMotion,
  interpolateColor,
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { cancelWinback, notificationsAllowed, scheduleWinback } from '@/entities/notifications';
import { useBoost } from '@/entities/offer';
import { LEGAL, PRIMARY, accents, fonts, meterColors, palette, type AccentName } from '@/shared/config';
import { useLanguage, useT, type Key } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Linking } from 'react-native';

import {
  OFFERINGS,
  PRINTED_PRICES as PRINTED,
  PROGRAM_MONTHS,
  PROGRAM_PACKAGE,
  purchases,
  type Offering,
} from '@/entities/purchase';
import { formatPrice } from '@/shared/lib/money';
import { CelebrationSheet } from '@/shared/ui/celebration-sheet';
import { PrimaryButton } from '@/shared/ui/primary-button';

/** Opens a legal document, or does nothing if none has been configured. See
 * `LEGAL` — the links are required for review and are currently blank. */
function openLegal(url: string) {
  if (url.length === 0) {
    console.warn('[offer] No legal URL configured — see src/shared/config/legal.ts');
    return;
  }
  Linking.openURL(url).catch(() => {});
}


/**
 * What the win-back notification promises, as a percentage.
 *
 * Scheduled while the app is going to the background, long before the `offer`
 * offering has been fetched, so it cannot read a live price — it is the one
 * figure on this screen that has to be derived from the printed fallbacks.
 * Kept in step by being computed from them rather than typed.
 */
export const OFFER_PERCENT = Math.round(
  (1 - PRINTED.programOffer / PRINTED.program) * 100,
);

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

/** Long enough that the number lands before the rest arrives under it. */
const STAGGER_MS = 90;

/**
 * The offer, as a sheet over the finished plan.
 *
 * It opens on what the app is for, not on a percentage.
 *
 * There used to be a single figure at display size above the headline, set in
 * the brand colour with a glow behind it. It was computed — the per-week gap
 * between the programme and the monthly plan — which meant it was only ever a
 * headline by accident: the moment the store returned prices that did not
 * happen to favour the programme it clamped to zero, and the screen opened on a
 * hundred-point "0%" over the words "costs 0% less per week". A number that
 * large is a claim, and a claim derived from two prices that can both move is
 * not one this screen can keep making.
 *
 * A full screen, and the only way past it is to buy or to restore. It used to
 * be a form sheet over Home — but a sheet has something behind it, iOS knows
 * that, and every version finds one more way back to what it can see. It is a
 * guarded state of the root stack now, so there is nothing behind it to reach.
 *
 * That change is why the top padding comes from the safe-area inset rather than
 * a constant: 52pt was clearance for a sheet's grabber, and on a full screen it
 * started at the top of the display and ran the headline under the Dynamic
 * Island.
 */
export function OfferPage() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  /** For the one date on this screen. `toLocaleDateString(undefined)` follows
   * the *device*, which is how a Russian sheet ends up saying "До 22 September"
   * on an English phone. */
  const language = useLanguage();

  const { weeks, name } = useLocalSearchParams<{ weeks?: string; name?: string }>();
  /** The plan length from the route, as a number the plural rules can read. A
   * malformed param drops the whole clause rather than rendering "Your
   * NaN-week plan". */
  const weekCount = weeks == null ? Number.NaN : Number(weeks);
  const hasWeeks = Number.isFinite(weekCount) && weekCount > 0;
  /**
   * Which plan is selected. The programme, by default.
   *
   * It is the product that matches what the app is: a twelve-week plan sold as
   * twelve weeks. Defaulting to the subscription would put the recurring charge
   * in front of somebody who came here for a course with an end.
   */
  const [tier, setTier] = useState<'program' | 'monthly'>('program');
  /** True from the tap until the store answers. Locks the button rather than
   * letting a second tap open a second transaction. */
  const [busy, setBusy] = useState(false);
  /**
   * The one line the store gets to say, for both buying and restoring.
   *
   * A single slot because only one of them can be in flight at a time, and two
   * message rows would mean two places to look for the same kind of news.
   */
  const [notice, setNotice] = useState<string | null>(null);

  /**
   * Raised once the store confirms, and the reason the sheet does not close on
   * the spot.
   *
   * Dismissing straight into the app made the one moment worth marking the one
   * moment that looked like nothing happening: the paywall vanished and Home
   * appeared, identical to backing out. The celebration owns the dismissal
   * instead — `close()` runs when it is waved away.
   */
  const [celebrating, setCelebrating] = useState<'purchased' | 'restored' | null>(null);

  /**
   * Which offering to sell, by name.
   *
   * Apple has no notion of "the same product, cheaper" — a discount is a
   * different product — so the cheaper programme is its own offering in the
   * RevenueCat dashboard rather than arithmetic on a price. `offer` is shown
   * only to somebody who dismissed the paywall and came back, or who arrived
   * from the win-back notification. Never on a first view.
   */
  const boosted = useBoost();
  const offeringId = boosted ? OFFERINGS.offer : OFFERINGS.standard;

  /**
   * The offering being sold, and the standard one to strike through against.
   *
   * Both are fetched, because a discount has to be measured against a real
   * price rather than a printed one: comparing a store figure to a constant is
   * how a sheet ends up claiming a saving off a number nobody charges.
   */
  const [offering, setOffering] = useState<Offering | null>(null);
  const [standard, setStandard] = useState<Offering | null>(null);
  /**
   * Whether the store has answered yet.
   *
   * Needed to tell "still loading" from "the dashboard has no such package".
   * Both look like a null plan, and only one of them is a row the user must not
   * be allowed to tap.
   */
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (!purchases.configured) return;
    let live = true;
    void Promise.all([
      purchases.offering(offeringId),
      offeringId === OFFERINGS.standard ? null : purchases.offering(OFFERINGS.standard),
    ]).then(([earned, full]) => {
      if (!live) return;
      // Falls back to the standard offering rather than to printed constants: a
      // dashboard missing `offer` should sell at the ordinary price, not
      // advertise a discount the store will refuse.
      setOffering(earned ?? full);
      setStandard(full ?? earned);
    });
    return () => {
      live = false;
    };
  }, [offeringId]);

  const programPlan = offering?.program ?? null;
  const monthlyPlan = offering?.monthly ?? null;
  const currency = programPlan?.product.currencyCode ?? monthlyPlan?.product.currencyCode;

  const money = (amount: number) => formatPrice(amount, currency);

  /**
   * A row the store answered about and had nothing for.
   *
   * This is not hypothetical and not the user's problem: the offering came back
   * with `$rc_monthly` wired up and no `program` package at all, so the
   * programme row printed its fallback price, looked ordinary, and failed only
   * once somebody selected it and pressed Continue — reporting that the App
   * Store was unreachable, which it plainly was not since the monthly price on
   * the same screen had just come from it.
   *
   * Guarded on `loaded` so a row is never disabled merely because the fetch has
   * not landed.
   */
  const programMissing = loaded && programPlan == null;
  const monthlyMissing = loaded && monthlyPlan == null;

  useEffect(() => {
    if (!loaded) return;
    // Never leave the selection on a row that cannot be bought.
    if (programMissing && tier === 'program') setTier('monthly');
    else if (monthlyMissing && tier === 'monthly') setTier('program');
  }, [loaded, programMissing, monthlyMissing, tier]);

  useEffect(() => {
    if (!__DEV__ || !loaded) return;
    // The diagnosis, at the moment it is knowable. Without it this
    // misconfiguration surfaces as a wrong error message after a tap.
    if (programMissing) {
      console.error(
        `[paywall] Offering "${offering?.identifier ?? offeringId}" has no "${PROGRAM_PACKAGE}" ` +
          'package, so the 12-week programme cannot be sold. Add it in the RevenueCat ' +
          'dashboard (Offerings → Packages) and attach the programme product to it.',
      );
    }
    if (monthlyMissing) {
      console.error(
        `[paywall] Offering "${offering?.identifier ?? offeringId}" has no $rc_monthly package, ` +
          'so the subscription cannot be sold.',
      );
    }
  }, [loaded, programMissing, monthlyMissing, offering, offeringId]);

  /**
   * What each plan costs, from the store, with the printed figures as a
   * fallback for a build that has no store to ask.
   *
   * `display` is the store's own string wherever one exists — it knows where
   * the symbol goes and which separator the locale uses, both of which
   * hand-formatting gets wrong across half of Europe. The per-week figures have
   * to be computed, so those are formatted from the numeric price.
   */
  const programAmount = programPlan?.product.price ?? PRINTED.program;
  const programText = programPlan?.product.display ?? money(PRINTED.program);
  const monthlyAmount = monthlyPlan?.product.price ?? PRINTED.monthly;
  const monthlyText = monthlyPlan?.product.display ?? money(PRINTED.monthly);

  /**
   * The per-week figures, and the reason they are display-only.
   *
   * There is no weekly product. These exist so two plans billed over different
   * periods can be compared at all, and they are computed from the live price
   * every time — a hardcoded "$4.17" survives exactly until somebody changes a
   * price in App Store Connect.
   *
   * Apple's rule, and it is a common rejection: the **billed** amount must be
   * the most prominent price on each row. The per-week figure is secondary, in
   * a smaller face, underneath. Marketing outside the app may lead with per
   * week; the paywall may not.
   */
  const programPerWeek = programAmount / 12;
  const monthlyPerWeek = (monthlyAmount * 12) / 52;

  /**
   * What the programme normally costs, for the struck-through figure and the
   * badge — from the standard offering, never from a constant.
   */
  const fullProgramAmount = standard?.program?.product.price ?? PRINTED.program;
  /**
   * The discount, computed rather than asserted.
   *
   * Against the live standard price, so changing either figure in App Store
   * Connect moves the badge instead of leaving it advertising a percentage
   * nobody is getting.
   */
  const offerPct =
    fullProgramAmount > 0
      ? Math.round((1 - programAmount / fullProgramAmount) * 100)
      : 0;
  const discounted = offerPct > 0;

  /**
   * How much the programme saves against paying monthly for the same time.
   *
   * Twelve weeks is three months, so the honest comparison is one payment of
   * the programme price against three of the monthly one — the same access,
   * bought two ways. That is a real saving on a real span of time, unlike the
   * per-week gap this replaced, which compared a rate to a rate and produced a
   * figure nobody is ever charged.
   *
   * Computed, never asserted. If the monthly price moves in App Store Connect
   * the badge moves with it, and if the programme ever stops being the cheaper
   * of the two this goes to zero and the claim disappears rather than turning
   * into a lie. That matters more than it sounds: the store is currently
   * returning a monthly price that makes this negative.
   */
  const monthsOfMonthly = monthlyAmount * PROGRAM_MONTHS;
  const savingPct =
    monthsOfMonthly > 0
      ? Math.round((1 - programAmount / monthsOfMonthly) * 100)
      : 0;
  /** Only claim a saving when there is one. */
  const saves = savingPct > 0;

  /**
   * The figure at the top, and which comparison it is making.
   *
   * Discounted: the discount itself, against the programme's own full price.
   * That is the whole reason the sheet looks different, and with the monthly
   * row gone there is nothing else on screen for a saving to be measured
   * against.
   *
   * Otherwise: the programme against three months of the subscription, which is
   * the comparison the two rows underneath are making.
   *
   * Null when neither holds, and the number is not drawn at all — a hero figure
   * is a claim, and the version of this that always rendered something is how
   * the screen came to open on "0%".
   */
  const heroPct = discounted ? offerPct : saves ? savingPct : null;

  /**
   * The number across the top, and what it means in each of the two states.
   *
   * Standard: how much cheaper the programme is per week than paying monthly.
   * That is the comparison the two rows underneath are making, so the headline
   * is the same claim at display size rather than a second, unrelated figure.
   *
   * Discounted: the discount itself, which is the larger and more immediate
   * number and the reason the sheet looks different at all.
   *
   * Both computed from live prices. Neither survives a price change in App
   * Store Connect as a stale constant, which is the failure this replaced.
   */
  /**
   * When the programme they already hold runs out, or null if they hold none.
   *
   * Somebody with an active pass must not be offered it again — a buy button on
   * a product you already own is how a person pays twice for twelve weeks. The
   * row shows what they have instead.
   */
  const ownedUntil = purchases.programEndsAt();
  const ownsProgram = ownedUntil != null && ownedUntil.getTime() > Date.now();

  useEffect(() => {
    // The selection cannot rest on a plan that is not for sale. Without this,
    // Continue would be armed against a row the user already owns and the buy
    // would fail against a null plan.
    if (ownsProgram) setTier('monthly');
  }, [ownsProgram]);

  /**
   * The discount is on the one-time purchase, and only on it.
   *
   * So the subscription comes off the sheet entirely while it is running.
   * Leaving it up would put a full-price monthly row beside a discounted
   * programme and ask somebody to work out that the saving applies to one of
   * them — and the row underneath would quietly be the better-looking monthly
   * figure, which is the opposite of what a win-back offer is for.
   *
   * Never both hidden: `ownsProgram` takes the programme row away and this
   * takes the monthly one, and the two cannot hold at once — somebody with an
   * active pass is entitled, and an entitled user never reaches this screen.
   */
  const monthlyOffered = !boosted;

  useEffect(() => {
    // The only row left is the programme, so that is what Continue must buy.
    if (boosted) setTier('program');
  }, [boosted]);

  // The haptic that used to accompany the number surging brighter. The number
  // is gone — see the note on the hero below — but arriving on the better offer
  // is still worth marking, and a tap is the part that survived losing the
  // visual it was scored to.
  useEffect(() => {
    if (!discounted) return;
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  }, [discounted]);

  /**
   * The win-back.
   *
   * Scheduled the moment the app is backgrounded with this sheet open, and
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
        sent.current = true;
        void notificationsAllowed().then((allowed) => {
          // The figure the notification promises is the one the offer
          // actually gives. It used to be a module constant derived from the
          // annual discount that no longer exists.
          if (allowed) void scheduleWinback(OFFER_PERCENT, name);
        });
      } else if (next === 'active') {
        void cancelWinback();
      }
    });
    return () => subscription.remove();
  }, [boosted, name]);

  /**
   * Paid, or as good as: close, and Home is already there.
   *
   * This is the whole reason the offer now opens over Home instead of over the
   * end of the flow. Onboarding finished two seconds before this sheet even
   * appeared, so there is no guard to flip, no stack being replaced underneath,
   * and nothing to race — dismissing is just dismissing.
   */
  const close = () => {
    if (router.canGoBack()) router.back();
  };

  /**
   * Buy, or — with no store wired up — do what this sheet has always done.
   *
   * `unavailable` is not an error and must not read as one. Nothing was
   * charged, nothing was refused, and there is no store to blame; telling the
   * user "that didn't go through" would describe a transaction that was never
   * attempted. So the sheet closes, exactly as before, and the failure copy is
   * reserved for a store that actually said no.
   */
  const start = async () => {
    if (busy) return;
    setNotice(null);
    setBusy(true);
    // The plan object, not a product identifier. It came out of the same fetch
    // that produced the price on screen, so the two cannot be for different
    // things — which is the failure this replaced.
    const plan = tier === 'program' ? programPlan : monthlyPlan;
    if (plan == null) {
      setBusy(false);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
      // Two different faults, and they were sharing one sentence. A store that
      // never answered is unreachable; a store that answered without this
      // package is misconfigured, and telling somebody to try again in a moment
      // sends them to retry something that will never succeed.
      setNotice(t(loaded ? 'offer.planUnavailable' : 'offer.storeUnreachable'));
      return;
    }
    const result = await purchases.buy(plan);
    setBusy(false);

    if (result.status === 'purchased') {
      // No haptic here: the sheet fires its own as it lands, and two success
      // buzzes a frame apart read as a stutter rather than as emphasis.
      setCelebrating('purchased');
      return;
    }
    // The user backed out of Apple's own sheet. They know what they did; a
    // message here would be the app commenting on their decision.
    if (result.status === 'cancelled') return;
    if (result.status === 'failed') {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      setNotice(result.message);
      return;
    }
    /**
     * `unavailable`: no store was reached at all.
     *
     * This used to fire a *success* haptic and close the sheet — the app
     * congratulating someone on a purchase that never happened, and unlocking
     * on the way out. It only showed up where a store is genuinely absent, so
     * it read as correct on a simulator, and would have shipped the moment a
     * production build lost its RevenueCat key.
     *
     * The sheet now stays open and says so. Not an error, because nothing
     * failed and nobody was charged; not a success either.
     */
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
      // The same sheet, different words. Getting a subscription back is not a
      // purchase and should not be congratulated as one — but it is the same
      // good news, and sending it to the one-line notice slot while a purchase
      // gets a badge would rank the two wrongly.
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

  return (
    <View
      style={[
        styles.sheet,
        {
          backgroundColor: colors.background,
          // The top inset, measured rather than assumed. This was a fixed 52pt,
          // which was right when the screen was a form sheet — the sheet's own
          // top edge sat below the status bar and 52 was clearance for the
          // grabber. As the gate it is a full screen, so 52pt starts at the top
          // of the display and the headline ran under the Dynamic Island.
          paddingTop: insets.top + 16,
        },
      ]}>
      {/* The body scrolls and the button does not.
          This was one flex column with `marginTop: 'auto'` on the terms block,
          which puts the button on the bottom edge only while everything fits.
          On a shorter phone — or with the larger text sizes the billing rows
          now use — the column overflowed and Continue was pushed off the
          screen entirely. On a gate with no way back that is not a layout
          nitpick: there was no way to buy and no way out. */}
      <ScrollView
        style={styles.body}
        contentContainerStyle={styles.bodyContent}
        showsVerticalScrollIndicator={false}>
      {/* Only once the better price is in. A badge that was always there would
          make the standard price look like the discounted one. */}
      {boosted && (
        <Animated.View
          entering={FadeIn.duration(420).reduceMotion(ReduceMotion.System)}
          style={styles.limited}>
          <Text style={styles.limitedText}>{t('offer.limited')}</Text>
        </Animated.View>
      )}

      {/* The saving, at display size.
          Shown only when the prices support it — see `savingPct`. A hero number
          is a claim, and the last one was computed from a per-week gap that went
          to zero the moment the store returned real prices, leaving the screen
          opening on "0%". This one is the same three months bought two ways, so
          it is a figure the user could check on the two rows below. */}
      {heroPct != null && (
        <View style={styles.numberRow}>
          <Text style={styles.number}>{heroPct}</Text>
          <Text style={styles.percent}>%</Text>
        </View>
      )}

      <Animated.Text
        entering={FadeIn.delay(STAGGER_MS).duration(320).reduceMotion(ReduceMotion.System)}
        style={[styles.headline, { color: colors.foreground }]}>
        {boosted
          ? t('offer.headlineComeback')
          : saves
            ? t('offer.headlineSave', { count: PROGRAM_MONTHS, percent: savingPct })
            : t('offer.headlinePlain', { count: PROGRAM_MONTHS })}
      </Animated.Text>
      <Animated.Text
        entering={FadeIn.delay(STAGGER_MS * 2).duration(320).reduceMotion(ReduceMotion.System)}
        style={[styles.sub, { color: meter.caption }]}>
        {hasWeeks ? t('offer.subWeeks', { count: weekCount }) : t('offer.sub')}
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

      <Animated.View
        entering={FadeInDown.delay(STAGGER_MS * 6)
          .duration(360)
          .reduceMotion(ReduceMotion.System)}
        style={styles.tiers}>
        {/* The programme first, and selected. It is the product that matches
            what the app is — a twelve-week plan sold as twelve weeks — and
            putting the recurring charge first would offer a subscription to
            somebody who came for a course with an end.

            `price` is the billed amount and `note` the per-week figure, in
            that order of prominence. Apple rejects paywalls where a computed
            per-week price is shown larger than the amount actually charged;
            outside the app the marketing may lead with per week, here it may
            not. */}
        <TierRow
          title={t('offer.programTitle')}
          badge={
            ownsProgram
              ? undefined
              : discounted
                ? t('offer.badgeOff', { percent: offerPct })
                : // Only when the arithmetic supports it. "BEST VALUE" is a
                  // claim too, so it also waits for the programme to actually
                  // be the cheaper of the two.
                  saves
                  ? t('offer.badgeSave', { percent: savingPct })
                  : undefined
          }
          // What they already have, rather than what it would cost. A price on
          // a product somebody owns is an invitation to buy it twice.
          price={ownsProgram ? t('offer.programActive') : t('offer.programPrice', { price: programText })}
          note={
            ownsProgram
              ? t('offer.programActiveUntil', {
                  // The app's language, not the device's — see `language`.
                  date: ownedUntil.toLocaleDateString(language, {
                    day: 'numeric',
                    month: 'long',
                  }),
                })
              : t('offer.programNote', {
                  count: PROGRAM_MONTHS,
                  perWeek: money(programPerWeek),
                })
          }
          disabled={ownsProgram}
          was={
            // Only when there is something to strike through. A crossed-out
            // price identical to the one beside it is theatre.
            discounted && !ownsProgram ? money(fullProgramAmount) : undefined
          }
          selected={tier === 'program' && !ownsProgram}
          onPress={() => {
            Haptics.selectionAsync();
            setTier('program');
          }}
        />
        {monthlyOffered && (
          <TierRow
            title={t('offer.monthlyTitle')}
            price={t('offer.monthlyPrice', { price: monthlyText })}
            note={t('offer.monthlyNote', { perWeek: money(monthlyPerWeek) })}
            selected={tier === 'monthly'}
            onPress={() => {
              Haptics.selectionAsync();
              setTier('monthly');
            }}
          />
        )}
      </Animated.View>

      {/* The renewal terms Apple requires on an auto-renewable subscription.
          See the block itself for why both products are disclosed. */}
      <Animated.View
        entering={FadeInDown.delay(STAGGER_MS * 7)
          .duration(360)
          .reduceMotion(ReduceMotion.System)}
        style={styles.termsBlock}>
        {/* Whatever the store just said, in the one slot both buying and
            restoring write to. */}
        {notice != null && (
          <Text style={[styles.terms, { color: meter.caption }]}>{notice}</Text>
        )}
        {/* Both products, because both are on the screen and they bill in
            opposite ways. The programme line has to say it will not charge
            again — that is the whole distinction a user is being asked to
            understand — and the monthly line carries the renewal disclosure
            Apple requires. Prices read from the packages above, so a
            discounted sheet discloses the discounted figure and the two cannot
            drift; a disclosure quoting a price the user is not being offered
            is worse than none.

            No trial line on either: Apple does not allow one on a non-renewing
            product, and nothing here configures one on the subscription. */}
        <Text style={[styles.terms, { color: meter.caption }]}>
          {t('offer.termsProgram', { price: programText })}
        </Text>
        {/* Only while it is on sale. Apple wants the renewal terms for what the
            screen is offering; disclosing a subscription that is not on it
            would describe a charge the user cannot make from here. */}
        {monthlyOffered && (
          <Text style={[styles.terms, { color: meter.caption }]}>
            {t('offer.termsMonthly', { price: monthlyText })}
          </Text>
        )}
        <View style={styles.legalRow}>
          <Text
            accessibilityRole="link"
            onPress={() => openLegal(LEGAL.terms)}
            style={[styles.terms, { color: meter.caption }]}>
            {t('offer.linkTerms')}
          </Text>
          <Text style={[styles.terms, { color: meter.unit }]}>{'  ·  '}</Text>
          <Text
            accessibilityRole="link"
            onPress={() => openLegal(LEGAL.privacy)}
            style={[styles.terms, { color: meter.caption }]}>
            {t('offer.linkPrivacy')}
          </Text>
          <Text style={[styles.terms, { color: meter.unit }]}>{'  ·  '}</Text>
          <Text
            accessibilityRole="button"
            onPress={restore}
            style={[styles.terms, { color: meter.caption }]}>
            {t('offer.restore')}
          </Text>
        </View>
      </Animated.View>
      </ScrollView>

      {/* Outside the scroll, so the one action this screen exists for is always
          on screen. */}
      <View style={[styles.cta, { paddingBottom: Math.max(insets.bottom, 20) + 8 }]}>
        <PrimaryButton
          label={busy ? t('offer.processing') : t('offer.continue')}
          disabled={busy}
          onPress={start}
        />
      </View>

      {/* Owns the dismissal. The paywall vanishing into Home is what backing out
          looks like too, so the one moment worth marking was the one that read
          as nothing having happened. */}
      <CelebrationSheet
        visible={celebrating != null}
        title={t(celebrating === 'restored' ? 'offer.restoredTitle' : 'offer.purchasedTitle')}
        headline={celebrating === 'restored' ? undefined : t('offer.premium')}
        headlineColor={PRIMARY}
        blurb={t(
          celebrating === 'restored' ? 'offer.restoredBlurb' : 'offer.purchasedBlurb',
        )}
        ctaLabel={t('offer.start')}
        onClose={() => {
          setCelebrating(null);
          close();
        }}
      />
    </View>
  );
}

function TierRow({
  title,
  badge,
  note,
  price,
  was,
  disabled = false,
  selected,
  onPress,
}: {
  title: string;
  /** "BEST VALUE", or the discount on a returning visit. */
  badge?: string;
  /**
   * The per-week figure, and deliberately the *secondary* line.
   *
   * Apple rejects paywalls where a computed per-week price is more prominent
   * than the amount actually charged — it is one of the commoner rejections for
   * per-week marketing. `price` leads, this follows, and the sizes below are
   * what enforce it.
   */
  note?: string;
  /** The billed amount. The most prominent price on the row, always. */
  price: string;
  /** The price this one replaced, struck through beside it. Present only on a
   * discounted row: a permanent "was" next to a permanent price is the oldest
   * trick in the shop window, and it is a lie the rest of this flow has not
   * earned. */
  was?: string;
  /** Already owned. The row still shows what they have, but cannot be picked —
   * selecting it would arm a Continue button with nothing to buy. */
  disabled?: boolean;
  selected: boolean;
  onPress: () => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];

  const chosen = useDerivedValue(
    () =>
      withTiming(selected ? 1 : 0, {
        duration: 180,
        easing: Easing.out(Easing.cubic),
        reduceMotion: ReduceMotion.System,
      }),
    [selected],
  );

  // The selected row fills; the other is a bare row on the sheet. Two filled
  // cards with a tick between them would make the cheaper one look disabled.
  const rowStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(chosen.value, [0, 1], ['transparent', colors.card]),
  }));

  return (
    <Animated.View style={[styles.tier, rowStyle]}>
      <Pressable
        accessibilityRole="radio"
        accessibilityState={{ selected, disabled }}
        disabled={disabled}
        onPress={onPress}
        style={styles.tierPress}>
        <View style={styles.tierHead}>
          <Text style={[styles.tierTitle, { color: colors.foreground }]}>{title}</Text>
          {badge != null && (
            <View style={[styles.tierBadge, { backgroundColor: meter.track }]}>
              <Text style={[styles.tierBadgeText, { color: PRIMARY }]}>{badge}</Text>
            </View>
          )}
        </View>

        {/* The billed amount, and the struck-through one beside it. Keyed on
            the figure so a changing price crossfades in place rather than
            silently swapping while the eye is elsewhere. */}
        <View style={styles.tierPriceRow}>
          <Animated.Text
            key={price}
            entering={FadeIn.duration(320).reduceMotion(ReduceMotion.System)}
            style={[styles.tierPrice, { color: colors.foreground }]}>
            {price}
          </Animated.Text>
          {was != null && (
            <Animated.Text
              entering={FadeIn.duration(320).reduceMotion(ReduceMotion.System)}
              exiting={FadeOut.duration(160).reduceMotion(ReduceMotion.System)}
              style={[styles.tierWas, { color: meter.unit }]}>
              {was}
            </Animated.Text>
          )}
        </View>

        {note != null && (
          <Text style={[styles.tierNote, { color: meter.caption }]}>{note}</Text>
        )}
      </Pressable>
    </Animated.View>
  );
}


const styles = StyleSheet.create({
  sheet: {
    flex: 1,
    // `paddingTop` comes from the safe-area inset at the call site — see the
    // note there.
    paddingHorizontal: 22,
    gap: 16,
  },
  /** The scrolling half. `flex: 1` so it yields to the pinned button below
   * rather than pushing it off the screen, which is what the old single-column
   * layout did on any device the content did not happen to fit. */
  body: { flex: 1 },
  /** The saving, at display size. No glow and no arrival animation this time:
   * the previous version carried a bloom built from two gradient layers and a
   * spring, all of it in service of a number that turned out to be wrong. The
   * figure is the point. */
  numberRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  number: {
    fontSize: 108,
    lineHeight: 112,
    fontFamily: fonts.heavy,
    letterSpacing: -4,
    color: PRIMARY,
  },
  percent: {
    marginTop: 14,
    fontSize: 48,
    fontFamily: fonts.heavy,
    letterSpacing: -1,
    color: PRIMARY,
  },
  bodyContent: { gap: 16, paddingBottom: 16 },
  /** Pinned. Padding rather than margin so the safe-area inset is part of the
   * tappable block's own box. */
  cta: {
    paddingTop: 4,
  },
  /** Same size and weight as `tierNote`, which is the billing line it follows.
   * Pushed to the bottom with the button so it reads as part of the commit,
   * not as another feature row. */
  termsBlock: {
    paddingTop: 18,
    gap: 6,
  },
  legalRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  terms: {
    fontSize: 13,
    lineHeight: 17,
    fontFamily: fonts.regular,
    textAlign: 'center',
  },
  limited: {
    alignSelf: 'center',
    marginTop: -4,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    borderCurve: 'continuous',
    backgroundColor: PRIMARY,
  },
  limitedText: {
    fontSize: 11,
    fontFamily: fonts.bold,
    letterSpacing: 0.9,
    color: '#FFFFFF',
  },
  // The padding/negative-margin pair is not decoration: iOS clips a text
  // shadow to the text's own frame, so a radius wide enough to read as light
  // gets sliced off square at the glyph box. The padding gives the shadow room
  // to fade out inside the frame; the matching negative margin takes that room
  // back out of the layout, so the number sits exactly where it would have.
  headline: {
    fontSize: 22,
    lineHeight: 28,
    fontFamily: fonts.bold,
    letterSpacing: -0.4,
    textAlign: 'center',
  },
  sub: {
    marginTop: -6,
    fontSize: 16,
    lineHeight: 22,
    fontFamily: fonts.regular,
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
  featureTitle: {
    fontSize: 16,
    fontFamily: fonts.semibold,
  },
  featureBlurb: {
    fontSize: 15,
    lineHeight: 20,
    fontFamily: fonts.regular,
  },
  tiers: {
    marginTop: 4,
  },
  tier: {
    borderRadius: 18,
    borderCurve: 'continuous',
  },
  tierPress: {
    // A column now, not a row. The billed price has to sit under the title at
    // display size, and a price pinned to the right edge cannot be larger than
    // the title without unbalancing the row.
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 2,
  },
  tierHead: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  tierTitle: {
    flex: 1,
    fontSize: 17,
    fontFamily: fonts.bold,
    letterSpacing: -0.3,
  },
  tierBadge: {
    borderRadius: 8,
    borderCurve: 'continuous',
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  tierBadgeText: {
    fontSize: 11,
    fontFamily: fonts.heavy,
    letterSpacing: 0.4,
  },
  tierPriceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 8,
    marginTop: 4,
  },
  /**
   * The billed amount, and the largest price on the row by a clear margin.
   *
   * 22 against the per-week line's 13. Apple rejects paywalls where a computed
   * per-week figure is more prominent than the amount actually charged, and the
   * gap between these two numbers is the only thing enforcing that — so it is
   * deliberately wide rather than a point or two.
   */
  tierPrice: {
    fontSize: 22,
    fontFamily: fonts.heavy,
    letterSpacing: -0.6,
  },
  tierWas: {
    fontSize: 15,
    fontFamily: fonts.medium,
    textDecorationLine: 'line-through',
  },
  /** The per-week figure. Secondary, and sized to stay that way. */
  tierNote: {
    fontSize: 13,
    fontFamily: fonts.medium,
  },
});
