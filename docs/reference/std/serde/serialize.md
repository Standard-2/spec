# serde.serialize

Serializes data using the given format.

## Signature

```luau
function serialize(format: SerializationFormat, data: any, options: SerializeOptions?): string
```

## Summary

### Parameters

| Parameter | Type                  | Description                                   |
| --------- | --------------------- | --------------------------------------------- |
| `format`  | `SerializationFormat` | The serialization format to use.              |
| `data`    | `any`                 | The data to be serialized.                    |
| `options` | `SerializeOptions?`   | Optional configuration for the serialization. |

## Types

```luau
type SerializationFormat = "json" | "toml" | "yaml"

type SerializeOptions = {
    pretty: boolean?,
}
```

## Example

### json

```lua
local serde = require("@std/serde")

local luaTable = {
    Index = true,
    Array = {
      "Value1",
      "Value2"
    },
    Table = {
      Index1 = "Value1",
      Index2 = "Value2"
    },
}

print(serde.serialize("json", luaTable, { pretty = true })) --[[
    {
      "Index": true,
      "Array": [
        "Value1",
        "Value2"
      ],
      "Table": {
        "Index1": "Value1",
        "Index2": "Value2"
      }
    }
]]
```

### toml

```lua
local serde = require("@std/serde")

local luaTable = {
  title = "Example",
  owner = {
    name = "Tom",
    dob = "1979-05-27T07:32:00Z"
  }
}

print(serde.serialize("toml", luaTable)) --[[
    title = "Example"

    [owner]
    name = "Tom"
    dob = "1979-05-27T07:32:00Z"
]]
```

### yaml

```lua
local serde = require("@std/serde")

local luaTable = {
  Index = true,
  Array = {
    "One",
    "Two",
    "Three"
  },
  Table = {
    Key1 = "Value1",
    Key2 = "Value2"
  }
}

print(serde.serialize("yaml", luaTable)) --[[
    Index: true
    Array:
      - One
      - Two
      - Three
    Table:
      Key1: Value1
      Key2: Value2
]]
```
