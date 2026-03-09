# input.click

Simulates a mouse button click (press and release) at the current or specified position.

## Signature

```luau
function click(button: ("left" | "right" | "middle")?, pos: Vector2?): ()
```

## Summary

### Parameters

| Parameter | Type       | Description                                             |
| --------- | ---------- | ------------------------------------------------------- |
| `button`  | `string?`  | The button to click. Defaults to `"left"`.              |
| `pos`     | `Vector2?` | Optional position to move the mouse to before clicking. |

## Example

```lua
local input = require("@runtime/input")

-- Left click at the current mouse position
input.click()

-- Right click at a specific coordinate
input.click("right", Vector2.new(500, 500))
```
