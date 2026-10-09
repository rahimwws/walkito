import type { ConversionData } from '@/shared/lib/appsflyer';

/**
 * What AppsFlyer's conversion data says about a paid install, as RevenueCat's
 * reserved attributes.
 *
 * Pure and in its own file, for the reason `access.ts` is: `revenuecat.ts`
 * loads the native SDK, and this is the part a test should reach.
 */

/** RevenueCat's reserved campaign attributes, the ones its charts split by. */
export type CampaignAttributes = {
  $mediaSource?: string;
  $campaign?: string;
  $adGroup?: string;
  $ad?: string;
  $keyword?: string;
  $creative?: string;
};

function text(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

/**
 * The campaign behind this install, or null when there is nothing to record.
 *
 * Only the first launch's report counts: AppsFlyer sends conversion data again
 * on later launches, and a re-engagement must not rewrite where the person
 * first came from.
 *
 * Only a non-organic install writes anything. An organic one says nothing an ad
 * network decided — and `$mediaSource` already holds the answer to the
 * onboarding's "where did you hear about us", which for an organic install is
 * the best we have. `setAcquisitionSource` (revenuecat.ts) holds the order the
 * two are written in.
 *
 * Field names differ by network and platform (`adset` and `af_adset`, `ad` and
 * `af_ad`), so the AppsFlyer-prefixed name is tried first and the bare one
 * after it.
 */
export function campaignAttributes(data: ConversionData): CampaignAttributes | null {
  if (data.is_first_launch !== true && data.is_first_launch !== 'true') return null;
  if (data.af_status !== 'Non-organic') return null;
  const out: CampaignAttributes = {};
  const set = (key: keyof CampaignAttributes, ...candidates: unknown[]) => {
    for (const candidate of candidates) {
      const value = text(candidate);
      if (value != null) {
        out[key] = value;
        return;
      }
    }
  };
  set('$mediaSource', data.media_source, data.pid);
  set('$campaign', data.campaign, data.c);
  set('$adGroup', data.af_adset, data.adset, data.adgroup);
  set('$ad', data.af_ad, data.ad);
  set('$keyword', data.af_keywords, data.keyword);
  set('$creative', data.af_creative, data.creative);
  return Object.keys(out).length > 0 ? out : null;
}
