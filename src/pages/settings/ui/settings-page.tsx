import ArrowUpRight01Icon from '@hugeicons/core-free-icons/ArrowUpRight01Icon';
import File01Icon from '@hugeicons/core-free-icons/File01Icon';
import MessageEdit01Icon from '@hugeicons/core-free-icons/MessageEdit01Icon';
import Shield01Icon from '@hugeicons/core-free-icons/Shield01Icon';
import { type IconSvgElement } from '@hugeicons/react-native';
import { Linking, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { LanguageOptions } from '@/features/language-switch';
import { LEGAL, bitepal, bodyColors, colors, fonts } from '@/shared/config';
import { useT, type Key } from '@/shared/lib/i18n';
import { GroupedRow, GroupedSection } from '@/shared/ui/grouped-list';
import { TITLE_SCALE } from '@/widgets/session-player';

import { writeToUs } from '../lib/write-to-us';

import { EmailSettings } from './email-settings';
import { OfferSettings } from './offer-settings';
import { PlanSettings } from './plan-settings';
import { SoundSettings } from './sound-settings';
import { SubscriptionSettings } from './subscription-settings';

/**
 * The documents a subscribing app must link. Rows with no URL yet are shown
 * greyed rather than hidden: a settings screen that silently omits the
 * privacy policy looks finished; one that shows it unavailable is a reminder
 * that it is not.
 */
const LINKS: { label: Key; hint: Key; url: string; icon: IconSvgElement; tone: string }[] = [
  { label: 'settings.terms', hint: 'settings.termsHint', url: LEGAL.terms, icon: File01Icon, tone: bodyColors.arch },
  { label: 'settings.privacy', hint: 'settings.privacyHint', url: LEGAL.privacy, icon: Shield01Icon, tone: bodyColors.ankle },
];

/**
 * Settings as BitePal's settings (#40): a big title on the grey, then white
 * grouped cards with a colourful round icon on every row. The language list
 * first (embedded, since this screen is already a form sheet and a sheet in a
 * sheet is a second dismiss for nothing), the plan, the subscription, sound,
 * notifications and email, then what App Review asks to be findable: writing
 * to us, the documents and the line that says this is not medical advice.
 */
export function SettingsPage() {
  const insets = useSafeAreaInsets();
  const t = useT();

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={[styles.sheet, { paddingBottom: Math.max(insets.bottom, 20) + 8 }]}>
      <Text style={styles.title} accessibilityRole="header" maxFontSizeMultiplier={TITLE_SCALE}>
        {t('settings.title')}
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle} accessibilityRole="header">
          {t('language.title')}
        </Text>
        <LanguageOptions />
      </View>

      <PlanSettings />
      <SubscriptionSettings />
      <SoundSettings />
      <OfferSettings />
      <EmailSettings />

      <GroupedSection>
        <GroupedRow
          icon={MessageEdit01Icon}
          tone={bodyColors.calf}
          label={t('settings.write')}
          hint={t('settings.writeHint')}
          role="link"
          trailingIcon={ArrowUpRight01Icon}
          onPress={() => writeToUs(t)}
        />
        {LINKS.map((link) => {
          const ready = link.url.length > 0;
          return (
            <GroupedRow
              key={link.label}
              icon={link.icon}
              tone={link.tone}
              label={t(link.label)}
              hint={ready ? t(link.hint) : t('settings.unpublished')}
              role="link"
              trailingIcon={ArrowUpRight01Icon}
              disabled={!ready}
              onPress={() => {
                if (ready) Linking.openURL(link.url).catch(() => {});
              }}
            />
          );
        })}
      </GroupedSection>

      <Text style={styles.disclaimer}>{t('settings.disclaimer')}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: bitepal.page },
  sheet: { paddingHorizontal: 16, paddingTop: 28, gap: 24 },
  title: { ...fonts.heavy(34, -0.8), color: colors.text, paddingHorizontal: 4 },
  section: { gap: 8 },
  sectionTitle: { ...fonts.semibold(17), color: colors.text3, paddingHorizontal: 4 },
  disclaimer: { ...fonts.medium(17), color: colors.text3, paddingHorizontal: 4 },
});
