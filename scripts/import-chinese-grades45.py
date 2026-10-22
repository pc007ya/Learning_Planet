#!/usr/bin/env python3
"""Import only official 115-upper grade 4/5 catalog facts; never infer readings.

Run with --inventory-only to inspect all six official indexes first. The default
run uses at most two requests concurrently and reuses local HTML caches. Run
--offline to reproduce outputs from those exact caches without network access.
Raw HTML (including unexported dictionary descriptions) stays in output/sources;
the JSON exports contain only lesson metadata, categorized headwords and sources.
The only src/ output is a metadata-only source coverage audit; this script does
not modify the lesson or pronunciation runtime datasets.
"""

import argparse
from collections import Counter
from concurrent.futures import ThreadPoolExecutor
import hashlib
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import time
from urllib.parse import parse_qs, urlencode, urljoin, urlparse
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
CACHE = ROOT / 'output/sources'
QA = ROOT / 'output/qa'
BASE = 'https://pedia.cloud.edu.tw'
CHECKED_AT = '2026-10-22'
PUBLISHERS = [('南一', 'nani'), ('康軒', 'kangxuan'), ('翰林', 'hanlin')]
GRADE_LABELS = {4: '四年級', 5: '五年級'}
ALLOWED_CATEGORIES = {'生字', '語詞'}
TITLE_PRODUCT_URL = 'https://books.hanlin.com.tw/product/2010071'
TITLE_IMAGE_URL = 'https://books.hanlin.com.tw/Images/Preview/994744_1.jpg?v=c2fe1ff2ac324187a6851ab54015cee3'
TITLE_IMAGE_SHA256 = '67069580d0125a66553f72208c0434346e1ef84c87f41f8db059ac7617314bc7'


class Node:
    def __init__(self, tag='', attrs=()):
        self.tag = tag
        self.attrs = dict(attrs)
        self.children = []

    def has_class(self, name):
        return name in self.attrs.get('class', '').split()

    def text(self):
        return ''.join(child if isinstance(child, str) else child.text()
                       for child in self.children).strip()

    def find(self, predicate):
        result = []
        for child in self.children:
            if isinstance(child, Node):
                if predicate(child):
                    result.append(child)
                result.extend(child.find(predicate))
        return result


class Document(HTMLParser):
    VOID = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
            'link', 'meta', 'param', 'source', 'track', 'wbr'}

    def __init__(self, content):
        super().__init__(convert_charrefs=True)
        self.root = Node()
        self.stack = [self.root]
        self.feed(content)
        self.close()

    def handle_starttag(self, tag, attrs):
        node = Node(tag, attrs)
        self.stack[-1].children.append(node)
        if tag not in self.VOID:
            self.stack.append(node)

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in self.VOID:
            self.handle_endtag(tag)

    def handle_endtag(self, tag):
        for index in range(len(self.stack) - 1, 0, -1):
            if self.stack[index].tag == tag:
                del self.stack[index:]
                break

    def handle_data(self, data):
        self.stack[-1].children.append(data)


def exactly_one(nodes, label):
    if len(nodes) != 1:
        raise ValueError(f'{label}: expected one, found {len(nodes)}')
    return nodes[0]


def verify_canonical(root, expected_url):
    canonical = exactly_one(root.find(lambda n: n.tag == 'link' and
                                      n.attrs.get('rel') == 'canonical'), 'canonical URL')
    got, expected = urlparse(canonical.attrs['href']), urlparse(expected_url)
    if (got.scheme, got.netloc, got.path.lower(), parse_qs(got.query)) != (
            expected.scheme, expected.netloc, expected.path.lower(), parse_qs(expected.query)):
        raise ValueError(f'Canonical mismatch: {canonical.attrs["href"]} != {expected_url}')


def fetch(url, filename, offline, binary=False):
    path = CACHE / filename
    if not path.exists():
        if offline:
            raise FileNotFoundError(f'Offline cache missing: {path}')
        # A single attempt per invocation avoids retrying access-denied responses.
        time.sleep(0.3)
        request = Request(url, headers={'User-Agent': 'LearningPlanetCatalogAudit/1.0'})
        with urlopen(request, timeout=60) as response:
            if response.status != 200:
                raise ValueError(f'HTTP {response.status}: {url}')
            if urlparse(response.url).netloc != urlparse(url).netloc:
                raise ValueError(f'Unexpected cross-host redirect: {response.url}')
            raw = response.read()
        if not binary:
            raw.decode('utf-8-sig')  # fail before caching an invalid encoding
        path.write_bytes(raw)
    raw = path.read_bytes()
    return (raw if binary else raw.decode('utf-8-sig')), {
        'url': url, 'cacheFile': path.relative_to(ROOT).as_posix(),
        'sha256': hashlib.sha256(raw).hexdigest(), 'bytes': len(raw),
        'checkedAt': CHECKED_AT,
    }


def chinese_number(value):
    digits = {'零': 0, '〇': 0, '一': 1, '二': 2, '三': 3, '四': 4,
              '五': 5, '六': 6, '七': 7, '八': 8, '九': 9}
    if value.isdecimal():
        return int(value)
    if value in digits:
        return digits[value]
    if value.count('十') == 1:
        tens, ones = value.split('十')
        return (digits[tens] if tens else 1) * 10 + (digits[ones] if ones else 0)
    raise ValueError(f'Unrecognized lesson number: {value}')


def parse_index(grade, publisher, slug, offline):
    url = BASE + '/Bookmark/Textword?' + urlencode({
        'category': '國語', 'year': '115_1', 'degree': grade, 'press': publisher + '版'})
    content, source = fetch(url, f'grade45-index-g{grade}-{slug}.html', offline)
    root = Document(content).root
    verify_canonical(root, url)
    selections = {'categoryValue': '國語', 'semesterValue': '115_1',
                  'degreeValue': str(grade), 'pressValue': publisher + '版'}
    for element_id, expected in selections.items():
        element = exactly_one(root.find(lambda n: n.tag == 'input' and
                                       n.attrs.get('id') == element_id), element_id)
        if element.attrs.get('value') != expected:
            raise ValueError(f'{element_id} mismatch in {url}')
    # This official JavaScript connects the index's real IDs to lesson pages.
    if '/Bookmark/TCollection?TextNameId=' not in content:
        raise ValueError(f'Official lesson link template missing: {url}')
    lessons = []
    for cell in root.find(lambda n: n.tag == 'td' and n.has_class('textname')):
        full_title = exactly_one(cell.find(lambda n: n.tag == 'strong'), 'index title').text()
        metadata = exactly_one(cell.find(lambda n: n.tag == 'span'), 'index metadata').text()
        if [s.strip() for s in metadata.split('|')] != [
                '115學年度', GRADE_LABELS[grade], '國語', publisher + '版']:
            raise ValueError(f'Index metadata mismatch: {metadata}')
        match = re.fullmatch(r'第([^課]+)課[：:](.*)', full_title)
        if not match or not match.group(2).strip():
            raise ValueError(f'Unexpected grade 4/5 source title: {full_title}')
        actual_id = cell.attrs.get('id')
        if not actual_id:
            raise ValueError(f'Missing actual source ID: {full_title}')
        lessons.append({
            'id': actual_id, 'curriculum': None, 'year': 115, 'semester': '上',
            'grade': grade, 'publisher': publisher, 'number': chinese_number(match.group(1)),
            'title': match.group(2).strip(), 'sourceTitle': full_title, 'edition': None,
            'volume': grade * 2 - 1, 'volumeDerived': True,
            'sourceUrl': BASE + '/Bookmark/TCollection?' + urlencode({'TextNameId': actual_id}),
            'indexUrl': url, 'checkedAt': CHECKED_AT, 'status': '已核',
        })
    if not lessons or len({v['id'] for v in lessons}) != len(lessons):
        raise ValueError(f'Empty or duplicate lesson index: {url}')
    if [v['number'] for v in lessons] != list(range(1, len(lessons) + 1)):
        raise ValueError(f'Non-consecutive source lesson numbers: {url}')
    summary = {
        'grade': grade, 'publisher': publisher, 'year': 115, 'semester': '上',
        'curriculum': None, 'edition': None, 'volume': grade * 2 - 1, 'volumeDerived': True,
        'lessonCount': len(lessons), 'firstTitle': lessons[0]['title'],
        'lastTitle': lessons[-1]['title'], 'indexUrl': url,
        'indexCacheFile': source['cacheFile'],
        'lessons': [{'id': v['id'], 'number': v['number'], 'title': v['title'],
                     'sourceTitle': v['sourceTitle']} for v in lessons],
    }
    return lessons, summary, source


def parse_lesson(lesson, offline):
    content, source = fetch(lesson['sourceUrl'], f'grade45-lesson-{lesson["id"]}.html', offline)
    root = Document(content).root
    verify_canonical(root, lesson['sourceUrl'])
    heading = exactly_one(root.find(lambda n: n.tag == 'h2'), 'lesson heading').text()
    if heading != '生字詞彙表：' + lesson['sourceTitle']:
        raise ValueError(f'Exact index/lesson title mismatch for {lesson["id"]}: {heading!r}')
    vocabulary = []
    vocabulary_keys = set()
    for row in root.find(lambda n: n.tag == 'tr'):
        categories = row.find(lambda n: n.tag == 'td' and n.has_class('type'))
        words = row.find(lambda n: n.tag == 'td' and n.has_class('word_class'))
        if not categories and not words:
            continue
        category = exactly_one(categories, 'row category').text()
        word = exactly_one(words, 'row word')
        anchor = exactly_one(word.find(lambda n: n.tag == 'a'), 'row headword link')
        text = anchor.text()
        if not category or not text:
            raise ValueError(f'Empty category or headword in {lesson["id"]}')
        if category not in ALLOWED_CATEGORIES:
            raise ValueError(f'Unsupported category {category!r} in {lesson["id"]}; review source schema')
        if (category, text) in vocabulary_keys:
            raise ValueError(f'Duplicate category/headword in {lesson["id"]}: {category} {text}')
        vocabulary_keys.add((category, text))
        entry_url = urljoin(BASE, anchor.attrs.get('href', ''))
        parsed = urlparse(entry_url)
        if parsed.netloc != 'pedia.cloud.edu.tw' or parsed.path != '/Entry/Detail' or \
                parse_qs(parsed.query).get('title') != [text]:
            raise ValueError(f'Headword/link mismatch: {text!r}, {entry_url}')
        # Deliberately ignore td.desc, all dictionary definitions, and passages.
        vocabulary.append({'category': category, 'text': text})
    declared = exactly_one(root.find(lambda n: n.has_class('wording')), 'declared word count').text()
    count = re.fullmatch(r'此標籤共\s+(\d+)\s+筆詞條', declared)
    if not count or int(count.group(1)) != len(vocabulary) or not vocabulary:
        raise ValueError(f'Declared/parsed word count mismatch: {lesson["id"]}, {declared}')
    if lesson['grade'] == 4 and lesson['publisher'] == '翰林' and lesson['title'] == '寧靜的意樂會':
        lesson = dict(lesson, displayTitle='寧靜的音樂會', sourceNote=(
            '教育百科索引與課頁均作「寧靜的意樂會」，保留來源原題。'
            '翰林官方115上國小自修國語(4上)目次第十二課作「寧靜的音樂會」（第194頁），'
            '故僅顯示課名依出版社目次校正；未查核課文。'
            f'產品頁：{TITLE_PRODUCT_URL}；目次樣張：{TITLE_IMAGE_URL}。'))
    vocabulary_hash = hashlib.sha256(json.dumps(vocabulary, ensure_ascii=False,
                                                separators=(',', ':')).encode('utf-8')).hexdigest()
    return dict(lesson, vocabulary=vocabulary), dict(source, kind='lesson', lessonId=lesson['id'],
        sourceTitle=lesson['sourceTitle'], exactTitleMatch=True, vocabularyCount=len(vocabulary),
        categoryCounts=dict(Counter(v['category'] for v in vocabulary)),
        sourceVocabularySha256=vocabulary_hash)


def title_correction_evidence(catalog, offline):
    listing, listing_source = fetch('https://books.hanlin.com.tw/productall', 'hle-products.html', offline)
    product, product_source = fetch(TITLE_PRODUCT_URL, 'hle-g4-self-product.html', offline)
    _, image_source = fetch(TITLE_IMAGE_URL, 'hle-g4-preview-1.jpg', offline, binary=True)
    section = re.search(r'>115上期</div>(.*?)(?:>\d+下期</div>|>\d+上期</div>|$)', listing, re.S)
    if not section or not re.search(r'<a href="/product/2010071">國小自修-國語\(4上\)</a>', section.group(1)):
        raise ValueError('Publisher product no longer verifiably belongs to 115上期')
    if urlparse(TITLE_IMAGE_URL).path + '?' + urlparse(TITLE_IMAGE_URL).query not in product:
        raise ValueError('Publisher product no longer links to the checked contents preview')
    if image_source['sha256'] != TITLE_IMAGE_SHA256:
        raise ValueError('Publisher title-preview image changed; visual re-verification required')
    lesson = exactly_one([v for v in catalog if v.get('displayTitle') == '寧靜的音樂會'], 'title correction')
    sources = [dict(source, kind='publisher-title-correction')
               for source in (listing_source, product_source, image_source)]
    correction = {
        'lessonId': lesson['id'], 'sourceTitle': lesson['sourceTitle'],
        'title': lesson['title'], 'displayTitle': lesson['displayTitle'],
        'checkedAt': CHECKED_AT, 'verifiedScope': '出版社115上自修目次第十二課課名，第194頁；未查核課文。',
        'method': 'Visually verified the exact preview image identified by its SHA-256; '
                  'verified product membership in the publisher 115上期 section and preview link.',
        'evidence': [{key: source[key] for key in ('url', 'sha256', 'checkedAt')} for source in sources],
    }
    return correction, sources


def write_json(path, value):
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--offline', action='store_true')
    parser.add_argument('--inventory-only', action='store_true')
    args = parser.parse_args()
    CACHE.mkdir(parents=True, exist_ok=True)
    QA.mkdir(parents=True, exist_ok=True)
    jobs = [(grade, publisher, slug, args.offline)
            for grade in (4, 5) for publisher, slug in PUBLISHERS]
    with ThreadPoolExecutor(max_workers=2) as pool:
        indexes = list(pool.map(lambda args: parse_index(*args), jobs))
    catalog = [lesson for lessons, _, _ in indexes for lesson in lessons]
    if len({v['id'] for v in catalog}) != len(catalog):
        raise ValueError('Duplicate lesson ID across books')
    books = [book for _, book, _ in indexes]
    sources = [dict(source, kind='index') for _, _, source in indexes]
    manifest = {
        'checkedAt': CHECKED_AT, 'authority': '教育部教育百科', 'scope': '115學年度上學期國語四、五年級',
        'sourcePolicy': 'Only IDs listed by the six verified official indexes; no guessed IDs. '
                        'Exports exclude dictionary definitions, examples and textbook passages.',
        'cachePolicy': 'Raw HTML is audit-only and must not be included in shipped runtime artifacts.',
        'reproduceCommand': 'python3 scripts/import-chinese-grades45.py --offline',
        'complete': False, 'books': books, 'sources': sources,
    }
    for book in books:
        print(f'{book["publisher"]} {book["grade"]}上: {book["lessonCount"]}課; '
              f'{book["firstTitle"]} → {book["lastTitle"]}', flush=True)
    if args.inventory_only:
        write_json(QA / 'grade45-source-manifest.json', manifest)
        return
    with ThreadPoolExecutor(max_workers=2) as pool:
        parsed = list(pool.map(lambda lesson: parse_lesson(lesson, args.offline), catalog))
    catalog = [lesson for lesson, _ in parsed]
    sources.extend(source for _, source in parsed)
    correction, correction_sources = title_correction_evidence(catalog, args.offline)
    sources.extend(correction_sources)
    manifest['titleCorrections'] = [correction]
    for book in books:
        vocab = [item for lesson in catalog
                 if lesson['grade'] == book['grade'] and lesson['publisher'] == book['publisher']
                 for item in lesson['vocabulary']]
        book['categoryCounts'] = dict(Counter(item['category'] for item in vocab))
        book['vocabularyCount'] = len(vocab)
        print(f'{book["publisher"]} {book["grade"]}上: {book["categoryCounts"]}', flush=True)
    manifest.update(complete=True, lessonCount=len(catalog),
                    vocabularyCount=sum(len(v['vocabulary']) for v in catalog),
                    exactSourceTitleMatches=len(catalog))
    write_json(QA / 'grade45-catalog-raw.json', catalog)
    write_json(QA / 'grade45-source-manifest.json', manifest)
    source_by_url = {source['url']: source for source in sources}
    coverage = {
        'checkedAt': CHECKED_AT, 'authority': manifest['authority'],
        'scope': manifest['scope'], 'sourcePolicy': manifest['sourcePolicy'],
        'lessonCount': len(catalog), 'vocabularyCount': manifest['vocabularyCount'],
        'exactSourceTitleMatches': len(catalog), 'titleCorrections': [correction],
        'sourceVocabularyHashEncoding': 'SHA-256 of UTF-8 JSON.stringify([{category,text},...]); '
                                        'source order, no whitespace, unescaped Unicode.',
        'books': [],
    }
    for book in books:
        book_lessons = []
        for lesson in catalog:
            if lesson['grade'] != book['grade'] or lesson['publisher'] != book['publisher']:
                continue
            source = source_by_url[lesson['sourceUrl']]
            record = {key: lesson[key] for key in (
                'id', 'number', 'title', 'sourceTitle', 'sourceUrl', 'checkedAt')}
            record.update(sha256=source['sha256'], vocabularyCount=source['vocabularyCount'],
                          categoryCounts=source['categoryCounts'], exactSourceTitleMatch=True,
                          sourceVocabularySha256=source['sourceVocabularySha256'])
            if lesson.get('sourceNote'):
                record['sourceNote'] = lesson['sourceNote']
            if lesson.get('displayTitle'):
                record['displayTitle'] = lesson['displayTitle']
            book_lessons.append(record)
        record = {key: book[key] for key in (
            'grade', 'publisher', 'year', 'semester', 'curriculum', 'edition',
            'volume', 'volumeDerived', 'lessonCount', 'indexUrl',
            'categoryCounts', 'vocabularyCount')}
        record.update(checkedAt=CHECKED_AT,
                      indexSha256=source_by_url[book['indexUrl']]['sha256'], lessons=book_lessons)
        coverage['books'].append(record)
    write_json(ROOT / 'src/chinese-practice/coverage-sources-grades45.json', coverage)
    print(f'Wrote {len(catalog)} verified lessons; {len(sources)} SHA-256 source records.', flush=True)


if __name__ == '__main__':
    main()
