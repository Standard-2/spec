# codec.encode

Encodes data into a specific format.

## Signature

```luau
function encode(format: string, data: string): string
```

## Summary

### Parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `format`  | `string` | The encoding format (e.g., "base64", "hex"). |
| `data`    | `string` | The string data to encode. |

## Example

### base64

```lua
local codec = require("@std/codec")

local encoded = codec.encode("base64", "Hello, World!")
print(encoded) -- SGVsbG8sIFdvcmxkIQ==
```

### hex

```lua
local codec = require("@std/codec")

local encoded = codec.encode("hex", "Hello, World!")
print(encoded) -- 48656c6c6f2c20576f726c6421
```
