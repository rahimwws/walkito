// The app-facing singleton: configure once, identify after sign-in, open the widget from anywhere. Calls made before
// configure() (an auth listener at module scope, a push token on launch) are held and applied when it runs.

import { Platform } from 'react-native'
import { SupportClient } from './client'
import type { SupportConfig, UserInfo } from './client'
import { nativeDevice, nativeStorage } from './native'

let current: SupportClient | null = null
const watchers = new Set<(c: SupportClient) => void>()
const held: { user: UserInfo | null; push: { token: string | null; platform: string } | null; open: boolean } = { user: null, push: null, open: false }

export const ShotikSupport = {
  configure(config: SupportConfig): SupportClient {
    if (current && current.config.appKey === config.appKey && current.config.serverUrl === config.serverUrl.replace(/\/+$/, '')) return current
    current?.stop()
    const c = new SupportClient({ storage: nativeStorage(), device: nativeDevice, ...config })
    current = c
    if (held.push) c.setPushToken(held.push.token, held.push.platform).catch(() => {})
    if (held.user) c.identify(held.user).catch(() => {})
    if (held.open) c.open()
    held.user = held.push = null
    held.open = false
    for (const fn of watchers) fn(c)
    return c
  },
  get client(): SupportClient | null {
    return current
  },
  onConfigure(fn: (c: SupportClient) => void): () => void {
    watchers.add(fn)
    return () => void watchers.delete(fn)
  },
  identify(user: UserInfo = {}): Promise<void> {
    if (current) return current.identify(user)
    held.user = { ...held.user, ...user }
    return Promise.resolve()
  },
  setPushToken(token: string | null, platform: string = Platform.OS): Promise<void> {
    if (current) return current.setPushToken(token, platform)
    held.push = { token, platform }
    return Promise.resolve()
  },
  open(conversationId?: string | null): void {
    if (current) current.open(conversationId)
    else held.open = true
  },
  close(): void {
    current?.close()
  },
  reset(): Promise<void> {
    held.user = null
    return current ? current.reset() : Promise.resolve()
  }
}
