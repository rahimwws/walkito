import Backward01Icon from '@hugeicons/core-free-icons/Backward01Icon';
import Cancel01Icon from '@hugeicons/core-free-icons/Cancel01Icon';
import InformationCircleIcon from '@hugeicons/core-free-icons/InformationCircleIcon';
import MoreHorizontalIcon from '@hugeicons/core-free-icons/MoreHorizontalIcon';
import NextIcon from '@hugeicons/core-free-icons/NextIcon';
import PauseIcon from '@hugeicons/core-free-icons/PauseIcon';
import PlayIcon from '@hugeicons/core-free-icons/PlayIcon';
import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import VolumeHighIcon from '@hugeicons/core-free-icons/VolumeHighIcon';
import VolumeOffIcon from '@hugeicons/core-free-icons/VolumeOffIcon';
import * as Haptics from 'expo-haptics';
import { VideoView } from 'expo-video';
import { useEffect, useState } from 'react';
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
import { CHROME_MAX_FONT_SCALE, accents, colors, fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { setSoundPrefs } from '@/shared/lib/sound';

import { useSessionRun, type SessionViewProps } from '../model/use-session-run';
import { CountIn } from './player/count-in';
import { Done } from './player/done';
import {
  Capsule,
  MoveCircle,
  NUMERAL_SCALE,
  RoundButton,
  SIDE,
  TITLE_SCALE,
  TextButton,
  cardStyle,
  ink,
  moveAccent,
  tint,
} from './player/kit';
import { Rest } from './player/rest';
import { CantDoSheet, InfoSheet, MenuSheet, PainRuleSheet, PainSheet } from './player/sheets';
import { CountdownRing } from './test-day/countdown-ring';

export type { PlaylistStep, SessionViewProps } from '../model/use-session-run';

/** The row Close, the position, Sound and More sit in. */
const HEADER = 60;
const TOP = HEADER + 1;
const NUMERAL = 76;
const RING = 6;
/** The clips are filmed upright, 9:16, on the studio grey. */
const CLIP_SHAPE = 9 / 16;
const EDGE_FADE = 22;

/** "0:42", as Bend's timer reads. */
function clock(seconds: number): string {
  return Math.floor(seconds / 60) + ':' + String(seconds % 60).padStart(2, '0');
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
        <RoundButton icon={Cancel01Icon} tone="grey" size={40} label={t('common.back')} onPress={onBack} />
      </View>
      <View style={styles.lockedMiddle}>
        <Text maxFontSizeMultiplier={TITLE_SCALE} accessibilityRole="header" style={styles.lockedTitle}>
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
  const id = 'edge-' + side;
  return (
    <View style={[styles.edgeFade, side === 'left' ? { left: 0 } : { right: 0 }]}>
      <Svg width="100%" height="100%">
        <Defs>
          <LinearGradient id={id} x1={side === 'left' ? '0' : '1'} y1="0" x2={side === 'left' ? '1' : '0'} y2="0">
            <Stop offset="0" stopColor={ink.studio} stopOpacity={1} />
            <Stop offset="1" stopColor={ink.studio} stopOpacity={0} />
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill={'url(#' + id + ')'} />
      </Svg>
    </View>
  );
}

/**
 * One session, playing, copied from Bend's player: "2 of 4" at the top
 * centre between a round close and round Sound and More buttons; the clip in
 * a circle on the move's pastel disc, wrapped by a ring that fills as the move
 * runs; the move's name with an (i) for how to do it; the time, or the rep
 * count, large; the set under it; and the transport row of back, a big round
 * pause and a tick that finishes the set. Skip, "It hurts" and "Can't do
 * this" stay in words under it; the rest lives behind More. Everything the
 * session does lives in useSessionRun.
 */
function SessionRun(props: SessionViewProps) {
  const { day, onBack, moves: override, title, onFinish, feedback = true } = props;
  const run = useSessionRun(props);
  const t = useT();
  const insets = useSafeAreaInsets();
  const { width, height, fontScale } = useWindowDimensions();
  const large = fontScale > 1.6;
  const floor = Math.max(insets.bottom, 20);
  const [menuOpen, setMenuOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
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

  const center =
    ctaState === 'running'
      ? { label: t('player.cta.pause'), icon: PauseIcon, onPress: run.pauseByHand }
      : ctaState === 'paused'
        ? { label: t('player.cta.resume'), icon: PlayIcon, onPress: run.resumeByHand }
        : ctaState === 'ready'
          ? {
              label: last ? t('widgets.sessionFinish') : t('widgets.sessionContinue'),
              icon: last ? Tick02Icon : NextIcon,
              onPress: () => {
                run.setPlaying(true);
                run.advance();
              },
            }
          : {
              label: t('player.cta.done'),
              icon: Tick02Icon,
              onPress: () => {
                if (!run.closedDone.current) run.setCelebrating(true);
              },
            };

  const numeral = repCount != null ? t('player.repCount', repCount) : clock(remaining);
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
  const exerciseId = current?.exercise?.id ?? null;
  const accent = moveAccent(exerciseId);

  const ringSize = Math.round(Math.min(width - 2 * 36, height * (large ? 0.3 : 0.4), 420));
  const disc = ringSize - 2 * (RING + 7);
  const clipSize = Math.round(disc * 0.9);

  const ask = (open: () => void) => {
    run.pauseForQuestion();
    open();
  };

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <RoundButton
          icon={Cancel01Icon}
          tone="grey"
          size={40}
          label={t('player.close.a11y')}
          onPress={run.askClose}
        />
        <Text
          accessibilityRole="header"
          accessibilityLabel={t('widgets.sessionPositionLong', { index, total: moveCount })}
          style={styles.position}
          numberOfLines={1}
          maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE}>
          {position}
        </Text>
        <View style={styles.headerRight}>
          <RoundButton
            icon={run.sound.tempo ? VolumeHighIcon : VolumeOffIcon}
            tone="grey"
            size={40}
            label={run.sound.tempo ? t('player.tempo.on') : t('player.tempo.off')}
            onPress={() => setSoundPrefs({ tempo: !run.sound.tempo })}
          />
          <RoundButton icon={MoreHorizontalIcon} tone="grey" size={40} label={t('player.more.a11y')} onPress={() => setMenuOpen(true)} />
        </View>
      </View>
      <View style={styles.headerRule} />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[styles.body, { paddingBottom: floor }]}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View
          style={styles.stage}
          accessible
          accessibilityRole="progressbar"
          accessibilityLabel={t('widgets.sessionPositionLong', { index, total: moveCount })}
          accessibilityValue={{ min: 0, max: moveCount, now: finished ? moveCount : step }}>
          <CountdownRing size={ringSize} stroke={RING} left={progress} tone={{ fill: accents.light[accent].fill, track: colors.surface2 }}>
            <View style={[styles.disc, { width: disc, height: disc, borderRadius: disc / 2, backgroundColor: tint(accent) }]}>
              <View style={[styles.clip, { width: clipSize, height: clipSize, borderRadius: clipSize / 2 }]}>
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
            </View>
          </CountdownRing>
        </View>

        <View style={styles.text}>
          {(run.carryOn || run.swapNote != null) && (
            <Text style={styles.note} accessibilityLiveRegion="polite">
              {run.carryOn ? t('widgets.painCarryOn') : run.swapNote}
            </Text>
          )}
          <View style={styles.nameRow}>
            <Text maxFontSizeMultiplier={TITLE_SCALE} accessibilityLabel={run.spokenMove} style={styles.name}>
              {move}
            </Text>
            {!finished && current?.exercise != null && (
              <RoundButton
                icon={InformationCircleIcon}
                tone="grey"
                size={30}
                iconSize={18}
                label={t('player.sheet.stepsTitle')}
                onPress={() => ask(() => setInfoOpen(true))}
              />
            )}
          </View>
          {run.cueLine != null && !finished && <Text style={styles.cue}>{run.cueLine}</Text>}
          {nowLine.length > 0 && !finished && (
            <View style={styles.pill}>
              <Text style={styles.pillText} accessibilityLiveRegion="polite">
                {nowLine}
              </Text>
            </View>
          )}
        </View>

        <View
          accessible
          accessibilityRole="timer"
          accessibilityLabel={repCount != null ? t('player.line.plain', repCount) : t('session.secondsLeftA11y', { count: remaining })}
          style={[styles.timer, run.breakSegment != null && styles.hidden]}>
          <Text
            maxFontSizeMultiplier={NUMERAL_SCALE}
            style={[styles.numeral, ctaState === 'paused' && styles.dim]}
            numberOfLines={1}
            adjustsFontSizeToFit>
            {numeral}
          </Text>
          {unit != null && <Text style={styles.unit}>{unit}</Text>}
          {run.counter != null && (
            <Text accessibilityLabel={run.counter.spoken} style={styles.counter}>
              {run.counter.text}
            </Text>
          )}
          {!finished && (current?.addWeight === true || run.loadNote != null) && (
            <Text style={styles.load}>{current?.addWeight === true ? t('player.load.backpack') : run.loadNote}</Text>
          )}
        </View>

        <View style={styles.transport}>
          <RoundButton
            icon={Backward01Icon}
            size={60}
            iconSize={24}
            label={t('player.cta.backA11y')}
            onPress={run.stepBack}
            disabled={finished}
          />
          <RoundButton icon={center.icon} size={84} iconSize={34} label={center.label} onPress={center.onPress} />
          <RoundButton
            icon={Tick02Icon}
            size={60}
            iconSize={26}
            label={run.showSetDone ? t('player.cta.setDone') : t('player.cta.skipA11y')}
            onPress={run.showSetDone ? run.skipSegment : run.skipMove}
            disabled={finished}
          />
        </View>

        {!finished && (
          <View style={styles.asides}>
            {run.showSetDone && (
              <TextButton label={t('player.cta.skip')} accessibilityLabel={t('player.cta.skipA11y')} quiet onPress={run.skipMove} />
            )}
            {current?.exercise != null && (
              <>
                <TextButton label={t('widgets.painButton')} quiet onPress={() => ask(() => run.setAskingPain(true))} />
                <TextButton label={t('player.cantDo.button')} quiet onPress={() => ask(() => run.setAskingCantDo(true))} />
              </>
            )}
          </View>
        )}

        {run.nextMove != null && !finished && (
          <View style={[styles.next, large && styles.nextStacked]} accessible>
            <MoveCircle exerciseId={run.plan[step + 1]?.exercise?.id ?? null} size={52} />
            <Text style={styles.nextText}>{t('player.next', { name: run.nextMove })}</Text>
          </View>
        )}
      </ScrollView>

      <CountIn
        from={finished ? null : run.countFrom}
        eyebrow={run.countNext ? t('player.countIn.nextUp') : t('player.countIn.getReady')}
        title={move ?? ''}
        exerciseId={exerciseId}
        top={TOP}
        bottom={floor}
        onDone={() => run.setCountFrom(null)}
      />

      <Rest
        segment={run.breakSegment}
        id={run.breakSegment == null ? null : step + ':' + (reading?.index ?? 0)}
        secondsLeft={reading?.secondsLeft ?? 0}
        progress={progress}
        moveMs={run.moveMs}
        running={run.running}
        playing={run.playing}
        move={move ?? ''}
        exerciseId={exerciseId}
        top={TOP}
        bottom={floor}
        onSkip={run.skipSegment}
        onPause={run.pauseByHand}
        onResume={() => {
          void Haptics.selectionAsync();
          run.setPlaying(true);
        }}
      />

      <MenuSheet
        visible={menuOpen}
        onClose={() => setMenuOpen(false)}
        soundOn={run.sound.tempo}
        onSound={() => setSoundPrefs({ tempo: !run.sound.tempo })}
        onReplay={run.canReplay ? run.replayInstruction : null}
        media={canSwitchMedia ? (showPose ? 'pose' : 'video') : null}
        onMedia={() => run.setMedia(showPose ? 'video' : 'pose')}
        onRule={() => {
          setMenuOpen(false);
          ask(() => run.setRuleOpen(true));
        }}
        onPain={
          finished || current?.exercise == null
            ? null
            : () => {
                setMenuOpen(false);
                ask(() => run.setAskingPain(true));
              }
        }
        onCantDo={
          finished || current?.exercise == null
            ? null
            : () => {
                setMenuOpen(false);
                ask(() => run.setAskingCantDo(true));
              }
        }
      />

      <InfoSheet
        visible={infoOpen}
        exerciseId={exerciseId}
        onClose={() => {
          setInfoOpen(false);
          run.resumeAfterPain();
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
        equipment={planMeta(exerciseId ?? '')?.equipment ?? []}
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
        sets={run.plan.reduce((sum, entry) => sum + (entry.timeline?.find((segment) => segment.kind === 'work')?.sets ?? 1), 0)}
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
  dim: { color: colors.text3 },
  header: {
    minHeight: HEADER,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 8,
  },
  headerRight: { flexDirection: 'row', gap: 8 },
  headerRule: { height: StyleSheet.hairlineWidth, backgroundColor: ink.rule },
  position: {
    flex: 1,
    ...fonts.bold(19),
    color: ink.text,
    textAlign: 'center',
    fontVariant: ['tabular-nums'],
    paddingLeft: 48,
  },
  scroll: { flex: 1 },
  body: { flexGrow: 1, paddingTop: 20 },
  stage: { alignItems: 'center' },
  disc: { alignItems: 'center', justifyContent: 'center' },
  clip: { overflow: 'hidden', backgroundColor: ink.studio },
  video: { flex: 1 },
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
    paddingHorizontal: 24,
  },
  clipFailedText: { ...fonts.regular(17), color: ink.text, textAlign: 'center' },
  text: { paddingHorizontal: SIDE, paddingTop: 20, gap: 6, alignItems: 'center' },
  note: { ...fonts.regular(17), color: ink.grey, textAlign: 'center' },
  nameRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: 8 },
  name: { ...fonts.bold(26, -0.4), color: ink.text, textAlign: 'center', flexShrink: 1 },
  cue: { ...fonts.regular(17), color: ink.grey, textAlign: 'center' },
  pill: {
    marginTop: 4,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: colors.accentSoft,
  },
  pillText: { ...fonts.semibold(17), color: colors.accent, textAlign: 'center' },
  timer: { paddingHorizontal: SIDE, marginTop: 8, alignItems: 'center' },
  numeral: {
    ...fonts.bold(NUMERAL, -2),
    lineHeight: NUMERAL * 1.12,
    color: ink.text,
    fontVariant: ['tabular-nums'],
    textAlign: 'center',
  },
  unit: { ...fonts.medium(17), color: ink.grey, marginTop: -6 },
  counter: { ...fonts.semibold(17), color: ink.grey, marginTop: 6 },
  load: { ...fonts.regular(17), color: ink.grey, textAlign: 'center', marginTop: 6 },
  transport: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 32,
    paddingTop: 20,
    paddingBottom: 8,
  },
  asides: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    columnGap: 20,
    paddingHorizontal: SIDE,
  },
  next: {
    ...cardStyle,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginHorizontal: SIDE,
    marginTop: 12,
    padding: 12,
  },
  nextStacked: { flexDirection: 'column', alignItems: 'flex-start' },
  nextText: { ...fonts.semibold(17), color: ink.text, flexShrink: 1 },
  locked: { flex: 1, backgroundColor: ink.page, paddingHorizontal: SIDE },
  lockedMiddle: { flex: 1, justifyContent: 'center', gap: 12 },
  lockedTitle: { ...fonts.bold(32, -0.6), color: ink.text },
  lockedBody: { ...fonts.regular(19), color: ink.grey },
});
