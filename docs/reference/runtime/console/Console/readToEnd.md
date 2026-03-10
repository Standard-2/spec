# Console.readToEnd

Reads all input until the stream closes.

## Signature

```luau
function Console:readToEnd(): string
```

## Example

```luau
local console = require("@runtime/console")
local stdConsole = console.allocate()

stdConsole:print("Paste your list here:")
local fullText = stdConsole:readToEnd()

stdConsole:print("You entered: " .. fullText)
```
