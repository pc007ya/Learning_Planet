"""Offline, non-mutating importer contract tests using tiny synthetic HTML."""

import importlib.util
from html import escape
from pathlib import Path
import unittest
from unittest.mock import patch

SPEC = importlib.util.spec_from_file_location(
    'import_chinese_grades45', Path(__file__).resolve().parents[1] / 'scripts/import-chinese-grades45.py')
IMPORTER = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(IMPORTER)

INDEX_URL = ('https://pedia.cloud.edu.tw/Bookmark/Textword?'
             'category=%E5%9C%8B%E8%AA%9E&year=115_1&degree=4&press=%E5%8D%97%E4%B8%80%E7%89%88')
LESSON_URL = 'https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0102041150101'
TITLE = '第一課：窗口邊的臺灣欒樹'
INDEX_CELL = f'''<td class="textname" id="0102041150101">
<strong>{TITLE}</strong><span>115學年度 | 四年級 | 國語 | 南一版</span></td>'''
INDEX = f'''<html><head><link rel="canonical" href="{escape(INDEX_URL, quote=True)}"></head><body>
<input id="categoryValue" value="國語"><input id="semesterValue" value="115_1">
<input id="degreeValue" value="4"><input id="pressValue" value="南一版">
<table><tr>{INDEX_CELL}</tr></table>
<script>const link = '/Bookmark/TCollection?TextNameId=';</script></body></html>'''
VOCABULARY_ROW = '''<tr><td class="type"><span>生字</span></td>
<td class="word_class"><a href="/Entry/Detail?title=%E6%88%B6">戶</a></td>
<td class="desc">SYNTHETIC_DESCRIPTION_MUST_NOT_BE_EXPORTED</td></tr>'''
LESSON = f'''<html><head><link rel="canonical" href="{LESSON_URL}"></head><body>
<h2><img src="icon.png">生字詞彙表：{TITLE}</h2><div class="wording">此標籤共 1 筆詞條</div>
<table><tbody>{VOCABULARY_ROW}</tbody></table></body></html>'''


def fake_source(url):
    return {'url': url, 'cacheFile': 'output/sources/synthetic-test.html',
            'sha256': '0' * 64, 'bytes': 1, 'checkedAt': IMPORTER.CHECKED_AT}


def parse_index(html=INDEX):
    with patch.object(IMPORTER, 'fetch', return_value=(html, fake_source(INDEX_URL))):
        return IMPORTER.parse_index(4, '南一', 'nani', True)


def parse_lesson(html=LESSON):
    lesson = parse_index()[0][0]
    with patch.object(IMPORTER, 'fetch', return_value=(html, fake_source(LESSON_URL))):
        return IMPORTER.parse_lesson(lesson, True)


class ImporterContractTests(unittest.TestCase):
    def test_minimal_verified_source_passes_without_description_export(self):
        lesson, source = parse_lesson()
        self.assertEqual(lesson['id'], '0102041150101')
        self.assertEqual(lesson['title'], '窗口邊的臺灣欒樹')
        self.assertEqual(lesson['sourceTitle'], TITLE)
        self.assertEqual(lesson['vocabulary'], [{'category': '生字', 'text': '戶'}])
        self.assertEqual(source['categoryCounts'], {'生字': 1})
        self.assertTrue(source['exactTitleMatch'])
        self.assertNotIn('SYNTHETIC_DESCRIPTION', str((lesson, source)))
        self.assertNotIn('sounds', lesson['vocabulary'][0])

    def test_wrong_selected_year_is_rejected(self):
        with self.assertRaisesRegex(ValueError, 'semesterValue mismatch'):
            parse_index(INDEX.replace('id="semesterValue" value="115_1"',
                                      'id="semesterValue" value="114_1"'))

    def test_wrong_selected_grade_is_rejected(self):
        with self.assertRaisesRegex(ValueError, 'degreeValue mismatch'):
            parse_index(INDEX.replace('id="degreeValue" value="4"', 'id="degreeValue" value="5"'))

    def test_wrong_selected_publisher_is_rejected(self):
        with self.assertRaisesRegex(ValueError, 'pressValue mismatch'):
            parse_index(INDEX.replace('id="pressValue" value="南一版"', 'id="pressValue" value="翰林版"'))

    def test_wrong_row_year_grade_publisher_are_rejected(self):
        for old, new in [('115學年度', '114學年度'), ('四年級', '五年級'),
                         ('國語 | 南一版', '國語 | 康軒版')]:
            with self.subTest(old=old), self.assertRaisesRegex(ValueError, 'Index metadata mismatch'):
                parse_index(INDEX.replace(old, new))

    def test_wrong_index_canonical_is_rejected(self):
        with self.assertRaisesRegex(ValueError, 'Canonical mismatch'):
            parse_index(INDEX.replace('year=115_1', 'year=114_1'))

    def test_wrong_lesson_canonical_is_rejected(self):
        with self.assertRaisesRegex(ValueError, 'Canonical mismatch'):
            parse_lesson(LESSON.replace('TextNameId=0102041150101', 'TextNameId=other'))

    def test_index_lesson_title_mismatch_is_rejected(self):
        with self.assertRaisesRegex(ValueError, 'Exact index/lesson title mismatch'):
            parse_lesson(LESSON.replace('窗口邊的臺灣欒樹', '錯誤課名'))

    def test_empty_category_is_rejected(self):
        with self.assertRaisesRegex(ValueError, 'Empty category or headword'):
            parse_lesson(LESSON.replace('<span>生字</span>', '<span></span>'))

    def test_unsupported_category_is_rejected(self):
        with self.assertRaisesRegex(ValueError, 'Unsupported category'):
            parse_lesson(LESSON.replace('<span>生字</span>', '<span>未核類別</span>'))

    def test_duplicate_index_id_is_rejected(self):
        with self.assertRaisesRegex(ValueError, 'duplicate lesson index'):
            parse_index(INDEX.replace(INDEX_CELL, INDEX_CELL + INDEX_CELL))

    def test_duplicate_category_headword_is_rejected(self):
        html = LESSON.replace(VOCABULARY_ROW, VOCABULARY_ROW + VOCABULARY_ROW).replace('共 1 筆', '共 2 筆')
        with self.assertRaisesRegex(ValueError, 'Duplicate category/headword'):
            parse_lesson(html)

    def test_headword_link_mismatch_is_rejected(self):
        with self.assertRaisesRegex(ValueError, 'Headword/link mismatch'):
            parse_lesson(LESSON.replace('title=%E6%88%B6', 'title=wrong'))

    def test_declared_word_count_mismatch_is_rejected(self):
        with self.assertRaisesRegex(ValueError, 'Declared/parsed word count mismatch'):
            parse_lesson(LESSON.replace('共 1 筆', '共 2 筆'))

    def test_empty_index_is_rejected(self):
        with self.assertRaisesRegex(ValueError, 'Empty or duplicate lesson index'):
            parse_index(INDEX.replace(INDEX_CELL, ''))

    def test_missing_official_lesson_link_template_is_rejected(self):
        with self.assertRaisesRegex(ValueError, 'Official lesson link template missing'):
            parse_index(INDEX.replace('/Bookmark/TCollection?TextNameId=', '/invented/route?id='))


if __name__ == '__main__':
    unittest.main()
