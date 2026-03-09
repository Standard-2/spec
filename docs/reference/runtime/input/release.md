# input.release

Simulates a keyboard key being released.

## Signature

```luau
function release(key: Enum.KeyCode): ()
```

## Summary

### Parameters

| Parameter | Type           | Description                    |
| --------- | -------------- | ------------------------------ |
| `key`     | `Enum.KeyCode` | The Roblox KeyCode to release. |

## Example

```lua
local input = require("@runtime/input")

-- Release the 'E' key
input.release(Enum.KeyCode.E)
```
