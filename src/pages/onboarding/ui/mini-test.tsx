import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon';
import SmartPhone01Icon from '@hugeicons/core-free-icons/SmartPhone01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { Image, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { useReducedMotion } from 'react-native-reanimated';

import { ExercisePreview } from '@/widgets/session-player';
import { FootCheckCard } from '@/entities/foot-check';
import { PRIMARY, clipShape, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

import { HEEL_SLIDE, HEEL_SLIDE_SHAPE } from '../config/heel-slide';
import type { ResolvedOption } from '../model/steps';
import { ChoiceStep } from './choice-step';

/**
 * The Foot Check, two things she does sitting down and answers herself:
 * which heel lifts first as both feet slide back (`TestHeel`), and whether an
 * arch appears as the big toe lifts (`TestToe`). Then what she saw, and what
 * the plan does about it (`TestResult`).
 *
 * GOWOD's lesson still holds: somebody who has checked their own feet has
 * invested in the result, and the plan that follows is visibly theirs. It
 * used to measure the ankle with the phone on the shin and time one leg; the
 * measure lives on in Progress, and one leg in the first test on day 2.
 */

/** The page's side padding: the clip's column is measured inside it. */
const PAGE_GUTTER = 24;
/** The clip's share of the window's height, at most: whole, the feet stay in
 * frame, and there is still room for the question under it. */
const CLIP_SHARE = 0.46;

/**
 * The clip's box, in the film's own shape, so `cover` crops under one
 * percent and the feet stay in frame. A wide film lies across the page under
 * the heading; an upright one is as tall as the share allows, centred.
 *
 * The check's films were upright when this was drawn and wide ones were
 * fitted into the same upright box: a strip of film between two black bands,
 * with the question pushed under the fold.
 */
function useClipBox(exerciseId: string) {
  const { width, height } = useWindowDimensions();
  const shape = clipShape(exerciseId);
  const wide = Math.round(Math.min(width - PAGE_GUTTER * 2, height * CLIP_SHARE * shape));
  return { width: wide, height: Math.round(wide / shape) };
}

/** "Foot Check · 1 of 2" over each check, or the name alone when there is one. */
function Meta({ index, total }: { index: number; total: number }) {
  const meter = meterColors[useColorScheme()];
  const t = useT();
  return (
    <Text style={[styles.meta, { color: meter.caption }]}>
      {total > 1 ? t('footCheck.meta', { n: index, total }) : t('footCheck.metaOne')}
    </Text>
  );
}

/** What to do, in ink at reading size: she reads it, then does it. */
function Steps({ lines }: { lines: readonly string[] }) {
  const colors = palette[useColorScheme()];
  return (
    <View style={styles.steps}>
      {lines.map((line) => (
        <View key={line} style={styles.stepRow}>
          <HugeiconsIcon icon={ArrowRight01Icon} size={18} color={PRIMARY} strokeWidth={2.2} />
          <Text style={[styles.stepText, { color: colors.foreground }]}>{line}</Text>
        </View>
      ))}
    </View>
  );
}

/**
 * Both feet sliding back under a chair until a heel lifts: the loop when it
 * exists (`HEEL_SLIDE.clip`), muted, and the still otherwise or with Reduce
 * Motion on. On a tile, so the transparent drawing sits on either scheme.
 */
function HeelPicture({ width }: { width: number }) {
  const meter = meterColors[useColorScheme()];
  const reduceMotion = useReducedMotion();
  const box = { width, height: Math.round(width / HEEL_SLIDE_SHAPE) };
  return (
    <View style={[styles.picture, box, { backgroundColor: meter.iconTile }]} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      <Image source={HEEL_SLIDE.still} style={box} resizeMode="contain" />
      {HEEL_SLIDE.clip != null && !reduceMotion && <HeelLoop clip={HEEL_SLIDE.clip} />}
    </View>
  );
}

function HeelLoop({ clip }: { clip: number }) {
  const player = useVideoPlayer(clip, (instance) => {
    instance.loop = true;
    instance.muted = true;
    // Muted and mixing, as every preview is: it must not stop her music.
    instance.audioMixingMode = 'mixWithOthers';
    instance.play();
  });
  return <VideoView player={player} style={StyleSheet.absoluteFill} nativeControls={false} contentFit="cover" />;
}

/**
 * Which heel lifts first, sitting: both feet flat, slid back slowly until a
 * heel starts to lift, only as far as feels easy. Nothing is held at the end
 * and the phone stays in her hand, so it is asked of everybody but a fall, a
 * calf red flag or a pop (`heelAsked`). "Skip it" goes on to the toe.
 */
export function TestHeel({
  index,
  total,
  options,
  answer,
  onAnswer,
  onSkip,
}: {
  index: number;
  total: number;
  options: readonly ResolvedOption[];
  answer: string | null;
  onAnswer: (next: string) => void;
  onSkip: () => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const { width } = useWindowDimensions();

  return (
    <ScrollView style={styles.fill} contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
      <View style={styles.head}>
        <Meta index={index} total={total} />
        <Text accessibilityRole="header" style={[styles.title, { color: colors.foreground }]}>
          {t('footCheck.ankle.title')}
        </Text>
      </View>
      <HeelPicture width={width - PAGE_GUTTER * 2} />
      <Steps lines={[t('footCheck.heel.step1'), t('footCheck.heel.step2'), t('footCheck.heel.step3')]} />
      <Text style={[styles.question, { color: colors.foreground }]}>{t('footCheck.heel.question')}</Text>
      {/* The pair of feet, the heel that lifts first lit, as the side question draws it. */}
      <ChoiceStep
        options={options}
        selected={answer != null ? [answer] : []}
        multi={false}
        art="side"
        calm
        onChange={(next) => onAnswer(next[0])}
      />
      <Pressable accessibilityRole="button" onPress={onSkip} hitSlop={10} style={styles.skip}>
        <Text style={[styles.skipText, { color: meter.caption }]}>{t('onboarding.test.notNow')}</Text>
      </Pressable>
    </ScrollView>
  );
}

/**
 * The big toe lift, asked sitting: whether an arch appears as the big toe
 * lifts on its own (which sets `footType`). The onboarding's early "Can you
 * lift just your big toe?" is not asked again; its answer keeps doing what it
 * does (`toeWork`).
 */
export function TestToe({
  index,
  total,
  options,
  answer,
  onAnswer,
}: {
  /** Which check of the `total` this is. */
  index: number;
  total: number;
  options: readonly ResolvedOption[];
  answer: string | null;
  onAnswer: (next: string) => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const clip = useClipBox('big_toe_lift');

  return (
    <ScrollView style={styles.fill} contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
      <View style={styles.head}>
        <Meta index={index} total={total} />
        <Text accessibilityRole="header" style={[styles.title, { color: colors.foreground }]}>
          {t('exercises.bigToeLift.title')}
        </Text>
      </View>
      <CheckClip exerciseId="big_toe_lift" box={clip} />
      <Steps lines={[t('onboarding.test.toeStep1'), t('onboarding.test.toeStep2')]} />
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

/**
 * One check's film, centred in its column. Cropped to fill rather than
 * letterboxed, which only works because the box is the film's own shape; the
 * expand chip sits at the top, since at the bottom it covered the toes being
 * watched.
 */
function CheckClip({
  exerciseId,
  box,
}: {
  exerciseId: string;
  box: { width: number; height: number };
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
      />
    </View>
  );
}

/**
 * What she saw, and what the plan does about it: the heel first when it was
 * asked, else the toe; then the card with what is done and what the first
 * test does next. An observation and a consequence, never a diagnosis, never
 * a promise and never a number; nothing here is sent anywhere. On a phone
 * that can measure, where the degrees are, if she wants them.
 */
export function TestResult({
  said,
  plan,
  ankle,
  toe,
  canMeasure,
}: {
  said: string | null;
  plan: string | null;
  /** The ankle row on the card: which heel lifted first. */
  ankle: string | null;
  /** The toe row: what the big toe lift showed. */
  toe: string | null;
  canMeasure: boolean;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();

  return (
    <ScrollView style={styles.fill} contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
      <Text accessibilityRole="header" style={[styles.title, { color: colors.foreground }]}>
        {t('footCheck.card.title')}
      </Text>
      {said != null && <Text style={[styles.said, { color: colors.foreground }]}>{said}</Text>}
      {plan != null && (
        <View style={styles.stepRow}>
          <HugeiconsIcon icon={ArrowRight01Icon} size={18} color={PRIMARY} strokeWidth={2.2} />
          <Text style={[styles.planLine, { color: meter.caption }]}>{plan}</Text>
        </View>
      )}
      <View style={styles.checkCard}>
        <FootCheckCard ankle={ankle} toe={toe} />
      </View>
      {canMeasure && (
        <View style={[styles.note, { backgroundColor: colors.card }]}>
          <HugeiconsIcon icon={SmartPhone01Icon} size={22} color={PRIMARY} strokeWidth={1.8} />
          <Text style={[styles.noteText, { color: colors.foreground }]}>{t('footCheck.result.measureLater')}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fill: { flex: 1 },
  scroll: { gap: 12, paddingBottom: 12 },
  title: { ...fonts.heavy(26, -0.6), lineHeight: 31 },
  head: { gap: 4, justifyContent: 'center' },
  meta: fonts.semibold(13),
  clipColumn: { alignItems: 'center' },
  picture: { alignSelf: 'center', borderRadius: 22, borderCurve: 'continuous', overflow: 'hidden' },
  said: { ...fonts.bold(19, -0.2), lineHeight: 25, marginTop: 4 },
  planLine: { ...fonts.medium(16), lineHeight: 22, flex: 1 },
  checkCard: { marginTop: 8 },
  note: { flexDirection: 'row', alignItems: 'flex-start', gap: 12, borderRadius: 20, borderCurve: 'continuous', padding: 16 },
  noteText: { ...fonts.medium(15), lineHeight: 21, flex: 1 },
  skip: { alignSelf: 'center', paddingVertical: 10 },
  skipText: fonts.semibold(15),
  steps: { gap: 8 },
  stepRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 8 },
  stepText: { ...fonts.medium(17), lineHeight: 23, flex: 1 },
  question: { ...fonts.bold(18), lineHeight: 23, marginTop: 8 },
});
