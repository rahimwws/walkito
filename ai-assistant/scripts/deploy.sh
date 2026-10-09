#!/usr/bin/env bash
# Build and ship a release to the website droplet (see DEPLOY.md).
#   ./scripts/deploy.sh            build, upload, switch, restart, check
#   ./scripts/deploy.sh rollback   point `current` at the previous release
set -euo pipefail
HOST=${DEPLOY_HOST:-root@161.35.52.54}
BASE=/opt/walkito-mcp
cd "$(dirname "$0")/.."

if [[ "${1:-}" == "rollback" ]]; then
  ssh "$HOST" "set -e; cd $BASE/releases; prev=\$(ls -1 | sort | tail -2 | head -1); ln -sfn $BASE/releases/\$prev $BASE/current; systemctl restart walkito-mcp; echo rolled back to \$prev"
  exit 0
fi

bun run build
bun run test
REL=$(date -u +%Y%m%d%H%M%S)
ssh "$HOST" "mkdir -p $BASE/releases/$REL"
scp -q dist/server.mjs "$HOST:$BASE/releases/$REL/server.mjs"
ssh "$HOST" "set -e
  chown -R walkito-mcp:walkito-mcp $BASE/releases/$REL
  ln -sfn $BASE/releases/$REL $BASE/current
  systemctl restart walkito-mcp
  sleep 1
  curl -fsS http://127.0.0.1:8787/health
  cd $BASE/releases && ls -1 | sort | head -n -3 | xargs -r rm -rf"
echo
curl -fsS https://walkito.site/mcp-health && echo " live: $REL"
