# crypto.password.hash

Hashes a password using a cryptographically strong, slow hash algorithm (e.g., Argon2).

## Signature

```luau
function hash(password: string, algorithm: PasswordHashAlgorithm?): string
```

### Types

```luau
type PasswordHashAlgorithm = "argon2id" | "bcrypt" | "scrypt"
```

## Summary

### Parameters

| Parameter   | Type                     | Description                                                     |
| ----------- | ------------------------ | --------------------------------------------------------------- |
| `password`  | `string`                 | The plain text password to hash.                                |
| `algorithm` | `PasswordHashAlgorithm?` | The password hashing algorithm to use (defaults to "argon2id"). |

## Example

```lua
local crypto = require("@runtime/crypto")

local hashed = crypto.password.hash("hunter2")
print(hashed) -- $argon2id$v=19$m=65536,t=3,p=4$...
```
