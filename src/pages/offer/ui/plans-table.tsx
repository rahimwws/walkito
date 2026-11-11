import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { StyleSheet, Text, View } from 'react-native';

import { fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';

import { usePlansTheme } from './plans-theme';

/**
 * "What you get": a plain list of what the plan includes, in her words.
 *
 * Every row is something the app really does, and no row promises a result.
 * Not a table with a "Plus" column: one column of ticks under a tier name
 * reads as a free-vs-paid comparison with the free column missing, and the
 * paywall is the only way into the app, so there is no other tier to compare.
 */
const ROWS = ['offer.plans.rowSessions', 'offer.plans.rowPlan', 'offer.plans.rowTests', 'offer.plans.rowMorning'] as const;

const MARK = 22;

export function PlansTable() {
  const t = useT();
  const { PLUS, SHEET } = usePlansTheme();
  return (
    <View style={styles.list}>
      <Text style={[styles.heading, { color: SHEET.ink }]} accessibilityRole="header" maxFontSizeMultiplier={1.4}>
        {t('offer.plans.tableTitle')}
      </Text>
      {ROWS.map((label) => (
        <View key={label} accessible style={styles.row}>
          <View style={[styles.mark, { backgroundColor: PLUS.accent }]}>
            <HugeiconsIcon icon={Tick02Icon} size={14} color={PLUS.onAccent} strokeWidth={3} />
          </View>
          <Text style={[styles.feature, { color: SHEET.label }]} maxFontSizeMultiplier={1.4}>
            {t(label)}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: { gap: 12, paddingBottom: 6 },
  heading: { ...fonts.heavy(21, -0.4), marginBottom: 2 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  feature: { flex: 1, ...fonts.semibold(16), lineHeight: 21 },
  mark: {
    width: MARK,
    height: MARK,
    borderRadius: MARK / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
