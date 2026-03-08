# crypto.password.verify

Verifies a password against a previously generated hash.

## Signature

```luau
function verify(hash: string, password: string): boolean
```

## Summary

### Parameters

| Parameter  | Type     | Description                            |
| ---------- | -------- | -------------------------------------- |
| `hash`     | `string` | The hashed password to verify against. |
| `password` | `string` | The plain text password to check.      |

## Example

```lua
local crypto = require("@runtime/crypto")

local ok = crypto.password.verify(hashedPassword, "hunter2")
if ok then
    print("Password is correct!")
end
```
