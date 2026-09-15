import Moon02Icon from '@hugeicons/core-free-icons/Moon02Icon';
import SmartPhone01Icon from '@hugeicons/core-free-icons/SmartPhone01Icon';
import Sun03Icon from '@hugeicons/core-free-icons/Sun03Icon';
import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { fonts, meterColors, palette } from '@/shared/config';
import {
  setThemePreference,
  useColorScheme,
  useThemePreference,
  type ThemePreference,
} from '@/shared/lib/theme';

const OPTIONS: { value: ThemePreference; label: string; hint: string; icon: IconSvgElement }[] = [
  { value: 'system', label: 'System', hint: 'Match device settings', icon: SmartPhone01Icon },
  { value: 'light', label: 'Light', hint: 'Always light', icon: Sun03Icon },
  { value: 'dark', label: 'Dark', hint: 'Always dark', icon: Moon02Icon },
];

/**
 * Appearance sheet, presented as a native form sheet from the avatar.
 *
 * Rows with a trailing check rather than a segmented control: this is a
 * settings list, and the pattern scales as more preferences land here.
 */
export function SettingsPage() {
  const scheme = useColorScheme() === 'dark' ? 'dark' : 'light';
  const colors = palette[scheme];
  const theme = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const preference = useThemePreference();

  return (
    <View style={[styles.sheet, { paddingBottom: Math.max(insets.bottom, 20) + 8 }]}>
      <Text style={[styles.title, { color: colors.foreground }]}>Appearance</Text>

      <View style={styles.list}>
        {OPTIONS.map((option, index) => {
          const selected = option.value === preference;
          return (
            <Pressable
              key={option.value}
              onPress={() => {
                if (selected) return;
                Haptics.selectionAsync();
                setThemePreference(option.value);
              }}
              style={({ pressed }) => [
                styles.row,
                { backgroundColor: theme.iconTile },
                index === 0 && styles.firstRow,
                index === OPTIONS.length - 1 && styles.lastRow,
                pressed && { opacity: 0.7 },
              ]}>
              <HugeiconsIcon
                icon={option.icon}
                size={22}
                color={colors.foreground}
                strokeWidth={1.8}
              />
              <View style={styles.rowText}>
                <Text style={[styles.rowLabel, { color: colors.foreground }]}>{option.label}</Text>
                <Text style={[styles.rowHint, { color: theme.caption }]}>{option.hint}</Text>
              </View>
              {/* Slot is always present so rows don't reflow as the check moves. */}
              <View style={styles.checkSlot}>
                {selected && (
                  <HugeiconsIcon
                    icon={Tick02Icon}
                    size={22}
                    color={colors.foreground}
                    strokeWidth={2.4}
                  />
                )}
              </View>
            </Pressable>
          );
        })}
      </View>

      <Text style={[styles.note, { color: theme.caption }]}>
        The choice is remembered on this device.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sheet: {
    paddingTop: 22,
    paddingHorizontal: 20,
    gap: 18,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.bold,
    letterSpacing: -0.4,
  },
  list: {
    gap: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderCurve: 'continuous',
  },
  firstRow: {
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  lastRow: {
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  rowText: {
    flex: 1,
    gap: 1,
  },
  rowLabel: {
    fontSize: 17,
    fontFamily: fonts.semibold,
  },
  rowHint: {
    fontSize: 13,
    fontFamily: fonts.regular,
  },
  checkSlot: {
    width: 22,
    alignItems: 'center',
  },
  note: {
    fontSize: 13,
    fontFamily: fonts.regular,
  },
});
