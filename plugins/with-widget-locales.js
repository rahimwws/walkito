/**
 * Translates the home-screen widget's description in the iOS widget gallery.
 *
 * expo-widgets writes the description into Swift as a literal,
 * `.description("Log today’s check-in…")`, and SwiftUI treats a literal there
 * as a localized key: it looks it up in the *extension's* Localizable.strings.
 * The extension has none, and Expo's `locales` only reaches the app target, so
 * the gallery showed English on every phone.
 *
 * This writes `<lang>.lproj/Localizable.strings` into the extension's folder and
 * gives the extension target a Resources phase holding them. The words come
 * from `android.widget_dailycheck_description` in each `locales/*.json`, the
 * same line Android shows, so the two platforms cannot drift.
 *
 * Must sit **before** `expo-widgets` in app.json: Xcode mods run in reverse
 * order, and the extension target has to exist when this runs.
 */
const fs = require('fs');
const path = require('path');
const { withXcodeProject } = require('@expo/config-plugins');

const TARGET = 'ExpoWidgetsTarget';
const FILE = 'Localizable.strings';
const ANDROID_KEY = 'widget_dailycheck_description';

function unquote(value) {
  return typeof value === 'string' ? value.replace(/^"(.*)"$/, '$1') : value;
}

function escape(text) {
  return text.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

/** `{ lang: { englishKey: translation } }`, from app.json's locales. */
function readStrings(config, projectRoot) {
  const description = (config.plugins ?? [])
    .map((entry) => (Array.isArray(entry) && entry[0] === 'expo-widgets' ? entry[1] : null))
    .find(Boolean)?.widgets?.[0]?.description;
  if (description == null) return {};

  const out = {};
  for (const [lang, file] of Object.entries(config.locales ?? {})) {
    if (typeof file !== 'string') continue;
    const json = JSON.parse(fs.readFileSync(path.join(projectRoot, file), 'utf8'));
    const translated = json.android?.[ANDROID_KEY];
    if (translated) out[lang] = { [description]: translated };
  }
  return out;
}

module.exports = function withWidgetLocales(config) {
  return withXcodeProject(config, (config) => {
    const project = config.modResults;
    const objects = project.hash.project.objects;
    const strings = readStrings(config, config.modRequest.projectRoot);
    const langs = Object.keys(strings);
    if (langs.length === 0) return config;

    const targetUuid = Object.keys(project.pbxNativeTargetSection()).find(
      (key) => !key.endsWith('_comment') && unquote(objects.PBXNativeTarget[key].name) === TARGET,
    );
    if (targetUuid == null) return config;
    const target = objects.PBXNativeTarget[targetUuid];

    const groupUuid = Object.keys(objects.PBXGroup).find((key) => {
      const group = objects.PBXGroup[key];
      return typeof group === 'object' && (unquote(group.name) === TARGET || unquote(group.path) === TARGET);
    });
    if (groupUuid == null) return config;
    const group = objects.PBXGroup[groupUuid];

    // The files. expo-widgets empties this folder on every prebuild, so they
    // are written every time.
    const folder = path.join(config.modRequest.platformProjectRoot, TARGET);
    for (const lang of langs) {
      const dir = path.join(folder, `${lang}.lproj`);
      fs.mkdirSync(dir, { recursive: true });
      const body = Object.entries(strings[lang])
        .map(([key, value]) => `"${escape(key)}" = "${escape(value)}";`)
        .join('\n');
      fs.writeFileSync(path.join(dir, FILE), `${body}\n`);
    }

    // The project entries, once.
    objects.PBXVariantGroup = objects.PBXVariantGroup ?? {};
    const existing = (group.children ?? []).find(
      (child) => objects.PBXVariantGroup[child.value] != null && unquote(objects.PBXVariantGroup[child.value].name) === FILE,
    );
    if (existing == null) {
      const variantUuid = project.generateUuid();
      const children = langs.map((lang) => {
        const refUuid = project.generateUuid();
        objects.PBXFileReference[refUuid] = {
          isa: 'PBXFileReference',
          lastKnownFileType: 'text.plist.strings',
          name: lang,
          path: `"${lang}.lproj/${FILE}"`,
          sourceTree: '"<group>"',
        };
        objects.PBXFileReference[`${refUuid}_comment`] = lang;
        return { value: refUuid, comment: lang };
      });
      objects.PBXVariantGroup[variantUuid] = { isa: 'PBXVariantGroup', children, name: FILE, sourceTree: '"<group>"' };
      objects.PBXVariantGroup[`${variantUuid}_comment`] = FILE;
      group.children.push({ value: variantUuid, comment: FILE });

      const buildFileUuid = project.generateUuid();
      objects.PBXBuildFile[buildFileUuid] = { isa: 'PBXBuildFile', fileRef: variantUuid, fileRef_comment: FILE };
      objects.PBXBuildFile[`${buildFileUuid}_comment`] = `${FILE} in Resources`;

      objects.PBXResourcesBuildPhase = objects.PBXResourcesBuildPhase ?? {};
      const phaseUuid = project.generateUuid();
      objects.PBXResourcesBuildPhase[phaseUuid] = {
        isa: 'PBXResourcesBuildPhase',
        buildActionMask: 2147483647,
        files: [{ value: buildFileUuid, comment: `${FILE} in Resources` }],
        runOnlyForDeploymentPostprocessing: 0,
      };
      objects.PBXResourcesBuildPhase[`${phaseUuid}_comment`] = 'Resources';
      target.buildPhases.push({ value: phaseUuid, comment: 'Resources' });
    }

    // Regions Xcode should know the project is in.
    const projectUuid = Object.keys(objects.PBXProject).find((key) => !key.endsWith('_comment'));
    const regions = objects.PBXProject[projectUuid].knownRegions ?? [];
    for (const lang of langs) {
      if (!regions.map(unquote).includes(lang)) regions.push(lang);
    }
    objects.PBXProject[projectUuid].knownRegions = regions;

    return config;
  });
};
