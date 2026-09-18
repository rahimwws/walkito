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
 */

import { execFileSync } from 'node:child_process';

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

  console.log(`${variant.padEnd(12)} ${host}`);
}

if (problems.length > 0) {
  console.error(`\n${problems.length} config problem(s):\n`);
  for (const line of problems) console.error(`  ${line}`);
  console.error('');
  process.exit(1);
}

console.log('\nConfig resolves consistently for every variant.');
