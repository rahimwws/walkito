import { StyleSheet, Text, View } from 'react-native';

import type { Plan } from '@/entities/purchase';
import { freeTrialOf, TRIAL_REMINDER_DAYS } from '@/features/home-offer';
import { fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';

import { PLUS, SHEET } from './plans-theme';

/**
 * How the free week runs, under the chosen annual: today, the day the
 * reminder comes, the day the first charge does. Drawn only when the store
 * says this customer gets a free trial on the plan, so it never promises a
 * week Apple will not give. The reminder it names is real: a trial bought on
 * the paywall lays it (`remindBeforeTrialEnds`).
 */
export function TrialTimeline({ plan }: { plan: Plan | null }) {
  const t = useT();
  const trial = plan == null ? null : freeTrialOf(plan);
  if (plan == null || trial == null || trial.unit === 'month') return null;
  const days = trial.unit === 'week' ? trial.count * 7 : trial.count;
  if (days <= TRIAL_REMINDER_DAYS) return null;

  const rows = [
    { title: t('offer.trial.todayTitle'), text: t('offer.trial.todayText') },
    { title: t('offer.trial.dayTitle', { day: days - TRIAL_REMINDER_DAYS }), text: t('offer.trial.remindText') },
    { title: t('offer.trial.dayTitle', { day: days }), text: t('offer.trial.chargeText', { price: plan.priceString }) },
  ];

  return (
    <View style={styles.wrap}>
      {rows.map((row, i) => (
        <View key={row.title} style={styles.row}>
          <View style={styles.rail}>
            <View style={[styles.dot, { backgroundColor: i === 0 ? PLUS.accent : PLUS.washEdge }]} />
            {i < rows.length - 1 && <View style={[styles.line, { backgroundColor: PLUS.washEdge }]} />}
          </View>
          <View style={styles.body}>
            <Text style={[styles.title, { color: SHEET.ink }]} maxFontSizeMultiplier={1.4}>
              {row.title}
            </Text>
            <Text style={[styles.text, { color: SHEET.label }]} maxFontSizeMultiplier={1.4}>
              {row.text}
            </Text>
          </View>
        </View>
      ))}
      <Text style={[styles.promise, { color: SHEET.caption }]} maxFontSizeMultiplier={1.4}>
        {t('homeOffer.trial.reminder', { count: TRIAL_REMINDER_DAYS })}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { paddingHorizontal: 4 },
  row: { flexDirection: 'row', gap: 12 },
  rail: { width: 14, alignItems: 'center' },
  dot: { width: 14, height: 14, borderRadius: 7, marginTop: 3 },
  line: { width: 2, flex: 1, minHeight: 16, marginVertical: 2 },
  body: { flex: 1, paddingBottom: 12 },
  title: fonts.bold(16),
  text: fonts.medium(15),
  promise: { ...fonts.medium(14), textAlign: 'center', marginTop: 2 },
});
