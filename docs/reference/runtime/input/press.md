# input.press

Simulates a keyboard key being pressed down.

## Signature

```luau
function press(key: Enum.KeyCode): ()
```

## Summary

### Parameters

| Parameter | Type           | Description                    |
| --------- | -------------- | ------------------------------ |
| `key`     | `Enum.KeyCode` | The Roblox KeyCode to press.   |

## Example

```lua
local input = require("@runtime/input")

-- Press the 'E' key
input.press(Enum.KeyCode.E)
```
