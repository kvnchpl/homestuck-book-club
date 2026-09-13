(() => {
  'use strict';

  const deck = document.querySelector('.deck');
  if (!deck) return;
  const slides = [...deck.querySelectorAll('.slide')];
  if (!slides.length) return;

  const controls = document.querySelector('.controls');
  const counter = document.getElementById('counter');
  const previousButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  const infoButton = document.getElementById('info');
  const fullscreenButton = document.getElementById('fullscreen');
  const status = document.getElementById('viewer-status');
  const metadata = [];
  // Accept the existing hyphen separator and intermission filenames, too.
  const panelPattern = /^A(\d+(?:\.I\d+)?)_(\d+)[_-]story-(\d+)\.(gif|png|jpe?g|webp)$/i;

  deck.querySelectorAll('.media img').forEach(img => {
    const filename = decodeURIComponent(new URL(img.src).pathname.split('/').pop());
    const match = filename.match(panelPattern);
    if (!match) return;
    const [, act, imageNumber, paddedPage] = match;
    const page = Number(paddedPage);
    if (!img.hasAttribute('alt')) img.alt = `Homestuck Act ${act}, page ${page}`;
    const media = img.closest('.media');
    const link = document.createElement('a');
    link.className = 'source-link';
    link.href = `https://homestuck.com/story/${page}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = `p. ${page} ↗`;
    link.setAttribute('aria-label', `Open Homestuck page ${page} (new tab)`);
    media.append(link);

    const info = document.createElement('div');
    info.className = 'panel-info';
    info.hidden = true;
    info.textContent = `Act ${act} · image ${Number(imageNumber)} · p. ${page} · ${filename}`;
    media.append(info);
    metadata.push(info);
  });

  let index = 0;
  let showInfo = false;
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
    previousButton.disabled = index === 0;
    nextButton.disabled = index === slides.length - 1;
    if (updateHash) history.replaceState(null, '', `#${index + 1}`);
    // After reading a long caption, start the next slide at its panel on small screens.
    if (index !== previousIndex && window.matchMedia('(max-width: 600px), (max-height: 600px)').matches) {
      deck.scrollIntoView({ block: 'start', behavior: 'auto' });
    }
  }
  function toggleInfo() {
    showInfo = !showInfo;
    metadata.forEach(info => { info.hidden = !showInfo; });
    infoButton.setAttribute('aria-pressed', String(showInfo));
  }
  async function toggleFullscreen() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else if (document.fullscreenEnabled) await document.documentElement.requestFullscreen();
      else status.textContent = 'Fullscreen is not available in this browser.';
    } catch {
      status.textContent = 'Fullscreen could not open. Try the F button or your browser’s fullscreen control.';
    }
  }
  previousButton.addEventListener('click', () => show(index - 1));
  nextButton.addEventListener('click', () => show(index + 1));
  infoButton.addEventListener('click', toggleInfo);
  fullscreenButton.addEventListener('click', toggleFullscreen);
  fullscreenButton.hidden = !document.fullscreenEnabled;
  document.addEventListener('fullscreenchange', () => {
    fullscreenButton.setAttribute('aria-pressed', String(Boolean(document.fullscreenElement)));
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
      case 'i': if (!event.repeat) toggleInfo(); break;
      case 'f': if (!event.repeat) toggleFullscreen(); break;
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
