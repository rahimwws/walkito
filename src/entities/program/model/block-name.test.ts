import { describe, expect, test } from 'bun:test';

import { LANGUAGES, translatorFor } from '@/shared/lib/i18n';

import { PLAN_BLOCKS, blockName } from './program';

/**
 * The block name was the last English string in the app, and it was the one
 * that leaked furthest.
 *
 * `Block.name` is an identifier — `BLOCKS` is built from it and the plan data
 * is keyed by it — and it was also being printed. So three separate screens and
 * the notification bodies rendered "День 17 · Блок 2 · Strengthen", a
 * translated sentence with an English noun dropped into the middle of it. Three
 * independent migrations each reported it and none could fix it, because none
 * of them owned this file.
 *
 * These assertions exist so it cannot come back: a block added without copy
 * fails here rather than on a Russian user's home screen.
 */
describe('blockName', () => {
  test('every block in the plan has a name in every language', () => {
    for (const language of LANGUAGES) {
      const t = translatorFor(language);
      for (const block of PLAN_BLOCKS) {
        const name = blockName(block.index, t);
        expect(name.length, `${language} block ${block.index}`).toBeGreaterThan(0);
        // A raw key leaking through is the failure mode a fallback would hide.
        expect(name, `${language} block ${block.index}`).not.toContain('block.');
      }
    }
  });

  test('the name actually changes with the language', () => {
    const en = blockName(2, translatorFor('en'));
    const ru = blockName(2, translatorFor('ru'));
    const es = blockName(2, translatorFor('es'));

    expect(en).toBe('Strengthen');
    expect(ru).not.toBe(en);
    expect(es).not.toBe(en);
    // Cyrillic, not a transliteration of the English.
    expect(ru).toMatch(/[А-Яа-я]/);
  });

  /** The index wraps, so a block number past the end of the plan still names
   * something rather than returning undefined. */
  test('wraps rather than falling off the end', () => {
    const t = translatorFor('en');
    expect(blockName(PLAN_BLOCKS.length + 1, t)).toBe(blockName(1, t));
  });

  /** Called without a translator by the non-React callers — notification
   * bodies are built where no hook can run. */
  test('resolves against the stored language when given no translator', () => {
    expect(blockName(1).length).toBeGreaterThan(0);
  });
});
