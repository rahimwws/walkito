import { ConfigContext, ExpoConfig } from 'expo/config';

// app.json stays the base layer. This file overrides only what varies per app
// variant, so `development`, `preview`, and `production` builds install side by
// side. The variant comes from APP_VARIANT, stored in the EAS environments and
// pulled locally into .env.local by `eas env:pull`.
const BUNDLE_ID = 'com.walkito.app';

function getBundleId() {
  switch (process.env.APP_VARIANT) {
    case 'production':
      return BUNDLE_ID;
    case 'preview':
      return `${BUNDLE_ID}.preview`;
    default:
      return `${BUNDLE_ID}.dev`;
  }
}

// Every variant is called "Walkito" on the home screen. They still install side
// by side — that is the bundle id's job, not the label's — but the label no
// longer tells you which one you are looking at. Suffix a variant here again
// if that stops being worth it.
function getName(base: string) {
  return base;
}

function getScheme(base: string) {
  switch (process.env.APP_VARIANT) {
    case 'production':
      return base;
    case 'preview':
      return `${base}.preview`;
    default:
      return `${base}.dev`;
  }
}

// Undefined for every variant, so app.json's flat `icon` flows through on iOS
// as well as everywhere else.
//
// This used to return per-variant Icon Composer bundles (`assets/app.dev.icon`
// and friends). Those bundles take precedence over `expo.icon` on iOS, which
// means replacing the PNG alone would have changed the icon on Android and the
// web and left the iOS home screen exactly as it was. The bundles are still on
// disk and still hold the old artwork; point this back at them if the
// per-variant icons are wanted again, but regenerate them in Icon Composer
// first.
function getIosIcon() {
  return undefined;
}

/**
 * The widget extension's identifiers, rebuilt from the host's.
 *
 * app.json declares the extension once, and it has to declare *something* — so
 * it declares the development identifiers. That made every non-development
 * build wrong: `preview` shipped a host of `com.walkito.app.preview` with an
 * extension of `com.walkito.app.dev.ExpoWidgetsTarget`, which iOS rejects
 * because an extension's identifier must be prefixed by its host's. Production
 * was worse — `com.walkito.app.dev.…` *is* prefixed by `com.walkito.app.`, so
 * it would have built, with the App Store app claiming the development app's
 * extension and its app group.
 *
 * Deriving both from the host means there is one source for the identifier and
 * the variant suffix can only be applied in one place. `scripts/verify-config`
 * asserts it for every variant.
 */
function extensionsFor(hostBundleId: string, config: ConfigContext['config']) {
  const declared = config.extra?.eas?.build?.experimental?.ios?.appExtensions ?? [];
  return declared.map((extension: { targetName: string; [key: string]: unknown }) => ({
    ...extension,
    bundleIdentifier: `${hostBundleId}.${extension.targetName}`,
    entitlements: {
      ...(extension.entitlements as Record<string, unknown> | undefined),
      // Shared container, so the widget and the app read the same storage. It
      // is keyed to the host, which is what keeps the three variants from
      // reading each other's data.
      'com.apple.security.application-groups': [`group.${hostBundleId}`],
    },
  }));
}

export default ({ config }: ConfigContext): ExpoConfig => {
  const iosIcon = getIosIcon();
  const baseScheme = typeof config.scheme === 'string' ? config.scheme : 'walkito';

  return {
    ...config,
    slug: config.slug ?? 'walkito',
    name: getName(config.name ?? 'Walkito'),
    scheme: getScheme(baseScheme),
    /**
     * Fingerprint, not `appVersion`.
     *
     * The runtime version is what decides whether an over-the-air update may
     * land on a given build. Under `appVersion` it is the version string, which
     * says nothing about the native layer: change a native dependency without
     * bumping the version and the update ships to a build that cannot run it,
     * and the app crashes on a native module that is not there. Bump the
     * version for a copy change and the opposite happens — a JavaScript-only fix
     * is withheld from every device already installed.
     *
     * `fingerprint` hashes the things that actually determine the native
     * runtime: dependencies, config plugins, native project files. Two commits
     * with the same fingerprint are the same runtime, so an update between them
     * is safe by construction, and a differing fingerprint is precisely the
     * signal that a build is required. `scripts/can-update.mjs` reads that
     * comparison, and the release workflow branches on it.
     */
    runtimeVersion: {
      policy: 'fingerprint',
    },
    extra: {
      ...config.extra,
      // The variant, carried into the bundle. `APP_VARIANT` itself is a build
      // -time Node variable and does not survive into the app, but the store
      // needs to know the difference between a TestFlight build and the App
      // Store one — a Test Store key is fine in the first and must never reach
      // the second, and `__DEV__` cannot tell them apart because both are
      // release builds. See `entities/purchase/model/store.ts`.
      variant: process.env.APP_VARIANT ?? 'development',
      eas: {
        ...config.extra?.eas,
        build: {
          ...config.extra?.eas?.build,
          experimental: {
            ...config.extra?.eas?.build?.experimental,
            ios: {
              ...config.extra?.eas?.build?.experimental?.ios,
              appExtensions: extensionsFor(getBundleId(), config),
            },
          },
        },
      },
    },
    ios: {
      ...config.ios,
      bundleIdentifier: getBundleId(),
      icon: iosIcon ?? config.ios?.icon,
      // Sign in with Apple is an entitlement, not just a library. Without this
      // the native sheet refuses to open on a real build.
      usesAppleSignIn: true,
    },
    android: {
      ...config.android,
      package: getBundleId(),
    },
    plugins: [
      ...(config.plugins ?? []),
      ['expo-dev-client', { addGeneratedScheme: process.env.APP_VARIANT === 'development' }],
      // Предсобранные Expo-модули выключены. Со сборкой из исходников она
      // дольше, но это единственный способ гарантировать, что каждый модуль
      // слинкован с тем ExpoModulesCore, который в проекте реально лежит.
      //
      // Это второй раз, когда флаг ломает приложение, и оба раза одинаково:
      // сперва expo-image, теперь expo-video. Их предсобранные бинарники
      // собраны против более нового ExpoModulesCore и требуют символ
      // `BaseModule.willDestroy`, которого в нашем 57.0.8 нет, — dyld
      // останавливает процесс ещё до старта JS:
      //
      //   Symbol not found: _$s15ExpoModulesCore10BaseModuleC11willDestroyyyFTj
      //   Referenced from: .../ExpoVideo.framework/ExpoVideo
      //
      // Тогда пакет удалили и причина ушла вместе с ним; в этот раз видео —
      // это сам экран сессии, так что уходит флаг. Обратно в true можно только
      // после апгрейда expo, и проверять надо запуском на симуляторе: падение
      // происходит в dyld, поэтому ни tsc, ни сборка Metro его не увидят.
      //
      // Плагин пишет EXPO_USE_PRECOMPILED_MODULES в Podfile.properties.json на
      // каждом prebuild, так что руками после регенерации ios/ ничего делать
      // не надо.
      ['expo-build-properties', { ios: { usePrecompiledModules: false } }],
    ],
  };
};
