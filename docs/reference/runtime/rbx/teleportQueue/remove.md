# rbx.teleportQueue.remove

Removes a script from the `teleportQueue`.

## Signature

```luau
function remove(id: string): ()
```

## Summary

### Parameters

| Parameter | Type     | Description                                       |
| --------- | -------- | ------------------------------------------------- |
| `id`      | `string` | The identifier of the script to remove.           |

## Example

```luau
local teleportQueue = require("@runtime/rbx/teleportQueue")

local scriptId = teleportQueue.add("print('will be removed')")

teleportQueue.remove(scriptId)
```
