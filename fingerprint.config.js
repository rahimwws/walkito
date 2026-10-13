/**
 * What the runtime fingerprint (`runtimeVersion: { policy: 'fingerprint' }`)
 * leaves out.
 *
 * By default it hashes every package.json script and .gitignore. Neither
 * reaches the binary here: there is no install hook among the scripts, and
 * ios/ and android/ are generated, not committed. Hashed, adding `build:ios`
 * or a line to .gitignore made `can-update` say "build" for a JavaScript
 * change, and no update could reach the store build any more.
 *
 * A change to this file changes the fingerprint itself, so it ships with a
 * store build, never on its own as an update.
 */
const { SourceSkips } = require('expo/fingerprint');

/** @type {import('expo/fingerprint').Config} */
module.exports = {
  sourceSkips:
    SourceSkips.PackageJsonAndroidAndIosScriptsIfNotContainRun |
    SourceSkips.PackageJsonScriptsAll |
    SourceSkips.GitIgnore,
};
