# clipboard.get

Gets text from the current index on the system clipboard.

## Signature

```luau
function get(): string
```

## Example

```luau
local clipboard = require("@runtime/system/clipboard")

print(clipboard.get()) --> OUTPUT: "Hello world"
```
