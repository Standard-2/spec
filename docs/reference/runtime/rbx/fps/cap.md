# fps.cap

Sets the FPS cap, and returns it if the cap was omitted

## Signature

```luau
function cap(fps: number?): number
```

## Summary

### Parameters

| Parameter | Type      | Description                                         |
| --------- | --------- | --------------------------------------------------- |
| `fps`     | `number?` | If omitted, it will give you its current cap limit. |

## Example

```lua
local fps = require("@runtime/rbx/fps")

fps.cap(60)

print("FPS Cap: " .. fps.cap())
```
