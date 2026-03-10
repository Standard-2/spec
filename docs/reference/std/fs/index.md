# fs

The `fs` module provides an interface for reading and writing to the filesystem.

::: warning Filesystem is sandboxed
All filesystem operations are done in a sandboxed directory. See [Sandbox](./sandbox.md).
:::

## Summary

### Methods

| Method                      | Signature                                                | Description                                                     |
| --------------------------- | -------------------------------------------------------- | --------------------------------------------------------------- |
| [`read`](./read.md)         | `(path: string) -> string`                               | Reads the contents of a file as a string.                       |
| [`write`](./write.md)       | `(path: string, content: string) -> ()`                  | Writes a string to a file.                                      |
| [`exists`](./exists.md)     | `(path: string) -> boolean`                              | Returns whether a file or directory exists.                     |
| [`remove`](./remove.md)     | `(path: string) -> ()`                                   | Deletes a file or directory.                                    |
| [`list`](./list.md)         | `(path: string) -> {string}`                             | Returns the entries in a directory.                             |
| [`mkdir`](./mkdir.md)       | `(path: string, recursive: boolean?) -> ()`              | Creates a directory.                                            |
| [`move`](./move.md)         | `(from: string, to: string) -> ()`                       | Moves or renames a file or directory.                           |
| [`copy`](./copy.md)         | `(from: string, to: string) -> ()`                       | Copies a file to a new location.                                |
| [`metadata`](./metadata.md) | `(path: string) -> Metadata`                             | Returns metadata about a file or directory.                     |
| [`walk`](./walk.md)         | `(path: string, options: WalkOptions?) -> () -> string?` | Recursively iterates all files under a directory.               |
| [`watch`](./watch.md)       | `(path: string) -> Watcher`                              | Returns a push-based watcher with a `Signal` for change events. |
