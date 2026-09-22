import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { fonts, meterColors, palette } from '@/shared/config';
import {
  LANGUAGES,
  LANGUAGE_META,
  getDeviceLanguage,
  setLanguagePreference,
  useLanguagePreference,
  useT,
  type LanguagePreference,
} from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

/**
 * The list itself — "System" and then the three languages, with a check on the
 * chosen one.
 *
 * A checkmark list rather than a `SegmentedControl`, for two reasons. Segments
 * split the width evenly, so "Русский" and "English" would be set at whatever
 * size the longest one allows and the control would have to be re-tuned the
 * day a fourth language lands. And a segment has no room for the second line
 * that makes the System row honest — "Match device — Русский" tells the user
 * what following the device would actually give them, rather than asking them
 * to guess and find out.
 *
 * Extracted from both call sites rather than written twice: the onboarding
 * sheet and the settings screen show the same list, and a picker that offers
 * different options depending on where it was opened from is a bug waiting for
 * a fourth language.
 */

/** The option rows, in picker order: follow the device, then each language
 * named in itself. */
const OPTIONS: readonly LanguagePreference[] = ['system', ...LANGUAGES];

export function LanguageOptions() {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const preference = useLanguagePreference();
  const t = useT();

  const device = getDeviceLanguage();

  return (
    <View style={[styles.list, { backgroundColor: meter.track }]}>
      {OPTIONS.map((option, index) => {
        const selected = option === preference;
        const system = option === 'system';

        const label = system ? t('language.system') : LANGUAGE_META[option].name;
        // Only the System row carries a hint. A row that says "Русский" needs
        // no second line explaining that it means Russian.
        const hint = system
          ? t('language.systemHint', { language: LANGUAGE_META[device].name })
          : null;

        return (
          <Pressable
            key={option}
            accessibilityRole="radio"
            accessibilityState={{ selected }}
            accessibilityLabel={hint == null ? label : `${label}, ${hint}`}
            onPress={() => {
              if (selected) return;
              Haptics.selectionAsync();
              setLanguagePreference(option);
            }}
            style={({ pressed }) => [
              styles.row,
              index > 0 && {
                borderTopWidth: StyleSheet.hairlineWidth,
                borderTopColor: colors.background,
              },
              pressed && { opacity: 0.6 },
            ]}>
            <View style={styles.rowText}>
              <Text style={[styles.rowLabel, { color: colors.foreground }]}>{label}</Text>
              {hint != null && (
                <Text style={[styles.rowHint, { color: meter.caption }]}>{hint}</Text>
              )}
            </View>

            {/* Always present so the rows do not reflow as the check moves. */}
            <View style={styles.checkSlot}>
              {selected && (
                <HugeiconsIcon
                  icon={Tick02Icon}
                  size={20}
                  color={colors.foreground}
                  strokeWidth={2.4}
                />
              )}
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  list: { borderRadius: 22, borderCurve: 'continuous', overflow: 'hidden' },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  rowText: { flex: 1 },
  rowLabel: { fontSize: 16, fontFamily: fonts.semibold, letterSpacing: -0.2 },
  rowHint: { fontSize: 13, fontFamily: fonts.medium, marginTop: 1 },
  checkSlot: { width: 20, alignItems: 'center' },
});
