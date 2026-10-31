import * as Haptics from 'expo-haptics';
import { useEffect, useRef, useState } from 'react';
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
  usePassWindow,
  type Plan,
  type PaywallPeriod,
  type Shelf,
} from '@/entities/purchase';
import { fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { usePaywall } from '@/shared/lib/paywall';
import { formatPrice } from '@/shared/lib/money';
import { useColorScheme } from '@/shared/lib/theme';
import { Mascot, premiumRig, type MascotHandle } from '@/shared/ui/mascot';
import { PlanOption } from '@/shared/ui/plan-option';
import { PrimaryButton } from '@/shared/ui/primary-button';
import { useSplashRevealed } from '@/shared/ui/splash';
import { LegalLinks, SubscriptionTerms, type DisclosedPlan } from '@/shared/ui/subscription-terms';

/**
 * A subscription that ended.
 *
 * Shown instead of the paywall to somebody who has paid before and no longer
 * does — a subscription cancelled or lapsed, or a 3-month pass that ran out —
 * and the distinction is the point: this person is not being pitched, they are
 * being shown what they did. Every number at the top is one they produced —
 * their first retest against their last, their first logged morning against
 * their most recent, the sessions they actually completed. Nothing there is a
 * marketing figure, and anything without two real readings behind it is left
 * out rather than filled in.
 *
 * Below it, the plans the standard offering sells (the annual first, then the
 * monthly and lifetime ones, or Android's weekly one: whatever the store
 * holds), each with the disclosure for it, then "Not now". That is a real door — it opens the
 * app read-only, so their own history is never held hostage to a renewal. Only
 * new sessions lock, which is enforced in the session player rather than here.
 */

/** The mascot beside the title: the crown on, the key held up. */
const FIGURE = 72;

/** The plans under the annual one, in this order, when the offering has them. */
const OTHERS: readonly PaywallPeriod[] = ['monthly', 'weekly', 'lifetime'];
/** He holds the key out once, as the screen settles. */
const PRESENT_MS = 650;

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

  /**
   * What ended was a 3-month pass, which never was a subscription: the title
   * and the button say "3 months" and "Keep going", never "subscription" or
   * "renew". The pass's end is the evidence, since its days end last: a pass
   * bought beside a subscription is queued behind it (`pass.ts`). The entity
   * keeps no record of a subscription that has lapsed, so somebody who
   * subscribed after a pass ran out reads the pass's words too.
   */
  const pass = usePassWindow();
  const passEnded = pass.expiresAt != null && pass.expiresAt <= Date.now();

  // Never the win-back offering: that belongs to somebody who walked away
  // from a first purchase, and quoting it to a customer who has paid and
  // stopped would teach them that waiting is cheaper than renewing. The invite
  // price used to be quoted here, unlocked by a code; App Review rejected that
  // (Guideline 3.1.1), so renewing is the standard price.
  const wanted = OFFERINGS.standard;

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

  /** Each plan the standard offering holds, from the store. */
  const plans: Readonly<Record<PaywallPeriod, Plan | null>> = {
    annual: planOn(shelf, 'annual'),
    monthly: planOn(shelf, 'monthly'),
    weekly: planOn(shelf, 'weekly'),
    lifetime: planOn(shelf, 'lifetime'),
  };
  const annualPlan = plans.annual;
  const currency = annualPlan?.product.currencyCode ?? plans.weekly?.product.currencyCode;
  const money = (amount: number) => formatPrice(amount, currency);

  /**
   * No store at all (a build without a usable key): the first line-up's
   * printed figures hold the layout, as they always did. With a store, no
   * figure is quoted until it has answered, so nobody sees a price the store
   * would not charge.
   */
  const noStore = !purchases.configured;
  /** A plan's billed amount, the store's own string, or null until there is one. */
  const priceText = (kind: PaywallPeriod): string | null => {
    const plan = plans[kind];
    if (plan != null) return plan.priceString;
    if (!noStore) return null;
    if (kind === 'annual') return money(PRINTED.annual);
    if (kind === 'weekly') return money(PRINTED.weekly);
    return null;
  };
  const annualAmount = annualPlan?.product.price ?? (noStore ? PRINTED.annual : null);
  const annualText = priceText('annual');
  /** The plans offered under the annual one: whatever the offering holds (iOS
   * sells monthly and lifetime, Android still weekly). */
  const others = OTHERS.filter((kind) => priceText(kind) != null);

  /** The invite discount, from two store prices, or null — see the paywall. */
  const fullAnnual = shelf.standard?.annual ?? null;
  const offerPct =
    annualPlan != null && fullAnnual != null
      ? discountPercent(annualPlan.product.price, fullAnnual.product.price)
      : null;

  const annualMissing = loaded && annualPlan == null;

  const [tier, setTier] = useState<PaywallPeriod>('annual');
  useEffect(() => {
    if (!loaded) return;
    // Never leave the selection on a plan that cannot be bought.
    if (tier === 'annual' && annualMissing && others.length > 0) setTier(others[0]);
    else if (tier !== 'annual' && plans[tier] == null && !annualMissing) setTier('annual');
    // `plans` and `others` follow `shelf`.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded, annualMissing, tier, shelf]);

  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  // The key held out once, as an invitation and nothing more; then he only
  // breathes, and holds still while the store's own sheet is up. This screen
  // is often the first at launch: under the splash he holds still and keeps
  // his move until it has gone.
  const mascot = useRef<MascotHandle>(null);
  const revealed = useSplashRevealed();
  const presented = useRef(false);
  useEffect(() => {
    if (presented.current || !revealed) return undefined;
    const timer = setTimeout(() => {
      presented.current = true;
      mascot.current?.play('present');
    }, PRESENT_MS);
    return () => clearTimeout(timer);
  }, [revealed]);

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

    const plan = plans[tier];
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

  const select = (period: PaywallPeriod) => {
    Haptics.selectionAsync();
    setTier(period);
  };

  /** A store price, or no store at all — see `priced` on the paywall. The
   * disclosure and the line over the button never quote a fallback figure
   * while a real store has not answered. */
  const priced = (plan: Plan | null) => plan != null || !purchases.configured;

  const disclosed: DisclosedPlan[] = (['annual', ...others] as const).flatMap((kind) => {
    const price = priceText(kind);
    if (price == null || !priced(plans[kind]) || (kind === 'annual' && annualMissing)) return [];
    return [{ period: kind, price }];
  });
  /** The line over the button, for the plan chosen: what it charges, and that
   * it renews (or that it is one payment). */
  const ctaLine = (() => {
    const price = priceText(tier);
    if (price == null || !priced(plans[tier])) return null;
    switch (tier) {
      case 'annual':
        return t('offer.ctaAnnual', { price });
      case 'monthly':
        return t('offer.ctaMonthly', { price });
      case 'weekly':
        return t('offer.ctaWeekly', { price });
      case 'lifetime':
        return t('offer.ctaLifetime', { price });
    }
  })();
  /** One plan under the annual one, as its row says it. */
  const rowFor = (kind: PaywallPeriod, price: string) => {
    switch (kind) {
      case 'monthly':
        return { title: t('offer.plans.monthly'), price: t('offer.monthlyPrice', { price }), note: t('offer.plans.monthlyNote') };
      case 'weekly':
        return { title: t('offer.weeklyTitle'), price: t('offer.weeklyPrice', { price }), note: t('offer.weeklyNote') };
      case 'lifetime':
        return { title: t('offer.plans.lifetime'), price: t('offer.lifetimePrice', { price }), note: t('offer.plans.lifetimeNote') };
      case 'annual':
        return { title: t('offer.annualTitle'), price: t('offer.annualPrice', { price }), note: undefined };
    }
  };
  const shownNotice = notice ?? (unreachable ? t('offer.storeUnreachable') : null);

  return (
    <View style={styles.host}>
      <ScrollView
        contentContainerStyle={[styles.scroll, { paddingTop: insets.top + 32, paddingBottom: 24 }]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.head}>
          <Text style={[styles.title, styles.headTitle, { color: meter.ink }]}>
            {passEnded ? t('pages.expired.titlePass') : t('pages.expired.title')}
          </Text>
          {/* Decoration: hidden from anyone listening. */}
          <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants" style={styles.figure}>
            <Mascot
              ref={mascot}
              rig={premiumRig}
              size={FIGURE}
              surface={colors.background}
              paused={busy || !revealed}
            />
          </View>
        </View>
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
            // Blank until the store has answered: no figure it has not given.
            price={annualText != null ? t('offer.annualPrice', { price: annualText }) : ''}
            was={offerPct != null && fullAnnual != null ? fullAnnual.product.display : undefined}
            note={
              annualAmount != null
                ? t('offer.annualNote', { perWeek: annualPlan?.pricePerWeekString ?? money(perWeek(annualAmount)) })
                : undefined
            }
            disabled={annualMissing}
            selected={tier === 'annual' && !annualMissing}
            onPress={() => select('annual')}
          />
          {others.map((kind) => {
            const row = rowFor(kind, priceText(kind) ?? '');
            return (
              <PlanOption
                key={kind}
                title={row.title}
                price={row.price}
                note={row.note}
                selected={tier === kind}
                onPress={() => select(kind)}
              />
            );
          })}
        </View>

        <SubscriptionTerms plans={disclosed} style={styles.terms} />
      </ScrollView>

      <View style={[styles.foot, { paddingBottom: insets.bottom + 8 }]}>
        {shownNotice != null ? (
          <Text style={[styles.notice, { color: meter.label }]}>{shownNotice}</Text>
        ) : null}
        {ctaLine != null ? <Text style={[styles.ctaTerms, { color: meter.label }]}>{ctaLine}</Text> : null}

        <PrimaryButton
          label={
            busy ? t('pages.expired.busy') : passEnded ? t('pages.expired.keepGoing') : t('pages.expired.renew')
          }
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
  /** The title and the mascot beside it. */
  head: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  headTitle: { flex: 1 },
  figure: { width: FIGURE, height: FIGURE },
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
