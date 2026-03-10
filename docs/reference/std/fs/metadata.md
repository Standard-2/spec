# fs.metadata

Gives you the given paths metadata

## Signature

```luau
function metadata(path: string): Metadata
```

### Types

```luau
type Metadata = {
    kind: "file" | "directory",
    exists: boolean,
    size: number,
    modifiedAt: number?,
    createdAt: number?,
    accessedAt: number?,
}
```

| Field        | Type                    | Description                                                 |
| ------------ | ----------------------- | ----------------------------------------------------------- |
| `kind`       | `"file" \| "directory"` | Whether the path points to a file or a directory.           |
| `exists`     | `boolean`               | Whether the path exists.                                    |
| `size`       | `number`                | The size of the file in bytes. `0` for directories.         |
| `modifiedAt` | `number?`               | Unix timestamp of the last modification, if available.      |
| `createdAt`  | `number?`               | Unix timestamp of when the entry was created, if available. |
| `accessedAt` | `number?`               | Unix timestamp of the last access, if available.            |

## Summary

### Parameters

| Parameter | Type     | Description                                   |
| --------- | -------- | --------------------------------------------- |
| `path`    | `string` | The path to the file or directory to inspect. |

## Example

```luau
local fs = require("@std/fs")

local meta = fs.metadata("config.json")

if meta.exists then
    print("File size:", meta.size)
    print("Last modified:", meta.modifiedAt)
else
    print("File does not exist.")
end
```
