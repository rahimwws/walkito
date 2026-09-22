import type { CatalogueFor } from '../types';

import { CORE_ES } from './core';
import { EXERCISES_ES } from './exercises';
import { HOME_ES } from './home';
import { NOTIFICATIONS_ES } from './notifications';
import { OFFER_ES } from './offer';
import { ONBOARDING_ES } from './onboarding';
import { PAGES_ES } from './pages';
import { PROFILE_ES } from './profile';
import { PROGRESS_ES } from './progress';
import { QUICK_ES } from './quick';

/**
 * Assembled from its domain files, then checked against English as a whole.
 *
 * The `CatalogueFor` annotation is applied *here* rather than on each domain
 * file, because completeness is a property of the merged object — a domain file
 * holds only its own slice and could never satisfy the full key set on its own.
 * A key missing from every file in this directory is a type error on this line.
 */
export const es: CatalogueFor<'es'> = {
  ...CORE_ES,
  ...ONBOARDING_ES,
  ...HOME_ES,
  ...PROGRESS_ES,
  ...QUICK_ES,
  ...PROFILE_ES,
  ...OFFER_ES,
  ...NOTIFICATIONS_ES,
  ...EXERCISES_ES,
  ...PAGES_ES,
};
