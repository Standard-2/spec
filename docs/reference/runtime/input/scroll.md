# input.scroll

Simulates rotating the mouse wheel.

## Signature

```luau
function scroll(pixels: number): ()
```

## Summary

### Parameters

| Parameter | Type     | Description                                               |
| --------- | -------- | --------------------------------------------------------- |
| `pixels`  | `number` | The amount to scroll. Positive is up, negative is down. |

## Example

```lua
local input = require("@runtime/input")

-- Scroll up 120 units
input.scroll(120)

-- Scroll down 240 units
input.scroll(-240)
```
