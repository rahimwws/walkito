/**
 * Keeps Hermes debug info out of the JavaScript bundle embedded in the app.
 *
 * `react-native-xcode.sh` passes `-output-source-map` to hermesc only when
 * SOURCEMAP_FILE is set. Without it, hermesc writes the line tables into the
 * bytecode itself, and they ship inside the app: 1.5-1.8 MB of main.jsbundle's
 * 16.8 MB on build 26, whose log shows SOURCEMAP_FILE empty. With it, the same
 * tables go to a source map next to the build instead. Nothing at run time
 * reads them; an OTA bundle from `eas update` has always been compiled this
 * way and runs the same code.
 *
 * This plugin sets SOURCEMAP_FILE at the top of the "Bundle React Native code
 * and images" phase for every configuration that bundles (Debug does not),
 * unless the build already set it:
 *
 * - On EAS, the production profile sets `uploadSourceMaps` and
 *   `ios.env.SOURCEMAP_FILE` in eas.json. EAS resolves that path against ios/,
 *   hands the absolute path to Xcode, and afterwards uploads the map so EAS
 *   Observe symbolicates reported errors. `buildArtifactPaths` keeps a copy
 *   with the build for anything else.
 * - Everywhere else (`expo run:ios --configuration Release`, `eas build
 *   --local`, Xcode) the default below puts the map in the same place.
 *
 * A relative path is taken from ios/, as EAS takes it, and its folder is
 * created: compose-source-maps.js writes the file without creating one, and
 * the map must not land in the products folder, where react-native-xcode.sh
 * keeps its intermediate map under the same name and then deletes it. To keep
 * debug info in a local build, put `export SOURCEMAP_FILE=` in
 * ios/.xcode.env.local, which is sourced after this.
 */
const { withXcodeProject, WarningAggregator } = require('expo/config-plugins');

const PHASE = 'Bundle React Native code and images';
const BEGIN = '# >>> walkito: hermes debug info to a source map (plugins/with-hermes-sourcemap.js)';
const END = '# <<< walkito: hermes debug info to a source map';

const BLOCK = [
  BEGIN,
  'case "$CONFIGURATION" in',
  '  *Debug*) ;;',
  '  *)',
  '    : "${SOURCEMAP_FILE:=build/sourcemaps/main.jsbundle.map}"',
  '    case "$SOURCEMAP_FILE" in',
  '      /*) ;;',
  '      *) SOURCEMAP_FILE="$PROJECT_DIR/$SOURCEMAP_FILE" ;;',
  '    esac',
  '    export SOURCEMAP_FILE',
  '    mkdir -p "$(dirname "$SOURCEMAP_FILE")"',
  '    ;;',
  'esac',
  END,
  '',
].join('\n');

// The body of a pbxproj string literal, escaped the way Xcode writes one. The
// parsed project keeps scripts in this form, quotes included.
function escape(text) {
  return text.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
}

function unquotedName(value) {
  return typeof value === 'string' ? value.replace(/^"|"$/g, '') : '';
}

module.exports = function withHermesSourcemap(config) {
  return withXcodeProject(config, (config) => {
    const phases = config.modResults.hash.project.objects.PBXShellScriptBuildPhase ?? {};
    const bundle = Object.values(phases).find(
      (phase) => typeof phase === 'object' && unquotedName(phase.name) === PHASE,
    );
    if (bundle == null || typeof bundle.shellScript !== 'string') {
      WarningAggregator.addWarningIOS(
        'with-hermes-sourcemap',
        `No "${PHASE}" build phase, so Hermes debug info stays in the embedded bundle.`,
      );
      return config;
    }

    let body = bundle.shellScript.replace(/^"|"$/g, '');
    // Replace an earlier copy rather than stacking a second one on re-runs.
    const begin = body.indexOf(escape(BEGIN));
    if (begin !== -1) {
      const endMarker = escape(`${END}\n`);
      const end = body.indexOf(endMarker, begin);
      if (end !== -1) {
        body = body.slice(0, begin) + body.slice(end + endMarker.length);
      }
    }
    bundle.shellScript = `"${escape(BLOCK)}${body}"`;
    return config;
  });
};
