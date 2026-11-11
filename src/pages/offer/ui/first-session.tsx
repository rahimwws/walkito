import * as Haptics from 'expo-haptics';
import { useIsFocused } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Animated, { Easing, FadeIn, FadeInDown, FadeOut, ReduceMotion } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { setLastSessionFeedback } from '@/entities/program';
import { DAY_ONE_MINUTES, dayOneRun, finishDayOne, type DayOneRun } from '@/features/home-tour';
import { clipShape, fonts, meterColors, palette } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Button3D } from '@/shared/ui/button-3d';
import { FluentIcon, type FluentName } from '@/shared/ui/fluent-icon';
import { celebrateRig } from '@/shared/ui/mascot';
import { OptionCard3D } from '@/shared/ui/option-card-3d';
import { CLIP_BACKDROP, ExercisePreview, SessionView } from '@/widgets/session-player';

import { markFirstSession } from '../model/first-session';
import { GoldText } from './glow';
import { IntroMascot } from './intro-mascot';

/** The clip's share of the window's height, at most: an upright clip is as
 * tall as this, a wide one as wide as the page. */
const CLIP_SHARE = 0.4;
/** The page's side padding. */
const GUTTER = 22;
/** After an answer, before the paywall: long enough to see it was taken. */
const ANSWERED_HOLD_MS = 420;

type Feedback = 'easy' | 'ok' | 'hard';

const FEELINGS: readonly { value: Feedback; emoji: FluentName; label: 'offer.felt.easy' | 'offer.felt.ok' | 'offer.felt.hard' }[] = [
  { value: 'easy', emoji: 'feather', label: 'offer.felt.easy' },
  { value: 'ok', emoji: 'check', label: 'offer.felt.ok' },
  { value: 'hard', emoji: 'fire', label: 'offer.felt.hard' },
];

const STAGE_IN = FadeIn.duration(420)
  .easing(Easing.bezier(0.23, 1, 0.32, 1).factory())
  .reduceMotion(ReduceMotion.System);
const STAGE_OUT = FadeOut.duration(240).reduceMotion(ReduceMotion.System);

export type FirstSessionProps = {
  /** First name, or empty. */
  name: string;
  /** On to the paywall: the session done and answered about, or passed on. */
  onDone: () => void;
};

/**
 * The first session, before the paywall: "Try the first 2 minutes now", the
 * two-minute day-one session itself, then "How did that feel?".
 *
 * The onboarding used to end on a price. Everybody a Meta ad brought read a
 * promise, answered twenty questions, saw a plan and was asked for money
 * before the app had done anything for their feet, and nobody paid. Here the
 * product goes first: the session is the same one Home's "Day 1" card plays
 * (`dayOneRun`, `finishDayOne`), filed as the plan's day one, and the
 * paywall after it carries on from a day already done.
 *
 * It is the only thing in the app that is free, and it says nothing else is:
 * "Not now" leads to the paywall, as finishing does. The answer about how it
 * felt is the session player's own (easy, right, hard), kept on the session
 * the plan reads (`setLastSessionFeedback`).
 */
export function FirstSession({ name, onDone }: FirstSessionProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const insets = useSafeAreaInsets();
  const focused = useIsFocused();
  const { height, width } = useWindowDimensions();

  /** Fixed as the screen opens, so the clip shown is the first move played. */
  const [run] = useState<DayOneRun>(() => dayOneRun());
  const [playing, setPlaying] = useState(false);
  const [stage, setStage] = useState<'invite' | 'felt'>('invite');
  const [felt, setFelt] = useState<Feedback | null>(null);
  /** The last move ran out: a sheet swiped away after that still counts. */
  const completed = useRef(false);

  useEffect(() => {
    track('first_session_offered');
  }, []);

  const start = () => {
    track('first_session_started');
    completed.current = false;
    setPlaying(true);
  };
  const finish = () => {
    finishDayOne(run);
    markFirstSession('done');
    setPlaying(false);
    setStage('felt');
  };
  const dismiss = () => {
    if (completed.current) finish();
    else setPlaying(false);
  };
  const decline = () => {
    void Haptics.selectionAsync();
    track('first_session_declined');
    markFirstSession('declined');
    onDone();
  };
  const answer = (value: Feedback) => {
    if (felt != null) return;
    setFelt(value);
    setLastSessionFeedback(value);
    track('first_session_felt', { feedback: value });
    setTimeout(onDone, ANSWERED_HOLD_MS);
  };

  // In the clip's own shape, so it fills its card without bands and its
  // still stands there until the film arrives.
  const first = run.steps[0].exerciseId;
  const shape = clipShape(first);
  const clipWidth = Math.round(Math.min(width - GUTTER * 2, height * CLIP_SHARE * shape));
  const clip = { width: clipWidth, height: Math.round(clipWidth / shape) };
  const foot = { paddingBottom: Math.max(insets.bottom, 16) + 4 };

  return (
    <View style={[styles.screen, { paddingTop: insets.top + 16, backgroundColor: colors.background }]}>
      <StatusBar style={scheme === 'dark' ? 'light' : 'dark'} />
      {stage === 'invite' ? (
        <Animated.View key="invite" exiting={STAGE_OUT} style={styles.stage}>
          <View style={styles.hero}>
            {/* The first move of the session, playing: what the two minutes
                are, before a word about them. */}
            <View style={[styles.clip, clip]}>
              <ExercisePreview
                exerciseId={first}
                style={clip}
                aspectRatio={shape}
                fit="cover"
                playing={focused && !playing}
              />
            </View>
          </View>
          <Animated.View entering={FadeInDown.delay(120).duration(380).reduceMotion(ReduceMotion.System)} style={styles.head}>
            <GoldText style={styles.eyebrow}>{t('offer.trial.eyebrow')}</GoldText>
            <Text
              accessibilityRole="header"
              numberOfLines={3}
              adjustsFontSizeToFit
              minimumFontScale={0.75}
              style={[styles.title, { color: colors.foreground }]}
              maxFontSizeMultiplier={1.3}>
              {name !== ''
                ? t('offer.first.titleNamed', { name, count: DAY_ONE_MINUTES })
                : t('offer.first.title', { count: DAY_ONE_MINUTES })}
            </Text>
            <Text style={[styles.body, { color: meter.caption }]} maxFontSizeMultiplier={1.4}>
              {t('offer.first.body')}
            </Text>
          </Animated.View>
          <View style={[styles.cta, foot]}>
            <Button3D label={t('offer.first.start')} onPress={start} size="xl" docked />
            <Pressable
              accessibilityRole="button"
              onPress={decline}
              hitSlop={8}
              style={({ pressed }) => [styles.quiet, pressed && { opacity: 0.6 }]}>
              <Text style={[styles.quietText, { color: meter.caption }]} maxFontSizeMultiplier={1.3}>
                {t('offer.plans.skip')}
              </Text>
            </Pressable>
          </View>
        </Animated.View>
      ) : (
        <Animated.View key="felt" entering={STAGE_IN} style={styles.stage}>
          <View style={styles.hero}>
            <IntroMascot rig={celebrateRig} shot="celebrate" size={height < 700 ? 140 : 180} surface={colors.background} />
          </View>
          <View style={styles.head}>
            <Text accessibilityRole="header" style={[styles.title, { color: colors.foreground }]} maxFontSizeMultiplier={1.3}>
              {name !== '' ? t('offer.next.titleNamed', { name }) : t('offer.next.title')}
            </Text>
            <Text style={[styles.question, { color: meter.caption }]} maxFontSizeMultiplier={1.4}>
              {t('offer.felt.question')}
            </Text>
          </View>
          <View accessibilityRole="radiogroup" style={[styles.answers, foot]}>
            {FEELINGS.map((feeling) => (
              <OptionCard3D
                key={feeling.value}
                label={t(feeling.label)}
                art={<FluentIcon name={feeling.emoji} size={30} />}
                selected={felt === feeling.value}
                mode="single"
                onPress={() => answer(feeling.value)}
              />
            ))}
            <Text style={[styles.note, { color: meter.caption }]} maxFontSizeMultiplier={1.4}>
              {t('offer.felt.note')}
            </Text>
          </View>
        </Animated.View>
      )}

      {/* The session, in a page sheet over the invitation, as Home plays it
          over its "Day 1" card. The page colour is on the sheet itself, so it
          keeps it while it slides away with the player already gone. */}
      <Modal animationType="slide" presentationStyle="pageSheet" visible={playing} onRequestClose={dismiss}>
        <View style={[styles.player, { backgroundColor: colors.background }]}>
          {playing && (
            <SessionView
              day={run.day}
              playlist={run.steps}
              title={t('home.day1.title')}
              free
              feedback={false}
              onBack={dismiss}
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

const styles = StyleSheet.create({
  screen: { flex: 1, paddingHorizontal: GUTTER },
  stage: { flex: 1, gap: 20 },
  hero: { flex: 1, minHeight: 140, alignItems: 'center', justifyContent: 'center' },
  clip: {
    borderRadius: 28,
    borderCurve: 'continuous',
    overflow: 'hidden',
    backgroundColor: CLIP_BACKDROP,
  },
  head: { alignItems: 'center', gap: 10 },
  eyebrow: { alignSelf: 'center' },
  title: { ...fonts.heavy(32, -0.9), lineHeight: 36, textAlign: 'center' },
  body: { ...fonts.medium(16), lineHeight: 22, textAlign: 'center' },
  question: { ...fonts.semibold(18, -0.2), lineHeight: 24, textAlign: 'center' },
  cta: { gap: 10 },
  quiet: { alignSelf: 'center', paddingVertical: 6 },
  quietText: fonts.semibold(15),
  answers: { gap: 10 },
  note: { ...fonts.medium(14), lineHeight: 19, textAlign: 'center', marginTop: 4 },
  player: { flex: 1 },
});
