# console.style

Returns an ANSI string to stylize the output.

## Signature

```luau
function style(style: string): string
```

## Summary

### Parameters

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| `style`   | `string` | The style   |

## Example

```luau
local console = require("@runtime/console")
local stdConsole = console.allocate()

stdConsole:write(console.style("bold"))
stdConsole:print("This text is bold")

stdConsole:write(console.style("reset"))
stdConsole:print("This text is normal")
```
