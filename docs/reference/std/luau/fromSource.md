# luau.fromSource

Compiles a source string and returns it as a function if successful.

## Signature

```luau
function fromSource(source: string, chunkname: string?): (function?, string?)
```

## Summary

### Parameters

| Parameter   | Type      | Description                               |
| ----------- | --------- | ----------------------------------------- |
| `source`    | `string`  | The Luau source code to compile and load. |
| `chunkname` | `string?` | Optional name for the chunk               |

## Example

```lua
local luau = require("@std/luau")

local fn, err = luau.fromSource("print('Success!')")

if fn then
    fn()
else
    warn("Compilation failed: " .. err)
end
```
