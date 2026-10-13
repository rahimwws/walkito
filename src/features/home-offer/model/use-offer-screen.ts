import { useEffect, useRef, useState, type MutableRefObject } from 'react';
import { AppState } from 'react-native';

import {
  dismissLastChance,
  notificationsAllowed,
  prepareComebackPush,
  releaseComebackPush,
  scheduleEndsSoonPush,
  sendComebackPush,
  type ComebackDeals,
  type ReadyComeback,
} from '@/entities/notifications';
import {
  OFFERINGS,
  comebackEndsAt,
  markTrialMissed,
  markTrialOfferShown,
  purchases,
  useAccessLapsed,
  useComebackEndsAt,
  useEntitled,
  useOfferStage,
  usePaywallSkipped,
  type Offering,
} from '@/entities/purchase';
import { track } from '@/shared/lib/analytics';
import { useSplashRevealed } from '@/shared/ui/splash';

import { contentFor, type OfferContent, type OfferShelf } from './content';

/**
 * What can put the app in the background without the person leaving the
 * trial offer: a store sheet in flight (Google Play's billing sheet is an
 * activity of its own), and Terms or Privacy opened in the browser from the
 * line under the button (`linkAt`, when that line was last touched).
 */
export type OfferGuard = { busy: boolean; linkAt: number };

/** A trip to the browser from the legal line starts within this of the tap. */
const LINK_GRACE_MS = 5000;

/**
 * When the trial was last left. Two offer screens can be mounted at once (an
 * offer link replacing itself with a second `/offer` over the first), and both
 * hear the same departure: only the first to hear it acts, so one push goes.
 */
let trialLeftAt = 0;
const SAME_DEPARTURE_MS = 2000;

/**
 * Where the screen is: still asking the store, showing an offer, or with
 * nothing to show (the store could not be reached, or answered with no plan).
 */
export type OfferScreenStatus = 'loading' | 'ready' | 'unavailable';

/**
 * Whether the app is in front. Anything but `background` counts: `inactive` is
 * the app still on screen under something of the system's, and a launch that
 * reports `unknown` must not leave the screen empty.
 */
function useInFront(): boolean {
  const [front, setFront] = useState(() => AppState.currentState !== 'background');
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (next) => setFront(next !== 'background'));
    return () => subscription.remove();
  }, []);
  return front;
}

/**
 * The offer screen after "Not now" on the paywall, and what it shows.
 *
 * Only for somebody who skipped the paywall, is not entitled and never was
 * (someone whose subscription ended has the expiry screen instead). It is a
 * hard paywall: this screen, in place of the plans, is all such a person has
 * of the app until they buy. The store is asked for all three offerings at
 * once, so the stage's offer arrives with its prices; it is shown only once
 * there is a plan to show, and a store that could not be reached is asked
 * again the next time the app comes to the foreground (or on "Try again").
 *
 * Shown once the launch splash has gone and while the app is in front (a
 * launch in the background, for Health, must not count the trial as seen).
 * Once shown it stays, whatever happens to the app; access arriving takes the
 * screen away (the root layout's guard), which ends the offer.
 *
 * What is shown is the stage (`entities/purchase`, `skip.ts`): the one-time
 * trial, then the comeback against its real deadline, then the standard plans.
 * Leaving the app with the trial on screen turns it down: the comeback's push
 * goes on the spot (readied while the trial is up) and its 15 minutes start.
 */
export function useOfferScreen(): {
  content: OfferContent | null;
  status: OfferScreenStatus;
  retry: () => void;
  guard: MutableRefObject<OfferGuard>;
} {
  const skipped = usePaywallSkipped();
  const entitled = useEntitled();
  const lapsed = useAccessLapsed();
  const revealed = useSplashRevealed();
  const front = useInFront();
  const stage = useOfferStage();
  const endsAt = useComebackEndsAt();
  const guard = useRef<OfferGuard>({ busy: false, linkAt: 0 });

  const eligible = skipped && !entitled && !lapsed;

  const [shelf, setShelf] = useState<OfferShelf | null>(null);
  /** Every offering failed to arrive on the last ask (offline, an outage). */
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    if (!eligible) return undefined;
    let live = true;
    // Each asked on its own: a missing offering is a fact about the dashboard
    // (null), a failed fetch is worth asking again (`ok: false`).
    const ask = (id: string) =>
      purchases.offering(id).then(
        (found): { found: Offering | null; ok: boolean } => ({ found, ok: true }),
        () => ({ found: null, ok: false }),
      );
    void Promise.all([ask(OFFERINGS.trial), ask(OFFERINGS.offer), ask(OFFERINGS.standard)]).then(
      ([trial, offer, standard]) => {
        if (!live) return;
        // Nothing arrived: keep what an earlier answer gave, if anything.
        if (!trial.ok && !offer.ok && !standard.ok) {
          setFailed(true);
          return;
        }
        setFailed(false);
        setShelf({ trial: trial.found, offer: offer.found, standard: standard.found });
      },
    );
    return () => {
      live = false;
    };
    // The stage is a dependency so a development preview, which moves it,
    // reads the store again (the sample prices may have just been turned on).
  }, [eligible, attempt, stage]);

  // Back in the foreground: ask again. RevenueCat answers from its cache, and a
  // fetch that failed offline gets its second chance here.
  useEffect(() => {
    if (!eligible) return undefined;
    const subscription = AppState.addEventListener('change', (next) => {
      if (next === 'active') setAttempt((n) => n + 1);
    });
    return () => subscription.remove();
  }, [eligible]);

  const retry = () => {
    setFailed(false);
    setShelf(null);
    setAttempt((n) => n + 1);
  };

  const content = shelf != null ? contentFor(stage, shelf, endsAt) : null;
  // `up`: the offer has been shown, and stays on screen from then on. Still
  // drawn once access arrives, so the screen does not empty under the setup
  // screens fading in over it; `kind`, which everything below hangs on, stops
  // at once, so nothing of the trial outlives a purchase.
  const [up, setUp] = useState(false);
  const shown = content != null && (up || (eligible && revealed && front));
  useEffect(() => {
    if (shown && !up) setUp(true);
  }, [shown, up]);
  const kind = eligible && shown && content != null ? content.kind : null;

  useEffect(() => {
    if (kind == null) return;
    track('home_offer_viewed', { stage: kind });
    // From now on, leaving the app ends the one-time offer (`skip.ts` hears
    // it go, and so does the listener below).
    if (kind === 'trial') markTrialOfferShown();
  }, [kind]);

  // The deals the comeback really holds, for the words of its push.
  const year = shelf?.offer?.annual != null;
  const lifetime = shelf?.offer?.lifetime != null;
  const deals = useRef<ComebackDeals>({ year: false, lifetime: false });
  deals.current = { year, lifetime };

  // The comeback push, readied while the trial is up so that leaving sends it
  // on the spot: the permission checked, the words built from the deals the
  // store already gave the screen, the picture copied. Readied again when the
  // deals change and after one has been spent (iOS keeps the picture it took).
  const readyPush = useRef<ReadyComeback | null>(null);
  const [readyRound, setReadyRound] = useState(0);
  useEffect(() => {
    if (kind !== 'trial') return undefined;
    let live = true;
    let mine: ReadyComeback | null = null;
    void prepareComebackPush({ year, lifetime }).then(
      (made) => {
        if (!live) return releaseComebackPush(made);
        mine = made;
        readyPush.current = made;
      },
      () => undefined,
    );
    return () => {
      live = false;
      if (readyPush.current === mine) readyPush.current = null;
      // A no-op for one already sent: iOS has its picture.
      releaseComebackPush(mine);
    };
  }, [kind, year, lifetime, readyRound]);

  // Leaving with the trial up is turning it down: the comeback starts.
  useEffect(() => {
    if (kind !== 'trial') return undefined;
    const subscription = AppState.addEventListener('change', (next) => {
      // Only `background` is leaving. `inactive` is the app still there under
      // something of the system's (Control Centre, Notification Centre, a call,
      // the first moment of the app switcher), and does nothing.
      if (next !== 'background' || guard.current.busy) return;
      if (Date.now() - guard.current.linkAt < LINK_GRACE_MS) return;
      if (Date.now() - trialLeftAt < SAME_DEPARTURE_MS) return;
      trialLeftAt = Date.now();
      // The push before anything else, with nothing awaited ahead of it: the
      // request has left by the time this line returns.
      const made = readyPush.current;
      readyPush.current = null;
      const sending = made != null ? sendComebackPush(made) : null;
      leaveTrial(deals.current, sending);
      if (made != null) setReadyRound((n) => n + 1);
    });
    return () => subscription.remove();
  }, [kind]);

  // Back on the comeback by themselves: its push is no longer news. Only once
  // they are back: the comeback takes over while the app is still on its way
  // out, which is exactly when that push is being delivered.
  useEffect(() => {
    if (kind !== 'comeback') return undefined;
    if (AppState.currentState === 'active') void dismissLastChance();
    const subscription = AppState.addEventListener('change', (next) => {
      if (next === 'active') void dismissLastChance();
    });
    return () => subscription.remove();
  }, [kind]);

  const status: OfferScreenStatus = shown
    ? 'ready'
    : failed || (shelf != null && content == null)
      ? 'unavailable'
      : 'loading';
  return { content: shown ? content : null, status, retry, guard };
}

/**
 * The trial, missed, and the comeback announced.
 *
 * `sending` is the first push, already on its way when it was ready (see the
 * listener above); when it was not (still being readied, or the trial left
 * the moment it arrived), it is readied and sent here, the slower way.
 *
 * `skip.ts` hears the app leave too and ends the trial itself; whichever
 * listener runs first, the second `markTrialMissed` is a no-op and the deadline
 * is the same one. The pushes go only when the comeback offering holds a deal
 * to name, and only with permission: a refused request is not worth a warning.
 */
function leaveTrial(deals: ComebackDeals, sending: Promise<boolean> | null): void {
  markTrialMissed();
  track('trial_offer_missed');
  if (!deals.year && !deals.lifetime) return;
  const first = sending ?? prepareComebackPush(deals).then((made) => (made != null ? sendComebackPush(made) : false));
  void first.then(
    (sent) => {
      if (sent) track('comeback_push_sent', { push: 'last_chance' });
    },
    () => undefined,
  );
  const endsAt = comebackEndsAt();
  if (endsAt == null) return;
  void notificationsAllowed()
    .then((allowed) => (allowed ? scheduleEndsSoonPush({ endsAt }) : false))
    .then(
      (sent) => {
        if (sent) track('comeback_push_sent', { push: 'ends_soon' });
      },
      () => undefined,
    );
}
