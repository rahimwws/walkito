import { useNavigation } from 'expo-router';
import { StyleSheet, Text } from 'react-native';

import { colors, fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { SheetScreen } from '@/shared/ui/sheet';

import { LanguageOptions } from './language-options';

/**
 * The picker as a native form sheet (`/language`), for surfaces that have no
 * settings screen to show it in, which in practice means onboarding.
 *
 * Settings embeds `LanguageOptions` in its own sheet; this is the same list.
 * The language is set the moment a row is tapped, so closing has nothing to
 * confirm or lose.
 */
export function LanguageSheetScreen() {
  const navigation = useNavigation();
  const t = useT();

  return (
    <SheetScreen title={t('language.title')} onClose={() => navigation.goBack()}>
      <LanguageOptions />
      <Text style={styles.note}>{t('language.note')}</Text>
    </SheetScreen>
  );
}

const styles = StyleSheet.create({
  note: { ...fonts.regular(17), color: colors.text2 },
});
