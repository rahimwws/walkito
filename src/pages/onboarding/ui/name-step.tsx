import { useEffect, useRef } from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';
import { waveRig } from '@/shared/ui/mascot';

import { SpeakingQuestion } from './speaking-question';

export type NameStepProps = {
  /** The question, said by Walkito from his speech bubble. */
  question: string;
  value: string;
  placeholder: string;
  onChange: (next: string) => void;
  /** Advances the flow from the keyboard's return key. */
  onSubmit: () => void;
  /** The flow is covered (a sheet over it): he holds still. */
  paused?: boolean;
};

const MASCOT = 132;

/**
 * The name question, asked by Walkito himself: he stands in the middle and
 * waves, the question comes out of his speech bubble, and the answer is
 * typed right under it. The first thing the flow asks, so it reads as being
 * greeted rather than as a form; the step draws its own heading for that, and
 * the corner coach stays away from it.
 *
 * The field is chromeless, as before: the placeholder is the label, and what
 * the user types lands exactly where the prompt was.
 */
export function NameStep({ question, value, placeholder, onChange, onSubmit, paused = false }: NameStepProps) {
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
    <SpeakingQuestion question={question} rig={waveRig} state="wave" size={MASCOT} paused={paused}>
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
        textAlign="center"
        style={[styles.input, { color: colors.foreground }]}
      />
    </SpeakingQuestion>
  );
}

const styles = StyleSheet.create({
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
