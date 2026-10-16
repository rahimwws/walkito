import { BlurView } from 'expo-blur';
import { useEffect, useState } from 'react';
import { Modal, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { todayHealthInputs, useHealthSignals } from '@/entities/health';
import { planReasonLine, todayPlan } from '@/entities/program';
import { accents, fonts, meterColors, palette, type AccentName } from '@/shared/config';
import { useLanguage, useT, type Key, type Language, type Translate } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { FluentIcon, type FluentName } from '@/shared/ui/fluent-icon';
import { PrimaryButton } from '@/shared/ui/primary-button';
import { ReplayMask } from '@/shared/ui/replay-mask';

import { grouped } from '../model/brief';
import { whyRows, type WhyRow, type WhyRowId } from '../model/day-story';
import { decimal } from './day-story-text';

const RADIUS = 36;
const BLUR = 24;
const IN_MS = 320;
const OUT_MS = 220;
const RISE = 40;

export type WhySheetProps = {
  visible: boolean;
  onClose: () => void;
};

/**
 * "Why today looks like this": what the plan was built from, yesterday's
 * figure beside the person's own usual, then what the plan did with it.
 *
 * The answer to "what does the app actually know about me", shown rather than
 * claimed. Read only; nothing here can be changed. Only rows Health supplied
 * are drawn, and with none it says how to connect.
 *
 * Masked from recordings and never tracked beyond being opened: every figure
 * is steps, sleep or heart rate.
 */
export function WhySheet({ visible, onClose }: WhySheetProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const t = useT();
  const language = useLanguage();
  const signals = useHealthSignals();

  const [mounted, setMounted] = useState(false);
  const progress = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      setMounted(true);
      const frame = requestAnimationFrame(() => {
        progress.value = withTiming(1, {
          duration: IN_MS,
          easing: Easing.out(Easing.cubic),
          reduceMotion: ReduceMotion.System,
        });
      });
      return () => cancelAnimationFrame(frame);
    }
    progress.value = withTiming(
      0,
      { duration: OUT_MS, easing: Easing.in(Easing.cubic), reduceMotion: ReduceMotion.System },
      (finished) => {
        if (finished) runOnJS(setMounted)(false);
      },
    );
    return undefined;
  }, [visible, progress]);

  const backdrop = useAnimatedStyle(() => ({ opacity: progress.value }));
  const card = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [{ translateY: (1 - progress.value) * RISE }],
  }));

  if (!mounted) return null;

  const rows = whyRows(signals);
  const today = todayPlan(todayHealthInputs(signals), null);
  const planLine =
    planReasonLine(t, today.reason) ??
    (today.type === 'strength' ? t('home.why.planAsPlanned') : t('home.why.planLightAlready'));
  const android = Platform.OS === 'android';

  return (
    <Modal transparent animationType="none" visible statusBarTranslucent onRequestClose={onClose}>
      <View style={styles.fill}>
        <Animated.View style={[styles.fill, backdrop]} pointerEvents="none">
          <BlurView tint={scheme === 'dark' ? 'dark' : 'light'} intensity={BLUR} style={styles.fill} />
          <View style={[styles.fill, styles.wash]} />
        </Animated.View>
        <Pressable accessibilityRole="button" accessibilityLabel={t('common.close')} style={styles.fill} onPress={onClose} />

        <Animated.View
          style={[styles.dock, { paddingTop: insets.top + 12, paddingBottom: Math.max(insets.bottom, 16) }, card]}
          pointerEvents="box-none">
          <View style={[styles.card, { backgroundColor: colors.card }]}>
            <ReplayMask>
              <Text style={[styles.title, { color: meter.ink }]} accessibilityRole="header">
                {t('home.why.title')}
              </Text>
              <Text style={[styles.sub, { color: meter.caption }]}>
                {rows.length === 0
                  ? android
                    ? t('home.why.emptyAndroid')
                    : t('home.why.emptyIos')
                  : android
                    ? t('home.why.subAndroid')
                    : t('home.why.subIos')}
              </Text>

              {rows.length > 0 && (
                <View style={styles.rows}>
                  {rows.map((row) => (
                    <Row key={row.id} row={row} t={t} language={language} />
                  ))}
                </View>
              )}

              <View style={[styles.plan, { backgroundColor: accents[scheme].violet.track }]}>
                <Text style={[styles.planLabel, { color: meter.label }]}>{t('home.why.planLabel')}</Text>
                <Text style={[styles.planText, { color: meter.ink }]}>{planLine}</Text>
                {signals.onFeetThreshold != null && (
                  <Text style={[styles.pattern, { color: meter.label }]}>
                    {t('home.why.pattern', { limit: decimal(signals.onFeetThreshold, language) })}
                  </Text>
                )}
              </View>
            </ReplayMask>

            <Text style={[styles.private, { color: meter.caption }]}>{t('home.why.private')}</Text>
            <PrimaryButton label={t('common.done')} onPress={onClose} style={styles.cta} />
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

const ROWS: Record<WhyRowId, { icon: FluentName; accent: AccentName; label: Key }> = {
  onFeet: { icon: 'foot', accent: 'teal', label: 'home.why.onFeet' },
  steps: { icon: 'shoe', accent: 'teal', label: 'home.why.steps' },
  distance: { icon: 'run', accent: 'blue', label: 'home.why.distance' },
  sport: { icon: 'strength', accent: 'orange', label: 'home.why.sport' },
  sleep: { icon: 'moon', accent: 'violet', label: 'home.why.sleep' },
  stride: { icon: 'target', accent: 'amber', label: 'home.why.stride' },
  restingHr: { icon: 'heart', accent: 'orange', label: 'home.why.restingHr' },
};

/** A row's figure, worded in its own unit. */
function figure(t: Translate, id: WhyRowId, value: number, language: Language): string {
  switch (id) {
    case 'onFeet':
      return t('home.why.hours', { value: decimal(value, language) });
    case 'steps':
      return grouped(value, language);
    case 'distance':
      return t('home.why.km', { value: decimal(value, language) });
    case 'sport':
      return t('home.why.minutes', { value: Math.round(value) });
    case 'sleep': {
      const total = Math.round(value);
      return t('home.readinessInfo.sleepValue', { hours: Math.floor(total / 60), minutes: total % 60 });
    }
    case 'stride':
      return t('home.why.cm', { value: Math.round(value) });
    case 'restingHr':
      return t('home.why.bpmDelta', { value: `${value > 0 ? '+' : ''}${Math.round(value)}` });
  }
}

function Row({ row, t, language }: { row: WhyRow; t: Translate; language: Language }) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const spec = ROWS[row.id];
  const value = figure(t, row.id, row.value, language);
  const usual = row.usual == null ? null : figure(t, row.id, row.usual, language);
  return (
    <View
      accessible
      accessibilityLabel={usual == null ? `${t(spec.label)}: ${value}` : `${t(spec.label)}: ${value}, ${t('home.why.usual', { value: usual })}`}
      style={[styles.row, { borderColor: meter.divider }]}>
      <View style={[styles.icon, { backgroundColor: accents[scheme][spec.accent].track }]}>
        <FluentIcon name={spec.icon} size={18} />
      </View>
      <Text style={[styles.rowLabel, { color: meter.ink }]} numberOfLines={1}>
        {t(spec.label)}
      </Text>
      <View style={styles.rowRight}>
        <Text style={[styles.rowValue, { color: meter.ink }]}>{value}</Text>
        {usual != null && (
          <Text style={[styles.rowUsual, { color: meter.caption }]}>{t('home.why.usual', { value: usual })}</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fill: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  wash: { backgroundColor: 'rgba(0,0,0,0.18)' },
  dock: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  card: {
    borderRadius: RADIUS,
    borderCurve: 'continuous',
    paddingTop: 22,
    paddingBottom: 14,
    paddingHorizontal: 20,
  },
  title: fonts.heavy(22, -0.5),
  sub: { ...fonts.medium(14), lineHeight: 19, marginTop: 4 },
  rows: { marginTop: 12 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 9,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  icon: { width: 30, height: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center' },
  rowLabel: { ...fonts.semibold(15), flex: 1 },
  rowRight: { alignItems: 'flex-end' },
  rowValue: fonts.bold(15),
  rowUsual: fonts.medium(12),
  plan: { borderRadius: 18, borderCurve: 'continuous', padding: 14, marginTop: 14 },
  planLabel: fonts.semibold(12),
  planText: { ...fonts.semibold(15), lineHeight: 20, marginTop: 3 },
  pattern: { ...fonts.medium(13), lineHeight: 18, marginTop: 8 },
  private: { ...fonts.medium(12), textAlign: 'center', marginTop: 14 },
  cta: { marginTop: 10 },
});
