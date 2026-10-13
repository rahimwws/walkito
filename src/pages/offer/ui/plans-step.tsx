import ArrowDown01Icon from '@hugeicons/core-free-icons/ArrowDown01Icon';
import SecurityCheckIcon from '@hugeicons/core-free-icons/SecurityCheckIcon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useIsFocused } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState, type ReactNode } from 'react';
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

import type { Plan, PlanPeriod } from '@/entities/purchase';
import { fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { RaisedScheme, Raised } from '@/shared/ui/raised';
import { useSplashRevealed } from '@/shared/ui/splash';
import { LegalLinks } from '@/shared/ui/subscription-terms';

import { describeCta, describePlan, splitHighlight } from '../model/plans';
import { PlanCard, PlusPill } from './plan-card';
import { PlansHero } from './plans-hero';
import { PlansTable } from './plans-table';
import { PILL, PLUS, SHEET } from './plans-theme';

/** How long after "Show all plans" "Not now" appears. Not before it: the
 * founders' rule is that the plans are seen in full before anyone is offered
 * a way past them. */
export const CLOSE_AFTER_MS = 3000;

/** The sky's share of the screen. */
const SKY = 0.45;
/** "Show all plans": the rows open over this long, each a beat after the last. */
const OPEN_MS = 420;
const ROW_STAGGER = 0.18;

export type PlansStepRow = {
  kind: PlanPeriod;
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
  selected: PlanPeriod;
  onSelect: (kind: PlanPeriod) => void;
  /** The pill on the lead plan. */
  leadBadge: string;
  /** The comeback view: its own headline. */
  comeback: boolean;
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
 * "Show all plans", what Plus includes, and a black button floating over the
 * foot of it all. The sheet stays white in the dark appearance, as the
 * reference's does, so the kit under it is drawn light.
 *
 * A hard paywall: there is no way into the app without buying. Three seconds
 * after "Show all plans", a close button fades in over the sky and "Not now"
 * appears at the very bottom; both lead to the one-time trial offer, the
 * offer screen's next state (`skipPaywall`), never to the app. Nothing here
 * may say or imply the app can be used without Plus.
 */
export function PlansStep({
  stepBar,
  lead,
  extras,
  selected,
  onSelect,
  leadBadge,
  comeback,
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
  // Its share of the screen, but never so much that the lead plan starts
  // under the floating button on a short phone.
  const skyHeight = Math.round(Math.max(Math.min(frame.height * SKY, frame.height - 420), 240));

  // ── "Show all plans", and "Not now" three seconds after it ──────────────
  const [expanded, setExpanded] = useState(false);
  const [waited, setWaited] = useState(false);
  useEffect(() => {
    if (!expanded || waited) return undefined;
    const timer = setTimeout(() => setWaited(true), CLOSE_AFTER_MS);
    return () => clearTimeout(timer);
  }, [expanded, waited]);
  const closable = waited;

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
  const headline = splitHighlight(t(comeback ? 'offer.plans.headlineComeback' : 'offer.plans.headline'));
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
            closable={closable}
            onClose={onSkip}
          />

          {/* The room under the last row for the floating dock is the sheet's own
              padding, so it stays white rather than showing the screen under it. */}
          <View style={[styles.sheet, { backgroundColor: SHEET.surface, paddingBottom: dockHeight + 12 }]}>
            <View style={styles.brand}>
              <Text style={[styles.wordmark, { color: SHEET.ink }]} maxFontSizeMultiplier={1.3}>
                {t('offer.plans.brand')}
              </Text>
              <PlusPill label={t('offer.plans.badge')} />
            </View>

            {/* Two lines at most: a long language comes down a few sizes rather
              than pushing the plan under the button. */}
            <Text
              accessibilityRole="header"
              numberOfLines={2}
              adjustsFontSizeToFit
              minimumFontScale={0.7}
              style={[width < 360 ? styles.headlineSmall : styles.headline, { color: SHEET.ink }]}
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

            <View accessibilityRole="radiogroup" style={styles.plans}>
              <PlanCard
                copy={describePlan(lead.kind, lead.plan, t)}
                badge={leadBadge}
                selected={selected === lead.kind}
                radio={many}
                disabled={lead.missing}
                onPress={() => onSelect(lead.kind)}
              />

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

            {closable && (
              <Pressable
                accessibilityRole="button"
                onPress={() => {
                  void Haptics.selectionAsync();
                  onSkip();
                }}
                hitSlop={8}
                style={({ pressed }) => [styles.quiet, pressed && { opacity: 0.6 }]}>
                <Text style={[styles.quietText, { color: SHEET.caption }]}>{t('offer.plans.skip')}</Text>
              </Pressable>
            )}
          </View>
        </ScrollView>

        {/* Floating over the foot of the sheet, on a white fade, so the one
          action is always on screen with what it charges under it. Restore,
          Terms and Privacy stay with it rather than at the end of a scroll. */}
        <View
          onLayout={(event) => setDockHeight(Math.round(event.nativeEvent.layout.height))}
          style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 12) + 2 }]}>
          {notice != null && <Text style={[styles.notice, { color: SHEET.label }]}>{notice}</Text>}
          <Raised
            face={PILL.face}
            lip={PILL.lip}
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
              <ActivityIndicator color={PILL.label} />
            ) : (
              <Text style={[styles.pillLabel, { color: PILL.label }]} numberOfLines={1} adjustsFontSizeToFit maxFontSizeMultiplier={1.3}>
                {cta.label}
              </Text>
            )}
          </Raised>
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
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  wordmark: fonts.heavy(24, -0.6),
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
  notice: {
    ...fonts.medium(13),
    lineHeight: 17,
    textAlign: 'center',
  },
  pillOuter: { alignSelf: 'center', minWidth: '72%', maxWidth: '100%' },
  pillFace: {
    height: 56,
    paddingHorizontal: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillLabel: fonts.heavy(18, -0.2),
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
