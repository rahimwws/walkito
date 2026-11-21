import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fonts, radius, target } from '@/shared/config';
import {
  LANGUAGES,
  LANGUAGE_META,
  getDeviceLanguage,
  setLanguagePreference,
  useLanguagePreference,
  useT,
  type LanguagePreference,
} from '@/shared/lib/i18n';

import { LanguageFlag } from './language-flag';

/**
 * The list itself: "System" and then each language, with a check on the
 * chosen one.
 *
 * A checkmark list rather than a segmented control: segments split the width
 * evenly, and a segment has no room for the second line that makes the System
 * row honest ("Match device - Русский" says what following the device gives).
 *
 * Shared by the onboarding's language sheet and Settings, so both offer the
 * same options.
 */

/** The option rows, in picker order: follow the device, then each language
 * named in itself. */
const OPTIONS: readonly LanguagePreference[] = ['system', ...LANGUAGES];

export function LanguageOptions() {
  const preference = useLanguagePreference();
  const t = useT();

  const device = getDeviceLanguage();

  return (
    <View style={styles.list}>
      {OPTIONS.map((option, index) => {
        const selected = option === preference;
        const system = option === 'system';

        const label = system ? t('language.system') : LANGUAGE_META[option].name;
        // Only the System row carries a hint. A row that says "Русский" needs
        // no second line explaining that it means Russian.
        const hint = system ? t('language.systemHint', { language: LANGUAGE_META[device].name }) : null;

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
              selected && styles.selected,
              index > 0 && styles.divided,
              pressed && styles.pressed,
            ]}>
            {/* The System row shows the flag of what following the device gives. */}
            <LanguageFlag language={system ? device : option} width={27} />
            <View style={styles.rowText}>
              <Text style={styles.rowLabel}>{label}</Text>
              {hint != null && <Text style={styles.rowHint}>{hint}</Text>}
            </View>

            {/* Always present so the rows do not reflow as the check moves. */}
            <View style={styles.checkSlot}>
              {selected && <HugeiconsIcon icon={Tick02Icon} size={22} color={colors.accent} strokeWidth={2.4} />}
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    borderRadius: radius.card,
    borderCurve: 'continuous',
    overflow: 'hidden',
    backgroundColor: colors.surface,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.separator,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    minHeight: 56,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  divided: { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: colors.separator },
  selected: { backgroundColor: colors.accentSoft },
  pressed: { opacity: 0.6 },
  rowText: { flex: 1, minHeight: target.min - 24, justifyContent: 'center' },
  rowLabel: { ...fonts.semibold(19), color: colors.text },
  rowHint: { ...fonts.regular(17), color: colors.text2, marginTop: 2 },
  checkSlot: { width: 24, alignItems: 'center' },
});
