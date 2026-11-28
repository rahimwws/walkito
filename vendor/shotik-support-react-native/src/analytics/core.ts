// Shotik analytics core: sessions, screens and time on screen, taps with rage detection, scroll depth, stalls, the
// offline queue and batched upload. Platform-free (no React Native imports), so it runs and is tested under plain Node.

import { pack } from './wire'
import type { DeviceContext, EventType, WireEvent, Wireframe } from './wire'

export interface Storage {
  get(key: string): Promise<string | null>
  set(key: string, value: string): Promise<void>
  remove(key: string): Promise<void>
}

export type Consent = 'granted' | 'denied' | 'pending'

export interface AnalyticsConfig {
  appKey: string
  serverUrl: string
  storage?: Storage
  device?: () => DeviceContext
  // pending: events are kept on the device and sent only after setConsent('granted'). Default granted.
  consent?: Consent
  // Share of sessions that record wireframes (0..1). Default 0.2.
  snapshots?: number
  flushMs?: number
  sessionTimeoutMs?: number
  debug?: boolean
  fetch?: typeof fetch
  now?: () => number
}

interface Pending {
  el: string
  id?: string
  label?: string
  x: number
  y: number
  t: number
}

const K = { anon: 'shotik.support.anon', state: 'shotik.analytics.state', queue: 'shotik.analytics.queue', consent: 'shotik.analytics.consent' }
const MAX_QUEUE = 2000
const BATCH = 300
const RAGE_N = 3
const RAGE_MS = 800
const RAGE_PT = 40

const rnd = () => Math.random().toString(36).slice(2, 10)
const uid = () => Date.now().toString(36) + rnd() + rnd()

export class Analytics {
  readonly cfg: AnalyticsConfig
  private st: Storage | null
  private now: () => number
  private queue: WireEvent[] = []
  private snaps: Wireframe[] = []
  private anon = ''
  private userId: string | null = null
  private firstSeen = 0
  private sessionId = ''
  private lastActive = 0
  private seq = 0
  private sampled = false
  private consent: Consent
  private screen: string | undefined
  private screenAt = 0
  private screenStats = { depth: 0, drag: 0, stalls: 0, maxStall: 0 }
  private taps: Pending[] = []
  private snapped = new Set<string>()
  private timer: ReturnType<typeof setTimeout> | null = null
  private saveTimer: ReturnType<typeof setTimeout> | null = null
  private sending = false
  private inflight: Promise<void> | null = null
  private backoff = 0
  private ready: Promise<void>
  private active = true
  private loaded = false
  private fresh = true

  constructor(cfg: AnalyticsConfig) {
    this.cfg = cfg
    this.st = cfg.storage ?? null
    this.now = cfg.now ?? Date.now
    this.consent = cfg.consent ?? 'granted'
    this.ready = this.load()
  }

  private async load(): Promise<void> {
    const st = this.st
    if (st) {
      try {
        const [anon, raw, q, c] = await Promise.all([st.get(K.anon), st.get(K.state), st.get(K.queue), st.get(K.consent)])
        this.anon = anon ?? ''
        const s = raw ? JSON.parse(raw) : null
        if (s) {
          this.fresh = false
          this.firstSeen = s.f ?? 0
          this.sessionId = s.s ?? ''
          this.lastActive = s.l ?? 0
          this.seq = s.q ?? 0
          this.sampled = !!s.p
          this.userId = this.userId ?? s.u ?? null
        }
        if (q) this.queue = (JSON.parse(q) as WireEvent[]).concat(this.queue).slice(-MAX_QUEUE)
        if (c === 'granted' || c === 'denied') this.consent = c
      } catch {}
    }
    if (!this.anon) {
      this.anon = 'anon_' + uid()
      st?.set(K.anon, this.anon).catch(() => {})
    }
    if (!this.firstSeen) this.firstSeen = this.now()
    this.loaded = true
    const pre = this.queue.filter((e) => !e.sessionId)
    const n = this.queue.length
    this.touch(pre[0]?.ts)
    const at = pre.length && this.queue.length > n ? this.queue.indexOf(pre[0]) : -1
    if (at >= 0) {
      const [s] = this.queue.splice(this.queue.length - 1, 1)
      this.queue.splice(at, 0, { ...s, screen: pre[0].screen })
    }
    for (const ev of pre) Object.assign(ev, { sessionId: this.sessionId, seq: ++this.seq })
    if (pre.length) this.lastActive = Math.max(this.lastActive, pre[pre.length - 1].ts)
    this.schedule()
  }

  // Starts a new session after sessionTimeoutMs (30 min) of inactivity. at: when the activity happened (events queued before storage loaded).
  private touch(at?: number): void {
    const t = at ?? this.now()
    if (!this.loaded) return
    if (!this.sessionId || t - this.lastActive > (this.cfg.sessionTimeoutMs ?? 30 * 60_000)) {
      const first = this.fresh
      this.fresh = false
      this.sessionId = 's_' + uid()
      this.seq = 0
      this.sampled = Math.random() < (this.cfg.snapshots ?? 0.2)
      this.snapped.clear()
      this.lastActive = t
      this.push('session', undefined, first ? { first: 1 } : undefined, t)
    }
    this.lastActive = t
  }

  private push(type: EventType, name?: string, props?: Record<string, unknown>, ts?: number): void {
    if (this.consent === 'denied') return
    this.queue.push({ seq: ++this.seq, ts: ts ?? this.now(), type, sessionId: this.sessionId, screen: this.screen, name, props })
    if (this.queue.length > MAX_QUEUE) this.queue.splice(0, this.queue.length - MAX_QUEUE)
    if (this.cfg.debug) console.log('[shotik]', type, name ?? '', this.screen ?? '', props ?? '')
    this.save()
    if (this.queue.length >= BATCH) this.flush()
  }

  private save(): void {
    if (!this.st || this.saveTimer) return
    this.saveTimer = setTimeout(() => {
      this.saveTimer = null
      this.persist()
    }, 1000)
  }

  private persist(): void {
    const st = this.st
    if (!st) return
    st.set(K.state, JSON.stringify({ f: this.firstSeen, s: this.sessionId, l: this.lastActive, q: this.seq, p: this.sampled ? 1 : 0, u: this.userId })).catch(() => {})
    st.set(K.queue, JSON.stringify(this.queue)).catch(() => {})
  }

  private schedule(): void {
    if (this.timer) clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this.timer = null
      this.flush().finally(() => this.active && this.schedule())
    }, (this.cfg.flushMs ?? 10_000) * Math.pow(2, this.backoff))
  }

  // Public API

  track(name: string, props?: Record<string, unknown>): void {
    this.touch()
    this.push('custom', name, props)
  }

  identify(userId: string | null, traits?: Record<string, unknown>): void {
    this.userId = userId
    this.push('identify', undefined, traits ? { traits } : undefined)
  }

  // Screen change: closes the previous screen with its time and scroll depth.
  screenView(name: string): void {
    if (name === this.screen) return
    this.touch()
    const from = this.screen
    this.leave()
    this.screen = name
    this.screenAt = this.now()
    this.push('screen', name, from ? { from } : undefined)
  }

  private leave(): void {
    if (!this.screen) return
    const s = this.screenStats
    const p: Record<string, unknown> = { dur: this.now() - this.screenAt }
    if (s.depth) p.depth = Math.round(s.depth * 100) / 100
    if (s.drag) p.drag = Math.round(s.drag)
    if (s.stalls) {
      p.stalls = s.stalls
      p.maxStall = s.maxStall
    }
    this.push('leave', this.screen, p)
    this.screenStats = { depth: 0, drag: 0, stalls: 0, maxStall: 0 }
  }

  get currentScreen(): string | undefined {
    return this.screen
  }

  screenReady(ms: number): void {
    if (ms > 700) this.push('slow', this.screen, { ms: Math.round(ms), kind: 'ready' })
  }

  stall(ms: number): void {
    const s = this.screenStats
    s.stalls++
    s.maxStall = Math.max(s.maxStall, Math.round(ms))
    if (ms > 1000) this.push('slow', this.screen, { ms: Math.round(ms), kind: 'stall' })
  }

  // A tap with its element identity. dead = nothing on the touched element handles presses.
  tap(t: { el: string; id?: string; label?: string; x: number; y: number; nx: number; ny: number; dead?: boolean; input?: boolean; ts?: number }): void {
    this.touch()
    const now = t.ts ?? this.now()
    const p: Record<string, unknown> = { el: t.el, x: Math.round(t.x), y: Math.round(t.y), nx: t.nx, ny: t.ny }
    if (t.id) p.id = t.id
    if (t.label) p.label = t.label
    if (t.dead) p.dead = 1
    if (t.input) p.input = 1
    this.push('tap', undefined, p, now)
    this.taps = this.taps.filter((q) => now - q.t < RAGE_MS && Math.hypot(q.x - t.x, q.y - t.y) < RAGE_PT)
    this.taps.push({ el: t.el, id: t.id, label: t.label, x: t.x, y: t.y, t: now })
    if (this.taps.length === RAGE_N) this.push('rage', undefined, { el: t.el, id: t.id, label: t.label, n: RAGE_N, x: Math.round(t.x), y: Math.round(t.y) }, now)
  }

  scroll(depth: number | null, drag: number): void {
    const s = this.screenStats
    if (depth != null) s.depth = Math.max(s.depth, Math.min(1, depth))
    s.drag += Math.abs(drag)
  }

  error(e: unknown, fatal = false): void {
    const err = e instanceof Error ? e : new Error(String(e))
    const stack = (err.stack ?? '')
      .split('\n')
      .slice(1, 6)
      .map((l) => l.trim().replace(/https?:\/\/[^\s)]+\//g, '').slice(0, 120))
    this.push('error', err.name, { msg: err.message.slice(0, 200), fatal: fatal ? 1 : undefined, stack })
    if (fatal) this.persist()
  }

  purchase(p: { product: string; status: 'start' | 'done' | 'cancel' | 'fail'; price?: number; currency?: string; store?: string; trial?: boolean }): void {
    this.touch()
    this.push('purchase', p.product, { product: p.product, status: p.status, price: p.price, currency: p.currency, store: p.store, trial: p.trial ? 1 : undefined })
  }

  // Wireframes are recorded once per screen per sampled session.
  wantsSnapshot(screen: string): boolean {
    return this.sampled && this.consent === 'granted' && !this.snapped.has(screen)
  }

  snapshot(w: Omit<Wireframe, 'sessionId' | 'ts'>): void {
    if (!this.wantsSnapshot(w.screen)) return
    this.snapped.add(w.screen)
    this.snaps.push({ ...w, sessionId: this.sessionId, ts: this.now() })
    this.push('snapshot', w.screen, { n: w.nodes.length })
  }

  foreground(): void {
    this.touch()
    this.push('open')
    if (this.screen) {
      this.screenAt = this.now()
      this.push('screen', this.screen, { resume: 1 })
    }
    this.active = true
    this.schedule()
  }

  background(): void {
    this.leave()
    this.push('close')
    this.active = false
    this.persist()
    this.flush()
  }

  setConsent(c: Consent): void {
    this.consent = c
    this.st?.set(K.consent, c).catch(() => {})
    if (c === 'denied') {
      this.queue = []
      this.snaps = []
      this.persist()
    } else if (c === 'granted') this.flush()
  }

  optOut(): void {
    this.setConsent('denied')
  }

  optIn(): void {
    this.setConsent('granted')
  }

  // Sign-out: a new anonymous id and session, nothing of the old user kept.
  async reset(): Promise<void> {
    await this.flush()
    this.userId = null
    this.anon = 'anon_' + uid()
    this.sessionId = ''
    this.firstSeen = this.now()
    await this.st?.set(K.anon, this.anon).catch(() => {})
    this.touch()
  }

  flush(): Promise<void> {
    if (this.inflight) return this.inflight.then(() => (this.queue.length && !this.backoff ? this.flush() : undefined))
    this.inflight = this.send().finally(() => (this.inflight = null))
    return this.inflight
  }

  private async send(): Promise<void> {
    await this.ready
    if (this.sending || this.consent !== 'granted' || (!this.queue.length && !this.snaps.length)) return
    this.sending = true
    const events = this.queue.slice(0, BATCH)
    const snaps = this.snaps.splice(0, 4)
    const f = this.cfg.fetch ?? fetch
    const headers = { 'content-type': 'application/json', 'x-shotik-key': this.cfg.appKey }
    try {
      if (events.length) {
        const body = JSON.stringify(pack({ anonymousId: this.anon, userId: this.userId, firstSeen: this.firstSeen, device: this.cfg.device?.(), events }))
        const r = await f(this.cfg.serverUrl + '/analytics/v1/events', { method: 'POST', headers, body })
        if (!r.ok && r.status < 500 && r.status !== 429) {
          if (this.cfg.debug) console.warn('[shotik] dropped batch', r.status)
        } else if (!r.ok) throw new Error(String(r.status))
        this.queue.splice(0, events.length)
      }
      for (const s of snaps) await f(this.cfg.serverUrl + '/analytics/v1/snapshots', { method: 'POST', headers, body: JSON.stringify({ anonymousId: this.anon, ...s }) })
      this.backoff = 0
      this.persist()
    } catch {
      this.snaps.unshift(...snaps)
      this.backoff = Math.min(this.backoff + 1, 5)
    } finally {
      this.sending = false
    }
    if (this.queue.length >= BATCH && !this.backoff) return this.send()
  }

  stop(): void {
    this.active = false
    if (this.timer) clearTimeout(this.timer)
    if (this.saveTimer) clearTimeout(this.saveTimer)
    this.persist()
  }

  get ids(): { anonymousId: string; sessionId: string; userId: string | null } {
    return { anonymousId: this.anon, sessionId: this.sessionId, userId: this.userId }
  }

  get pending(): number {
    return this.queue.length
  }

  whenReady(): Promise<void> {
    return this.ready
  }
}
