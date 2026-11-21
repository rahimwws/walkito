import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { useEffect, useRef } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  FadeOut,
  LinearTransition,
  ReduceMotion,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { colors, fonts, meterColors, palette, radius } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { FluentIcon } from '@/shared/ui/fluent-icon';

import type { ResolvedOption } from '../model/steps';

const EASE = Easing.bezier(0.23, 1, 0.32, 1);

/** Room for the art and two lines of label, so a row of tiles lines up
 * whatever the language wraps. */
const FACE_HEIGHT = 108;
const ART = 36;

/**
 * One thing that might be at home, as a flat tile: its art on top, its name
 * under it.
 *
 * Unpicked it is the plain white card; picked it turns soft violet with a
 * violet edge, pops once and ticks. The tick says it again, so the choice
 * reads without colour.
 *
 * The art is the option's Fluent emoji, drawn as given, or its Hugeicons
 * glyph on a grey disc.
 */
export function KitTile({
  option,
  selected,
  onPress,
}: {
  option: ResolvedOption;
  selected: boolean;
  onPress: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const ink = selected ? colors.accent : colors.text;

  // The pop plays on being picked, never on being let go or on arrival.
  const pop = useSharedValue(1);
  const was = useRef(selected);
  useEffect(() => {
    if (selected && !was.current && !reduceMotion) {
      pop.value = withSequence(
        withTiming(0.95, { duration: 0 }),
        withTiming(1.04, { duration: 110, easing: Easing.out(Easing.quad) }),
        withTiming(1, { duration: 200, easing: EASE }),
      );
    }
    was.current = selected;
  }, [selected, reduceMotion, pop]);
  const motion = useAnimatedStyle(() => ({ transform: [{ scale: pop.value }] }));

  const art =
    option.emoji != null ? (
      <FluentIcon name={option.emoji} size={ART - 2} />
    ) : option.icon != null ? (
      <View style={[styles.disc, { backgroundColor: selected ? colors.surface : colors.surface2 }]}>
        <HugeiconsIcon icon={option.icon} size={20} color={ink} strokeWidth={2} />
      </View>
    ) : null;

  return (
    <Animated.View style={[styles.slot, motion]}>
      <Pressable
        onPress={onPress}
        accessibilityRole="checkbox"
        accessibilityLabel={option.label}
        accessibilityState={{ checked: selected }}
        style={({ pressed }) => [
          styles.face,
          {
            backgroundColor: selected ? colors.accentSoft : colors.surface,
            borderColor: selected ? colors.accent : colors.separator,
            opacity: pressed ? 0.8 : 1,
          },
        ]}>
        <View style={styles.art}>{art}</View>
        <Text
          style={[styles.label, { color: ink }]}
          numberOfLines={2}
          adjustsFontSizeToFit
          minimumFontScale={0.8}
          maxFontSizeMultiplier={1.3}>
          {option.label}
        </Text>
        {selected && (
          <View style={styles.tick}>
            <HugeiconsIcon icon={Tick02Icon} size={16} color={ink} strokeWidth={2.8} />
          </View>
        )}
      </Pressable>
    </Animated.View>
  );
}

/**
 * Under the tiles: the exercises the kit picked so far brings into the plan,
 * each arriving as its piece is picked. The answer visibly changes the plan.
 */
export function KitAdds({ adds }: { adds: readonly string[] }) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const t = useT();
  if (adds.length === 0) return null;
  return (
    <Animated.View
      entering={FadeIn.duration(240).reduceMotion(ReduceMotion.System)}
      exiting={FadeOut.duration(140).reduceMotion(ReduceMotion.System)}
      layout={LinearTransition.duration(220).reduceMotion(ReduceMotion.System)}
      style={[styles.adds, { backgroundColor: meter.iconTile }]}>
      <Text style={[styles.addsTitle, { color: meter.label }]}>{t('onboarding.schedule.adds')}</Text>
      <View style={styles.addsRow}>
        {adds.map((name) => (
          <Animated.View
            key={name}
            entering={FadeIn.duration(260).reduceMotion(ReduceMotion.System)}
            style={[styles.addChip, { backgroundColor: palette[scheme].card }]}>
            <Text style={[styles.addText, { color: palette[scheme].foreground }]} numberOfLines={1}>
              {`+ ${name}`}
            </Text>
          </Animated.View>
        ))}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  /** Two to a row: each grows from just under half, past the gap. */
  slot: {
    flexBasis: '40%',
    flexGrow: 1,
  },
  /** The same border width picked or not, so the grid never shifts. */
  face: {
    height: FACE_HEIGHT,
    borderWidth: 1.5,
    borderRadius: radius.card,
    borderCurve: 'continuous',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  art: {
    width: ART,
    height: ART,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disc: {
    width: ART,
    height: ART,
    borderRadius: ART / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    ...fonts.bold(14, -0.1),
    lineHeight: 18,
    textAlign: 'center',
  },
  tick: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  adds: {
    marginTop: 16,
    padding: 12,
    gap: 8,
    borderRadius: 18,
    borderCurve: 'continuous',
  },
  addsTitle: fonts.bold(13, 0.1),
  addsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  addChip: { paddingHorizontal: 10, paddingVertical: 6, borderRadius: 12 },
  addText: fonts.semibold(13),
});
