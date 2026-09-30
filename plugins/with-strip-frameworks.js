/**
 * Strips symbols from the frameworks embedded in the app, in Release device
 * builds. The work is in `strip-embedded-frameworks.sh`, which says what is
 * stripped and why; this plugin only puts a build phase in front of it.
 *
 * The phase has to run after "[CP] Embed Pods Frameworks", which copies the
 * frameworks in, and that is the awkward part: the CocoaPods phase does not
 * exist at prebuild. `pod install` creates it later and appends it to the end
 * of the target, so a phase added here would run first and strip nothing.
 * CocoaPods finds its phase by name, though, and updates an existing one in
 * place without moving it. So this plugin adds an empty "[CP] Embed Pods
 * Frameworks" phase itself, puts the strip phase after it, and `pod install`
 * fills the placeholder in where it stands. If CocoaPods decides nothing needs
 * embedding it deletes the phase, and the strip phase finds no frameworks.
 *
 * The strip phase also goes after every phase that is already there when this
 * runs. That is why it is the *first* plugin in app.json: Xcode project mods
 * run in reverse order of registration, so the first one registered runs
 * last, after expo-widgets has added "Embed Foundation Extensions" and
 * expo-dev-client its launcher phase. Listed anywhere else, it still strips
 * correctly (the widget extension embeds no frameworks of its own); only the
 * extension embedding would come after it.
 */
const { withXcodeProject, WarningAggregator } = require('expo/config-plugins');

const PHASE = '[Walkito] Strip embedded frameworks';
const COCOAPODS_EMBED = '[CP] Embed Pods Frameworks';

// Resolved from the ios/ folder at build time, so the phase follows the repo
// rather than an absolute path from the machine that ran prebuild.
const SCRIPT = [
  '# Added by plugins/with-strip-frameworks.js. Release device builds only; see the script.',
  'script="${PROJECT_DIR}/../plugins/strip-embedded-frameworks.sh"',
  'if [ -f "$script" ]; then',
  '  /bin/sh "$script"',
  'else',
  '  echo "warning: $script is missing, embedded frameworks keep their symbols"',
  'fi',
  '',
].join('\n');

function phaseComment(phase) {
  return (phase.comment ?? '').replace(/^"|"$/g, '');
}

// A pbxproj string literal, escaped the way Xcode writes one.
function quote(text) {
  return `"${text.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n')}"`;
}

module.exports = function withStripFrameworks(config) {
  return withXcodeProject(config, (config) => {
    const project = config.modResults;
    const targetKey = project.findTargetKey(config.modRequest.projectName ?? '');
    const target = targetKey ? project.pbxNativeTargetSection()[targetKey] : null;
    if (target == null) {
      WarningAggregator.addWarningIOS(
        'with-strip-frameworks',
        `No "${config.modRequest.projectName}" target, so embedded frameworks keep their symbols.`,
      );
      return config;
    }

    const has = (name) => target.buildPhases.some((phase) => phaseComment(phase) === name);

    if (!has(COCOAPODS_EMBED)) {
      const { uuid } = project.addBuildPhase([], 'PBXShellScriptBuildPhase', COCOAPODS_EMBED, targetKey, {
        shellPath: '/bin/sh',
        shellScript: '',
      });
      project.hash.project.objects.PBXShellScriptBuildPhase[uuid].shellScript = quote(
        '# Placeholder from plugins/with-strip-frameworks.js. `pod install` replaces this script and keeps the phase where it is.\n',
      );
    }

    if (!has(PHASE)) {
      project.addBuildPhase([], 'PBXShellScriptBuildPhase', PHASE, targetKey, {
        shellPath: '/bin/sh',
        shellScript: '',
      });
    }

    // Last, whatever order the phases were added in: after the CocoaPods
    // placeholder and after any extension or framework embedding already here.
    const index = target.buildPhases.findIndex((phase) => phaseComment(phase) === PHASE);
    const [reference] = target.buildPhases.splice(index, 1);
    target.buildPhases.push(reference);

    // Written on every prebuild, so a project that already has the phase gets
    // the current script too.
    const phase = project.hash.project.objects.PBXShellScriptBuildPhase[reference.value];
    phase.shellScript = quote(SCRIPT);
    // No outputs to track: it has to run after every embed. This also spares
    // the "will be run during every build" warning.
    phase.alwaysOutOfDate = 1;

    return config;
  });
};
