#!/bin/sh
# Strips symbols from the dynamic frameworks embedded in Walkito.app.
#
# Run by the "[Walkito] Strip embedded frameworks" build phase, which
# plugins/with-strip-frameworks.js places after "[CP] Embed Pods Frameworks".
# That phase copies React, hermesvm, ReactNativeDependencies and the Expo
# module frameworks into the app exactly as they were built or downloaded, and
# CocoaPods never strips what it embeds (the pods build with
# STRIP_INSTALLED_PRODUCT=NO). On build 26 they were 32 MB of the 102.6 MB
# install, and most of that was symbol tables no phone ever reads.
#
# Two levels, chosen per framework from evidence in this build:
#
# - `strip -x -S` (debug and local symbols) when a dSYM with the same UUID is
#   among the build products. The archive collects that dSYM and the App Store
#   gets its symbols, so every name removed here is still there for a crash
#   report. The Expo frameworks ship their dSYMs inside their xcframeworks.
#
# - `strip -S` (debug symbols only) when there is no such dSYM. React,
#   ReactNativeDependencies and hermesvm come from prebuilt xcframeworks
#   without one, so their own symbol table is the only place their function
#   names exist: 87% of React's and 97% of hermesvm's named functions are local
#   symbols that `-x` would delete. What `-S` removes is the linker's debug map,
#   STAB entries pointing at object files on React Native's CI machine
#   (/Users/runner/work/...), which nothing can open. It is 96,261 of React's
#   139,928 symbols.
#
# Measured on build 26's binaries: 26.46 MB -> 19.21 MB (-7.25 MB installed),
# UUIDs unchanged, re-signing verified.
#
# The UUID never changes under strip, so if React Native's dSYMs are ever added
# to the build (they are published per release), this script moves those
# frameworks to `-x -S` by itself.
#
# Guarantees:
# - Release device builds only. Debug keeps everything for the debugger, and
#   simulator builds are not what ships.
# - Idempotent: a framework that strips to the same size is left untouched,
#   so an incremental build that did not re-copy it does not re-sign it.
# - Never fails the build. A missing framework, a failed strip or a failed
#   re-sign leaves that framework exactly as CocoaPods embedded it.
# - The app's own dSYM is untouched: this runs on the frameworks only, and
#   Xcode generates Walkito.app.dSYM from the app binary after the build
#   phases. The widget extension embeds no frameworks (it links the app's
#   through @rpath) and its binary is stripped by Xcode already.

if [ "${CONFIGURATION:-}" != "Release" ]; then
  echo "Strip embedded frameworks: skipped for ${CONFIGURATION:-unknown configuration}"
  exit 0
fi
if [ "${PLATFORM_NAME:-}" != "iphoneos" ]; then
  echo "Strip embedded frameworks: skipped for ${PLATFORM_NAME:-unknown platform}"
  exit 0
fi

FRAMEWORKS_DIR="${TARGET_BUILD_DIR:-}/${FRAMEWORKS_FOLDER_PATH:-}"
if [ -z "${TARGET_BUILD_DIR:-}" ] || [ -z "${FRAMEWORKS_FOLDER_PATH:-}" ] || [ ! -d "$FRAMEWORKS_DIR" ]; then
  echo "Strip embedded frameworks: no frameworks folder at $FRAMEWORKS_DIR, nothing to do"
  exit 0
fi

STRIP="$(xcrun --find strip 2>/dev/null)"
[ -n "$STRIP" ] || STRIP=/usr/bin/strip
DWARFDUMP="$(xcrun --find dwarfdump 2>/dev/null)"
[ -n "$DWARFDUMP" ] || DWARFDUMP=/usr/bin/dwarfdump

# The same test and the same codesign call as CocoaPods' code_sign_if_enabled,
# so a stripped framework is signed exactly the way the embed phase signed it.
SIGN=no
if [ -n "${EXPANDED_CODE_SIGN_IDENTITY:-}" ] && [ "${CODE_SIGNING_REQUIRED:-}" != "NO" ] && [ "${CODE_SIGNING_ALLOWED:-}" != "NO" ]; then
  SIGN=yes
fi

WORK="$(mktemp -d "${TMPDIR:-/tmp}/walkito-strip.XXXXXX" 2>/dev/null)"
if [ -z "$WORK" ] || [ ! -d "$WORK" ]; then
  echo "warning: Strip embedded frameworks: no temporary directory, frameworks left as embedded"
  exit 0
fi
trap 'rm -rf "$WORK"' EXIT

uuids() {
  "$DWARFDUMP" --uuid "$1" 2>/dev/null | awk '/^UUID:/ { print $2 }' | sort -u
}

# Prints the path of a dSYM for this framework whose UUIDs cover every slice of
# the binary, and succeeds, or fails if the build has none.
matching_dsym() {
  name="$1"
  want="$(uuids "$2")"
  [ -n "$want" ] || return 1
  searched=
  # XCFrameworkIntermediates/<pod>/dSYMs/<name>.framework.dSYM is four levels
  # below the products folder; a pod built from source puts it at two.
  for root in "${DWARF_DSYM_FOLDER_PATH:-}" "${BUILT_PRODUCTS_DIR:-}"; do
    [ -n "$root" ] && [ -d "$root" ] || continue
    # In an archive both are the same folder; search it once.
    if [ "$root" = "${BUILT_PRODUCTS_DIR:-}" ] && [ "$root" = "${DWARF_DSYM_FOLDER_PATH:-}" ] && [ -n "${searched:-}" ]; then
      continue
    fi
    searched=yes
    candidates="$(find "$root" -maxdepth 4 -type d -name "$name.framework.dSYM" 2>/dev/null)"
    [ -n "$candidates" ] || continue
    old_ifs="$IFS"
    IFS='
'
    for dsym in $candidates; do
      have="$(uuids "$dsym")"
      missing="$(printf '%s\n' "$want" | grep -vxF "$have")"
      if [ -z "$missing" ]; then
        IFS="$old_ifs"
        printf '%s\n' "$dsym"
        return 0
      fi
    done
    IFS="$old_ifs"
  done
  return 1
}

size_of() {
  stat -f%z "$1" 2>/dev/null || echo 0
}

mb() {
  awk -v b="$1" 'BEGIN { printf "%.2f MB", b / 1000000 }'
}

echo "Strip embedded frameworks in $FRAMEWORKS_DIR (signing: $SIGN)"
TOTAL_BEFORE=0
TOTAL_AFTER=0

for framework in "$FRAMEWORKS_DIR"/*.framework; do
  [ -d "$framework" ] || continue
  name="$(basename "$framework" .framework)"
  executable="$(/usr/libexec/PlistBuddy -c 'Print :CFBundleExecutable' "$framework/Info.plist" 2>/dev/null)"
  [ -n "$executable" ] || executable="$name"
  binary="$framework/$executable"
  if [ ! -f "$binary" ]; then
    echo "  $name: no binary at $binary, skipped"
    continue
  fi

  if dsym="$(matching_dsym "$name" "$binary")"; then
    level="-x -S"
    reason="dSYM in build: ${dsym#"${BUILT_PRODUCTS_DIR:-}"/}"
  else
    level="-S"
    reason="no dSYM in build, local symbols kept"
  fi

  before="$(size_of "$binary")"
  stripped="$WORK/$name"
  # shellcheck disable=SC2086 # $level is two flags on purpose
  if ! "$STRIP" $level -o "$stripped" "$binary" 2>"$WORK/$name.log"; then
    echo "warning: Strip embedded frameworks: strip $level failed for $name, left as embedded: $(head -n 1 "$WORK/$name.log")"
    continue
  fi
  after="$(size_of "$stripped")"
  TOTAL_BEFORE=$((TOTAL_BEFORE + before))
  if [ "$after" -ge "$before" ]; then
    echo "  $name: $(mb "$before"), already stripped"
    TOTAL_AFTER=$((TOTAL_AFTER + before))
    continue
  fi

  # Overwrite in place so the file keeps its mode, and keep the original until
  # the new signature is known to be good.
  if ! cp -p "$binary" "$WORK/$name.original"; then
    echo "warning: Strip embedded frameworks: could not back up $name, left as embedded"
    TOTAL_AFTER=$((TOTAL_AFTER + before))
    continue
  fi
  if ! cat "$stripped" > "$binary"; then
    cat "$WORK/$name.original" > "$binary" 2>/dev/null
    echo "warning: Strip embedded frameworks: could not write $name, left as embedded"
    TOTAL_AFTER=$((TOTAL_AFTER + before))
    continue
  fi
  if [ "$SIGN" = yes ]; then
    # shellcheck disable=SC2086 # OTHER_CODE_SIGN_FLAGS is a flag list, as in CocoaPods
    if ! /usr/bin/codesign --force --sign "$EXPANDED_CODE_SIGN_IDENTITY" ${OTHER_CODE_SIGN_FLAGS:-} --preserve-metadata=identifier,entitlements "$framework" >"$WORK/$name.sign.log" 2>&1; then
      cat "$WORK/$name.original" > "$binary"
      echo "warning: Strip embedded frameworks: re-signing $name failed, restored the embedded binary: $(tail -n 1 "$WORK/$name.sign.log")"
      TOTAL_AFTER=$((TOTAL_AFTER + before))
      continue
    fi
  fi
  TOTAL_AFTER=$((TOTAL_AFTER + after))
  echo "  $name: $(mb "$before") -> $(mb "$after") (strip $level; $reason)"
done

echo "Strip embedded frameworks: $(mb "$TOTAL_BEFORE") -> $(mb "$TOTAL_AFTER")"
exit 0
