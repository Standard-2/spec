# Console.print

Prints the given arguments to the console.

## Signature

```luau
function Console:print(...: any): ()
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

stdConsole:print("Hello World")
```
