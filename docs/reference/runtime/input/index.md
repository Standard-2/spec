# input

The `input` library allows you to simulate user input.

## Summary

### Methods

| Method | Signature | Description |
| ------ | --------- | ----------- |
| [`isActive`](./isActive.md) | `() -> boolean` | Returns true if the window is currently in focus. |
| [`batch`](./batch.md) | `(actions: {Action}) -> ()` | Dispatches a sequence of input actions. |
| [`click`](./click.md) | `(button: string?, pos: Vector2?) -> ()` | Simulates a mouse click. |
| [`move`](./move.md) | `(pos: Vector2, relative: boolean?) -> ()` | Simulates mouse movement. |
| [`scroll`](./scroll.md) | `(pixels: number) -> ()` | Simulates mouse scrolling. |
| [`press`](./press.md) | `(key: Enum.KeyCode) -> ()` | Simulates a key press. |
| [`release`](./release.md) | `(key: Enum.KeyCode) -> ()` | Simulates a key release. |
