import { describe, expect, mock, test } from 'bun:test';

import type { Offering, Plan } from '@/entities/purchase';

// The slice's index reaches the store SDK and react-native; the lineups need none of it.
mock.module('@/entities/purchase', () => ({}));
const { DEFAULT_VARIANT, firstChoice, lineupFor, plansOf, shownKinds, variantOf } = await import('./lineup');

function plan(id: string): Plan {
  return {
    token: id,
    period: 'annual',
    product: { id, price: 1, currencyCode: 'USD', display: '$1.00' },
    priceString: '$1.00',
    pricePerMonthString: null,
    pricePerWeekString: null,
    billingPeriod: null,
    isLifetime: false,
    isPass: false,
    intro: null,
  };
}

function offering(identifier: string, kinds: Partial<Record<'annual' | 'monthly' | 'weekly' | 'lifetime', string>>): Offering {
  const of = (kind: keyof typeof kinds) => (kinds[kind] != null ? plan(kinds[kind]) : null);
  return { identifier, annual: of('annual'), monthly: of('monthly'), weekly: of('weekly'), lifetime: of('lifetime'), pass: null };
}

const standard = offering('default', { annual: 'walkito_annual', monthly: 'walkito_monthly', lifetime: 'walkito_lifetime' });
const trial = offering('trial', { annual: 'walkito_annual_trial', monthly: 'walkito_monthly_trial' });
const offer = offering('offer', { annual: 'walkito_annual_offer', lifetime: 'walkito_lifetime_offer' });
const shelves = { standard, trial, offer };
const off = { comeback: false, trialAudience: false };

describe('the flag', () => {
  test('its three values, and the monthly free week for anything else', () => {
    expect(variantOf('yearly')).toBe('yearly');
    expect(variantOf('first_year_2999')).toBe('first_year_2999');
    expect(variantOf('monthly_trial')).toBe('monthly_trial');
    for (const value of [undefined, null, false, true, '', 'weekly', 3]) expect(variantOf(value)).toBe(DEFAULT_VARIANT);
    expect(DEFAULT_VARIANT).toBe('monthly_trial');
  });
});

describe('the default lineup', () => {
  test('the monthly with its free week first and chosen, the $29.99 first year beside it', () => {
    const lineup = lineupFor('monthly_trial', off);
    const plans = plansOf(shelves, lineup);
    const shown = shownKinds(lineup, plans, true);
    expect(shown).toEqual(['monthly', 'annual', 'lifetime']);
    expect(firstChoice(lineup, shown)).toBe('monthly');
    expect(plans.monthly?.product.id).toBe('walkito_monthly_trial');
    expect(plans.annual?.product.id).toBe('walkito_annual_offer');
    expect(plans.lifetime?.product.id).toBe('walkito_lifetime');
    expect(lineup.gift).toBe(false);
  });

  test('until walkito_monthly_trial exists, the standard monthly stands in; a card never disappears', () => {
    const lineup = lineupFor('monthly_trial', off);
    const plans = plansOf({ standard, trial: offering('trial', { annual: 'walkito_annual_trial' }), offer: null }, lineup);
    expect(plans.monthly?.product.id).toBe('walkito_monthly');
    expect(plans.annual?.product.id).toBe('walkito_annual');
  });
});

describe('the remote switch', () => {
  test('yearly is 1.1.0: the yearly first and chosen, the exit gift on, the free week for its audience only', () => {
    const forMeta = lineupFor('yearly', { comeback: false, trialAudience: true });
    expect(firstChoice(forMeta, shownKinds(forMeta, plansOf(shelves, forMeta), true))).toBe('annual');
    expect(plansOf(shelves, forMeta).annual?.product.id).toBe('walkito_annual_trial');
    expect(plansOf(shelves, forMeta).monthly?.product.id).toBe('walkito_monthly');
    expect(forMeta.gift).toBe(true);
    expect(plansOf(shelves, lineupFor('yearly', off)).annual?.product.id).toBe('walkito_annual');
  });

  test('first_year_2999: the first year up front, first and chosen', () => {
    const lineup = lineupFor('first_year_2999', off);
    expect(lineup.order[0]).toBe('annual');
    expect(lineup.chosen).toBe('annual');
    expect(plansOf(shelves, lineup).annual?.product.id).toBe('walkito_annual_offer');
    expect(lineup.gift).toBe(false);
  });

  test('the comeback prices outrank the flag', () => {
    const lineup = lineupFor('monthly_trial', { comeback: true, trialAudience: true });
    expect(lineup.variant).toBe('comeback');
    expect(plansOf(shelves, lineup).lifetime?.product.id).toBe('walkito_lifetime_offer');
  });

  test("a default the store lacks: the first card it has is chosen", () => {
    const lineup = lineupFor('monthly_trial', off);
    const noMonthly = { standard: offering('default', { annual: 'walkito_annual', weekly: 'walkito_weekly' }), trial: null, offer: null };
    const shown = shownKinds(lineup, plansOf(noMonthly, lineup), true);
    expect(shown).toEqual(['annual', 'weekly']);
    expect(firstChoice(lineup, shown)).toBe('annual');
  });

  test('before the store answers, the cards iOS sells, in the lineup\'s order', () => {
    const lineup = lineupFor('monthly_trial', off);
    expect(shownKinds(lineup, plansOf({ standard: null, trial: null, offer: null }, lineup), false)).toEqual([
      'monthly',
      'annual',
      'lifetime',
    ]);
  });
});
