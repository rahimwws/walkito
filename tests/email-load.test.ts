import { describe, expect, test } from 'bun:test';

import { paywallFrom } from '../supabase/functions/_shared/email/load.ts';

/**
 * The paywall views the offer emails read their prices from.
 *
 * The emails never print a price the store did not give, and a price from the
 * wrong product is one the store did not give for what the email names. So the
 * annual subscription's price is taken only from a view that says it is one.
 */

const view = (at: string, props: Record<string, unknown>) => ({ at, props });

describe('paywallFrom', () => {
  test('nothing seen, nothing to say', () => {
    expect(paywallFrom([])).toBeNull();
  });

  test('a view marked annual carries its prices', () => {
    const pw = paywallFrom([
      view('2026-10-01T10:00:00Z', { plan: 'annual', offer_price: '$29.99', standard_price: '$44.99', percent: 33 }),
    ]);
    expect(pw).toEqual({
      firstAt: '2026-10-01T10:00:00Z',
      lastAt: '2026-10-01T10:00:00Z',
      offerPrice: '$29.99',
      standardPrice: '$44.99',
      percent: 33,
    });
  });

  test('an unmarked view (the old one-time pass) is never quoted as the annual price', () => {
    const pw = paywallFrom([
      view('2026-09-20T10:00:00Z', { offer_price: '$14.99', standard_price: '$49.99', percent: 70, weeks: 12 }),
    ]);
    expect(pw?.offerPrice).toBeNull();
    expect(pw?.standardPrice).toBeNull();
    expect(pw?.percent).toBeNull();
    // Still a view: the offer emails time themselves from it.
    expect(pw?.firstAt).toBe('2026-09-20T10:00:00Z');
  });

  test('the latest annual view wins, whatever came after it', () => {
    const pw = paywallFrom([
      view('2026-09-20T10:00:00Z', { offer_price: '$14.99', standard_price: '$49.99', percent: 70, weeks: 12 }),
      view('2026-09-28T10:00:00Z', { plan: 'annual', offer_price: '$29.99', standard_price: '$44.99', percent: 33 }),
      view('2026-09-29T10:00:00Z', { plan: 'annual', offer_price: null, standard_price: '$44.99', percent: null }),
    ]);
    expect(pw?.offerPrice).toBe('$29.99');
    expect(pw?.percent).toBe(33);
    expect(pw?.firstAt).toBe('2026-09-20T10:00:00Z');
    expect(pw?.lastAt).toBe('2026-09-29T10:00:00Z');
  });
});
