/**
 * AppsFlyer's deep-link hooks for the SDK 58 AppDelegate.
 *
 * SDK 58's template adopts the scene life cycle (iOS 27 requires it) and its
 * AppDelegate no longer overrides open-URL or continue-user-activity, so
 * react-native-appsflyer's own plugin finds nowhere to put its calls and only
 * prints a warning. Expo's `ExpoAppSceneDelegate` still forwards every scene
 * URL and user activity, cold starts included, to the app delegate's
 * overrides (`SceneEventForwarder`), so adding the two overrides here is all
 * AppsFlyer needs to see a OneLink. `handleLaunchOptions` stays in
 * didFinishLaunching, where AppsFlyer's plugin puts it.
 *
 * Replaces plugins/with-scene-delegate.js, which back-ported the SDK 58
 * scene delegate to SDK 57 and kept these overrides alive.
 */
const { withAppDelegate } = require('expo/config-plugins');

const IMPORT = 'import react_native_appsflyer';
const LAUNCH = 'AppsFlyerAttribution.shared.handleLaunchOptions(launchOptions)';
const OPEN = 'AppsFlyerAttribution.shared.handleOpen(url, options: options)';
const ACTIVITY = 'AppsFlyerAttribution.shared.continueUserActivity(userActivity, restorationHandler: nil)';

const DID_FINISH = 'return super.application(application, didFinishLaunchingWithOptions: launchOptions)';

const OVERRIDES = `
  public override func application(
    _ app: UIApplication,
    open url: URL,
    options: [UIApplication.OpenURLOptionsKey: Any] = [:]
  ) -> Bool {
    ${OPEN}
    return super.application(app, open: url, options: options)
  }

  public override func application(
    _ application: UIApplication,
    continue userActivity: NSUserActivity,
    restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void
  ) -> Bool {
    ${ACTIVITY}
    return super.application(application, continue: userActivity, restorationHandler: restorationHandler)
  }
`;

function edit(contents) {
  if (!contents.includes(IMPORT)) contents = `${IMPORT}\n${contents}`;
  if (!contents.includes(LAUNCH)) {
    if (!contents.includes(DID_FINISH)) {
      throw new Error('[with-appsflyer-scene] AppDelegate.swift: the didFinishLaunching return was not found.');
    }
    contents = contents.replace(DID_FINISH, `${LAUNCH}\n    ${DID_FINISH}`);
  }
  if (!contents.includes(OPEN) && !contents.includes(ACTIVITY)) {
    const anchor = contents.indexOf('\n}\n', contents.indexOf(DID_FINISH));
    if (anchor < 0) throw new Error('[with-appsflyer-scene] AppDelegate.swift: end of AppDelegate not found.');
    contents = contents.slice(0, anchor) + '\n' + OVERRIDES.trimEnd() + contents.slice(anchor);
  }
  return contents;
}

module.exports = function withAppsFlyerScene(config) {
  return withAppDelegate(config, (config) => {
    if (config.modResults.language !== 'swift') {
      throw new Error(`[with-appsflyer-scene] expected a Swift AppDelegate, got ${config.modResults.language}.`);
    }
    config.modResults.contents = edit(config.modResults.contents);
    return config;
  });
};
