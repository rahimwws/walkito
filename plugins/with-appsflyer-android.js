/**
 * The two Android changes AppsFlyer's own config plugin does not make.
 *
 * 1. **No advertising id.** The AppsFlyer Android SDK declares
 *    `com.google.android.gms.permission.AD_ID` in its library manifest, and the
 *    manifest merger would carry it into the app. The Play Console declaration
 *    says the app does not use the Advertising ID, and a declared permission
 *    that contradicts it is a policy problem on the next review. The app's own
 *    manifest removes it again (`tools:node="remove"`), which outranks every
 *    library's. Google Play installs are still attributed: the Play Install
 *    Referrer needs no advertising id.
 *
 * 2. **`setIntent` in `onNewIntent`.** With the app already running, a tapped
 *    OneLink arrives as a new intent on the existing activity. React Native's
 *    `ReactActivity.onNewIntent` hands it to Linking but never calls
 *    `setIntent`, so `getIntent()` keeps returning the launch intent — and that
 *    is where the AppsFlyer SDK looks for the link when the activity resumes.
 *    Without this a OneLink works from a cold start and silently does nothing
 *    from the background.
 */
const { withAndroidManifest, withMainActivity } = require('@expo/config-plugins');

const AD_ID = 'com.google.android.gms.permission.AD_ID';

function withoutAdId(config) {
  return withAndroidManifest(config, (config) => {
    const manifest = config.modResults.manifest;
    manifest.$ = manifest.$ ?? {};
    manifest.$['xmlns:tools'] = manifest.$['xmlns:tools'] ?? 'http://schemas.android.com/tools';
    const permissions = (manifest['uses-permission'] ?? []).filter(
      (permission) => permission.$?.['android:name'] !== AD_ID,
    );
    permissions.push({ $: { 'android:name': AD_ID, 'tools:node': 'remove' } });
    manifest['uses-permission'] = permissions;
    return config;
  });
}

const INTENT_IMPORT = 'import android.content.Intent';
const SET_INTENT = 'setIntent(intent)';

function withNewIntent(config) {
  return withMainActivity(config, (config) => {
    if (config.modResults.language !== 'kt') {
      throw new Error('with-appsflyer-android: MainActivity is not Kotlin; add setIntent(intent) to onNewIntent by hand.');
    }
    let src = config.modResults.contents;
    if (src.includes(SET_INTENT)) {
      config.modResults.contents = src;
      return config;
    }
    if (!src.includes(INTENT_IMPORT)) {
      src = src.replace(/^(package [^\n]+\n)/, `$1\n${INTENT_IMPORT}\n`);
    }
    if (/override fun onNewIntent\(/.test(src)) {
      // An override already there (another plugin's): set the intent right
      // after its `super` call.
      src = src.replace(/(super\.onNewIntent\(intent\))/, `$1\n    ${SET_INTENT}`);
    } else {
      // Before the class's closing brace.
      const method = [
        '',
        '  // A OneLink tapped while the app runs arrives here; AppsFlyer reads it',
        '  // from getIntent() on resume (plugins/with-appsflyer-android.js).',
        '  override fun onNewIntent(intent: Intent) {',
        '    super.onNewIntent(intent)',
        `    ${SET_INTENT}`,
        '  }',
        '',
      ].join('\n');
      const end = src.lastIndexOf('}');
      src = `${src.slice(0, end).trimEnd()}\n${method}}\n`;
    }
    if (!src.includes(SET_INTENT)) {
      throw new Error('with-appsflyer-android: could not add setIntent(intent) to MainActivity.onNewIntent.');
    }
    config.modResults.contents = src;
    return config;
  });
}

module.exports = function withAppsFlyerAndroid(config) {
  return withNewIntent(withoutAdId(config));
};
