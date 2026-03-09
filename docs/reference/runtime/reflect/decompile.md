# reflect.decompile

Attempts to transform bytecode or a loaded function back into human-readable Luau source code.

## Signature

```luau
function decompile(bytecode: any, timeout: number?): string
```

### Types

```luau
type DecompileInput = LocalScript | ModuleScript | function | string
```

## Summary

### Parameters

| Parameter  | Type      | Description                                                     |
| ---------- | --------- | --------------------------------------------------------------- |
| `bytecode` | `any`     | The script, function, or bytecode string to decompile.          |
| `timeout`  | `number?` | Optional time limit for the decompilation process (in seconds). |

## Example

```lua
local reflect = require("@runtime/reflect")
local luau = require("@std/luau")

local source = "local x = 1; return x + 1"
local bytecode = luau.compile(source)

local decompiled = reflect.decompile(bytecode)
print(decompiled)
```
