# env.rbx

Returns the entire datamodel-create lua state environment.

## Usage

```typescript
let rbx: Record<string, unknown>
```

## Example

```lua
local env = include("@runtime/env")

------

print(env.rbx.print) -- print

------

env.print = function()
    return 1
end

print(env.rbx.print) -- 1

------

env.helloworld = "Hello, World!"
print(env.rbx.helloworld) -- Hello, World!
```
