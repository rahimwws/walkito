import * as Haptics from 'expo-haptics';
import { CheckCircleIcon as CheckCircle } from 'phosphor-react-native';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { PRIMARY, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

import { OPTION_ICONS, SPORT_ICONS } from '../config/option-icons';
import type { ResolvedOption } from '../model/steps';

/** Small on purpose — the reference rows are barely taller than their label,
 * which is what lets five of them sit above the fold without scrolling. */
const HEIGHT = 58;
const RADIUS = 16;
const ICON = 24;
const CHECK = 22;

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

/** Neutral check before selection: a filled disc the same value as the row,
 * so the control reads as present-but-off rather than as a second accent. */
const IDLE_CHECK = { light: '#D3D3D8', dark: '#3A3A3E' } as const;

export type ChoiceStepProps = {
  options: readonly ResolvedOption[];
  selected: readonly string[];
  multi: boolean;
  max?: number;
  /** Which artwork map to read. The sport question uses its own so the glyph
   * that follows the answer through the flow is the sport's, not an answer's. */
  art?: 'option' | 'sport';
  onChange: (next: string[]) => void;
};

/**
 * The answer list.
 *
 * Copied from the reference in structure, not in colour: a compact row, one
 * small filled glyph in the option's own hue on the left, label, and a check
 * disc pinned right. The row surface never changes — selection is carried
 * entirely by that disc turning violet, which is why the list stays calm as
 * you tap down it instead of lighting up like a control panel.
 */
export function ChoiceStep({ options, selected, multi, max, art = 'option', onChange }: ChoiceStepProps) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const t = useT();

  /**
   * The option the cap just pushed off the list, if any.
   *
   * Dropping the oldest silently is worse than refusing the tap: the answer
   * the user made two taps ago disappears from a list they are not looking at,
   * and the only evidence is a disc that quietly went grey somewhere above.
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

  const toggle = (value: string) => {
    Haptics.selectionAsync();
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
      {options.map((option) => (
        <ChoiceRow
          key={option.value}
          option={option}
          selected={selected.includes(option.value)}
          art={art}
          onPress={() => toggle(option.value)}
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
 * clutter to something already unambiguous. The row form needs its disc
 * because full-width rows give the eye nothing to compare against.
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
      <Glyph size={CHIP_ICON} color={art.color} weight="fill" />
      <Text style={[styles.chipLabel, { color: colors.foreground }]} numberOfLines={1}>
        {option.label}
      </Text>
      <Animated.View style={[styles.chipTick, tickStyle]}>
        <CheckCircle size={CHIP_CHECK} color={PRIMARY} weight="fill" />
      </Animated.View>
    </AnimatedPressable>
  );
}

function ChoiceRow({
  option,
  selected,
  art: artKind,
  onPress,
}: {
  option: ResolvedOption;
  selected: boolean;
  art: 'option' | 'sport';
  onPress: () => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];

  const map = artKind === 'sport' ? SPORT_ICONS : OPTION_ICONS;
  const art = map[option.value] ?? map.default;
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

  // Press feedback is a scale, not a colour change: the row's fill is doing
  // one job already (surface) and the check disc is doing the other (state).
  const rowStyle = useAnimatedStyle(() => ({
    transform: [{ scale: 1 - pressed.value * 0.02 }],
  }));

  const checkStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      chosen.value,
      [0, 1],
      [IDLE_CHECK[scheme], PRIMARY],
    ),
  }));

  return (
    <Animated.View style={rowStyle}>
      <Pressable
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
        style={[styles.row, { backgroundColor: colors.card }]}>
        {/* Weight "fill" and the option's own hue: small, solid, colourful —
            an outline at this size disappears against the row. */}
        <Glyph size={ICON} color={art.color} weight="fill" />

        <Text style={[styles.label, { color: colors.foreground }]} numberOfLines={1}>
          {option.label}
        </Text>

        <Animated.View style={[styles.check, checkStyle]}>
          <CheckCircle size={CHECK} color={colors.card} weight="bold" />
        </Animated.View>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: 10,
  },
  row: {
    height: HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingLeft: 14,
    paddingRight: 12,
    borderRadius: RADIUS,
    // Corner smoothing, per the reference — the squircle is what stops a 16pt
    // radius reading as a plain rounded rect.
    borderCurve: 'continuous',
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
  chipLabel: {
    fontSize: 15,
    fontFamily: fonts.semibold,
    letterSpacing: -0.2,
  },
  label: {
    flex: 1,
    fontSize: 16,
    fontFamily: fonts.semibold,
    letterSpacing: -0.2,
  },
  check: {
    width: CHECK,
    height: CHECK,
    borderRadius: CHECK / 2,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
