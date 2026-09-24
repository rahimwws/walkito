import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { CORNERS, Confetti } from '@/shared/ui/confetti';
import { PrimaryButton } from '@/shared/ui/primary-button';
import { TypedText } from '@/shared/ui/typed-text';

/** The one emblem the app celebrates with. One badge for one idea: whatever
 * screen it appears over, it means something was earned. */
const BADGE_ART = require('@assets/achievements/streak-badge.png');

const BADGE = 132;
const RADIUS = 34;
const RISE = 40;
const IN_MS = 320;
const OUT_MS = 220;

export type CelebrationSheetProps = {
  visible: boolean;
  /** Typed out rather than faded in — the one moment a little theatre is
   * earned, and it holds the eye exactly as long as the confetti falls. */
  title: string;
  /** One coloured line under the title. The figure worth reading. */
  headline?: string;
  /** The colour that line takes. Supplied by the caller because what is being
   * celebrated decides it — a streak is orange, a subscription is not. */
  headlineColor?: string;
  /** The sentence under it. */
  blurb: string;
  ctaLabel?: string;
  /** Off for an ending that is not a win — a session stopped on pain still
   * counts, but confetti over "it hurt" is the app cheering at the wrong
   * thing. */
  confetti?: boolean;
  onClose: () => void;
};

/**
 * The app's one way of saying well done.
 *
 * Extracted when the paywall needed the same thing the session player already
 * had: the badge landing, the confetti, the typed line. Two copies of a sheet
 * this fiddly — a hand-driven mount, a spring on the emblem, a dock measured
 * against the badge's own height — is two places for the timing to drift apart,
 * and the second copy is always the one that keeps the bug.
 *
 * A dock at the bottom rather than a full form sheet. What is behind it is the
 * reason the celebration makes sense — the session just finished, the plan just
 * bought — and covering it would replace the thing being celebrated with a
 * picture of celebrating.
 *
 * An absolutely-positioned overlay, **not** a `Modal`. Both hosts are already
 * inside one: the session player runs in a `pageSheet` and the paywall is a
 * form sheet. A `Modal` nested in a presented sheet does not reliably present
 * on iOS, and when it failed here it took the only way out with it — the
 * player's `onFinish` fires from this sheet's dismissal, so a sheet that never
 * appeared left the session stuck open with nothing to press. The host is
 * full-screen either way, so nothing is lost by staying inside it.
 *
 * Driven by one shared value, never by `entering`/`exiting` builders. An
 * entering builder that fails to run leaves its subject stranded at opacity 0,
 * which has happened three times in this project.
 */
export function CelebrationSheet({
  visible,
  title,
  headline,
  headlineColor,
  blurb,
  ctaLabel,
  confetti = true,
  onClose,
}: CelebrationSheetProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const t = useT();

  const [mounted, setMounted] = useState(false);
  /** Named `progress` rather than `t`, which is now the translator in every
   * file that renders a string. */
  const progress = useSharedValue(0);
  /** The badge lands rather than fades: an emblem that appears at full size has
   * already happened, where one arriving with weight behind it reads as having
   * just been earned. */
  const pop = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      setMounted(true);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      // A frame late: the modal has to exist before the transition starts, or
      // the first frames play against nothing.
      const frame = requestAnimationFrame(() => {
        progress.value = withTiming(1, {
          duration: IN_MS,
          easing: Easing.out(Easing.cubic),
          reduceMotion: ReduceMotion.System,
        });
        pop.value = withDelay(
          IN_MS - 80,
          withSequence(
            withSpring(1.14, { damping: 9, stiffness: 220, reduceMotion: ReduceMotion.System }),
            withTiming(1, {
              duration: 200,
              easing: Easing.out(Easing.quad),
              reduceMotion: ReduceMotion.System,
            }),
          ),
        );
      });
      return () => cancelAnimationFrame(frame);
    }

    pop.value = 0;
    progress.value = withTiming(
      0,
      { duration: OUT_MS, easing: Easing.in(Easing.cubic), reduceMotion: ReduceMotion.System },
      (finished) => {
        // Only when it ran to the end. Reopening mid-exit cancels this timing,
        // and unmounting then would pull the sheet out from under the animation
        // already bringing it back.
        if (finished) runOnJS(setMounted)(false);
      },
    );
    return undefined;
  }, [visible, progress, pop]);

  const backdrop = useAnimatedStyle(() => ({ opacity: progress.value }));
  const dock = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [{ translateY: (1 - progress.value) * RISE }],
  }));
  const badge = useAnimatedStyle(() => ({ transform: [{ scale: pop.value }] }));

  if (!mounted) return null;

  return (
    <View style={styles.host} pointerEvents="box-none">
      <Animated.View style={[styles.fill, backdrop]}>
        <BlurView intensity={28} tint={scheme === 'dark' ? 'dark' : 'light'} style={styles.fill} />
        <View style={[styles.fill, styles.wash]} />
      </Animated.View>

      {/* Over the blur and under the card, so pieces fall past the emblem
          rather than behind the whole sheet. Three launch points: one central
          plume leaves the corners empty, which is exactly where the eye goes
          when something has just been finished. */}
      {visible && confetti && <Confetti origins={CORNERS} size={1.6} />}

      {/* Tapping away closes it. The button is the advertised way out, but a
          sheet with a scrim that swallows taps feels stuck. */}
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={t('common.close')}
        style={styles.fill}
        onPress={onClose}
      />

      <Animated.View
        style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }, dock]}
        pointerEvents="box-none">
        <Animated.Image
          source={BADGE_ART}
          resizeMode="contain"
          accessible={false}
          style={[styles.badge, badge]}
        />

        <View style={[styles.card, { backgroundColor: colors.card }]}>
          <TypedText text={title} style={[styles.title, { color: colors.foreground }]} />

          {headline != null && (
            <Text style={[styles.headline, { color: headlineColor ?? colors.foreground }]}>
              {headline}
            </Text>
          )}

          <Text style={[styles.blurb, { color: meter.caption }]}>{blurb}</Text>

          {/* Defaulted here rather than in the parameter list: a default
              argument is evaluated before `t` exists, so an English literal
              there would never translate. */}
          <PrimaryButton label={ctaLabel ?? t('common.done')} onPress={onClose} style={styles.cta} />
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  /** Covers the host and sits above everything in it. `box-none` so the
   * untouched parts of the screen behind stay inert rather than swallowing
   * taps meant for the scrim below. */
  host: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 100 },
  fill: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  /** A trace of ink over the blur. Blur alone leaves a bright page bright, and
   * the card needs something to sit against on the light scheme. */
  wash: { backgroundColor: 'rgba(0,0,0,0.18)' },
  dock: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 14,
    // The room the badge needs above the card.
    paddingTop: BADGE / 2,
  },
  badge: {
    position: 'absolute',
    // Hung at the dock's top edge: with `paddingTop` equal to half the badge,
    // the card's top edge cuts it exactly in half.
    top: 0,
    alignSelf: 'center',
    width: BADGE,
    height: BADGE,
    zIndex: 2,
  },
  card: {
    borderRadius: RADIUS,
    borderCurve: 'continuous',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 18,
    // Clears the half of the badge that overhangs it.
    paddingTop: BADGE / 2 + 12,
  },
  title: { fontSize: 30, fontFamily: fonts.heavy, letterSpacing: -0.9 },
  headline: { fontSize: 20, fontFamily: fonts.bold, letterSpacing: -0.4, marginTop: 4 },
  blurb: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: fonts.regular,
    textAlign: 'center',
    marginTop: 8,
    paddingHorizontal: 6,
  },
  cta: { alignSelf: 'stretch', marginTop: 18 },
});
