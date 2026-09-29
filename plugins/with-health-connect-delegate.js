/**
 * Health Connect's permission result reaches JS through a delegate that has
 * to be installed on the main activity. `react-native-health-connect`'s own
 * config plugin adds the manifest entries but not this line, and without it
 * `requestPermission` never resolves on Android.
 */
const { withMainActivity } = require('@expo/config-plugins');

const IMPORT = 'import dev.matinzd.healthconnect.permissions.HealthConnectPermissionDelegate';
const CALL = 'HealthConnectPermissionDelegate.setPermissionDelegate(this)';

module.exports = function withHealthConnectDelegate(config) {
  return withMainActivity(config, (config) => {
    let src = config.modResults.contents;
    if (!src.includes(IMPORT)) {
      src = src.replace(/^(package [^\n]+\n)/, `$1\n${IMPORT}\n`);
    }
    if (!src.includes(CALL)) {
      // After `super.onCreate(...)`, whatever it is passed.
      src = src.replace(/(super\.onCreate\([^)]*\))/, `$1\n    ${CALL}`);
    }
    config.modResults.contents = src;
    return config;
  });
};
