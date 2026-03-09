# stopwatch.new

Creates a new stopwatch instance.

## Signature

```luau
function new(): Stopwatch
```

### Types

```luau
type Stopwatch = {
    Elapsed: number,
    Start: (self: Stopwatch) -> (),
    Stop: (self: Stopwatch) -> number,
    Reset: (self: Stopwatch) -> (),
}
```

## Summary

### Properties

| Property | Type | Description |
| -------- | ---- | ----------- |
| `Elapsed` | `number` | The total elapsed time in seconds. |

### Methods

| Method | Signature | Description |
| ------------ | ------------------ | -------------------------------------------------- |
| `Start` | `(self) -> ()` | Starts or resumes timing. |
| `Stop` | `(self) -> number` | Pauses timing and returns total elapsed time. |
| `Reset` | `(self) -> ()` | Resets the elapsed time to zero. |

## Example

```lua
local stopwatch = require("@batteries/stopwatch")

local clock = stopwatch.new() --> Stopwatch

clock:Start()

do -- Imagine we're doing some work in this scope.
    task.wait(1.5)

    print("Current elapsed: " .. clock.Elapsed) --> OUTPUT: "Current elapsed: ~1.5"
end

local elapsed = clock:Stop() --> ~1.5

print("Operation took: " .. elapsed) --> OUTPUT: "Operation took: ~1.5"
```
