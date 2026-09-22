import type { Language } from '../languages';

import { en } from './en';
import { es } from './es';
import { ru } from './ru';
import type { CatalogueFor } from './types';

/**
 * Every catalogue, keyed by language.
 *
 * All three are bundled rather than loaded on demand. A phone is offline
 * whenever it feels like it, and a translation that arrives over the network is
 * a screen of blank labels in a tunnel; the three files together are a few tens
 * of kilobytes of text, which is smaller than one of the exercise thumbnails.
 */
export const CATALOGUES: { [L in Language]: CatalogueFor<L> } = { en, ru, es };

export type { CatalogueFor, Key, Source } from './types';
