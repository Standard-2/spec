# crypto.secretbox.open

Decrypts and verifies an authenticated message using a secret key.

## Signature

```luau
function open(box: string, key: string, nonce: string?): string?
```

## Summary

### Parameters

| Parameter | Type      | Description                      |
| --------- | --------- | -------------------------------- |
| `box`     | `string`  | The sealed data to be opened.    |
| `key`     | `string`  | The secret key used for sealing. |
| `nonce`   | `string?` | The nonce used for sealing.      |

## Example

```lua
local crypto = require("@runtime/crypto")

local message = crypto.secretbox.open(box, key)
if message then
    print("Decrypted message:", message)
else
    print("Failed to decrypt or authenticate!")
end
```
