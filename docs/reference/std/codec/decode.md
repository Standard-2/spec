# codec.decode

Decodes data from a specific format back to its original form.

## Signature

```luau
function decode(format: string, data: string): string
```

## Summary

### Parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `format`  | `string` | The encoding format (e.g., "base64", "hex"). |
| `data`    | `string` | The encoded string to decode. |

## Example

### base64

```lua
local codec = require("@std/codec")

local decoded = codec.decode("base64", "SGVsbG8sIFdvcmxkIQ==")
print(decoded) -- Hello, World!
```

### hex

```lua
local codec = require("@std/codec")

local decoded = codec.decode("hex", "48656c6c6f2c20576f726c6421")
print(decoded) -- Hello, World!
```
