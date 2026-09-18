const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { runInNewContext } = require('node:vm');
const script = readFileSync(join(__dirname, '../script.js'), 'utf8');

function roster(hash = '') {
  let focused;
  function element() {
    return {
      attrs: {}, children: [], listeners: {}, hidden: false,
      classList: { add() {} },
      setAttribute(k, v) { this.attrs[k] = v; },
      getAttribute(k) { return this.attrs[k] ?? null; },
      append(...children) { this.children.push(...children); },
      prepend(child) { this.children.unshift(child); },
      addEventListener(k, fn) { this.listeners[k] = fn; },
      focus() { focused = this; },
    };
  }
  const groups = ['THE KIDS', 'THE TWELVE TROLLS'].map(textContent => ({ querySelector: () => ({ textContent }) }));
  const cards = Array.from({ length: 16 }, (_, i) => {
    const card = element();
    card.id = `character-${i}`;
    if (i === 0) card.setAttribute('data-roster-label', 'Scratch');
    card.closest = () => groups[i < 4 ? 0 : 1];
    card.querySelector = () => ({ alt: `Name${i} Surname`, cloneNode: element });
    return card;
  });
  const select = element();
  select.querySelectorAll = () => cards;
  const location = { hash };
  const window = { addEventListener(k, fn) { this[k] = fn; } };
  runInNewContext(script, {
    document: { querySelector: s => s === '.character-select' ? select : null, createElement: element },
    window, location, history: { replaceState(a, b, value) { location.hash = value; } },
  });
  const tabs = select.children[0].children.filter(c => c.attrs.role === 'tab');
  return { cards, tabs, location, window, focused: () => focused,
    key(index, key) {
      const event = { key, preventDefault() { this.prevented = true; } };
      tabs[index].listeners.keydown(event);
      return event;
    } };
}

test('a direct character link selects exactly one profile and exposes tab relationships', () => {
  const r = roster('#character-5');
  assert.deepEqual(r.cards.map(c => !c.hidden), r.cards.map((_, i) => i === 5));
  assert.equal(r.tabs[5].attrs['aria-selected'], 'true');
  assert.equal(r.tabs[5].tabIndex, 0);
  assert.equal(r.tabs[5].attrs['aria-controls'], r.cards[5].id);
  assert.equal(r.tabs[0].children[1].textContent, 'Scratch');
  assert.equal(r.tabs[1].children[1].textContent, 'Name1');
  assert.equal(r.tabs[0].attrs['aria-label'], 'Name0 Surname');
  assert.equal(r.cards[5].attrs['aria-labelledby'], r.tabs[5].id);
  r.tabs[2].listeners.click();
  assert.equal(r.location.hash, '#character-2');
  assert.equal(r.cards[2].hidden, false);
  assert.equal(r.cards[5].hidden, true);
  assert.equal(r.tabs[5].tabIndex, -1);
});

test('keyboard selection wraps, moves by roster rows, and keeps focus on the selected tab', () => {
  const r = roster();
  assert.equal(r.key(0, 'ArrowLeft').prevented, true);
  assert.equal(r.focused(), r.tabs[15]);
  r.key(15, 'ArrowDown');
  assert.equal(r.focused(), r.tabs[3]);
  r.key(3, 'Home');
  assert.equal(r.focused(), r.tabs[0]);
  r.key(0, 'End');
  assert.equal(r.focused(), r.tabs[15]);
  assert.equal(r.key(15, 'Tab').prevented, undefined);
});

test('unknown hashes default to the first revealed character; hash changes update the selection', () => {
  const r = roster('#unrevealed');
  assert.equal(r.cards[0].hidden, false);
  r.location.hash = '#character-10';
  r.window.hashchange();
  assert.equal(r.cards[10].hidden, false);
  assert.equal(r.cards.filter(c => !c.hidden).length, 1);
});
