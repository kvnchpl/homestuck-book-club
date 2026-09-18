# Homestuck Reference — staged spoiler data refactor

This package replaces the current reference-page implementation while preserving the rest of the site's existing structure and assets.

## Files

- `reference/index.html` — spoiler-safe reference shell. It contains no character/reference facts that JavaScript must hide after load.
- `reference-data.js` — all spoiler-sensitive reference content and its stage-specific wording.
- `script.js` — renders the reference for the selected reading stage; also retains the existing recap/deck behavior from the previous script.
- `styles.css` — existing site stylesheet with small reference-page adjustments.

Your existing `assets/` directory is unchanged and is not included in this zip.

## Data model

Spoiler-sensitive values are stored as ordered variants:

```js
note: [
  { from: 'act-2', value: 'What the reader can say at this point.' },
  { from: 'act-4', value: 'A later, more informed description.' }
]
```

At a selected reading stage, the renderer uses the latest variant whose `from` stage has been reached. If no variant is available, that property is not inserted into the DOM.

This works for:

- character names
- roster labels
- portraits and alt text
- stat labels and values
- notes/descriptions
- group headings
- cheat-sheet titles and copy

A stat whose existence is itself a spoiler simply has no earlier variant.

## Adding a future reading stage

Add the new stage to `stages` near the top of `reference-data.js`:

```js
{
  value: 7,
  key: 'act-5-act-2',
  label: 'Act 5 Act 2',
  shortLabel: 'A5A2',
  endPage: 0
}
```

Then add new variants to whichever properties change at that point. The slider and tick layout are generated from the stage array automatically.

## Safer failure/print behavior

The HTML no longer embeds later-story character facts and waits for JavaScript to hide them. If the data/renderer fails, the reference remains empty instead of exposing all future content.

When printing, all character cards currently rendered for the selected reading stage can be printed, but characters/facts from later stages are not present in the DOM.

## Placement

The included paths assume your existing layout remains:

```text
/
  assets/
  reference-data.js
  script.js
  styles.css
  reference/
    index.html
```
