import { spawnSync } from 'node:child_process';

/**
 * How to invoke the EAS CLI, wherever this happens to be running.
 *
 * `eas` is on the PATH of a developer machine because it is installed globally,
 * and it is **not** on the PATH inside an EAS Workflow runner. Calling it by
 * bare name worked everywhere it was tried and failed the first time the
 * release workflow ran it for real — `spawnSync eas ENOENT`, two hours into a
 * run, with the build and submit steps skipped behind it.
 *
 * Probed rather than assumed, and probed once. The alternative — always going
 * through `npx` — adds a download to every local invocation of a script that is
 * otherwise instant.
 */
let cached = null;

export function easCommand() {
  if (cached != null) return cached;

  // `spawnSync` reports a missing binary through `error`, not by throwing, so
  // this is safe to run speculatively.
  const probe = spawnSync('eas', ['--version'], { stdio: 'ignore' });
  cached =
    probe.error == null && probe.status === 0
      ? { file: 'eas', prefix: [] }
      : // The runner has node and npx but no global CLI. `--yes` stops npx
        // pausing to ask whether it may install, which in a non-interactive
        // job means hanging until the step times out.
        { file: 'npx', prefix: ['--yes', 'eas-cli'] };

  return cached;
}

/** The argv for one EAS call, ready for `execFileSync`. */
export function easArgs(args) {
  const { file, prefix } = easCommand();
  return { file, argv: [...prefix, ...args] };
}
