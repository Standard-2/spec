# system.setClipboard

Copies text to the system clipboard.

## Signature

```luau
function setClipboard(text: string): ()
```

## Summary

### Parameters

| Parameter | Type     | Description                    |
| --------- | -------- | ------------------------------ |
| `text`    | `string` | The text to copy to clipboard. |

## Example

```luau
local system = require("@runtime/system")

system.setClipboard("Hello world")
```
