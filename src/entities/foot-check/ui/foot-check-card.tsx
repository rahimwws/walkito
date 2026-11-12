import CheckmarkCircle02Icon from '@hugeicons/core-free-icons/CheckmarkCircle02Icon';
import SquareLock02Icon from '@hugeicons/core-free-icons/SquareLock02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { StyleSheet, Text, View } from 'react-native';

import { PRIMARY, fonts, meterColors, palette } from '@/shared/config';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Card3D } from '@/shared/ui/card-3d';
import { FluentIcon } from '@/shared/ui/fluent-icon';

import { FOOT_CHECK_TOTAL } from '../model/summary';

export type FootCheckSides = { left: number; right: number };

/** Five segments, one per thing the check measures: filled for each one done. */
function Segments({ done }: { done: number }) {
  const meter = meterColors[useColorScheme()];
  return (
    <View style={styles.segments} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      {Array.from({ length: FOOT_CHECK_TOTAL }, (_, i) => (
        <View key={i} style={[styles.segment, { backgroundColor: i < done ? PRIMARY : meter.track }]} />
      ))}
    </View>
  );
}

/**
 * The Foot Check so far: what has been measured, in full, and what the plan's
 * first test measures next.
 *
 * The lock is an honest one. Everything this person has measured is theirs
 * and is printed whole; the rows with a lock are things nobody has measured
 * yet, with where they will be. Nothing of theirs is blurred or held back.
 */
export function FootCheckCard({
  ankle,
  toe,
  balance,
  again,
}: {
  /** Degrees, or null if the ankles were not measured. */
  ankle: FootCheckSides | null;
  /** What the big toe lift showed, as a sentence, or null if it was not done. */
  toe: string | null;
  /** Seconds on one leg, or null if it was not asked. */
  balance: FootCheckSides | null;
  /** When the ankles are measured again, epoch ms. */
  again: number | null;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const language = useLanguage();

  const rows = [
    { key: 'ankle', label: t('footCheck.card.ankle'), value: ankle != null ? t('footCheck.card.sides', ankle) : null },
    { key: 'toe', label: t('footCheck.card.toe'), value: toe },
    { key: 'balance', label: t('footCheck.card.balance'), value: balance != null ? t('footCheck.card.seconds', balance) : null },
    { key: 'calf', label: t('footCheck.card.calf'), value: null },
    { key: 'arch', label: t('footCheck.card.arch'), value: null },
  ];
  const done = rows.filter((row) => row.value != null).length;

  return (
    <Card3D style={styles.card} contentStyle={styles.face}>
      <View style={styles.head}>
        <Text accessibilityRole="header" style={[styles.title, { color: colors.foreground }]} numberOfLines={1}>
          {t('footCheck.card.title')}
        </Text>
        <Text style={[styles.count, { color: meter.label }]} numberOfLines={1}>
          {t('footCheck.card.count', { done, total: FOOT_CHECK_TOTAL })}
        </Text>
      </View>
      <Segments done={done} />

      <View style={styles.rows}>
        {rows.map((row) => {
          const measured = row.value != null;
          return (
            <View key={row.key} style={styles.row}>
              <HugeiconsIcon
                icon={measured ? CheckmarkCircle02Icon : SquareLock02Icon}
                size={22}
                color={measured ? PRIMARY : meter.unit}
                strokeWidth={measured ? 2.2 : 1.8}
              />
              <View style={styles.rowCopy}>
                <Text style={[styles.rowLabel, { color: measured ? colors.foreground : meter.label }]}>{row.label}</Text>
                <Text style={[styles.rowValue, { color: measured ? colors.foreground : meter.caption }]}>
                  {row.value ?? t('footCheck.card.later')}
                </Text>
              </View>
            </View>
          );
        })}
      </View>

      <Text style={[styles.rest, { color: meter.caption }]}>{t('footCheck.card.rest')}</Text>
      {again != null && (
        <View style={[styles.again, { backgroundColor: meter.iconTile }]}>
          <FluentIcon name="calendar" size={22} />
          <Text style={[styles.againText, { color: colors.foreground }]}>
            {t('footCheck.card.again', {
              date: new Intl.DateTimeFormat(language, { month: 'long', day: 'numeric' }).format(new Date(again)),
            })}
          </Text>
        </View>
      )}
    </Card3D>
  );
}

/**
 * The same count in one glance, for the paywall's first screen: how much of
 * the check is measured, and `line`, what happens to the rest.
 */
export function FootCheckStrip({ done, line }: { done: number; line: string }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  return (
    <View style={[styles.strip, { backgroundColor: colors.card }]} accessible>
      <View style={styles.stripHead}>
        <FluentIcon name="foot" size={24} />
        <Text style={[styles.stripTitle, { color: colors.foreground }]} maxFontSizeMultiplier={1.3}>
          {t('footCheck.paywall', { done, total: FOOT_CHECK_TOTAL })}
        </Text>
      </View>
      <Segments done={done} />
      <Text style={[styles.stripLine, { color: meter.caption }]} maxFontSizeMultiplier={1.3}>
        {line}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { alignSelf: 'stretch' },
  face: { gap: 12 },
  head: { flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', gap: 10 },
  title: { ...fonts.bold(19, -0.4), flexShrink: 1 },
  count: fonts.semibold(15),
  segments: { flexDirection: 'row', gap: 6 },
  segment: { flex: 1, height: 8, borderRadius: 4 },
  rows: { gap: 12, marginTop: 2 },
  row: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  rowCopy: { flex: 1, gap: 1 },
  rowLabel: fonts.bold(16, -0.2),
  rowValue: { ...fonts.medium(15), lineHeight: 20 },
  rest: { ...fonts.medium(15), lineHeight: 20 },
  again: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 18,
    borderCurve: 'continuous',
  },
  againText: { ...fonts.semibold(15, -0.2), lineHeight: 20, flex: 1 },
  strip: { borderRadius: 24, borderCurve: 'continuous', paddingVertical: 16, paddingHorizontal: 18, gap: 10 },
  stripHead: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  stripTitle: { ...fonts.bold(17, -0.2), lineHeight: 22, flex: 1 },
  stripLine: { ...fonts.medium(15), lineHeight: 20 },
});
