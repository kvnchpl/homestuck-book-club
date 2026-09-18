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

fetch_png () {
  local url="$1"
  local out="$2"
  local tmp

  tmp="$(mktemp)"
  echo "Fetching $(basename "$out")"

  curl \
    --fail \
    --location \
    --silent \
    --show-error \
    --retry 3 \
    --retry-delay 1 \
    "$url" \
    --output "$tmp"

  # Normalize whatever the server returned into a real PNG.
  sips -s format png "$tmp" --out "$out" >/dev/null

  rm -f "$tmp"
}

# Kids
fetch_png \
  'https://homestuck.net/img/resources/assets/uncategorized-assets/John%20Egbert%20-%20Normal.png' \
  "$ASSETS_DIR/ref-john.png"

fetch_png \
  'https://homestuck.net/img/resources/assets/uncategorized-assets/Characters/Humans/Rose/rose.png' \
  "$ASSETS_DIR/ref-rose.png"

fetch_png \
  'https://homestuck.net/img/resources/assets/uncategorized-assets/Dave%20Strider%20-%20Normal.png' \
  "$ASSETS_DIR/ref-dave.png"

fetch_png \
  'https://homestuck.net/img/resources/assets/uncategorized-assets/Characters/Humans/Jade/jade.png' \
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
