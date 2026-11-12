import * as Haptics from 'expo-haptics';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { PRIMARY, accents, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { TickGauge } from '@/shared/ui/tick-gauge';

import { useAnkleReading } from '../lib/use-ankle-reading';

export type AnkleSide = 'left' | 'right';

/** The arc: a half circle of ticks, filling from the left as the shin tips. */
const RADIUS = 118;
const TICKS = 41;
const TICK_LENGTH = 18;
const TICK_WIDTH = 4;
const GAUGE = RADIUS * 2 + TICK_WIDTH;

/** Time to get the phone from the hand's view to the shin. */
const READY_SECONDS = 3;
/** A reading that has not settled by now is let go; she can start it again. */
const GIVE_UP_MS = 25_000;

/** What a simulator plays in development, where there is no sensor. */
const DEMO: Record<AnkleSide, number> = { left: 31, right: 38 };

/**
 * How to sit for it, in three numbered lines. The same three wherever the
 * ankles are measured.
 */
export function AnkleSteps() {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const tone = accents[scheme].violet;
  const t = useT();
  return (
    <View style={styles.steps}>
      {[t('footCheck.ankle.step1'), t('footCheck.ankle.step2'), t('footCheck.ankle.step3')].map((step, i) => (
        <View key={step} style={styles.step}>
          <View style={[styles.stepBadge, { backgroundColor: tone.track }]}>
            <Text style={[styles.stepNumber, { color: tone.fill }]}>{i + 1}</Text>
          </View>
          <Text style={[styles.stepText, { color: colors.foreground }]}>{step}</Text>
        </View>
      ))}
    </View>
  );
}

/**
 * Measuring the ankle bend, one side then the other.
 *
 * One figure in one arc and one line of what to do next, because the screen
 * is read from arm's length, on a shin, by somebody who is also holding their
 * heel down. The phone says the rest with a buzz: a tick a second while it is
 * carried to the shin, and one firm one when the angle is taken.
 */
export function AnkleMeasure({
  left,
  right,
  onResult,
  onReset,
}: {
  left: number | null;
  right: number | null;
  onResult: (side: AnkleSide, degrees: number) => void;
  /** "Measure again": both sides are forgotten. */
  onReset: () => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();

  const next: AnkleSide | null = left == null ? 'left' : right == null ? 'right' : null;
  const [phase, setPhase] = useState<'idle' | 'ready' | 'measuring'>('idle');
  const [count, setCount] = useState(READY_SECONDS);
  const side = next ?? 'right';

  const reading = useAnkleReading(
    phase === 'measuring',
    (degrees) => {
      void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      setPhase('idle');
      onResult(side, degrees);
    },
    DEMO[side],
  );

  useEffect(() => {
    if (phase !== 'ready') return undefined;
    setCount(READY_SECONDS);
    let remaining = READY_SECONDS;
    const timer = setInterval(() => {
      remaining -= 1;
      if (remaining <= 0) {
        clearInterval(timer);
        void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        setPhase('measuring');
        return;
      }
      void Haptics.selectionAsync();
      setCount(remaining);
    }, 1000);
    return () => clearInterval(timer);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'measuring') return undefined;
    const timer = setTimeout(() => setPhase('idle'), GIVE_UP_MS);
    return () => clearTimeout(timer);
  }, [phase]);

  // What the arc holds while nothing is being measured: the side just taken.
  const shown = phase === 'measuring' ? reading.degrees : next === 'right' ? left : next == null ? right : null;
  const line =
    phase === 'ready'
      ? t('footCheck.ankle.ready')
      : phase === 'measuring'
        ? t(reading.settling ? 'footCheck.ankle.hold' : 'footCheck.ankle.slide')
        : shown != null
          ? t('footCheck.ankle.measured')
          : t('footCheck.ankle.buzz');

  return (
    <View style={styles.block}>
      <View style={styles.gaugeBox}>
        <TickGauge
          tickCount={TICKS}
          startAngle={180}
          sweep={180}
          outerRadius={RADIUS}
          tickLength={TICK_LENGTH}
          tickWidth={TICK_WIDTH}
          progress={reading.fill}
          fill={PRIMARY}
          track={meter.track}
        />
        <View style={styles.figure} pointerEvents="none">
          <Text
            accessibilityLiveRegion="polite"
            style={[styles.value, { color: phase === 'ready' ? meter.caption : colors.foreground }]}
            maxFontSizeMultiplier={1.2}>
            {phase === 'ready' ? String(count) : t('footCheck.degrees', { value: shown ?? 0 })}
          </Text>
          <Text style={[styles.line, { color: meter.label }]} numberOfLines={2} maxFontSizeMultiplier={1.3}>
            {line}
          </Text>
        </View>
      </View>

      <View style={styles.sides}>
        {(['left', 'right'] as const).map((which) => {
          const value = which === 'left' ? left : right;
          const live = phase !== 'idle' && side === which;
          return (
            <View
              key={which}
              style={[styles.side, { backgroundColor: colors.card }, live && { borderColor: PRIMARY }]}
              accessible
              accessibilityLabel={`${t(which === 'left' ? 'onboarding.test.left' : 'onboarding.test.right')} ${
                value != null ? t('footCheck.degrees', { value }) : ''
              }`}>
              <Text style={[styles.sideLabel, { color: meter.caption }]}>
                {t(which === 'left' ? 'onboarding.test.left' : 'onboarding.test.right')}
              </Text>
              <Text style={[styles.sideValue, { color: value != null ? colors.foreground : meter.unit }]}>
                {value != null ? t('footCheck.degrees', { value }) : t('widget.goalUnknown')}
              </Text>
            </View>
          );
        })}
      </View>

      {phase === 'idle' && next != null && (
        <Pressable
          accessibilityRole="button"
          onPress={() => {
            void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            setPhase('ready');
          }}
          style={({ pressed }) => [styles.button, { backgroundColor: PRIMARY }, pressed && styles.pressed]}>
          <Text style={styles.buttonLabel} maxFontSizeMultiplier={1.3}>
            {t(next === 'left' ? 'footCheck.ankle.startLeft' : 'footCheck.ankle.startRight')}
          </Text>
        </Pressable>
      )}
      {phase === 'idle' && next == null && (
        <Pressable accessibilityRole="button" hitSlop={10} onPress={onReset} style={styles.again}>
          <Text style={[styles.againLabel, { color: meter.label }]}>{t('footCheck.ankle.again')}</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  steps: { gap: 10 },
  step: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  stepBadge: { width: 28, height: 28, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  stepNumber: fonts.heavy(14),
  stepText: { ...fonts.medium(16), lineHeight: 22, flex: 1, paddingTop: 3 },
  block: { gap: 14, alignItems: 'stretch' },
  // The arc is the top half of the gauge's square: the bottom half is cut off
  // and the figure stands on the cut.
  gaugeBox: { alignSelf: 'center', width: GAUGE, height: RADIUS + 34, overflow: 'hidden' },
  figure: { position: 'absolute', left: 0, right: 0, bottom: 0, alignItems: 'center', gap: 2 },
  value: { ...fonts.heavy(64, -2), lineHeight: 68, fontVariant: ['tabular-nums'] },
  line: { ...fonts.semibold(17), lineHeight: 22, textAlign: 'center', paddingHorizontal: 34 },
  sides: { flexDirection: 'row', gap: 10 },
  side: { flex: 1, borderRadius: 18, borderCurve: 'continuous', padding: 14, gap: 4, borderWidth: 2, borderColor: 'transparent' },
  sideLabel: fonts.semibold(13),
  sideValue: { ...fonts.heavy(28, -0.6), fontVariant: ['tabular-nums'] },
  button: { height: 58, borderRadius: 29, alignItems: 'center', justifyContent: 'center' },
  buttonLabel: { ...fonts.bold(17), color: '#FFFFFF' },
  pressed: { opacity: 0.8 },
  again: { alignSelf: 'center', paddingVertical: 8 },
  againLabel: fonts.semibold(15),
});
