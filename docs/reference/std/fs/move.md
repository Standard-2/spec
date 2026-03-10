# fs.move

Moves or renames a file or directory from one path to another.

## Signature

```luau
function move(from: string, to: string): ()
```

## Summary

### Parameters

| Parameter | Type     | Description           |
| --------- | -------- | --------------------- |
| `from`    | `string` | The target path       |
| `to`      | `string` | The destination path. |

## Example

```luau
local fs = require("@std/fs")

-- Rename
fs.move("old_name.txt", "new_name.txt")

-- Move
fs.move("output.txt", "archive/output.txt")
```
