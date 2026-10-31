SPEC = {
    'name': 'celebrate', 'svg': 'assets-src/mascot/celebrate.svg',
    'center': [1100, 900], 'headPivot': [1170, 1240], 'ground': [1080, 1955], 'bodyCentre': [1100, 950],
    'box': [0, 40, 2048], 'outline': 64, 'feature': 20,
    'eyes': [[1064, 778], [1218, 798]], 'mouth': [1112, 918],
    'outlines': [{
        'path': 0, 'sub': 0,
        'faceHoles': {'eyeLeft': 3, 'eyeRight': 5, 'mouth': 1},
        # the notches only: a wrist in the core would leave a still forearm behind when the arm moves
        'core': [0, 5, 10, 13, 33, 37, 68, 72, 75, 99, 104],
        'ranges': [
            {'name': 'top', 'kind': 'petal', 'from': 0, 'to': 5},
            {'name': 'upperRight', 'kind': 'petal', 'from': 5, 'to': 10},
            # tucked against the arm's upper edge: a petal here would sway, droop and flutter into the arm, so it holds still
            {'name': 'right', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 10, 'to': 13},
            # Both arms are 'wave', not 'raise': the notch between each arm and the piece tucked against it closes
            # after about 5 degrees of inward turn, and 'raise' goes to -5 on the crouch plus 2.2 of drift (and
            # swing +-7), while 'wave' never turns inward past 4.6. The hinge sits 40 up the arm from the middle of
            # the shoulder seam, which keeps those notches open a degree longer and leaves the seams whole.
            {'name': 'armRight', 'kind': 'part', 'role': 'wave', 'parent': 'head', 'dir': 1, 'segs': [[13, 14], [32, 33]],
             'pivot': [1501.3, 967.8]},
            {'name': 'handRight', 'kind': 'part', 'role': 'hand', 'parent': 'armRight', 'dir': -1, 'from': 14, 'to': 32,
             'toward': [1472, 995], 'overlap': 50},
            {'name': 'lowerRight', 'kind': 'petal', 'from': 33, 'to': 37},
            # The two legs part at the crotch (55). The bottom petal runs on into the right shin: it is that
            # leg's thigh, so it goes with the leg, which swings about the middle of its wide top. Both close on
            # one point under the core (1110,1190), so the wedge over the crotch is always one leg's or the other's.
            {'name': 'legRight', 'kind': 'part', 'role': 'leg', 'dir': 1, 'from': 37, 'to': 55,
             'pivot': [1217, 1257], 'toward': [1110, 1190], 'overlap': 127},
            # the kicked leg, bent back at the knee, swings about its hip between the crotch and the notch at 68
            {'name': 'legLeft', 'kind': 'part', 'role': 'leg', 'dir': -1, 'from': 55, 'to': 68,
             'pivot': [1030, 1265], 'toward': [1110, 1190], 'overlap': 109},
            {'name': 'bottomLeft', 'kind': 'petal', 'from': 68, 'to': 72},
            {'name': 'left', 'kind': 'petal', 'from': 72, 'to': 75},
            {'name': 'armLeft', 'kind': 'part', 'role': 'wave', 'parent': 'head', 'dir': -1, 'segs': [[75, 76], [96, 99]],
             'pivot': [593.4, 821.4]},
            {'name': 'handLeft', 'kind': 'part', 'role': 'hand', 'parent': 'armLeft', 'dir': 1, 'from': 76, 'to': 96,
             'toward': [618, 852], 'overlap': 50},
            # lies along the left arm's inner edge, as 'right' does the right arm's: a petal here drooped and fluttered over the arm's line
            {'name': 'upperLeft', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 99, 'to': 104},
            {'name': 'topLeft', 'kind': 'petal', 'from': 104, 'to': 0},
        ],
    }],
    # Hinges with nothing drawn on them, each on an arm and turning back against it by the same angle: whatever one
    # carries slides the way its pivot would on the arm, without turning, so a mark can follow an arm only part of
    # the way. Riding the arm itself, the sparkle under the right hand swung down into the petal below it, and the
    # left burst lines leaned into the top-left petal on the crouch.
    'shapeParts': [
        # the pivot is 250 above the right shoulder: the sparkle slides out to the right as the arm pumps, clear of
        # the forearm above it and the petal below it
        {'name': 'sparkleRightHold', 'role': 'wave', 'parent': 'armRight', 'dir': -1, 'pivot': [1501.3, 717.8]},
        # halfway from the left shoulder to the lines: they go half as far as the hand does
        {'name': 'linesLeftHold', 'role': 'wave', 'parent': 'armLeft', 'dir': 1, 'pivot': [589.4, 495.4]},
    ],
    # Paper under the right thigh's top, never seen at rest: that top is 290 wide, so a turn about its middle drops
    # one end of it below the core's edge (20 at 8 degrees), and this fills what it uncovers. It keeps 40 inside
    # the outline everywhere, so it never shows past a moved edge.
    'underlays': [{'part': 'root', 'poly': [[1150, 1226], [1335, 1220], [1335, 1262], [1150, 1272]]}],
    'marks': [
        # the right burst lines and the left sparkle ride on their arm, so a pumping arm never runs into them;
        # the left lines pop out from the flower (their centre is on the top-left petal), not into it
        {'name': 'linesLeft', 'paths': [5, 6], 'part': 'linesLeftHold', 'role': 'flicker', 'centre': [750, 330]},
        {'name': 'linesRight', 'paths': [2, 4], 'part': 'armRight', 'role': 'flicker'},
        {'name': 'sparkleLeft', 'paths': [8], 'part': 'armLeft', 'role': 'flicker'},
        {'name': 'sparkleRight', 'paths': [1], 'part': 'sparkleRightHold', 'role': 'flicker'},
        # the swish behind the kicked shoe and the bounce lines by the other one go with their leg
        {'name': 'kick', 'paths': [7], 'part': 'legLeft', 'role': 'pop'},
        {'name': 'feet', 'paths': [9, 3, 10], 'part': 'legRight', 'role': 'pop'},
    ],
    # how the module is written
    'var': 'celebrateRig', 'out': 'src/shared/ui/mascot/rigs/celebrate.ts',
    'doc': '/** Mid-jump, both arms flung up, laughing: the celebrating mascot. Traced art (`assets-src/mascot/celebrate.svg`), split along its own outline by `scripts/mascot`; the bottom petal is the right thigh, so it stays with the legs. */',
    'moods': {'idle': 'rest', 'happy': 'rest', 'celebrate': 'rest', 'thinking': 'think', 'sad': 'soft', 'wave': 'rest'},
    'markOverrides': {},
}
