# Console.clear

Clears the console from all output.

## Signature

```luau
function Console:clear(): ()
```

## Example

```luau
local console = require("@runtime/console")
local stdConsole = console.allocate()

stdConsole:print("This will disappear")
task.wait(1)

stdConsole:clear()
stdConsole:print("Blehh")
```
