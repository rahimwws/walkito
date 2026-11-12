import ArrowDown01Icon from '@hugeicons/core-free-icons/ArrowDown01Icon';
import Cancel01Icon from '@hugeicons/core-free-icons/Cancel01Icon';
import CheckmarkCircle02Icon from '@hugeicons/core-free-icons/CheckmarkCircle02Icon';
import SecurityCheckIcon from '@hugeicons/core-free-icons/SecurityCheckIcon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useIsFocused } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState, type ReactNode } from 'react';
import {
  ActivityIndicator,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';
import { useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context';

import type { PaywallPeriod, Plan } from '@/entities/purchase';
import { fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { RaisedScheme, Raised } from '@/shared/ui/raised';
import { useSplashRevealed } from '@/shared/ui/splash';
import { ReviewerLine } from '@/shared/ui/reviewer';
import { LegalLinks } from '@/shared/ui/subscription-terms';

import { describeCta, describePlan, splitHighlight } from '../model/plans';
import { cloudEdgeHeight } from './cloud-edge';
import { PlanCard } from './plan-card';
import { PlansHero } from './plans-hero';
import { PlansTable } from './plans-table';
import { TrialTimeline, trialDays } from './trial-timeline';
import { PlansThemeContext, plansThemeFor } from './plans-theme';

/** The sky's share of the screen. */
const SKY = 0.45;
/** Over a free week, whose days have to be read without scrolling, the sky is
 * only as tall as he needs at his smallest: this much under the status bar,
 * plus the cloud edge. */
const SKY_TRIAL_ROOM = 80;
/** "Show all plans": the rows open over this long, each a beat after the last. */
const OPEN_MS = 420;
const ROW_STAGGER = 0.18;

export type PlansStepRow = {
  kind: PaywallPeriod;
  /** Null until the store answers, and null for good when the store answered
   * without it (then `missing`). */
  plan: Plan | null;
  /** The store answered and has no such plan. */
  missing: boolean;
};

export type PlansStepProps = {
  /** The first view's step bar, laid over the sky. */
  stepBar?: ReactNode;
  /** The lead plan (the annual), then whatever else the offering holds. Rows
   * the store answered without are left out by the caller, the lead aside. */
  lead: PlansStepRow;
  /** The plan shown under the lead from the start, with a choice between
   * the two: the weekly, where the store has one. */
  second?: PlansStepRow | null;
  /** The plans "Show all plans" opens. */
  extras: readonly PlansStepRow[];
  selected: PaywallPeriod;
  onSelect: (kind: PaywallPeriod) => void;
  /** The pill on the lead plan. */
  leadBadge: string;
  /** The comeback view: its own headline. */
  comeback: boolean;
  /** Their first name, for the free week's headline; null without one. */
  name: string | null;
  /**
   * The view after the first session, in place of the sky: its own heading
   * (`line` marks its lit words with brackets, as the headline does) and the
   * picture of the day that comes next. Drawn in the app's appearance.
   */
  after?: { title: string; line: string; picture: ReactNode } | null;
  busy: boolean;
  onBuy: () => void;
  /** What the store said last, over the button. */
  notice: string | null;
  onRestore: () => void;
  /** Apple's offer-code sheet, where there is one. */
  onRedeemCode?: () => void;
  /** Something is over the step (the store's sheet, the celebration): the
   * sky holds still. */
  covered: boolean;
  onExpand: () => void;
  /** "Not now", and the close over the sky: on to Home's free first run
   * (`skipPaywall`). Left out over Home (`PaywallWall`), where there is no
   * way past: then neither is drawn. */
  onSkip?: () => void;
  /** Laid over everything: the celebration. */
  children?: ReactNode;
};

/**
 * The plans: the third step of the first paywall, and every view after it.
 *
 * BitePal's paywall, with our mascot: a sky with him in it, a white sheet with
 * a cloud edge over his legs, "Walkito Plus", one headline, the annual plan,
 * "Show all plans", what Plus includes, and the button floating over the
 * foot of it all, in the violet every button on the way here was. The sheet
 * stays white in the dark appearance, as the reference's does, so the kit
 * under it is drawn light.
 *
 * When the annual starts with a free trial the step is about that week: a
 * shorter sky, a headline that says it, the three days that matter inside the
 * plan's own card, and "No payment due today" over the button, all in the
 * first screenful.
 *
 * A hard paywall: there is no way into the app without buying. The close over
 * the sky and "Not now" under the button are there from the first moment:
 * when the way out appeared only after "Show all plans", nobody a Meta ad
 * brought ever saw one, and every one of them left by killing the app. Both
 * lead to Home's day-one session and then the one-time trial offer
 * (`skipPaywall`), never into the app. Nothing here may say or imply the app
 * can be used without paying.
 *
 * After the first session (`after`) the step carries on from it instead of
 * starting over: no sky and no mascot, the app's own appearance, "Day 1 done"
 * and the day that comes next where the sky was, then the same plans, button
 * and terms.
 */
export function PlansStep({
  stepBar,
  lead,
  second = null,
  extras,
  selected,
  onSelect,
  leadBadge,
  comeback,
  name,
  after = null,
  busy,
  onBuy,
  notice,
  onRestore,
  onRedeemCode,
  covered,
  onExpand,
  onSkip,
  children,
}: PlansStepProps) {
  const scheme = useColorScheme();
  const t = useT();
  const theme = plansThemeFor(after != null ? scheme : 'light');
  const { PLUS, SHEET } = theme;
  const insets = useSafeAreaInsets();
  const frame = useSafeAreaFrame();
  const focused = useIsFocused();
  const revealed = useSplashRevealed();
  const width = frame.width;
  /** The lead plan starts with a free trial: the step is then about that
   * week, day by day, and everything else makes room for it. */
  const freeDays = comeback ? null : trialDays(lead.plan);
  const trial = freeDays != null;
  // Its share of the screen, but never so much that the lead plan starts
  // under the floating button on a short phone.
  const skyHeight = trial
    ? insets.top + SKY_TRIAL_ROOM + cloudEdgeHeight(width)
    : Math.round(Math.max(Math.min(frame.height * SKY, frame.height - 420), 240));

  // ── "Show all plans" ─────────────────────────────────────────────────────
  const [expanded, setExpanded] = useState(false);

  const open = useSharedValue(0);
  // Measured off-flow (the rows sit absolutely inside the clip), so the
  // zero-height clip cannot squash what it is measuring.
  const extrasHeight = useSharedValue(0);
  const expand = () => {
    if (expanded) return;
    void Haptics.selectionAsync();
    setExpanded(true);
    open.value = withTiming(1, { duration: OPEN_MS, easing: Easing.out(Easing.cubic), reduceMotion: ReduceMotion.System });
    onExpand();
  };
  const opening = useAnimatedStyle(() => ({ height: open.value * extrasHeight.value }));

  // ── the status bar follows what is under it ─────────────────────────────
  const [onSheet, setOnSheet] = useState(false);
  const scrolled = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const next = event.nativeEvent.contentOffset.y > skyHeight - insets.top - 28;
    if (next !== onSheet) setOnSheet(next);
  };

  const [dockHeight, setDockHeight] = useState(170);

  const chosen =
    selected === lead.kind ? lead : second?.kind === selected ? second : (extras.find((row) => row.kind === selected) ?? lead);
  const cta = describeCta(chosen.kind, chosen.plan, t, Platform.OS === 'android');
  // The free days are the lead plan's: with another plan chosen the headline
  // stops promising them.
  const headline = splitHighlight(
    freeDays != null && chosen.kind === lead.kind
      ? name != null
        ? t('offer.plans.headlineTrialNamed', { count: freeDays, name })
        : t('offer.plans.headlineTrial', { count: freeDays })
      : t(comeback ? 'offer.plans.headlineComeback' : 'offer.plans.headline'),
  );
  const many = second != null || (extras.length > 0 && expanded);
  /** The dock's fade, from the surface it floats over. */
  const veil = (alpha: number) =>
    `rgba(${parseInt(SHEET.surface.slice(1, 3), 16)},${parseInt(SHEET.surface.slice(3, 5), 16)},${parseInt(SHEET.surface.slice(5, 7), 16)},${alpha})`;

  return (
    <PlansThemeContext.Provider value={theme}>
    <View style={[styles.full, after != null && { backgroundColor: SHEET.surface }]}>
      <StatusBar style={after != null ? (theme.scheme === 'dark' ? 'light' : 'dark') : onSheet ? 'dark' : 'light'} />
      {/* The kit drawn light under the white sheet, whatever the app's
        appearance; the celebration over it (`children`) follows the app. */}
      <RaisedScheme scheme={theme.scheme}>
        <ScrollView
          style={styles.full}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          onScroll={scrolled}
          scrollEventThrottle={64}>
          {/* Pulled past either end, the sky goes on above and the sheet below. */}
          <View pointerEvents="none" style={[styles.overTop, { backgroundColor: after != null ? SHEET.surface : PLUS.skyTop }]} />
          <View pointerEvents="none" style={[styles.overBottom, { backgroundColor: SHEET.surface }]} />

          {after != null ? (
            <View style={[styles.after, { paddingTop: insets.top + 14 }]}>
              <View style={styles.afterTop}>
                <Text
                  accessibilityRole="header"
                  numberOfLines={2}
                  adjustsFontSizeToFit
                  minimumFontScale={0.75}
                  style={[styles.afterTitle, { color: SHEET.ink }]}
                  maxFontSizeMultiplier={1.25}>
                  {after.title}
                </Text>
                {onSkip != null && (
                  <Pressable
                    accessibilityRole="button"
                    accessibilityLabel={t('common.close')}
                    hitSlop={12}
                    onPress={() => {
                      void Haptics.selectionAsync();
                      onSkip();
                    }}
                    style={({ pressed }) => [styles.afterClose, { backgroundColor: SHEET.card }, pressed && { opacity: 0.6 }]}>
                    <HugeiconsIcon icon={Cancel01Icon} size={16} color={SHEET.caption} strokeWidth={2.4} />
                  </Pressable>
                )}
              </View>
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
            <PlansHero
              width={width}
              height={skyHeight}
              topInset={insets.top}
              live={focused && revealed && !covered}
              top={stepBar}
              closable={onSkip != null}
              onClose={() => onSkip?.()}
            />
          )}

          {/* The room under the last row for the floating dock is the sheet's own
              padding, so it stays white rather than showing the screen under it. */}
          <View style={[styles.sheet, trial && styles.sheetTrial, { backgroundColor: SHEET.surface, paddingBottom: dockHeight + 12 }]}>
            {/* The wordmark gives its row to the second plan, so both are
              read without scrolling. */}
            {after == null && second == null && (
              <Text style={[styles.wordmark, { color: SHEET.ink }]} maxFontSizeMultiplier={1.3}>
                {t('offer.plans.brand')}
              </Text>
            )}

            {/* Two lines at most: a long language comes down a few sizes rather
              than pushing the plan under the button. */}
            {after == null && (
              <Text
                accessibilityRole="header"
                numberOfLines={2}
                adjustsFontSizeToFit
                minimumFontScale={0.7}
                style={[width < 360 || trial ? styles.headlineSmall : styles.headline, { color: SHEET.ink }]}
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
            )}

            {!trial && after == null && <ReviewerLine long color={SHEET.caption} />}

            <View accessibilityRole="radiogroup" style={styles.plans}>
              <PlanCard
                copy={describePlan(lead.kind, lead.plan, t)}
                // Over a free week the pill waits for the other plans: "most
                // popular" of one says nothing, and its row is the room the
                // week's last day needs.
                badge={trial && !many ? null : leadBadge}
                selected={selected === lead.kind}
                radio={many}
                disabled={lead.missing}
                onPress={() => onSelect(lead.kind)}>
                {/* The free week, in the card of the plan it belongs to. */}
                {chosen.kind === lead.kind && <TrialTimeline plan={lead.plan} compact={second != null} />}
              </PlanCard>

              {second != null && (
                <PlanCard
                  copy={describePlan(second.kind, second.plan, t)}
                  selected={selected === second.kind}
                  radio
                  disabled={second.missing}
                  onPress={() => onSelect(second.kind)}
                />
              )}

              {extras.length > 0 && (
                <Animated.View
                  pointerEvents={expanded ? 'auto' : 'none'}
                  accessibilityElementsHidden={!expanded}
                  importantForAccessibility={expanded ? 'auto' : 'no-hide-descendants'}
                  style={[styles.extras, opening]}>
                  <View
                    style={styles.extrasInner}
                    onLayout={(event) => {
                      extrasHeight.value = Math.ceil(event.nativeEvent.layout.height);
                    }}>
                    {extras.map((row, i) => (
                      <Reveal key={row.kind} open={open} index={i}>
                        <PlanCard
                          copy={describePlan(row.kind, row.plan, t)}
                          selected={selected === row.kind}
                          radio={many}
                          disabled={row.missing}
                          onPress={() => onSelect(row.kind)}
                        />
                      </Reveal>
                    ))}
                  </View>
                </Animated.View>
              )}

              {extras.length > 0 && !expanded && (
                <Pressable
                  accessibilityRole="button"
                  onPress={expand}
                  hitSlop={10}
                  style={({ pressed }) => [styles.showAll, pressed && { opacity: 0.6 }]}>
                  <Text style={[styles.showAllText, { color: SHEET.caption }]} maxFontSizeMultiplier={1.4}>
                    {t('offer.plans.showAll')}
                  </Text>
                  <HugeiconsIcon icon={ArrowDown01Icon} size={18} color={SHEET.caption} strokeWidth={2.4} />
                </Pressable>
              )}
            </View>

            {(trial || after != null) && <ReviewerLine long color={SHEET.caption} />}

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
          </View>
        </ScrollView>

        {/* Floating over the foot of the sheet, on a white fade, so the one
          action is always on screen with what it charges under it. Restore,
          Terms and Privacy stay with it rather than at the end of a scroll. */}
        <View
          onLayout={(event) => setDockHeight(Math.round(event.nativeEvent.layout.height))}
          style={[
            styles.dock,
            {
              paddingBottom: Math.max(insets.bottom, 12) + 2,
              // Solid from the "no payment" line down, so the plans link
              // scrolled under it cannot show through the words.
              experimental_backgroundImage:
                cta.free === true
                  ? `linear-gradient(180deg, ${veil(0)} 0%, ${veil(1)} 7%)`
                  : `linear-gradient(180deg, ${veil(0)} 0%, ${veil(0.94)} 22%, ${veil(1)} 40%)`,
            },
          ]}>
          {notice != null && <Text style={[styles.notice, { color: SHEET.label }]}>{notice}</Text>}
          {/* The answer to the first question a free trial raises, in the one
            place nobody misses: over the button. */}
          {cta.free === true && notice == null && (
            <View style={styles.free}>
              <HugeiconsIcon icon={CheckmarkCircle02Icon} size={18} color={PLUS.accent} strokeWidth={2.2} />
              <Text style={[styles.freeText, { color: SHEET.ink }]} maxFontSizeMultiplier={1.3}>
                {t('offer.plans.noPaymentToday')}
              </Text>
            </View>
          )}
          <Raised
            face={PLUS.accent}
            lip={PLUS.accentLip}
            depth={5}
            radius={30}
            haptic="medium"
            pressDelay={0}
            busy={busy}
            onPress={onBuy}
            accessibilityRole="button"
            accessibilityLabel={cta.label}
            style={styles.pillOuter}
            contentStyle={styles.pillFace}>
            {busy ? (
              <ActivityIndicator color={PLUS.onAccent} />
            ) : (
              <Text style={[styles.pillLabel, { color: PLUS.onAccent }]} numberOfLines={1} adjustsFontSizeToFit maxFontSizeMultiplier={1.3}>
                {cta.label}
              </Text>
            )}
          </Raised>
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
      </RaisedScheme>

      {children}
    </View>
    </PlansThemeContext.Provider>
  );
}

/** One extra plan arriving as the list opens: a fade and a short rise, each a
 * beat after the one above it. */
function Reveal({ open, index, children }: { open: SharedValue<number>; index: number; children: ReactNode }) {
  const style = useAnimatedStyle(() => {
    const start = index * ROW_STAGGER;
    const shown = interpolate(open.value, [start, Math.min(start + 0.6, 1)], [0, 1], 'clamp');
    return { opacity: shown, transform: [{ translateY: (1 - shown) * 10 }] };
  });
  return <Animated.View style={style}>{children}</Animated.View>;
}

const styles = StyleSheet.create({
  full: { flex: 1 },
  content: { flexGrow: 1 },
  overTop: { position: 'absolute', left: 0, right: 0, top: -1000, height: 1000 },
  overBottom: { position: 'absolute', left: 0, right: 0, bottom: -1000, height: 1000 },
  sheet: {
    flexGrow: 1,
    paddingHorizontal: 22,
    paddingTop: 2,
    gap: 18,
  },
  /** A free week: closer set, so its last day clears the button. */
  sheetTrial: { gap: 14 },
  wordmark: { ...fonts.heavy(24, -0.6), textAlign: 'center' },
  headline: {
    ...fonts.heavy(40, -1.4),
    lineHeight: 42,
    textAlign: 'center',
    marginTop: -6,
  },
  headlineSmall: {
    ...fonts.heavy(34, -1.1),
    lineHeight: 37,
    textAlign: 'center',
    marginTop: -6,
  },
  plans: { gap: 12, marginTop: 4 },
  extras: { overflow: 'hidden' },
  extrasInner: { position: 'absolute', left: 0, right: 0, top: 0, gap: 12 },
  showAll: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    gap: 4,
    paddingVertical: 6,
  },
  showAllText: fonts.bold(17),
  quiet: { alignSelf: 'center', paddingVertical: 4 },
  quietText: fonts.semibold(15),
  dock: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 22,
    paddingHorizontal: 22,
    gap: 8,
    alignItems: 'center',
  },
  /** After the first session: the heading, the way out beside it, and the
   * day that comes next. */
  after: { paddingHorizontal: 22, paddingBottom: 16, gap: 6 },
  afterTop: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  afterTitle: { flex: 1, ...fonts.heavy(32, -0.9), lineHeight: 36 },
  afterClose: { width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center', marginTop: 2 },
  afterLine: { ...fonts.semibold(17, -0.2), lineHeight: 23, marginBottom: 10 },
  notice: {
    ...fonts.medium(13),
    lineHeight: 17,
    textAlign: 'center',
  },
  free: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6 },
  freeText: fonts.bold(16, -0.2),
  pillOuter: { alignSelf: 'stretch' },
  pillFace: {
    height: 58,
    paddingHorizontal: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillLabel: fonts.heavy(19, -0.2),
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
