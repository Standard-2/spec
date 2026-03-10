# fs.walk

Lets you iterate over a path.

## Signature

```luau
function walk(path: string, options: WalkOptions?): () -> string?
```

### Types

```luau
type WalkOptions = {
    includeDirs: boolean?,
    filter: string?,
}
```

| Field         | Type       | Description                                                              |
| ------------- | ---------- | ------------------------------------------------------------------------ |
| `includeDirs` | `boolean?` | If `true`, directory paths are also yielded. Defaults to `false`.        |
| `filter`      | `string?`  | Glob pattern. Only paths matching the pattern are yielded.               |

## Summary

### Parameters

| Parameter | Type           | Description                                   |
| --------- | -------------- | --------------------------------------------- |
| `path`    | `string`       | The root directory to walk.                   |
| `options` | `WalkOptions?` | Optional configuration for the walk behavior. |

## Example

```luau
local fs = require("@std/fs")

local walk = fs.walk("./data")

while true do
    local path = walk()
    if path == nil then break end
    print(path)
end
```

### Filtering by Pattern

```luau
local fs = require("@std/fs")

local walk = fs.walk("./src", { filter = "*.luau" })

while true do
    local path = walk()
    if path == nil then break end
    print("Found Luau file:", path)
end
```
