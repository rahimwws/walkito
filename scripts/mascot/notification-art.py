#!/usr/bin/env python3
"""The pictures iOS shows on our local notifications: one mascot pose per
kind, alone on transparency, written as `assets/notifications/<name>.png`.

    python3 scripts/mascot/notification-art.py
    python3 scripts/mascot/notification-art.py --sheet /tmp/push-sheet.jpg --work /tmp/push-art

iOS draws an attachment as a small square at the right of the banner (about
40 pt) and full width when the notification is expanded, so each picture is
a 360 px square: a white figure with the app's dark outline on a transparent
background (a solid colour behind him looked heavy), the figure about 80% of
the height so its silhouette still reads at 40 x 40. The outline is what
keeps him visible on the banner's light and dark material. PNG with alpha.

The figure is drawn the way the app draws a mascot on a light surface
(`shared/ui/mascot`): every white shape stroked in ink first (the rigs'
64-unit outline, half of it showing), then the white shapes and the art's
own ink shapes over it in the order the SVG has them. Paths the SVG marks as
rig data (after a `rig-only` / `not drawn` comment) and near-invisible trace
slivers are left out. macOS Quick Look renders two masks at 4x (everything,
and the paper alone); Pillow lays them over the colour and scales down.

Colours are read from `src/shared/config/theme.ts` at run time, so a change
there is a re-run away: `PRIMARY` for violet, the light `accents` for the
rest. Three are mixed from those: the flare's blue is the accent blue let
halfway into the page colour (that one is about a hard day, so it is the
quiet one), the offer's coral is the accent red lifted toward white, and the
steps green is `meterColors.light.positive`, the only green the app has.
None of them says anything about a value; each only tells one kind of
notification from another.

`plan` is drawn mirrored: the thumbnail sits at the right of the banner, so
the pointing hand points back at the text, as the app mirrors that pose at
the right of a screen.

Needs macOS (qlmanage) and Pillow.
"""
import argparse, os, re, shutil, subprocess, sys, tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '..', '..'))
sys.path.insert(0, HERE)
from kit import parse_d, flat, bbox  # noqa: E402

from PIL import Image, ImageCms, ImageDraw, ImageFont  # noqa: E402

SIZE = 360          # the picture's side, px
PNG_BUDGET = 30_000  # bytes per transparent picture
SCALE = 4           # rendered at this multiple, then scaled down
OUTLINE = 64        # the rigs' stroke width in art units; half of it shows outside the paper
FILL_H = 0.80       # the figure's share of the height
FILL_W = 0.88       # ...and at most this much of the width, for the wide poses
BUDGET = 30 * 1024  # bytes per file
QUALITY = 85
OUT_DIR = os.path.join(ROOT, 'assets', 'notifications')
ART_DIR = os.path.join(ROOT, 'assets-src', 'mascot')
THEME = os.path.join(ROOT, 'src', 'shared', 'config', 'theme.ts')

# name: (pose in assets-src/mascot, colour key, mirrored)
NOTIFICATIONS = {
    'session': ('running', 'violet', False),
    'plan': ('pointing', 'violet', True),
    'checkin': ('reminder', 'amber', False),
    'streak': ('thumbs-up', 'orange', False),
    'retest': ('thinking', 'teal', False),
    'flare': ('heart', 'calm', False),
    'load': ('walking', 'teal', False),
    'gait': ('walking', 'blue', False),
    'block': ('trophy', 'amber', False),
    'winback': ('wave', 'violet', False),
    'offer': ('gift', 'coral', False),
    'expiry': ('premium', 'violet', False),
    'steps': ('walking', 'green', False),
}


# ── colours ──────────────────────────────────────────────────────────────────

def hex_rgb(h):
    h = h.lstrip('#')
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


def mix(a, b, t):
    """a moved toward b by t"""
    return tuple(round(x + (y - x) * t) for x, y in zip(a, b))


def block(src, opener):
    """the text of the `{ ... }` that follows `opener`"""
    i = src.index(opener)
    i = src.index('{', i)
    depth = 0
    for j in range(i, len(src)):
        depth += {'{': 1, '}': -1}.get(src[j], 0)
        if depth == 0:
            return src[i + 1:j]
    raise ValueError('unclosed block after ' + opener)


def theme_colours():
    src = open(THEME).read()
    primary = re.search(r"export const PRIMARY = '(#[0-9A-Fa-f]{6})'", src).group(1)
    light_accents = block(block(src, 'export const accents'), 'light:')
    accent = dict(re.findall(r"(\w+): \{ fill: '(#[0-9A-Fa-f]{6})'", light_accents))
    meters = block(block(src, 'export const meterColors'), 'light:')
    positive = re.search(r"positive: '(#[0-9A-Fa-f]{6})'", meters).group(1)
    palette = block(src, 'export const palette')
    page = re.search(r"background: '(#[0-9A-Fa-f]{6})'", block(palette, 'light:')).group(1)
    ink = re.search(r"foreground: '(#[0-9A-Fa-f]{6})'", block(palette, 'light:')).group(1)
    paper = re.search(r"foreground: '(#[0-9A-Fa-f]{6})'", block(palette, 'dark:')).group(1)
    for k in ('blue', 'amber', 'orange', 'red', 'teal'):
        if k not in accent:
            raise SystemExit('theme.ts: no light accent %r' % k)
    c = {k: hex_rgb(v) for k, v in accent.items()}
    return {
        'violet': hex_rgb(primary),
        'amber': c['amber'],
        'orange': c['orange'],
        'teal': c['teal'],
        'blue': c['blue'],
        'calm': mix(c['blue'], hex_rgb(page), 0.45),
        'coral': mix(c['red'], (255, 255, 255), 0.18),
        'green': hex_rgb(positive),
    }, hex_rgb(ink), hex_rgb(paper)


def background(base, side):
    """the colour, lighter where the figure's head is and a shade deeper in the corners"""
    n = 120
    light, deep = mix(base, (255, 255, 255), 0.20), mix(base, (0, 0, 0), 0.07)
    im = Image.new('RGB', (n, n))
    px = im.load()
    cx, cy, r = 0.5 * n, 0.38 * n, 0.82 * n
    for y in range(n):
        for x in range(n):
            t = min(1.0, (((x + 0.5 - cx) ** 2 + (y + 0.5 - cy) ** 2) ** 0.5) / r)
            t = t * t * (3 - 2 * t)
            px[x, y] = mix(light, deep, t)
    return im.resize((side, side), Image.BICUBIC)


# ── the art ──────────────────────────────────────────────────────────────────

def luminance(fill):
    m = re.match(r'rgb\((\d+),\s*(\d+),\s*(\d+)\)', fill)
    rgb = tuple(int(v) for v in m.groups()) if m else hex_rgb(fill)
    return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]


def art_paths(pose):
    """[(d, is_paper)] in drawing order: what the art draws, without its rig data"""
    src = open(os.path.join(ART_DIR, pose + '.svg')).read()
    cut = re.search(r'<!--[^>]*?(rig-only|not drawn)', src, re.I)
    if cut:
        src = src[:cut.start()]
    out = []
    for m in re.finditer(r'<path\b([^>]*?)/?>', src):
        attrs = m.group(1)
        tf = re.search(r'\btransform="([^"]+)"', attrs)
        if tf and tf.group(1).replace(' ', '') != 'translate(0,0)':
            raise SystemExit('%s.svg: a path has transform %r, which this script does not apply' % (pose, tf.group(1)))
        op = re.search(r'fill-opacity="([^"]+)"', attrs)
        if op and float(op.group(1)) < 0.5:
            continue  # trace slivers, and the shapes the art keeps invisible
        fill = re.search(r'\bfill="([^"]+)"', attrs)
        if fill and fill.group(1).startswith('url('):
            continue
        d = re.search(r'\bd="([^"]+)"', attrs).group(1)
        out.append((d, bool(fill) and luminance(fill.group(1)) > 128))
    return out


def frame(paths, mirrored):
    """a square viewBox with the figure centred, FILL_H of its height or FILL_W of its width"""
    pts = [p for d, _ in paths for s in parse_d(d) for p in flat(s, 12)]
    x0, y0, x1, y1 = bbox(pts)
    if mirrored:
        x0, x1 = 2048 - x1, 2048 - x0
    m = OUTLINE / 2
    x0, y0, x1, y1 = x0 - m, y0 - m, x1 + m, y1 + m
    side = max((y1 - y0) / FILL_H, (x1 - x0) / FILL_W)
    cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
    return (cx - side / 2, cy - side / 2, side, side)


def mask_svg(paths, vb, mirrored, ink, paper, detail):
    """the figure in three greys on black: the outline, the paper, the art's own ink shapes"""
    px = SIZE * SCALE
    g = '<g transform="translate(2048,0) scale(-1,1)">' if mirrored else '<g>'
    strokes = ''.join('<path d="%s"/>' % d for d, is_paper in paths if is_paper)
    shapes = ''.join('<path d="%s" fill="%s"/>' % (d, paper if is_paper else detail) for d, is_paper in paths)
    return ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="%s" width="%d" height="%d">'
            '<rect x="-5000" y="-5000" width="20000" height="20000" fill="#000"/>%s'
            '<g fill="none" stroke="%s" stroke-width="%g" stroke-linejoin="round" stroke-linecap="round">%s</g>'
            '%s</g></svg>') % (' '.join('%.2f' % v for v in vb), px, px, g, ink, OUTLINE, strokes, shapes)


def render(svgs, work):
    """{key: svg text} -> {key: L image}, through Quick Look in one run"""
    files = []
    for key, text in svgs.items():
        f = os.path.join(work, key + '.svg')
        open(f, 'w').write(text)
        files.append(f)
    px = SIZE * SCALE
    subprocess.run(['qlmanage', '-t', '-s', str(px), '-o', work] + files, capture_output=True, check=False)
    out = {}
    for key, f in zip(svgs, files):
        png = f + '.png'
        if not os.path.exists(png):
            raise SystemExit('Quick Look did not render %s' % f)
        im = Image.open(png).convert('L')
        if im.size != (px, px):
            im = im.resize((px, px), Image.LANCZOS)
        out[key] = im
    return out


def save_png(im, path):
    # Two colours and their anti-aliased edges: a 64-colour palette keeps the
    # edges smooth at a fraction of the size of 32-bit RGBA.
    im.quantize(colors=64, method=Image.Quantize.FASTOCTREE).save(path, 'PNG', optimize=True)
    if os.path.getsize(path) > PNG_BUDGET:
        raise SystemExit('%s is %d bytes, over %d' % (path, os.path.getsize(path), PNG_BUDGET))


def save_jpeg(im, path):
    icc = ImageCms.ImageCmsProfile(ImageCms.createProfile('sRGB')).tobytes()
    for sub in (0, 2):                      # 4:4:4 keeps the outline clean of colour; 4:2:0 if it must
        for q in range(QUALITY, 69, -5):
            im.save(path, 'JPEG', quality=q, subsampling=sub, optimize=True, icc_profile=icc)
            if os.path.getsize(path) <= BUDGET:
                return q, sub
    raise SystemExit('%s stays over %d bytes' % (path, BUDGET))


# ── the contact sheet ────────────────────────────────────────────────────────

def contact_sheet(made, path, page):
    """every picture at full size, at a banner's 40 pt @3x (120 px) and at 40 px"""
    try:
        font = ImageFont.load_default(size=18)
    except TypeError:
        font = ImageFont.load_default()
    cols, tw, th = 5, SIZE + 20, SIZE + 170
    rows = (len(made) + cols - 1) // cols
    sheet = Image.new('RGB', (cols * tw, rows * th), page)
    d = ImageDraw.Draw(sheet)
    for i, (name, (file, pose, size, q, sub)) in enumerate(made.items()):
        x, y = (i % cols) * tw + 10, (i // cols) * th + 10
        im = Image.open(file).convert('RGBA')
        # Half on the light banner material, half on the dark one.
        sheet.paste((236, 236, 240), (x, y, x + SIZE // 2, y + SIZE))
        sheet.paste((44, 44, 48), (x + SIZE // 2, y, x + SIZE, y + SIZE))
        sheet.paste(im, (x, y), im)
        small = im.resize((120, 120), Image.LANCZOS)
        sheet.paste(small, (x, y + SIZE + 10), small)
        tiny = im.resize((40, 40), Image.LANCZOS)
        sheet.paste(tiny, (x + 132, y + SIZE + 90), tiny)
        d.text((x + 184, y + SIZE + 14), name, fill=(17, 17, 20), font=font)
        d.text((x + 184, y + SIZE + 38), pose, fill=(119, 119, 126), font=font)
        d.text((x + 184, y + SIZE + 62), '%.1f KB' % (size / 1024), fill=(119, 119, 126), font=font)
    sheet.save(path, 'JPEG', quality=90)


# ── run ──────────────────────────────────────────────────────────────────────

def main():
    ap = argparse.ArgumentParser(description=__doc__.split('\n')[0])
    ap.add_argument('--work', help='where the masks are rendered (kept); a temporary folder by default')
    ap.add_argument('--sheet', help='also write a contact sheet of every picture here')
    ap.add_argument('--only', nargs='*', help='only these names')
    args = ap.parse_args()

    colours, ink, paper = theme_colours()
    work = args.work or tempfile.mkdtemp(prefix='notification-art-')
    os.makedirs(work, exist_ok=True)
    os.makedirs(OUT_DIR, exist_ok=True)
    names = args.only or list(NOTIFICATIONS)

    svgs, frames = {}, {}
    for name in names:
        pose, _, mirrored = NOTIFICATIONS[name]
        paths = art_paths(pose)
        vb = frame(paths, mirrored)
        # everything the figure covers, then the paper alone (ink and the art's ink shapes black)
        svgs[name + '.all'] = mask_svg(paths, vb, mirrored, '#fff', '#fff', '#fff')
        svgs[name + '.paper'] = mask_svg(paths, vb, mirrored, '#000', '#fff', '#000')
        frames[name] = vb
    masks = render(svgs, work)

    big = SIZE * SCALE
    made = {}
    for name in names:
        pose, colour, _ = NOTIFICATIONS[name]
        # No background: the figure alone on transparency, outlined, so it
        # reads on the banner's own light or dark material.
        im = Image.new('RGBA', (big, big), (0, 0, 0, 0))
        im = Image.composite(Image.new('RGBA', (big, big), ink + (255,)), im, masks[name + '.all'])
        im = Image.composite(Image.new('RGBA', (big, big), paper + (255,)), im, masks[name + '.paper'])
        im = im.resize((SIZE, SIZE), Image.LANCZOS)
        out = os.path.join(OUT_DIR, name + '.png')
        save_png(im, out)
        made[name] = (out, pose, os.path.getsize(out), 0, 0)
        print('%-8s %-10s %5.1f KB' % (name, pose, made[name][2] / 1024))

    if args.sheet:
        contact_sheet(made, args.sheet, (244, 244, 246))
        print('sheet:', args.sheet)
    if not args.work:
        shutil.rmtree(work, ignore_errors=True)


if __name__ == '__main__':
    main()
