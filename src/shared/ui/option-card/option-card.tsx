import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import * as Haptics from 'expo-haptics';
import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';

import { colors, fonts, radius, target } from '@/shared/config';

export type OptionCardProps = {
  label: string;
  caption?: string;
  icon?: IconSvgElement;
  /** Something drawn before the label in place of an icon: a Fluent drawing, a photo. */
  art?: ReactNode;
  selected: boolean;
  /** `single` shows a radio, `multi` a checkbox. */
  mode: 'single' | 'multi';
  layout?: 'row' | 'tile';
  disabled?: boolean;
  onPress: () => void;
  accessibilityLabel?: string;
  style?: StyleProp<ViewStyle>;
};

/** One answer in a list of answers: a flat white row, soft violet when chosen. */
export function OptionCard({
  label,
  caption,
  icon,
  art,
  selected,
  mode,
  layout = 'row',
  disabled = false,
  onPress,
  accessibilityLabel,
  style,
}: OptionCardProps) {
  const tile = layout === 'tile';
  const ink = selected ? colors.accent : colors.text;
  const lead =
    art ?? (icon != null ? <HugeiconsIcon icon={icon} size={24} color={ink} strokeWidth={1.8} /> : null);

  return (
    <Pressable
      accessibilityRole={mode === 'single' ? 'radio' : 'checkbox'}
      accessibilityState={mode === 'single' ? { selected, disabled } : { checked: selected, disabled }}
      accessibilityLabel={accessibilityLabel ?? (caption != null ? `${label}, ${caption}` : label)}
      disabled={disabled}
      onPressIn={() => void Haptics.selectionAsync()}
      onPress={onPress}
      style={({ pressed }) => [
        styles.face,
        tile ? styles.tile : styles.row,
        {
          backgroundColor: selected ? colors.accentSoft : colors.surface,
          borderColor: selected ? colors.accent : colors.separator,
          opacity: disabled ? 0.4 : pressed ? 0.8 : 1,
        },
        style,
      ]}>
      {lead}
      <View style={tile ? styles.textTile : styles.text}>
        <Text style={[styles.label, { color: ink }, tile && styles.centred]}>{label}</Text>
        {caption != null && <Text style={[styles.caption, tile && styles.centred]}>{caption}</Text>}
      </View>
      {!tile && (
        <View
          style={[
            styles.mark,
            mode === 'single' ? styles.radio : styles.box,
            selected ? { backgroundColor: colors.accent, borderColor: colors.accent } : null,
          ]}>
          {selected && <HugeiconsIcon icon={Tick02Icon} size={14} color={colors.onInk} strokeWidth={2.6} />}
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  face: {
    borderWidth: 1.5,
    borderRadius: radius.card,
    borderCurve: 'continuous',
  },
  row: {
    minHeight: target.primary,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  tile: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: 16,
  },
  text: { flex: 1, gap: 2 },
  textTile: { alignItems: 'center', gap: 2 },
  label: fonts.semibold(17),
  caption: { ...fonts.regular(15), color: colors.text2 },
  centred: { textAlign: 'center' },
  mark: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: colors.separator,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radio: { borderRadius: 12 },
  box: { borderRadius: 7 },
});
