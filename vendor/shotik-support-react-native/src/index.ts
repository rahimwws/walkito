// @shotik/support-react-native: in-app support chat for React Native and Expo, backed by a Shotik workspace.

export { ShotikSupport } from './support'
export { ShotikSupportProvider, SupportRoute, SupportWidget, useSupport } from './react'
export type { ProviderProps, WidgetProps } from './react'
export { SupportClient, HttpError, memoryStorage } from './client'
export type { Author, Conversation, ConversationStatus, DeviceInfo, KeyValueStorage, Message, Status, SupportConfig, SupportState, UserInfo } from './client'
export { nativeDevice, nativeStorage } from './native'
