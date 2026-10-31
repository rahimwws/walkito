#!/usr/bin/env python3
"""
Builds a mascot rig from traced art: `python3 scripts/mascot/build.py <spec>`.

    python3 scripts/mascot/build.py scripts/mascot/specs/gift.py
    python3 scripts/mascot/build.py scripts/mascot/specs/gift.py --check

A spec names the SVG in `assets-src/mascot/` and says, by anchor index on
the traced outline, where each petal and each limb begins and ends. Every
part is then a stretch of the outline itself: its paper is the silhouette
cut to that stretch (closed through the flower's middle, or a point just
inside the body for a limb), and its ink is exactly that stretch, so no
piece of outline is owned twice and none is left out. Separate shapes (a
gift, an arm traced on its own) are attached to a part whole. The result is
written as the TS module in `src/shared/ui/mascot/rigs/`, faces included.

`--check` also renders the rig at rest beside the source art (macOS Quick
Look and Pillow) and fails if they differ: the rest pose must be the
drawing. Finding the anchor indices is done by eye: `kit.py` can render the
outline with every anchor numbered.

`rigs/pain.ts` predates this script: its parts were cut by hand-drawn
polygons, and that file is its own source.
"""
import importlib.util, os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from kit import build_ranges, diff_rest
from emit import from_ranges

spec_file = sys.argv[1]
check = '--check' in sys.argv
spec_mod = importlib.util.spec_from_file_location('spec', spec_file)
mod = importlib.util.module_from_spec(spec_mod); spec_mod.loader.exec_module(mod)
spec = mod.SPEC
rig = build_ranges(spec)
if check:
    differing, where = diff_rest(rig, spec['svg'])
    # A few pixels are the vectoriser's slivers, dropped on purpose.
    if differing > 600:
        sys.exit('%s: rest pose differs from the art in %d px around %s' % (spec['name'], differing, where))
    print('%s: rest pose matches the art (%d px differ)' % (spec['name'], differing))
from_ranges(rig, spec['var'], spec['out'], spec['doc'], spec['moods'], spec.get('glance', 'look'), spec.get('markOverrides'))
