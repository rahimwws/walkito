#!/usr/bin/env node
/**
 * Build, upload, and tell the search engines — in that order, every time.
 *
 * IndexNow used to be a separate step somebody had to remember, so it was
 * mostly not run. It is the step that gets a changed page re-crawled by Bing
 * (and through Bing, ChatGPT's search) and by Yandex in hours instead of weeks,
 * so it is part of the deploy rather than a note in the README.
 *
 * It runs last on purpose: IndexNow fetches the key file and the sitemap from
 * the live host, so the upload has to have landed first.
 *
 *   bun run deploy
 */
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
// From a laptop: root, as it always was. From GitHub Actions (`.github/
// workflows/deploy-site.yml`): the `deploy` user, whose key can only rsync
// into /var/www/walkito (rrsync), set through DEPLOY_TARGET and DEPLOY_SSH.
const TARGET = process.env.DEPLOY_TARGET || 'root@161.35.52.54:/var/www/walkito/';
const SSH = process.env.DEPLOY_SSH;

const run = (cmd, args) => execFileSync(cmd, args, { cwd: ROOT, stdio: 'inherit' });

run('bun', ['run', 'build']);
// `--delete` keeps the server an exact copy of `out/`. Anything that must
// survive — the Search Console, Bing and Yandex verification files — lives in
// `public/` for exactly this reason.
// Compare by content (--checksum) and do not copy timestamps (no -t, so not
// -a): every build re-creates every file "now", and copying that date made
// the server stamp unchanged images and videos as new on each deploy, which
// changed their Last-Modified/ETag and sent returning visitors to download
// them again. Now an unchanged file is skipped and keeps its date; a changed
// file gets the upload time. -rlp = recursive, symlinks, permissions.
run('rsync', ['-rlpz', '--checksum', '--delete', ...(SSH ? ['-e', SSH] : []), 'out/', TARGET]);
// A root upload leaves the files owned by whoever built them; hand them back
// to `deploy`, or the next upload from GitHub Actions cannot replace them.
if (TARGET.startsWith('root@')) {
  run('ssh', [TARGET.split(':')[0], 'chown -R deploy:deploy /var/www/walkito']);
}
run('node', ['scripts/indexnow.mjs']);
