import { describe, expect, test } from 'bun:test';

import { campaignAttributes } from '@/entities/purchase/model/attribution';
import { rewriteIncomingPath } from '@/pages/open/model/intent';
import { deepLinkPath, linkTarget } from '@/pages/open/model/route';
import { deepLinkFrom } from '@/shared/lib/appsflyer/payload';

/**
 * AppsFlyer, from what the SDK reports to what the app does with it: the
 * campaign written to RevenueCat, and the screen a OneLink opens.
 */

describe('conversion data → RevenueCat attributes', () => {
  const paid = {
    is_first_launch: true,
    af_status: 'Non-organic',
    media_source: 'Apple Search Ads',
    campaign: 'heel-pain-us',
    af_adset: 'plantar',
    adset: 'ignored when af_adset is there',
    af_ad: 'video-3',
    af_keywords: 'heel pain exercises',
  };

  test('a paid first launch fills the reserved attributes it has', () => {
    expect(campaignAttributes(paid)).toEqual({
      $mediaSource: 'Apple Search Ads',
      $campaign: 'heel-pain-us',
      $adGroup: 'plantar',
      $ad: 'video-3',
      $keyword: 'heel pain exercises',
    });
  });

  test('the bare field is the fallback for the af_ one', () => {
    expect(campaignAttributes({ is_first_launch: 'true', af_status: 'Non-organic', media_source: 'tiktokglobal_int', adset: 'a', ad: 'b' })).toEqual({
      $mediaSource: 'tiktokglobal_int',
      $adGroup: 'a',
      $ad: 'b',
    });
  });

  test('an organic install writes nothing, so the survey answer stays', () => {
    expect(campaignAttributes({ ...paid, af_status: 'Organic' })).toBeNull();
  });

  test('only the first launch counts', () => {
    expect(campaignAttributes({ ...paid, is_first_launch: false })).toBeNull();
    expect(campaignAttributes({ ...paid, is_first_launch: undefined })).toBeNull();
  });

  test('blank values are not written', () => {
    expect(campaignAttributes({ is_first_launch: true, af_status: 'Non-organic', media_source: '  ', campaign: '' })).toBeNull();
  });
});

describe('deep-link callback → link', () => {
  test('a found link, either platform’s keys', () => {
    expect(deepLinkFrom({ status: 'FOUND', deepLink: { deep_link_value: 'paywall', is_deferred: false } })).toEqual({
      value: 'paywall',
      deferred: false,
    });
    expect(deepLinkFrom({ status: 'FOUND', deepLink: { deepLinkValue: 'exercise_big_toe_lift', isDeferred: true } })).toEqual({
      value: 'exercise_big_toe_lift',
      deferred: true,
    });
  });

  test('a link with no value is still a link, to Home', () => {
    expect(deepLinkFrom({ status: 'FOUND', deepLink: {} })).toEqual({ value: null, deferred: false });
  });

  test('nothing found is nothing', () => {
    expect(deepLinkFrom({ status: 'NOT_FOUND' })).toBeNull();
    expect(deepLinkFrom({ status: 'ERROR', error: 'timeout' })).toBeNull();
    expect(deepLinkFrom(null)).toBeNull();
  });
});

describe('deep_link_value → /open path', () => {
  test('the campaign values', () => {
    expect(deepLinkPath('paywall')).toBe('paywall');
    expect(deepLinkPath('exercise_big_toe_lift')).toBe('exercise/big_toe_lift');
    expect(deepLinkPath('guide_plantar-fasciitis')).toBe('guide/plantar-fasciitis');
    expect(deepLinkPath(' Paywall ')).toBe('paywall');
  });

  test('the email paths pass through', () => {
    expect(deepLinkPath('today')).toBe('today');
    expect(deepLinkPath('library/morning')).toBe('library/morning');
  });

  test('anything unknown or unsafe is Home, a bad exercise is the plan', () => {
    expect(deepLinkPath(null)).toBe('');
    expect(deepLinkPath('summer_sale')).toBe('');
    expect(deepLinkPath('guide_../../etc')).toBe('');
    expect(deepLinkPath('guide_https://evil.example')).toBe('');
    expect(deepLinkPath('exercise_<script>')).toBe('plan');
  });
});

describe('OneLink paths → targets', () => {
  test('an exercise opens the plan with its card', () => {
    expect(linkTarget(['exercise', 'big_toe_lift'], {})).toEqual({ to: 'program', request: { kind: 'exercise', id: 'big_toe_lift' } });
  });

  test('a guide opens the site page', () => {
    expect(linkTarget(['guide', 'plantar-fasciitis'], {})).toEqual({ to: 'guide', url: 'https://walkito.site/plantar-fasciitis/' });
    expect(linkTarget(['guide', 'tools', 'foot-map'], {})).toEqual({ to: 'guide', url: 'https://walkito.site/tools/foot-map/' });
    expect(linkTarget(['guide', '..'], {})).toEqual({ to: 'home' });
  });
});

describe('raw OneLink URLs are not routed', () => {
  test('a launch from one starts on Home, a later one leaves the app where it is', () => {
    expect(rewriteIncomingPath('https://walkito.onelink.me/2L97/gicuz9ys', true)).toBe('/');
    expect(rewriteIncomingPath('https://walkito.onelink.me/2L97/gicuz9ys?deep_link_value=paywall', false)).toBeNull();
  });

  test('walkito:// and walkito.site links are untouched by it', () => {
    expect(rewriteIncomingPath('walkito://open/today', false)).toBe('/open/today');
    expect(rewriteIncomingPath('https://walkito.site/open/today/', false)).toBe('https://walkito.site/open/today/');
  });
});
