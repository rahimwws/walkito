import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { OfferSheet } from '@/features/home-offer';
import { usePassEndsAt, usePassWindow, useSubscription, type PassWindow } from '@/entities/purchase';
import { colors, fonts, space } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { kv } from '@/shared/lib/storage';
import { Card } from '@/shared/ui/card';

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

/** Whether a pass runs now and access ends, at `endsAt`, within `WARN_DAYS`. */
function endingSoon(pass: PassWindow, endsAt: number, now: number): boolean {
  const { startsAt } = pass;
  if (startsAt == null) return false;
  return startsAt <= now && now < endsAt && endsAt - now <= WARN_DAYS * DAY_MS;
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
 * A plain row: the whole card opens the plans.
 */
export function PassEndingCard({ seen }: { seen: boolean }) {
  const pass = usePassWindow();
  // Null under access by account or a lifetime purchase, as for the push.
  const endsAt = usePassEndsAt();
  const now = Date.now();
  if (endsAt == null || !endingSoon(pass, endsAt, now)) return null;
  return <Ending endsAt={endsAt} seen={seen} />;
}

function Ending({ endsAt, seen }: { endsAt: number; seen: boolean }) {
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

  // Non-breaking, so the day never wraps away from its month.
  const date = new Intl.DateTimeFormat(language, { day: 'numeric', month: 'long' })
    .format(new Date(endsAt))
    .replace(/ /g, '\u00a0');

  return (
    <>
      {shown && (
        <Card onPress={() => setOpen(true)} style={styles.card} accessibilityHint={t('pass.ending.cta')}>
          <View style={styles.row}>
            <View style={styles.text}>
              <Text style={styles.title}>{t('pass.ending.title', { date })}</Text>
              <Text style={styles.body}>{t('pass.ending.body')}</Text>
              <Text style={styles.cta}>{t('pass.ending.cta')}</Text>
            </View>
            <HugeiconsIcon icon={ArrowRight01Icon} size={20} color={colors.text2} strokeWidth={2} />
          </View>
        </Card>
      )}
      <OfferSheet visible={open} kind="standard" onClose={() => setOpen(false)} />
    </>
  );
}

const styles = StyleSheet.create({
  card: { marginTop: space.section },
  row: { flexDirection: 'row', alignItems: 'center', gap: space.gap },
  text: { flex: 1, gap: 4 },
  title: { ...fonts.semibold(20), color: colors.text },
  body: { ...fonts.regular(19), color: colors.text2 },
  cta: { ...fonts.semibold(17), color: colors.accent, marginTop: 4 },
});
