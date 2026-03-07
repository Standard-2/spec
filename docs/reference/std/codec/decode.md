# codec.decode

Decodes data from a specific format back to its original form.

## Usage

```typescript
declare function decode(
  format: string,
  data: string
): string
```

## Example

### base64

```lua
local codec = include("@std/codec")

local decoded = codec.decode("base64", "SGVsbG8sIFdvcmxkIQ==")
print(decoded) -- Hello, World!
```

### hex

```lua
local codec = include("@std/codec")

local decoded = codec.decode("hex", "48656c6c6f2c20576f726c6421")
print(decoded) -- Hello, World!
```
