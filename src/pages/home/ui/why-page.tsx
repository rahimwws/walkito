import { useRouter } from 'expo-router';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { todayHealthInputs, useHealthSignals } from '@/entities/health';
import { planReasonLine, todayPlan } from '@/entities/program';
import { accents, colors, fonts, space, type AccentName } from '@/shared/config';
import { useLanguage, useT, type Key, type Language, type Translate } from '@/shared/lib/i18n';
import { Button } from '@/shared/ui/button';
import { FluentIcon, type FluentName } from '@/shared/ui/fluent-icon';
import { ReplayMask } from '@/shared/ui/replay-mask';

import { grouped } from '../model/brief';
import { whyRows, type WhyRow, type WhyRowId } from '../model/day-story';
import { decimal } from './day-story-text';

/**
 * "Why today looks like this", a form sheet over Today: what the plan was
 * built from, yesterday's figure beside the person's own usual, then what the
 * plan did with it.
 *
 * The answer to "what does the app actually know about me", shown rather than
 * claimed. Read only. Only rows Health supplied are drawn, and with none it
 * says how to connect. Masked from recordings: every figure is steps, sleep or
 * heart rate.
 */
export function WhyPage() {
  const t = useT();
  const language = useLanguage();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const signals = useHealthSignals();

  const rows = whyRows(signals);
  const today = todayPlan(todayHealthInputs(signals), null);
  const planLine =
    planReasonLine(t, today.reason) ??
    (today.type === 'strength' ? t('home.why.planAsPlanned') : t('home.why.planLightAlready'));
  const android = Platform.OS === 'android';

  return (
    <ScrollView
      style={styles.sheet}
      contentContainerStyle={[styles.content, { paddingBottom: Math.max(insets.bottom, space.screen) }]}>
      <ReplayMask>
        <Text style={styles.title} accessibilityRole="header">
          {t('home.why.title')}
        </Text>
        <Text style={styles.sub}>
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

        <View style={styles.plan}>
          <Text style={styles.planLabel}>{t('home.why.planLabel')}</Text>
          <Text style={styles.planText}>{planLine}</Text>
          {signals.onFeetThreshold != null && (
            <Text style={styles.pattern}>
              {t('home.why.pattern', { limit: decimal(signals.onFeetThreshold, language) })}
            </Text>
          )}
        </View>
      </ReplayMask>

      <Text style={styles.private}>{t('home.why.private')}</Text>
      <Button label={t('common.done')} onPress={() => router.back()} />
    </ScrollView>
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
  const spec = ROWS[row.id];
  const value = figure(t, row.id, row.value, language);
  const usual = row.usual == null ? null : figure(t, row.id, row.usual, language);
  return (
    <View
      accessible
      accessibilityLabel={usual == null ? `${t(spec.label)}: ${value}` : `${t(spec.label)}: ${value}, ${t('home.why.usual', { value: usual })}`}
      style={styles.row}>
      <View style={[styles.icon, { backgroundColor: accents.light[spec.accent].track }]}>
        <FluentIcon name={spec.icon} size={20} />
      </View>
      <Text style={styles.rowLabel}>{t(spec.label)}</Text>
      <View style={styles.rowRight}>
        <Text style={styles.rowValue}>{value}</Text>
        {usual != null && <Text style={styles.rowUsual}>{t('home.why.usual', { value: usual })}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sheet: { flex: 1, backgroundColor: colors.surface },
  content: { padding: space.screen, paddingTop: 28, gap: space.gap },
  title: { ...fonts.bold(28, -0.4), color: colors.text },
  sub: { ...fonts.regular(19), color: colors.text2, marginTop: 6 },
  rows: { marginTop: 16 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 12,
    paddingVertical: 12,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.separator,
  },
  icon: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  rowLabel: { ...fonts.medium(17), color: colors.text, flex: 1, minWidth: 120 },
  rowRight: { alignItems: 'flex-end' },
  rowValue: { ...fonts.semibold(17), color: colors.text },
  rowUsual: { ...fonts.regular(17), color: colors.text2 },
  plan: { borderRadius: 16, borderCurve: 'continuous', padding: 16, marginTop: 16, backgroundColor: colors.accentSoft },
  planLabel: { ...fonts.semibold(17), color: colors.accent },
  planText: { ...fonts.regular(19), color: colors.text, marginTop: 4 },
  pattern: { ...fonts.regular(17), color: colors.text2, marginTop: 8 },
  private: { ...fonts.regular(17), color: colors.text2, textAlign: 'center', marginTop: 8 },
});
