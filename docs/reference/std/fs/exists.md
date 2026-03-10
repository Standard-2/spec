# fs.exists

Returns whether a file or directory exists at the given path.

## Signature

```luau
function exists(path: string): boolean
```

## Summary

### Parameters

| Parameter | Type     | Description                           |
| --------- | -------- | ------------------------------------- |
| `path`    | `string` | The path to check for existence.      |

## Example

```luau
local fs = require("@std/fs")

if fs.exists("config.json") then
    local content = fs.read("config.json")
    print(content)
else
    print("Config not found.")
end
```
