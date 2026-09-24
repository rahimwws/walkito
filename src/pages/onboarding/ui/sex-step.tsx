import * as Haptics from 'expo-haptics';
import { CheckCircleIcon as CheckCircle } from 'phosphor-react-native/src/icons/CheckCircle';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { PRIMARY, fonts, meterColors } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

import { SEX_PHOTOS } from '../config/sex-photos';
import type { ResolvedOption } from '../model/steps';

const RADIUS = 24;
const CHECK = 26;
const SELECT_MS = 200;
const PRESS_MS = 90;

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export type SexStepProps = {
  options: readonly ResolvedOption[];
  selected: string | null;
  onChange: (next: string) => void;
};

/**
 * Two cards, each taking half the canvas.
 *
 * The only question in the flow with exactly two answers, so it gets the only
 * layout that would be absurd anywhere else: full-bleed halves. At this size
 * the photograph does the labelling and the caption is a confirmation rather
 * than the thing being read, which is why it can be tapped without looking.
 *
 * The answer is not cosmetic — it picks which body the shoe-size screen shows,
 * so it has to be asked before that screen and cannot be skipped past.
 */
export function SexStep({ options, selected, onChange }: SexStepProps) {
  return (
    <View style={styles.wrap}>
      {options.map((option) => (
        <SexCard
          key={option.value}
          option={option}
          selected={selected === option.value}
          // Nothing is chosen when the screen arrives, so both cards start at
          // full strength: dimming everything would read as disabled.
          dimmed={selected != null && selected !== option.value}
          onPress={() => {
            Haptics.selectionAsync();
            onChange(option.value);
          }}
        />
      ))}
    </View>
  );
}

function SexCard({
  option,
  selected,
  dimmed,
  onPress,
}: {
  option: ResolvedOption;
  selected: boolean;
  dimmed: boolean;
  onPress: () => void;
}) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];

  const photo = SEX_PHOTOS[option.value];

  const pressed = useSharedValue(0);
  const chosen = useDerivedValue(
    () =>
      withTiming(selected ? 1 : 0, {
        duration: SELECT_MS,
        easing: Easing.bezier(0.23, 1, 0.32, 1),
        reduceMotion: ReduceMotion.System,
      }),
    [selected],
  );
  const faded = useDerivedValue(
    () =>
      withTiming(dimmed ? 1 : 0, {
        duration: SELECT_MS,
        easing: Easing.bezier(0.23, 1, 0.32, 1),
        reduceMotion: ReduceMotion.System,
      }),
    [dimmed],
  );

  const cardStyle = useAnimatedStyle(() => ({
    borderColor: interpolateColor(chosen.value, [0, 1], [meter.track, PRIMARY]),
    transform: [{ scale: 1 - pressed.value * 0.02 }],
  }));

  // The unchosen card recedes rather than the chosen one lighting up: with
  // only two options, dimming the other is the clearer signal and leaves the
  // photograph you picked at full strength.
  const photoStyle = useAnimatedStyle(() => ({
    opacity: interpolate(faded.value, [0, 1], [1, 0.45]),
  }));

  const tickStyle = useAnimatedStyle(() => ({
    opacity: chosen.value,
    transform: [{ scale: 0.6 + chosen.value * 0.4 }],
  }));

  return (
    <AnimatedPressable
      accessibilityRole="radio"
      accessibilityState={{ selected }}
      accessibilityLabel={option.label}
      onPress={onPress}
      onPressIn={() => {
        pressed.value = withTiming(1, { duration: PRESS_MS });
      }}
      onPressOut={() => {
        pressed.value = withTiming(0, {
          duration: PRESS_MS * 2,
          easing: Easing.bezier(0.23, 1, 0.32, 1),
        });
      }}
      style={[styles.card, cardStyle]}>
      {photo != null && (
        <Animated.View style={[styles.photoWrap, photoStyle]}>
          <Image source={photo} style={styles.photo} resizeMode="cover" />
        </Animated.View>
      )}

      {/* A scrim under the caption only — a full-card overlay would flatten
          the photograph, and the top two thirds have nothing to protect. */}
      <View style={styles.footer}>
        <Text style={styles.label}>{option.label}</Text>
        <Animated.View style={tickStyle}>
          <CheckCircle size={CHECK} color={PRIMARY} weight="fill" />
        </Animated.View>
      </View>
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    gap: 14,
    paddingTop: 20,
    paddingBottom: 4,
  },
  card: {
    flex: 1,
    borderRadius: RADIUS,
    // Corner smoothing — the squircle is what stops a 24pt radius reading as
    // a plain rounded rect at this size.
    borderCurve: 'continuous',
    borderWidth: 2,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  photoWrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 14,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  label: {
    fontSize: 20,
    fontFamily: fonts.bold,
    letterSpacing: -0.3,
    // Fixed white rather than the theme foreground: it sits on a photograph,
    // not on the page, so it must not flip with the colour scheme.
    color: '#FFFFFF',
  },
});
