# crypto.secretbox

**Secretbox** provides high-level authenticated encryption using the `xsalsa20-poly1305` construction.

## Summary

### Methods

| Method | Signature | Description |
| ------ | --------- | ----------- |
| [`keyGen`](./keyGen.md) | `() -> string` | Generates a random 32-byte secret key. |
| [`seal`](./seal.md) | `(message: string, key: string, nonce: string?) -> string` | Encrypts and authenticates a message. |
| [`open`](./open.md) | `(box: string, key: string, nonce: string?) -> string?` | Decrypts and verifies an authenticated message. |
