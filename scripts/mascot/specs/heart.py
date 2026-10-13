SPEC = {
    'name': 'heart', 'svg': 'assets-src/mascot/heart.svg',
    'center': [1150, 780], 'headPivot': [1080, 1500], 'ground': [1000, 2005], 'bodyCentre': [1150, 900],
    'box': [0, 40, 2048], 'outline': 64, 'feature': 20,
    'eyes': [[1092, 792], [1285, 720]], 'mouth': [1201, 852],
    'outlines': [{
        'path': 0, 'sub': 0,
        'faceHoles': {'eyeLeft': 3, 'eyeRight': 2, 'mouth': 1},
        # the notches only: the hand on the heart is not in the middle, so it
        # never leaves a still wrist behind when it squeezes
        'core': [0, 7, 12, 16, 20, 36, 45, 49, 52],
        'ranges': [
            {'name': 'top', 'kind': 'petal', 'from': 0, 'to': 7},
            {'name': 'upperRight', 'kind': 'petal', 'from': 7, 'to': 12},
            {'name': 'right', 'kind': 'petal', 'from': 12, 'to': 16},
            # down to the inner end of the slit that parts it from the arm
            {'name': 'lowerRight', 'kind': 'petal', 'from': 16, 'to': 20},
            # The right arm, from the slit to the wrist; its upper edge runs
            # along the heart. It stays with the body.
            {'name': 'armRight', 'kind': 'part', 'role': 'static', 'parent': 'head', 'segs': [[20, 24], [34, 36]]},
            # the right hand's fingers round the heart's lower lobe: they go with
            # the heart, and squeeze it when they flex
            # (closed past the wrist, into the arm: the fingers curl away from it)
            {'name': 'handRight', 'kind': 'part', 'role': 'hand', 'parent': 'heart', 'dir': 1, 'from': 24, 'to': 34,
             'pivot': [1290, 1420], 'toward': [1400, 1500], 'overlap': 60},
            # The body's edge round the heart's top and left side, down to the
            # left hand. A petal here would sway across the heart's outline.
            {'name': 'behindHeart', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 36, 'to': 45},
            {'name': 'lowerLeft', 'kind': 'petal', 'from': 45, 'to': 49},
            {'name': 'left', 'kind': 'petal', 'from': 49, 'to': 52},
            {'name': 'upperLeft', 'kind': 'petal', 'from': 52, 'to': 0},
        ],
    }],
    'shapeParts': [
        # The heart held to the chest, and the left hand on it (its arm is
        # behind the heart); the right hand's fingers ride on it too. Still,
        # never 'hold': the body is cut round the heart with a hairline between
        # them, and a hold's lift (2.5 to 7% of the box on happy, celebrate and
        # present) slid it into the body, which swallowed its outline.
        {'name': 'heart', 'role': 'static', 'parent': 'head', 'pivot': [1070, 1250]},
        {'name': 'handLeft', 'role': 'hand', 'parent': 'heart', 'dir': -1, 'pivot': [860, 1300]},
        # the legs, each traced on its own, come out from under the heart
        {'name': 'legLeft', 'role': 'leg', 'dir': -1, 'pivot': [915, 1505]},
        {'name': 'legRight', 'role': 'leg', 'dir': 1, 'pivot': [1090, 1545]},
    ],
    'shapes': [{'path': 1, 'part': 'heart'}, {'path': 4, 'part': 'handLeft'},
               {'path': 3, 'part': 'legLeft'}, {'path': 2, 'part': 'legRight'}],
    # the little hearts by the head: gone in the air, popping as he lands
    'marks': [
        {'name': 'heartLeft', 'paths': [6], 'part': 'head', 'role': 'pop'},
        {'name': 'heartRight', 'paths': [5], 'part': 'head', 'role': 'pop'},
    ],
    # how the module is written
    'var': 'heartRig', 'out': 'src/shared/ui/mascot/rigs/heart.ts',
    'doc': "/** Hugging a big heart to the chest, eyes shut in a smile: the caring mascot. Traced art (`assets-src/mascot/heart.svg`), split along its own outline by `scripts/mascot`; the heart stays against the chest and both hands squeeze it when they flex, each leg turns at its hip, and the little hearts pop. */",
    'moods': {'idle': 'rest', 'happy': 'grin', 'celebrate': 'grin', 'thinking': 'think', 'sad': 'soft', 'wave': 'rest'},
    'markOverrides': {},
}
