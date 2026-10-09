import type { EnglishPage } from '@/lib/i18n';

import { BAREFOOT_EN } from './articles/barefoot-shoes';
import { INSOLES_VS_EXERCISES_EN } from './articles/insoles-vs-exercises';
import { MASSAGE_BALL_EN } from './articles/massage-ball-plantar-fasciitis';
import { ICE_HEAT_EN } from './articles/ice-or-heat-for-plantar-fasciitis';
import { PF_TAPING_EN } from './articles/plantar-fasciitis-taping';
import { NIGHT_SPLINTS_EN } from './articles/night-splints-plantar-fasciitis';
import { FLAT_FEET_KIDS_EN } from './articles/flat-feet-in-kids';
import { FLAT_FEET_AGE_EN } from './articles/do-flat-feet-get-worse-with-age';
import { FLAT_FEET_KNEE_PAIN_EN } from './articles/flat-feet-knee-pain';
import { FLAT_FEET_BACK_PAIN_EN } from './articles/flat-feet-back-pain';
import { FOOT_STRENGTHENING_EN } from './articles/foot-strengthening-exercises';
import { ANKLE_STRENGTHENING_EN } from './articles/ankle-strengthening-exercises';
import { ANKLE_MOBILITY_EN } from './articles/ankle-mobility-exercises';
import { TIGHT_CALVES_EN } from './articles/tight-calves';
import { TOE_STRENGTHENING_EN } from './articles/toe-strengthening-exercises';
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
import { EX_PLANTAR_FASCIA_STRETCH } from './articles/ex-plantar-fascia-stretch';
import { EX_CALF_STRETCH } from './articles/ex-calf-stretch';
import { EX_SOLEUS_STRETCH } from './articles/ex-soleus-stretch';
import { EX_FOOT_ROLL } from './articles/ex-foot-roll';
import { EX_ANKLE_ROCKS } from './articles/ex-ankle-rocks';
import { EX_TOWEL_HEEL_RAISE } from './articles/ex-towel-heel-raise';
import { EX_CALF_RAISES } from './articles/ex-calf-raises';
import { EX_ECCENTRIC_HEEL_DROPS } from './articles/ex-eccentric-heel-drops';
import { EX_TIBIALIS_RAISES } from './articles/ex-tibialis-raises';
import { EX_SINGLE_LEG_BALANCE } from './articles/ex-single-leg-balance';
import { EX_SHORT_FOOT } from './articles/ex-short-foot';
import { EX_TOWEL_SCRUNCH } from './articles/ex-towel-scrunch';
import { EX_TOE_SPREAD } from './articles/ex-toe-spread';
import { EX_BIG_TOE_LIFT } from './articles/ex-big-toe-lift';
import { EX_BAND_INVERSION } from './articles/ex-band-inversion';
import { EX_HIP_ABDUCTION } from './articles/ex-hip-abduction';
import { CALF_RAISE_TEST_EN } from './articles/calf-raise-test';
import { HUB_PLANTAR_FASCIITIS_EN } from './articles/hub-plantar-fasciitis';
import { HUB_FLAT_FEET_EN } from './articles/hub-flat-feet';
import { PF_VS_HEEL_SPUR_EN } from './articles/pf-vs-heel-spur';
import { HEEL_SPUR_EXERCISES_EN } from './articles/heel-spur-exercises';
import { HEEL_PAIN_AFTER_WALKING_EN } from './articles/heel-pain-after-walking';
import { HEEL_PAIN_AT_NIGHT_EN } from './articles/heel-pain-at-night';
import { HEEL_FAT_PAD_EN } from './articles/heel-fat-pad';
import { HAGLUNDS_EN } from './articles/haglunds';
import { SEVERS_EN } from './articles/severs';
import { ARCH_PAIN_EN } from './articles/arch-pain';
import { HIGH_ARCHES_EN } from './articles/high-arches';
import { PTTD_EN } from './articles/pttd';
import { TOP_OF_FOOT_EN } from './articles/top-of-foot';
import { MORTONS_EN } from './articles/mortons';
import { SESAMOIDITIS_EN } from './articles/sesamoiditis';
import { BUNIONS_EN } from './articles/bunions';
import { HAMMER_TOE_EN } from './articles/hammer-toe';
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
  exPlantarFasciaStretch: EX_PLANTAR_FASCIA_STRETCH,
  exCalfStretch: EX_CALF_STRETCH,
  exSoleusStretch: EX_SOLEUS_STRETCH,
  exFootRoll: EX_FOOT_ROLL,
  exAnkleRocks: EX_ANKLE_ROCKS,
  exTowelHeelRaise: EX_TOWEL_HEEL_RAISE,
  exCalfRaises: EX_CALF_RAISES,
  exEccentricHeelDrops: EX_ECCENTRIC_HEEL_DROPS,
  exTibialisRaises: EX_TIBIALIS_RAISES,
  exSingleLegBalance: EX_SINGLE_LEG_BALANCE,
  exShortFoot: EX_SHORT_FOOT,
  exTowelScrunch: EX_TOWEL_SCRUNCH,
  exToeSpread: EX_TOE_SPREAD,
  exBigToeLift: EX_BIG_TOE_LIFT,
  exBandInversion: EX_BAND_INVERSION,
  exHipAbduction: EX_HIP_ABDUCTION,
  calfRaiseTest: CALF_RAISE_TEST_EN,
  hubPlantarFasciitis: HUB_PLANTAR_FASCIITIS_EN,
  hubFlatFeet: HUB_FLAT_FEET_EN,
  pfVsHeelSpur: PF_VS_HEEL_SPUR_EN,
  heelSpurExercises: HEEL_SPUR_EXERCISES_EN,
  heelPainAfterWalking: HEEL_PAIN_AFTER_WALKING_EN,
  heelPainAtNight: HEEL_PAIN_AT_NIGHT_EN,
  heelFatPad: HEEL_FAT_PAD_EN,
  haglunds: HAGLUNDS_EN,
  severs: SEVERS_EN,
  archPain: ARCH_PAIN_EN,
  highArches: HIGH_ARCHES_EN,
  pttd: PTTD_EN,
  topOfFoot: TOP_OF_FOOT_EN,
  mortons: MORTONS_EN,
  sesamoiditis: SESAMOIDITIS_EN,
  bunions: BUNIONS_EN,
  hammerToe: HAMMER_TOE_EN,
  toeStrengthening: TOE_STRENGTHENING_EN,
  tightCalves: TIGHT_CALVES_EN,
  ankleMobility: ANKLE_MOBILITY_EN,
  ankleStrengthening: ANKLE_STRENGTHENING_EN,
  footStrengthening: FOOT_STRENGTHENING_EN,
  flatFeetBackPain: FLAT_FEET_BACK_PAIN_EN,
  flatFeetKneePain: FLAT_FEET_KNEE_PAIN_EN,
  flatFeetAge: FLAT_FEET_AGE_EN,
  flatFeetKids: FLAT_FEET_KIDS_EN,
  nightSplints: NIGHT_SPLINTS_EN,
  pfTaping: PF_TAPING_EN,
  iceHeat: ICE_HEAT_EN,
  massageBall: MASSAGE_BALL_EN,
  insolesVsExercises: INSOLES_VS_EXERCISES_EN,
  barefoot: BAREFOOT_EN,
};
