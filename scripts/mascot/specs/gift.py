SPEC = {
    'name': 'gift', 'svg': 'assets-src/mascot/gift.svg',
    'center': [1230, 760], 'headPivot': [1170, 1220], 'ground': [1085, 1955], 'bodyCentre': [1150, 1000],
    'box': [0, 40, 2048], 'outline': 64, 'feature': 20,
    'eyes': [[1113, 772], [1252, 743]], 'mouth': [1186, 900],
    'outlines': [{
        'path': 0, 'sub': 0,
        'faceHoles': {'eyeLeft': 3, 'eyeRight': 2, 'mouth': 1},
        # dips to the crotch (53), so each leg's top tucks under it whichever way it swings
        'core': [0, 5, 10, 13, 16, 36, 40, 53, 66, 77, 84],
        'ranges': [
            {'name': 'top', 'kind': 'petal', 'from': 0, 'to': 5},
            {'name': 'upperRight', 'kind': 'petal', 'from': 5, 'to': 10},
            {'name': 'right', 'kind': 'petal', 'from': 10, 'to': 13},
            {'name': 'lowerRight', 'kind': 'petal', 'from': 13, 'to': 16},
            {'name': 'armRight', 'kind': 'part', 'role': 'wave', 'parent': 'head', 'dir': 1, 'segs': [[16, 18], [35, 36]]},
            {'name': 'handRight', 'kind': 'part', 'role': 'hand', 'parent': 'armRight', 'dir': 1, 'from': 18, 'to': 35,
             'toward': [1600, 1150], 'overlap': 50},
            {'name': 'bottomRight', 'kind': 'petal', 'from': 36, 'to': 40},
            # each leg on its own, cut at the crotch (53): each turns about its hip, in the middle of
            # where it leaves the body. The left one runs up beside the box, with open air between
            {'name': 'legRight', 'kind': 'part', 'role': 'leg', 'dir': 1, 'from': 40, 'to': 53, 'pivot': [1185, 1265]},
            {'name': 'legLeft', 'kind': 'part', 'role': 'leg', 'dir': -1, 'from': 53, 'to': 66, 'pivot': [1120, 1265]},
            {'name': 'side', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 66, 'to': 77, 'overlap': 80},
            {'name': 'left', 'kind': 'petal', 'from': 77, 'to': 84},
            {'name': 'topLeft', 'kind': 'petal', 'from': 84, 'to': 0},
        ],
    }],
    'shapeParts': [{'name': 'gift', 'role': 'hold', 'parent': 'head', 'pivot': [1000, 1180]}],
    'shapes': [{'path': i, 'part': 'gift'} for i in (1, 2, 3, 4, 5, 6, 7, 14)],
    # the flower behind the box, never seen at rest: paper for when the box moves
    'underlays': [{'part': 'head', 'poly': [[1121, 1188], [1080, 1249], [1059, 1275], [985, 1215], [930, 1050], [880, 900], [800, 800],
                                             [821, 742], [865, 768], [921, 801], [955, 906], [950, 943], [971, 1009], [1005, 1111], [1034, 1198]]}],
    'marks': [
        {'name': 'hand', 'paths': [8, 9], 'part': 'armRight', 'role': 'flicker'},
        {'name': 'feetLeft', 'paths': [11, 12], 'role': 'pop'},
        {'name': 'feetRight', 'paths': [10, 13], 'role': 'pop'},
    ],
    # how the module is written
    'var': 'giftRig', 'out': 'src/shared/ui/mascot/rigs/gift.ts',
    'doc': "/** Holding a gift and waving: the paywall's mascot. Traced art (`assets-src/mascot/gift.svg`), split along its own outline by `scripts/mascot`; the gift and the hand under it move as one, the waving hand flexes from its wrist, and each leg swings from its own hip. */",
    'moods': {'idle': 'rest', 'happy': 'grin', 'celebrate': 'grin', 'thinking': 'think', 'sad': 'soft', 'wave': 'rest'},
    'markOverrides': {},
}
