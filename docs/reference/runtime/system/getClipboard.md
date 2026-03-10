# system.getClipboard

Returns the current contents of the system clipboard as a string.

## Signature

```luau
function getClipboard(): string
```

## Example

```luau
local system = require("@runtime/system")

local text = system.getClipboard()
print(text)
```
