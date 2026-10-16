import type { CatalogueFor } from '../types';

import { CORE_ES } from './core';
import { EXERCISES_ES } from './exercises';
import { HOME_ES } from './home';
import { NOTIFICATIONS_ES } from './notifications';
import { OFFER_ES } from './offer';
import { JOURNEY_ES } from './journey';
import { ONBOARDING_ES } from './onboarding';
import { PAGES_ES } from './pages';
import { PROFILE_ES } from './profile';
import { PROGRESS_ES } from './progress';
import { QUICK_ES } from './quick';
import { PLAYER_ES } from './player';
import { TESTDAY_ES } from './testday';
import { WIDGET_ES } from './widget';
import { UPDATE_ES } from './update';
import { DONE_ES } from './done';
import { STREAKS_ES } from './streaks';
import { STICKERS_ES } from './stickers';
import { RECAP_ES } from './recap';
import { HOME_OFFER_ES } from './home-offer';
import { CANCEL_ES } from './cancel';
import { PASS_ES } from './pass';
import { COMMUNITY_ES } from './community';
import { INSIGHTS_ES } from './insights';

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
  ...JOURNEY_ES,
  ...HOME_ES,
  ...PROGRESS_ES,
  ...QUICK_ES,
  ...PROFILE_ES,
  ...OFFER_ES,
  ...NOTIFICATIONS_ES,
  ...EXERCISES_ES,
  ...PAGES_ES,
  ...WIDGET_ES,
  ...PLAYER_ES,
  ...TESTDAY_ES,
  ...UPDATE_ES,
  ...DONE_ES,
  ...STREAKS_ES,
  ...STICKERS_ES,
  ...RECAP_ES,
  ...HOME_OFFER_ES,
  ...CANCEL_ES,
  ...PASS_ES,
  ...COMMUNITY_ES,
  ...INSIGHTS_ES,
};
