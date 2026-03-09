# class.getClass

Retrieves a class that was previously defined by its name.

## Signature

```luau
function getClass(name: string): Class?
```

## Summary

### Parameters

| Parameter | Type     | Description                    |
| --------- | -------- | ------------------------------ |
| `name`    | `string` | The name of the class to find. |

## Example

```lua
local class = require("@batteries/class")

local Person = class "Person" {}
local found = class.getClass("Person")
```
