# fs.watch

Lets you watch for changes to a path.

## Signature

```luau
function watch(path: string): Watcher
```

### Types

```luau
type WatchEvent = "created" | "modified" | "removed" | "renamed"

type WatchChange = {
    path: string,
    event: WatchEvent,
}

type Watcher = {
    onChange: Signal<WatchChange>,
    close: (self: Watcher) -> (),
}
```

> [`Signal<T>`](/reference/batteries/signal/new#types).

## Summary

### Parameters

| Parameter | Type     | Description       |
| --------- | -------- | ----------------- |
| `path`    | `string` | The path to watch |

### Properties

| Property   | Type                  | Description                                 |
| ---------- | --------------------- | ------------------------------------------- |
| `onChange` | `Signal<WatchChange>` | Signal that fires when a change is detected |

### Methods

| Method  | Signature      | Description       |
| ------- | -------------- | ----------------- |
| `close` | `(self) -> ()` | Stops the watcher |

## Example

```luau
local fs = require("@std/fs")

local watcher = fs.watch("./config")

watcher.onChange:Connect(function(change)
    print(change.event, change.path)
    -- e.g. "modified  config.json"
end)

-- Later, stop watching:
watcher:close()
```

### One-time Change

```luau
local fs = require("@std/fs")

local watcher = fs.watch("./data")

watcher.onChange:Once(function(change)
    print("First change:", change.event, change.path)
    watcher:close()
end)
```
