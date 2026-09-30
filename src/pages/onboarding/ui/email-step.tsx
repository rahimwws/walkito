import { useEffect, useRef } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

export type EmailStepProps = {
  value: string;
  placeholder: string;
  onChange: (next: string) => void;
  onSubmit: () => void;
};

/**
 * The optional email question: the name step's chromeless field, sized down.
 *
 * Addresses are long, and at the name step's 40pt one would wrap after a dozen
 * characters, so the field is smaller and single-line. Everything else is the
 * same: no box, the placeholder is the label, the keyboard is up on arrival.
 */
export function EmailStep({ value, placeholder, onChange, onSubmit }: EmailStepProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const caret = accents[scheme].orange.fill;
  const input = useRef<TextInput>(null);

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
        autoCapitalize="none"
        autoCorrect={false}
        autoComplete="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        returnKeyType="next"
        maxLength={120}
        style={[styles.input, { color: colors.foreground }]}
      />
    </View>
  );
}

/** Enough to catch a typo before it becomes a bounce; the mail server decides the rest. */
export function looksLikeEmail(text: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(text.trim());
}

const styles = StyleSheet.create({
  wrap: {
    paddingTop: 44,
  },
  input: {
    fontSize: 26,
    lineHeight: 32,
    fontFamily: fonts.bold,
    letterSpacing: -0.5,
    height: 40,
    padding: 0,
  },
});
