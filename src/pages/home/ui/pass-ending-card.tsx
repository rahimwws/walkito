import { useEffect, useState, type ReactNode } from 'react';
import { StyleSheet, Text, View, type LayoutChangeEvent } from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { OfferSheet } from '@/features/home-offer';
import { usePassWindow, useSubscription, type PassWindow } from '@/entities/purchase';
import { fonts, meterColors, palette } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { kv } from '@/shared/lib/storage';
import { useColorScheme } from '@/shared/lib/theme';
import { Button3D } from '@/shared/ui/button-3d';
import { Card3D } from '@/shared/ui/card-3d';
import { FluentIcon } from '@/shared/ui/fluent-icon';

/** The card shows this many days before the pass ends, as the push does. */
const WARN_DAYS = 7;
const DAY_MS = 24 * 60 * 60 * 1000;
/** The local day `pass_expiring_view` was last sent, so it goes once a day. */
const SEEN_KEY = 'home/pass-ending-seen';
/** The card fades in as the room for it opens, on the curve Home's
 * `GlideHeight` eases its heights with. */
const FADE_MS = 240;
const ROOM_MS = 320;
const ROOM_EASING = Easing.bezier(0.33, 1, 0.68, 1);

/** Today, on this phone's calendar. */
function dayKey(now: number): string {
  const day = new Date(now);
  return `${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`;
}

/** Whether a pass runs now and ends within `WARN_DAYS`. */
function endingSoon(pass: PassWindow, now: number): boolean {
  const { startsAt, expiresAt } = pass;
  if (startsAt == null || expiresAt == null) return false;
  return startsAt <= now && now < expiresAt && expiresAt - now <= WARN_DAYS * DAY_MS;
}

/**
 * Home's word that a 3-month pass is ending: "Your 3 months end on {date}",
 * and a button that opens the standard plans in a sheet (`OfferSheet`, the
 * plan cards the offer screen uses), from a week before the end.
 *
 * Only when nothing else keeps the app open past that date: no subscription
 * running beside the pass (the store asked only once the pass is ending, so
 * Home does not ask it on every visit). After the end the person meets the
 * expiry screen like anybody whose access ran out; the 7-day push says the
 * same thing from outside the app (`syncExpiryNotice`).
 *
 * `pass_expiring_view` once per day the card is seen.
 *
 * It fades in as the room for it opens (`Arrive`), so Home below it moves
 * down smoothly rather than being pushed.
 */
export function PassEndingCard({ seen }: { seen: boolean }) {
  const pass = usePassWindow();
  const now = Date.now();
  if (!endingSoon(pass, now) || pass.expiresAt == null) return null;
  return <Ending endsAt={pass.expiresAt} seen={seen} />;
}

function Ending({ endsAt, seen }: { endsAt: number; seen: boolean }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const language = useLanguage();
  // `null` once the store has said nothing it bills is held; undefined while
  // it is asked, when the card waits rather than appear and go.
  const held = useSubscription();
  const [open, setOpen] = useState(false);
  const shown = held === null;

  useEffect(() => {
    if (!shown || !seen) return;
    const today = dayKey(Date.now());
    if (kv.getString(SEEN_KEY) === today) return;
    kv.set(SEEN_KEY, today);
    track('pass_expiring_view');
  }, [shown, seen]);

  const date = new Intl.DateTimeFormat(language, { day: 'numeric', month: 'long' }).format(new Date(endsAt));

  return (
    <>
      {shown && (
        <Arrive>
          <Card3D material="solid" size="lg" padding={18} style={styles.card} contentStyle={styles.content}>
            <View style={styles.head}>
              <FluentIcon name="calendar" size={36} />
              <View style={styles.text}>
                <Text style={[styles.title, { color: colors.foreground }]}>{t('pass.ending.title', { date })}</Text>
                <Text style={[styles.body, { color: meter.caption }]}>{t('pass.ending.body')}</Text>
              </View>
            </View>
            <Button3D size="md" label={t('pass.ending.cta')} onPress={() => setOpen(true)} />
          </Card3D>
        </Arrive>
      )}
      <OfferSheet visible={open} kind="standard" onClose={() => setOpen(false)} />
    </>
  );
}

/**
 * The card arriving on Home: it fades in while the room for it opens from
 * nothing to its height, so the Library row below slides down instead of
 * jumping. The card is shown only once the store has answered, well after Home
 * has laid out, which is why it cannot simply appear.
 *
 * The room is a height on the UI thread, eased to whatever the card measures
 * (and eased again if that changes, a language switched), and clips while it
 * opens. It is the card's own, so nothing else on Home has to know it arrived.
 * With Reduce Motion the room opens and the card shows at once.
 */
function Arrive({ children }: { children: ReactNode }) {
  const height = useSharedValue(0);
  const onLayout = (event: LayoutChangeEvent) => {
    height.value = withTiming(event.nativeEvent.layout.height, {
      duration: ROOM_MS,
      easing: ROOM_EASING,
      reduceMotion: ReduceMotion.System,
    });
  };
  const room = useAnimatedStyle(() => ({ height: height.value }));
  return (
    <Animated.View style={[styles.room, room]}>
      <Animated.View entering={FadeIn.duration(FADE_MS).reduceMotion(ReduceMotion.System)} onLayout={onLayout}>
        {children}
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  room: { overflow: 'hidden' },
  card: { marginTop: 28 },
  content: { gap: 14 },
  head: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  text: { flex: 1, gap: 2 },
  title: { ...fonts.heavy(18, -0.3), lineHeight: 23 },
  body: { ...fonts.medium(14), lineHeight: 19 },
});
