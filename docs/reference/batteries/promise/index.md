# promise

The `promise` battery provides a way to easily create and manage promises.

## Summary

### Methods

| Method            | Signature                                        | Description                              |
| ----------------- | ------------------------------------------------ | ---------------------------------------- |
| [`new`](./new.md) | `(executor: (resolve, reject) -> ()) -> Promise` | Creates a new promise.                   |
| `all`             | `({Promise}) -> Promise`                         | Resolves when all promises resolve.      |
| `race`            | `({Promise}) -> Promise`                         | Resolves when the first promise settles. |
| `resolve`         | `(...any) -> Promise`                            | Creates a resolved promise.              |
| `reject`          | `(any) -> Promise`                               | Creates a rejected promise.              |
