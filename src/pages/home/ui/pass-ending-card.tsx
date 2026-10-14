import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
      )}
      <OfferSheet visible={open} kind="standard" onClose={() => setOpen(false)} />
    </>
  );
}

const styles = StyleSheet.create({
  card: { marginTop: 28 },
  content: { gap: 14 },
  head: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  text: { flex: 1, gap: 2 },
  title: { ...fonts.heavy(18, -0.3), lineHeight: 23 },
  body: { ...fonts.medium(14), lineHeight: 19 },
});
