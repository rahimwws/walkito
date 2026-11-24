import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import type { ReactNode } from 'react';
import { StyleSheet, Text, View, useWindowDimensions, type ColorValue, type StyleProp, type ViewStyle } from 'react-native';

import { bitepal, colors, fonts } from '@/shared/config';
import { FluentIcon, type FluentName } from '@/shared/ui/fluent-icon';
import { cardStyle, soft } from '@/widgets/session-player';

/** Big figures stop growing here, so a number never pushes its card apart. */
export const NUMBER_SCALE = 1.7;
/** Chart labels and calendar days stop here: they sit in fixed slots. */
export const SLOT_SCALE = 1.35;

/** From this text size a card's head stacks and its columns become rows. */
export function useLargeText(): boolean {
  return useWindowDimensions().fontScale >= 1.35;
}

/** BitePal's white card on the grey page (#99, #102). */
export function ProgressCard({ children, style }: { children: ReactNode; style?: StyleProp<ViewStyle> }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

/**
 * A card's top: the label and the big number on the left, the ring or the
 * round action at the top right. At large text the right-hand piece goes
 * above, so the number keeps the whole width.
 */
export function CardHead({ children, aside }: { children: ReactNode; aside?: ReactNode }) {
  const large = useLargeText();
  return (
    <View style={[styles.head, large && styles.headStacked]}>
      <View style={styles.headText}>{children}</View>
      {aside}
    </View>
  );
}

/** A colourful Fluent drawing on a pastel disc: BitePal's round row icons. */
export function IconDisc({ name, tone, size = 52 }: { name: FluentName; tone: ColorValue; size?: number }) {
  return (
    <View
      style={[styles.disc, { width: size, height: size, borderRadius: size / 2, backgroundColor: soft(tone, 0.22) }]}
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants">
      <FluentIcon name={name} size={Math.round(size * 0.52)} />
    </View>
  );
}

/**
 * A change as a small capsule: green only for an improvement, grey otherwise.
 * With an icon it is the figure alone ("↓ 1.2"), and `accessibilityLabel`
 * says what it is measured against.
 */
export function Chip({
  label,
  icon,
  improving = false,
  accessibilityLabel,
}: {
  label: string;
  icon?: IconSvgElement;
  improving?: boolean;
  accessibilityLabel?: string;
}) {
  return (
    <View
      style={[styles.chip, improving && styles.chipGood]}
      accessible={accessibilityLabel != null}
      accessibilityLabel={accessibilityLabel}>
      {icon != null && (
        <HugeiconsIcon icon={icon} size={18} color={improving ? colors.good : colors.text2} strokeWidth={2.2} />
      )}
      <Text style={[styles.chipText, improving && styles.chipTextGood]}>{label}</Text>
    </View>
  );
}

/** A line under the big number (#99 "Steps 136"): grey label, bold figure,
 * and an icon on the right. */
export function SubRow({ label, value, icon }: { label: string; value: string; icon?: ReactNode }) {
  return (
    <View style={styles.sub} accessible accessibilityLabel={label + ', ' + value}>
      <View style={styles.subText}>
        <Text style={styles.subLabel}>{label}</Text>
        <Text style={styles.subValue} maxFontSizeMultiplier={NUMBER_SCALE}>
          {value}
        </Text>
      </View>
      {icon}
    </View>
  );
}

/** Grey words at the foot of a card (#99 "Goal: 317 kcal"). */
export function CardFoot({ children }: { children: ReactNode }) {
  return <Text style={styles.foot}>{children}</Text>;
}

const styles = StyleSheet.create({
  card: { ...cardStyle, padding: 20, gap: 14 },
  head: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  headStacked: { flexDirection: 'column-reverse', alignItems: 'flex-start' },
  headText: { flexGrow: 1, flexShrink: 1, alignSelf: 'stretch', gap: 2 },
  disc: { alignItems: 'center', justifyContent: 'center' },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    alignSelf: 'flex-start',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: bitepal.well,
  },
  chipGood: { backgroundColor: soft(colors.good, 0.14) },
  chipText: { ...fonts.semibold(17), color: colors.text2, fontVariant: ['tabular-nums'] },
  chipTextGood: { color: colors.good },
  sub: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  subText: { flex: 1, gap: 2 },
  subLabel: { ...fonts.medium(17), color: colors.text3 },
  subValue: { ...fonts.heavy(22), color: colors.text, fontVariant: ['tabular-nums'] },
  foot: { ...fonts.medium(17), color: colors.text3 },
});
