SPEC = {
    'name': 'idle', 'svg': 'assets-src/mascot/idle.svg',
    'center': [1045, 850], 'headPivot': [990, 1230], 'ground': [1025, 1918], 'bodyCentre': [1040, 980],
    'box': [0, 40, 2048], 'outline': 64, 'feature': 20,
    'eyes': [[966, 775], [1106, 774]], 'mouth': [1036, 895],
    'outlines': [
        {
            'path': 0, 'sub': 0,
            'faceHoles': {'eyeLeft': 3, 'eyeRight': 2, 'mouth': 1},
            'core': [0, 6, 10, 13, 16, 20, 32, 58, 62, 66],
            'ranges': [
                {'name': 'top', 'kind': 'petal', 'from': 0, 'to': 6},
                {'name': 'upperRight', 'kind': 'petal', 'from': 6, 'to': 10},
                {'name': 'right', 'kind': 'petal', 'from': 10, 'to': 13},
                {'name': 'lowerRight', 'kind': 'petal', 'from': 13, 'to': 16},
                {'name': 'bottom', 'kind': 'petal', 'from': 16, 'to': 20},
                # the leg on screen-left, from the notch under the bottom petal round the shoe and up to the
                # one under the lower-left petal; it swings about the middle of that seam, its hip
                {'name': 'legLeft', 'kind': 'part', 'role': 'leg', 'dir': -1, 'from': 20, 'to': 32, 'pivot': [983, 1200]},
                {'name': 'lowerLeft', 'kind': 'petal', 'segs': [[32, 34], [56, 58]]},
                {'name': 'armLeft', 'kind': 'part', 'role': 'raise', 'parent': 'head', 'dir': 1, 'segs': [[34, 35], [54, 56]],
                 'pivot': [703, 1304]},
                {'name': 'handLeft', 'kind': 'part', 'role': 'hand', 'parent': 'armLeft', 'dir': 1, 'from': 35, 'to': 54,
                 'toward': [690, 1330], 'overlap': 50},
                {'name': 'left', 'kind': 'petal', 'from': 58, 'to': 62},
                {'name': 'upperLeft', 'kind': 'petal', 'from': 62, 'to': 66},
                {'name': 'topLeft', 'kind': 'petal', 'from': 66, 'to': 0},
            ],
        },
        {
            # the other arm, traced on its own and hanging apart from the body
            'path': 2, 'sub': 0, 'core': False,
            'ranges': [
                {'name': 'armRight', 'kind': 'part', 'role': 'wave', 'parent': 'head', 'dir': -1, 'from': 22, 'to': 3,
                 'pivot': [1334, 1268], 'toward': [1395, 1540], 'overlap': 40},
                {'name': 'handRight', 'kind': 'part', 'role': 'hand', 'parent': 'armRight', 'dir': -1, 'from': 3, 'to': 22,
                 'toward': [1350, 1320], 'overlap': 50},
            ],
        },
    ],
    # the other leg, traced on its own, swings about the middle of its top, which is tucked under the bottom petal
    'shapeParts': [{'name': 'legRight', 'role': 'leg', 'dir': 1, 'pivot': [1097, 1352]}],
    'shapes': [{'path': 1, 'part': 'legRight'}],
    'marks': [],
    # how the module is written
    'var': 'idleRig', 'out': 'src/shared/ui/mascot/rigs/idle.ts',
    'doc': '/** Standing at ease, arms hanging, eyes shut in a smile: the onboarding\'s everyday mascot. Traced art (`assets-src/mascot/idle.svg`), split along its own outline by `scripts/mascot`. */',
    'moods': {'idle': 'rest', 'happy': 'grin', 'celebrate': 'grin', 'thinking': 'think', 'sad': 'soft', 'wave': 'rest'},
    'markOverrides': {},
}
