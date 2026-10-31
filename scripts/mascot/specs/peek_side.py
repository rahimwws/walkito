SPEC = {
    'name': 'peekSide', 'svg': 'assets-src/mascot/peek-side.svg',
    # The flower leans in from behind a right-hand edge: everything right of
    # x 2021 is cut off, one hand grips that edge and the other waves. The
    # head breathes and turns about the middle of the edge, and the body
    # squashes from a point on it, so the cut stays on the edge.
    'center': [1700, 1050], 'headPivot': [2021, 853], 'ground': [2060, 1709], 'bodyCentre': [1700, 1050],
    # The square the figure is fitted to ends on the edge (a hair inside the
    # outline drawn along it), so a host that sets the mascot's right side on
    # a card's right edge and clips there has the flower leaning in from it.
    'box': [417, 200, 1600], 'outline': 64, 'feature': 20,
    'eyes': [[1640, 1020], [1818, 908]], 'mouth': [1790, 1100],
    'outlines': [{
        'path': 0, 'sub': 0,
        # The SVG copy drops the left eye's highlight from the body path: it
        # was traced twice, there as an island in the eye and as path 2.
        'faceHoles': {'eyeLeft': 3, 'eyeRight': 2, 'mouth': 1},
        # the notches, the ends of the edge and the waving arm's seam
        'core': [2, 4, 10, 16, 18, 21, 47, 49, 57, 62],
        'ranges': [
            {'name': 'top', 'kind': 'petal', 'from': 62, 'to': 2},
            # cut off by the edge: it turns about where it meets it
            {'name': 'upperRight', 'kind': 'petal', 'from': 2, 'to': 4, 'pivot': [2020, 299]},
            # the edge, drawn as the body's outline along it
            {'name': 'edge', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 4, 'to': 10},
            # the body's edge round the hand gripping the edge; the hand moves under it
            {'name': 'gripRing', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 10, 'to': 16},
            {'name': 'lowerRight', 'kind': 'petal', 'from': 16, 'to': 18, 'pivot': [1934, 1709]},
            # Either side of the waving arm. It turns about the arm's seam, so
            # the forearm's edges that start on it stay joined.
            {'name': 'bottom', 'kind': 'petal', 'segs': [[18, 21], [47, 49]], 'pivot': [1480, 1600]},
            # `dir` on the arm swings it out, away from the body, and the hand
            # takes the arm's: a wave or a flex turns the fingers away from the
            # petal over them, never into it
            {'name': 'armWave', 'kind': 'part', 'role': 'wave', 'parent': 'head', 'dir': -1, 'segs': [[21, 22], [45, 47]],
             'pivot': [1462, 1620]},
            {'name': 'handWave', 'kind': 'part', 'role': 'hand', 'parent': 'armWave', 'dir': -1, 'from': 22, 'to': 45,
             'pivot': [1320, 1510], 'toward': [1380, 1560], 'overlap': 40},
            # its lower edge lies over the waving hand's fingertips
            {'name': 'left', 'kind': 'petal', 'from': 49, 'to': 57},
            {'name': 'upperLeft', 'kind': 'petal', 'from': 57, 'to': 62},
        ],
    }],
    # the hand on the edge, traced on its own: its fingers curl toward the edge
    'shapeParts': [{'name': 'handGrip', 'role': 'hand', 'parent': 'head', 'dir': 1, 'pivot': [2025, 1590]}],
    'shapes': [{'path': 4, 'part': 'handGrip'}],
    # Each eye with its white highlight. The eyes are holes in the body and the
    # highlights separate paths (1, 2), so the SVG copy carries both, undrawn,
    # as one path per eye (10 and 11), the highlight wound against the eye.
    'faceShapes': {'eyeLeft': 10, 'eyeRight': 11},
    'marks': [
        # the wave lines ride on the waving hand and flicker as it waves
        {'name': 'wave', 'paths': [6, 7], 'part': 'handWave', 'role': 'flicker'},
        # the lines over the head pop out from it on a landing
        {'name': 'excited', 'paths': [5, 8, 9], 'part': 'head', 'role': 'pop', 'centre': [1450, 700]},
    ],
    # The eyes are open, looking over at the waving hand. The glance looks out
    # at you and the thinking face up, with the same shining eyes moved, not
    # the generated dots, which are drawn for poses with their eyes shut.
    'faceShifts': {'look': [18, 6], 'think': [-4, -18]},
    'blinks': ['rest', 'grin', 'soft', 'look', 'think'],
    # how the module is written
    'var': 'peekSideRig', 'out': 'src/shared/ui/mascot/rigs/peek-side.ts',
    'doc': "/** Leaning in from behind a right-hand edge, one hand gripping it, the other waving: the mascot peeking into a card from the side. Traced art (`assets-src/mascot/peek-side.svg`), split along its own outline by `scripts/mascot`; cut off at x 2021, which is the right side of `box`. The head turns and the body squashes about points on that edge, and hops are straight up along it; a lean, a held tilt or a sideways shake moves the cut into view, so idle, `wave`, `nod`, `poke`, `hop`, `happy` and `cheer` suit it, and `celebrate` and `wince` do not. */",
    'moods': {'idle': 'rest', 'happy': 'grin', 'celebrate': 'grin', 'thinking': 'think', 'sad': 'soft', 'wave': 'rest'},
    'markOverrides': {},
}


# emit.py writes `blinks: ['look', 'think']` into every rig and makes `look` and
# `think` small dots for eyes drawn shut. This pose's own eyes are open, so for
# this rig only (a process that loads several specs never leaks it into
# another) the faces in `faceShifts` take the rest eyes, moved, and every face
# blinks.
def _open_eyes_from_spec():
    try:
        import emit
        from kit import parse_d, sub_d
    except ImportError:  # loaded outside scripts/mascot: nothing is being written
        return
    write = emit.emit
    if getattr(write, 'spec_open_eyes', None) == SPEC['name']:  # loaded twice
        return

    def shifted(d, dx, dy):
        out = []
        for s in parse_d(d):
            s = {'start': [s['start'][0] + dx, s['start'][1] + dy], 'closed': s['closed'],
                 'segs': [[k, [v + (dx if i % 2 == 0 else dy) for i, v in enumerate(a)]] for k, a in s['segs']]}
            out.append(sub_d(s))
        return ' '.join(out)

    def emit_with_open_eyes(rig, faces, moods, eye_c, mouth_c, extra, *rest, **kw):
        if rig.get('name') == SPEC['name']:
            faces = dict(faces)
            for name, (dx, dy) in SPEC['faceShifts'].items():
                faces[name] = dict(faces[name], eyes=[shifted(e, dx, dy) for e in faces['rest']['eyes']], eyesFilled=True)
            extra = dict(extra, blinks=SPEC['blinks'])
        return write(rig, faces, moods, eye_c, mouth_c, extra, *rest, **kw)

    emit_with_open_eyes.spec_open_eyes = SPEC['name']
    emit.emit = emit_with_open_eyes


_open_eyes_from_spec()
