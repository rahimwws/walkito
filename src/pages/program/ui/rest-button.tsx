import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import { useT } from '@/shared/lib/i18n';
import { PrimaryButton } from '@/shared/ui/primary-button';

export type RestButtonProps = {
  /** Epoch milliseconds the next session opens at. */
  unlockAt: number;
  onStart: () => void;
};

/**
 * "12:00:00" down to "0:00:01", then "Start now".
 *
 * Padded on the minutes and seconds so the digits never reflow — a countdown
 * that changes width every ten seconds twitches, and this one sits on a button
 * whose edges are the steadiest thing on the card.
 *
 * Hours unpadded: "12:00:00" is a wait and "0:04:09" is nearly over, and
 * leading-zero hours make the two look alike at a glance.
 */
function clock(msLeft: number): string {
  const total = Math.max(0, Math.ceil(msLeft / 1000));
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

/**
 * The wait, as the button it turns into.
 *
 * Its own component because of the second hand. The countdown has to re-render
 * every second, and rendering it inside the day list would re-render every card
 * in the block with it — artwork, chips and all — sixty times a minute for a
 * digit. Here the tick is owned by the one thing that changes.
 *
 * Disabled rather than absent while the clock runs. A button that appears out
 * of nowhere when the time comes is a button nobody is looking for; one that
 * has been counting down in place is already where the thumb expects it.
 */
export function RestButton({ unlockAt, onStart }: RestButtonProps) {
  const [now, setNow] = useState(() => Date.now());
  const t = useT();

  useEffect(() => {
    // Stops of its own accord at zero: a timer still firing after the wait is
    // over is a second-by-second re-render of a button that says "Start now"
    // and will go on saying it.
    if (now >= unlockAt) return undefined;
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [now, unlockAt]);

  const left = unlockAt - now;
  const ready = left <= 0;

  return (
    <PrimaryButton
      // The clock itself is notation rather than words — digits and colons read
      // the same in every language the app ships — so only the label it turns
      // into comes from the catalogue.
      label={ready ? t('pages.program.startNow') : clock(left)}
      disabled={!ready}
      onPress={onStart}
      style={styles.button}
    />
  );
}

const styles = StyleSheet.create({
  button: { marginTop: 14 },
});
