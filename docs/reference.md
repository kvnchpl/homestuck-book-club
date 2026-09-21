# Maintaining the reference

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

`sourceNote` records audit context; `sourceAudit` records the scope and date of prior manual fact-checking. The static checks validate source pages, stage order, source boundaries, and asset availability before publication.

To prepare a later segment, add its content variants in stage order using the existing stage key. Keep `availableThrough` at the club's current boundary until the new segment is ready to open. If the schedule gains a segment, update the stage array with consecutive numeric values, unique keys, labels, and matching end pages. The grouped segment buttons are generated from this array. Update the reference page description when its authored coverage changes.

The reference requires JavaScript and stays empty if its data cannot load. Printing includes every character rendered for the selected stage, including profiles hidden by tab selection; later-stage facts remain absent.

The reference shell versions its stylesheet, data, and renderer URLs together. Bump their shared `v` query value when changing the cap or selector behavior so returning visitors load the matching assets.

Character notes have been removed by request. Do not reintroduce them as part of routine updates.

For portrait provenance, see [portrait sources](portrait-sources.md). Snowman uses the supplied `ref-snowman.webp` during Intermission and `ref-black-queen.webp` after the Act 4 identity reveal. Preserve that distinction.
