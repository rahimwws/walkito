#!/usr/bin/env bun
/**
 * Apple's Retention Messaging API, from the Mac: the messages iOS shows on
 * its own "Confirm cancellation" page (see `supabase/functions/_shared/
 * retention/messages.ts` for the copy and `retention-message` for the
 * real-time endpoint).
 *
 *   bun scripts/retention-messaging.ts status            messages and their review state
 *   bun scripts/retention-messaging.ts upload            uploads any message Apple does not have
 *   bun scripts/retention-messaging.ts defaults          sets approved messages as each product's default per locale
 *   bun scripts/retention-messaging.ts realtime [url]    shows, or sets, the real-time URL
 *   bun scripts/retention-messaging.ts perftest <originalTransactionId>   sandbox performance test
 *
 * `--sandbox` runs any of them against the sandbox, where uploads are
 * approved at once; the real-time URL must pass the sandbox performance test
 * before production takes it.
 *
 * Signs with the In-App Purchase key: `IAP_KEY_ID` and `IAP_ISSUER_ID` in
 * ~/.walkito/release.env, the key at ~/.appstoreconnect/private_keys/
 * SubscriptionKey_<IAP_KEY_ID>.p8. Never in the repository.
 *
 * The API is a pre-release: until Apple grants the app access, every call
 * answers 404.
 */

import { createPrivateKey, sign } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

import {
  RETENTION_LOCALES,
  RETENTION_MESSAGES,
  RETENTION_PRODUCTS,
  type RetentionLanguage,
} from '../supabase/functions/_shared/retention/messages.ts';

const BUNDLE_ID = 'com.walkito.app';
const REALTIME_URL = 'https://illpzsrzfpllovwslmdx.supabase.co/functions/v1/retention-message';

const args = process.argv.slice(2);
const sandbox = args.includes('--sandbox');
const [command, arg] = args.filter((a) => a !== '--sandbox');
const host = sandbox ? 'https://api.storekit-sandbox.apple.com' : 'https://api.storekit.apple.com';

function env(): Record<string, string> {
  const out: Record<string, string> = {};
  const text = readFileSync(join(homedir(), '.walkito/release.env'), 'utf8');
  for (const line of text.split('\n')) {
    const m = line.match(/^\s*(?:export\s+)?([A-Z_]+)=["']?([^"'\n]*)/);
    if (m) out[m[1]] = m[2];
  }
  return out;
}

const { IAP_KEY_ID, IAP_ISSUER_ID } = env();
if (!IAP_KEY_ID || !IAP_ISSUER_ID) throw new Error('IAP_KEY_ID and IAP_ISSUER_ID must be set in ~/.walkito/release.env');
const key = createPrivateKey(
  readFileSync(join(homedir(), `.appstoreconnect/private_keys/SubscriptionKey_${IAP_KEY_ID}.p8`)),
);

const b64url = (data: Buffer | string) => Buffer.from(data).toString('base64url');

function token(): string {
  const now = Math.floor(Date.now() / 1000);
  const head = b64url(JSON.stringify({ alg: 'ES256', kid: IAP_KEY_ID, typ: 'JWT' }));
  const body = b64url(
    JSON.stringify({ iss: IAP_ISSUER_ID, iat: now, exp: now + 1200, aud: 'appstoreconnect-v1', bid: BUNDLE_ID }),
  );
  const signature = sign('sha256', Buffer.from(`${head}.${body}`), { key, dsaEncoding: 'ieee-p1363' });
  return `${head}.${body}.${b64url(signature)}`;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** One call, paced to Apple's one request a second (a tenth of that on the
 * sandbox), retried after a 429 at the time Apple names. */
async function call(method: string, path: string, body?: unknown): Promise<{ status: number; data: any }> {
  for (;;) {
    const res = await fetch(`${host}/inApps/v1/messaging${path}`, {
      method,
      headers: { Authorization: `Bearer ${token()}`, 'Content-Type': 'application/json' },
      body: body == null ? undefined : JSON.stringify(body),
    });
    const text = await res.text();
    if (res.status === 429) {
      const until = Number(res.headers.get('Retry-After'));
      await sleep(Number.isFinite(until) ? Math.max(1000, until - Date.now()) : 10_000);
      continue;
    }
    await sleep(sandbox ? 10_000 : 1100);
    let data: any = text;
    try {
      data = text ? JSON.parse(text) : null;
    } catch {}
    return { status: res.status, data };
  }
}

function fail(what: string, r: { status: number; data: any }): never {
  if (r.status === 404 && (r.data == null || r.data === '')) {
    throw new Error(`${what}: 404. The app has no access to the Retention Messaging API yet (a pre-release, granted by Apple on request).`);
  }
  throw new Error(`${what}: ${r.status} ${JSON.stringify(r.data)}`);
}

async function states(): Promise<Map<string, string>> {
  const r = await call('GET', '/message/list');
  if (r.status !== 200) fail('message list', r);
  return new Map(
    (r.data?.messageIdentifiers ?? []).map((m: { messageIdentifier: string; messageState: string }) => [
      m.messageIdentifier,
      m.messageState,
    ]),
  );
}

const languages = Object.keys(RETENTION_MESSAGES) as RetentionLanguage[];

async function status() {
  const known = await states();
  for (const language of languages) {
    const m = RETENTION_MESSAGES[language];
    console.log(`${language}  ${m.id}  ${known.get(m.id) ?? 'not uploaded'}`);
  }
  const ours = new Set(languages.map((l) => RETENTION_MESSAGES[l].id));
  for (const [id, state] of known) if (!ours.has(id)) console.log(`(not in messages.ts)  ${id}  ${state}`);
}

async function upload() {
  const known = await states();
  for (const language of languages) {
    const m = RETENTION_MESSAGES[language];
    if (known.has(m.id)) {
      console.log(`${language}: already there (${known.get(m.id)})`);
      continue;
    }
    const r = await call('PUT', `/message/${m.id}`, { header: m.header, body: m.body });
    if (r.status !== 200) fail(`upload ${language}`, r);
    console.log(`${language}: uploaded`);
  }
}

async function defaults() {
  const known = await states();
  for (const language of languages) {
    const m = RETENTION_MESSAGES[language];
    if (known.get(m.id) !== 'APPROVED') {
      console.log(`${language}: ${known.get(m.id) ?? 'not uploaded'}, skipped`);
      continue;
    }
    for (const product of RETENTION_PRODUCTS) {
      for (const locale of RETENTION_LOCALES[language]) {
        const r = await call('PUT', `/default/${product}/${locale}`, { messageIdentifier: m.id });
        if (r.status !== 200) fail(`default ${product} ${locale}`, r);
      }
    }
    console.log(`${language}: default for ${RETENTION_PRODUCTS.length} products × ${RETENTION_LOCALES[language].join(', ')}`);
  }
}

async function realtime(url?: string) {
  if (url == null) {
    const r = await call('GET', '/realtime/url');
    console.log(r.status === 200 ? r.data.realtimeURL : `${r.status} ${JSON.stringify(r.data)}`);
    return;
  }
  const r = await call('PUT', '/realtime/url', { realtimeURL: url === 'default' ? REALTIME_URL : url });
  if (r.status !== 200) fail('realtime url', r);
  console.log('set');
}

async function perftest(originalTransactionId?: string) {
  if (!sandbox) throw new Error('the performance test runs on the sandbox only: add --sandbox');
  if (!originalTransactionId) throw new Error('an active sandbox subscription’s originalTransactionId is needed');
  const r = await call('POST', '/performanceTest', { originalTransactionId });
  if (r.status !== 200) fail('performance test', r);
  const id = r.data.requestId;
  console.log('started', id, JSON.stringify(r.data.config));
  for (;;) {
    const res = await call('GET', `/performanceTest/result/${id}`);
    if (res.status !== 200) fail('performance test result', res);
    if (res.data.result !== 'PENDING') {
      console.log(JSON.stringify(res.data, null, 1));
      return;
    }
  }
}

switch (command) {
  case 'status':
    await status();
    break;
  case 'upload':
    await upload();
    break;
  case 'defaults':
    await defaults();
    break;
  case 'realtime':
    await realtime(arg);
    break;
  case 'perftest':
    await perftest(arg);
    break;
  default:
    console.log('status | upload | defaults | realtime [url|default] | perftest <originalTransactionId>   [--sandbox]');
}
