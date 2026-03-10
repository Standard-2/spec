# rbx.teleportQueue.list

Returns the queue of scripts in `teleportQueue`.

## Signature

```luau
function list(): { [string]: string }
```

## Example

```luau
local teleportQueue = require("@runtime/rbx/teleportQueue")

teleportQueue.add("print('Hello, world!')", "myScript")

for id, script in teleportQueue.list() do
    print(id, "->", script)
end
```
