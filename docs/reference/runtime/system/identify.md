# system.identify

The `system.identify` function returns a RuntimeIdentifier about the current runtime/executor.

## Signature

```luau
function identify(): RuntimeIdentifier
```

### Types

```luau
type RuntimeIdentifier = {
    Name: string,
    Version: string,
}
```

## Example

```luau
local system = require("@runtime/system")

local identifiers = system.identify()

print(identifiers.Name) --> OUTPUT: "MyExecutor"
print(identifiers.Version) --> OUTPUT: "v1.0.0-beta.5"
```
