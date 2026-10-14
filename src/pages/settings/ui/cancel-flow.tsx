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
  nextYearPercent,
  openPlayPause,
  purchases,
  type PurchaseResult,
  type Subscription,
} from '@/entities/purchase';
import { meterColors, palette } from '@/shared/config';
import { track, type CancelOffer, type CancelReason } from '@/shared/lib/analytics';
import { useT } from '@/shared/lib/i18n';
import { SETTLE_EASING } from '@/shared/lib/motion';
import { reviewNow } from '@/shared/lib/review';
import { useColorScheme } from '@/shared/lib/theme';
import { Button3D } from '@/shared/ui/button-3d';

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
 * - **It doesn't fit my budget**: the next year at a lower price (an App Store
 *   promotional offer) on the yearly plan, or the yearly plan to somebody
 *   paying by the month or the week, priced from the store's own strings.
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
 * nobody has to get past it to leave. At most one retention offer a year, and
 * never on top of another discount (`retention.ts` in the purchase entity).
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
      return undefined;
    }
    track('cancel_flow_opened', { plan: held.period });
    setOptions(null);
    setChanges(changesToShow());
    let live = true;
    const ask = loadCancelOptions(held);
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
      for (const offer of offersFor(stage.reason, options ?? NO_OPTIONS, planSettings())) {
        track('cancel_offer_shown', { reason: stage.reason, offer });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  const pick = (reason: CancelReason) => {
    if (selected != null || moving.current) return;
    setSelected(reason);
    if (!quiet) track('cancel_reason', { reason });
    const opening = session.current;
    // Only the budget and the break wait on the store; the rest need nothing from it.
    const store = reason === 'budget' || reason === 'pause' ? optionsReady.current : Promise.resolve(NO_OPTIONS);
    const slow = setTimeout(() => setWaiting(true), PICK_HOLD_MS + WAITING_AFTER_MS);
    void Promise.all([store, delay(PICK_HOLD_MS)]).then(() => {
      clearTimeout(slow);
      setWaiting(false);
      if (session.current !== opening) return;
      go({ kind: 'reply', reason });
    });
  };

  const back = () => {
    if (stage.kind !== 'reply' || busy != null) return;
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

  const buy = (offer: StoreOffer, from: CancelOptions): Promise<PurchaseResult> => {
    if (offer === 'yearly') {
      return from.yearly == null ? Promise.resolve(UNAVAILABLE) : purchases.changePlan(from.yearly, held.productId);
    }
    const deal = offer === 'next_year' ? from.nextYear : from.freeMonth;
    return deal == null ? Promise.resolve(UNAVAILABLE) : purchases.buyRetentionOffer(deal);
  };

  const actions: ReplyActions = {
    take: (offer) => {
      if (busy != null || stage.kind !== 'reply') return;
      const reason = stage.reason;
      const from = options ?? NO_OPTIONS;
      setBusy(offer);
      setProblem(null);
      void buy(offer, from).then((result) => {
        setBusy(null);
        if (result.status === 'purchased' || result.status === 'pending') {
          // Waiting on Ask to Buy counts as taken: if it goes through, it is
          // the one offer of the year.
          if (!quiet) markRetentionTaken();
          accepted(reason, offer);
          void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
          const pending = result.status === 'pending';
          const outcome: Outcome =
            offer === 'next_year'
              ? { kind: 'next_year', percent: from.nextYear != null ? (nextYearPercent(from.nextYear) ?? 0) : 0, pending }
              : offer === 'yearly'
                ? { kind: 'yearly', pending }
                : { kind: 'free_month', pending };
          go({ kind: 'done', reason, outcome });
        } else if (result.status === 'failed') {
          setProblem(result.message);
        } else if (result.status === 'unavailable') {
          setProblem(t('purchase.unavailable'));
        }
        // Cancelled: Apple's sheet was closed, and the person knows.
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
          busy,
          problem,
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
      {/* Inside this modal, so it rises over the flow rather than under it. */}
      <SafetySheet visible={safety} onClose={() => setSafety(false)} />
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
