import { useEffect, useState } from 'react';

import { OfferSheet } from '@/features/home-offer';
import { usePassEndsAt, usePassWindow, useSubscription, type PassWindow } from '@/entities/purchase';
import { track } from '@/shared/lib/analytics';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { kv } from '@/shared/lib/storage';

import { PlainRow } from './plain-row';

/** The row shows this many days before the pass ends, as the push does. */
const WARN_DAYS = 7;
const DAY_MS = 24 * 60 * 60 * 1000;
/** The local day `pass_expiring_view` was last sent, so it goes once a day. */
const SEEN_KEY = 'home/pass-ending-seen';

function dayKey(now: number): string {
  const day = new Date(now);
  return `${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`;
}

function endingSoon(pass: PassWindow, endsAt: number, now: number): boolean {
  const { startsAt } = pass;
  if (startsAt == null) return false;
  return startsAt <= now && now < endsAt && endsAt - now <= WARN_DAYS * DAY_MS;
}

/**
 * Today's word that a 3-month pass is ending, as one plain row that opens the
 * standard plans (`OfferSheet`), from a week before the end and only when no
 * subscription runs beside the pass. `pass_expiring_view` once per day seen.
 */
export function PassEndingRow({ seen }: { seen: boolean }) {
  const pass = usePassWindow();
  const endsAt = usePassEndsAt();
  if (endsAt == null || !endingSoon(pass, endsAt, Date.now())) return null;
  return <Ending endsAt={endsAt} seen={seen} />;
}

function Ending({ endsAt, seen }: { endsAt: number; seen: boolean }) {
  const t = useT();
  const language = useLanguage();
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

  const date = new Intl.DateTimeFormat(language, { day: 'numeric', month: 'long' })
    .format(new Date(endsAt))
    .replace(/ /g, '\u00a0');

  return (
    <>
      {shown && (
        <PlainRow title={t('pass.ending.title', { date })} detail={t('pass.ending.body')} onPress={() => setOpen(true)} />
      )}
      <OfferSheet visible={open} kind="standard" onClose={() => setOpen(false)} />
    </>
  );
}
