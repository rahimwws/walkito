import HourglassIcon from '@hugeicons/core-free-icons/HourglassIcon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { useEffect, useState } from 'react';
import { AppState, StyleSheet, Text, View } from 'react-native';

import { fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';

/** `14:59` under an hour, `1:05:09` past one. */
export function clockOf(ms: number): string {
  const total = Math.max(0, Math.floor(ms / 1000));
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  const two = (n: number) => String(n).padStart(2, '0');
  return hours > 0 ? `${hours}:${two(minutes)}:${two(seconds)}` : `${two(minutes)}:${two(seconds)}`;
}

/**
 * The time left to `endsAt`, as a clock, ticking each second.
 *
 * Ticks only while mounted (the overlay is up) and while the app is in front;
 * on the way back it reads the clock again rather than catching up.
 */
function useClock(endsAt: number): string {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    const tick = () => {
      const current = Date.now();
      setNow(current);
      if (endsAt - current > 0) timer = setTimeout(tick, 1000 - (current % 1000) + 5);
    };
    const stop = () => {
      if (timer != null) clearTimeout(timer);
      timer = null;
    };
    tick();
    const subscription = AppState.addEventListener('change', (next) => {
      stop();
      if (next === 'active') tick();
    });
    return () => {
      stop();
      subscription.remove();
    };
  }, [endsAt]);

  return clockOf(endsAt - now);
}

/**
 * The time left on the comeback price, to the second, counted down to the
 * deadline `entities/purchase` stores: the quiet line at the top of the
 * comeback's card, where the reference has its "one-time offer". A real one:
 * when it reaches zero the stage moves on and the overlay shows the ordinary
 * plans.
 *
 * Its own component, so the tick re-renders this line and nothing else.
 */
export function CountdownLine({ endsAt, color }: { endsAt: number; color: string }) {
  const t = useT();
  const time = useClock(endsAt);
  const label = t('homeOffer.comeback.endsIn', { time });
  return (
    <View accessible accessibilityRole="timer" accessibilityLabel={label} style={styles.row}>
      <HugeiconsIcon icon={HourglassIcon} size={19} color={color} strokeWidth={2} />
      <Text style={[styles.label, { color }]} numberOfLines={1} maxFontSizeMultiplier={1.3}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6 },
  /** Tabular figures, so the seconds tick without the line shuffling. */
  label: { ...fonts.bold(19, -0.3), fontVariant: ['tabular-nums'], flexShrink: 1 },
});
