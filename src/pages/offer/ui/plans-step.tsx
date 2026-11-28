import Cancel01Icon from '@hugeicons/core-free-icons/Cancel01Icon';
import SecurityCheckIcon from '@hugeicons/core-free-icons/SecurityCheckIcon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState, type ComponentRef, type ReactNode } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { PaywallPeriod, Plan } from '@/entities/purchase';
import { fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Button } from '@/shared/ui/button';
import { ReplayMask } from '@/shared/ui/replay-mask';
import { LegalLinks } from '@/shared/ui/subscription-terms';

import { describeCta, describePlan, type ChargeStop } from '../model/plans';
import { ChargeRail } from './charge-rail';
import { PlanCard } from './plan-card';
import { PlanTile } from './plan-tile';
import { PlansTable } from './plans-table';
import { PlansThemeContext, plansThemeFor } from './plans-theme';

const GUTTER = 20;

export type PlansStepRow = {
  kind: PaywallPeriod;
  /** Null until the store answers, and null for good when the store answered
   * without it (then `missing`). */
  plan: Plan | null;
  /** The store answered and has no such plan. */
  missing: boolean;
};

/** Over the plans: what the plan is for, in her own answers. */
export type PlansHead = {
  /** "Anna, your plan is ready", or "Day 1 done, Anna." after the first
   * session. Null on the comeback view. */
  eyebrow: string | null;
  /** Her goal from the onboarding, in the words she picked it in. */
  title: string;
  /** Where it hurts, this morning's first steps, how long: her own answers,
   * kept out of any recording (`ReplayMask`). */
  chips: readonly string[];
};

export type PlansStepProps = {
  head: PlansHead;
  /** Every plan, in the lineup's order. The first two stand side by side. */
  rows: readonly PlansStepRow[];
  selected: PaywallPeriod;
  onSelect: (kind: PaywallPeriod) => void;
  /** The pill on the first card: the comeback view's alone. */
  leadBadge: string | null;
  /** The chosen plan's charges with their dates, when it has an intro. */
  stops: readonly ChargeStop[] | null;
  /** Over the button: what the store's sheet shows next (`sheetLine`). */
  confirm: string | null;
  /** A plan to bring into view: the one "What stopped you?" pointed back to.
   * `at` makes the same plan a new request. */
  reveal?: { kind: PaywallPeriod; at: number } | null;
  busy: boolean;
  onBuy: () => void;
  /** What the store said last, over the button. */
  notice: string | null;
  onRestore: () => void;
  /** Apple's offer-code sheet, where there is one. */
  onRedeemCode?: () => void;
  /** "Not now", and the close at the top: on to Home's free first run
   * (`skipPaywall`). Left out over Home (`PaywallWall`), where there is no
   * way past: then neither is drawn. */
  onSkip?: () => void;
  /** Laid over everything: "What stopped you?", the exit gift. */
  children?: ReactNode;
};

/**
 * The paywall, on one page that opens on the plans.
 *
 * Her goal at the top, in the words she picked in the onboarding, with where
 * it hurts under it; then the two plans side by side at equal weight (the
 * lineup decides which is first and chosen); the chosen plan's first charges
 * on a rail with real dates; then what is included. No credential or
 * reviewer claim: none is backed yet. The button stays docked
 * at the foot on a solid ground, with the line that says what the store's
 * sheet shows next over it, and "Not now", the renewal terms, Restore, Terms
 * and Privacy under it. Nothing in the scroll can pass under those words.
 */
export function PlansStep({
  head,
  rows,
  selected,
  onSelect,
  leadBadge,
  stops,
  confirm,
  reveal = null,
  busy,
  onBuy,
  notice,
  onRestore,
  onRedeemCode,
  onSkip,
  children,
}: PlansStepProps) {
  const scheme = useColorScheme();
  const t = useT();
  const theme = plansThemeFor(scheme);
  const { PLUS, SHEET } = theme;
  const insets = useSafeAreaInsets();

  const lead = rows[0];
  const chosen = rows.find((row) => row.kind === selected) ?? lead;
  const cta = describeCta(chosen.kind, chosen.plan, t, Platform.OS === 'android');
  const monthly = rows.find((row) => row.kind === 'monthly')?.plan ?? null;
  const copyOf = (row: PlansStepRow) => {
    const copy = describePlan(row.kind, row.plan, t, monthly);
    return row.kind === lead.kind && leadBadge != null ? { ...copy, badge: leadBadge } : copy;
  };
  const pair = rows.slice(0, 2);
  const rest = rows.slice(2);

  const [dockHeight, setDockHeight] = useState(220);

  // Where each card sits in the scroll, so a plan pointed back to by "What
  // stopped you?" can be brought into view rather than left below the fold.
  const scroll = useRef<ComponentRef<typeof ScrollView>>(null);
  const cardTops = useRef<Partial<Record<PaywallPeriod, number>>>({});
  useEffect(() => {
    if (reveal == null) return;
    const y = cardTops.current[reveal.kind];
    if (y == null) return;
    scroll.current?.scrollTo({ y: Math.max(0, y - 120), animated: true });
  }, [reveal]);

  return (
    <PlansThemeContext.Provider value={theme}>
      <View style={styles.full}>
        <StatusBar style={scheme === 'dark' ? 'light' : 'dark'} />
        <ScrollView
          ref={scroll}
          style={styles.full}
          contentContainerStyle={[styles.content, { paddingTop: insets.top + 8, paddingBottom: dockHeight + 16 }]}
          showsVerticalScrollIndicator={false}>
          {onSkip != null && (
            <View style={styles.topRow}>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={t('common.close')}
                hitSlop={12}
                onPress={() => {
                  void Haptics.selectionAsync();
                  onSkip();
                }}
                style={({ pressed }) => [styles.close, { backgroundColor: SHEET.card }, pressed && { opacity: 0.6 }]}>
                <HugeiconsIcon icon={Cancel01Icon} size={16} color={SHEET.label} strokeWidth={2.4} />
              </Pressable>
            </View>
          )}

          <View style={styles.head}>
            {head.eyebrow != null && (
              <Text style={[styles.eyebrow, { color: PLUS.lit }]} maxFontSizeMultiplier={1.3}>
                {head.eyebrow}
              </Text>
            )}
            <Text
              accessibilityRole="header"
              numberOfLines={2}
              adjustsFontSizeToFit
              minimumFontScale={0.75}
              style={[styles.title, { color: SHEET.ink }]}
              maxFontSizeMultiplier={1.25}>
              {head.title}
            </Text>
            {head.chips.length > 0 && (
              <ReplayMask style={styles.chips}>
                {head.chips.map((chip) => (
                  <View key={chip} style={[styles.chip, { backgroundColor: SHEET.card }]}>
                    <Text style={[styles.chipText, { color: SHEET.ink }]} numberOfLines={1} maxFontSizeMultiplier={1.3}>
                      {chip}
                    </Text>
                  </View>
                ))}
              </ReplayMask>
            )}
          </View>

          <View accessibilityRole="radiogroup" style={styles.plans}>
            <View style={styles.pair}>
              {pair.map((row) => (
                <View
                  key={row.kind}
                  style={styles.pairCell}
                  onLayout={(event) => {
                    cardTops.current[row.kind] = event.nativeEvent.layout.y;
                  }}>
                  <PlanTile
                    copy={copyOf(row)}
                    selected={selected === row.kind}
                    disabled={row.missing}
                    onPress={() => onSelect(row.kind)}
                  />
                </View>
              ))}
            </View>
            {rest.map((row) => (
              <View
                key={row.kind}
                onLayout={(event) => {
                  cardTops.current[row.kind] = event.nativeEvent.layout.y;
                }}>
                <PlanCard
                  copy={copyOf(row)}
                  small
                  selected={selected === row.kind}
                  radio
                  disabled={row.missing}
                  onPress={() => onSelect(row.kind)}
                />
              </View>
            ))}
          </View>

          {stops != null && <ChargeRail stops={stops} />}

          <PlansTable />

          {onRedeemCode != null && (
            <Pressable
              accessibilityRole="button"
              onPress={onRedeemCode}
              hitSlop={8}
              style={({ pressed }) => [styles.quiet, pressed && { opacity: 0.6 }]}>
              <Text style={[styles.quietText, { color: SHEET.label }]}>{t('offer.haveCode')}</Text>
            </Pressable>
          )}
        </ScrollView>

        {/* Docked on a solid ground with a hairline over it: the line that
            says what the sheet shows next can never sit over a card. */}
        <View
          onLayout={(event) => setDockHeight(Math.round(event.nativeEvent.layout.height))}
          style={[
            styles.dock,
            { backgroundColor: SHEET.surface, borderTopColor: SHEET.edge, paddingBottom: Math.max(insets.bottom, 12) + 2 },
          ]}>
          {notice != null && <Text style={[styles.notice, { color: SHEET.label }]}>{notice}</Text>}
          {notice == null && confirm != null && (
            <Text style={[styles.confirm, { color: SHEET.ink }]} maxFontSizeMultiplier={1.3}>
              {confirm}
            </Text>
          )}
          <Button label={cta.label} onPress={onBuy} loading={busy} />
          {onSkip != null && (
            <Pressable
              accessibilityRole="button"
              onPress={() => {
                void Haptics.selectionAsync();
                onSkip();
              }}
              disabled={busy}
              hitSlop={8}
              style={({ pressed }) => [styles.notNow, pressed && { opacity: 0.6 }]}>
              <Text style={[styles.notNowText, { color: SHEET.ink }]} maxFontSizeMultiplier={1.3}>
                {t('offer.plans.skip')}
              </Text>
            </Pressable>
          )}
          {cta.terms != null && (
            <View style={styles.terms}>
              <HugeiconsIcon icon={SecurityCheckIcon} size={14} color={SHEET.caption} strokeWidth={2} />
              <Text style={[styles.termsText, { color: SHEET.label }]} maxFontSizeMultiplier={1.3}>
                {cta.terms}
              </Text>
            </View>
          )}
          <LegalLinks onRestore={onRestore} disabled={busy} scheme={theme.scheme} />
        </View>

        {children}
      </View>
    </PlansThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  full: { flex: 1 },
  content: { flexGrow: 1, paddingHorizontal: GUTTER, gap: 14 },
  topRow: { flexDirection: 'row', justifyContent: 'flex-end', minHeight: 32 },
  close: { width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  head: { gap: 6 },
  eyebrow: fonts.bold(15, -0.1),
  title: { ...fonts.heavy(30, -0.8), lineHeight: 34 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: 4 },
  chip: { height: 30, paddingHorizontal: 11, borderRadius: 15, borderCurve: 'continuous', justifyContent: 'center' },
  chipText: fonts.semibold(14),
  plans: { gap: 10 },
  pair: { flexDirection: 'row', gap: 10, alignItems: 'stretch' },
  pairCell: { flex: 1 },
  quiet: { alignSelf: 'center', paddingVertical: 4 },
  quietText: fonts.semibold(15),
  dock: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingTop: 12,
    paddingHorizontal: GUTTER,
    gap: 8,
    alignItems: 'center',
  },
  notice: { ...fonts.medium(13), lineHeight: 17, textAlign: 'center' },
  confirm: { ...fonts.semibold(14, -0.1), lineHeight: 19, textAlign: 'center', paddingHorizontal: 4 },
  notNow: { alignSelf: 'center', paddingVertical: 6, paddingHorizontal: 16 },
  notNowText: fonts.bold(16),
  terms: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5, paddingHorizontal: 8 },
  termsText: { flexShrink: 1, ...fonts.medium(12), lineHeight: 16, textAlign: 'center' },
});
