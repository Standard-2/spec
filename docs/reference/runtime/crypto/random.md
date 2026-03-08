# crypto.random

Generates a cryptographically strong sequence of random bytes.

## Signature

```luau
function random(length: number): string
```

## Summary

### Parameters

| Parameter | Type     | Description                      |
| --------- | -------- | -------------------------------- |
| `length`  | `number` | The number of bytes to generate. |

## Example

```lua
local crypto = require("@runtime/crypto")

local bytes = crypto.random(32)
print(#bytes) -- 32
```
