# Console.show

Shows the console window.

## Signature

```luau
function Console:show(): ()
```

## Example

```luau
local console = require("@runtime/console")
local stdConsole = console.allocate()

stdConsole:hide()
task.wait(3)

stdConsole:show()
stdConsole:print("We back")
```
