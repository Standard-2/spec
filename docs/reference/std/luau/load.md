# luau.load

Loads Luau bytecode and returns a function that executes it.

## Signature

```luau
function load(bytecode: string, chunkname: string?, env: {[any]: any}?): (...any) -> ...any
```

## Summary

### Parameters

| Parameter   | Type              | Description                                      |
| ----------- | ----------------- | ------------------------------------------------ |
| `bytecode`  | `string`          | The binary bytecode to load.                     |
| `chunkname` | `string?`         | Optional name for the chunk (used in debugging). |
| `env`       | `{[any]: any}?`   | Optional environment for the loaded function.    |

## Example

```lua
local luau = require("@std/luau")

local bytecode = luau.compile("return ...")
local fn = luau.load(bytecode, "my_chunk")

print(fn("Hello!")) -- Hello!
```
