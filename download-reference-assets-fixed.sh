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

mkdir -p "$ASSETS_DIR"

# Stage and validate each portrait before replacing the installed image.
WORK_DIR="$(mktemp -d)"
trap 'rm -rf "$WORK_DIR"' EXIT

fetch_png () {
  local url="$1"
  local out="$2"
  local width height

  echo "Fetching $(basename "$out")"
  curl --fail --location --silent --show-error --retry 3 --retry-delay 1 \
    --connect-timeout 15 --max-time 60 "$url" --output "$WORK_DIR/source"

  # Some image hosts return WebP despite a PNG URL; keep the installed format honest.
  sips -s format png "$WORK_DIR/source" --out "$WORK_DIR/portrait.png" >/dev/null
  width="$(sips -g pixelWidth "$WORK_DIR/portrait.png" | awk '/pixelWidth:/ {print $2}')"
  height="$(sips -g pixelHeight "$WORK_DIR/portrait.png" | awk '/pixelHeight:/ {print $2}')"
  if [[ ! "$width" =~ ^[0-9]+$ || ! "$height" =~ ^[0-9]+$ ]] ||
     (( width < 1 || height < 1 || width > 650 || height > 650 )); then
    echo "Rejected $(basename "$out"): expected an individual portrait, got ${width}x${height}." >&2
    return 1
  fi
  mv "$WORK_DIR/portrait.png" "$out"
}

# Kids
fetch_png \
  'https://homestuck.net/img/resources/assets/uncategorized-assets/John%20Egbert%20-%20Normal.png' \
  "$ASSETS_DIR/ref-john.png"

fetch_png \
  'https://static.wikia.nocookie.net/mspaintadventures/images/7/7e/Rose_Lalonde.png/revision/latest?cb=20100710062733' \
  "$ASSETS_DIR/ref-rose.png"

fetch_png \
  'https://homestuck.net/img/resources/assets/uncategorized-assets/Dave%20Strider%20-%20Normal.png' \
  "$ASSETS_DIR/ref-dave.png"

fetch_png \
  'https://homestuck.net/img/resources/assets/uncategorized-assets/Jade%20Harley%20-%20Normal.gif' \
  "$ASSETS_DIR/ref-jade.png"

# Trolls
TROLL_BASE='https://homestuck.net/img/resources/assets/uncategorized-assets/Trolls'

fetch_png "$TROLL_BASE/Aradia%20Megido%20-%20Dead.png" "$ASSETS_DIR/ref-aradia.png"
fetch_png "$TROLL_BASE/Tavros%20Nitram.png" "$ASSETS_DIR/ref-tavros.png"
fetch_png "$TROLL_BASE/Sollux%20Captor.png" "$ASSETS_DIR/ref-sollux.png"
fetch_png "$TROLL_BASE/Karkat%20Vantas.png" "$ASSETS_DIR/ref-karkat.png"
fetch_png "$TROLL_BASE/Nepeta%20Leijon.png" "$ASSETS_DIR/ref-nepeta.png"
fetch_png "$TROLL_BASE/Kanaya%20Maryam.png" "$ASSETS_DIR/ref-kanaya.png"
fetch_png "$TROLL_BASE/Terezi%20Pyrope.png" "$ASSETS_DIR/ref-terezi.png"
fetch_png "$TROLL_BASE/Vriska%20Serket.png" "$ASSETS_DIR/ref-vriska.png"
fetch_png "$TROLL_BASE/Equius%20Zahhak.png" "$ASSETS_DIR/ref-equius.png"
fetch_png "$TROLL_BASE/Gamzee%20Makara.png" "$ASSETS_DIR/ref-gamzee.png"
fetch_png "$TROLL_BASE/Eridan%20Ampora.png" "$ASSETS_DIR/ref-eridan.png"
fetch_png "$TROLL_BASE/Feferi%20Peixes.png" "$ASSETS_DIR/ref-feferi.png"

echo
echo "Done. Verifying image formats:"
file "$ASSETS_DIR"/ref-*.png

echo
echo "Dimensions:"
for f in "$ASSETS_DIR"/ref-*.png; do
  echo
  echo "$(basename "$f")"
  sips -g pixelWidth -g pixelHeight "$f" | tail -n 2
done
