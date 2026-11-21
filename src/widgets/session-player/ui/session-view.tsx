import * as Haptics from 'expo-haptics';
import { VideoView } from 'expo-video';
import { useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';

import { planMeta } from '@/entities/program';
import { askForPlans, clearBrowsingLapsed, useLookingAround, useSessionsLocked } from '@/entities/purchase';
import { CHROME_MAX_FONT_SCALE, fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { setSoundPrefs } from '@/shared/lib/sound';

import { useSessionRun, type SessionViewProps } from '../model/use-session-run';
import { CountIn } from './player/count-in';
import { Done } from './player/done';
import { Capsule, SIDE, TextButton, ink } from './player/kit';
import { Rest } from './player/rest';
import { CantDoSheet, PainRuleSheet, PainSheet } from './player/sheets';

export type { PlaylistStep, SessionViewProps } from '../model/use-session-run';

/** The row Close, the position and Sound sit in. */
const HEADER = 52;
/** The bar under it: one segment per move. */
const BAR = 3;
const TOP = HEADER + BAR + 8;
const NUMERAL = 96;
/** The clips are filmed upright, 9:16, on the studio grey. */
const CLIP_SHAPE = 9 / 16;
const EDGE_FADE = 28;

/** "42" under a minute, then "1:05". */
function shortClock(seconds: number): string {
  if (seconds < 60) return String(seconds);
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
}

/**
 * The one gate on starting a session: closed to somebody whose paid access
 * ran out ("Not now" on the expiry screen) unless the run is free, and to
 * somebody looking around except on Day 1. A wrapper rather than an early
 * return inside the player, which is a few dozen hooks deep.
 */
export function SessionView(props: SessionViewProps) {
  const lapsedLock = useSessionsLocked();
  const looking = useLookingAround();
  const open = looking ? props.dayOne === true : !lapsedLock || props.free === true;
  if (open) return <SessionRun {...props} />;
  return <SessionLocked onBack={props.onBack} looking={looking} />;
}

/** The player's sheet slides away before the plans present over Home. */
const PLANS_AFTER_BACK_MS = 520;

function SessionLocked({ onBack, looking }: { onBack: () => void; looking: boolean }) {
  const insets = useSafeAreaInsets();
  const t = useT();
  const reopen = () => {
    if (looking) {
      onBack();
      setTimeout(() => askForPlans('player'), PLANS_AFTER_BACK_MS);
      return;
    }
    // Not a navigation call: clearing the flag mounts the expiry screen.
    clearBrowsingLapsed();
  };
  return (
    <View style={[styles.locked, { paddingBottom: Math.max(insets.bottom, 16) }]}>
      <View style={styles.header}>
        <TextButton label={t('common.back')} onPress={onBack} />
      </View>
      <View style={styles.lockedMiddle}>
        <Text accessibilityRole="header" style={styles.lockedTitle}>
          {t(looking ? 'widgets.sessionLookingTitle' : 'widgets.sessionLockedTitle')}
        </Text>
        <Text style={styles.lockedBody}>{t(looking ? 'widgets.sessionLookingBody' : 'widgets.sessionLockedBody')}</Text>
      </View>
      <Capsule label={t(looking ? 'widgets.sessionLookingCta' : 'widgets.sessionLockedCta')} onPress={reopen} />
    </View>
  );
}

/** One side of an upright clip, melted into the studio grey around it. */
function EdgeFade({ side }: { side: 'left' | 'right' }) {
  const id = `edge-${side}`;
  return (
    <View style={[styles.edgeFade, side === 'left' ? { left: 0 } : { right: 0 }]}>
      <Svg width="100%" height="100%">
        <Defs>
          <LinearGradient id={id} x1={side === 'left' ? '0' : '1'} y1="0" x2={side === 'left' ? '1' : '0'} y2="0">
            <Stop offset="0" stopColor={ink.studio} stopOpacity={1} />
            <Stop offset="1" stopColor={ink.studio} stopOpacity={0} />
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill={`url(#${id})`} />
      </Svg>
    </View>
  );
}

/**
 * One session, playing (NTC #27, NRC #34). One move per screen: the clip
 * edge to edge, its name, one black numeral for the time or the rep, the
 * black capsule to pause, Back and Skip in words. Close, where the session
 * stands and Sound sit in the header, the move's place in a thin bar under
 * it. Everything the session does lives in `useSessionRun`.
 */
function SessionRun(props: SessionViewProps) {
  const { day, onBack, moves: override, title, onFinish, feedback = true } = props;
  const run = useSessionRun(props);
  const t = useT();
  const insets = useSafeAreaInsets();
  const { height } = useWindowDimensions();
  const floor = Math.max(insets.bottom, 20);
  const {
    current,
    finished,
    ctaState,
    progress,
    step,
    moveCount,
    move,
    last,
    showPose,
    reading,
    remaining,
    repCount,
  } = run;

  const poseOn = useSharedValue(0);
  useEffect(() => {
    poseOn.value = withTiming(showPose ? 1 : 0, { duration: 220, easing: Easing.out(Easing.quad), reduceMotion: ReduceMotion.System });
  }, [showPose, poseOn]);
  const poseStyle = useAnimatedStyle(() => ({ opacity: poseOn.value }));
  const fill = useAnimatedStyle(() => ({ width: `${Math.min(Math.max(progress.value, 0), 1) * 100}%` }));

  const center =
    ctaState === 'running'
      ? { label: t('player.cta.pause'), onPress: run.pauseByHand }
      : ctaState === 'paused'
        ? { label: t('player.cta.resume'), onPress: run.resumeByHand }
        : ctaState === 'ready'
          ? {
              label: last ? t('widgets.sessionFinish') : t('widgets.sessionContinue'),
              onPress: () => {
                run.setPlaying(true);
                run.advance();
              },
            }
          : {
              label: t('player.cta.done'),
              onPress: () => {
                if (!run.closedDone.current) run.setCelebrating(true);
              },
            };

  const numeral = repCount != null ? t('player.repCount', repCount) : shortClock(remaining);
  const unit =
    repCount != null
      ? t('player.unit.reps', { count: repCount.reps })
      : remaining < 60
        ? t('testday.secondsLeft', { count: remaining })
        : null;
  /** What to do this second and which foot, as one plain line: "Hold · Right foot". */
  const nowLine = [run.pill?.label, run.sideNow == null ? null : t(run.sideNow === 'left' ? 'widgets.sideLeft' : 'widgets.sideRight')]
    .filter((part): part is string => part != null)
    .join(' · ');
  const index = step + 1;
  const position = title != null && moveCount <= 1 ? title : t('player.chip.position', { index, total: moveCount });
  const canSwitchMedia = run.wideClip && run.drawing != null && !finished;

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <TextButton label={t('common.close')} accessibilityLabel={t('player.close.a11y')} onPress={run.askClose} />
        <Text
          accessibilityRole="header"
          accessibilityLabel={t('widgets.sessionPositionLong', { index, total: moveCount })}
          style={styles.position}
          numberOfLines={1}
          maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE}>
          {position}
        </Text>
        <TextButton
          label={run.sound.tempo ? t('player.tempo.on') : t('player.tempo.off')}
          quiet
          onPress={() => setSoundPrefs({ tempo: !run.sound.tempo })}
          style={styles.headerRight}
        />
      </View>

      <View
        accessible
        accessibilityRole="progressbar"
        accessibilityLabel={t('widgets.sessionPositionLong', { index, total: moveCount })}
        accessibilityValue={{ min: 0, max: moveCount, now: finished ? moveCount : step }}
        style={styles.bar}>
        {run.moves.map((_, at) => (
          <View key={at} style={styles.segment}>
            {at < step || finished ? (
              <View style={[styles.segmentFill, styles.full]} />
            ) : at === step ? (
              <Animated.View style={[styles.segmentFill, fill]} />
            ) : null}
          </View>
        ))}
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[styles.body, { paddingBottom: floor }]}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={[styles.stage, { minHeight: Math.round(height * 0.36) }]}>
          <VideoView
            style={[styles.video, run.mirrored && styles.mirrored]}
            player={run.player}
            nativeControls={false}
            contentFit={run.wideClip ? 'cover' : 'contain'}
          />
          {!run.wideClip && (
            <View pointerEvents="none" style={styles.edgeRow}>
              <View style={styles.edgeSpacer} />
              <View style={styles.edgeBox}>
                <EdgeFade side="left" />
                <EdgeFade side="right" />
              </View>
              <View style={styles.edgeSpacer} />
            </View>
          )}
          {run.wideClip && run.drawing != null && (
            <Animated.View pointerEvents="none" style={[StyleSheet.absoluteFill, styles.pose, poseStyle]}>
              <Image source={run.drawing} resizeMode="contain" style={styles.poseImage} accessibilityIgnoresInvertColors />
            </Animated.View>
          )}
          {run.clipFailed && !showPose && (
            <View style={styles.clipFailed} pointerEvents="none">
              <Text style={styles.clipFailedText}>{t('widgets.clipFailed')}</Text>
            </View>
          )}
        </View>

        {(run.canReplay || canSwitchMedia) && (
          <View style={styles.mediaRow}>
            {run.canReplay ? (
              <TextButton label={t('player.voice.replay')} quiet onPress={run.replayInstruction} style={styles.shrink} />
            ) : (
              <View />
            )}
            {canSwitchMedia && (
              <TextButton
                label={t(showPose ? 'player.media.video' : 'player.media.pose')}
                quiet
                onPress={() => run.setMedia(showPose ? 'video' : 'pose')}
              />
            )}
          </View>
        )}

        <View style={styles.text}>
          {(run.carryOn || run.swapNote != null) && (
            <Text style={styles.note} accessibilityLiveRegion="polite">
              {run.carryOn ? t('widgets.painCarryOn') : run.swapNote}
            </Text>
          )}
          <Text accessibilityLabel={run.spokenMove} style={styles.name}>
            {move}
          </Text>
          {run.cueLine != null && !finished && <Text style={styles.cue}>{run.cueLine}</Text>}
          {nowLine.length > 0 && !finished && (
            <Text style={styles.now} accessibilityLiveRegion="polite">
              {nowLine}
            </Text>
          )}
          {run.counter != null && (
            <Text accessibilityLabel={run.counter.spoken} style={styles.line}>
              {run.counter.text}
            </Text>
          )}
          {!finished && (current?.addWeight === true || run.loadNote != null) && (
            <Text style={styles.line}>{current?.addWeight === true ? t('player.load.backpack') : run.loadNote}</Text>
          )}
        </View>

        <View
          accessible
          accessibilityRole="timer"
          accessibilityLabel={repCount != null ? t('player.line.plain', repCount) : t('session.secondsLeftA11y', { count: remaining })}
          style={[styles.timer, run.breakSegment != null && styles.hidden]}>
          <Text
            style={[styles.numeral, ctaState === 'paused' && styles.dim]}
            numberOfLines={1}
            adjustsFontSizeToFit>
            {numeral}
          </Text>
          {unit != null && <Text style={styles.unit}>{unit}</Text>}
        </View>

        <View style={styles.controls}>
          <Capsule
            label={center.label}
            onPress={center.onPress}
          />
          <View style={styles.transport}>
            <TextButton label={t('player.cta.back')} accessibilityLabel={t('player.cta.backA11y')} onPress={run.stepBack} disabled={finished} />
            {run.showSetDone && (
              <TextButton label={t('player.cta.setDone')} onPress={run.skipSegment} />
            )}
            <TextButton label={t('player.cta.skip')} accessibilityLabel={t('player.cta.skipA11y')} onPress={run.skipMove} disabled={finished} />
          </View>
          {!finished && current?.exercise != null && (
            <View style={styles.asides}>
              <TextButton
                label={t('widgets.painButton')}
                quiet
                onPress={() => {
                  run.pauseForQuestion();
                  run.setAskingPain(true);
                }}
              />
              <TextButton
                label={t('player.cantDo.button')}
                quiet
                onPress={() => {
                  run.pauseForQuestion();
                  run.setAskingCantDo(true);
                }}
              />
              <TextButton
                label={t('player.painRule.title')}
                quiet
                onPress={() => {
                  run.pauseForQuestion();
                  run.setRuleOpen(true);
                }}
              />
            </View>
          )}
          {run.nextMove != null && !finished && (
            <View style={styles.next} accessible>
              {run.nextThumb != null && (
                <Image source={run.nextThumb} resizeMode="cover" style={styles.nextThumb} accessibilityIgnoresInvertColors />
              )}
              <Text style={styles.nextText}>{t('player.next', { name: run.nextMove })}</Text>
            </View>
          )}
        </View>
      </ScrollView>

      <CountIn
        from={finished ? null : run.countFrom}
        eyebrow={run.countNext ? t('player.countIn.nextUp') : t('player.countIn.getReady')}
        title={move ?? ''}
        top={TOP}
        bottom={floor}
        onDone={() => run.setCountFrom(null)}
      />

      <Rest
        segment={run.breakSegment}
        id={run.breakSegment == null ? null : `${step}:${reading?.index ?? 0}`}
        secondsLeft={reading?.secondsLeft ?? 0}
        progress={progress}
        moveMs={run.moveMs}
        running={run.running}
        playing={run.playing}
        move={move ?? ''}
        exerciseId={current?.exercise?.id ?? null}
        top={TOP}
        bottom={floor}
        onSkip={run.skipSegment}
        onPause={run.pauseByHand}
        onResume={() => {
          void Haptics.selectionAsync();
          run.setPlaying(true);
        }}
      />

      <PainSheet
        visible={run.askingPain}
        onPick={run.reportPain}
        onCancel={() => {
          run.setAskingPain(false);
          run.resumeAfterPain();
        }}
      />

      <CantDoSheet
        visible={run.askingCantDo}
        equipment={planMeta(current?.exercise?.id ?? '')?.equipment ?? []}
        onPick={run.reportCantDo}
        onCancel={() => {
          run.setAskingCantDo(false);
          run.resumeAfterPain();
        }}
      />

      <PainRuleSheet visible={run.ruleOpen} onClose={run.closeRule} />

      <Done
        visible={run.celebrating}
        early={run.endedEarly}
        moves={moveCount}
        minutes={run.doseMinutes}
        dayNumber={override == null && title == null ? day.day : null}
        feedback={feedback}
        startedAt={run.startedAt.current.getTime()}
        onClose={() => {
          // Once: Close can land twice while the screen fades.
          if (run.closedDone.current) return;
          run.closedDone.current = true;
          run.setCelebrating(false);
          if (onFinish != null) onFinish();
          else onBack();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: ink.page },
  mirrored: { transform: [{ scaleX: -1 }] },
  hidden: { opacity: 0 },
  dim: { color: ink.grey },
  shrink: { flexShrink: 1 },
  header: {
    height: HEADER,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIDE - 4,
    gap: 8,
  },
  headerRight: { alignItems: 'flex-end' },
  position: {
    flex: 1,
    ...fonts.semibold(17),
    color: ink.text,
    textAlign: 'center',
    fontVariant: ['tabular-nums'],
  },
  bar: { flexDirection: 'row', gap: 4, paddingHorizontal: SIDE, marginBottom: 8 },
  segment: { flex: 1, height: BAR, backgroundColor: ink.rule, overflow: 'hidden' },
  segmentFill: { height: BAR, backgroundColor: ink.text },
  full: { width: '100%' },
  scroll: { flex: 1 },
  body: { flexGrow: 1 },
  stage: { flex: 1, backgroundColor: ink.studio, overflow: 'hidden' },
  video: { flex: 1, marginVertical: -1 },
  edgeRow: { position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, flexDirection: 'row' },
  edgeSpacer: { flex: 1 },
  edgeBox: { height: '100%', aspectRatio: CLIP_SHAPE },
  edgeFade: { position: 'absolute', top: 0, bottom: 0, width: EDGE_FADE },
  pose: { backgroundColor: ink.page },
  poseImage: { width: '100%', height: '100%' },
  clipFailed: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SIDE,
  },
  clipFailedText: { ...fonts.regular(19), color: ink.text, textAlign: 'center' },
  mediaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIDE,
    gap: 12,
  },
  text: { paddingHorizontal: SIDE, paddingTop: 16, gap: 4 },
  note: { ...fonts.regular(17), color: ink.grey, marginBottom: 4 },
  name: { ...fonts.bold(28, -0.4), color: ink.text },
  cue: { ...fonts.regular(19), color: ink.grey },
  now: { ...fonts.semibold(19), color: ink.text, marginTop: 4 },
  line: { ...fonts.regular(17), color: ink.grey },
  timer: { paddingHorizontal: SIDE, marginTop: 4 },
  numeral: {
    ...fonts.bold(NUMERAL, -3),
    lineHeight: NUMERAL * 1.08,
    color: ink.text,
    fontVariant: ['tabular-nums'],
  },
  unit: { ...fonts.medium(17), color: ink.grey, marginTop: -6 },
  controls: { paddingHorizontal: SIDE, paddingTop: 16, gap: 4 },
  transport: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' },
  asides: { flexDirection: 'row', flexWrap: 'wrap', columnGap: 20 },
  next: { flexDirection: 'row', alignItems: 'center', gap: 14, paddingTop: 12 },
  nextThumb: { width: 56, height: 56, backgroundColor: ink.studio },
  nextText: { ...fonts.regular(17), color: ink.grey, flex: 1 },
  locked: { flex: 1, backgroundColor: ink.page, paddingHorizontal: SIDE },
  lockedMiddle: { flex: 1, justifyContent: 'center', gap: 12 },
  lockedTitle: { ...fonts.bold(34, -0.6), color: ink.text },
  lockedBody: { ...fonts.regular(19), color: ink.grey },
});
