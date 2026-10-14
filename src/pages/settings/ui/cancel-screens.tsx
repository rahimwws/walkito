import { useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { wakeMinutes } from '@/entities/notifications';
import { planSettings, usualStartMinute } from '@/entities/program';
import { meterColors } from '@/shared/config';
import type { CancelOffer, CancelReason } from '@/shared/lib/analytics';
import { useLanguage, useT } from '@/shared/lib/i18n';
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
import { LegalLinks } from '@/shared/ui/subscription-terms';
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

/** The retention offers bought through the store: the free month, and the
 * 3-month pass (through the pass checkout). */
export type StoreOffer = 'pass' | 'free_month';

/** What was taken, for the "all set" screen. */
export type Outcome =
  | {
      kind: 'pass';
      /** When the 3 months end, as the server granted them; null when it
       * had not answered in time. */
      until: number | null;
      /** The subscription still renews beside the pass: "Done" was chosen
       * over "Turn off auto-renewal". */
      renews: boolean;
    }
  | { kind: 'free_month'; pending: boolean }
  | { kind: 'lighter' }
  | { kind: 'short_sessions'; minutes: number };

/** What a screen can do: the flow's handlers. */
export type ReplyActions = {
  take: (offer: StoreOffer) => void;
  /** Restore purchases, beside Terms and Privacy under a store offer. */
  restore: () => void;
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
 * One offer, said once and plainly: the 3-month pass at the retention price,
 * the store's own string, one payment and nothing renewing, with Terms of
 * Use and the Privacy Policy under it, as under every purchase. Shown only
 * where `budgetPassAllowed` allows it (the flow sends anybody else straight
 * to the store's page), so the kind words below it are for the review account
 * when the store had no pass to sell.
 */
export function BudgetReply({ options, offers, busy, problem, live, on }: ReplyProps) {
  const t = useT();

  const pass = offers.includes('pass') ? options.pass : null;
  if (pass != null) {
    return (
      <>
        <Hero rig={giftRig} shot="present" title={t('cancel.budget.title')} live={live} />
        <OfferCard
          art="calendar"
          tone="violet"
          title={t('pass.budget.title')}
          body={t('pass.budget.body', { price: pass.priceString })}
          cta={t('pass.budget.cta', { price: pass.priceString })}
          busy={busy === 'pass'}
          terms={t('pass.budget.terms')}
          problem={problem}
          onPress={() => on.take('pass')}
        />
        <LegalLinks onRestore={on.restore} disabled={busy != null} />
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
  const language = useLanguage();
  const body = (() => {
    switch (outcome.kind) {
      case 'pass':
        return outcome.until != null
          ? t('pass.done.until', {
              date: new Intl.DateTimeFormat(language, { day: 'numeric', month: 'long', year: 'numeric' }).format(
                new Date(outcome.until),
              ),
            })
          : t('pass.done.plain');
      case 'free_month':
        return t('cancel.done.freeMonth');
      case 'lighter':
        return t('cancel.done.lighter');
      case 'short_sessions':
        return t('cancel.done.short', { count: outcome.minutes });
    }
  })();
  const pending = 'pending' in outcome && outcome.pending;
  // Both would be paid for: said plainly, with the way to stop it in the dock.
  const stillRenews = outcome.kind === 'pass' && outcome.renews;
  return (
    <>
      <Hero rig={thumbsUpRig} shot="happy" title={t('cancel.done.title')} body={body} live={live} />
      {pending && <Line>{t('cancel.done.pending')}</Line>}
      {stillRenews && <Line>{t('pass.done.stillRenews')}</Line>}
      <Button3D label={t('cancel.done.back')} onPress={onBack} />
    </>
  );
}

const styles = StyleSheet.create({
  cards: { gap: 10 },
  waiting: { height: 28, alignItems: 'center', justifyContent: 'center' },
});
