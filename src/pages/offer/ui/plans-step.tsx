import ArrowDown01Icon from '@hugeicons/core-free-icons/ArrowDown01Icon';
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
import { PLUS, SHEET } from './plans-theme';

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
  extras: readonly PlansStepRow[];
  selected: PaywallPeriod;
  onSelect: (kind: PaywallPeriod) => void;
  /** The pill on the lead plan. */
  leadBadge: string;
  /** The comeback view: its own headline. */
  comeback: boolean;
  /** Their first name, for the free week's headline; null without one. */
  name: string | null;
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
  /** "Not now", and the close over the sky: on to the one-time trial offer
   * (`skipPaywall`), never into the app. */
  onSkip: () => void;
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
 */
export function PlansStep({
  stepBar,
  lead,
  extras,
  selected,
  onSelect,
  leadBadge,
  comeback,
  name,
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
  const t = useT();
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

  const chosen = selected === lead.kind ? lead : (extras.find((row) => row.kind === selected) ?? lead);
  const cta = describeCta(chosen.kind, chosen.plan, t, Platform.OS === 'android');
  const headline = splitHighlight(
    freeDays != null
      ? name != null
        ? t('offer.plans.headlineTrialNamed', { count: freeDays, name })
        : t('offer.plans.headlineTrial', { count: freeDays })
      : t(comeback ? 'offer.plans.headlineComeback' : 'offer.plans.headline'),
  );
  const many = extras.length > 0 && expanded;

  return (
    <View style={styles.full}>
      <StatusBar style={onSheet ? 'dark' : 'light'} />
      {/* The kit drawn light under the white sheet, whatever the app's
        appearance; the celebration over it (`children`) follows the app. */}
      <RaisedScheme scheme="light">
        <ScrollView
          style={styles.full}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          onScroll={scrolled}
          scrollEventThrottle={64}>
          {/* Pulled past either end, the sky goes on above and the sheet below. */}
          <View pointerEvents="none" style={[styles.overTop, { backgroundColor: PLUS.skyTop }]} />
          <View pointerEvents="none" style={[styles.overBottom, { backgroundColor: SHEET.surface }]} />

          <PlansHero
            width={width}
            height={skyHeight}
            topInset={insets.top}
            live={focused && revealed && !covered}
            top={stepBar}
            closable
            onClose={onSkip}
          />

          {/* The room under the last row for the floating dock is the sheet's own
              padding, so it stays white rather than showing the screen under it. */}
          <View style={[styles.sheet, trial && styles.sheetTrial, { backgroundColor: SHEET.surface, paddingBottom: dockHeight + 12 }]}>
            <Text style={[styles.wordmark, { color: SHEET.ink }]} maxFontSizeMultiplier={1.3}>
              {t('offer.plans.brand')}
            </Text>

            {/* Two lines at most: a long language comes down a few sizes rather
              than pushing the plan under the button. */}
            <Text
              accessibilityRole="header"
              numberOfLines={2}
              adjustsFontSizeToFit
              minimumFontScale={0.7}
              style={[width < 360 || trial ? styles.headlineSmall : styles.headline, { color: SHEET.ink }]}
              maxFontSizeMultiplier={1.25}>
              {headline.map((run, i) =>
                run.lit ? (
                  <Text key={i} style={{ color: PLUS.accent }}>
                    {run.text}
                  </Text>
                ) : (
                  run.text
                ),
              )}
            </Text>

            {!trial && <ReviewerLine long color={SHEET.caption} />}

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
                {chosen.kind === lead.kind && <TrialTimeline plan={lead.plan} />}
              </PlanCard>

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

              {!expanded && (
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

            {trial && <ReviewerLine long color={SHEET.caption} />}

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
          style={[styles.dock, cta.free === true && styles.dockFree, { paddingBottom: Math.max(insets.bottom, 12) + 2 }]}>
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
          {cta.terms != null && (
            <View style={styles.terms}>
              <HugeiconsIcon icon={SecurityCheckIcon} size={14} color={SHEET.caption} strokeWidth={2} />
              <Text style={[styles.termsText, { color: SHEET.label }]} maxFontSizeMultiplier={1.3}>
                {cta.terms}
              </Text>
            </View>
          )}
          <LegalLinks onRestore={onRestore} disabled={busy} scheme="light" />
        </View>
      </RaisedScheme>

      {children}
    </View>
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
    experimental_backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.94) 22%, #FFFFFF 40%)',
  },
  /** Solid from the "no payment" line down, so the plans link scrolled
   * under it cannot show through the words. */
  dockFree: {
    experimental_backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, #FFFFFF 11%)',
  },
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
