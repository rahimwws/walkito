# @shotik/support-react-native

In-app support chat for React Native and Expo apps. Users write from your app; the conversation lands in Shotik's
Support inbox on your Mac, where you (or the AI) answer. Replies arrive live, and push-ready events are recorded for
users who closed the app.

- Pure TypeScript with no native code, so it runs in any Expo dev client or bare RN app without a rebuild.
- Peer dependencies: `react`, `react-native`. It uses these when your app already has them: `expo-device`,
  `expo-application`, `expo-localization` (device context), and `@react-native-async-storage/async-storage` or
  `expo-secure-store` (persistence). Without them it falls back to `Platform`, `Intl` and in-memory storage.
- Anonymous users get a persisted id. When they sign in, their chats move to the signed-in user.
- Sends are optimistic and queued while offline. The stream reconnects with backoff and catches up when the app
  returns to the foreground.

## 1. Install

The package is not published to npm. Shotik ships it in `sdk/react-native`, so vendor it into your repo:

```sh
mkdir -p vendor && cp -R <shotik>/sdk/react-native vendor/shotik-support-react-native
npm install ./vendor/shotik-support-react-native      # or: bun add ./vendor/shotik-support-react-native
```

## 2. Wrap your root

Get the public key (`spk_…`) from Shotik → Support → SDK. It is a public app key, so it is safe in the bundle.

```tsx
// app/_layout.tsx (Expo Router) or App.tsx
import { ShotikSupportProvider } from '@shotik/support-react-native'

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ShotikSupportProvider appKey="spk_…" serverUrl="https://support.example.com">
        <Stack />
      </ShotikSupportProvider>
    </GestureHandlerRootView>
  )
}
```

The provider identifies the user anonymously, keeps the live stream open while the app is in the foreground, and
renders `<SupportWidget/>` as a page sheet. Pass `widget={false}` to place `<SupportWidget/>` yourself, and
`title` / `accentColor` to restyle it. Light and dark follow the system.

## 3. Open it

```tsx
import { ShotikSupport } from '@shotik/support-react-native'

<Row label="Help" onPress={() => ShotikSupport.open()} />
```

Deep link (and push taps): with Expo Router, add `app/support.tsx`:

```tsx
export { SupportRoute as default } from '@shotik/support-react-native'
```

`myapp://support` then opens the chat over the current screen.

## 4. Identify after sign-in

```ts
ShotikSupport.identify({ userId: user.id, email: user.email, name: user.name, attributes: { plan: 'pro' } })
// sign-out
ShotikSupport.reset()
```

You can call it anywhere, including at module scope before the provider mounts, because calls made before
`configure` are held until it runs. Every identify sends the device context: platform, OS version, model, app
version and build, locale and time zone.

## 5. Push

```ts
const { data: token } = await Notifications.getExpoPushTokenAsync({ projectId })
ShotikSupport.setPushToken(token, Platform.OS)
```

Every founder or AI reply is recorded as a push-ready event (`GET /v1/support/events`) with the user's token and a
preview. A reply already delivered over the live stream is marked delivered.

## Hook and API

```ts
const { conversations, messages, unread, unreadBy, status, open, send, retry, select, close } = useSupport()
```

| | |
|---|---|
| `ShotikSupport.configure({ appKey, serverUrl })` | Done by the provider when it gets props. Call it yourself to use the hook without the provider's props. |
| `identify(user?)`, `reset()` | Signed-in user / sign-out (new anonymous id). |
| `setPushToken(token, platform?)` | Expo or APNs/FCM token; `null` clears it. |
| `open(conversationId?)`, `close()` | Show or hide the sheet. |
| `status` | `idle · identifying · connecting · live · offline · error` |
| `send(body, conversationId?)` | Optimistic. Without an id it starts a new conversation. Returns the local message. |
| `retry(localId)` | Resend a message marked `pending: 'failed'`. |
| `SupportClient` (`@shotik/support-react-native/client`) | The platform-free core, usable outside React. |

Conversation status `needs_human` shows "A human will reply". Author badges read **AI** and **Founder**.

## Troubleshooting

- **Status stays `offline`.** The phone can't reach `serverUrl`. A simulator reaches the Mac at `http://127.0.0.1:<port>`,
  but a device needs the Mac's LAN address (`http://192.168.x.x:<port>`) or an HTTPS deployment. Check with
  `curl <serverUrl>/health`.
- **Status is `error` with "unknown app key".** The key doesn't belong to this server. Create it again in Shotik.
- **Plain `http://` is blocked on a device.** iOS App Transport Security allows only HTTPS in release builds. Use HTTPS,
  or add an ATS exception for development only.
- **Nothing persists between launches.** Install `expo-secure-store` or `@react-native-async-storage/async-storage`
  (both are optional). Without one, the anonymous id resets on every launch.
- **TypeScript complains about the SDK sources.** It ships TypeScript source. Use `moduleResolution: "bundler"`
  (the Expo default) and `jsx: "react-jsx"`.
- **`myapp://support` shows "not found".** The route file is missing, or your router root is `src/app`. Put
  `support.tsx` next to your root `_layout.tsx`.
- **Messages sit at "Sending".** They are queued and go out when the server is reachable. After 3 failed attempts they show
  "Not delivered · Tap to retry", and they still retry on their own once the app is online.

## Tests

The client is tested against a real Shotik server and a founder's synced store: identify, the user message arriving as
synced rows, the founder reply arriving on the stream, push-ready events, the offline queue across a restart,
reconnect, the anonymous-to-identified merge, and a bad key.

```sh
node --disable-warning=ExperimentalWarning --test server/test/support.test.ts
```
