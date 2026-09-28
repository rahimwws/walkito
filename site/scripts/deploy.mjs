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
const TARGET = 'root@161.35.52.54:/var/www/walkito/';

const run = (cmd, args) => execFileSync(cmd, args, { cwd: ROOT, stdio: 'inherit' });

run('bun', ['run', 'build']);
// `--delete` keeps the server an exact copy of `out/`. Anything that must
// survive — the Search Console, Bing and Yandex verification files — lives in
// `public/` for exactly this reason.
run('rsync', ['-az', '--delete', 'out/', TARGET]);
run('node', ['scripts/indexnow.mjs']);
