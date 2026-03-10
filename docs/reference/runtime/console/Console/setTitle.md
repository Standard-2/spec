# Console.setTitle

Sets the title of the console window.

## Signature

```luau
function Console:setTitle(title: string): ()
```

## Summary

### Parameters

| Parameter | Type     | Description                             |
| --------- | -------- | --------------------------------------- |
| `title`   | `string` | The new name for the console window.    |

## Example

```luau
local console = require("@runtime/console")
local stdConsole = console.allocate()

stdConsole:setTitle("Cool Title")
```
