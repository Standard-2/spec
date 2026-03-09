# luau

The `luau` library provides access to the Luau VM's core compilation and bytecode loading capabilities.

## Summary

### Methods

| Method | Signature | Description |
| ------ | --------- | ----------- |
| [`compile`](./compile.md) | `(source: string) -> string` | Compiles Luau source code into bytecode. |
| [`load`](./load.md) | `(bytecode: string, chunkname: string?, env: {[any]: any}?) -> (args...) -> ...any` | Loads Luau bytecode into a function. |
| [`fromSource`](./fromSource.md) | `(source: string, chunkname: string?) -> (function?, string?)` | Compiles and loads a source string. |
