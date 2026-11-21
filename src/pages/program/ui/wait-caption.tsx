import { useState } from 'react';
import { Text, type StyleProp, type TextStyle } from 'react-native';
import { runOnJS, useAnimatedReaction } from 'react-native-reanimated';

import { useCountdown } from '@/shared/lib/clock';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { useProgram } from '@/shared/lib/program';
import { waitPhrase, waitTime } from '@/shared/lib/wait';

/**
 * The waits until the next session, on the plan screen.
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
 * it, so opening the plan re-renders a line and not the whole page.
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

/**
 * The wait as a line of text, for a card with no session to start — a rest
 * day. Counted within a day, the weekday beyond it: here nothing else on the
 * card says when. Its own component because of the tick: the countdown
 * re-renders one line, not the card.
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

/**
 * When tomorrow's session opens, for the card that names it: "Opens in 1h
 * 50m". Always counted, never a weekday: the card says "Tomorrow" over it, and
 * the wait to tomorrow's midnight is never more than a day (a clock-change
 * night's extra hour still reads as hours). Nothing once it has opened, which
 * is the moment the page moves on to the new day and the card goes.
 *
 * Its own component for the same reason as the others here: the tick
 * re-renders one line, not the card.
 */
export function OpensCaption({ at, style }: { at: number; style?: StyleProp<TextStyle> }) {
  const t = useT();
  const left = useCountdown(at, usePlanShown()) ?? 0;
  if (left <= 0) return null;
  return <Text style={style}>{t('pages.plan.opensIn', { time: waitTime(t, left) })}</Text>;
}
