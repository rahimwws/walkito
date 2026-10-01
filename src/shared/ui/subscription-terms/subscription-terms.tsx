import { Linking, Platform, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';

import { LEGAL, fonts, meterColors } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

/** One plan the screen is offering, as the disclosure names it. */
export type DisclosedPlan = {
  period: 'annual' | 'weekly';
  /** The store's own billed amount for one period, already formatted. */
  price: string;
};

/**
 * The disclosure App Review Guideline 3.1.2 requires on a screen that sells an
 * auto-renewable subscription, as one block both such screens share.
 *
 * In order: what the subscription includes, each plan's length and price, then
 * how renewal and payment work and where to cancel. Only the plans the screen
 * is actually offering are listed, at the prices it is offering them at — a
 * disclosure quoting a figure the user is not being offered is worse than
 * none, so the caller passes the same strings its rows print.
 */
export function SubscriptionTerms({
  plans,
  style,
}: {
  plans: readonly DisclosedPlan[];
  style?: StyleProp<ViewStyle>;
}) {
  const t = useT();
  const meter = meterColors[useColorScheme()];
  const tone = { color: meter.label };

  return (
    <View style={[styles.block, style]}>
      <Text style={[styles.terms, tone]}>{t('offer.termsIncluded')}</Text>
      {plans.map((plan) => (
        <Text key={plan.period} style={[styles.terms, tone]}>
          {plan.period === 'annual'
            ? t('offer.termsAnnual', { price: plan.price })
            : t('offer.termsWeekly', { price: plan.price })}
        </Text>
      ))}
      {/* Where the charge lands and where cancelling happens differ by store;
          the wrong one is an instruction the user cannot follow. */}
      <Text style={[styles.terms, tone]}>
        {Platform.OS === 'android' ? t('offer.termsRenewalAndroid') : t('offer.termsRenewal')}
      </Text>
    </View>
  );
}

/** Opens a legal document. Both URLs are verified pages — see `LEGAL`. */
function openLegal(url: string) {
  Linking.openURL(url).catch(() => {});
}

/**
 * Terms of Use (EULA), Privacy Policy and Restore Purchases, on one line.
 *
 * Kept with the button rather than at the bottom of a scroll: Apple wants both
 * documents reachable from the purchase flow itself, and a restore that has to
 * be scrolled to is one a returning subscriber does not find.
 */
export function LegalLinks({
  onRestore,
  disabled = false,
}: {
  onRestore: () => void;
  disabled?: boolean;
}) {
  const t = useT();
  const meter = meterColors[useColorScheme()];

  return (
    <View style={styles.links}>
      <Text
        accessibilityRole="link"
        onPress={() => openLegal(LEGAL.terms)}
        style={[styles.link, { color: meter.label }]}>
        {t('offer.linkTerms')}
      </Text>
      <Text style={[styles.link, { color: meter.unit }]}>{'  ·  '}</Text>
      <Text
        accessibilityRole="link"
        onPress={() => openLegal(LEGAL.privacy)}
        style={[styles.link, { color: meter.label }]}>
        {t('offer.linkPrivacy')}
      </Text>
      <Text style={[styles.link, { color: meter.unit }]}>{'  ·  '}</Text>
      <Text
        accessibilityRole="button"
        accessibilityState={{ disabled }}
        disabled={disabled}
        onPress={onRestore}
        style={[styles.link, { color: meter.label }]}>
        {t('offer.restore')}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: { gap: 6 },
  terms: {
    ...fonts.regular(12),
    lineHeight: 16,
    textAlign: 'center',
  },
  links: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  link: {
    ...fonts.medium(12),
    lineHeight: 18,
  },
});
