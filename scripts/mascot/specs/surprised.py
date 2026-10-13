SPEC = {
    'name': 'surprised', 'svg': 'assets-src/mascot/surprised.svg',
    # the middle sits high, between the eyes: from there the swaying petals' wedges stay
    # clear of the slit round the right hand and the gap round the left one.
    # The head turns about the seam where the right leg comes out from under the bottom
    # petal: thinking holds the head 6-7 degrees over, and turned about any point higher or
    # further left the petal slides down over the leg and closes the line between them.
    'center': [1050, 700], 'headPivot': [1180, 1390], 'ground': [1060, 1955], 'bodyCentre': [1100, 1000],
    'box': [0, 40, 2048], 'outline': 64, 'feature': 20,
    'eyes': [[1025, 825], [1180, 781]], 'mouth': [1135, 942],
    'outlines': [{
        'path': 0, 'sub': 0,
        'faceHoles': {'eyeLeft': 3, 'eyeRight': 2, 'mouth': 1},
        'ranges': [
            {'name': 'top', 'kind': 'petal', 'from': 104, 'to': 2},
            {'name': 'upperRight', 'kind': 'petal', 'from': 2, 'to': 8},
            # the right hand is cut into the flower by a slit, over the two petals behind it:
            # held still with the face, so the slit never opens or closes. Closed past the
            # fingers and the forearm, so no swaying petal reaches the slit.
            {'name': 'handRight', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 8, 'to': 57,
             'toward': [1180, 900], 'overlap': 252},
            # the bottom petal sits between the right forearm and the legs. As a petal its wedge
            # reaches up past the slit, and a landing's flutter or celebrate's spread swings
            # that over the slit's lower edge, so it holds still with the face as well.
            {'name': 'bottom', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 57, 'to': 61},
            # the left leg on its own, so the two can shuffle, step and run in place; it turns about
            # the hip, just above where it comes out from under the petals (75-61), so its top stays
            # under the petals' paper whichever way it swings
            {'name': 'legLeft', 'kind': 'part', 'role': 'leg', 'dir': -1, 'from': 61, 'to': 75, 'pivot': [1060, 1265]},
            # the two petals round the bay the left arm lies in, held still for the same reason
            {'name': 'sideLeft', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 75, 'to': 91,
             'toward': [1060, 710], 'overlap': 466},
            {'name': 'left', 'kind': 'petal', 'from': 91, 'to': 97},
            {'name': 'upperLeft', 'kind': 'petal', 'from': 97, 'to': 104},
        ],
    }],
    # Each eye with its white highlight. The eyes are holes in the body and the highlights
    # separate paths, so the SVG copy carries both, undrawn, as one path per eye (9 and 10):
    # the highlight is wound against the eye and stays paper inside the ink. The generated
    # grin and soft faces reuse these eyes, so they keep the shine too.
    'faceShapes': {'eyeLeft': 9, 'eyeRight': 10},
    # The left arm, traced on its own and lying in that bay, its hand on the cheek. Both arms
    # stay still: each is outlined only by the hairline gap between it and the body (the bay
    # here, the slit on the right), about 15 units wide, so turned even 2 degrees about the
    # shoulder the hand closes the gap on one side and its outline vanishes into the face.
    'shapeParts': [{'name': 'armLeft', 'role': 'static', 'parent': 'sideLeft', 'pivot': [690, 1270]},
                   # the right leg, traced on its own, its top tucked under the bottom petal: it turns
                   # about that top, which no swing brings out from under the petal
                   {'name': 'legRight', 'role': 'leg', 'dir': 1, 'pivot': [1140, 1335]}],
    'shapes': [{'path': 3, 'part': 'legRight'}, {'path': 4, 'part': 'armLeft'}],
    # the gasp lines, carried by the head; each pair pops about the point its lines
    # radiate from, so on a landing they burst away from the face instead of into the petals
    'marks': [
        {'name': 'gaspLeft', 'paths': [5, 6], 'part': 'head', 'role': 'pop', 'centre': [613, 616]},
        {'name': 'gaspRight', 'paths': [7, 8], 'part': 'head', 'role': 'pop', 'centre': [1542, 616]},
    ],
    # eyes already wide open: the generated glance and thinking faces shrink them to dots
    'glance': None,
    # ...and because they are open in every face this pose wears, it blinks in all of them
    'blinks': ['rest', 'grin', 'soft', 'look', 'think'],
    # how the module is written
    'var': 'surprisedRig', 'out': 'src/shared/ui/mascot/rigs/surprised.ts',
    'doc': '/** Both hands on the cheeks, eyes wide, mouth an "o": the surprised mascot. Traced art (`assets-src/mascot/surprised.svg`), split along its own outline by `scripts/mascot`; the hands and the bottom petal stay with the face, each leg swings from its own hip, the gasp lines pop, and the wide eyes blink. */',
    'moods': {'idle': 'rest', 'happy': 'grin', 'celebrate': 'grin', 'thinking': 'soft', 'sad': 'soft', 'wave': 'rest'},
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
