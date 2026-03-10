# system.identify

## Signature

```luau
function identify(): RuntimeIdentifier
```

### Types

```luau
type RuntimeIdentifier = {
    Name: string,
    Version: string,
    Build: string,
}
```

## Example

```luau
local system = require("@runtime/system")

local identifiers = system.identify()

print(identifiers.Name)
print(identifiers.Version)
print(identifiers.Build)
```
