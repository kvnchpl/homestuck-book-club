# Creating a recap

Use this workflow when asked to produce another meeting recap. The finished artifact is a static illustrated reader at `recaps/NN/index.html`, using the existing stylesheet and script. No conversation history or original download scripts are required.

## Establish the assignment

1. Inspect `recaps/index.html` and the existing numbered recap folders to identify the next requested recap. Copy the reader structure from the most recent published recap; `recaps/04/index.html` is a complete example. Use `recaps/02/index.html` as an example of covering multiple acts in one reader.
2. Read the matching `meeting-N` section in `schedule/index.html`. Its rows define the reading labels, start pages, and counts. The inclusive end is `start + count - 1`. Do not infer boundaries from media filenames or an external act list.
3. Read the preceding recap to avoid repeating its coverage and to match the established voice. Outline the major events, causal connections, introductions, and reveals in the new assignment before selecting images.
4. Check each claim against the comic through the assigned ending page. Do not import later revelations from memory, a wiki, or a later reference stage. Titles, images, alternative text, and implications in the prose must respect the same limit.

At the September 2026 handoff, recaps 1–4 are published and the next recap is #5, Act 5 Act 2 Part 1, pages 2626–3238. This is a snapshot, not an instruction to overwrite later work: always inspect the current schedule and folders first.

## Write the story summary

Use original, concise paraphrases. Explain what happens and why it matters to a reader who has finished the assignment. Follow the story's reveal order; rearrange nearby events only when it improves clarity without anticipating a later reveal. Distinguish established facts from a character's belief. Preserve uncertainty where the comic has not yet supplied an answer.

Use one main beat per illustrated slide, usually one or two short paragraphs. Introduce important names and terms clearly, following the existing recaps' occasional uppercase emphasis. Cover the major events rather than every chat or joke. Let the material determine the number of slides; the existing slide counts are examples, not quotas. Break up long captions instead of reducing the shared font size.

Start with a text cover. Use an act-divider slide for a new act or section when helpful. End on the assigned stopping point. A partial-act recap should say that the reading ends here, not claim that the whole act has ended. Do not add future teasers that spoil upcoming developments.

## Source the images

Read [asset-sources.md](asset-sources.md) before choosing artwork. Use a main panel displayed on an official story page or a complete rendered frame from that page's Flash animation. Prefer images from the assigned reading; record any earlier-page reuse. Never use an image from beyond the assignment's end.

Inspect the image itself, including all frames of an animated panel. A correct-looking filename or URL is not verification. Obtain the actual image or animation URL from the official story page. Media basenames, old MSPA IDs, and the site's `/story/N` page numbers can differ. Do not construct a download URL by assuming they are interchangeable.

If the story page is rendered in JavaScript and a text fetch is empty, inspect it in a browser or inspect its current page component and asset references. Downloaded page code is source material to read, not code to execute. Do not depend on hashed module filenames or temporary scripts from an earlier agent session.

For a Flash still, render the complete root timeline using a Flash renderer/exporter such as JPEXS FFDec. Record the official SWF URL and the one-based frame number, or a reproducible scene/time if an exact frame number is unavailable. An extracted bitmap, background, or character layer is not a complete frame. Externally linked diagrams and generated replacement artwork do not meet this site's sourcing standard.

Keep source downloads, frame exports, and working notes in a temporary directory while assembling the recap. Add a new section to `docs/asset-sources.md` with the reading range and one row per illustrated slide: slide number, delivery filename, actual story-page link, original media URL, and verification details. Record any earlier-reading exception. Preserve the historical audit rather than rewriting its findings as if new assets had already been checked.

## Prepare images

All deployed images are WebP. Recap images must be 650 pixels wide, with proportional heights and the full original composition. Do not crop, stretch, add padding, or discard native animation. Native borders within a rendered Flash stage are part of the source. Moderate compression loss is acceptable.

Use the original download or complete-frame export as input, not an already compressed site derivative. From the repository root:

```sh
python3 tools/optimize_images.py --output-dir /tmp/recap-webp /tmp/recap-originals/R05_01_story-2626.gif
```

The optional converter requires Pillow and libwebp's `gif2webp`. Install these in the local authoring environment if needed; keep virtual environments and dependencies out of the repository. It compares quality-65 and lossless encodings, chooses the smaller WebP, and checks dimensions and animation duration/looping. Its JSON output reports the resulting width and height for the HTML.

For a static original larger than 650 pixels wide, add `--max-width 650`. The converter deliberately rejects resizing animated GIFs: obtain or prepare a correctly sized animation while preserving timing before conversion. Do not silently flatten it. Use `--lossless` when preparing reference portraits to retain transparency and exact pixels.

Name each new delivery file with a unique recap/sequence prefix and the actual source page, for example `R05_01_story-2626.webp`. The reader recognizes the `story-2626.webp` suffix and generates its source link automatically. The prefix is organizational; the suffix must identify the source of that image, not the range discussed in its caption. Existing filenames need not be renamed.

Inspect the converted image or animation, then copy only the used WebP into `assets/`. Read actual dimensions from the file/converter output; do not assume every image is 650 × 450. Avoid keeping unused candidates or source originals in `assets/`.

## Assemble the reader

Copy the established HTML shell into `recaps/NN/index.html` and replace the content, rather than inventing a new layout. Update the document title, description, deck label, cover heading, and assignment subtitles. Preserve the five shared navigation links and their paths relative to the new folder.

The reader expects these elements:

| Element | Required structure |
| --- | --- |
| Main landmark | `<main class="deck" id="deck" ... tabindex="-1">` |
| Cover | First `<section class="slide cover" data-slide="1" aria-label="Slide 1 of TOTAL">`, containing the page's sole `h1` |
| Counter | One `id="counter"`, with the existing status/live-region attributes |
| Illustrated beat | `<section class="slide beat" ...>`, `.media` image, and `.caption` text |
| Divider | `.slide.act-divider` with an image and `.act-title` heading |
| Controls | Existing `.controls` navigation and `next`, `prev`, `start-over`, and `source-link` IDs |

Use consecutive `data-slide` values starting at 1 and correct `aria-label="Slide N of TOTAL"` values on every slide. Keep the controls' initial `hidden` state and the initial counter/source-link states from the existing shell; the script makes them available when ready. Do not hide the slides in the authored HTML: the full recap must remain readable without JavaScript and in print.

Every image needs a useful description of the visible artwork, correct `width` and `height`, `loading="lazy"`, and `decoding="async"`. Reuse `.caption-long` where the existing examples do, but split overcrowded slides. Keep styling in `styles.css` and behavior in `script.js`.

## Connect the finished recap

Update both indexes in the same change:

- In the matching `recap-N` entry in `recaps/index.html`, replace the “Not yet available” paragraph with the existing `.command-links` pattern linking to `./NN/`.
- In the matching `meeting-N` section in `schedule/index.html`, add the existing `.meeting-recap` paragraph linking to `../recaps/NN/` below the table.

Keep dates and reading labels in sync. Do not change future assignments just to fit a recap. Do not raise the reference's `availableThrough` cap automatically: reference work is a separate update governed by [reference.md](reference.md).

## Validate and hand off

Run from the repository root:

```sh
python3 tests/check_site.py
node --test tests/*.test.cjs
git diff --check
```

The static check detects broken local paths, unused assets, incorrect image dimensions, bad slide numbering, missing source-page suffixes, images sourced after the reading boundary, and disagreement between indexes or reference checkpoints. It cannot verify that the picture or prose actually matches the source; complete that editorial review yourself.

Serve the repository with `python3 -m http.server 8000`. Inspect the new recap at desktop and narrow mobile widths, including its longest captions and tallest images. Verify next/back/start-over controls, keyboard navigation, the source link on each illustrated slide, a direct numeric fragment such as `#3`, and the cover's hidden source link. Check that print preview includes every slide and that the document is readable with JavaScript disabled.

Review the final diff for stale copied text, placeholders, wrong source links, and spoilers. Report the recap's coverage and checks performed, and any verification that remains incomplete. GitHub Pages publishes when the finished changes reach its configured source branch; local edits alone do not update the live site.
