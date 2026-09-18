"""Check static pages and recap publishing links using only the Python standard library."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlparse
import re
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
    return ''.join(node.itertext()).strip()


paths = [ROOT / 'index.html', ROOT / 'schedule/index.html', ROOT / 'reference/index.html',
         *sorted((ROOT / 'recaps').rglob('index.html'))]
pages = {p.relative_to(ROOT).as_posix(): Page(p) for p in paths}
assert all(p.is_file() for p in (ROOT / 'assets').iterdir()), 'Keep assets directly under assets/'
for asset in (ROOT / 'assets').glob('*.gif'):
    header = asset.read_bytes()[:10]
    assert header[:6] in (b'GIF87a', b'GIF89a'), f'{asset.name}: not a GIF image'
    dimensions = (int.from_bytes(header[6:8], 'little'), int.from_bytes(header[8:10], 'little'))
    assert dimensions[0] == 650 and dimensions[1] > 0, f'{asset.name}: expected 650px width and a proportional height, got {dimensions}'

for name, page in pages.items():
    tree = page.root
    assert len(tree.findall('.//main')) == 1, f'{name}: one main landmark required'
    assert len(tree.findall('.//h1')) == 1, f'{name}: one page title required'
    assert tree.find('.//html').get('lang') == 'en'
    assert any(e.get('name') == 'viewport' for e in tree.iter('meta'))
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
                    assert Path(target).parent == Path('assets'), f'{name}: image outside assets/'
                    assert element.get('alt', '').strip(), f'{name}: missing image description'
                    assert int(element.get('width', 0)) > 0 and int(element.get('height', 0)) > 0
                    if Path(target).suffix.lower() == '.gif':
                        header = (ROOT / target).read_bytes()[:10]
                        assert header[:6] in (b'GIF87a', b'GIF89a'), f'{target}: not a GIF image'
                        assert int.from_bytes(header[6:8], 'little') > 0
                        assert int.from_bytes(header[8:10], 'little') > 0
                        actual = (int.from_bytes(header[6:8], 'little'), int.from_bytes(header[8:10], 'little'))
                        assert (int(element.get('width')), int(element.get('height'))) == actual, f'{name}: incorrect GIF dimensions'
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
        for control in ('counter', 'source-link', 'start-over', 'prev', 'next', 'deck'):
            assert control in page.ids, f'{name}: missing {control}'
        assert page.ids['deck'].get('tabindex') == '-1'
        assert page.ids['start-over'].tag == 'button'

reference = pages['reference/index.html']
assert reference.ids['reference-search'].get('type') == 'search'
assert reference.ids['reference-results'].get('role') == 'status'
assert reference.ids['reference-clear'].tag == 'button'
assert 'hidden' in by_class(reference.root, 'reference-search-tools')[0].attrib
assert all('hidden' not in entry.attrib for entry in by_class(reference.root, 'reference-card'))
assert all('hidden' not in section.attrib for section in by_class(reference.root, 'reference-section'))

schedule = by_class(pages['schedule/index.html'].root, 'meeting')
recaps = by_class(pages['recaps/index.html'].root, 'meeting')
assert len(schedule) == len(recaps) == 13
reading_count = 0
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
    assert text(by_class(meeting, 'meeting-total')[0]) == f'{total} pages'
    assert [text(th) for th in meeting.findall('.//th')] == ['Suggested Reading', 'Start Page', '# of Pages']
    reading_count += len(rows)
    published = (ROOT / f'recaps/{number:02}/index.html').is_file()
    reading_links = [a.get('href') for a in recap.iter('a') if re.fullmatch(r'\./\d{2}/', a.get('href', ''))]
    assert reading_links == ([f'./{number:02}/'] if published else []), f'Recap {number}: index publication link mismatch'
    assert bool(by_class(recap, 'recap-status')) != published, f'Recap {number}: incorrect availability'
    schedule_links = [a.get('href') for a in meeting.iter('a') if re.fullmatch(r'\.\./recaps/\d{2}/', a.get('href', ''))]
    assert schedule_links == ([f'../recaps/{number:02}/'] if published else []), f'Recap {number}: schedule publication link mismatch'

assert reading_count == 32 and expected_start == 8130
print(f'PASS: {len(pages)} pages, 13 recap entries, 32 readings / 8129 pages; local links and assets at both hosting paths.')
