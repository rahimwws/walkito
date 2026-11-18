import Cancel01Icon from '@hugeicons/core-free-icons/Cancel01Icon';
import LockIcon from '@hugeicons/core-free-icons/LockIcon';
import StarIcon from '@hugeicons/core-free-icons/StarIcon';
import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useIsFocused } from 'expo-router';
import { useRef, useState, type ReactNode } from 'react';
import { Image, Modal, PanResponder, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Animated, { FadeIn, FadeInDown, ReduceMotion } from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';

import { exerciseById } from '@/entities/program';
import { GoalChips } from '@/entities/profile';
import { PRIMARY, accents, clipShape, fonts, meterColors, palette } from '@/shared/config';
import { useT, type Key } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Button3D } from '@/shared/ui/button-3d';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import { OptionCard3D } from '@/shared/ui/option-card-3d';
import { TimePicker } from '@/shared/ui/time-picker';
import { CLIP_BACKDROP, ExercisePreview, SessionView, posterFor, type PlaylistStep } from '@/widgets/session-player';
import type { ProgramDay } from '@/entities/program';

import { FELT, type Felt, type PeekTiles } from '../model/story';

/**
 * The onboarding's story screens, from the web funnel's v4/v5, drawn with the
 * app's own pieces: its fonts, its cards, its 3D answers and buttons, its
 * clips and stills. Each is a body for the onboarding page, which keeps the
 * header, the progress and the shared button around it.
 */

// ── The warm banner over "Choose all that apply:" ───────────────────────────

export function LifeBanner({ text }: { text: string }) {
  const scheme = useColorScheme();
  return (
    <View style={[styles.banner, { backgroundColor: accents[scheme].orange.fill }]}>
      <Text style={styles.bannerText} maxFontSizeMultiplier={1.3}>
        {text}
      </Text>
    </View>
  );
}

// ── The three cards ──────────────────────────────────────────────────────────

/** Real feet on every card, no mascot: the three stills the web funnel shows. */
const CARD_POSTER = { fault: 'short_foot_seated', path: 'big_toe_lift', research: 'heel_raise_double' } as const;
const JOURNALS: readonly Key[] = ['story.research.bjsm', 'story.research.jospt', 'story.research.ajsm', 'story.research.msse'];
const CARDS = ['fault', 'path', 'research'] as const;

export function StoryCard({ card, runner }: { card: (typeof CARDS)[number]; runner: boolean }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const { width } = useWindowDimensions();
  const poster = posterFor(CARD_POSTER[card]);
  const title =
    card === 'fault'
      ? t(runner ? 'story.fault.titleRunner' : 'story.fault.title')
      : card === 'path'
        ? t('story.path.title')
        : t('story.research.title');
  const imageHeight = Math.round(Math.min(width - 48, 360) * 0.68);
  return (
    <ScrollView style={styles.fill} contentContainerStyle={styles.cardContent} showsVerticalScrollIndicator={false}>
      <Animated.View entering={FadeIn.duration(320).reduceMotion(ReduceMotion.System)} style={[styles.still, { height: imageHeight, backgroundColor: CLIP_BACKDROP }]}>
        {poster != null && <Image source={poster} style={StyleSheet.absoluteFill} resizeMode="cover" />}
      </Animated.View>
      <Text accessibilityRole="header" style={[styles.cardTitle, { color: colors.foreground }]} maxFontSizeMultiplier={1.3}>
        {title}
      </Text>
      {card === 'research' ? (
        <View style={styles.journals}>
          {JOURNALS.map((key) => (
            <Text key={key} style={[styles.journal, { color: meter.label }]} maxFontSizeMultiplier={1.3}>
              {t(key)}
            </Text>
          ))}
        </View>
      ) : (
        <Text style={[styles.cardBody, { color: meter.label }]} maxFontSizeMultiplier={1.4}>
          {t(card === 'fault' ? 'story.fault.body' : 'story.path.body')}
        </Text>
      )}
      <View style={styles.dots} accessibilityElementsHidden>
        {CARDS.map((c) => (
          <View key={c} style={[styles.dot, { backgroundColor: c === card ? colors.foreground : meter.track }]} />
        ))}
      </View>
    </ScrollView>
  );
}

// ── Without / with ───────────────────────────────────────────────────────────

export function CompareStep() {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const column = (heading: string, items: readonly Key[], raised: boolean) => (
    <View
      style={[
        styles.versus,
        { backgroundColor: colors.card },
        raised ? { borderColor: PRIMARY, borderWidth: 2, transform: [{ translateY: -10 }] } : { opacity: 0.85 },
      ]}>
      <Text style={[styles.versusHead, { color: raised ? PRIMARY : meter.label }]} maxFontSizeMultiplier={1.3}>
        {heading}
      </Text>
      {items.map((key) => (
        <View key={key} style={styles.versusRow}>
          <HugeiconsIcon icon={raised ? Tick02Icon : Cancel01Icon} size={18} color={raised ? PRIMARY : meter.caption} strokeWidth={2.2} />
          <Text style={[styles.versusText, { color: raised ? colors.foreground : meter.label }]} maxFontSizeMultiplier={1.3}>
            {t(key)}
          </Text>
        </View>
      ))}
    </View>
  );
  return (
    <ScrollView style={styles.fill} contentContainerStyle={styles.compareContent} showsVerticalScrollIndicator={false}>
      <Text accessibilityRole="header" style={[styles.heading, { color: colors.foreground }]} maxFontSizeMultiplier={1.3}>
        {t('story.compare.title')}
      </Text>
      <View style={styles.versusPair}>
        {column(t('story.compare.without'), ['story.compare.without1', 'story.compare.without2', 'story.compare.without3'], false)}
        {column(t('story.compare.with'), ['story.compare.with1', 'story.compare.with2', 'story.compare.with3'], true)}
      </View>
    </ScrollView>
  );
}

// ── Reviews ──────────────────────────────────────────────────────────────────

/**
 * The App Store's reviews of Walkito, word for word, under the names they
 * were posted with (App Store US, read Nov 18, 2026, both five stars). Never
 * written or edited by us; a new one is added only from the store.
 */
const REVIEWS: readonly { author: string; text: Key }[] = [
  { author: 'Kolodi', text: 'story.reviews.kolodi' },
  { author: 'AhmetAZ', text: 'story.reviews.ahmetaz' },
];

/**
 * The App Store's own rating and count, from
 * https://itunes.apple.com/lookup?id=6813076846 on Nov 18, 2026:
 * averageUserRating 5, userRatingCount 4. Update both from the store, never by hand.
 */
export const APP_STORE_RATING = { rating: '5.0', count: 4 } as const;

function Stars({ size = 16 }: { size?: number }) {
  const scheme = useColorScheme();
  const t = useT();
  return (
    <View style={styles.stars} accessibilityLabel={t('story.reviews.stars')}>
      {[0, 1, 2, 3, 4].map((i) => (
        <HugeiconsIcon key={i} icon={StarIcon} size={size} color={accents[scheme].amber.fill} strokeWidth={2.4} />
      ))}
    </View>
  );
}

/** "★ 5.0 · 4 App Store ratings": the store's own figure, nothing else. */
export function RatingLine({ color }: { color: string }) {
  const scheme = useColorScheme();
  const t = useT();
  return (
    <View style={styles.ratingRow}>
      <HugeiconsIcon icon={StarIcon} size={15} color={accents[scheme].amber.fill} strokeWidth={2.4} />
      <Text style={[styles.rating, { color }]} maxFontSizeMultiplier={1.3}>
        {t('story.reviews.rating', { rating: APP_STORE_RATING.rating, count: APP_STORE_RATING.count })}
      </Text>
    </View>
  );
}

export function ReviewsStep() {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  return (
    <ScrollView style={styles.fill} contentContainerStyle={styles.reviewsContent} showsVerticalScrollIndicator={false}>
      <Text accessibilityRole="header" style={[styles.heading, { color: colors.foreground }]} maxFontSizeMultiplier={1.3}>
        {t('story.reviews.title')}
      </Text>
      {REVIEWS.map((review, i) => (
        <Animated.View
          key={review.author}
          entering={FadeInDown.delay(120 + i * 140).duration(360).reduceMotion(ReduceMotion.System)}
          style={[styles.review, { backgroundColor: colors.card }]}>
          <View style={styles.reviewWho}>
            <View style={[styles.avatar, { backgroundColor: PRIMARY }]}>
              <Text style={styles.avatarText}>{review.author[0]}</Text>
            </View>
            <Text style={[styles.reviewer, { color: colors.foreground }]}>{review.author}</Text>
            <Stars />
          </View>
          <Text style={[styles.quote, { color: colors.foreground }]} maxFontSizeMultiplier={1.4}>
            “{t(review.text)}”
          </Text>
        </Animated.View>
      ))}
      <View style={styles.reviewFoot}>
        <RatingLine color={meter.label} />
        <Text style={[styles.caption, { color: meter.caption }]}>{t('story.reviews.from')}</Text>
      </View>
    </ScrollView>
  );
}

// ── When she gets up ─────────────────────────────────────────────────────────

export function WakeStep({ minutes, onChange }: { minutes: number; onChange: (minutes: number) => void }) {
  return (
    <View style={styles.wake}>
      <TimePicker minutes={minutes} onChange={onChange} variant="wheel" />
    </View>
  );
}

// ── The first move ───────────────────────────────────────────────────────────

export type FirstMoveRun = { day: ProgramDay; step: PlaylistStep };

/**
 * "Try it now · 60 seconds": the first move of Day 1, its clip and its cue,
 * then the session player itself for the minute, in a page sheet, as the
 * paywall's first session played it. Finished, it is Day 1 done (filed as the
 * onboarding ends, once the plan exists). Left early, the invitation stands.
 */
export function FirstMoveStep({
  run,
  onDone,
  onSkip,
  onStart,
}: {
  run: FirstMoveRun;
  /** Finished, the minute run out or ended early with "That's enough". */
  onDone: (stoppedEarly: boolean) => void;
  onSkip: () => void;
  onStart: () => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const focused = useIsFocused();
  const { width, height } = useWindowDimensions();
  const [playing, setPlaying] = useState(false);
  const completed = useRef(false);
  const id = run.step.exerciseId;
  const exercise = exerciseById(id);
  const shape = clipShape(id);
  const clipWidth = Math.round(Math.min(width - 48, height * 0.32 * shape));
  const clip = { width: clipWidth, height: Math.round(clipWidth / shape) };
  const finish = () => {
    setPlaying(false);
    onDone(!completed.current);
  };
  return (
    <View style={styles.fill}>
      <ScrollView style={styles.fill} contentContainerStyle={styles.moveContent} showsVerticalScrollIndicator={false}>
        <Text style={[styles.eyebrow, { color: PRIMARY }]}>{t('story.move.eyebrow')}</Text>
        <Text accessibilityRole="header" style={[styles.heading, styles.left, { color: colors.foreground }]} maxFontSizeMultiplier={1.3}>
          {t(exercise.titleKey)}
        </Text>
        <View style={[styles.clip, clip, { backgroundColor: CLIP_BACKDROP }]}>
          <ExercisePreview exerciseId={id} style={clip} aspectRatio={shape} fit="cover" playing={focused && !playing} />
        </View>
        <View style={[styles.cue, { backgroundColor: colors.card }]}>
          <Text style={[styles.cueText, { color: colors.foreground }]} maxFontSizeMultiplier={1.4}>
            {t(exercise.cueKey)}
          </Text>
        </View>
        <Text style={[styles.small, { color: meter.label }]} maxFontSizeMultiplier={1.4}>
          {t('story.move.ready')}
        </Text>
      </ScrollView>
      <View style={styles.moveFoot}>
        <Button3D
          label={t('story.move.start')}
          onPress={() => {
            completed.current = false;
            onStart();
            setPlaying(true);
          }}
          size="xl"
          docked
        />
        <Pressable accessibilityRole="button" onPress={onSkip} hitSlop={8} style={({ pressed }) => [styles.quiet, pressed && { opacity: 0.6 }]}>
          <Text style={[styles.quietText, { color: meter.label }]}>{t('story.move.skip')}</Text>
        </Pressable>
      </View>
      <Modal
        animationType="slide"
        presentationStyle="pageSheet"
        visible={playing}
        onRequestClose={() => (completed.current ? finish() : setPlaying(false))}>
        <View style={[styles.fill, { backgroundColor: colors.background }]}>
          {playing && (
            <SessionView
              day={run.day}
              playlist={[run.step]}
              title={t('home.day1.title')}
              free
              dayOne
              feedback={false}
              onBack={() => (completed.current ? finish() : setPlaying(false))}
              onComplete={() => {
                completed.current = true;
              }}
              onFinish={finish}
            />
          )}
        </View>
      </Modal>
    </View>
  );
}

// ── How it felt ──────────────────────────────────────────────────────────────

function FeltTop({ exerciseId }: { exerciseId: string }) {
  const scheme = useColorScheme();
  const poster = posterFor(exerciseId);
  return (
    <View style={[styles.feltTop, { backgroundColor: accents[scheme].amber.track }]}>
      {poster != null && <Image source={poster} style={styles.feltPoster} resizeMode="cover" />}
    </View>
  );
}

const FELT_LABEL: Readonly<Record<Felt, Key>> = {
  lighter: 'story.felt.lighter',
  better: 'story.felt.better',
  same: 'story.felt.same',
  unsure: 'story.felt.unsure',
};

/** "How did that feel?", answered in words. No scale, no number. */
export function FeltStep({ exerciseId, value, onPick }: { exerciseId: string; value: string | null; onPick: (felt: Felt) => void }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  return (
    <ScrollView style={styles.fill} contentContainerStyle={styles.feltContent} showsVerticalScrollIndicator={false}>
      <FeltTop exerciseId={exerciseId} />
      <Text accessibilityRole="header" style={[styles.heading, { color: colors.foreground }]}>
        {t('story.felt.title')}
      </Text>
      <Text style={[styles.lead, { color: meter.label }]}>{t('story.felt.blurb')}</Text>
      <View accessibilityRole="radiogroup" style={styles.answers}>
        {FELT.map((felt) => (
          <OptionCard3D key={felt} label={t(FELT_LABEL[felt])} selected={value === felt} mode="single" onPress={() => onPick(felt)} />
        ))}
      </View>
    </ScrollView>
  );
}

/** Her answer, given back as what it means for her own goal. Never a dead end. */
export function FeltAnswerStep({ exerciseId, waking, goal }: { exerciseId: string; waking: boolean; goal: string }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const line = t('story.felt.goodLine', { goal: '\u0000' }).split('\u0000');
  return (
    <ScrollView style={styles.fill} contentContainerStyle={styles.feltContent} showsVerticalScrollIndicator={false}>
      <FeltTop exerciseId={exerciseId} />
      <Text accessibilityRole="header" style={[styles.heading, { color: colors.foreground }]}>
        {t(waking ? 'story.felt.goodTitle' : 'story.felt.normalTitle')}
      </Text>
      <Text style={[styles.lead, { color: meter.label }]} maxFontSizeMultiplier={1.4}>
        {waking ? (
          <>
            {line[0]}
            <Text style={{ color: PRIMARY, ...fonts.bold(19, -0.2) }}>{goal}</Text>
            {line[1]}
          </>
        ) : (
          t('story.felt.normalLine')
        )}
      </Text>
    </ScrollView>
  );
}

/** Full colour, one line. */
export function PraiseStep({ name }: { name: string }) {
  const t = useT();
  return (
    <Animated.View entering={FadeIn.duration(360).reduceMotion(ReduceMotion.System)} style={[styles.praise, { backgroundColor: PRIMARY }]}>
      <Text accessibilityRole="header" style={styles.praiseTitle} maxFontSizeMultiplier={1.25}>
        {name.trim() !== '' ? t('story.praise.titleNamed', { name: name.trim() }) : t('story.praise.title')}
      </Text>
      <View style={styles.praiseRow}>
        <Text style={styles.praiseTitle} maxFontSizeMultiplier={1.25}>
          {t('story.praise.line')}
        </Text>
        <View style={styles.praiseTick}>
          <HugeiconsIcon icon={Tick02Icon} size={26} color={PRIMARY} strokeWidth={3} />
        </View>
      </View>
    </Animated.View>
  );
}

// ── Tomorrow, before her first step ─────────────────────────────────────────

/**
 * "Tomorrow at 7:00, before your first step": the three moves of the routine
 * in bed (`FIRST_STEPS`), each with its still, and "2 minutes". The hero for
 * somebody who dreads her first steps; for anyone else the same plan under a
 * quieter heading. The study is behind its link, never a promise.
 */
export function RoutineStep({ time, moves, hero }: { time: string; moves: readonly string[]; hero: boolean }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const [why, setWhy] = useState(false);
  return (
    <ScrollView style={styles.fill} contentContainerStyle={styles.routineContent} showsVerticalScrollIndicator={false}>
      {!hero && <Text style={[styles.eyebrow, { color: meter.label }]}>{t('story.routine.eyebrow')}</Text>}
      <Text
        accessibilityRole="header"
        style={[hero ? styles.heading : styles.headingQuiet, styles.left, { color: colors.foreground }]}
        maxFontSizeMultiplier={1.3}>
        {t('story.routine.title', { time })}
      </Text>
      <View style={styles.routineMeta}>
        <View style={[styles.minutesChip, { backgroundColor: accents[scheme].amber.track }]}>
          <FluentIcon name="sunrise" size={16} />
          <Text style={[styles.minutesText, { color: colors.foreground }]}>{t('story.routine.minutes')}</Text>
        </View>
        <Text style={[styles.small, styles.shrink, { color: meter.label }]}>{t('story.routine.line')}</Text>
      </View>
      {moves.map((id, i) => {
        const poster = posterFor(id);
        return (
          <Animated.View
            key={id}
            entering={FadeInDown.delay(100 + i * 110).duration(340).reduceMotion(ReduceMotion.System)}
            style={[styles.routineCard, { backgroundColor: colors.card }]}>
            <View style={[styles.routineThumb, { backgroundColor: CLIP_BACKDROP }]}>
              {poster != null && <Image source={poster} style={StyleSheet.absoluteFill} resizeMode="cover" />}
            </View>
            <View style={styles.shrink}>
              <Text style={[styles.routineIndex, { color: meter.label }]}>{i + 1}</Text>
              <Text style={[styles.routineTitle, { color: colors.foreground }]} maxFontSizeMultiplier={1.3}>
                {t(exerciseById(id).titleKey)}
              </Text>
            </View>
          </Animated.View>
        );
      })}
      <Pressable accessibilityRole="button" onPress={() => setWhy((open) => !open)} hitSlop={8} style={({ pressed }) => [pressed && { opacity: 0.6 }]}>
        <Text style={[styles.link, { color: PRIMARY }]}>{t('story.routine.why')}</Text>
      </Pressable>
      {why && (
        <Animated.Text entering={FadeIn.duration(220).reduceMotion(ReduceMotion.System)} style={[styles.small, { color: meter.label }]}>
          {t('story.routine.whyText')}
        </Animated.Text>
      )}
    </ScrollView>
  );
}

// ── Her promise ──────────────────────────────────────────────────────────────

const PAD_HEIGHT = 200;

/**
 * "Sign your commitment": a promise to herself, signed with a finger.
 * Nothing of the drawing is kept or sent. Pure JavaScript (a PanResponder
 * drawing into react-native-svg), so it ships over the air.
 */
export function SignStep({ minutes, onInk }: { minutes: number; onInk: (inked: boolean) => void }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const [paths, setPaths] = useState<string[]>([]);
  const [current, setCurrent] = useState('');
  const ink = useRef(onInk);
  ink.current = onInk;
  const responder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderTerminationRequest: () => false,
      onPanResponderGrant: (e) => {
        const { locationX, locationY } = e.nativeEvent;
        setCurrent(`M ${locationX.toFixed(1)} ${locationY.toFixed(1)}`);
      },
      onPanResponderMove: (e) => {
        const { locationX, locationY } = e.nativeEvent;
        setCurrent((d) => `${d} L ${locationX.toFixed(1)} ${locationY.toFixed(1)}`);
        ink.current(true);
      },
      onPanResponderRelease: () => {
        setCurrent((d) => {
          if (d.includes('L')) setPaths((prev) => [...prev, d]);
          return '';
        });
      },
    }),
  ).current;
  const clear = () => {
    void Haptics.selectionAsync();
    setPaths([]);
    setCurrent('');
    onInk(false);
  };
  return (
    <View style={styles.sign}>
      <Text accessibilityRole="header" style={[styles.heading, { color: colors.foreground }]}>
        {t('story.sign.title')}
      </Text>
      <Text style={[styles.lead, { color: meter.label }]} maxFontSizeMultiplier={1.4}>
        {t('story.sign.promise', { count: minutes })}
      </Text>
      <View
        accessibilityLabel={t('story.sign.pad')}
        style={[styles.pad, { backgroundColor: colors.card, borderColor: meter.track }]}
        {...responder.panHandlers}>
        <Svg width="100%" height={PAD_HEIGHT}>
          {[...paths, current].filter((d) => d !== '').map((d, i) => (
            <Path key={i} d={d} stroke={colors.foreground} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
          ))}
        </Svg>
      </View>
      <View style={styles.padFoot}>
        <Text style={[styles.caption, { color: meter.caption }]}>{t('story.sign.hint')}</Text>
        <Pressable accessibilityRole="button" onPress={clear} hitSlop={8}>
          <Text style={[styles.link, { color: PRIMARY }]}>{t('story.sign.clear')}</Text>
        </Pressable>
      </View>
    </View>
  );
}

// ── A peek at her plan ───────────────────────────────────────────────────────

function Tile({ id, children, big, locked }: { id: string; children: ReactNode; big?: boolean; locked?: boolean }) {
  const poster = posterFor(id);
  return (
    <View style={[styles.tile, big ? styles.tileBig : styles.tileSmall, { backgroundColor: CLIP_BACKDROP }]}>
      {poster != null && <Image source={poster} style={[StyleSheet.absoluteFill, locked && { opacity: 0.45 }]} resizeMode="cover" blurRadius={locked ? 6 : 0} />}
      <View style={[StyleSheet.absoluteFill, styles.tileShade]} />
      {children}
    </View>
  );
}

/**
 * "Here's a peek at your plan": its name and line, her goals as chips, week 1
 * as a photo of her own first move, the weeks after it locked behind two more
 * of her moves. No date for a result.
 */
export function PlanPeekStep({
  name,
  planName,
  line,
  goals,
  tiles,
  minutes,
  weeks,
}: {
  name: string;
  planName: string;
  line: string;
  goals: readonly string[];
  tiles: PeekTiles | null;
  minutes: number;
  weeks: number;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  return (
    <ScrollView style={styles.fill} contentContainerStyle={styles.peekContent} showsVerticalScrollIndicator={false}>
      <Text accessibilityRole="header" style={[styles.heading, styles.left, { color: colors.foreground }]} maxFontSizeMultiplier={1.3}>
        {name.trim() !== '' ? t('story.peek.titleNamed', { name: name.trim() }) : t('story.peek.title')}
      </Text>
      <Text style={[styles.peekLine, { color: meter.label }]} maxFontSizeMultiplier={1.4}>
        <Text style={{ color: colors.foreground, ...fonts.bold(16) }}>{planName}: </Text>
        {line}
      </Text>
      <GoalChips goals={goals} ink={colors.foreground} surface={colors.card} />
      {tiles != null && (
        <>
          <Tile id={tiles.week1} big>
            <View style={styles.tileTag}>
              <Text style={styles.tileTagText}>{t('story.peek.week1')}</Text>
            </View>
            <View style={styles.tileFoot}>
              <Text style={styles.tileTitle} numberOfLines={2}>
                {t(exerciseById(tiles.week1).titleKey)}
              </Text>
              <View style={styles.tileChips}>
                <Text style={styles.tileChip}>{t('story.peek.minutes', { minutes })}</Text>
                <Text style={styles.tileChip}>{t('story.peek.moves', { count: tiles.count })}</Text>
              </View>
            </View>
          </Tile>
          <View style={styles.tileRow}>
            {[
              { id: tiles.week2, label: t('story.peek.week2') },
              { id: tiles.later, label: t('story.peek.later', { weeks }) },
            ].map((tile) => (
              <Tile key={tile.label} id={tile.id} locked>
                <View style={styles.lock} accessibilityLabel={t('story.peek.locked')}>
                  <HugeiconsIcon icon={LockIcon} size={20} color="#FFFFFF" strokeWidth={2.2} />
                </View>
                <Text style={[styles.tileTitle, styles.tileLabel]}>{tile.label}</Text>
              </Tile>
            ))}
          </View>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fill: { flex: 1 },
  left: { textAlign: 'left' },
  shrink: { flexShrink: 1, flex: 1 },
  heading: { ...fonts.heavy(28, -0.8), lineHeight: 33, textAlign: 'center' },
  headingQuiet: { ...fonts.bold(24, -0.6), lineHeight: 29 },
  lead: { ...fonts.medium(18, -0.2), lineHeight: 25, textAlign: 'center' },
  small: { ...fonts.medium(14), lineHeight: 19 },
  caption: { ...fonts.medium(13), lineHeight: 17, textAlign: 'center' },
  eyebrow: { ...fonts.bold(13, 0.4), textTransform: 'uppercase' },
  link: { ...fonts.semibold(15), paddingVertical: 4 },
  quiet: { alignSelf: 'center', paddingVertical: 6 },
  quietText: fonts.semibold(15),

  banner: { borderRadius: 24, borderCurve: 'continuous', paddingHorizontal: 20, paddingVertical: 18, marginBottom: 18 },
  bannerText: { ...fonts.heavy(22, -0.5), lineHeight: 27, color: '#FFFFFF' },

  cardContent: { alignItems: 'center', gap: 16, paddingBottom: 12 },
  still: { width: '100%', maxWidth: 360, borderRadius: 26, borderCurve: 'continuous', overflow: 'hidden' },
  cardTitle: { ...fonts.heavy(30, -0.9), lineHeight: 35, textAlign: 'center' },
  cardBody: { ...fonts.medium(18, -0.2), lineHeight: 24, textAlign: 'center' },
  journals: { gap: 8, alignItems: 'center' },
  journal: { ...fonts.semibold(16, -0.1), lineHeight: 21, textAlign: 'center', fontStyle: 'italic' },
  dots: { flexDirection: 'row', gap: 8, marginTop: 4 },
  dot: { width: 8, height: 8, borderRadius: 4 },

  compareContent: { gap: 26, paddingBottom: 12 },
  versusPair: { flexDirection: 'row', gap: 12, alignItems: 'flex-start', paddingTop: 10 },
  versus: { flex: 1, borderRadius: 22, borderCurve: 'continuous', padding: 16, gap: 14 },
  versusHead: fonts.heavy(17, -0.3),
  versusRow: { flexDirection: 'row', gap: 8, alignItems: 'flex-start' },
  versusText: { ...fonts.semibold(15, -0.1), lineHeight: 20, flexShrink: 1 },

  reviewsContent: { gap: 14, paddingBottom: 12 },
  review: { borderRadius: 22, borderCurve: 'continuous', padding: 18, gap: 12 },
  reviewWho: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  avatar: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  avatarText: { ...fonts.heavy(16), color: '#FFFFFF' },
  reviewer: { ...fonts.bold(17, -0.2), flex: 1 },
  stars: { flexDirection: 'row', gap: 2 },
  quote: { ...fonts.medium(16), lineHeight: 23 },
  reviewFoot: { alignItems: 'center', gap: 4, marginTop: 4 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  rating: fonts.semibold(14),

  wake: { flex: 1, alignItems: 'center', justifyContent: 'center' },

  moveContent: { gap: 14, paddingBottom: 12 },
  clip: { alignSelf: 'center', borderRadius: 24, borderCurve: 'continuous', overflow: 'hidden' },
  cue: { borderRadius: 18, borderCurve: 'continuous', padding: 14 },
  cueText: { ...fonts.semibold(16, -0.1), lineHeight: 22 },
  moveFoot: { gap: 10, paddingTop: 10, marginHorizontal: -8 },

  feltContent: { gap: 12, paddingBottom: 12 },
  feltTop: { height: 170, borderRadius: 26, borderCurve: 'continuous', alignItems: 'center', justifyContent: 'center', marginBottom: 8, overflow: 'hidden' },
  feltPoster: { width: 150, height: 150, borderRadius: 75 },
  answers: { gap: 10, marginTop: 8 },

  praise: { flex: 1, borderRadius: 32, borderCurve: 'continuous', padding: 28, justifyContent: 'center', gap: 14, marginBottom: 8 },
  praiseTitle: { ...fonts.heavy(36, -1), lineHeight: 42, color: '#FFFFFF' },
  praiseRow: { gap: 16 },
  praiseTick: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' },

  routineContent: { gap: 12, paddingBottom: 12 },
  routineMeta: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 4 },
  minutesChip: { flexDirection: 'row', alignItems: 'center', gap: 6, paddingHorizontal: 12, paddingVertical: 7, borderRadius: 999 },
  minutesText: fonts.bold(14),
  routineCard: { flexDirection: 'row', alignItems: 'center', gap: 14, borderRadius: 20, borderCurve: 'continuous', padding: 10 },
  routineThumb: { width: 84, height: 84, borderRadius: 14, overflow: 'hidden' },
  routineIndex: fonts.bold(13),
  routineTitle: { ...fonts.bold(17, -0.2), lineHeight: 22 },

  sign: { flex: 1, gap: 14 },
  pad: { height: PAD_HEIGHT, borderRadius: 22, borderCurve: 'continuous', borderWidth: 1.5, borderStyle: 'dashed', overflow: 'hidden', marginTop: 8 },
  padFoot: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },

  peekContent: { gap: 14, paddingBottom: 12 },
  peekLine: { ...fonts.medium(16), lineHeight: 22 },
  tile: { borderRadius: 22, borderCurve: 'continuous', overflow: 'hidden', justifyContent: 'flex-end' },
  tileBig: { height: 230 },
  tileSmall: { flex: 1, height: 130 },
  tileShade: { experimental_backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.6) 100%)' },
  tileRow: { flexDirection: 'row', gap: 12 },
  tileTag: { position: 'absolute', top: 12, left: 12, backgroundColor: PRIMARY, borderRadius: 999, paddingHorizontal: 10, paddingVertical: 5 },
  tileTagText: { ...fonts.bold(13), color: '#FFFFFF' },
  tileFoot: { padding: 14, gap: 8 },
  tileTitle: { ...fonts.heavy(19, -0.3), lineHeight: 23, color: '#FFFFFF' },
  tileLabel: { padding: 12 },
  tileChips: { flexDirection: 'row', gap: 6, flexWrap: 'wrap' },
  tileChip: { ...fonts.semibold(12), color: '#FFFFFF', backgroundColor: 'rgba(255,255,255,0.22)', borderRadius: 999, paddingHorizontal: 9, paddingVertical: 4, overflow: 'hidden' },
  lock: { position: 'absolute', top: 10, right: 10, width: 34, height: 34, borderRadius: 17, backgroundColor: 'rgba(0,0,0,0.45)', alignItems: 'center', justifyContent: 'center' },
});
