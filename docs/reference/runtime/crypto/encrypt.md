# crypto.encrypt

Encrypts data using a cipher algorithm, key, and optional initialization vector (IV).

## Signature

```luau
function encrypt(algorithm: CipherAlgorithm, data: string, key: string, iv: string?): string
```

### Types

```luau
type CipherAlgorithm = "aes-256-cbc" | "aes-256-gcm" | "aes-256-ctr"
```

## Summary

### Parameters

| Parameter   | Type              | Description                         |
| ----------- | ----------------- | ----------------------------------- |
| `algorithm` | `CipherAlgorithm` | The cipher algorithm to use.        |
| `data`      | `string`          | The plain text data to encrypt.     |
| `key`       | `string`          | The encryption key.                 |
| `iv`        | `string?`         | The optional initialization vector. |

## Example

```lua
local crypto = require("@runtime/crypto")

local encrypted = crypto.encrypt("aes-256-cbc", "Hello, World!", "my-32-byte-long-key-string!!!", "16-byte-iv-string")
print(encrypted)
```
