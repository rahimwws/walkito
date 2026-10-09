import type { EnglishPage, NewLang } from '@/lib/i18n';

import { ACHILLES_PT } from './articles-pt/achilles';
import { ARCH_PAIN_PT } from './articles-pt/arch-pain';
import { BALL_OF_FOOT_PT } from './articles-pt/ball-of-foot';
import { BEST_APP_PT } from './articles-pt/best-app';
import { BUNIONS_PT } from './articles-pt/bunions';
import { CALF_RAISE_TEST_PT } from './articles-pt/calf-raise-test';
import { CALF_RAISES_PT } from './articles-pt/calf-raises';
import { EX_ANKLE_ROCKS_PT } from './articles-pt/ex-ankle-rocks';
import { EX_BAND_INVERSION_PT } from './articles-pt/ex-band-inversion';
import { EX_BIG_TOE_LIFT_PT } from './articles-pt/ex-big-toe-lift';
import { EX_CALF_RAISES_PT } from './articles-pt/ex-calf-raises';
import { EX_CALF_STRETCH_PT } from './articles-pt/ex-calf-stretch';
import { EX_ECCENTRIC_HEEL_DROPS_PT } from './articles-pt/ex-eccentric-heel-drops';
import { EX_FOOT_ROLL_PT } from './articles-pt/ex-foot-roll';
import { EX_HIP_ABDUCTION_PT } from './articles-pt/ex-hip-abduction';
import { EX_PLANTAR_FASCIA_STRETCH_PT } from './articles-pt/ex-plantar-fascia-stretch';
import { EX_SHORT_FOOT_PT } from './articles-pt/ex-short-foot';
import { EX_SINGLE_LEG_BALANCE_PT } from './articles-pt/ex-single-leg-balance';
import { EX_SOLEUS_STRETCH_PT } from './articles-pt/ex-soleus-stretch';
import { EX_TIBIALIS_RAISES_PT } from './articles-pt/ex-tibialis-raises';
import { EX_TOE_SPREAD_PT } from './articles-pt/ex-toe-spread';
import { EX_TOWEL_HEEL_RAISE_PT } from './articles-pt/ex-towel-heel-raise';
import { EX_TOWEL_SCRUNCH_PT } from './articles-pt/ex-towel-scrunch';
import { HAGLUNDS_PT } from './articles-pt/haglunds';
import { HAMMER_TOE_PT } from './articles-pt/hammer-toe';
import { HEEL_FAT_PAD_PT } from './articles-pt/heel-fat-pad';
import { HEEL_PAIN_AFTER_WALKING_PT } from './articles-pt/heel-pain-after-walking';
import { HEEL_PAIN_AT_NIGHT_PT } from './articles-pt/heel-pain-at-night';
import { HEEL_SPUR_EXERCISES_PT } from './articles-pt/heel-spur-exercises';
import { HIGH_ARCHES_PT } from './articles-pt/high-arches';
import { HUB_FLAT_FEET_PT } from './articles-pt/hub-flat-feet';
import { HUB_PLANTAR_FASCIITIS_PT } from './articles-pt/hub-plantar-fasciitis';
import { MORNING_HEEL_PAIN_PT } from './articles-pt/morning-heel-pain';
import { MORTONS_PT } from './articles-pt/mortons';
import { NURSES_PT } from './articles-pt/nurses';
import { PF_DURATION_PT } from './articles-pt/pf-duration';
import { PF_VS_HEEL_SPUR_PT } from './articles-pt/pf-vs-heel-spur';
import { PTTD_PT } from './articles-pt/pttd';
import { SESAMOIDITIS_PT } from './articles-pt/sesamoiditis';
import { SEVERS_PT } from './articles-pt/severs';
import { SHIN_SPLINTS_PT } from './articles-pt/shin-splints';
import { STANDING_DESK_PT } from './articles-pt/standing-desk';
import { STANDING_PT } from './articles-pt/standing';
import { TOP_OF_FOOT_PT } from './articles-pt/top-of-foot';
import { VS_EXAKT_PT } from './articles-pt/vs-exakt';
import { ACHILLES_FR } from './articles-fr/achilles';
import { ARCH_PAIN_FR } from './articles-fr/arch-pain';
import { BALL_OF_FOOT_FR } from './articles-fr/ball-of-foot';
import { BEST_APP_FR } from './articles-fr/best-app';
import { BUNIONS_FR } from './articles-fr/bunions';
import { CALF_RAISE_TEST_FR } from './articles-fr/calf-raise-test';
import { CALF_RAISES_FR } from './articles-fr/calf-raises';
import { EX_ANKLE_ROCKS_FR } from './articles-fr/ex-ankle-rocks';
import { EX_BAND_INVERSION_FR } from './articles-fr/ex-band-inversion';
import { EX_BIG_TOE_LIFT_FR } from './articles-fr/ex-big-toe-lift';
import { EX_CALF_RAISES_FR } from './articles-fr/ex-calf-raises';
import { EX_CALF_STRETCH_FR } from './articles-fr/ex-calf-stretch';
import { EX_ECCENTRIC_HEEL_DROPS_FR } from './articles-fr/ex-eccentric-heel-drops';
import { EX_FOOT_ROLL_FR } from './articles-fr/ex-foot-roll';
import { EX_HIP_ABDUCTION_FR } from './articles-fr/ex-hip-abduction';
import { EX_PLANTAR_FASCIA_STRETCH_FR } from './articles-fr/ex-plantar-fascia-stretch';
import { EX_SHORT_FOOT_FR } from './articles-fr/ex-short-foot';
import { EX_SINGLE_LEG_BALANCE_FR } from './articles-fr/ex-single-leg-balance';
import { EX_SOLEUS_STRETCH_FR } from './articles-fr/ex-soleus-stretch';
import { EX_TIBIALIS_RAISES_FR } from './articles-fr/ex-tibialis-raises';
import { EX_TOE_SPREAD_FR } from './articles-fr/ex-toe-spread';
import { EX_TOWEL_HEEL_RAISE_FR } from './articles-fr/ex-towel-heel-raise';
import { EX_TOWEL_SCRUNCH_FR } from './articles-fr/ex-towel-scrunch';
import { HAGLUNDS_FR } from './articles-fr/haglunds';
import { HAMMER_TOE_FR } from './articles-fr/hammer-toe';
import { HEEL_FAT_PAD_FR } from './articles-fr/heel-fat-pad';
import { HEEL_PAIN_AFTER_WALKING_FR } from './articles-fr/heel-pain-after-walking';
import { HEEL_PAIN_AT_NIGHT_FR } from './articles-fr/heel-pain-at-night';
import { HEEL_SPUR_EXERCISES_FR } from './articles-fr/heel-spur-exercises';
import { HIGH_ARCHES_FR } from './articles-fr/high-arches';
import { HUB_FLAT_FEET_FR } from './articles-fr/hub-flat-feet';
import { HUB_PLANTAR_FASCIITIS_FR } from './articles-fr/hub-plantar-fasciitis';
import { MORNING_HEEL_PAIN_FR } from './articles-fr/morning-heel-pain';
import { MORTONS_FR } from './articles-fr/mortons';
import { NURSES_FR } from './articles-fr/nurses';
import { PF_DURATION_FR } from './articles-fr/pf-duration';
import { PF_VS_HEEL_SPUR_FR } from './articles-fr/pf-vs-heel-spur';
import { PTTD_FR } from './articles-fr/pttd';
import { SESAMOIDITIS_FR } from './articles-fr/sesamoiditis';
import { SEVERS_FR } from './articles-fr/severs';
import { SHIN_SPLINTS_FR } from './articles-fr/shin-splints';
import { STANDING_DESK_FR } from './articles-fr/standing-desk';
import { STANDING_FR } from './articles-fr/standing';
import { TOP_OF_FOOT_FR } from './articles-fr/top-of-foot';
import { VS_EXAKT_FR } from './articles-fr/vs-exakt';
import { ACHILLES_IT } from './articles-it/achilles';
import { ARCH_PAIN_IT } from './articles-it/arch-pain';
import { BALL_OF_FOOT_IT } from './articles-it/ball-of-foot';
import { BEST_APP_IT } from './articles-it/best-app';
import { BUNIONS_IT } from './articles-it/bunions';
import { CALF_RAISE_TEST_IT } from './articles-it/calf-raise-test';
import { CALF_RAISES_IT } from './articles-it/calf-raises';
import { EX_ANKLE_ROCKS_IT } from './articles-it/ex-ankle-rocks';
import { EX_BAND_INVERSION_IT } from './articles-it/ex-band-inversion';
import { EX_BIG_TOE_LIFT_IT } from './articles-it/ex-big-toe-lift';
import { EX_CALF_RAISES_IT } from './articles-it/ex-calf-raises';
import { EX_CALF_STRETCH_IT } from './articles-it/ex-calf-stretch';
import { EX_ECCENTRIC_HEEL_DROPS_IT } from './articles-it/ex-eccentric-heel-drops';
import { EX_FOOT_ROLL_IT } from './articles-it/ex-foot-roll';
import { EX_HIP_ABDUCTION_IT } from './articles-it/ex-hip-abduction';
import { EX_PLANTAR_FASCIA_STRETCH_IT } from './articles-it/ex-plantar-fascia-stretch';
import { EX_SHORT_FOOT_IT } from './articles-it/ex-short-foot';
import { EX_SINGLE_LEG_BALANCE_IT } from './articles-it/ex-single-leg-balance';
import { EX_SOLEUS_STRETCH_IT } from './articles-it/ex-soleus-stretch';
import { EX_TIBIALIS_RAISES_IT } from './articles-it/ex-tibialis-raises';
import { EX_TOE_SPREAD_IT } from './articles-it/ex-toe-spread';
import { EX_TOWEL_HEEL_RAISE_IT } from './articles-it/ex-towel-heel-raise';
import { EX_TOWEL_SCRUNCH_IT } from './articles-it/ex-towel-scrunch';
import { HAGLUNDS_IT } from './articles-it/haglunds';
import { HAMMER_TOE_IT } from './articles-it/hammer-toe';
import { HEEL_FAT_PAD_IT } from './articles-it/heel-fat-pad';
import { HEEL_PAIN_AFTER_WALKING_IT } from './articles-it/heel-pain-after-walking';
import { HEEL_PAIN_AT_NIGHT_IT } from './articles-it/heel-pain-at-night';
import { HEEL_SPUR_EXERCISES_IT } from './articles-it/heel-spur-exercises';
import { HIGH_ARCHES_IT } from './articles-it/high-arches';
import { HUB_FLAT_FEET_IT } from './articles-it/hub-flat-feet';
import { HUB_PLANTAR_FASCIITIS_IT } from './articles-it/hub-plantar-fasciitis';
import { MORNING_HEEL_PAIN_IT } from './articles-it/morning-heel-pain';
import { MORTONS_IT } from './articles-it/mortons';
import { NURSES_IT } from './articles-it/nurses';
import { PF_DURATION_IT } from './articles-it/pf-duration';
import { PF_VS_HEEL_SPUR_IT } from './articles-it/pf-vs-heel-spur';
import { PTTD_IT } from './articles-it/pttd';
import { SESAMOIDITIS_IT } from './articles-it/sesamoiditis';
import { SEVERS_IT } from './articles-it/severs';
import { SHIN_SPLINTS_IT } from './articles-it/shin-splints';
import { STANDING_DESK_IT } from './articles-it/standing-desk';
import { STANDING_IT } from './articles-it/standing';
import { TOP_OF_FOOT_IT } from './articles-it/top-of-foot';
import { VS_EXAKT_IT } from './articles-it/vs-exakt';
import { ACHILLES_DE } from './articles-de/achilles';
import { ARCH_PAIN_DE } from './articles-de/arch-pain';
import { BALL_OF_FOOT_DE } from './articles-de/ball-of-foot';
import { BEST_APP_DE } from './articles-de/best-app';
import { BUNIONS_DE } from './articles-de/bunions';
import { CALF_RAISE_TEST_DE } from './articles-de/calf-raise-test';
import { CALF_RAISES_DE } from './articles-de/calf-raises';
import { EX_ANKLE_ROCKS_DE } from './articles-de/ex-ankle-rocks';
import { EX_BAND_INVERSION_DE } from './articles-de/ex-band-inversion';
import { EX_BIG_TOE_LIFT_DE } from './articles-de/ex-big-toe-lift';
import { EX_CALF_RAISES_DE } from './articles-de/ex-calf-raises';
import { EX_CALF_STRETCH_DE } from './articles-de/ex-calf-stretch';
import { EX_ECCENTRIC_HEEL_DROPS_DE } from './articles-de/ex-eccentric-heel-drops';
import { EX_FOOT_ROLL_DE } from './articles-de/ex-foot-roll';
import { EX_HIP_ABDUCTION_DE } from './articles-de/ex-hip-abduction';
import { EX_PLANTAR_FASCIA_STRETCH_DE } from './articles-de/ex-plantar-fascia-stretch';
import { EX_SHORT_FOOT_DE } from './articles-de/ex-short-foot';
import { EX_SINGLE_LEG_BALANCE_DE } from './articles-de/ex-single-leg-balance';
import { EX_SOLEUS_STRETCH_DE } from './articles-de/ex-soleus-stretch';
import { EX_TIBIALIS_RAISES_DE } from './articles-de/ex-tibialis-raises';
import { EX_TOE_SPREAD_DE } from './articles-de/ex-toe-spread';
import { EX_TOWEL_HEEL_RAISE_DE } from './articles-de/ex-towel-heel-raise';
import { EX_TOWEL_SCRUNCH_DE } from './articles-de/ex-towel-scrunch';
import { HAGLUNDS_DE } from './articles-de/haglunds';
import { HAMMER_TOE_DE } from './articles-de/hammer-toe';
import { HEEL_FAT_PAD_DE } from './articles-de/heel-fat-pad';
import { HEEL_PAIN_AFTER_WALKING_DE } from './articles-de/heel-pain-after-walking';
import { HEEL_PAIN_AT_NIGHT_DE } from './articles-de/heel-pain-at-night';
import { HEEL_SPUR_EXERCISES_DE } from './articles-de/heel-spur-exercises';
import { HIGH_ARCHES_DE } from './articles-de/high-arches';
import { HUB_FLAT_FEET_DE } from './articles-de/hub-flat-feet';
import { HUB_PLANTAR_FASCIITIS_DE } from './articles-de/hub-plantar-fasciitis';
import { MORNING_HEEL_PAIN_DE } from './articles-de/morning-heel-pain';
import { MORTONS_DE } from './articles-de/mortons';
import { NURSES_DE } from './articles-de/nurses';
import { PF_DURATION_DE } from './articles-de/pf-duration';
import { PF_VS_HEEL_SPUR_DE } from './articles-de/pf-vs-heel-spur';
import { PTTD_DE } from './articles-de/pttd';
import { SESAMOIDITIS_DE } from './articles-de/sesamoiditis';
import { SEVERS_DE } from './articles-de/severs';
import { SHIN_SPLINTS_DE } from './articles-de/shin-splints';
import { STANDING_DESK_DE } from './articles-de/standing-desk';
import { STANDING_DE } from './articles-de/standing';
import { TOP_OF_FOOT_DE } from './articles-de/top-of-foot';
import { VS_EXAKT_DE } from './articles-de/vs-exakt';
import type { Guide } from './types';

/** Articles in Portuguese, French, Italian and German, keyed by language and page.
 * Generated by `scripts/gen-articles-new.py`. */
export const ARTICLES_NEW: Record<NewLang, Partial<Record<EnglishPage, Guide>>> = {
  pt: {
    achilles: ACHILLES_PT,
    archPain: ARCH_PAIN_PT,
    ballOfFoot: BALL_OF_FOOT_PT,
    bestApp: BEST_APP_PT,
    bunions: BUNIONS_PT,
    calfRaiseTest: CALF_RAISE_TEST_PT,
    calfRaises: CALF_RAISES_PT,
    exAnkleRocks: EX_ANKLE_ROCKS_PT,
    exBandInversion: EX_BAND_INVERSION_PT,
    exBigToeLift: EX_BIG_TOE_LIFT_PT,
    exCalfRaises: EX_CALF_RAISES_PT,
    exCalfStretch: EX_CALF_STRETCH_PT,
    exEccentricHeelDrops: EX_ECCENTRIC_HEEL_DROPS_PT,
    exFootRoll: EX_FOOT_ROLL_PT,
    exHipAbduction: EX_HIP_ABDUCTION_PT,
    exPlantarFasciaStretch: EX_PLANTAR_FASCIA_STRETCH_PT,
    exShortFoot: EX_SHORT_FOOT_PT,
    exSingleLegBalance: EX_SINGLE_LEG_BALANCE_PT,
    exSoleusStretch: EX_SOLEUS_STRETCH_PT,
    exTibialisRaises: EX_TIBIALIS_RAISES_PT,
    exToeSpread: EX_TOE_SPREAD_PT,
    exTowelHeelRaise: EX_TOWEL_HEEL_RAISE_PT,
    exTowelScrunch: EX_TOWEL_SCRUNCH_PT,
    haglunds: HAGLUNDS_PT,
    hammerToe: HAMMER_TOE_PT,
    heelFatPad: HEEL_FAT_PAD_PT,
    heelPainAfterWalking: HEEL_PAIN_AFTER_WALKING_PT,
    heelPainAtNight: HEEL_PAIN_AT_NIGHT_PT,
    heelSpurExercises: HEEL_SPUR_EXERCISES_PT,
    highArches: HIGH_ARCHES_PT,
    hubFlatFeet: HUB_FLAT_FEET_PT,
    hubPlantarFasciitis: HUB_PLANTAR_FASCIITIS_PT,
    morningHeelPain: MORNING_HEEL_PAIN_PT,
    mortons: MORTONS_PT,
    nurses: NURSES_PT,
    pfDuration: PF_DURATION_PT,
    pfVsHeelSpur: PF_VS_HEEL_SPUR_PT,
    pttd: PTTD_PT,
    sesamoiditis: SESAMOIDITIS_PT,
    severs: SEVERS_PT,
    shinSplints: SHIN_SPLINTS_PT,
    standingDesk: STANDING_DESK_PT,
    standing: STANDING_PT,
    topOfFoot: TOP_OF_FOOT_PT,
    vsExakt: VS_EXAKT_PT,
  },
  fr: {
    achilles: ACHILLES_FR,
    archPain: ARCH_PAIN_FR,
    ballOfFoot: BALL_OF_FOOT_FR,
    bestApp: BEST_APP_FR,
    bunions: BUNIONS_FR,
    calfRaiseTest: CALF_RAISE_TEST_FR,
    calfRaises: CALF_RAISES_FR,
    exAnkleRocks: EX_ANKLE_ROCKS_FR,
    exBandInversion: EX_BAND_INVERSION_FR,
    exBigToeLift: EX_BIG_TOE_LIFT_FR,
    exCalfRaises: EX_CALF_RAISES_FR,
    exCalfStretch: EX_CALF_STRETCH_FR,
    exEccentricHeelDrops: EX_ECCENTRIC_HEEL_DROPS_FR,
    exFootRoll: EX_FOOT_ROLL_FR,
    exHipAbduction: EX_HIP_ABDUCTION_FR,
    exPlantarFasciaStretch: EX_PLANTAR_FASCIA_STRETCH_FR,
    exShortFoot: EX_SHORT_FOOT_FR,
    exSingleLegBalance: EX_SINGLE_LEG_BALANCE_FR,
    exSoleusStretch: EX_SOLEUS_STRETCH_FR,
    exTibialisRaises: EX_TIBIALIS_RAISES_FR,
    exToeSpread: EX_TOE_SPREAD_FR,
    exTowelHeelRaise: EX_TOWEL_HEEL_RAISE_FR,
    exTowelScrunch: EX_TOWEL_SCRUNCH_FR,
    haglunds: HAGLUNDS_FR,
    hammerToe: HAMMER_TOE_FR,
    heelFatPad: HEEL_FAT_PAD_FR,
    heelPainAfterWalking: HEEL_PAIN_AFTER_WALKING_FR,
    heelPainAtNight: HEEL_PAIN_AT_NIGHT_FR,
    heelSpurExercises: HEEL_SPUR_EXERCISES_FR,
    highArches: HIGH_ARCHES_FR,
    hubFlatFeet: HUB_FLAT_FEET_FR,
    hubPlantarFasciitis: HUB_PLANTAR_FASCIITIS_FR,
    morningHeelPain: MORNING_HEEL_PAIN_FR,
    mortons: MORTONS_FR,
    nurses: NURSES_FR,
    pfDuration: PF_DURATION_FR,
    pfVsHeelSpur: PF_VS_HEEL_SPUR_FR,
    pttd: PTTD_FR,
    sesamoiditis: SESAMOIDITIS_FR,
    severs: SEVERS_FR,
    shinSplints: SHIN_SPLINTS_FR,
    standingDesk: STANDING_DESK_FR,
    standing: STANDING_FR,
    topOfFoot: TOP_OF_FOOT_FR,
    vsExakt: VS_EXAKT_FR,
  },
  it: {
    achilles: ACHILLES_IT,
    archPain: ARCH_PAIN_IT,
    ballOfFoot: BALL_OF_FOOT_IT,
    bestApp: BEST_APP_IT,
    bunions: BUNIONS_IT,
    calfRaiseTest: CALF_RAISE_TEST_IT,
    calfRaises: CALF_RAISES_IT,
    exAnkleRocks: EX_ANKLE_ROCKS_IT,
    exBandInversion: EX_BAND_INVERSION_IT,
    exBigToeLift: EX_BIG_TOE_LIFT_IT,
    exCalfRaises: EX_CALF_RAISES_IT,
    exCalfStretch: EX_CALF_STRETCH_IT,
    exEccentricHeelDrops: EX_ECCENTRIC_HEEL_DROPS_IT,
    exFootRoll: EX_FOOT_ROLL_IT,
    exHipAbduction: EX_HIP_ABDUCTION_IT,
    exPlantarFasciaStretch: EX_PLANTAR_FASCIA_STRETCH_IT,
    exShortFoot: EX_SHORT_FOOT_IT,
    exSingleLegBalance: EX_SINGLE_LEG_BALANCE_IT,
    exSoleusStretch: EX_SOLEUS_STRETCH_IT,
    exTibialisRaises: EX_TIBIALIS_RAISES_IT,
    exToeSpread: EX_TOE_SPREAD_IT,
    exTowelHeelRaise: EX_TOWEL_HEEL_RAISE_IT,
    exTowelScrunch: EX_TOWEL_SCRUNCH_IT,
    haglunds: HAGLUNDS_IT,
    hammerToe: HAMMER_TOE_IT,
    heelFatPad: HEEL_FAT_PAD_IT,
    heelPainAfterWalking: HEEL_PAIN_AFTER_WALKING_IT,
    heelPainAtNight: HEEL_PAIN_AT_NIGHT_IT,
    heelSpurExercises: HEEL_SPUR_EXERCISES_IT,
    highArches: HIGH_ARCHES_IT,
    hubFlatFeet: HUB_FLAT_FEET_IT,
    hubPlantarFasciitis: HUB_PLANTAR_FASCIITIS_IT,
    morningHeelPain: MORNING_HEEL_PAIN_IT,
    mortons: MORTONS_IT,
    nurses: NURSES_IT,
    pfDuration: PF_DURATION_IT,
    pfVsHeelSpur: PF_VS_HEEL_SPUR_IT,
    pttd: PTTD_IT,
    sesamoiditis: SESAMOIDITIS_IT,
    severs: SEVERS_IT,
    shinSplints: SHIN_SPLINTS_IT,
    standingDesk: STANDING_DESK_IT,
    standing: STANDING_IT,
    topOfFoot: TOP_OF_FOOT_IT,
    vsExakt: VS_EXAKT_IT,
  },
  de: {
    achilles: ACHILLES_DE,
    archPain: ARCH_PAIN_DE,
    ballOfFoot: BALL_OF_FOOT_DE,
    bestApp: BEST_APP_DE,
    bunions: BUNIONS_DE,
    calfRaiseTest: CALF_RAISE_TEST_DE,
    calfRaises: CALF_RAISES_DE,
    exAnkleRocks: EX_ANKLE_ROCKS_DE,
    exBandInversion: EX_BAND_INVERSION_DE,
    exBigToeLift: EX_BIG_TOE_LIFT_DE,
    exCalfRaises: EX_CALF_RAISES_DE,
    exCalfStretch: EX_CALF_STRETCH_DE,
    exEccentricHeelDrops: EX_ECCENTRIC_HEEL_DROPS_DE,
    exFootRoll: EX_FOOT_ROLL_DE,
    exHipAbduction: EX_HIP_ABDUCTION_DE,
    exPlantarFasciaStretch: EX_PLANTAR_FASCIA_STRETCH_DE,
    exShortFoot: EX_SHORT_FOOT_DE,
    exSingleLegBalance: EX_SINGLE_LEG_BALANCE_DE,
    exSoleusStretch: EX_SOLEUS_STRETCH_DE,
    exTibialisRaises: EX_TIBIALIS_RAISES_DE,
    exToeSpread: EX_TOE_SPREAD_DE,
    exTowelHeelRaise: EX_TOWEL_HEEL_RAISE_DE,
    exTowelScrunch: EX_TOWEL_SCRUNCH_DE,
    haglunds: HAGLUNDS_DE,
    hammerToe: HAMMER_TOE_DE,
    heelFatPad: HEEL_FAT_PAD_DE,
    heelPainAfterWalking: HEEL_PAIN_AFTER_WALKING_DE,
    heelPainAtNight: HEEL_PAIN_AT_NIGHT_DE,
    heelSpurExercises: HEEL_SPUR_EXERCISES_DE,
    highArches: HIGH_ARCHES_DE,
    hubFlatFeet: HUB_FLAT_FEET_DE,
    hubPlantarFasciitis: HUB_PLANTAR_FASCIITIS_DE,
    morningHeelPain: MORNING_HEEL_PAIN_DE,
    mortons: MORTONS_DE,
    nurses: NURSES_DE,
    pfDuration: PF_DURATION_DE,
    pfVsHeelSpur: PF_VS_HEEL_SPUR_DE,
    pttd: PTTD_DE,
    sesamoiditis: SESAMOIDITIS_DE,
    severs: SEVERS_DE,
    shinSplints: SHIN_SPLINTS_DE,
    standingDesk: STANDING_DESK_DE,
    standing: STANDING_DE,
    topOfFoot: TOP_OF_FOOT_DE,
    vsExakt: VS_EXAKT_DE,
  },
};
