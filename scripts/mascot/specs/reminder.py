SPEC = {
    'name': 'reminder', 'svg': 'assets-src/mascot/reminder.svg',
    'center': [1100, 1000], 'headPivot': [1050, 1480], 'ground': [1000, 1965], 'bodyCentre': [1100, 1000],
    'box': [0, 40, 2048], 'outline': 64, 'feature': 20,
    'eyes': [[1027, 961], [1189, 930]], 'mouth': [1131, 1130],
    'outlines': [{
        'path': 0, 'sub': 0,
        'faceHoles': {'eyeLeft': 2, 'eyeRight': 3, 'mouth': 1},
        # the notches, the shoulder and the hips only
        'core': [3, 9, 14, 19, 21, 34, 37, 41, 55, 63, 67],
        'ranges': [
            {'name': 'top', 'kind': 'petal', 'from': 67, 'to': 3},
            {'name': 'upperRight', 'kind': 'petal', 'from': 3, 'to': 9},
            {'name': 'right', 'kind': 'petal', 'from': 9, 'to': 14},
            {'name': 'lowerRight', 'kind': 'petal', 'from': 14, 'to': 19},
            # the lobe behind the left hip, between the legs and left of the left one
            {'name': 'bottom', 'kind': 'petal', 'segs': [[19, 21], [34, 37]]},
            {'name': 'legLeft', 'kind': 'part', 'role': 'leg', 'dir': -1, 'from': 21, 'to': 34, 'pivot': [935, 1500]},
            {'name': 'lowerLeft', 'kind': 'petal', 'from': 37, 'to': 41},
            # The arm holding the clock up, and its fist. The clock lies against
            # the fist and against the petal beside it with no more than a
            # hairline between them, so the arm, the clock and that petal hold
            # still together; the clock's bells ring instead.
            {'name': 'armLeft', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 41, 'to': 55},
            {'name': 'left', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 55, 'to': 63},
            {'name': 'upperLeft', 'kind': 'petal', 'from': 63, 'to': 67},
        ],
    }],
    'shapeParts': [
        # the other leg, traced on its own, from the hip under the lower-right petal
        {'name': 'legRight', 'role': 'leg', 'dir': 1, 'pivot': [1262, 1492]},
        # the clock's ring, face and the thumb over it
        {'name': 'clock', 'role': 'static', 'parent': 'head', 'pivot': [435, 780]},
        # The bells and their arch on top of the clock rock about its stem:
        # a hand's waggle and its fingers' flex, which is the ringing.
        {'name': 'clockBells', 'role': 'hand', 'parent': 'clock', 'dir': 1, 'pivot': [355, 548]},
        # The other arm, traced on its own, ringing the hand bell from the
        # shoulder; the bell and the fingers round its handle are the hand.
        {'name': 'armRight', 'role': 'wave', 'parent': 'head', 'dir': 1, 'pivot': [1632, 1052]},
        {'name': 'handRight', 'role': 'hand', 'parent': 'armRight', 'dir': 1, 'pivot': [1715, 870]},
    ],
    'shapes': [{'path': 4, 'part': 'legRight'},
               {'path': 7, 'part': 'clock'}, {'path': 6, 'part': 'clock'}, {'path': 10, 'part': 'clock'},
               {'path': 8, 'part': 'clockBells'},
               {'path': 9, 'part': 'armRight'},
               {'path': 5, 'part': 'handRight'}, {'path': 15, 'part': 'handRight'}, {'path': 11, 'part': 'handRight'},
               {'path': 12, 'part': 'handRight'}],
    # Each eye with its white highlight and the open mouth with its tongue:
    # holes in the body with separate paths over them (2, 3, 1), so the SVG
    # copy carries each pair, undrawn, as one path (23, 24, 25), the inner
    # one wound against the outer.
    'faceShapes': {'eyeLeft': 23, 'eyeRight': 24, 'mouth': 25},
    # the ringing lines, each set popping out from what rings
    'marks': [
        {'name': 'ringClock', 'paths': [14, 17, 16, 21], 'part': 'clock', 'role': 'flicker', 'centre': [435, 760]},
        {'name': 'ringBell', 'paths': [13, 20, 22, 19, 18], 'part': 'handRight', 'role': 'flicker', 'centre': [1845, 560]},
    ],
    # The eyes are open: the glance looks over at the clock and the thinking
    # face up and away, with the same shining eyes, not the generated dots.
    'faceShifts': {'look': [-16, -4], 'think': [14, -16]},
    'blinks': ['rest', 'grin', 'soft', 'look', 'think'],
    # how the module is written
    'var': 'reminderRig', 'out': 'src/shared/ui/mascot/rigs/reminder.ts',
    'doc': "/** An alarm clock held up in one hand and a bell rung in the other: the reminder mascot. Traced art (`assets-src/mascot/reminder.svg`), split along its own outline by `scripts/mascot`; the clock, the fist under it and the petal against it are one still piece, and its bells rock as a hand. The bell is the other hand, rung from the shoulder; the ringing lines flicker. */",
    'moods': {'idle': 'rest', 'happy': 'rest', 'celebrate': 'rest', 'thinking': 'think', 'sad': 'soft', 'wave': 'rest'},
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
