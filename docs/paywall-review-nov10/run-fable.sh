#!/bin/bash
# Runs the Fable review on this folder, non-interactive, with full logs.
# Allowed: read files, search files, web search/fetch, write only PROGRESS.md and 07-fable-roast.md.
# Everything else (shell commands, other edits) is denied automatically.
set -u
cd "$(dirname "$0")"
mkdir -p logs
STAMP=$(date +%Y%m%d-%H%M%S)
LOG="logs/run-$STAMP.jsonl"
echo "started $(date)  log: $LOG" | tee logs/latest.txt
~/.local/bin/claude -p "$(cat FABLE-PROMPT.md)" \
  --model fable \
  --effort high \
  --name walkito-paywall-roast \
  --output-format stream-json --verbose \
  --permission-mode dontAsk \
  --allowedTools "Read" "Glob" "Grep" "WebSearch" "WebFetch" "Write(./PROGRESS.md)" "Edit(./PROGRESS.md)" "Write(./07-fable-roast.md)" "Edit(./07-fable-roast.md)" \
  --disallowedTools "Bash" \
  > "$LOG" 2> "logs/run-$STAMP.err"
echo "finished $(date)  exit=$?" | tee -a logs/latest.txt
