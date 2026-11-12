import Cancel01Icon from '@hugeicons/core-free-icons/Cancel01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { useEffect, useRef } from 'react';
import { Pressable, StyleSheet, Text, View, type LayoutChangeEvent } from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  ReduceMotion,
  runOnJS,
  useAnimatedStyle,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';

import { longDayYesterday, useHealthSignals } from '@/entities/health';
import { todayKey } from '@/entities/program';
import { FREE_PROTOCOL, protocolById } from '@/entities/protocols';
import { fonts, meterColors, palette } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Button3D } from '@/shared/ui/button-3d';
import { Card3D } from '@/shared/ui/card-3d';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import { REPLAY_MASK } from '@/shared/ui/replay-mask';

import { firstLongDayViewOn, hideLongDay, useLongDayState } from '../model/long-day';

/** The card fades in as the room for it opens, as the pass-ending card does. */
const FADE_MS = 240;
const ROOM_MS = 320;
const ROOM_EASING = Easing.bezier(0.33, 1, 0.68, 1);

export type LongDayCardProps = {
  /** Home is this person's own: no first-run tour, no offer wall over it. */
  allowed: boolean;
  /** Home is in front and the splash has gone: a view may be counted. */
  seen: boolean;
  /**
   * The card's height, margin included, held on the UI thread. Home adds it
   * to the check-in's for its `DailyStack`, so today's tasks move down as the
   * card arrives and up as it goes, never a frame behind.
   */
  room: SharedValue<number>;
};

/**
 * The morning after a long day on the feet: "Yesterday you were on your feet
 * for about 9 hours", and one button to three seated minutes of relief (the
 * flare routine, the free one, on its own page like every routine).
 *
 * An observation, worded as one. The hours are an estimate from steps (and a
 * watch's stand hours), so the sentence says "about"; it never says what the
 * day did to the feet, and the routine is offered, not prescribed.
 *
 * Under the check-in and over today's tasks, at most once a day: closing it
 * or opening the routine puts it away until tomorrow. Never without a
 * reading for yesterday, which is also what no Health permission looks like
 * (`longDayYesterday`). `on_feet_card_viewed` once per day it is seen; the
 * hours are never sent anywhere, and the card is masked from recordings.
 */
export function LongDayCard({ allowed, seen, room }: LongDayCardProps) {
  const signals = useHealthSignals();
  const { hiddenOn, devHours } = useLongDayState();
  const today = todayKey();
  const hours = !allowed
    ? null
    : __DEV__ && devHours != null
      ? devHours
      : hiddenOn === today
        ? null
        : longDayYesterday(signals, today);

  // Gone without its own leaving (a new day, the tour armed): no room kept.
  useEffect(() => {
    if (hours == null) room.value = 0;
  }, [hours, room]);

  if (hours == null) return null;
  return <Shown hours={hours} today={today} seen={seen} room={room} />;
}

function Shown({ hours, today, seen, room }: { hours: number; today: string; seen: boolean; room: SharedValue<number> }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const router = useRouter();
  const relief = protocolById(FREE_PROTOCOL);
  /** On its way out: a late layout must not open the room again. */
  const leaving = useRef(false);

  useEffect(() => {
    if (seen && firstLongDayViewOn(today)) track('on_feet_card_viewed');
  }, [seen, today]);

  const onLayout = (event: LayoutChangeEvent) => {
    const height = event.nativeEvent.layout.height;
    // Never zero: a layout made while Home is off screen reports it (see
    // `DailyStack`), and the card would close under the person's eyes.
    if (height < 1 || leaving.current) return;
    room.value = withTiming(height, { duration: ROOM_MS, easing: ROOM_EASING, reduceMotion: ReduceMotion.System });
  };

  /** The room closes, then the day is marked: the tasks rise as it goes. */
  const leave = () => {
    if (leaving.current) return;
    leaving.current = true;
    room.value = withTiming(0, { duration: ROOM_MS, easing: ROOM_EASING, reduceMotion: ReduceMotion.System }, () => {
      runOnJS(hideLongDay)(today);
    });
  };

  const roomStyle = useAnimatedStyle(() => ({ height: room.value }));

  return (
    <Animated.View style={[styles.room, roomStyle]}>
      {/* Measured out of the flow, as the pass-ending card is: laid out in
          the room it would take the room's own height, nothing. */}
      <View style={styles.measure} onLayout={onLayout}>
        <Animated.View entering={FadeIn.duration(FADE_MS).reduceMotion(ReduceMotion.System)} {...REPLAY_MASK}>
          <Card3D material="solid" size="lg" padding={18} style={styles.card} contentStyle={styles.content}>
            <View style={styles.head}>
              <FluentIcon name="foot" size={36} />
              <View style={styles.text}>
                <Text style={[styles.title, { color: colors.foreground }]}>{t('home.longDay.title', { count: hours })}</Text>
                <Text style={[styles.body, { color: meter.caption }]}>{t('home.longDay.body')}</Text>
              </View>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={t('common.close')}
                hitSlop={8}
                onPress={() => {
                  Haptics.selectionAsync();
                  track('on_feet_card_dismissed');
                  leave();
                }}
                style={({ pressed }) => [styles.close, pressed && styles.pressed]}>
                <HugeiconsIcon icon={Cancel01Icon} size={18} color={meter.unit} strokeWidth={2.2} />
              </Pressable>
            </View>
            <Button3D
              size="md"
              label={t('home.longDay.cta', { count: relief.minutes })}
              onPress={() => {
                track('on_feet_card_opened');
                router.push({ pathname: '/routine/[id]', params: { id: relief.id } });
                leave();
              }}
            />
          </Card3D>
        </Animated.View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  room: { overflow: 'hidden' },
  measure: { position: 'absolute', top: 0, left: 0, right: 0 },
  /** The check-in's own gap between its rows, so the card reads as the next
   * of them. */
  card: { marginTop: 12 },
  content: { gap: 14 },
  head: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  text: { flex: 1, gap: 2 },
  title: { ...fonts.heavy(18, -0.3), lineHeight: 23 },
  body: { ...fonts.medium(16), lineHeight: 21 },
  /** 32pt and 8 of slop on every side: a 48pt target in the card's corner. */
  close: { width: 32, height: 32, marginTop: -6, marginRight: -8, alignItems: 'center', justifyContent: 'center' },
  pressed: { opacity: 0.6 },
});
