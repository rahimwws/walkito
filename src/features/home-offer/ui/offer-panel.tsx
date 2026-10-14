import { useEffect, useMemo, useState, type MutableRefObject } from 'react';
import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { useReducedMotion } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { notificationsPossible } from '@/entities/notifications';
import { expectReturn } from '@/entities/purchase';
import { faces, fonts, meterColors, palette } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Confetti, type ConfettiOrigin } from '@/shared/ui/confetti';
import { premiumRig } from '@/shared/ui/mascot';
import { LegalLinks } from '@/shared/ui/subscription-terms';
import { TypedText } from '@/shared/ui/typed-text';

import type { OfferContent } from '../model/content';
import { firstSlot, viewFor } from '../model/offer-view';
import type { Slot } from '../model/plan-terms';
import type { OfferGuard } from '../model/use-offer-screen';
import {
  TRIAL_REMINDER_DAYS,
  useOfferPurchase,
  type OfferPurchaseOptions,
  type PassSale,
} from '../model/use-offer-purchase';

import { Reveal } from './arrive';
import { DealCard } from './deal-card';
import { BODY_MAX_MS, CONTENT_LEAD_MS, RETURN_LEAD_MS, TITLE_MAX_MS, entranceOf } from './entrance';
import { PEEK_SHOWN, PeekingMascot, PresentingMascot } from './mascots';
import { PillButton } from './pill-button';
import { PlanCard } from './plan-card';
import { DealTabs, PlanTabs } from './plan-tabs';
import { Emphasised } from './rich-text';
import { TypedEmphasised } from './typed-emphasised';

/** The headline's own cap on Dynamic Type. Above it the two lines fade in
 * whole: a typed line is a row of single characters, which cannot carry the
 * cap, and the headline would grow without bound. */
const TITLE_SCALE_CAP = 1.3;

/** The comeback's confetti comes down from across the top of the screen, so
 * it falls past the card on both sides. */
const CONFETTI_FROM: readonly ConfettiOrigin[] = [
  { x: 0.14, y: 0.08 },
  { x: 0.5, y: 0.03 },
  { x: 0.86, y: 0.08 },
];

/**
 * The offer itself, on its own screen after the paywall's "Not now"
 * (`OfferScreen`): the reference's hard overlay. A heavy headline, a line with
 * its key words set heavier, the plan card, one black pill and the promise
 * under it, then the disclosure with Terms, Privacy and Restore purchases.
 *
 * The comeback's card is its own (`DealCard`, after the founder's second
 * reference): dark, the time left and the discount on it, the mascot gripping
 * its top edge, confetti coming down past it as he comes up (once: the pieces
 * fall off the screen and stop), and the plan switch above it in its colours
 * (`DealTabs`).
 *
 * Arrives as one score (`entrance.ts`): the headline types itself, then the
 * line under it, then the card rises with the mascot, the button arrives, and
 * the small print fades in last. Everything is laid out from the first frame,
 * so nothing moves as the parts appear.
 *
 * No close button, by the founder's rule: the way on is buying or restoring.
 * Leaving the app ends the one-time trial and starts the comeback.
 *
 * One mascot at a time: the surprised one peeking over the trial's card, the
 * one gripping the comeback's card, the crown and key beside the plans.
 *
 * The comeback's third card, the 3-month pass, is bought through `pass` (the
 * host's pass checkout), never through the store here: a pass is kept on an
 * account, and the checkout asks for one first.
 */
export function OfferPanel({
  content,
  guard,
  openedAt,
  pass = null,
  topInset,
  purchase,
}: {
  content: OfferContent;
  guard: MutableRefObject<OfferGuard>;
  /** When the screen opened: a panel arriving later (the store answered
   * late, the stage moved on) has its background in place already, and
   * starts at once. */
  openedAt: number;
  /** The host's pass checkout; null where the pass is not sold. */
  pass?: PassSale | null;
  /** The space over the headline, in place of the safe area's: a page sheet
   * starts below the status bar, with its close button in that space. */
  topInset?: number;
  purchase?: OfferPurchaseOptions;
}) {
  const t = useT();
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const reduced = useReducedMotion();
  const { fontScale } = useWindowDimensions();
  const { busy, notice, buy, buyPass, restore } = useOfferPurchase(guard, purchase);
  const [selected, setSelected] = useState<Slot>(() => firstSlot(content));
  const view = viewFor(content, selected, t);

  // "We'll remind you" only where a reminder can arrive: permission granted,
  // or still to be asked (the purchase asks). Refused for good, no promise.
  const trialShown = view.trial != null;
  const [canRemind, setCanRemind] = useState(false);
  useEffect(() => {
    if (!trialShown) return undefined;
    let live = true;
    void notificationsPossible().then((possible) => {
      if (live) setCanRemind(possible);
    });
    return () => {
      live = false;
    };
  }, [trialShown]);

  // Fixed for the panel's life: the delays below are measured from its mount.
  const [lead] = useState(() =>
    reduced ? 0 : Math.max(RETURN_LEAD_MS, CONTENT_LEAD_MS - (Date.now() - openedAt)),
  );
  const typed = !reduced && fontScale <= TITLE_SCALE_CAP;
  const hasTabs = view.tabs != null;
  const entrance = useMemo(
    () => entranceOf({ title: view.title, body: view.body, tabs: hasTabs, lead, reduced, typed }),
    [view.title, view.body, hasTabs, lead, reduced, typed],
  );

  const peek = view.mascot === 'peek';
  const deal = view.card.kind === 'deal' ? view.card : null;
  const passBusy = pass?.busy ?? false;
  const shownNotice = notice ?? pass?.notice ?? null;
  const press = () => {
    if (view.plan.isPass) {
      if (pass != null) buyPass(view.plan, pass);
      return;
    }
    void buy(view.plan, view.trial);
  };
  const choose = (key: string) => {
    const slot = view.tabs?.find((tab) => tab.key === key)?.key;
    if (slot == null) return;
    setSelected(slot);
    track('home_offer_plan_selected', { plan: slot });
  };
  const titleStyle = [styles.title, { color: colors.foreground }];
  const bodyStyle = [styles.body, { color: meter.label }];
  const strongStyle = [faces.bold, { color: colors.foreground }];

  return (
    <View style={styles.fill}>
      {/* Behind the panel, so it falls past the card and never across a price. */}
      {deal != null && !reduced && <Confetti origins={CONFETTI_FROM} size={1.2} delay={entrance.confetti} />}
      <ScrollView
        style={styles.fill}
        contentContainerStyle={[
          styles.scroll,
          { paddingTop: topInset ?? insets.top + 28, paddingBottom: Math.max(insets.bottom, 16) + 8 },
        ]}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerText}>
            {entrance.typed ? (
              <View accessible accessibilityRole="header" accessibilityLabel={view.title}>
                <TypedText
                  text={view.title}
                  style={titleStyle}
                  delay={entrance.title.at}
                  maxDuration={TITLE_MAX_MS}
                />
              </View>
            ) : (
              <Reveal at={entrance.title.at} kind="fade">
                <Text accessibilityRole="header" style={titleStyle} maxFontSizeMultiplier={TITLE_SCALE_CAP}>
                  {view.title}
                </Text>
              </Reveal>
            )}
          </View>
          {view.mascot === 'premium' && (
            <Reveal at={entrance.mascot} gate>
              <PresentingMascot rig={premiumRig} delay={entrance.present} />
            </Reveal>
          )}
        </View>

        {entrance.typed ? (
          <TypedEmphasised
            text={view.body}
            style={bodyStyle}
            strong={strongStyle}
            delay={entrance.body.at}
            maxDuration={BODY_MAX_MS}
          />
        ) : (
          <Reveal at={entrance.body.at} kind="fade">
            <Emphasised text={view.body} style={bodyStyle} strong={strongStyle} />
          </Reveal>
        )}

        {view.tabs != null && (
          <Reveal at={entrance.tabs} gate>
            {deal != null ? (
              <DealTabs tabs={view.tabs} selected={selected} onSelect={choose} />
            ) : (
              <PlanTabs tabs={view.tabs} selected={selected} onSelect={choose} />
            )}
          </Reveal>
        )}

        {/* A peeking mascot is drawn before his card, so the card hides all of
            him below the chin (the trial) or the rim (the comeback). */}
        {deal != null ? (
          <Reveal at={entrance.card} style={styles.dealRoom}>
            <DealCard words={deal} endsAt={view.endsAt} mascotAt={entrance.mascot} boingAt={entrance.present} />
          </Reveal>
        ) : (
          <Reveal at={entrance.card} style={peek ? styles.peekRoom : undefined}>
            {peek && <PeekingMascot delay={entrance.mascot} />}
            {view.card.kind === 'plan' && <PlanCard model={view.card} />}
          </Reveal>
        )}

        <View style={styles.cta}>
          <Reveal at={entrance.cta} kind="pop" gate>
            <PillButton label={view.cta} loading={busy || passBusy} onPress={press} />
          </Reveal>
          {trialShown && canRemind && (
            <Reveal at={entrance.promise} kind="fade">
              <Text style={[styles.promise, { color: meter.label }]} maxFontSizeMultiplier={1.4}>
                {t('homeOffer.trial.reminder', { count: TRIAL_REMINDER_DAYS })}
              </Text>
            </Reveal>
          )}
          {shownNotice != null && (
            <Text
              accessibilityLiveRegion="polite"
              style={[styles.notice, { color: colors.foreground }]}
              maxFontSizeMultiplier={1.4}>
              {shownNotice}
            </Text>
          )}
        </View>

        <Reveal at={entrance.legal} kind="fade" gate style={styles.legal}>
          {view.terms.map((line, index) => (
            <Text key={index} style={[styles.terms, { color: meter.label }]} maxFontSizeMultiplier={1.4}>
              {line}
            </Text>
          ))}
          {/* A touch here may open Terms or Privacy in the browser, which puts
              the app in the background: that is reading, not leaving, for this
              screen's listener and for `skip.ts`'s alike. */}
          <View
            onTouchStart={() => {
              guard.current.linkAt = Date.now();
              expectReturn();
            }}>
            <LegalLinks onRestore={() => void restore()} disabled={busy || passBusy} />
          </View>
        </Reveal>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  fill: { flex: 1 },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    gap: 18,
  },
  header: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  headerText: { flex: 1, gap: 12 },
  title: { ...fonts.heavy(36, -1.1), lineHeight: 40 },
  body: { ...fonts.medium(18, -0.2), lineHeight: 25 },
  /** Room over the card for the head peeking out of it. */
  peekRoom: { marginTop: PEEK_SHOWN - 6 },
  /** The comeback card keeps its own room over itself for the mascot; his
   * head may come a little into the gap above. */
  dealRoom: { marginTop: -8 },
  cta: { gap: 12, marginTop: 4 },
  promise: { ...fonts.medium(14), lineHeight: 19, textAlign: 'center' },
  notice: { ...fonts.semibold(14), lineHeight: 19, textAlign: 'center' },
  legal: { gap: 6 },
  terms: { ...fonts.regular(11), lineHeight: 15, textAlign: 'center' },
});
