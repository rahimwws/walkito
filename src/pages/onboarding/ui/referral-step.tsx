import { useEffect, useRef } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { REFERRAL_CODE_LENGTH, normalise } from '@/entities/referral';
import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

export type ReferralStepProps = {
  value: string;
  onChange: (next: string) => void;
  /** Advances the flow from the keyboard's return key. */
  onSubmit: () => void;
  /** What came of the last attempt, or null before there has been one. */
  note: string | null;
  /** Whether the note is an outcome to act on rather than a failure. */
  noteGood: boolean;
};

/**
 * The code question: four characters, chromeless, and skippable.
 *
 * Built like the name step — no box, no underline, the placeholder doing the
 * work of a label — because it is the same kind of question and the flow should
 * not change shape for the one screen most people will walk past.
 *
 * What differs is the filtering. Every keystroke goes through `normalise`, so
 * the field physically cannot hold a character the server would reject: no
 * lower case, no look-alikes, no fifth letter. A code typed off a friend's
 * screenshot is the most error-prone input in the app, and the cheapest place
 * to be forgiving is before the request rather than in the message after it.
 */
export function ReferralStep({ value, onChange, onSubmit, note, noteGood }: ReferralStepProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const caret = accents[scheme].orange.fill;
  const good = accents[scheme].teal.fill;

  const input = useRef<TextInput>(null);

  // Raise the keyboard on arrival, as the name step does: the screen exists to
  // be typed into, and making the user tap the field first is a wasted step.
  useEffect(() => {
    const timer = setTimeout(() => input.current?.focus(), 250);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.wrap}>
      <TextInput
        ref={input}
        value={value}
        onChangeText={(next) => onChange(normalise(next))}
        onSubmitEditing={onSubmit}
        placeholder={'—'.repeat(REFERRAL_CODE_LENGTH)}
        placeholderTextColor={meter.unit}
        selectionColor={caret}
        autoCapitalize="characters"
        autoCorrect={false}
        autoComplete="off"
        spellCheck={false}
        returnKeyType="done"
        maxLength={REFERRAL_CODE_LENGTH}
        style={[styles.input, { color: colors.foreground }]}
      />

      {/* Held in the layout whether or not there is anything to say, so the
          field does not jump when an answer arrives under it. */}
      <Text
        style={[styles.note, { color: note == null ? 'transparent' : noteGood ? good : meter.caption }]}>
        {note ?? ' '}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    gap: 14,
  },
  input: {
    fontSize: 44,
    fontFamily: fonts.heavy,
    letterSpacing: 12,
    textAlign: 'center',
    // The tracking is applied to the right of the last character too, which
    // reads as the block sitting left of centre. Half of it back.
    marginLeft: 12,
  },
  note: {
    fontSize: 15,
    fontFamily: fonts.semibold,
    textAlign: 'center',
  },
});
