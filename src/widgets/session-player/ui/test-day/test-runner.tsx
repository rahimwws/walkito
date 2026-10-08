import ArrowExpandDiagonal01Icon from '@hugeicons/core-free-icons/ArrowExpandDiagonal01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useVideoPlayer, VideoView, type VideoPlayer } from 'expo-video';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  AppState,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  type StyleProp,
  type ViewStyle,
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

import { ZONE_META } from '@/entities/program';
import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { PrimaryButton } from '@/shared/ui/primary-button';

import { clipFor } from '../../config/exercise-clips';
import { ClipViewer } from '../clip-viewer';
import { playCountInCue } from '../../model/count-in-sound';
import {
  CALF_PACE_MS,
  TEST_ORDER,
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
import { CountInOverlay } from '../count-in-overlay';
import { CountdownRing } from './countdown-ring';
import { Stepper } from './stepper';
import { TEST_META } from './test-meta';

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

const RING_STROKE = 14;

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
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();
  const t = useT();

  const { kind } = station;
  const meta = TEST_META[kind];
  const tone = accents[scheme][ZONE_META[meta.zone].accent];
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
   * The demonstration plays while there is something to follow — before the
   * test and during it — and is held on its first frame for the count, so it
   * begins with the test. Playing, it also keeps the screen awake, which is
   * exactly when a screen that dimmed would lose somebody their place.
   */
  useEffect(() => {
    player.loop = true;
    player.muted = true;
    player.audioMixingMode = 'mixWithOthers';
    if (active && (stage === 'ready' || stage === 'measuring')) {
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
  const name = t(meta.name);

  if (stage === 'ready' || stage === 'confirm') {
    const clipHeight = Math.min(width - 40, height * 0.34);
    return (
      <View style={styles.root}>
        <ClipViewer clip={meta.clip} mirrored={mirrored} visible={viewing} onClose={() => setViewing(false)} />
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <Heading eyebrow={eyebrow} title={name} leg={legLabel} />

          {stage === 'ready' ? (
            <>
              <ClipCard
                player={player}
                mirrored={mirrored}
                failed={clipFailed}
                onExpand={() => setViewing(true)}
                style={{ height: clipHeight, marginTop: 16 }}
              />
              <View style={styles.steps}>
                {meta.steps.map((key, index) => (
                  <View key={key} style={styles.step}>
                    <View style={[styles.stepNumber, { backgroundColor: tone.track }]}>
                      <Text style={[styles.stepNumberText, { color: tone.fill }]}>{index + 1}</Text>
                    </View>
                    <Text style={[styles.stepText, { color: colors.foreground }]}>{t(key)}</Text>
                  </View>
                ))}
              </View>
            </>
          ) : (
            <>
              <View style={[styles.card, { backgroundColor: colors.card }]}>
                <Text style={[styles.question, { color: colors.foreground }]} accessibilityLiveRegion="polite">
                  {kind === 'calf'
                    ? t('testday.confirm.raises', { count: value })
                    : t('testday.confirm.seconds', { count: value })}
                </Text>
                <Stepper value={value} max={max} onChange={setValue} />
                {/* A hold is stopped from wherever the phone is — for balance,
                    after opening the eyes and reaching it — so its figure runs
                    long, not short, and the hint says which way to correct. */}
                <Text style={[styles.hint, { color: meter.caption }]}>
                  {kind === 'calf' ? t('testday.confirm.hint') : t('testday.confirm.holdHint')}
                </Text>
              </View>

              {nextLeg != null && (
                <View style={[styles.card, styles.next, { backgroundColor: colors.card }]}>
                  <Text style={[styles.nextTitle, { color: colors.foreground }]}>{t('testday.calf.otherTitle')}</Text>
                  <LegChip label={nextLeg} tone={tone} />
                  <Text style={[styles.nextBody, { color: meter.caption }]}>{t('testday.calf.otherBody')}</Text>
                </View>
              )}
            </>
          )}
        </ScrollView>

        <View style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }]}>
          {stage === 'ready' ? (
            <PrimaryButton label={t('testday.start')} onPress={start} />
          ) : (
            <>
              <PrimaryButton
                label={
                  nextLeg != null
                    ? t('testday.start')
                    : last
                      ? t('testday.confirm.finish')
                      : t('testday.confirm.next')
                }
                onPress={() => onConfirm(value)}
              />
              <TextButton label={t('testday.confirm.again')} onPress={restart} />
            </>
          )}
        </View>
      </View>
    );
  }

  // Counting, measuring and paused share one screen: the count runs over the
  // measuring screen, so "go" lifts it away to reveal the clock already there.
  const ringSize = Math.min(width - 96, height * 0.36, 300);
  const secondsLeft = secondsLeftAt(elapsed, windowMs);
  const reps = measuredAt('calf', elapsed, windowMs);

  return (
    <View style={styles.root}>
      <ClipViewer clip={meta.clip} mirrored={mirrored} visible={viewing} onClose={() => setViewing(false)} />
      <View style={styles.measure}>
        <View style={styles.measureHead}>
          <View style={styles.flex}>
            <Heading eyebrow={eyebrow} title={name} leg={legLabel} />
          </View>
          <ClipCard
            player={player}
            mirrored={mirrored}
            failed={clipFailed}
            onExpand={() => setViewing(true)}
            style={styles.thumb}
            small
          />
        </View>

        {/* Not one accessible element: the figure, its unit and the clock
            are read as the lines they are, rather than glued into a sentence
            here that only works in English. */}
        <View style={styles.ringArea} accessibilityRole="timer">
          <CountdownRing size={ringSize} stroke={RING_STROKE} left={ring} tone={tone}>
            {kind === 'calf' ? (
              <>
                <Text style={[styles.big, { color: meter.ink }]} numberOfLines={1} adjustsFontSizeToFit>
                  {reps}
                </Text>
                <Text style={[styles.unit, { color: meter.label }]}>
                  {t('testday.results.unitRaises', { count: reps })}
                </Text>
                {/* Where in the raise the pace has got to. Blank until the
                    clock is running, so the count does not say "up" to
                    somebody still getting into position. */}
                <Text style={[styles.phase, { color: tone.fill }]}>
                  {stage === 'measuring'
                    ? repPhaseAt(elapsed) === 'up'
                      ? t('testday.calf.up')
                      : t('testday.calf.down')
                    : ' '}
                </Text>
              </>
            ) : (
              <>
                <Text style={[styles.big, { color: meter.ink }]} numberOfLines={1} adjustsFontSizeToFit>
                  {secondsLeft}
                </Text>
                <Text style={[styles.unit, { color: meter.label }]}>
                  {t('testday.secondsLeft', { count: secondsLeft })}
                </Text>
              </>
            )}
          </CountdownRing>
          {/* The other half of the clock, in a line under it. The raises
              count up in the ring, so this is the time they run against. A
              hold counts down in the ring, so this is what has been held —
              the figure its confirmation will ask about. With only the time
              left on screen, "37 seconds - is that right?" asked about a
              number nobody had seen. */}
          <Text style={[styles.clock, { color: meter.label }]}>
            {kind === 'calf'
              ? t('testday.timeLeft', { time: clockLabel(secondsLeft) })
              : t('testday.held', { n: measuredAt(kind, elapsed, windowMs) })}
          </Text>
        </View>

        {stage === 'paused' ? (
          <View style={styles.pausedCopy} accessibilityLiveRegion="polite">
            <Text style={[styles.pausedTitle, { color: colors.foreground }]}>{t('testday.paused.title')}</Text>
            <Text style={[styles.hint, { color: meter.caption }]}>{t('testday.paused.body')}</Text>
          </View>
        ) : (
          <Text style={[styles.stopHint, { color: meter.caption }]}>{t(meta.stopHint)}</Text>
        )}
      </View>

      <View style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }]}>
        {stage === 'paused' ? (
          <>
            <PrimaryButton label={t('testday.paused.resume')} onPress={start} />
            <TextButton label={t('testday.paused.restart')} onPress={restart} />
          </>
        ) : (
          <PrimaryButton label={t('testday.stop')} onPress={stop} disabled={stage !== 'measuring'} />
        )}
      </View>

      <CountInOverlay
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
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  return (
    <View>
      <Text style={[styles.eyebrow, { color: meter.label }]}>{eyebrow}</Text>
      <Text style={[styles.title, { color: colors.foreground }]} accessibilityRole="header">
        {title}
      </Text>
      {leg != null && <Text style={[styles.leg, { color: colors.foreground }]}>{leg}</Text>}
    </View>
  );
}

function LegChip({ label, tone }: { label: string; tone: { fill: string; track: string } }) {
  return (
    <View style={[styles.chip, { backgroundColor: tone.track }]}>
      <Text style={[styles.chipText, { color: tone.fill }]}>{label}</Text>
    </View>
  );
}

function TextButton({ label, onPress }: { label: string; onPress: () => void }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      hitSlop={8}
      style={({ pressed }) => [styles.textButton, pressed && styles.pressed]}>
      <Text style={[styles.textButtonLabel, { color: colors.foreground }]}>{label}</Text>
    </Pressable>
  );
}

/** The demonstration in a rounded card: the full width before the test, a
 * thumbnail in the corner during it. Either one opens it at full size, so the
 * movement can actually be followed, not just glimpsed. */
function ClipCard({
  player,
  mirrored,
  failed,
  onExpand,
  small = false,
  style,
}: {
  player: VideoPlayer;
  mirrored: boolean;
  failed: boolean;
  onExpand: () => void;
  small?: boolean;
  style?: StyleProp<ViewStyle>;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  return (
    // The player is a native view: nothing clips it but an ancestor that says
    // so, which is why the radius lives on this wrapper.
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={t('widgets.expandDemo')}
      disabled={failed}
      onPress={() => {
        Haptics.selectionAsync();
        onExpand();
      }}
      style={[small ? styles.thumbFrame : styles.clipFrame, { backgroundColor: colors.card }, style]}>
      <View style={styles.video} pointerEvents="none">
        <VideoView
          style={[styles.video, mirrored && styles.mirrored]}
          player={player}
          nativeControls={false}
          contentFit="cover"
        />
      </View>
      {!failed && (
        <View style={[styles.expand, small && styles.expandSmall]} pointerEvents="none">
          <HugeiconsIcon icon={ArrowExpandDiagonal01Icon} size={small ? 14 : 18} color="#111114" strokeWidth={2.2} />
        </View>
      )}
      {failed && !small && (
        <View style={styles.clipFallback} pointerEvents="none">
          <Text style={[styles.clipFallbackText, { color: meter.caption }]}>{t('widgets.clipFailed')}</Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  flex: { flex: 1 },
  content: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 24,
  },
  eyebrow: fonts.bold(13, 0.4),
  title: {
    ...fonts.heavy(30, -0.8),
    lineHeight: 36,
    marginTop: 4,
  },
  leg: {
    ...fonts.semibold(17),
    marginTop: 2,
  },
  clipFrame: {
    borderRadius: 28,
    borderCurve: 'continuous',
    overflow: 'hidden',
  },
  thumbFrame: {
    borderRadius: 20,
    borderCurve: 'continuous',
    overflow: 'hidden',
  },
  thumb: {
    width: 88,
    height: 88,
  },
  video: { flex: 1 },
  expand: {
    position: 'absolute',
    right: 12,
    bottom: 12,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: 'rgba(255,255,255,0.92)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  expandSmall: {
    right: 6,
    bottom: 6,
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  mirrored: {
    transform: [{ scaleX: -1 }],
  },
  clipFallback: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  clipFallbackText: {
    ...fonts.medium(15),
    textAlign: 'center',
  },
  steps: {
    marginTop: 20,
    gap: 14,
  },
  step: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  stepNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepNumberText: fonts.bold(14),
  stepText: {
    flex: 1,
    ...fonts.medium(16),
    lineHeight: 22,
    paddingTop: 3,
  },
  card: {
    borderRadius: 26,
    borderCurve: 'continuous',
    paddingHorizontal: 18,
    paddingVertical: 22,
    alignItems: 'center',
    gap: 16,
    marginTop: 20,
  },
  question: {
    ...fonts.bold(20, -0.3),
    lineHeight: 26,
    textAlign: 'center',
  },
  hint: {
    ...fonts.medium(14),
    lineHeight: 19,
    textAlign: 'center',
  },
  next: {
    gap: 10,
    paddingVertical: 18,
  },
  nextTitle: fonts.heavy(20, -0.4),
  nextBody: {
    ...fonts.medium(15),
    lineHeight: 21,
    textAlign: 'center',
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 50,
  },
  chipText: fonts.bold(14),
  measure: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  measureHead: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
  },
  ringArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
  },
  /** Read from where the phone is during a test: on the floor or against a
   * wall, a couple of metres off. */
  big: {
    ...fonts.heavy(104, -3),
    lineHeight: 112,
    fontVariant: ['tabular-nums'],
    textAlign: 'center',
    alignSelf: 'stretch',
    paddingHorizontal: 24,
  },
  unit: {
    ...fonts.semibold(17),
    marginTop: -6,
  },
  phase: {
    ...fonts.heavy(20, -0.2),
    marginTop: 6,
  },
  clock: {
    ...fonts.semibold(17),
    fontVariant: ['tabular-nums'],
  },
  stopHint: {
    ...fonts.medium(15),
    lineHeight: 21,
    textAlign: 'center',
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  pausedCopy: {
    alignItems: 'center',
    gap: 4,
    paddingBottom: 12,
  },
  pausedTitle: fonts.heavy(20),
  dock: {
    paddingHorizontal: 20,
    paddingTop: 8,
    gap: 4,
  },
  textButton: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButtonLabel: fonts.semibold(16),
  pressed: { opacity: 0.6 },
});
