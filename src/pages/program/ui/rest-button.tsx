import { useState } from 'react';
import { StyleSheet, Text, type StyleProp, type TextStyle, type ViewStyle } from 'react-native';
import { runOnJS, useAnimatedReaction } from 'react-native-reanimated';

import { useCountdown } from '@/shared/lib/clock';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { useProgram } from '@/shared/lib/program';
import { waitPhrase, waitTime } from '@/shared/lib/wait';
import { PrimaryButton } from '@/shared/ui/primary-button';

/**
 * The wait until the next session, on the plan screen.
 *
 * It used to count twelve hours from the end of the last session, to the
 * second. The rule now is the week's own: the next session opens at midnight
 * on its day (`nextSession` in the program entity), so there is nothing to
 * count to the second and the digits went. What is left is a sentence that
 * changes once a minute — "Next session in 5h 3m" — and in the last minute
 * once a second, which `useCountdown` handles.
 */

/**
 * Whether the plan is on screen.
 *
 * The plan is an overlay that stays mounted under every tab, so a countdown on
 * it would otherwise tick for a screen nobody has opened. Read off the same
 * value the overlay's own gestures use, in the one small component that needs
 * it, so opening the plan re-renders a button and not the whole page.
 */
function usePlanShown(): boolean {
  const program = useProgram();
  const progress = program?.progress;
  // Outside the provider there is no overlay to be hidden behind.
  const [shown, setShown] = useState(progress == null);
  useAnimatedReaction(
    () => (progress == null ? true : progress.value > 0.01),
    (now, was) => {
      if (now !== was) runOnJS(setShown)(now);
    },
    [progress],
  );
  return shown;
}

export type RestButtonProps = {
  /** Epoch milliseconds the next session opens at. */
  unlockAt: number;
  onStart: () => void;
  /** Replaces the default top margin, for a host that spaces its own rows. */
  style?: StyleProp<ViewStyle>;
};

/**
 * The wait, as the button it turns into.
 *
 * Its own component because of the tick: rendering the countdown inside the
 * card would re-render the card — artwork, chips and all — every time a digit
 * moved. Here the tick is owned by the one thing that changes.
 *
 * Disabled rather than absent while the clock runs. A button that appears out
 * of nowhere when the time comes is a button nobody is looking for; one that
 * has been counting down in place is already where the thumb expects it.
 *
 * Always counted, never a weekday: the card around it names the day of the
 * next session on its own line, and saying it twice is the one thing a card
 * this size cannot afford.
 */
export function RestButton({ unlockAt, onStart, style }: RestButtonProps) {
  const t = useT();
  const left = useCountdown(unlockAt, usePlanShown()) ?? 0;
  const ready = left <= 0;

  return (
    <PrimaryButton
      label={ready ? t('pages.plan.start') : t('nextSession.in', { time: waitTime(t, left) })}
      disabled={!ready}
      onPress={onStart}
      style={style ?? styles.button}
    />
  );
}

/**
 * The same wait as a line of text, for a card with no session to start — a
 * rest day. Counted within a day, the weekday beyond it: here nothing else on
 * the card says when.
 */
export function WaitCaption({ at, style }: { at: number; style?: StyleProp<TextStyle> }) {
  const t = useT();
  const language = useLanguage();
  const left = useCountdown(at, usePlanShown()) ?? 0;
  if (left <= 0) return null;
  const phrase = waitPhrase(t, language, at, left);
  return (
    <Text style={style}>
      {phrase.kind === 'in' ? t('nextSession.in', { time: phrase.time }) : t('nextSession.on', { day: phrase.day })}
    </Text>
  );
}

const styles = StyleSheet.create({
  button: { marginTop: 14 },
});
