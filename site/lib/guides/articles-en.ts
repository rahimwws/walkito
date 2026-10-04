import type { EnglishPage } from '@/lib/i18n';

import { ACHILLES_EN } from './articles/achilles';
import { CALF_RAISES_EN } from './articles/calf-raises';
import { SHIN_SPLINTS_EN } from './articles/shin-splints';
import { STANDING_EN } from './articles/standing';
import type { Guide } from './types';

/**
 * The English-only articles, in the order the footer and llms.txt list them.
 * Each one is a `Guide` like the translated guides; it just has no Russian or
 * Spanish version yet, so it carries no hreflang.
 */
export const ARTICLES_EN: Record<EnglishPage, Guide> = {
  standing: STANDING_EN,
  calfRaises: CALF_RAISES_EN,
  achilles: ACHILLES_EN,
  shinSplints: SHIN_SPLINTS_EN,
};
