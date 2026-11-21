import { useRouter } from 'expo-router';
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { todayHealthInputs, useHealthSignals } from '@/entities/health';
import { planReasonLine, todayPlan } from '@/entities/program';
import { colors, fonts, space, target } from '@/shared/config';
import { useLanguage, useT, type Key, type Language, type Translate } from '@/shared/lib/i18n';
import { ReplayMask } from '@/shared/ui/replay-mask';

import { whyRows, type WhyRow, type WhyRowId } from '../model/why-rows';

/**
 * "Why today looks like this", a form sheet over Today: what the plan was
 * built from (yesterday beside her own usual), then what the plan did with
 * it. Read only. Only rows Health supplied are drawn; with none it says how
 * to connect. Masked from recordings: every figure is steps, sleep or heart
 * rate.
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
        <Text style={styles.body}>
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

        <Text style={styles.label}>{t('home.why.planLabel')}</Text>
        <Text style={styles.plan}>{planLine}</Text>
        {signals.onFeetThreshold != null && (
          <Text style={styles.body}>{t('home.why.pattern', { limit: decimal(signals.onFeetThreshold, language) })}</Text>
        )}
      </ReplayMask>

      <Text style={styles.private}>{t('home.why.private')}</Text>
      <Pressable
        accessibilityRole="button"
        onPress={() => router.back()}
        style={({ pressed }) => [styles.done, pressed && styles.pressed]}>
        <Text style={styles.doneText}>{t('common.done')}</Text>
      </Pressable>
    </ScrollView>
  );
}

const LABELS: Record<WhyRowId, Key> = {
  onFeet: 'home.why.onFeet',
  steps: 'home.why.steps',
  distance: 'home.why.distance',
  sport: 'home.why.sport',
  sleep: 'home.why.sleep',
  stride: 'home.why.stride',
  restingHr: 'home.why.restingHr',
};

/** One decimal, with the language's own separator. */
function decimal(value: number, language: Language): string {
  const rounded = Math.round(value * 10) / 10;
  const text = Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
  return language === 'en' ? text : text.replace('.', ',');
}

/** A row's figure, worded in its own unit. */
function figure(t: Translate, id: WhyRowId, value: number, language: Language): string {
  switch (id) {
    case 'onFeet':
      return t('home.why.hours', { value: decimal(value, language) });
    case 'steps':
      return new Intl.NumberFormat(language).format(Math.round(value));
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
  const value = figure(t, row.id, row.value, language);
  const usual = row.usual == null ? null : t('home.why.usual', { value: figure(t, row.id, row.usual, language) });
  return (
    <View accessible accessibilityLabel={[t(LABELS[row.id]), value, usual].filter(Boolean).join(', ')} style={styles.row}>
      <Text style={styles.rowLabel}>{t(LABELS[row.id])}</Text>
      <View style={styles.rowRight}>
        <Text style={styles.rowValue}>{value}</Text>
        {usual != null && <Text style={styles.rowUsual}>{usual}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sheet: { flex: 1, backgroundColor: colors.surface },
  content: { padding: space.screen, paddingTop: 32, gap: space.gap },
  title: { ...fonts.bold(34, -0.6), color: colors.text },
  body: { ...fonts.regular(19), color: colors.text2, marginTop: 8 },
  rows: { marginTop: 20, marginBottom: 8 },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 14,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.separator,
  },
  rowLabel: { ...fonts.regular(19), color: colors.text, flex: 1, minWidth: 140 },
  rowRight: { alignItems: 'flex-end' },
  rowValue: { ...fonts.semibold(19), color: colors.text },
  rowUsual: { ...fonts.regular(17), color: colors.text2 },
  label: { ...fonts.medium(17), color: colors.text2, marginTop: 24 },
  plan: { ...fonts.semibold(19), color: colors.text, marginTop: 4 },
  private: { ...fonts.regular(17), color: colors.text2, marginTop: 24 },
  done: {
    minHeight: target.primary,
    borderRadius: 999,
    backgroundColor: colors.ink,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  doneText: { ...fonts.semibold(19), color: colors.onInk },
  pressed: { opacity: 0.7 },
});
