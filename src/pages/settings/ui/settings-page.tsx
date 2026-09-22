import ArrowUpRight01Icon from '@hugeicons/core-free-icons/ArrowUpRight01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { LanguageOptions } from '@/features/language-switch';
import { LEGAL, fonts, meterColors, palette } from '@/shared/config';
import { useT, type Key } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

/**
 * Language, then the documents.
 *
 * It used to be the appearance picker. That went when the app became dark-only:
 * a settings screen whose single control is a choice between one option is
 * worse than no screen at all, because the user reads three rows before
 * discovering there is nothing to decide. The language picker is the control
 * that earns the screen back.
 *
 * Below it is what Apple requires to be reachable from a subscribing app.
 *
 * The list embeds `LanguageOptions` directly rather than opening
 * `LanguageSheet` — this screen is already a form sheet, and a sheet inside a
 * sheet is a second dismiss gesture for no gain. The route is configured
 * `sheetAllowedDetents: 'fitToContents'`, so adding the section grows the sheet
 * on its own.
 */
const LINKS: { label: Key; hint: Key; url: string }[] = [
  { label: 'settings.terms', hint: 'settings.termsHint', url: LEGAL.terms },
  { label: 'settings.privacy', hint: 'settings.privacyHint', url: LEGAL.privacy },
];

export function SettingsPage() {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const t = useT();

  /** Rows with no URL yet are shown greyed rather than hidden. A settings
   * screen that silently omits the privacy policy looks finished; one that
   * shows it unavailable is a reminder that it is not. */
  const open = (url: string) => {
    if (url.length === 0) return;
    Haptics.selectionAsync();
    Linking.openURL(url).catch(() => {});
  };

  return (
    <View style={[styles.sheet, { paddingBottom: Math.max(insets.bottom, 20) + 8 }]}>
      <Text style={[styles.title, { color: colors.foreground }]}>{t('settings.title')}</Text>

      <Text style={[styles.sectionTitle, { color: meter.caption }]}>{t('language.title')}</Text>
      <LanguageOptions />

      <View style={[styles.list, { backgroundColor: meter.track }]}>
        {LINKS.map((link, index) => {
          const ready = link.url.length > 0;
          return (
            <Pressable
              key={link.label}
              accessibilityRole="link"
              accessibilityLabel={t(link.label)}
              accessibilityState={{ disabled: !ready }}
              disabled={!ready}
              onPress={() => open(link.url)}
              style={({ pressed }) => [
                styles.row,
                index > 0 && {
                  borderTopWidth: StyleSheet.hairlineWidth,
                  borderTopColor: colors.background,
                },
                pressed && { opacity: 0.6 },
              ]}>
              <View style={styles.rowText}>
                <Text
                  style={[styles.rowLabel, { color: ready ? colors.foreground : meter.unit }]}>
                  {t(link.label)}
                </Text>
                <Text style={[styles.rowHint, { color: meter.caption }]}>
                  {ready ? t(link.hint) : t('settings.unpublished')}
                </Text>
              </View>
              {ready && (
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  size={18}
                  color={meter.unit}
                  strokeWidth={2}
                />
              )}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sheet: { paddingHorizontal: 20, paddingTop: 20 },
  title: { fontSize: 24, fontFamily: fonts.heavy, letterSpacing: -0.6, marginBottom: 16 },
  sectionTitle: {
    fontSize: 12,
    fontFamily: fonts.bold,
    letterSpacing: 0.6,
    marginBottom: 8,
    // Cased in the style rather than with `toUpperCase()`, so the catalogue
    // keeps the form a translator wrote and casing stays a display decision.
    textTransform: 'uppercase',
  },
  list: { borderRadius: 22, borderCurve: 'continuous', overflow: 'hidden', marginTop: 24 },
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
});
