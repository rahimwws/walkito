import { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Animated, { ReduceMotion, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { filled, fonts, raised } from '@/shared/config';
import { Raised, useRaisedScheme } from '@/shared/ui/raised';

const FACE = 60;
const LIP = 6;

/**
 * The offer's one action: the kit's ink face on its lip, as a pill.
 *
 * `Button3D`'s `ink` colours and press, rounded all the way: the reference's
 * big black capsule, standing on the 3D kit's ledge. Inverted in the dark,
 * where the ink face is the light one. In a fixed spot rather than a list, so
 * it drops on touch-down.
 */
export function PillButton({
  label,
  onPress,
  loading = false,
  disabled = false,
}: {
  label: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
}) {
  const scheme = useRaisedScheme();
  const ink = filled[scheme].ink;
  const tokens = raised[scheme];
  const colours = disabled ? { face: tokens.disabledFace, lip: tokens.disabledFace, label: tokens.disabledInk } : ink;

  const busy = useSharedValue(loading ? 1 : 0);
  useEffect(() => {
    busy.value = withTiming(loading ? 1 : 0, { duration: 120, reduceMotion: ReduceMotion.System });
  }, [loading, busy]);
  const labelFade = useAnimatedStyle(() => ({ opacity: 1 - busy.value }));
  const spinnerFade = useAnimatedStyle(() => ({ opacity: busy.value }));

  return (
    <Raised
      face={colours.face}
      lip={colours.lip}
      depth={LIP}
      radius={FACE / 2}
      haptic="medium"
      pressDelay={0}
      disabled={disabled}
      busy={loading}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ disabled, busy: loading }}
      style={styles.outer}
      contentStyle={styles.face}>
      <Animated.View style={labelFade}>
        <Text style={[styles.label, { color: colours.label }]} numberOfLines={1} maxFontSizeMultiplier={1.3}>
          {label}
        </Text>
      </Animated.View>
      <Animated.View pointerEvents="none" style={[StyleSheet.absoluteFill, styles.center, spinnerFade]}>
        <View>
          <ActivityIndicator animating={loading} color={colours.label} size="small" />
        </View>
      </Animated.View>
    </Raised>
  );
}

const styles = StyleSheet.create({
  outer: { alignSelf: 'stretch' },
  face: {
    height: FACE,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: { alignItems: 'center', justifyContent: 'center' },
  label: { ...fonts.heavy(19, -0.2), textAlign: 'center' },
});
