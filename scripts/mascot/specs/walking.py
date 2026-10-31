SPEC = {
    'name': 'walking', 'svg': 'assets-src/mascot/walking.svg',
    'center': [1175, 790], 'headPivot': [1100, 1230], 'ground': [1100, 1935], 'bodyCentre': [1150, 1000],
    'box': [0, 40, 2048], 'outline': 64, 'feature': 20,
    'eyes': [[1308, 786], [1412, 754]], 'mouth': [1345, 862],
    'outlines': [{
        'path': 1, 'sub': 0,
        'ranges': [
            {'name': 'top', 'kind': 'petal', 'from': 54, 'to': 3},
            {'name': 'upperRight', 'kind': 'petal', 'from': 3, 'to': 10},
            {'name': 'right', 'kind': 'petal', 'from': 10, 'to': 16},
            {'name': 'lowerRight', 'kind': 'petal', 'from': 16, 'to': 22},
            {'name': 'bottom', 'kind': 'petal', 'from': 22, 'to': 30},
            {'name': 'lowerLeft', 'kind': 'petal', 'from': 30, 'to': 37},
            {'name': 'left', 'kind': 'petal', 'from': 37, 'to': 41},
            {'name': 'upperLeft', 'kind': 'petal', 'from': 41, 'to': 47},
            {'name': 'topLeft', 'kind': 'petal', 'from': 47, 'to': 54},
        ],
    }, {
        # The raised arm, traced on its own, cut at the wrist (14-11) so its hand flexes and waves
        # from there while the arm waves from the shoulder. Its shoulder end lies on the body, whose
        # paper hides its outline there. No middle of its own.
        'path': 9, 'sub': 0, 'core': False,
        'ranges': [
            {'name': 'armRight', 'kind': 'part', 'role': 'wave', 'parent': 'head', 'dir': -1, 'from': 11, 'to': 14,
             'toward': [1800, 950], 'overlap': 40, 'pivot': [1560, 960]},
            {'name': 'handRight', 'kind': 'part', 'role': 'hand', 'parent': 'armRight', 'dir': -1, 'from': 14, 'to': 11,
             'toward': [1650, 965], 'overlap': 40, 'pivot': [1740, 962]},
        ],
    }],
    'shapeParts': [
        {'name': 'leg', 'role': 'stand', 'pivot': [1100, 1930]},
        {'name': 'hold', 'role': 'hold', 'pivot': [985, 1160]},
    ],
    'shapes': [{'path': 5, 'part': 'leg'}, {'path': 10, 'part': 'hold'}, {'path': 7, 'part': 'hold'},
               {'path': 11, 'part': 'hold'}],
    'lines': [{'path': 6, 'part': 'leg'}, {'path': 8, 'part': 'hold'}],
    'faceShapes': {'eyeLeft': 4, 'eyeRight': 3, 'mouth': 2},
    'marks': [{'name': 'foot', 'paths': [12, 13], 'role': 'flicker'}],
    # how the module is written
    'var': 'walkingRig', 'out': 'src/shared/ui/mascot/rigs/walking.ts',
    'doc': '/** On one leg, the other foot in hand: the stretching mascot. Traced art (`assets-src/mascot/walking.svg`), split by `scripts/mascot` and drawn without its black outline so it matches the rest; the raised hand flexes from its wrist. */',
    'moods': {'idle': 'rest', 'happy': 'grin', 'celebrate': 'grin', 'thinking': 'think', 'sad': 'soft', 'wave': 'rest'},
    'markOverrides': {'foot': {'thicken': 14}},
}
