#!/usr/bin/env node
/**
 * One command to release. It works out how.
 *
 *   bun run ship                 # production
 *   bun run ship --channel preview
 *   bun run ship --dry-run       # decide and explain, change nothing
 *
 * The whole point is that "can this be an update, or does it need a build?" is
 * not a judgement the person releasing should have to make. It is a hash
 * comparison — see `can-update.mjs` — and getting it wrong in either direction
 * is expensive: an update published against a changed native layer crashes on
 * launch, and a build made for a JavaScript change costs an hour and, on
 * production, an App Store review.
 *
 * Refuses to release a dirty or unpushed tree. An update is published from
 * whatever is on disk, so a release that does not correspond to a commit is one
 * nobody can reproduce or roll back to.
 */

import { execFileSync, spawnSync } from 'node:child_process';
import { parseArgs } from 'node:util';

import { easArgs } from './eas-bin.mjs';

const { values } = parseArgs({
  options: {
    channel: { type: 'string', default: 'production' },
    platform: { type: 'string', default: 'ios' },
    'dry-run': { type: 'boolean', default: false },
    'skip-verify': { type: 'boolean', default: false },
    message: { type: 'string' },
  },
});

const { channel, platform, message } = values;
const dryRun = values['dry-run'];

const bold = (s) => `\x1b[1m${s}\x1b[0m`;
const dim = (s) => `\x1b[2m${s}\x1b[0m`;

function capture(cmd, args) {
  return execFileSync(cmd, args, { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 }).trim();
}

function run(cmd, args) {
  console.log(dim(`\n$ ${cmd} ${args.join(' ')}\n`));
  const result = spawnSync(cmd, args, { stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

function die(lines) {
  console.error(`\n${lines.join('\n')}\n`);
  process.exit(1);
}

// ── The tree has to be something you can point at later ─────────────────────

const dirty = capture('git', ['status', '--porcelain']);
if (dirty.length > 0 && !dryRun) {
  die([
    bold('Uncommitted changes.'),
    '',
    'An update ships what is on disk. Releasing from a dirty tree produces a',
    'build nobody can reproduce, and nothing to roll back to.',
    '',
    dirty,
  ]);
}

const branch = capture('git', ['rev-parse', '--abbrev-ref', 'HEAD']);
if (channel === 'production' && branch !== 'main' && !dryRun) {
  die([bold(`On branch "${branch}", not main.`), '', 'Production releases come from main.']);
}

// ── Checks ──────────────────────────────────────────────────────────────────

if (!values['skip-verify']) {
  console.log(bold('\nChecks'));
  run('bun', ['run', 'verify']);
}

// ── The decision ────────────────────────────────────────────────────────────

console.log(bold('\nDeciding'));
const decision = JSON.parse(
  capture('node', [
    'scripts/can-update.mjs',
    '--channel', channel,
    '--platform', platform,
    '--json',
  ]),
);

console.log(`  live build   ${decision.recorded ?? '—'}`);
console.log(`  this commit  ${decision.current}`);
console.log(`\n  ${bold(decision.verdict.toUpperCase())} — ${decision.reason}`);

if (dryRun) {
  console.log(dim('\nDry run; nothing published.\n'));
  process.exit(0);
}

// ── Do it ───────────────────────────────────────────────────────────────────

const subject = message ?? capture('git', ['log', '-1', '--pretty=%s']);

if (decision.verdict === 'update') {
  console.log(bold('\nPublishing update'));
  const update = easArgs(['update', '--channel', channel, '--platform', platform, '--message', subject, '--non-interactive']);
  run(update.file, update.argv);
  console.log(
    `\n${bold('Published.')} Devices on "${channel}" pick it up on their next launch.` +
      `\n${dim('Roll back with: eas update:rollback')}\n`,
  );
} else {
  console.log(bold('\nBuilding'));
  console.log(
    dim('  A build is required, so this goes through the store rather than over the air.\n'),
  );
  const profile = channel === 'production' ? 'production' : channel;
  const build = easArgs(['build', '--platform', platform, '--profile', profile, '--non-interactive']);
  run(build.file, build.argv);
  console.log(
    `\n${bold('Built.')} Submit with: eas submit --platform ${platform} --profile ${profile}\n`,
  );
}
