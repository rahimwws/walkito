import { describe, expect, test } from 'bun:test';

import {
  APPLIED_FRESH_MS,
  confirmationFor,
  isSnoozed,
  nextOffer,
  parseAppliedFlag,
  sameOffer,
  snoozeKey,
  type UpdateOffer,
} from './decide';

const ota = (id: string): UpdateOffer => ({ kind: 'ota', id });
const store = (version: string): UpdateOffer => ({
  kind: 'store',
  version,
  url: `itms-apps://apps.apple.com/app/id1?v=${version}`,
});
const preview: UpdateOffer = { kind: 'ota', id: 'preview', preview: true };

describe('nextOffer', () => {
  test('anything is shown when nothing is', () => {
    expect(nextOffer(null, ota('a'), 'idle')).toEqual(ota('a'));
    expect(nextOffer(null, store('2.0.0'), 'idle')).toEqual(store('2.0.0'));
  });

  test('a store build beats an update over the air', () => {
    expect(nextOffer(ota('a'), store('2.0.0'), 'idle')).toEqual(store('2.0.0'));
    expect(nextOffer(store('2.0.0'), ota('a'), 'idle')).toEqual(store('2.0.0'));
  });

  test('a newer update or store version replaces the one on screen', () => {
    expect(nextOffer(ota('a'), ota('b'), 'idle')).toEqual(ota('b'));
    expect(nextOffer(store('2.0.0'), store('2.1.0'), 'idle')).toEqual(store('2.1.0'));
  });

  test('the same offer keeps its identity, so nothing redraws', () => {
    const current = ota('a');
    expect(nextOffer(current, ota('a'), 'idle')).toBe(current);
  });

  test('nothing replaces an offer they already said yes to', () => {
    expect(nextOffer(ota('a'), store('2.0.0'), 'downloading')).toEqual(ota('a'));
    expect(nextOffer(ota('a'), ota('b'), 'applying')).toEqual(ota('a'));
  });

  test('a failed offer can still be replaced by a better one', () => {
    expect(nextOffer(ota('a'), store('2.0.0'), 'failed')).toEqual(store('2.0.0'));
  });

  test('the development preview is never displaced', () => {
    expect(nextOffer(preview, store('2.0.0'), 'idle')).toBe(preview);
    expect(nextOffer(preview, ota('real'), 'idle')).toBe(preview);
  });
});

describe('sameOffer', () => {
  test('compares by what the sheet would say', () => {
    expect(sameOffer(ota('a'), ota('a'))).toBe(true);
    expect(sameOffer(ota('a'), ota('b'))).toBe(false);
    expect(sameOffer(store('1.0.0'), store('1.0.0'))).toBe(true);
    expect(sameOffer(ota('a'), store('1.0.0'))).toBe(false);
    expect(sameOffer(null, null)).toBe(true);
    expect(sameOffer(null, ota('a'))).toBe(false);
  });
});

describe('snooze', () => {
  test('is kept per offer', () => {
    expect(snoozeKey(ota('abc'))).toBe('update/snoozed/abc');
    expect(snoozeKey(store('2.0.0'))).toBe('update/snoozed/2.0.0');
  });

  test('holds until its time and no longer', () => {
    expect(isSnoozed(undefined, 1000)).toBe(false);
    expect(isSnoozed(2000, 1000)).toBe(true);
    expect(isSnoozed(1000, 1000)).toBe(false);
  });
});

describe('parseAppliedFlag', () => {
  test('reads back what was written', () => {
    expect(parseAppliedFlag(JSON.stringify({ from: 'embedded', at: 42 }))).toEqual({
      from: 'embedded',
      at: 42,
    });
  });

  test('treats anything malformed as no flag', () => {
    expect(parseAppliedFlag(undefined)).toBeNull();
    expect(parseAppliedFlag('')).toBeNull();
    expect(parseAppliedFlag('{nope')).toBeNull();
    expect(parseAppliedFlag('null')).toBeNull();
    expect(parseAppliedFlag('7')).toBeNull();
    expect(parseAppliedFlag(JSON.stringify({ from: '', at: 1 }))).toBeNull();
    expect(parseAppliedFlag(JSON.stringify({ from: 'a' }))).toBeNull();
    expect(parseAppliedFlag(JSON.stringify({ from: 'a', at: 'soon' }))).toBeNull();
  });
});

describe('confirmationFor', () => {
  const now = 1_000_000_000;

  test('says nothing when there is no flag', () => {
    expect(confirmationFor(null, 'b', now)).toBe('none');
  });

  test('confirms when the running update changed', () => {
    expect(confirmationFor({ from: 'a', at: now - 5000 }, 'b', now)).toBe('confirm');
    expect(confirmationFor({ from: 'embedded', at: now - 5000 }, 'b', now)).toBe('confirm');
    // A roll back to the build's own bundle is a change too.
    expect(confirmationFor({ from: 'a', at: now - 5000 }, 'embedded', now)).toBe('confirm');
  });

  test('clears silently when the same update came back up', () => {
    expect(confirmationFor({ from: 'a', at: now - 5000 }, 'a', now)).toBe('clear');
  });

  test('clears silently when the flag is stale or from the future', () => {
    expect(confirmationFor({ from: 'a', at: now - APPLIED_FRESH_MS - 1 }, 'b', now)).toBe('clear');
    expect(confirmationFor({ from: 'a', at: now + 5 * 60 * 1000 }, 'b', now)).toBe('clear');
  });

  test('clears silently after an emergency launch, whatever is running', () => {
    // The update failed to load and the build's own bundle came up instead: the
    // id changed, but not to anything they were promised.
    expect(confirmationFor({ from: 'a', at: now - 5000 }, 'embedded', now, true)).toBe('clear');
    expect(confirmationFor({ from: 'a', at: now - 5000 }, 'b', now, true)).toBe('clear');
    expect(confirmationFor(null, 'embedded', now, true)).toBe('none');
  });

  test('a flag right at the edge of fresh still confirms', () => {
    expect(confirmationFor({ from: 'a', at: now - APPLIED_FRESH_MS }, 'b', now)).toBe('confirm');
  });
});
