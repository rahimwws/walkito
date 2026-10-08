import * as Haptics from 'expo-haptics';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  FadeInDown,
  ReduceMotion,
  SlideInDown,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';

import { fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { PrimaryButton } from '@/shared/ui/primary-button';
import { REPLAY_MASK } from '@/shared/ui/replay-mask';

import { PLAN_PHOTOS } from '../config/plan-photos';

/** One line every this long; with four or five lines and the closing one the
 * whole screen runs about four and a half seconds — long enough to read each
 * line, short enough not to feel like waiting. */
const LINE_MS = 720;
const SETTLE_MS = 900;

export type BuildingStepProps = {
  sex: string | null;
  /** Their answers, read back one line at a time. Each is ticked as it lands. */
  lines: readonly string[];
  onDone: () => void;
  insets: { top: number; bottom: number };
};

/**
 * The plan being put together, from what they said.
 *
 * Every line is one of their own answers — the place and this morning's
 * number, the safety check, the hours on their feet, what is at home — so the
 * wait reads as work being done for them rather than a progress bar. The last
 * line is the one thing still to do, and the button arrives when it is done.
 */
export function BuildingStep({ sex, lines, onDone, insets }: BuildingStepProps) {
  const t = useT();
  const [shown, setShown] = useState(0);
  const [ready, setReady] = useState(false);
  const progress = useSharedValue(0);
  const total = lines.length;
  const runMs = total * LINE_MS + SETTLE_MS;

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    progress.value = withTiming(1, { duration: runMs, easing: Easing.inOut(Easing.quad), reduceMotion: ReduceMotion.System });
    for (let i = 1; i <= total; i += 1) {
      timers.push(
        setTimeout(() => {
          setShown(i);
          Haptics.selectionAsync();
        }, i * LINE_MS),
      );
    }
    timers.push(
      setTimeout(() => {
        setReady(true);
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }, runMs),
    );
    return () => timers.forEach(clearTimeout);
  }, [progress, total, runMs]);

  const fillStyle = useAnimatedStyle(() => ({ transform: [{ scaleX: progress.value }] }));
  const photo = PLAN_PHOTOS[sex ?? 'female'] ?? PLAN_PHOTOS.female;

  return (
    <Animated.View
      {...REPLAY_MASK}
      entering={FadeIn.duration(420).reduceMotion(ReduceMotion.System)}
      style={styles.fill}>
      <View style={styles.photoWrap}>
        <Image source={photo} style={styles.photo} resizeMode="cover" />
      </View>
      <View
        style={[
          StyleSheet.absoluteFill,
          {
            experimental_backgroundImage:
              'linear-gradient(180deg, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0.55) 30%, rgba(0,0,0,0.78) 60%, rgba(0,0,0,0.92) 100%)',
          },
        ]}
      />
      {/* The scrim is dark in both schemes, so the status bar is light in both. */}
      <StatusBar style="light" animated />

      <View style={[styles.content, { paddingTop: insets.top + 18, paddingBottom: Math.max(insets.bottom, 20) + 8 }]}>
        <View style={styles.middle}>
          <Text style={styles.heading}>{t('onboarding.building.heading')}</Text>
          <View style={styles.list}>
            {lines.slice(0, shown).map((line, i) => {
              const last = i === total - 1;
              return (
                <Animated.View
                  key={line}
                  entering={FadeInDown.duration(320).easing(Easing.bezier(0.23, 1, 0.32, 1).factory()).reduceMotion(ReduceMotion.System)}
                  style={styles.row}>
                  <View style={[styles.tick, last && !ready && styles.tickPending]}>
                    {(!last || ready) && <HugeiconsIcon icon={Tick02Icon} size={14} color="#111114" strokeWidth={3} />}
                  </View>
                  <Text style={styles.line}>{line}</Text>
                </Animated.View>
              );
            })}
          </View>
          <View style={styles.track}>
            <Animated.View style={[styles.trackFill, fillStyle]} />
          </View>
        </View>

        {ready && (
          <Animated.View
            entering={SlideInDown.duration(460).easing(Easing.bezier(0.23, 1, 0.32, 1).factory()).reduceMotion(ReduceMotion.System)}>
            <PrimaryButton label={t('onboarding.building.ctaWeek')} onPress={onDone} />
          </Animated.View>
        )}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  // Pinned to all four edges of the page and nothing else. An absolutely
  // positioned child is laid out against its parent's border box, so the
  // page's 24pt side padding and its safe-area top do not apply here and must
  // not be cancelled out — subtracting them, as this first did, pushed the
  // whole screen up under the status bar by exactly the top inset.
  fill: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  photoWrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  middle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 28,
  },
  heading: {
    ...fonts.heavy(28, -0.7),
    color: '#FFFFFF',
    textAlign: 'center',
  },
  list: {
    alignSelf: 'stretch',
    gap: 14,
    minHeight: 200,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  tick: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tickPending: {
    backgroundColor: 'rgba(255,255,255,0.28)',
  },
  line: {
    ...fonts.semibold(18, -0.2),
    lineHeight: 23,
    color: '#FFFFFF',
    flex: 1,
  },
  track: {
    width: 150,
    height: 2,
    borderRadius: 1,
    backgroundColor: 'rgba(255,255,255,0.24)',
    overflow: 'hidden',
  },
  trackFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 1,
    backgroundColor: '#FFFFFF',
    transformOrigin: 'left center',
  },
});
