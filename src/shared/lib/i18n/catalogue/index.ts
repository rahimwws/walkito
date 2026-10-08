import type { Language } from '../languages';

import { de } from './de';
import { en } from './en';
import { es } from './es';
import { fr } from './fr';
import { it } from './it';
import { pt } from './pt';
import { ru } from './ru';
import type { CatalogueFor } from './types';

/**
 * Every catalogue, keyed by language.
 *
 * All of them are bundled rather than loaded on demand. A phone is offline
 * whenever it feels like it, and a translation that arrives over the network is
 * a screen of blank labels in a tunnel; the files together are a few tens
 * of kilobytes of text, which is smaller than one of the exercise thumbnails.
 */
export const CATALOGUES: { [L in Language]: CatalogueFor<L> } = { en, ru, es, pt, fr, de, it };

export type { CatalogueFor, Key, Source } from './types';
