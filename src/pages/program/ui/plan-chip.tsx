import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { fonts, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

export type PlanChipProps = {
  label: string;
  icon?: IconSvgElement;
  tone: { fill: string; track: string };
  /** The minutes choice: filled with the tone, label in the page colour. */
  selected?: boolean;
  onPress?: () => void;
  accessibilityRole?: 'button' | 'radio' | 'text';
  accessibilityLabel?: string;
};

/**
 * The chip the app already speaks in: Home's task-list chip and the day card's
 * — tinted fill, glyph and label in the accent, same gap and radius. The plan
 * screen uses it for everything that is a chip, so a Mobility chip reads the
 * same here as it does on Home without being read.
 */
export function PlanChip({ label, icon, tone, selected = false, onPress, accessibilityRole = 'button', accessibilityLabel }: PlanChipProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const ink = selected ? colors.background : tone.fill;
  const body = (
    <View style={[styles.chip, { backgroundColor: selected ? tone.fill : tone.track }]}>
      {/* Stroked, a touch heavier than the default: at 14pt the set's 1.5
          stroke thins out against a tinted ground, and the glyph has to hold
          its own beside bold type. */}
      {icon != null && <HugeiconsIcon icon={icon} size={14} color={ink} strokeWidth={2.2} />}
      <Text style={[styles.label, { color: ink }]} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
  if (onPress == null) return body;
  return (
    <Pressable
      accessibilityRole={accessibilityRole}
      accessibilityLabel={accessibilityLabel ?? label}
      accessibilityState={accessibilityRole === 'radio' ? { selected } : undefined}
      hitSlop={4}
      onPress={onPress}
      style={({ pressed }) => pressed && { opacity: 0.7, transform: [{ scale: 0.97 }] }}>
      {body}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 12,
    borderCurve: 'continuous',
  },
  label: fonts.bold(14, -0.1),
});
