import { useRef, type ReactNode } from 'react';
import { View, type LayoutChangeEvent, type StyleProp, type ViewStyle } from 'react-native';
import Animated, { Easing, ReduceMotion, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const HEIGHT_MS = 420;
const HEIGHT_EASING = Easing.bezier(0.33, 1, 0.68, 1);

/**
 * Its children at their own height, with every change of that height eased
 * rather than cut: whatever is under them moves smoothly instead of jumping.
 *
 * For the morning line, whose sentence changes when the check-in is answered
 * (two lines become three) in the same moment the answer folds in under it.
 * Clips while it eases, so a longer sentence never draws over the block below.
 * Never wrap content that animates its own height: every frame of that would
 * be a new measurement here.
 */
export function GlideHeight({ children, style }: { children: ReactNode; style?: StyleProp<ViewStyle> }) {
  const height = useSharedValue(-1);
  const last = useRef(0);
  const onLayout = (event: LayoutChangeEvent) => {
    const next = event.nativeEvent.layout.height;
    if (Math.abs(next - last.current) < 0.5) return;
    const initial = last.current === 0;
    last.current = next;
    height.value = initial
      ? next
      : withTiming(next, { duration: HEIGHT_MS, easing: HEIGHT_EASING, reduceMotion: ReduceMotion.System });
  };
  const glide = useAnimatedStyle(() => (height.value < 0 ? {} : { height: height.value, overflow: 'hidden' }));
  return (
    <Animated.View style={[style, glide]}>
      <View onLayout={onLayout}>{children}</View>
    </Animated.View>
  );
}
