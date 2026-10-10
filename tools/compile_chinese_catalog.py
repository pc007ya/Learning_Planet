"""Compile bounded, publicly checked lesson/phonetic facts; never fetch or guess readings."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / 'src/chinese-practice'
LESSONS = json.loads((DATA / 'lessons-115-upper.json').read_text())
AUDIT = json.loads((DATA / 'sounds-audit.json').read_text())
CONTEXT = json.loads((DATA / 'context-readings.json').read_text())
VALID = re.compile(r'^(?:˙[ㄅ-ㄩ]{1,3}|[ㄅ-ㄩ]{1,3}[ˊˇˋ]?)$')


def candidates(text):
    record = AUDIT.get(text, {})
    if not record.get('toneChecked'):
        return []
    for dictionary in record.get('dictionaries', []):
        values = []
        for reading in dictionary['readings']:
            sounds = reading['sounds']
            # Concise dictionary can show original and speech-sandhi readings together.
            # Retain its original lexical reading only when alternatives differ in 一/不 tones.
            size = len(text)
            if len(sounds) == size * 2 and size > 1:
                original, variation = sounds[:size], sounds[size:]
                if all(a == b or char in '一不' for char, a, b in zip(text, original, variation)):
                    sounds = original
            if len(sounds) == size and all(VALID.fullmatch(sound) for sound in sounds):
                if sounds not in values:
                    values.append(sounds)
        if values:
            return values
    return []


def source(text):
    return AUDIT.get(text, {}).get('sourceUrl', 'https://pedia.cloud.edu.tw/Entry/Detail?title=' + text)


single = {text: values[0][0] for text in AUDIT if len(text) == 1 and len(values := candidates(text)) == 1}
for lesson in LESSONS:
    context = {}
    for item in lesson['vocabulary']:
        if len(item['text']) > 1 and len(values := candidates(item['text'])) == 1:
            for char, sound in zip(item['text'], values[0]):
                context.setdefault(char, {}).setdefault(sound, []).append(item['text'])
    for item in lesson['vocabulary']:
        text = item['text']
        item.pop('soundNote', None)
        exact = candidates(text)
        if len(text) > 1 and len(exact) == 1:
            item['sounds'] = exact[0]
            item['soundSources'] = [source(text)]
        else:
            sounds, links, notes = [], [], []
            for char in text:
                available = candidates(char)
                contextual = context.get(char, {})
                if len(available) == 1:
                    sound = available[0][0]
                    links.append(source(char))
                elif len(contextual) == 1:
                    sound, terms = next(iter(contextual.items()))
                    links.extend(source(term) for term in terms)
                    notes.append(f'「{char}」依本課語詞「{terms[0]}」讀 {sound}。')
                else:
                    sound = ''
                    links.append(source(char))
                    choices = '／'.join(value[0] for value in available)
                    notes.append(f'「{char}」字音待確認' + (f'（官方音讀：{choices}）' if choices else '（官方尚無可用注音）') + '。')
                sounds.append(sound)
            item['sounds'] = sounds
            item['soundSources'] = list(dict.fromkeys(links))
            if notes:
                item['soundNote'] = ''.join(notes)
        scoped = CONTEXT['scopedReadings'].get(lesson['id'], {}).get(text)
        if scoped:
            for char, sound in zip(text, scoped):
                if [sound] not in candidates(char):
                    raise ValueError(f'Unverified contextual reading: {char} {sound}')
            item['sounds'] = scoped
            item['soundSources'] = list(dict.fromkeys(source(char) for char in text))
            item['soundNote'] = CONTEXT['specialNotes'].get(lesson['id'], '編輯依本課課名及語詞語義選音；各字音值已核官方來源，教師可依課文覆核。')
        elif '' in item['sounds']:
            edited = []
            for index, char in enumerate(text):
                chosen = CONTEXT['commonModernReadings'].get(char)
                if not item['sounds'][index] and chosen:
                    if [chosen] not in candidates(char):
                        raise ValueError(f'Unverified modern reading: {char} {chosen}')
                    item['sounds'][index] = chosen
                    edited.append(f'「{char}」讀 {chosen}')
            if edited:
                unresolved = [char for char, sound in zip(text, item['sounds']) if not sound]
                item['soundNote'] = '編輯依本課現代日常詞義選音：' + '、'.join(edited) + '；音值已核官方，教師可依課文覆核。' + (f'仍待確認：{"、".join(unresolved)}。' if unresolved else '')
    # Explicit, previously verified contextual readings from the approved two-lesson MVP.
    if lesson['id'] in ('0102011150101', '0102011150102'):
        known = {'上': 'ㄕㄤˋ', '車': 'ㄔㄜ', '地': 'ㄉㄧˋ', '子': '˙ㄗ'}
        for item in lesson['vocabulary']:
            if len(item['text']) == 1 and item['text'] in known:
                item['sounds'] = [known[item['text']]]
                item['soundNote'] = '依已核本課語詞讀音；「子」在「車子」讀輕聲，單字本音 ㄗˇ。' if item['text'] == '子' else '依已核本課語詞讀音。'
                item['soundSources'] = [source('車子' if item['text'] in '車子' else item['text'])]
    if lesson['id'] == '0101031150105':
        lesson['sourceNote'] = '教育百科索引與課頁均作「為梨花撐傘用」；保留官方表題，疑似多出「用」字，出版社課名待核。'

# Keep the final, narrowly evidenced review after all general editorial rules.
# Pending phrase overrides intentionally clear unsafe single-character defaults.
review = json.loads((DATA / 'phonetics-targeted-review.json').read_text())
for entry in review['entries']:
    if 'override' not in entry:
        continue
    item = next(item for lesson in LESSONS if lesson['id'] == entry['lessonId']
                for item in lesson['vocabulary']
                if item['text'] == entry['text'] and item['category'] == entry['category'])
    sounds = entry['override']['sounds']
    if len(sounds) != len(entry['text']) or any(sound and [sound] not in candidates(char)
                                               for char, sound in zip(entry['text'], sounds)):
        raise ValueError(f"Unverified targeted reading: {entry['text']}")
    item.update(entry['override'])
    item['soundSources'] = list(dict.fromkeys(entry['dictionarySources'] +
                                [evidence['url'] for evidence in entry.get('evidence', [])]))

(DATA / 'lessons-115-upper.json').write_text(json.dumps(LESSONS, ensure_ascii=False, indent=2) + '\n')
(DATA / 'sounds-single.json').write_text(json.dumps(single, ensure_ascii=False, indent=2) + '\n')
report = {'checkedAt': '2026-10-09', 'auditedTerms': len(AUDIT), 'singleUnambiguous': len(single),
          'pendingEntries': [{'lessonId': lesson['id'], 'title': lesson['title'],
                              'category': item['category'], 'text': item['text'], 'note': item.get('soundNote', '')}
                             for lesson in LESSONS for item in lesson['vocabulary'] if '' in item['sounds']],
          'targetedReview': {'file': 'phonetics-targeted-review.json', 'originalPendingCount': len(review['entries']),
                             'confirmedCount': review['confirmedCount'], 'pendingCount': review['pendingCount']},
          'lookupGaps': [text for text, record in AUDIT.items() if record.get('error') or not candidates(text)]}
(DATA / 'phonetics-status.json').write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n')
print(f"{len(LESSONS)} lessons, {len(AUDIT)} source terms, {len(report['pendingEntries'])} entries require contextual confirmation")
