SPEC = {
    'name': 'noInternet', 'svg': 'assets-src/mascot/no-internet.svg',
    'center': [1060, 860], 'headPivot': [1070, 1400], 'ground': [1000, 2005], 'bodyCentre': [1050, 1000],
    'box': [0, 40, 2048], 'outline': 64, 'feature': 20,
    'eyes': [[999, 910], [1170, 879]], 'mouth': [1110, 1020],
    'outlines': [{
        'path': 0, 'sub': 0,
        # The brows are holes too, each inside a petal's wedge: left to the outline they would ride
        # that petal while its paper and the middle's both cut them, and a sway broke them up. They
        # are taken out of the body like the face, and drawn again as lines of a still part
        # (`brows`, below), so they stay put while the eyes blink under them. The spark between the
        # plugs (holes 3, 5) is under no petal and stays with the middle.
        'faceHoles': {'eyeLeft': 2, 'eyeRight': 1, 'mouth': 8, 'browLeft': 6, 'browRight': 4},
        'core': [119, 4, 8, 11, 42, 52, 65, 109, 112, 115],
        'ranges': [
            {'name': 'top', 'kind': 'petal', 'from': 119, 'to': 4},
            {'name': 'upperRight', 'kind': 'petal', 'from': 4, 'to': 8},
            # Each of the two petals over an arm turns about the tip of the notch between them
            # (11, 109), where the gap is a hair wide: the tip stays shut and the open end moves.
            {'name': 'right', 'kind': 'petal', 'from': 8, 'to': 11, 'pivot': [1394, 1113]},
            # The arms, hands and plug halves lie in front of the body with slits on every side, the
            # plugs in bays of the outline: each holds still with the face, its cable hanging from it.
            {'name': 'armRight', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 11, 'to': 42},
            # each leg from the hip, the crotch (52) shared
            {'name': 'legRight', 'kind': 'part', 'role': 'leg', 'dir': 1, 'from': 42, 'to': 52, 'pivot': [1215, 1490]},
            {'name': 'legLeft', 'kind': 'part', 'role': 'leg', 'dir': -1, 'from': 52, 'to': 65, 'pivot': [932, 1495]},
            {'name': 'armLeft', 'kind': 'part', 'role': 'static', 'parent': 'head', 'from': 65, 'to': 109},
            {'name': 'lowerLeft', 'kind': 'petal', 'from': 109, 'to': 112, 'pivot': [773, 1175]},
            {'name': 'left', 'kind': 'petal', 'from': 112, 'to': 115},
            {'name': 'topLeft', 'kind': 'petal', 'from': 115, 'to': 119},
        ],
    }],
    'shapes': [
        # the plug, its two pins and its cable, in the left hand
        {'path': 3, 'part': 'armLeft'}, {'path': 11, 'part': 'armLeft'}, {'path': 13, 'part': 'armLeft'},
        {'path': 6, 'part': 'armLeft'},
        # the socket, its face and its cable, in the right hand
        {'path': 4, 'part': 'armRight'}, {'path': 7, 'part': 'armRight'}, {'path': 14, 'part': 'armRight'},
        {'path': 8, 'part': 'armRight'},
    ],
    # Paths 15-18 are rig data (`__main__` below), not drawn in the art: each eye with its shine,
    # then each brow.
    'faceShapes': {'eyeLeft': 15, 'eyeRight': 16},
    'shapeParts': [{'name': 'brows', 'role': 'static', 'parent': 'head', 'pivot': [1045, 790]}],
    'lines': [{'path': 17, 'part': 'brows'}, {'path': 18, 'part': 'brows'}],
    'marks': [
        # the question mark pops; the puzzled lines by it flicker
        {'name': 'question', 'paths': [5, 12], 'part': 'head', 'role': 'pop'},
        {'name': 'puzzled', 'paths': [9, 10], 'part': 'head', 'role': 'flicker'},
    ],
    # eyes open in the art: it blinks in every face
    'blinks': ['rest', 'grin', 'soft', 'look', 'think'],
    # how the module is written
    'var': 'noInternetRig', 'out': 'src/shared/ui/mascot/rigs/no-internet.ts',
    'doc': "/** Holding the two halves of an unplugged cable, a spark between them, a question mark overhead: the offline mascot. Traced art (`assets-src/mascot/no-internet.svg`), split along its own outline by `scripts/mascot`; the arms and plugs hold still with the face, each leg steps on its own, the question mark pops and the eyes blink. */",
    # worried in every mood but thinking: a grin under these brows reads wrong
    'moods': {'idle': 'rest', 'happy': 'rest', 'celebrate': 'rest', 'thinking': 'think', 'sad': 'rest', 'wave': 'rest'},
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


# `python3 scripts/mascot/specs/no_internet.py` rewrites the rig-only paths (15-18) at the end of
# the SVG copy from the art's own paths, then `build.py --check` must still pass. Only run as a
# script: build.py loads this file for SPEC alone.
if __name__ == '__main__':
    import os, sys
    ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', '..')
    sys.path.insert(0, os.path.join(ROOT, 'scripts', 'mascot'))
    import bands

    SVG = os.path.join(ROOT, SPEC['svg'])
    src, _ = bands.art_paths(SVG)
    faces, _ = bands.write(
        SVG, 'not drawn: each eye with its shine, then each brow. See scripts/mascot/specs/no_internet.py.',
        faces=[bands.face_shape(src, (0, 2), 2), bands.face_shape(src, (0, 1), 1),
               bands.face_shape(src, (0, 6), None), bands.face_shape(src, (0, 4), None)])
    assert faces == [15, 16, 17, 18], faces
    print('wrote the eyes (15, 16) and the brows (17, 18) into', os.path.relpath(SVG, ROOT))
