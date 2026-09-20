#!/bin/zsh
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

if [[ -d "$SCRIPT_DIR/assets" ]]; then
  ASSETS_DIR="$SCRIPT_DIR/assets"
elif [[ "$(basename "$SCRIPT_DIR")" == "assets" ]]; then
  ASSETS_DIR="$SCRIPT_DIR"
else
  echo "Could not find the assets directory."
  echo "Put this script in the homestuck-book-club repo root or in assets/."
  exit 1
fi

command -v cwebp >/dev/null || {
  echo "Install libwebp (cwebp) before refreshing portraits." >&2
  exit 1
}

mkdir -p "$ASSETS_DIR"

# Stage and validate each portrait before replacing the installed image.
WORK_DIR="$(mktemp -d)"
trap 'rm -rf "$WORK_DIR"' EXIT

fetch_webp () {
  local url="$1"
  local out="$2"
  local width height

  echo "Fetching $(basename "$out")"
  curl --fail --location --silent --show-error --retry 3 --retry-delay 1 \
    --connect-timeout 15 --max-time 60 "$url" --output "$WORK_DIR/source"

  # Normalize downloaded formats before encoding a lossless WebP portrait.
  sips -s format png "$WORK_DIR/source" --out "$WORK_DIR/portrait.png" >/dev/null
  width="$(sips -g pixelWidth "$WORK_DIR/portrait.png" | awk '/pixelWidth:/ {print $2}')"
  height="$(sips -g pixelHeight "$WORK_DIR/portrait.png" | awk '/pixelHeight:/ {print $2}')"
  if [[ ! "$width" =~ ^[0-9]+$ || ! "$height" =~ ^[0-9]+$ ]] ||
     (( width < 1 || height < 1 || width > 650 || height > 650 )); then
    echo "Rejected $(basename "$out"): expected an individual portrait, got ${width}x${height}." >&2
    return 1
  fi
  cwebp -quiet -lossless -exact -q 65 -m 6 "$WORK_DIR/portrait.png" -o "$WORK_DIR/portrait.webp"
  mv "$WORK_DIR/portrait.webp" "$out"
  echo "Installed $(basename "$out"): ${width}x${height}."
}

# Kids
fetch_webp \
  'https://homestuck.net/img/resources/assets/uncategorized-assets/John%20Egbert%20-%20Normal.png' \
  "$ASSETS_DIR/ref-john.webp"

fetch_webp \
  'https://static.wikia.nocookie.net/mspaintadventures/images/7/7e/Rose_Lalonde.png/revision/latest?cb=20100710062733' \
  "$ASSETS_DIR/ref-rose.webp"

fetch_webp \
  'https://homestuck.net/img/resources/assets/uncategorized-assets/Dave%20Strider%20-%20Normal.png' \
  "$ASSETS_DIR/ref-dave.webp"

fetch_webp \
  'https://homestuck.net/img/resources/assets/uncategorized-assets/Jade%20Harley%20-%20Normal.gif' \
  "$ASSETS_DIR/ref-jade.webp"

# Trolls
TROLL_BASE='https://homestuck.net/img/resources/assets/uncategorized-assets/Trolls'

fetch_webp "$TROLL_BASE/Aradia%20Megido%20-%20Dead.png" "$ASSETS_DIR/ref-aradia.webp"
fetch_webp "$TROLL_BASE/Tavros%20Nitram.png" "$ASSETS_DIR/ref-tavros.webp"
fetch_webp "$TROLL_BASE/Sollux%20Captor.png" "$ASSETS_DIR/ref-sollux.webp"
fetch_webp "$TROLL_BASE/Karkat%20Vantas.png" "$ASSETS_DIR/ref-karkat.webp"
fetch_webp "$TROLL_BASE/Nepeta%20Leijon.png" "$ASSETS_DIR/ref-nepeta.webp"
fetch_webp "$TROLL_BASE/Kanaya%20Maryam.png" "$ASSETS_DIR/ref-kanaya.webp"
fetch_webp "$TROLL_BASE/Terezi%20Pyrope.png" "$ASSETS_DIR/ref-terezi.webp"
fetch_webp "$TROLL_BASE/Vriska%20Serket.png" "$ASSETS_DIR/ref-vriska.webp"
fetch_webp "$TROLL_BASE/Equius%20Zahhak.png" "$ASSETS_DIR/ref-equius.webp"
fetch_webp "$TROLL_BASE/Gamzee%20Makara.png" "$ASSETS_DIR/ref-gamzee.webp"
fetch_webp "$TROLL_BASE/Eridan%20Ampora.png" "$ASSETS_DIR/ref-eridan.webp"
fetch_webp "$TROLL_BASE/Feferi%20Peixes.png" "$ASSETS_DIR/ref-feferi.webp"

echo
echo "Done. Verifying image formats:"
file "$ASSETS_DIR"/ref-*.webp
