import { describe, expect, mock, test } from 'bun:test';

import type { IntroOffer, Plan, StorePeriod } from '@/entities/purchase';
import { LANGUAGES, translatorFor } from '@/shared/lib/i18n';

// The slice's index reaches the store SDK and react-native; the copy needs one helper.
mock.module('@/entities/purchase', () => ({
  samePeriod: (a: StorePeriod, b: StorePeriod) => a.unit === b.unit && a.count === b.count,
}));
const { describeCta } = await import('./plans');

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
