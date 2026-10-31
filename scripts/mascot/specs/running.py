SPEC = {
    'name': 'running', 'svg': 'assets-src/mascot/running.svg',
    'center': [1190, 915], 'headPivot': [1180, 1300], 'ground': [1560, 1858], 'bodyCentre': [1190, 1000],
    'box': [0, 40, 2048], 'outline': 64, 'feature': 20,
    'eyes': [[1263, 886], [1456, 841]], 'mouth': [1360, 990],
    'outlines': [{
        'path': 0, 'sub': 0,
        'faceHoles': {'eyeLeft': 4, 'eyeRight': 5, 'mouth': 1},
        # the wrists (17, 34, 66, 77) stay out of the middle, or it would keep a ghost of each forearm when the arm moves.
        # It dips to the crotch (50), the tip of the notch between the legs, so each leg's top tucks under it whichever way it swings
        'core': [0, 6, 11, 14, 15, 35, 38, 50, 60, 64, 81, 89, 94],
        'ranges': [
            {'name': 'top', 'kind': 'petal', 'from': 0, 'to': 6},
            {'name': 'upperRight', 'kind': 'petal', 'from': 6, 'to': 11},
            {'name': 'right', 'kind': 'petal', 'from': 11, 'to': 14},
            # the petal the front arm comes out of: its edge above the arm and below it
            {'name': 'lowerRight', 'kind': 'petal', 'segs': [[14, 15], [35, 38]]},
            # The front arm pumps from the shoulder. dir 1: positive swings the fist down and forward into open air. Up (dir -1) it ran
            # into the 'right' petal and lost its outline there. Pivot at the upper shoulder corner (anchor 15), inside the notch, where a
            # joint shows: about the lower corner (35) the forearm's top edge stepped off the petal's there. The lower corner tucks into
            # the body instead, under paper
            {'name': 'armRight', 'kind': 'part', 'role': 'arm', 'parent': 'head', 'dir': 1, 'segs': [[15, 17], [34, 35]], 'pivot': [1633, 1204]},
            {'name': 'handRight', 'kind': 'part', 'role': 'hand', 'parent': 'armRight', 'dir': -1, 'from': 17, 'to': 34,
             'toward': [1640, 1240], 'overlap': 50, 'pivot': [1817, 1238]},
            # Each leg on its own, cut at the crotch (50), so they can scissor: running in place. Each turns about its hip, in the
            # middle of where it leaves the body, and its paper reaches 110 units up under the middle
            {'name': 'legFront', 'kind': 'part', 'role': 'leg', 'dir': 1, 'from': 38, 'to': 50, 'overlap': 110, 'pivot': [1215, 1335]},
            {'name': 'legBack', 'kind': 'part', 'role': 'leg', 'dir': -1, 'from': 50, 'to': 60, 'overlap': 110, 'pivot': [1080, 1340]},
            {'name': 'bottomLeft', 'kind': 'petal', 'from': 60, 'to': 64},
            # The back forearm stays put: it lies against the 'left' petal with only a hairline slit between them, so raising it
            # alone buried its top edge in the petal and left the slit behind as a loose dash; lowering it sinks the fist into the
            # back thigh by 6 degrees. With the petal riding on it, the two turn cleanly as one about the shoulder (875, 1045) up
            # to 9 degrees up, shearing only the notch above the petal (89), but the arm gestures reach 14 to 24, which run the fist
            # into the speed lines and open that notch 40 to 70 units. Its fist still curls (handLeft)
            {'name': 'armLeft', 'kind': 'part', 'role': 'static', 'parent': 'head', 'segs': [[64, 66], [77, 81]], 'pivot': [846, 1090]},
            # pivot just inside the top wrist corner (anchor 77), where the slit runs into the fist: about the inner corner (66) the fist's
            # top swung into the forearm, whose paper hid its outline and the end of the slit
            {'name': 'handLeft', 'kind': 'part', 'role': 'hand', 'parent': 'armLeft', 'dir': 1, 'from': 66, 'to': 77,
             'toward': [760, 1080], 'overlap': 50, 'pivot': [585, 1135]},
            # the petal over the back forearm is not a petal: a droop or a flutter would move it against the arm and close the slit
            {'name': 'left', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 81, 'to': 89},
            # nor is the lobe above it: the speed lines sit a hair off its tip, and a sad droop (10 deg here) laid it over the top one
            {'name': 'upperLeft', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 89, 'to': 94},
            {'name': 'topLeft', 'kind': 'petal', 'from': 94, 'to': 0},
        ],
    }],
    # the two knuckles on the front fist, traced on their own
    'shapes': [{'path': 5, 'part': 'handRight'}, {'path': 7, 'part': 'handRight'}],
    # the speed lines trail the body, so they tilt with the head: on the root a sad or thinking tilt swung the flower into them
    'marks': [
        {'name': 'speedTop', 'paths': [3], 'part': 'head', 'role': 'flicker'},
        {'name': 'speedMid', 'paths': [2], 'part': 'head', 'role': 'flicker'},
        {'name': 'speedLow', 'paths': [4], 'part': 'head', 'role': 'flicker'},
        {'name': 'dust', 'paths': [1, 8, 6], 'role': 'flicker'},
    ],
    # how the module is written
    'var': 'runningRig', 'out': 'src/shared/ui/mascot/rigs/running.ts',
    'doc': '/** Running to the right, arms pumping, speed lines and a puff of dust behind: the "on the move" mascot. Traced art (`assets-src/mascot/running.svg`), split along its own outline by `scripts/mascot`; each leg swings from its own hip, so they can step in place, and the front arm pumps from the shoulder. */',
    'moods': {'idle': 'rest', 'happy': 'grin', 'celebrate': 'grin', 'thinking': 'think', 'sad': 'soft', 'wave': 'rest'},
    'markOverrides': {},
}
