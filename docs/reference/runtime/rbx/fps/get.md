# fps.get

Returns the current actual frames per second (FPS).

## Signature

```luau
function get(): number
```

## Example

```lua
local fps = require("@runtime/rbx/fps")

print("Running at " .. fps.get() .. " FPS")
```
