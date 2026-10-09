import type { CatalogueFor } from '../types';

import { AI_CODE_IT } from './ai-code';
import { CORE_IT } from './core';
import { EXERCISES_IT } from './exercises';
import { HOME_IT } from './home';
import { NOTIFICATIONS_IT } from './notifications';
import { OFFER_IT } from './offer';
import { JOURNEY_IT } from './journey';
import { ONBOARDING_IT } from './onboarding';
import { PAGES_IT } from './pages';
import { PROFILE_IT } from './profile';
import { PROGRESS_IT } from './progress';
import { QUICK_IT } from './quick';
import { PLAYER_IT } from './player';
import { TESTDAY_IT } from './testday';
import { WIDGET_IT } from './widget';
import { UPDATE_IT } from './update';

/**
 * Assembled from its domain files, then checked against English as a whole.
 *
 * The `CatalogueFor` annotation is applied *here* rather than on each domain
 * file, because completeness is a property of the merged object — a domain file
 * holds only its own slice and could never satisfy the full key set on its own.
 * A key missing from every file in this directory is a type error on this line.
 */
export const it: CatalogueFor<'it'> = {
  ...CORE_IT,
  ...ONBOARDING_IT,
  ...JOURNEY_IT,
  ...HOME_IT,
  ...PROGRESS_IT,
  ...QUICK_IT,
  ...PROFILE_IT,
  ...OFFER_IT,
  ...NOTIFICATIONS_IT,
  ...EXERCISES_IT,
  ...PAGES_IT,
  ...WIDGET_IT,
  ...PLAYER_IT,
  ...TESTDAY_IT,
  ...UPDATE_IT,
  ...AI_CODE_IT,
};
