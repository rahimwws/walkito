// Learn more https://docs.expo.io/guides/customizing-metro
const path = require('node:path');
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

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
//
// `assets-src/` holds the sources that generated assets are built from (the
// contract ceremony's full Lottie export; see `scripts/build-lottie.mjs`). A
// required `.json` is source to Metro and is inlined into the bundle, frames
// and all, so this is blocked: a `require` of the 3.4 MB export fails at bundle
// time instead of quietly doubling what the ceremony costs.
const root = __dirname.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
config.resolver.blockList = [
  new RegExp(`^${root}/site/node_modules/.*`),
  new RegExp(`^${root}/site/\\.next/.*`),
  new RegExp(`^${root}/assets-src/.*`),
  // The AI assistant server (ai-assistant/): Node-only, its own node_modules.
  new RegExp(`^${root}/ai-assistant/.*`),
];

// RevenueCat's browser SDK, kept out of the phone bundles.
//
// `react-native-purchases` requires `@revenuecat/purchases-js-hybrid-mappings`
// at the top of `dist/browser/nativeModule.js`, which `dist/purchases.js`
// requires unconditionally — about 1.5 MB of bytecode (purchases-js with its
// Svelte UI and Stripe) in every build. It is only *called* in browser mode,
// which `dist/utils/environment.js` enters for Expo Go without the native
// module, the Rork sandbox, or `Platform.OS === 'web'`. A dev or store build
// links `RNPurchases`, so on iOS and Android every call site is unreachable.
// See `metro/purchases-js-hybrid-mappings.js` for what stands in, and why it
// throws only if called.
//
// Web keeps the real package: that is the one platform that needs it.
const WEB_ONLY_REVENUECAT = /^@revenuecat\/purchases-js-hybrid-mappings(\/.*)?$/;
const REVENUECAT_STUB = path.join(__dirname, 'metro', 'purchases-js-hybrid-mappings.js');
const upstreamResolveRequest = config.resolver.resolveRequest;
config.resolver.resolveRequest = (context, moduleName, platform) => {
  if ((platform === 'ios' || platform === 'android') && WEB_ONLY_REVENUECAT.test(moduleName)) {
    return { type: 'sourceFile', filePath: REVENUECAT_STUB };
  }
  return (upstreamResolveRequest ?? context.resolveRequest)(context, moduleName, platform);
};

module.exports = config;
