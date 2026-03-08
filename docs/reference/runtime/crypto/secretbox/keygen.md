# crypto.secretbox.keygen

Generates a random key suitable for use with `secretbox.seal` and `secretbox.open`.

## Signature

```luau
function keygen(): string
```

## Example

```lua
local crypto = require("@runtime/crypto")

local key = crypto.secretbox.keygen()
print(#key) -- 32
```
