import { useSyncExternalStore } from 'react';

import { kv } from '@/shared/lib/storage';
import { currentUserId, hasBackend, supabase } from '@/shared/lib/supabase';

/**
 * What an invite is worth, on both sides of it.
 *
 * One number, here, because it appears in three places — the code sheet, the
 * onboarding step and the paywall — and three copies of "90" is three chances
 * for the offer to say one thing and the charge to be another.
 */
export const REFERRAL_DISCOUNT_PERCENT = 90;

/** How long a code is, for the input to size and validate itself. */
export const REFERRAL_CODE_LENGTH = 4;

/**
 * The alphabet the server generates from, mirrored for the client's own
 * filtering. Look-alikes are out: this code is read off one screen and typed
 * into another, usually from a photo.
 */
const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

/** Everything the app knows about the user's place in the invite graph. */
export type ReferralStatus = {
  /** The user's own code, or null before it has been claimed. */
  code: string | null;
  /** The code they were invited with, if they were. */
  redeemedCode: string | null;
  /** How many people have used their code. */
  invites: number;
  /** Whether the discount applies. Decided by the server, never here. */
  discounted: boolean;
};

/**
 * What came of trying to redeem a code.
 *
 * Every one of these except `failed` is an ordinary thing a person can do, so
 * they are outcomes rather than errors — the screen says which happened and
 * lets them try again.
 */
export type RedeemResult =
  | 'ok'
  /** No such code. */
  | 'unknown'
  /** Their own code. */
  | 'own'
  /** They have already been invited once. */
  | 'already'
  /** This build has no backend. */
  | 'unavailable'
  /** The network, or the server, said no. */
  | 'failed';

const CACHE_KEY = 'referral/status';

const EMPTY: ReferralStatus = {
  code: null,
  redeemedCode: null,
  invites: 0,
  discounted: false,
};

/**
 * The last status the server gave us.
 *
 * Cached so the paywall and the header can render on the first frame rather
 * than after a round trip — a price that appears at full and then drops to a
 * tenth is worse than one that takes a moment to arrive. It is a cache and not
 * a source of truth: `refresh()` overwrites it, and the server decides
 * entitlement.
 */
function read(): ReferralStatus {
  const raw = kv.getString(CACHE_KEY);
  if (raw == null) return EMPTY;
  try {
    const parsed = JSON.parse(raw) as Partial<ReferralStatus>;
    return {
      code: typeof parsed.code === 'string' ? parsed.code : null,
      redeemedCode: typeof parsed.redeemedCode === 'string' ? parsed.redeemedCode : null,
      invites: Number(parsed.invites) || 0,
      discounted: parsed.discounted === true,
    };
  } catch (error) {
    console.warn('[referral] cached status unreadable, ignoring', error);
    return EMPTY;
  }
}

let status: ReferralStatus = read();
const subscribers = new Set<() => void>();

function publish(next: ReferralStatus): void {
  status = next;
  kv.set(CACHE_KEY, JSON.stringify(next));
  for (const listener of subscribers) listener();
}

function subscribe(listener: () => void): () => void {
  subscribers.add(listener);
  return () => {
    subscribers.delete(listener);
  };
}

function snapshot(): ReferralStatus {
  return status;
}

export function referralStatus(): ReferralStatus {
  return status;
}

/** Whether the invite discount applies. Read from the cache, decided by the
 * server — see `referral_status()` in the migration. */
export function isDiscounted(): boolean {
  return status.discounted;
}

export function useReferral(): ReferralStatus {
  return useSyncExternalStore(subscribe, snapshot, snapshot);
}

/** Rows the `referral_status` function hands back. */
type StatusRow = {
  code: string | null;
  redeemed_code: string | null;
  invites: number;
  discounted: boolean;
};

/**
 * Re-reads the status from the server.
 *
 * Silent on failure, deliberately. This runs on mount in two places, and an
 * offline launch should leave the last known state on screen rather than
 * announcing that a background call did not land.
 */
export async function refresh(): Promise<ReferralStatus> {
  const client = supabase;
  if (client == null) return status;
  if ((await currentUserId()) == null) return status;

  const { data, error } = await client.rpc('referral_status');
  if (error != null || data == null) {
    if (error != null) console.warn('[referral] status unavailable', error.message);
    return status;
  }

  const row = data as StatusRow;
  const next: ReferralStatus = {
    code: row.code,
    redeemedCode: row.redeemed_code,
    invites: Number(row.invites) || 0,
    discounted: row.discounted === true,
  };
  publish(next);
  return next;
}

/**
 * The user's own code, made on first ask.
 *
 * Claimed lazily rather than at sign-up: most people never open the invite
 * sheet, and a code nobody has seen is a row nobody needs. Idempotent on the
 * server, so calling it twice is free.
 */
export async function claimCode(): Promise<string | null> {
  if (status.code != null) return status.code;

  const client = supabase;
  if (client == null) return null;
  if ((await currentUserId()) == null) return null;

  const { data, error } = await client.rpc('claim_referral_code');
  if (error != null || typeof data !== 'string') {
    if (error != null) console.warn('[referral] could not claim a code', error.message);
    return null;
  }

  publish({ ...status, code: data });
  return data;
}

/**
 * Uses someone else's code.
 *
 * The server validates and the server decides — this does not check whether the
 * code looks right beyond tidying it, because the only answer that matters is
 * the one that comes back. On success the whole status is re-read rather than
 * patched locally, so `discounted` is the server's word and not an inference.
 */
export async function redeem(input: string): Promise<RedeemResult> {
  const code = normalise(input);
  if (code.length !== REFERRAL_CODE_LENGTH) return 'unknown';

  const client = supabase;
  if (client == null) return 'unavailable';
  if ((await currentUserId()) == null) return 'unavailable';

  const { data, error } = await client.rpc('redeem_referral_code', { p_code: code });
  if (error != null) {
    console.warn('[referral] redeem failed', error.message);
    return 'failed';
  }

  const result = data as RedeemResult;
  if (result === 'ok') await refresh();
  return result;
}

/**
 * A typed code, tidied.
 *
 * Upper-cased and stripped of anything outside the alphabet, so a pasted code
 * with a stray space or a lower-case letter is accepted rather than rejected
 * for a reason the user cannot see on screen.
 */
export function normalise(input: string): string {
  return input
    .toUpperCase()
    .split('')
    .filter((character) => ALPHABET.includes(character))
    .join('')
    .slice(0, REFERRAL_CODE_LENGTH);
}

/** Whether invites exist in this build at all. */
export const referralsAvailable = hasBackend;
