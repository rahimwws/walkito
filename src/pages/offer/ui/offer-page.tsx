import ChartIncreaseIcon from '@hugeicons/core-free-icons/ChartIncreaseIcon';
import FlashIcon from '@hugeicons/core-free-icons/FlashIcon';
import Route02Icon from '@hugeicons/core-free-icons/Route02Icon';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { AppState, Pressable, StyleSheet, Text, View } from 'react-native';
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
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { cancelWinback, notificationsAllowed, scheduleWinback } from '@/entities/notifications';
import { useBoost } from '@/entities/offer';
import { LEGAL, PRIMARY, accents, fonts, meterColors, palette, type AccentName } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';
import { Linking } from 'react-native';

import {
  OFFERINGS,
  PRINTED_PRICES as PRINTED,
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

const FEATURES: {
  icon: IconSvgElement;
  accent: AccentName;
  title: string;
  blurb: string;
}[] = [
    {
      icon: Route02Icon,
      accent: 'violet',
      title: 'Your plan, not a template',
      blurb: 'Built from the answers you just gave, and rebuilt as they change.',
    },
    {
      icon: FlashIcon,
      accent: 'orange',
      title: 'Adaptive sessions',
      blurb: 'Every workout adjusts to how the last one actually went.',
    },
    {
      icon: ChartIncreaseIcon,
      accent: 'teal',
      title: 'Progress you can see',
      blurb: 'Watch your readiness climb week by week.',
    },
  ];

/** Long enough that the number lands before the rest arrives under it. */
const STAGGER_MS = 90;

/**
 * The offer, as a sheet over the finished plan.
 *
 * It opens on the saving rather than on the price. The number is the one thing
 * on this sheet that has to be read from across the room, so it is set at
 * display size with the brand colour bloomed behind it — the glow is not
 * decoration, it is what stops a large flat number reading as a headline in a
 * document.
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

  const { weeks, name } = useLocalSearchParams<{ weeks?: string; name?: string }>();
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

  const headlinePct = discounted
    ? offerPct
    : monthlyPerWeek > 0
      ? Math.max(0, Math.round((1 - programPerWeek / monthlyPerWeek) * 100))
      : 0;


  /** Springs in from slightly small. A number this size fading in reads as a
   * page loading; one that arrives with weight reads as a figure being put on
   * the table. */
  const bloom = useDerivedValue(() =>
    withDelay(60, withSpring(1, { damping: 14, stiffness: 140, mass: 0.8 })),
  );

  /**
   * A second, brighter bloom on the discounted view.
   *
   * What this replaced was a number climbing from 48 to 70 as the win-back
   * landed — an animation built around the old annual discount, whose
   * arithmetic no longer exists. The offer is a different product now, not a
   * percentage off the same one, so there is nothing to count up from: the
   * cheaper price is simply the price. The extra light stays, because arriving
   * on a better offer should still look like arriving on one.
   */
  const surge = useSharedValue(0);

  useEffect(() => {
    if (!discounted) return;
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    surge.value = withSequence(
      withTiming(1, { duration: 760, easing: Easing.out(Easing.quad), reduceMotion: ReduceMotion.System }),
      withTiming(0.35, { duration: 520, easing: Easing.inOut(Easing.quad), reduceMotion: ReduceMotion.System }),
    );
  }, [discounted, surge]);

  const numberStyle = useAnimatedStyle(() => ({
    opacity: Math.min(bloom.value * 1.6, 1),
    transform: [{ scale: 0.72 + bloom.value * 0.28 + surge.value * 0.06 }],
  }));
  /** The extra light behind a boosted number, layered over the resting bloom
   * rather than replacing it, so the two add up at the peak. */
  const surgeStyle = useAnimatedStyle(() => ({ opacity: surge.value }));

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
      // No plan means no store reached this sheet. Saying a charge failed would
      // describe a transaction never attempted.
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
      setNotice('The App Store isn’t reachable right now. Try again in a moment.');
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
    setNotice('The App Store isn’t reachable right now. Try again in a moment.');
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
      setNotice('No previous purchase found on this Apple ID.');
      return;
    }
    if (result.status === 'failed') {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      setNotice('That didn’t go through. No charge was made.');
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
          paddingBottom: Math.max(insets.bottom, 20) + 8,
        },
      ]}>
      <Animated.View style={[styles.numberWrap, numberStyle]}>
        {/* The bloom is its own view rather than a shadow on the glyphs. A
            text shadow wide enough to read as light gets clipped to the text's
            own frame on iOS, which drew a hard-edged rectangle around the
            number — the one thing a glow must never have. The glyphs keep a
            small shadow, tight enough to stay inside that frame. */}
        <View style={styles.bloom} />
        <Animated.View style={[styles.bloom, styles.surge, surgeStyle]} />
        <View style={styles.numberRow}>
          <Text style={styles.number}>{headlinePct}</Text>
          <Text style={styles.percent}>%</Text>
        </View>
      </Animated.View>

      {/* Only once the better price is in. A badge that was always there would
          make the standard price look like the discounted one. */}
      {boosted && (
        <Animated.View
          entering={FadeIn.duration(420).reduceMotion(ReduceMotion.System)}
          style={styles.limited}>
          <Text style={styles.limitedText}>LIMITED — ONE TIME ONLY</Text>
        </Animated.View>
      )}

      <Animated.Text
        entering={FadeIn.delay(STAGGER_MS).duration(320).reduceMotion(ReduceMotion.System)}
        style={[styles.headline, { color: colors.foreground }]}>
        {boosted ? 'Your comeback price on the full year' : 'Get 12 months for the price of 6'}
      </Animated.Text>
      <Animated.Text
        entering={FadeIn.delay(STAGGER_MS * 2).duration(320).reduceMotion(ReduceMotion.System)}
        style={[styles.sub, { color: meter.caption }]}>
        {weeks != null ? `Your ${weeks}-week plan, and everything around it.` : 'Your plan, and everything around it.'}
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
                  {feature.title}
                </Text>
                <Text style={[styles.featureBlurb, { color: meter.caption }]}>{feature.blurb}</Text>
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
          title="12-Week Program"
          badge={ownsProgram ? undefined : discounted ? `${offerPct}% OFF` : 'BEST VALUE'}
          // What they already have, rather than what it would cost. A price on
          // a product somebody owns is an invitation to buy it twice.
          price={ownsProgram ? 'Active' : `${programText} one-time`}
          note={
            ownsProgram
              ? `Until ${ownedUntil.toLocaleDateString(undefined, {
                  day: 'numeric',
                  month: 'long',
                })}`
              : `${money(programPerWeek)}/week · No subscription`
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
        <TierRow
          title="Monthly"
          price={`${monthlyText}/month`}
          note={`${money(monthlyPerWeek)}/week · Cancel anytime`}
          selected={tier === 'monthly'}
          onPress={() => {
            Haptics.selectionAsync();
            setTier('monthly');
          }}
        />
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
          {`12-Week Program: one-time payment of ${programText} for 12 weeks of access. Does not renew and will not charge you again.`}
        </Text>
        <Text style={[styles.terms, { color: meter.caption }]}>
          {`Monthly: ${monthlyText} per month. Renews automatically unless cancelled at least 24 hours before the end of the current period. Manage or cancel in your App Store account settings.`}
        </Text>
        <View style={styles.legalRow}>
          <Text
            accessibilityRole="link"
            onPress={() => openLegal(LEGAL.terms)}
            style={[styles.terms, { color: meter.caption }]}>
            Terms
          </Text>
          <Text style={[styles.terms, { color: meter.unit }]}>{'  ·  '}</Text>
          <Text
            accessibilityRole="link"
            onPress={() => openLegal(LEGAL.privacy)}
            style={[styles.terms, { color: meter.caption }]}>
            Privacy
          </Text>
          <Text style={[styles.terms, { color: meter.unit }]}>{'  ·  '}</Text>
          <Text
            accessibilityRole="button"
            onPress={restore}
            style={[styles.terms, { color: meter.caption }]}>
            Restore Purchases
          </Text>
        </View>
      </Animated.View>

      <Animated.View
        style={styles.cta}
        entering={FadeInDown.delay(STAGGER_MS * 7)
          .duration(360)
          .reduceMotion(ReduceMotion.System)}>
        <PrimaryButton label={busy ? 'Processing…' : 'Continue'} disabled={busy} onPress={start} />
      </Animated.View>

      {/* Owns the dismissal. The paywall vanishing into Home is what backing out
          looks like too, so the one moment worth marking was the one that read
          as nothing having happened. */}
      <CelebrationSheet
        visible={celebrating != null}
        title={celebrating === 'restored' ? 'Welcome back.' : 'You’re in.'}
        headline={celebrating === 'restored' ? undefined : 'Walkito Premium'}
        headlineColor={PRIMARY}
        blurb={
          celebrating === 'restored'
            ? 'Your subscription is active again. Everything is where you left it.'
            : 'Your plan is unlocked, and it starts adapting from your next session.'
        }
        ctaLabel="Start"
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
  /** Takes up the slack in a sheet that is now taller than its contents, so
   * the button rides the bottom edge instead of floating mid-screen. */
  cta: {
    marginTop: 0,
  },
  /** Same size and weight as `tierNote`, which is the billing line it follows.
   * Pushed to the bottom with the button so it reads as part of the commit,
   * not as another feature row. */
  termsBlock: {
    marginTop: 'auto',
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
  numberWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Both numbers here matter. The box is far larger than the light it holds,
  // and the gradient reaches full transparency at 70% of a radius that is
  // itself half the box, so the fade finishes well inside the edges. Sized any
  // tighter, the gradient is still faintly lit where the view stops and the
  // glow shows its own rectangle — the one thing a glow must not do.
  bloom: {

  },
  // Layered over the resting bloom rather than replacing it, so at the peak of
  // the climb the two add up and the number visibly gains light.
  surge: {
    experimental_backgroundImage:
      'radial-gradient(50% 50% at 50% 50%, rgba(139,92,246,0.55) 0%, rgba(139,92,246,0.20) 40%, rgba(139,92,246,0) 70%)',
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
  numberRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  // The padding/negative-margin pair is not decoration: iOS clips a text
  // shadow to the text's own frame, so a radius wide enough to read as light
  // gets sliced off square at the glyph box. The padding gives the shadow room
  // to fade out inside the frame; the matching negative margin takes that room
  // back out of the layout, so the number sits exactly where it would have.
  number: {
    fontSize: 132,
    lineHeight: 124,
    fontFamily: fonts.heavy,
    letterSpacing: -5,
    color: PRIMARY,
    paddingHorizontal: 34,
    paddingVertical: 30,
    marginHorizontal: -34,
    marginVertical: -30,
    textShadowColor: 'rgba(139,92,246,0.62)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 22,
  },
  percent: {
    // The optical offset, less the padding that already sits above the glyph —
    // otherwise the shadow's breathing room doubles as a margin and the sign
    // slides down past the middle of the number.
    marginTop: 10,
    fontSize: 60,
    fontFamily: fonts.heavy,
    letterSpacing: -1.2,
    color: PRIMARY,
    paddingHorizontal: 24,
    paddingVertical: 24,
    marginHorizontal: -24,
    marginBottom: -24,
    textShadowColor: 'rgba(139,92,246,0.55)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 18,
  },
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
