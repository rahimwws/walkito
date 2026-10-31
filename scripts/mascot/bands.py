"""Outline bands: a moving part's own outline, kept in front of the paper it moves over.

Every outline is drawn before any paper, so a part that swings over a petal
loses its outline there: the petal's paper covers it, and the two melt into
one shape. A band is that outline drawn again as a `line` of the part (ink,
drawn over paper and moving with it), along the stretch that meets the
petal. At rest it lies exactly in the gap the art leaves, filled in the gap
colour, so the drawing does not change.

Each band starts at the part's edge and goes outward, as wide as the visible
half of the outline (`HALF`) but never wider than the clearance the art
leaves there at rest, less `MARGIN`, so it never touches other paper; its
width changes by at most `EASE` per unit along the edge, so it has no steps,
and it tapers to nothing at both ends. The method is the one
`specs/thumbs_up.py` wrote its arm bands with, for any outline in any path.

A spec writes its bands into its own SVG copy, after a marker comment, from
its `__main__` (run it as a script); `build.py` then reads them like any
other path, by index, as `lines` of the part they belong to. Writing again
replaces them, so the indices stay put. The same block can carry, first and
not drawn, shapes a spec takes from the art as they are or cut apart: a face
feature the art draws as a hole with a white shape inside (an eye and its
shine, a mouth and its tongue) joined into one path for `faceShapes`, or a
brow cut off the eye it was traced with.
"""
import math, os
import kit

HALF = 30       # the visible half of the 64-unit outline (32), less 2 so its edge never meets the stroke's
MARGIN = 1.5    # kept clear of any paper at rest
EASE = 0.3      # the most the width may change per unit along the edge
STEP = 2.5      # sample spacing along the edge
SIMPLIFY = 0.2  # how far a simplified edge may stray from the sampled one
GAP = 0.6       # the band starts this far off the edge, so the two never share an antialiased edge


def _fine(s, a, b, n=32):
    """the contour from anchor a to b, its curves cut into n pieces each"""
    A = kit.anchors(s); pts = [A[a]]; i = a; x0, y0 = A[a]; M = len(s['segs'])
    while i != b:
        k, seg = s['segs'][i]
        if k == 'L': pts.append(tuple(seg))
        else:
            for j in range(1, n + 1):
                t = j / n; mt = 1 - t
                pts.append((mt ** 3 * x0 + 3 * mt * mt * t * seg[0] + 3 * mt * t * t * seg[2] + t ** 3 * seg[4],
                            mt ** 3 * y0 + 3 * mt * mt * t * seg[1] + 3 * mt * t * t * seg[3] + t ** 3 * seg[5]))
        x0, y0 = pts[-1]; i = (i + 1) % M
    return pts


def _resample(pts, step):
    out = [pts[0]]; need = step
    for a, b in zip(pts, pts[1:]):
        L = math.hypot(b[0] - a[0], b[1] - a[1]); pos = 0.0
        while L - pos >= need:
            pos += need; need = step
            out.append((a[0] + (b[0] - a[0]) * pos / L, a[1] + (b[1] - a[1]) * pos / L))
        need -= L - pos
    if math.hypot(out[-1][0] - pts[-1][0], out[-1][1] - pts[-1][1]) > step * 0.3: out.append(pts[-1])
    return out


def _segdist(p, a, b):
    dx, dy = b[0] - a[0], b[1] - a[1]; L = dx * dx + dy * dy or 1e-12
    t = max(0, min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / L))
    return math.hypot(p[0] - a[0] - t * dx, p[1] - a[1] - t * dy)


def _orient(p, q, r): return (q[0] - p[0]) * (r[1] - p[1]) - (q[1] - p[1]) * (r[0] - p[0])


def _unfold(line):
    """cut the loops an offset line makes where the edge it follows turns inward"""
    changed = True
    while changed:
        changed = False
        for i in range(len(line) - 1):
            for j in range(len(line) - 2, i + 1, -1):
                A, B, C, D = line[i], line[i + 1], line[j], line[j + 1]
                d1, d2, d3, d4 = _orient(A, B, C), _orient(A, B, D), _orient(C, D, A), _orient(C, D, B)
                if d1 * d2 < 0 and d3 * d4 < 0:
                    t = d3 / (d3 - d4)
                    line = line[:i + 1] + [(A[0] + (B[0] - A[0]) * t, A[1] + (B[1] - A[1]) * t)] + line[j + 1:]
                    changed = True; break
            if changed: break
    return line


def _dp(pts, eps):
    """Douglas-Peucker"""
    if len(pts) < 3: return list(pts)
    a, b = pts[0], pts[-1]; dx, dy = b[0] - a[0], b[1] - a[1]; L = math.hypot(dx, dy) or 1e-9
    i, dmax = 0, -1.0
    for k in range(1, len(pts) - 1):
        d = abs((pts[k][0] - a[0]) * dy - (pts[k][1] - a[1]) * dx) / L
        if d > dmax: i, dmax = k, d
    if dmax <= eps: return [a, b]
    return _dp(pts[:i + 1], eps)[:-1] + _dp(pts[i:], eps)


def band(paths, path, sub, a, b, own=None, half=HALF):
    """The band along contour `paths[path].subs[sub]` from anchor a to b, as a closed polygon.

    `own` is the stretch (from, to) of that contour that belongs to the moving
    part itself and is left out of what the band keeps clear of (the band is
    outside the part, so its own far edges never matter); by default the
    band's own stretch."""
    s = paths[path]['subs'][sub]
    oa, ob = own or (a, b)
    obstacles = []

    def add(poly, closed=True):
        for p, q in zip(poly, poly[1:] + ([poly[0]] if closed else [])): obstacles.append((p, q))
    add(_fine(s, ob, oa), closed=False)
    for i, pth in enumerate(paths):
        if pth['opacity'] < 0.5 or pth['fill'] == 'rgb(3,3,3)': continue
        for j, sp in enumerate(pth['subs']):
            if i == path and j == sub: continue
            add(kit.flat(sp, 24))
    outer = kit.flat(s, 24)

    pts = _resample(_fine(s, a, b), STEP); n = len(pts)
    normals = []
    for i in range(n):
        p0, p1 = pts[max(i - 1, 0)], pts[min(i + 1, n - 1)]
        tx, ty = p1[0] - p0[0], p1[1] - p0[1]; L = math.hypot(tx, ty) or 1
        nx, ny = ty / L, -tx / L
        if kit.inside((pts[i][0] + 3 * nx, pts[i][1] + 3 * ny), outer): nx, ny = -nx, -ny
        normals.append((nx, ny))
    clear = [min(half, min(_segdist(p, *o) for o in obstacles) - MARGIN) for p in pts]
    clear[0] = clear[-1] = 0
    sd = [0.0]
    for p, q in zip(pts, pts[1:]): sd.append(sd[-1] + math.hypot(q[0] - p[0], q[1] - p[1]))
    w = [max(0.0, min(clear[j] + EASE * abs(sd[i] - sd[j]) for j in range(n))) for i in range(n)]
    keep = [i for i in range(n) if w[i] > GAP + 0.3]
    if not keep: return None
    lo, hi = keep[0], keep[-1]
    off = lambda i, d: (pts[i][0] + d * normals[i][0], pts[i][1] + d * normals[i][1])
    inner = _unfold([off(i, GAP) for i in range(lo, hi + 1)])
    edge = _unfold([off(i, max(GAP, w[i])) for i in range(lo, hi + 1)])
    return _dp(inner, SIMPLIFY) + _dp(edge, SIMPLIFY)[::-1]


MARKER = '<!-- rig-only:'


def art_paths(svg):
    """The art's own paths, without any rig-only block: what the bands are measured against."""
    src = open(svg).read()
    if MARKER in src:
        src = src[:src.index(MARKER)] + src[src.rindex('</svg>'):]
    art = svg + '.art.tmp'
    open(art, 'w').write(src)
    try:
        return src, kit.parse_svg(art)
    finally:
        os.remove(art)


def raw_subpaths(src, index):
    """The `d` of path `index` in the SVG source, split into its contours, exactly as written."""
    import re
    d = re.search(r'\bd="([^"]+)"', re.findall(r'<path\b[^>]*/?>', src)[index]).group(1)
    return [s.strip() for s in re.split(r'(?=M)', d) if s.strip()]


def face_shape(src, hole, highlight):
    """A face feature with its shine: a hole in the body (`hole`, as (path, contour)) and
    the white shape inside it (`highlight`, a path index, or None), which is wound the other
    way, so the rig's filled feature keeps the shine as paper."""
    d = raw_subpaths(src, hole[0])[hole[1]]
    if highlight is not None:
        d += ' ' + ' '.join(raw_subpaths(src, highlight))
    return d


def write(svg, note, faces=(), bands=()):
    """Rewrite the rig-only block at the end of `svg`: first the face shapes
    (`faces`, `d` strings, not drawn), then one band per dict in `bands`
    (`path`, `sub`, `from`, `to`, optional `own`, `half`), each one SVG path,
    in order, after the art's own paths. Returns the indices of both."""
    src, paths = art_paths(svg)
    first = len(paths)
    f = lambda v: ('%.1f' % v).rstrip('0').rstrip('.')
    out = MARKER + ' ' + note + ' -->\n'
    for d in faces:
        out += '<path fill="rgb(3,3,3)" fill-opacity="0" d="%s"/>\n' % d
    for bd in bands:
        poly = band(paths, bd['path'], bd.get('sub', 0), bd['from'], bd['to'], bd.get('own'), bd.get('half', HALF))
        if poly is None:
            raise SystemExit('no room for a band along path %d, %d-%d' % (bd['path'], bd['from'], bd['to']))
        out += '<path transform="translate(0,0)" fill="rgb(3,3,3)" d="M%sZ"/>\n' % ' L'.join('%s %s' % (f(x), f(y)) for x, y in poly)
    i = src.rindex('</svg>')
    open(svg, 'w').write(src[:i] + out + src[i:])
    n = len(faces)
    return list(range(first, first + n)), list(range(first + n, first + n + len(bands)))
