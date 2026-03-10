# console.allocate

Allocates and returns a [console](./Console/index.md)

## Signature

```luau
function allocate(): Console
```

## Example

```luau
local console = require("@runtime/console")

local stdConsole = console.allocate() -- Will give you a console

stdConsole:setTitle("My Debugger")
stdConsole:print("Ready!")
```
