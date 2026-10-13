SPEC = {
    'name': 'trophy', 'svg': 'assets-src/mascot/trophy.svg',
    'center': [1030, 1150], 'headPivot': [1010, 1470], 'ground': [890, 1985], 'bodyCentre': [1030, 1150],
    'box': [0, 40, 2048], 'outline': 64, 'feature': 20,
    'eyes': [[1025, 1106], [1155, 1075]], 'mouth': [1084, 1180],
    'outlines': [{
        'path': 0, 'sub': 0,
        'faceHoles': {'eyeLeft': 3, 'eyeRight': 2, 'mouth': 1},
        # the middle reaches up between each arm's two outlines: body paper
        # behind the arms' lower ends and beside the slits, so a petal turning
        # away from a seam shows body, not a hole
        'core': [12, 17, 20, 25, 34, 36, 39, 42, 50, 48, 47, 73, 77, 80, 85, 86, 10, 11],
        'ranges': [
            # The trophy, both arms and every petal an arm lies across are one
            # rigid piece on the head. Each arm meets the body along long slits
            # (its outline drawn against a petal's), and both sides of a slit
            # have to move together or it opens into a doubled line.
            {'name': 'armRight', 'kind': 'part', 'role': 'static', 'parent': 'trophy', 'from': 86, 'to': 12,
             'toward': [1290, 1030], 'overlap': 118},
            # Its edge against the arm is only the short foot of the outer
            # slit (12-14), so it turns about that foot: the lobe still
            # flutters and droops, and the slit barely moves.
            {'name': 'right', 'kind': 'petal', 'from': 12, 'to': 17, 'pivot': [1382, 1050]},
            {'name': 'lowerRight', 'kind': 'petal', 'from': 17, 'to': 20},
            {'name': 'bottomRight', 'kind': 'petal', 'from': 20, 'to': 25},
            # the leg the weight is on
            {'name': 'leg', 'kind': 'part', 'role': 'stand', 'from': 25, 'to': 34},
            {'name': 'bottom', 'kind': 'petal', 'from': 34, 'to': 36},
            {'name': 'lowerLeft', 'kind': 'petal', 'from': 36, 'to': 39},
            {'name': 'left', 'kind': 'petal', 'from': 39, 'to': 42},
            # The upper-left petal, behind the left arm: its edge 46-49 is the
            # petal side of the arm's outer slit, 250 units long, which any
            # turn would shear away from the arm's side (50-52).
            {'name': 'upperLeft', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 42, 'to': 50},
            {'name': 'armLeft', 'kind': 'part', 'role': 'static', 'parent': 'trophy', 'from': 50, 'to': 73,
             'toward': [765, 1095], 'overlap': 137},
            # the same petal inside the arm: the body side of the inner slit's
            # top, down to the tip of its notch against the top-left petal
            {'name': 'upperLeftIn', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 73, 'to': 75},
            # The lobe inside the left arm. Its top-left (78, [724, 719]) sits
            # about 10 units from the arm's inner edge (67-68), so it turns and
            # opens about that point: spread 1.09 or a 9.5 deg flutter about the
            # lobe's own middle pushed it under the arm, and its paper, drawn
            # over every outline, erased the arm's contour. About 78 the edge
            # facing the arm slides along itself and never comes nearer than
            # about 7 units; the notch ends (75, 80) move instead, where the
            # body paper behind them hides most of it.
            {'name': 'topLeft', 'kind': 'petal', 'from': 75, 'to': 80, 'pivot': [724, 719]},
            {'name': 'top', 'kind': 'petal', 'from': 80, 'to': 85},
            # the upper-right petal inside the right arm; outside it, the same
            # petal is the `shoulder` shape, which is static too
            {'name': 'upperRight', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 85, 'to': 86},
        ],
    }],
    'shapeParts': [
        # the upper-right petal outside the right arm, listed first so the arm is drawn over it
        {'name': 'shoulder', 'role': 'static', 'parent': 'head', 'pivot': [1440, 910]},
        # Static, never 'hold': the hold channels (lift up to 143 units,
        # liftTilt, kick, the idle rub) would slide the rigid arms out of the
        # shoulders. It rides on the head: breath, tilt, sink, the hop.
        # Nor 'arm': turned as one piece about the body's middle (1005, 1065),
        # with every petal inside the arms' loop riding on it, it stays clean
        # to about 4 degrees, where the notches it shears at (42, 12) open into
        # gaps in the outline; the arm gestures reach 14 to 24.
        {'name': 'trophy', 'role': 'static', 'parent': 'head', 'pivot': [1024, 1062]},
        # the kicked-back leg, traced on its own, its top tucked under the
        # bottom-right petal: it kicks and taps from the hip
        {'name': 'kick', 'role': 'leg', 'dir': 1, 'pivot': [1200, 1555]},
    ],
    'shapes': [{'path': 1, 'part': 'trophy'}, {'path': 3, 'part': 'shoulder'}, {'path': 2, 'part': 'kick'}],
    'marks': [
        {'name': 'sparkleLeft', 'paths': [4, 7], 'part': 'trophy', 'role': 'flicker'},
        {'name': 'sparkleRight', 'paths': [5, 6], 'part': 'trophy', 'role': 'flicker'},
        {'name': 'foot', 'paths': [8, 9], 'role': 'flicker'},
    ],
    # how the module is written
    'var': 'trophyRig', 'out': 'src/shared/ui/mascot/rigs/trophy.ts',
    'doc': '/** A trophy held up in both hands, one foot kicked back: the win mascot. Traced art (`assets-src/mascot/trophy.svg`), split along its own outline by `scripts/mascot`; the trophy, the arms holding it and the petals behind them ride on the head as one piece, and the back leg kicks from the hip. */',
    'moods': {'idle': 'rest', 'happy': 'grin', 'celebrate': 'grin', 'thinking': 'think', 'sad': 'soft', 'wave': 'rest'},
    'markOverrides': {},
}
