/**
 * The decisions behind the update sheet, with nothing native in them.
 *
 * Kept apart from the hook so they can be tested under plain bun: which offer
 * wins when two arrive, whether a restart just delivered what it promised, and
 * how a stored flag is read back. Each of these used to be a line inside an
 * effect, which is exactly where a wrong branch goes unnoticed.
 */

/**
 * What there is to update to, if anything.
 *
 * Two different things, and the app has to tell them apart because only one of
 * them can be installed from inside it:
 *
 * - `ota` — an EAS Update for this exact binary, already downloaded by the time
 *   it is offered, so accepting it is a restart and nothing else.
 * - `store` — a newer build in the App Store. Native changes cannot arrive over
 *   the air (the runtime fingerprint forbids it; see `app.config.ts`), so the
 *   only honest thing to do is send them to the store page.
 *
 * `preview` marks the fake offer the development menu raises. It runs the whole
 * sheet and handoff, but never reloads, snoozes or reports anything.
 */
export type UpdateOffer =
  { kind: 'ota'; id: string; preview?: boolean } | { kind: 'store'; version: string; url: string };

/**
 * Where an accepted offer is.
 *
 * - `idle` — offered, not answered.
 * - `downloading` — accepted before the bytes were here. Only reachable by
 *   "Try again" after a failure: a normal offer is made after the download.
 * - `applying` — downloaded; the sheet is playing its way into the restart.
 * - `failed` — the download or the restart itself failed after they said yes.
 */
export type UpdatePhase = 'idle' | 'downloading' | 'applying' | 'failed';

/**
 * The offer to show once `found` turns up while `current` is on screen.
 *
 * A store build beats an update over the air: the OTA would be for a binary
 * that is already out of date. Nothing replaces an offer the person has already
 * said yes to — swapping the sheet from under a running download or restart
 * would be the one thing worse than not updating.
 */
export function nextOffer(
  current: UpdateOffer | null,
  found: UpdateOffer,
  phase: UpdatePhase,
): UpdateOffer | null {
  if (current == null) return found;
  if (phase === 'downloading' || phase === 'applying') return current;
  if (current.kind === 'ota' && current.preview === true) return current;
  if (current.kind === 'store') {
    // A newer store version replaces an older one; an OTA never replaces it.
    return found.kind === 'store' && found.version !== current.version ? found : current;
  }
  if (found.kind === 'store') return found;
  return found.id === current.id ? current : found;
}

/** Whether `a` and `b` are the same offer, so the sheet has nothing to redraw. */
export function sameOffer(a: UpdateOffer | null, b: UpdateOffer | null): boolean {
  if (a == null || b == null) return a === b;
  if (a.kind === 'ota' && b.kind === 'ota') return a.id === b.id && a.preview === b.preview;
  if (a.kind === 'store' && b.kind === 'store') return a.version === b.version;
  return false;
}

/** The key "Later" is stored under — per offer, so a newer one can still ask. */
export function snoozeKey(offer: UpdateOffer): string {
  return `update/snoozed/${offer.kind === 'ota' ? offer.id : offer.version}`;
}

/** Whether a stored "Later" still holds at `now`. */
export function isSnoozed(until: number | undefined, now: number): boolean {
  return until != null && until > now;
}

// ── After the restart ───────────────────────────────────────────────────────

/**
 * Written just before an over-the-air restart: which update was running when
 * the person said yes, and when.
 *
 * `from` is `Updates.updateId`, or `'embedded'` for the build's own bundle —
 * which has no id — so a restart out of the embedded bundle can still be told
 * apart from one that went nowhere.
 */
export type AppliedFlag = { from: string; at: number };

/** Past this, a leftover flag describes some other launch and says nothing. */
export const APPLIED_FRESH_MS = 10 * 60 * 1000;

/** Reads the stored flag back. Anything malformed is treated as no flag. */
export function parseAppliedFlag(raw: string | undefined): AppliedFlag | null {
  if (raw == null) return null;
  try {
    const value = JSON.parse(raw) as unknown;
    if (typeof value !== 'object' || value == null) return null;
    const { from, at } = value as { from?: unknown; at?: unknown };
    if (typeof from !== 'string' || from.length === 0) return null;
    if (typeof at !== 'number' || !Number.isFinite(at)) return null;
    return { from, at };
  } catch {
    return null;
  }
}

/**
 * What the first launch after a restart should do with the flag.
 *
 * - `confirm` — the running update is not the one we left, so the restart
 *   delivered it: say so, then clear the flag.
 * - `clear` — the flag is stale, from the future, or the same update came back
 *   up (the new one failed to launch and expo-updates fell back): clear it and
 *   say nothing. Congratulating somebody on an update they did not get is worse
 *   than silence.
 * - `none` — there is no flag.
 *
 * `emergencyLaunch` is `Updates.isEmergencyLaunch`: the update failed to load so
 * badly that expo-updates started the build's own bundle instead. The running id
 * has changed then too, but backwards, so a change alone is not proof.
 */
export function confirmationFor(
  flag: AppliedFlag | null,
  runningId: string,
  now: number,
  emergencyLaunch = false,
): 'confirm' | 'clear' | 'none' {
  if (flag == null) return 'none';
  if (emergencyLaunch) return 'clear';
  const age = now - flag.at;
  // A little slack the other way: the clock may have been corrected between
  // the write and this read.
  if (age > APPLIED_FRESH_MS || age < -60 * 1000) return 'clear';
  return flag.from === runningId ? 'clear' : 'confirm';
}
