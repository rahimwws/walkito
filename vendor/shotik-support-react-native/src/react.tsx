// React bindings: <ShotikSupportProvider> (state, AppState catch-up, the widget), useSupport() and <SupportWidget/>,
// a compact native chat sheet: conversation list, thread, composer, optimistic send with retry, AI / Founder badges.

import { createContext, useContext, useEffect, useMemo, useState, useSyncExternalStore } from 'react'
import type { ReactNode } from 'react'
import { ActivityIndicator, AppState, FlatList, KeyboardAvoidingView, Modal, Platform, Pressable, StyleSheet, Text, TextInput, View, useColorScheme } from 'react-native'
import type { ComponentType } from 'react'
import { SupportClient } from './client'
import type { Conversation, Message, SupportState, UserInfo } from './client'
import { ShotikSupport } from './support'

const Ctx = createContext<SupportClient | null>(null)

export interface ProviderProps {
  appKey?: string
  serverUrl?: string
  children?: ReactNode
  widget?: boolean
  title?: string
  accentColor?: string
}

export function ShotikSupportProvider({ appKey, serverUrl, children, widget = true, title, accentColor }: ProviderProps) {
  const configured = useMemo(() => (appKey && serverUrl ? ShotikSupport.configure({ appKey, serverUrl }) : ShotikSupport.client), [appKey, serverUrl])
  const [client, setClient] = useState<SupportClient | null>(configured)
  useEffect(() => {
    setClient(configured)
    return ShotikSupport.onConfigure(setClient)
  }, [configured])
  useEffect(() => {
    if (!client) return
    client.ensureIdentified().catch(() => {})
    const sub = AppState.addEventListener('change', (s) => {
      if (s === 'active') client.foreground()
      else if (s === 'background') client.disconnect()
    })
    return () => sub.remove()
  }, [client])
  return (
    <Ctx.Provider value={client}>
      {children}
      {widget && client ? <SupportWidget title={title} accentColor={accentColor} /> : null}
    </Ctx.Provider>
  )
}

const idle: SupportState = { status: 'idle', userId: null, conversations: [], messages: {}, unread: 0, unreadBy: {}, open: false, activeConversationId: null, error: null }
const noop = () => () => {}

export function useSupport() {
  const client = useContext(Ctx) ?? ShotikSupport.client
  const state = useSyncExternalStore(client ? client.subscribe : noop, client ? client.getState : () => idle)
  return useMemo(
    () => ({
      ...state,
      visible: state.open,
      client,
      send: (body: string, conversationId?: string | null) => client?.send(body, conversationId) ?? null,
      retry: (localId: string) => client?.retry(localId),
      open: (conversationId?: string | null) => client?.open(conversationId),
      close: () => client?.close(),
      select: (conversationId: string | null) => client?.select(conversationId),
      identify: (user?: UserInfo) => client?.identify(user) ?? Promise.resolve()
    }),
    [state, client]
  )
}

// A route that opens the widget and steps back, so `<scheme>://support` deep links and push taps land in support.
// Expo Router: `export { SupportRoute as default } from '@shotik/support-react-native'` in app/support.tsx.
export function SupportRoute() {
  useEffect(() => {
    try {
      const { router } = require('expo-router') as { router: { canGoBack(): boolean; back(): void; replace(href: string): void } }
      if (router.canGoBack()) router.back()
      else router.replace('/')
    } catch {}
    setTimeout(() => ShotikSupport.open(), 450)
  }, [])
  return null
}

const palettes = {
  light: { bg: '#FFFFFF', fill: '#F2F2F7', bubble: '#E9E9EB', text: '#000000', sub: '#6E6E73', line: '#E5E5EA', accent: '#007AFF', danger: '#FF3B30', ai: '#5E5CE6', founder: '#34C759' },
  dark: { bg: '#1C1C1E', fill: '#2C2C2E', bubble: '#2C2C2E', text: '#FFFFFF', sub: '#98989F', line: '#38383A', accent: '#0A84FF', danger: '#FF453A', ai: '#7D7AFF', founder: '#30D158' }
}
type Palette = (typeof palettes)['light']

function safeAreaView(): ComponentType<{ style?: object; edges?: string[]; children?: ReactNode }> {
  try {
    const m = require('react-native-safe-area-context')
    if (m?.SafeAreaView) return m.SafeAreaView
  } catch {}
  return (require('react-native') as { SafeAreaView?: ComponentType<{ style?: object; children?: ReactNode }> }).SafeAreaView ?? View
}
const SafeArea = safeAreaView()

const time = (at: number) => {
  const d = new Date(at)
  const today = new Date().toDateString() === d.toDateString()
  return today ? d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : d.toLocaleDateString([], { month: 'short', day: 'numeric' })
}

export interface WidgetProps {
  title?: string
  accentColor?: string
}

export function SupportWidget({ title = 'Support', accentColor }: WidgetProps) {
  const s = useSupport()
  const scheme = useColorScheme() === 'dark' ? 'dark' : 'light'
  const c: Palette = { ...palettes[scheme], ...(accentColor ? { accent: accentColor } : {}) }
  const [composing, setComposing] = useState(false)
  const active = s.activeConversationId ? s.conversations.find((x) => x.id === s.activeConversationId) ?? null : null
  const inThread = !!s.activeConversationId || composing || s.conversations.length === 0
  const statusLine =
    s.status === 'offline' || s.status === 'error'
      ? 'Offline · messages send when you are back'
      : active?.status === 'needs_human'
        ? 'A human will reply'
        : 'Usually replies in minutes'
  const back = () => {
    setComposing(false)
    s.select(null)
  }
  return (
    <Modal visible={s.visible} animationType="slide" presentationStyle="pageSheet" onRequestClose={s.close}>
      <SafeArea style={[st.fill, { backgroundColor: c.bg }]} edges={['bottom']}>
        <View style={[st.header, { borderBottomColor: c.line }]}>
          <View style={st.side}>
            {inThread && s.conversations.length > 0 ? (
              <Pressable onPress={back} hitSlop={12} accessibilityRole="button" accessibilityLabel="Back">
                <Text style={[st.link, { color: c.accent }]}>‹ All</Text>
              </Pressable>
            ) : null}
          </View>
          <View style={st.center}>
            <Text style={[st.title, { color: c.text }]} numberOfLines={1}>{title}</Text>
            <View style={st.statusRow}>
              <View style={[st.dot, { backgroundColor: s.status === 'live' ? c.founder : s.status === 'offline' || s.status === 'error' ? c.danger : c.sub }]} />
              <Text style={[st.status, { color: c.sub }]} numberOfLines={1}>{statusLine}</Text>
            </View>
          </View>
          <View style={[st.side, st.right]}>
            <Pressable onPress={s.close} hitSlop={12} accessibilityRole="button" accessibilityLabel="Close support">
              <Text style={[st.link, st.bold, { color: c.accent }]}>Done</Text>
            </Pressable>
          </View>
        </View>
        {inThread ? (
          <Thread c={c} conversation={active} messages={s.activeConversationId ? s.messages[s.activeConversationId] ?? [] : []} onRetry={s.retry} onSend={(b) => {
            s.send(b, s.activeConversationId)
            setComposing(false)
          }} />
        ) : (
          <List c={c} conversations={s.conversations} unreadBy={s.unreadBy} onPick={(id) => s.select(id)} onNew={() => setComposing(true)} />
        )}
      </SafeArea>
    </Modal>
  )
}

function List({ c, conversations, unreadBy, onPick, onNew }: { c: Palette; conversations: Conversation[]; unreadBy: Record<string, number>; onPick: (id: string) => void; onNew: () => void }) {
  return (
    <View style={st.fill}>
      <FlatList
        data={conversations}
        keyExtractor={(x) => x.id}
        ItemSeparatorComponent={() => <View style={[st.sep, { backgroundColor: c.line }]} />}
        renderItem={({ item }) => {
          const unread = !!unreadBy[item.id]
          return (
            <Pressable onPress={() => onPick(item.id)} style={({ pressed }) => [st.row, pressed && { backgroundColor: c.fill }]}>
              <View style={[st.unread, { backgroundColor: unread ? c.accent : 'transparent' }]} />
              <View style={st.fill}>
                <View style={st.rowTop}>
                  <Text style={[st.rowTitle, { color: c.text }]} numberOfLines={1}>{item.subject ?? 'Conversation'}</Text>
                  <Text style={[st.meta, { color: c.sub }]}>{time(item.lastMessageAt)}</Text>
                </View>
                <View style={st.rowTop}>
                  <Text style={[st.preview, { color: c.sub }]} numberOfLines={1}>
                    {item.lastAuthor === 'user' ? 'You: ' : ''}{item.lastPreview ?? ''}
                  </Text>
                  {item.status === 'needs_human' ? <Badge c={c} label="Human" color={c.founder} /> : null}
                </View>
              </View>
            </Pressable>
          )
        }}
      />
      <Pressable onPress={onNew} style={({ pressed }) => [st.newBtn, { backgroundColor: c.accent, opacity: pressed ? 0.8 : 1 }]} accessibilityRole="button">
        <Text style={st.newText}>New message</Text>
      </Pressable>
    </View>
  )
}

function Badge({ c, label, color }: { c: Palette; label: string; color: string }) {
  return (
    <View style={[st.badge, { borderColor: color }]}>
      <Text style={[st.badgeText, { color }]}>{label}</Text>
    </View>
  )
}

function Thread({ c, conversation, messages, onSend, onRetry }: { c: Palette; conversation: Conversation | null; messages: Message[]; onSend: (b: string) => void; onRetry: (id: string) => void }) {
  const [text, setText] = useState('')
  const data = useMemo(() => [...messages].reverse(), [messages])
  const submit = () => {
    if (!text.trim()) return
    onSend(text)
    setText('')
  }
  return (
    <KeyboardAvoidingView style={st.fill} behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
      {messages.length === 0 ? (
        <View style={st.empty}>
          <Text style={[st.emptyTitle, { color: c.text }]}>How can we help?</Text>
          <Text style={[st.emptySub, { color: c.sub }]}>{conversation?.status === 'needs_human' ? 'A human will reply' : 'Usually replies in minutes'}</Text>
        </View>
      ) : (
        <FlatList
          inverted
          data={data}
          keyExtractor={(m) => m.localId ?? m.id}
          contentContainerStyle={st.thread}
          keyboardDismissMode="interactive"
          renderItem={({ item, index }) => {
            const mine = item.author === 'user'
            const next = data[index + 1]
            const firstOfRun = !next || next.author !== item.author
            return (
              <View style={[st.msg, mine ? st.mine : st.theirs]}>
                {!mine && firstOfRun && item.author !== 'system' ? (
                  <Badge c={c} label={item.author === 'ai' ? 'AI' : 'Founder'} color={item.author === 'ai' ? c.ai : c.founder} />
                ) : null}
                <Pressable
                  disabled={item.pending !== 'failed'}
                  onPress={() => item.localId && onRetry(item.localId)}
                  style={[st.bubble, { backgroundColor: mine ? c.accent : item.author === 'system' ? 'transparent' : c.bubble, opacity: item.pending === 'sending' ? 0.6 : 1 }]}
                >
                  <Text style={[st.body, { color: mine ? '#FFFFFF' : item.author === 'system' ? c.sub : c.text }]}>{item.body}</Text>
                </Pressable>
                {item.pending === 'failed' ? (
                  <Text style={[st.meta, { color: c.danger }]} onPress={() => item.localId && onRetry(item.localId)}>Not delivered · Tap to retry</Text>
                ) : item.pending === 'sending' ? (
                  <View style={st.sending}>
                    <ActivityIndicator size="small" color={c.sub} />
                    <Text style={[st.meta, { color: c.sub }]}>Sending</Text>
                  </View>
                ) : (
                  <Text style={[st.meta, { color: c.sub }]}>{time(item.createdAt)}</Text>
                )}
              </View>
            )
          }}
        />
      )}
      <View style={[st.composer, { borderTopColor: c.line }]}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Message"
          placeholderTextColor={c.sub}
          multiline
          style={[st.input, { backgroundColor: c.fill, color: c.text }]}
          accessibilityLabel="Message"
        />
        <Pressable onPress={submit} disabled={!text.trim()} style={[st.send, { backgroundColor: text.trim() ? c.accent : c.fill }]} accessibilityRole="button" accessibilityLabel="Send">
          <Text style={[st.sendText, { color: text.trim() ? '#FFFFFF' : c.sub }]}>↑</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  )
}

const st = StyleSheet.create({
  fill: { flex: 1 },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingTop: 14, paddingBottom: 10, borderBottomWidth: StyleSheet.hairlineWidth },
  side: { width: 64 },
  right: { alignItems: 'flex-end' },
  center: { flex: 1, alignItems: 'center' },
  title: { fontSize: 17, fontWeight: '600' },
  statusRow: { flexDirection: 'row', alignItems: 'center', marginTop: 2, gap: 5 },
  dot: { width: 6, height: 6, borderRadius: 3 },
  status: { fontSize: 12 },
  link: { fontSize: 17 },
  bold: { fontWeight: '600' },
  sep: { height: StyleSheet.hairlineWidth, marginLeft: 32 },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, paddingRight: 16 },
  unread: { width: 8, height: 8, borderRadius: 4, marginHorizontal: 12 },
  rowTop: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 8 },
  rowTitle: { flex: 1, fontSize: 16, fontWeight: '600' },
  preview: { flex: 1, fontSize: 14, marginTop: 2 },
  meta: { fontSize: 11, marginTop: 3 },
  newBtn: { margin: 16, borderRadius: 12, paddingVertical: 13, alignItems: 'center' },
  newText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
  badge: { alignSelf: 'flex-start', borderWidth: 1, borderRadius: 6, paddingHorizontal: 5, paddingVertical: 1, marginBottom: 3 },
  badgeText: { fontSize: 10, fontWeight: '700', letterSpacing: 0.3 },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 32 },
  emptyTitle: { fontSize: 20, fontWeight: '600' },
  emptySub: { fontSize: 14, marginTop: 6 },
  thread: { paddingHorizontal: 12, paddingVertical: 12 },
  msg: { marginVertical: 3, maxWidth: '80%' },
  mine: { alignSelf: 'flex-end', alignItems: 'flex-end' },
  theirs: { alignSelf: 'flex-start', alignItems: 'flex-start' },
  bubble: { borderRadius: 18, paddingHorizontal: 13, paddingVertical: 8 },
  body: { fontSize: 16, lineHeight: 21 },
  sending: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 2, transform: [{ scale: 0.9 }] },
  composer: { flexDirection: 'row', alignItems: 'flex-end', gap: 8, paddingHorizontal: 12, paddingVertical: 8, borderTopWidth: StyleSheet.hairlineWidth },
  input: { flex: 1, minHeight: 36, maxHeight: 120, borderRadius: 18, paddingHorizontal: 14, paddingTop: 8, paddingBottom: 8, fontSize: 16 },
  send: { width: 34, height: 34, borderRadius: 17, alignItems: 'center', justifyContent: 'center', marginBottom: 1 },
  sendText: { fontSize: 18, fontWeight: '700' }
})
