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

GUARDIANS='https://homestuck.net/img/resources/assets/uncategorized-assets/Guardians'
SPRITES='https://homestuck.net/img/resources/assets/uncategorized-assets/Kernelsprites%20and%20Sprites'
CARAPACIANS='https://homestuck.net/img/resources/assets/uncategorized-assets/Prospitans%20and%20Dersites'
INCIPISPHERE='https://homestuck.net/img/resources/assets/uncategorized-assets/Incipisphere%20And%20Planetary%20Bodies'

# Guardians
fetch_webp "$GUARDIANS/Dad.png" "$ASSETS_DIR/ref-dad.webp"
fetch_webp "$GUARDIANS/Mom%20Lalonde.png" "$ASSETS_DIR/ref-mom.webp"
fetch_webp "$GUARDIANS/Dave_s%20Bro.png" "$ASSETS_DIR/ref-bro.webp"
fetch_webp "$GUARDIANS/Grandpa%20Harley.png" "$ASSETS_DIR/ref-grandpa.webp"
fetch_webp "$GUARDIANS/Becquerel%20-%20Sitting.png" "$ASSETS_DIR/ref-bec.webp"

# Sprites
fetch_webp "$SPRITES/Nannasprite.png" "$ASSETS_DIR/ref-nannasprite.webp"
fetch_webp "$SPRITES/Jaspersprite.png" "$ASSETS_DIR/ref-jaspersprite.webp"
fetch_webp "$SPRITES/Davesprite.png" "$ASSETS_DIR/ref-davesprite.webp"

# Carapacians
fetch_webp "$CARAPACIANS/Wayward%20Vagabond.png" "$ASSETS_DIR/ref-wv.webp"
fetch_webp "$CARAPACIANS/Peregrine%20Mendicant.png" "$ASSETS_DIR/ref-pm.webp"
fetch_webp "$CARAPACIANS/Aimless%20Renegade.png" "$ASSETS_DIR/ref-ar.webp"
fetch_webp "$CARAPACIANS/White%20Queen.png" "$ASSETS_DIR/ref-wq.webp"
fetch_webp "$CARAPACIANS/Jack%20Noir%20-%20Default.png" "$ASSETS_DIR/ref-jack-noir.webp"
fetch_webp "$CARAPACIANS/Draconian%20Dignitary.png" "$ASSETS_DIR/ref-dd.webp"
fetch_webp "$CARAPACIANS/Courtyard%20Droll%20-%20Default.png" "$ASSETS_DIR/ref-cd.webp"
fetch_webp "$CARAPACIANS/Hegemonic%20Brute%20-%20Default.png" "$ASSETS_DIR/ref-hb.webp"

# Snowman is represented here by her already-revealed troll-session Black Queen form.
fetch_webp "$CARAPACIANS/Black%20Queen.png" "$ASSETS_DIR/ref-black-queen.webp"

# Other revealed figures
fetch_webp "$GUARDIANS/Doc%20Scratch.gif" "$ASSETS_DIR/ref-doc-scratch.webp"
fetch_webp "$INCIPISPHERE/Server%20-%20Lord%20English%20Code.png" "$ASSETS_DIR/ref-lord-english.webp"

echo
echo "Done. Verifying new reference portraits:"
file \
  "$ASSETS_DIR/ref-dad.webp" \
  "$ASSETS_DIR/ref-mom.webp" \
  "$ASSETS_DIR/ref-bro.webp" \
  "$ASSETS_DIR/ref-grandpa.webp" \
  "$ASSETS_DIR/ref-bec.webp" \
  "$ASSETS_DIR/ref-nannasprite.webp" \
  "$ASSETS_DIR/ref-jaspersprite.webp" \
  "$ASSETS_DIR/ref-davesprite.webp" \
  "$ASSETS_DIR/ref-wv.webp" \
  "$ASSETS_DIR/ref-pm.webp" \
  "$ASSETS_DIR/ref-ar.webp" \
  "$ASSETS_DIR/ref-wq.webp" \
  "$ASSETS_DIR/ref-jack-noir.webp" \
  "$ASSETS_DIR/ref-dd.webp" \
  "$ASSETS_DIR/ref-cd.webp" \
  "$ASSETS_DIR/ref-hb.webp" \
  "$ASSETS_DIR/ref-black-queen.webp" \
  "$ASSETS_DIR/ref-doc-scratch.webp" \
  "$ASSETS_DIR/ref-lord-english.webp"
