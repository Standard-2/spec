# input.batch

Dispatches a batch of input actions. This allows you to make a sequence of inputs, like a macro.

## Signature

```luau
function batch(actions: {Action}): ()
```

### Types

```luau
type ActionBase = { type: string }

type MouseMoveAction = ActionBase & {
    type: "mouseMove",
    x: number,
    y: number,
}

type MouseButtonAction = ActionBase & {
    type: "mousePress" | "mouseRelease",
    button: "left" | "right" | "middle",
}

type MouseScrollAction = ActionBase & {
    type: "mouseScroll",
    pixels: number,
}

type KeyAction = ActionBase & {
    type: "keyPress" | "keyRelease",
    key: Enum.KeyCode,
}

type WaitAction = ActionBase & {
    type: "wait",
    duration: number,
}

type Action = MouseMoveAction | MouseButtonAction | MouseScrollAction | KeyAction | WaitAction
```

## Summary

### Parameters

| Parameter | Type       | Description                                         |
| --------- | ---------- | --------------------------------------------------- |
| `actions` | `{Action}` | An array of action objects to be executed in order. |

## Example

```lua
local input = require("@runtime/input")

-- A complex sequence: move, click, and wait
input.batch({
    { type = "mouseMove", x = 100, y = 100 },
    { type = "mousePress", button = "left" },
    { type = "wait", duration = 0.1 },
    { type = "mouseRelease", button = "left" },
    { type = "keyPress", key = Enum.KeyCode.E }
})
```
