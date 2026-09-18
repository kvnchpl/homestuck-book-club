\
#!/bin/zsh
set -euo pipefail

cd /Users/Kevin/Documents/GitHub/homestuck-book-club/assets

base='https://mspaintadventures.fandom.com/wiki/Special:Redirect/file'
ua='Mozilla/5.0'

fetch () {
  local remote="$1"
  local local_name="$2"
  echo "Fetching $local_name"
  curl -fL -A "$ua" "$base/$remote" -o "$local_name"
}

fetch 'John.png' 'ref-john.png'
fetch 'Rose_Lalonde.png' 'ref-rose.png'
fetch 'Dave_Strider.png' 'ref-dave.png'
fetch 'Jade_Harley.gif' 'ref-jade.gif'

fetch 'Ghost_Aradia.png' 'ref-aradia.png'
fetch 'Tavros_Nitram.png' 'ref-tavros.png'
fetch 'Sollux_Captor.png' 'ref-sollux.png'
fetch 'Karkat_Vantas.png' 'ref-karkat.png'
fetch 'Nepeta_Leijon.png' 'ref-nepeta.png'
fetch 'Kanaya_Maryam.png' 'ref-kanaya.png'
fetch 'Terezi_Pyrope.png' 'ref-terezi.png'
fetch 'Vriska_Serket.png' 'ref-vriska.png'
fetch 'Equius_Zahhak.png' 'ref-equius.png'
fetch 'Gamzee_Makara.png' 'ref-gamzee.png'
fetch 'Eridan_Ampora.png' 'ref-eridan.png'
fetch 'Feferi_Peixes.png' 'ref-feferi.png'

echo
echo "Downloaded portrait assets:"
file ref-*
