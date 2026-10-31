import type { CatalogueFor } from '../types';

import { CORE_RU } from './core';
import { EXERCISES_RU } from './exercises';
import { HOME_RU } from './home';
import { NOTIFICATIONS_RU } from './notifications';
import { OFFER_RU } from './offer';
import { JOURNEY_RU } from './journey';
import { ONBOARDING_RU } from './onboarding';
import { PAGES_RU } from './pages';
import { PROFILE_RU } from './profile';
import { PROGRESS_RU } from './progress';
import { QUICK_RU } from './quick';
import { PLAYER_RU } from './player';
import { TESTDAY_RU } from './testday';
import { WIDGET_RU } from './widget';
import { UPDATE_RU } from './update';
import { DONE_RU } from './done';
import { STREAKS_RU } from './streaks';
import { STICKERS_RU } from './stickers';
import { RECAP_RU } from './recap';
import { HOME_OFFER_RU } from './home-offer';
import { CANCEL_RU } from './cancel';
import { PASS_RU } from './pass';
import { COMMUNITY_RU } from './community';
import { INSIGHTS_RU } from './insights';

/**
 * Assembled from its domain files, then checked against English as a whole.
 *
 * The `CatalogueFor` annotation is applied *here* rather than on each domain
 * file, because completeness is a property of the merged object — a domain file
 * holds only its own slice and could never satisfy the full key set on its own.
 * A key missing from every file in this directory is a type error on this line.
 */
export const ru: CatalogueFor<'ru'> = {
  ...CORE_RU,
  ...ONBOARDING_RU,
  ...JOURNEY_RU,
  ...HOME_RU,
  ...PROGRESS_RU,
  ...QUICK_RU,
  ...PROFILE_RU,
  ...OFFER_RU,
  ...NOTIFICATIONS_RU,
  ...EXERCISES_RU,
  ...PAGES_RU,
  ...WIDGET_RU,
  ...PLAYER_RU,
  ...TESTDAY_RU,
  ...UPDATE_RU,
  ...DONE_RU,
  ...STREAKS_RU,
  ...STICKERS_RU,
  ...RECAP_RU,
  ...HOME_OFFER_RU,
  ...CANCEL_RU,
  ...PASS_RU,
  ...COMMUNITY_RU,
  ...INSIGHTS_RU,
};
