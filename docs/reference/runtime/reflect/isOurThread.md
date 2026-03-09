# reflect.isOurThread

Returns whether the current thread's caller is a thread created by the custom runtime.

## Signature

```luau
function isOurThread(): boolean
```

## Example

```lua
local reflect = require("@runtime/reflect")

if reflect.isOurThread() then
    print("Called by the internal runtime!")
else
    print("Called by the game!")
end
```

::: warning
This does not check the entire call stack. If a game function calls an internal function which in turn calls `isOurThread`, it will return true.
:::
