# Console.hide

Hides the console, it dosen't get destroyed and can be shown again with: [`Console:show`](./show.md).

## Signature

```luau
function Console:hide(): ()
```

## Example

```luau
local console = require("@runtime/console")
local stdConsole = console.allocate()

stdConsole:print("Goodbye world")
stdConsole:hide()

task.wait(5)
stdConsole:show()
```
