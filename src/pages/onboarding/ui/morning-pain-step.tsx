import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import { PRIMARY, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

import { painBandReaction } from '../model/journey';
import { InlineReaction } from './inline-reaction';

const MAX = 10;
const KNOB = 32;
const PAD = KNOB / 2;

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
      at.value = withSpring(Math.round(at.value * MAX) / MAX, { damping: 18, stiffness: 220 });
    });

  const knob = useAnimatedStyle(() => ({ transform: [{ translateX: at.value * span }] }));
  const fill = useAnimatedStyle(() => ({ width: PAD + at.value * span }));

  const nudge = (by: number) => {
    const next = Math.min(Math.max(score + by, 0), MAX);
    if (next !== score) at.value = next / MAX;
  };

  const reaction = painBandReaction(score);

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

      <View style={styles.ends}>
        <View>
          <Text style={[styles.endNumber, { color: colors.foreground }]}>0</Text>
          <Text style={[styles.endLabel, { color: meter.caption }]}>{t('onboarding.morning.min')}</Text>
        </View>
        <View style={styles.endRight}>
          <Text style={[styles.endNumber, { color: colors.foreground }]}>{MAX}</Text>
          <Text style={[styles.endLabel, { color: meter.caption }]}>{t('onboarding.morning.max')}</Text>
        </View>
      </View>

      <InlineReaction id={reaction.key} text={t(reaction.text)} />
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
  ends: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  endRight: { alignItems: 'flex-end' },
  endNumber: fonts.bold(16),
  endLabel: fonts.medium(14),
});
