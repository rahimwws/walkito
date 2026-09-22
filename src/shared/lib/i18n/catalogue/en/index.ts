import { CORE_EN } from './core';
import { EXERCISES_EN } from './exercises';
import { HOME_EN } from './home';
import { NOTIFICATIONS_EN } from './notifications';
import { OFFER_EN } from './offer';
import { ONBOARDING_EN } from './onboarding';
import { PAGES_EN } from './pages';
import { PROFILE_EN } from './profile';
import { PROGRESS_EN } from './progress';
import { QUICK_EN } from './quick';

/**
 * English, assembled from its domain files.
 *
 * Split by domain rather than kept as one object because the alternative is a
 * ~450-entry file that every change touches — and because the three languages
 * are edited in parallel, where one file per language is a guaranteed conflict.
 *
 * The spread preserves literal types, which is the property the whole design
 * rests on: `translate.ts` infers each key's placeholders from its template,
 * and an annotation anywhere in this chain would widen them to `string` and
 * silently take the parameter checking with it.
 */
export const en = {
  ...CORE_EN,
  ...ONBOARDING_EN,
  ...HOME_EN,
  ...PROGRESS_EN,
  ...QUICK_EN,
  ...PROFILE_EN,
  ...OFFER_EN,
  ...NOTIFICATIONS_EN,
  ...EXERCISES_EN,
  ...PAGES_EN,
};
