import * as Haptics from 'expo-haptics';
import { useEffect, useState } from 'react';
import { AppState, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { programSummary, type ProgramSummary } from '@/entities/program';
import {
  OFFERINGS,
  PRINTED_PRICES as PRINTED,
  clearBrowsingLapsed,
  discountPercent,
  fetchShelf,
  perWeek,
  planOn,
  purchases,
  startBrowsingLapsed,
  type Plan,
  type PlanPeriod,
  type Shelf,
} from '@/entities/purchase';
import { useReferral } from '@/entities/referral';
import { fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { usePaywall } from '@/shared/lib/paywall';
import { formatPrice } from '@/shared/lib/money';
import { useColorScheme } from '@/shared/lib/theme';
import { PlanOption } from '@/shared/ui/plan-option';
import { PrimaryButton } from '@/shared/ui/primary-button';
import { LegalLinks, SubscriptionTerms, type DisclosedPlan } from '@/shared/ui/subscription-terms';

/**
 * A subscription that ended.
 *
 * Shown instead of the paywall to somebody who has paid before and no longer
 * does — a subscription cancelled or lapsed, or a legacy pass that ran out —
 * and the distinction is the point: this person is not being pitched, they are
 * being shown what they did. Every number at the top is one they produced —
 * their first retest against their last, their first logged morning against
 * their most recent, the sessions they actually completed. Nothing there is a
 * marketing figure, and anything without two real readings behind it is left
 * out rather than filled in.
 *
 * Below it, the same two plans the paywall sells, described the same way and
 * with the same disclosure, then "Not now". That is a real door — it opens the
 * app read-only, so their own history is never held hostage to a renewal. Only
 * new sessions lock, which is enforced in the session player rather than here.
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
  /**
   * Superwall's paywall for somebody whose access ended, over this screen,
   * which stays as the fallback (see the offer page). Once per view.
   */
  const paywall = usePaywall();
  useEffect(() => {
    const timer = setTimeout(() => paywall.register('paywall_expired'), 600);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const t = useT();

  // Read once, on mount. These are finished measurements — nothing can change
  // them while this screen is open, and re-deriving them on every render would
  // re-scan the whole log for nothing.
  const [summary] = useState<ProgramSummary>(() => programSummary());
  const invited = useReferral().discounted;

  // Never the win-back offering: that belongs to somebody who walked away
  // from a first purchase, and quoting it to a customer who has paid and
  // stopped would teach them that waiting is cheaper than renewing. The invite
  // price is different — it was earned, by sharing a code somebody used or by
  // joining with one — and coming back is where a customer who has already
  // paid finally gets to spend it.
  const wanted = invited ? OFFERINGS.offer : OFFERINGS.standard;

  const [shelf, setShelf] = useState<Shelf>({ offering: null, standard: null });
  /** Set only by an answer from the store — see the same flag on the paywall.
   * A fetch that failed leaves it false, so no plan is greyed out for it. */
  const [loaded, setLoaded] = useState(false);
  /** The last attempt to ask the store failed. Asked again on foreground and
   * on Renew, as on the paywall. */
  const [unreachable, setUnreachable] = useState(false);
  const [attempt, setAttempt] = useState(0);

  const stock = (next: Shelf) => {
    setShelf(next);
    setLoaded(true);
    setUnreachable(false);
  };

  useEffect(() => {
    if (!purchases.configured) return;
    let live = true;
    fetchShelf(wanted).then(
      (next) => {
        if (live) stock(next);
      },
      () => {
        if (live) setUnreachable(true);
      },
    );
    return () => {
      live = false;
    };
  }, [wanted, attempt]);

  useEffect(() => {
    if (loaded || !purchases.configured) return;
    const subscription = AppState.addEventListener('change', (next) => {
      if (next === 'active') setAttempt((n) => n + 1);
    });
    return () => subscription.remove();
  }, [loaded]);

  const annualPlan = planOn(shelf, 'annual');
  const weeklyPlan = planOn(shelf, 'weekly');
  const currency = annualPlan?.product.currencyCode ?? weeklyPlan?.product.currencyCode;
  const money = (amount: number) => formatPrice(amount, currency);

  const annualAmount = annualPlan?.product.price ?? PRINTED.annual;
  const annualText = annualPlan?.product.display ?? money(PRINTED.annual);
  const weeklyText = weeklyPlan?.product.display ?? money(PRINTED.weekly);

  /** The invite discount, from two store prices, or null — see the paywall. */
  const fullAnnual = shelf.standard?.annual ?? null;
  const offerPct =
    annualPlan != null && fullAnnual != null
      ? discountPercent(annualPlan.product.price, fullAnnual.product.price)
      : null;

  const annualMissing = loaded && annualPlan == null;
  const weeklyMissing = loaded && weeklyPlan == null;

  const [tier, setTier] = useState<PlanPeriod>('annual');
  useEffect(() => {
    if (!loaded) return;
    if (annualMissing && !weeklyMissing && tier === 'annual') setTier('weekly');
    else if (weeklyMissing && !annualMissing && tier === 'weekly') setTier('annual');
  }, [loaded, annualMissing, weeklyMissing, tier]);

  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  const unlocked = () => {
    // Re-arm the read-only concession, so a *second* lapse meets this screen
    // again rather than the browsing mode the first one was answered with.
    clearBrowsingLapsed();
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    onUnlocked?.();
  };

  const buy = async () => {
    if (busy) return;
    setNotice(null);

    const plan = tier === 'annual' ? annualPlan : weeklyPlan;
    // No plan means the store never answered, or answered without this
    // package. Reporting a failed charge here would describe a transaction
    // that was never attempted.
    if (plan == null) {
      if (purchases.configured && !loaded) {
        // Ask again now — see the same branch on the paywall. A fresh answer
        // fills the prices in; buying waits for a second tap.
        setBusy(true);
        try {
          stock(await fetchShelf(wanted));
          setBusy(false);
          Haptics.selectionAsync();
          return;
        } catch {
          setBusy(false);
          setUnreachable(true);
        }
      }
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
      setNotice(loaded ? t('offer.planUnavailable') : t('offer.storeUnreachable'));
      return;
    }

    setBusy(true);
    const result = await purchases.buy(plan);
    setBusy(false);

    if (result.status === 'purchased') {
      unlocked();
      return;
    }
    // They backed out of Apple's sheet. They know; a message would be the app
    // commenting on their decision.
    if (result.status === 'cancelled') return;
    // Waiting on Ask to Buy or a bank. Not an error; if it goes through, the
    // store pushes the entitlement and the guard leaves this screen.
    if (result.status === 'pending') {
      setNotice(t('offer.pending'));
      return;
    }
    if (result.status === 'failed') {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      setNotice(result.message);
      return;
    }
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    setNotice(t('offer.storeUnreachable'));
  };

  /** A subscription renewed elsewhere — on another device, or in Settings —
   * is found here, rather than by buying it a second time. */
  const restore = async () => {
    if (busy) return;
    setNotice(null);
    setBusy(true);
    const result = await purchases.restore();
    setBusy(false);

    if (result.status === 'restored') {
      unlocked();
      return;
    }
    if (result.status === 'nothing-found') {
      setNotice(t('offer.nothingRestored'));
      return;
    }
    if (result.status === 'failed') {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      setNotice(t('offer.restoreFailed'));
    }
  };

  const dismiss = () => {
    Haptics.selectionAsync();
    startBrowsingLapsed();
    onDismiss?.();
  };

  const select = (period: PlanPeriod) => {
    Haptics.selectionAsync();
    setTier(period);
  };

  /** A store price, or no store at all — see `priced` on the paywall. The
   * disclosure and the line over the button never quote a fallback figure
   * while a real store has not answered. */
  const priced = (plan: Plan | null) => plan != null || !purchases.configured;

  const disclosed: DisclosedPlan[] = [
    ...(annualMissing || !priced(annualPlan) ? [] : [{ period: 'annual' as const, price: annualText }]),
    ...(weeklyMissing || !priced(weeklyPlan) ? [] : [{ period: 'weekly' as const, price: weeklyText }]),
  ];
  const ctaPriced = priced(tier === 'annual' ? annualPlan : weeklyPlan);
  const shownNotice = notice ?? (unreachable ? t('offer.storeUnreachable') : null);

  return (
    <View style={styles.host}>
      <ScrollView
        contentContainerStyle={[styles.scroll, { paddingTop: insets.top + 32, paddingBottom: 24 }]}
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

        <Text style={[styles.plansTitle, { color: meter.ink }]}>
          {t('pages.expired.plansTitle')}
        </Text>
        <View accessibilityRole="radiogroup">
          <PlanOption
            title={t('offer.annualTitle')}
            badge={offerPct != null ? t('offer.badgeOff', { percent: offerPct }) : undefined}
            price={t('offer.annualPrice', { price: annualText })}
            was={offerPct != null && fullAnnual != null ? fullAnnual.product.display : undefined}
            note={t('offer.annualNote', { perWeek: money(perWeek(annualAmount)) })}
            disabled={annualMissing}
            selected={tier === 'annual' && !annualMissing}
            onPress={() => select('annual')}
          />
          <PlanOption
            title={t('offer.weeklyTitle')}
            price={t('offer.weeklyPrice', { price: weeklyText })}
            note={t('offer.weeklyNote')}
            disabled={weeklyMissing}
            selected={tier === 'weekly' && !weeklyMissing}
            onPress={() => select('weekly')}
          />
        </View>

        <SubscriptionTerms plans={disclosed} style={styles.terms} />
      </ScrollView>

      <View style={[styles.foot, { paddingBottom: insets.bottom + 8 }]}>
        {shownNotice != null ? (
          <Text style={[styles.notice, { color: meter.label }]}>{shownNotice}</Text>
        ) : null}
        {ctaPriced ? (
          <Text style={[styles.ctaTerms, { color: meter.label }]}>
            {tier === 'annual'
              ? t('offer.ctaAnnual', { price: annualText })
              : t('offer.ctaWeekly', { price: weeklyText })}
          </Text>
        ) : null}

        <PrimaryButton
          label={busy ? t('pages.expired.busy') : t('pages.expired.renew')}
          onPress={() => void buy()}
          disabled={busy}
        />

        <Pressable
          accessibilityRole="button"
          onPress={dismiss}
          disabled={busy}
          style={({ pressed }) => [styles.tertiary, pressed && { opacity: 0.6 }]}>
          <Text style={[styles.tertiaryLabel, { color: meter.caption }]}>
            {t('pages.expired.notNow')}
          </Text>
        </Pressable>

        <LegalLinks onRestore={() => void restore()} disabled={busy} />
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
  title: { ...fonts.heavy(30, -0.8), lineHeight: 34 },
  lede: fonts.medium(15, -0.2),
  card: { marginTop: 20, borderRadius: 20, padding: 20, gap: 18 },
  change: { gap: 4 },
  changeLabel: fonts.semibold(13, -0.1),
  changeRow: { flexDirection: 'row', alignItems: 'baseline', gap: 8 },
  from: fonts.semibold(24, -0.6),
  arrow: fonts.medium(17),
  to: fonts.heavy(32, -0.8),
  empty: fonts.medium(15, -0.2),
  keeps: { marginTop: 16, ...fonts.medium(13, -0.1) },
  plansTitle: { marginTop: 24, marginBottom: 4, ...fonts.bold(20, -0.4) },
  terms: { marginTop: 12 },
  foot: { paddingHorizontal: 24, paddingTop: 8, gap: 8 },
  notice: { ...fonts.medium(13), lineHeight: 17, textAlign: 'center' },
  ctaTerms: { ...fonts.medium(13), lineHeight: 17, textAlign: 'center' },
  tertiary: { alignItems: 'center', paddingVertical: 6 },
  tertiaryLabel: fonts.medium(15, -0.2),
});
