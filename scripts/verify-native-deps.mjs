#!/usr/bin/env node
/**
 * Native dependencies that download their own binaries actually have them.
 *
 * Bun does not run a dependency's lifecycle scripts unless the package is
 * listed in `trustedDependencies`. `@shopify/react-native-skia` downloads its
 * prebuilt `.xcframework`s in a `postinstall`, so without that entry the
 * install succeeds, `tsc` passes, the tests pass — and `pod install` dies on
 * EAS twenty minutes into the queue with "Skia prebuilt binaries not found".
 *
 * Checked as an artifact on disk rather than by asking bun what it blocked.
 * `bun pm untrusted` reports the *last install*, so once the scripts have run
 * it reports nothing even if `trustedDependencies` has since been deleted —
 * a check that passes whether or not the repository is correct. This one looks
 * at whether the files are there, which is the thing the build needs.
 */

import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');

/** Packages whose install is only half-done until these files appear. */
const EXPECTS = [
  {
    package: '@shopify/react-native-skia',
    dir: 'libs/ios',
    matches: (name) => name.endsWith('.xcframework'),
    describe: 'prebuilt Skia binaries for iOS',
  },
  {
    package: '@shopify/react-native-skia',
    dir: 'libs/android',
    matches: (name) => name.length > 0,
    describe: 'prebuilt Skia binaries for Android',
  },
];

const trusted = new Set(
  JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8')).trustedDependencies ?? [],
);

const problems = [];

for (const expect of EXPECTS) {
  const dir = join(ROOT, 'node_modules', expect.package, expect.dir);
  const found = existsSync(dir) ? readdirSync(dir).filter(expect.matches) : [];

  if (found.length === 0) {
    problems.push(
      `${expect.package}: no ${expect.describe} in ${expect.dir}/.\n` +
        (trusted.has(expect.package)
          ? '    It is in trustedDependencies, so the postinstall ran and failed — ' +
            'check the network and reinstall.'
          : `    Add "${expect.package}" to trustedDependencies in package.json, ` +
            'then reinstall. Bun blocks lifecycle scripts without it.'),
    );
  } else {
    console.log(`${expect.package.padEnd(32)} ${expect.dir.padEnd(14)} ${found.length} file(s)`);
  }
}

// A package that needs its scripts but is not trusted will pass the check above
// on a machine where the files happen to be left over from an earlier install.
// The declaration is what CI installs from, so it is checked separately.
for (const expect of EXPECTS) {
  if (!trusted.has(expect.package)) {
    problems.push(
      `${expect.package} is not in trustedDependencies. Even if its files are ` +
        'present here, a fresh install on EAS will not produce them.',
    );
    break;
  }
}

if (problems.length > 0) {
  console.error(`\n${problems.length} native dependency problem(s):\n`);
  for (const line of problems) console.error(`  ${line}`);
  console.error('');
  process.exit(1);
}

console.log('\nEvery native dependency has its binaries.');
