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

GUARDIANS='https://homestuck.net/img/resources/assets/uncategorized-assets/Guardians'
SPRITES='https://homestuck.net/img/resources/assets/uncategorized-assets/Kernelsprites%20and%20Sprites'
CARAPACIANS='https://homestuck.net/img/resources/assets/uncategorized-assets/Prospitans%20and%20Dersites'
INCIPISPHERE='https://homestuck.net/img/resources/assets/uncategorized-assets/Incipisphere%20And%20Planetary%20Bodies'

# Guardians
fetch_png "$GUARDIANS/Dad.png" "$ASSETS_DIR/ref-dad.png"
fetch_png "$GUARDIANS/Mom%20Lalonde.png" "$ASSETS_DIR/ref-mom.png"
fetch_png "$GUARDIANS/Dave_s%20Bro.png" "$ASSETS_DIR/ref-bro.png"
fetch_png "$GUARDIANS/Grandpa%20Harley.png" "$ASSETS_DIR/ref-grandpa.png"
fetch_png "$GUARDIANS/Becquerel%20-%20Sitting.png" "$ASSETS_DIR/ref-bec.png"

# Sprites
fetch_png "$SPRITES/Nannasprite.png" "$ASSETS_DIR/ref-nannasprite.png"
fetch_png "$SPRITES/Jaspersprite.png" "$ASSETS_DIR/ref-jaspersprite.png"
fetch_png "$SPRITES/Davesprite.png" "$ASSETS_DIR/ref-davesprite.png"

# Carapacians
fetch_png "$CARAPACIANS/Wayward%20Vagabond.png" "$ASSETS_DIR/ref-wv.png"
fetch_png "$CARAPACIANS/Peregrine%20Mendicant.png" "$ASSETS_DIR/ref-pm.png"
fetch_png "$CARAPACIANS/Aimless%20Renegade.png" "$ASSETS_DIR/ref-ar.png"
fetch_png "$CARAPACIANS/White%20Queen.png" "$ASSETS_DIR/ref-wq.png"
fetch_png "$CARAPACIANS/Jack%20Noir%20-%20Default.png" "$ASSETS_DIR/ref-jack-noir.png"
fetch_png "$CARAPACIANS/Draconian%20Dignitary.png" "$ASSETS_DIR/ref-dd.png"
fetch_png "$CARAPACIANS/Courtyard%20Droll%20-%20Default.png" "$ASSETS_DIR/ref-cd.png"
fetch_png "$CARAPACIANS/Hegemonic%20Brute%20-%20Default.png" "$ASSETS_DIR/ref-hb.png"

# Snowman is represented here by her already-revealed troll-session Black Queen form.
fetch_png "$CARAPACIANS/Black%20Queen.png" "$ASSETS_DIR/ref-black-queen.png"

# Other revealed figures
fetch_png "$GUARDIANS/Doc%20Scratch.gif" "$ASSETS_DIR/ref-doc-scratch.png"
fetch_png "$INCIPISPHERE/Server%20-%20Lord%20English%20Code.png" "$ASSETS_DIR/ref-lord-english.png"

echo
echo "Done. Verifying new reference portraits:"
file \
  "$ASSETS_DIR/ref-dad.png" \
  "$ASSETS_DIR/ref-mom.png" \
  "$ASSETS_DIR/ref-bro.png" \
  "$ASSETS_DIR/ref-grandpa.png" \
  "$ASSETS_DIR/ref-bec.png" \
  "$ASSETS_DIR/ref-nannasprite.png" \
  "$ASSETS_DIR/ref-jaspersprite.png" \
  "$ASSETS_DIR/ref-davesprite.png" \
  "$ASSETS_DIR/ref-wv.png" \
  "$ASSETS_DIR/ref-pm.png" \
  "$ASSETS_DIR/ref-ar.png" \
  "$ASSETS_DIR/ref-wq.png" \
  "$ASSETS_DIR/ref-jack-noir.png" \
  "$ASSETS_DIR/ref-dd.png" \
  "$ASSETS_DIR/ref-cd.png" \
  "$ASSETS_DIR/ref-hb.png" \
  "$ASSETS_DIR/ref-black-queen.png" \
  "$ASSETS_DIR/ref-doc-scratch.png" \
  "$ASSETS_DIR/ref-lord-english.png"
