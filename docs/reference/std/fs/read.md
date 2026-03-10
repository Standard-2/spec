# fs.read

Returns the contents of the file as a string.

## Signature

```luau
function read(path: string): string
```

## Summary

### Parameters

| Parameter | Type     | Description                              |
| --------- | -------- | ---------------------------------------- |
| `path`    | `string` | The path to the file to read.            |

## Example

```luau
local fs = require("@std/fs")

local content = fs.read("config.json")
print(content)
```
