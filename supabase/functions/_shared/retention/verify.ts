import { X509Certificate, createPublicKey, verify } from 'node:crypto';

/**
 * Checks a JWS signed by the App Store: the chain in its header must end at
 * Apple Root CA G3, every certificate must be in date and signed by the next,
 * and the signature must verify with the leaf's key. Used by
 * `retention-message` for Apple's real-time request.
 */

/** Apple Root CA - G3, from apple.com/certificateauthority. */
const APPLE_ROOT_G3 =
  'MIICQzCCAcmgAwIBAgIILcX8iNLFS5UwCgYIKoZIzj0EAwMwZzEbMBkGA1UEAwwSQXBwbGUgUm9vdCBDQSAtIEczMSYwJAYDVQQLDB1BcHBsZSBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTETMBEGA1UECgwKQXBwbGUgSW5jLjELMAkGA1UEBhMCVVMwHhcNMTQwNDMwMTgxOTA2WhcNMzkwNDMwMTgxOTA2WjBnMRswGQYDVQQDDBJBcHBsZSBSb290IENBIC0gRzMxJjAkBgNVBAsMHUFwcGxlIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MRMwEQYDVQQKDApBcHBsZSBJbmMuMQswCQYDVQQGEwJVUzB2MBAGByqGSM49AgEGBSuBBAAiA2IABJjpLz1AcqTtkyJygRMc3RCV8cWjTnHcFBbZDuWmBSp3ZHtfTjjTuxxEtX/1H7YyYl3J6YRbTzBPEVoA/VhYDKX1DyxNB0cTddqXl5dvMVztK517IDvYuVTZXpmkOlEKMaNCMEAwHQYDVR0OBBYEFLuw3qFYM4iapIqZ3r6966/ayySrMA8GA1UdEwEB/wQFMAMBAf8wDgYDVR0PAQH/BAQDAgEGMAoGCCqGSM49BAMDA2gAMGUCMQCD6cHEFl4aXTQY2e3v9GwOAEZLuN+yRhHFD/3meoyhpmvOwgPUnPWTxnS4at+qIxUCMG1mihDK1A3UT82NQz60imOlM27jbdoXt2QfyFMm+YhidDkLF1vLUagM6BgD56KyKA==';

const ROOT = new X509Certificate(Uint8Array.from(atob(APPLE_ROOT_G3), (c) => c.charCodeAt(0)));

function fromBase64Url(text: string): Uint8Array {
  const b64 = text.replace(/-/g, '+').replace(/_/g, '/');
  return Uint8Array.from(atob(b64 + '='.repeat((4 - (b64.length % 4)) % 4)), (c) => c.charCodeAt(0));
}

export type Payload = {
  appAppleId?: number;
  productId?: string;
  userLocale?: string;
  environment?: string;
  signedDate?: number;
};

/**
 * The payload of an Apple-signed JWS, or null when anything about it is off:
 * a chain that does not end at Apple Root CA G3, a certificate outside its
 * dates, or a signature that does not verify.
 */
export function verified(jws: string, now = new Date()): Payload | null {
  const [head, body, signature] = jws.split('.');
  if (!head || !body || !signature) return null;
  const header = JSON.parse(new TextDecoder().decode(fromBase64Url(head))) as { alg?: string; x5c?: string[] };
  if (header.alg !== 'ES256' || !Array.isArray(header.x5c) || header.x5c.length !== 3) return null;

  const [leaf, intermediate, root] = header.x5c.map((der) => new X509Certificate(Uint8Array.from(atob(der), (c) => c.charCodeAt(0))));
  if (root.fingerprint256 !== ROOT.fingerprint256) return null;
  if (!intermediate.verify(ROOT.publicKey) || !leaf.verify(intermediate.publicKey)) return null;
  for (const cert of [leaf, intermediate]) {
    if (now < new Date(cert.validFrom) || now > new Date(cert.validTo)) return null;
  }

  const ok = verify(
    'sha256',
    new TextEncoder().encode(`${head}.${body}`),
    { key: createPublicKey(leaf.publicKey.export({ type: 'spki', format: 'pem' })), dsaEncoding: 'ieee-p1363' },
    fromBase64Url(signature),
  );
  if (!ok) return null;
  return JSON.parse(new TextDecoder().decode(fromBase64Url(body))) as Payload;
}
