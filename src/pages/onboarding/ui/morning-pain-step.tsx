import * as Haptics from 'expo-haptics';
import { useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { PRIMARY, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { settle } from '@/shared/lib/motion';

import { Mascot, painRig, playMascotSound, preloadMascotSounds, type MascotHandle } from '@/shared/ui/mascot';

import { mascotCue, mascotRest } from '../model/mascot-reaction';

const MAX = 10;
const KNOB = 32;
const PAD = KNOB / 2;
/** The numbers under the slider: a tap lands exactly where a thumb on a
 * slider lands only roughly, which matters most to the people over 35 this
 * question is mostly asked of. */
const CELL = 28;
/** The mascot, alone above the figure: big enough to read his face. */
const MASCOT = 200;
/** A tap on a number glides the knob there in 280 ms, and a drag crosses
 * bands in a few frames: the sound waits until the score has held this
 * long, so it is the sound of where it landed, not of a band passed on the
 * way. */
const SOUND_SETTLE_MS = 320;

export type MorningPainStepProps = {
  score: number;
  onChange: (next: number) => void;
};

/**
 * The first steps this morning, 0 to 10 — the daily check-in's own question,
 * so the first point on the progress chart is this answer.
 *
 * The figure is always ink: colour never judges a value. The mascot above it
 * answers with the band, without a word, so the screen reacts while the thumb
 * is still on it.
 */
export function MorningPainStep({ score, onChange }: MorningPainStepProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();

  const [width, setWidth] = useState(0);
  const span = Math.max(width - PAD * 2, 1);
  const at = useSharedValue(score / MAX);

  useAnimatedReaction(
    () => Math.round(at.value * MAX),
    (next, previous) => {
      if (previous != null && next !== previous) {
        runOnJS(onChange)(next);
        runOnJS(Haptics.selectionAsync)();
      }
    },
  );

  const place = (x: number) => {
    'worklet';
    at.value = Math.min(Math.max((x - PAD) / span, 0), 1);
  };

  const pan = Gesture.Pan()
    .minDistance(0)
    .onBegin((event) => place(event.x))
    .onUpdate((event) => place(event.x))
    .onEnd(() => {
      'worklet';
      // Whole points only: a pain score has no decimals.
      at.value = settle(Math.round(at.value * MAX) / MAX, 220);
    });

  const knob = useAnimatedStyle(() => ({ transform: [{ translateX: at.value * span }] }));
  const fill = useAnimatedStyle(() => ({ width: PAD + at.value * span }));

  const nudge = (by: number) => {
    const next = Math.min(Math.max(score + by, 0), MAX);
    if (next !== score) at.value = next / MAX;
  };

  // The mascot answers the scale as it moves: the middle wonders and past
  // seven hurts, each with its sound; anything else is a silent nod, or a
  // wince as it climbs. Never a jump or a happy sound for a low score.
  // Answers to the person, never to the screen arriving, so the first score
  // sets nothing off.
  const mascot = useRef<MascotHandle>(null);
  const shown = useRef<number | null>(null);
  /** The score the last sound answered: the next one is for leaving its band. */
  const heard = useRef<number | null>(null);
  useEffect(() => {
    preloadMascotSounds(['sad', 'hmm', 'boing']);
  }, []);
  useEffect(() => {
    const cue = mascotCue(score, shown.current);
    if (heard.current == null) heard.current = score;
    shown.current = score;
    if (cue.shot != null) mascot.current?.play(cue.shot);
    const timer = setTimeout(() => {
      const landed = mascotCue(score, heard.current);
      heard.current = score;
      if (landed.sound != null) playMascotSound(landed.sound);
    }, SOUND_SETTLE_MS);
    return () => clearTimeout(timer);
  }, [score]);
  const rest = mascotRest(score);
  const pick = (n: number) => {
    if (n === score) return;
    at.value = settle(n / MAX, 280);
  };

  return (
    <View style={styles.root}>
      <View style={styles.mascot}>
        <Mascot
          ref={mascot}
          rig={painRig}
          state={rest.state}
          intensity={rest.intensity}
          size={MASCOT}
          surface={colors.background}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            playMascotSound('boing');
          }}
        />
      </View>
      <Text
        accessibilityElementsHidden
        importantForAccessibility="no"
        style={[styles.figure, { color: colors.foreground }]}>
        {score}
      </Text>

      <GestureDetector gesture={pan}>
        <View
          accessible
          accessibilityRole="adjustable"
          accessibilityLabel={t('onboarding.morning.title')}
          accessibilityValue={{ min: 0, max: MAX, now: score, text: t('onboarding.morning.a11y', { score }) }}
          accessibilityActions={[{ name: 'increment' }, { name: 'decrement' }]}
          onAccessibilityAction={(event) => nudge(event.nativeEvent.actionName === 'increment' ? 1 : -1)}
          onLayout={(event) => setWidth(event.nativeEvent.layout.width)}
          style={styles.hit}>
          <View style={[styles.track, { backgroundColor: meter.track }]}>
            <Animated.View style={[styles.fill, { backgroundColor: PRIMARY }, fill]} />
          </View>
          <Animated.View style={[styles.knob, knob]} />
        </View>
      </GestureDetector>

      <View style={styles.cells}>
        {Array.from({ length: MAX + 1 }, (_, n) => {
          const on = n === score;
          return (
            <Pressable
              key={n}
              accessibilityRole="button"
              accessibilityState={{ selected: on }}
              accessibilityLabel={t('onboarding.morning.a11y', { score: n })}
              hitSlop={{ top: 8, bottom: 8, left: 2, right: 2 }}
              onPress={() => pick(n)}
              style={[styles.cell, { backgroundColor: on ? PRIMARY : meter.track }]}>
              <Text style={[styles.cellText, { color: on ? '#FFFFFF' : colors.foreground }]}>{n}</Text>
            </Pressable>
          );
        })}
      </View>
      <View style={styles.ends}>
        <Text style={[styles.endLabel, { color: meter.caption }]}>{t('onboarding.morning.min')}</Text>
        <Text style={[styles.endLabel, { color: meter.caption }]}>{t('onboarding.morning.max')}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 24,
  },
  mascot: { alignItems: 'center', marginBottom: 8 },
  figure: {
    ...fonts.heavy(104, -3),
    lineHeight: 112,
    textAlign: 'center',
    fontVariant: ['tabular-nums'],
    marginBottom: 18,
  },
  hit: {
    height: KNOB + 16,
    justifyContent: 'center',
  },
  track: {
    height: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: 5,
  },
  knob: {
    position: 'absolute',
    left: 0,
    width: KNOB,
    height: KNOB,
    borderRadius: KNOB / 2,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOpacity: 0.22,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  cells: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  cell: {
    width: CELL,
    height: CELL,
    borderRadius: CELL / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellText: { ...fonts.bold(13), fontVariant: ['tabular-nums'] },
  ends: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  endLabel: fonts.medium(14),
});
