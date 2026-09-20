# Homestuck Book Club

A static site for a 13-meeting read-through of Homestuck, from June 2026 to July 2027. It includes the meeting schedule, published recap readers, and a reference that reveals information according to the reader's progress.

## Run locally

No build step or package installation is required. From the repository root:

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000/>. Publish the repository as static files; document-relative links support both a domain root and a project subdirectory.

## Repository layout

- `index.html` — welcome page.
- `schedule/index.html` — 13 meetings and 32 reading assignments covering 8,129 pages.
- `recaps/index.html` — availability and reading list for each meeting.
- `recaps/01/` through `recaps/04/` — published recaps, through Act 5 Act 1.
- `reference/index.html` — reference shell with no embedded spoiler-sensitive facts.
- `reference-data.js` — staged reference content and source metadata.
- `script.js` — reference rendering, saved reading progress, and recap navigation.
- `styles.css` — shared layouts, responsive styles, and print rules.
- `assets/` — committed recap panels, reference portraits, and the home image.
- `ASSET_SOURCES.md` — provenance audit for active recap images.
- `tests/` — dependency-free static-site and interaction checks.

## Checks

Use Python 3.9+ and Node.js 18+:

```sh
python3 tests/check_site.py
node --test tests/*.test.cjs
```

The static check validates HTML structure, navigation, local links at both hosting paths, image formats and dimensions, schedule/recap agreement, and reference assets and source boundaries. The JavaScript tests exercise the staged renderer, spoiler rollback, saved/blocked storage, character tabs, and recap interactions. These checks do not independently verify story claims against the comic.

For changes to layout or interactions, also preview desktop and mobile widths, keyboard navigation, and printing in a browser.

## Maintaining pages and recaps

All pages share `styles.css`, `script.js`, and the same five navigation links. Keep paths relative to each HTML document. Update meeting dates and reading labels in both the schedule and recap index.

To publish another recap, add `recaps/NN/index.html` using an existing recap's structure, link it from the corresponding entries in both indexes, and remove its “Not yet available” status. Keep slides readable without JavaScript; the script adds single-slide navigation and numeric URL fragments. Printing includes every slide.

Recap image filenames encode the actual source story page (`A5_01_story-1989.webp`, for example); the reader derives its source link from that suffix. Use 650px-wide images with proportional heights and matching HTML dimensions. Follow `ASSET_SOURCES.md` before introducing or reusing an image. Keep only images referenced by the site in `assets/`; the static check rejects unused images.

## Image optimization

The homepage uses a 1300 × 975 WebP at quality 65 (enough resolution for its 650px display width on a 2× screen). Recap panels retain their 650px width and original proportions. All site images use WebP, including every recap panel and the reference portraits. The portrait conversion uses lossless encoding with exact transparency preservation.

Recap images use `loading="lazy"` and `decoding="async"`. The reader requests the current slide and the next slide eagerly; opening print preview requests every panel. With JavaScript disabled, the browser loads the ordinary document's images normally.

`tools/optimize_images.py` compares lossy WebP at quality 65 against lossless WebP and writes the smallest WebP candidate to a separate directory, even when the original format is smaller. Use `--lossless` for portraits. It checks dimensions and animation duration/looping. This optional maintenance tool requires Python with Pillow and `gif2webp` from libwebp; the site and its normal tests need neither.

```sh
python3 tools/optimize_images.py --output-dir /tmp/optimized /path/to/original.gif
python3 tools/optimize_images.py --lossless --output-dir /tmp/optimized /path/to/original-portrait.png
python3 tools/optimize_images.py --output-dir /tmp/optimized --max-width 1300 /path/to/original-photo.webp
```

Use original artwork as input to avoid repeatedly compressing an already lossy image. Review candidates, copy accepted outputs into `assets/`, update HTML paths and dimensions, and update the current asset filenames in `ASSET_SOURCES.md`. The script never modifies its inputs. The original GIF versions of the converted panels remain in Git history.

The September 2026 pass reduced the homepage image from 2,791,434 to 70,868 bytes (97.5%) and the 122 active recap panels from 9,230,517 to 5,124,602 bytes (44.5%). All 52 animated panels retain their playback timing and looping. The 35 portraits decreased from 269,902 to 73,526 bytes (72.8%), preserving their exact RGBA pixels. Forty unused images were removed.

## Staged reference data

The reference selector includes all 32 scheduled reading segments through Act 7, including the three Act 5 Act 2 reading assignments. All segments appear in a responsive button grid, grouped by each stage’s `section` label. The grid uses six columns on desktop and four on small screens, with no internal scrolling or collapsed groups. Labels use act numbers rather than story titles. Shaded buttons are locked; the selected segment is highlighted. Character content is currently authored through Act 5 Act 1.

`availableThrough` in `reference-data.js` sets the book club's maximum selectable stage, currently `act-5-act-1`. Advance this key after the club reaches the next segment and its reference content is ready; it does not advance automatically by date. The segment buttons, saved progress, and rendering all respect this cap. Missing or invalid caps fall back to Act 1. A fresh visit starts at Act 1. Progress is saved under `homestuck-reference-progress` in local storage; blocked storage does not prevent use.

Spoiler-sensitive values are ordered variants:

```js
name: [
  { from: 'intermission', value: 'SNOWMAN', sourcePage: 1268, sourceKind: 'direct' },
  { from: 'act-4', value: 'SNOWMAN (BLACK QUEEN)', sourcePage: 1674, sourceKind: 'direct' }
]
```

The renderer uses the latest variant reached at the selected stage. If no variant is available, it does not insert that property into the DOM. Names, roster labels, portraits and alt text, stats, group headings, and cheat-sheet copy all use this model. Character group assignments may also be staged. Quadrants become available with their containing section.

For example, the guardian heading starts as `GUARDIANS` in Act 1 and becomes `GUARDIANS & SPRITES` in Act 2. Snowman's name and portrait change when her earlier identity is revealed in Act 4. Add variants to the relevant arrays rather than overwriting earlier wording. Names and compact roster labels have separate arrays; update both when an alias should also change in the roster.

Each character has a stable `id`, a `reveal` stage, and an `introPage`. Character URLs use `#character-ID`; following a link does not advance reading progress. Name links point to the currently revealed name's source page. Portrait paths are relative to `reference/index.html`. A character may intentionally have no portrait at an early stage.

Every user-facing reference record carries a primary `sourcePage`. Optional `sourcePages` contains additional supporting pages without repeating the primary page. All supporting pages must fall within the record's reading stage. Source metadata is not rendered publicly.

`sourceKind` distinguishes:

- `intro` — character-level introduction metadata.
- `direct` — textually supported wording.
- `visual` — support from an image or animation.
- `composite` — wording supported by multiple pages.
- `editorial` — an organizational label based on the cited material.
- `boundary` — a reading checkpoint, not direct evidence for a claim.

`sourceNote` records audit context; `sourceAudit` records the scope and date of prior manual fact-checking. The renderer warns about missing source pages; the tests also check stage order, source boundaries, and asset availability.

To prepare a later segment, add its content variants in stage order using the existing stage key. Keep `availableThrough` at the club's current boundary until the new segment is ready to open. If the schedule gains a segment, update the stage array with consecutive numeric values, unique keys, labels, and matching end pages. The grouped segment buttons are generated from this array. Update the reference page description when its authored coverage changes.

The reference requires JavaScript and stays empty if its data cannot load. Printing includes every character rendered for the selected stage, including profiles hidden by tab selection; later-stage facts remain absent.

The reference shell versions its stylesheet, data, and renderer URLs together. Bump their shared `v` query value when changing the cap or selector behavior so returning visitors load the matching assets.

## Portrait download helpers

The optional `download-reference-assets-fixed.sh` (kids and trolls) and `download-reference-secondary-assets.sh` (secondary characters) refresh selected portraits on macOS using `curl`, `sips`, and `cwebp` from libwebp. Both stage and validate each download, then encode a lossless WebP before replacing the installed portrait. They are maintenance tools, not a build step; review downloaded images before committing.

`ref-snowman.webp` is the separately supplied Intermission portrait; the download helpers do not replace it. `ref-black-queen.webp` becomes Snowman's portrait at Act 4, alongside her expanded name. Both the profile image and roster thumbnail use the selected portrait variant. Do not change a portrait's reveal stage without checking its spoiler implications.
