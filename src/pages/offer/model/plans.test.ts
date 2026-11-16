import { describe, expect, mock, test } from 'bun:test';

import type { IntroOffer, Plan, StorePeriod } from '@/entities/purchase';
import { LANGUAGES, translatorFor } from '@/shared/lib/i18n';

// The slice's index reaches the store SDK and react-native; the copy needs one helper.
mock.module('@/entities/purchase', () => ({
  samePeriod: (a: StorePeriod, b: StorePeriod) => a.unit === b.unit && a.count === b.count,
}));
const { describeCta, describePlan, dueToday, formatLike, hasIntroMonth } = await import('./plans');

const t = translatorFor('en');

function annual(intro: IntroOffer | null): Plan {
  return {
    token: 'annual',
    period: 'annual',
    product: { id: 'walkito_annual', price: 59.99, currencyCode: 'USD', display: '$59.99' },
    priceString: '$59.99',
    pricePerMonthString: '$4.99',
    pricePerWeekString: '$1.15',
    billingPeriod: { unit: 'year', count: 1 },
    isLifetime: false,
    isPass: false,
    intro,
  };
}

describe('the plans button', () => {
  test('a free week the store grants: "Start my free week", and free', () => {
    for (const period of [{ unit: 'week', count: 1 }, { unit: 'day', count: 7 }] as const) {
      const cta = describeCta('annual', annual({ kind: 'free-trial', period }), t, false);
      expect(cta.label).toBe(t('offer.plans.ctaTrialWeek'));
      expect(cta.free).toBe(true);
      expect(cta.terms).toContain('$59.99');
    }
  });

  test('a trial of another length keeps the general trial label', () => {
    const cta = describeCta('annual', annual({ kind: 'free-trial', period: { unit: 'day', count: 3 } }), t, false);
    expect(cta.label).toBe(t('offer.plans.ctaTrial'));
    expect(cta.free).toBe(true);
  });

  test('no trial for this customer: no free wording, in any language', () => {
    for (const language of LANGUAGES) {
      const tr = translatorFor(language);
      const cta = describeCta('annual', annual(null), tr, false);
      expect(cta.label).toBe(tr('offer.continue'));
      expect(cta.free).toBeUndefined();
    }
  });
});

function monthly(price: number, intro: IntroOffer | null): Plan {
  const display = `$${price.toFixed(2)}`;
  return {
    token: 'monthly',
    period: 'monthly',
    product: { id: 'walkito_monthly', price, currencyCode: 'USD', display },
    priceString: display,
    pricePerMonthString: display,
    pricePerWeekString: null,
    billingPeriod: { unit: 'month', count: 1 },
    isLifetime: false,
    isPass: false,
    intro,
  };
}

const lifetime: Plan = {
  token: 'lifetime',
  period: 'lifetime',
  product: { id: 'walkito_lifetime', price: 99.99, currencyCode: 'USD', display: '$99.99' },
  priceString: '$99.99',
  pricePerMonthString: null,
  pricePerWeekString: null,
  billingPeriod: null,
  isLifetime: true,
  isPass: false,
  intro: null,
};

const FIRST_MONTH: IntroOffer = { kind: 'pay-up-front', price: 4.99, priceString: '$4.99', period: { unit: 'month', count: 1 } };

describe('the year over a month', () => {
  test('cut down to the cent, never rounded up or to a whole figure', () => {
    // 49.99 / 12 = 4.1658..., 59.99 / 12 = 4.9991...
    expect(formatLike('$49.99', 49.99, 49.99 / 12)).toBe('$4.16');
    expect(formatLike('$59.99', 59.99, 59.99 / 12)).toBe('$4.99');
    expect(formatLike('$60.00', 60, 5)).toBe('$5.00');
  });

  test('written the way the store wrote the price, whatever the phone is set to', () => {
    expect(formatLike('¥7,900', 7900, 7900 / 12)).toBe('¥658');
    expect(formatLike('1 299,00 ₽', 1299, 1299 / 12)).toBe('108,25 ₽');
    expect(formatLike('54,99 €', 54.99, 54.99 / 12)).toBe('4,58 €');
    expect(formatLike('₩65,000', 65000, 65000 / 12)).toBe('₩5,416');
    expect(formatLike('$49.99', 49.99, 0)).toBe('$0.00');
  });

  test('the yearly card keeps the billed price as its big figure', () => {
    const copy = describePlan('annual', annual({ kind: 'free-trial', period: { unit: 'week', count: 1 } }), t);
    expect(copy.price).toBe('$59.99');
    expect(copy.perMonth).toBe(t('offer.plans.aboutPerMonth', { perMonth: '$4.99' }));
  });
});

describe('the monthly card', () => {
  test('a lower first month the store gives this customer: both prices, from the store', () => {
    const copy = describePlan('monthly', monthly(9.99, FIRST_MONTH), t);
    expect(copy.price).toBe('$4.99');
    expect(copy.note).toBe('First month $4.99, then $9.99 a month');
    const cta = describeCta('monthly', monthly(9.99, FIRST_MONTH), t, false);
    expect(cta.terms).toContain('$4.99 for the first month, then $9.99 per month.');
  });

  test('no introductory offer, or not eligible: the plain price, today and on', () => {
    const copy = describePlan('monthly', monthly(14.99, null), t);
    expect(copy.price).toBe('$14.99');
    expect(copy.note).toBe(t('offer.plans.monthlyNote'));
    expect(hasIntroMonth(monthly(14.99, null))).toBe(false);
    expect(hasIntroMonth(monthly(9.99, FIRST_MONTH))).toBe(true);
  });

  test('an offer longer than one month is not called a first month', () => {
    const three: IntroOffer = { kind: 'pay-up-front', price: 12, priceString: '$12.00', period: { unit: 'month', count: 3 } };
    expect(describePlan('monthly', monthly(9.99, three), t).price).toBe('$9.99');
  });
});

describe('the lifetime card', () => {
  test('pay once, no subscription, and no "Plus" on its button', () => {
    expect(describePlan('lifetime', lifetime, t).note).toBe('Pay once, no subscription');
    expect(describeCta('lifetime', lifetime, t, false).label).toBe(t('offer.continue'));
  });
});

describe('what is paid today', () => {
  test('nothing for the free week, the first month for the intro, else the price', () => {
    expect(dueToday('annual', annual({ kind: 'free-trial', period: { unit: 'week', count: 1 } }))).toBe('$0.00');
    expect(dueToday('annual', annual(null))).toBe('$59.99');
    expect(dueToday('monthly', monthly(9.99, FIRST_MONTH))).toBe('$4.99');
    expect(dueToday('monthly', monthly(14.99, null))).toBe('$14.99');
    expect(dueToday('lifetime', lifetime)).toBe('$99.99');
    expect(dueToday('annual', null)).toBeNull();
  });

  test('the line over the button says it in every language', () => {
    for (const language of LANGUAGES) {
      expect(translatorFor(language)('offer.plans.confirmApple', { amount: '$0.00' })).toContain('$0.00');
    }
  });
});
