# clipboard.set

Copies text to the system clipboard.

## Signature

```luau
function set(text: string): ()
```

## Summary

### Parameters

| Parameter | Type     | Description                    |
| --------- | -------- | ------------------------------ |
| `text`    | `string` | The text to copy to clipboard. |

## Example

```luau
local clipboard = require("@runtime/system/clipboard")

clipboard.set("Hello world")
```
