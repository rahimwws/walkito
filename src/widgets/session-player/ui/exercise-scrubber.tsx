import NextIcon from '@hugeicons/core-free-icons/NextIcon';
import PauseIcon from '@hugeicons/core-free-icons/PauseIcon';
import PlayIcon from '@hugeicons/core-free-icons/PlayIcon';
import PreviousIcon from '@hugeicons/core-free-icons/PreviousIcon';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { Pressable, StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  type SharedValue,
} from 'react-native-reanimated';

import { meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { PRIMARY_BUTTON_HEIGHT } from '@/shared/ui/primary-button';

/** The primary button's corner, because this is the same slab. The screen has
 * one object at the bottom of it and the eye should not have to decide whether
 * these are two different families of control. */
const RADIUS = 32;
/** How far the finger travels sideways before this becomes a scrub rather than
 * a tap on one of the three buttons riding on top of it. */
const SCRUB_SLOP = 6;

export type ExerciseScrubberProps = {
  /** 0–1 through the current move. Written by the pan, read by the fill. */
  progress: SharedValue<number>;
  /** 1 while a finger is on the bar. The clock reads it and holds still. */
  scrubbing: SharedValue<number>;
  playing: boolean;
  onTogglePlay: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

/**
 * The transport: one slab, the shape of the app's primary button.
 *
 * It is both the progress of the move and the way to move through it, which is
 * what the whole bottom of the screen collapses to. A separate thin track above
 * a row of buttons would say the same thing twice and cost the layout a strip
 * it does not have.
 *
 * The drag is *relative* — it continues from wherever the playhead already
 * stands rather than jumping to the finger. There is no thumb to grab, so an
 * absolute mapping would make the first touch anywhere on a 76pt-tall bar throw
 * the move to a time nobody asked for; every scrubber without a visible handle
 * works this way for the same reason.
 */
export function ExerciseScrubber({
  progress,
  scrubbing,
  playing,
  onTogglePlay,
  onPrevious,
  onNext,
}: ExerciseScrubberProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();

  const width = useSharedValue(0);
  /** Where the playhead stood when the finger landed. */
  const grabbedAt = useSharedValue(0);

  const pan = Gesture.Pan()
    // Sideways only. Left undecided, a vertical flick to put the program away
    // would seek instead, and the sheet would never get the gesture.
    .activeOffsetX([-SCRUB_SLOP, SCRUB_SLOP])
    .failOffsetY([-14, 14])
    .onStart(() => {
      'worklet';
      grabbedAt.value = progress.value;
      scrubbing.value = 1;
    })
    .onUpdate((event) => {
      'worklet';
      if (width.value === 0) return;
      const next = grabbedAt.value + event.translationX / width.value;
      progress.value = Math.min(Math.max(next, 0), 1);
    })
    // Finalize rather than end: a cancelled gesture has to release the clock
    // too, or the timer stays frozen with nothing holding it.
    .onFinalize(() => {
      'worklet';
      scrubbing.value = 0;
    });

  /** Translated rather than resized. A width animated every frame is a layout
   * pass every frame; a transform stays on the UI thread where the fill has to
   * keep up with a finger. */
  const fill = useAnimatedStyle(() => ({
    transform: [{ translateX: -(1 - progress.value) * width.value }],
    // Held back until the bar has been measured. At width 0 the translation is
    // also 0, which would show a completely full bar for the frame before
    // layout lands.
    opacity: width.value > 0 ? 1 : 0,
  }));

  return (
    <GestureDetector gesture={pan}>
      <View
        style={[styles.bar, { backgroundColor: meter.track }]}
        onLayout={(event) => {
          width.value = event.nativeEvent.layout.width;
        }}>
        {/* The track's own translucent ink, laid over itself: what has played
            reads lighter than what has not, without introducing a colour that
            would then have to mean something. Two layers rather than one
            because this is read from across a room with a phone against a
            wall, and 0.14 over 0.14 is a difference you have to look for. */}
        <Animated.View
          pointerEvents="none"
          style={[StyleSheet.absoluteFill, { backgroundColor: meter.track }, fill]}>
          <View style={[StyleSheet.absoluteFill, { backgroundColor: meter.track }]} />
        </Animated.View>

        <View style={styles.row}>
          <Control
            label={t('widgets.scrubberPrevious')}
            icon={PreviousIcon}
            color={colors.foreground}
            onPress={onPrevious}
          />
          <Control
            label={t(playing ? 'widgets.scrubberPause' : 'widgets.scrubberPlay')}
            icon={playing ? PauseIcon : PlayIcon}
            color={colors.foreground}
            size={28}
            onPress={onTogglePlay}
          />
          <Control
            label={t('widgets.scrubberNext')}
            icon={NextIcon}
            color={colors.foreground}
            onPress={onNext}
          />
        </View>
      </View>
    </GestureDetector>
  );
}

function Control({
  label,
  icon,
  color,
  size = 24,
  onPress,
}: {
  label: string;
  icon: IconSvgElement;
  color: string;
  size?: number;
  onPress: () => void;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      hitSlop={10}
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        onPress();
      }}
      style={({ pressed }) => [styles.control, pressed && { opacity: 0.45 }]}>
      <HugeiconsIcon icon={icon} size={size} color={color} strokeWidth={2} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  bar: {
    height: PRIMARY_BUTTON_HEIGHT,
    borderRadius: RADIUS,
    borderCurve: 'continuous',
    overflow: 'hidden',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  control: {
    width: 64,
    height: PRIMARY_BUTTON_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
