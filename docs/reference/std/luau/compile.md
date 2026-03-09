# luau.compile

Compiles Luau source code into its binary bytecode format.

## Signature

```luau
function compile(source: string): string
```

## Summary

### Parameters

| Parameter | Type     | Description                    |
| --------- | -------- | ------------------------------ |
| `source`  | `string` | The Luau source code to compile. |

## Example

```lua
local luau = require("@std/luau")

local bytecode = luau.compile("print('Hello from bytecode!')")
print(#bytecode) -- Output: (length of bytecode)
```
