# Console.ewrite

Writes the string to the error stream. (This will not have any formatting, like spaces or newlines)

## Signature

```luau
function Console:ewrite(s: string): ()
```

## Summary

### Parameters

| Parameter | Type     | Description          |
| --------- | -------- | -------------------- |
| `s`       | `string` | The string to write. |

## Example

```luau
local console = require("@runtime/console")
local stdConsole = console.allocate()

stdConsole:ewrite("Loading critical failed [")
stdConsole:ewrite("FATAL")
stdConsole:ewrite("]\n")
```
