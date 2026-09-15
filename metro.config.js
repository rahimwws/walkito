// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Rive files are assets, not source. Metro has no idea what `.riv` is, so
// without this a `require('…/mascot.riv')` is resolved as a *module* and fails
// to parse — the file has to be copied into the bundle and handed back as an
// asset id instead.
config.resolver.assetExts.push('riv');

module.exports = config;
