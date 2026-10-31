import ArrowLeft01Icon from '@hugeicons/core-free-icons/ArrowLeft01Icon';
import Cancel01Icon from '@hugeicons/core-free-icons/Cancel01Icon';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AppState, Modal, Platform, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  runOnJS,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SafetySheet } from '@/features/safety-check';
import { planSettings, setPlanSettings } from '@/entities/program';
import {
  markRetentionTaken,
  openPlayPause,
  purchases,
  reviewMode,
  type PurchaseResult,
  type Subscription,
} from '@/entities/purchase';
import { meterColors, palette } from '@/shared/config';
import { track, type CancelOffer, type CancelReason } from '@/shared/lib/analytics';
import { useT } from '@/shared/lib/i18n';
import { SETTLE_EASING } from '@/shared/lib/motion';
import { usePaywall } from '@/shared/lib/paywall';
import { reviewNow } from '@/shared/lib/review';
import { useColorScheme } from '@/shared/lib/theme';
import { Button3D } from '@/shared/ui/button-3d';
import { usePassCheckout } from '@/widgets/pass-checkout';

import { writeToUs } from '../lib/write-to-us';
import { NO_OPTIONS, changesToShow, loadCancelOptions, offersFor, type CancelOptions } from '../model/cancel-data';
import { SHORTEST_MINUTES, lighterPlan, type Change } from '../model/cancel-math';
import type { CancelPreview } from '../model/cancel-preview';

import {
  BetterReply,
  BudgetReply,
  DoneScreen,
  NoTimeReply,
  NotHelpingReply,
  PauseReply,
  ReasonsScreen,
  type Outcome,
  type ReplyActions,
  type ReplyProps,
  type StoreOffer,
} from './cancel-screens';

/** Which screen is up: the question, the answer to a reason, or "all set". */
type Stage =
  | { kind: 'reasons' }
  | { kind: 'reply'; reason: CancelReason }
  | { kind: 'done'; reason: CancelReason; outcome: Outcome };

const REASONS: Stage = { kind: 'reasons' };

/** The old screen goes quickly; the new one settles into place. */
const OUT_MS = 160;
const IN_MS = 340;
/** How far the new screen comes up as it arrives. Nothing, with Reduce Motion. */
const RISE = 12;
/** The answer shows as picked for this long before its screen comes. */
const PICK_HOLD_MS = 280;
/** Still waiting on the store this much later: the spinner shows. */
const WAITING_AFTER_MS = 400;
/** The budget offer's Superwall placement is asked for once its screen has
 * settled in, as the paywall's own placements are. */
const PLACEMENT_AFTER_MS = 600;

const UNAVAILABLE: PurchaseResult = { status: 'unavailable' };

const delay = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

function stageKey(stage: Stage): string {
  return stage.kind === 'reasons' ? 'reasons' : `${stage.kind}:${stage.reason}`;
}

export type CancelFlowProps = {
  visible: boolean;
  held: Subscription;
  /** Development only: the pretend subscription and answers (`cancel-preview.ts`). */
  preview: CancelPreview | null;
  /** Closed without cancelling: the close button, a swipe down, "Back to Walkito". */
  onClose: () => void;
  /** "Cancel anyway": the host closes the flow and opens the store's page. */
  onCancelAnyway: () => void;
  /** iOS: the sheet has finished sliding away. */
  onDismissed: () => void;
};

/**
 * Settings → Manage subscription: "Why are you leaving?", then one screen for
 * the answer, with something real in the place of cancelling.
 *
 * - **It doesn't fit my budget**: the 3-month pass at the retention price
 *   (`retention_budget`), one payment and nothing renewing, through the pass
 *   checkout, which ends on "Your 3 months are set" and the way to turn
 *   auto-renewal off. Only for a renewing subscription with no retention
 *   price used and no pass bought in the last year (`budgetPassAllowed`);
 *   anybody else picking it goes straight to the store's own page. Always
 *   shown in review mode. Registers the Superwall placement `cancel_budget`.
 * - **My feet are better**: their own numbers, where the log shows a real
 *   improvement and only then, and a way to leave a review.
 * - **I'm taking a break**: Google Play's pause on Android, a free month on
 *   the App Store.
 * - **It isn't helping, or it hurts**: no discount, ever. A lighter plan, the
 *   "when to see a doctor" check, and a person to write to.
 * - **I don't have time**: 3-minute sessions, and the reminder moved.
 *
 * **Cancelling is one tap away on every screen**: "Cancel anyway" sits in the
 * dock under each of them, never faded, never disabled, and opens the store's
 * own page (Apple's sheet, Google Play's subscription center). Apple's rule
 * for a cancel flow, and the honest one: an offer is made once, plainly, and
 * nobody has to get past it to leave. Never on top of another discount
 * (`retention.ts` in the purchase entity).
 *
 * A page sheet, like the leg map Settings opens; the screens cross-fade within
 * it, the old one out quickly and the new one settling up into place, a fade
 * alone with Reduce Motion. Everything in it is the solid 3D kit, so the fade
 * never passes over a `GlassView`.
 */
export function CancelFlow({ visible, held, preview, onClose, onCancelAnyway, onDismissed }: CancelFlowProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const t = useT();
  const reduced = useReducedMotion();
  const active = useAppActive();

  const [stage, setStage] = useState<Stage>(REASONS);
  const [selected, setSelected] = useState<CancelReason | null>(null);
  const [waiting, setWaiting] = useState(false);
  const [options, setOptions] = useState<CancelOptions | null>(null);
  const [changes, setChanges] = useState<readonly Change[]>([]);
  const [busy, setBusy] = useState<StoreOffer | null>(null);
  const [problem, setProblem] = useState<string | null>(null);
  const [safety, setSafety] = useState(false);
  /** The budget answer's pass is bought through the pass checkout, whose
   * sheets are mounted inside this modal. */
  const checkout = usePassCheckout();
  const paywall = usePaywall();
  const paywallRef = useRef(paywall);
  paywallRef.current = paywall;

  /** The store's answer for this opening, for a reason that needs it. */
  const optionsReady = useRef<Promise<CancelOptions>>(Promise.resolve(NO_OPTIONS));
  /** Counts openings, so a pick made just before a close never moves the next one on. */
  const session = useRef(0);
  const moving = useRef(false);
  const reminderTaken = useRef(false);
  /** A preview records nothing and changes nothing. */
  const quiet = preview != null;

  const opacity = useSharedValue(1);
  const offset = useSharedValue(0);
  const stageStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: offset.value }],
  }));

  // Each opening starts at the question, with the store asked afresh, while
  // the person reads it: by the time a reason is picked the answer is in.
  useEffect(() => {
    if (!visible) return undefined;
    session.current += 1;
    setStage(REASONS);
    setSelected(null);
    setWaiting(false);
    setBusy(null);
    setProblem(null);
    setSafety(false);
    moving.current = false;
    reminderTaken.current = false;
    opacity.value = 1;
    offset.value = 0;
    if (preview != null) {
      setOptions(preview.options);
      setChanges(preview.changes);
      optionsReady.current = Promise.resolve(preview.options);
      if (preview.start != null) {
        // Straight on one answer, past the question (`?previewCancel=budget`).
        setSelected(preview.start);
        setStage({ kind: 'reply', reason: preview.start });
      }
      return undefined;
    }
    track('cancel_flow_opened', { plan: held.period });
    setOptions(null);
    setChanges(changesToShow());
    let live = true;
    const ask = loadCancelOptions(held, reviewMode());
    optionsReady.current = ask;
    void ask.then((next) => {
      if (live) setOptions(next);
    });
    return () => {
      live = false;
    };
    // Keyed on opening alone: the subscription re-read while the flow is up
    // must not start it over.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const arrive = useCallback((next: Stage) => {
    setProblem(null);
    setStage(next);
  }, []);

  /** The current screen fades out; the next is drawn behind the fade. */
  const go = (next: Stage) => {
    if (moving.current) return;
    moving.current = true;
    const rise = reduced ? 0 : RISE;
    opacity.value = withTiming(
      0,
      { duration: OUT_MS, easing: Easing.out(Easing.quad), reduceMotion: ReduceMotion.Never },
      (finished) => {
        if (!finished) return;
        offset.value = rise;
        runOnJS(arrive)(next);
      },
    );
  };

  // The next screen fades in once React has drawn it, so the old one never
  // shows through the start of the fade. Its offers are reported as it lands.
  useEffect(() => {
    if (!moving.current) return;
    moving.current = false;
    opacity.value = withTiming(1, { duration: IN_MS, easing: SETTLE_EASING, reduceMotion: ReduceMotion.Never });
    offset.value = withTiming(0, { duration: IN_MS, easing: SETTLE_EASING, reduceMotion: ReduceMotion.Never });
    if (stage.kind === 'reply' && !quiet) {
      const shown = offersFor(stage.reason, options ?? NO_OPTIONS, planSettings());
      for (const offer of shown) {
        track('cancel_offer_shown', { reason: stage.reason, offer });
      }
      if (shown.includes('pass')) track('pass_offer_view', { placement: 'cancel_budget' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  // The budget offer's Superwall placement, once per showing. With no
  // campaign for it, this screen is the offer.
  const budgetShown = visible && stage.kind === 'reply' && stage.reason === 'budget' && options?.pass != null;
  useEffect(() => {
    if (!budgetShown || quiet) return undefined;
    const timer = setTimeout(() => paywallRef.current.register('cancel_budget'), PLACEMENT_AFTER_MS);
    return () => clearTimeout(timer);
  }, [budgetShown, quiet]);

  const pick = (reason: CancelReason) => {
    if (selected != null || moving.current) return;
    setSelected(reason);
    if (!quiet) track('cancel_reason', { reason });
    const opening = session.current;
    // Only the budget and the break wait on the store; the rest need nothing from it.
    const store = reason === 'budget' || reason === 'pause' ? optionsReady.current : Promise.resolve(NO_OPTIONS);
    const slow = setTimeout(() => setWaiting(true), PICK_HOLD_MS + WAITING_AFTER_MS);
    void Promise.all([store, delay(PICK_HOLD_MS)]).then(([answered]) => {
      clearTimeout(slow);
      setWaiting(false);
      if (session.current !== opening) return;
      // The budget with no pass to offer (not allowed, or none in the store)
      // has nothing to say in the place of cancelling: the store's own page,
      // at once. The review account always sees the screen.
      if (reason === 'budget' && answered.pass == null && !quiet && !reviewMode()) {
        track('cancel_anyway', { reason });
        onCancelAnyway();
        return;
      }
      go({ kind: 'reply', reason });
    });
  };

  const back = () => {
    if (stage.kind !== 'reply' || busy != null || checkout.busy) return;
    void Haptics.selectionAsync();
    setSelected(null);
    go(REASONS);
  };

  const cancelAnyway = () => {
    const reason = stage.kind === 'reasons' ? (selected ?? 'none') : stage.reason;
    if (!quiet) track('cancel_anyway', { reason });
    onCancelAnyway();
  };

  /** Android's back button steps back to the question before it closes. */
  const requestClose = () => {
    if (Platform.OS === 'android' && stage.kind === 'reply') back();
    else onClose();
  };

  const accepted = (reason: CancelReason, offer: CancelOffer) => {
    if (!quiet) track('cancel_offer_accepted', { reason, offer });
  };

  /**
   * The 3-month pass, through the checkout: the store, the server's days, then
   * "Your 3 months are set" with the way to turn this subscription's renewal
   * off. "All set" follows here once the checkout is over, and says so if the
   * subscription was left renewing. Whether it may be offered at all was
   * decided, from the server's record, as the flow opened (`budgetPassAllowed`).
   *
   * The review account holds no store subscription, so the stand-in it
   * manages here is what "Your 3 months are set" speaks of, and the screen
   * can be reached.
   */
  const takePass = (reason: CancelReason, from: CancelOptions) => {
    const plan = from.pass;
    if (plan == null) {
      setProblem(t('purchase.unavailable'));
      return;
    }
    checkout.start(plan, {
      placement: 'cancel_budget',
      renewing: reviewMode() ? held : undefined,
      onPurchased: () => {
        // A retention price taken: no free month on this phone for a year.
        if (!quiet) markRetentionTaken();
        accepted(reason, 'pass');
      },
      onDone: (settled) => {
        go({
          kind: 'done',
          reason,
          outcome: { kind: 'pass', until: settled.window?.expiresAt ?? null, renews: settled.renewing != null },
        });
      },
    });
  };

  const actions: ReplyActions = {
    take: (offer) => {
      if (busy != null || checkout.busy || stage.kind !== 'reply') return;
      const reason = stage.reason;
      const from = options ?? NO_OPTIONS;
      setProblem(null);
      if (offer === 'pass') {
        takePass(reason, from);
        return;
      }
      const deal = from.freeMonth;
      setBusy(offer);
      const buying: Promise<PurchaseResult> = deal == null ? Promise.resolve(UNAVAILABLE) : purchases.buyRetentionOffer(deal);
      void buying.then((result) => {
        setBusy(null);
        if (result.status === 'purchased' || result.status === 'pending') {
          // Waiting on Ask to Buy counts as taken: if it goes through, it is
          // the one offer of the year.
          if (!quiet) markRetentionTaken();
          accepted(reason, offer);
          void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
          const outcome: Outcome = { kind: 'free_month', pending: result.status === 'pending', yearly: from.yearly };
          go({ kind: 'done', reason, outcome });
        } else if (result.status === 'failed') {
          setProblem(result.message);
        } else if (result.status === 'unavailable') {
          setProblem(t('purchase.unavailable'));
        }
        // Cancelled: Apple's sheet was closed, and the person knows.
      });
    },
    restore: () => {
      if (busy != null || checkout.busy) return;
      setProblem(null);
      void purchases.restore().then((result) => {
        if (result.status === 'failed') setProblem(t('offer.restoreFailed'));
        else if (result.status === 'nothing-found') setProblem(t('offer.nothingRestored'));
        // Restored, or no store to ask: nothing to say over the offer.
      });
    },
    playPause: () => {
      if (stage.kind !== 'reply') return;
      accepted(stage.reason, 'pause');
      void openPlayPause(held);
    },
    review: () => {
      if (stage.kind !== 'reply') return;
      accepted(stage.reason, 'review');
      void reviewNow();
    },
    lighter: () => {
      if (stage.kind !== 'reply') return;
      const patch = lighterPlan(planSettings());
      if (patch == null) return;
      if (!quiet) setPlanSettings(patch);
      accepted(stage.reason, 'lighter');
      void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      go({ kind: 'done', reason: stage.reason, outcome: { kind: 'lighter' } });
    },
    doctor: () => {
      void Haptics.selectionAsync();
      setSafety(true);
    },
    write: () => {
      if (stage.kind !== 'reply') return;
      void Haptics.selectionAsync();
      accepted(stage.reason, 'write');
      writeToUs(t);
    },
    shortSessions: () => {
      if (stage.kind !== 'reply') return;
      if (!quiet) setPlanSettings({ defaultMinutes: SHORTEST_MINUTES });
      accepted(stage.reason, 'short_sessions');
      void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      go({ kind: 'done', reason: stage.reason, outcome: { kind: 'short_sessions', minutes: SHORTEST_MINUTES } });
    },
    reminder: (minutes) => {
      if (stage.kind !== 'reply' || quiet) return;
      setPlanSettings({ reminderMinutes: minutes });
      if (reminderTaken.current) return;
      reminderTaken.current = true;
      accepted(stage.reason, 'reminder');
    },
  };

  const live = visible && active && !safety;

  const screen = (() => {
    switch (stage.kind) {
      case 'reasons':
        return <ReasonsScreen selected={selected} waiting={waiting} live={live} onPick={pick} />;
      case 'done':
        return <DoneScreen outcome={stage.outcome} live={live} onBack={onClose} />;
      case 'reply': {
        const from = options ?? NO_OPTIONS;
        const props: ReplyProps = {
          options: from,
          offers: offersFor(stage.reason, from, planSettings()),
          changes,
          busy: busy ?? (checkout.busy ? 'pass' : null),
          problem: problem ?? checkout.notice,
          live,
          on: actions,
        };
        switch (stage.reason) {
          case 'budget':
            return <BudgetReply {...props} />;
          case 'better':
            return <BetterReply {...props} />;
          case 'pause':
            return <PauseReply {...props} />;
          case 'notHelping':
            return <NotHelpingReply {...props} />;
          case 'noTime':
            return <NoTimeReply {...props} />;
        }
      }
    }
  })();

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={requestClose}
      onDismiss={onDismissed}>
      <View style={[styles.root, { backgroundColor: colors.background }]}>
        <View style={[styles.grabber, { backgroundColor: meter.track }]} />
        <View style={styles.header}>
          {stage.kind === 'reply' ? (
            <RoundButton icon={ArrowLeft01Icon} label={t('common.back')} onPress={back} />
          ) : (
            <View style={styles.headerSpace} />
          )}
          <RoundButton icon={Cancel01Icon} label={t('common.close')} onPress={onClose} />
        </View>

        <Animated.View style={[styles.stage, stageStyle]}>
          <ScrollView
            key={stageKey(stage)}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}>
            {screen}
          </ScrollView>
        </Animated.View>

        {/* Outside the fading stage, on every screen: cancelling is never
            more than this one tap away. */}
        <View style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) + 4 }]}>
          <Button3D
            variant="ghost"
            size="md"
            label={t('cancel.anyway')}
            accessibilityHint={t(Platform.OS === 'ios' ? 'cancel.anywayHintIos' : 'cancel.anywayHintAndroid')}
            onPress={cancelAnyway}
            docked
          />
        </View>
      </View>
      {/* Inside this modal, so they rise over the flow rather than under it. */}
      <SafetySheet visible={safety} onClose={() => setSafety(false)} />
      {checkout.sheet}
    </Modal>
  );
}

function RoundButton({ icon, label, onPress }: { icon: IconSvgElement; label: string; onPress: () => void }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      hitSlop={10}
      style={({ pressed }) => [styles.round, { backgroundColor: meter.iconTile }, pressed && styles.pressed]}>
      <HugeiconsIcon icon={icon} size={18} color={colors.foreground} strokeWidth={2.2} />
    </Pressable>
  );
}

/** Whether the app is in front: the mascot stops breathing behind it. */
function useAppActive(): boolean {
  const [active, setActive] = useState(AppState.currentState === 'active');
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (next) => setActive(next === 'active'));
    return () => subscription.remove();
  }, []);
  return active;
}

const ROUND = 36;

const styles = StyleSheet.create({
  root: { flex: 1 },
  grabber: { alignSelf: 'center', width: 40, height: 5, borderRadius: 3, marginTop: 8 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 4,
  },
  headerSpace: { width: ROUND, height: ROUND },
  round: {
    width: ROUND,
    height: ROUND,
    borderRadius: ROUND / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: { opacity: 0.6 },
  stage: { flex: 1 },
  content: { paddingHorizontal: 20, paddingTop: 4, paddingBottom: 24, gap: 16 },
  dock: { paddingHorizontal: 20, paddingTop: 4, alignItems: 'center' },
});
