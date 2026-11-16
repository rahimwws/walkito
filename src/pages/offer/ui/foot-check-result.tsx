import CheckmarkCircle02Icon from '@hugeicons/core-free-icons/CheckmarkCircle02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { latestAnkle, selfCheck } from '@/entities/foot-check';
import { getIntake } from '@/entities/profile';
import { PRIMARY, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import { ReplayMask } from '@/shared/ui/replay-mask';

import { footCheckRows, type FootCheckFacts } from '../model/foot-check-result';

/** Her Foot Check as the onboarding (and Progress, for the degrees) left it,
 * read once as the screen opens. */
function readFacts(): FootCheckFacts {
  const mini = getIntake()?.miniTest ?? null;
  return {
    heel: selfCheck()?.heel ?? null,
    ankle: latestAnkle(),
    arch: mini?.arch ?? null,
    balance: mini == null ? null : { left: mini.balanceLeft, right: mini.balanceRight },
  };
}

/** Whether she has any Foot Check result to read back. */
export function hasFootCheckResult(): boolean {
  const facts = readFacts();
  return (facts.heel != null && facts.heel !== 'unsure') || facts.ankle != null || facts.arch === 'yes' || facts.arch === 'no';
}

/**
 * "Your Foot Check": what she saw and measured herself, right before a price.
 * In place of the "Your plan is ready" eyebrow and the "2 of 5 done" bars,
 * which said that something was done but not what.
 *
 * Only her own answers and numbers, in the words the check used; nothing
 * invented, no date, no outcome. With nothing to read back it draws nothing.
 * Masked from recordings: it is about her body.
 */
export function FootCheckResult({ surface }: { surface?: string }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const [rows] = useState(() => footCheckRows(readFacts(), t));
  if (rows.length === 0) return null;

  return (
    <ReplayMask style={[styles.card, { backgroundColor: surface ?? colors.card }]} accessible>
      <View style={styles.head}>
        <FluentIcon name="foot" size={24} />
        <Text accessibilityRole="header" style={[styles.title, { color: colors.foreground }]} maxFontSizeMultiplier={1.3}>
          {t('footCheck.card.title')}
        </Text>
      </View>
      {rows.map((row) => (
        <View key={row.key} style={styles.row}>
          <HugeiconsIcon icon={CheckmarkCircle02Icon} size={20} color={PRIMARY} strokeWidth={2.2} />
          <View style={styles.copy}>
            <Text style={[styles.label, { color: meter.label }]} maxFontSizeMultiplier={1.3}>
              {row.label}
            </Text>
            <Text style={[styles.value, { color: colors.foreground }]} maxFontSizeMultiplier={1.3}>
              {row.value}
            </Text>
            {row.detail != null && (
              <Text style={[styles.detail, { color: colors.foreground }]} maxFontSizeMultiplier={1.3}>
                {row.detail}
              </Text>
            )}
          </View>
        </View>
      ))}
    </ReplayMask>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: 22, borderCurve: 'continuous', paddingVertical: 14, paddingHorizontal: 16, gap: 10 },
  head: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  title: { ...fonts.bold(18, -0.3), flex: 1 },
  row: { flexDirection: 'row', alignItems: 'flex-start', gap: 10 },
  copy: { flex: 1, gap: 1 },
  label: fonts.semibold(13),
  value: { ...fonts.bold(16, -0.2), lineHeight: 21 },
  detail: { ...fonts.medium(15), lineHeight: 20 },
});
