"""Write a rig as the TS module the app reads (`src/shared/ui/mascot/rigs/*.ts`)."""
import json, math, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from kit import parse_d, flat, bbox

def P(poly): return ' '.join('%g,%g' % (round(x, 1), round(y, 1)) for x, y in poly)
def pt(p): return '[%g, %g]' % (round(p[0], 1), round(p[1], 1))
def q(s): return "'" + s.replace("'", "\\'") + "'"

def face_box(d):
    pts = [p for s in parse_d(d) for p in flat(s, 8)]
    return bbox(pts)

def at(c, u, v, th=0.0):
    return '%.1f %.1f' % (c[0] + u * math.cos(th) - v * math.sin(th), c[1] + u * math.sin(th) + v * math.cos(th))

def ellipse(c, rx, ry):
    k = 0.5523
    pts = [(rx, 0), (rx, ry * k), (rx * k, ry), (0, ry), (-rx * k, ry), (-rx, ry * k), (-rx, 0), (-rx, -ry * k), (-rx * k, -ry),
           (0, -ry), (rx * k, -ry), (rx, -ry * k), (rx, 0)]
    return 'M%s C%s %s %s C%s %s %s C%s %s %s C%s %s %sZ' % tuple(at(c, u, v) for u, v in pts)

def generic_faces(face):
    eb = [face_box(face['eyeLeft']), face_box(face['eyeRight'])]
    mb = face_box(face['mouth'])
    ec = [((b[0] + b[2]) / 2, (b[1] + b[3]) / 2) for b in eb]
    ew = sum(b[2] - b[0] for b in eb) / 2
    mc = ((mb[0] + mb[2]) / 2, (mb[1] + mb[3]) / 2); mw = mb[2] - mb[0]; mh = mb[3] - mb[1]
    rest = {'eyes': [face['eyeLeft'], face['eyeRight']], 'eyesFilled': True, 'mouth': face['mouth'], 'mouthFilled': True}
    grin_c = (mc[0], mc[1] - 0.1 * mh)
    grin = 'M%s Q%s %s Q%s %sZ' % (at(grin_c, -0.36 * mw, -0.05 * mh), at(grin_c, 0, 1.25 * mh), at(grin_c, 0.36 * mw, -0.05 * mh),
                                    at(grin_c, 0, 0.2 * mh), at(grin_c, -0.36 * mw, -0.05 * mh))
    look_eyes = [ellipse((c[0], c[1] + 0.05 * ew), 0.17 * ew, 0.22 * ew) for c in ec]
    think_eyes = [ellipse((c[0] + 0.06 * ew, c[1] - 0.12 * ew), 0.15 * ew, 0.2 * ew) for c in ec]
    hmm_c = (mc[0] + 0.05 * mw, mc[1] - 0.2 * mh)
    hmm = 'M%s Q%s %s T%s' % (at(hmm_c, -0.16 * mw, 0.02 * mw), at(hmm_c, -0.08 * mw, -0.05 * mw), at(hmm_c, 0, 0.01 * mw), at(hmm_c, 0.16 * mw, 0))
    small = 'M%s Q%s %s' % (at(mc, -0.16 * mw, -0.1 * mh), at(mc, 0, 0.45 * mh), at(mc, 0.16 * mw, -0.1 * mh))
    faces = {
        'rest': rest,
        'grin': {'eyes': rest['eyes'], 'eyesFilled': True, 'mouth': grin, 'mouthFilled': True},
        'look': {'eyes': look_eyes, 'eyesFilled': True, 'mouth': face['mouth'], 'mouthFilled': True},
        'think': {'eyes': think_eyes, 'eyesFilled': True, 'mouth': hmm, 'mouthFilled': False},
        'soft': {'eyes': rest['eyes'], 'eyesFilled': True, 'mouth': small, 'mouthFilled': False},
    }
    return faces, ec, mc

def emit(rig, faces, moods, eye_c, mouth_c, extra, varname, out, doc):
    L = []
    w = L.append
    w("import type { MascotRig } from '../types';\n\n")
    w(doc + '\n')
    w('export const %s: MascotRig = {\n' % varname)
    w('  name: %s,\n' % q(rig['name']))
    bx = extra['box']; cv = extra['canvas']
    w('  box: { x: %g, y: %g, size: %g },\n' % tuple(bx))
    w('  canvas: { x: %g, y: %g, width: %g, height: %g },\n' % tuple(cv))
    w('  outline: %g,\n  feature: %g,\n  hop: %g,\n' % (extra['outline'], extra['feature'], extra['hop']))
    w('  headPivot: %s,\n  ground: %s,\n  bodyCentre: %s,\n' % (pt(extra['headPivot']), pt(extra['ground']), pt(extra['bodyCentre'])))
    w('  bodies: [\n%s  ],\n' % ''.join('    %s,\n' % q(b) for b in extra['bodies']))
    if extra.get('core'):
        c = extra['core']
        w('  core: { clip: %s, ink: %s, body: %d },\n' % (q(c['clip']), q(c['ink']) if c.get('ink') else 'undefined', c['body']))
    w('  petals: [\n')
    for p in extra['petals']:
        w('    { name: %s, clip: %s, ink: %s, pivot: %s, angle: %g, body: %d },\n' % (q(p['name']), q(p['clip']), q(p['ink']), pt(p['pivot']), p['angle'], p['body']))
    w('  ],\n  parts: [\n')
    for p in extra['parts']:
        fields = ['name: %s' % q(p['name']), "role: '%s'" % p['role'], 'parent: %s' % q(p['parent']), 'pivot: %s' % pt(p['pivot']), 'dir: %d' % p['dir']]
        if p.get('clip'): fields += ['body: %d' % p['body'], 'clip: %s' % q(p['clip'])]
        if p.get('ink'): fields.append('ink: %s' % q(p['ink']))
        if p.get('shapes'): fields.append('shapes: [%s]' % ', '.join(q(s) for s in p['shapes']))
        if p.get('lines'): fields.append('lines: [%s]' % ', '.join(q(s) for s in p['lines']))
        w('    { %s },\n' % ', '.join(fields))
    w('  ],\n')
    w('  shapes: [%s],\n' % ', '.join(q(s) for s in extra.get('rootShapes', [])))
    w('  underlays: [%s],\n' % ', '.join('{ parent: %s, points: %s }' % (q(u['parent']), q(u['points'])) for u in extra['underlays']))
    w('  marks: [\n')
    for m in extra['marks']:
        w('    { name: %s, parent: %s, role: %s, centre: %s, thicken: %g, d: [%s] },\n' % (q(m['name']), q(m['parent']), q(m['role']), pt(m['centre']), m.get('thicken', 0), ', '.join(q(d) for d in m['d'])))
    w('  ],\n  faces: {\n')
    for k, f in faces.items():
        w('    %s: { eyes: [%s, %s], eyesFilled: %s, mouth: %s, mouthFilled: %s },\n' % (k, q(f['eyes'][0]), q(f['eyes'][1]), 'true' if f['eyesFilled'] else 'false', q(f['mouth']), 'true' if f['mouthFilled'] else 'false'))
    w('  },\n')
    w('  moods: { %s },\n' % ', '.join("%s: '%s'" % kv for kv in moods.items()))
    w('  glance: %s,\n' % ("'%s'" % extra['glance'] if extra.get('glance') else 'undefined'))
    w('  blinks: [%s],\n' % ', '.join("'%s'" % b for b in extra['blinks']))
    w('  eyeCentres: [%s, %s],\n  mouthCentre: %s,\n' % (pt(eye_c[0]), pt(eye_c[1]), pt(mouth_c)))
    w('};\n')
    open(out, 'w').write(''.join(L))
    print('wrote', out, sum(len(x) for x in L))

def from_ranges(rig, varname, out, doc, moods, glance='look', mark_overrides=None):
    faces, ec, mc = generic_faces(rig['face'])
    bx = rig['box']; size = bx[2]
    canvas = (bx[0] - 0.23 * size, bx[1] - 0.43 * size, size * 1.46, size * 1.51)
    names_with_shapes = {}
    for s in rig['shapes']: names_with_shapes.setdefault(s['part'], []).append(s['d'])
    lines = {}
    for l in rig['lines']: lines.setdefault(l['part'], []).append(l['d'])
    body_index = {k: i for i, k in enumerate(sorted(rig['bodies'], key=int))}
    parts = []
    for p in rig['parts']:
        parts.append({'name': p['name'], 'role': p['role'], 'parent': p['parent'], 'pivot': p['pivot'], 'dir': p['dir'],
                      'clip': P(p['clip']) if p['clip'] else None, 'body': body_index[str(p['body'])] if p['body'] is not None else 0,
                      'ink': rig['inks'].get(p['name']), 'shapes': names_with_shapes.get(p['name']), 'lines': lines.get(p['name'])})
    extra = {
        'box': bx, 'canvas': [round(v) for v in canvas], 'outline': rig['outline'], 'feature': rig['feature'], 'hop': round(size * 0.12),
        'headPivot': rig['head']['pivot'], 'ground': rig['ground'], 'bodyCentre': rig['bodyCentre'],
        'bodies': [rig['bodies'][k] for k in sorted(rig['bodies'], key=int)],
        'core': {'clip': P(rig['core']), 'ink': rig['inks'].get('core'), 'body': body_index[str(rig['coreBody'])]} if rig.get('core') else None,
        'petals': [{'name': p['name'], 'clip': P(p['clip']), 'ink': rig['inks'][p['name']], 'pivot': p['pivot'], 'angle': p['angle'],
                    'body': body_index[str(p['body'])]} for p in rig['petals']],
        'parts': parts, 'underlays': [{'parent': u.get('part', 'root'), 'points': P(u['poly'])} for u in rig['underlays']],
        'blinks': ['look', 'think'],
        'marks': [dict(m, parent=m['part'], **((mark_overrides or {}).get(m['name'], {}))) for m in rig['marks']],
        'rootShapes': names_with_shapes.get('root', []) + names_with_shapes.get('head', []),
        'glance': glance,
    }
    emit(rig, faces, moods, ec, mc, extra, varname, out, doc)

