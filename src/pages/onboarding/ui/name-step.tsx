import { useEffect, useRef } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

export type NameStepProps = {
  value: string;
  placeholder: string;
  onChange: (next: string) => void;
  /** Advances the flow from the keyboard's return key. */
  onSubmit: () => void;
};

/**
 * The name question: an oversized, chromeless text field.
 *
 * No box, no underline, no label. The placeholder *is* the label — at 40pt it
 * reads as the answer's shape rather than as a hint, so the field needs no
 * decoration to explain itself, and what the user types lands exactly where
 * the prompt was.
 */
export function NameStep({ value, placeholder, onChange, onSubmit }: NameStepProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const caret = accents[scheme].orange.fill;

  const input = useRef<TextInput>(null);

  // Raise the keyboard on arrival — the step exists only to be typed into, so
  // making the user tap the field first is a wasted interaction.
  useEffect(() => {
    const timer = setTimeout(() => input.current?.focus(), 250);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.wrap}>
      <TextInput
        ref={input}
        value={value}
        onChangeText={onChange}
        onSubmitEditing={onSubmit}
        placeholder={placeholder}
        placeholderTextColor={meter.unit}
        selectionColor={caret}
        autoCapitalize="words"
        autoCorrect={false}
        autoComplete="given-name"
        textContentType="givenName"
        returnKeyType="next"
        maxLength={24}
        style={[styles.input, { color: colors.foreground }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingTop: 44,
  },
  input: {
    fontSize: 40,
    lineHeight: 48,
    fontFamily: fonts.bold,
    letterSpacing: -1,
    // Height is pinned rather than left to the line box: an empty field and a
    // filled one must occupy the same space, or the layout jumps on the first
    // keystroke.
    height: 56,
    padding: 0,
  },
});
