import { ConfigContext, ExpoConfig } from 'expo/config';

// app.json stays the base layer. This file overrides only what varies per app
// variant, so `development`, `preview`, and `production` builds install side by
// side. The variant comes from APP_VARIANT, stored in the EAS environments and
// pulled locally into .env.local by `eas env:pull`.
const BUNDLE_ID = 'com.tread.app';

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

// Every variant is called "Tread" on the home screen. They still install side
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

export default ({ config }: ConfigContext): ExpoConfig => {
  const iosIcon = getIosIcon();
  const baseScheme = typeof config.scheme === 'string' ? config.scheme : 'tread';

  return {
    ...config,
    slug: config.slug ?? 'tread',
    name: getName(config.name ?? 'Tread'),
    scheme: getScheme(baseScheme),
    runtimeVersion: {
      policy: 'appVersion',
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
