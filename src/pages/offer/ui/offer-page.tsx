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

import { PRODUCTS, purchases } from '@/entities/purchase';
import { formatPrice } from '@/shared/lib/money';
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

const MONTHLY = 12.99;
/** Twelve months at the monthly rate — what every saving here is measured
 * against, and the only number that makes the percentages honest. */
const FULL_YEAR = MONTHLY * 12;

/**
 * The two prices this sheet can show.
 *
 * The boosted one is not a different product, it is the same year at the price
 * the win-back notification promised. Both percentages are computed from the
 * prices rather than typed in, so the headline can never drift from what the
 * rows underneath it charge.
 */
const TIERS = {
  standard: { yearly: 80.99 },
  boosted: { yearly: 46.99 },
} as const;

const saving = (yearly: number) => Math.round((1 - yearly / FULL_YEAR) * 100);
export const STANDARD_SAVING = saving(TIERS.standard.yearly);
export const BOOSTED_SAVING = saving(TIERS.boosted.yearly);

/** How long the headline takes to climb to the better number. Slow enough to
 * be watched, short enough that it is not a loading bar. */
const BOOST_MS = 1100;

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
 * Presented as a native form sheet, so the page behind stays visible and the
 * grabber and swipe-down are the system's. Nothing here traps the user: this
 * is the last screen of onboarding, and it can be dismissed.
 */
export function OfferPage() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];

  const { weeks, name } = useLocalSearchParams<{ weeks?: string; name?: string }>();
  const [tier, setTier] = useState<'yearly' | 'monthly'>('yearly');
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
   * What the store charges, once there is a store.
   *
   * Until then the sheet formats its own constants in the placeholder
   * currency — the figures are hard-coded either way, and formatting them
   * properly at least means the symbol follows the device rather than being
   * the letter `$` typed into four template strings.
   */
  const [currency, setCurrency] = useState<string | undefined>(undefined);
  useEffect(() => {
    if (!purchases.configured) return;
    let live = true;
    purchases.products().then((list) => {
      if (live) setCurrency(list.find((p) => p.id === PRODUCTS.yearly)?.currencyCode);
    });
    return () => {
      live = false;
    };
  }, []);
  const money = (amount: number) => formatPrice(amount, currency);

  /** Flipped by tapping the win-back notification. The sheet is usually still
   * mounted when it happens, so this arrives as a change to a live screen
   * rather than as a different screen being opened. */
  const boosted = useBoost();
  const yearly = boosted ? TIERS.boosted.yearly : TIERS.standard.yearly;

  /** Springs in from slightly small. A number this size fading in reads as a
   * page loading; one that arrives with weight reads as a figure being put on
   * the table. */
  const bloom = useDerivedValue(() =>
    withDelay(60, withSpring(1, { damping: 14, stiffness: 140, mass: 0.8 })),
  );

  /** The headline number itself, so it can climb rather than cut. Counting 48
   * up to 70 is the entire point of the win-back: the user watches the offer
   * improve instead of being told it did. */
  const savingValue = useSharedValue(STANDARD_SAVING);
  /** A second, brighter bloom that swells as the number climbs and settles
   * back — the visual equivalent of the number landing harder than it left. */
  const surge = useSharedValue(0);
  const [shownSaving, setShownSaving] = useState(STANDARD_SAVING);

  useAnimatedReaction(
    () => Math.round(savingValue.value),
    (next, previous) => {
      if (next !== previous) runOnJS(setShownSaving)(next);
    },
  );

  useEffect(() => {
    if (!boosted) return;
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    savingValue.value = withTiming(BOOSTED_SAVING, {
      duration: BOOST_MS,
      // Fast out of the gate and easing into the new figure, so the climb has
      // somewhere to arrive rather than stopping dead on the last digit.
      easing: Easing.out(Easing.cubic),
      reduceMotion: ReduceMotion.System,
    });
    surge.value = withSequence(
      withTiming(1, { duration: BOOST_MS * 0.7, easing: Easing.out(Easing.quad), reduceMotion: ReduceMotion.System }),
      withTiming(0.35, { duration: 520, easing: Easing.inOut(Easing.quad), reduceMotion: ReduceMotion.System }),
    );
  }, [boosted, savingValue, surge]);

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
          if (allowed) void scheduleWinback(BOOSTED_SAVING, name);
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
    const result = await purchases.buy(
      tier === 'yearly' ? PRODUCTS.yearly : PRODUCTS.monthly,
    );
    setBusy(false);

    if (result.status === 'purchased') {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      close();
      return;
    }
    // The user backed out of Apple's own sheet. They know what they did; a
    // message here would be the app commenting on their decision.
    if (result.status === 'cancelled') return;
    if (result.status === 'failed') {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      setNotice('That didn’t go through. No charge was made.');
      return;
    }
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    close();
  };

  const restore = async () => {
    if (busy) return;
    setNotice(null);
    setBusy(true);
    const result = await purchases.restore();
    setBusy(false);

    if (result.status === 'restored') {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      setNotice('Your subscription is back.');
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
        { backgroundColor: colors.background, paddingBottom: Math.max(insets.bottom, 20) + 8 },
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
          <Text style={styles.number}>{shownSaving}</Text>
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
        <TierRow
          title="Yearly"
          note={`Billed yearly at ${money(yearly)}`}
          price={`${money(yearly / 12)}/mo`}
          was={boosted ? money(TIERS.standard.yearly / 12) : undefined}
          selected={tier === 'yearly'}
          onPress={() => {
            Haptics.selectionAsync();
            setTier('yearly');
          }}
        />
        <TierRow
          title="Monthly"
          price={`${money(MONTHLY)}/mo`}
          selected={tier === 'monthly'}
          onPress={() => {
            Haptics.selectionAsync();
            setTier('monthly');
          }}
        />
      </Animated.View>

      {/* The renewal terms Apple requires on an auto-renewable subscription.
          The price is read from the same `yearly` the rows above charge, so a
          boosted sheet discloses the boosted figure and the two can never drift
          apart — a disclosure quoting a price the user is not being offered is
          worse than none.

          No trial line: nothing in this app configures one, and stating a free
          week that does not exist is the specific thing the review guidelines
          are looking for.

          Set in `tierNote`, the size already used for the billing line
          directly above it. */}
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
        <Text style={[styles.terms, { color: meter.caption }]}>
          {`Auto-renews at ${money(yearly)}/year until cancelled. Cancel at least 24 hours before the period ends in your App Store account settings.`}
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
    </View>
  );
}

function TierRow({
  title,
  note,
  price,
  was,
  selected,
  onPress,
}: {
  title: string;
  note?: string;
  price: string;
  /** The price this one replaced, struck through beside it. Present only on a
   * boosted row: a permanent "was" next to a permanent price is the oldest
   * trick in the shop window, and it is a lie the rest of this flow has not
   * earned. */
  was?: string;
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
        accessibilityState={{ selected }}
        onPress={onPress}
        style={styles.tierPress}>
        <View style={styles.tierCopy}>
          <Text style={[styles.tierTitle, { color: colors.foreground }]}>{title}</Text>
          {note != null && (
            <Text style={[styles.tierNote, { color: meter.caption }]}>{note}</Text>
          )}
        </View>
        <View style={styles.tierPrices}>
          {was != null && (
            <Animated.Text
              entering={FadeIn.duration(320).reduceMotion(ReduceMotion.System)}
              exiting={FadeOut.duration(160).reduceMotion(ReduceMotion.System)}
              style={[styles.tierWas, { color: meter.unit }]}>
              {was}
            </Animated.Text>
          )}
          {/* Keyed on the figure, so a changing price crossfades in place
              instead of silently swapping while the eye is elsewhere. */}
          <Animated.Text
            key={price}
            entering={FadeIn.duration(320).reduceMotion(ReduceMotion.System)}
            style={[styles.tierPrice, { color: colors.foreground }]}>
            {price}
          </Animated.Text>
        </View>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  sheet: {
    flex: 1,
    // Room for the big number to clear the grabber and the Dynamic Island: a
    // tall sheet puts its own top close under the status bar, and the number's
    // upward optical padding would otherwise tuck it behind the island.
    paddingTop: 52,
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 12,
  },
  tierCopy: {
    flex: 1,
  },
  tierTitle: {
    fontSize: 18,
    fontFamily: fonts.bold,
    letterSpacing: -0.3,
  },
  tierNote: {
    marginTop: 2,
    fontSize: 13,
    fontFamily: fonts.regular,
  },
  tierPrices: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  tierWas: {
    fontSize: 15,
    fontFamily: fonts.medium,
    textDecorationLine: 'line-through',
  },
  tierPrice: {
    fontSize: 18,
    fontFamily: fonts.bold,
    letterSpacing: -0.3,
  },
});
