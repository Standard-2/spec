# cede.compress

Compresses data using a compression algorithm.

## Signature

```luau
function compress(algorithm: CompressionAlgorithm, plainData: string): string
```

## Summary

### Parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `algorithm` | `CompressionAlgorithm` | The compression algorithm to use. |
| `plainData` | `string` | The string data to compress. |

## Types

```luau
type CompressionAlgorithm = "lz4" | "zstd" | "deflate"
```

## Example

### lz4

```lua
local cede = require("@std/cede")
local codec = require("@std/codec")

local compressed = cede.compress("lz4", "Hello, World!")

print(codec.encode(
    "base64",
    compressed
)) -- BCJNGEBw3w0AAIBIZWxsbywgV29ybGQhAAAAAA
```

### zstd

```lua
local cede = require("@std/cede")
local codec = require("@std/codec")

local compressed = cede.compress("zstd", "Hello, World!")

print(codec.encode(
  "base64",
  compressed
)) -- 80jNycnXUQjPL8pJUQQA==
```

### deflate

```lua
local cede = require("@std/cede")
local codec = require("@std/codec")

local compressed = cede.compress("deflate", "Hello, World!")

print(codec.encode(
  "base64",
  compressed
)) -- 80jN...
```
