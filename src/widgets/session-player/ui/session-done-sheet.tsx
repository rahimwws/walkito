import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import { useEffect, useState } from 'react';
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
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

import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';
import { CORNERS, Confetti } from '@/shared/ui/confetti';
import { PrimaryButton } from '@/shared/ui/primary-button';
import { TypedText } from '@/shared/ui/typed-text';

/** The same emblem the streak sheet hangs over its card. One badge for one
 * idea: whatever screen it appears on, it means the run of days. */
const BADGE_ART = require('@assets/achievements/streak-badge.png');

const BADGE = 132;
const RADIUS = 34;
const RISE = 40;
const IN_MS = 320;
const OUT_MS = 220;

export type SessionDoneSheetProps = {
  visible: boolean;
  /** Days in a row, including today. */
  streak: number;
  /** How many moves were just completed. */
  moves: number;
  onClose: () => void;
};

/**
 * The end of a session.
 *
 * The one place in the app allowed to celebrate, and it is allowed because of
 * what it is celebrating: not a step count, not a sensor reading, but work the
 * user chose to do. Everywhere else the rule is that nothing congratulates —
 * that rule exists to stop the app cheering at somebody's pain, and there is no
 * pain here to cheer at.
 *
 * Built as the streak sheet is built, deliberately: a transparent modal with a
 * dock at the bottom, not a `pageSheet`. A full form sheet takes the whole
 * screen for an aside, and what is behind this one — the session that was just
 * finished — is the evidence. Covering it would replace the thing being
 * celebrated with a picture of celebrating.
 */
export function SessionDoneSheet({ visible, streak, moves, onClose }: SessionDoneSheetProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();

  /**
   * The sheet owns its own mount, so the exit has something to play against.
   * Driven by hand rather than by `entering`/`exiting` builders — an entering
   * builder that fails to run leaves its subject stranded at opacity 0, which
   * has happened twice in this project.
   */
  const [mounted, setMounted] = useState(false);
  const t = useSharedValue(0);
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
        t.value = withTiming(1, {
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
    t.value = withTiming(
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
  }, [visible, t, pop]);

  const backdrop = useAnimatedStyle(() => ({ opacity: t.value }));
  const dock = useAnimatedStyle(() => ({
    opacity: t.value,
    transform: [{ translateY: (1 - t.value) * RISE }],
  }));
  const badge = useAnimatedStyle(() => ({ transform: [{ scale: pop.value }] }));

  if (!mounted) return null;

  return (
    <Modal transparent animationType="none" visible statusBarTranslucent onRequestClose={onClose}>
      <Animated.View style={[styles.fill, backdrop]}>
        <BlurView intensity={28} tint={scheme === 'dark' ? 'dark' : 'light'} style={styles.fill} />
        <View style={[styles.fill, styles.wash]} />
      </Animated.View>

      {/* Over the blur and under the card, so pieces fall past the emblem
          rather than behind the whole sheet. Three launch points: one central
          plume leaves the corners empty, which is exactly where the eye goes
          when something has just been finished. */}
      {visible && <Confetti origins={CORNERS} size={1.6} />}

      {/* Tapping away closes it. The button is the advertised way out, but a
          sheet with a scrim that swallows taps feels stuck. */}
      <Pressable accessibilityRole="button" accessibilityLabel="Close" style={styles.fill} onPress={onClose} />

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
          {/* Typed rather than faded in. A line that assembles itself is the
              one moment in the app where a little theatre is earned, and it
              holds the eye for exactly as long as the confetti is falling. */}
          <TypedText text="Nice work." style={[styles.title, { color: colors.foreground }]} />

          <Text style={[styles.streak, { color: accents[scheme].orange.fill }]}>
            {streak} {streak === 1 ? 'day' : 'days'} in a row
          </Text>

          <Text style={[styles.blurb, { color: meter.caption }]}>
            {moves === 1
              ? 'One move done. Small and often is what moves this.'
              : `All ${moves} moves done. Small and often is what moves this.`}
          </Text>

          <PrimaryButton label="Done" onPress={onClose} style={styles.cta} />
        </View>
      </Animated.View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
  streak: { fontSize: 20, fontFamily: fonts.bold, letterSpacing: -0.4, marginTop: 4 },
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
