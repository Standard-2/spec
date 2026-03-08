# crypto.hmac

Creates a Hash-based Message Authentication Code (HMAC) of the provided data using a specified hash algorithm and key.

## Signature

```luau
function hmac(algorithm: HashAlgorithm, data: string, key: string): string
```

## Summary

### Parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `algorithm` | `HashAlgorithm` | The hash algorithm to use. |
| `data`    | `string` | The string data to hash. |
| `key`     | `string` | The secret key for the HMAC. |

## Types

```luau
type HashAlgorithm = "md5" | "sha1" | "sha256" | "sha512"
```

## Example

```lua
local crypto = require("@runtime/crypto")

local mac = crypto.hmac("sha256", "Hello, World!", "my-secret-key")
print(mac) -- 1c3a647...
```
