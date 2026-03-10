# rbx.teleportQueue.clear

Clears all scripts previously queued with [`add`](./add.md).

## Signature

```luau
function clear(): ()
```

## Example

```luau
local teleportQueue = require("@runtime/rbx/teleportQueue")

teleportQueue.add("print('hello')")

-- Changed our mind
teleportQueue.clear()
```
