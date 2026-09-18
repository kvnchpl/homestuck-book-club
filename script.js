// Spoiler-aware reference page and character roster.
(() => {
  'use strict';

  const referencePage = document.querySelector('.reference-page');
  const select = document.querySelector('.character-select');
  const progress = document.getElementById('reading-progress');
  const progressScale = document.getElementById('reading-progress-scale');
  const progressOutput = document.getElementById('reading-progress-output');
  const progressStatus = document.getElementById('reading-progress-status');
  const boundaryLabel = document.getElementById('reference-boundary-label');

  if (!referencePage || !select || !progress || !progressScale || !progressOutput || !progressStatus) return;

  // Add future acts here as the book club advances. The slider max, labels,
  // story-page gating, and saved progress all derive from this one array.
  const readingStages = [
    { value: 1, key: 'act-1', label: 'Act 1', shortLabel: 'Act 1', endPage: 247 },
    { value: 2, key: 'act-2', label: 'Act 2', shortLabel: 'Act 2', endPage: 758 },
    { value: 3, key: 'act-3', label: 'Act 3', shortLabel: 'Act 3', endPage: 1152 },
    { value: 4, key: 'intermission', label: 'Intermission', shortLabel: 'Inter.', endPage: 1356 },
    { value: 5, key: 'act-4', label: 'Act 4', shortLabel: 'Act 4', endPage: 1988 },
    { value: 6, key: 'act-5-act-1', label: 'Act 5 Act 1', shortLabel: 'A5A1', endPage: 2625 }
  ];

  const storageKey = 'homestuck-reference-progress';

  progress.min = String(readingStages[0].value);
  progress.max = String(readingStages.at(-1).value);
  progress.step = '1';

  function stageForValue(value) {
    return readingStages.find(stage => stage.value === Number(value)) || readingStages[0];
  }

  function revealLevelForStoryPage(page) {
    const stage = readingStages.find(item => page <= item.endPage);
    return stage ? stage.value : readingStages.at(-1).value + 1;
  }

  function storedProgress() {
    try {
      const value = Number(localStorage.getItem(storageKey));
      return readingStages.some(stage => stage.value === value) ? value : readingStages[0].value;
    } catch {
      return readingStages[0].value;
    }
  }

  function saveProgress(value) {
    try {
      localStorage.setItem(storageKey, String(value));
    } catch {
      // The reference still works when storage is blocked.
    }
  }

  // Character intro links already point to story pages, so they also serve as
  // the default reveal point for each card. A manual data-reveal overrides it.
  select.querySelectorAll('.character-card').forEach(card => {
    if (card.hasAttribute('data-reveal')) return;

    const link = card.querySelector('.character-intro-link');
    const match = link?.href.match(/\/story\/(\d+)/);

    if (!match) {
      card.dataset.reveal = String(readingStages[0].value);
      return;
    }

    card.dataset.reveal = String(revealLevelForStoryPage(Number(match[1])));
  });

  const characterColors = {
    john:   { accent: '#0715cd', text: '#0715cd' },
    rose:   { accent: '#b536da', text: '#8f1dac' },
    dave:   { accent: '#e00707', text: '#b80606' },
    jade:   { accent: '#4ac925', text: '#2f7f1b' },

    aradia: { accent: '#a10000', text: '#a10000' },
    tavros: { accent: '#a15000', text: '#8a4500' },
    sollux: { accent: '#a1a100', text: '#686800' },
    karkat: { accent: '#626262', text: '#4f4f4f' },
    nepeta: { accent: '#416600', text: '#416600' },
    kanaya: { accent: '#008141', text: '#007239' },
    terezi: { accent: '#008282', text: '#006f6f' },
    vriska: { accent: '#005682', text: '#005682' },
    equius: { accent: '#000056', text: '#000056' },
    gamzee: { accent: '#2b0057', text: '#2b0057' },
    eridan: { accent: '#6a006a', text: '#6a006a' },
    feferi: { accent: '#77003c', text: '#77003c' }
  };

  const cards = [...select.querySelectorAll('.character-card')];
  if (!cards.length) return;

  const roster = document.createElement('div');
  roster.className = 'character-roster';
  roster.setAttribute('role', 'tablist');
  roster.setAttribute('aria-label', 'Choose a character');

  const tabs = [];
  const rosterGroups = [];
  let group = null;
  let selectedIndex = 0;

  cards.forEach((card, index) => {
    const section = card.closest('.character-group');

    if (section !== group) {
      group = section;

      const label = document.createElement('div');
      label.className = 'roster-group-label';
      label.textContent = section.querySelector('h2').textContent;
      label.setAttribute('role', 'presentation');

      roster.append(label);
      rosterGroups.push({ section, label });
    }

    const portrait = card.querySelector('.character-portrait');

    const tab = document.createElement('button');
    tab.type = 'button';
    tab.className = 'character-option';
    tab.id = `${card.id}-tab`;
    tab.dataset.reveal = card.dataset.reveal || '1';
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-label', portrait.alt);
    tab.setAttribute('aria-controls', card.id);

    const slug = card.id.replace(/^character-/, '');
    const palette = characterColors[slug];

    if (palette) {
      tab.style.setProperty('--character-color', palette.accent);
      tab.style.setProperty('--character-text-color', palette.text);
      card.style.setProperty('--character-color', palette.accent);
      card.style.setProperty('--character-text-color', palette.text);
    }

    const thumbnail = portrait.cloneNode();
    thumbnail.className = 'roster-portrait';
    thumbnail.alt = '';
    thumbnail.loading = 'eager';

    const name = document.createElement('span');
    name.className = 'roster-name';
    name.textContent = card.getAttribute('data-roster-label') || portrait.alt.split(' ')[0];

    tab.append(thumbnail, name);
    tab.addEventListener('click', () => show(index));

    tab.addEventListener('keydown', event => {
      const visibleIndexes = cards
        .map((cardItem, cardIndex) => cardItem.hasAttribute('data-progress-hidden') ? -1 : cardIndex)
        .filter(cardIndex => cardIndex >= 0);

      const position = visibleIndexes.indexOf(index);
      if (position < 0) return;

      let nextPosition;

      if (event.key === 'ArrowRight') nextPosition = (position + 1) % visibleIndexes.length;
      if (event.key === 'ArrowLeft') nextPosition = (position + visibleIndexes.length - 1) % visibleIndexes.length;
      if (event.key === 'ArrowDown') nextPosition = Math.min(position + 4, visibleIndexes.length - 1);
      if (event.key === 'ArrowUp') nextPosition = Math.max(position - 4, 0);
      if (event.key === 'Home') nextPosition = 0;
      if (event.key === 'End') nextPosition = visibleIndexes.length - 1;

      if (nextPosition === undefined || event.altKey || event.ctrlKey || event.metaKey) return;

      event.preventDefault();

      const nextIndex = visibleIndexes[nextPosition];
      show(nextIndex);
      tabs[nextIndex].focus();
    });

    card.setAttribute('role', 'tabpanel');
    card.setAttribute('aria-labelledby', tab.id);
    card.tabIndex = 0;

    tabs.push(tab);
    roster.append(tab);
  });

  function isAvailable(index) {
    return index >= 0 &&
      index < cards.length &&
      !cards[index].hasAttribute('data-progress-hidden');
  }

  function nearestAvailableIndex(preferredIndex = 0) {
    if (isAvailable(preferredIndex)) return preferredIndex;

    for (let distance = 1; distance < cards.length; distance += 1) {
      const before = preferredIndex - distance;
      const after = preferredIndex + distance;

      if (isAvailable(before)) return before;
      if (isAvailable(after)) return after;
    }

    return cards.findIndex((_, index) => isAvailable(index));
  }

  function show(index, updateHash = true) {
    const safeIndex = nearestAvailableIndex(index);
    if (safeIndex < 0) return;

    selectedIndex = safeIndex;

    cards.forEach((card, i) => {
      const selected = i === safeIndex;

      card.hidden = !selected;
      tabs[i].setAttribute('aria-selected', String(selected));
      tabs[i].tabIndex = selected ? 0 : -1;
    });

    if (updateHash) {
      history.replaceState(null, '', `#${cards[safeIndex].id}`);
    }
  }

  function readHash() {
    const requestedIndex = cards.findIndex(card => `#${card.id}` === location.hash);
    show(requestedIndex < 0 ? selectedIndex : requestedIndex, requestedIndex >= 0);
  }

  function syncRosterGroups() {
    rosterGroups.forEach(({ section, label }) => {
      const hasVisibleCard = cards.some(card =>
        card.closest('.character-group') === section &&
        !card.hasAttribute('data-progress-hidden')
      );

      label.hidden = !hasVisibleCard;
    });
  }

  function applyProgress(value, { persist = true, syncSelection = true } = {}) {
    const stage = stageForValue(value);
    const level = stage.value;

    document.documentElement.dataset.referenceProgress = String(level);
    progress.value = String(level);

    const percent = readingStages.length === 1
      ? 0
      : ((level - readingStages[0].value) /
        (readingStages.at(-1).value - readingStages[0].value)) * 100;

    progress.style.setProperty('--reading-progress-percent', `${percent}%`);

    progressOutput.value = stage.label;
    progressOutput.textContent = stage.label;
    progressStatus.textContent = `Showing only information revealed through ${stage.label}.`;

    if (boundaryLabel) {
      boundaryLabel.textContent = `SPOILER BOUNDARY: THROUGH ${stage.label.toUpperCase()}.`;
    }

    document.querySelectorAll('[data-reveal]').forEach(element => {
      const revealAt = Number(element.dataset.reveal);
      element.toggleAttribute(
        'data-progress-hidden',
        Number.isFinite(revealAt) && revealAt > level
      );
    });

    progressScale.querySelectorAll('.reading-progress-tick').forEach(button => {
      const active = Number(button.dataset.progressValue) === level;
      button.setAttribute('aria-pressed', String(active));
    });

    syncRosterGroups();

    if (syncSelection) {
      const nextIndex = nearestAvailableIndex(selectedIndex);
      if (nextIndex >= 0) {
        show(nextIndex, nextIndex !== selectedIndex);
      }
    }

    if (persist) saveProgress(level);
  }

  readingStages.forEach(stage => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'reading-progress-tick';
    button.dataset.progressValue = String(stage.value);
    button.textContent = stage.shortLabel;
    button.setAttribute('aria-label', `Show reference through ${stage.label}`);
    button.setAttribute('aria-pressed', 'false');

    button.addEventListener('click', () => applyProgress(stage.value));
    progressScale.append(button);
  });

  progress.addEventListener('input', () => {
    applyProgress(Number(progress.value));
  });

  select.prepend(roster);

  const initialProgress = storedProgress();
  applyProgress(initialProgress, { persist: false, syncSelection: false });

  readHash();
  select.classList.add('is-ready');

  window.addEventListener('hashchange', readHash);
})();


(() => {
  'use strict';

  const deck = document.querySelector('.deck');
  if (!deck) return;
  const slides = [...deck.querySelectorAll('.slide')];
  if (!slides.length) return;

  const controls = document.querySelector('.controls');
  const counter = document.getElementById('counter');
  const sourceLink = document.getElementById('source-link');
  const previousButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  const startOver = document.getElementById('start-over');
  // An unfinished template should remain readable as a normal document.
  if (![controls, counter, sourceLink, previousButton, nextButton, startOver].every(Boolean)) return;
  const sources = new Map();
  // Accept the existing hyphen separator and intermission filenames, too.
  const panelPattern = /^(A\d+(?:\.I\d+)?|I\d+)_(\d+)[_-]story-(\d+)\.(gif|png|jpe?g|webp)$/i;

  deck.querySelectorAll('.media img').forEach(img => {
    let filename;
    try {
      filename = decodeURIComponent(new URL(img.src).pathname.split('/').pop());
    } catch {
      return; // Unrecognized asset URLs do not prevent reading the recap.
    }
    const match = filename.match(panelPattern);
    if (!match) return;
    const [, section, , paddedPage] = match;
    const page = Number(paddedPage);
    if (!Number.isSafeInteger(page) || page < 1) return;
    const sectionLabel = /^I/i.test(section) ? `Intermission ${section.slice(1)}` : `Act ${section.slice(1)}`;
    if (!img.hasAttribute('alt')) img.alt = `Homestuck ${sectionLabel}, page ${page}`;
    sources.set(img.closest('.slide'), page);
  });

  let index = 0;
  function indexFromHash() {
    const match = location.hash.match(/^#(\d+)$/);
    return match ? Math.max(0, Math.min(slides.length - 1, Number(match[1]) - 1)) : 0;
  }
  function show(nextIndex, updateHash = true) {
    const previousIndex = index;
    index = Math.max(0, Math.min(slides.length - 1, nextIndex));
    const focusedSlide = document.activeElement.closest('.slide');
    if (focusedSlide && focusedSlide !== slides[index]) deck.focus({ preventScroll: true });
    slides.forEach((slide, n) => {
      slide.hidden = n !== index;
      slide.classList.toggle('active', n === index);
      slide.setAttribute('aria-label', `Slide ${n + 1} of ${slides.length}`);
    });
    counter.textContent = `${index + 1} / ${slides.length}`;
    (slides[index].querySelector('.media') || slides[index]).append(counter);
    const isCover = slides[index].classList.contains('cover');
    counter.hidden = isCover;
    startOver.disabled = isCover;
    const page = isCover ? undefined : sources.get(slides[index]);
    sourceLink.hidden = page === undefined;
    if (page !== undefined) {
      sourceLink.href = `https://homestuck.com/story/${page}`;
      sourceLink.textContent = `p. ${page} ↗`;
      sourceLink.setAttribute('aria-label', `Open Homestuck page ${page} (new tab)`);
    } else {
      if (document.activeElement === sourceLink) deck.focus({ preventScroll: true });
      sourceLink.removeAttribute('href');
      sourceLink.removeAttribute('aria-label');
      sourceLink.textContent = '';
    }
    previousButton.disabled = index === 0;
    nextButton.disabled = index === slides.length - 1;
    if ([previousButton, nextButton, startOver].some(button => button.disabled && document.activeElement === button)) {
      deck.focus({ preventScroll: true });
    }
    if (updateHash) history.replaceState(null, '', `#${index + 1}`);
    // After reading a long caption, start the next slide at its panel on small screens.
    if (index !== previousIndex && window.matchMedia('(max-width: 600px), (max-height: 600px)').matches) {
      deck.scrollIntoView({ block: 'start', behavior: 'auto' });
    }
  }
  previousButton.addEventListener('click', () => show(index - 1));
  nextButton.addEventListener('click', () => show(index + 1));
  startOver.addEventListener('click', () => {
    if (startOver.disabled) return;
    show(0);
    deck.focus({ preventScroll: true });
    deck.scrollIntoView({ block: 'start', behavior: 'auto' });
  });
  document.addEventListener('keydown', event => {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.target.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"])')) return;
    // Space/Enter on a focused control retain their native activation behavior.
    if (event.key === ' ' && event.target.closest('button, a, [role="button"]')) return;
    switch (event.key.toLowerCase()) {
      case 'arrowright': case 'pagedown': case ' ': show(index + 1); break;
      case 'arrowleft': case 'pageup': show(index - 1); break;
      case 'home': show(0); break;
      case 'end': show(slides.length - 1); break;
      default: return;
    }
    event.preventDefault();
  });
  deck.addEventListener('click', event => {
    if (event.target.closest('button, a') || window.getSelection().toString()) return;
    // Touch readers use the visible arrows, so taps while reading do not skip slides.
    if (event.pointerType === 'touch' || window.matchMedia('(pointer: coarse)').matches) return;
    const bounds = slides[index].getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) return;
    show(index + (event.clientX < bounds.left + bounds.width * .35 ? -1 : 1));
  });
  window.addEventListener('hashchange', () => show(indexFromHash(), false));
  document.body.classList.add('is-presenting');
  controls.hidden = false;
  show(indexFromHash(), false);
})();
