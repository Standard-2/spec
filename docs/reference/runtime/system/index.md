# system

The `system` module provides access to host-machine-level utilities, including the clipboard, hardware info, executor identification, and system dialogs.

## Summary

### Methods

| Method                              | Signature                                                                            | Description                                    |
| ----------------------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------- |
| [`setClipboard`](./setClipboard.md) | `(text: string) -> ()`                                                               | Copies text to the system clipboard.           |
| [`getClipboard`](./getClipboard.md) | `() -> string`                                                                       | Returns the current system clipboard contents. |
| [`identify`](./identify.md)         | `() -> RuntimeIdentifier`                                                            | Returns executor name, version, and build.     |
| [`messageBox`](./messageBox.md)     | `(message: string, title: string?, options: MessageBoxOptions?) -> MessageBoxResult` | Displays a system modal dialog.                |
