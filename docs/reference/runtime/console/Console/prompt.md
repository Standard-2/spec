# Console.prompt

Prompts the user for input.

This will bring the console to the front if it is not already.

## Signature

```luau
function Console:prompt(kind: "text" | "confirm" | "select" | "multiselect" | nil, message: string, defaultOrOptions: any?): any
```

## Summary

### Parameters

| Parameter          | Type     | Description                                                                   |
| ------------------ | -------- | ----------------------------------------------------------------------------- |
| `kind`             | `string` | Defaults to `"text"`.                                                         |
| `message`          | `string` | The message shown to the user.                                                |
| `defaultOrOptions` | `any?`   | An optional default value, or list of selection options for `"select"` types. |

### Prompt Kinds

- `"text"` - Returns a `string` containing the user's input.
- `"confirm"` - Prompts for Yes/No (`y`/`n`) and returns a `boolean`.
- `"select"` - Given an array of `string` options, returns the single chosen `string`.
- `"multiselect"` - Given an array of `string` options, returns an array of chosen `string`s.

## Example

```luau
local console = require("@runtime/console")
local stdConsole = console.allocate()

local continueP = stdConsole:prompt("confirm", "Continue?")

if continueP then
    local answer = stdConsole:prompt("select", "Choose one", { "Hello", "World", "Goodbye" })
    stdConsole:print("Chose " .. answer)
end
```
