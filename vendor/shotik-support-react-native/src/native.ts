// React Native glue: persistence and device context from whatever the app already has installed. Every optional
// module is a guarded require, so the SDK needs no native code of its own and works in any Expo dev client.

import { Platform } from 'react-native'
import { memoryStorage } from './client'
import type { DeviceInfo, KeyValueStorage } from './client'

interface AsyncStorageLike {
  getItem(k: string): Promise<string | null>
  setItem(k: string, v: string): Promise<void>
  removeItem(k: string): Promise<void>
}

interface SecureStoreLike {
  getItemAsync(k: string): Promise<string | null>
  setItemAsync(k: string, v: string): Promise<void>
  deleteItemAsync(k: string): Promise<void>
}

function asyncStorage(): AsyncStorageLike | null {
  try {
    const m = require('@react-native-async-storage/async-storage')
    return (m?.default ?? m) as AsyncStorageLike
  } catch {
    return null
  }
}

function secureStore(): SecureStoreLike | null {
  try {
    const m = require('expo-secure-store')
    return typeof m?.getItemAsync === 'function' ? (m as SecureStoreLike) : null
  } catch {
    return null
  }
}

export function nativeStorage(): KeyValueStorage {
  const a = asyncStorage()
  if (a) return { get: (k) => a.getItem(k), set: (k, v) => a.setItem(k, v), remove: (k) => a.removeItem(k) }
  const s = secureStore()
  if (s) return { get: (k) => s.getItemAsync(k), set: (k, v) => s.setItemAsync(k, v), remove: (k) => s.deleteItemAsync(k) }
  return memoryStorage()
}

function expoDevice(): { modelName?: string | null; osVersion?: string | null } | null {
  try {
    return require('expo-device')
  } catch {
    return null
  }
}

function expoApplication(): { nativeApplicationVersion?: string | null; nativeBuildVersion?: string | null } | null {
  try {
    return require('expo-application')
  } catch {
    return null
  }
}

function expoLocalization(): { getLocales?: () => { languageTag?: string }[]; getCalendars?: () => { timeZone?: string | null }[] } | null {
  try {
    return require('expo-localization')
  } catch {
    return null
  }
}

export function nativeDevice(): DeviceInfo {
  const device = expoDevice()
  const app = expoApplication()
  const loc = expoLocalization()
  const intl = Intl.DateTimeFormat().resolvedOptions()
  let locale: string | undefined
  let timezone: string | undefined
  try {
    locale = loc?.getLocales?.()[0]?.languageTag
    timezone = loc?.getCalendars?.()[0]?.timeZone ?? undefined
  } catch {}
  return {
    platform: Platform.OS,
    osVersion: device?.osVersion ?? String(Platform.Version),
    model: device?.modelName ?? undefined,
    appVersion: app?.nativeApplicationVersion ?? undefined,
    build: app?.nativeBuildVersion ?? undefined,
    locale: locale ?? intl.locale,
    timezone: timezone ?? intl.timeZone
  }
}
