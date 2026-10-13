SPEC = {
    'name': 'pointing', 'svg': 'assets-src/mascot/pointing.svg',
    'center': [1000, 860], 'headPivot': [1000, 1300], 'ground': [940, 1912], 'bodyCentre': [1000, 1000],
    'box': [0, 40, 2048], 'outline': 64, 'feature': 20,
    'eyes': [[980, 830], [1131, 776]], 'mouth': [1057, 908],
    'outlines': [{
        'path': 0, 'sub': 0,
        'faceHoles': {'eyeLeft': 5, 'eyeRight': 3, 'mouth': 1},
        # the wrist points (20, 32) stay out of the middle, or it would keep a ghost of the forearm when the arm moves
        # and its edge runs from hip to crotch to hip (40, 52, 63), so neither leg is under it
        'core': [0, 4, 11, 16, 17, 34, 37, 40, 52, 63, 71, 89, 94],
        'ranges': [
            {'name': 'top', 'kind': 'petal', 'from': 0, 'to': 4},
            {'name': 'upperRight', 'kind': 'petal', 'from': 4, 'to': 11},
            {'name': 'right', 'kind': 'petal', 'from': 11, 'to': 16},
            # the petal the pointing arm comes out of: its edge above the arm and below it
            {'name': 'lowerRight', 'kind': 'petal', 'segs': [[16, 17], [34, 37]]},
            # both joints turn about their lower corner (34, 32): the arm and hand mostly go up, so the corner that would open
            # under them stays shut and the upper one folds into the body
            {'name': 'armRight', 'kind': 'part', 'role': 'wave', 'parent': 'head', 'dir': -1, 'segs': [[17, 20], [32, 34]], 'pivot': [1515, 1049]},
            {'name': 'handRight', 'kind': 'part', 'role': 'hand', 'parent': 'armRight', 'dir': -1, 'from': 20, 'to': 32,
             'toward': [1492, 1018], 'overlap': 60, 'pivot': [1660, 1011]},
            {'name': 'bottomRight', 'kind': 'petal', 'from': 37, 'to': 40},
            # the legs part at the crotch (52), each swinging about the middle of its top
            {'name': 'legRight', 'kind': 'part', 'role': 'leg', 'dir': 1, 'from': 40, 'to': 52},
            {'name': 'legLeft', 'kind': 'part', 'role': 'leg', 'dir': -1, 'from': 52, 'to': 63},
            # the body behind the hand on the hip: held still, so the slit along the fist never opens or closes;
            # the arm akimbo stays still with it, since a turn at the shoulder or the wrist slides the fist along that slit
            {'name': 'side', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 63, 'to': 71, 'overlap': 80},
            {'name': 'armLeft', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 71, 'to': 89},
            {'name': 'left', 'kind': 'petal', 'from': 89, 'to': 94},
            {'name': 'upperLeft', 'kind': 'petal', 'from': 94, 'to': 0},
        ],
    }],
    # the two curled fingers, traced on their own
    'shapes': [{'path': 3, 'part': 'handRight'}, {'path': 4, 'part': 'handRight'}],
    'marks': [
        {'name': 'point', 'paths': [1, 2], 'part': 'handRight', 'role': 'flicker'},
    ],
    # how the module is written
    'var': 'pointingRig', 'out': 'src/shared/ui/mascot/rigs/pointing.ts',
    'doc': '/** Pointing the way, the other hand on the hip: the "over here" mascot. Traced art (`assets-src/mascot/pointing.svg`), split along its own outline by `scripts/mascot`; the pointing hand flicks from the wrist. */',
    'moods': {'idle': 'rest', 'happy': 'grin', 'celebrate': 'grin', 'thinking': 'think', 'sad': 'soft', 'wave': 'rest'},
    'markOverrides': {},
}
