# crypto.secretbox.seal

Encrypts and authenticates a message using a secret key and a nonce.

## Signature

```luau
function seal(message: string, key: string, nonce: string?): string
```

## Summary

### Parameters

| Parameter | Type      | Description                                                                    |
| --------- | --------- | ------------------------------------------------------------------------------ |
| `message` | `string`  | The data to be encrypted and authenticated.                                    |
| `key`     | `string`  | The secret key (32 bytes).                                                     |
| `nonce`   | `string?` | An optional nonce (24 bytes). If not provided, one is generated automatically. |

## Example

```lua
local crypto = require("@runtime/crypto")

local key = crypto.secretbox.keygen()
local box = crypto.secretbox.seal("Hello, World!", key)

print(box)
```
