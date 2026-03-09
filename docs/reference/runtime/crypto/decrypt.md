# crypto.decrypt

Decrypts data using a cipher algorithm, key, and optional initialization vector (IV).

## Signature

```luau
function decrypt(algorithm: CipherAlgorithm, data: string, key: string, iv: string?): string
```

### Types

```luau
type CipherAlgorithm = "aes-256-cbc" | "aes-256-gcm" | "aes-256-ctr"
```

## Summary

### Parameters

| Parameter   | Type              | Description                                        |
| ----------- | ----------------- | -------------------------------------------------- |
| `algorithm` | `CipherAlgorithm` | The cipher algorithm used for original encryption. |
| `data`      | `string`          | The encrypted data to decrypt.                     |
| `key`       | `string`          | The decryption key.                                |
| `iv`        | `string?`         | The initialization vector.                         |

## Example

```lua
local crypto = require("@runtime/crypto")

local decrypted = crypto.decrypt("aes-256-cbc", encryptedData, "my-32-byte-long-key-string!!!", "16-byte-iv-string")
print(decrypted) -- Hello, World!
```
