# promise.new

Creates a new promise.

## Signature

```luau
function new(executor: (resolve: (...) -> (), reject: (any) -> ()) -> ()): Promise
```

### Types

```luau
type Promise = {
    andThen: (self: Promise, onResolved: (...) -> ...) -> Promise,
    catch: (self: Promise, onRejected: (any) -> ...) -> Promise,
    finally: (self: Promise, onCompleted: () -> ()) -> Promise,
    await: (self: Promise) -> (boolean, ...any),
}
```

## Summary

### Parameters

| Parameter  | Type                                                | Description                                |
| ---------- | --------------------------------------------------- | ------------------------------------------ |
| `executor` | `(resolve: (...) -> (), reject: (any) -> ()) -> ()` | The function that performs the async work. |

### Methods

| Method    | Signature                        | Description                       |
| --------- | -------------------------------- | --------------------------------- |
| `andThen` | `(self, onResolved) -> Promise`  | Chains a success handler.         |
| `catch`   | `(self, onRejected) -> Promise`  | Chains a failure handler.         |
| `finally` | `(self, onCompleted) -> Promise` | Chains a completion handler.      |
| `await`   | `(self) -> (boolean, ...any)`    | Yields until the promise settles. |

## Example

```lua
local promise = require("@batteries/promise")

local p = promise.new(function(resolve, reject)
    resolve(123)
end)
```
