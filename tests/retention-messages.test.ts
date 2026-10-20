import { describe, expect, test } from 'bun:test';

import {
  RETENTION_LOCALES,
  RETENTION_MESSAGES,
  retentionMessageFor,
} from '../supabase/functions/_shared/retention/messages';

describe('retention messages', () => {
  const entries = Object.entries(RETENTION_MESSAGES);

  test("fit Apple's limits", () => {
    for (const [, m] of entries) {
      expect([...m.header].length).toBeLessThanOrEqual(66);
      expect([...m.body].length).toBeLessThanOrEqual(144);
    }
  });

  test('every language has a message, a distinct id and at least one locale', () => {
    expect(new Set(entries.map(([, m]) => m.id)).size).toBe(entries.length);
    for (const [language] of entries) {
      expect(RETENTION_LOCALES[language as keyof typeof RETENTION_LOCALES].length).toBeGreaterThan(0);
    }
  });

  test('a plain hyphen, never a long dash', () => {
    for (const [, m] of entries) expect(`${m.header} ${m.body}`).not.toMatch(/[—–]/);
  });

  test('picks by the language of the device locale, English otherwise', () => {
    expect(retentionMessageFor('ru_RU').id).toBe(RETENTION_MESSAGES.ru.id);
    expect(retentionMessageFor('pt-BR').id).toBe(RETENTION_MESSAGES.pt.id);
    expect(retentionMessageFor('ja_JP').id).toBe(RETENTION_MESSAGES.en.id);
    expect(retentionMessageFor(undefined).id).toBe(RETENTION_MESSAGES.en.id);
  });
});
