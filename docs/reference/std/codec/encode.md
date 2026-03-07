# codec.encode

Encodes data into a specific format.

## Usage

```typescript
declare function encode(
  format: string,
  data: string
): string
```

## Example

### base64

```lua
local codec = include("@std/codec")

local encoded = codec.encode("base64", "Hello, World!")
print(encoded) -- SGVsbG8sIFdvcmxkIQ==
```

### hex

```lua
local codec = include("@std/codec")

local encoded = codec.encode("hex", "Hello, World!")
print(encoded) -- 48656c6c6f2c20576f726c6421
```
