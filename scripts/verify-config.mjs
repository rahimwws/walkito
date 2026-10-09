#!/usr/bin/env node
/**
 * The Expo config resolves, and says consistent things, for every variant.
 *
 * Two failures this catches, both of which have already happened here:
 *
 * 1. An app extension whose bundle identifier is not prefixed by the host
 *    app's. iOS requires the prefix, so `com.walkito.app.dev.ExpoWidgetsTarget`
 *    inside a host of `com.tread.app.dev` is rejected — but only at build time,
 *    on EAS, after the queue. A half-finished rename left exactly that.
 *
 * 2. `app.config.ts` throwing, or the variant switch returning something
 *    unexpected. The config is code; nothing else type-checks it.
 *
 * And the AppsFlyer setup, whose parts live in three places that only meet in
 * the binary: the OneLink domain in `ios.associatedDomains` and in
 * `android.intentFilters` (both checked against `shared/config/appsflyer.ts`),
 * the SKAdNetwork postback endpoint, the two plugins, and no App Tracking
 * Transparency text — the app runs without the prompt.
 */

import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

/** The OneLink domain and template the app's code reads, from the source. */
const appsflyerSource = readFileSync(new URL('../src/shared/config/appsflyer.ts', import.meta.url), 'utf8');
const ONELINK_HOST = appsflyerSource.match(/oneLinkHost:\s*'([^']+)'/)?.[1];
const ONELINK_TEMPLATE = appsflyerSource.match(/oneLinkTemplate:\s*'([^']+)'/)?.[1];
const SKAN_ENDPOINT = 'https://appsflyer-skadnetwork.com/';

const VARIANTS = ['development', 'preview', 'production'];
const problems = [];

for (const variant of VARIANTS) {
  let config;
  try {
    const raw = execFileSync('npx', ['expo', 'config', '--type', 'public', '--json'], {
      env: { ...process.env, APP_VARIANT: variant },
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
      maxBuffer: 32 * 1024 * 1024,
    });
    config = JSON.parse(raw);
  } catch (error) {
    problems.push(`${variant}: config failed to resolve — ${error.message.split('\n')[0]}`);
    continue;
  }

  const host = config.ios?.bundleIdentifier;
  if (host == null) {
    problems.push(`${variant}: no ios.bundleIdentifier`);
    continue;
  }

  if (config.extra?.variant !== variant) {
    problems.push(
      `${variant}: extra.variant is ${JSON.stringify(config.extra?.variant)}. ` +
        'The purchase store reads this to decide whether a Test Store key is allowed.',
    );
  }

  const extensions =
    config.extra?.eas?.build?.experimental?.ios?.appExtensions ?? [];
  for (const extension of extensions) {
    const id = extension.bundleIdentifier ?? '';
    // Exact, not merely prefixed. A `startsWith` test passes
    // `com.walkito.app.dev.Widget` against a host of `com.walkito.app`, which
    // is the production app claiming the development app's extension — the
    // hole this check had on its first run.
    const expected = `${host}.${extension.targetName}`;
    if (id !== expected) {
      problems.push(
        `${variant}: extension ${extension.targetName} is "${id}", expected ` +
          `"${expected}". iOS requires the host's identifier as the prefix.`,
      );
    }

    const groups = extension.entitlements?.['com.apple.security.application-groups'] ?? [];
    for (const group of groups) {
      if (group !== `group.${host}`) {
        problems.push(
          `${variant}: app group "${group}" does not match the host "${host}". ` +
            'The app and its widget would read different containers.',
        );
      }
    }
  }

  problems.push(...appsflyerProblems(variant, config));

  console.log(`${variant.padEnd(12)} ${host}`);
}

function appsflyerProblems(variant, config) {
  const out = [];
  if (ONELINK_HOST == null || ONELINK_TEMPLATE == null) {
    out.push(`${variant}: could not read oneLinkHost / oneLinkTemplate from src/shared/config/appsflyer.ts`);
    return out;
  }
  const plugins = (config.plugins ?? []).map((plugin) => (Array.isArray(plugin) ? plugin[0] : plugin));
  for (const name of ['react-native-appsflyer', './plugins/with-appsflyer-android']) {
    if (!plugins.includes(name)) out.push(`${variant}: plugin ${name} is missing`);
  }
  const plist = config.ios?.infoPlist ?? {};
  if (plist.NSAdvertisingAttributionReportEndpoint !== SKAN_ENDPOINT) {
    out.push(`${variant}: ios.infoPlist.NSAdvertisingAttributionReportEndpoint is not ${SKAN_ENDPOINT}`);
  }
  if (plist.NSUserTrackingUsageDescription != null) {
    out.push(`${variant}: NSUserTrackingUsageDescription is set, but the app never asks to track (no ATT)`);
  }
  const domains = config.ios?.associatedDomains ?? [];
  for (const domain of ['applinks:walkito.site', `applinks:${ONELINK_HOST}`]) {
    if (!domains.includes(domain)) out.push(`${variant}: ios.associatedDomains lacks ${domain}`);
  }
  const filters = config.android?.intentFilters ?? [];
  const oneLink = filters.find((filter) =>
    (filter.data ?? []).some(
      (data) => data.scheme === 'https' && data.host === ONELINK_HOST && data.pathPrefix === `/${ONELINK_TEMPLATE}`,
    ),
  );
  if (oneLink == null) {
    out.push(`${variant}: no android.intentFilters entry for https://${ONELINK_HOST}/${ONELINK_TEMPLATE}`);
  } else if (oneLink.autoVerify !== true) {
    out.push(`${variant}: the OneLink intent filter needs autoVerify: true, or Android opens the browser`);
  }
  return out;
}

if (problems.length > 0) {
  console.error(`\n${problems.length} config problem(s):\n`);
  for (const line of problems) console.error(`  ${line}`);
  console.error('');
  process.exit(1);
}

console.log('\nConfig resolves consistently for every variant.');
