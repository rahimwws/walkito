import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useEffect, useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { ExercisePreview } from '@/widgets/session-player';
import {
  AnkleMeasure,
  AnkleSteps,
  FootCheckCard,
  ankleGap,
  useCanMeasure,
  useJolt,
  type AnkleSide,
  type FootCheckSides,
} from '@/entities/foot-check';
import { PRIMARY, accents, clipShape, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Card3D } from '@/shared/ui/card-3d';
import { FluentIcon, type FluentName } from '@/shared/ui/fluent-icon';
import {
  Mascot,
  handsUpRig,
  thumbsUpRig,
  type MascotHandle,
  type MascotRig,
  type MascotShot,
} from '@/shared/ui/mascot';

import { BALANCE_CAP_SECONDS } from '../model/journey';
import type { ResolvedOption } from '../model/steps';
import { ChoiceStep } from './choice-step';

/**
 * The 30-second check, for everybody it is safe for (`miniTestEligible`).
 *
 * GOWOD's lesson: somebody who has tested themselves with their own hands has
 * invested in the result, and the plan that follows is visibly theirs. Two
 * checks only — the big toe lift, which tells a flexible flat foot from a
 * rigid one, and, on a quiet morning, standing on one leg. Then what they
 * showed, and what the plan does about it (`TestResult`).
 */

/** The mascot on the check's first screen. */
const HERO = 140;
/** He moves once he has arrived, not while the screen is still sliding in. */
const HERO_SHOT_MS = 300;

/** The page's side padding: the clip's column is measured inside it. */
const PAGE_GUTTER = 24;
/** The clip's share of the window's height, at most: whole, the feet stay in
 * frame, and there is still room for the question under it. */
const CLIP_SHARE = 0.46;

/**
 * The clip's box, in the film's own shape, so `cover` crops under one
 * percent and the feet stay in frame. A wide film lies across the page under
 * the heading and the coach. An upright one stands beside him, as tall as the
 * share allows and narrow enough to clear him on both sides, so it stays
 * centred.
 *
 * The check's films were upright when this was drawn and wide ones were
 * fitted into the same upright box: a strip of film between two black bands,
 * with the question pushed under the fold.
 */
function useClipBox(exerciseId: string, clear: number) {
  const { width, height } = useWindowDimensions();
  const shape = clipShape(exerciseId);
  const page = width - PAGE_GUTTER * 2;
  const wide = Math.round(Math.min(shape > 1 ? page : page - clear * 2, height * CLIP_SHARE * shape));
  return { width: wide, height: Math.round(wide / shape) };
}

/**
 * The mascot standing in a step: one pose, one move once it is up. Silent —
 * the check is the person's to do, and nothing here is a reward for a result.
 */
function Hero({ rig, shot }: { rig: MascotRig; shot: MascotShot }) {
  const colors = palette[useColorScheme()];
  const mascot = useRef<MascotHandle>(null);
  useEffect(() => {
    const timer = setTimeout(() => mascot.current?.play(shot), HERO_SHOT_MS);
    return () => clearTimeout(timer);
  }, [shot]);
  return <Mascot ref={mascot} rig={rig} size={HERO} surface={colors.background} />;
}

export function TestIntro({
  withAnkle,
  withBalance,
  onSkip,
}: {
  /** The phone measures the ankle bend first: the check is the Foot Check. */
  withAnkle: boolean;
  withBalance: boolean;
  onSkip: () => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const rows = [
    ...(withAnkle ? [t('footCheck.ankle.title')] : []),
    t('exercises.bigToeLift.title'),
    ...(withBalance ? [t('onboarding.test.introBalance')] : []),
  ];

  return (
    <View style={styles.fill}>
      <View style={styles.center}>
        <Hero rig={handsUpRig} shot="present" />
        <Text style={[styles.title, styles.centerText, { color: colors.foreground }]}>
          {t(withAnkle ? 'footCheck.intro.title' : 'onboarding.test.introTitle')}
        </Text>
        <Text style={[styles.body, styles.centerText, { color: meter.caption }]}>
          {t(withAnkle ? 'footCheck.intro.body' : withBalance ? 'onboarding.test.introBody' : 'onboarding.test.introBodyOne')}
        </Text>
        <Card3D style={styles.card} contentStyle={styles.cardFace}>
          {rows.map((row, i) => (
            <View key={row} style={styles.listRow}>
              <View style={[styles.badge, { backgroundColor: accents[scheme].violet.track }]}>
                <Text style={[styles.badgeText, { color: accents[scheme].violet.fill }]}>{i + 1}</Text>
              </View>
              <Text style={[styles.listText, { color: colors.foreground }]}>{row}</Text>
            </View>
          ))}
        </Card3D>
        {withAnkle && (
          <Text style={[styles.safety, styles.centerText, { color: meter.caption }]}>{t('footCheck.intro.safety')}</Text>
        )}
      </View>
      <Pressable accessibilityRole="button" onPress={onSkip} hitSlop={10} style={styles.skip}>
        <Text style={[styles.skipText, { color: meter.caption }]}>{t('onboarding.test.notNow')}</Text>
      </Pressable>
    </View>
  );
}

/**
 * The ankle bend, measured by the phone on the shin: left, then right.
 *
 * The one check here that gives a number nobody could have guessed, which is
 * why it comes first. Sitting down, so it is asked of everybody the check is
 * for; "Skip this one" goes on to the toe with nothing measured.
 */
export function TestAnkle({
  index,
  total,
  left,
  right,
  onResult,
  onReset,
  onSkip,
}: {
  index: number;
  total: number;
  left: number | null;
  right: number | null;
  onResult: (side: AnkleSide, degrees: number) => void;
  onReset: () => void;
  onSkip: () => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();

  return (
    <ScrollView style={styles.fill} contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
      <View style={styles.head}>
        <Text style={[styles.meta, { color: meter.caption }]}>{t('onboarding.test.meta', { n: index, total })}</Text>
        <Text accessibilityRole="header" style={[styles.title, { color: colors.foreground }]}>
          {t('footCheck.ankle.title')}
        </Text>
      </View>
      <AnkleSteps />
      <View style={styles.measure}>
        <AnkleMeasure left={left} right={right} onResult={onResult} onReset={onReset} />
      </View>
      {(left == null || right == null) && (
        <Pressable accessibilityRole="button" onPress={onSkip} hitSlop={10} style={styles.skip}>
          <Text style={[styles.skipText, { color: meter.caption }]}>{t('footCheck.ankle.skip')}</Text>
        </Pressable>
      )}
    </ScrollView>
  );
}

export function TestToe({
  index,
  total,
  options,
  answer,
  onAnswer,
  speakerInset = 0,
  speakerSize = 0,
  onViewerChange,
}: {
  /** Which check of the `total` this is. */
  index: number;
  total: number;
  options: readonly ResolvedOption[];
  answer: string | null;
  onAnswer: (next: string) => void;
  /** Room the coach takes in the top-right corner, beside the heading. */
  speakerInset?: number;
  /** How tall he is there: the heading is at least that, so the clip starts
   * under his feet. */
  speakerSize?: number;
  /** The clip opened full screen, or closed: the coach stops under it. */
  onViewerChange?: (open: boolean) => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const clip = useClipBox('big_toe_lift', speakerInset);

  return (
    <ScrollView style={styles.fill} contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
      <View style={[styles.head, { paddingRight: speakerInset, minHeight: speakerSize }]}>
        <Text style={[styles.meta, { color: meter.caption }]}>{t('onboarding.test.meta', { n: index, total })}</Text>
        <Text accessibilityRole="header" style={[styles.title, { color: colors.foreground }]}>
          {t('exercises.bigToeLift.title')}
        </Text>
      </View>
      <CheckClip exerciseId="big_toe_lift" box={clip} onViewerChange={onViewerChange} />
      <View style={styles.steps}>
        {[t('onboarding.test.toeStep1'), t('onboarding.test.toeStep2')].map((line) => (
          <View key={line} style={styles.stepRow}>
            <HugeiconsIcon icon={ArrowRight01Icon} size={18} color={PRIMARY} strokeWidth={2.2} />
            <Text style={[styles.stepText, { color: colors.foreground }]}>{line}</Text>
          </View>
        ))}
      </View>
      <Text style={[styles.question, { color: colors.foreground }]}>{t('onboarding.test.toeQuestion')}</Text>
      {/* An observation about the foot, as on the toe check: its verdict circles. */}
      <ChoiceStep
        options={options}
        selected={answer != null ? [answer] : []}
        multi={false}
        art="verdict"
        onChange={(next) => onAnswer(next[0])}
      />
    </ScrollView>
  );
}

type Side = 'left' | 'right';

/** Time to get the phone from the hand to the chest before the count. */
const BALANCE_READY_SECONDS = 3;

/**
 * One leg, then the other. A tap starts the count, a tap stops it, and the
 * count stops itself at the cap — past thirty seconds it is no longer a test.
 *
 * On a phone with a motion sensor the count also stops by itself: held
 * against the chest, the phone feels the other foot come down (`useJolt`),
 * so nobody has to find a button while standing on one leg. Three ticks
 * first, to get it there. "Stop" stays, for a landing too soft to feel.
 */
export function TestBalance({
  index,
  total,
  left,
  right,
  onResult,
  onStart,
  speakerInset = 0,
  speakerSize = 0,
  onViewerChange,
}: {
  index: number;
  total: number;
  left: number | null;
  right: number | null;
  onResult: (side: Side, seconds: number) => void;
  /** A side's count has started: the coach hops along. */
  onStart?: (side: Side) => void;
  /** As on the toe check: the heading clears the coach. */
  speakerInset?: number;
  speakerSize?: number;
  onViewerChange?: (open: boolean) => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const clip = useClipBox('single_leg_hold', speakerInset);
  const auto = useCanMeasure() === true;
  const [ready, setReady] = useState<Side | null>(null);
  const [count, setCount] = useState(BALANCE_READY_SECONDS);
  const [running, setRunning] = useState<Side | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const started = useRef(0);

  useEffect(() => {
    if (ready == null) return undefined;
    setCount(BALANCE_READY_SECONDS);
    let remaining = BALANCE_READY_SECONDS;
    const timer = setInterval(() => {
      remaining -= 1;
      if (remaining <= 0) {
        clearInterval(timer);
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        setReady(null);
        setRunning(ready);
        onStart?.(ready);
        return;
      }
      Haptics.selectionAsync();
      setCount(remaining);
    }, 1000);
    return () => clearInterval(timer);
    // As below: keyed on the side alone.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  useEffect(() => {
    if (running == null) return;
    started.current = Date.now();
    setElapsed(0);
    const timer = setInterval(() => {
      const seconds = Math.min((Date.now() - started.current) / 1000, BALANCE_CAP_SECONDS);
      setElapsed(seconds);
      if (seconds >= BALANCE_CAP_SECONDS) {
        clearInterval(timer);
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        onResult(running, BALANCE_CAP_SECONDS);
        setRunning(null);
      }
    }, 100);
    return () => clearInterval(timer);
    // `onResult` is the page's setter; the run is keyed on the side alone.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  const stop = () => {
    if (running == null) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    onResult(running, Math.round(Math.min((Date.now() - started.current) / 1000, BALANCE_CAP_SECONDS)));
    setRunning(null);
  };

  useJolt(auto && running != null, stop);

  const start = (side: Side) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (auto) {
      setReady(side);
      return;
    }
    setRunning(side);
    onStart?.(side);
  };

  const next: Side | null = left == null ? 'left' : right == null ? 'right' : null;

  return (
    <ScrollView style={styles.fill} contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
      <View style={[styles.head, { paddingRight: speakerInset, minHeight: speakerSize }]}>
        <Text style={[styles.meta, { color: meter.caption }]}>{t('onboarding.test.meta', { n: index, total })}</Text>
        <Text accessibilityRole="header" style={[styles.title, { color: colors.foreground }]}>
          {t('exercises.singleLegHold.title')}
        </Text>
      </View>
      <CheckClip exerciseId="single_leg_hold" box={clip} onViewerChange={onViewerChange} />
      <Text style={[styles.body, { color: meter.caption }]}>
        {t(auto ? 'footCheck.balance.body' : 'onboarding.test.balanceBody')}
      </Text>

      <View style={styles.sides}>
        {(['left', 'right'] as const).map((side) => {
          const value = side === 'left' ? left : right;
          const live = running === side;
          return (
            <View
              key={side}
              style={[styles.side, { backgroundColor: colors.card }, (live || ready === side) && { borderColor: PRIMARY }]}>
              <Text style={[styles.sideLabel, { color: meter.caption }]}>{t(side === 'left' ? 'onboarding.test.left' : 'onboarding.test.right')}</Text>
              <Text style={[styles.sideValue, { color: ready === side ? meter.caption : colors.foreground }]}>
                {ready === side
                  ? String(count)
                  : live
                  ? t('onboarding.test.seconds', { count: Math.floor(elapsed) })
                  : value != null
                    ? t('onboarding.test.seconds', { count: value })
                    : t('widget.goalUnknown')}
              </Text>
            </View>
          );
        })}
      </View>

      {running != null ? (
        <Pressable
          accessibilityRole="button"
          onPress={stop}
          style={({ pressed }) => [styles.timerButton, { backgroundColor: PRIMARY }, pressed && { opacity: 0.8 }]}>
          <Text style={styles.timerLabel}>{t('onboarding.test.stop')}</Text>
        </Pressable>
      ) : ready != null ? (
        <View style={[styles.timerButton, { backgroundColor: colors.card }]} accessibilityLiveRegion="polite">
          <Text style={[styles.timerLabel, { color: meter.label }]}>{t('footCheck.balance.ready')}</Text>
        </View>
      ) : next != null ? (
        <Pressable
          accessibilityRole="button"
          onPress={() => start(next)}
          style={({ pressed }) => [styles.timerButton, { backgroundColor: colors.card }, pressed && { opacity: 0.8 }]}>
          <Text style={[styles.timerLabel, { color: colors.foreground }]}>
            {t(next === 'left' ? 'onboarding.test.startLeft' : 'onboarding.test.startRight')}
          </Text>
        </Pressable>
      ) : null}
    </ScrollView>
  );
}

/**
 * One check's film, centred in its column. Cropped to fill rather than
 * letterboxed, which only works because the box is the film's own shape; the
 * expand chip sits at the top, since at the bottom it covered the toes being
 * watched.
 */
function CheckClip({
  exerciseId,
  box,
  onViewerChange,
}: {
  exerciseId: string;
  box: { width: number; height: number };
  onViewerChange?: (open: boolean) => void;
}) {
  return (
    <View style={styles.clipColumn}>
      <ExercisePreview
        exerciseId={exerciseId}
        style={box}
        aspectRatio={clipShape(exerciseId)}
        fit="cover"
        expandPlacement="top-right"
        expandable
        onViewerChange={onViewerChange}
      />
    </View>
  );
}

/** One thing the check showed, and what the plan does about it. */
export type TestFinding = { emoji: FluentName; saw: string; plan: string };

/**
 * What the check showed, and what the plan does about it.
 *
 * The check used to end without a word: the plan it changed was "the next
 * thing they see", and nobody could tell it had changed. Thirty seconds of
 * somebody's own foot deserve an answer, so each thing they looked at is said
 * back with what the plan does because of it. An observation and a
 * consequence, never a diagnosis and never a promise; nothing here is sent
 * anywhere.
 */
export function TestResult({
  findings,
  ankle = null,
  toe = null,
  balance = null,
  again = null,
}: {
  findings: readonly TestFinding[];
  /** The ankle bend in degrees, when the phone measured it: the screen is
   * then the Foot Check's result, the two figures first. */
  ankle?: FootCheckSides | null;
  /** What the big toe lift showed, as a sentence. */
  toe?: string | null;
  /** Seconds on one leg. */
  balance?: FootCheckSides | null;
  /** When the ankles are measured again, epoch ms. */
  again?: number | null;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();

  if (ankle != null) {
    const gap = ankleGap(ankle.left, ankle.right);
    return (
      <ScrollView style={styles.fill} contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text accessibilityRole="header" style={[styles.title, { color: colors.foreground }]}>
          {t('footCheck.result.title')}
        </Text>
        <View style={styles.sides}>
          {(['left', 'right'] as const).map((side) => (
            <View key={side} style={[styles.side, { backgroundColor: colors.card }]} accessible>
              <Text style={[styles.sideLabel, { color: meter.caption }]}>
                {t(side === 'left' ? 'onboarding.test.left' : 'onboarding.test.right')}
              </Text>
              <Text style={[styles.degrees, { color: colors.foreground }]} maxFontSizeMultiplier={1.2}>
                {t('footCheck.degrees', { value: ankle[side] })}
              </Text>
            </View>
          ))}
        </View>
        <Text style={[styles.question, styles.said, { color: colors.foreground }]}>
          {gap.side == null
            ? t('footCheck.result.same')
            : t(gap.side === 'left' ? 'footCheck.result.leftLess' : 'footCheck.result.rightLess', { diff: gap.diff })}
        </Text>
        <View style={styles.stepRow}>
          <HugeiconsIcon icon={ArrowRight01Icon} size={18} color={PRIMARY} strokeWidth={2.2} />
          <Text style={[styles.planLine, { color: meter.caption }]}>{t('footCheck.result.plan')}</Text>
        </View>
        <View style={styles.checkCard}>
          <FootCheckCard ankle={ankle} toe={toe} balance={balance} again={again} />
        </View>
      </ScrollView>
    );
  }

  return (
    <View style={styles.fill}>
      <View style={styles.center}>
        <Hero rig={thumbsUpRig} shot="nod" />
        <Text style={[styles.title, styles.centerText, { color: colors.foreground }]}>{t('onboarding.result.title')}</Text>
        <Text style={[styles.body, styles.centerText, { color: meter.caption }]}>{t('onboarding.result.body')}</Text>
        {findings.map((finding) => (
          <Card3D key={finding.saw} style={styles.card} contentStyle={styles.finding}>
            <FluentIcon name={finding.emoji} size={34} />
            <View style={styles.findingCopy}>
              <Text style={[styles.listText, { color: colors.foreground }]}>{finding.saw}</Text>
              <View style={styles.stepRow}>
                <HugeiconsIcon icon={ArrowRight01Icon} size={18} color={PRIMARY} strokeWidth={2.2} />
                <Text style={[styles.findingPlan, { color: meter.caption }]}>{finding.plan}</Text>
              </View>
            </View>
          </Card3D>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fill: { flex: 1 },
  scroll: { gap: 12, paddingBottom: 12 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 },
  centerText: { textAlign: 'center' },
  title: { ...fonts.heavy(26, -0.6), lineHeight: 31 },
  body: { ...fonts.regular(16), lineHeight: 22 },
  head: { gap: 4, justifyContent: 'center' },
  meta: fonts.semibold(13),
  clipColumn: { alignItems: 'center' },
  card: { alignSelf: 'stretch' },
  cardFace: { gap: 8 },
  listRow: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 4 },
  badge: { width: 28, height: 28, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  badgeText: fonts.heavy(14),
  listText: fonts.semibold(16),
  finding: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  findingCopy: { flex: 1, gap: 6 },
  findingPlan: { ...fonts.medium(15), lineHeight: 20, flex: 1 },
  safety: { ...fonts.medium(14), lineHeight: 19, paddingHorizontal: 12 },
  measure: { marginTop: 6 },
  degrees: { ...fonts.heavy(44, -1.4), lineHeight: 48, fontVariant: ['tabular-nums'] },
  said: { marginTop: 4 },
  planLine: { ...fonts.medium(16), lineHeight: 22, flex: 1 },
  checkCard: { marginTop: 8 },
  skip: { alignSelf: 'center', paddingVertical: 10 },
  skipText: fonts.semibold(15),
  steps: { gap: 8 },
  stepRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 8 },
  stepText: { ...fonts.medium(15), lineHeight: 21, flex: 1 },
  question: { ...fonts.bold(18), lineHeight: 23, marginTop: 8 },
  sides: { flexDirection: 'row', gap: 10 },
  side: { flex: 1, borderRadius: 18, borderCurve: 'continuous', padding: 14, gap: 4, borderWidth: 2, borderColor: 'transparent' },
  sideLabel: fonts.semibold(13),
  sideValue: { ...fonts.heavy(28, -0.6), fontVariant: ['tabular-nums'] },
  timerButton: { height: 58, borderRadius: 29, alignItems: 'center', justifyContent: 'center', marginTop: 4 },
  timerLabel: { ...fonts.bold(17), color: '#FFFFFF' },
});
