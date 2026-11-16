import { describe, expect, test } from 'bun:test';

import { seatedFromWebLead } from './web-lead';

describe('a seated start from the web funnel', () => {
  test('Meta Ad 1 gives a seated start', () => {
    expect(seatedFromWebLead({ utm_source: 'meta', utm_content: 'ad1_plancard', tz: 'America/New_York' })).toBe(true);
  });

  test('any other ad, or none, leaves the plan to the app', () => {
    expect(seatedFromWebLead({ utm_source: 'meta', utm_content: 'ad2_story' })).toBe(false);
    expect(seatedFromWebLead({ utm_source: 'meta' })).toBe(false);
    expect(seatedFromWebLead({})).toBe(false);
  });

  test('no row, no utm, or something that is not the funnel\'s shape', () => {
    expect(seatedFromWebLead(null)).toBe(false);
    expect(seatedFromWebLead(undefined)).toBe(false);
    expect(seatedFromWebLead('ad1_plancard')).toBe(false);
    expect(seatedFromWebLead({ utm_content: ['ad1_plancard'] })).toBe(false);
    expect(seatedFromWebLead({ utm_content: 'AD1_PLANCARD ' })).toBe(false);
  });
});
