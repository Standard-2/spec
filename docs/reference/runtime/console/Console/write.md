# Console.write

Writes directly to the console output without any formatting

## Signature

```luau
function Console:write(s: string): ()
```

## Summary

### Parameters

| Parameter | Type     | Description     |
| --------- | -------- | --------------- |
| `s`       | `string` | String to write |

## Example

```luau
local console = require("@runtime/console")
local stdConsole = console.allocate()

stdConsole:write("Loading [")
for i = 1, 10 do
    stdConsole:write("#")
    task.wait(0.1)
end
stdConsole:write("]\n")
```
