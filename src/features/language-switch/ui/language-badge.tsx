import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { fonts, meterColors } from '@/shared/config';
import { LANGUAGE_META, useLanguage, useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

import { LanguageSheet } from './language-sheet';

/**
 * The two-letter control that sits in the onboarding header.
 *
 * **Why a bare code and not an icon.** A globe glyph says "something about
 * languages is available here" and nothing about which one is active. "EN"
 * says both at once, in less width — and width is the constraint: the header
 * is back arrow, progress bar, close, and the bar is the only child that
 * flexes, so every point this control takes comes out of the progress
 * indicator. A globe plus a label would take roughly twice as much.
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
        <Text style={[styles.badge, { color: meter.unit }]}>{LANGUAGE_META[language].badge}</Text>
      </Pressable>

      <LanguageSheet visible={open} onClose={() => setOpen(false)} />
    </>
  );
}

const styles = StyleSheet.create({
  // Tracked out a little: two capitals set tight read as one glyph.
  badge: { fontSize: 15, fontFamily: fonts.bold, letterSpacing: 0.4 },
});
