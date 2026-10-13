import GlobalIcon from '@hugeicons/core-free-icons/GlobalIcon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { fonts, palette } from '@/shared/config';
import { LANGUAGE_META, useLanguage, useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

import { LanguageSheet } from './language-sheet';

/**
 * The language control that sits in the onboarding header: a globe with the
 * active language's code under it in small lower case, "en". Stacked rather
 * than side by side, so it is no wider than the globe and the progress bar
 * beside it keeps its length. The globe is the mark people look for when the
 * app is in a language they did not choose; the code says which one it is
 * without opening the sheet. VoiceOver names the language in full. The code is
 * an identifier, like the endonyms in the picker, and is never translated.
 *
 * Owns its own sheet, so a call site is `<LanguageBadge />` and nothing else.
 * The header already juggles enough state.
 */
export function LanguageBadge() {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const language = useLanguage();
  const t = useT();

  const [open, setOpen] = useState(false);

  return (
    <>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={t('language.a11yLabel', { language: LANGUAGE_META[language].name })}
        accessibilityHint={t('language.a11yHint')}
        onPress={() => {
          Haptics.selectionAsync();
          setOpen(true);
        }}
        hitSlop={12}
        style={({ pressed }) => [styles.badge, pressed && { opacity: 0.5 }]}>
        <HugeiconsIcon icon={GlobalIcon} size={24} color={colors.foreground} strokeWidth={1.8} />
        <Text style={[styles.code, { color: colors.foreground }]}>{language}</Text>
      </Pressable>

      <LanguageSheet visible={open} onClose={() => setOpen(false)} />
    </>
  );
}

const styles = StyleSheet.create({
  /** The globe alone sets the size, so it sits on the line of the back arrow
   * and the bar; the code hangs under it. */
  badge: {
    width: 24,
    height: 24,
  },
  code: {
    ...fonts.bold(11, 0.2),
    lineHeight: 13,
    position: 'absolute',
    top: 25,
    left: -8,
    right: -8,
    textAlign: 'center',
  },
});
