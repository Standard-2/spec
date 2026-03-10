# Console.info

Prints the arguments to console as info.

## Signature

```luau
function Console:info(...: any): ()
```

## Summary

### Parameters

| Parameter | Type  | Description          |
| --------- | ----- | -------------------- |
| `...`     | `any` | Arguments to inform. |

## Example

```luau
local console = require("@runtime/console")
local stdConsole = console.allocate()

stdConsole:info("Initializing...")
```
