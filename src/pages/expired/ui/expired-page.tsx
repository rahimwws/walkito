import * as Haptics from 'expo-haptics';
import { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { programSummary, type ProgramSummary } from '@/entities/program';
import {
  OFFERINGS,
  PRINTED_PRICES as PRINTED,
  clearBrowsingLapsed,
  purchases,
  startBrowsingLapsed,
  type Offering,
  type Plan,
} from '@/entities/purchase';
import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { formatPrice } from '@/shared/lib/money';
import { useColorScheme } from '@/shared/lib/theme';
import { PrimaryButton } from '@/shared/ui/primary-button';

/**
 * The end of the twelve weeks.
 *
 * Shown instead of the paywall to somebody whose programme access has run out,
 * and the distinction is the point: this person is not being pitched, they are
 * being shown what they did. Every number on the screen is one they produced —
 * their first retest against their last, their first logged morning against
 * their most recent, the sessions they actually completed. Nothing here is a
 * marketing figure, and anything without two real readings behind it is left
 * out rather than filled in.
 *
 * Three ways forward, in the order they serve the user rather than the revenue:
 * keep going monthly, run another twelve weeks, or neither. "Not now" is a real
 * door — it opens the app read-only, so twelve weeks of their own history is
 * never held hostage to a renewal. Only new sessions lock, which is enforced in
 * the session player rather than here.
 */

type Props = {
  /** Called once access is restored, so the router can leave this screen. The
   * entitlement guard does the actual navigating; this is for the page to stop
   * showing a spinner. */
  onUnlocked?: () => void;
  /** "Not now" — browse read-only. */
  onDismiss?: () => void;
};

export function ExpiredPage({ onUnlocked, onDismiss }: Props) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const accent = accents[scheme];
  const insets = useSafeAreaInsets();
  const t = useT();

  // Read once, on mount. These are finished measurements from a finished
  // programme — nothing can change them while this screen is open, and
  // re-deriving them on every render would re-scan the whole log for nothing.
  const [summary] = useState<ProgramSummary>(() => programSummary());

  const [offering, setOffering] = useState<Offering | null>(null);
  useEffect(() => {
    if (!purchases.configured) return;
    let live = true;
    // The standard offering, deliberately. The win-back discount belongs to
    // somebody who walked away from a first purchase; quoting it to a customer
    // who has already paid once and finished the plan would teach them that
    // waiting is cheaper than renewing.
    void purchases.offering(OFFERINGS.standard).then((found) => {
      if (live) setOffering(found);
    });
    return () => {
      live = false;
    };
  }, []);

  const monthlyPlan = offering?.monthly ?? null;
  const programPlan = offering?.program ?? null;
  const currency = monthlyPlan?.product.currencyCode ?? programPlan?.product.currencyCode;

  const monthlyText =
    monthlyPlan?.product.display ?? formatPrice(PRINTED.monthly, currency);
  const programText =
    programPlan?.product.display ?? formatPrice(PRINTED.program, currency);

  const [busy, setBusy] = useState<'monthly' | 'program' | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const buy = async (which: 'monthly' | 'program', plan: Plan | null) => {
    if (busy != null) return;
    setNotice(null);

    // No plan means no store was reached. Reporting a failed charge here would
    // describe a transaction that was never attempted.
    if (plan == null) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
      setNotice(t('pages.expired.storeUnreachable'));
      return;
    }

    setBusy(which);
    const result = await purchases.buy(plan);
    setBusy(null);

    if (result.status === 'purchased') {
      // Re-arm the read-only concession, so a *second* expiry meets this screen
      // again rather than the browsing mode the first one was answered with.
      clearBrowsingLapsed();
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      onUnlocked?.();
      return;
    }
    // They backed out of Apple's sheet. They know; a message would be the app
    // commenting on their decision.
    if (result.status === 'cancelled') return;
    if (result.status === 'failed') {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      setNotice(result.message);
      return;
    }
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    setNotice(t('pages.expired.storeUnreachable'));
  };

  const dismiss = () => {
    Haptics.selectionAsync();
    startBrowsingLapsed();
    onDismiss?.();
  };

  return (
    <View style={styles.host}>
      <ScrollView
        contentContainerStyle={[
          styles.scroll,
          { paddingTop: insets.top + 32, paddingBottom: 24 },
        ]}
        showsVerticalScrollIndicator={false}>
        <Text style={[styles.title, { color: meter.ink }]}>{t('pages.expired.title')}</Text>
        <Text style={[styles.lede, { color: meter.caption }]}>
          {summary.sessions > 0
            ? t('pages.expired.lede', { count: summary.sessions })
            : t('pages.expired.ledeNoSessions')}
        </Text>

        <View style={[styles.card, { backgroundColor: colors.card }]}>
          {summary.calf != null ? (
            <Change
              label={t('pages.expired.calfRaises')}
              from={String(summary.calf.from)}
              to={String(summary.calf.to)}
              tint={meter.positive}
              caption={meter.caption}
            />
          ) : null}
          {summary.pain != null ? (
            <Change
              label={t('pages.expired.morningPain')}
              from={String(summary.pain.from)}
              to={String(summary.pain.to)}
              tint={meter.positive}
              caption={meter.caption}
            />
          ) : null}
          {summary.calf == null && summary.pain == null ? (
            <Text style={[styles.empty, { color: meter.caption }]}>
              {t('pages.expired.nothingMeasured')}
            </Text>
          ) : null}
        </View>

        <Text style={[styles.keeps, { color: meter.caption }]}>{t('pages.expired.keeps')}</Text>
      </ScrollView>

      <View style={[styles.foot, { paddingBottom: insets.bottom + 12 }]}>
        {notice != null ? (
          <Text style={[styles.notice, { color: accent.amber.fill }]}>{notice}</Text>
        ) : null}

        <PrimaryButton
          label={
            busy === 'monthly'
              ? t('pages.expired.busy')
              : t('pages.expired.monthly', { price: monthlyText })
          }
          onPress={() => void buy('monthly', monthlyPlan)}
          disabled={busy != null}
        />

        <Pressable
          accessibilityRole="button"
          onPress={() => void buy('program', programPlan)}
          disabled={busy != null}
          style={({ pressed }) => [styles.secondary, pressed && { opacity: 0.6 }]}>
          <Text style={[styles.secondaryLabel, { color: meter.ink }]}>
            {t('pages.expired.program', { price: programText })}
          </Text>
        </Pressable>

        <Pressable
          accessibilityRole="button"
          onPress={dismiss}
          disabled={busy != null}
          style={({ pressed }) => [styles.tertiary, pressed && { opacity: 0.6 }]}>
          <Text style={[styles.tertiaryLabel, { color: meter.caption }]}>
            {t('pages.expired.notNow')}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

/** One measured before→after pair. The arrow carries the meaning, so neither
 * number is coloured by whether it went the right way — see the colour note in
 * AGENTS.md. */
function Change({
  label,
  from,
  to,
  tint,
  caption,
}: {
  label: string;
  from: string;
  to: string;
  tint: string;
  caption: string;
}) {
  return (
    <View style={styles.change}>
      <Text style={[styles.changeLabel, { color: caption }]}>{label}</Text>
      <View style={styles.changeRow}>
        <Text style={[styles.from, { color: caption }]}>{from}</Text>
        <Text style={[styles.arrow, { color: caption }]}>→</Text>
        <Text style={[styles.to, { color: tint }]}>{to}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  host: { flex: 1 },
  scroll: { paddingHorizontal: 24, gap: 8 },
  title: { fontSize: 30, fontFamily: fonts.heavy, letterSpacing: -0.8, lineHeight: 34 },
  lede: { fontSize: 15, fontFamily: fonts.medium, letterSpacing: -0.2 },
  card: { marginTop: 20, borderRadius: 20, padding: 20, gap: 18 },
  change: { gap: 4 },
  changeLabel: { fontSize: 13, fontFamily: fonts.semibold, letterSpacing: -0.1 },
  changeRow: { flexDirection: 'row', alignItems: 'baseline', gap: 8 },
  from: { fontSize: 24, fontFamily: fonts.semibold, letterSpacing: -0.6 },
  arrow: { fontSize: 17, fontFamily: fonts.medium },
  to: { fontSize: 32, fontFamily: fonts.heavy, letterSpacing: -0.8 },
  empty: { fontSize: 15, fontFamily: fonts.medium, letterSpacing: -0.2 },
  keeps: { marginTop: 16, fontSize: 13, fontFamily: fonts.medium, letterSpacing: -0.1 },
  foot: { paddingHorizontal: 24, gap: 10 },
  notice: { fontSize: 13, fontFamily: fonts.medium, textAlign: 'center' },
  secondary: { alignItems: 'center', paddingVertical: 13 },
  secondaryLabel: { fontSize: 16, fontFamily: fonts.semibold, letterSpacing: -0.2 },
  tertiary: { alignItems: 'center', paddingVertical: 8 },
  tertiaryLabel: { fontSize: 15, fontFamily: fonts.medium, letterSpacing: -0.2 },
});
