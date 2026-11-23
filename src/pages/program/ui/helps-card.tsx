import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import type { Goal } from '@/entities/program';
import { bitepal, colors, fonts } from '@/shared/config';
import { useT, type Key } from '@/shared/lib/i18n';
import { FluentIcon, type FluentName } from '@/shared/ui/fluent-icon';
import { CardLabel, cardStyle } from '@/widgets/session-player';

type Tip = { icon: FluentName; key: Key };

/**
 * Heel pain: what the guidance puts beside the exercises. In Riel 2023 the
 * advice and a heel cup did most of the work and the exercises added little on
 * top, so leaving them out left out the larger half. Shoes first, since the
 * first steps of the day are what hurt.
 */
const HEEL_TIPS: readonly Tip[] = [
  { icon: 'shoe', key: 'pages.plan.helps.shoes' },
  { icon: 'foot', key: 'pages.plan.helps.indoors' },
  { icon: 'run', key: 'pages.plan.helps.load' },
  { icon: 'relief', key: 'pages.plan.helps.tape' },
  { icon: 'moon', key: 'pages.plan.helps.night' },
  { icon: 'calendar', key: 'pages.plan.helps.time' },
];

/**
 * Flat feet: said plainly that the work is strength, not shape. Exercise does
 * not raise an adult's arch by any amount that matters, and nothing here may
 * suggest it does.
 */
const ARCH_TIPS: readonly Tip[] = [
  { icon: 'strength', key: 'pages.plan.helps.arch' },
  { icon: 'shoe', key: 'pages.plan.helps.archShoes' },
];

/** The tips for these goals, or none: only heel pain and the arch have any. */
export function helpsTips(goals: readonly Goal[]): readonly Tip[] {
  const active = (type: Goal['type']) => goals.some((g) => g.type === type && g.status === 'active');
  if (active('pain_free_mornings')) return HEEL_TIPS;
  if (active('arch_hold')) return ARCH_TIPS;
  return [];
}

const WELL = 44;

/**
 * "What else helps", at the foot of the plan: what the exercises cannot do on
 * their own, as a white card with each tip on a round grey icon (BitePal's
 * round icons, #99). A note, not a task, so nothing on it is tappable.
 */
export function HelpsCard({ goals }: { goals: readonly Goal[] }) {
  const t = useT();
  const tips = helpsTips(goals);
  const huge = useWindowDimensions().fontScale >= 2;
  if (tips.length === 0) return null;

  return (
    <View style={styles.card}>
      <View style={styles.heading}>
        <CardLabel>{t('pages.plan.helps.eyebrow')}</CardLabel>
        <Text accessibilityRole="header" style={styles.title} maxFontSizeMultiplier={1.7}>
          {t('pages.plan.helps.title')}
        </Text>
      </View>
      {tips.map((tip) => (
        <View key={tip.key} style={[styles.row, huge && styles.rowHuge]}>
          <View style={styles.well} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
            <FluentIcon name={tip.icon} size={24} />
          </View>
          <Text style={styles.body}>{t(tip.key)}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { ...cardStyle, padding: 20, gap: 14 },
  heading: { gap: 2 },
  title: { ...fonts.heavy(24, -0.4), color: colors.text },
  row: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  rowHuge: { flexDirection: 'column', gap: 6 },
  well: {
    width: WELL,
    height: WELL,
    borderRadius: WELL / 2,
    backgroundColor: bitepal.well,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: { ...fonts.regular(19), color: colors.text, flex: 1 },
});
