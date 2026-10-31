import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useEffect, useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { ExercisePreview } from '@/widgets/session-player';
import { PRIMARY, accents, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Card3D } from '@/shared/ui/card-3d';
import {
  Mascot,
  handsUpRig,
  type MascotHandle,
  type MascotRig,
  type MascotShot,
} from '@/shared/ui/mascot';

import { BALANCE_CAP_SECONDS } from '../model/journey';
import type { ResolvedOption } from '../model/steps';
import { ChoiceStep } from './choice-step';

/**
 * The 30-second check, behind the `onboarding_mini_test` flag.
 *
 * GOWOD's lesson: somebody who has tested themselves with their own hands has
 * invested in the result, and the plan that follows is visibly theirs. Two
 * checks only — the big toe lift, which tells a flexible flat foot from a
 * rigid one, and, on a quiet morning, standing on one leg. No result screen:
 * the plan built from it is the next thing they see.
 */

/** The mascot on the check's first screen. */
const HERO = 140;
/** He moves once he has arrived, not while the screen is still sliding in. */
const HERO_SHOT_MS = 300;

/** The page's side padding: the clip's column is measured inside it. */
const PAGE_GUTTER = 24;
/** The clip's share of the window's height, at most. Upright and whole, the
 * feet stay in frame, and there is still room for the question under it. */
const CLIP_SHARE = 0.46;
const CLIP_ASPECT = 9 / 16;

/**
 * The clip's box: the films' own 9:16, so `cover` crops under one percent, as
 * tall as the share allows, and narrow enough to clear the coach in the top
 * corner on both sides, so it stays centred. A full-width box would have to
 * crop the clip, and the feet are what goes first.
 */
function useClipBox(clear: number) {
  const { width, height } = useWindowDimensions();
  const room = width - PAGE_GUTTER * 2 - clear * 2;
  const tall = Math.min(height * CLIP_SHARE, room / CLIP_ASPECT);
  return { width: Math.round(tall * CLIP_ASPECT), height: Math.round(tall) };
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

export function TestIntro({ withBalance, onSkip }: { withBalance: boolean; onSkip: () => void }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const rows = [t('exercises.bigToeLift.title'), ...(withBalance ? [t('onboarding.test.introBalance')] : [])];

  return (
    <View style={styles.fill}>
      <View style={styles.center}>
        <Hero rig={handsUpRig} shot="present" />
        <Text style={[styles.title, styles.centerText, { color: colors.foreground }]}>
          {t('onboarding.test.introTitle')}
        </Text>
        <Text style={[styles.body, styles.centerText, { color: meter.caption }]}>{t('onboarding.test.introBody')}</Text>
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
      </View>
      <Pressable accessibilityRole="button" onPress={onSkip} hitSlop={10} style={styles.skip}>
        <Text style={[styles.skipText, { color: meter.caption }]}>{t('onboarding.test.notNow')}</Text>
      </Pressable>
    </View>
  );
}

export function TestToe({
  total,
  options,
  answer,
  onAnswer,
  speakerInset = 0,
  onViewerChange,
}: {
  total: number;
  options: readonly ResolvedOption[];
  answer: string | null;
  onAnswer: (next: string) => void;
  /** Room the coach takes in the top-right corner. The heading here is under
   * the clip, so it is the clip's column that has to clear him. */
  speakerInset?: number;
  /** The clip opened full screen, or closed: the coach stops under it. */
  onViewerChange?: (open: boolean) => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const clip = useClipBox(speakerInset);

  return (
    <ScrollView style={styles.fill} contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
      <CheckClip exerciseId="big_toe_lift" box={clip} onViewerChange={onViewerChange} />
      <Text style={[styles.meta, { color: meter.caption }]}>{t('onboarding.test.meta', { n: 1, total })}</Text>
      <Text style={[styles.title, { color: colors.foreground }]}>{t('exercises.bigToeLift.title')}</Text>
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

/**
 * One leg, then the other. A tap starts the count, a tap stops it, and the
 * count stops itself at the cap — past thirty seconds it is no longer a test.
 */
export function TestBalance({
  total,
  left,
  right,
  onResult,
  onStart,
  speakerInset = 0,
  onViewerChange,
}: {
  total: number;
  left: number | null;
  right: number | null;
  onResult: (side: Side, seconds: number) => void;
  /** A side's count has started: the coach hops along. */
  onStart?: (side: Side) => void;
  /** As on the toe check: the clip's column clears the coach. */
  speakerInset?: number;
  onViewerChange?: (open: boolean) => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const clip = useClipBox(speakerInset);
  const [running, setRunning] = useState<Side | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const started = useRef(0);

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

  const start = (side: Side) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setRunning(side);
    onStart?.(side);
  };

  const next: Side | null = left == null ? 'left' : right == null ? 'right' : null;

  return (
    <ScrollView style={styles.fill} contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
      <CheckClip exerciseId="single_leg_hold" box={clip} onViewerChange={onViewerChange} />
      <Text style={[styles.meta, { color: meter.caption }]}>{t('onboarding.test.meta', { n: 2, total })}</Text>
      <Text style={[styles.title, { color: colors.foreground }]}>{t('exercises.singleLegHold.title')}</Text>
      <Text style={[styles.body, { color: meter.caption }]}>{t('onboarding.test.balanceBody')}</Text>

      <View style={styles.sides}>
        {(['left', 'right'] as const).map((side) => {
          const value = side === 'left' ? left : right;
          const live = running === side;
          return (
            <View key={side} style={[styles.side, { backgroundColor: colors.card }, live && { borderColor: PRIMARY }]}>
              <Text style={[styles.sideLabel, { color: meter.caption }]}>{t(side === 'left' ? 'onboarding.test.left' : 'onboarding.test.right')}</Text>
              <Text style={[styles.sideValue, { color: colors.foreground }]}>
                {live
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
        aspectRatio={CLIP_ASPECT}
        fit="cover"
        expandPlacement="top-right"
        expandable
        onViewerChange={onViewerChange}
      />
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
  meta: { ...fonts.semibold(13), marginTop: 4 },
  clipColumn: { alignItems: 'center' },
  card: { alignSelf: 'stretch' },
  cardFace: { gap: 8 },
  listRow: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 4 },
  badge: { width: 28, height: 28, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  badgeText: fonts.heavy(14),
  listText: fonts.semibold(16),
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
