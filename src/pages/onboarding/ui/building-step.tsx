import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useEffect, useRef, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View, useWindowDimensions, type ImageSourcePropType } from 'react-native';
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

import { accents, fonts, meterColors, palette, type AccentName } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { settle } from '@/shared/lib/motion';
import { useColorScheme } from '@/shared/lib/theme';
import { CORNERS, Confetti } from '@/shared/ui/confetti';
import {
  Mascot,
  celebrateRig,
  playMascotSound,
  preloadMascotSounds,
  thinkingRig,
  type MascotHandle,
} from '@/shared/ui/mascot';
import { BUTTON_3D_XL_HEIGHT, Button3D } from '@/shared/ui/button-3d';
import { REPLAY_MASK } from '@/shared/ui/replay-mask';

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

/** Each card's bar, in the accent it fills with. Which part of the plan it is,
 * never how it went. */
const BAR: Readonly<Record<BuildingArt, AccentName>> = {
  foot: 'violet',
  shield: 'teal',
  calendar: 'blue',
  clipboard: 'amber',
};

/** One card every this long. With four cards the button is up a little after
 * five seconds, half a second sooner than before the mascot: long enough to
 * read each answer back and see him jump, short enough not to feel like
 * waiting. */
const STEP_MS = 1000;
/** The last tick lands before he does anything about it. */
const SETTLE_MS = 300;
/** The squash the pose changes behind: down, swap at the bottom, back up. */
const SWAP_DOWN_MS = 90;
const SWAP_UP_MS = 200;
/** From the start of `celebrate` to the moment he leaves the ground, where its
 * own sound cue sits (`shared/ui/mascot/mascot.tsx`). */
const LEAP_MS = 140;
/** The button arrives as he lands, not while he is in the air. */
const CTA_DELAY_MS = 600;

/** The mascot over the cards; smaller on a short phone, so four of them and
 * the button still fit without scrolling. */
const HERO = 140;
const HERO_SHORT = 104;
const SHORT_WINDOW = 700;

const EASE = Easing.bezier(0.23, 1, 0.32, 1);

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
  /** What he says once it is ready: `onboarding.coach.planReady`, the name
   * already in. */
  readyLine: string;
  /**
   * Whether this visit celebrates. The page passes true once a run: back
   * from the first week, the cards fill again but the plan was already
   * ready, so he only nods at it.
   */
  celebrate: boolean;
};

/**
 * The plan being put together, from what they said.
 *
 * One card per part of it, each one of their own answers: where and how much,
 * the safety check, the week they chose, then the exercises being picked. Each
 * card's 3D art pops in as its turn comes, its bar fills, and it is ticked as
 * the next one starts, so the wait reads as work done for them. No promise of
 * when anything changes: that would be a claim about their body.
 *
 * The mascot does the work: thinking over the cards, a nod as each is ticked,
 * and when the last is done he changes into the celebrating pose and jumps,
 * with the one burst of confetti in the flow. What is celebrated is the plan
 * being ready, the same for everyone, never anything a card says.
 */
export function BuildingStep({ rows, onDone, insets, readyLine, celebrate }: BuildingStepProps) {
  const t = useT();
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const { height } = useWindowDimensions();
  const hero = height < SHORT_WINDOW ? HERO_SHORT : HERO;
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);
  const total = rows.length;

  const mascot = useRef<MascotHandle>(null);
  // Read once, for the same reason as the halfway screen: the page may mark
  // the celebration spent while this one is still playing.
  const first = useRef(celebrate);
  const squash = useSharedValue(0);

  useEffect(() => {
    // Made now, so the first cheer is not the sound that waits for its file.
    if (first.current) preloadMascotSounds(['cheer', 'boing']);
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 1; i <= total; i += 1) {
      timers.push(
        setTimeout(() => {
          setActive(i);
          if (i < total) Haptics.selectionAsync();
          mascot.current?.play('nod');
        }, i * STEP_MS),
      );
    }
    const swapAt = total * STEP_MS + SETTLE_MS;
    timers.push(
      setTimeout(() => {
        squash.value = withSequence(
          withTiming(1, { duration: SWAP_DOWN_MS, easing: Easing.in(Easing.quad), reduceMotion: ReduceMotion.System }),
          withTiming(0, { duration: SWAP_UP_MS, easing: EASE, reduceMotion: ReduceMotion.System }),
        );
      }, swapAt - SWAP_DOWN_MS),
    );
    timers.push(setTimeout(() => setReady(true), swapAt));
    return () => timers.forEach(clearTimeout);
  }, [total, squash]);

  // The new pose is a new character (keyed below), so its move is played from
  // here, once it has mounted and the squash it swapped behind has opened back
  // up. The cheer, the success tap and the burst all go off together, as he
  // leaves the ground.
  const [burst, setBurst] = useState(false);
  useEffect(() => {
    if (!ready) return undefined;
    const cheering = first.current;
    const timers = [setTimeout(() => mascot.current?.play(cheering ? 'celebrate' : 'nod'), SWAP_UP_MS)];
    if (cheering) {
      timers.push(
        setTimeout(() => {
          playMascotSound('cheer');
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
          setBurst(true);
        }, SWAP_UP_MS + LEAP_MS),
      );
    }
    return () => timers.forEach(clearTimeout);
  }, [ready]);

  const heroStyle = useAnimatedStyle(() => ({
    transform: [{ scaleY: 1 - squash.value * 0.18 }, { scaleX: 1 + squash.value * 0.05 }],
  }));

  return (
    <Animated.View
      {...REPLAY_MASK}
      entering={FadeIn.duration(420).reduceMotion(ReduceMotion.System)}
      style={styles.fill}>
      <View style={[styles.content, { paddingTop: insets.top + 18, paddingBottom: Math.max(insets.bottom, 20) + 8 }]}>
        {/* Scrolls only if it has to — four two-line cards on a small phone —
            and is centred otherwise, as the screen always was. */}
        <ScrollView
          style={styles.scroller}
          contentContainerStyle={styles.middle}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}>
          <Animated.View style={[styles.hero, heroStyle]}>
            <Mascot
              key={ready ? 'ready' : 'working'}
              ref={mascot}
              rig={ready ? celebrateRig : thinkingRig}
              state={ready ? 'idle' : 'thinking'}
              size={hero}
              surface={colors.background}
            />
          </Animated.View>
          <Animated.Text
            key={ready ? 'ready' : 'working'}
            entering={FadeIn.duration(260).reduceMotion(ReduceMotion.System)}
            accessibilityRole="header"
            accessibilityLiveRegion="polite"
            style={[styles.heading, { color: colors.foreground }]}>
            {ready ? readyLine : t('onboarding.building.heading')}
          </Animated.Text>
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
        </ScrollView>

        {/* The button's room is kept from the start, so its arrival does not
            shift the cards up under him mid-jump. */}
        <View style={styles.ctaSlot}>
          {ready && (
            <Animated.View
              entering={SlideInDown.delay(first.current ? CTA_DELAY_MS : 0)
                .duration(460)
                .easing(EASE.factory())
                .reduceMotion(ReduceMotion.System)}>
              <Button3D label={t('onboarding.building.ctaWeek')} onPress={onDone} size="xl" docked />
            </Animated.View>
          )}
        </View>
      </View>

      {burst && <Confetti origins={CORNERS} />}
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
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
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
        .easing(EASE.factory())
        .reduceMotion(ReduceMotion.System)}
      style={[styles.card, { backgroundColor: colors.card, borderColor: meter.track }]}>
      <View style={styles.artSlot}>
        <Animated.View style={artStyle}>
          <Image source={ART[row.art]} style={styles.art} resizeMode="contain" />
        </Animated.View>
        {state === 'done' && (
          <Animated.View
            entering={ZoomIn.duration(260).reduceMotion(ReduceMotion.System)}
            style={[styles.tick, { backgroundColor: meter.ink }]}>
            <HugeiconsIcon icon={Tick02Icon} size={11} color={colors.card} strokeWidth={3.2} />
          </Animated.View>
        )}
      </View>
      <View style={styles.copy}>
        <Text style={[styles.title, { color: colors.foreground }, !lit && styles.dim]} numberOfLines={2}>
          {row.title}
        </Text>
        {row.caption != null && (
          <Text style={[styles.caption, { color: meter.caption }, !lit && styles.dim]} numberOfLines={1}>
            {row.caption}
          </Text>
        )}
        <View style={[styles.track, { backgroundColor: meter.track }]}>
          <Animated.View style={[styles.trackFill, { backgroundColor: accents[scheme][BAR[row.art]].fill }, barStyle]} />
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
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scroller: {
    flex: 1,
  },
  middle: {
    flexGrow: 1,
    justifyContent: 'center',
    gap: 20,
    // Headroom for the jump: the scroll view clips at its top edge.
    paddingTop: 24,
    paddingBottom: 8,
  },
  hero: {
    alignSelf: 'center',
    // Squashes into the ground he stands on, not about his middle.
    transformOrigin: 'center bottom',
  },
  heading: {
    ...fonts.heavy(28, -0.7),
    textAlign: 'center',
  },
  list: {
    gap: 12,
  },
  /** The page's call to action: 16pt from the screen's edges, as everywhere
   * in the flow. */
  ctaSlot: {
    height: BUTTON_3D_XL_HEIGHT,
    marginTop: 12,
    marginHorizontal: -4,
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
    borderWidth: StyleSheet.hairlineWidth,
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
  },
  caption: fonts.medium(13),
  dim: {
    opacity: 0.45,
  },
  track: {
    height: 6,
    marginTop: 6,
    borderRadius: 3,
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
