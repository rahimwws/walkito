import { useEffect } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';

import { fonts, primaryButton } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';
import { PRIMARY_BUTTON_HEIGHT } from '@/shared/ui/primary-button';

/** The app's primary button metrics, so the sheet's one action looks like
 * every other screen's. */
const RADIUS = 32;
const PRESS_SCALE = 0.975;
const BAR_WIDTH = 132;
const BAR_HEIGHT = 4;

type UpdateButtonProps = {
  label: string;
  /** The update is on its way: the label lifts and a progress bar rises under it. */
  busy: boolean;
  /** 0…1, driven by the sheet — the download, or the short fill before the restart. */
  progress: SharedValue<number>;
  onPress: () => void;
};

/**
 * `PrimaryButton`'s shape, with room for progress inside it.
 *
 * The bar lives in the button rather than beside it because the button is
 * where the person's eyes already are: they just tapped it. It is ink on the
 * face, the label's colour, so it reads in either scheme without a colour of
 * its own — and colour never judges a value here, a bar at 20% is the same
 * ink as one at 100%.
 *
 * No haptic on press-in, unlike `PrimaryButton`: the sheet answers the tap
 * itself with a success tap as the restart starts, and two in a row would
 * rattle.
 */
export function UpdateButton({ label, busy, progress, onPress }: UpdateButtonProps) {
  const scheme = useColorScheme();
  const theme = primaryButton[scheme];

  const pressed = useSharedValue(0);
  const working = useSharedValue(busy ? 1 : 0);

  useEffect(() => {
    working.value = withTiming(busy ? 1 : 0, {
      duration: 220,
      easing: Easing.out(Easing.cubic),
      reduceMotion: ReduceMotion.System,
    });
  }, [busy, working]);

  const faceStyle = useAnimatedStyle(() => ({
    transform: [{ scale: 1 - pressed.value * (1 - PRESS_SCALE) }],
  }));
  const labelStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: -working.value * 7 }],
  }));
  const trackStyle = useAnimatedStyle(() => ({
    opacity: working.value,
    transform: [{ translateY: (1 - working.value) * 6 }],
  }));
  // A translate inside a clipped track rather than an animated width: nothing
  // relayouts per frame, and the leading end keeps its rounded cap.
  const fillStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: -(1 - Math.min(1, Math.max(0, progress.value))) * BAR_WIDTH }],
  }));

  return (
    <Animated.View style={faceStyle}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={label}
        accessibilityState={{ busy, disabled: busy }}
        disabled={busy}
        onPressIn={() => {
          pressed.value = withTiming(1, {
            duration: 90,
            easing: Easing.out(Easing.quad),
            reduceMotion: ReduceMotion.System,
          });
        }}
        onPressOut={() => {
          pressed.value = withTiming(0, {
            duration: 160,
            easing: Easing.out(Easing.cubic),
            reduceMotion: ReduceMotion.System,
          });
        }}
        onPress={onPress}
        style={[styles.face, { backgroundColor: theme.fill }]}>
        <Animated.View style={labelStyle}>
          <Text style={[styles.label, { color: theme.label }]} numberOfLines={1}>
            {label}
          </Text>
        </Animated.View>
        <Animated.View
          style={[styles.track, { backgroundColor: `${theme.label}26` }, trackStyle]}
          pointerEvents="none">
          <Animated.View style={[styles.fill, { backgroundColor: theme.label }, fillStyle]} />
        </Animated.View>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  face: {
    height: PRIMARY_BUTTON_HEIGHT,
    borderRadius: RADIUS,
    borderCurve: 'continuous',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 20,
    fontFamily: fonts.semibold,
    letterSpacing: -0.1,
  },
  track: {
    position: 'absolute',
    bottom: 19,
    width: BAR_WIDTH,
    height: BAR_HEIGHT,
    borderRadius: BAR_HEIGHT / 2,
    overflow: 'hidden',
  },
  fill: {
    width: BAR_WIDTH,
    height: BAR_HEIGHT,
    borderRadius: BAR_HEIGHT / 2,
  },
});
