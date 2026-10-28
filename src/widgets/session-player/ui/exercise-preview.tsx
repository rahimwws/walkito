import ArrowExpandDiagonal01Icon from '@hugeicons/core-free-icons/ArrowExpandDiagonal01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useEffect, useImperativeHandle, useMemo, useRef, useState, type ReactNode, type Ref } from 'react';
import { Image, Pressable, StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import Animated, { Easing, ReduceMotion, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { useIntake } from '@/entities/profile';
import { WIDE_CLIPS } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';

import { clipFor } from '../config/exercise-clips';
import { posterFor } from '../config/exercise-posters';
import { mirroredFor } from '../model/mirror';
import { ClipViewer } from './clip-viewer';

/** What a host can ask of a preview: open it full screen, as a tap would. For
 * a host that is one accessible element and takes the double-tap itself. */
export type ExercisePreviewHandle = { expand: () => void };

export type ExercisePreviewProps = {
  exerciseId: string;
  style?: StyleProp<ViewStyle>;
  /** A tap opens it full screen, with a small expand chip in the corner. */
  expandable?: boolean;
  /**
   * `contain` (the default) shows the whole clip. `cover` fills the frame, and
   * is right only in a frame of the clip's own shape (9:16, `aspectRatio`),
   * where it crops under 1%: in any other shape a crop takes the feet first.
   */
  fit?: 'contain' | 'cover';
  /** The frame's shape, width over height. Square by default. */
  aspectRatio?: number;
  /**
   * Flipped for the left foot. Defaults to the saved intake; a host that knows
   * the side before the intake is saved (onboarding saves it at the very end)
   * passes it.
   */
  mirrored?: boolean;
  /** Whether the clip runs. A host pauses it for what it can see and this
   * cannot: its screen out of focus, the app in the background. */
  playing?: boolean;
  /** The first frame is on screen, faded in over the backdrop. */
  onFirstFrame?: () => void;
  /** The clip's length in seconds, once it has loaded. */
  onDuration?: (seconds: number) => void;
  /** The clip failed to load, or recovered. The host says so in its own words. */
  onFailedChange?: (failed: boolean) => void;
  /** Where the expand chip sits. Top-right on a clip whose toes are the point,
   * where the default corner would cover them. */
  expandPlacement?: 'top-right' | 'bottom-right';
  /** The full-screen viewer opened or closed. */
  onViewerChange?: (open: boolean) => void;
  /**
   * The frame slides, scales or fades with its host, as a pager's cards do.
   * On Android the clip then draws into a texture, which follows the view's
   * transform, opacity and corners; the default surface is faster but sits in
   * a hole in the window that does none of that.
   */
  moving?: boolean;
  /** Drawn over the clip and under the expand chip, inside the frame's corner. */
  children?: ReactNode;
  ref?: Ref<ExercisePreviewHandle>;
};

/**
 * An exercise's clip on its own, looping and silent — the preview a chip opens
 * on the plan screen. The same source, cache and mirroring as the player, so
 * the preview is exactly what the session will show.
 */
export function ExercisePreview({
  exerciseId,
  style,
  expandable = false,
  fit = 'contain',
  aspectRatio = 1,
  mirrored: mirroredProp,
  playing = true,
  onFirstFrame,
  onDuration,
  onFailedChange,
  expandPlacement = 'bottom-right',
  onViewerChange,
  moving = false,
  children,
  ref,
}: ExercisePreviewProps) {
  const t = useT();
  const [open, setOpen] = useState(false);
  const intake = useIntake();
  const mirrored = mirroredProp ?? mirroredFor(intake?.side);

  // Behind refs: the listeners below are registered once per player and must
  // still reach the host's latest callbacks.
  const firstFrameRef = useRef(onFirstFrame);
  firstFrameRef.current = onFirstFrame;
  const durationRef = useRef(onDuration);
  durationRef.current = onDuration;
  const failedRef = useRef(onFailedChange);
  failedRef.current = onFailedChange;
  const viewerRef = useRef(onViewerChange);
  viewerRef.current = onViewerChange;

  /**
   * Where to play from, read once per exercise. `clipFor` answers the remote
   * URL until the prefetch has the file and the local file after, and
   * `useVideoPlayer` builds a new player whenever its source changes: read on
   * every render, a download finishing while the preview was up restarted the
   * clip from its first frame under the user.
   */
  const source = useMemo(() => clipFor(exerciseId), [exerciseId]);
  const poster = posterFor(exerciseId);
  /**
   * A wide clip in a frame of its own shape fills it, over its own still until
   * the first frame arrives. In an upright or square frame it is fitted whole
   * on a dark panel: cropped to the frame, a clip framed on the feet loses the
   * feet.
   */
  const wide = WIDE_CLIPS.has(exerciseId);
  const wideFrame = wide && aspectRatio > 1.2;
  const contentFit = wide ? (wideFrame ? 'cover' : 'contain') : fit;
  const player = useVideoPlayer(source, (instance) => {
    instance.loop = true;
    instance.muted = true;
    // Mixing, as well as muted. expo-video settles the audio session from
    // every player that is playing, and the default mode on iOS does not mix:
    // a muted preview was still enough to stop the user's music.
    instance.audioMixingMode = 'mixWithOthers';
  });

  /**
   * The transport. Re-asserted rather than left to the setup callback, which
   * runs once per player, and paused under the full-screen viewer, which plays
   * its own copy: two decoders for one picture, one of them hidden.
   */
  useEffect(() => {
    player.loop = true;
    player.muted = true;
    player.audioMixingMode = 'mixWithOthers';
    if (playing && !open) player.play();
    else player.pause();
  }, [player, playing, open]);

  /**
   * The clip fades in on its first frame, over the backdrop. Shown at once it
   * arrived as a grey flash: a frame of empty player, then the picture.
   */
  const shown = useSharedValue(0);
  const videoStyle = useAnimatedStyle(() => ({ opacity: shown.value }));
  const revealRef = useRef(() => {});
  revealRef.current = () => {
    if (shown.value === 1) return;
    shown.value = withTiming(1, {
      duration: REVEAL_MS,
      easing: Easing.out(Easing.quad),
      reduceMotion: ReduceMotion.System,
    });
  };

  // A listener, not a read of `player.status`: the player is a native object
  // and its status is not React state, so a failure arriving after mount would
  // never re-render anything.
  useEffect(() => {
    shown.value = 0;
    // A fallback for the fade. The first-frame event is the reveal; should a
    // platform never send it, a clip that is ready to play is shown anyway
    // rather than playing unseen behind its backdrop.
    let fallback: ReturnType<typeof setTimeout> | null = null;
    const arm = () => {
      if (fallback == null) fallback = setTimeout(() => revealRef.current(), REVEAL_FALLBACK_MS);
    };
    if (player.status === 'readyToPlay') arm();
    const status = player.addListener('statusChange', ({ status: next }) => {
      failedRef.current?.(next === 'error');
      if (next === 'readyToPlay') arm();
    });
    const load = player.addListener('sourceLoad', ({ duration }) => {
      if (duration > 0) durationRef.current?.(duration);
    });
    return () => {
      status.remove();
      load.remove();
      if (fallback != null) clearTimeout(fallback);
    };
  }, [player, shown]);

  const setViewer = (next: boolean) => {
    setOpen(next);
    viewerRef.current?.(next);
  };

  useImperativeHandle(ref, () => ({
    expand: () => {
      if (expandable) setViewer(true);
    },
  }));

  const card = (
    <View style={[styles.frame, { aspectRatio, backgroundColor: wide ? WIDE_BACKDROP : CLIP_BACKDROP }, style]}>
      {poster != null && wideFrame && (
        <Image
          source={poster}
          resizeMode="cover"
          style={[StyleSheet.absoluteFill, mirrored && styles.mirrored]}
          accessibilityIgnoresInvertColors
        />
      )}
      <Animated.View style={[StyleSheet.absoluteFill, videoStyle]} pointerEvents="none">
        <VideoView
          style={[StyleSheet.absoluteFill, mirrored && styles.mirrored]}
          player={player}
          nativeControls={false}
          // Fitted unless the frame is the clip's own shape: the clips are
          // upright and show the whole body, and a crop takes the feet first.
          contentFit={contentFit}
          surfaceType={moving ? 'textureView' : undefined}
          onFirstFrameRender={() => {
            revealRef.current();
            // Read here as well as on `sourceLoad`: a cached file can finish
            // loading before that listener is attached.
            if (player.duration > 0) durationRef.current?.(player.duration);
            firstFrameRef.current?.();
          }}
        />
      </Animated.View>
      {children}
      {expandable && (
        <View
          style={[styles.expand, expandPlacement === 'top-right' ? styles.expandTop : styles.expandBottom]}
          pointerEvents="none">
          <HugeiconsIcon icon={ArrowExpandDiagonal01Icon} size={18} color="#111114" strokeWidth={2.2} />
        </View>
      )}
    </View>
  );
  if (!expandable) return card;
  return (
    <>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={t('widgets.expandDemo')}
        onPress={() => {
          Haptics.selectionAsync();
          setViewer(true);
        }}>
        {card}
      </Pressable>
      <ClipViewer clip={exerciseId} mirrored={mirrored} visible={open} onClose={() => setViewer(false)} />
    </>
  );
}

/** The studio backdrop the clips are filmed on. Exported for a host that
 * draws a clip's card before its player exists. */
export const CLIP_BACKDROP = '#ECF0F1';

/** The panel around a wide clip fitted into an upright frame. */
const WIDE_BACKDROP = '#0B0B0D';

/** How long the first frame takes to fade in. */
const REVEAL_MS = 180;
/** How long a ready clip waits for its first-frame event before it is shown
 * anyway. */
const REVEAL_FALLBACK_MS = 600;

const styles = StyleSheet.create({
  frame: {
    borderRadius: 24,
    borderCurve: 'continuous',
    overflow: 'hidden',
  },
  mirrored: {
    transform: [{ scaleX: -1 }],
  },
  expand: {
    position: 'absolute',
    right: 12,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: 'rgba(255,255,255,0.92)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  expandTop: { top: 12 },
  expandBottom: { bottom: 12 },
});
