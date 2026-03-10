# system.messageBox

Displays a synchronous system modal dialog and returns the button the user clicked.

::: warning
This function blocks the calling thread until the user dismisses the dialog.
:::

## Signature

```luau
function messageBox(message: string, title: string?, options: MessageBoxOptions?): MessageBoxResult
```

### Types

```luau
type MessageBoxOptions = {
    buttons: "ok" | "okcancel" | "yesno" | "yesnocancel",
}

type MessageBoxResult = "ok" | "cancel" | "yes" | "no"
```

## Summary

### Parameters

| Parameter | Type                 | Description                                                 |
| --------- | -------------------- | ----------------------------------------------------------- |
| `message` | `string`             | The message body to display in the dialog.                  |
| `title`   | `string?`            | Optional dialog title. Defaults to `""`.                    |
| `options` | `MessageBoxOptions?` | Optional configuration (button layout). Defaults to `"ok"`. |

### Returns

| Return | Type               | Description                  |
| ------ | ------------------ | ---------------------------- |
|        | `MessageBoxResult` | The button that was clicked. |

## Example

```luau
local system = require("@runtime/system")

local result = system.messageBox("Do you want to continue?", "Confirm", {
    buttons = "yesno",
})

if result == "yes" then
    print("User confirmed.")
else
    print("User declined.")
end
```

```luau
local system = require("@runtime/system")

local result = system.messageBox("Operation completed")
```
