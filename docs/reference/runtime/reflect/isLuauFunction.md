# reflect.isLuauFunction

Returns whether a function is a Luau closure (as opposed to a C closure).

## Signature

```luau
function isLuauFunction(f: function): boolean
```

## Summary

### Parameters

| Parameter | Type       | Description                 |
| --------- | ---------- | --------------------------- |
| `f`       | `function` | The function to be checked. |

## Example

```lua
local reflect = require("@runtime/reflect")

print(reflect.isLuauFunction(function() end)) -- true
print(reflect.isLuauFunction(print))          -- false (built-in C function)
```
