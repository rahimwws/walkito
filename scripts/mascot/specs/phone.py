SPEC = {
    'name': 'phone', 'svg': 'assets-src/mascot/phone.svg',
    'center': [1010, 820], 'headPivot': [1030, 1360], 'ground': [985, 1975], 'bodyCentre': [1000, 1000],
    'box': [0, 40, 2048], 'outline': 64, 'feature': 20,
    'eyes': [[888, 826], [1100, 752]], 'mouth': [1020, 962],
    'outlines': [{
        'path': 0, 'sub': 0,
        'faceHoles': {'eyeLeft': 3, 'eyeRight': 2, 'mouth': 1},
        # the notches round the flower, the shoulder seam (13, 38) and the hips (42, 56, 67)
        'core': [113, 2, 7, 13, 38, 40, 42, 56, 67, 68, 103, 107, 110],
        'ranges': [
            {'name': 'top', 'kind': 'petal', 'from': 113, 'to': 2},
            # Its right side is 42 units from the phone's frame. The frame carries its own outline
            # (a band, below), so this petal sways and opens like the rest.
            {'name': 'upperRight', 'kind': 'petal', 'from': 2, 'to': 7},
            # The petal behind the hand: its edge is the far wall of the 10-unit slit along the
            # thumb and the frame, so it holds still and the hand moves against it.
            {'name': 'right', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 7, 'to': 13},
            # The arm holding the phone up, from the shoulder: a hand on the right held up, so it
            # swings out clockwise (dir 1). It turns about its lower corner (38), where its
            # underside runs on into the petal below in one line, so that line only ever bends
            # out into the air and never folds into the petal.
            {'name': 'armRight', 'kind': 'part', 'role': 'arm', 'parent': 'head', 'dir': 1,
             'segs': [[13, 14], [36, 38]], 'pivot': [1491, 1175]},
            # The hand round the phone (the thumb, the frame's lower half, a finger), and the phone
            # in it, from the wrist: it wiggles and rings, tilting out, never in toward the face.
            {'name': 'handRight', 'kind': 'part', 'role': 'hand', 'parent': 'armRight', 'dir': 1, 'from': 14, 'to': 36,
             'pivot': [1617, 1013], 'toward': [1560, 1080], 'overlap': 50},
            # The two lobes under the arm hold still: as petals their wedges reach up to the middle
            # through the pointing hand, and a sway or a spread slid their paper over its slits.
            {'name': 'lowerRight', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 38, 'to': 40},
            {'name': 'bottomRight', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 40, 'to': 42},
            # Each leg from the hip, the crotch (56) shared: they step, tap and tuck on their own.
            {'name': 'legRight', 'kind': 'part', 'role': 'leg', 'dir': 1, 'from': 42, 'to': 56, 'pivot': [1140, 1440]},
            {'name': 'legLeft', 'kind': 'part', 'role': 'leg', 'dir': -1, 'from': 56, 'to': 67, 'pivot': [905, 1440]},
            # the body between the left leg and the pointing arm
            {'name': 'hip', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 67, 'to': 68},
            # The pointing arm lies across the body, cut into it by a slit on every side (both walls
            # are here): it holds still with the face, so no slit ever opens or closes.
            {'name': 'pointArm', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 68, 'to': 103},
            {'name': 'lowerLeft', 'kind': 'petal', 'from': 103, 'to': 107},
            {'name': 'left', 'kind': 'petal', 'from': 107, 'to': 110},
            {'name': 'upperLeft', 'kind': 'petal', 'from': 110, 'to': 113},
        ],
    }],
    # the phone: its screen (with the bell), the top of its frame with a finger, the middle finger
    'shapes': [{'path': 4, 'part': 'handRight'}, {'path': 5, 'part': 'handRight'}, {'path': 6, 'part': 'handRight'}],
    # Paths 9-11 are rig data (`__main__` below): each eye with its shine and the mouth with its
    # tongue, undrawn in the art. Paths 12 and 13 are the hand's outline where it meets the petals
    # (up the hand's side and over the thumb, and up the frame's side), drawn again over them.
    'faceShapes': {'eyeLeft': 9, 'eyeRight': 10, 'mouth': 11},
    'lines': [{'path': 12, 'part': 'handRight'}, {'path': 13, 'part': 'handRight'}],
    # the ringing lines ride the phone and flicker as it waves
    'marks': [{'name': 'ring', 'paths': [7, 8], 'part': 'handRight', 'role': 'flicker'}],
    # eyes open in the art: it blinks in every face
    'blinks': ['rest', 'grin', 'soft', 'look', 'think'],
    # how the module is written
    'var': 'phoneRig', 'out': 'src/shared/ui/mascot/rigs/phone.ts',
    'doc': "/** Holding up a ringing phone and pointing at it: the reminders mascot. Traced art (`assets-src/mascot/phone.svg`), split along its own outline by `scripts/mascot`; the phone wiggles in the hand, the arm sways from the shoulder, each leg steps on its own, and the pointing arm stays across the body. */",
    'moods': {'idle': 'rest', 'happy': 'grin', 'celebrate': 'grin', 'thinking': 'think', 'sad': 'soft', 'wave': 'rest'},
    'markOverrides': {},
}


# emit.py writes `blinks: ['look', 'think']` into every rig: the faces whose eyes are open
# on a pose drawn with them shut. This pose's own face is open-eyed, so without this it would
# never blink. Until emit takes the list from the spec, pass `blinks` above through to it, for
# this rig only (a process that loads several specs never leaks it into another).
def _blinks_from_spec():
    try:
        import emit
    except ImportError:  # loaded outside scripts/mascot: nothing is being written
        return
    write = emit.emit
    if getattr(write, 'spec_blinks', None) == SPEC['name']:  # loaded twice
        return

    def emit_with_blinks(rig, faces, moods, eye_c, mouth_c, extra, *rest, **kw):
        if rig.get('name') == SPEC['name']:
            extra = dict(extra, blinks=SPEC['blinks'])
        return write(rig, faces, moods, eye_c, mouth_c, extra, *rest, **kw)

    emit_with_blinks.spec_blinks = SPEC['name']
    emit.emit = emit_with_blinks


_blinks_from_spec()


# `python3 scripts/mascot/specs/phone.py` rewrites the rig-only paths (9-13) at the end of the SVG
# copy from the art's own paths, then `build.py --check` must still pass. Only run as a script:
# build.py loads this file for SPEC alone.
if __name__ == '__main__':
    import os, sys
    ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', '..')
    sys.path.insert(0, os.path.join(ROOT, 'scripts', 'mascot'))
    import bands

    SVG = os.path.join(ROOT, SPEC['svg'])
    src, _ = bands.art_paths(SVG)
    faces, lines = bands.write(
        SVG, 'not drawn: each eye with its shine, the mouth with its tongue; then the hand\'s outline against the petals, '
             'filled in the gap colour, so the art is unchanged. See scripts/mascot/specs/phone.py.',
        faces=[bands.face_shape(src, (0, 3), 2), bands.face_shape(src, (0, 2), 3), bands.face_shape(src, (0, 1), 1)],
        bands=[
            # up the hand's left side and over the thumb, against petal `right`
            {'path': 0, 'from': 14, 'to': 19, 'own': (14, 36)},
            # up the frame's left side, against petal `upperRight`
            {'path': 5, 'from': 19, 'to': 0},
        ])
    assert faces == [9, 10, 11] and lines == [12, 13], (faces, lines)
    print('wrote the face shapes (9-11) and the hand bands (12, 13) into', os.path.relpath(SVG, ROOT))
