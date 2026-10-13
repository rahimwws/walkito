SPEC = {
    'name': 'peekBottom', 'svg': 'assets-src/mascot/peek-bottom.svg',
    # The flower rises from behind an edge: everything below y 2032 is cut off,
    # and both hands grip that edge. The head breathes and sways about the
    # middle of the edge, so it bobs up from it and never off it.
    'center': [1100, 1550], 'headPivot': [1070, 2032], 'ground': [1070, 2032], 'bodyCentre': [1070, 1600],
    # The square the figure is fitted to ends on the edge (a hair above the
    # outline drawn along it), so a host that sets the mascot's bottom on a
    # card's bottom edge and clips there has the flower coming up out of it.
    'box': [180, 248, 1780], 'outline': 64, 'feature': 20,
    'eyes': [[999, 1752], [1190, 1706]], 'mouth': [1114, 1852],
    'outlines': [{
        'path': 0, 'sub': 0,
        'faceHoles': {'eyeLeft': 3, 'eyeRight': 2, 'mouth': 1},
        'ranges': [
            {'name': 'top', 'kind': 'petal', 'from': 33, 'to': 3},
            {'name': 'upperRight', 'kind': 'petal', 'from': 3, 'to': 6},
            {'name': 'right', 'kind': 'petal', 'from': 6, 'to': 8},
            # The top of each hand is the body's own edge, scalloped over the
            # fingers. It stays with the body; the fingers move under it.
            {'name': 'handRight', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 8, 'to': 12},
            # the edge he holds on to, drawn as the body's bottom outline
            {'name': 'edge', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 12, 'to': 17},
            {'name': 'handLeft', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 17, 'to': 21},
            # A lobe behind the left hand. As a petal its wedge reached over the
            # hand's top edge and swayed across it, so it holds still.
            {'name': 'bottomLeft', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 21, 'to': 24},
            {'name': 'left', 'kind': 'petal', 'from': 24, 'to': 27},
            {'name': 'upperLeft', 'kind': 'petal', 'from': 27, 'to': 33},
        ],
    }],
    # Every finger is a hand of its own, curling down toward where it meets
    # the edge and leaning in toward the middle as it closes. Each part gets
    # its own phase, so they drum out of step. A finger turns about a point
    # two thirds down it, not its foot: at a hand's full 16 degrees its top
    # then swings about 30 units, and the gap it leaves under the static edge
    # above it stays under an outline's width, so it reads as a thicker line
    # and never as a hole.
    'shapeParts': [
        {'name': 'fingerRight1', 'role': 'hand', 'parent': 'handRight', 'dir': -1, 'pivot': [1522, 1985]},
        {'name': 'fingerRight2', 'role': 'hand', 'parent': 'handRight', 'dir': -1, 'pivot': [1652, 1985]},
        {'name': 'fingerRight3', 'role': 'hand', 'parent': 'handRight', 'dir': -1, 'pivot': [1756, 1985]},
        {'name': 'fingerLeft1', 'role': 'hand', 'parent': 'handLeft', 'dir': 1, 'pivot': [623, 1985]},
        {'name': 'fingerLeft2', 'role': 'hand', 'parent': 'handLeft', 'dir': 1, 'pivot': [515, 1985]},
        {'name': 'fingerLeft3', 'role': 'hand', 'parent': 'handLeft', 'dir': 1, 'pivot': [417, 1985]},
    ],
    'shapes': [{'path': 3, 'part': 'fingerRight1'}, {'path': 5, 'part': 'fingerRight2'}, {'path': 7, 'part': 'fingerRight3'},
               {'path': 4, 'part': 'fingerLeft1'}, {'path': 8, 'part': 'fingerLeft2'}, {'path': 6, 'part': 'fingerLeft3'}],
    # Each eye with its white highlight. The eyes are holes in the body and the
    # highlights separate paths (1, 2), so the SVG copy carries both, undrawn,
    # as one path per eye (9 and 10), the highlight wound against the eye.
    'faceShapes': {'eyeLeft': 9, 'eyeRight': 10},
    'marks': [],
    # The eyes are open, looking up over the edge. The glance looks down at
    # you and the thinking face up and away: the same shining eyes moved, not
    # the generated dots, which are drawn for poses with their eyes shut.
    'faceShifts': {'look': [6, 24], 'think': [14, -16]},
    'blinks': ['rest', 'grin', 'soft', 'look', 'think'],
    # how the module is written
    'var': 'peekBottomRig', 'out': 'src/shared/ui/mascot/rigs/peek-bottom.ts',
    'doc': "/** Peeking up over an edge, both hands gripping it: the mascot inside an answer card. Traced art (`assets-src/mascot/peek-bottom.svg`), split along its own outline by `scripts/mascot`; cut off at y 2032, which is the bottom of `box`. Each finger moves on its own. The head sways and the body squashes about the middle of the edge, but a hop, a lean or a held tilt lifts the cut into view: idle, `nod`, `poke` and `wince` suit it, the moves that jump do not. */",
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
