import { describe, expect, test } from 'bun:test';

import { kv } from '@/shared/lib/storage';

import { isMetaInstall } from '@/entities/purchase/model/trial-audience';

/**
 * Who a Meta ad brought, and who the first paywall sells the free week to
 * (everybody, since Nov 10; the Meta answer is kept for the switch back).
 */
describe('who a Meta ad brought', () => {
  test('a Meta install, by its flag or its media source', () => {
    expect(isMetaInstall({ af_status: 'Non-organic', is_fb: true, media_source: 'Facebook Ads' })).toBe(true);
    expect(isMetaInstall({ af_status: 'Non-organic', is_fb: 'true' })).toBe(true);
    expect(isMetaInstall({ af_status: 'Non-organic', media_source: 'Facebook Ads' })).toBe(true);
    expect(isMetaInstall({ af_status: 'Non-organic', media_source: 'instagram_bio' })).toBe(true);
    expect(isMetaInstall({ af_status: 'Non-organic', media_source: 'restricted' })).toBe(true);
  });

  test('anything else is not', () => {
    expect(isMetaInstall({ af_status: 'Organic' })).toBe(false);
    expect(isMetaInstall({ af_status: 'Organic', is_fb: true })).toBe(false);
    expect(isMetaInstall({ af_status: 'Non-organic', media_source: 'tiktokglobal_int' })).toBe(false);
    expect(isMetaInstall({ af_status: 'Non-organic', media_source: 'Apple Search Ads' })).toBe(false);
    expect(isMetaInstall({ af_status: 'Organic', media_source: 'restricted' })).toBe(false);
  });

  test('the survey answer and the AppsFlyer report, either one, mark a Meta install', async () => {
    const audience = await import('@/entities/purchase/model/trial-audience');
    kv.remove('purchase/meta-install');
    kv.remove('purchase/source-answer');
    expect(audience.fromMetaAd()).toBe(false);

    audience.noteSourceAnswer('tiktok');
    expect(audience.fromMetaAd()).toBe(false);
    audience.noteSourceAnswer('instagram');
    expect(audience.fromMetaAd()).toBe(true);

    kv.remove('purchase/source-answer');
    audience.noteInstall({ af_status: 'Organic' });
    expect(audience.fromMetaAd()).toBe(false);
    audience.noteInstall({ af_status: 'Non-organic', media_source: 'Facebook Ads', is_fb: true });
    expect(audience.fromMetaAd()).toBe(true);
  });

  test('the first paywall sells the free week to everybody, Meta or not', async () => {
    const audience = await import('@/entities/purchase/model/trial-audience');
    kv.remove('purchase/meta-install');
    kv.remove('purchase/source-answer');
    expect(audience.trialOnFirstPaywall()).toBe(true);
    audience.noteSourceAnswer('tiktok');
    expect(audience.trialOnFirstPaywall()).toBe(true);
  });
});
