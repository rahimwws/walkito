import { useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { wakeMinutes } from '@/entities/notifications';
import { planSettings, usualStartMinute } from '@/entities/program';
import { annualSavingPercent, discountPercent, nextYearPercent, type Plan } from '@/entities/purchase';
import { meterColors } from '@/shared/config';
import type { CancelOffer, CancelReason } from '@/shared/lib/analytics';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Button3D } from '@/shared/ui/button-3d';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import {
  giftRig,
  heartRig,
  reminderRig,
  sleepingRig,
  thinkingRig,
  thumbsUpRig,
  trophyRig,
} from '@/shared/ui/mascot';
import { OptionCard3D } from '@/shared/ui/option-card-3d';
import { TimePicker } from '@/shared/ui/time-picker';

import { CANCEL_REASONS } from '../config/cancel-reasons';
import type { CancelOptions } from '../model/cancel-data';
import { SHORTEST_MINUTES, type Change } from '../model/cancel-math';

import { ActionCard, ChangesCard, Hero, Line, OfferCard } from './cancel-parts';

/**
 * The cancel flow's screens: the question, one answer per reason, and the
 * "all set" after something was taken. Each draws only what `offersFor`
 * (`model/cancel-data.ts`) says its reason offers, so a screen and the
 * `cancel_offer_shown` it reports cannot disagree; "Cancel anyway" is not
 * here but in the flow's dock, on every one of them.
 *
 * The words are careful on purpose. Nothing here says the plan will fix
 * anything, nothing hurries anybody, and every price is the store's own
 * string: the offers are made once, plainly, and cancelling stays one tap
 * away.
 */

/** The retention offers bought through the store. */
export type StoreOffer = 'next_year' | 'yearly' | 'free_month';

/** What was taken, for the "all set" screen. */
export type Outcome =
  | { kind: 'next_year'; percent: number; pending: boolean }
  | { kind: 'yearly'; pending: boolean }
  | { kind: 'free_month'; pending: boolean }
  | { kind: 'lighter' }
  | { kind: 'short_sessions'; minutes: number };

/** What a screen can do: the flow's handlers. */
export type ReplyActions = {
  take: (offer: StoreOffer) => void;
  playPause: () => void;
  review: () => void;
  lighter: () => void;
  doctor: () => void;
  write: () => void;
  shortSessions: () => void;
  reminder: (minutes: number) => void;
};

export type ReplyProps = {
  options: CancelOptions;
  /** `offersFor` this reason: what to draw. */
  offers: readonly CancelOffer[];
  changes: readonly Change[];
  /** The store offer whose purchase is in flight. */
  busy: StoreOffer | null;
  /** The store's refusal, in the app's words. */
  problem: string | null;
  live: boolean;
  on: ReplyActions;
};

// ── The question ─────────────────────────────────────────────────────────────

export function ReasonsScreen({
  selected,
  waiting,
  live,
  onPick,
}: {
  selected: CancelReason | null;
  /** Picked, and the store has not answered yet: a spinner in a row kept for
   * it, so nothing moves when it appears. */
  waiting: boolean;
  live: boolean;
  onPick: (reason: CancelReason) => void;
}) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const t = useT();
  return (
    <>
      <Hero rig={thinkingRig} state="thinking" title={t('cancel.title')} body={t('cancel.sub')} live={live} />
      <View style={styles.cards} accessibilityRole="radiogroup">
        {CANCEL_REASONS.map((reason) => (
          <OptionCard3D
            key={reason.id}
            label={t(reason.label)}
            art={<FluentIcon name={reason.art} />}
            selected={selected === reason.id}
            mode="single"
            onPress={() => onPick(reason.id)}
          />
        ))}
      </View>
      <View style={styles.waiting}>{waiting && <ActivityIndicator color={meter.caption} />}</View>
    </>
  );
}

// ── "It doesn't fit my budget" ───────────────────────────────────────────────

/**
 * What the yearly plan saves against the plan held, from the two store
 * prices: twelve months of the monthly one, or a year of the weekly one.
 * Null when either price is missing, they are in different currencies, or
 * nothing is saved.
 */
function savingOf(yearly: Plan, current: Plan | null): { percent: number; weekly: boolean } | null {
  if (current == null || current.product.currencyCode !== yearly.product.currencyCode) return null;
  if (current.period === 'monthly') {
    const percent = discountPercent(yearly.product.price, current.product.price * 12);
    return percent == null ? null : { percent, weekly: false };
  }
  if (current.period === 'weekly') {
    const percent = annualSavingPercent(yearly.product.price, current.product.price);
    return percent == null ? null : { percent, weekly: true };
  }
  return null;
}

export function BudgetReply({ options, offers, busy, problem, live, on }: ReplyProps) {
  const t = useT();

  const nextYear = offers.includes('next_year') ? options.nextYear : null;
  const percent = nextYear != null ? nextYearPercent(nextYear) : null;
  if (nextYear != null && percent != null) {
    return (
      <>
        <Hero rig={giftRig} shot="present" title={t('cancel.budget.title')} live={live} />
        <OfferCard
          art="gift"
          tone="violet"
          title={t('cancel.budget.nextYearTitle', { percent })}
          body={t('cancel.budget.nextYearBody', { price: nextYear.priceString, regular: nextYear.regularPriceString })}
          cta={t('cancel.budget.nextYearCta', { percent })}
          busy={busy === 'next_year'}
          terms={t('cancel.budget.nextYearTerms')}
          problem={problem}
          onPress={() => on.take('next_year')}
        />
      </>
    );
  }

  const yearly = offers.includes('yearly') ? options.yearly : null;
  if (yearly != null) {
    const saving = savingOf(yearly, options.current);
    return (
      <>
        <Hero rig={giftRig} shot="present" title={t('cancel.budget.title')} live={live} />
        <OfferCard
          art="calendar"
          tone="violet"
          title={t('cancel.budget.yearlyTitle')}
          body={
            yearly.pricePerMonthString != null
              ? t('cancel.budget.yearlyBody', { price: yearly.priceString, perMonth: yearly.pricePerMonthString })
              : t('cancel.budget.yearlyBodyPlain', { price: yearly.priceString })
          }
          note={
            saving == null
              ? undefined
              : t(saving.weekly ? 'cancel.budget.savingWeekly' : 'cancel.budget.savingMonthly', { percent: saving.percent })
          }
          cta={t('cancel.budget.yearlyCta')}
          busy={busy === 'yearly'}
          terms={t('cancel.budget.yearlyTerms')}
          problem={problem}
          onPress={() => on.take('yearly')}
        />
      </>
    );
  }

  return <Hero rig={heartRig} shot="nod" title={t('cancel.budget.noneTitle')} body={t('cancel.budget.none')} live={live} />;
}

// ── "My feet are better" ─────────────────────────────────────────────────────

export function BetterReply({ changes, live, on }: ReplyProps) {
  const t = useT();
  const proud = changes.length > 0;
  return (
    <>
      <Hero
        rig={proud ? trophyRig : thumbsUpRig}
        shot={proud ? 'cheer' : 'happy'}
        title={t('cancel.better.title')}
        body={t(proud ? 'cancel.better.body' : 'cancel.better.plain')}
        live={live}
      />
      {proud && <ChangesCard changes={changes} />}
      <Line>{t('cancel.better.reviewAsk')}</Line>
      <Button3D label={t('cancel.better.review')} onPress={on.review} />
    </>
  );
}

// ── "I'm taking a break" ─────────────────────────────────────────────────────

export function PauseReply({ options, offers, busy, problem, live, on }: ReplyProps) {
  const t = useT();

  const freeMonth = offers.includes('free_month') ? options.freeMonth : null;
  if (freeMonth != null) {
    return (
      <>
        <Hero rig={sleepingRig} title={t('cancel.pause.title')} live={live} />
        <OfferCard
          art="hotBeverage"
          tone="teal"
          title={t('cancel.pause.freeMonthTitle')}
          body={t('cancel.pause.freeMonthBody')}
          cta={t('cancel.pause.freeMonthCta')}
          busy={busy === 'free_month'}
          terms={t('cancel.pause.freeMonthTerms')}
          problem={problem}
          onPress={() => on.take('free_month')}
        />
      </>
    );
  }

  if (offers.includes('pause')) {
    return (
      <>
        <Hero rig={sleepingRig} title={t('cancel.pause.title')} live={live} />
        <OfferCard
          art="hotBeverage"
          tone="teal"
          title={t('cancel.pause.playTitle')}
          body={t('cancel.pause.playBody')}
          cta={t('cancel.pause.playCta')}
          busy={false}
          problem={null}
          onPress={on.playPause}
        />
      </>
    );
  }

  return <Hero rig={sleepingRig} title={t('cancel.pause.title')} body={t('cancel.pause.none')} live={live} />;
}

// ── "It isn't helping, or it hurts" ──────────────────────────────────────────

/** No discount here, ever: somebody it is not helping is offered help, not a
 * lower price for more of the same. */
export function NotHelpingReply({ offers, live, on }: ReplyProps) {
  const t = useT();
  return (
    <>
      <Hero rig={heartRig} shot="nod" title={t('cancel.notHelping.title')} body={t('cancel.notHelping.body')} live={live} />
      <View style={styles.cards}>
        {offers.includes('lighter') ? (
          <ActionCard
            art="feather"
            title={t('cancel.notHelping.lighter')}
            caption={t('cancel.notHelping.lighterCaption')}
            onPress={on.lighter}
          />
        ) : (
          <Line>{t('cancel.notHelping.lightest')}</Line>
        )}
        <ActionCard
          art="healthWorker"
          title={t('cancel.notHelping.doctor')}
          caption={t('cancel.notHelping.doctorCaption')}
          onPress={on.doctor}
        />
        <ActionCard
          art="heart"
          title={t('cancel.notHelping.write')}
          caption={t('cancel.notHelping.writeCaption')}
          onPress={on.write}
        />
      </View>
    </>
  );
}

// ── "I don't have time" ──────────────────────────────────────────────────────

/** The reminder as Settings shows it: set by hand, or the habit, or a
 * quarter of an hour after waking before there is one. */
function reminderNow(): number {
  return planSettings().reminderMinutes ?? usualStartMinute() ?? wakeMinutes() + 15;
}

export function NoTimeReply({ offers, live, on }: ReplyProps) {
  const t = useT();
  // Held here, so the picker follows the finger at once; the flow writes it.
  const [at, setAt] = useState(reminderNow);
  const change = (minutes: number) => {
    setAt(minutes);
    on.reminder(minutes);
  };
  return (
    <>
      <Hero
        rig={reminderRig}
        shot="wave"
        title={t('cancel.noTime.title')}
        body={t('cancel.noTime.body', { count: SHORTEST_MINUTES })}
        live={live}
      />
      <View style={styles.cards}>
        {offers.includes('short_sessions') ? (
          <ActionCard
            art="bolt"
            title={t('cancel.noTime.short', { count: SHORTEST_MINUTES })}
            caption={t('cancel.noTime.shortCaption')}
            onPress={on.shortSessions}
          />
        ) : (
          <Line>{t('cancel.noTime.already')}</Line>
        )}
        <ActionCard
          art="timer"
          title={t('cancel.noTime.reminder')}
          caption={t('cancel.noTime.reminderCaption')}
          trailing={<TimePicker minutes={at} onChange={change} />}
        />
      </View>
    </>
  );
}

// ── All set ──────────────────────────────────────────────────────────────────

export function DoneScreen({ outcome, live, onBack }: { outcome: Outcome; live: boolean; onBack: () => void }) {
  const t = useT();
  const body = (() => {
    switch (outcome.kind) {
      case 'next_year':
        return t('cancel.done.nextYear', { percent: outcome.percent });
      case 'yearly':
        return t('cancel.done.yearly');
      case 'free_month':
        return t('cancel.done.freeMonth');
      case 'lighter':
        return t('cancel.done.lighter');
      case 'short_sessions':
        return t('cancel.done.short', { count: outcome.minutes });
    }
  })();
  const pending = 'pending' in outcome && outcome.pending;
  return (
    <>
      <Hero rig={thumbsUpRig} shot="happy" title={t('cancel.done.title')} body={body} live={live} />
      {pending && <Line>{t('cancel.done.pending')}</Line>}
      <Button3D label={t('cancel.done.back')} onPress={onBack} />
    </>
  );
}

const styles = StyleSheet.create({
  cards: { gap: 10 },
  waiting: { height: 28, alignItems: 'center', justifyContent: 'center' },
});
