# Homestuck Book Club

The canonical recap layout is `/recaps/01/index.html`. It preserves the 30-slide
sequence and text of Recap #1, using the original GIFs in place of the prototype’s
PDF extracts. Recaps #2 and #3 have not been migrated.

Serve this directory with any static web server, for example
`python3 -m http.server 8000`, and open `http://localhost:8000/recaps/01/`.
Paths are relative to the site root; serve the repository at `/`.

## Shared layout

Every page loads `/styles.css` and `/script.js`. Recap HTML contains the content
and semantic viewer controls; styling and behavior live in those shared files.
The script safely does nothing on pages without a `.deck`.

Use Recap #1 as the template for future recaps. Each panel is an ordinary image:

```html
<section class="slide beat">
  <div class="media">
    <img src="/assets/A2_15_story-0665.gif"
         alt="Bro’s note challenges Dave to meet him on the roof."
         width="1300" height="900">
  </div>
  <div class="caption"><p>Recap text goes beneath the panel.</p></div>
</section>
```

Use `caption caption-long` for longer text. Use `.slide.cover` for the opening
title and `.slide.act-divider` with an `.act-title` heading for an act divider.
The viewer derives slide numbers and counts from document order. Panels are
centered without cropping; narrow or short screens can scroll to accommodate
readable text. Without JavaScript, all slides remain readable in sequence.

## Assets and source metadata

Keep **every asset directly under `/assets/`**, without recap or act subfolders.
Do not convert animated files into static images: native `<img>` elements play
GIF animation without a player, canvas, or animation library. Some supplied GIFs
contain only one frame and are intentionally still.

The shared script reads filenames such as `A2_15_story-0665.gif` and generates
`p. 665 ↗` linking to `https://homestuck.com/story/665`. Leading zeroes are removed
from the link. The filename is the source of truth; URLs are not repeated in HTML.
GIF, PNG, JPG/JPEG, and WebP are supported. Existing variants such as
`A2_09-story-0419.gif` and `A3.I1_02_story-0833.gif` are also recognized. Files without
a story suffix remain visible without a guessed source link.

Supply descriptive alt text. If the alt attribute is missing, the script provides
an act/page fallback. The optional metadata overlay shows the act, image number,
story page, and complete filename.

## Viewer controls

| Control | Action |
| --- | --- |
| ← / →, Page Up / Page Down | Previous / next slide |
| Space | Next slide (focused buttons retain native activation) |
| Home / End | First / last slide |
| F | Toggle browser fullscreen, when supported |
| I | Toggle panel metadata |
| Click a slide | Previous in its left 35%; next elsewhere |

Visible arrow, I, and F buttons support touch and keyboard focus. Source links
open in a new tab. A numeric hash such as `/recaps/01/#28` reopens that slide;
navigation updates the hash without filling browser history. Print styles reveal
all slides, hide controls and overlays, and request one square page per slide.

The ignored `reference/` directory is the original design/content archive; its
standalone prototype files are not part of the site’s shared implementation.
