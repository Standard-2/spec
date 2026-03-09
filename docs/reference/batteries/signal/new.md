# signal.new

Creates a new signal object.

## Signature

```luau
function new(): Signal<T...>
```

### Types

```luau
type Signal<T...> = {
    Connect: (self: Signal<T...>, handler: (T...) -> ()) -> Connection,
    Once: (self: Signal<T...>, handler: (T...) -> ()) -> Connection,
    Wait: (self: Signal<T...>) -> T...,
    Fire: (self: Signal<T...>, T...) -> (),
    DisconnectAll: (self: Signal<T...>) -> (),
    Destroy: (self: Signal<T...>) -> (),
}
```

## Summary

### Methods

| Method          | Signature                       | Description                                 |
| --------------- | ------------------------------- | ------------------------------------------- |
| `Connect`       | `(self, handler) -> Connection` | Connects a handler function to the signal.  |
| `Once`          | `(self, handler) -> Connection` | Connects a handler that will only run once. |
| `Wait`          | `(self) -> ...any`              | Yields until the next fire.                 |
| `Fire`          | `(self, ...any) -> ()`          | Dispatches the signal.                      |
| `DisconnectAll` | `(self) -> ()`                  | Erases all connections.                     |
| `Destroy`       | `(self) -> ()`                  | Destroys the signal.                        |

## Example

```lua
local signal = require("@batteries/signal")
local onJump = signal.new() --> Signal

onJump:Connect(function()
    print("Jumped!")
end) --> Connection

onJump:Fire() -- OUTPUT: "Jumped!"
```
