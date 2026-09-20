// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Rive files are assets, not source. Metro has no idea what `.riv` is, so
// without this a `require('…/mascot.riv')` is resolved as a *module* and fails
// to parse — the file has to be copied into the bundle and handed back as an
// asset id instead.
config.resolver.assetExts.push('riv');

// The marketing site is a Next app living in this repo, with its own
// `node_modules` and its own copy of React. Metro crawls everything under the
// project root, so left alone it would index that second React and the app
// would fail to bundle on a duplicate-module collision — a failure that reads
// as nonsense because nothing in `src` has changed.
//
// Anchored on the project root rather than matching "/site/" anywhere, so a
// path that merely contains the word — `src/pages/…/site…` — is not swept up
// with it. `metro-config`'s own `exclusionList` helper is not reachable in this
// version: its `exports` map does not publish the subpath, and requiring it
// throws before Metro ever starts.
const root = __dirname.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
config.resolver.blockList = [
  new RegExp(`^${root}/site/node_modules/.*`),
  new RegExp(`^${root}/site/\\.next/.*`),
];

module.exports = config;
