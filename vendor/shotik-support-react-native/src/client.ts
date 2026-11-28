// Shotik Support client: the platform-free core of the SDK. Identify (anonymous id persisted, merged on sign-in),
// conversations and messages over HTTP, live replies over the /support/v1/stream WebSocket with reconnect and backoff,
// an offline send queue with optimistic messages, and a pull for anything missed. No React Native imports, so it runs
// (and is tested) under plain Node as well as in the app.

export type Author = 'user' | 'ai' | 'founder' | 'system'
export type ConversationStatus = 'open' | 'needs_human' | 'resolved' | 'closed' | string
export type Status = 'idle' | 'identifying' | 'connecting' | 'live' | 'offline' | 'error'

export interface Conversation {
  id: string
  status: ConversationStatus
  subject: string | null
  lastMessageAt: number
  lastPreview: string | null
  lastAuthor: Author | null
  createdAt: number
}

export interface Message {
  id: string
  conversationId: string
  author: Author
  body: string
  createdAt: number
  meta?: Record<string, unknown> | null
  localId?: string
  pending?: 'sending' | 'failed'
}

export interface UserInfo {
  userId?: string
  name?: string
  email?: string
  attributes?: Record<string, unknown>
}

export interface DeviceInfo {
  platform?: string
  osVersion?: string
  model?: string
  appVersion?: string
  build?: string
  locale?: string
  timezone?: string
}

export interface KeyValueStorage {
  get(key: string): Promise<string | null>
  set(key: string, value: string): Promise<void>
  remove(key: string): Promise<void>
}

export interface SupportConfig {
  appKey: string
  serverUrl: string
  storage?: KeyValueStorage
  device?: () => DeviceInfo | Promise<DeviceInfo>
}

export interface SupportState {
  status: Status
  userId: string | null
  conversations: Conversation[]
  messages: Record<string, Message[]>
  unread: number
  unreadBy: Record<string, number>
  open: boolean
  activeConversationId: string | null
  error: string | null
}

interface QueueItem {
  localId: string
  conversationId: string
  body: string
  createdAt: number
  attempts: number
}

interface Session {
  userToken: string
  userId: string
  externalId: string | null
}

export class HttpError extends Error {
  status: number
  constructor(status: number, message: string) {
    super(message)
    this.status = status
  }
}

const K = { anon: 'shotik.support.anon', session: 'shotik.support.session', queue: 'shotik.support.queue', read: 'shotik.support.read', push: 'shotik.support.push' }
const LOCAL_CONV = 'local_conv_'
const AUTO_RETRIES = 3

export function memoryStorage(): KeyValueStorage {
  const m = new Map<string, string>()
  return {
    get: async (k) => m.get(k) ?? null,
    set: async (k, v) => void m.set(k, v),
    remove: async (k) => void m.delete(k)
  }
}

function localId(prefix: string): string {
  return prefix + Date.now().toString(36) + Math.random().toString(36).slice(2, 10)
}

export class SupportClient {
  readonly config: SupportConfig
  private storage: KeyValueStorage
  private listeners = new Set<(s: SupportState) => void>()
  private state: SupportState = { status: 'idle', userId: null, conversations: [], messages: {}, unread: 0, unreadBy: {}, open: false, activeConversationId: null, error: null }
  private session: Session | null = null
  private anonId: string | null = null
  private user: UserInfo = {}
  private queue: QueueItem[] = []
  private readAt: Record<string, number> = {}
  private pushToken: { token: string; platform: string } | null = null
  private ws: WebSocket | null = null
  private backoffStep = 0
  private reconnectTimer: ReturnType<typeof setTimeout> | null = null
  private flushTimer: ReturnType<typeof setTimeout> | null = null
  private ping: ReturnType<typeof setInterval> | null = null
  private flushing: Promise<void> | null = null
  private identifying: Promise<void> | null = null
  private loaded: Promise<void> | null = null
  private full = new Set<string>()
  private stopped = false

  constructor(config: SupportConfig) {
    this.config = { ...config, serverUrl: config.serverUrl.replace(/\/+$/, '') }
    this.storage = config.storage ?? memoryStorage()
  }

  getState = (): SupportState => this.state

  subscribe = (fn: (s: SupportState) => void): (() => void) => {
    this.listeners.add(fn)
    return () => void this.listeners.delete(fn)
  }

  private set(p: Partial<SupportState>): void {
    const next = { ...this.state, ...p }
    next.unreadBy = this.countUnread(next)
    next.unread = Object.values(next.unreadBy).reduce((a, b) => a + b, 0)
    this.state = next
    for (const fn of this.listeners) fn(next)
  }

  private countUnread(s: SupportState): Record<string, number> {
    const out: Record<string, number> = {}
    for (const c of s.conversations) {
      const seen = this.readAt[c.id] ?? 0
      const msgs = s.messages[c.id]
      const n = msgs ? msgs.filter((m) => m.author !== 'user' && m.createdAt > seen).length : c.lastAuthor && c.lastAuthor !== 'user' && c.lastMessageAt > seen ? 1 : 0
      if (n) out[c.id] = n
    }
    return out
  }

  private load(): Promise<void> {
    this.loaded ??= (async () => {
      const [anon, session, queue, read, push] = await Promise.all([K.anon, K.session, K.queue, K.read, K.push].map((k) => this.storage.get(k).catch(() => null)))
      this.anonId = anon ?? localId('anon_')
      if (!anon) await this.storage.set(K.anon, this.anonId)
      this.session = session ? (JSON.parse(session) as Session) : null
      this.queue = queue ? (JSON.parse(queue) as QueueItem[]) : []
      this.readAt = read ? (JSON.parse(read) as Record<string, number>) : {}
      this.pushToken = push ? (JSON.parse(push) as { token: string; platform: string }) : null
      if (this.queue.length) {
        const messages = { ...this.state.messages }
        for (const q of this.queue) messages[q.conversationId] = [...(messages[q.conversationId] ?? []), this.optimistic(q, 'sending')]
        this.set({ messages, conversations: this.withLocalConversations(this.state.conversations, messages) })
      }
    })()
    return this.loaded
  }

  private persist(key: string, value: unknown): void {
    this.storage.set(key, JSON.stringify(value)).catch(() => {})
  }

  async request<T>(method: 'GET' | 'POST', path: string, body?: unknown): Promise<T> {
    const headers: Record<string, string> = { 'content-type': 'application/json', 'x-shotik-key': this.config.appKey }
    if (this.session) headers['x-shotik-user'] = this.session.userToken
    const res = await fetch(this.config.serverUrl + path, { method, headers, body: body === undefined ? undefined : JSON.stringify(body) })
    const json = (await res.json().catch(() => ({}))) as T & { error?: string }
    if (!res.ok) throw new HttpError(res.status, json.error ?? 'HTTP ' + res.status)
    return json
  }

  // Identify the app user. Without a userId the persisted anonymous id is used; with one, the anonymous user's
  // conversations move to the signed-in user on the server.
  identify(user: UserInfo = {}): Promise<void> {
    this.user = { ...this.user, ...user }
    const run = async () => {
      await this.load()
      this.set({ status: this.state.status === 'live' ? 'live' : 'identifying', error: null })
      const device = await Promise.resolve(this.config.device?.()).catch(() => undefined)
      const r = await this.request<{ user: { id: string }; userToken: string; conversations: Conversation[] }>('POST', '/support/v1/identify', {
        anonymousId: this.anonId,
        userId: this.user.userId,
        name: this.user.name,
        email: this.user.email,
        attributes: this.user.attributes,
        device: device ?? undefined,
        appVersion: device?.appVersion ? device.appVersion + (device.build ? ' (' + device.build + ')' : '') : undefined,
        locale: device?.locale
      })
      const changed = this.session?.userId !== r.user.id
      this.session = { userToken: r.userToken, userId: r.user.id, externalId: this.user.userId ?? null }
      this.persist(K.session, this.session)
      this.set({ userId: r.user.id, conversations: this.withLocalConversations(r.conversations) })
      if (this.pushToken) await this.sendPushToken().catch(() => {})
      if (changed || !this.ws) this.connect(true)
      this.scheduleFlush(0)
    }
    const p = (this.identifying ?? Promise.resolve()).then(run, run)
    this.identifying = p.catch((e: Error) => {
      if (e instanceof HttpError && e.status === 401) return this.set({ status: 'error', error: e.message })
      this.set({ status: 'offline', error: e.message })
      this.scheduleReconnect()
    })
    return p
  }

  // Identify anonymously unless the app already did.
  ensureIdentified(): Promise<void> {
    return this.identifying ? this.identifying : this.identify()
  }

  async setPushToken(token: string | null, platform = 'ios'): Promise<void> {
    await this.load()
    this.pushToken = token ? { token, platform } : null
    this.persist(K.push, this.pushToken)
    if (this.session) await this.sendPushToken()
  }

  private sendPushToken(): Promise<unknown> {
    return this.request('POST', '/support/v1/push-token', this.pushToken ?? { token: null })
  }

  open(conversationId?: string | null): void {
    this.set({ open: true, activeConversationId: conversationId === undefined ? this.state.activeConversationId : conversationId })
    if (conversationId) this.select(conversationId)
  }

  close(): void {
    this.set({ open: false })
  }

  // Show one thread (or the list with null), load its messages and mark it read.
  select(conversationId: string | null): void {
    this.set({ activeConversationId: conversationId })
    if (!conversationId) return
    this.markRead(conversationId)
    if (!conversationId.startsWith(LOCAL_CONV)) this.loadMessages(conversationId).catch(() => {})
  }

  markRead(conversationId: string): void {
    const msgs = this.state.messages[conversationId] ?? []
    const conv = this.state.conversations.find((c) => c.id === conversationId)
    this.readAt[conversationId] = Math.max(conv?.lastMessageAt ?? 0, ...msgs.filter((m) => !m.pending).map((m) => m.createdAt))
    this.persist(K.read, this.readAt)
    this.set({})
    if (!conversationId.startsWith(LOCAL_CONV) && this.state.userId) this.request('POST', '/support/v1/conversations/' + conversationId + '/read', {}).catch(() => {})
  }

  async loadMessages(conversationId: string): Promise<Message[]> {
    const have = (this.state.messages[conversationId] ?? []).filter((m) => !m.pending)
    const after = this.full.has(conversationId) && have.length ? have[have.length - 1].createdAt - 1 : 0
    const r = await this.request<{ messages: Message[] }>('GET', '/support/v1/conversations/' + conversationId + '/messages?after=' + after)
    this.full.add(conversationId)
    this.mergeMessages(conversationId, r.messages)
    if (this.state.open && this.state.activeConversationId === conversationId) this.markRead(conversationId)
    return this.state.messages[conversationId] ?? []
  }

  // Send a message. Without a conversation id (or with a local one) a new conversation is started. The message shows
  // at once; the queue delivers it now or once the server is reachable again.
  send(body: string, conversationId?: string | null): Message | null {
    const text = body.trim()
    if (!text) return null
    const convId = conversationId || this.state.activeConversationId || LOCAL_CONV + localId('')
    const item: QueueItem = { localId: localId('local_'), conversationId: convId, body: text, createdAt: Date.now(), attempts: 0 }
    this.queue.push(item)
    this.persist(K.queue, this.queue)
    const msg = this.optimistic(item, 'sending')
    const messages = { ...this.state.messages, [convId]: [...(this.state.messages[convId] ?? []), msg] }
    this.set({
      messages,
      conversations: this.withLocalConversations(this.state.conversations, messages),
      activeConversationId: this.state.open ? convId : this.state.activeConversationId
    })
    this.scheduleFlush(0)
    return msg
  }

  // Retry a failed message now.
  retry(localMessageId: string): void {
    let item = this.queue.find((q) => q.localId === localMessageId)
    if (!item) {
      const m = Object.values(this.state.messages).flat().find((x) => x.localId === localMessageId && x.pending === 'failed')
      if (!m) return
      item = { localId: localMessageId, conversationId: m.conversationId, body: m.body, createdAt: m.createdAt, attempts: 0 }
      this.queue.push(item)
      this.persist(K.queue, this.queue)
    }
    item.attempts = 0
    this.markPending(item, 'sending')
    this.scheduleFlush(0)
  }

  get pendingCount(): number {
    return this.queue.length
  }

  // Deliver queued messages in order. Network errors and 5xx keep them queued with backoff; a 4xx fails the message.
  flush(): Promise<void> {
    this.flushing ??= (async () => {
      try {
        await this.load()
        if (!this.session) return
        while (this.queue.length && !this.stopped) {
          const item = this.queue[0]
          try {
            await this.deliver(item)
            this.queue.shift()
            this.persist(K.queue, this.queue)
          } catch (e) {
            const status = e instanceof HttpError ? e.status : 0
            if (status === 401) {
              this.session = null
              this.identify().catch(() => {})
              return
            }
            if (status >= 400 && status < 500) {
              this.queue.shift()
              this.persist(K.queue, this.queue)
              this.markPending(item, 'failed')
              continue
            }
            item.attempts++
            this.persist(K.queue, this.queue)
            if (item.attempts >= AUTO_RETRIES) this.markPending(item, 'failed')
            this.set({ status: this.ws ? this.state.status : 'offline', error: (e as Error).message })
            this.scheduleFlush(Math.min(30_000, 500 * 2 ** item.attempts))
            return
          }
        }
      } finally {
        this.flushing = null
      }
    })()
    return this.flushing
  }

  private scheduleFlush(ms: number): void {
    if (this.flushTimer) clearTimeout(this.flushTimer)
    this.flushTimer = setTimeout(() => {
      this.flushTimer = null
      this.flush().catch(() => {})
    }, ms)
  }

  private async deliver(item: QueueItem): Promise<void> {
    const meta = { localId: item.localId }
    if (item.conversationId.startsWith(LOCAL_CONV)) {
      const r = await this.request<{ conversation: Conversation; message: Message }>('POST', '/support/v1/conversations', { body: item.body, meta })
      this.remapConversation(item.conversationId, r.conversation)
      this.mergeMessages(r.conversation.id, [r.message])
      return
    }
    const r = await this.request<{ message: Message }>('POST', '/support/v1/conversations/' + item.conversationId + '/messages', { body: item.body, meta })
    this.mergeMessages(item.conversationId, [r.message])
  }

  private remapConversation(from: string, conv: Conversation): void {
    for (const q of this.queue) if (q.conversationId === from) q.conversationId = conv.id
    this.persist(K.queue, this.queue)
    const messages = { ...this.state.messages }
    messages[conv.id] = (messages[from] ?? []).map((m) => ({ ...m, conversationId: conv.id }))
    delete messages[from]
    this.full.add(conv.id)
    this.readAt[conv.id] = conv.lastMessageAt
    const conversations = this.state.conversations.filter((c) => c.id !== from && c.id !== conv.id)
    this.set({ messages, conversations: this.sortConvs([conv, ...conversations]), activeConversationId: this.state.activeConversationId === from ? conv.id : this.state.activeConversationId })
  }

  private optimistic(q: QueueItem, pending: 'sending' | 'failed'): Message {
    return { id: q.localId, localId: q.localId, conversationId: q.conversationId, author: 'user', body: q.body, createdAt: q.createdAt, pending }
  }

  private markPending(item: QueueItem, pending: 'sending' | 'failed'): void {
    const list = this.state.messages[item.conversationId] ?? []
    this.set({ messages: { ...this.state.messages, [item.conversationId]: list.map((m) => (m.localId === item.localId ? { ...m, pending } : m)) } })
  }

  private withLocalConversations(server: Conversation[], messages = this.state.messages): Conversation[] {
    const local = Object.keys(messages)
      .filter((id) => id.startsWith(LOCAL_CONV) && !server.some((c) => c.id === id))
      .map((id): Conversation => {
        const msgs = messages[id]
        const last = msgs[msgs.length - 1]
        return { id, status: 'open', subject: msgs[0]?.body.slice(0, 80) ?? null, lastMessageAt: last?.createdAt ?? Date.now(), lastPreview: last?.body ?? null, lastAuthor: 'user', createdAt: msgs[0]?.createdAt ?? Date.now() }
      })
    return this.sortConvs([...local, ...server])
  }

  private sortConvs(list: Conversation[]): Conversation[] {
    return [...list].sort((a, b) => b.lastMessageAt - a.lastMessageAt)
  }

  private mergeMessages(conversationId: string, incoming: Message[]): void {
    if (!incoming.length) return
    const list = [...(this.state.messages[conversationId] ?? [])]
    for (const m of incoming) {
      const lid = typeof m.meta?.['localId'] === 'string' ? (m.meta['localId'] as string) : null
      const at = list.findIndex((x) => x.id === m.id || (lid !== null && x.localId === lid))
      const msg: Message = { ...m, ...(lid ? { localId: lid } : {}) }
      if (at >= 0) list[at] = msg
      else list.push(msg)
    }
    list.sort((a, b) => a.createdAt - b.createdAt)
    this.set({ messages: { ...this.state.messages, [conversationId]: list } })
  }

  private upsertConversation(conv: Conversation): void {
    this.set({ conversations: this.sortConvs([conv, ...this.state.conversations.filter((c) => c.id !== conv.id)]) })
  }

  // Catch up after a reconnect or when the app comes to the foreground.
  async pull(): Promise<void> {
    if (!this.session) return
    const r = await this.request<{ conversations: Conversation[] }>('GET', '/support/v1/conversations')
    this.set({ conversations: this.withLocalConversations(r.conversations) })
    const ids = new Set(Object.keys(this.state.messages).filter((id) => !id.startsWith(LOCAL_CONV)))
    if (this.state.activeConversationId && !this.state.activeConversationId.startsWith(LOCAL_CONV)) ids.add(this.state.activeConversationId)
    await Promise.all([...ids].map((id) => this.loadMessages(id).catch(() => [])))
  }

  // App came back to the foreground: reconnect now, deliver the queue and fetch what was missed.
  foreground(): void {
    if (this.stopped || !this.session) {
      if (!this.stopped && this.state.status !== 'identifying') this.identify().catch(() => {})
      return
    }
    if (!this.ws) this.connect(true)
    else this.pull().catch(() => {})
    this.scheduleFlush(0)
  }

  private connect(resetBackoff = false): void {
    if (this.stopped || !this.session) return
    if (resetBackoff) this.backoffStep = 0
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer)
    this.reconnectTimer = null
    const old = this.ws
    this.ws = null
    old?.close()
    const url = this.config.serverUrl.replace(/^http/, 'ws') + '/support/v1/stream?key=' + encodeURIComponent(this.config.appKey) + '&user=' + encodeURIComponent(this.session.userToken)
    let ws: WebSocket
    try {
      ws = new WebSocket(url)
    } catch (e) {
      this.set({ status: 'offline', error: (e as Error).message })
      return this.scheduleReconnect()
    }
    this.ws = ws
    if (this.state.status !== 'live') this.set({ status: 'connecting' })
    ws.onmessage = (ev) => {
      if (this.ws !== ws || ev.data === 'pong') return
      let m: { t: string; message?: Message; conversation?: Conversation }
      try {
        m = JSON.parse(String(ev.data))
      } catch {
        return
      }
      if (m.t === 'ready') {
        this.backoffStep = 0
        this.set({ status: 'live', error: null })
        if (this.ping) clearInterval(this.ping)
        this.ping = setInterval(() => ws.readyState === 1 && ws.send('ping'), 25_000)
        this.pull().catch(() => {})
        this.scheduleFlush(0)
      } else if (m.t === 'message' && m.message) {
        this.mergeMessages(m.message.conversationId, [m.message])
        const conv = this.state.conversations.find((c) => c.id === m.message!.conversationId)
        if (conv) this.upsertConversation({ ...conv, lastMessageAt: Math.max(conv.lastMessageAt, m.message.createdAt), lastPreview: m.message.body.slice(0, 140), lastAuthor: m.message.author })
        if (this.state.open && this.state.activeConversationId === m.message.conversationId) this.markRead(m.message.conversationId)
      } else if (m.t === 'conversation' && m.conversation) {
        this.upsertConversation(m.conversation)
      }
    }
    ws.onclose = (ev) => {
      if (this.ws !== ws) return
      this.ws = null
      if (this.ping) clearInterval(this.ping)
      this.ping = null
      if (this.stopped) return
      if (ev.code === 4003) {
        this.session = null
        this.set({ status: 'error', error: 'unauthorized' })
        return void this.identify().catch(() => {})
      }
      this.set({ status: 'offline' })
      this.scheduleReconnect()
    }
    ws.onerror = () => {
      if (this.ws === ws) this.set({ error: 'cannot reach ' + this.config.serverUrl })
    }
  }

  private scheduleReconnect(): void {
    if (this.stopped || this.reconnectTimer) return
    const delay = Math.min(30_000, 500 * 2 ** this.backoffStep++) * (0.8 + Math.random() * 0.4)
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null
      if (this.session) this.connect()
      else this.identify().catch(() => {})
    }, delay)
  }

  get reconnectAttempts(): number {
    return this.backoffStep
  }

  // Drop the live socket without stopping (tests, and the app going to the background).
  disconnect(): void {
    const ws = this.ws
    this.ws = null
    if (this.ping) clearInterval(this.ping)
    this.ping = null
    ws?.close()
    if (!this.stopped) this.set({ status: 'offline' })
  }

  stop(): void {
    this.stopped = true
    for (const t of [this.reconnectTimer, this.flushTimer]) if (t) clearTimeout(t)
    this.reconnectTimer = this.flushTimer = null
    this.disconnect()
    this.set({ status: 'idle' })
  }

  // Sign-out: forget the identified user and start over as a new anonymous user.
  async reset(): Promise<void> {
    await this.load()
    this.disconnect()
    this.session = null
    this.user = {}
    this.queue = []
    this.readAt = {}
    this.full.clear()
    this.anonId = localId('anon_')
    await Promise.all([this.storage.set(K.anon, this.anonId), this.storage.remove(K.session), this.storage.remove(K.queue), this.storage.remove(K.read)])
    this.set({ userId: null, conversations: [], messages: {}, activeConversationId: null, status: 'idle', error: null })
  }
}
