# input.move

Moves the mouse cursor to a new position.

## Signature

```luau
function move(pos: Vector2, relative: boolean?): ()
```

## Summary

### Parameters

| Parameter  | Type       | Description                                                     |
| ---------- | ---------- | --------------------------------------------------------------- |
| `pos`      | `Vector2`  | The target coordinates.                                         |
| `relative` | `boolean?` | If true, moves relative to current position. Defaults to false. |

## Example

```lua
local input = require("@runtime/input")

-- Move to absolute pixel (100, 200)
input.move(Vector2.new(100, 200))

-- Shake the mouse slightly (relative move)
input.move(Vector2.new(5, 0), true)
```
