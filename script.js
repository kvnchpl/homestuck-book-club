// Keep the authored character cards readable until the roster is ready.
(() => {
  'use strict';

  const select = document.querySelector('.character-select');
  if (!select) return;

  const cards = [...select.querySelectorAll('.character-card')];
  if (!cards.length) return;

  // Character-specific selection colors.
  // Kids use their familiar Pesterchum colors.
  // Trolls use their familiar blood/chat colors.
  const characterColors = {
    john: {
      accent: '#0715cd',
      text: '#0715cd'
    },
    rose: {
      accent: '#b536da',
      text: '#8f1dac'
    },
    dave: {
      accent: '#e00707',
      text: '#b80606'
    },
    jade: {
      accent: '#4ac925',
      text: '#2f7f1b'
    },

    aradia: {
      accent: '#a10000',
      text: '#a10000'
    },
    tavros: {
      accent: '#a15000',
      text: '#8a4500'
    },
    sollux: {
      accent: '#a1a100',
      text: '#686800'
    },
    karkat: {
      accent: '#626262',
      text: '#4f4f4f'
    },
    nepeta: {
      accent: '#416600',
      text: '#416600'
    },
    kanaya: {
      accent: '#008141',
      text: '#007239'
    },
    terezi: {
      accent: '#008282',
      text: '#006f6f'
    },
    vriska: {
      accent: '#005682',
      text: '#005682'
    },
    equius: {
      accent: '#000056',
      text: '#000056'
    },
    gamzee: {
      accent: '#2b0057',
      text: '#2b0057'
    },
    eridan: {
      accent: '#6a006a',
      text: '#6a006a'
    },
    feferi: {
      accent: '#77003c',
      text: '#77003c'
    }
  };

  const roster = document.createElement('div');
  roster.className = 'character-roster';
  roster.setAttribute('role', 'tablist');
  roster.setAttribute('aria-label', 'Choose a character');

  const tabs = [];
  let group = null;

  cards.forEach((card, index) => {
    const section = card.closest('.character-group');

    if (section !== group) {
      group = section;

      const label = document.createElement('div');
      label.className = 'roster-group-label';
      label.textContent = section.querySelector('h2').textContent;
      label.setAttribute('role', 'presentation');

      roster.append(label);
    }

    const portrait = card.querySelector('.character-portrait');

    const tab = document.createElement('button');
    tab.type = 'button';
    tab.className = 'character-option';
    tab.id = `${card.id}-tab`;
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-label', portrait.alt);
    tab.setAttribute('aria-controls', card.id);

    // Get the character slug from IDs like "character-rose".
    const slug = card.id.replace(/^character-/, '');
    const palette = characterColors[slug];

    // Pass this character's colors into the CSS.
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
    name.textContent = portrait.alt.split(' ')[0];

    tab.append(thumbnail, name);

    tab.addEventListener('click', () => {
      show(index);
    });

    tab.addEventListener('keydown', event => {
      let next;

      if (event.key === 'ArrowRight') {
        next = (index + 1) % cards.length;
      }

      if (event.key === 'ArrowLeft') {
        next = (index + cards.length - 1) % cards.length;
      }

      if (event.key === 'ArrowDown') {
        next = (index + 4) % cards.length;
      }

      if (event.key === 'ArrowUp') {
        next = (index + cards.length - 4) % cards.length;
      }

      if (event.key === 'Home') {
        next = 0;
      }

      if (event.key === 'End') {
        next = cards.length - 1;
      }

      if (
        next === undefined ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey
      ) {
        return;
      }

      event.preventDefault();

      show(next);
      tabs[next].focus();
    });

    card.setAttribute('role', 'tabpanel');
    card.setAttribute('aria-labelledby', tab.id);
    card.tabIndex = 0;

    tabs.push(tab);
    roster.append(tab);
  });

  function show(index, updateHash = true) {
    cards.forEach((card, i) => {
      const selected = i === index;

      card.hidden = !selected;
      tabs[i].setAttribute('aria-selected', String(selected));
      tabs[i].tabIndex = selected ? 0 : -1;
    });

    if (updateHash) {
      history.replaceState(
        null,
        '',
        `#${cards[index].id}`
      );
    }
  }

  function readHash() {
    const index = cards.findIndex(
      card => `#${card.id}` === location.hash
    );

    show(index < 0 ? 0 : index, false);
  }

  select.prepend(roster);
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
