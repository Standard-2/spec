# Console.error

Prints to console as an error.

## Signature

```luau
function Console:error(...: any): ()
```

## Summary

### Parameters

| Parameter | Type  | Description         |
| --------- | ----- | ------------------- |
| `...`     | `any` | Arguments to print. |

## Example

```luau
local console = require("@runtime/console")
local stdConsole = console.allocate()

stdConsole:error("Error!!")
```
