# Project Environment

- Expo SDK 57 (`expo` 57.0.8), React Native 0.86, and Expo Router.
- iOS, Android, and web are configured; native directories are generated and ignored.
- Bun lockfile is present, although `package.json` currently declares Yarn 1 in `packageManager`.
- Metro uses the default port, 8081.
- Architecture is Feature-Sliced Design; see `src/README.md`. `/app` holds Expo
  Router routes as thin re-exports, `src/` holds the layers. `app.json` pins
  `extra.router.root` to `"app"` because Expo Router would otherwise prefer
  `src/app` and treat the FSD App layer as the route tree.
- Path aliases: `@/*` → `src/*`, `@assets/*` → `assets/*`.
- No EAS project is linked — the previous `projectId`/`owner`/updates URL were
  removed when the app was reset to a foundation. Run `eas init` before building.
- App variants are selected with `APP_VARIANT`; development, preview, and production use separate identifiers, names, schemes, and icons.
- Preview builds use internal distribution, the `preview` EAS environment, and the `preview` update channel.
- GitHub Actions runs Expo code review from trusted base-revision configuration. EAS PR previews require the maintainer-controlled `preview-approved` label and bundle in the secrets-free custom `pr-preview` environment (supported by the Production plan), which contains only `APP_VARIANT=preview`.
- Icons: `@hugeicons/core-free-icons` (MIT, public). Stroke-rounded only — no
  solid variants. Import per-icon by subpath (`@hugeicons/core-free-icons/XIcon`,
  default export); a root barrel import adds ~4.7MB because Metro does not
  tree-shake. All dependencies are public; there is no `.npmrc` and no token.
- There is no test, lint, or typecheck script. Typecheck with `npx tsc --noEmit`.
