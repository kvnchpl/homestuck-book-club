// Reference filtering stays independent of recap navigation.
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { runInNewContext } = require('node:vm');
const script = readFileSync(join(__dirname, '../script.js'), 'utf8');

function reference() {
  const input = { value: '', listeners: {}, addEventListener(k, f) { this.listeners[k] = f; },
    focus() { this.focused = true; } };
  const clear = { hidden: true, listeners: {}, addEventListener(k, f) { this.listeners[k] = f; } };
  const status = { textContent: '' };
  const tools = { hidden: true };
  const cards = [
    { hidden: false, textContent: 'Kanaya Maryam protects the Matriorb.', dataset: { search: 'grimauxiliatrix GA' } },
    { hidden: false, textContent: 'Rose Lalonde reads and writes.', dataset: { search: 'tentacletherapist TT' } },
    { hidden: false, textContent: 'The Matriorb can hatch a Mother Grub.', dataset: { search: 'egg' } },
  ];
  const sections = [[cards[0], cards[1]], [cards[2]]].map(items => ({
    hidden: false, querySelectorAll: () => items,
  }));
  const links = ['people', 'objects'].map(id => ({ hidden: false, getAttribute: () => `#${id}` }));
  const ids = { 'reference-search': input, 'reference-clear': clear, 'reference-results': status,
    people: sections[0], objects: sections[1] };
  const document = {
    getElementById: id => ids[id],
    querySelector: s => s === '.reference-search-tools' ? tools : null,
    querySelectorAll: s => ({ '.reference-card': cards, '.reference-section': sections,
      '.reference-jump a': links })[s],
  };
  runInNewContext(script, { document });
  const search = value => { input.value = value; input.listeners.input(); };
  return { input, clear, status, tools, cards, sections, links, search };
}

test('reference searches names, aliases, and multiple words regardless of case or spacing', () => {
  const r = reference();
  assert.equal(r.tools.hidden, false);
  assert.equal(r.status.textContent, '3 entries available.');
  r.search('  MATRIORB   kanaya  ');
  assert.deepEqual(r.cards.map(c => c.hidden), [false, true, true]);
  assert.deepEqual(r.sections.map(s => s.hidden), [false, true]);
  assert.deepEqual(r.links.map(l => l.hidden), [false, true]);
  assert.equal(r.status.textContent, '1 entry matches your search.');
  r.search('tentacleTherapist');
  assert.deepEqual(r.cards.map(c => c.hidden), [true, false, true]);
});

test('an empty result is explained and Clear Search restores entries and section links', () => {
  const r = reference();
  r.search('not-a-character');
  assert(r.cards.every(c => c.hidden));
  assert(r.sections.every(s => s.hidden));
  assert.match(r.status.textContent, /^No entries match/);
  assert.equal(r.clear.hidden, false);
  r.clear.listeners.click();
  assert.equal(r.input.value, '');
  assert.equal(r.input.focused, true);
  assert(r.cards.every(c => !c.hidden));
  assert(r.sections.every(s => !s.hidden));
  assert(r.links.every(l => !l.hidden));
  assert.equal(r.clear.hidden, true);
  assert.equal(r.status.textContent, '3 entries available.');
  r.search('  ');
  assert(r.cards.every(c => !c.hidden));
});
