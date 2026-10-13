SPEC = {
    'name': 'sad', 'svg': 'assets-src/mascot/sad.svg',
    'center': [1080, 900], 'headPivot': [1060, 1350], 'ground': [1040, 1925], 'bodyCentre': [1080, 950],
    'box': [0, 40, 2048], 'outline': 64, 'feature': 20,
    'eyes': [[1078, 900], [1266, 933]], 'mouth': [1143, 1019],
    'outlines': [{
        'path': 0, 'sub': 0,
        # sub 4 is the tear: a hole that is not a face feature, so it stays on
        # the petal around it (it sits on that petal's pivot, so it barely moves)
        'faceHoles': {'eyeLeft': 2, 'eyeRight': 3, 'mouth': 1},
        # the notches only, as before the hand was cut from the arm: a wrist in the core would leave a still forearm
        'core': [6, 11, 16, 21, 26, 30, 49, 55, 60, 66],
        'ranges': [
            {'name': 'top', 'kind': 'petal', 'from': 66, 'to': 6},
            {'name': 'upperRight', 'kind': 'petal', 'from': 6, 'to': 11},
            {'name': 'right', 'kind': 'petal', 'from': 11, 'to': 16},
            {'name': 'lowerRight', 'kind': 'petal', 'from': 16, 'to': 21},
            {'name': 'bottom', 'kind': 'petal', 'from': 21, 'to': 26},
            {'name': 'bottomLeft', 'kind': 'petal', 'from': 26, 'to': 30},
            # turns about the top of the slit by the lobe, so swinging out
            # covers that slit instead of leaving a dash of it floating
            {'name': 'armLeft', 'kind': 'part', 'role': 'raise', 'parent': 'head', 'dir': 1, 'segs': [[30, 32], [47, 49]],
             'pivot': [803, 1239], 'overlap': 30},
            # the hand from the wrist (32, 47), turning about the middle of it
            {'name': 'handLeft', 'kind': 'part', 'role': 'hand', 'parent': 'armLeft', 'dir': 1, 'from': 32, 'to': 47,
             'toward': [800, 1400], 'overlap': 50},
            {'name': 'lowerLeft', 'kind': 'petal', 'from': 49, 'to': 55},
            {'name': 'left', 'kind': 'petal', 'from': 55, 'to': 60},
            {'name': 'upperLeft', 'kind': 'petal', 'from': 60, 'to': 66},
        ],
    }, {
        # the other arm, traced on its own: it turns about its own tip, tucked in the notch under the petals,
        # and its hand about the wrist (2, 21)
        'path': 3, 'sub': 0, 'core': False,
        'ranges': [
            {'name': 'armRight', 'kind': 'part', 'role': 'raise', 'parent': 'head', 'dir': -1, 'from': 21, 'to': 2,
             'pivot': [1263, 1312], 'toward': [1280, 1600], 'overlap': 30},
            {'name': 'handRight', 'kind': 'part', 'role': 'hand', 'parent': 'armRight', 'dir': -1, 'from': 2, 'to': 21,
             'toward': [1270, 1420], 'overlap': 50},
        ],
    }],
    # the legs, traced on their own, each swinging about the middle of its top, tucked under a petal
    'shapeParts': [
        {'name': 'legLeft', 'role': 'leg', 'dir': -1, 'pivot': [956, 1331]},
        {'name': 'legRight', 'role': 'leg', 'dir': 1, 'pivot': [1094, 1415]},
    ],
    'shapes': [{'path': 1, 'part': 'legLeft'}, {'path': 2, 'part': 'legRight'}],
    'marks': [
        {'name': 'gloom', 'paths': [4, 5], 'part': 'head', 'role': 'ache'},
        # the bounce lines by the right shoe's toe go with that leg, so the toe never swings into them
        {'name': 'feetRight', 'paths': [6, 7], 'part': 'legRight', 'role': 'pop'},
    ],
    # how the module is written
    'var': 'sadRig', 'out': 'src/shared/ui/mascot/rigs/sad.ts',
    'doc': '/** Arms hanging, eyes shut, a tear: the sad mascot. Traced art (`assets-src/mascot/sad.svg`), split along its own outline by `scripts/mascot`; the gloom lines by the head are ache marks, so they show while it is sad and go when it cheers up. */',
    'moods': {'idle': 'rest', 'happy': 'grin', 'celebrate': 'grin', 'thinking': 'think', 'sad': 'rest', 'wave': 'soft'},
    'markOverrides': {},
}
