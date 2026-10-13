SPEC = {
    'name': 'handsUp', 'svg': 'assets-src/mascot/hands-up.svg',
    'center': [1030, 880], 'headPivot': [1060, 1330], 'ground': [1000, 1955], 'bodyCentre': [1040, 1000],
    'box': [0, 40, 2048], 'outline': 64, 'feature': 20,
    'eyes': [[1002, 750], [1131, 723]], 'mouth': [1076, 880],
    'outlines': [{
        'path': 0, 'sub': 0,
        'faceHoles': {'eyeLeft': 3, 'eyeRight': 2, 'mouth': 1},
        # The middle, through where every petal, arm and leg leaves the body. Written out so the
        # wrists (19, 37, 83, 100) stay out of it, or it would keep a ghost of each forearm when the
        # arm moves; it dips to the crotch (61), so each leg's top tucks under it.
        'core': [0, 5, 12, 16, 40, 44, 50, 61, 72, 77, 81, 103, 107, 112],
        'ranges': [
            {'name': 'top', 'kind': 'petal', 'from': 0, 'to': 5},
            {'name': 'upperRight', 'kind': 'petal', 'from': 5, 'to': 12},
            {'name': 'right', 'kind': 'petal', 'from': 12, 'to': 16},
            # each raised arm is cut at the wrist, so its open hand flexes and waves on its own
            {'name': 'armRight', 'kind': 'part', 'role': 'raise', 'parent': 'head', 'dir': 1, 'segs': [[16, 19], [37, 40]]},
            {'name': 'handRight', 'kind': 'part', 'role': 'hand', 'parent': 'armRight', 'dir': 1, 'from': 19, 'to': 37,
             'toward': [1700, 880], 'overlap': 60, 'pivot': [1821, 740]},
            {'name': 'lowerRight', 'kind': 'petal', 'from': 40, 'to': 44},
            {'name': 'bottomRight', 'kind': 'petal', 'from': 44, 'to': 50},
            # each leg on its own, cut at the crotch (61): each turns about its hip, in the middle of
            # where it leaves the body. The feet touch along a slit, which opens as they part
            {'name': 'legRight', 'kind': 'part', 'role': 'leg', 'dir': 1, 'from': 50, 'to': 61, 'pivot': [1090, 1330]},
            {'name': 'legLeft', 'kind': 'part', 'role': 'leg', 'dir': -1, 'from': 61, 'to': 72, 'pivot': [1000, 1350]},
            {'name': 'bottomLeft', 'kind': 'petal', 'from': 72, 'to': 77},
            {'name': 'lowerLeft', 'kind': 'petal', 'from': 77, 'to': 81},
            {'name': 'armLeft', 'kind': 'part', 'role': 'raise', 'parent': 'head', 'dir': -1, 'segs': [[81, 83], [100, 103]]},
            {'name': 'handLeft', 'kind': 'part', 'role': 'hand', 'parent': 'armLeft', 'dir': -1, 'from': 83, 'to': 100,
             'toward': [420, 990], 'overlap': 60, 'pivot': [311, 890]},
            {'name': 'left', 'kind': 'petal', 'from': 103, 'to': 107},
            {'name': 'upperLeft', 'kind': 'petal', 'from': 107, 'to': 112},
            {'name': 'topLeft', 'kind': 'petal', 'from': 112, 'to': 0},
        ],
    }],
    'marks': [
        {'name': 'feetLeft', 'paths': [1, 4], 'role': 'pop'},
        {'name': 'feetRight', 'paths': [2, 5], 'role': 'pop'},
        {'name': 'feetMid', 'paths': [3], 'role': 'pop'},
    ],
    # how the module is written
    'var': 'handsUpRig', 'out': 'src/shared/ui/mascot/rigs/hands-up.ts',
    'doc': '/** Both hands up, beaming: the "no pain" mascot. Traced art (`assets-src/mascot/hands-up.svg`), split along its own outline by `scripts/mascot`; each hand flexes from its wrist and each leg swings from its own hip. */',
    'moods': {'idle': 'rest', 'happy': 'grin', 'celebrate': 'grin', 'thinking': 'think', 'sad': 'soft', 'wave': 'rest'},
    'markOverrides': {},
}
