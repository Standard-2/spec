# env.rbx

Returns the entire datamodel-created lua state environment.

## Signature

```luau
rbx: {[string]: any}
```

## Summary

### Properties

| Property | Type | Description |
| -------- | ---- | ----------- |
| `rbx`    | `{[string]: any}` | The Roblox environment. |

## Example

```lua
local env = require("@runtime/env")

------

print(env.rbx.print) -- print

------

env.print = function()
    return 1
end

print(env.rbx.print) -- 1

------

env.helloworld = "Hello, World!"
print(env.rbx.helloworld) -- Hello, World!
```
