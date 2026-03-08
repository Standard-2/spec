# crypto.hash

Creates a cryptographic hash of the provided data using a specified algorithm.

## Signature

```luau
function hash(algorithm: HashAlgorithm, data: string): string
```

## Summary

### Parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `algorithm` | `HashAlgorithm` | The hash algorithm to use. |
| `data`    | `string` | The string data to hash. |

## Types

```luau
type HashAlgorithm = "md5" | "sha1" | "sha256" | "sha512"
```

## Example

```lua
local crypto = require("@runtime/crypto")

local hashed = crypto.hash("sha256", "Hello, World!")
print(hashed) -- dffd6021bb2bd5b0af67624843935672678f56c09642ca840a33e213303c7344
```
