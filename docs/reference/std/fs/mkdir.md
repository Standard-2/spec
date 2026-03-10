# fs.mkdir

Creates a new directory at the given path.

## Signature

```luau
function mkdir(path: string, recursive: boolean?): ()
```

## Summary

### Parameters

| Parameter   | Type       | Description                                                              |
| ----------- | ---------- | ------------------------------------------------------------------------ |
| `path`      | `string`   | The path of the directory to create.                                     |
| `recursive` | `boolean?` | If `true`, creates all required parent directories. Defaults to `false`. |

## Example

```luau
local fs = require("@std/fs")

-- Create a single directory
fs.mkdir("logs")

-- Create nested directories
fs.mkdir("data/cache/temp", true)
```
