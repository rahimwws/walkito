import * as Application from 'expo-application';
import Constants from 'expo-constants';
import * as Updates from 'expo-updates';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AppState, Linking, Platform } from 'react-native';

import { track, type AppUpdateKind } from '@/shared/lib/analytics';
import { kv } from '@/shared/lib/storage';

import { isNewerVersion } from './version';

/**
 * What there is to update to, if anything.
 *
 * Two different things, and the app has to tell them apart because only one of
 * them can be installed from inside it:
 *
 * - `ota` — an EAS Update for this exact binary. Downloaded and applied here,
 *   with a restart.
 * - `store` — a newer build in the App Store. Native changes cannot arrive over
 *   the air (the runtime fingerprint forbids it; see `app.config.ts`), so the
 *   only honest thing to do is send them to the store page.
 *
 * A store build wins when both are available: the OTA would be for a binary
 * that is already out of date.
 */
export type UpdateOffer =
  | { kind: 'ota'; id: string }
  | { kind: 'store'; version: string; url: string };

/** Asked again no more often than this while the app keeps coming back to the
 * foreground. A check is a network round trip, and a sheet that reappears on
 * every app switch would be a nag. */
const CHECK_EVERY_MS = 30 * 60 * 1000;

/** "Later" holds for this long per offer. */
const SNOOZE_MS = 24 * 60 * 60 * 1000;

const snoozeKey = (offer: UpdateOffer) =>
  `update/snoozed/${offer.kind === 'ota' ? offer.id : offer.version}`;

function snoozed(offer: UpdateOffer): boolean {
  const until = kv.getNumber(snoozeKey(offer));
  return until != null && until > Date.now();
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

/** An EAS Update waiting for this binary, if updates are on in this build. */
async function otaOffer(): Promise<UpdateOffer | null> {
  // Off in development, where Metro is the update, and in any build without
  // an update URL.
  if (__DEV__ || !Updates.isEnabled) return null;
  try {
    const result = await Updates.checkForUpdateAsync();
    if (!result.isAvailable) return null;
    const manifest = result.manifest as { id?: string } | undefined;
    return { kind: 'ota', id: manifest?.id ?? 'latest' };
  } catch {
    return null;
  }
}

export type AppUpdates = {
  /** What to offer now, or null. */
  offer: UpdateOffer | null;
  /** An OTA is downloading. */
  applying: boolean;
  /** The download failed; the sheet says so and lets them try again. */
  failed: boolean;
  /** Install it: download and restart, or open the App Store. */
  accept: () => void;
  /** "Later" — hidden for a day. */
  dismiss: () => void;
};

/**
 * Looks for an update on launch and whenever the app returns to the
 * foreground, and says what it found.
 *
 * Mounted once, at the root. `enabled` is off until the user is past
 * onboarding: the first minutes in the app are not the moment to ask them to
 * restart it.
 */
export function useAppUpdates(enabled: boolean): AppUpdates {
  const [offer, setOffer] = useState<UpdateOffer | null>(null);
  const [applying, setApplying] = useState(false);
  const [failed, setFailed] = useState(false);
  const lastCheck = useRef(0);
  const checking = useRef(false);

  const check = useCallback(async () => {
    if (checking.current || Date.now() - lastCheck.current < CHECK_EVERY_MS) return;
    checking.current = true;
    lastCheck.current = Date.now();
    try {
      const found = (await storeOffer()) ?? (await otaOffer());
      if (found == null || snoozed(found)) return;
      setOffer((current) => {
        if (current == null) track('app_update_offered', { kind: found.kind });
        return found;
      });
    } finally {
      checking.current = false;
    }
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;
    void check();
    const subscription = AppState.addEventListener('change', (state) => {
      if (state === 'active') void check();
    });
    return () => subscription.remove();
  }, [enabled, check]);

  const dismiss = useCallback(() => {
    setOffer((current) => {
      if (current != null) kv.set(snoozeKey(current), Date.now() + SNOOZE_MS);
      return null;
    });
    setFailed(false);
  }, []);

  const accept = useCallback(() => {
    if (offer == null) return;
    track('app_update_accepted', { kind: offer.kind as AppUpdateKind });
    if (offer.kind === 'store') {
      void Linking.openURL(offer.url).catch(() => undefined);
      // Not snoozed: if they come back without updating, the next foreground
      // check is allowed to ask again.
      setOffer(null);
      return;
    }
    setApplying(true);
    setFailed(false);
    void (async () => {
      try {
        const fetched = await Updates.fetchUpdateAsync();
        if (fetched.isNew || fetched.isRollBackToEmbedded) {
          await Updates.reloadAsync();
          return;
        }
        // Nothing new after all — someone else's check already applied it.
        setOffer(null);
      } catch {
        setFailed(true);
      } finally {
        setApplying(false);
      }
    })();
  }, [offer]);

  return { offer, applying, failed, accept, dismiss };
}
