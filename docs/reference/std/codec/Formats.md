# Formats

The **Codec** module supports multiple data transformation formats. Each format has different use cases and trade-offs.

| Format     | Type              | Notes                                            |
| ---------- | ----------------- | ------------------------------------------------ |
| **base64** | Encoding/Decoding | Converts binary data to ASCII for safe transport |
| **hex**    | Encoding/Decoding | Encodes bytes as hexadecimal characters          |

## Use cases

- **base64** – When transmitting binary data over text-only channels (e.g., JSON, HTTP)
- **hex** – When debugging or representing binary in human-readable form

## Example

```lua
local codec = require("@std/codec")

-- Base64
local encoded = codec.encode("base64", "Hello, World!")
local decoded = codec.decode("base64", encoded)
print(decoded) -- Hello, World!

-- Hex
local encodedHex = codec.encode("hex", "Hello, World!")
local decodedHex = codec.decode("hex", encodedHex)
print(decodedHex) -- Hello, World!
```
