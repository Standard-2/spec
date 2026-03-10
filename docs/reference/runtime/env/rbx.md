# env.rbx

Returns the Roblox created lua state environment.

## Signature

```luau
{[string]: any}
```

## Example

```lua
local env = require("@runtime/env")

------

print(env.rbx.print) -- print

------

env.print = function()
    return 1
end

print(env.rbx.print()) -- 1

------

env.helloworld = "Hello, World!"
print(env.rbx.helloworld) -- Hello, World!
```
