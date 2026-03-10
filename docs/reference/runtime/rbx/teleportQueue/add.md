# rbx.teleportQueue.add

Adds a script to the `teleportQueue`.

## Signature

```luau
function add(script: string, id: string?): string
```

## Summary

### Parameters

| Parameter | Type      | Description                                       |
| --------- | --------- | ------------------------------------------------- |
| `script`  | `string`  | The Luau source code to execute after teleport.   |
| `id`      | `string?` | Optional user-defined identifier for this script. |

## Example

```luau
local teleportQueue = require("@runtime/rbx/teleportQueue")

local id = teleportQueue.add([[
    print("Arrived at new place!")
]])
```
