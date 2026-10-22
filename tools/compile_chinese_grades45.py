#!/usr/bin/env python3
"""Fetch auditable MOE phonetic facts and compile ONLY the 115 upper grades 4–5.

The legacy cache supplies dictionary facts, never contextual/editorial overrides.
DOM phonetic tone classes are parsed explicitly; multiple labels remain separate.
Raw official pages stay under output/sources/phonetics and are not application data.
"""
import argparse
import concurrent.futures
import copy
from datetime import datetime, timezone
import hashlib
import json
from pathlib import Path
import re
import time
import urllib.error
import urllib.parse
import urllib.request

from lxml import html

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / 'src/chinese-practice'
RAW = ROOT / 'output/qa/grade45-catalog-raw.json'
SNAPSHOTS = ROOT / 'output/sources/phonetics'
CACHE = DATA / 'sounds-audit-grades45.json'
TODAY = datetime.now(timezone.utc).date().isoformat()
VALID = re.compile(r'^(?:˙[ㄅ-ㄩ]{1,3}|[ㄅ-ㄩ]{1,3}[ˊˇˋ]?)$')
HAN = re.compile(r'^[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\U00020000-\U0003134f]$')
TONE = re.compile(r'(?:^|\s)tone-([0-4])-([1-3])(?:\s|$)')
ORDER = ('mini_dict', 'dic_concise', 'dic_revised')
DICT_HOST = {'mini_dict': 'dict.mini.moe.edu.tw', 'dic_concise': 'dict.concised.moe.edu.tw', 'dic_revised': 'dict.revised.moe.edu.tw'}
PHONETIC = './/*[contains(concat(" ",normalize-space(@class)," ")," zhuyin-h-item ")]'


def read_json(path, default=None):
    return json.loads(path.read_text()) if path.exists() else default


def write_json(path, obj):
    path.parent.mkdir(parents=True, exist_ok=True)
    temp = path.with_suffix(path.suffix + '.tmp')
    temp.write_text(json.dumps(obj, ensure_ascii=False, indent=2) + '\n')
    temp.replace(path)


def source_url(text):
    return 'https://pedia.cloud.edu.tw/Entry/Detail?title=' + urllib.parse.quote(text)


def sound_from_node(node):
    """CSS controls the tone, including the neutral-tone dot above the syllable."""
    match = TONE.search(node.get('class', ''))
    bottoms = node.xpath('./span[contains(concat(" ",normalize-space(@class)," ")," bottom ")]')
    if not match or len(bottoms) != 1:
        raise ValueError('Unknown official phonetic DOM or tone class')
    letters = ''.join(bottoms[0].itertext()).strip()
    tone, size = match.groups()
    if not re.fullmatch('[ㄅ-ㄩ]{1,3}', letters) or len(letters) != int(size):
        raise ValueError(f'Invalid phonetic symbols or CSS length: {letters!r}')
    sound = ('˙' + letters) if tone == '0' else letters + {'1': '', '2': 'ˊ', '3': 'ˇ', '4': 'ˋ'}[tone]
    if not VALID.fullmatch(sound):
        raise ValueError(f'Invalid reconstructed sound: {sound!r}')
    return sound


def parse_official(text, payload):
    root = html.fromstring(payload, parser=html.HTMLParser(encoding='utf-8'))
    headwords = root.xpath('//input[@id="searchInput"]/@value')
    if headwords != [text]:
        raise ValueError(f'Official headword mismatch: {headwords!r}')
    dictionaries = []
    for name in ORDER:
        sections = root.xpath('//*[@id=$id]', id=name)
        if len(sections) > 1:
            raise ValueError(f'Duplicate dictionary section: {name}')
        if not sections:
            continue
        section = sections[0]
        readings = []
        # Restrict to labeled phonetic rows. Never collect ruby text in definitions.
        for row in section.xpath('.//tr[td[1][normalize-space(.)="注音："]]'):
            cells = row.xpath('./td[2]')
            if len(cells) != 1:
                raise ValueError(f'Missing phonetic cell: {name}')
            cell = cells[0]
            labels = cell.xpath('./label')
            if not labels and cell.xpath(PHONETIC):
                raise ValueError(f'Unlabeled phonetic group: {name}')
            nodes_in_labels = sum(len(label.xpath(PHONETIC)) for label in labels)
            if nodes_in_labels != len(cell.xpath(PHONETIC)):
                raise ValueError(f'Phonetics outside labels: {name}')
            tables = row.xpath('ancestor::table[1]')
            links = tables[0].xpath('.//tr[td[1][contains(.,"資料來源")]]//a/@href') if tables else []
            links = [u for u in links if urllib.parse.urlsplit(u).hostname == DICT_HOST[name]]
            if not links:
                links = [u for u in section.xpath('.//a/@href') if urllib.parse.urlsplit(u).hostname == DICT_HOST[name]]
            if len(set(links)) != 1:
                raise ValueError(f'Unclear dictionary source link: {name}, {links!r}')
            for label in labels:
                nodes = label.xpath(PHONETIC)
                if not nodes:
                    continue
                sounds = [sound_from_node(n) for n in nodes]
                sounds = align_phonetics(text, sounds)
                reading = {'sounds': sounds, 'sourceUrl': links[0]}
                previous = label.getprevious()
                if previous is not None and previous.tag in ('b', 'span'):
                    qualifier = ''.join(previous.itertext()).strip()
                    if qualifier and len(qualifier) <= 20:
                        reading['qualifier'] = qualifier
                if reading not in readings:
                    readings.append(reading)
        if readings:
            dictionaries.append({'dictionary': name, 'readings': readings})
    record = {'text': text, 'sourceUrl': source_url(text), 'checkedAt': TODAY,
              'toneChecked': True, 'parserVersion': 'official-dom-tones-v1',
              'dictionaries': dictionaries}
    if not dictionaries:
        record['lookupStatus'] = 'no_official_mandarin_reading'
    return record


def snapshot_path(text):
    # Human-readable short headwords, with a hash suffix guarding filesystem aliases.
    safe = re.sub(r'[^\w\u3400-\u9fff-]', '_', text[:30])
    return SNAPSHOTS / (safe + '-' + hashlib.sha256(text.encode()).hexdigest()[:10] + '.html')


def fetch_one(text):
    path = snapshot_path(text)
    try:
        if path.exists():
            payload = path.read_bytes()
        elif (SNAPSHOTS / (text + '.html')).exists():
            payload = (SNAPSHOTS / (text + '.html')).read_bytes()
            path.write_bytes(payload)
        else:
            for attempt in range(3):
                try:
                    req = urllib.request.Request(source_url(text), headers={'User-Agent': 'Mozilla/5.0 (educational phonetic verification)'})
                    with urllib.request.urlopen(req, timeout=25) as response:
                        payload = response.read()
                    path.write_bytes(payload)
                    break
                except (TimeoutError, urllib.error.URLError, ConnectionError) as error:
                    # HTTP access denials are not bypassed or retried.
                    if isinstance(error, urllib.error.HTTPError) and error.code in (401, 403):
                        raise
                    if attempt == 2:
                        raise
                    time.sleep(1 + attempt)
        record = parse_official(text, payload)
        record['snapshotSha256'] = hashlib.sha256(payload).hexdigest()
        return text, record
    except Exception as error:
        return text, {'text': text, 'sourceUrl': source_url(text), 'checkedAt': TODAY,
                      'toneChecked': False, 'dictionaries': [], 'error': f'{type(error).__name__}: {error}'}


def reusable(record, text):
    """Reuse only bounded dictionary facts with valid, non-concatenated syllables."""
    return (record.get('toneChecked') and not record.get('error') and
            all(valid_aligned(text, r['sounds'])
                for d in record.get('dictionaries', []) for r in d.get('readings', [])))


def dictionary_candidates(audit, text):
    record = audit.get(text, {})
    if not record.get('toneChecked'):
        return [], None
    for name in ORDER:
        values = []
        for dictionary in record.get('dictionaries', []):
            if dictionary['dictionary'] != name:
                continue
            for reading in dictionary['readings']:
                sounds = reading['sounds']
                if not valid_aligned(text, sounds):
                    raise ValueError(f'Invalid audited reading: {text} {sounds}')
                if sounds not in values:
                    values.append(sounds)
        if values:
            return values, name
    return [], None


def is_han(char):
    return bool(HAN.fullmatch(char))


def valid_aligned(text, sounds):
    return len(sounds) == len(text) and all(
        bool(VALID.fullmatch(sound)) if is_han(char) else sound == ''
        for char, sound in zip(text, sounds))


def align_phonetics(text, syllables):
    # Official name/word entries may omit punctuation from their phonetic DOM.
    if len(syllables) != sum(is_han(char) for char in text):
        raise ValueError(f'Phonetic/headword Han-length mismatch: {text} {syllables!r}')
    sounds = iter(syllables)
    aligned = [next(sounds) if is_han(char) else '' for char in text]
    if not valid_aligned(text, aligned):
        raise ValueError(f'Invalid aligned phonetics: {text} {aligned!r}')
    return aligned


def character_candidates(audit, char):
    # Standalone characters must be unambiguous across ALL three official sources.
    # Historical/surname readings are not silently discarded as modern defaults.
    record = audit.get(char, {})
    if not record.get('toneChecked') or not is_han(char):
        return []
    sounds = {r['sounds'][0] for d in record.get('dictionaries', [])
              if d.get('dictionary') in ORDER for r in d.get('readings', [])
              if len(r['sounds']) == 1 and VALID.fullmatch(r['sounds'][0])}
    return [[sound] for sound in sorted(sounds)]


def record_links(audit, text):
    record = audit.get(text, {})
    return [record.get('sourceUrl', source_url(text))]


def compile_lessons(raw, audit):
    lessons = copy.deepcopy(raw)
    counts = {'exactWord': 0, 'unambiguousCharacter': 0, 'sameLessonContext': 0,
              'composedCharacters': 0, 'multipleReadings': 0, 'pending': 0}
    pending = []
    for lesson in lessons:
        if lesson['grade'] not in (4, 5) or lesson['year'] != 115 or lesson['semester'] != '上':
            raise ValueError(f'Out-of-scope lesson: {lesson.get("id")}')
        context = {}
        for item in lesson['vocabulary']:
            text = item['text']
            values, _ = dictionary_candidates(audit, text)
            if len(text) > 1 and len(values) == 1:
                for char, sound in zip(text, values[0]):
                    if is_han(char):
                        context.setdefault(char, {}).setdefault(sound, []).append(text)
        for item in lesson['vocabulary']:
            text = item['text']
            item.pop('soundNote', None)
            values, dictionary = dictionary_candidates(audit, text)
            if len(text) == 1:
                values = character_candidates(audit, text)
                dictionary = 'all_official_dictionaries' if values else None
            links, notes = [], []
            separators = list(dict.fromkeys(c for c in text if not is_han(c)))
            if separators:
                notes.append('「' + '、'.join(separators) + '」為姓名或文字分隔符，不作注音或國字練習。')
            if len(text) > 1 and len(values) == 1:
                sounds = values[0]
                links = record_links(audit, text)
                counts['exactWord'] += 1
                method = 'exact_official_word'
            elif len(text) > 1 and len(values) > 1:
                # Keep only identical slots; never silently choose a multi-reading word.
                sounds = [slot[0] if len(set(slot)) == 1 else '' for slot in zip(*values)]
                links = record_links(audit, text)
                notes.append('官方整詞有多組讀音，僅保留各讀音相同的音節；歧異音節待本課語義確認，不以單字音覆蓋。')
                counts['multipleReadings'] += 1
                method = 'pending_multiple_word_readings'
            else:
                sounds = []
                if len(text) > 1:
                    notes.append('官方未有可用整詞注音；以下僅以已核單字音組合，非出版社標注，仍需依課文覆核。')
                    counts['composedCharacters'] += 1
                    method = 'composed_audited_characters'
                else:
                    method = 'unambiguous_official_character'
                for char in text:
                    if not is_han(char):
                        sounds.append('')
                        continue
                    available = character_candidates(audit, char)
                    contextual = context.get(char, {})
                    if len(available) == 1:
                        sound = available[0][0]
                        links.extend(record_links(audit, char))
                        counts['unambiguousCharacter'] += 1
                    elif len(text) == 1 and len(contextual) == 1:
                        sound, terms = next(iter(contextual.items()))
                        links.extend(u for term in terms for u in record_links(audit, term))
                        notes.append(f'「{char}」依本課唯一已核語詞音「{terms[0]}」讀 {sound}；編輯選音，非出版社印刷注音，非跨課預設。')
                        counts['sameLessonContext'] += 1
                        if len(text) == 1:
                            method = 'same_lesson_unambiguous_phrase'
                    else:
                        sound = ''
                        links.extend(record_links(audit, char))
                        choices = '／'.join(v[0] for v in available)
                        notes.append(f'「{char}」字音待確認' + (f'（官方音讀：{choices}）' if choices else '（官方尚無可用注音）') + '。')
                    sounds.append(sound)
            if len(text) == 1 and is_han(text) and not sounds[0]:
                method = 'pending_character_reading'
            item['sounds'] = list(sounds)
            item['soundSources'] = list(dict.fromkeys(links))
            item['soundMethod'] = method
            if notes:
                item['soundNote'] = ''.join(notes)
            if len(item['sounds']) != len(text) or any(
                    (s and not VALID.fullmatch(s)) if is_han(c) else bool(s)
                    for c, s in zip(text, item['sounds'])):
                raise ValueError(f'Invalid compiled sounds: {lesson["id"]} {text}')
            if any(is_han(char) and not sound for char, sound in zip(text, sounds)):
                counts['pending'] += 1
                pending.append({'lessonId': lesson['id'], 'title': lesson['title'],
                                'category': item['category'], 'text': text,
                                'sounds': list(sounds), 'note': item.get('soundNote', ''),
                                'method': method, 'preferredDictionary': dictionary,
                                'candidateReadings': values,
                                'sourceUrls': item['soundSources']})
    return lessons, counts, pending


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--raw', type=Path, default=RAW)
    ap.add_argument('--fetch', action='store_true', help='Fetch new/invalid official dictionary facts, with local snapshots.')
    ap.add_argument('--retry-errors', action='store_true')
    ap.add_argument('--workers', type=int, default=4)
    ap.add_argument('--terms', nargs='*', help='Fetch only these lookup terms, then exit. Useful for verified parser samples.')
    args = ap.parse_args()
    SNAPSHOTS.mkdir(parents=True, exist_ok=True)
    if args.terms is not None:
        print(json.dumps([fetch_one(term)[1] for term in args.terms], ensure_ascii=False, indent=2))
        return
    raw = read_json(args.raw)
    if raw is None:
        raise SystemExit(f'Raw catalog not ready: {args.raw}')
    if isinstance(raw, dict):
        raw = raw['lessons']
    terms = sorted({item['text'] for lesson in raw for item in lesson['vocabulary'] if any(is_han(c) for c in item['text'])} |
                   {char for lesson in raw for item in lesson['vocabulary'] for char in item['text'] if is_han(char)}, key=lambda t:(len(t), t))
    old = read_json(DATA / 'sounds-audit.json', {})
    existing = read_json(CACHE, {})
    audit, pending_terms = {}, []
    reused = 0
    for term in terms:
        if term in existing and (reusable(existing[term], term) or (existing[term].get('error') and not args.retry_errors)):
            audit[term] = existing[term]
        elif term in old and reusable(old[term], term):
            audit[term] = {k: copy.deepcopy(old[term][k]) for k in ('text', 'sourceUrl', 'checkedAt', 'toneChecked', 'dictionaries') if k in old[term]}
            audit[term]['reusedFrom'] = 'sounds-audit.json: dictionary facts only; no lesson/context overrides'
            reused += 1
        else:
            pending_terms.append(term)
    print(f'{len(raw)} lessons, {len(terms)} required terms, {reused} reused official facts, {len(pending_terms)} lookups needed', flush=True)
    write_json(CACHE, audit)
    started = time.monotonic()
    if args.fetch and pending_terms:
        with concurrent.futures.ThreadPoolExecutor(max_workers=max(1, min(args.workers,4))) as pool:
            futures = {pool.submit(fetch_one, term): term for term in pending_terms}
            for completed, future in enumerate(concurrent.futures.as_completed(futures), 1):
                term, record = future.result()
                audit[term] = record
                if completed % 25 == 0 or completed == len(pending_terms):
                    write_json(CACHE, audit)
                    failed = sum(bool(v.get('error')) for v in audit.values())
                    elapsed = time.monotonic() - started
                    print(f'Fetched {completed}/{len(pending_terms)}, errors {failed}, elapsed {elapsed:.0f}s, latest {term}', flush=True)
    audit = {term: audit[term] for term in terms if term in audit}
    write_json(CACHE, audit)
    lessons, counts, pending = compile_lessons(raw, audit)
    legacy_single = read_json(DATA / 'sounds-single.json', {})
    singles = {t: values[0][0] for t in terms if len(t) == 1 and t not in legacy_single
               and len(values := character_candidates(audit,t)) == 1}
    report = {'checkedAt': TODAY, 'scope': '115學年度上學期，康軒、南一、翰林，四年級與五年級；不改動一至三年級',
              'lessonCount': len(lessons), 'vocabularyEntryCount': sum(len(l['vocabulary']) for l in lessons),
              'auditedTerms': len(audit), 'requiredTerms': len(terms), 'singleNewUnambiguous': len(singles),
              'interim': len(audit) < len(terms),
              'unfetchedTerms': [term for term in terms if term not in audit],
              'lookupsComplete': all(term in audit for term in terms),
              'evidencePolicy': ['整詞讀音優先國語小字典，其次簡編本，再次重編本；保留每部字典全部候選音，不取多音第一組。',
                                 'CSS tone-0/1/2/3/4 明確還原輕聲/一聲/二聲/三聲/四聲；原始 HTML 僅存 output，不打包入應用。',
                                 '沿用舊快取僅限已核字典音值，無跨課語境、commonModernReadings 或舊課特例。',
                                 '整詞多音歧義保留空槽；單字取三部官方字典候選聯集，僅全部候選唯一或本課唯一已核語詞支持。',
                                 '姓名等分隔符保留空音槽以對齊原詞，不算待核字、不納入國字練習或單字查音缺口。',
                                 '缺整詞時只組已核字音，標示非出版社注音；未核音不供語音播放。'],
              'methods': counts, 'pendingEntries': pending,
              'lookupGaps': [t for t in terms if t not in audit or audit[t].get('error') or not dictionary_candidates(audit,t)[0]],
              'lookupErrors': {t:v['error'] for t,v in audit.items() if v.get('error')}}
    write_json(DATA / 'lessons-115-upper-grades45.json', lessons)
    write_json(DATA / 'sounds-single-grades45.json', singles)
    write_json(DATA / 'phonetics-status-grades45.json', report)
    print(f'Compiled {len(lessons)} lessons, {report["vocabularyEntryCount"]} entries; pending {len(pending)}, lookup gaps {len(report["lookupGaps"])}, errors {len(report["lookupErrors"])}', flush=True)


if __name__ == '__main__':
    main()
