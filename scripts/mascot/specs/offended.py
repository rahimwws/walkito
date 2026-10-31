SPEC = {
    'name': 'offended', 'svg': 'assets-src/mascot/offended.svg',
    'center': [1000, 760], 'headPivot': [1045, 1395], 'ground': [790, 1975], 'bodyCentre': [1000, 980],
    'box': [0, 40, 2048], 'outline': 64, 'feature': 20,
    'eyes': [[1075, 845], [1332, 765]], 'mouth': [1245, 877],
    'outlines': [{
        'path': 0, 'sub': 0,
        'faceHoles': {'eyeLeft': 1, 'eyeRight': 2, 'mouth': 5},
        'core': [80, 2, 6, 10, 38, 42, 52, 66, 69, 73, 77],
        'ranges': [
            {'name': 'top', 'kind': 'petal', 'from': 80, 'to': 2},
            {'name': 'upperRight', 'kind': 'petal', 'from': 2, 'to': 6},
            {'name': 'right', 'kind': 'petal', 'from': 6, 'to': 10},
            # The crossed arms, both fists and every slit between them, in one piece that holds
            # still with the face: the slits along the body above and below never open or close.
            {'name': 'arms', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 10, 'to': 38},
            # The lobes under the arms hold still too: as petals their wedges reach up to the
            # middle through the arms' slits, and a sway slid their paper over them.
            {'name': 'bottomRight', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 38, 'to': 42},
            # The tapping foot, from the hip, and the one he stands on.
            {'name': 'legRight', 'kind': 'part', 'role': 'leg', 'dir': 1, 'from': 42, 'to': 52, 'pivot': [1095, 1405]},
            {'name': 'legLeft', 'kind': 'part', 'role': 'leg', 'dir': -1, 'from': 52, 'to': 66, 'pivot': [948, 1415]},
            {'name': 'bottomLeft', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 66, 'to': 69},
            {'name': 'lowerLeft', 'kind': 'petal', 'from': 69, 'to': 73},
            {'name': 'left', 'kind': 'petal', 'from': 73, 'to': 77},
            {'name': 'upperLeft', 'kind': 'petal', 'from': 77, 'to': 80},
        ],
    }],
    # The art draws each eye and its brow as one hole. Paths 8 and 9 are the eyes alone, each
    # with its shine, and 10 and 11 the brows, cut apart along a line just over the shine
    # (`__main__` below), not drawn in the art: the eyes blink and the brows stay down.
    'faceShapes': {'eyeLeft': 8, 'eyeRight': 9},
    'shapeParts': [{'name': 'brows', 'role': 'static', 'parent': 'head', 'pivot': [1170, 780]}],
    # the fist tucked under the far arm, traced on its own
    'shapes': [{'path': 4, 'part': 'arms'}],
    'lines': [{'path': 10, 'part': 'brows'}, {'path': 11, 'part': 'brows'}],
    'marks': [
        # the huff, off the side of the head
        {'name': 'huff', 'paths': [3, 7], 'part': 'head', 'role': 'pop', 'centre': [1600, 600]},
        # the taps by the raised toe: they pop as the foot comes down
        {'name': 'tap', 'paths': [5, 6], 'role': 'pop', 'centre': [1580, 1680]},
    ],
    # the narrowed eyes are the point: no glancing up with round ones
    'glance': None,
    'blinks': ['rest', 'think'],
    # how the module is written
    'var': 'offendedRig', 'out': 'src/shared/ui/mascot/rigs/offended.ts',
    'doc': '/** Arms crossed, brows down, one foot tapping, a huff off the side: the offended mascot. Traced art (`assets-src/mascot/offended.svg`), split along its own outline by `scripts/mascot`; the crossed arms hold still with the face, each leg moves on its own, and the eyes blink under brows that stay put. */',
    # every mood keeps the huffy face: a grin under these brows reads as a smirk
    'moods': {'idle': 'rest', 'happy': 'rest', 'celebrate': 'rest', 'thinking': 'think', 'sad': 'rest', 'wave': 'rest'},
    'markOverrides': {},
}


# emit.py writes `blinks: ['look', 'think']` into every rig: the faces whose eyes are open
# on a pose drawn with them shut. This pose's own face is open-eyed, so without this it would
# never blink. Until emit takes the list from the spec, pass `blinks` above through to it, for
# this rig only (a process that loads several specs never leaks it into another).
def _blinks_from_spec():
    try:
        import emit
    except ImportError:  # loaded outside scripts/mascot: nothing is being written
        return
    write = emit.emit
    if getattr(write, 'spec_blinks', None) == SPEC['name']:  # loaded twice
        return

    def emit_with_blinks(rig, faces, moods, eye_c, mouth_c, extra, *rest, **kw):
        if rig.get('name') == SPEC['name']:
            extra = dict(extra, blinks=SPEC['blinks'])
        return write(rig, faces, moods, eye_c, mouth_c, extra, *rest, **kw)

    emit_with_blinks.spec_blinks = SPEC['name']
    emit.emit = emit_with_blinks


_blinks_from_spec()


# `python3 scripts/mascot/specs/offended.py` rewrites the rig-only paths (8-11) at the end of the
# SVG copy from the art's own paths, then `build.py --check` must still pass. Only run as a
# script: build.py loads this file for SPEC alone.
if __name__ == '__main__':
    import os, sys
    ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', '..')
    sys.path.insert(0, os.path.join(ROOT, 'scripts', 'mascot'))
    import bands, kit

    SVG = os.path.join(ROOT, SPEC['svg'])
    src, paths = bands.art_paths(SVG)
    OVERLAP = 1.5  # the eye reaches this far over the cut, under the brow, so no seam shows between them

    def side(a, b, sign, push):
        """the half-plane on one side of the line a-b (sign 1: below it, on screen), moved `push` across it"""
        dx, dy = b[0] - a[0], b[1] - a[1]; L = (dx * dx + dy * dy) ** 0.5
        nx, ny = -dy / L * sign, dx / L * sign  # unit normal pointing into the kept side
        a = (a[0] - nx * push, a[1] - ny * push); b = (b[0] - nx * push, b[1] - ny * push)
        far = 4000
        ex, ey = dx / L * far, dy / L * far
        return [(a[0] - ex, a[1] - ey), (b[0] + ex, b[1] + ey), (b[0] + ex + nx * far, b[1] + ey + ny * far),
                (a[0] - ex + nx * far, a[1] - ey + ny * far)]

    def poly_d(poly):
        f = lambda v: ('%.1f' % v).rstrip('0').rstrip('.')
        return 'M%sZ' % ' L'.join('%s %s' % (f(x), f(y)) for x, y in poly)

    shapes = []
    brows = []
    # (hole contour of path 0, shine path, the cut: from the inner corner to past the brow's tip)
    for sub, shine, a, b in ((1, 1, (1040, 806), (1125, 774)), (2, 2, (1295, 738), (1375, 698))):
        contour = kit.flat(paths[0]['subs'][sub], 24)
        eye = kit.sh_clip(contour, side(a, b, 1, OVERLAP))
        brow = kit.sh_clip(contour, side(a, b, -1, 0))
        # the eye keeps the hole's winding, so the shine (wound the other way) stays paper inside it
        shapes.append(poly_d(eye) + ' ' + ' '.join(bands.raw_subpaths(src, shine)))
        brows.append(poly_d(brow))
    faces, _ = bands.write(SVG, 'not drawn: each eye with its shine, then each brow, cut apart from the one hole the art draws them as. '
                                'See scripts/mascot/specs/offended.py.', faces=shapes + brows)
    assert faces == [8, 9, 10, 11], faces
    print('wrote the eyes (8, 9) and the brows (10, 11) into', os.path.relpath(SVG, ROOT))
