import LanguageCircleIcon from '@hugeicons/core-free-icons/LanguageCircleIcon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import { Pressable } from 'react-native';

import { meterColors } from '@/shared/config';
import { LANGUAGE_META, useLanguage, useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

import { LanguageSheet } from './language-sheet';

/**
 * The language control that sits in the onboarding header: a language icon,
 * the same width as the two-letter code it replaced, so the progress bar
 * beside it keeps its length. Which language is active is the screen itself;
 * the icon only says where to change it, and VoiceOver names the language.
 *
 * Tinted like the close control rather than the back arrow. Both are things
 * you may never touch; the back arrow is the one people reach for, and three
 * equally-weighted controls around a progress bar makes the header read as a
 * toolbar.
 *
 * Owns its own sheet, so a call site is `<LanguageBadge />` and nothing else.
 * The header already juggles enough state.
 */
export function LanguageBadge() {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
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
        style={({ pressed }) => pressed && { opacity: 0.5 }}>
        <HugeiconsIcon icon={LanguageCircleIcon} size={24} color={meter.unit} strokeWidth={1.8} />
      </Pressable>

      <LanguageSheet visible={open} onClose={() => setOpen(false)} />
    </>
  );
}

