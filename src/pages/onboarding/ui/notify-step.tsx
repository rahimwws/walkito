import * as Haptics from 'expo-haptics';
import { useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { requestNotificationAccess } from '@/entities/notifications';
import { PRIMARY, fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';
import { PrimaryButton } from '@/shared/ui/primary-button';

/** The app's own icon, so the mock banner is the real thing at notification
 * size rather than an illustration of one. */
const APP_ICON = require('@assets/icon.png');

/** What each line of the ask promises, in the order it is delivered. */
const PROMISES = [
  'A nudge on the days your plan has a session',
  'A heads-up when it changes what you are doing',
  'Nothing else. No streaks to guilt you back.',
] as const;

export type NotifyStepProps = {
  name: string;
  /** Null until the sheet has been answered; false means declined, which is a
   * perfectly good outcome the flow has to carry on from. */
  granted: boolean | null;
  onAnswered: (granted: boolean) => void;
  onNext: () => void;
  onSkip: () => void;
};

/**
 * The notification ask.
 *
 * iOS gives an app exactly one chance to show the system dialog, so this
 * screen exists to make sure that chance is spent on someone who already knows
 * what they will get. It says what will be sent, and — just as importantly —
 * what will not be, because the objection at this moment is never "will this
 * be useful", it is "how often is this going to buzz".
 *
 * The banner above the copy is a mock, not a screenshot: it drops in the way a
 * real one does, holds, then settles. Showing the thing being asked for is the
 * whole argument, and a static picture of a notification reads as an
 * illustration where a moving one reads as a preview.
 */
export function NotifyStep({ name, granted, onAnswered, onNext, onSkip }: NotifyStepProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];

  const [busy, setBusy] = useState(false);
  const answered = granted != null;

  const ask = async () => {
    if (busy || answered) return;
    setBusy(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    const result = await requestNotificationAccess();
    setBusy(false);
    Haptics.notificationAsync(
      result
        ? Haptics.NotificationFeedbackType.Success
        : Haptics.NotificationFeedbackType.Warning,
    );
    onAnswered(result);
  };

  return (
    <View style={styles.wrap}>
      <Text style={[styles.title, { color: colors.foreground }]}>
        {name.trim().length > 0 ? `Don’t go it alone, ${name.trim()}` : 'Don’t go it alone'}
      </Text>
      <Text style={[styles.blurb, { color: meter.caption }]}>
        A plan only works if it turns up. Let Tread tell you when today has a session in it.
      </Text>

      <Banner />

      <View style={styles.promises}>
        {PROMISES.map((promise, i) => (
          <Animated.View
            key={promise}
            entering={FadeIn.delay(700 + i * 110)
              .duration(340)
              .reduceMotion(ReduceMotion.System)}
            style={styles.promise}>
            <View style={[styles.dot, { backgroundColor: PRIMARY }]} />
            <Text style={[styles.promiseText, { color: meter.caption }]}>{promise}</Text>
          </Animated.View>
        ))}
      </View>

      <View style={styles.actions}>
        <PrimaryButton
          label={
            answered
              ? 'Next'
              : busy
                ? 'Opening…'
                : 'Turn on notifications'
          }
          onPress={answered ? onNext : ask}
          disabled={busy}
        />
        {!answered && (
          <Pressable
            accessibilityRole="button"
            onPress={onSkip}
            hitSlop={10}
            style={({ pressed }) => [styles.skip, pressed && { opacity: 0.5 }]}>
            <Text style={[styles.skipText, { color: meter.caption }]}>Not now</Text>
          </Pressable>
        )}
        {granted === false && (
          <Text style={[styles.skipText, { color: meter.unit, textAlign: 'center' }]}>
            No problem — you can turn these on later in Settings.
          </Text>
        )}
      </View>
    </View>
  );
}

/**
 * A notification, arriving the way one does.
 *
 * Drops from above with a little overshoot, then breathes once — enough motion
 * to read as a live thing landing on the screen rather than as a card in a
 * layout, and not so much that it becomes a toy.
 */
function Banner() {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];

  const drop = useSharedValue(0);
  const pulse = useSharedValue(0);

  useEffect(() => {
    drop.value = withDelay(
      260,
      withSpring(1, { damping: 13, stiffness: 150, mass: 0.9, reduceMotion: ReduceMotion.System }),
    );
    pulse.value = withDelay(
      1200,
      withSequence(
        withTiming(1, { duration: 260, easing: Easing.out(Easing.quad), reduceMotion: ReduceMotion.System }),
        withTiming(0, { duration: 420, easing: Easing.inOut(Easing.quad), reduceMotion: ReduceMotion.System }),
      ),
    );
  }, [drop, pulse]);

  const style = useAnimatedStyle(() => ({
    opacity: Math.min(drop.value * 1.8, 1),
    transform: [
      { translateY: (1 - drop.value) * -46 },
      { scale: 0.94 + drop.value * 0.06 + pulse.value * 0.02 },
    ],
  }));

  return (
    <Animated.View style={[styles.banner, { backgroundColor: colors.card }, style]}>
      {/* The real icon, not a letter in a box. The whole point of the mock is
          that it looks like the thing the user will actually see on their lock
          screen, and a stand-in glyph is the one detail that gives it away. */}
      <Image source={APP_ICON} style={styles.appIcon} />
      <View style={styles.bannerCopy}>
        <View style={styles.bannerTop}>
          <Text style={[styles.bannerTitle, { color: colors.foreground }]}>Tread</Text>
          <Text style={[styles.bannerTime, { color: meter.unit }]}>now</Text>
        </View>
        <Text style={[styles.bannerBody, { color: meter.caption }]} numberOfLines={2}>
          Today is foot strength — 7 minutes. Your shins will thank you.
        </Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    paddingTop: 8,
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
    fontFamily: fonts.bold,
    letterSpacing: -0.7,
  },
  blurb: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 23,
    fontFamily: fonts.regular,
  },
  banner: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 14,
    borderRadius: 22,
    borderCurve: 'continuous',
  },
  appIcon: {
    width: 38,
    height: 38,
    borderRadius: 11,
    borderCurve: 'continuous',
  },
  bannerCopy: {
    flex: 1,
    gap: 2,
  },
  bannerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bannerTitle: {
    fontSize: 15,
    fontFamily: fonts.semibold,
  },
  bannerTime: {
    fontSize: 13,
    fontFamily: fonts.regular,
  },
  bannerBody: {
    fontSize: 14,
    lineHeight: 19,
    fontFamily: fonts.regular,
  },
  promises: {
    marginTop: 26,
    gap: 14,
  },
  promise: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  promiseText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 21,
    fontFamily: fonts.regular,
  },
  actions: {
    marginTop: 'auto',
    marginBottom: 28,
    gap: 14,
  },
  skip: {
    alignSelf: 'center',
    paddingVertical: 4,
  },
  skipText: {
    fontSize: 15,
    fontFamily: fonts.semibold,
  },
});
