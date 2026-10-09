/**
 * The MCP Apps view side, in a few kilobytes.
 *
 * The official `App` (@modelcontextprotocol/ext-apps) validates every message
 * with zod and weighs 600 KB inlined, which every widget would carry. This is
 * the same wire protocol (spec 2026-01-26, the SDK's LATEST_PROTOCOL_VERSION):
 * JSON-RPC 2.0 over postMessage to the parent frame, with the method names the
 * SDK uses. It speaks only what the widgets need: initialize, tool results,
 * host context, size changes and opening a link.
 */
type Json = Record<string, unknown>;
type Handler = (params: Json) => void;

const PROTOCOL_VERSION = '2026-01-26';

let nextId = 1;
const pending = new Map<number, { resolve: (v: Json) => void; reject: (e: Error) => void }>();
const handlers = new Map<string, Handler>();

function send(message: Json) {
  window.parent.postMessage({ jsonrpc: '2.0', ...message }, '*');
}

window.addEventListener('message', (event) => {
  if (event.source !== window.parent) return;
  const data = event.data as Json | null;
  if (!data || data.jsonrpc !== '2.0') return;
  const id = data.id as number | undefined;
  if (id != null && ('result' in data || 'error' in data)) {
    const waiter = pending.get(id);
    if (!waiter) return;
    pending.delete(id);
    if ('error' in data) waiter.reject(new Error(String((data.error as Json)?.message ?? 'error')));
    else waiter.resolve((data.result as Json) ?? {});
    return;
  }
  const method = data.method as string | undefined;
  if (!method) return;
  handlers.get(method)?.((data.params as Json) ?? {});
  // A request from the host (e.g. ui/resource-teardown) wants an answer.
  if (id != null) send({ id, result: {} });
});

export function request(method: string, params: Json, timeoutMs = 10000): Promise<Json> {
  const id = nextId++;
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
    setTimeout(() => {
      if (pending.delete(id)) reject(new Error(`${method} timed out`));
    }, timeoutMs);
    send({ id, method, params });
  });
}

export function notify(method: string, params: Json = {}) {
  send({ method, params });
}

export function on(method: string, handler: Handler) {
  handlers.set(method, handler);
}

/** Handshake, then keep the host told of our height. */
export async function connect(appInfo: { name: string; version: string }): Promise<Json> {
  const result = await request('ui/initialize', { appInfo, appCapabilities: {}, protocolVersion: PROTOCOL_VERSION });
  notify('ui/notifications/initialized');
  let last = 0;
  const report = () => {
    const height = Math.ceil(document.documentElement.scrollHeight);
    if (height === last) return;
    last = height;
    notify('ui/notifications/size-changed', { height, width: Math.ceil(document.documentElement.scrollWidth) });
  };
  new ResizeObserver(report).observe(document.body);
  report();
  return result;
}

export async function openLink(url: string): Promise<boolean> {
  try {
    const result = await request('ui/open-link', { url });
    return result.isError !== true;
  } catch {
    return false;
  }
}
