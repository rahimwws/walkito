import type { CatalogueFor } from '../types';

import { AI_CODE_DE } from './ai-code';
import { CORE_DE } from './core';
import { EXERCISES_DE } from './exercises';
import { HOME_DE } from './home';
import { NOTIFICATIONS_DE } from './notifications';
import { OFFER_DE } from './offer';
import { JOURNEY_DE } from './journey';
import { ONBOARDING_DE } from './onboarding';
import { PAGES_DE } from './pages';
import { PROFILE_DE } from './profile';
import { PROGRESS_DE } from './progress';
import { QUICK_DE } from './quick';
import { PLAYER_DE } from './player';
import { TESTDAY_DE } from './testday';
import { WIDGET_DE } from './widget';
import { UPDATE_DE } from './update';

/**
 * Assembled from its domain files, then checked against English as a whole.
 *
 * The `CatalogueFor` annotation is applied *here* rather than on each domain
 * file, because completeness is a property of the merged object — a domain file
 * holds only its own slice and could never satisfy the full key set on its own.
 * A key missing from every file in this directory is a type error on this line.
 */
export const de: CatalogueFor<'de'> = {
  ...CORE_DE,
  ...ONBOARDING_DE,
  ...JOURNEY_DE,
  ...HOME_DE,
  ...PROGRESS_DE,
  ...QUICK_DE,
  ...PROFILE_DE,
  ...OFFER_DE,
  ...NOTIFICATIONS_DE,
  ...EXERCISES_DE,
  ...PAGES_DE,
  ...WIDGET_DE,
  ...PLAYER_DE,
  ...TESTDAY_DE,
  ...UPDATE_DE,
  ...AI_CODE_DE,
};
