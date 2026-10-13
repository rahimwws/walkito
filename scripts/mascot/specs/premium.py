SPEC = {
    'name': 'premium', 'svg': 'assets-src/mascot/premium.svg',
    'center': [1150, 880], 'headPivot': [1140, 1460], 'ground': [1100, 1990], 'bodyCentre': [1150, 1000],
    'box': [0, 40, 2048], 'outline': 64, 'feature': 20,
    'eyes': [[1224, 958], [1423, 1008]], 'mouth': [1308, 1085],
    'outlines': [{
        'path': 0, 'sub': 0,
        'faceHoles': {'eyeLeft': 4, 'eyeRight': 6, 'mouth': 2},
        # the notches round the flower, the key arm's shoulder (58, 113) and the hips
        'core': [0, 5, 11, 15, 20, 28, 30, 42, 43, 53, 55, 58, 113],
        'ranges': [
            {'name': 'topLeft', 'kind': 'petal', 'from': 0, 'to': 5},
            # The petal the crown sits on: its top edge is the crown's foot, so it holds still with
            # the crown on it, and the two never part.
            {'name': 'crownPetal', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 5, 'to': 11},
            {'name': 'right', 'kind': 'petal', 'from': 11, 'to': 15},
            # the petal over the hand on the hip: a 3-unit slit along the arm, so it holds still
            {'name': 'lowerRight', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 15, 'to': 20},
            # the arm akimbo, its fist on the hip: cut into the body by that slit, it stays put
            {'name': 'hipArm', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 20, 'to': 28},
            {'name': 'bottomRight', 'kind': 'petal', 'from': 28, 'to': 30},
            # each leg from the hip, and the bit of seat between them
            {'name': 'legRight', 'kind': 'part', 'role': 'leg', 'dir': 1, 'from': 30, 'to': 42, 'pivot': [1225, 1480]},
            {'name': 'seat', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 42, 'to': 43},
            {'name': 'legLeft', 'kind': 'part', 'role': 'leg', 'dir': -1, 'from': 43, 'to': 53, 'pivot': [1060, 1500]},
            {'name': 'hipLeft', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 53, 'to': 55},
            {'name': 'lowerLeft', 'kind': 'petal', 'from': 55, 'to': 58},
            # The arm holding the key up: forearm, fist, key and all, one rigid piece from the
            # shoulder. It swings out (dir -1: the fist down and out, the key's head away from the
            # face), about the shoulder's top corner (113), the tip of the notch over the arm: the
            # lower corner then folds into the body under the arm, and no edge of the body opens
            # bare. About the lower corner, the top one swung clear and left the body's middle
            # showing, cut straight with no outline. Its outline is drawn again wherever a swing
            # lays it over the body or a petal (bands, below): under the forearm and down the
            # key's shaft and bit, the key's inner side, the forearm's top.
            {'name': 'keyArm', 'kind': 'part', 'role': 'arm', 'parent': 'head', 'dir': -1, 'from': 58, 'to': 113,
             'pivot': [802, 981]},
            {'name': 'left', 'kind': 'petal', 'from': 113, 'to': 0},
        ],
    }],
    'shapes': [
        {'path': 1, 'part': 'crownPetal'},  # the crown
        {'path': 2, 'part': 'keyArm'},      # the fingers round the key
    ],
    # Paths 11-13 are rig data (`__main__` below): the key arm's outline where it can swing over the
    # body and petals, drawn again over them: the key's inner side and the back of the hand, the
    # forearm's top, and from under the forearm down the shaft and round the bit.
    'lines': [{'path': 11, 'part': 'keyArm'}, {'path': 12, 'part': 'keyArm'}, {'path': 13, 'part': 'keyArm'}],
    'marks': [
        {'name': 'keyShine', 'paths': [8, 9], 'part': 'keyArm', 'role': 'flicker'},
        {'name': 'keySparkle', 'paths': [3], 'part': 'keyArm', 'role': 'flicker'},
        {'name': 'lowSparkle', 'paths': [4], 'part': 'head', 'role': 'flicker'},
        {'name': 'crownShine', 'paths': [6, 7], 'part': 'crownPetal', 'role': 'flicker'},
        {'name': 'hipSparkle', 'paths': [5], 'part': 'head', 'role': 'flicker'},
    ],
    # how the module is written
    'var': 'premiumRig', 'out': 'src/shared/ui/mascot/rigs/premium.ts',
    'doc': '/** A crown on, a key held up, a hand on the hip: the premium mascot. Traced art (`assets-src/mascot/premium.svg`), split along its own outline by `scripts/mascot`; the key arm swings from the shoulder, each leg moves on its own, and the crown sits still on its petal, its shine flickering. */',
    'moods': {'idle': 'rest', 'happy': 'grin', 'celebrate': 'grin', 'thinking': 'think', 'sad': 'soft', 'wave': 'rest'},
    'markOverrides': {},
}


# `python3 scripts/mascot/specs/premium.py` rewrites the rig-only paths (11-13) at the end of the
# SVG copy from the art's own paths, then `build.py --check` must still pass. Only run as a
# script: build.py loads this file for SPEC alone.
if __name__ == '__main__':
    import os, sys
    ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', '..')
    sys.path.insert(0, os.path.join(ROOT, 'scripts', 'mascot'))
    import bands

    SVG = os.path.join(ROOT, SPEC['svg'])
    _, lines = bands.write(
        SVG, "the key arm's outline against the body and the petals, filled in the gap colour, so the art is unchanged. "
             'See scripts/mascot/specs/premium.py.',
        bands=[
            # the bow's inner side, the shaft above the fist and the back of the hand
            {'path': 0, 'from': 103, 'to': 110},
            # the forearm's top, against the petal over it
            {'path': 0, 'from': 112, 'to': 113},
            # under the forearm, the shaft below the fist and the bit, against the petal below
            {'path': 0, 'from': 58, 'to': 64},
        ])
    assert lines == [11, 12, 13], lines
    print('wrote the key arm bands (11-13) into', os.path.relpath(SVG, ROOT))
