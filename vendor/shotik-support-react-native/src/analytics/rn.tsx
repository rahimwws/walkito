// React Native glue for Shotik analytics: automatic capture with no native code. Taps come from one capture-phase
// touch listener on a root View (element identity from the React fiber of the touched view), screens from React
// Navigation / Expo Router state, app open and close from AppState, crashes from the global error handler, stalls
// from a 500 ms timer's drift, purchases from RevenueCat, and wireframes from the host tree's DOM API.
// Every handler is O(depth) and allocation-light; uploads happen off the touch path.

import { Component, createElement, useEffect } from 'react'
import type { ReactNode } from 'react'
import { AppState, Dimensions, Linking, Platform, StyleSheet, View } from 'react-native'
import type { AppStateStatus, GestureResponderEvent } from 'react-native'
import { Analytics } from './core'
import type { AnalyticsConfig, Consent, Storage } from './core'
import type { DeviceContext, WireNode } from './wire'

type Fiber = {
  type: unknown
  tag: number
  memoizedProps: Record<string, unknown> | string | null
  return: Fiber | null
  child: Fiber | null
  sibling: Fiber | null
  index: number
  stateNode: unknown
}

let client: Analytics | null = null
const off: (() => void)[] = []

const opt = <T,>(load: () => T): T | null => {
  try {
    return load()
  } catch {
    return null
  }
}

// Optional native modules: Metro only treats a require() as optional when it sits directly inside a try block.
function storage(): Storage | undefined {
  let a = null
  try {
    const m = require('@react-native-async-storage/async-storage')
    a = m?.default ?? m
  } catch {}
  if (a?.getItem) return { get: (k) => a.getItem(k), set: (k, v) => a.setItem(k, v), remove: (k) => a.removeItem(k) }
  let s = null
  try {
    s = require('expo-secure-store')
  } catch {}
  if (s?.getItemAsync) return { get: (k) => s.getItemAsync(k), set: (k, v) => s.setItemAsync(k, v), remove: (k) => s.deleteItemAsync(k) }
  return undefined
}

function device(): DeviceContext {
  let d = null
  let a = null
  try {
    d = require('expo-device')
  } catch {}
  try {
    a = require('expo-application')
  } catch {}
  const o = Intl.DateTimeFormat().resolvedOptions()
  const { width, height } = Dimensions.get('window')
  return { platform: Platform.OS, os: d?.osVersion ?? String(Platform.Version), model: d?.modelName ?? undefined, app: a?.nativeApplicationVersion ?? undefined, build: a?.nativeBuildVersion ?? undefined, locale: o.locale, tz: o.timeZone, w: Math.round(width), h: Math.round(height) }
}

// Fiber helpers

const nameOf = (t: unknown): string | null => {
  if (!t || typeof t === 'string') return null
  const o = t as { displayName?: string; name?: string; render?: { displayName?: string; name?: string }; type?: unknown }
  return o.displayName || o.name || o.render?.displayName || o.render?.name || (o.type ? nameOf(o.type) : null)
}
const GENERIC = /^(View|Text|Image|Animated.*|AnimatedComponent.*|Pressable|Touchable.*|TouchableOpacity|Fragment|Memo|ForwardRef|Unknown|ScrollView|SafeAreaView|.{0,2}|.*Provider|.*Context|Screen.*|Navigation.*|Stack.*|Route.*|ShotikMask|ShotikAnalyticsRoot)$/
const PRESS = /Button|Touchable|Pressable|Link|Gesture|Swipeable/
const INPUT = /TextInput/
const handles = (p: Record<string, unknown>) => !!(p.onPress || p.onPressIn || p.onLongPress || p.onClick || p.onResponderRelease || p.onValueChange || p.accessibilityRole === 'button' || p.role === 'button' || p.accessibilityRole === 'link')

function textUnder(f: Fiber | null, max = 40): string {
  const out: string[] = []
  let n = 0
  const walk = (x: Fiber | null) => {
    while (x && n++ < 60 && out.join(' ').length < max) {
      if (x.tag === 6 && typeof x.memoizedProps === 'string') out.push(x.memoizedProps)
      else if (typeof x.memoizedProps === 'object' && x.memoizedProps && typeof (x.memoizedProps as { children?: unknown }).children === 'string' && x.type === 'RCTText') out.push((x.memoizedProps as { children: string }).children)
      walk(x.child)
      x = x.sibling
    }
  }
  walk(f?.child ?? null)
  return out.join(' ').replace(/\s+/g, ' ').trim().slice(0, max)
}

const hash = (s: string) => {
  let h = 0x811c9dc5
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 0x01000193)
  return (h >>> 0).toString(36)
}

const scrub = (s: string) => s.replace(/[^\s@]+@[^\s@]+/g, '[email]').replace(/\d/g, '#')

// id: testID, else nativeID, else a hash of the fiber index path from the pressable up (list rows collapse to one id).
// It ignores labels and component names, so it survives locale switches and minified release builds.
export function describeTarget(target: Fiber | null): { el: string; id: string; label?: string; dead: boolean; input: boolean; scroll: Fiber | null } {
  let f = target
  let handler: Fiber | null = null
  let tid: string | undefined
  let a11y: string | undefined
  let nid: string | undefined
  let path: (number | string)[] = []
  let masked = false
  let input = false
  let scroll: Fiber | null = null
  const names: string[] = []
  for (let d = 0; f && d < 80; d++, f = f.return) {
    const p = (typeof f.memoizedProps === 'object' && f.memoizedProps) || {}
    const name = nameOf(f.type)
    if (f.type === ShotikMask || p.shotikMask) masked = true
    if ((name && INPUT.test(name)) || (typeof f.type === 'string' && /TextInput/.test(f.type))) input = true
    if (!scroll && (f.stateNode as { _scrollMetrics?: unknown } | null)?._scrollMetrics) scroll = f
    if (!handler && (handles(p) || (name && PRESS.test(name)))) (handler = f), (path = [])
    path.push('cellKey' in p && 'item' in p ? '*' : f.index)
    if (!handler || handler === f) {
      if (!tid && typeof p.testID === 'string' && !p.testID.startsWith('shotik-mask')) tid = p.testID
      if (!nid && typeof p.nativeID === 'string' && p.nativeID !== 'shotik-mask') nid = p.nativeID
      if (!a11y && typeof (p.accessibilityLabel ?? p['aria-label']) === 'string') a11y = String(p.accessibilityLabel ?? p['aria-label'])
    }
    if (handler && name && names.length < 2 && !GENERIC.test(name)) names.push(name)
  }
  const raw = masked || input ? '' : a11y || textUnder(handler ?? target)
  const label = raw ? scrub(raw) : undefined
  const el = (names.reverse().join('>') || (handler ? nameOf(handler.type) || 'Pressable' : 'View')) + (tid ? '#' + tid : '')
  return { el: input ? 'TextInput' : el, id: tid ?? nid ?? 'h' + hash(path.join('.')), label, dead: !handler && !input, input, scroll }
}

// Wireframes from the host tree (React Native DOM API, RN 0.82+ new architecture). Unavailable: no snapshot.
type HostEl = { tagName?: string; children?: ArrayLike<HostEl>; getBoundingClientRect?: () => { x: number; y: number; width: number; height: number }; __internalInstanceHandle?: Fiber }
function wireframe(root: HostEl): WireNode[] | null {
  if (!root?.getBoundingClientRect || !root.children) return null
  const out: WireNode[] = []
  const { width: W, height: H } = Dimensions.get('window')
  const visit = (el: HostEl) => {
    if (out.length >= 450) return
    const r = el.getBoundingClientRect?.()
    if (!r || r.width < 2 || r.height < 2 || r.y > H || r.y + r.height < 0 || r.x > W || r.x + r.width < 0) return
    const fib = el.__internalInstanceHandle
    const p = (fib && typeof fib.memoizedProps === 'object' && fib.memoizedProps) || {}
    const st = (StyleSheet.flatten(p.style as never) ?? {}) as Record<string, unknown>
    const tag = el.tagName ?? ''
    const box = (k: string, fill?: unknown, rad?: unknown): WireNode => [k, Math.round(r.x), Math.round(r.y), Math.round(r.width), Math.round(r.height), typeof fill === 'string' ? fill : undefined, typeof rad === 'number' ? rad : undefined]
    if (p.nativeID === 'shotik-mask') return void out.push(box('m'))
    if (/Text$/.test(tag) && !/Input/.test(tag)) return void out.push(box('t', st.color))
    if (/Input/.test(tag)) return void out.push(box('n', st.backgroundColor, st.borderRadius))
    if (/Image/.test(tag)) return void out.push(box('i', undefined, st.borderRadius))
    const kind = handles(p) ? 'b' : /Scroll/.test(tag) ? 's' : 'v'
    if (kind !== 'v' || st.backgroundColor || st.borderWidth) out.push(box(kind, st.backgroundColor ?? st.borderColor, st.borderRadius))
    const kids = el.children
    if (kids) for (let i = 0; i < kids.length; i++) visit(kids[i])
  }
  visit(root)
  return out
}

// Root wrapper: one capture-phase touch listener for the whole app and the wireframe root.

interface RootProps {
  children?: ReactNode
}

export class ShotikAnalyticsRoot extends Component<RootProps> {
  private root: HostEl | null = null
  private start: { x: number; y: number; t: number; dy: number } | null = null
  private snapTimer: ReturnType<typeof setTimeout> | null = null
  private lastScreen: string | undefined
  private unsub: (() => void) | null = null

  componentDidMount(): void {
    this.unsub = onScreen((s) => this.queueSnapshot(s))
  }

  componentWillUnmount(): void {
    this.unsub?.()
    if (this.snapTimer) clearTimeout(this.snapTimer)
  }

  private queueSnapshot(screen: string): void {
    if (!client?.wantsSnapshot(screen)) return
    if (this.snapTimer) clearTimeout(this.snapTimer)
    const idle = (globalThis as { requestIdleCallback?: (f: () => void) => void }).requestIdleCallback ?? ((f: () => void) => setTimeout(f, 0))
    this.snapTimer = setTimeout(() => {
      idle(() => {
        if (!client || client.currentScreen !== screen || !this.root) return
        const nodes = opt(() => wireframe(this.root!))
        if (!nodes?.length) return
        const { width, height } = Dimensions.get('window')
        client.snapshot({ screen, w: Math.round(width), h: Math.round(height), nodes })
      })
    }, 900)
  }

  private onStart = (e: GestureResponderEvent) => {
    const t = e.nativeEvent.touches?.length ?? 1
    if (t > 1) return void (this.start = null)
    this.start = { x: e.nativeEvent.pageX, y: e.nativeEvent.pageY, t: Date.now(), dy: 0 }
  }

  private onEnd = (e: GestureResponderEvent) => {
    const s = this.start
    this.start = null
    if (!client || !s) return
    const { pageX: x, pageY: y } = e.nativeEvent
    const moved = Math.hypot(x - s.x, y - s.y)
    const target = ((e as unknown as { _targetInst?: Fiber })._targetInst ?? (e.target as unknown as HostEl)?.__internalInstanceHandle ?? null) as Fiber | null
    if (moved > 12) {
      const sc = target && describeTarget(target).scroll
      const m = (sc?.stateNode as { _scrollMetrics?: { offset: number; visibleLength: number; contentLength: number } } | undefined)?._scrollMetrics
      client.scroll(m && m.contentLength > 0 ? (m.offset + m.visibleLength) / m.contentLength : null, y - s.y)
      return
    }
    if (Date.now() - s.t > 1500) return
    const d = describeTarget(target)
    const { width, height } = Dimensions.get('window')
    const tap = { el: d.el, id: d.id, label: d.label, x, y, nx: Math.round((x / width) * 1000), ny: Math.round((y / height) * 1000), input: d.input, ts: Date.now() }
    if (!d.dead) return client.tap(tap)
    // Dead-tap candidate: nothing handles presses here. Confirm that the screen didn't change within a second.
    const screen = client.currentScreen
    setTimeout(() => client?.tap({ ...tap, dead: client.currentScreen === screen }), 1000)
  }

  render() {
    return createElement(
      View,
      {
        style: { flex: 1 },
        collapsable: false,
        ref: (r: unknown) => void (this.root = r as HostEl),
        onTouchStartCapture: this.onStart,
        onTouchEndCapture: this.onEnd
      } as never,
      this.props.children
    )
  }
}

// Hides what's inside from tap labels and wireframes (one grey block).
export function ShotikMask({ children, style }: { children?: ReactNode; style?: unknown }) {
  return createElement(View, { nativeID: 'shotik-mask', style: style as never }, children)
}

// Screen listeners (wireframe trigger).
const screenSubs = new Set<(s: string) => void>()
function onScreen(fn: (s: string) => void): () => void {
  screenSubs.add(fn)
  return () => screenSubs.delete(fn)
}

function screen(name: string): void {
  if (!client || name === client.currentScreen) return
  const t0 = Date.now()
  client.screenView(name)
  for (const fn of screenSubs) fn(name)
  requestAnimationFrame(() => requestAnimationFrame(() => client?.screenReady(Date.now() - t0)))
}

// React Navigation state -> a route pattern like "(tabs)/index" or "day/[id]" (route names, never params).
type NavState = { index?: number; routes: { name: string; state?: NavState }[] }
const routePath = (s: NavState | undefined): string => {
  const parts: string[] = []
  while (s?.routes?.length) {
    const r = s.routes[s.index ?? s.routes.length - 1]
    parts.push(r.name)
    s = r.state
  }
  return parts.filter((p) => p !== '__root').join('/')
}

export interface NavigationRefLike {
  addListener(e: 'state', cb: (e: { data?: { state?: NavState } }) => void): () => void
  getRootState?(): NavState | undefined
  isReady?(): boolean
}

function trackNavigation(ref: NavigationRefLike): () => void {
  const now = () => {
    const p = routePath(ref.getRootState?.())
    if (p) screen(p)
  }
  if (ref.isReady?.()) now()
  const un = ref.addListener('state', (e) => {
    const p = routePath(e.data?.state ?? ref.getRootState?.())
    if (p) screen(p)
  })
  off.push(un)
  return un
}

// Expo Router: call once in the root layout.
let expoRouter: { useNavigationContainerRef?: () => NavigationRefLike } | null = null
try {
  expoRouter = require('expo-router')
} catch {}
export function useShotikExpoRouter(): void {
  const ref = expoRouter?.useNavigationContainerRef?.()
  useEffect(() => (ref ? trackNavigation(ref) : undefined), [ref])
}

export function useShotikScreen(name: string): void {
  useEffect(() => screen(name), [name])
}

// RevenueCat (react-native-purchases): wraps the purchase calls once.
type Fn = (...a: unknown[]) => Promise<unknown>
function trackRevenueCat(P: Record<string, unknown>): void {
  for (const m of ['purchasePackage', 'purchaseStoreProduct', 'purchaseProduct', 'purchaseSubscriptionOption']) {
    const orig = P[m] as (Fn & { __shotik?: 1 }) | undefined
    if (typeof orig !== 'function' || orig.__shotik) continue
    const w: Fn & { __shotik?: 1 } = async (...a) => {
      const it = a[0] as { product?: Record<string, unknown>; identifier?: string; price?: number; currencyCode?: string; introPrice?: unknown } | string
      const prod = (typeof it === 'object' && (it.product ?? it)) || {}
      const info = { product: String((prod as { identifier?: string }).identifier ?? it ?? 'unknown'), price: (prod as { price?: number }).price, currency: (prod as { currencyCode?: string }).currencyCode, store: 'revenuecat', trial: !!(prod as { introPrice?: unknown }).introPrice }
      client?.purchase({ ...info, status: 'start' })
      try {
        const r = await orig.apply(P, a)
        client?.purchase({ ...info, status: 'done' })
        return r
      } catch (e) {
        client?.purchase({ ...info, status: (e as { userCancelled?: boolean })?.userCancelled ? 'cancel' : 'fail' })
        throw e
      }
    }
    w.__shotik = 1
    P[m] = w
  }
}

function hookErrors(): void {
  const EU = (globalThis as { ErrorUtils?: { getGlobalHandler(): (e: unknown, f?: boolean) => void; setGlobalHandler(h: (e: unknown, f?: boolean) => void): void } }).ErrorUtils
  if (EU) {
    const prev = EU.getGlobalHandler()
    EU.setGlobalHandler((e, fatal) => {
      client?.error(e, !!fatal)
      prev(e, fatal)
    })
  }
  const H = (globalThis as { HermesInternal?: { enablePromiseRejectionTracker?: (o: unknown) => void } }).HermesInternal
  if (!(globalThis as { __DEV__?: boolean }).__DEV__) H?.enablePromiseRejectionTracker?.({ allRejections: true, onUnhandled: (_: number, r: unknown) => client?.error(r) })
}

function hookAppState(): void {
  let state = AppState.currentState
  const sub = AppState.addEventListener('change', (next: AppStateStatus) => {
    if (next === state) return
    if (next === 'active') {
      client?.foreground()
      stalls(true)
    } else if (state === 'active') {
      stalls(false)
      client?.background()
    }
    state = next
  })
  off.push(() => sub.remove())
}

let stallTimer: ReturnType<typeof setInterval> | null = null
function stalls(on: boolean): void {
  if (stallTimer) clearInterval(stallTimer)
  stallTimer = null
  if (!on) return
  let last = Date.now()
  stallTimer = setInterval(() => {
    const now = Date.now()
    const drift = now - last - 500
    last = now
    if (drift > 300 && drift < 60_000) client?.stall(drift)
  }, 500)
}

export type ShotikAnalyticsConfig = Omit<AnalyticsConfig, 'storage' | 'device'> & { storage?: Storage }

export const ShotikAnalytics = {
  init(cfg: ShotikAnalyticsConfig): Analytics {
    if (client) return client
    client = new Analytics({ ...cfg, storage: cfg.storage ?? storage(), device })
    hookErrors()
    hookAppState()
    // Dev builds only: <scheme>://…?shotik-analytics=new-user starts a fresh install identity (test runs on one device).
    if ((globalThis as { __DEV__?: boolean }).__DEV__) {
      const sub = Linking.addEventListener('url', ({ url }: { url: string }) => {
        if (url.includes('shotik-analytics=new-user')) void client?.reset()
      })
      off.push(() => sub.remove())
    }
    client.foreground()
    stalls(true)
    return client
  },
  get client(): Analytics | null {
    return client
  },
  track: (name: string, props?: Record<string, unknown>) => client?.track(name, props),
  screen,
  identify: (userId: string | null, traits?: Record<string, unknown>) => client?.identify(userId, traits),
  purchase: (p: Parameters<Analytics['purchase']>[0]) => client?.purchase(p),
  setConsent: (c: Consent) => client?.setConsent(c),
  optOut: () => client?.optOut(),
  optIn: () => client?.optIn(),
  reset: () => client?.reset(),
  flush: () => client?.flush(),
  trackNavigation,
  trackRevenueCat,
  stop(): void {
    stalls(false)
    off.splice(0).forEach((f) => f())
    client?.stop()
    client = null
  }
}
