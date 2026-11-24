import Moon02Icon from '@hugeicons/core-free-icons/Moon02Icon';
import SmartPhone01Icon from '@hugeicons/core-free-icons/SmartPhone01Icon';
import Sun03Icon from '@hugeicons/core-free-icons/Sun03Icon';
import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

import { bitepal, colors, fonts, target } from '@/shared/config';
import { useT, type Key } from '@/shared/lib/i18n';
import {
  THEME_PREFERENCES,
  setThemePreference,
  useThemePreference,
  type ThemePreference,
} from '@/shared/lib/theme';

const LOOK: Record<ThemePreference, { label: Key; icon: IconSvgElement }> = {
  system: { label: 'settings.appearance.system', icon: SmartPhone01Icon },
  light: { label: 'settings.appearance.light', icon: Sun03Icon },
  dark: { label: 'settings.appearance.dark', icon: Moon02Icon },
};

/**
 * System, Light or Dark, as the language list above it: an icon and a check
 * on the chosen row. Remembered on this phone.
 *
 * Android restarts the app to switch (the colours are resolved once there),
 * so it says so under the list rather than surprising anyone.
 */
export function AppearanceSettings() {
  const t = useT();
  const preference = useThemePreference();

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle} accessibilityRole="header">
        {t('settings.appearance.title')}
      </Text>
      <View style={styles.list} accessibilityRole="radiogroup">
        {THEME_PREFERENCES.map((option, index) => {
          const selected = option === preference;
          const label = t(LOOK[option].label);
          return (
            <Pressable
              key={option}
              accessibilityRole="radio"
              accessibilityState={{ selected }}
              accessibilityLabel={label}
              onPress={() => {
                if (selected) return;
                void Haptics.selectionAsync();
                setThemePreference(option);
              }}
              style={({ pressed }) => [styles.row, index > 0 && styles.divided, pressed && styles.pressed]}>
              <HugeiconsIcon icon={LOOK[option].icon} size={24} color={colors.text} strokeWidth={1.8} />
              <View style={styles.rowText}>
                <Text style={styles.rowLabel}>{label}</Text>
              </View>
              {/* Always present so the rows do not reflow as the check moves. */}
              <View style={styles.checkSlot}>
                {selected && <HugeiconsIcon icon={Tick02Icon} size={22} color={colors.accent} strokeWidth={2.4} />}
              </View>
            </Pressable>
          );
        })}
      </View>
      {Platform.OS === 'android' && <Text style={styles.note}>{t('settings.appearance.restart')}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  section: { gap: 8 },
  sectionTitle: { ...fonts.semibold(17), color: colors.text3, paddingHorizontal: 4 },
  list: {
    borderRadius: bitepal.cardRadius,
    borderCurve: 'continuous',
    overflow: 'hidden',
    backgroundColor: bitepal.card,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    minHeight: target.primary,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  divided: { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: colors.separator },
  pressed: { opacity: 0.6 },
  rowText: { flex: 1, minHeight: target.min - 24, justifyContent: 'center' },
  rowLabel: { ...fonts.semibold(19), color: colors.text },
  checkSlot: { width: 24, alignItems: 'center' },
  note: { ...fonts.medium(17), color: colors.text3, paddingHorizontal: 4 },
});
