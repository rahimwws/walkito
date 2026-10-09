import type { CatalogueFor } from '../types';

import { AI_CODE_PT } from './ai-code';
import { CORE_PT } from './core';
import { EXERCISES_PT } from './exercises';
import { HOME_PT } from './home';
import { NOTIFICATIONS_PT } from './notifications';
import { OFFER_PT } from './offer';
import { JOURNEY_PT } from './journey';
import { ONBOARDING_PT } from './onboarding';
import { PAGES_PT } from './pages';
import { PROFILE_PT } from './profile';
import { PROGRESS_PT } from './progress';
import { QUICK_PT } from './quick';
import { PLAYER_PT } from './player';
import { TESTDAY_PT } from './testday';
import { WIDGET_PT } from './widget';
import { UPDATE_PT } from './update';

/**
 * Assembled from its domain files, then checked against English as a whole.
 *
 * The `CatalogueFor` annotation is applied *here* rather than on each domain
 * file, because completeness is a property of the merged object — a domain file
 * holds only its own slice and could never satisfy the full key set on its own.
 * A key missing from every file in this directory is a type error on this line.
 */
export const pt: CatalogueFor<'pt'> = {
  ...CORE_PT,
  ...ONBOARDING_PT,
  ...JOURNEY_PT,
  ...HOME_PT,
  ...PROGRESS_PT,
  ...QUICK_PT,
  ...PROFILE_PT,
  ...OFFER_PT,
  ...NOTIFICATIONS_PT,
  ...EXERCISES_PT,
  ...PAGES_PT,
  ...WIDGET_PT,
  ...PLAYER_PT,
  ...TESTDAY_PT,
  ...UPDATE_PT,
  ...AI_CODE_PT,
};
