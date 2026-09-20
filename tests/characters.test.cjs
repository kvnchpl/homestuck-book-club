// Exercise the actual staged reference renderer without browser dependencies.
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { runInNewContext } = require('node:vm');
const script = readFileSync(join(__dirname, '../script.js'), 'utf8');
const dataScript = readFileSync(join(__dirname, '../reference-data.js'), 'utf8');

function reference({ hash = '', saved = null, blockedStorage = false, missingData = false } = {}) {
  let focused;
  function element(tagName = 'div') {
    return {
      tagName, attrs: {}, children: [], listeners: {}, dataset: {}, hidden: false, className: '',
      style: { setProperty() {} },
      classList: { add() {} },
      setAttribute(k, v) { this.attrs[k] = v; },
      append(...children) { this.children.push(...children); },
      replaceChildren(...children) { this.children = children; },
      querySelectorAll(selector) { return all(this).filter(e => e.className.split(' ').includes(selector.slice(1))); },
      addEventListener(k, fn) { this.listeners[k] = fn; },
      focus() { focused = this; },
    };
  }
  const ids = Object.fromEntries(['character-select', 'character-roster', 'character-groups',
    'reference-cheats', 'reading-progress', 'reading-progress-scale', 'reading-progress-output',
    'reading-progress-status', 'reference-boundary-label', 'reference-loading'].map(id => [id, element()]));
  ids['character-select'].hidden = true;
  const location = { hash };
  const window = { addEventListener(k, fn) { this[k] = fn; } };
  const warnings = [];
  const context = {
    document: { querySelector: s => s === '.reference-page' ? element() : null,
      getElementById: id => ids[id], createElement: element, documentElement: element() },
    window, location, history: { replaceState(a, b, value) { location.hash = value; } },
    localStorage: {
      getItem() { if (blockedStorage) throw Error('Storage blocked'); return saved; },
      setItem(key, value) { if (blockedStorage) throw Error('Storage blocked'); saved = value; },
    },
    console: { warn: (...args) => warnings.push(args) },
  };
  if (!missingData) runInNewContext(dataScript, context);
  runInNewContext(script, context);
  return { ids, location, window, warnings, saved: () => saved, focused: () => focused,
    tabs: () => all(ids['character-roster']).filter(e => e.attrs.role === 'tab'),
    cards: () => all(ids['character-groups']).filter(e => e.attrs.role === 'tabpanel'),
    stage(value) { ids['reading-progress'].value = String(value); ids['reading-progress'].listeners.input(); },
    key(index, key) {
      const event = { key, preventDefault() { this.prevented = true; } };
      this.tabs()[index].listeners.keydown(event);
      return event;
    },
  };
}
function all(root) { return root.children.flatMap(child => [child, ...all(child)]); }
function text(root) { return [root.textContent || '', ...root.children.map(text)].join(' '); }

// Real names deliberately check early vs. late wording, beyond counting cards.
test('fresh visits render only Act 1 content, regardless of a later-character hash', () => {
  const r = reference({ hash: '#character-karkat' });
  assert.deepEqual(r.cards().map(c => c.dataset.characterId), ['john', 'rose', 'dad']);
  assert.equal(r.cards().filter(c => !c.hidden).length, 1);
  assert.equal(r.cards().find(c => !c.hidden).dataset.characterId, 'john');
  assert.doesNotMatch(text(r.ids['character-groups']), /KARKAT|DAVE|SNOWMAN/);
  assert.doesNotMatch(text(r.ids['reference-cheats']), /DOOMED TIMELINE|ECTOBIOLOGY/);
  assert.equal(r.ids['reading-progress'].attrs['aria-valuetext'], 'Act 1');
  assert.equal(r.ids['reference-loading'].hidden, true);
  assert.deepEqual(r.warnings, []);
});

test('all stages render one selected profile with valid tab relationships and stage-safe links', () => {
  const r = reference();
  const stages = r.window.HOMESTUCK_REFERENCE.stages;
  for (const stage of stages) {
    r.stage(stage.value);
    assert.equal(r.cards().filter(c => !c.hidden).length, 1);
    assert.equal(r.tabs().filter(t => t.attrs['aria-selected'] === 'true').length, 1);
    assert.equal(r.cards().length, r.window.HOMESTUCK_REFERENCE.characters.filter(c =>
      stages.find(s => s.key === c.reveal).value <= stage.value).length);
    for (const [i, card] of r.cards().entries()) {
      assert.equal(r.tabs()[i].attrs['aria-controls'], card.id);
      assert.equal(card.attrs['aria-labelledby'], r.tabs()[i].id);
      for (const link of all(card).filter(e => e.tagName === 'a')) {
        assert(Number(link.href.split('/').pop()) <= stage.endPage);
      }
    }
  }
  assert.equal(r.cards().length, 35);
  assert.equal(r.saved(), 'act-5-act-1');
});

test('lowering progress removes future facts and restores earlier terminology', () => {
  const r = reference({ saved: 'act-5-act-1', hash: '#character-karkat' });
  assert.equal(r.cards().find(c => !c.hidden).dataset.characterId, 'karkat');
  assert.match(text(r.ids['reference-cheats']), /DOOMED TIMELINE/);
  r.stage(5);
  assert.doesNotMatch(text(r.ids['reference-cheats']), /DOOMED TIMELINE/);
  assert.match(text(r.ids['reference-cheats']), /ALTERNATE TIMELINE/);
  r.stage(1);
  assert.deepEqual(r.cards().map(c => c.dataset.characterId), ['john', 'rose', 'dad']);
  assert.doesNotMatch(text(r.ids['character-groups']), /KARKAT|SNOWMAN/);
  assert.doesNotMatch(text(r.ids['reference-cheats']), /TIMELINE|ECTOBIOLOGY/);
  assert.equal(r.cards().filter(c => !c.hidden).length, 1);
});

test('group headings change in both the roster and profiles, including on rollback', () => {
  const r = reference();
  for (const [stage, expected] of [[1, 'GUARDIANS'], [2, 'GUARDIANS & SPRITES'], [6, 'GUARDIANS & SPRITES'], [1, 'GUARDIANS']]) {
    r.stage(stage);
    const labels = all(r.ids['character-roster']).filter(e => e.className === 'roster-group-label');
    assert(labels.some(e => e.textContent === expected));
    const section = all(r.ids['character-groups']).find(e => e.id === 'guardians-sprites');
    assert.equal(section.children[0].textContent, expected);
    if (stage === 1) assert.doesNotMatch(text(r.ids['character-roster']), /SPRITES/);
  }
});

test('Snowman’s name and both portraits follow the selected stage without leaking her identity', () => {
  const r = reference({ saved: 'intermission', hash: '#character-snowman' });
  for (const [stage, asset, name, sourcePage] of [
    [4, 'ref-snowman.webp', 'SNOWMAN', 1268],
    [5, 'ref-black-queen.webp', 'SNOWMAN (BLACK QUEEN)', 1674],
    [4, 'ref-snowman.webp', 'SNOWMAN', 1268],
  ]) {
    r.stage(stage);
    const card = r.cards().find(c => c.dataset.characterId === 'snowman');
    const tab = r.tabs().find(t => t.dataset.characterId === 'snowman');
    assert.equal(card.hidden, false);
    assert.equal(r.location.hash, '#character-snowman');
    const link = all(card).find(e => e.className === 'character-intro-link');
    assert.equal(link.textContent, name);
    assert.equal(link.href, `https://homestuck.com/story/${sourcePage}`);
    for (const root of [card, tab]) {
      const img = all(root).find(e => e.tagName === 'img');
      assert.equal(img.src, `../assets/${asset}`);
      if (stage === 4) {
        assert.doesNotMatch(text(root), /BLACK QUEEN|troll.session/i);
        assert.doesNotMatch(img.alt, /BLACK QUEEN/i);
      }
    }
  }
  r.stage(3);
  assert(!r.cards().some(c => c.dataset.characterId === 'snowman'));
  assert(!r.tabs().some(t => t.dataset.characterId === 'snowman'));
});

test('kid notes evolve and roll back, while troll notes wait for their reveal stage', () => {
  const r = reference();
  const note = id => {
    const card = r.cards().find(c => c.dataset.characterId === id);
    return card && all(card).find(e => e.className === 'character-note')?.textContent;
  };
  const earlyNotes = new Map();
  for (const [stage, ids] of [[1, ['john', 'rose']], [2, ['dave']], [3, ['jade']]]) {
    r.stage(stage);
    for (const id of ids) {
      assert(note(id), `${id} should have a note when first revealed`);
      earlyNotes.set(id, note(id));
    }
    assert.doesNotMatch(text(r.ids['character-groups']), /ectobiology|needlewands|future Dave|moon falls/i);
  }
  r.stage(5);
  for (const [id, early] of earlyNotes) assert.notEqual(note(id), early);
  assert.match(note('john'), /ectobiology/);
  assert.match(note('rose'), /needlewands/);
  assert.match(note('dave'), /future Dave/);
  assert.match(note('jade'), /moon falls/);
  r.stage(6);
  const trolls = r.window.HOMESTUCK_REFERENCE.characters.filter(c => c.group === 'trolls');
  assert.equal(trolls.length, 12);
  for (const troll of trolls) assert(note(troll.id));
  r.stage(5);
  for (const troll of trolls) assert.equal(note(troll.id), undefined);
  for (const [stage, ids] of [[3, ['jade']], [2, ['dave']], [1, ['john', 'rose']]]) {
    r.stage(stage);
    for (const id of ids) assert.equal(note(id), earlyNotes.get(id));
  }
  assert.deepEqual(r.warnings, []);
});

test('character links, clicks, and keyboard navigation select and focus available tabs', () => {
  const r = reference({ saved: 'act-5-act-1', hash: '#character-karkat' });
  const tabs = r.tabs();
  assert.equal(r.key(0, 'ArrowLeft').prevented, true);
  assert.equal(r.focused(), tabs.at(-1));
  r.key(tabs.length - 1, 'Home');
  assert.equal(r.focused(), tabs[0]);
  r.key(0, 'ArrowDown');
  assert.equal(r.focused(), tabs[4]);
  r.key(4, 'ArrowUp');
  assert.equal(r.focused(), tabs[0]);
  r.key(0, 'End');
  assert.equal(r.focused(), tabs.at(-1));
  assert.equal(r.key(0, 'Tab').prevented, undefined);
  tabs[1].listeners.click();
  assert.equal(r.location.hash, '#character-rose');
  r.location.hash = '#character-john';
  r.window.hashchange();
  assert.equal(r.cards().find(c => !c.hidden).dataset.characterId, 'john');
  r.location.hash = '#character-unknown';
  r.window.hashchange();
  assert.equal(r.cards().filter(c => !c.hidden).length, 1);
});

test('saved keys, legacy numeric progress, invalid storage and blocked storage are supported', () => {
  for (const saved of ['5', 'act-4']) {
    const r = reference({ saved });
    assert.equal(r.ids['reading-progress-output'].textContent, 'Act 4');
  }
  for (const options of [{ saved: 'future-stage' }, { blockedStorage: true }]) {
    const r = reference(options);
    assert.equal(r.ids['reading-progress-output'].textContent, 'Act 1');
    r.stage(6);
    assert.equal(r.cards().length, 35);
  }
  const r = reference();
  r.ids['reading-progress-scale'].children.at(-1).listeners.click();
  assert.equal(r.saved(), 'act-5-act-1');
  assert.equal(r.ids['reading-progress-scale'].children.at(-1).attrs['aria-pressed'], 'true');
});

test('a missing data file leaves the reference empty with a useful error', () => {
  const r = reference({ missingData: true });
  assert.equal(r.ids['character-select'].hidden, true);
  assert.equal(r.cards().length, 0);
  assert.equal(r.ids['reference-loading'].textContent, 'The spoiler-safe reference could not be loaded.');
});
