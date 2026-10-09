import type { CatalogueFor } from '../types';

import { AI_CODE_FR } from './ai-code';
import { CORE_FR } from './core';
import { EXERCISES_FR } from './exercises';
import { HOME_FR } from './home';
import { NOTIFICATIONS_FR } from './notifications';
import { OFFER_FR } from './offer';
import { JOURNEY_FR } from './journey';
import { ONBOARDING_FR } from './onboarding';
import { PAGES_FR } from './pages';
import { PROFILE_FR } from './profile';
import { PROGRESS_FR } from './progress';
import { QUICK_FR } from './quick';
import { PLAYER_FR } from './player';
import { TESTDAY_FR } from './testday';
import { WIDGET_FR } from './widget';
import { UPDATE_FR } from './update';

/**
 * Assembled from its domain files, then checked against English as a whole.
 *
 * The `CatalogueFor` annotation is applied *here* rather than on each domain
 * file, because completeness is a property of the merged object — a domain file
 * holds only its own slice and could never satisfy the full key set on its own.
 * A key missing from every file in this directory is a type error on this line.
 */
export const fr: CatalogueFor<'fr'> = {
  ...CORE_FR,
  ...ONBOARDING_FR,
  ...JOURNEY_FR,
  ...HOME_FR,
  ...PROGRESS_FR,
  ...QUICK_FR,
  ...PROFILE_FR,
  ...OFFER_FR,
  ...NOTIFICATIONS_FR,
  ...EXERCISES_FR,
  ...PAGES_FR,
  ...WIDGET_FR,
  ...PLAYER_FR,
  ...TESTDAY_FR,
  ...UPDATE_FR,
  ...AI_CODE_FR,
};
