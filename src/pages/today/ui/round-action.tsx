import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { Pressable, StyleSheet, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

import { colors } from '@/shared/config';

export type RoundActionProps = {
  icon: IconSvgElement;
  label: string;
  onPress: () => void;
  /** 0 to 1: a thin ring around the button, BitePal's progress ring. */
  progress?: number;
  ringColor?: string;
};

const SIZE = 64;
const STROKE = 5;

/** The round action at a card's top-right corner (BitePal #98/#99): a grey
 * disc with the action's glyph, with a thin ring when it shows progress. */
export function RoundAction({ icon, label, onPress, progress, ringColor = colors.accent }: RoundActionProps) {
  const r = (SIZE - STROKE) / 2;
  const circumference = 2 * Math.PI * r;
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      hitSlop={4}
      onPress={() => {
        void Haptics.selectionAsync();
        onPress();
      }}
      style={({ pressed }) => [styles.root, pressed && styles.pressed]}>
      {progress != null && (
        <Svg width={SIZE} height={SIZE} style={StyleSheet.absoluteFill}>
          <Circle cx={SIZE / 2} cy={SIZE / 2} r={r} stroke={colors.separator} strokeWidth={STROKE} fill="none" />
          {progress > 0 && (
            <Circle
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={r}
              stroke={ringColor}
              strokeWidth={STROKE}
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${circumference} ${circumference}`}
              strokeDashoffset={circumference * (1 - Math.min(1, progress))}
              transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}
            />
          )}
        </Svg>
      )}
      <View style={[styles.disc, progress != null && styles.discInset]}>
        <HugeiconsIcon icon={icon} size={26} color={colors.text} strokeWidth={2} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: { width: SIZE, height: SIZE, alignItems: 'center', justifyContent: 'center' },
  disc: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  discInset: { width: SIZE - 2 * STROKE - 6, height: SIZE - 2 * STROKE - 6 },
  pressed: { opacity: 0.6 },
});
