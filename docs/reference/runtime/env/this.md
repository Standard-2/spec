# env.this

Returns the current, **custom** environment made by the runtime. This is a shared environment of all threads made by the runtime's lua state.

## Signature

```luau
{[string]: any}
```

## Example

```lua
local env = require("@runtime/env")

env.helloworld = "Hello, World!"
print(env.this.helloworld) -- Hello, World!
```
