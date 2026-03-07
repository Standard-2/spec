---
title: Reference
---

# Reference

This section provides the formal specification and API documentation for the S2 Standard libraries.

## Accessing libaries

You can access these libraries via the `require` function.

```luau
local env = require("@runtime/env") -- S2 Libraries are accessed via the @ prefix.

env.this["S2_Is_The_Best"] = true

print(env.this.S2_Is_The_Best) -- true
```

## Provided Libraries

### `runtime`

The core runtime libraires in C++, which provides the basic functionality for general-purpose programming, reverse engineering, and extending on functionality not directly provide by Roblox's API.

### `std`

The standard library, it extends those core C++ libraries with additional functionality in Luau.

### `batteries`

A collection of useful, standalone Luau libraries that do not depend on `runtime`