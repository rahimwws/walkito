import * as Haptics from 'expo-haptics';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  AppState,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {
  Easing,
  ReduceMotion,
  cancelAnimation,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { planSettings } from '@/entities/program';
import { bitepal, fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';

import { clipFor } from '../../config/exercise-clips';
import { TEST_PICTURES } from '../../config/test-pictures';
import { ClipViewer } from '../clip-viewer';
import { playCountInCue } from '../../model/count-in-sound';
import {
  CALF_PACE_MS,
  TEST_ORDER,
  balanceEyesOpen,
  clampEntry,
  clockLabel,
  fullMeasure,
  measuredAt,
  remainingFraction,
  repPhaseAt,
  secondsLeftAt,
  testIndex,
  type Station,
} from '../../model/test-day';
import { CountIn } from '../player/count-in';
import { Capsule, NUMERAL_SCALE, SIDE, TITLE_SCALE, TextButton as KitTextButton, cardStyle, ink, soft, CardLabel } from '../player/kit';
import { StepList } from '../player/sheets';
import { CountdownRing } from './countdown-ring';
import { Stepper } from './stepper';
import { BALANCE_EYES_OPEN_STEPS, TEST_META, testColor } from './test-meta';

/**
 * Where a test is.
 *
 * - `ready` — the demonstration and the three lines, and Start.
 * - `counting` — three, two, one over the measuring screen, clock not running.
 * - `measuring` — the countdown, and Stop.
 * - `paused` — the app went to the background mid-test. The clock stopped
 *   with it; a hold timed across a trip to another app is not a hold.
 * - `confirm` — the figure, the chance to correct it, and on.
 */
type Stage = 'ready' | 'counting' | 'measuring' | 'paused' | 'confirm';

/** How often the figures are re-read off the wall clock. The ring does not
 * depend on this — it runs on the UI thread — so ten a second is only how
 * soon a new raise or second is noticed. */
const POLL_MS = 100;

export type TestRunnerProps = {
  station: Station;
  /** "Left leg - the sore one", for the tests stood on one leg. */
  legLabel: string | null;
  /** Clips are filmed on the right foot; flipped for a left-leg test. */
  mirrored: boolean;
  /** How long the test may run, from `testWindowMs`. */
  windowMs: number;
  /** Straight into the count on arrival — the second calf leg, whose Start
   * was the button on the first leg's confirmation. */
  autoStart: boolean;
  /** False once the flow is leaving: nothing may keep counting, ticking or
   * playing behind a screen on its way out. */
  active: boolean;
  /** The other leg's name, on the first calf set — its confirmation doubles
   * as the introduction to the second. */
  nextLeg: string | null;
  /** The last measurement of the day: its button leads to the results. */
  last: boolean;
  /** The first time a clock actually starts. From then on closing asks first. */
  onBegan: () => void;
  onConfirm: (value: number) => void;
};

/**
 * One test, from instructions to a confirmed figure.
 *
 * The clock is the wall clock, as in the session player: the elapsed time is
 * `now - runFrom`, re-read ten times a second, so a late frame can never
 * stretch a hold and a stalled interval can never shorten one. A pause banks
 * what had been done and a resume starts a fresh count-in from it.
 *
 * A countdown, never a stopwatch — see `testWindowMs`. Running out is the goal
 * reached, and says so with the same cue a count-in ends on: somebody balancing
 * with their eyes closed has to hear that it is over.
 */
export function TestRunner({
  station,
  legLabel,
  mirrored,
  windowMs,
  autoStart,
  active,
  nextLeg,
  last,
  onBegan,
  onConfirm,
}: TestRunnerProps) {
  const insets = useSafeAreaInsets();
  const { width, height, fontScale } = useWindowDimensions();
  const t = useT();

  const { kind } = station;
  const meta = TEST_META[kind];
  const steps = kind === 'balance' && balanceEyesOpen(planSettings()) ? BALANCE_EYES_OPEN_STEPS : meta.steps;
  const max = fullMeasure(kind, windowMs);

  const [stage, setStage] = useState<Stage>(autoStart ? 'counting' : 'ready');
  const [countFrom, setCountFrom] = useState<number | null>(() => (autoStart ? Date.now() : null));
  /** The wall-clock instant this test's elapsed time counts from. */
  const [runFrom, setRunFrom] = useState<number | null>(null);
  /** Elapsed, for what is on screen. */
  const [elapsed, setElapsed] = useState(0);
  /** The figure on the confirmation, as corrected. */
  const [value, setValue] = useState(0);
  const [clipFailed, setClipFailed] = useState(false);
  /** The demonstration at full size, opened from either card. */
  const [viewing, setViewing] = useState(false);

  /** What the ring shows is left, 1 → 0. */
  const ring = useSharedValue(1);

  // Behind refs as well as state: the background listener and the pause read
  // them from callbacks registered once, and must see the latest.
  const stageRef = useRef(stage);
  stageRef.current = stage;
  const runFromRef = useRef(runFrom);
  runFromRef.current = runFrom;
  /** Elapsed time banked across a pause. */
  const held = useRef(0);
  /** The last raise the metronome has ticked for. */
  const lastRep = useRef(0);
  /** The whole second last put on screen. */
  const shownSecond = useRef(0);
  const onBeganRef = useRef(onBegan);
  onBeganRef.current = onBegan;

  const player = useVideoPlayer(clipFor(meta.clip), (instance) => {
    instance.loop = true;
    // A diagram that moves. Muted, and mixing, so it neither makes a sound
    // nor takes the audio session from the user's music or the count's cues.
    instance.muted = true;
    instance.audioMixingMode = 'mixWithOthers';
  });

  useEffect(() => {
    const subscription = player.addListener('statusChange', ({ status }) => {
      setClipFailed(status === 'error');
    });
    return () => subscription.remove();
  }, [player]);

  /**
   * The demonstration plays while the test runs, in the corner, and is held
   * on its first frame for the count, so it begins with the test. Playing, it
   * also keeps the screen awake, which is exactly when a screen that dimmed
   * would lose somebody their place. Before the test the picture stands in
   * for it, and the full-size viewer plays its own copy.
   */
  useEffect(() => {
    player.loop = true;
    player.muted = true;
    player.audioMixingMode = 'mixWithOthers';
    if (active && stage === 'measuring') {
      player.play();
      return;
    }
    player.pause();
    if (stage === 'counting') player.currentTime = 0;
  }, [player, stage, active]);

  /** The figure is in: to the confirmation, with the clock stopped. */
  const settle = useCallback(
    (measured: number, ranOut: boolean) => {
      held.current = 0;
      setRunFrom(null);
      setValue(clampEntry(measured, max));
      setStage('confirm');
      if (ranOut) {
        playCountInCue('go');
        void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
      }
    },
    [max],
  );

  /** Go: the clock starts from whatever was banked before a pause. */
  const begin = useCallback(() => {
    const banked = held.current;
    lastRep.current = Math.floor(banked / CALF_PACE_MS);
    shownSecond.current = Math.floor(banked / 1000);
    setCountFrom(null);
    setElapsed(banked);
    setRunFrom(Date.now() - banked);
    setStage('measuring');
    onBeganRef.current();
  }, []);

  /**
   * Stops everything in flight without losing it: a count is dropped (the
   * test is not started), a running clock is banked and paused.
   */
  const halt = useCallback(() => {
    if (stageRef.current === 'counting') {
      setCountFrom(null);
      setStage(held.current > 0 ? 'paused' : 'ready');
      return;
    }
    const from = runFromRef.current;
    if (stageRef.current !== 'measuring' || from == null) return;
    const banked = Date.now() - from;
    if (banked >= windowMs) {
      settle(max, false);
      return;
    }
    held.current = banked;
    setElapsed(banked);
    setRunFrom(null);
    setStage('paused');
  }, [windowMs, max, settle]);

  // Paused by the background. `inactive` too: an incoming call or the Control
  // Center is the phone in somebody else's hands, not a hold being timed.
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (next) => {
      if (next !== 'active') halt();
    });
    return () => subscription.remove();
  }, [halt]);

  useEffect(() => {
    if (!active) halt();
  }, [active, halt]);

  /** The clock itself. */
  useEffect(() => {
    if (stage !== 'measuring' || runFrom == null) return undefined;
    const read = () => {
      const now = Date.now() - runFrom;
      if (now >= windowMs) {
        settle(max, true);
        return;
      }
      // Everything on screen — the seconds, the raises, up or down — turns
      // over on a whole second, so the screen re-renders once a second rather
      // than on every read. The ring does not wait for this; it is on the UI
      // thread.
      const second = Math.floor(now / 1000);
      if (second !== shownSecond.current) {
        shownSecond.current = second;
        setElapsed(now);
      }
      if (kind === 'calf') {
        // The metronome: a tick at the top of every raise.
        const reps = Math.floor(now / CALF_PACE_MS);
        if (reps > lastRep.current) {
          lastRep.current = reps;
          playCountInCue('tick');
          void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
        }
      }
    };
    read();
    const id = setInterval(read, POLL_MS);
    return () => clearInterval(id);
  }, [stage, runFrom, windowMs, kind, max, settle]);

  /** The ring: one linear run to empty while measuring, still otherwise. Never
   * reduced for Reduce Motion — it is a clock, not a flourish, and a reduced
   * timing would jump it straight to empty. */
  useEffect(() => {
    cancelAnimation(ring);
    if (stage === 'measuring' && runFrom != null) {
      const left = Math.max(0, windowMs - (Date.now() - runFrom));
      ring.value = withSequence(
        withTiming(left / windowMs, { duration: 0, reduceMotion: ReduceMotion.Never }),
        withTiming(0, { duration: left, easing: Easing.linear, reduceMotion: ReduceMotion.Never }),
      );
      return;
    }
    ring.value = remainingFraction(stage === 'confirm' ? 0 : held.current, windowMs);
  }, [stage, runFrom, windowMs, ring]);

  const start = () => {
    setCountFrom(Date.now());
    setStage('counting');
  };

  const stop = () => {
    const from = runFromRef.current;
    if (from == null) return;
    settle(measuredAt(kind, Date.now() - from, windowMs), false);
  };

  const restart = () => {
    held.current = 0;
    setElapsed(0);
    setStage('ready');
  };

  const eyebrow = t('testday.test.eyebrow', { current: testIndex(kind) + 1, total: TEST_ORDER.length });
  const color = testColor(kind);
  const disc = Math.min(width - 96, height * 0.34, 300);
  const name = t(meta.name);

  if (stage === 'ready' || stage === 'confirm') {
    return (
      <View style={styles.root}>
        <ClipViewer clip={meta.clip} mirrored={mirrored} visible={viewing} onClose={() => setViewing(false)} />
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <Heading eyebrow={eyebrow} title={name} leg={legLabel} />

          {stage === 'ready' ? (
            <>
              <View style={styles.pictureRow}>
                <View
                  style={[styles.disc, { width: disc, height: disc, borderRadius: disc / 2, backgroundColor: soft(color) }]}>
                  <Image
                    source={TEST_PICTURES[kind].full}
                    style={[styles.picture, mirrored && styles.mirrored]}
                    resizeMode="contain"
                    accessibilityIgnoresInvertColors
                  />
                </View>
              </View>
              {!clipFailed && (
                <KitTextButton label={t('testday.watch')} onPress={() => setViewing(true)} style={styles.watch} />
              )}
              <View style={[styles.card, styles.steps]}>
                <CardLabel>{t('player.sheet.stepsTitle')}</CardLabel>
                <StepList steps={steps.map((key) => t(key))} />
              </View>
            </>
          ) : (
            <>
              <View style={[styles.card, styles.confirm]}>
                <Text maxFontSizeMultiplier={TITLE_SCALE} style={styles.question} accessibilityLiveRegion="polite">
                  {kind === 'calf'
                    ? t('testday.confirm.raises', { count: value })
                    : t('testday.confirm.seconds', { count: value })}
                </Text>
                <View style={styles.stepper}>
                  <Stepper value={value} max={max} onChange={setValue} />
                </View>
                {/* A hold is stopped from wherever the phone is, so its figure
                    runs long, not short, and the hint says which way to correct. */}
                <Text style={styles.hint}>{kind === 'calf' ? t('testday.confirm.hint') : t('testday.confirm.holdHint')}</Text>
              </View>

              {nextLeg != null && (
                <View style={[styles.card, styles.next]}>
                  <Text style={styles.nextTitle}>{t('testday.calf.otherTitle')}</Text>
                  <Text style={styles.nextLeg}>{nextLeg}</Text>
                  <Text style={styles.hint}>{t('testday.calf.otherBody')}</Text>
                </View>
              )}
            </>
          )}
        </ScrollView>

        <View style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }]}>
          {stage === 'ready' ? (
            <Capsule label={t('testday.start')} onPress={start} />
          ) : (
            <>
              <Capsule
                label={nextLeg != null ? t('testday.start') : last ? t('testday.confirm.finish') : t('testday.confirm.next')}
                onPress={() => onConfirm(value)}
              />
              <KitTextButton label={t('testday.confirm.again')} onPress={restart} />
            </>
          )}
        </View>
      </View>
    );
  }

  // Counting, measuring and paused share one screen: the count runs over the
  // measuring screen, so "go" lifts it away to reveal the clock already there.
  const large = fontScale > 1.6;
  const ringSize = Math.min(width - 96, height * (large ? 0.28 : 0.36), 280);
  const secondsLeft = secondsLeftAt(elapsed, windowMs);
  const reps = measuredAt('calf', elapsed, windowMs);
  /** The unit and, for the raises, up or down: inside the ring, or under it
   * once the words would no longer fit in it. */
  const ringWords = (
    <>
      <Text style={styles.unit}>
        {kind === 'calf' ? t('testday.results.unitRaises', { count: reps }) : t('testday.secondsLeft', { count: secondsLeft })}
      </Text>
      {kind === 'calf' && (
        <Text style={styles.phase}>
          {stage === 'measuring' ? (repPhaseAt(elapsed) === 'up' ? t('testday.calf.up') : t('testday.calf.down')) : ' '}
        </Text>
      )}
    </>
  );

  return (
    <View style={styles.root}>
      <ClipViewer clip={meta.clip} mirrored={mirrored} visible={viewing} onClose={() => setViewing(false)} />
      <ScrollView style={styles.flex} contentContainerStyle={styles.measure} showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.measureHead}>
          <View style={styles.flex}>
            <Heading eyebrow={eyebrow} title={name} leg={legLabel} />
          </View>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t('widgets.expandDemo')}
            disabled={clipFailed}
            onPress={() => setViewing(true)}
            style={styles.thumb}>
            <View style={styles.video} pointerEvents="none">
              <VideoView style={[styles.video, mirrored && styles.mirrored]} player={player} nativeControls={false} contentFit="cover" />
            </View>
          </Pressable>
        </View>

        {/* Not one accessible element: the figure, its unit and the clock are
            read as the lines they are, not glued into an English sentence. */}
        <View style={styles.ringArea} accessibilityRole="timer">
          <CardLabel style={styles.ringLabel}>
            {kind === 'calf' ? t('player.card.reps') : t('player.card.timeLeft')}
          </CardLabel>
          <CountdownRing size={ringSize} stroke={10} left={ring} tone={{ fill: color, track: bitepal.track }}>
            <Text maxFontSizeMultiplier={NUMERAL_SCALE} style={styles.big} numberOfLines={1} adjustsFontSizeToFit>
              {kind === 'calf' ? reps : secondsLeft}
            </Text>
            {!large && ringWords}
          </CountdownRing>
          {large && ringWords}
          {/* The other half of the clock: the time the raises run against, or
              what a hold has reached, the figure its confirmation asks about. */}
          <Text style={styles.clock}>
            {kind === 'calf'
              ? t('testday.timeLeft', { time: clockLabel(secondsLeft) })
              : t('testday.held', { n: measuredAt(kind, elapsed, windowMs) })}
          </Text>
        </View>

        {stage === 'paused' ? (
          <View style={styles.paused} accessibilityLiveRegion="polite">
            <Text style={styles.pausedTitle}>{t('testday.paused.title')}</Text>
            <Text style={styles.hint}>{t('testday.paused.body')}</Text>
          </View>
        ) : (
          <Text style={styles.stopHint}>{t(meta.stopHint)}</Text>
        )}
      </ScrollView>

      <View style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }]}>
        {stage === 'paused' ? (
          <>
            <Capsule label={t('testday.paused.resume')} onPress={start} />
            <KitTextButton label={t('testday.paused.restart')} onPress={restart} />
          </>
        ) : (
          <Capsule label={t('testday.stop')} onPress={stop} disabled={stage !== 'measuring'} />
        )}
      </View>

      <CountIn
        from={active ? countFrom : null}
        eyebrow={t('player.countIn.getReady')}
        // The leg for the calf test, where which one is the whole question;
        // the test itself for the holds.
        title={kind === 'calf' && legLabel != null ? legLabel : name}
        onDone={begin}
      />
    </View>
  );
}

function Heading({ eyebrow, title, leg }: { eyebrow: string; title: string; leg: string | null }) {
  return (
    <View>
      <CardLabel>{eyebrow}</CardLabel>
      <Text maxFontSizeMultiplier={TITLE_SCALE} style={styles.title} accessibilityRole="header">
        {title}
      </Text>
      {leg != null && (
        <Text maxFontSizeMultiplier={TITLE_SCALE} style={styles.leg}>
          {leg}
        </Text>
      )}
    </View>
  );
}

const THUMB = 88;

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: ink.canvas },
  flex: { flex: 1 },
  content: { paddingHorizontal: SIDE - 4, paddingTop: 12, paddingBottom: 24 },
  card: { ...cardStyle, padding: 20 },
  title: { ...fonts.heavy(32, -0.8), color: ink.text, marginTop: 2 },
  leg: { ...fonts.bold(19), color: bitepal.selected, marginTop: 2 },
  pictureRow: { alignItems: 'center', marginTop: 20 },
  disc: { overflow: 'hidden', alignItems: 'center', justifyContent: 'flex-end' },
  picture: { width: '88%', height: '88%' },
  mirrored: { transform: [{ scaleX: -1 }] },
  watch: { alignSelf: 'center', marginVertical: 4 },
  steps: { gap: 12 },
  question: { ...fonts.bold(26, -0.4), color: ink.text },
  confirm: { marginTop: 24 },
  stepper: { marginTop: 20, alignItems: 'flex-start' },
  hint: { ...fonts.regular(17), color: ink.grey, marginTop: 16 },
  next: { marginTop: 16, gap: 4 },
  nextTitle: { ...fonts.semibold(19), color: ink.text },
  nextLeg: { ...fonts.regular(19), color: ink.text },
  measure: { flexGrow: 1, paddingHorizontal: SIDE - 4, paddingTop: 12 },
  measureHead: { flexDirection: 'row', alignItems: 'flex-start', gap: 16 },
  thumb: { width: THUMB, height: THUMB, borderRadius: THUMB / 2, overflow: 'hidden', backgroundColor: ink.studio, borderWidth: 3, borderColor: bitepal.card },
  video: { flex: 1 },
  ringArea: { ...cardStyle, flexGrow: 1, alignItems: 'center', justifyContent: 'center', gap: 16, marginVertical: 16, padding: 20 },
  ringLabel: { alignSelf: 'flex-start' },
  /** Read from a couple of metres off, with the phone on the floor or a wall. */
  big: {
    ...fonts.heavy(96, -3),
    lineHeight: 104,
    color: ink.text,
    fontVariant: ['tabular-nums'],
    textAlign: 'center',
    alignSelf: 'stretch',
    paddingHorizontal: 24,
  },
  unit: { ...fonts.medium(17), color: ink.grey, marginTop: -6 },
  phase: { ...fonts.bold(19), color: bitepal.selected, marginTop: 6 },
  clock: { ...fonts.medium(19), color: ink.grey, fontVariant: ['tabular-nums'] },
  stopHint: { ...fonts.regular(17), color: ink.grey, paddingBottom: 12, textAlign: 'center' },
  paused: { gap: 0, paddingBottom: 12, alignItems: 'center' },
  pausedTitle: { ...fonts.semibold(19), color: ink.text },
  dock: { paddingHorizontal: SIDE, paddingTop: 8, gap: 4, backgroundColor: ink.canvas },
});
