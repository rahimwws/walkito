#!/usr/bin/env node
/**
 * Can this commit ship as an over-the-air update, or does it need a build?
 *
 * The question is entirely about the native layer. An update replaces the
 * JavaScript and the assets inside a binary that already exists; it cannot add
 * a native module, change a config plugin, or alter an entitlement. Ship one
 * that assumes it can and the app crashes on launch reaching for something that
 * was never compiled in.
 *
 * `runtimeVersion` is the mechanism that prevents that, and under the
 * `fingerprint` policy it is a hash of everything that determines the native
 * runtime. So the answer is a comparison: if this project's fingerprint matches
 * the one baked into the build that is live on the channel, an update is safe.
 * If it differs, no update can reach that build and a new one has to be made.
 *
 * Usage:
 *   node scripts/can-update.mjs --channel production [--platform ios]
 *
 * Exits 0 and prints `update` when an update suffices, 0 and `build` when it
 * does not. A non-zero exit means the question could not be answered, which is
 * deliberately different from answering "build" — a workflow should stop and be
 * looked at rather than quietly spend a builder.
 */

import { execFileSync } from 'node:child_process';
import { parseArgs } from 'node:util';

const { values } = parseArgs({
  options: {
    channel: { type: 'string', default: 'production' },
    platform: { type: 'string', default: 'ios' },
    json: { type: 'boolean', default: false },
  },
});

const { channel, platform } = values;

function eas(args) {
  return execFileSync('eas', args, {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
    maxBuffer: 64 * 1024 * 1024,
  });
}

/** The last build that finished, on this channel and platform. */
function latestBuild() {
  const raw = eas([
    'build:list',
    '--channel', channel,
    '--platform', platform,
    '--status', 'finished',
    '--limit', '1',
    '--json',
    '--non-interactive',
  ]);
  const [build] = JSON.parse(raw);
  return build ?? null;
}

function currentFingerprint() {
  /**
   * Generated in the same environment the build used.
   *
   * Without this the fingerprint is computed against whatever `APP_VARIANT`
   * happens to be in the local `.env` — development — and compared against a
   * production build. The bundle identifier, the app group, the URL scheme and
   * `extra.variant` all differ between variants, so the hashes could never
   * match and the answer was always "build", for the wrong reason. It looked
   * like a native change; it was the script asking the wrong question.
   *
   * The channel and the EAS environment share names by construction: see the
   * profiles in eas.json, where each names the environment of the same name.
   */
  const raw = eas([
    'fingerprint:generate',
    '-p', platform,
    '--environment', channel,
    '--json',
    '--non-interactive',
  ]);
  // Progress lines precede the JSON on stdout, so the object is found rather
  // than assumed to start at byte zero.
  const start = raw.indexOf('{');
  if (start === -1) throw new Error(`no JSON in fingerprint output: ${raw.slice(0, 200)}`);
  return JSON.parse(raw.slice(start)).hash;
}

const build = latestBuild();
const current = currentFingerprint();

/**
 * Builds made before the fingerprint policy was adopted carry no fingerprint,
 * so there is nothing to compare against. Reported as `build` rather than
 * guessed at: the first build under the new policy is the one that establishes
 * the baseline, and shipping an update against an unknown runtime is the exact
 * risk this script exists to remove.
 */
const recorded = build?.fingerprint?.hash ?? null;

const verdict =
  build == null || recorded == null ? 'build' : recorded === current ? 'update' : 'build';

const reason =
  build == null
    ? `No finished ${platform} build on the "${channel}" channel yet.`
    : recorded == null
      ? 'The live build predates the fingerprint policy and records no hash.'
      : verdict === 'update'
        ? 'The native layer is unchanged since the live build.'
        : 'The native layer changed. No update can reach the live build.';

if (values.json) {
  console.log(JSON.stringify({ verdict, reason, current, recorded, channel, platform }));
} else {
  console.log(`channel      ${channel}`);
  console.log(`platform     ${platform}`);
  console.log(`live build   ${recorded ?? '—'}`);
  console.log(`this commit  ${current}`);
  console.log(`\n${verdict.toUpperCase()} — ${reason}`);
}
