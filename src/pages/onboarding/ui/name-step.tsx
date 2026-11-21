import { useEffect, useRef, type ComponentRef } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

export type NameStepProps = {
  /** The question, as the step's heading. */
  question: string;
  value: string;
  placeholder: string;
  onChange: (next: string) => void;
  /** Advances the flow from the keyboard's return key. */
  onSubmit: () => void;
};

/**
 * The name question: the question, and the answer typed right under it. The
 * step draws its own heading so the field sits close under it.
 *
 * The field is chromeless, as before: the placeholder is the label, and what
 * the user types lands exactly where the prompt was.
 */
export function NameStep({ question, value, placeholder, onChange, onSubmit }: NameStepProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const caret = accents[scheme].orange.fill;

  const input = useRef<ComponentRef<typeof TextInput>>(null);

  // Raise the keyboard on arrival — the step exists only to be typed into, so
  // making the user tap the field first is a wasted interaction.
  useEffect(() => {
    const timer = setTimeout(() => input.current?.focus(), 250);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View>
      <Text accessibilityRole="header" style={[styles.question, { color: colors.foreground }]}>
        {question}
      </Text>
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
  question: {
    ...fonts.bold(30, -0.8),
    lineHeight: 36,
  },
  input: {
    ...fonts.bold(36, -0.8),
    lineHeight: 44,
    // Height is pinned rather than left to the line box: an empty field and a
    // filled one must occupy the same space, or the layout jumps on the first
    // keystroke.
    height: 52,
    padding: 0,
    marginTop: 26,
    alignSelf: 'stretch',
  },
});
