import Cancel01Icon from '@hugeicons/core-free-icons/Cancel01Icon';
import SecurityCheckIcon from '@hugeicons/core-free-icons/SecurityCheckIcon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useIsFocused } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState, type ComponentRef, type ReactNode } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context';

import { DAY_ONE_CLIPS } from '@/features/home-tour';
import type { PaywallPeriod, Plan } from '@/entities/purchase';
import { clipShape, fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Button } from '@/shared/ui/button';
import { GuidelinesLine } from '@/shared/ui/guidelines-line';
import { LegalLinks } from '@/shared/ui/subscription-terms';
import { CLIP_BACKDROP, ExercisePreview } from '@/widgets/session-player';

import { describeCta, describePlan, splitHighlight } from '../model/plans';
import { FootCheckResult } from './foot-check-result';
import { PlanCard } from './plan-card';
import { PlansTable } from './plans-table';
import { PlansThemeContext, plansThemeFor } from './plans-theme';
import { CarlaLine, StoryHead, type PlansStory } from './story-head';
import { TrialTimeline, trialDays } from './trial-timeline';

/** The first move of Day 1, seated: the plantar stretch, hand on the toes. */
const HERO_CLIP = DAY_ONE_CLIPS[0];
/** The clip's height, at most: enough to see a hand and a foot, small enough
 * that the plans start on the first screen. */
const HERO_HEIGHT = 124;
const GUTTER = 22;

export type PlansStepRow = {
  kind: PaywallPeriod;
  /** Null until the store answers, and null for good when the store answered
   * without it (then `missing`). */
  plan: Plan | null;
  /** The store answered and has no such plan. */
  missing: boolean;
};

export type PlansStepProps = {
  /** The first view's step bar. */
  stepBar?: ReactNode;
  /** Every plan, in order, from the start: the annual, the monthly (or the
   * weekly where the store has no monthly), the lifetime as a smaller card. */
  rows: readonly PlansStepRow[];
  selected: PaywallPeriod;
  onSelect: (kind: PaywallPeriod) => void;
  /** The pill on the annual: the comeback view's alone. */
  leadBadge: string | null;
  /** The comeback view: its own headline. */
  comeback: boolean;
  /** Their first name, for the free week's headline; null without one. */
  name: string | null;
  /** Her Foot Check over the plans: when this page is the first she sees,
   * with no screen before it to have shown it. */
  result: boolean;
  /**
   * The view after the first session, in place of the clip: its own heading
   * (`line` marks its lit words with brackets, as the headline does) and the
   * picture of the day that comes next.
   */
  after?: { title: string; line: string; picture: ReactNode } | null;
  /** After the onboarding's story: her plan's name over the plans, her goals,
   * her first-step routine and how the plan runs, in place of the clip. */
  story?: PlansStory | null;
  /** Over the button: what happens next and what is paid today. */
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
  /** Something is over the step (the store's sheet, a question): the
   * clip holds still. */
  covered: boolean;
  /** "Not now", and the close at the top: on to Home's free first run
   * (`skipPaywall`). Left out over Home (`PaywallWall`), where there is no
   * way past: then neither is drawn. */
  onSkip?: () => void;
  /** Laid over everything: "What stopped you?", the exit gift. */
  children?: ReactNode;
};

/**
 * The plans: the last step of the first paywall, and every view after it.
 *
 * One page in the app's own appearance, dark like the onboarding: a real
 * clip of Day 1's first move (seated, a hand drawing the toes back), muted,
 * looping, and still whenever the screen is out of focus or something covers
 * it; her own Foot Check when no screen before this one showed it; the line
 * that says the exercises follow physical therapy guidelines; then every plan
 * at once, the annual chosen. No cartoon, no sky, no "Most popular" (nothing
 * here is popular yet), no "Show all plans": the monthly and the lifetime are
 * the honest other ways in, and a choice nobody scrolls to is not a choice.
 *
 * Every price is the store's. Each card's largest figure is the amount billed,
 * as Apple asks; the annual's "about … a month" is the smaller line under its
 * title. The free week's three days run inside the annual's card (today,
 * "Day 5: We remind you", the first payment), which is where the reminder
 * screen that used to come before this one now lives.
 *
 * Over the button, one line says what happens next: Apple's own sheet, and
 * what is paid today. A hard paywall: "Not now" and the close lead to Home's
 * day-one session and then the plans again (`skipPaywall`), never into the
 * app, and nothing new or cheaper appears after either.
 *
 * After the first session (`after`) the step carries on from it instead of
 * starting over: "Day 1 done" and the day that comes next (its own clip)
 * where the hero clip was, then the same plans, button and terms.
 */
export function PlansStep({
  stepBar,
  rows,
  selected,
  onSelect,
  leadBadge,
  comeback,
  name,
  result,
  after = null,
  story = null,
  confirm,
  reveal = null,
  busy,
  onBuy,
  notice,
  onRestore,
  onRedeemCode,
  covered,
  onSkip,
  children,
}: PlansStepProps) {
  const scheme = useColorScheme();
  const t = useT();
  const theme = plansThemeFor(scheme);
  const { PLUS, SHEET } = theme;
  const insets = useSafeAreaInsets();
  const frame = useSafeAreaFrame();
  const focused = useIsFocused();

  const lead = rows[0];
  /** The annual starts with a free trial for this customer. */
  const freeDays = comeback || lead == null ? null : trialDays(lead.plan);

  const chosen = rows.find((row) => row.kind === selected) ?? lead;
  const cta = describeCta(chosen.kind, chosen.plan, t, Platform.OS === 'android');
  // The free days are the annual's: with another plan chosen the headline
  // stops promising them.
  const headline = splitHighlight(
    freeDays != null && chosen.kind === lead.kind
      ? name != null
        ? t('offer.plans.headlineTrialNamed', { count: freeDays, name })
        : t('offer.plans.headlineTrial', { count: freeDays })
      : t(comeback ? 'offer.plans.headlineComeback' : 'offer.plans.headline'),
  );

  const shape = clipShape(HERO_CLIP);
  const clipWidth = Math.round(Math.min(frame.width - GUTTER * 2, HERO_HEIGHT * shape));
  const clip = { width: clipWidth, height: Math.round(clipWidth / shape) };

  const [dockHeight, setDockHeight] = useState(170);
  /** The dock's fade, from the page under it. */
  const veil = (alpha: number) =>
    `rgba(${parseInt(SHEET.surface.slice(1, 3), 16)},${parseInt(SHEET.surface.slice(3, 5), 16)},${parseInt(SHEET.surface.slice(5, 7), 16)},${alpha})`;

  // Where each card sits in the scroll, so a plan pointed back to by "What
  // stopped you?" can be brought into view rather than left below the fold.
  const scroll = useRef<ComponentRef<typeof ScrollView>>(null);
  const plansTop = useRef(0);
  const cardTops = useRef<Partial<Record<PaywallPeriod, number>>>({});
  useEffect(() => {
    if (reveal == null) return;
    const y = cardTops.current[reveal.kind];
    if (y == null) return;
    scroll.current?.scrollTo({ y: Math.max(0, plansTop.current + y - 120), animated: true });
  }, [reveal]);

  return (
    <PlansThemeContext.Provider value={theme}>
      <View style={styles.full}>
        <StatusBar style={scheme === 'dark' ? 'light' : 'dark'} />
        <>
          <ScrollView
            ref={scroll}
            style={styles.full}
            contentContainerStyle={[styles.content, { paddingTop: insets.top + 12, paddingBottom: dockHeight + 12 }]}
            showsVerticalScrollIndicator={false}>
            {(stepBar != null || onSkip != null) && (
              <View style={styles.topRow}>
                <View style={styles.topBar}>{stepBar}</View>
                {onSkip != null && (
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
                )}
              </View>
            )}

            {story != null ? (
              <StoryHead
                story={story}
                headline={headline.map((run, i) =>
                  run.lit ? (
                    <Text key={i} style={{ color: PLUS.lit }}>
                      {run.text}
                    </Text>
                  ) : (
                    run.text
                  ),
                )}
              />
            ) : after != null ? (
              <View style={styles.after}>
                <Text
                  accessibilityRole="header"
                  numberOfLines={2}
                  adjustsFontSizeToFit
                  minimumFontScale={0.75}
                  style={[styles.afterTitle, { color: SHEET.ink }]}
                  maxFontSizeMultiplier={1.25}>
                  {after.title}
                </Text>
                <Text style={[styles.afterLine, { color: SHEET.label }]} maxFontSizeMultiplier={1.3}>
                  {splitHighlight(after.line).map((run, i) =>
                    run.lit ? (
                      <Text key={i} style={{ color: PLUS.lit }}>
                        {run.text}
                      </Text>
                    ) : (
                      run.text
                    ),
                  )}
                </Text>
                {after.picture}
              </View>
            ) : (
              <>
                {/* Real feet, before a word: the first move of Day 1. */}
                <View style={[styles.clip, clip, { backgroundColor: CLIP_BACKDROP }]}>
                  <ExercisePreview
                    exerciseId={HERO_CLIP}
                    style={clip}
                    aspectRatio={shape}
                    fit="cover"
                    playing={focused && !covered}
                  />
                </View>
                {/* Two lines at most: a long language comes down a few sizes
                    rather than pushing the plans under the button. */}
                <Text
                  accessibilityRole="header"
                  numberOfLines={2}
                  adjustsFontSizeToFit
                  minimumFontScale={0.7}
                  style={[styles.headline, { color: SHEET.ink }]}
                  maxFontSizeMultiplier={1.25}>
                  {headline.map((run, i) =>
                    run.lit ? (
                      <Text key={i} style={{ color: PLUS.lit }}>
                        {run.text}
                      </Text>
                    ) : (
                      run.text
                    ),
                  )}
                </Text>
              </>
            )}

            {result && <FootCheckResult surface={SHEET.card} />}

            <GuidelinesLine color={SHEET.label} />
            {story != null && <CarlaLine />}

            <View
              accessibilityRole="radiogroup"
              style={styles.plans}
              onLayout={(event) => {
                plansTop.current = event.nativeEvent.layout.y;
              }}>
              {rows.map((row) => (
                <View
                  key={row.kind}
                  onLayout={(event) => {
                    cardTops.current[row.kind] = event.nativeEvent.layout.y;
                  }}>
                  <PlanCard
                    copy={describePlan(row.kind, row.plan, t)}
                    badge={row.kind === lead.kind ? leadBadge : null}
                    small={row.kind === 'lifetime'}
                    selected={selected === row.kind}
                    radio={rows.length > 1}
                    disabled={row.missing}
                    onPress={() => onSelect(row.kind)}>
                    {/* The free week, day by day, in the card of the plan it
                        belongs to: today, the reminder, the first payment. */}
                    {row.kind === lead.kind && chosen.kind === lead.kind && (
                      <TrialTimeline plan={row.plan} compact />
                    )}
                  </PlanCard>
                </View>
              ))}
            </View>

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

          {/* Floating over the foot of the page, on a fade, so the one action
            is always on screen with what it charges under it. */}
          <View
            onLayout={(event) => setDockHeight(Math.round(event.nativeEvent.layout.height))}
            style={[
              styles.dock,
              {
                paddingBottom: Math.max(insets.bottom, 12) + 2,
                // Solid from the line over the button down, so a plan scrolled
                // under it cannot show through the words.
                experimental_backgroundImage: `linear-gradient(180deg, ${veil(0)} 0%, ${veil(1)} 9%)`,
              },
            ]}>
            {notice != null && <Text style={[styles.notice, { color: SHEET.label }]}>{notice}</Text>}
            {/* What the tap does next, and what it costs today: Apple's own
                sheet follows, and nothing is a surprise on it. */}
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
                style={({ pressed }) => [styles.quiet, pressed && { opacity: 0.6 }]}>
                <Text style={[styles.quietText, { color: SHEET.label }]} maxFontSizeMultiplier={1.3}>
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
        </>

        {children}
      </View>
    </PlansThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  full: { flex: 1 },
  content: { flexGrow: 1, paddingHorizontal: GUTTER, gap: 14 },
  topRow: { flexDirection: 'row', alignItems: 'center', gap: 14, minHeight: 32 },
  topBar: { flex: 1 },
  close: { width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  clip: { alignSelf: 'center', borderRadius: 22, borderCurve: 'continuous', overflow: 'hidden' },
  headline: {
    ...fonts.heavy(28, -0.8),
    lineHeight: 31,
    textAlign: 'center',
  },
  plans: { gap: 12 },
  quiet: { alignSelf: 'center', paddingVertical: 4 },
  quietText: fonts.semibold(15),
  dock: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 22,
    paddingHorizontal: GUTTER,
    gap: 8,
    alignItems: 'center',
  },
  /** After the first session: the heading and the day that comes next. */
  after: { gap: 6 },
  afterTitle: { ...fonts.heavy(32, -0.9), lineHeight: 36 },
  afterLine: { ...fonts.semibold(17, -0.2), lineHeight: 23, marginBottom: 10 },
  notice: {
    ...fonts.medium(13),
    lineHeight: 17,
    textAlign: 'center',
  },
  confirm: { ...fonts.bold(16, -0.2), lineHeight: 21, textAlign: 'center', paddingHorizontal: 8 },
  terms: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    paddingHorizontal: 8,
  },
  termsText: {
    flexShrink: 1,
    ...fonts.medium(12),
    lineHeight: 16,
    textAlign: 'center',
  },
});
