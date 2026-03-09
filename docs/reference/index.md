# Reference

This section provides the formal specification and API documentation for the S2 Standard libraries.

::: info
The semantics for S2's namespaced runtime is heavily inspired by [lute](https://lute.luau.org).
:::

## Accessing Modules

Modules are organized into **Namespaces** (e.g., `std`, `runtime`, `batteries`). You can access these modules using the `@` prefix followed by the `<namespace>/<module>` path.

```luau
local env = require("@runtime/env") -- Accessing the 'env' module within the 'runtime' namespace.
```

### Submodules

You can also access submodules directly from the require path.

```luau
local secretbox = require("@runtime/crypto/secretbox")
```

::: info
In these docs you will mostly see submodules being indexed instead of directly using its require path, both are valid.

```luau
-- Works
local crypto = require("@runtime/crypto")
local secretboxRequired = crypto.secretbox

-- Also works
local secretboxIndexed = require("@runtime/crypto/secretbox")

print(secretboxRequired == secretboxIndexed) --> OUTPUT: true
```

:::

## Available Namespaces

### `runtime`

The core runtime modules implemented in C++, providing fundamental functionality for general-purpose programming, system interaction, and environmental extensions.

### `std`

The standard library namespace. It extends the core `runtime` modules with additional high-level functionality implemented in Luau.

### `batteries`

A collection of useful, standalone Luau modules that are independent of the `runtime` namespace.
