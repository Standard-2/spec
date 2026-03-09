# cede.decompress

Decompresses compressed data using a decompression algorithm.

## Signature

```luau
function decompress(algorithm: CompressionAlgorithm, compressedData: string): string
```

### Types

```luau
type CompressionAlgorithm = "lz4" | "zstd" | "deflate"
```

## Summary

### Parameters

| Parameter        | Type                   | Description                               |
| ---------------- | ---------------------- | ----------------------------------------- |
| `algorithm`      | `CompressionAlgorithm` | The decompression algorithm to use.       |
| `compressedData` | `string`               | The compressed string data to decompress. |

## Example

### lz4

```lua
local cede = require("@std/cede")
local codec = require("@std/codec")

local decoded = codec.decode("base64", "BCJNGEBw3w0AAIBIZWxsbywgV29ybGQhAAAAAA==")

print(cede.decompress("lz4", decoded)) -- Hello, World!
```

### zstd

```lua
local cede = require("@std/cede")
local codec = require("@std/codec")

local decoded = codec.decode("base64", "KLUv/SANaQAASGVsbG8sIFdvcmxkIQ==")

print(cede.decompress("zstd", decoded)) -- Hello, World!
```

### deflate

```lua
local cede = require("@std/cede")
local codec = require("@std/codec")

local decoded = codec.decode("base64", "80jNycnXUQjPL8pJUQQA==")

print(cede.decompress("deflate", decoded)) -- Hello, World!
```
