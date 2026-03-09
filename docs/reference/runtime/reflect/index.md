# reflect

The `reflect` library provides runtime reflection and inspection capabilities for the custom Luau environment.

## Summary

### Methods

| Method | Signature | Description |
| ------ | --------- | ----------- |
| [`isOurThread`](./isOurThread.md) | `() -> boolean` | Returns true if the current thread is a custom runtime thread. |
| [`isLuauFunction`](./isLuauFunction.md) | `(f: function) -> boolean` | Returns true if the function is a Luau closure. |
| [`decompile`](./decompile.md) | `(script: any, mode: any?, timeout: number?) -> string` | Decompiles a script or function back into source code. |
