import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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

import { accents, fonts, meterColors, palette } from '@/shared/config';
import { mix } from '@/shared/lib/color';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import { Raised, faceFor, useRaisedScheme } from '@/shared/ui/raised';

import type { ResolvedOption } from '../model/steps';

const EASE = Easing.bezier(0.23, 1, 0.32, 1);

/** How far an unpicked tile leans to its colour: the face, then its border
 * and ledge. Dim on purpose: the picked ones are the bright ones. */
const TINT = {
  light: { face: 0.14, edge: 0.5 },
  dark: { face: 0.2, edge: 0.55 },
} as const;

const DEPTH = 5;
const RADIUS = 20;
/** Room for the art and two lines of label, so a row of tiles lines up
 * whatever the language wraps. */
const FACE_HEIGHT = 108;
const ART = 36;
/** A picked tile stands this much higher than the rest. */
const LIFT = 4;

/**
 * One thing that might be at home, as a coloured 3D tile: its art on top, its
 * name under it.
 *
 * Unpicked it is dim, tinted its colour on a ledge of the same tint; picked it
 * fills with that colour, pops, lifts a few points above the rest and ticks.
 * Filled against tinted is a change of lightness as well as of hue, and the
 * tick says it again, so the choice reads without colour. The colour says
 * which thing it is, never how good an answer it is.
 *
 * The art is the option's Fluent emoji, drawn as given, or its Hugeicons
 * glyph on a disc of the tile's colour in the ink that reads on it.
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
  const scheme = useRaisedScheme();
  const reduceMotion = useReducedMotion();
  const accent = option.accent ?? 'violet';
  const card = palette[scheme].card;
  const fill = accents[scheme][accent].fill;
  const tone = faceFor(scheme, accent);
  const tinted = {
    face: mix(card, fill, TINT[scheme].face),
    edge: mix(card, fill, TINT[scheme].edge),
  };
  const ink = selected ? tone.label : palette[scheme].foreground;

  // The pop plays on being picked, never on being let go or on arrival.
  const pop = useSharedValue(1);
  const lift = useSharedValue(selected ? 1 : 0);
  const was = useRef(selected);
  useEffect(() => {
    lift.value = withTiming(selected ? 1 : 0, { duration: 180, easing: EASE, reduceMotion: ReduceMotion.System });
    if (selected && !was.current && !reduceMotion) {
      pop.value = withSequence(
        withTiming(0.95, { duration: 0 }),
        withTiming(1.06, { duration: 110, easing: Easing.out(Easing.quad) }),
        withTiming(1, { duration: 200, easing: EASE }),
      );
    }
    was.current = selected;
  }, [selected, reduceMotion, lift, pop]);
  const motion = useAnimatedStyle(() => ({
    transform: [{ translateY: -LIFT * lift.value }, { scale: pop.value }],
  }));

  const art =
    option.emoji != null ? (
      <FluentIcon name={option.emoji} size={ART - 2} />
    ) : option.icon != null ? (
      <View style={[styles.disc, { backgroundColor: selected ? mix(tone.face, '#FFFFFF', 0.24) : tone.face }]}>
        <HugeiconsIcon icon={option.icon} size={20} color={tone.label} strokeWidth={2} />
      </View>
    ) : null;

  return (
    <Animated.View style={[styles.slot, motion]}>
      <Raised
        face={selected ? tone.face : tinted.face}
        // The same border both ways, the face's own colour when picked, so a
        // tile is the same size picked or not and the grid never shifts.
        edge={selected ? tone.face : tinted.edge}
        lip={selected ? tone.lip : tinted.edge}
        depth={DEPTH}
        radius={RADIUS}
        haptic="none"
        onPress={onPress}
        accessibilityRole="checkbox"
        accessibilityLabel={option.label}
        accessibilityState={{ checked: selected }}
        contentStyle={styles.face}>
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
      </Raised>
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
  face: {
    height: FACE_HEIGHT,
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
