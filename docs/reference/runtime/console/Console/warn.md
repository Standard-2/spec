# Console.warn

Warns in the console.

## Signature

```luau
function Console:warn(...: any): ()
```

## Summary

### Parameters

| Parameter | Type  | Description       |
| --------- | ----- | ----------------- |
| `...`     | `any` | Arguments to warn |

## Example

```luau
local console = require("@runtime/console")
local stdConsole = console.allocate()

stdConsole:warn("Reconnecting...")
```
