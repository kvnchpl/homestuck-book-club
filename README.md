# Homestuck Book Club

## Club wiki

The homepage, `schedule/index.html`, `recaps/index.html`, and recap viewer share `styles.css` and
`script.js`. The visual frame follows classic MS Paint Adventures: a dark-gray
background, lighter gray outer column, 650px reading area, Courier text, colored
navigation, and blue underlined content links. All internal URLs remain relative
so the site works under the GitHub Pages project path.

The full schedule contains 13 meetings and 32 suggested readings, with meeting #13
on **July 5, 2027**. Edit `schedule/index.html` directly to update meeting dates,
readings, and page counts. Hosting needs no build step or JavaScript to display it.
Use the shared page classes and relative navigation when adding future wiki pages.
On narrow screens, each reading uses the full width, with labeled starting-page
and page-count details beneath it. Links and navigation have larger touch targets.
The homepage introduction uses a pesterlog: a dashed border, Japanese Laurel
(`#3a762b`) messages from kvnchpl [KC], and a native Show/Hide disclosure. It starts open and works without
JavaScript. Edit the message paragraphs directly in `index.html`.

## Recaps

The recap index at `recaps/index.html` lists all 13 recaps alongside their meeting
dates and readings. Recaps #1–4 link to their viewers; unpublished recaps are marked
“Not yet available.” When publishing a recap, replace its status paragraph with
a reading link, using the first entry as the example. Edit this HTML directly;
there is no generation step.

The canonical recap layout is `/recaps/01/index.html`. Recap #1 currently contains
25 slides, using original GIF panels and a still from the Act 2 closing animation.
Recap #2 contains 23 slides covering Act 3 and the Intermission. Recap #3 contains
39 slides covering Act 4, consolidating the supplied PDF into shorter narrative beats.
Recap #4 contains 39 slides covering Act 5 Act 1, drafted from the comic without a PDF. Recaps #5–13
are not yet available.

Serve this directory with any static web server, for example
`python3 -m http.server 8000`, and open `http://localhost:8000/recaps/01/`.
Internal URLs are document-relative, so the same files work at `/` locally and
under `/homestuck-book-club/` on the deployed site. The deployed recap URL is
`https://kvnchpl.com/homestuck-book-club/recaps/01/`.

## Shared layout

Every page loads the shared `styles.css` and `script.js` at the repository root
(`./` from the homepage, `../` from the indexes, `../../` from a recap). Recap HTML contains the content
and semantic viewer controls; styling and behavior live in those shared files.
The script safely does nothing on pages without a `.deck`.

Use Recap #1 as the template for future recaps. Each panel is an ordinary image:

```html
<section class="slide beat">
  <div class="media">
    <img src="../../assets/A2_12_story-0665.gif"
         alt="Bro’s note summons Dave to the roof."
         width="650" height="450">
  </div>
  <div class="caption"><p>Recap text goes beneath the panel.</p></div>
</section>
```

Use `.caption` for recap text. Use `.slide.cover` for the opening
title and `.slide.act-divider` with an `.act-title` heading for an act divider.
Split longer captions into `<p>` elements at natural changes of subject or action;
the shared CSS adds paragraph spacing. Put an act’s closing label in its own
`<p class="act-ending">END OF ACT 2.</p>` to keep it centered and on one line.
The viewer derives slide numbers and counts from document order. Panels are
centered without cropping; narrow or short screens can scroll to accommodate
readable text. Without JavaScript, all slides remain readable in sequence.

## Assets and source links

Use a main panel displayed on a Homestuck story page or a complete frame from
that page’s Flash animation, preferably within the act being recapped. Do not
substitute externally linked diagrams or individual artwork layers extracted
from a Flash file. Record the actual source page and chosen panel or scene.
See [the image-source audit](ASSET_SOURCES.md) for verified panel/frame provenance and the documented earlier-act choice.

Keep **every asset directly under the repository’s `/assets/` directory**, without
recap or act subfolders. Recap pages reference these files with `../../assets/`;
do not use domain-root URLs such as `src="/assets/…"`.
Do not convert animated files into static images: native `<img>` elements play
GIF animation without a player, canvas, or animation library. Some supplied GIFs
contain only one frame and are intentionally still.

For future standardization, resize recap GIFs to **650 pixels wide** and preserve
their natural aspect ratio. Do not add white margins, crop, stretch, or force a
450px height. Square panels remain 650 × 650; taller panels retain their height
in proportion. The reader follows each image’s natural dimensions. Animated GIFs loop continuously while preserving their
original frame count and frame durations. Static GIFs remain static. Palette and
transparency/disposal details may differ between files to preserve native GIF
playback; they do not need to be identical. The homepage WebP is separate from
this recap-panel convention.

The shared script reads filenames such as `A2_12_story-0665.gif` and generates
`p. 665 ↗` in the reader tools, linking to `https://homestuck.com/story/665`.
The link updates for the current slide and is hidden on the cover or a slide
without a recognized source. The slide counter sits at the panel’s lower-right
corner and is hidden on cover slides. Leading zeroes are removed
from the link. The filename is the source of truth; URLs are not repeated in HTML.
GIF, PNG, JPG/JPEG, and WebP are supported, including Intermission filenames
such as `I1_07_story-1353.gif`. Existing variants such as
`A2_06-story-0419.gif` and `A3.I1_02_story-0833.gif` are also recognized. Files without
a story suffix remain visible without a guessed source link.

Supply descriptive alt text. If the alt attribute is missing, the script provides
an act/page fallback.

## Viewer controls

| Control | Action |
| --- | --- |
| ← / →, Page Up / Page Down | Previous / next slide |
| Space | Next slide (focused buttons retain native activation) |
| Home / End | First / last slide |
| Click a slide with a mouse | Previous in its left 35%; next elsewhere |

The recap uses a 650px reading column, centered Courier captions, and blue
underlined controls beneath the slide, following the Homestuck story reader.
The Next Slide and Go Back buttons support touch and keyboard focus. Start Over
returns to the recap’s first slide and is disabled on cover slides. The cover’s
act subtitles are plain text. Panel source links open the comic in new tabs.
On touch screens, use Next Slide and Go Back;
tapping the panel or caption does not advance. On small screens, changing slides
returns to the new panel so a previous caption’s scroll position is not retained.
A numeric hash such as `recaps/01/#12` reopens that slide;
navigation updates the hash without filling browser history. Print styles reveal
all slides, hide controls and the counter, and request one square page per slide.

The ignored `reference/` directory is the original design/content archive; its
standalone prototype files are not part of the site’s shared implementation.


## Adding a recap

Keep the copy concise and let the story’s own absurdity carry much of the humor;
not every slide needs an aside or a closing joke. Use only names, identities, and
explanations established by that recap’s final reading page. Check the original
dialogue or narration: a retrospective summary or modern image description may
use a name before the comic introduces it. Distinguish a character’s belief from
a confirmed explanation, and prefer a descriptive label when an early name is uncertain.

1. Copy `recaps/01/index.html` to `recaps/NN/index.html` (two-digit numbering).
2. Update the document title, description, deck label, cover, and slide content.
   Keep the shared resource paths, navigation, and complete controls block.
   Start with a `.slide.cover`; the reader calculates counts from document order.
   The existing `data-slide` and slide `aria-label` attributes can be omitted when
   authoring new slides; the reader supplies accessible labels on initialization.
3. Put each image directly in `assets/`, with descriptive alt text and its natural
   width and height. The `story-` suffix must identify the actual source page.
   An image with no recognized suffix is allowed and has no source link.
   Record verified panel or Flash-frame provenance in `ASSET_SOURCES.md`; unused
   assets are not automatically approved for reuse. When importing edited copy,
   preserve the verified image references, alt text, and current dimensions.
4. Replace the corresponding availability paragraph in `recaps/index.html` with
   a reading link. Add a link in that meeting’s section of `schedule/index.html`.
5. Run the checks below, then preview the cover, a long caption, an animated GIF,
   and the last slide on a desktop and a narrow screen before publishing.

## Checks

No package installation or build step is required. From the repository root:

```sh
python3 tests/check_site.py
node --test tests/reader.test.cjs
```

The Python check validates local links and fragments at both hosting paths,
shared resources, image references, required reader controls, recap availability,
and agreement between the schedule and recap index. It also checks that the
reading ranges are continuous and their page counts add up. The Node tests cover
reader state and interactions with a minimal DOM fixture; they do not replace
browser layout or assistive-technology testing.

Incomplete reader templates fall back to showing all slides. Unknown image
filenames do not stop navigation. Focus moves to the deck when a slide disappears
or the focused navigation button becomes disabled.

### Recap #1 panel sources

Panel provenance (follow the resizing guidance above for future normalization):

- `A1_09_story-0246.gif`: user-supplied still from the Act 1 ending, converted from PNG.
- `A2_03_story-0705.gif`: user-selected command terminal panel from story page 705.
- `A2_10_story-0634.gif`: user-selected Pogo Hammer creation panel from story page 634.
- `A2_13_story-0711.gif`: user-selected Can Town panel from story page 711.
- `A2_11_story-0654.gif`: [Ogre climbing panel](https://storage.homestuck.com/story/homestuck/media/images/panels/act-2/00654_1.gif).
- `A2_14_story-0749.gif`: [Serenity panel](https://storage.homestuck.com/story/homestuck/media/images/panels/act-2/00749.gif).
- `A2_15_story-0757.gif`: the existing Act 2 closing still, restored from the repository’s original `A2_17_story-0757.gif` (commit `e15a8d5`).


### Recap #3 panel sources

Recap #3 adapts the supplied *HOMESTUCK RECAP #3* PDF into 39 slides, with
short paragraphs covering the kids’ progress, ectobiology, the carapacian coup,
the Reckoning, and the Exiles. The 38 images used in the deck are numbered `A4_01` through `A4_38` in reading
order, including the act divider. The text-only cover has no asset number. Keep
the `story-` suffix tied to the original comic page when changing an image’s
sequence number, and update its HTML reference at the same time. Unused source
panels retain their existing names in `assets/` for future editorial choices.

The replacement pairings use main comic panels or complete Flash frames:

- `A4_03_story-1471.gif`: [Grandpa leaving after rescuing John](https://homestuck.com/story/1471), second panel.
- `A4_04_story-1626.gif`: [Rose and Jaspersprite on LOLAR’s shore](https://homestuck.com/story/1626), first panel.
- `A4_05_story-1507.gif`: [Crowsprite guarding the egg](https://homestuck.com/story/1507).
- `A4_08_story-1644.gif`: [Future Dave reversing time](https://homestuck.com/story/1644).
- `A4_11_story-1709.gif`: [John holding Rose’s patched bunny](https://homestuck.com/story/1709).
- `A4_21_story-1553.gif`: [Jack’s demand for the white crowns](https://homestuck.com/story/1553).
- `A4_29_story-1940.gif`: Becquerel’s birth, a complete frame from the official
  [Descend animation](https://homestuck.com/story/1940).
- `A4_34_story-1961.gif`: [Jade’s armed robot bunny](https://homestuck.com/story/1961).

The other imported comic panels come from official pages
[1732](https://homestuck.com/story/1732), [1758](https://homestuck.com/story/1758),
and [1946](https://homestuck.com/story/1946). Full-stage frames from
[Descend](https://homestuck.com/story/1940) now supply the Skaia view, Rose’s
gate blast, Battlefield scenes, defense portals, Becquerel’s birth, and Prospit’s
destruction. The Jack sword image is a full-stage frame from
[Jack: Ascend.](https://homestuck.com/story/1668). See [the audit](ASSET_SOURCES.md)
for exact frame references and verification of every active recap image.
Unused assets are not automatically approved for reuse. Animated comic GIFs
retain their original frames and timing.

Story details were checked against the comic,
[Acts & Pages: Act 4](https://actspages.net/act-4), and the
[Act 4 synopsis](https://mspaintadventures.fandom.com/wiki/Homestuck:_Act_4).


### Recap #4 sources and scope

Recap #4 covers Act 5 Act 1, story pages **1989–2625**, in 39 slides. It was
drafted directly from the comic; no PDF reference is required. The
[Acts & Pages guide](https://actspages.net/a5a1) supplied a reading roadmap, while
the original Homestuck pages supplied the story details and all images.
The recap introduces the twelve trolls, their relationships, the Sgrub session,
and its outcome without importing explanations from later readings.

Its 38 images run from `A5_01` through `A5_38` in reading order, including the
act divider and excluding the text-only cover. Thirty-five are native main-panel
GIFs; three are full-stage stills from [Make her pay](https://homestuck.com/story/2578).
Exact panel URLs and animation frame numbers are in `ASSET_SOURCES.md`.
Future Act 5 recaps should continue the `A5_` asset sequence after the highest
existing number, keeping every existing filename intact and preserving each
image’s actual `story-` source suffix.
