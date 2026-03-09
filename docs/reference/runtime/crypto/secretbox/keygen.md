# crypto.secretbox.keyGen

Generates a random key suitable for use with `secretbox.seal` and `secretbox.open`.

## Signature

```luau
function keyGen(): string
```

## Example

```lua
local crypto = require("@runtime/crypto")

local key = crypto.secretbox.keyGen()
print(#key) -- 32
```
