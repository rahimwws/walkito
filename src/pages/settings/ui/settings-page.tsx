import ArrowUpRight01Icon from '@hugeicons/core-free-icons/ArrowUpRight01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Application from 'expo-application';
import * as Haptics from 'expo-haptics';
import { Linking, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { LanguageOptions } from '@/features/language-switch';
import { LEGAL, SUPPORT_EMAIL, fonts, meterColors, palette } from '@/shared/config';
import { useT, type Key } from '@/shared/lib/i18n';
import { currentUserId } from '@/shared/lib/supabase';
import { useColorScheme } from '@/shared/lib/theme';

import { EmailSettings } from './email-settings';
import { PlanSettings } from './plan-settings';

/**
 * Language, then what App Review asks to be findable.
 *
 * It used to be the appearance picker. That went when the app became dark-only:
 * a settings screen whose single control is a choice between one option is
 * worse than no screen at all, because the user reads three rows before
 * discovering there is nothing to decide. The language picker is the control
 * that earns the screen back.
 *
 * Below it is what Apple requires to be reachable: the documents a subscribing
 * app must link, and the line that says this is not medical advice.
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

  /**
   * A new email to the founders, with the two facts every support reply needs
   * written into it already: which build, and which user. The id is the
   * anonymous Supabase one — enough to find the plan, nothing that names them.
   */
  const write = () => {
    Haptics.selectionAsync();
    void currentUserId().then((id) => {
      const version = `${Application.nativeApplicationVersion ?? '?'} (${Application.nativeBuildVersion ?? '?'})`;
      const body = t('settings.writeBody', { version, platform: Platform.OS, id: id ?? '-' });
      const url = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(t('settings.writeSubject'))}&body=${encodeURIComponent(body)}`;
      Linking.openURL(url).catch(() => {});
    });
  };

  return (
    // Scrolls now: the plan section made the sheet taller than a small phone.
    <ScrollView contentContainerStyle={[styles.sheet, { paddingBottom: Math.max(insets.bottom, 20) + 8 }]}>
      <Text style={[styles.title, { color: colors.foreground }]}>{t('settings.title')}</Text>

      <Text style={[styles.sectionTitle, { color: meter.caption }]}>{t('language.title')}</Text>
      <LanguageOptions />

      <PlanSettings />

      <EmailSettings />

      <View style={[styles.list, { backgroundColor: meter.track }]}>
        <Pressable
          accessibilityRole="link"
          accessibilityLabel={t('settings.write')}
          onPress={write}
          style={({ pressed }) => [styles.row, pressed && { opacity: 0.6 }]}>
          <View style={styles.rowText}>
            <Text style={[styles.rowLabel, { color: colors.foreground }]}>{t('settings.write')}</Text>
            <Text style={[styles.rowHint, { color: meter.caption }]}>{t('settings.writeHint')}</Text>
          </View>
          <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} color={meter.unit} strokeWidth={2} />
        </Pressable>
        {LINKS.map((link) => {
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
                {
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

      <Text style={[styles.disclaimer, { color: meter.unit }]}>{t('settings.disclaimer')}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sheet: { paddingHorizontal: 20, paddingTop: 20 },
  title: { ...fonts.heavy(24, -0.6), marginBottom: 16 },
  sectionTitle: {
    ...fonts.bold(12, 0.1),
    marginBottom: 8,
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
  rowLabel: fonts.semibold(16, -0.2),
  rowHint: { ...fonts.medium(13), marginTop: 1 },
  disclaimer: { ...fonts.medium(12), lineHeight: 17, marginTop: 16, paddingHorizontal: 4 },
});
