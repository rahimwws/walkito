import GlobalIcon from '@hugeicons/core-free-icons/GlobalIcon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text } from 'react-native';

import { fonts, palette } from '@/shared/config';
import { LANGUAGE_META, useLanguage, useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

/**
 * The language control that sits in the onboarding header: a globe with the
 * active language's code under it in small lower case, "en". Stacked rather
 * than side by side, so it is no wider than the globe and the progress bar
 * beside it keeps its length. The globe is the mark people look for when the
 * app is in a language they did not choose; the code says which one it is
 * without opening the sheet. VoiceOver names the language in full. The code is
 * an identifier, like the endonyms in the picker, and is never translated.
 *
 * Opens the `/language` form sheet, so a call site is `<LanguageBadge />` and
 * nothing else.
 */
export function LanguageBadge() {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const language = useLanguage();
  const t = useT();

  return (
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={t('language.a11yLabel', { language: LANGUAGE_META[language].name })}
        accessibilityHint={t('language.a11yHint')}
        onPress={() => {
          Haptics.selectionAsync();
          router.push('/sheet/language');
        }}
        hitSlop={12}
        style={({ pressed }) => [styles.badge, pressed && { opacity: 0.5 }]}>
        <HugeiconsIcon icon={GlobalIcon} size={24} color={colors.foreground} strokeWidth={1.8} />
        <Text style={[styles.code, { color: colors.foreground }]}>{language}</Text>
      </Pressable>
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
