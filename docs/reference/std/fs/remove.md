# fs.remove

Deletes a file or an empty directory at the given path.

::: warning
This operation is irreversible. Deleting a directory requires it to be empty.
:::

## Signature

```luau
function remove(path: string): ()
```

## Summary

### Parameters

| Parameter | Type     | Description                                  |
| --------- | -------- | -------------------------------------------- |
| `path`    | `string` | The path to the file or directory to delete. |

## Example

```luau
local fs = require("@std/fs")

fs.remove("temp.txt")
```
