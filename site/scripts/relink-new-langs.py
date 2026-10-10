"""Point links in pt/fr/it/de pages at the page in the same language where one
now exists, dropping the "(in English)" marker. Run after adding translations."""
import os, re, glob
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
i18n = open(os.path.join(ROOT, 'lib/i18n.ts')).read()
en = dict(re.findall(r"^  (\w+): '(/[^']*)',$", i18n.split('export const EN_ONLY')[1].split('} as const')[0], re.M))
block = i18n.split('export const NEW_ARTICLE_PATHS')[1].split('\n};')[0]
MARK = {'pt': 'em inglês', 'fr': 'en anglais', 'it': 'in inglese', 'de': 'auf Englisch'}
total = 0
for l, mark in MARK.items():
    sub = block.split(f'  {l}: {{')[1].split('  },')[0]
    paths = dict(re.findall(r"^    (\w+): '([^']+)',$", sub, re.M))
    en2l = {en[k]: v for k, v in paths.items() if k in en}
    files = glob.glob(os.path.join(ROOT, f'lib/guides/articles-{l}/*.ts')) + [os.path.join(ROOT, f'lib/guides/{l}.ts'), os.path.join(ROOT, f'lib/about/{l}.ts'), os.path.join(ROOT, f'lib/home/{l}.ts')]
    gen = os.path.join(ROOT, f'lib/guides/articles-{l}')
    for f in files:
        if not os.path.exists(f): continue
        s = open(f).read(); n0 = s
        def rep(m):
            label, path, anchor = m.group(1), m.group(2), m.group(3) or ''
            return f'[{label}]({en2l[path]}{anchor})' if path in en2l else m.group(0)
        mk = re.escape(mark)
        nb = r'(?:\\u00A0| |\u00a0)'
        s = re.sub(r'\[([^\]]+)\]\((/[^)#]*?)(#[^)]*)?\)' + nb + r'\(' + mk + r'\)', rep, s)
        s = re.sub(r'\[([^\]]+)\]\((/[^)#]*?)(#[^)]*)?\)', rep, s)
        if s != n0:
            total += 1
            open(f, 'w').write(s)
print('files changed:', total)
