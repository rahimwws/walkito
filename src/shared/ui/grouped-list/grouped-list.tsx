import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { Children, isValidElement, type ReactNode } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  type AccessibilityRole,
  type StyleProp,
  type ViewStyle,
  type ColorValue,
} from 'react-native';

import { bitepal, colors, fonts, target } from '@/shared/config';

/**
 * BitePal's settings lists (#40, #110): a small grey title over a white card
 * with a 24pt corner on the grey page, rows split by hairlines, each row led by
 * a round icon in a colour of its own.
 */
export function GroupedSection({
  title,
  children,
  style,
}: {
  title?: string;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View style={[styles.section, style]}>
      {title != null && (
        <Text style={styles.title} accessibilityRole="header">
          {title}
        </Text>
      )}
      <GroupedCard>{children}</GroupedCard>
    </View>
  );
}

/** The white card itself, with a hairline between whatever rows it holds. */
export function GroupedCard({ children, style }: { children: ReactNode; style?: StyleProp<ViewStyle> }) {
  const large = useWindowDimensions().fontScale >= LARGE_TEXT;
  const rows = Children.toArray(children).filter(isValidElement);
  return (
    <View style={[styles.card, style]}>
      {rows.map((row, index) => (
        <View key={row.key ?? index}>
          {index > 0 && <View style={[styles.rule, large && styles.ruleLarge]} />}
          {row}
        </View>
      ))}
    </View>
  );
}

/** A filled disc in the row's colour with a white glyph. */
export function RowIcon({ icon, tone }: { icon: IconSvgElement; tone: ColorValue }) {
  return (
    <View style={[styles.icon, { backgroundColor: tone }]} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      <HugeiconsIcon icon={icon} size={22} color={colors.onTone} strokeWidth={2} />
    </View>
  );
}

export type GroupedRowProps = {
  icon?: IconSvgElement;
  tone?: ColorValue;
  label: string;
  /** A second line under the label. */
  hint?: string;
  /** A short value at the right, before the chevron. */
  value?: string;
  /** What sits at the right instead of the chevron: a switch, a picker. */
  accessory?: ReactNode;
  /** The label's own colour, for the one destructive row. */
  labelColor?: ColorValue;
  /** Pressable rows show a chevron unless they bring an accessory. */
  onPress?: () => void;
  /** `link` rows leave the app: an arrow up and out instead of the chevron. */
  role?: AccessibilityRole;
  trailingIcon?: IconSvgElement;
  disabled?: boolean;
  accessibilityLabel?: string;
  accessibilityHint?: string;
};

/**
 * One row: the round icon, the label (and a hint under it), and a value, a
 * chevron or a control at the right. At large text the icon and chevron take a
 * line of their own above the words, and the value or control drops under
 * them, so the label gets the card's whole width and no word is split.
 */
export function GroupedRow({
  icon,
  tone = bitepal.selected,
  label,
  hint,
  value,
  accessory,
  labelColor,
  onPress,
  role = 'button',
  trailingIcon = ArrowRight01Icon,
  disabled = false,
  accessibilityLabel,
  accessibilityHint,
}: GroupedRowProps) {
  const large = useWindowDimensions().fontScale >= LARGE_TEXT;
  const chevron =
    onPress != null && accessory == null ? (
      <HugeiconsIcon icon={trailingIcon} size={20} color={colors.text3} strokeWidth={2} />
    ) : null;
  const words = (
    <View style={large ? styles.textLarge : styles.text}>
      <Text style={[styles.label, labelColor != null && { color: labelColor }, disabled && styles.off]}>{label}</Text>
      {hint != null && <Text style={styles.hint}>{hint}</Text>}
    </View>
  );
  const body = large ? (
    <>
      {(icon != null || chevron != null) && (
        <View style={styles.topLarge}>
          {icon != null && <RowIcon icon={icon} tone={tone} />}
          {chevron != null && <View style={styles.chevronLarge}>{chevron}</View>}
        </View>
      )}
      {words}
      {value != null && <Text style={[styles.value, styles.valueLarge]}>{value}</Text>}
      {accessory != null && <View style={styles.accessoryLarge}>{accessory}</View>}
    </>
  ) : (
    <>
      {icon != null && <RowIcon icon={icon} tone={tone} />}
      {words}
      {value != null && <Text style={styles.value}>{value}</Text>}
      {chevron}
      {accessory}
    </>
  );
  const rowStyle = [styles.row, large && styles.rowLarge];

  if (onPress == null) {
    return (
      <View style={rowStyle} accessible={accessory == null}>
        {body}
      </View>
    );
  }
  return (
    <Pressable
      accessibilityRole={role}
      accessibilityLabel={accessibilityLabel ?? (hint != null ? label + ', ' + hint : label)}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={() => {
        void Haptics.selectionAsync();
        onPress();
      }}
      style={({ pressed }) => [rowStyle, pressed && styles.pressed]}>
      {body}
    </Pressable>
  );
}

const LARGE_TEXT = 1.6;
const ICON = 40;

const styles = StyleSheet.create({
  section: { gap: 8 },
  title: { ...fonts.semibold(17), color: colors.text3, paddingHorizontal: 4 },
  card: { backgroundColor: bitepal.card, borderRadius: bitepal.cardRadius, borderCurve: 'continuous', overflow: 'hidden' },
  rule: { height: StyleSheet.hairlineWidth, backgroundColor: colors.separator, marginLeft: 16 + ICON + 14 },
  ruleLarge: { marginLeft: 16 },
  row: {
    minHeight: target.primary + 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  rowLarge: { flexDirection: 'column', alignItems: 'stretch', gap: 8 },
  topLarge: { flexDirection: 'row', alignItems: 'center' },
  chevronLarge: { marginLeft: 'auto' },
  icon: { width: ICON, height: ICON, borderRadius: ICON / 2, alignItems: 'center', justifyContent: 'center' },
  text: { flex: 1, gap: 2 },
  textLarge: { gap: 2 },
  label: { ...fonts.semibold(19), color: colors.text },
  hint: { ...fonts.regular(17), color: colors.text2 },
  value: { ...fonts.medium(17), color: colors.text2, flexShrink: 1, textAlign: 'right', maxWidth: '45%' },
  valueLarge: { textAlign: 'left', maxWidth: '100%' },
  accessoryLarge: { alignSelf: 'flex-start' },
  off: { color: colors.text3 },
  pressed: { opacity: 0.6 },
});
