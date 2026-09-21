# Homestuck Book Club

A static site for a 13-meeting read-through of Homestuck, with a schedule, illustrated recaps, and a reference that reveals information according to reading progress.

## Preview and check

No build step or package installation is needed to preview the site:

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000/>. Run the checks from the repository root with Python 3.9+ and Node.js 18+:

```sh
python3 tests/check_site.py
node --test tests/*.test.cjs
git diff --check
```

The checks cover local links, images, slide structure, schedule/recap agreement, reference boundaries, and reader interactions. They do not independently verify story claims. Preview new recap pages on desktop and mobile and check print output.

## Deployment

GitHub Pages publishes this repository from a branch, with `/ (root)` as the source folder. The public files are:

- `index.html`, `styles.css`, `script.js`, and `reference-data.js`.
- `schedule/`, `recaps/`, `reference/`, and the used WebP files in `assets/`.

`_config.yml` excludes `AGENTS.md`, this README, `docs/`, `tests/`, and `tools/` from the Pages build. Keep these maintenance resources in the repository for future authors. Do not add `.nojekyll`, which bypasses the exclusions. The `docs/` folder contains authoring documentation; it is not the Pages publishing source. See [GitHub's Pages/Jekyll documentation](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll).

All site links are document-relative so the site works at either a domain root or a project subdirectory. If hosting elsewhere, upload only the public files listed above; an ordinary file server does not apply `_config.yml` exclusions.

## Future recaps and reference updates

Start with [AGENTS.md](AGENTS.md). The reusable workflows are:

- [Recap authoring and publication](docs/recaps.md): reading boundaries, editorial style, image sourcing/conversion, HTML structure, and checks.
- [Recap image provenance](docs/asset-sources.md): the existing source audit and where to record new images.
- [Reference maintenance](docs/reference.md): staged names, images, labels, and the manual spoiler cap.
- [Portrait sources](docs/portrait-sources.md): the source catalog preserved from the retired bulk download scripts.

The published recap folders and `recaps/index.html` show what is already complete. `schedule/index.html` defines future assignments; `reference-data.js` defines the current selectable cap. Consult these files each time rather than inferring progress from the date.

`tools/optimize_images.py` is the optional authoring utility for preparing new WebP assets. Its Pillow/libwebp dependencies are only needed when processing images, not for deployment or the normal checks.
