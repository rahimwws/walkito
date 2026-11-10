import { StyleSheet, Text, View } from 'react-native';

import type { Plan } from '@/entities/purchase';
import { freeTrialOf, TRIAL_REMINDER_DAYS } from '@/features/home-offer';
import { fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';

import { PLUS, SHEET } from './plans-theme';

/**
 * How many days the plan's free trial runs, when it is one the paywall tells
 * the story of: the store says this customer gets it, it is counted in days
 * or weeks, and it is long enough for the reminder to come before it ends.
 * Null otherwise, and then nothing on the paywall promises a free week.
 */
export function trialDays(plan: Plan | null): number | null {
  const trial = plan == null ? null : freeTrialOf(plan);
  if (trial == null || trial.unit === 'month') return null;
  const days = trial.unit === 'week' ? trial.count * 7 : trial.count;
  return days > TRIAL_REMINDER_DAYS ? days : null;
}

/**
 * How the free week runs, inside the chosen annual's card: today, the day the
 * reminder comes, the day the first charge does. Drawn only when the store
 * says this customer gets a free trial on the plan (`trialDays`), so it never
 * promises a week Apple will not give. The reminder it names is real: a trial
 * bought on the paywall lays it (`remindBeforeTrialEnds`).
 *
 * It used to sit under the card, past the first screenful and half behind the
 * floating button. The first twenty people a Meta ad brought to the plans saw
 * the year's price and a button, and left within seconds without starting
 * the trial.
 */
export function TrialTimeline({ plan }: { plan: Plan | null }) {
  const t = useT();
  const days = trialDays(plan);
  if (plan == null || days == null) return null;

  const rows = [
    { title: t('offer.trial.todayTitle'), text: t('offer.trial.todayText') },
    { title: t('offer.trial.dayTitle', { day: days - TRIAL_REMINDER_DAYS }), text: t('offer.trial.remindText') },
    { title: t('offer.trial.dayTitle', { day: days }), text: t('offer.trial.chargeText', { price: plan.priceString }) },
  ];

  return (
    <View style={[styles.wrap, { borderTopColor: PLUS.washEdge }]}>
      {rows.map((row, i) => (
        <View key={row.title} style={styles.row}>
          <View style={styles.rail}>
            <View style={[styles.dot, { backgroundColor: i === 0 ? PLUS.accent : PLUS.washEdge }]} />
            {i < rows.length - 1 && <View style={[styles.line, { backgroundColor: PLUS.washEdge }]} />}
          </View>
          <View style={[styles.body, i === rows.length - 1 && styles.last]}>
            <Text style={[styles.title, { color: SHEET.ink }]} maxFontSizeMultiplier={1.4}>
              {row.title}
            </Text>
            <Text style={[styles.text, { color: SHEET.label }]} maxFontSizeMultiplier={1.4}>
              {row.text}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { borderTopWidth: StyleSheet.hairlineWidth, paddingTop: 14, marginTop: 4 },
  row: { flexDirection: 'row', gap: 12 },
  rail: { width: 14, alignItems: 'center' },
  dot: { width: 14, height: 14, borderRadius: 7, marginTop: 3 },
  line: { width: 2, flex: 1, minHeight: 14, marginVertical: 2 },
  body: { flex: 1, paddingBottom: 10 },
  last: { paddingBottom: 0 },
  title: fonts.bold(16),
  text: { ...fonts.medium(15), lineHeight: 19 },
});
