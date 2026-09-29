import * as Application from 'expo-application';
import Constants from 'expo-constants';
import * as Updates from 'expo-updates';
import type { ReloadScreenOptions } from 'expo-updates';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AppState, Linking, Platform } from 'react-native';

import { track } from '@/shared/lib/analytics';
import { kv } from '@/shared/lib/storage';

import { markApplying, unmarkApplying } from './applied';
import {
  isSnoozed,
  nextOffer,
  sameOffer,
  snoozeKey,
  type UpdateOffer,
  type UpdatePhase,
} from './decide';
import { prepareHandoffImage, reloadScreenOptions } from './reload-screen';
import { isNewerVersion } from './version';

export type { UpdateOffer, UpdatePhase } from './decide';

/** Asked again no more often than this while the app keeps coming back to the
 * foreground. A check is a network round trip, and a sheet that reappears on
 * every app switch would be a nag. */
const CHECK_EVERY_MS = 30 * 60 * 1000;

/** "Later" holds for this long per offer. */
const SNOOZE_MS = 24 * 60 * 60 * 1000;

/** The id a roll back to the build's own bundle is offered under. */
const ROLLBACK_ID = 'rollback-to-embedded';

/** The development menu's fake offer. */
const PREVIEW_ID = 'preview';
/** How long the preview holds the real native reload screen up, standing in
 * for the restart it does not do. */
const PREVIEW_HOLD_MS = 1200;

const isPreview = (offer: UpdateOffer | null) => offer?.kind === 'ota' && offer.preview === true;

function snoozed(offer: UpdateOffer): boolean {
  return isSnoozed(kv.getNumber(snoozeKey(offer)), Date.now());
}

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

/** A promise with its resolve handed out, for "once this has happened". */
function settleOnce(): { done: Promise<void>; settle: () => void } {
  let settle = () => {};
  const done = new Promise<void>((resolve) => {
    settle = resolve;
  });
  return { done, settle };
}

/** Only the App Store build has a store page to look itself up against. */
function isStoreBuild(): boolean {
  return Constants.expoConfig?.extra?.variant === 'production';
}

/**
 * The App Store's current version of this app, if it is newer than this one.
 *
 * Apple's public lookup endpoint, keyed on the bundle identifier — no key and
 * no SDK. Any failure answers "nothing newer": a flaky network must never be
 * mistaken for an update.
 */
async function storeOffer(): Promise<UpdateOffer | null> {
  if (Platform.OS !== 'ios' || !isStoreBuild()) return null;
  const bundleId = Application.applicationId;
  const current = Application.nativeApplicationVersion;
  if (bundleId == null || current == null) return null;
  try {
    const response = await fetch(
      `https://itunes.apple.com/lookup?bundleId=${encodeURIComponent(bundleId)}&t=${Date.now()}`,
    );
    if (!response.ok) return null;
    const body = (await response.json()) as {
      results?: { version?: string; trackId?: number; trackViewUrl?: string }[];
    };
    const app = body.results?.[0];
    if (app?.version == null || !isNewerVersion(app.version, current)) return null;
    const url =
      app.trackId != null ? `itms-apps://apps.apple.com/app/id${app.trackId}` : app.trackViewUrl;
    if (url == null) return null;
    return { kind: 'store', version: app.version, url };
  } catch {
    return null;
  }
}

/** An update's id as `Updates.updateId` spells it: lowercase. */
function normaliseId(id: unknown): string | null {
  return typeof id === 'string' && id.length > 0 ? id.toLowerCase() : null;
}

let fetching: Promise<string | null> | null = null;

/**
 * Downloads the newest update, one download at a time.
 *
 * Resolves to the id of what is now waiting to be restarted into, or null when
 * there is nothing new or the download failed. Never throws: a failure here is
 * silent by design, and the next check simply tries again.
 */
function fetchUpdate(): Promise<string | null> {
  if (fetching != null) return fetching;
  fetching = (async () => {
    try {
      const result = await Updates.fetchUpdateAsync();
      if (result.isRollBackToEmbedded) return ROLLBACK_ID;
      if (!result.isNew) return null;
      return normaliseId((result.manifest as { id?: unknown } | undefined)?.id) ?? 'latest';
    } catch {
      return null;
    } finally {
      fetching = null;
    }
  })();
  return fetching;
}

export type AppUpdates = {
  /** What to offer now, or null. */
  offer: UpdateOffer | null;
  /** How far an accepted offer has got. */
  phase: UpdatePhase;
  /** 0…1 while an accepted update is still downloading; undefined otherwise. */
  downloadProgress: number | undefined;
  /** Yes: restart into the update (or download it first), or open the App Store. */
  accept: () => void;
  /** "Later" — hidden for a day. Also allowed while a retried download is
   * still running; ignored only once the restart itself has started. */
  dismiss: () => void;
  /**
   * The sheet has covered the screen and is ready to be replaced. Restarts
   * behind a native reload screen drawn in `backgroundColor` — the colour the
   * sheet expanded into, so the two are the same picture.
   */
  handoff: (backgroundColor: string) => void;
  /** Development only: raise the sheet with a fake, ready update. */
  preview: () => void;
};

/**
 * Looks for an update on launch and whenever the app returns to the
 * foreground, downloads it quietly, and only then offers it.
 *
 * Downloading first is what makes the offer honest and the restart instant.
 * By the time the sheet asks, the bytes are on the phone: "Update now" is a
 * restart and nothing else, and "Later" costs nothing either, because
 * expo-updates launches the newest downloaded update on the next cold start
 * whatever the answer was.
 *
 * Two ways an update gets here:
 * - our own check (`checkForUpdateAsync` then `fetchUpdateAsync`), and
 * - the native launch check, which downloads in the background on its own and
 *   is visible through `useUpdates()` as `isUpdatePending`.
 *
 * Mounted once, at the root. `enabled` is off until the user is past
 * onboarding: the first minutes in the app are not the moment to ask them to
 * restart it.
 */
export function useAppUpdates(enabled: boolean, onPreviewRestarted?: () => void): AppUpdates {
  const [offer, setOfferState] = useState<UpdateOffer | null>(null);
  const [phase, setPhaseState] = useState<UpdatePhase>('idle');
  // Mirrors of the two, for callbacks that must stay stable and still read the
  // latest — the sheet is memoised on them.
  const offerRef = useRef(offer);
  const phaseRef = useRef(phase);
  const setOffer = useCallback((next: UpdateOffer | null) => {
    offerRef.current = next;
    setOfferState(next);
  }, []);
  const setPhase = useCallback((next: UpdatePhase) => {
    phaseRef.current = next;
    setPhaseState(next);
  }, []);

  const alive = useRef(true);
  useEffect(() => {
    alive.current = true;
    return () => {
      alive.current = false;
    };
  }, []);

  /** Ids already on the phone, so accepting them skips straight to the restart. */
  const downloaded = useRef(new Set<string>());
  /** Set from the handoff to the restart, so a second tap cannot reload twice. */
  const handingOff = useRef(false);
  const lastCheck = useRef(0);
  const checking = useRef(false);
  /**
   * Settled once this session's first App Store lookup has answered, and its
   * offer (if any) been presented. The native launch check can have an update
   * ready before that lookup returns; it waits on this, so store-first holds
   * from the very first offer instead of being applied by swapping the sheet
   * from under the person — and counting `app_update_offered` twice.
   */
  const [firstStoreLookup] = useState(settleOnce);
  const previewRestarted = useRef(onPreviewRestarted);
  previewRestarted.current = onPreviewRestarted;

  const native = Updates.useUpdates();
  const pendingId = native.isUpdatePending
    ? (normaliseId(native.downloadedUpdate?.updateId) ?? ROLLBACK_ID)
    : null;
  const pendingRef = useRef(pendingId);
  pendingRef.current = pendingId;

  const present = useCallback(
    (found: UpdateOffer) => {
      if (!alive.current) return;
      if (found.kind === 'ota' && found.id === Updates.updateId) return;
      if (snoozed(found)) return;
      const current = offerRef.current;
      const next = nextOffer(current, found, phaseRef.current);
      if (next == null || sameOffer(next, current)) return;
      // A different offer starts over, whatever became of the last one.
      if (phaseRef.current === 'failed') setPhase('idle');
      setOffer(next);
      if (next.kind === 'ota') void prepareHandoffImage();
      track('app_update_offered', { kind: next.kind });
    },
    [setOffer, setPhase],
  );

  // The native launch check found and downloaded one by itself. Offered after
  // the store has had its say; `present` then keeps a store offer on top.
  useEffect(() => {
    if (!enabled || __DEV__ || pendingId == null) return undefined;
    downloaded.current.add(pendingId);
    let cancelled = false;
    void firstStoreLookup.done.then(() => {
      if (!cancelled) present({ kind: 'ota', id: pendingId });
    });
    return () => {
      cancelled = true;
    };
  }, [enabled, pendingId, present, firstStoreLookup]);

  const check = useCallback(async () => {
    if (checking.current || Date.now() - lastCheck.current < CHECK_EVERY_MS) return;
    checking.current = true;
    lastCheck.current = Date.now();
    try {
      // A store build first: when there is one, an update for this binary is
      // an update for a binary that is already out of date.
      const store = await storeOffer();
      if (store != null) present(store);
      firstStoreLookup.settle();
      if (store != null) return;
      // Off in development, where Metro is the update, and in any build without
      // an update URL.
      if (__DEV__ || !Updates.isEnabled) return;
      if (pendingRef.current != null) {
        downloaded.current.add(pendingRef.current);
        present({ kind: 'ota', id: pendingRef.current });
        return;
      }
      const result = await Updates.checkForUpdateAsync().catch(() => null);
      if (result == null || (!result.isAvailable && !result.isRollBackToEmbedded)) return;
      // Downloaded even when this offer is snoozed: that is what lets "Later"
      // promise it will install itself on the next start.
      const id = await fetchUpdate();
      if (id == null) return;
      downloaded.current.add(id);
      present({ kind: 'ota', id });
    } finally {
      checking.current = false;
      // Also here, so nothing that throws above can leave a pending update
      // waiting on it for the rest of the session. Settling twice is a no-op.
      firstStoreLookup.settle();
    }
  }, [present, firstStoreLookup]);

  useEffect(() => {
    if (!enabled) return undefined;
    void check();
    const subscription = AppState.addEventListener('change', (state) => {
      if (state === 'active') void check();
    });
    return () => subscription.remove();
  }, [enabled, check]);

  const dismiss = useCallback(() => {
    // Once the restart has started the screen is on its way to being covered;
    // there is nothing left to back out of. A retried download is different: a
    // slow one must never hold the app hostage behind the sheet. It carries on
    // in the background (its result is dropped, see `accept`), and whatever it
    // finishes installs itself on the next cold start, as the copy promises.
    if (phaseRef.current === 'applying') return;
    const current = offerRef.current;
    if (current == null) return;
    if (!isPreview(current)) kv.set(snoozeKey(current), Date.now() + SNOOZE_MS);
    setOffer(null);
    setPhase('idle');
  }, [setOffer, setPhase]);

  const accept = useCallback(() => {
    const current = offerRef.current;
    const from = phaseRef.current;
    if (current == null || from === 'downloading' || from === 'applying') return;

    if (current.kind === 'store') {
      track('app_update_accepted', { kind: 'store' });
      void Linking.openURL(current.url).catch(() => undefined);
      // Not snoozed: if they come back without updating, the next foreground
      // check is allowed to ask again.
      setOffer(null);
      return;
    }

    // A retry after a failure is the same yes, not a second one.
    if (from === 'idle' && current.preview !== true) {
      track('app_update_accepted', { kind: 'ota' });
    }
    if (downloaded.current.has(current.id)) {
      setPhase('applying');
      return;
    }
    // Only reached by "Try again": everything else is offered already
    // downloaded. The sheet shows the bytes arriving on the button.
    setPhase('downloading');
    void (async () => {
      const id = await fetchUpdate();
      if (!alive.current || offerRef.current !== current) return;
      if (id == null) {
        setPhase('failed');
        return;
      }
      // Possibly newer than the one offered, if another was published in the
      // meantime. The restart launches the newest download either way.
      downloaded.current.add(id);
      downloaded.current.add(current.id);
      setPhase('applying');
    })();
  }, [setOffer, setPhase]);

  const restartPreview = useCallback(
    async (options: ReloadScreenOptions) => {
      // The real native reload screen, with the real options — these two are
      // debug-build-only APIs, which is exactly where a preview runs.
      try {
        await Updates.showReloadScreen({ reloadScreenOptions: options });
      } catch {
        // Not in this binary; the sheet simply resets.
      }
      await wait(PREVIEW_HOLD_MS);
      if (!alive.current) return;
      // Under the cover the sheet goes, as it would with a new bundle.
      setOffer(null);
      setPhase('idle');
      await wait(120);
      try {
        await Updates.hideReloadScreen();
      } catch {
        // As above.
      }
      handingOff.current = false;
      previewRestarted.current?.();
    },
    [setOffer, setPhase],
  );

  const handoff = useCallback(
    (backgroundColor: string) => {
      const current = offerRef.current;
      if (current?.kind !== 'ota' || phaseRef.current !== 'applying' || handingOff.current) return;
      handingOff.current = true;
      void (async () => {
        const options = await reloadScreenOptions(backgroundColor);
        if (current.preview === true) {
          await restartPreview(options);
          return;
        }
        try {
          markApplying();
          await Updates.reloadAsync({ reloadScreenOptions: options });
          // Nothing after this line is promised to run: the bundle is being
          // replaced.
        } catch {
          unmarkApplying();
          handingOff.current = false;
          // Downloaded again on "Try again", in case the copy on the phone is
          // why the restart refused.
          downloaded.current.delete(current.id);
          if (alive.current) setPhase('failed');
        }
      })();
    },
    [restartPreview, setPhase],
  );

  const preview = useCallback(() => {
    if (!__DEV__) return;
    if (offerRef.current != null || handingOff.current) return;
    downloaded.current.add(PREVIEW_ID);
    setPhase('idle');
    setOffer({ kind: 'ota', id: PREVIEW_ID, preview: true });
    void prepareHandoffImage();
  }, [setOffer, setPhase]);

  return {
    offer,
    phase,
    downloadProgress: phase === 'downloading' ? (native.downloadProgress ?? 0) : undefined,
    accept,
    dismiss,
    handoff,
    preview,
  };
}
