# fs.write

Write to a file with a string

## Signature

```luau
function write(path: string, content: string): ()
```

## Summary

### Parameters

| Parameter  | Type     | Description                                |
| ---------- | -------- | ------------------------------------------ |
| `path`     | `string` | The path to the file to write.             |
| `content`  | `string` | The string content to write to the file.   |

## Example

```luau
local fs = require("@std/fs")

fs.write("output.txt", "Hello, S2!")
```
