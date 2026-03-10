# console.color

Returns an ANSI string to color the output.

## Signature

```luau
function color(color: string): string
```

## Summary

### Parameters

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| `color`   | `string` | The color   |

## Example

```luau
local console = require("@runtime/console")
local stdConsole = console.allocate()

stdConsole:write(console.color("red"))
stdConsole:print("This text is red")

stdConsole:write(console.color("reset"))
stdConsole:print("This text is normal")
```
