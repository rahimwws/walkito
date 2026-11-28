// Shotik analytics wire format, shared by the SDK and the server (imported there as wire.ts). No imports, no platform
// code. A batch is dictionary-packed: every repeated string (screen, element, event name, session id) is sent once per
// batch and referenced by index, timestamps are deltas, and props keep short keys. React Native has no gzip without
// native code, so this is the compression: about 6x smaller than plain JSON on tap-heavy batches.

export const WIRE_VERSION = 1

// Event types. Codes are the array position, so append only.
export const TYPES = ['session', 'open', 'close', 'screen', 'leave', 'tap', 'rage', 'scroll', 'error', 'slow', 'purchase', 'custom', 'identify', 'snapshot'] as const
export type EventType = (typeof TYPES)[number]

export interface DeviceContext {
  platform?: string
  os?: string
  model?: string
  app?: string
  build?: string
  locale?: string
  tz?: string
  w?: number
  h?: number
}

// Props by type (all optional, short keys keep batches small):
//   session  { first: 1 on the first session of this install, store: 'none' | 'error' when the id can't persist }
//   screen   { from, ms (ready time) }               leave { dur, depth (0..1), drag (pt), stalls, maxStall }
//   tap      { el, id, label, x, y, nx, ny (0..1000), dead: 1, input: 1 }   rage { el, id, label, n, x, y }
//            id is the stable element key (testID, nativeID or a structural hash); el and label are for display
//   error    { msg, fatal: 1, stack (top frames, no values) }          slow { ms, kind: 'ready' | 'stall' }
//   purchase { product, price, currency, status: start | done | cancel | fail, store, trial: 1 }
//   custom   free-form (no PII by contract)                             identify { traits }
export interface WireEvent {
  seq: number
  ts: number
  type: EventType
  sessionId: string
  name?: string
  screen?: string
  props?: Record<string, unknown>
}

export interface Batch {
  anonymousId: string
  userId?: string | null
  firstSeen?: number
  device?: DeviceContext
  events: WireEvent[]
}

// [dt, type, seq, session, screen, name, props]; string slots are dictionary indexes, -1 = absent.
export type PackedEvent = [number, number, number, number, number, number, Record<string, unknown> | 0]
export interface PackedBatch {
  v: 1
  a: string
  u?: string | null
  f?: number
  c?: DeviceContext
  t0: number
  d: string[]
  e: PackedEvent[]
}

const PACKED_PROPS = ['el', 'label', 'from']

export function pack(b: Batch): PackedBatch {
  const d: string[] = []
  const ix = new Map<string, number>()
  const s = (v: unknown): number => {
    if (typeof v !== 'string') return -1
    let i = ix.get(v)
    if (i === undefined) {
      i = d.length
      d.push(v)
      ix.set(v, i)
    }
    return i
  }
  const t0 = b.events.length ? b.events[0].ts : 0
  let prev = t0
  const e = b.events.map((ev): PackedEvent => {
    const dt = ev.ts - prev
    prev = ev.ts
    let p: Record<string, unknown> | 0 = 0
    if (ev.props) {
      p = {}
      for (const k in ev.props) {
        const v = ev.props[k]
        if (v === undefined) continue
        p[k] = PACKED_PROPS.includes(k) && typeof v === 'string' ? s(v) : v
      }
    }
    return [dt, TYPES.indexOf(ev.type), ev.seq, s(ev.sessionId), s(ev.screen), s(ev.name), p]
  })
  return { v: 1, a: b.anonymousId, u: b.userId ?? null, f: b.firstSeen, c: b.device, t0, d, e }
}

export function unpack(p: PackedBatch): Batch {
  const str = (i: number) => (i >= 0 && i < p.d.length ? p.d[i] : undefined)
  let ts = p.t0
  const events = p.e.map(([dt, type, seq, sess, screen, name, props]): WireEvent => {
    ts += dt
    let pr: Record<string, unknown> | undefined
    if (props) {
      pr = {}
      for (const k in props) pr[k] = PACKED_PROPS.includes(k) && typeof props[k] === 'number' ? str(props[k] as number) : props[k]
    }
    return { seq, ts, type: TYPES[type] ?? 'custom', sessionId: str(sess) ?? '', screen: str(screen), name: str(name), props: pr }
  })
  return { anonymousId: p.a, userId: p.u ?? null, firstSeen: p.f, device: p.c, events }
}

// Session wireframe: a privacy-safe picture of one screen. Text is a bar with no characters, images are boxes, inputs
// never carry their value. Node: [kind, x, y, w, h, fill?, radius?]. Kinds: v view, t text, i image, b button, n input, s scroll.
export type WireNode = [string, number, number, number, number, string?, number?]
export interface Wireframe {
  sessionId: string
  screen: string
  ts: number
  w: number
  h: number
  dark?: boolean
  nodes: WireNode[]
}
