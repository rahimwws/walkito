"""The mascot rig kit: parse a traced SVG, split it into parts along its own
outline, render poses and anchor maps through macOS Quick Look, and compare
a rig at rest with the art. `build.py` is the entry point."""
import json, math, os, re, subprocess, sys, tempfile

NUM = r'[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?'


# ── parsing ──────────────────────────────────────────────────────────────────

def parse_d(d):
    tok = re.findall(r'[MmLlCcHhVvZzQqSs]|' + NUM, d)
    subs, i, cx, cy, sx, sy, cmd, cur = [], 0, 0.0, 0.0, 0.0, 0.0, None, None
    def num():
        nonlocal i
        v = float(tok[i]); i += 1; return v
    while i < len(tok):
        t = tok[i]
        if t.isalpha():
            cmd = t; i += 1
            if cmd in 'Zz':
                cur['closed'] = True; cx, cy = sx, sy
                continue
        if cmd in 'Mm':
            x, y = num(), num()
            if cmd == 'm' and cur is not None: x += cx; y += cy
            cx, cy, sx, sy = x, y, x, y
            cur = {'start': [x, y], 'segs': [], 'closed': False}; subs.append(cur)
            cmd = 'l' if cmd == 'm' else 'L'
        elif cmd in 'Ll':
            x, y = num(), num()
            if cmd == 'l': x += cx; y += cy
            cur['segs'].append(['L', [x, y]]); cx, cy = x, y
        elif cmd in 'Hh':
            x = num(); x = x + cx if cmd == 'h' else x
            cur['segs'].append(['L', [x, cy]]); cx = x
        elif cmd in 'Vv':
            y = num(); y = y + cy if cmd == 'v' else y
            cur['segs'].append(['L', [cx, y]]); cy = y
        elif cmd in 'Cc':
            a = [num() for _ in range(6)]
            if cmd == 'c': a = [a[0] + cx, a[1] + cy, a[2] + cx, a[3] + cy, a[4] + cx, a[5] + cy]
            cur['segs'].append(['C', a]); cx, cy = a[4], a[5]
        else:
            raise ValueError('unhandled command ' + cmd)
    return subs


def parse_svg(path):
    src = open(path).read()
    out = []
    for m in re.finditer(r'<path\b([^>]*)/?>', src):
        attrs = m.group(1)
        d = re.search(r'\bd="([^"]+)"', attrs).group(1)
        fill = re.search(r'\bfill="([^"]+)"', attrs)
        op = re.search(r'fill-opacity="([^"]+)"', attrs)
        out.append({'fill': fill.group(1) if fill else 'black', 'opacity': float(op.group(1)) if op else 1.0,
                    'subs': parse_d(d)})
    return out


def sub_d(s, ndig=1):
    f = lambda v: ('%.*f' % (ndig, v)).rstrip('0').rstrip('.')
    out = 'M%s %s' % (f(s['start'][0]), f(s['start'][1]))
    for k, a in s['segs']:
        out += ' ' + k + ' '.join(f(v) for v in a) if k == 'C' else ' L%s %s' % (f(a[0]), f(a[1]))
    return out + ('Z' if s['closed'] else '')


def flat(s, n=10):
    pts = [tuple(s['start'])]; x0, y0 = s['start']
    for k, a in s['segs']:
        if k == 'L':
            pts.append(tuple(a)); x0, y0 = a
        else:
            for j in range(1, n + 1):
                t = j / n; mt = 1 - t
                pts.append((mt ** 3 * x0 + 3 * mt * mt * t * a[0] + 3 * mt * t * t * a[2] + t ** 3 * a[4],
                            mt ** 3 * y0 + 3 * mt * mt * t * a[1] + 3 * mt * t * t * a[3] + t ** 3 * a[5]))
            x0, y0 = a[4], a[5]
    return pts


def bbox(points):
    xs = [p[0] for p in points]; ys = [p[1] for p in points]
    return (min(xs), min(ys), max(xs), max(ys))


def area(poly):
    n = len(poly)
    return sum(poly[i][0] * poly[(i + 1) % n][1] - poly[(i + 1) % n][0] * poly[i][1] for i in range(n)) / 2


# ── geometry ─────────────────────────────────────────────────────────────────

def inside(pt, poly):
    x, y = pt; c = False; n = len(poly)
    for i in range(n):
        (x1, y1), (x2, y2) = poly[i], poly[(i + 1) % n]
        if (y1 > y) != (y2 > y) and x < (x2 - x1) * (y - y1) / (y2 - y1) + x1: c = not c
    return c


def grow(poly, by=3.0):
    n = len(poly); sign = 1 if area(poly) > 0 else -1; res = []
    for i in range(n):
        p0, p1, p2 = poly[i - 1], poly[i], poly[(i + 1) % n]
        def normal(a, b):
            dx, dy = b[0] - a[0], b[1] - a[1]; L = math.hypot(dx, dy) or 1
            return (sign * dy / L, -sign * dx / L)
        n1, n2 = normal(p0, p1), normal(p1, p2)
        bx, by_ = n1[0] + n2[0], n1[1] + n2[1]; L = math.hypot(bx, by_) or 1
        cos = max((n1[0] * bx + n1[1] * by_) / L, 0.35)
        res.append((round(p1[0] + bx / L * by / cos, 1), round(p1[1] + by_ / L * by / cos, 1)))
    return res


def sh_clip(subject, clip):
    """Sutherland-Hodgman: subject polygon clipped by a convex polygon."""
    if area(clip) < 0: clip = clip[::-1]
    out = list(subject)
    for i in range(len(clip)):
        a, b = clip[i], clip[(i + 1) % len(clip)]
        def inn(p): return (b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0]) >= 0
        def cross(p, q):
            x1, y1, x2, y2 = p[0], p[1], q[0], q[1]; x3, y3, x4, y4 = a[0], a[1], b[0], b[1]
            den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4) or 1e-9
            t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den
            return (x1 + t * (x2 - x1), y1 + t * (y2 - y1))
        inp, out = out, []
        if not inp: break
        s = inp[-1]
        for e in inp:
            if inn(e):
                if not inn(s): out.append(cross(s, e))
                out.append(e)
            elif inn(s): out.append(cross(s, e))
            s = e
    return [(round(x, 1), round(y, 1)) for x, y in out]


def seg_mid(x0, y0, k, a):
    if k == 'L': return ((x0 + a[0]) / 2, (y0 + a[1]) / 2)
    return (0.125 * x0 + 0.375 * a[0] + 0.375 * a[2] + 0.125 * a[4], 0.125 * y0 + 0.375 * a[1] + 0.375 * a[3] + 0.125 * a[5])


# ── rendering through Quick Look ─────────────────────────────────────────────

MODES = {'light': ('#111114', '#F4F4F6', '#FFFFFF'), 'dark': ('#1C1C1F', '#FCFCFC', '#1C1C1F'), 'green': ('#2a6b4f', '#FCFCFC', '#2a6b4f')}


def pts_attr(poly): return ' '.join('%.1f,%.1f' % (x, y) for x, y in poly)


def tf(pose, name, pivot):
    a = pose.get(name, 0)
    if isinstance(a, dict):
        s = a.get('s', [1, 1]); t = a.get('t', [0, 0]); r = a.get('r', 0)
        return 'translate(%g %g) translate(%g %g) rotate(%g) scale(%g %g) translate(%g %g)' % (t[0], t[1], pivot[0], pivot[1], r, s[0], s[1], -pivot[0], -pivot[1])
    return 'rotate(%g %g %g)' % (a, pivot[0], pivot[1])


# ── range-based rigs: every part is a stretch of the outline ─────────────────

def anchors(s):
    return [tuple(s['start'])] + [tuple(seg[1][-2:]) for seg in s['segs']]


def range_points(s, a, b):
    """Flattened outline points from anchor a to anchor b, walking forward (cyclic)."""
    n = len(s['segs']); pts = []
    i = a; x0, y0 = anchors(s)[a]
    pts.append((x0, y0))
    while i != b:
        k, seg = s['segs'][i]
        if k == 'L':
            pts.append(tuple(seg))
        else:
            for j in range(1, 9):
                t = j / 8; mt = 1 - t
                pts.append((mt ** 3 * x0 + 3 * mt * mt * t * seg[0] + 3 * mt * t * t * seg[2] + t ** 3 * seg[4],
                            mt ** 3 * y0 + 3 * mt * mt * t * seg[1] + 3 * mt * t * t * seg[3] + t ** 3 * seg[5]))
        x0, y0 = pts[-1]
        i = (i + 1) % n
    return pts


def range_ink(s, a, b):
    n = len(s['segs']); A = anchors(s)
    out = 'M%.1f %.1f' % A[a]; i = a
    while i != b:
        k, seg = s['segs'][i]
        out += (' C' + ' '.join('%.1f' % v for v in seg)) if k == 'C' else ' L%.1f %.1f' % tuple(seg)
        i = (i + 1) % n
    return out


def toward(p, c, d):
    dx, dy = c[0] - p[0], c[1] - p[1]; L = math.hypot(dx, dy) or 1
    return (p[0] + dx / L * d, p[1] + dy / L * d)


def build_ranges(spec):
    paths = parse_svg(spec['svg'])
    main = paths[spec['main']] if spec.get('main') is not None else None
    C = tuple(spec['center'])
    rig = {'name': spec['name'], 'units': spec.get('units', 2048), 'parts': [], 'petals': [], 'inks': {}, 'shapes': [],
           'marks': [], 'face': {}, 'lines': [], 'underlays': spec.get('underlays', []), 'center': list(C),
           'ground': spec['ground'], 'bodyCentre': spec.get('bodyCentre', spec['headPivot']), 'box': spec['box'],
           'outline': spec['outline'], 'feature': spec['feature'], 'eyes': spec['eyes'], 'mouth': spec['mouth'],
           'faceScale': spec.get('faceScale', 1.0), 'head': {'pivot': spec['headPivot']}}
    bodies = []      # (pathIndex, subIndex) of outlines split into ranges
    for src in spec['outlines']:
        p = paths[src['path']]; s = p['subs'][src.get('sub', 0)]
        A = anchors(s)
        cuts = []
        byname = {}
        for r in src['ranges']:
            segs = r.get('segs') or [[r['from'], r['to']]]
            pts = []
            for a, b in segs:
                pts += range_points(s, a, b)
                rig['inks'][r['name']] = (rig['inks'].get(r['name'], '') + ' ' + range_ink(s, a, b)).strip()
                cuts.append(segs[0][0] if False else a)
            a, b = segs[0][0], segs[-1][1]
            if r['kind'] == 'petal':
                poly = pts + [C]
                pv = ((A[a][0] + A[b][0]) / 2, (A[a][1] + A[b][1]) / 2)
                ang = math.degrees(math.atan2(pv[1] - C[1], pv[0] - C[0]))
                rig['petals'].append({'name': r['name'], 'raw': poly, 'clip': grow(poly), 'pivot': r.get('pivot', [round(pv[0], 1), round(pv[1], 1)]),
                                      'angle': round(ang, 1), 'body': src['path']})
            else:
                seam_mid = ((A[a][0] + A[b][0]) / 2, (A[a][1] + A[b][1]) / 2)
                inward = toward(seam_mid, r.get('toward', C), r.get('overlap', 60))
                poly = pts + [inward]
                rig['parts'].append({'name': r['name'], 'role': r.get('role', 'static'), 'raw': poly, 'clip': grow(poly),
                                     'pivot': r.get('pivot', [round(seam_mid[0], 1), round(seam_mid[1], 1)]),
                                     'parent': r.get('parent', 'root'), 'dir': r.get('dir', 1), 'body': src['path']})
        cuts = [A[i] for i in src['core']] if src.get('core') not in (None, True, False) else [A[i] for i in sorted(set(cuts))]
        core = [tuple(round(v, 1) for v in c) for c in cuts]
        if src.get('core', True) is not False:
            rig['core'] = grow(core, 6); rig['coreRaw'] = core; rig['coreBody'] = src['path']
        # holes of this outline that are not face features: whole, to the part around them
        hole_ids = set(src.get('faceHoles', {}).values())
        for si, hs in enumerate(p['subs']):
            if si == src.get('sub', 0) or si in hole_ids: continue
            pt = hs['start']
            owner = next((q['name'] for q in rig['parts'] if q['raw'] and inside(pt, q['raw'])), None) or \
                next((q['name'] for q in rig['petals'] if inside(pt, q['raw'])), 'core')
            rig['inks'][owner] = (rig['inks'].get(owner, '') + ' ' + sub_d(hs)).strip()
        for k, v in src.get('faceHoles', {}).items():
            rig['face'][k] = sub_d(p['subs'][v])
        bodies.append(src['path'])
    rig['bodies'] = {str(i): ' '.join(sub_d(s) for j, s in enumerate(paths[i]['subs'])
                                      if j not in set(next(o for o in spec['outlines'] if o['path'] == i).get('faceHoles', {}).values()))
                     for i in bodies}
    for sp in spec.get('shapeParts', []):
        rig['parts'].append({'name': sp['name'], 'role': sp.get('role', 'static'), 'raw': None, 'clip': None, 'pivot': sp['pivot'],
                             'parent': sp.get('parent', 'root'), 'dir': sp.get('dir', 1), 'body': None})
    for sh in spec.get('shapes', []):
        p = paths[sh['path']]
        rig['shapes'].append({'part': sh['part'], 'd': ' '.join(sub_d(s) for s in p['subs'])})
    for m in spec.get('marks', []):
        ds = [' '.join(sub_d(s) for s in paths[i]['subs']) for i in m['paths']]
        pts = [pt for i in m['paths'] for s in paths[i]['subs'] for pt in flat(s)]
        b = bbox(pts)
        rig['marks'].append({'name': m['name'], 'part': m.get('part', 'root'), 'd': ds,
                             'centre': m.get('centre', [round((b[0] + b[2]) / 2, 1), round((b[1] + b[3]) / 2, 1)]), 'role': m.get('role', 'pop')})
    for k, v in spec.get('faceShapes', {}).items():
        rig['face'][k] = ' '.join(sub_d(s) for s in paths[v]['subs'])
    for l in spec.get('lines', []):
        rig['lines'].append({'part': l['part'], 'd': ' '.join(sub_d(s) for s in paths[l['path']]['subs'])})
    return rig


def svg_ranges(rig, pose, mode='light', size=800):
    INK, PAPER, BG = MODES[mode]
    W = rig['outline']
    defs = ''.join('<clipPath id="c-%s"><polygon points="%s"/></clipPath>' % (p['name'], pts_attr(p['clip'])) for p in rig['parts'] + rig['petals'] if p['clip'])
    if rig.get('core'): defs += '<clipPath id="c-core"><polygon points="%s"/></clipPath>' % pts_attr(rig['core'])
    I = rig['inks']; B = rig['bodies']
    def ink(name): return '<path d="%s" fill="none" stroke="%s" stroke-width="%g" stroke-linejoin="round" stroke-linecap="round"/>' % (I[name], INK, W) if name in I else ''
    def paper(name, body): return '<path d="%s" fill="%s" fill-rule="evenodd" clip-path="url(#c-%s)"/>' % (B[str(body)], PAPER, name)
    def g(name, inner, pivot): return '<g transform="%s">%s</g>' % (tf(pose, name, pivot), inner)
    def shapes_of(part, is_ink):
        return ''.join(('<path d="%s" fill="none" stroke="%s" stroke-width="%g" stroke-linejoin="round"/>' % (s['d'], INK, W)) if is_ink
                       else '<path d="%s" fill="%s" fill-rule="evenodd"/>' % (s['d'], PAPER) for s in rig['shapes'] if s['part'] == part)
    def lines_of(part):
        return ''.join('<path d="%s" fill="%s"/>' % (l['d'], INK) for l in rig['lines'] if l['part'] == part)
    def part_g(p, is_ink):
        own = (ink(p['name']) if is_ink else paper(p['name'], p['body'])) if p['body'] is not None else ''
        inner = own + shapes_of(p['name'], is_ink) + ''.join(part_g(q, is_ink) for q in rig['parts'] if q['parent'] == p['name']) + ('' if is_ink else lines_of(p['name']))
        return g(p['name'], inner, p['pivot'])
    def tree(is_ink):
        root = ''.join(part_g(p, is_ink) for p in rig['parts'] if p['parent'] == 'root')
        root += shapes_of('root', is_ink) + ('' if is_ink else lines_of('root'))
        head = ''
        if rig.get('core'): head += ink('core') if is_ink else paper('core', rig['coreBody'])
        head += shapes_of('head', is_ink)
        head += ''.join(g(p['name'], ink(p['name']) if is_ink else paper(p['name'], p['body']), p['pivot']) for p in rig['petals'])
        head += ''.join(part_g(p, is_ink) for p in rig['parts'] if p['parent'] == 'head')
        if not is_ink:
            face = pose.get('_face')
            if face is None: face = ''.join('<path d="%s" fill="%s"/>' % (d, INK) for d in rig['face'].values())
            head += face + lines_of('head')
        root += g('head', head, rig['head']['pivot'])
        for m in rig['marks']:
            inner = ''.join(('<path d="%s" fill="none" stroke="%s" stroke-width="%g" stroke-linejoin="round"/>' % (d, INK, W)) if is_ink
                            else '<path d="%s" fill="%s"/>' % (d, PAPER) for d in m['d'])
            root += g('m-' + m['name'], inner, m['centre'])
        return root
    under = ''.join('<polygon points="%s" fill="%s"/>' % (pts_attr(u['poly']), PAPER) for u in rig['underlays'])
    body = under + tree(True) + tree(False)
    over = ''
    if pose.get('_orig'): over = '<g opacity="0.45">%s</g>' % pose['_orig']
    if pose.get('_clips'):
        cols = ['#f005', '#0f05', '#00f5', '#ff05', '#0ff5', '#f0f5', '#8805']
        for i, p in enumerate(rig['parts']):
            if p['raw']: over += '<polygon points="%s" fill="%s" stroke="#000" stroke-width="3"/>' % (pts_attr(p['raw']), cols[i % len(cols)])
            over += '<circle cx="%g" cy="%g" r="14" fill="#f00"/>' % tuple(p['pivot'])
        for p in rig['petals']:
            over += '<polygon points="%s" fill="none" stroke="#a0f" stroke-width="4"/>' % pts_attr(p['raw'])
            over += '<circle cx="%g" cy="%g" r="10" fill="#f0f"/>' % tuple(p['pivot'])
        if rig.get('coreRaw'): over += '<polygon points="%s" fill="none" stroke="#f80" stroke-width="5"/>' % pts_attr(rig['coreRaw'])
    vb = pose.get('_vb', [0, 0, rig['units'], rig['units']])
    h = int(size * vb[3] / vb[2])
    return ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="%s" width="%d" height="%d"><rect x="-5000" y="-5000" width="20000" height="20000" fill="%s"/>'
            '<defs>%s</defs><g transform="%s">%s</g>%s</svg>') % (' '.join(map(str, vb)), size, h, BG, defs, tf(pose, 'root', rig['ground']), body, over)


def render_ranges(rig, poses, out, mode='light', cols=3, size=800):
    from PIL import Image, ImageDraw
    tmp = tempfile.mkdtemp(dir=os.path.dirname(os.path.abspath(out)))
    ims = []
    for i, pose in enumerate(poses):
        f = os.path.join(tmp, 'f%02d.svg' % i)
        open(f, 'w').write(svg_ranges(rig, pose, pose.get('_mode', mode), size))
        subprocess.run(['qlmanage', '-t', '-s', str(size), '-o', tmp, f], capture_output=True)
        im = Image.open(f + '.png').convert('RGB')
        ImageDraw.Draw(im).text((8, 8), pose.get('_label', str(i)), fill=(255, 0, 0))
        ims.append(im)
    cols = min(cols, len(ims)); w, h = ims[0].size
    sheet = Image.new('RGB', (w * cols, h * ((len(ims) + cols - 1) // cols)), 'white')
    for i, im in enumerate(ims): sheet.paste(im, ((i % cols) * w, (i // cols) * h))
    sheet.save(out)


def diff_rest(rig, svgfile, size=900):
    """Rig at rest with no outline vs the source SVG, both white on green."""
    from PIL import Image, ImageChops
    tmp = tempfile.mkdtemp()
    r2 = json.loads(json.dumps(rig))  # real outline, drawn in the background colour, as in dark mode
    a = os.path.join(tmp, 'a.svg'); open(a, 'w').write(svg_ranges(r2, {}, 'green', size))
    s = open(svgfile).read().replace('rgb(3,3,3)', '#2a6b4f'); i = s.index('<path')
    b = os.path.join(tmp, 'b.svg'); open(b, 'w').write(s[:i] + '<rect width="2048" height="2048" fill="#2a6b4f"/>' + s[i:])
    for f in (a, b): subprocess.run(['qlmanage', '-t', '-s', str(size), '-o', tmp, f], capture_output=True)
    ia = Image.open(a + '.png').convert('L'); ib = Image.open(b + '.png').convert('L')
    d = ImageChops.difference(ia, ib)
    big = d.point(lambda v: 255 if v > 100 else 0)
    return sum(1 for v in big.get_flattened_data() if v), big.getbbox()


def anchor_map(svgfile, out, path_index=0, scale=0.5):
    """The traced outline with every anchor numbered on a grid: where a spec's
    `from`/`to` indices come from. Needs Pillow."""
    from PIL import Image, ImageDraw, ImageChops
    paths = parse_svg(svgfile)
    W = int(2048 * scale)
    img = Image.new('RGB', (W, W), (42, 107, 79))
    for i, p in enumerate(paths):
        if p['opacity'] < 0.5: continue
        mask = Image.new('1', (W, W), 0)
        for sp in p['subs']:
            m = Image.new('1', (W, W), 0)
            ImageDraw.Draw(m).polygon([(x * scale, y * scale) for x, y in flat(sp)], fill=1)
            mask = ImageChops.logical_xor(mask, m)
        img.paste((252, 252, 252) if i == path_index else (200, 200, 240), mask=mask)
    d = ImageDraw.Draw(img)
    for g in range(0, 2049, 100):
        d.line([(g * scale, 0), (g * scale, W)], fill=(110, 150, 130)); d.line([(0, g * scale), (W, g * scale)], fill=(110, 150, 130))
    for k, (x, y) in enumerate(anchors(paths[path_index]['subs'][0])):
        d.ellipse([x * scale - 3, y * scale - 3, x * scale + 3, y * scale + 3], fill=(255, 0, 0))
        d.text((x * scale + 4, y * scale - 6), str(k), fill=(255, 255, 0))
    img.save(out)


if __name__ == '__main__':
    # python3 scripts/mascot/kit.py anchors <svg> <out.png> [pathIndex]
    if len(sys.argv) >= 4 and sys.argv[1] == 'anchors':
        anchor_map(sys.argv[2], sys.argv[3], int(sys.argv[4]) if len(sys.argv) > 4 else 0)
