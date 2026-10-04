import type { EnglishPage } from '@/lib/i18n';

import { ACHILLES_EN } from './articles/achilles';
import { BALL_OF_FOOT_EN } from './articles/ball-of-foot';
import { BEST_APP_EN } from './articles/best-app';
import { MORNING_HEEL_PAIN_EN } from './articles/morning-heel-pain';
import { NURSES_EN } from './articles/nurses';
import { PF_DURATION_EN } from './articles/pf-duration';
import { STANDING_DESK_EN } from './articles/standing-desk';
import { VS_EXAKT_EN } from './articles/vs-exakt';
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
  morningHeelPain: MORNING_HEEL_PAIN_EN,
  pfDuration: PF_DURATION_EN,
  ballOfFoot: BALL_OF_FOOT_EN,
  nurses: NURSES_EN,
  standingDesk: STANDING_DESK_EN,
  bestApp: BEST_APP_EN,
  vsExakt: VS_EXAKT_EN,
};
