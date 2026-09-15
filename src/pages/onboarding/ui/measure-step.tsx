import { useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';
import { AnimatedNumber } from '@/shared/ui/animated-number';

import type { MeasureUnit } from '../model/steps';

const TOGGLE_HEIGHT = 46;
const TOGGLE_PAD = 4;
/** Fixed so the thumb's translate is a plain multiple rather than something
 * that has to wait for a layout pass. */
const ITEM_WIDTH = 100;

const NUMBER_SIZE = 52;
/** Snappy: these digits roll on every keystroke, so the transition has to be
 * finished before the next one starts or the number smears. */
const ROLL_DURATION = 0.25;
const CARET_MS = 530;

export type MeasureStepProps = {
  units: readonly MeasureUnit[];
  /** Currently selected unit's `value`. */
  unit: string;
  /** Field values for the selected unit, keyed by field key. */
  values: Record<string, string>;
  onChangeUnit: (next: string) => void;
  onChangeField: (fieldKey: string, next: string) => void;
};

/**
 * A number question: the figure typed inline at display size, with a unit
 * toggle beneath it.
 *
 * The digits are the app's `AnimatedNumber` — the same rolling treatment the
 * home screen's hero figure uses — rather than the text of the input itself.
 * A `TextInput` renders its own glyphs and there is no hook for animating
 * them, so the input is laid transparently *over* the animated number and does
 * nothing but collect keystrokes and own the keyboard. The caret is drawn by
 * us for the same reason: the real one would sit against invisible text.
 */
export function MeasureStep({
  units,
  unit,
  values,
  onChangeUnit,
  onChangeField,
}: MeasureStepProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const caretColor = accents[scheme].orange.fill;

  const active = units.find((u) => u.value === unit) ?? units[0];
  const refs = useRef<Record<string, TextInput | null>>({});
  const [focused, setFocused] = useState<string | null>(null);

  // Focus the first field on arrival, and again whenever the unit changes —
  // switching ft→cm replaces the fields, and leaving the keyboard pointed at
  // an input that no longer exists dismisses it.
  useEffect(() => {
    const first = active.fields[0]?.key;
    if (first == null) return;
    const timer = setTimeout(() => refs.current[first]?.focus(), 220);
    return () => clearTimeout(timer);
  }, [active]);

  return (
    <View style={styles.wrap}>
      <View style={styles.figure}>
        {active.fields.map((field, i) => {
          const raw = values[field.key] ?? '';
          return (
            <View key={field.key} style={styles.fieldGroup}>
              <Pressable
                onPress={() => refs.current[field.key]?.focus()}
                style={styles.numberWrap}>
                <AnimatedNumber
                  text={raw}
                  value={Number(raw) || 0}
                  color={colors.foreground}
                  fontSize={NUMBER_SIZE}
                  fontFamily={fonts.bold}
                  weight="bold"
                  duration={ROLL_DURATION}
                />
                {focused === field.key && <Caret color={caretColor} />}
                <TextInput
                  ref={(node) => {
                    refs.current[field.key] = node;
                  }}
                  value={raw}
                  onFocus={() => setFocused(field.key)}
                  onBlur={() => setFocused((prev) => (prev === field.key ? null : prev))}
                  onChangeText={(text) => {
                    const digits = text.replace(/[^0-9]/g, '').slice(0, field.maxDigits);
                    onChangeField(field.key, digits);
                    // Hand off to the next field once this one is full, so
                    // "5" then "6" flows without reaching up to tap.
                    const next = active.fields[i + 1];
                    if (next != null && digits.length === field.maxDigits) {
                      refs.current[next.key]?.focus();
                    }
                  }}
                  keyboardType="number-pad"
                  caretHidden
                  maxLength={field.maxDigits}
                  // Transparent and stretched over the number: it owns the
                  // keyboard and the selection, and shows nothing.
                  style={styles.capture}
                />
              </Pressable>
              <Text style={[styles.suffix, { color: meter.label }]}>{field.suffix}</Text>
            </View>
          );
        })}
      </View>

      <View style={styles.toggleRow}>
        <UnitToggle units={units} unit={unit} onChange={onChangeUnit} />
      </View>
    </View>
  );
}

/** The blinking bar after the focused figure. Ours, because the input's own
 * caret would be measured against text nobody can see. */
function Caret({ color }: { color: string }) {
  const blink = useSharedValue(1);

  useEffect(() => {
    blink.value = 1;
    blink.value = withRepeat(
      withTiming(0, { duration: CARET_MS, easing: Easing.steps(2, true), reduceMotion: ReduceMotion.System }),
      -1,
      true,
    );
  }, [blink]);

  const style = useAnimatedStyle(() => ({ opacity: blink.value }));

  return <Animated.View style={[styles.caret, { backgroundColor: color }, style]} />;
}

/** Two-up pill with a sliding thumb, in the app's segmented-control language. */
function UnitToggle({
  units,
  unit,
  onChange,
}: {
  units: readonly MeasureUnit[];
  unit: string;
  onChange: (next: string) => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];

  const index = Math.max(
    units.findIndex((u) => u.value === unit),
    0,
  );

  const position = useDerivedValue(
    () =>
      withTiming(index, {
        duration: 240,
        easing: Easing.out(Easing.cubic),
        reduceMotion: ReduceMotion.System,
      }),
    [index],
  );

  const thumbStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: position.value * ITEM_WIDTH }],
  }));

  return (
    <View style={[styles.toggle, { backgroundColor: meter.track }]}>
      <Animated.View style={[styles.thumb, { backgroundColor: colors.card }, thumbStyle]} />
      {units.map((u) => (
        <Pressable key={u.value} onPress={() => onChange(u.value)} style={styles.toggleItem}>
          <Text
            style={[
              styles.toggleLabel,
              { color: u.value === unit ? colors.foreground : meter.unit },
            ]}>
            {u.label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingTop: 36,
    alignItems: 'center',
  },
  figure: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  fieldGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  numberWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    // Holds the row open while a field is empty, so clearing the last digit
    // doesn't collapse the layout sideways.
    minWidth: 40,
    height: NUMBER_SIZE * 1.2,
    justifyContent: 'center',
  },
  capture: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    color: 'transparent',
    fontSize: NUMBER_SIZE,
    fontFamily: fonts.bold,
    textAlign: 'center',
    padding: 0,
  },
  caret: {
    width: 3,
    height: NUMBER_SIZE * 0.82,
    borderRadius: 2,
    marginLeft: 3,
  },
  suffix: {
    fontSize: 20,
    fontFamily: fonts.medium,
  },
  toggleRow: {
    marginTop: 24,
  },
  toggle: {
    flexDirection: 'row',
    height: TOGGLE_HEIGHT,
    padding: TOGGLE_PAD,
    borderRadius: TOGGLE_HEIGHT / 2,
    borderCurve: 'continuous',
  },
  thumb: {
    position: 'absolute',
    top: TOGGLE_PAD,
    left: TOGGLE_PAD,
    width: ITEM_WIDTH,
    height: TOGGLE_HEIGHT - TOGGLE_PAD * 2,
    borderRadius: (TOGGLE_HEIGHT - TOGGLE_PAD * 2) / 2,
    borderCurve: 'continuous',
  },
  toggleItem: {
    width: ITEM_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleLabel: {
    fontSize: 16,
    fontFamily: fonts.semibold,
  },
});
