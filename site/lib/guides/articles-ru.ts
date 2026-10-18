import type { EnglishPage } from '@/lib/i18n';

import { TIGHT_CALVES_RU } from './articles-ru/tight-calves';
import { FLAT_FEET_KIDS_RU } from './articles-ru/flat-feet-in-kids';
import { FLAT_FEET_BACK_PAIN_RU } from './articles-ru/flat-feet-back-pain';
import { BAREFOOT_RU } from './articles-ru/barefoot-shoes';
import { FOOT_STRENGTHENING_RU } from './articles-ru/foot-strengthening-exercises';
import { ANKLE_MOBILITY_RU } from './articles-ru/ankle-mobility-exercises';
import { ICE_HEAT_RU } from './articles-ru/ice-or-heat-for-plantar-fasciitis';
import { FLAT_FEET_AGE_RU } from './articles-ru/do-flat-feet-get-worse-with-age';
import { ANKLE_STRENGTHENING_RU } from './articles-ru/ankle-strengthening-exercises';
import { NIGHT_SPLINTS_RU } from './articles-ru/night-splints-plantar-fasciitis';
import { INSOLES_VS_EXERCISES_RU } from './articles-ru/insoles-vs-exercises';
import { TOE_STRENGTHENING_RU } from './articles-ru/toe-strengthening-exercises';
import { MASSAGE_BALL_RU } from './articles-ru/massage-ball-plantar-fasciitis';
import { FLAT_FEET_KNEE_PAIN_RU } from './articles-ru/flat-feet-knee-pain';
import { PF_TAPING_RU } from './articles-ru/plantar-fasciitis-taping';
import { ACHILLES_RU } from './articles-ru/achilles';
import { ARCH_PAIN_RU } from './articles-ru/arch-pain';
import { BALL_OF_FOOT_RU } from './articles-ru/ball-of-foot';
import { BEST_APP_RU } from './articles-ru/best-app';
import { BUNIONS_RU } from './articles-ru/bunions';
import { CALF_RAISE_TEST_RU } from './articles-ru/calf-raise-test';
import { CALF_RAISES_RU } from './articles-ru/calf-raises';
import { EX_ANKLE_ROCKS_RU } from './articles-ru/ex-ankle-rocks';
import { EX_BAND_INVERSION_RU } from './articles-ru/ex-band-inversion';
import { EX_BIG_TOE_LIFT_RU } from './articles-ru/ex-big-toe-lift';
import { EX_CALF_RAISES_RU } from './articles-ru/ex-calf-raises';
import { EX_CALF_STRETCH_RU } from './articles-ru/ex-calf-stretch';
import { EX_ECCENTRIC_HEEL_DROPS_RU } from './articles-ru/ex-eccentric-heel-drops';
import { EX_FOOT_ROLL_RU } from './articles-ru/ex-foot-roll';
import { EX_HIP_ABDUCTION_RU } from './articles-ru/ex-hip-abduction';
import { EX_PLANTAR_FASCIA_STRETCH_RU } from './articles-ru/ex-plantar-fascia-stretch';
import { EX_SHORT_FOOT_RU } from './articles-ru/ex-short-foot';
import { EX_SINGLE_LEG_BALANCE_RU } from './articles-ru/ex-single-leg-balance';
import { EX_SOLEUS_STRETCH_RU } from './articles-ru/ex-soleus-stretch';
import { EX_TIBIALIS_RAISES_RU } from './articles-ru/ex-tibialis-raises';
import { EX_TOE_SPREAD_RU } from './articles-ru/ex-toe-spread';
import { EX_TOWEL_HEEL_RAISE_RU } from './articles-ru/ex-towel-heel-raise';
import { EX_TOWEL_SCRUNCH_RU } from './articles-ru/ex-towel-scrunch';
import { HAGLUNDS_RU } from './articles-ru/haglunds';
import { HAMMER_TOE_RU } from './articles-ru/hammer-toe';
import { HEEL_FAT_PAD_RU } from './articles-ru/heel-fat-pad';
import { HEEL_PAIN_AFTER_WALKING_RU } from './articles-ru/heel-pain-after-walking';
import { HEEL_PAIN_AT_NIGHT_RU } from './articles-ru/heel-pain-at-night';
import { HEEL_SPUR_EXERCISES_RU } from './articles-ru/heel-spur-exercises';
import { HIGH_ARCHES_RU } from './articles-ru/high-arches';
import { HUB_FLAT_FEET_RU } from './articles-ru/hub-flat-feet';
import { HUB_PLANTAR_FASCIITIS_RU } from './articles-ru/hub-plantar-fasciitis';
import { MORNING_HEEL_PAIN_RU } from './articles-ru/morning-heel-pain';
import { MORTONS_RU } from './articles-ru/mortons';
import { NURSES_RU } from './articles-ru/nurses';
import { PF_DURATION_RU } from './articles-ru/pf-duration';
import { PF_VS_HEEL_SPUR_RU } from './articles-ru/pf-vs-heel-spur';
import { PTTD_RU } from './articles-ru/pttd';
import { SESAMOIDITIS_RU } from './articles-ru/sesamoiditis';
import { SEVERS_RU } from './articles-ru/severs';
import { SHIN_SPLINTS_RU } from './articles-ru/shin-splints';
import { STANDING_DESK_RU } from './articles-ru/standing-desk';
import { STANDING_RU } from './articles-ru/standing';
import { TOP_OF_FOOT_RU } from './articles-ru/top-of-foot';
import { VS_EXAKT_RU } from './articles-ru/vs-exakt';
import { EXAKT_ALT_RU } from './articles-ru/exakt-alternatives';
import { BEST_FLAT_APP_RU } from './articles-ru/best-flat-feet-app';
import { PF_PREGNANCY_RU } from './articles-ru/pf-pregnancy';
import { WALKING_PF_RU } from './articles-ru/walking-with-plantar-fasciitis';
import { PF_VS_ACHILLES_RU } from './articles-ru/plantar-fasciitis-vs-achilles-tendonitis';
import { RUNNERS_FOOT_EXERCISES_RU } from './articles-ru/foot-exercises-for-runners';
import { TEACHERS_RU } from './articles-ru/teachers-foot-pain';
import { PF_VS_STRESS_FRACTURE_RU } from './articles-ru/plantar-fasciitis-vs-stress-fracture';
import { FLAT_FEET_TEST_RU } from './articles-ru/flat-feet-test';
import { RETAIL_WAREHOUSE_RU } from './articles-ru/retail-warehouse-foot-pain';
import { CHEFS_RU } from './articles-ru/chefs-foot-pain';
import { HAIRDRESSERS_RU } from './articles-ru/hairdressers-foot-pain';
import { WEIGHT_PF_RU } from './articles-ru/weight-and-plantar-fasciitis';
import { HIKERS_RU } from './articles-ru/hiking-foot-pain';
import { HEEL_NOT_PF_RU } from './articles-ru/heel-pain-not-plantar-fasciitis';
import { PF_FLARE_UP_RU } from './articles-ru/plantar-fasciitis-flare-up';
import { PF_NOT_BETTER_RU } from './articles-ru/plantar-fasciitis-not-getting-better';
import type { Guide } from './types';

/** Russian versions of the English-only articles, keyed by page. Generated by
 * `scripts/gen-articles-ru.py` from the files in `articles-ru/`. */
export const ARTICLES_RU: Partial<Record<EnglishPage, Guide>> = {
  achilles: ACHILLES_RU,
  archPain: ARCH_PAIN_RU,
  ballOfFoot: BALL_OF_FOOT_RU,
  bestApp: BEST_APP_RU,
  bunions: BUNIONS_RU,
  calfRaiseTest: CALF_RAISE_TEST_RU,
  calfRaises: CALF_RAISES_RU,
  exAnkleRocks: EX_ANKLE_ROCKS_RU,
  exBandInversion: EX_BAND_INVERSION_RU,
  exBigToeLift: EX_BIG_TOE_LIFT_RU,
  exCalfRaises: EX_CALF_RAISES_RU,
  exCalfStretch: EX_CALF_STRETCH_RU,
  exEccentricHeelDrops: EX_ECCENTRIC_HEEL_DROPS_RU,
  exFootRoll: EX_FOOT_ROLL_RU,
  exHipAbduction: EX_HIP_ABDUCTION_RU,
  exPlantarFasciaStretch: EX_PLANTAR_FASCIA_STRETCH_RU,
  exShortFoot: EX_SHORT_FOOT_RU,
  exSingleLegBalance: EX_SINGLE_LEG_BALANCE_RU,
  exSoleusStretch: EX_SOLEUS_STRETCH_RU,
  exTibialisRaises: EX_TIBIALIS_RAISES_RU,
  exToeSpread: EX_TOE_SPREAD_RU,
  exTowelHeelRaise: EX_TOWEL_HEEL_RAISE_RU,
  exTowelScrunch: EX_TOWEL_SCRUNCH_RU,
  haglunds: HAGLUNDS_RU,
  hammerToe: HAMMER_TOE_RU,
  heelFatPad: HEEL_FAT_PAD_RU,
  heelPainAfterWalking: HEEL_PAIN_AFTER_WALKING_RU,
  heelPainAtNight: HEEL_PAIN_AT_NIGHT_RU,
  pfPregnancy: PF_PREGNANCY_RU,
  heelSpurExercises: HEEL_SPUR_EXERCISES_RU,
  highArches: HIGH_ARCHES_RU,
  hubFlatFeet: HUB_FLAT_FEET_RU,
  hubPlantarFasciitis: HUB_PLANTAR_FASCIITIS_RU,
  morningHeelPain: MORNING_HEEL_PAIN_RU,
  mortons: MORTONS_RU,
  nurses: NURSES_RU,
  pfDuration: PF_DURATION_RU,
  pfVsHeelSpur: PF_VS_HEEL_SPUR_RU,
  pttd: PTTD_RU,
  sesamoiditis: SESAMOIDITIS_RU,
  severs: SEVERS_RU,
  shinSplints: SHIN_SPLINTS_RU,
  standingDesk: STANDING_DESK_RU,
  standing: STANDING_RU,
  topOfFoot: TOP_OF_FOOT_RU,
  vsExakt: VS_EXAKT_RU,
  exaktAlt: EXAKT_ALT_RU,
  bestFlatApp: BEST_FLAT_APP_RU,
  pfTaping: PF_TAPING_RU,
  flatFeetKneePain: FLAT_FEET_KNEE_PAIN_RU,
  massageBall: MASSAGE_BALL_RU,
  toeStrengthening: TOE_STRENGTHENING_RU,
  insolesVsExercises: INSOLES_VS_EXERCISES_RU,
  nightSplints: NIGHT_SPLINTS_RU,
  ankleStrengthening: ANKLE_STRENGTHENING_RU,
  flatFeetAge: FLAT_FEET_AGE_RU,
  iceHeat: ICE_HEAT_RU,
  ankleMobility: ANKLE_MOBILITY_RU,
  footStrengthening: FOOT_STRENGTHENING_RU,
  barefoot: BAREFOOT_RU,
  flatFeetBackPain: FLAT_FEET_BACK_PAIN_RU,
  flatFeetKids: FLAT_FEET_KIDS_RU,
  tightCalves: TIGHT_CALVES_RU,
  walkingPf: WALKING_PF_RU,
  pfVsAchilles: PF_VS_ACHILLES_RU,
  runnersFootExercises: RUNNERS_FOOT_EXERCISES_RU,
  teachers: TEACHERS_RU,
  pfVsStressFracture: PF_VS_STRESS_FRACTURE_RU,
  flatFeetTest: FLAT_FEET_TEST_RU,
  retailWarehouse: RETAIL_WAREHOUSE_RU,
  chefs: CHEFS_RU,
  hairdressers: HAIRDRESSERS_RU,
  weightPf: WEIGHT_PF_RU,
  hikers: HIKERS_RU,
  heelNotPf: HEEL_NOT_PF_RU,
  pfFlareUp: PF_FLARE_UP_RU,
  pfNotBetter: PF_NOT_BETTER_RU,
};
