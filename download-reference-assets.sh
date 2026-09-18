#!/bin/zsh
# Compatibility entry point: use the verified portrait sources and validation.
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
exec /bin/zsh "$SCRIPT_DIR/download-reference-assets-fixed.sh" "$@"
