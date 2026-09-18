// State/interaction regressions for the shared reader; no browser dependencies.
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { runInNewContext } = require('node:vm');
const script = readFileSync(join(__dirname, '../script.js'), 'utf8');

function reader({ hash = '', missing, small = false, coarse = false, filename = 'A2_15_story-0665.gif' } = {}) {
  let document;
  function element(classes = []) {
    const names = new Set(classes);
    return {
      hidden: false, disabled: false, attrs: {}, listeners: {}, scrolls: 0,
      classList: { contains: c => names.has(c), add: c => names.add(c),
        toggle: (c, on) => on ? names.add(c) : names.delete(c) },
      setAttribute(k, v) { this.attrs[k] = v; }, removeAttribute(k) { delete this.attrs[k]; },
      hasAttribute(k) { return k in this.attrs; },
      closest() { return null; }, querySelector() { return null; },
      append(child) { child.parent = this; },
      addEventListener(k, f) { this.listeners[k] = f; },
      focus() { document.activeElement = this; }, scrollIntoView() { this.scrolls++; },
      getBoundingClientRect: () => ({ left: 0, top: 0, right: 650, bottom: 650, width: 650 }),
    };
  }
  const slides = [element(['cover']), element(), element(), element(['cover'])];
  const images = slides.map((slide, n) => {
    const media = element(); slide.querySelector = () => media;
    const img = element(); img.src = `https://site.test/assets/${n === 2 ? 'unlabeled.gif' : filename}`;
    img.closest = () => slide;
    return img;
  });
  const deck = element(); deck.querySelectorAll = s => s === '.slide' ? slides : images;
  const controls = element(); controls.hidden = true;
  const ids = Object.fromEntries(['counter', 'source-link', 'prev', 'next', 'start-over'].map(id => [id, element()]));
  document = { querySelector: s => s === '.deck' ? (missing === 'deck' ? null : deck) : s === '.controls' ? controls : null,
    getElementById: id => missing === id ? null : ids[id], body: element(), activeElement: element(),
    listeners: {}, addEventListener(k, f) { this.listeners[k] = f; } };
  const location = { hash };
  const window = { listeners: {}, addEventListener(k, f) { this.listeners[k] = f; },
    matchMedia: q => ({ matches: q === '(pointer: coarse)' ? coarse : small }),
    getSelection: () => ({ toString: () => '' }) };
  runInNewContext(script, { document, window, location, URL,
    history: { replaceState(a, b, h) { location.hash = h; } } });
  const jump = hash => { location.hash = hash; window.listeners.hashchange(); };
  const key = (key, options = {}) => {
    const event = { key, target: element(), preventDefault() { this.prevented = true; }, ...options };
    document.listeners.keydown(event);
    return event;
  };
  return { ids, slides, images, deck, controls, document, location, jump, key, element };
}

test('covers hide counter/source and disable Start Over, including covers with images', () => {
  const r = reader();
  for (const hash of ['#1', '#4']) {
    r.jump(hash);
    assert.equal(r.ids.counter.hidden, true);
    assert.equal(r.ids['source-link'].hidden, true);
    assert.equal(r.ids['start-over'].disabled, true);
    r.ids['start-over'].listeners.click();
    assert.equal(r.location.hash, hash);
  }
  r.jump('#2');
  assert.equal(r.ids.counter.textContent, '2 / 4');
  assert.equal(r.ids.counter.hidden, false);
  assert.equal(r.ids['start-over'].disabled, false);
});

test('source filenames resolve automatically and unknown/invalid URLs remain readable', () => {
  for (const [filename, page] of [['A2_15_story-0665.gif', 665], ['A2_09-story-0419.gif', 419], ['A3.I1_02_story-0833.gif', 833], ['I1_01_story-1155.gif', 1155], ['I1_07_story-1353.gif', 1353]]) {
    const r = reader({ hash: '#2', filename });
    assert.equal(r.ids['source-link'].href, `https://homestuck.com/story/${page}`);
    assert.equal(r.ids['source-link'].hidden, false);
    if (filename.startsWith('I1_')) assert.equal(r.images[1].alt, `Homestuck Intermission 1, page ${page}`);
    r.jump('#3');
    assert.equal(r.ids['source-link'].hidden, true);
    assert.equal(r.ids['source-link'].attrs['aria-label'], undefined);
  }
  for (const filename of ['bad%file.gif', 'unlabeled.gif', 'A1_01_story-0000.gif', 'A1_01_story-999999999999999999.gif']) {
    const r = reader({ hash: '#2', filename });
    assert.equal(r.controls.hidden, false);
    assert.equal(r.ids['source-link'].hidden, true);
  }
});

test('keyboard navigation, bounds, and hash initialization', () => {
  const r = reader({ hash: '#2' });
  for (const [key, hash] of [['ArrowRight', '#3'], ['PageDown', '#4'], [' ', '#4'], ['ArrowLeft', '#3'], ['PageUp', '#2'], ['Home', '#1'], ['End', '#4']]) {
    assert.equal(r.key(key).prevented, true);
    assert.equal(r.location.hash, hash);
  }
  for (const [hash, count] of [['#0', '1 / 4'], ['#999', '4 / 4'], ['#garbage', '1 / 4']]) {
    assert.equal(reader({ hash }).ids.counter.textContent, count);
  }
  for (const key of ['i', 'I', 'f', 'F']) assert.equal(r.key(key).prevented, undefined);
  assert.equal(r.key('ArrowRight', { ctrlKey: true }).prevented, undefined);
  assert.equal(r.key(' ', { target: { closest: s => s.startsWith('button') ? {} : null } }).prevented, undefined);
  assert.equal(r.key('ArrowRight', { target: { closest: () => ({}) } }).prevented, undefined);
});

test('focus leaves hidden slides and newly disabled controls', () => {
  const r = reader({ hash: '#3' });
  r.document.activeElement = r.ids.next;
  r.ids.next.listeners.click();
  assert.equal(r.document.activeElement, r.deck);
  r.jump('#2'); r.document.activeElement = r.ids.prev;
  r.ids.prev.listeners.click();
  assert.equal(r.document.activeElement, r.deck);
  r.jump('#2'); r.document.activeElement = r.ids['start-over'];
  r.ids['start-over'].listeners.click();
  assert.equal(r.location.hash, '#1');
  assert.equal(r.document.activeElement, r.deck);
  r.jump('#2'); r.document.activeElement = { closest: () => r.slides[1] };
  r.jump('#3'); assert.equal(r.document.activeElement, r.deck);
});

test('touch taps do not advance; desktop clicks and small-screen scrolling work', () => {
  const r = reader({ small: true });
  const click = { target: r.element(), clientX: 500, clientY: 100 };
  r.deck.listeners.click({ ...click, pointerType: 'touch' });
  assert.equal(r.ids.counter.textContent, '1 / 4');
  r.deck.listeners.click(click);
  assert.equal(r.location.hash, '#2');
  assert.equal(r.deck.scrolls, 1);
  r.deck.listeners.click({ ...click, clientX: 100 });
  assert.equal(r.location.hash, '#1');
  const touch = reader({ coarse: true });
  touch.deck.listeners.click(click);
  assert.equal(touch.ids.counter.textContent, '1 / 4');
});

test('non-reader pages and incomplete templates remain ordinary documents', () => {
  for (const missing of ['deck', 'counter', 'next', 'prev', 'source-link', 'start-over']) {
    const r = reader({ missing });
    assert.equal(r.controls.hidden, true);
    assert.equal(r.document.body.classList.contains('is-presenting'), false);
    assert(r.slides.every(slide => !slide.hidden));
  }
});
