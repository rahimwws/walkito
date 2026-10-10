# Walkito AI assistant: deployment

Endpoint `https://walkito.site/mcp` (stateless Streamable HTTP, both the 2025
and 2026-07-28 protocol eras), health `https://walkito.site/mcp-health`, plan
codes `https://walkito.site/p/<CODE>/`. Live since 2026-10-09.

## Server (inspected 2026-10-09, read-only first)

| | |
|---|---|
| Machine | DigitalOcean droplet `161.35.52.54`, NYC1, "s-1vcpu-512mb-10gb" |
| OS | Ubuntu 24.04.3 LTS, 1 vCPU, 458 MB RAM (about 190 MB free before this), 8.7 GB disk at 77% |
| Web server | nginx 1.24, `/etc/nginx/sites-enabled/walkito.site`; the site is static files in `/var/www/walkito` (Next.js static export, rsynced by `.github/workflows/deploy-site.yml` as user `deploy`) |
| HTTPS | Let's Encrypt via certbot; no Cloudflare, DNS (Hostinger) points `walkito.site` straight at the droplet |
| Neighbours | nemy.agency: Next.js on `*:3000` under pm2 (`pm2-root.service`) |
| Node | `/usr/bin/node` v22.22.3 (system, also used by pm2). The assistant uses it; nothing was replaced |
| Firewall | ufw inactive, no DigitalOcean cloud firewall seen. Note: nemy.agency's `:3000` is reachable from the internet directly |

**Memory is the limit.** The assistant runs at about 55 MB (systemd caps it at
160 MB). If the droplet starts swapping or nemy grows, move to the 1 GB size.

## What runs where

- `/opt/walkito-mcp/releases/<UTC timestamp>/server.mjs`: one self-contained bundle (no node_modules), the last 3 kept.
- `/opt/walkito-mcp/current` → the live release.
- `/opt/walkito-mcp/.env` (`chmod 600`): `PORT=8787`, `NODE_ENV=production`. No secrets yet (Sentry DSN would go here).
- `systemd` unit `walkito-mcp`: user `walkito-mcp`, `127.0.0.1:8787` only, `Restart=always`, enabled at boot, `MemoryMax=160M`, read-only filesystem. Logs: `journalctl -u walkito-mcp` (one JSON line per call: tool, host, enum args, ms, status).
- nginx: `/mcp` (rate limit 10 r/s per IP, burst 20, `proxy_buffering off`), `= /mcp-health`, `/p/` in the `walkito.site` server block; the zone is `/etc/nginx/conf.d/walkito-mcp-limits.conf`. The config before this change is `/root/walkito.site.nginx.bak-<date>`.

## Deploy

```
cd ai-assistant
./scripts/deploy.sh
```

Builds, runs the tests, uploads a release, switches `current`, restarts,
checks health locally and through the site. Needs SSH as root to the droplet.
Then run three golden prompts in each host.

## Roll back

- App: `./scripts/deploy.sh rollback` (points `current` at the previous release and restarts).
- Proxy: `cp /root/walkito.site.nginx.bak-<date> /etc/nginx/sites-enabled/walkito.site && rm /etc/nginx/conf.d/walkito-mcp-limits.conf && nginx -t && systemctl reload nginx`.
- Stop entirely: `systemctl disable --now walkito-mcp` (the site is unaffected).

## Gaps found while building (for Rahim)

Content the spec assumes and the app does not have. Nothing was invented to fill them:

- **Clip status.** `clip-manifest.ts` has file, size and hash, no `ok`/`weak`/`wrong` or `reviewedHash`. A clip is shown when it is in the manifest with a recorded hash; `clipFor()` is where a status filter goes once the manifest has one.
- **Starting doses.** The spec says "2 sets"; the app's week one gives what `doseFor` gives (e.g. seated heel raises 3 × 10). The app wins (spec rule 9).
- **After-work routine.** The app's "At work" routine is 2 minutes, not 5. The tool says "short", not "5-minute" (the one deliberate change to the spec's tool copy).
- **Run-walk module.** The app has none. `ready_to_run` applies the spec's check (morning pain ≤ 3 over two weeks, 20 single-leg calf raises) and the spec's limits (3 runs a week, never on consecutive days), and gives no intervals.
- **Gates the app does not have.** Eyes-closed balance for 60+/unknown age and "nothing on a step" for the Achilles are applied as the spec asks; both only remove exercises.
- **Posters.** The app has none; the site has 20 (`site/public/exercises/<id>.webp`), used where they exist.

## Design gaps

- The widgets draw the app's exercise card, week circles, glass chips, primary button and notes in HTML/CSS from `tokens.css` (generated from `src/shared/config/theme.ts` and the site's radii). Side-by-side screenshots against the app (spec §9.12) still need taking on a device.
- The widget view uses a 4 KB bridge (`src/widget/bridge.ts`) speaking the MCP Apps protocol (2026-01-26) rather than the SDK's `App`, which inlined to 600 KB per widget because of zod. The server side uses the official SDKs.

## Not done here (needs Rahim)

- DigitalOcean snapshot or backups (none taken before the change; the configs were backed up).
- Uptime check on `/mcp-health` (UptimeRobot, alerts to hello@walkito.site) and a Sentry DSN.
- Directory submissions (ChatGPT, Claude) with `LISTING.md`; Claude's MCP Apps domain verification if it asks.
- The app side of plan codes (deep link, code input, prefill, paywall line, analytics, RevenueCat) ships with an app release; `/p/*` joins the site's apple-app-site-association in the same release, not before (an installed older app would open on an unknown route).
