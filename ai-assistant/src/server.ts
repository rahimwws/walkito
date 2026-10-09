/**
 * The Walkito AI assistant: one stateless MCP server with MCP Apps widgets,
 * for ChatGPT and Claude, behind https://walkito.site/mcp.
 *
 * Listens on 127.0.0.1 only; nginx on the website's droplet proxies `/mcp`,
 * `/mcp-health` and `/p/` to it (DEPLOY.md). Nothing is stored: every request
 * builds a fresh server, and the log line per call holds the tool, the host,
 * enum arguments, the latency and the status — never anything a person typed.
 */
import { createServer, type IncomingMessage, type ServerResponse } from 'node:http';

import { registerAppResource, registerAppTool, RESOURCE_MIME_TYPE } from '@modelcontextprotocol/ext-apps/server';
import { toNodeHandler } from '@modelcontextprotocol/node';
import { CLIENT_INFO_META_KEY, McpServer, createMcpHandler, type McpRequestContext } from '@modelcontextprotocol/server';
import {
  PLAN_AREAS,
  PLAN_DAYS,
  PLAN_EQUIPMENT,
  PLAN_MINUTES,
  PLAN_SIDES,
  type PlanSource,
} from '@/shared/lib/plan-code';
import { z } from 'zod';

import { EXERCISE_IDS } from './content';
import { planPage } from './plan-page';
import {
  EXERCISE_SYNONYMS,
  RED_FLAG_IDS,
  buildStarterPlan,
  exerciseDemo,
  feetAfterWork,
  firstStepStretch,
  flatFootCheck,
  readyToRun,
  reliefNow,
  shoesAndInserts,
  whenToSeeDoctor,
  type ToolResult,
} from './tools';

declare const __WIDGET_HTML__: string;
declare const __VERSION__: string;

const PORT = Number(process.env.PORT ?? 8787);
const HOST = '127.0.0.1';
const SITE = 'https://walkito.site';
const CLIP_ORIGIN = new URL(process.env.CLIP_ORIGIN ?? 'https://illpzsrzfpllovwslmdx.supabase.co').origin;

/** The six widgets. One renderer, six resources: each tool points at the one
 * named for what it shows, and the renderer draws by `structuredContent.kind`. */
const WIDGETS = ['routine', 'plan_week', 'single_exercise', 'self_check', 'safety_card', 'tips'] as const;
type WidgetName = (typeof WIDGETS)[number];
const uri = (w: WidgetName) => `ui://walkito/${w}.html`;

const CSP = { resourceDomains: [CLIP_ORIGIN, SITE], connectDomains: [] as string[] };

const ANNOTATIONS = { readOnlyHint: true, destructiveHint: false, openWorldHint: false } as const;

// ─── Host and logging ───────────────────────────────────────────────────────

/** Which assistant is asking: the client name a 2026 client sends on every
 * request, else the user agent; `other` when neither says. */
function sourceOf(meta: Record<string, unknown> | undefined, userAgent: string): PlanSource {
  const info = meta?.[CLIENT_INFO_META_KEY] as { name?: string } | undefined;
  const name = `${info?.name ?? ''} ${userAgent}`.toLowerCase();
  if (/openai|chatgpt/.test(name)) return 'chatgpt';
  if (/claude|anthropic/.test(name)) return 'claude';
  return 'other';
}

/**
 * What a log line may hold of a call's arguments: the plan's own settings,
 * which are enums. Never pain figures, test numbers, symptoms or anything a
 * person typed (spec §1.6), so this is a list of keys allowed, not removed.
 */
const LOGGED_ARGS = new Set(['area', 'minutes', 'days_per_week', 'equipment', 'side', 'exercise']);

function logArgs(args: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(args ?? {})) {
    if (!LOGGED_ARGS.has(key)) continue;
    if (key === 'exercise' && typeof value === 'string')
      out[key] = EXERCISE_IDS.includes(value as never) || value in EXERCISE_SYNONYMS ? value : 'other';
    else if (key === 'minutes' || key === 'days_per_week') out[key] = typeof value === 'number' ? value : undefined;
    else if (typeof value === 'string' && /^[a-z0-9_]{1,24}$/.test(value)) out[key] = value;
    else if (Array.isArray(value)) out[key] = value.filter((v) => typeof v === 'string' && /^[a-z0-9_]{1,24}$/.test(v));
  }
  return out;
}

function log(entry: Record<string, unknown>) {
  process.stdout.write(`${JSON.stringify({ t: new Date().toISOString(), ...entry })}\n`);
}

// ─── Tools ──────────────────────────────────────────────────────────────────

type Handler = (args: never, source: PlanSource) => ToolResult;

const TOOLS: {
  name: string;
  title: string;
  widget: WidgetName;
  description: string;
  input?: z.ZodObject;
  run: Handler;
}[] = [
  {
    name: 'relief_now',
    title: 'Relief now',
    widget: 'routine',
    description:
      'Use this when someone says their heel, arch or foot hurts right now or today and asks what they can do. Returns a gentle 3-minute seated routine with short exercise videos and when to see a doctor. Do not use for injuries from a fall or twist, or for questions about medicines.',
    input: z.object({
      area: z.enum(PLAN_AREAS).optional().describe('Where it hurts. Default heel_arch.'),
      pain_today: z.number().int().min(0).max(10).optional().describe('Pain today, 0 to 10, if the person said it.'),
    }),
    run: ((args: { area?: (typeof PLAN_AREAS)[number]; pain_today?: number }, source) => reliefNow(args, source)) as Handler,
  },
  {
    name: 'first_step_stretch',
    title: 'First-step stretch',
    widget: 'single_exercise',
    description:
      'Use this when someone has heel or arch pain with the first steps in the morning or after sitting, and wants a stretch to do before standing up. Returns the plantar fascia stretch done in bed (10 × 10 seconds per foot) with a video.',
    input: z.object({ side: z.enum(PLAN_SIDES).optional().describe('Which foot hurts. Default both.') }),
    run: ((args: { side?: (typeof PLAN_SIDES)[number] }, source) => firstStepStretch(args, source)) as Handler,
  },
  {
    name: 'build_starter_plan',
    title: 'Starter plan',
    widget: 'plan_week',
    description:
      'Use this when someone asks for an exercise plan or routine for heel pain, plantar fasciitis, arch pain, flat feet, Achilles pain or shin pain. Returns a 7-day starter plan of short daily exercises with videos, based on the painful area, minutes per day and available equipment. Do not use to diagnose a condition.',
    input: z.object({
      area: z
        .enum(PLAN_AREAS)
        .describe(
          'The painful area. Plantar fasciitis or heel spur: heel_arch. Flat feet or fallen arches: flat_feet. Achilles: achilles. Shin splints: shin. No pain, just stronger feet: general_plus.',
        ),
      minutes: z.union([z.literal(3), z.literal(5), z.literal(10)]).optional().describe('Minutes per day: 3, 5 or 10. Default 5.'),
      days_per_week: z.union([z.literal(3), z.literal(5), z.literal(7)]).optional().describe('Days per week: 3, 5 or 7. Default 5.'),
      equipment: z.array(z.enum(PLAN_EQUIPMENT)).optional().describe('Equipment at home. Default none.'),
      side: z.enum(PLAN_SIDES).optional().describe('Which side hurts. Default both.'),
      age_group: z.enum(['under_40', '40_59', '60_plus', 'unknown']).optional().describe('Age group, if said. Default unknown.'),
      pain_today: z.number().int().min(0).max(10).optional().describe('Pain today, 0 to 10, if the person said it.'),
    }),
    run: ((args, source) => buildStarterPlan(args, source, todayKey())) as Handler,
  },
  {
    name: 'exercise_demo',
    title: 'Exercise demo',
    widget: 'single_exercise',
    description:
      'Use this when someone asks how to do a specific foot or calf exercise, such as short foot, towel heel raise, calf stretch, toe yoga, tibialis raise, knee to wall or single-leg balance. Returns a short video and step-by-step cues.',
    input: z.object({
      exercise: z
        .enum([...EXERCISE_IDS, ...Object.keys(EXERCISE_SYNONYMS)] as [string, ...string[]])
        .describe('The exercise, by id or common name.'),
    }),
    run: ((args: { exercise: string }, source) => exerciseDemo(args, source)) as Handler,
  },
  {
    name: 'flat_foot_check',
    title: 'Flat foot check',
    widget: 'self_check',
    description:
      'Use this when someone wonders whether they have flat feet or whether their flat feet are flexible. Returns a simple at-home check (big toe lift) and what the result usually means. It does not diagnose.',
    input: z.object({
      arch_appears: z
        .enum(['yes', 'no', 'not_sure'])
        .optional()
        .describe('After lifting the big toe, did an arch appear? Leave out to get the instructions.'),
    }),
    run: ((args: { arch_appears?: 'yes' | 'no' | 'not_sure' }, source) => flatFootCheck(args, source)) as Handler,
  },
  {
    name: 'when_to_see_doctor',
    title: 'When to see a doctor',
    widget: 'safety_card',
    description:
      'Use this when someone asks whether their foot, heel, ankle or shin pain is serious or needs a doctor. Returns the warning signs that mean getting checked by a doctor.',
    input: z.object({
      symptoms: z.array(z.enum(RED_FLAG_IDS as [string, ...string[]])).optional().describe('Warning signs the person mentioned.'),
    }),
    run: ((args: { symptoms?: never[] }) => whenToSeeDoctor(args)) as Handler,
  },
  {
    name: 'feet_after_work',
    title: 'Feet after work',
    widget: 'routine',
    description:
      'Use this when someone’s feet or legs hurt after standing or walking all day at work (for example nurses, servers, retail workers) and they want something to do after a shift. Returns a short after-work routine with videos and simple shoe tips.',
    input: z.object({}),
    run: ((_args, source) => feetAfterWork(source)) as Handler,
  },
  {
    name: 'shoes_and_inserts',
    title: 'Shoes and inserts',
    widget: 'tips',
    description:
      'Use this when someone asks what shoes, insoles or heel cups help with heel pain, arch pain or flat feet, or how to find shoes for wide feet. Returns general footwear tips. Does not recommend brands.',
    input: z.object({}),
    run: (() => shoesAndInserts()) as Handler,
  },
  {
    name: 'ready_to_run',
    title: 'Ready to run?',
    widget: 'self_check',
    description:
      'Use this when someone with heel, Achilles or shin pain asks when they can start running again. Returns a short readiness check and a gentle run-walk starting point.',
    input: z.object({
      morning_pain_avg_2w: z.number().min(0).max(10).describe('Average first-step pain over the last two weeks, 0 to 10.'),
      single_leg_calf_raises: z.number().int().min(0).max(200).optional().describe('Single-leg calf raises in a row on the painful side.'),
    }),
    run: ((args: { morning_pain_avg_2w: number; single_leg_calf_raises?: number }, source) => readyToRun(args, source)) as Handler,
  },
];

/** Today in the server's zone, for laying out the week from its Monday. */
function todayKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${`${d.getMonth() + 1}`.padStart(2, '0')}-${`${d.getDate()}`.padStart(2, '0')}`;
}

function serverFor(ctx: McpRequestContext): McpServer {
  const userAgent = ctx.requestInfo?.headers.get('user-agent') ?? '';
  const server = new McpServer(
    { name: 'walkito', title: 'Walkito', version: __VERSION__, websiteUrl: SITE },
    { capabilities: { tools: {}, resources: {} } },
  );

  for (const widget of WIDGETS) {
    registerAppResource(
      server,
      `Walkito ${widget.replace('_', ' ')}`,
      uri(widget),
      { description: `Walkito ${widget.replace('_', ' ')} view`, _meta: { ui: { csp: CSP, prefersBorder: false } } },
      async () => ({
        contents: [
          {
            uri: uri(widget),
            mimeType: RESOURCE_MIME_TYPE,
            text: __WIDGET_HTML__,
            _meta: {
              ui: { csp: CSP, prefersBorder: false },
              // ChatGPT's own keys, alongside the MCP Apps ones.
              'openai/widgetCSP': { connect_domains: [], resource_domains: CSP.resourceDomains },
              'openai/widgetPrefersBorder': false,
              'openai/widgetDescription': 'Walkito exercises with short videos.',
            },
          },
        ],
      }),
    );
  }

  for (const tool of TOOLS) {
    registerAppTool(
      server,
      tool.name,
      {
        title: tool.title,
        description: tool.description,
        inputSchema: tool.input ?? z.object({}),
        annotations: { ...ANNOTATIONS, title: tool.title },
        _meta: {
          ui: { resourceUri: uri(tool.widget) },
          'openai/outputTemplate': uri(tool.widget),
          'openai/widgetAccessible': false,
        },
      },
      async (args: Record<string, unknown>, extra) => {
        const started = performance.now();
        const source = sourceOf(extra?.mcpReq?._meta as Record<string, unknown> | undefined, userAgent);
        try {
          const out = tool.run(args as never, source);
          log({ tool: tool.name, host: source, args: logArgs(args), ms: Math.round(performance.now() - started), status: 'ok' });
          return {
            content: [{ type: 'text' as const, text: out.text }],
            structuredContent: out.structuredContent as unknown as Record<string, unknown>,
          };
        } catch (error) {
          log({ tool: tool.name, host: source, args: logArgs(args), ms: Math.round(performance.now() - started), status: 'error', code: (error as Error).name });
          return { isError: true, content: [{ type: 'text' as const, text: 'That did not work. Please try again.' }] };
        }
      },
    );
  }
  return server;
}

// ─── HTTP ───────────────────────────────────────────────────────────────────

const mcp = toNodeHandler(createMcpHandler((ctx) => serverFor(ctx)));

/** Hosts that may call the endpoint from a browser; server-to-server calls
 * carry no Origin and are not affected. */
const ALLOWED_ORIGINS = [/^https:\/\/chatgpt\.com$/, /^https:\/\/([a-z0-9-]+\.)*openai\.com$/, /^https:\/\/claude\.ai$/, /^https:\/\/([a-z0-9-]+\.)*claude\.(ai|com)$/];

function cors(req: IncomingMessage, res: ServerResponse) {
  const origin = req.headers.origin;
  if (origin && ALLOWED_ORIGINS.some((re) => re.test(origin))) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'content-type, accept, authorization, mcp-protocol-version, mcp-session-id, last-event-id');
    res.setHeader('Access-Control-Expose-Headers', 'mcp-session-id, mcp-protocol-version');
  }
}

const http = createServer((req, res) => {
  const path = (req.url ?? '/').split('?')[0];
  if (path === '/health' || path === '/mcp-health') {
    res.writeHead(200, { 'content-type': 'application/json', 'cache-control': 'no-store' });
    res.end(JSON.stringify({ ok: true, version: __VERSION__ }));
    return;
  }
  if (path === '/mcp' || path === '/mcp/') {
    cors(req, res);
    if (req.method === 'OPTIONS') {
      res.writeHead(204);
      res.end();
      return;
    }
    if (req.method !== 'POST') {
      log({ http: req.method, path, host: sourceOf(undefined, String(req.headers['user-agent'] ?? '')) });
      void mcp(req, res);
      return;
    }
    // The JSON-RPC method names of each POST go into the log (never the
    // params), so a host that connects but never calls a tool is visible.
    const chunks: Buffer[] = [];
    let size = 0;
    req.on('data', (chunk: Buffer) => {
      size += chunk.length;
      if (size <= 1_000_000) chunks.push(chunk);
    });
    req.on('end', () => {
      let body: unknown;
      try {
        body = JSON.parse(Buffer.concat(chunks).toString('utf8'));
      } catch {
        body = undefined;
      }
      const methods = (Array.isArray(body) ? body : [body])
        .map((m) => (m && typeof m === 'object' ? (m as { method?: unknown }).method : undefined))
        .filter((m): m is string => typeof m === 'string' && /^[\w/.-]{1,60}$/.test(m));
      const writeHead = res.writeHead.bind(res);
      res.writeHead = ((status: number, ...rest: unknown[]) => {
        log({
          rpc: methods,
          status,
          version: String(req.headers['mcp-protocol-version'] ?? ''),
          host: sourceOf(undefined, String(req.headers['user-agent'] ?? '')),
          ua: String(req.headers['user-agent'] ?? '').slice(0, 40),
        });
        return (writeHead as (...a: unknown[]) => ServerResponse)(status, ...rest);
      }) as typeof res.writeHead;
      void mcp(req, res, body);
    });
    return;
  }
  const code = /^\/p\/([^/]+)\/?$/.exec(path);
  if (code) {
    const page = planPage(decodeURIComponent(code[1]));
    res.writeHead(page.status, { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'public, max-age=300' });
    res.end(page.html);
    log({ page: 'p', status: page.status === 200 ? 'ok' : 'invalid', host: page.source ?? 'unknown' });
    return;
  }
  res.writeHead(404, { 'content-type': 'text/plain' });
  res.end('Not found');
});

http.listen(PORT, HOST, () => log({ start: true, port: PORT, version: __VERSION__ }));

for (const signal of ['SIGTERM', 'SIGINT'] as const) {
  process.on(signal, () => http.close(() => process.exit(0)));
}
