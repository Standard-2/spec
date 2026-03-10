# fs.copy

Copies a file from one path to another.

## Signature

```luau
function copy(from: string, to: string): ()
```

## Summary

### Parameters

| Parameter | Type     | Description                               |
| --------- | -------- | ----------------------------------------- |
| `from`    | `string` | The path of the source file to copy.      |
| `to`      | `string` | The destination path for the copied file. |

## Example

```luau
local fs = require("@std/fs")

fs.copy("template.json", "instance.json")
```
