import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, type ImageSourcePropType } from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  FadeInDown,
  ReduceMotion,
  SlideInDown,
  ZoomIn,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { PrimaryButton } from '@/shared/ui/primary-button';
import { REPLAY_MASK } from '@/shared/ui/replay-mask';
import { settle } from '@/shared/lib/motion';

import { PLAN_PHOTO } from '../config/plan-photos';

/**
 * The 3D art beside each line: the same holographic chrome as the welcome
 * screen's stickers, so the plan reads as made by the app that greeted them.
 * 240 px WebP cut-outs with lossless alpha, drawn at 52 pt.
 */
const ART: Readonly<Record<BuildingArt, ImageSourcePropType>> = {
  foot: require('@assets/onboarding/building/foot.webp'),
  shield: require('@assets/onboarding/building/shield.webp'),
  calendar: require('@assets/onboarding/building/calendar.webp'),
  clipboard: require('@assets/onboarding/building/clipboard.webp'),
};

/** Each card's bar, in the accent it fills with. */
const BAR: Readonly<Record<BuildingArt, string>> = {
  foot: '#9B85FF',
  shield: '#2ED3C6',
  calendar: '#3B9EFF',
  clipboard: '#F0B458',
};

/** One card every this long. With four cards and the settle the screen runs a
 * little under six seconds: long enough to read each answer back, short
 * enough not to feel like waiting. */
const STEP_MS = 1250;
const SETTLE_MS = 600;

export type BuildingArt = 'foot' | 'shield' | 'calendar' | 'clipboard';

export type BuildingRow = {
  art: BuildingArt;
  /** One of their answers, said back. */
  title: string;
  /** A second, quieter line: the rest of that answer. */
  caption?: string;
};

export type BuildingStepProps = {
  rows: readonly BuildingRow[];
  onDone: () => void;
  insets: { top: number; bottom: number };
};

/**
 * The plan being put together, from what they said.
 *
 * One card per part of it, each one of their own answers: where and how much,
 * the safety check, the week they chose, then the exercises being picked. Each
 * card's 3D art pops in as its turn comes, its bar fills, and it is ticked as
 * the next one starts, so the wait reads as work done for them. No promise of
 * when anything changes: that would be a claim about their body.
 */
export function BuildingStep({ rows, onDone, insets }: BuildingStepProps) {
  const t = useT();
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);
  const total = rows.length;

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 1; i <= total; i += 1) {
      timers.push(
        setTimeout(() => {
          setActive(i);
          if (i < total) Haptics.selectionAsync();
        }, i * STEP_MS),
      );
    }
    timers.push(
      setTimeout(() => {
        setReady(true);
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }, total * STEP_MS + SETTLE_MS),
    );
    return () => timers.forEach(clearTimeout);
  }, [total]);

  return (
    <Animated.View
      {...REPLAY_MASK}
      entering={FadeIn.duration(420).reduceMotion(ReduceMotion.System)}
      style={styles.fill}>
      <View style={styles.photoWrap}>
        <Image source={PLAN_PHOTO} style={styles.photo} resizeMode="cover" />
      </View>
      <View
        style={[
          StyleSheet.absoluteFill,
          {
            experimental_backgroundImage:
              'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.62) 30%, rgba(0,0,0,0.82) 60%, rgba(0,0,0,0.94) 100%)',
          },
        ]}
      />
      {/* The scrim is dark in both schemes, so the status bar is light in both. */}
      <StatusBar style="light" animated />

      <View style={[styles.content, { paddingTop: insets.top + 18, paddingBottom: Math.max(insets.bottom, 20) + 8 }]}>
        <View style={styles.middle}>
          <Text style={styles.heading}>{t('onboarding.building.heading')}</Text>
          <View style={styles.list}>
            {rows.map((row, i) => (
              <BuildingCard
                key={`${row.art}-${i}`}
                row={row}
                index={i}
                state={i < active ? 'done' : i === active ? 'working' : 'waiting'}
              />
            ))}
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

/**
 * One part of the plan. Waiting, it is a dim outline of itself; its turn pops
 * the art in with a small hop and fills the bar; done, a tick lands on the art.
 * Every motion plays once.
 */
function BuildingCard({
  row,
  index,
  state,
}: {
  row: BuildingRow;
  index: number;
  state: 'waiting' | 'working' | 'done';
}) {
  const reduceMotion = useReducedMotion();
  const lit = state !== 'waiting';

  const bar = useSharedValue(0);
  const hop = useSharedValue(0);
  const glow = useSharedValue(0);
  useEffect(() => {
    if (state === 'working') {
      bar.value = withTiming(1, { duration: STEP_MS - 120, easing: Easing.inOut(Easing.quad), reduceMotion: ReduceMotion.System });
      glow.value = withTiming(1, { duration: 300 });
      if (!reduceMotion) {
        hop.value = withSequence(
          withTiming(1, { duration: 200, easing: Easing.out(Easing.quad) }),
          settle(0, 420),
        );
      }
    } else if (state === 'done') {
      bar.value = withTiming(1, { duration: 120 });
      glow.value = withDelay(80, withTiming(0.55, { duration: 400 }));
    }
  }, [state, bar, hop, glow, reduceMotion]);

  const barStyle = useAnimatedStyle(() => ({ transform: [{ scaleX: bar.value }] }));
  const artStyle = useAnimatedStyle(() => ({
    opacity: 0.35 + glow.value * 0.65,
    transform: [
      { translateY: -hop.value * 10 },
      { rotate: `${hop.value * -8}deg` },
      { scale: 0.86 + glow.value * 0.14 + hop.value * 0.06 },
    ],
  }));

  return (
    <Animated.View
      entering={FadeInDown.delay(120 + index * 90)
        .duration(360)
        .easing(Easing.bezier(0.23, 1, 0.32, 1).factory())
        .reduceMotion(ReduceMotion.System)}
      style={[styles.card, lit && styles.cardLit]}>
      <View style={styles.artSlot}>
        <Animated.View style={artStyle}>
          <Image source={ART[row.art]} style={styles.art} resizeMode="contain" />
        </Animated.View>
        {state === 'done' && (
          <Animated.View entering={ZoomIn.duration(260).reduceMotion(ReduceMotion.System)} style={styles.tick}>
            <HugeiconsIcon icon={Tick02Icon} size={11} color="#111114" strokeWidth={3.2} />
          </Animated.View>
        )}
      </View>
      <View style={styles.copy}>
        <Text style={[styles.title, !lit && styles.dim]} numberOfLines={2}>
          {row.title}
        </Text>
        {row.caption != null && (
          <Text style={[styles.caption, !lit && styles.dim]} numberOfLines={1}>
            {row.caption}
          </Text>
        )}
        <View style={styles.track}>
          <Animated.View style={[styles.trackFill, { backgroundColor: BAR[row.art] }, barStyle]} />
        </View>
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
    paddingHorizontal: 20,
  },
  middle: {
    flex: 1,
    justifyContent: 'center',
    gap: 24,
  },
  heading: {
    ...fonts.heavy(28, -0.7),
    color: '#FFFFFF',
    textAlign: 'center',
  },
  list: {
    gap: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingVertical: 12,
    paddingLeft: 10,
    paddingRight: 16,
    borderRadius: 22,
    borderCurve: 'continuous',
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.10)',
  },
  cardLit: {
    backgroundColor: 'rgba(255,255,255,0.11)',
    borderColor: 'rgba(255,255,255,0.18)',
  },
  artSlot: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  art: {
    width: 52,
    height: 52,
  },
  tick: {
    position: 'absolute',
    right: -2,
    bottom: -2,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  copy: {
    flex: 1,
    gap: 3,
  },
  title: {
    ...fonts.bold(16, -0.2),
    lineHeight: 21,
    color: '#FFFFFF',
  },
  caption: {
    ...fonts.medium(13),
    color: 'rgba(255,255,255,0.62)',
  },
  dim: {
    opacity: 0.45,
  },
  track: {
    height: 6,
    marginTop: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.14)',
    overflow: 'hidden',
  },
  trackFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 3,
    transformOrigin: 'left center',
  },
});
