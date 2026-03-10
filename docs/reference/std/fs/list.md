# fs.list

Returns a list of files/paths in a given path

## Signature

```luau
function list(path: string): {string}
```

## Summary

### Parameters

| Parameter | Type     | Description                        |
| --------- | -------- | ---------------------------------- |
| `path`    | `string` | The path to the directory to list. |

### Returns

Returns an array of file and directory names within the given directory. The names are relative to `path`.

## Example

```luau
local fs = require("@std/fs")

local entries = fs.list("./data")

for _, name in entries do
    print(name)
end
```
