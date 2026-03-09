# class

Creates a new class which can inherit from a superclass and use access specifiers.

::: info
This API design is based on [Class++](https://devforum.roblox.com/t/3050526)
:::

## Signature

```luau
function class(name: string): (super: Class?) -> (data: ClassDefinition) -> Class
```

### Types

```luau
type ClassDefinition = {
    Public: { [string]: any }?,
    Private: { [string]: any }?,
    constructor: (self: Object, ...any) -> ()?,
    destructor: (self: Object) -> ()?,
}

type Class = {
    new: (...any) -> Object,
}

type Object = {
    Destroy: (self: Object) -> (),
}
```

## Summary

### Methods

| Method                      | Signature                  | Description                |
| --------------------------- | -------------------------- | -------------------------- |
| [`getClass`](./getClass.md) | `(name: string) -> Class?` | Retrieves a class by name. |

## Example

### Defining a Class

```lua
local class = require("@batteries/class")

local Animal = class "Animal" {
    Public = {
        name = "Unknown",
        Speak = function(self) print("...") end
    }
}
```

### Custom Constructors

```lua
local Person = class "Person" {
    constructor = function(self, name)
        self.name = name
    end,
    Public = {
        name = ""
    }
}

local p = Person.new("John")
```
