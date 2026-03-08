# env.this

Returns the current, **custom** environment. This is a shared environment of all threads made by the custom lua state.

## Signature

```luau
this: {[string]: any}
```

## Summary

### Properties

| Property | Type | Description |
| -------- | ---- | ----------- |
| `this`   | `{[string]: any}` | The current custom environment. |

## Example

```lua
local env = require("@runtime/env")

env.helloworld = "Hello, World!"
print(env.this.helloworld) -- Hello, World!
```
