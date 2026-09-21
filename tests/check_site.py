"""Check static pages and recap publishing links using only the Python standard library."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlparse
import re
import json
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
VOID = set('area base br col embed hr img input link meta param source track wbr'.split())


class Page(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.path = path
        self.root = ET.Element('document')
        self.stack = [self.root]
        self.feed(path.read_text())
        self.close()
        assert len(self.stack) == 1, f'{path}: unclosed elements'
        self.ids = {}
        for element in self.root.iter():
            if 'id' in element.attrib:
                key = element.get('id')
                assert key not in self.ids, f'{path}: duplicate ID {key}'
                self.ids[key] = element

    def handle_starttag(self, tag, attrs):
        node = ET.SubElement(self.stack[-1], tag, {k: v or '' for k, v in attrs})
        if tag not in VOID:
            self.stack.append(node)

    def handle_endtag(self, tag):
        assert self.stack[-1].tag == tag, f'{self.path}: unexpected closing {tag}'
        self.stack.pop()

    def handle_startendtag(self, tag, attrs):
        # Editors may serialize HTML void elements as <img /> or <meta />.
        assert tag in VOID, f'{self.path}: non-void element cannot self-close: {tag}'
        self.handle_starttag(tag, attrs)

    def handle_data(self, data):
        node = self.stack[-1]
        if len(node):
            node[-1].tail = (node[-1].tail or '') + data
        else:
            node.text = (node.text or '') + data


def by_class(node, name):
    return [e for e in node.iter() if name in e.get('class', '').split()]


def text(node):
    return ' '.join(''.join(node.itertext()).split())


def image_dimensions(path):
    data = path.read_bytes()
    if path.suffix == '.png':
        assert data[:8] == b'\x89PNG\r\n\x1a\n', f'{path}: expected PNG'
        return int.from_bytes(data[16:20], 'big'), int.from_bytes(data[20:24], 'big')
    if path.suffix == '.gif':
        assert data[:6] in (b'GIF87a', b'GIF89a'), f'{path}: expected GIF'
        return int.from_bytes(data[6:8], 'little'), int.from_bytes(data[8:10], 'little')
    if path.suffix == '.webp':
        assert data[:4] == b'RIFF' and data[8:12] == b'WEBP', f'{path}: expected WebP'
        assert int.from_bytes(data[4:8], 'little') + 8 == len(data), f'{path}: truncated WebP'
        offset = 12
        while offset + 8 <= len(data):
            kind = data[offset:offset + 4]
            size = int.from_bytes(data[offset + 4:offset + 8], 'little')
            chunk = data[offset + 8:offset + 8 + size]
            if kind == b'VP8X':
                return int.from_bytes(chunk[4:7], 'little') + 1, int.from_bytes(chunk[7:10], 'little') + 1
            if kind == b'VP8L':
                assert chunk[0] == 0x2f
                bits = int.from_bytes(chunk[1:5], 'little')
                return (bits & 0x3fff) + 1, ((bits >> 14) & 0x3fff) + 1
            if kind == b'VP8 ':
                assert chunk[3:6] == b'\x9d\x01\x2a'
                return int.from_bytes(chunk[6:8], 'little') & 0x3fff, int.from_bytes(chunk[8:10], 'little') & 0x3fff
            offset += 8 + size + size % 2
        raise AssertionError(f'{path}: no WebP image dimensions')
    raise AssertionError(f'{path}: unsupported image format')


paths = sorted([ROOT / 'index.html'] + [
    path for directory in ('schedule', 'recaps', 'reference')
    for path in (ROOT / directory).rglob('index.html')
])
pages = {p.relative_to(ROOT).as_posix(): Page(p) for p in paths}
assert all(p.is_file() for p in (ROOT / 'assets').iterdir()), 'Keep assets directly under assets/'
asset_paths = {p.resolve() for p in (ROOT / 'assets').iterdir() if not p.name.startswith('.')}
assert all(p.suffix == '.webp' for p in asset_paths), 'Use WebP for all site images'
referenced_assets = set()

for name, page in pages.items():
    tree = page.root
    assert len(tree.findall('.//main')) == 1, f'{name}: one main landmark required'
    assert len(tree.findall('.//h1')) == 1, f'{name}: one page title required'
    assert tree.find('.//html').get('lang') == 'en'
    assert any(e.get('name') == 'viewport' for e in tree.iter('meta'))
    nav = by_class(tree, 'site-nav')[0]
    assert [text(a) for a in nav] == ['Homestuck Book Club', 'Schedule', 'Recaps', 'Reference', 'Read Homestuck']
    for element in tree.iter():
        for attribute in ('aria-labelledby', 'aria-describedby'):
            assert all(key in page.ids for key in element.get(attribute, '').split()), f'{name}: broken {attribute}'
    assert not list(tree.iter('style')), f'{name}: use shared CSS'
    assert all(e.get('src') for e in tree.iter('script')), f'{name}: use shared JS'
    for prefix in ('/', '/homestuck-book-club/'):
        base = 'https://site.test' + prefix + name
        targets = []
        for element in tree.iter():
            for attribute in ('href', 'src'):
                link = element.get(attribute)
                if link is None:
                    continue
                url = urlparse(urljoin(base, link))
                if url.netloc != 'site.test':
                    continue
                assert not link.startswith('/'), f'{name}: use document-relative links: {link}'
                assert url.path.startswith(prefix)
                target = unquote(url.path[len(prefix):])
                if not target or target.endswith('/'):
                    target += 'index.html'
                targets.append(target)
                assert (ROOT / target).is_file(), f'{name}: broken link {link}'
                if url.fragment:
                    destination = pages[target]
                    assert url.fragment in destination.ids or (
                        url.fragment.isdigit() and 1 <= int(url.fragment) <= len(by_class(destination.root, 'slide'))
                    ), f'{name}: broken fragment {link}'
                if element.tag == 'img':
                    referenced_assets.add((ROOT / target).resolve())
                    assert Path(target).parent == Path('assets'), f'{name}: image outside assets/'
                    assert element.get('alt', '').strip(), f'{name}: missing image description'
                    assert int(element.get('width', 0)) > 0 and int(element.get('height', 0)) > 0
                    actual = image_dimensions(ROOT / target)
                    assert (int(element.get('width')), int(element.get('height'))) == actual, f'{name}: incorrect image dimensions'
                    if name.startswith('recaps/'):
                        assert actual[0] == 650, f'{name}: keep recap panels 650px wide'
                        assert element.get('loading') == 'lazy', f'{name}: defer unread panels'
                        assert element.get('decoding') == 'async', f'{name}: decode panels asynchronously'
        assert 'styles.css' in targets and 'script.js' in targets, f'{name}: missing shared resources'
        recap_nav = by_class(tree, 'nav-recaps')
        assert len(recap_nav) == 1
        assert urlparse(urljoin(base, recap_nav[0].get('href'))).path == prefix + 'recaps/'
        reference_nav = by_class(tree, 'nav-reference')
        assert len(reference_nav) == 1, f'{name}: missing reference navigation'
        assert urlparse(urljoin(base, reference_nav[0].get('href'))).path == prefix + 'reference/'
    slides = by_class(tree, 'slide')
    if slides:
        assert 'cover' in slides[0].get('class', '').split(), f'{name}: start with a cover'
        assert all('hidden' not in slide.attrib for slide in slides), f'{name}: keep no-JS reading available'
        for number, slide in enumerate(slides, 1):
            assert slide.get('data-slide') == str(number), f'{name}: incorrect slide number'
            assert slide.get('aria-label') == f'Slide {number} of {len(slides)}', f'{name}: stale slide label'
        for control in ('counter', 'source-link', 'start-over', 'prev', 'next', 'deck'):
            assert control in page.ids, f'{name}: missing {control}'
        assert page.ids['deck'].get('tabindex') == '-1'
        assert page.ids['start-over'].tag == 'button'

reference = pages['reference/index.html']
# The HTML shell must never embed facts that JavaScript would need to hide.
assert not by_class(reference.root, 'character-card')
assert not by_class(reference.root, 'character-portrait')
for container in ('character-roster', 'character-groups', 'reference-cheats'):
    assert not len(reference.ids[container]) and not text(reference.ids[container])
assert 'hidden' in reference.ids['character-select'].attrib
scripts = [element.get('src').split('?')[0] for element in reference.root.iter('script')]
assert scripts == ['../reference-data.js', '../script.js']

source = (ROOT / 'reference-data.js').read_text()
data = json.loads(source[source.index('{'):].rstrip().removesuffix(';'))
stages = {stage['key']: stage for stage in data['stages']}
assert data.get('availableThrough') in stages, 'Reference needs a valid book club reading cap'
assert len(stages) == len(data['stages'])
assert [stage['value'] for stage in stages.values()] == list(range(1, len(stages) + 1))
group_ids = {group['id'] for group in data['groups']}
assert len(group_ids) == len(data['groups'])
assert len({c['id'] for c in data['characters']}) == len(data['characters'])
assert sum(c['group'] == 'kids' for c in data['characters']) == 4
assert sum(c['group'] == 'trolls' for c in data['characters']) == 12


def check_reference(item, path='reference', stage=None):
    if isinstance(item, list):
        variants = [entry['from'] for entry in item if isinstance(entry, dict) and 'from' in entry]
        assert all(key in stages for key in variants), f'{path}: unknown variant stage'
        values = [stages[key]['value'] for key in variants]
        assert values == sorted(set(values)), f'{path}: unordered or duplicate variants'
        for index, child in enumerate(item):
            check_reference(child, f'{path}[{index}]', stage)
    elif isinstance(item, dict):
        stage = item.get('from', item.get('reveal', stage))
        assert stage is None or stage in stages, f'{path}: unknown stage'
        if 'from' in item or 'sourcePage' in item or 'symbol' in item:
            pages = [item.get('sourcePage')] + item.get('sourcePages', [])
            boundary = stages[stage]['endPage'] if stage else data['stages'][-1]['endPage']
            assert all(isinstance(page, int) and 1 <= page <= boundary for page in pages), f'{path}: source beyond reading boundary or missing'
            assert len(set(pages)) == len(pages), f'{path}: duplicate source pages'
            assert item.get('sourceKind') in {'intro', 'direct', 'visual', 'composite', 'editorial', 'boundary'}, f'{path}: unknown source kind'
        if 'src' in item:
            asset = (ROOT / 'reference' / item['src']).resolve()
            assert asset.parent == ROOT / 'assets' and asset.is_file(), f'{path}: missing portrait {item["src"]}'
            assert item.get('alt', '').strip(), f'{path}: missing portrait description'
            referenced_assets.add(asset)
            dimensions = image_dimensions(asset)
            assert all(0 < side <= 650 for side in dimensions), f'{asset}: use individual portraits'
        for key, child in item.items():
            check_reference(child, f'{path}.{key}', stage)


check_reference(data)
assert referenced_assets == asset_paths, f'Unused assets: {sorted(str(p.relative_to(ROOT)) for p in asset_paths - referenced_assets)}'
for character in data['characters']:
    group = character['group']
    assignments = [v['value'] for v in group] if isinstance(group, list) else [group]
    assert all(value in group_ids for value in assignments), f'{character["id"]}: unknown group'


schedule = by_class(pages['schedule/index.html'].root, 'meeting')
recaps = by_class(pages['recaps/index.html'].root, 'meeting')
assert len(schedule) == len(recaps) == 13
reading_count = 0
reading_ends = []
expected_start = 1
for number, (meeting, recap) in enumerate(zip(schedule, recaps), 1):
    assert meeting.get('id') == f'meeting-{number}'
    assert recap.get('id') == f'recap-{number}'
    assert meeting.find('.//time').attrib == recap.find('.//time').attrib
    assert text(meeting.find('.//time')) == text(recap.find('.//time'))
    rows = meeting.findall('.//tbody/tr')
    assert [text(row[0]) for row in rows] == [text(li) for li in by_class(recap, 'recap-readings')[0]]
    total = 0
    for row in rows:
        start = int(row[1].find('a').get('href').rsplit('/', 1)[1])
        count = int(row[2][-1].tail.strip())
        assert start == expected_start, f'Meeting {number}: gap or overlap in readings'
        expected_start += count
        total += count
        reading_ends.append(expected_start - 1)
    assert text(by_class(meeting, 'meeting-total')[0]) == f'{total} pages'
    assert [text(th) for th in meeting.findall('.//th')] == ['Suggested Reading', 'Start Page', '# of Pages']
    reading_count += len(rows)
    published = (ROOT / f'recaps/{number:02}/index.html').is_file()
    if published:
        recap_page = pages[f'recaps/{number:02}/index.html']
        audit = (ROOT / 'docs/asset-sources.md').read_text()
        for image in recap_page.root.iter('img'):
            filename = Path(image.get('src')).name
            source = re.search(r'story-(\d+)\.webp$', filename)
            assert source, f'Recap {number}: image needs a source-page suffix: {filename}'
            assert 1 <= int(source[1]) < expected_start, f'Recap {number}: image exceeds reading boundary'
            assert f'`{filename}`' in audit, f'Recap {number}: record image provenance for {filename}'
    reading_links = [a.get('href') for a in recap.iter('a') if re.fullmatch(r'\./\d{2}/', a.get('href', ''))]
    assert reading_links == ([f'./{number:02}/'] if published else []), f'Recap {number}: index publication link mismatch'
    assert bool(by_class(recap, 'recap-status')) != published, f'Recap {number}: incorrect availability'
    schedule_links = [a.get('href') for a in meeting.iter('a') if re.fullmatch(r'\.\./recaps/\d{2}/', a.get('href', ''))]
    assert schedule_links == ([f'../recaps/{number:02}/'] if published else []), f'Recap {number}: schedule publication link mismatch'

checkpoints = [stage['endPage'] for stage in stages.values()]
assert checkpoints == sorted(set(checkpoints)), 'Reference checkpoints must increase'
assert checkpoints == reading_ends, 'Reference timeline must cover every scheduled reading segment'
assert reading_count == 32 and expected_start == 8130
print(f'PASS: {len(pages)} pages, 13 recap entries, 32 readings / 8129 pages; local links and assets at both hosting paths.')
