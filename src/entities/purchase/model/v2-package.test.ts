import { describe, expect, test } from 'bun:test';

import { OFFERINGS, PRODUCTS, V2_SHELF_PRODUCTS, V2_SHELVES, v2Package } from './purchase';

const pkg = (identifier: string, product: string) => ({ identifier, product: { identifier: product } });

describe('v2Package', () => {
  test('the package under its own identifier first', () => {
    const packages = [pkg('annual_offer', PRODUCTS.annualOffer), pkg('$rc_annual', PRODUCTS.annual)];
    expect(v2Package(packages, V2_SHELVES[OFFERINGS.offer].annual, PRODUCTS.annualOffer)).toBe(packages[0]);
  });
  test('typed under another identifier, the gift is found by its product', () => {
    const packages = [
      pkg('$rc_annual', PRODUCTS.annual),
      pkg('annual_trial', PRODUCTS.annualTrial),
      pkg('Annual offer', PRODUCTS.annualOffer),
    ];
    const found = v2Package(packages, V2_SHELVES[OFFERINGS.offer].annual, V2_SHELF_PRODUCTS[OFFERINGS.offer].annual);
    expect(found?.product.identifier).toBe('walkito_annual_offer');
  });
  test('never another yearly product in its place', () => {
    const packages = [pkg('$rc_annual', PRODUCTS.annual), pkg('annual_trial', PRODUCTS.annualTrial)];
    expect(v2Package(packages, 'annual_offer', PRODUCTS.annualOffer)).toBeNull();
  });
  test('the offer shelf expects walkito_annual_offer', () => {
    expect(V2_SHELF_PRODUCTS[OFFERINGS.offer].annual).toBe('walkito_annual_offer');
  });
});
