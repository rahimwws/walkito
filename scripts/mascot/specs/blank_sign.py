SPEC = {
    'name': 'blankSign', 'svg': 'assets-src/mascot/blank-sign.svg',
    # The flower is above the sign and its body behind it, and the sign is a part on the head (so
    # it is drawn over the flower): the head turns and breathes about the middle of the sign, so
    # text laid over it stays where it was and only turns a degree or two with a glance. About
    # the sign's foot, a glance slid the middle of the sign 17 units sideways under the text.
    'center': [1035, 520], 'headPivot': [1024, 1243], 'ground': [1000, 1985], 'bodyCentre': [1035, 900],
    'box': [0, 40, 2048], 'outline': 64, 'feature': 20,
    'eyes': [[925, 694], [1172, 731]], 'mouth': [1042, 822],
    'outlines': [
        {
            # the flower
            'path': 1, 'sub': 0,
            'faceHoles': {'eyeLeft': 2, 'eyeRight': 3, 'mouth': 1},
            'core': [0, 4, 8, 12, 14, 16, 21],
            'ranges': [
                {'name': 'top', 'kind': 'petal', 'from': 0, 'to': 4},
                {'name': 'upperRight', 'kind': 'petal', 'from': 4, 'to': 8},
                # The lobes down to the sign hold still: their lower edges run along the top of each
                # hand, a slit apart, and the flat foot of the flower lies along the sign's top.
                {'name': 'lowerRight', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 8, 'to': 12},
                {'name': 'bottom', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 12, 'to': 14},
                {'name': 'lowerLeft', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 14, 'to': 16},
                {'name': 'left', 'kind': 'petal', 'from': 16, 'to': 21},
                {'name': 'topLeft', 'kind': 'petal', 'from': 21, 'to': 0},
            ],
        },
        {
            # the sign, and the legs under it
            'path': 0, 'sub': 0, 'core': False,
            'ranges': [
                # The sign, one rectangle with its foot between the legs, both hands gripping its top:
                # held in front of the flower (a part on the head, drawn over it) and still, so text
                # laid over it stays put. Its own outline dips round the fingertips, which never move
                # off it. Closed along its foot over the left leg (toward a point under it).
                {'name': 'sign', 'kind': 'part', 'role': 'static', 'parent': 'head', 'segs': [[39, 18], [29, 31]],
                 'pivot': [1024, 1243], 'toward': [889, 1800], 'overlap': 4},
                # each leg from the hip, behind the sign; their tops reach well up under it, which a
                # sad sink lifts by a few units
                {'name': 'legRight', 'kind': 'part', 'role': 'leg', 'dir': 1, 'from': 18, 'to': 29, 'pivot': [1158, 1545],
                 'overlap': 120},
                {'name': 'legLeft', 'kind': 'part', 'role': 'leg', 'dir': -1, 'from': 31, 'to': 39, 'pivot': [889, 1545],
                 'overlap': 120},
            ],
        },
    ],
    # the hands over the sign's top, traced on their own
    'shapes': [{'path': 2, 'part': 'sign'}, {'path': 3, 'part': 'sign'}],
    # "hey!" lines either side of the head
    'marks': [
        {'name': 'heyLeft', 'paths': [4, 5], 'part': 'head', 'role': 'flicker'},
        {'name': 'heyRight', 'paths': [6, 7], 'part': 'head', 'role': 'flicker'},
    ],
    # how the module is written
    'var': 'blankSignRig', 'out': 'src/shared/ui/mascot/rigs/blank-sign.ts',
    'doc': "/** Holding up a blank sign in both hands, beaming over its top: the mascot for a message. Traced art (`assets-src/mascot/blank-sign.svg`), split along its own outline by `scripts/mascot`; the sign is one still rectangle in front of the flower (`sign`, from x 135 to 1913 and y 918 to 1567 in the art's units), so text can be laid over it, and each leg steps on its own below it. */",
    'moods': {'idle': 'rest', 'happy': 'grin', 'celebrate': 'grin', 'thinking': 'think', 'sad': 'soft', 'wave': 'rest'},
    'markOverrides': {},
}
