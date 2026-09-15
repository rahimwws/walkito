import * as Haptics from 'expo-haptics';
import { Image, Pressable, StyleSheet, Text } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

import type { OnboardingOption } from '../model/steps';

const HEIGHT = 88;
const RADIUS = 18;
const PHOTO_INSET = 6;
/** One constant width, at rest and when chosen. Selection is carried entirely
 * by colour: growing the border on selection would nudge the card's contents
 * inward by a point and make the whole list twitch. */
const BORDER = 1.5;

const SELECT_MS = 220;
const PRESS_MS = 90;

export type OptionCardProps = {
  option: OnboardingOption;
  selected: boolean;
  onSelect: () => void;
};

/**
 * One answer: a photo tile, a label, and a border that darkens when chosen.
 *
 * No checkmark and no fill. A tick would add a second selection signal to a
 * list where only one thing can be selected, and a filled card fights the
 * photograph sitting inside it. The border alone is unambiguous precisely
 * because exactly one card ever carries it.
 */
export function OptionCard({ option, selected, onSelect }: OptionCardProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];

  const pressed = useSharedValue(0);

  const chosen = useDerivedValue(
    () =>
      withTiming(selected ? 1 : 0, {
        duration: SELECT_MS,
        easing: Easing.out(Easing.cubic),
        reduceMotion: ReduceMotion.System,
      }),
    [selected],
  );

  // The border crossfades on the UI thread rather than swapping on a
  // re-render, so selection *travels* between cards instead of blinking.
  const cardStyle = useAnimatedStyle(() => ({
    borderColor: interpolateColor(chosen.value, [0, 1], [meter.track, colors.foreground]),
    transform: [{ scale: 1 - pressed.value * 0.02 }],
  }));

  return (
    <Animated.View style={[styles.card, { backgroundColor: colors.card }, cardStyle]}>
      <Pressable
        accessibilityRole="radio"
        accessibilityState={{ selected }}
        onPress={() => {
          if (selected) return;
          Haptics.selectionAsync();
          onSelect();
        }}
        onPressIn={() => {
          pressed.value = withTiming(1, { duration: PRESS_MS });
        }}
        onPressOut={() => {
          pressed.value = withTiming(0, {
            duration: PRESS_MS * 2,
            easing: Easing.out(Easing.cubic),
          });
        }}
        style={styles.press}>
        <Image
          source={option.photo}
          style={[styles.photo, { backgroundColor: meter.iconTile }]}
          resizeMode="cover"
        />
        <Text style={[styles.label, { color: colors.foreground }]} numberOfLines={1}>
          {option.label}
        </Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: HEIGHT,
    borderRadius: RADIUS,
    borderCurve: 'continuous',
    borderWidth: BORDER,
  },
  press: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
  },
  photo: {
    width: 96,
    height: HEIGHT - BORDER * 2 - PHOTO_INSET * 2,
    margin: PHOTO_INSET,
    borderRadius: RADIUS - PHOTO_INSET,
    borderCurve: 'continuous',
  },
  label: {
    flex: 1,
    marginLeft: 16,
    fontSize: 17,
    fontFamily: fonts.medium,
  },
});
