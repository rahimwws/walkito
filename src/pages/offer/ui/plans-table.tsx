import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { StyleSheet, Text, View } from 'react-native';

import { fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';

import { PlusPill } from './plan-card';
import { PLUS, SHEET } from './plans-theme';

/**
 * "What you get": what Walkito Plus includes.
 *
 * Every row is something the app really does, and no row promises a result.
 * There is no "free" column: the paywall is the only way into the app, so a
 * column of what the app does without Plus would describe an app nobody can
 * reach without buying (App Review reads that as implying free access).
 */
const ROWS = [
  'offer.plans.rowPlan',
  'offer.plans.rowSessions',
  'offer.plans.rowTests',
  'offer.plans.rowStreaks',
  'offer.plans.rowMorning',
] as const;

/** The Plus column's width. It carries a strip of the Plus wash from the head
 * to the last row, as the reference's does. */
const COLUMN = 64;
const MARK = 22;

export function PlansTable() {
  const t = useT();
  return (
    <View style={styles.table}>
      <View pointerEvents="none" style={[styles.strip, { backgroundColor: PLUS.wash }]} />
      <View style={styles.row}>
        <Text style={[styles.heading, { color: SHEET.ink }]} accessibilityRole="header" maxFontSizeMultiplier={1.4}>
          {t('offer.plans.tableTitle')}
        </Text>
        <View style={styles.cell}>
          <PlusPill label={t('offer.plans.badge')} />
        </View>
      </View>
      {ROWS.map((label) => {
        const feature = t(label);
        return (
          <View key={label} accessible accessibilityLabel={t('offer.plans.rowA11y', { feature })} style={styles.row}>
            <Text style={[styles.feature, { color: SHEET.label }]} maxFontSizeMultiplier={1.4}>
              {feature}
            </Text>
            <View style={styles.cell}>
              <Check colour={PLUS.accent} />
            </View>
          </View>
        );
      })}
    </View>
  );
}

/** A tick in a filled circle. */
function Check({ colour }: { colour: string }) {
  return (
    <View style={[styles.mark, { backgroundColor: colour }]}>
      <HugeiconsIcon icon={Tick02Icon} size={14} color={PLUS.onAccent} strokeWidth={3} />
    </View>
  );
}

const styles = StyleSheet.create({
  table: { paddingBottom: 6 },
  strip: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: COLUMN,
    borderRadius: 18,
    borderCurve: 'continuous',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 50,
    paddingVertical: 8,
  },
  heading: { flex: 1, ...fonts.heavy(21, -0.4) },
  feature: { flex: 1, ...fonts.semibold(16), lineHeight: 21, paddingRight: 8 },
  cell: { width: COLUMN, alignItems: 'center', justifyContent: 'center' },
  mark: {
    width: MARK,
    height: MARK,
    borderRadius: MARK / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
