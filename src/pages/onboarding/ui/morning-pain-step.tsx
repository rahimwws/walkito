import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { PRIMARY, fonts, meterColors, palette } from '@/shared/config';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { settle } from '@/shared/lib/motion';

import { painBandReaction } from '../model/journey';
import { InlineReaction } from './inline-reaction';

const MAX = 10;
const KNOB = 32;
const PAD = KNOB / 2;
/** The numbers under the slider: a tap lands exactly where a thumb on a
 * slider lands only roughly, which matters most to the people over 35 this
 * question is mostly asked of. */
const CELL = 28;
/** The first progress check, a fortnight from today: the same date the
 * paywall and the plan name. */
const RECHECK_DAYS = 14;

export type MorningPainStepProps = {
  score: number;
  onChange: (next: number) => void;
};

/**
 * The first steps this morning, 0 to 10 — the daily check-in's own question,
 * so the first point on the progress chart is this answer.
 *
 * The figure is always ink: colour never judges a value. The line under it
 * changes with the band, so the screen answers while the thumb is still on it.
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

  const reaction = painBandReaction(score);
  const language = useLanguage();
  const recheck = new Intl.DateTimeFormat(language, { month: 'long', day: 'numeric' }).format(
    new Date(Date.now() + RECHECK_DAYS * 86_400_000),
  );
  const pick = (n: number) => {
    if (n === score) return;
    at.value = settle(n / MAX, 280);
  };

  return (
    <View style={styles.root}>
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

      <InlineReaction id={reaction.key} text={t(reaction.text)} sub={t('onboarding.react.painRecheck', { date: recheck })} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 24,
  },
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
