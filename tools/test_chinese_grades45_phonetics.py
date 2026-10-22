"""Offline regressions for grade-4/5 official-tone parsing and conservative compilation."""
import copy
import unittest
from lxml import html
from compile_chinese_grades45 import sound_from_node, parse_official, reusable, compile_lessons


def fact(text, readings):
    return {'text': text, 'sourceUrl': 'https://pedia.cloud.edu.tw/Entry/Detail?title=' + text,
            'toneChecked': True, 'dictionaries': [{'dictionary': 'mini_dict',
            'readings': [{'sounds': r, 'sourceUrl': 'https://dict.mini.moe.edu.tw/example'} for r in readings]}]}


def lesson(items, identifier='test'):
    return {'id': identifier, 'year': 115, 'semester': '上', 'grade': 4, 'title': '測試',
            'vocabulary': [{'category': '生字' if len(t) == 1 else '語詞', 'text': t} for t in items]}


class PhoneticTests(unittest.TestCase):
    def test_every_css_tone(self):
        for tone, expected in enumerate(['˙ㄅㄚ', 'ㄅㄚ', 'ㄅㄚˊ', 'ㄅㄚˇ', 'ㄅㄚˋ']):
            node = html.fromstring(f'<div class="zhuyin-h-item tone-{tone}-2"><span class="top"></span><span class="bottom">ㄅㄚ</span></div>')
            self.assertEqual(sound_from_node(node), expected)

    def test_invalid_css_or_symbol_length_rejected(self):
        for css in ['tone-5-2', 'tone-4-1', 'missing-tone']:
            with self.assertRaises(ValueError):
                sound_from_node(html.fromstring(f'<div class="zhuyin-h-item {css}"><span class="bottom">ㄅㄚ</span></div>'))

    def test_parser_keeps_labels_and_excludes_definitions(self):
        payload = '''<html><input id="searchInput" value="長"/><div id="dic_concise"><table>
        <tr><td><b>注音：</b></td><td>
        <label><div class="zhuyin-h-item tone-2-2"><span class="bottom">ㄔㄤ</span></div></label>
        <b>(又音)</b><label><div class="zhuyin-h-item tone-3-2"><span class="bottom">ㄓㄤ</span></div></label>
        </td></tr><tr><td>解釋：</td><td><ruby>長<rt>ㄔㄤˊ</rt></ruby>不複製此定義。</td></tr>
        <tr><td>資料來源：</td><td><a href="https://dict.concised.moe.edu.tw/dictView.jsp?ID=test">source</a></td></tr>
        </table></div></html>'''.encode()
        result = parse_official('長', payload)
        readings = result['dictionaries'][0]['readings']
        self.assertEqual([r['sounds'] for r in readings], [['ㄔㄤˊ'], ['ㄓㄤˇ']])
        self.assertEqual(readings[1]['qualifier'], '(又音)')
        self.assertNotIn('不複製', str(result))
        with self.assertRaises(ValueError):
            parse_official('錯', payload)

    def test_parser_aligns_name_separator_with_empty_slot(self):
        nodes = ''.join(f'<div class="zhuyin-h-item tone-{tone}-{len(letters)}"><span class="bottom">{letters}</span></div>'
                        for tone, letters in [(3,'ㄏㄞ'),(2,'ㄌㄨㄣ'),(3,'ㄎㄞ'),(4,'ㄌㄜ')])
        payload = f'<input id="searchInput" value="海倫‧凱勒"><div id="dic_revised"><table><tr><td>注音：</td><td><label>{nodes}</label></td></tr><tr><td>資料來源：</td><td><a href="https://dict.revised.moe.edu.tw/dictView.jsp?ID=test">source</a></td></tr></table></div>'.encode()
        result = parse_official('海倫‧凱勒', payload)
        self.assertEqual(result['dictionaries'][0]['readings'][0]['sounds'], ['ㄏㄞˇ','ㄌㄨㄣˊ','','ㄎㄞˇ','ㄌㄜˋ'])
        self.assertTrue(reusable(result, '海倫‧凱勒'))
        compiled, _, pending = compile_lessons([lesson(['海倫‧凱勒'])], {'海倫‧凱勒': result})
        self.assertEqual(compiled[0]['vocabulary'][0]['sounds'], ['ㄏㄞˇ','ㄌㄨㄣˊ','','ㄎㄞˇ','ㄌㄜˋ'])
        self.assertEqual(pending, [])

    def test_legacy_merged_reading_not_reusable(self):
        self.assertFalse(reusable(fact('尾巴', [['ㄨㄟˇ', 'ㄅㄚ', 'ㄨㄟˇ', '˙ㄅㄚ']]), '尾巴'))
        self.assertTrue(reusable(fact('日', [['ㄖˋ']]), '日'))

    def test_multi_reading_word_cannot_fall_back_to_characters(self):
        audit = {'角色': fact('角色', [['ㄐㄩㄝˊ','ㄙㄜˋ'], ['ㄐㄧㄠˇ','ㄙㄜˋ']]),
                 '角': fact('角', [['ㄐㄧㄠˇ']]), '色': fact('色', [['ㄙㄜˋ']])}
        result, _, pending = compile_lessons([lesson(['角色'])], audit)
        self.assertEqual(result[0]['vocabulary'][0]['sounds'], ['', 'ㄙㄜˋ'])
        self.assertEqual(len(pending), 1)

    def test_context_is_same_lesson_only(self):
        audit = {'長': fact('長', [['ㄔㄤˊ'], ['ㄓㄤˇ']]), '長大': fact('長大', [['ㄓㄤˇ','ㄉㄚˋ']])}
        raw = [lesson(['長','長大'], 'a'), lesson(['長'], 'b')]
        original = copy.deepcopy(raw)
        result, _, pending = compile_lessons(raw, audit)
        self.assertEqual(result[0]['vocabulary'][0]['sounds'], ['ㄓㄤˇ'])
        self.assertEqual(result[1]['vocabulary'][0]['sounds'], [''])
        self.assertEqual(result[1]['vocabulary'][0]['soundMethod'], 'pending_character_reading')
        self.assertIn('本課', result[0]['vocabulary'][0]['soundNote'])
        self.assertEqual(raw, original)
        self.assertEqual(len(pending), 1)

    def test_conflicting_context_remains_pending(self):
        audit = {'長': fact('長', [['ㄔㄤˊ'], ['ㄓㄤˇ']]), '長大': fact('長大', [['ㄓㄤˇ','ㄉㄚˋ']]),
                 '長短': fact('長短', [['ㄔㄤˊ','ㄉㄨㄢˇ']])}
        result, _, _ = compile_lessons([lesson(['長','長大','長短'])], audit)
        self.assertEqual(result[0]['vocabulary'][0]['sounds'], [''])

    def test_no_exact_phrase_composes_only_verified_slots(self):
        audit = {'花': fact('花', [['ㄏㄨㄚ']]), '長': fact('長', [['ㄔㄤˊ'], ['ㄓㄤˇ']])}
        result, _, pending = compile_lessons([lesson(['花長'])], audit)
        self.assertEqual(result[0]['vocabulary'][0]['sounds'], ['ㄏㄨㄚ', ''])
        self.assertIn('非出版社', result[0]['vocabulary'][0]['soundNote'])
        self.assertEqual(len(pending), 1)

    def test_context_does_not_fill_another_phrase(self):
        audit = {'長': fact('長', [['ㄔㄤˊ'], ['ㄓㄤˇ']]), '長大': fact('長大', [['ㄓㄤˇ','ㄉㄚˋ']]),
                 '花': fact('花', [['ㄏㄨㄚ']])}
        result, _, _ = compile_lessons([lesson(['長大','花長'])], audit)
        self.assertEqual(result[0]['vocabulary'][1]['sounds'], ['ㄏㄨㄚ', ''])

    def test_punctuation_preserves_index_but_cannot_get_fake_sound(self):
        audit = {'海': fact('海', [['ㄏㄞˇ']]), '倫': fact('倫', [['ㄌㄨㄣˊ']])}
        result, _, pending = compile_lessons([lesson(['海倫‧'])], audit)
        self.assertEqual(result[0]['vocabulary'][0]['sounds'], ['ㄏㄞˇ', 'ㄌㄨㄣˊ', ''])
        self.assertEqual(len(pending), 0)

    def test_single_character_uses_union_not_preferred_only(self):
        record = fact('日', [['ㄖˋ']])
        record['dictionaries'].append({'dictionary': 'dic_revised', 'readings': [{'sounds': ['ㄇㄧˋ']}]})
        result, _, pending = compile_lessons([lesson(['日'])], {'日': record})
        self.assertEqual(result[0]['vocabulary'][0]['sounds'], [''])
        self.assertEqual(len(pending), 1)

    def test_out_of_scope_grade_rejected(self):
        raw = lesson(['日']); raw['grade'] = 3
        with self.assertRaises(ValueError):
            compile_lessons([raw], {'日': fact('日', [['ㄖˋ']])})


if __name__ == '__main__':
    unittest.main()
