SPEC = {
    'name': 'sleeping', 'svg': 'assets-src/mascot/sleeping.svg',
    'center': [990, 960], 'headPivot': [1120, 1490], 'ground': [860, 1630], 'bodyCentre': [1000, 1000],
    'box': [0, 40, 2048], 'outline': 64, 'feature': 20,
    'eyes': [[929, 1065], [1140, 1022]], 'mouth': [1055, 1135],
    'outlines': [{
        # The far leg and its shoe, traced on their own: listed first so it is drawn behind the hand on the
        # lap and the near shoe, as it lies. The whole outline is its one range; it swings a little about its
        # end tucked behind the near shoe, so the far shoe rocks (keep it small: past about 5 degrees the
        # shoe's toe meets the fingertips on the lap).
        'path': 1, 'sub': 0, 'core': False,
        'ranges': [
            {'name': 'legRight', 'kind': 'part', 'role': 'leg', 'dir': 1, 'segs': [[0, 8], [8, 0]],
             'pivot': [1468, 1660], 'overlap': 1},
        ],
    }, {
        'path': 0, 'sub': 0,
        'faceHoles': {'eyeLeft': 2, 'eyeRight': 3, 'mouth': 1},
        # the middle runs from the notch at 16 to the crease at 34, well above the ring round the front shoe
        'core': [0, 8, 12, 16, 34, 57, 61, 87, 90, 96],
        'ranges': [
            {'name': 'top', 'kind': 'petal', 'from': 0, 'to': 8},
            {'name': 'upperRight', 'kind': 'petal', 'from': 8, 'to': 12},
            {'name': 'right', 'kind': 'petal', 'from': 12, 'to': 16},
            {'name': 'lowerRight', 'kind': 'petal', 'from': 16, 'to': 18},
            # On the ground, in two static pieces so each closes on its own point: one point
            # cannot both stay above the ring round the shoe (31-32) and rise steeply from the crease
            # at 57, and the head (pivot 1120,1490) lifts the seat 30-odd units off 57 when it tilts.
            # The hand on the lap and the ring, closed up in the lower right petal (as before).
            {'name': 'lap', 'kind': 'part', 'role': 'legs', 'from': 18, 'to': 34, 'toward': [1300, 1231], 'overlap': 200.6},
            # The near leg and its shoe, closed nearly straight up from the crease at 57 to (850,1380)
            # and back to 34: its paper fills what the seat and the core uncover on a tilt, so the
            # crease never shows a flag or a hole, and it stays right of the seat's own edge. It does not
            # swing: he sits on it (its lower edge is the seat on the ground), and the lap's edge hugs its
            # shoe as a ring (30-33), which a turn would slide the shoe across.
            {'name': 'legs', 'kind': 'part', 'role': 'legs', 'from': 34, 'to': 57, 'toward': [850, 1380], 'overlap': 122.4},
            {'name': 'seat', 'kind': 'petal', 'from': 57, 'to': 61},
            # the arm he leans on: it breathes with the body, never lifts
            {'name': 'armLeft', 'kind': 'part', 'role': 'static', 'parent': 'head', 'segs': [[61, 64], [84, 87]]},
            # its hand, flat on the ground: the fingers twitch from the wrist (64, 84)
            {'name': 'handLeft', 'kind': 'part', 'role': 'hand', 'parent': 'armLeft', 'dir': 1, 'from': 64, 'to': 84,
             'toward': [500, 1450], 'overlap': 50},
            {'name': 'lowerLeft', 'kind': 'petal', 'from': 87, 'to': 90},
            {'name': 'left', 'kind': 'petal', 'from': 90, 'to': 96},
            {'name': 'topLeft', 'kind': 'petal', 'from': 96, 'to': 0},
        ],
    }],

    # zzZ, carried by the head so they rise and fall with the breath
    'marks': [
        {'name': 'zSmall', 'paths': [4], 'part': 'head', 'role': 'pop'},
        {'name': 'zMid', 'paths': [3], 'part': 'head', 'role': 'pop'},
        {'name': 'zBig', 'paths': [2], 'part': 'head', 'role': 'pop'},
    ],
    # asleep: never glances up with open eyes
    'glance': None,
    # how the module is written
    'var': 'sleepingRig', 'out': 'src/shared/ui/mascot/rigs/sleeping.ts',
    'doc': '/** Asleep, leaning back on one arm with the legs out, zzZ over the head: the rest mascot. Traced art (`assets-src/mascot/sleeping.svg`), split along its own outline by `scripts/mascot`. */',
    # eyes stay shut in every mood: 'think' would open them with the zzZ still up
    'moods': {'idle': 'rest', 'happy': 'grin', 'celebrate': 'grin', 'thinking': 'rest', 'sad': 'soft', 'wave': 'rest'},
    'markOverrides': {},
}
