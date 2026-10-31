SPEC = {
    'name': 'thinking', 'svg': 'assets-src/mascot/thinking.svg',
    'center': [1020, 800], 'headPivot': [1050, 1340], 'ground': [1046, 1938], 'bodyCentre': [1040, 1000],
    'box': [0, 40, 2048], 'outline': 64, 'feature': 20,
    'eyes': [[1035, 803], [1200, 731]], 'mouth': [1152, 870],
    'outlines': [{
        'path': 0, 'sub': 0,
        'faceHoles': {'eyeLeft': 2, 'eyeRight': 1, 'mouth': 3},
        'ranges': [
            {'name': 'top', 'kind': 'petal', 'from': 0, 'to': 4},
            {'name': 'upperRight', 'kind': 'petal', 'from': 4, 'to': 10},
            # The two petals beside the frozen ones turn about the notch they share
            # with them (anchor 16, anchor 51) rather than the middle of their base,
            # so that notch never opens or doubles when they flutter or spread.
            {'name': 'right', 'kind': 'petal', 'from': 10, 'to': 16, 'pivot': [1481.2, 901.9]},
            # The three petals around the folded arms stay put with the flower: a
            # petal's paper runs to the flower's middle, and swaying it would slide
            # that paper over the arms' outline, which is drawn under every paper.
            {'name': 'lowerRight', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 16, 'to': 21},
            {'name': 'bottomRight', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 21, 'to': 26},
            # the bay the folded arms sit in: its edge is the arms' outer outline
            {'name': 'arms', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 26, 'to': 47},
            {'name': 'bottomLeft', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 47, 'to': 51},
            {'name': 'lowerLeft', 'kind': 'petal', 'from': 51, 'to': 57, 'pivot': [779.8, 1127.0]},
            {'name': 'left', 'kind': 'petal', 'from': 57, 'to': 61},
            {'name': 'upperLeft', 'kind': 'petal', 'from': 61, 'to': 0},
        ],
    }],
    # the legs, traced on their own, each swinging about the middle of its top, tucked under the folded arms
    'shapeParts': [
        {'name': 'legLeft', 'role': 'leg', 'dir': -1, 'pivot': [1030, 1360]},
        {'name': 'legRight', 'role': 'leg', 'dir': 1, 'pivot': [1122, 1336]},
    ],
    # The hand on the chin, the arm across the belly, and the flower between them stay one still piece: they
    # interlock inside the bay, whose edge is their outline, so any one of them turning would slide off it.
    'shapes': [{'path': 4, 'part': 'arms'}, {'path': 5, 'part': 'arms'}, {'path': 6, 'part': 'arms'},
               {'path': 2, 'part': 'legLeft'}, {'path': 1, 'part': 'legRight'}],
    'marks': [
        # pops from the foot of its dot, away from the petal under it
        {'name': 'question', 'paths': [3, 7], 'part': 'head', 'role': 'pop', 'centre': [1609, 584]},
        {'name': 'dashes', 'paths': [8, 9], 'part': 'head', 'role': 'flicker', 'centre': [1770, 490]},
    ],
    # how the module is written
    'var': 'thinkingRig', 'out': 'src/shared/ui/mascot/rigs/thinking.ts',
    'doc': '/** Hand on the chin, eyes up, a question mark over the head: the thinking mascot. Traced art (`assets-src/mascot/thinking.svg`), split along its own outline by `scripts/mascot`; the folded arms move with the flower. */',
    # The drawing already wears the thinking face (pupils under lids, looking up, a
    # smile). The generated 'think' and 'look' faces swap those eyes for dots about
    # half their size, which at phone size reads as no face at all, so the thinking
    # state keeps the drawn face and he never glances (as surprised.py does). The
    # cost: 'rest' is not a blinking face, so he does not blink while thinking.
    'glance': None,
    'moods': {'idle': 'rest', 'happy': 'grin', 'celebrate': 'grin', 'thinking': 'rest', 'sad': 'soft', 'wave': 'rest'},
    'markOverrides': {},
}
