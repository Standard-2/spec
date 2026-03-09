# input.isActive

Returns whether the main window is currently in focus. This is typically required for input simulation to be accepted by the environment.

## Signature

```luau
function isActive(): boolean
```

## Example

```lua
local input = require("@runtime/input")

if input.isActive() then
    print("Window is active, signals will be processed")
else
    print("Warning: Window is out of focus")
end
```
