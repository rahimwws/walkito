import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { ImageResponse } from 'next/og';

import { CALF_NORMS, CALF_NORM_AGES } from '@/lib/tools/calf-norms';
import { HANSEN_POINTS } from '@/lib/tools/pf-timeline';
import { SITE_URL } from '@/lib/site';

/**
 * Two charts writers can put in their own articles (outreach): the calf raise
 * norms by age and sex, and the plantar fasciitis recovery timeline. Drawn from
 * the same data as the tools on the pages (lib/tools), so a number can never
 * differ between the page and the picture. Built once into static PNGs at
 * /charts/<file>.png (app/charts/[file]/route.ts).
 */

export type WriterImageId = 'calf-raise-test-norms' | 'plantar-fasciitis-recovery-timeline';

export const WRITER_IMAGES: Record<
  WriterImageId,
  { file: string; path: string; tool: 'calf-raise-calculator' | 'pf-timeline'; alt: string; width: number; height: number }
> = {
  'calf-raise-test-norms': {
    file: 'calf-raise-test-norms.png',
    path: '/calf-raise-test/',
    tool: 'calf-raise-calculator',
    alt: 'Table: typical single-leg calf raise count by age and sex, from Hébert-Losier 2017 (566 adults). Source: walkito.site',
    width: 1200,
    height: 900,
  },
  'plantar-fasciitis-recovery-timeline': {
    file: 'plantar-fasciitis-recovery-timeline.png',
    path: '/how-long-does-plantar-fasciitis-last/',
    tool: 'pf-timeline',
    alt: 'Chart: share of 174 people with plantar fasciitis still with symptoms 1, 5, 10 and 15 years after the pain started (Hansen 2018). Source: walkito.site',
    width: 1200,
    height: 800,
  },
};

const VIOLET = '#8b5cf6';
const INK = '#111114';
const TEXT = '#3a3a42';
const MUTED = '#6b6b73';
const CARD = '#f4f4f6';

const dir = join(process.cwd(), 'og-assets');
let assets: { oswald: Buffer; icon: string } | null = null;
function load() {
  assets ??= {
    oswald: readFileSync(join(dir, 'fonts', 'Oswald-Bold.ttf')),
    icon: `data:image/png;base64,${readFileSync(join(dir, 'icon.png')).toString('base64')}`,
  };
  return assets;
}

function Frame({ title, sub, source, path, children, w, h }: { title: string; sub: string; source: string; path: string; children: React.ReactNode; w: number; h: number }) {
  const { icon } = load();
  const host = SITE_URL.replace(/^https?:\/\//, '');
  return (
    <div style={{ width: w, height: h, display: 'flex', flexDirection: 'column', background: '#ffffff', padding: 56, fontSize: 26, color: TEXT }}>
      <div style={{ display: 'flex', fontFamily: 'Oswald', fontSize: 50, color: INK, lineHeight: 1.1 }}>{title}</div>
      <div style={{ display: 'flex', marginTop: 12, fontSize: 26, color: MUTED }}>{sub}</div>
      <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, marginTop: 32 }}>{children}</div>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: 28 }}>
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: 20, color: MUTED, maxWidth: 820 }}>
          <span>{source}</span>
          <span style={{ marginTop: 6 }}>Free to use with a link to {host}{path}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={icon} width={34} height={34} style={{ borderRadius: 8 }} />
          <span style={{ marginLeft: 10, fontSize: 24, color: INK, fontWeight: 700 }}>{host}</span>
        </div>
      </div>
    </div>
  );
}

function NormsTable({ w, h }: { w: number; h: number }) {
  const cell = { display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' } as const;
  return (
    <Frame
      w={w}
      h={h}
      title="Single-leg calf raise test: typical count by age"
      sub="Raises per leg, healthy adults, by age and sex (median)"
      source="Source: Hébert-Losier K et al., 2017, 566 adults aged 20 to 81. Model estimates for BMI 24.2 and moderate activity, both legs averaged."
      path={WRITER_IMAGES['calf-raise-test-norms'].path}
    >
      <div style={{ display: 'flex', flexDirection: 'column', borderRadius: 18, overflow: 'hidden', background: CARD }}>
        <div style={{ display: 'flex', height: 64, background: INK, color: '#ffffff', fontSize: 26, fontWeight: 700 }}>
          <div style={cell}>Age</div>
          <div style={cell}>Women</div>
          <div style={cell}>Men</div>
        </div>
        {CALF_NORM_AGES.map((age, i) => (
          <div key={age} style={{ display: 'flex', height: 62, background: i % 2 ? CARD : '#ffffff', fontSize: 30, color: INK }}>
            <div style={{ ...cell, color: MUTED }}>{age}</div>
            <div style={{ ...cell, fontWeight: 700 }}>{CALF_NORMS.female[i]}</div>
            <div style={{ ...cell, fontWeight: 700 }}>{CALF_NORMS.male[i]}</div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function Timeline({ w, h }: { w: number; h: number }) {
  const barMax = 760;
  return (
    <Frame
      w={w}
      h={h}
      title="How long does plantar fasciitis last?"
      sub="Share of 174 people still with symptoms, by time since the pain started. A hard-to-treat referral group (93% had a cortisone injection); remaining pain was mild on average."
      source="Source: Hansen L et al., 2018, 174 people with ultrasound-confirmed plantar fasciitis, 5 to 15 year follow-up."
      path={WRITER_IMAGES['plantar-fasciitis-recovery-timeline'].path}
    >
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1 }}>
        {HANSEN_POINTS.map((p) => (
          <div key={p.year} style={{ display: 'flex', alignItems: 'center', marginBottom: 30 }}>
            <div style={{ display: 'flex', width: 150, fontSize: 30, color: MUTED }}>{p.year === 1 ? '1 year' : `${p.year} years`}</div>
            <div style={{ display: 'flex', width: barMax, height: 44, borderRadius: 22, background: CARD }}>
              <div style={{ display: 'flex', width: Math.round((barMax * p.pct) / 100), height: 44, borderRadius: 22, background: VIOLET }} />
            </div>
            <div style={{ display: 'flex', marginLeft: 24, fontSize: 32, fontWeight: 700, color: INK }}>{p.pct.toFixed(1)}%</div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export async function writerImage(id: WriterImageId): Promise<Response> {
  const { oswald } = load();
  const { width, height } = WRITER_IMAGES[id];
  const body = id === 'calf-raise-test-norms' ? <NormsTable w={width} h={height} /> : <Timeline w={width} h={height} />;
  return new ImageResponse(body, { width, height, fonts: [{ name: 'Oswald', data: oswald, weight: 700, style: 'normal' }] });
}
