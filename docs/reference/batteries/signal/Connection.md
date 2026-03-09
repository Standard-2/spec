# Connection

A `Connection` object represents a successful binding between a handler function and a [Signal](./index.md).

::: info
A `Connection` can be obtained by making and connecting a handle to a signal.
:::

## Summary

### Types

```luau
type Connection = {
    Connected: boolean,
    Disconnect: (self: Connection) -> (),
}
```

### Methods

| Method       | Signature  | Description                              |
| ------------ | ---------- | ---------------------------------------- |
| `Disconnect` | `() -> ()` | Disconnects the handler from the signal. |

### Properties

| Property    | Type      | Description                                     |
| ----------- | --------- | ----------------------------------------------- |
| `Connected` | `boolean` | Returns true if the connection is still active. |

## Example

```lua
local signal = require("@batteries/signal")
local onJump = signal.new() --> Signal

local connection = onJump:Connect(function() end) --> Connection

print(connection.Connected) -- true
connection:Disconnect()
print(connection.Connected) -- false
```
