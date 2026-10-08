import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useEffect, useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeIn, FadeInDown, ReduceMotion } from 'react-native-reanimated';

import { ExercisePreview } from '@/widgets/session-player';
import { PRIMARY, accents, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

import { BALANCE_CAP_SECONDS } from '../model/journey';
import type { ResolvedOption } from '../model/steps';
import { ChoiceStep } from './choice-step';
import { LottieMascot } from './lottie-mascot';

/**
 * The 30-second check, behind the `onboarding_mini_test` flag.
 *
 * GOWOD's lesson: somebody who has tested themselves with their own hands has
 * invested in the result, and the plan that follows is visibly theirs. Two
 * checks only — the big toe lift, which tells a flexible flat foot from a
 * rigid one, and, on a quiet morning, standing on one leg.
 */

export function TestIntro({ withBalance, onSkip }: { withBalance: boolean; onSkip: () => void }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const rows = [t('exercises.bigToeLift.title'), ...(withBalance ? [t('onboarding.test.introBalance')] : [])];

  return (
    <View style={styles.fill}>
      <View style={styles.center}>
        <LottieMascot size={170} />
        <Text style={[styles.title, styles.centerText, { color: colors.foreground }]}>
          {t('onboarding.test.introTitle')}
        </Text>
        <Text style={[styles.body, styles.centerText, { color: meter.caption }]}>{t('onboarding.test.introBody')}</Text>
        <View style={[styles.card, { backgroundColor: colors.card }]}>
          {rows.map((row, i) => (
            <View key={row} style={styles.listRow}>
              <View style={[styles.badge, { backgroundColor: accents[scheme].violet.track }]}>
                <Text style={[styles.badgeText, { color: accents[scheme].violet.fill }]}>{i + 1}</Text>
              </View>
              <Text style={[styles.listText, { color: colors.foreground }]}>{row}</Text>
            </View>
          ))}
        </View>
      </View>
      <Pressable accessibilityRole="button" onPress={onSkip} hitSlop={10} style={styles.skip}>
        <Text style={[styles.skipText, { color: meter.caption }]}>{t('onboarding.test.notNow')}</Text>
      </Pressable>
    </View>
  );
}

export function TestToe({
  total,
  options,
  answer,
  onAnswer,
}: {
  total: number;
  options: readonly ResolvedOption[];
  answer: string | null;
  onAnswer: (next: string) => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();

  return (
    <ScrollView style={styles.fill} contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
      <ExercisePreview exerciseId="big_toe_lift" style={styles.clip} expandable />
      <Text style={[styles.meta, { color: meter.caption }]}>{t('onboarding.test.meta', { n: 1, total })}</Text>
      <Text style={[styles.title, { color: colors.foreground }]}>{t('exercises.bigToeLift.title')}</Text>
      <View style={styles.steps}>
        {[t('onboarding.test.toeStep1'), t('onboarding.test.toeStep2')].map((line) => (
          <View key={line} style={styles.stepRow}>
            <HugeiconsIcon icon={ArrowRight01Icon} size={18} color={PRIMARY} strokeWidth={2.2} />
            <Text style={[styles.stepText, { color: colors.foreground }]}>{line}</Text>
          </View>
        ))}
      </View>
      <Text style={[styles.question, { color: colors.foreground }]}>{t('onboarding.test.toeQuestion')}</Text>
      <ChoiceStep options={options} selected={answer != null ? [answer] : []} multi={false} onChange={(next) => onAnswer(next[0])} />
    </ScrollView>
  );
}

type Side = 'left' | 'right';

/**
 * One leg, then the other. A tap starts the count, a tap stops it, and the
 * count stops itself at the cap — past thirty seconds it is no longer a test.
 */
export function TestBalance({
  total,
  left,
  right,
  onResult,
}: {
  total: number;
  left: number | null;
  right: number | null;
  onResult: (side: Side, seconds: number) => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const [running, setRunning] = useState<Side | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const started = useRef(0);

  useEffect(() => {
    if (running == null) return;
    started.current = Date.now();
    setElapsed(0);
    const timer = setInterval(() => {
      const seconds = Math.min((Date.now() - started.current) / 1000, BALANCE_CAP_SECONDS);
      setElapsed(seconds);
      if (seconds >= BALANCE_CAP_SECONDS) {
        clearInterval(timer);
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        onResult(running, BALANCE_CAP_SECONDS);
        setRunning(null);
      }
    }, 100);
    return () => clearInterval(timer);
    // `onResult` is the page's setter; the run is keyed on the side alone.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  const stop = () => {
    if (running == null) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    onResult(running, Math.round(Math.min((Date.now() - started.current) / 1000, BALANCE_CAP_SECONDS)));
    setRunning(null);
  };

  const start = (side: Side) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setRunning(side);
  };

  const next: Side | null = left == null ? 'left' : right == null ? 'right' : null;

  return (
    <ScrollView style={styles.fill} contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
      <ExercisePreview exerciseId="single_leg_hold" style={styles.clip} expandable />
      <Text style={[styles.meta, { color: meter.caption }]}>{t('onboarding.test.meta', { n: 2, total })}</Text>
      <Text style={[styles.title, { color: colors.foreground }]}>{t('exercises.singleLegHold.title')}</Text>
      <Text style={[styles.body, { color: meter.caption }]}>{t('onboarding.test.balanceBody')}</Text>

      <View style={styles.sides}>
        {(['left', 'right'] as const).map((side) => {
          const value = side === 'left' ? left : right;
          const live = running === side;
          return (
            <View key={side} style={[styles.side, { backgroundColor: colors.card }, live && { borderColor: PRIMARY }]}>
              <Text style={[styles.sideLabel, { color: meter.caption }]}>{t(side === 'left' ? 'onboarding.test.left' : 'onboarding.test.right')}</Text>
              <Text style={[styles.sideValue, { color: colors.foreground }]}>
                {live
                  ? t('onboarding.test.seconds', { count: Math.floor(elapsed) })
                  : value != null
                    ? t('onboarding.test.seconds', { count: value })
                    : t('widget.goalUnknown')}
              </Text>
            </View>
          );
        })}
      </View>

      {running != null ? (
        <Pressable
          accessibilityRole="button"
          onPress={stop}
          style={({ pressed }) => [styles.timerButton, { backgroundColor: PRIMARY }, pressed && { opacity: 0.8 }]}>
          <Text style={styles.timerLabel}>{t('onboarding.test.stop')}</Text>
        </Pressable>
      ) : next != null ? (
        <Pressable
          accessibilityRole="button"
          onPress={() => start(next)}
          style={({ pressed }) => [styles.timerButton, { backgroundColor: colors.card }, pressed && { opacity: 0.8 }]}>
          <Text style={[styles.timerLabel, { color: colors.foreground }]}>
            {t(next === 'left' ? 'onboarding.test.startLeft' : 'onboarding.test.startRight')}
          </Text>
        </Pressable>
      ) : null}
    </ScrollView>
  );
}

export function TestResult({
  arch,
  left,
  right,
}: {
  arch: 'yes' | 'no' | 'unsure' | null;
  left: number | null;
  right: number | null;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const archLine =
    arch === 'yes' ? t('onboarding.test.archYes') : arch === 'no' ? t('onboarding.test.archNo') : t('onboarding.test.archUnsure');

  return (
    <ScrollView style={styles.fill} contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
      <Animated.View entering={FadeInDown.duration(380).reduceMotion(ReduceMotion.System)} style={styles.centerArt}>
        <LottieMascot size={150} />
      </Animated.View>
      <Text style={[styles.title, styles.centerText, { color: colors.foreground }]}>{t('onboarding.test.resultTitle')}</Text>
      <Animated.View
        entering={FadeIn.delay(200).duration(300).reduceMotion(ReduceMotion.System)}
        style={[styles.card, { backgroundColor: colors.card }]}>
        <Text style={[styles.cardHead, { color: accents[scheme].violet.fill }]}>{t('exercises.bigToeLift.title')}</Text>
        <Text style={[styles.cardText, { color: colors.foreground }]}>{archLine}</Text>
      </Animated.View>
      {left != null && right != null && (
        <Animated.View
          entering={FadeIn.delay(360).duration(300).reduceMotion(ReduceMotion.System)}
          style={[styles.card, { backgroundColor: colors.card }]}>
          <Text style={[styles.cardHead, { color: accents[scheme].violet.fill }]}>{t('onboarding.test.balanceHead')}</Text>
          <View style={styles.sides}>
            {([
              ['onboarding.test.left', left],
              ['onboarding.test.right', right],
            ] as const).map(([label, value]) => (
              <View key={label} style={styles.resultSide}>
                <Text style={[styles.sideLabel, { color: meter.caption }]}>{t(label)}</Text>
                <Text style={[styles.sideValue, { color: colors.foreground }]}>{t('onboarding.test.seconds', { count: value })}</Text>
              </View>
            ))}
          </View>
        </Animated.View>
      )}
      <Text style={[styles.body, styles.centerText, { color: meter.caption }]}>{t('onboarding.test.resultFoot')}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fill: { flex: 1 },
  scroll: { gap: 12, paddingBottom: 12 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 },
  centerArt: { alignItems: 'center' },
  centerText: { textAlign: 'center' },
  title: { ...fonts.heavy(26, -0.6), lineHeight: 31 },
  body: { ...fonts.regular(16), lineHeight: 22 },
  meta: { ...fonts.semibold(13), marginTop: 4 },
  clip: { aspectRatio: 4 / 3 },
  card: { alignSelf: 'stretch', borderRadius: 20, borderCurve: 'continuous', padding: 16, gap: 8 },
  cardHead: fonts.heavy(13, 0.3),
  cardText: { ...fonts.medium(16), lineHeight: 22 },
  listRow: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 4 },
  badge: { width: 28, height: 28, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  badgeText: fonts.heavy(14),
  listText: fonts.semibold(16),
  skip: { alignSelf: 'center', paddingVertical: 10 },
  skipText: fonts.semibold(15),
  steps: { gap: 8 },
  stepRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 8 },
  stepText: { ...fonts.medium(15), lineHeight: 21, flex: 1 },
  question: { ...fonts.bold(18), lineHeight: 23, marginTop: 8 },
  sides: { flexDirection: 'row', gap: 10 },
  side: { flex: 1, borderRadius: 18, borderCurve: 'continuous', padding: 14, gap: 4, borderWidth: 2, borderColor: 'transparent' },
  resultSide: { flex: 1, gap: 2 },
  sideLabel: fonts.semibold(13),
  sideValue: { ...fonts.heavy(28, -0.6), fontVariant: ['tabular-nums'] },
  timerButton: { height: 58, borderRadius: 29, alignItems: 'center', justifyContent: 'center', marginTop: 4 },
  timerLabel: { ...fonts.bold(17), color: '#FFFFFF' },
});
