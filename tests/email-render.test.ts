import { describe, expect, test } from 'bun:test';

import { composeMessage, type MailConfig } from '../supabase/functions/_shared/email/compose.ts';
import * as build from '../supabase/functions/_shared/email/content.ts';
import { buttonUrl, unsubscribeToken, verifyUnsubscribeToken } from '../supabase/functions/_shared/email/links.ts';

/**
 * The message Resend receives, rendered for real: links, footer, headers and
 * the one-click unsubscribe token.
 */

const CONFIG: MailConfig = {
  from: 'walkito <hello@walkito.site>',
  replyTo: 'hello@walkito.site',
  postalAddress: '30 N Gould St, Sheridan, WY 82801',
  linkBase: 'https://walkito.site',
  functionsBase: 'https://example.supabase.co/functions/v1',
  unsubscribeSecret: 'test-secret-with-some-length',
};
const USER = '6f1c1d52-3a2b-4c8d-9e0f-1a2b3c4d5e6f';

describe('links', () => {
  test('buttons are universal links carrying the email key', () => {
    expect(buttonUrl('https://walkito.site/', 'today', 'welcome')).toBe('https://walkito.site/open/today/?src=email&e=welcome');
    expect(buttonUrl('https://walkito.site', 'today?minutes=3', 'winback_7')).toBe(
      'https://walkito.site/open/today/?minutes=3&src=email&e=winback_7',
    );
    expect(buttonUrl('https://walkito.site', 'library/morning', 'day2_morning')).toBe(
      'https://walkito.site/open/library/morning/?src=email&e=day2_morning',
    );
  });

  test('an unsubscribe token opens only for the user it was made for', async () => {
    const token = await unsubscribeToken(USER, CONFIG.unsubscribeSecret);
    expect(await verifyUnsubscribeToken(token, CONFIG.unsubscribeSecret)).toBe(USER);
    expect(await verifyUnsubscribeToken(token, 'another-secret')).toBeNull();
    const [, sig] = token.split('.');
    const forged = `${btoa('00000000-0000-0000-0000-000000000000').replace(/=+$/, '')}.${sig}`;
    expect(await verifyUnsubscribeToken(forged, CONFIG.unsubscribeSecret)).toBeNull();
    expect(await verifyUnsubscribeToken('garbage', CONFIG.unsubscribeSecret)).toBeNull();
  });
});

describe('the rendered message', () => {
  test('carries the button, the footer and one-click unsubscribe', async () => {
    const content = build.welcome('ru', { name: 'аня', minutes: 5, runner: false });
    const message = await composeMessage({ key: 'welcome', dedupeKey: 'welcome', content }, { userId: USER, email: 'a@b.co', locale: 'ru' }, CONFIG);

    expect(message.subject).toBe('добро пожаловать в walkito');
    expect(message.to).toEqual(['a@b.co']);
    expect(message.reply_to).toBe('hello@walkito.site');
    expect(message.html).toContain('lang="ru"');
    expect(message.html).toContain('https://walkito.site/open/today/?src=email&amp;e=welcome');
    expect(message.html).toContain('https://walkito.site/email/mascot.png');
    expect(message.html).toContain('https://walkito.site/unsubscribe/?t=');
    expect(message.html).toContain('здравствуйте, аня!');
    expect(message.html).toContain('открыть walkito');
    // The postal address, lowercased like the rest.
    expect(message.html).toContain('30 n gould st, sheridan, wy 82801');
    expect(message.headers['List-Unsubscribe']).toMatch(/^<https:\/\/example\.supabase\.co\/functions\/v1\/email-unsubscribe\?t=.+>$/);
    expect(message.headers['List-Unsubscribe-Post']).toBe('List-Unsubscribe=One-Click');
    expect(message.tags).toContainEqual({ name: 'email_key', value: 'welcome' });
    expect(message.text).toContain('первая сессия займёт 5 минут');
  });
});

describe('the footer without a postal address', () => {
  test('leaves the address line out instead of printing it empty', async () => {
    const content = build.winback7('en');
    const message = await composeMessage(
      { key: 'winback_7', dedupeKey: 'winback_7', content },
      { userId: USER, email: 'a@b.co', locale: 'en' },
      { ...CONFIG, postalAddress: '' },
    );
    expect(message.html).not.toContain('walkito · ');
    expect(message.html).toContain('unsubscribe');
  });
});
