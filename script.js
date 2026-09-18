// Reference search is independent of the recap reader and enhances readable HTML.
(() => {
  'use strict';
  const input = document.getElementById('reference-search');
  const status = document.getElementById('reference-results');
  const clear = document.getElementById('reference-clear');
  if (!input || !status || !clear) return;
  const tools = document.querySelector('.reference-search-tools');
  if (!tools) return;
  const normalize = value => value.toLowerCase().replace(/\s+/g, ' ').trim();
  const cards = [...document.querySelectorAll('.reference-card')].map(card => ({
    card, text: normalize(`${card.dataset.search || ''} ${card.textContent || ''}`),
  }));
  const sections = [...document.querySelectorAll('.reference-section')];
  const links = [...document.querySelectorAll('.reference-jump a')];
  function filter() {
    const query = normalize(input.value);
    const terms = query.split(' ').filter(Boolean);
    let count = 0;
    cards.forEach(({ card, text }) => {
      card.hidden = !terms.every(term => text.includes(term));
      if (!card.hidden) count++;
    });
    sections.forEach(section => {
      section.hidden = [...section.querySelectorAll('.reference-card')].every(card => card.hidden);
    });
    links.forEach(link => {
      const section = document.getElementById(link.getAttribute('href').slice(1));
      link.hidden = Boolean(section && section.hidden);
    });
    clear.hidden = !query;
    status.textContent = count
      ? `${count} ${count === 1 ? 'entry' : 'entries'}${query ? (count === 1 ? ' matches your search' : ' match your search') : ' available'}.`
      : 'No entries match. Try another name or term.';
  }
  input.addEventListener('input', filter);
  clear.addEventListener('click', () => {
    input.value = '';
    filter();
    input.focus();
  });
  tools.hidden = false;
  filter();
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
