# Console.readLine

Reads a single line of input from the console.

If standard input is closed, it returns all input up until its closed.

## Signature

```luau
function Console:readLine(): string
```

## Example

```luau
local console = require("@runtime/console")
local stdConsole = console.allocate()

stdConsole:write("What is your name?")
local name = stdConsole:readLine()

stdConsole:print("Hello, " .. name .. "!")
```
