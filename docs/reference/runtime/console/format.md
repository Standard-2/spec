# console.format

Formats arguments into a printable string.

## Signature

```luau
function format(...: any): string
```

## Summary

### Parameters

| Parameter | Type  | Description          |
| --------- | ----- | -------------------- |
| `...`     | `any` | Arguments to format. |

## Example

```luau
local console = require("@runtime/console")
local stdConsole = console.allocate()

local myTable = {
    name = "S2",
    version = 1.0,
    features = { "fast", "reliable" }
}

stdConsole:print(console.format(myTable))
```
