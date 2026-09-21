# Working on Homestuck Book Club

This is a static HTML/CSS/JavaScript site deployed by GitHub Pages from the repository root of a publishing branch. No application build or package installation is required. Keep the current URLs and document-relative links.

## Start here

- Read [README.md](README.md) for commands and the deployment boundary.
- For any recap, read [docs/recaps.md](docs/recaps.md) and [docs/asset-sources.md](docs/asset-sources.md). Use an existing recap as the HTML template.
- For reference changes, read [docs/reference.md](docs/reference.md).
- `schedule/index.html` is the source of truth for meeting assignments. Derive each inclusive end page as start + count − 1. Keep `recaps/index.html` and the reference checkpoints consistent with it.
- Determine published recaps from `recaps/NN/index.html` and their index links, not the current date or assumptions from a previous conversation.

## Established editorial choices

- Keep recaps spoiler-safe through the assigned ending page, including image contents, alt text, titles, and implications in the prose. Verify claims against the comic.
- Use original paraphrases and the established illustrated-slide format. Do not generate replacement comic artwork.
- All delivered images use WebP. Moderate quality loss is acceptable; consistent format, correct source imagery, proportions, transparency, and animation matter.
- Preserve the reference's manual `availableThrough` cap, stage keys, and Part 1 / Part 2 / Part 3 grouping. Publishing a recap does not automatically authorize raising the cap.
- Character notes and reference cheat sheets were intentionally removed. Names, portraits, and group labels may vary by stage; preserve earlier variants and spoiler rollback.
- Every visible character must have at least one meaningful, source-backed stat from their first reveal onward. Add an early role, weapon, or ability when later facts are still hidden. Gate troll blood rows to the end of Act 5 Act 2 (`act-5-act-2-part-3`), after the later caste/ancestry material.
- Keep source downloads, extracted frames, screenshots, and experiments outside the repository, preferably in a temporary directory. Commit only used delivery assets and useful provenance.

## Before finishing

Run `python3 tests/check_site.py`, `node --test tests/*.test.cjs`, and `git diff --check`. New recap pages also need desktop/mobile and print inspection; see the recap workflow. The checks do not independently establish story accuracy.

Keep maintenance documentation, tests, and authoring tools excluded by `_config.yml`. Do not add `.nojekyll`, generated `_site/` files, or a second deployed copy of the site. New runtime files must remain available to GitHub Pages. Bump the three matching asset versions in `reference/index.html` whenever the reference data or shared renderer changes.
