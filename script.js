// Spoiler-aware reference page and character roster.
(() => {
  'use strict';

  const referencePage = document.querySelector('.reference-page');
  if (!referencePage) return;

  const data = window.HOMESTUCK_REFERENCE;
  const select = document.getElementById('character-select');
  const roster = document.getElementById('character-roster');
  const groupsContainer = document.getElementById('character-groups');
  const cheatsContainer = document.getElementById('reference-cheats');
  const progressScale = document.getElementById('reading-progress-scale');
  const progressOutput = document.getElementById('reading-progress-output');
  const progressStatus = document.getElementById('reading-progress-status');
  const boundaryLabel = document.getElementById('reference-boundary-label');
  const loadingMessage = document.getElementById('reference-loading');

  if (!data || !select || !roster || !groupsContainer || !cheatsContainer ||
      !progressScale || !progressOutput || !progressStatus) {
    if (loadingMessage) {
      loadingMessage.textContent = 'The spoiler-safe reference could not be loaded.';
    }
    return;
  }

  const { stages, groups, characters, cheatSections } = data;
  if (!Array.isArray(stages) || !stages.length) return;

  const storageKey = 'homestuck-reference-progress';
  const stageIndex = new Map(stages.map((stage, index) => [stage.key, index]));
  // A missing or invalid club cap fails closed to the first reading stage.
  const availableStage = stages.find(stage => stage.key === data.availableThrough) || stages[0];

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

  let currentStage = stages[0];
  let selectedCharacterId = null;
  let currentTabs = [];
  let currentCards = [];

  function stageFor(valueOrKey) {
    const requested = stages.find(stage =>
      stage.key === String(valueOrKey) || stage.value === Number(valueOrKey)
    ) || stages[0];
    return requested.value > availableStage.value ? availableStage : requested;
  }

  function reached(requiredKey, atKey = currentStage.key) {
    if (!requiredKey) return true;
    const required = stageIndex.get(requiredKey);
    const current = stageIndex.get(atKey);
    return required !== undefined && current !== undefined && required <= current;
  }

  function resolveVariant(variants, stageKey = currentStage.key) {
    if (!Array.isArray(variants)) return null;
    let match = null;
    for (const variant of variants) {
      if (reached(variant.from, stageKey)) match = variant;
    }
    return match;
  }

  function resolvedValue(variants, stageKey = currentStage.key) {
    return resolveVariant(variants, stageKey)?.value ?? null;
  }

  function resolvedGroupId(character, stageKey = currentStage.key) {
    if (Array.isArray(character.group)) return resolvedValue(character.group, stageKey);
    return character.group;
  }

  function storedStage() {
    try {
      const saved = localStorage.getItem(storageKey);
      if (!saved) return stages[0];
      return stageFor(saved);
    } catch {
      return stages[0];
    }
  }

  function saveStage(stage) {
    try {
      localStorage.setItem(storageKey, stage.key);
    } catch {
      // The reference still works when storage is blocked.
    }
  }

  function characterFromHash() {
    const match = location.hash.match(/^#character-(.+)$/);
    return match ? match[1] : null;
  }

  function setCharacterPalette(element, id) {
    const palette = characterColors[id];
    if (!palette) return;
    element.style.setProperty('--character-color', palette.accent);
    element.style.setProperty('--character-text-color', palette.text);
  }

  function createPortrait(portrait, className, loading = 'lazy') {
    if (!portrait?.src) return null;
    const img = document.createElement('img');
    img.className = className;
    img.src = portrait.src;
    img.alt = portrait.alt || '';
    img.loading = loading;
    return img;
  }

  function showCharacter(id, { updateHash = true, focus = false } = {}) {
    const tab = currentTabs.find(item => item.dataset.characterId === id);
    const card = currentCards.find(item => item.dataset.characterId === id);
    if (!tab || !card) return false;

    selectedCharacterId = id;
    currentTabs.forEach(item => {
      const selected = item.dataset.characterId === id;
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
    });
    currentCards.forEach(item => {
      item.hidden = item.dataset.characterId !== id;
    });

    if (updateHash) history.replaceState(null, '', `#character-${id}`);
    if (focus) tab.focus();
    return true;
  }

  function makeCharacterCard(character, groupId) {
    const nameVariant = resolveVariant(character.name);
    if (!nameVariant) return null;

    const card = document.createElement('article');
    card.id = `character-${character.id}`;
    card.className = `character-card${groupId === 'trolls' ? ' troll-card' : ''}`;
    card.dataset.characterId = character.id;
    card.setAttribute('role', 'tabpanel');
    card.tabIndex = 0;
    setCharacterPalette(card, character.id);

    const portrait = resolvedValue(character.portrait);
    const portraitElement = createPortrait(portrait, 'character-portrait');
    if (portraitElement) card.append(portraitElement);

    const copy = document.createElement('div');
    copy.className = 'character-copy';

    const heading = document.createElement('h3');
    const link = document.createElement('a');
    link.className = 'character-intro-link';
    link.href = `https://homestuck.com/story/${nameVariant.sourcePage || character.introPage}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = nameVariant.value;
    heading.append(link);
    copy.append(heading);

    const stats = document.createElement('dl');
    stats.className = 'character-stats';
    let statCount = 0;

    for (const stat of character.stats || []) {
      const variant = resolveVariant(stat.variants);
      if (!variant) continue;
      const row = document.createElement('div');
      const dt = document.createElement('dt');
      const dd = document.createElement('dd');
      dt.textContent = variant.label;
      dd.textContent = variant.value;
      row.append(dt, dd);
      stats.append(row);
      statCount += 1;
    }

    if (statCount) copy.append(stats);

    card.append(copy);
    return card;
  }

  function makeRosterTab(character, card, groupId) {
    const tab = document.createElement('button');
    tab.type = 'button';
    tab.className = 'character-option';
    tab.id = `${card.id}-tab`;
    tab.dataset.characterId = character.id;
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', card.id);
    tab.setAttribute('aria-selected', 'false');
    tab.tabIndex = -1;
    setCharacterPalette(tab, character.id);

    const portrait = resolvedValue(character.portrait);
    const thumbnail = createPortrait(portrait, 'roster-portrait', 'eager');
    if (thumbnail) {
      thumbnail.alt = '';
      tab.append(thumbnail);
    }

    const name = document.createElement('span');
    name.className = 'roster-name';
    name.textContent = resolvedValue(character.rosterLabel) || resolvedValue(character.name) || character.id;
    tab.append(name);
    tab.setAttribute('aria-label', name.textContent);

    tab.addEventListener('click', () => showCharacter(character.id));
    tab.addEventListener('keydown', event => {
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      const index = currentTabs.indexOf(tab);
      if (index < 0) return;
      let nextIndex;
      if (event.key === 'ArrowRight') nextIndex = (index + 1) % currentTabs.length;
      if (event.key === 'ArrowLeft') nextIndex = (index + currentTabs.length - 1) % currentTabs.length;
      if (event.key === 'ArrowDown') nextIndex = Math.min(index + 4, currentTabs.length - 1);
      if (event.key === 'ArrowUp') nextIndex = Math.max(index - 4, 0);
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = currentTabs.length - 1;
      if (nextIndex === undefined) return;
      event.preventDefault();
      showCharacter(currentTabs[nextIndex].dataset.characterId, { focus: true });
    });

    card.setAttribute('aria-labelledby', tab.id);
    return tab;
  }

  function renderCharacters() {
    roster.replaceChildren();
    groupsContainer.replaceChildren();
    currentTabs = [];
    currentCards = [];

    const available = characters.filter(character => reached(character.reveal));
    const requested = characterFromHash();
    const availableIds = new Set(available.map(character => character.id));
    if (requested && availableIds.has(requested)) selectedCharacterId = requested;
    if (!selectedCharacterId || !availableIds.has(selectedCharacterId)) {
      selectedCharacterId = available[0]?.id || null;
    }

    for (const group of groups) {
      const groupTitle = resolvedValue(group.title);
      if (!groupTitle) continue;
      const groupCharacters = available.filter(character => resolvedGroupId(character) === group.id);
      if (!groupCharacters.length) continue;

      const rosterLabel = document.createElement('div');
      rosterLabel.className = 'roster-group-label';
      rosterLabel.textContent = groupTitle;
      rosterLabel.setAttribute('role', 'presentation');
      roster.append(rosterLabel);

      const section = document.createElement('section');
      section.className = 'reference-section character-group';
      section.id = group.id;
      const heading = document.createElement('h2');
      heading.textContent = groupTitle;
      section.append(heading);
      const grid = document.createElement('div');
      grid.className = `character-grid ${group.id === 'trolls' ? 'troll-grid' : group.id === 'guardians-sprites' ? 'guardian-grid' : group.id === 'carapacians' ? 'carapacian-grid' : group.id === 'others' ? 'other-grid' : 'kid-grid'}`;
      section.append(grid);

      for (const character of groupCharacters) {
        const card = makeCharacterCard(character, group.id);
        if (!card) continue;
        const tab = makeRosterTab(character, card, group.id);
        roster.append(tab);
        grid.append(card);
        currentTabs.push(tab);
        currentCards.push(card);
      }
      groupsContainer.append(section);
    }

    if (!currentCards.length) {
      select.hidden = true;
      return;
    }

    select.hidden = false;
    select.classList.add('is-ready');
    showCharacter(selectedCharacterId || currentCards[0].dataset.characterId, { updateHash: false });
  }

  function renderCheats() {
    cheatsContainer.replaceChildren();

    for (const sectionData of cheatSections || []) {
      if (!reached(sectionData.reveal)) continue;
      const title = resolvedValue(sectionData.title);
      if (!title) continue;

      const visibleCards = (sectionData.cards || []).map(card => ({
        data: card,
        title: resolvedValue(card.title),
        body: resolvedValue(card.body)
      })).filter(card => card.title && card.body);

      if (!visibleCards.length && !sectionData.quadrants?.length) continue;

      const section = document.createElement('section');
      section.className = 'reference-section';
      section.id = sectionData.id;
      const heading = document.createElement('h2');
      heading.textContent = title;
      section.append(heading);

      if (visibleCards.length) {
        const grid = document.createElement('div');
        grid.className = 'quick-grid';
        for (const card of visibleCards) {
          const article = document.createElement('article');
          article.className = 'quick-card';
          const cardHeading = document.createElement('h3');
          cardHeading.textContent = card.title;
          const paragraph = document.createElement('p');
          paragraph.textContent = card.body;
          article.append(cardHeading, paragraph);
          grid.append(article);
        }
        section.append(grid);
      }

      if (sectionData.quadrants?.length) {
        const strip = document.createElement('div');
        strip.className = 'quadrant-strip';
        strip.setAttribute('aria-label', 'The four troll romance quadrants');
        for (const quadrant of sectionData.quadrants) {
          const item = document.createElement('div');
          const symbol = document.createElement('span');
          symbol.className = 'quadrant-symbol';
          symbol.textContent = quadrant.symbol;
          const strong = document.createElement('strong');
          strong.textContent = quadrant.name;
          const small = document.createElement('small');
          small.textContent = quadrant.caption;
          item.append(symbol, strong, small);
          strip.append(item);
        }
        section.append(strip);
      }

      cheatsContainer.append(section);
    }
  }

  function updateStageUI(stage) {
    progressOutput.value = stage.label;
    progressOutput.textContent = stage.label;
    progressStatus.textContent = `Showing only information revealed through ${stage.label}.`;
    if (boundaryLabel) boundaryLabel.textContent = `SPOILER BOUNDARY: THROUGH ${stage.label.toUpperCase()}.`;
    document.documentElement.dataset.referenceProgress = stage.key;

    progressScale.querySelectorAll('.reading-progress-tick').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.stageKey === stage.key));
    });
  }

  function applyProgress(valueOrKey, { persist = true } = {}) {
    currentStage = stageFor(valueOrKey);
    updateStageUI(currentStage);
    renderCharacters();
    renderCheats();
    if (loadingMessage) loadingMessage.hidden = true;
    if (persist) saveStage(currentStage);
  }

  const clubLimit = document.getElementById('reading-progress-limit');
  if (clubLimit) clubLimit.textContent = `Book club limit: ${availableStage.label}. Shaded segments are locked.`;

  const stageSections = new Map();
  for (const stage of stages) {
    const sectionLabel = stage.section || 'Reading segments';
    if (!stageSections.has(sectionLabel)) {
      const section = document.createElement('section');
      section.className = 'reading-progress-section';
      const heading = document.createElement('h3');
      heading.id = `reading-section-${stageSections.size + 1}`;
      heading.textContent = sectionLabel;
      section.setAttribute('aria-labelledby', heading.id);
      const segments = document.createElement('div');
      segments.className = 'reading-progress-segments';
      section.append(heading, segments);
      progressScale.append(section);
      stageSections.set(sectionLabel, segments);
    }
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'reading-progress-tick';
    button.dataset.stageKey = stage.key;
    button.textContent = stage.shortLabel;
    const locked = stage.value > availableStage.value;
    button.disabled = locked;
    button.title = locked ? `${stage.label} — not yet available` : stage.label;
    button.setAttribute('aria-label', locked ? `${stage.label} — not yet available` : `Show reference through ${stage.label}`);
    button.setAttribute('aria-pressed', 'false');
    if (!locked) button.addEventListener('click', () => applyProgress(stage.key));
    stageSections.get(sectionLabel).append(button);
  }

  window.addEventListener('hashchange', () => {
    const id = characterFromHash();
    if (id) showCharacter(id, { updateHash: false });
  });

  applyProgress(storedStage().key, { persist: false });
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
  const panels = [...deck.querySelectorAll('.media img')];
  const panelsBySlide = new Map(slides.map(slide => [slide, panels.filter(img => img.closest('.slide') === slide)]));

  function loadSlide(slide) {
    for (const img of panelsBySlide.get(slide) || []) img.loading = 'eager';
  }

  // Print includes every slide, including panels not yet visited in the reader.
  window.addEventListener('beforeprint', () => {
    panels.forEach(img => { img.loading = 'eager'; });
  });
  // Accept the existing hyphen separator and intermission filenames, too.
  const panelPattern = /^(A\d+(?:\.I\d+)?|I\d+)_(\d+)[_-]story-(\d+)\.(gif|png|jpe?g|webp)$/i;

  panels.forEach(img => {
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
    // Fetch the selected panel and one ahead; other slides stay lazy.
    loadSlide(slides[index]);
    loadSlide(slides[index + 1]);
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
