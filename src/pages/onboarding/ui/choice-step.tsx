import * as Haptics from 'expo-haptics';
import { CheckCircleIcon as CheckCircle } from 'phosphor-react-native/src/icons/CheckCircle';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useReducedMotion,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { PRIMARY, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Badge } from '@/shared/ui/badge';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import { OptionCard3D } from '@/shared/ui/option-card-3d';

import { SPORT_ICONS, VERDICT_ICONS } from '../config/option-icons';
import { FeetGlyph, type FeetSide } from './feet-glyph';
import { KitTile } from './kit-tile';
import { PEEK_WIDTH, PeekMascot } from './peek-mascot';
import type { ResolvedOption } from '../model/steps';

/** The glyph in a row's tile: the kit's own tile size and glyph size. */
const TILE = 40;
const ICON = 22;
/** A chosen row pops as it is picked: up from just under its size, a touch
 * past it, and back. */
const POP_IN_MS = 60;
const POP_OUT_MS = 120;
/** And its emoji pops with it, further: up past its size and settling back.
 * Less on a question about the body, where the coach only nods. */
const EMOJI_POP = { lively: 1.15, calm: 1.08 } as const;
const EMOJI_UP_MS = 110;
const EMOJI_DOWN_MS = 190;

const SELECT_MS = 180;
const PRESS_MS = 90;

/** Capsule: the radius is exactly half the height, so it needs no corner
 * smoothing rule of its own. */
const CHIP_HEIGHT = 50;
const CHIP_ICON = 20;
const CHIP_CHECK = 18;

/** Violet at low alpha behind a chosen chip. Both ends are written out because
 * `interpolateColor` needs fully resolved colours. */
const PICKED_FILL = {
  light: 'rgba(139,92,246,0.14)',
  dark: 'rgba(139,92,246,0.22)',
} as const;

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

/** The foot that is not the sore one, on the side question's glyph. */
const IDLE_FOOT = { light: '#D3D3D8', dark: '#3A3A3E' } as const;

/**
 * What leads each answer.
 *
 * - `fluent` (the default): the option's colourful Fluent emoji, or the card's
 *   own tile where the option brings a glyph (the platforms' logos), or nothing.
 * - `peek`: Walkito peeking up over the card's bottom edge (`PeekMascot`).
 * - `side`: the pair of feet, the sore one lit.
 * - `verdict`: how full a circle is, for an observation about the foot.
 * - `sport`: wrapping capsules, with the sport's own glyph.
 * - `kit`: a grid of coloured 3D tiles, two to a row (`KitTile`).
 */
export type ChoiceArt = 'fluent' | 'peek' | 'sport' | 'side' | 'verdict' | 'kit';

export type ChoiceStepProps = {
  options: readonly ResolvedOption[];
  selected: readonly string[];
  multi: boolean;
  max?: number;
  art?: ChoiceArt;
  /** A question about the body: a chosen answer's figure nods rather than
   * boinging (`PeekMascot`), and its emoji pops less. */
  calm?: boolean;
  onChange: (next: string[]) => void;
};

/**
 * The answer list.
 *
 * Each answer is the kit's glass card (`OptionCard3D`): a colourful Fluent
 * emoji at the leading edge (`FluentIcon`), the label, and a box for a
 * question with several answers or a radio for one at the trailing edge. Two
 * questions, who they are and what matters most, have Walkito peeking up over
 * each card instead, in that answer's own colour (`PeekMascot`). Where the art
 * means something it stays: the side question's pair of feet, the foot checks'
 * verdict circles, the platforms' own logos. Selection is the kit's own, the
 * same for every answer, so no answer looks like the one that earns something.
 * A row pops once as it is picked, its emoji or figure answers the tap, and
 * the coach in the corner nods (the page's, through `onChange`).
 */
export function ChoiceStep({
  options,
  selected,
  multi,
  max,
  art = 'fluent',
  calm = false,
  onChange,
}: ChoiceStepProps) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const t = useT();

  /**
   * The option the cap just pushed off the list, if any.
   *
   * Dropping the oldest silently is worse than refusing the tap: the answer
   * the user made two taps ago disappears from a list they are not looking at,
   * and the only evidence is a box that quietly emptied somewhere above.
   * Saying which one left turns a glitch into a rule.
   *
   * The cap travels with the label rather than being read off `max` at render
   * time: the sentence needs both, and this is the only place where the two are
   * known to agree.
   */
  const [swapped, setSwapped] = useState<{ label: string; cap: number } | null>(null);

  // The page reuses one `ChoiceStep` for every choice screen, so stepping
  // between two of them keeps this state. Keyed on the options themselves —
  // their identity is a new array on every parent render, their values are not.
  const optionKey = options.map((o) => o.value).join('|');
  useEffect(() => setSwapped(null), [optionKey]);

  /** The answer picked last: its figure is the one left breathing. */
  const [lastPicked, setLastPicked] = useState<string | null>(null);
  useEffect(() => setLastPicked(null), [optionKey]);

  /** The card ticks on its own tap; a chip has no haptic of its own. */
  const toggle = (value: string, haptic = true) => {
    if (haptic) Haptics.selectionAsync();
    if (!selected.includes(value)) setLastPicked(value);
    if (!multi) {
      onChange([value]);
      setSwapped(null);
      return;
    }
    // "Nothing right now" is exclusive by construction: it and a list of sore
    // spots cannot both be true, and letting them coexist would feed the plan
    // a contradiction.
    if (value === 'none') {
      onChange(selected.includes('none') ? [] : ['none']);
      setSwapped(null);
      return;
    }
    const without = selected.filter((v) => v !== 'none');
    if (without.includes(value)) {
      onChange(without.filter((v) => v !== value));
      setSwapped(null);
      return;
    }
    const next = [...without, value];
    // Drop the oldest rather than refusing the tap. A capped list that simply
    // stops responding reads as broken.
    const over = max != null && next.length > max;
    const kept = over ? next.slice(next.length - max) : next;
    onChange(kept);
    const dropped = over ? next.find((v) => !kept.includes(v)) : undefined;
    const label =
      dropped == null ? null : (options.find((o) => o.value === dropped)?.label ?? null);
    setSwapped(label == null || max == null ? null : { label, cap: max });
  };

  // What is at home: things rather than answers, so tiles to tap on and
  // off, each in its own colour, with "none of these" exclusive as above.
  if (art === 'kit') {
    return (
      <View style={styles.grid}>
        {options.map((option) => (
          <KitTile
            key={option.value}
            option={option}
            selected={selected.includes(option.value)}
            onPress={() => toggle(option.value)}
          />
        ))}
      </View>
    );
  }

  // The sport question is the one with eight short, single-word answers.
  // Eight full-width rows run past the fold and turn a two-word choice into a
  // scroll, so it lays out as wrapping capsules instead — every option visible
  // at once, which is the whole point of asking it this way.
  if (art === 'sport') {
    return (
      <View style={styles.chips}>
        {options.map((option) => (
          <ChoiceChip
            key={option.value}
            option={option}
            selected={selected.includes(option.value)}
            onPress={() => toggle(option.value)}
          />
        ))}
      </View>
    );
  }

  return (
    <View style={styles.list}>
      {options.map((option, index) => (
        <ChoiceRow
          key={option.value}
          option={option}
          index={index}
          selected={selected.includes(option.value)}
          live={option.value === lastPicked}
          multi={multi}
          art={art}
          calm={calm}
          onPress={() => toggle(option.value, false)}
        />
      ))}

      {/* Under the list, in the caption colour: it reports what happened, it
          does not tell anyone off. */}
      {swapped != null && (
        <Text accessibilityLiveRegion="polite" style={[styles.chipLabel, { color: meter.caption }]}>
          {t('onboarding.challenge.swapped', { count: swapped.cap, label: swapped.label })}
        </Text>
      )}
    </View>
  );
}

/**
 * One capsule.
 *
 * No check disc: in a wrapped set the chips sit side by side, so a filled
 * outline reads as chosen at a glance and a per-chip tick would just add
 * clutter to something already unambiguous. The row form needs its box or
 * radio because full-width rows give the eye nothing to compare against.
 */
function ChoiceChip({
  option,
  selected,
  onPress,
}: {
  option: ResolvedOption;
  selected: boolean;
  onPress: () => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];

  const art = SPORT_ICONS[option.value] ?? SPORT_ICONS.default;
  const Glyph = art.icon;

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

  // Border and fill cross-fade together on the UI thread, so selection travels
  // between chips rather than one blinking off as another blinks on.
  const chipStyle = useAnimatedStyle(() => ({
    borderColor: interpolateColor(chosen.value, [0, 1], [meter.track, PRIMARY]),
    // Unselected chips are unfilled, which is what separates them from the
    // filled rows the other questions use — two selection styles in one flow
    // have to be told apart at a glance, and the outline does that.
    backgroundColor: interpolateColor(chosen.value, [0, 1], ['transparent', PICKED_FILL[scheme]]),
    transform: [{ scale: 1 - pressed.value * 0.03 }],
  }));

  // The tick only exists once chosen — it grows in rather than occupying a
  // slot, so an unpicked chip stays as short as its label.
  const tickStyle = useAnimatedStyle(() => ({
    opacity: chosen.value,
    width: chosen.value * (CHIP_CHECK + 7),
    transform: [{ scale: 0.7 + chosen.value * 0.3 }],
  }));

  return (
    <AnimatedPressable
      accessibilityRole="checkbox"
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
      style={[styles.chip, chipStyle]}>
      <Glyph size={CHIP_ICON} color={art.color} weight={art.weight ?? 'fill'} />
      <Text style={[styles.chipLabel, { color: colors.foreground }]} numberOfLines={1}>
        {option.label}
      </Text>
      <Animated.View style={[styles.chipTick, tickStyle]}>
        <CheckCircle size={CHIP_CHECK} color={PRIMARY} weight="fill" />
      </Animated.View>
    </AnimatedPressable>
  );
}

/**
 * One answer, on the kit's card.
 *
 * The art is the answer's own: its Fluent emoji, bare at the leading edge with
 * no tile behind it; a step's Hugeicons glyph and accent (the platforms they
 * heard about the app on); the side question's pair of feet; the verdict
 * circles on the foot checks. On the two `peek` questions there is no icon at
 * all, only Walkito peeking in from the bottom edge.
 */
function ChoiceRow({
  option,
  index,
  selected,
  live,
  multi,
  art: artKind,
  calm,
  onPress,
}: {
  option: ResolvedOption;
  index: number;
  selected: boolean;
  live: boolean;
  multi: boolean;
  art: ChoiceArt;
  calm: boolean;
  onPress: () => void;
}) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const reduceMotion = useReducedMotion();
  const t = useT();
  const badge = option.recommended === true ? t('onboarding.schedule.recommended') : null;

  // The pop plays on being picked, never on being let go or on arrival.
  const pop = useSharedValue(1);
  const emojiPop = useSharedValue(1);
  const was = useRef(selected);
  useEffect(() => {
    if (selected && !was.current && !reduceMotion) {
      pop.value = withSequence(
        withTiming(0.97, { duration: 0 }),
        withTiming(1.02, { duration: POP_IN_MS, easing: Easing.out(Easing.quad) }),
        withTiming(1, { duration: POP_OUT_MS, easing: Easing.bezier(0.23, 1, 0.32, 1) }),
      );
      emojiPop.value = withSequence(
        withTiming(calm ? EMOJI_POP.calm : EMOJI_POP.lively, {
          duration: EMOJI_UP_MS,
          easing: Easing.out(Easing.quad),
        }),
        withTiming(1, { duration: EMOJI_DOWN_MS, easing: Easing.bezier(0.23, 1, 0.32, 1) }),
      );
    }
    was.current = selected;
  }, [selected, reduceMotion, calm, pop, emojiPop]);
  const popStyle = useAnimatedStyle(() => ({ transform: [{ scale: pop.value }] }));
  const emojiStyle = useAnimatedStyle(() => ({ transform: [{ scale: emojiPop.value }] }));

  const peeks = artKind === 'peek' && option.icon == null;

  const art = ((): ReactNode => {
    // An option's own glyph is drawn by the card, on its tile.
    if (option.icon != null || peeks) return undefined;
    if (artKind === 'fluent') {
      return option.emoji == null ? undefined : (
        <Animated.View style={emojiStyle}>
          <FluentIcon name={option.emoji} />
        </Animated.View>
      );
    }
    if (artKind === 'side') {
      return (
        <View style={[styles.tile, { backgroundColor: meter.iconTile }]}>
          <FeetGlyph side={option.value as FeetSide} size={ICON + 4} active={PRIMARY} idle={IDLE_FOOT[scheme]} />
        </View>
      );
    }
    const map = artKind === 'sport' ? SPORT_ICONS : VERDICT_ICONS;
    const glyph = map[option.value] ?? map.default;
    const Glyph = glyph.icon;
    // Weight "fill" and the answer's own hue: small, solid, colourful — an
    // outline at this size disappears against the tile.
    return (
      <View style={[styles.tile, { backgroundColor: meter.iconTile }]}>
        <Glyph size={ICON} color={glyph.color} weight={glyph.weight ?? 'fill'} />
      </View>
    );
  })();

  return (
    <Animated.View style={popStyle}>
      <OptionCard3D
        label={option.label}
        caption={option.caption}
        icon={option.icon}
        accent={option.accent}
        art={art}
        peek={peeks ? <PeekMascot index={index} selected={selected} calm={calm} live={live} /> : undefined}
        peekWidth={PEEK_WIDTH}
        selected={selected}
        mode={multi ? 'multi' : 'single'}
        onPress={onPress}
        // The badge stands outside the card, so the card says it too.
        accessibilityLabel={
          badge == null ? undefined : [option.label, option.caption, badge].filter((part) => part != null).join(', ')
        }
      />
      {/* The recommended pick's badge, standing on the card's top edge. */}
      {badge != null && (
        <View
          pointerEvents="none"
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
          style={styles.badge}>
          <Badge label={badge} accent="orange" raised />
        </View>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: 10,
  },
  /** Kit tiles, two to a row (`KitTile` sizes itself to half). Room above
   * for a picked tile's lift. */
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    paddingTop: 6,
  },
  /** Half over the card's top edge, at its trailing end, clear of the card
   * above it in the list's gap. */
  badge: {
    position: 'absolute',
    top: -9,
    right: 16,
  },
  /** The kit's icon tile, for art it draws as given. */
  tile: {
    width: TILE,
    height: TILE,
    borderRadius: 12,
    borderCurve: 'continuous',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    paddingTop: 4,
  },
  chip: {
    height: CHIP_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 13,
    borderRadius: CHIP_HEIGHT / 2,
    borderWidth: 1.5,
  },
  chipTick: {
    alignItems: 'flex-end',
    overflow: 'hidden',
  },
  chipLabel: fonts.semibold(15, -0.2),
});
