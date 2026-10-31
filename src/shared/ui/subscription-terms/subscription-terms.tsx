import { Linking, Platform, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';

import { LEGAL, fonts, meterColors } from '@/shared/config';
import { useT, type Translate } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

/** One plan the screen is offering, as the disclosure names it. */
export type DisclosedPlan = {
  /** `lifetime` is a one-time purchase, not a subscription. */
  period: 'annual' | 'monthly' | 'weekly' | 'lifetime';
  /** The store's own billed amount for one period (or the one payment),
   * already formatted. */
  price: string;
};

function termsFor(plan: DisclosedPlan, t: Translate): string {
  switch (plan.period) {
    case 'annual':
      return t('offer.termsAnnual', { price: plan.price });
    case 'monthly':
      return t('offer.termsMonthly', { price: plan.price });
    case 'weekly':
      return t('offer.termsWeekly', { price: plan.price });
    case 'lifetime':
      return t('offer.termsLifetime', { price: plan.price });
  }
}

/**
 * The disclosure App Review Guideline 3.1.2 requires on a screen that sells an
 * auto-renewable subscription, as one block both such screens share.
 *
 * Kept to the minimum App Review needs: each plan's length and price, then
 * one line on renewal and where to cancel. What it includes is the screen
 * above it. Only the plans the screen
 * is actually offering are listed, at the prices it is offering them at — a
 * disclosure quoting a figure the user is not being offered is worse than
 * none, so the caller passes the same strings its rows print. The renewal
 * paragraph is left out only when every plan listed is a lifetime purchase,
 * which renews nothing.
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
  const renews = plans.length === 0 || plans.some((plan) => plan.period !== 'lifetime');

  return (
    <View style={[styles.block, style]}>
      {plans.map((plan) => (
        <Text key={plan.period} style={[styles.terms, tone]}>
          {termsFor(plan, t)}
        </Text>
      ))}
      {/* Where the charge lands and where cancelling happens differ by store;
          the wrong one is an instruction the user cannot follow. */}
      {renews && (
        <Text style={[styles.terms, tone]}>
          {Platform.OS === 'android' ? t('offer.termsRenewalAndroid') : t('offer.termsRenewal')}
        </Text>
      )}
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
 *
 * `scheme` pins the colours for a surface that does not follow the app's
 * appearance (the plans step's sheet is white in both).
 */
export function LegalLinks({
  onRestore,
  disabled = false,
  scheme,
}: {
  onRestore: () => void;
  disabled?: boolean;
  scheme?: 'light' | 'dark';
}) {
  const t = useT();
  const app = useColorScheme();
  const meter = meterColors[scheme ?? app];

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
