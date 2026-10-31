SPEC = {
    'name': 'wave', 'svg': 'assets-src/mascot/wave.svg',
    'center': [980, 880], 'headPivot': [1000, 1430], 'ground': [960, 1985], 'bodyCentre': [1000, 900],
    'box': [0, 40, 2048], 'outline': 64, 'feature': 20,
    'eyes': [[899, 905], [1115, 830]], 'mouth': [1018, 977],
    'outlines': [{
        'path': 0, 'sub': 0,
        'faceHoles': {'eyeLeft': 3, 'eyeRight': 2, 'mouth': 1},
        # the notches and the shoulders and hips only: a wrist in the core would
        # leave a still forearm behind when the arm moves
        'core': [3, 7, 10, 32, 33, 37, 46, 47, 56, 58, 61, 85, 89, 92],
        'ranges': [
            {'name': 'top', 'kind': 'petal', 'from': 92, 'to': 3},
            {'name': 'upperRight', 'kind': 'petal', 'from': 3, 'to': 7},
            # The raised arm comes out of this petal's edge, so it is cut in
            # two around the shoulder and turns about it: the edges either
            # side of the arm barely move, and the lobe still sways.
            {'name': 'right', 'kind': 'petal', 'segs': [[7, 10], [32, 33]], 'pivot': [1580, 829]},
            # `dir` on an arm swings it out, away from the body; a hand takes its
            # arm's, so a wave turns the wrist the way the shoulder goes.
            {'name': 'armRight', 'kind': 'part', 'role': 'wave', 'parent': 'head', 'dir': 1, 'segs': [[10, 11], [31, 32]],
             'pivot': [1585, 835]},
            {'name': 'handRight', 'kind': 'part', 'role': 'hand', 'parent': 'armRight', 'dir': 1, 'from': 11, 'to': 31,
             'toward': [1660, 680], 'overlap': 50},
            {'name': 'lowerRight', 'kind': 'petal', 'from': 33, 'to': 37},
            {'name': 'legRight', 'kind': 'part', 'role': 'leg', 'dir': 1, 'from': 37, 'to': 46, 'pivot': [1100, 1395]},
            # the lobe behind both hips: between the legs, and left of the left one
            {'name': 'bottom', 'kind': 'petal', 'segs': [[46, 47], [56, 58]]},
            {'name': 'legLeft', 'kind': 'part', 'role': 'leg', 'dir': -1, 'from': 47, 'to': 56, 'pivot': [900, 1445]},
            {'name': 'lowerLeft', 'kind': 'petal', 'from': 58, 'to': 61},
            {'name': 'armLeft', 'kind': 'part', 'role': 'arm', 'parent': 'head', 'dir': 1, 'segs': [[61, 62], [82, 85]],
             'pivot': [490, 1120]},
            {'name': 'handLeft', 'kind': 'part', 'role': 'hand', 'parent': 'armLeft', 'dir': 1, 'from': 62, 'to': 82,
             'toward': [350, 1340], 'overlap': 50},
            {'name': 'left', 'kind': 'petal', 'from': 85, 'to': 89},
            {'name': 'upperLeft', 'kind': 'petal', 'from': 89, 'to': 92},
        ],
    }],
    'marks': [
        # the wave lines by the hand flicker as it waves; the two by the right
        # toe are a step, popping as the foot lands
        {'name': 'hand', 'paths': [1, 2], 'part': 'armRight', 'role': 'flicker'},
        {'name': 'step', 'paths': [3, 4], 'part': 'legRight', 'role': 'pop'},
    ],
    # how the module is written
    'var': 'waveRig', 'out': 'src/shared/ui/mascot/rigs/wave.ts',
    'doc': '/** Mid-stride, one hand up and waving, eyes shut in a smile: the hello mascot. Traced art (`assets-src/mascot/wave.svg`), split along its own outline by `scripts/mascot`; each leg turns at its hip, the hanging arm and its hand sway on their own. */',
    'moods': {'idle': 'rest', 'happy': 'grin', 'celebrate': 'grin', 'thinking': 'think', 'sad': 'soft', 'wave': 'rest'},
    'markOverrides': {},
}
