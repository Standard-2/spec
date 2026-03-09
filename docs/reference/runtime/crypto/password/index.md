# crypto.password

`crypto.password` provides high-level password hashing API. It should be used instead of `crypto.hash` when you need to verify passwords.

## Summary

### Methods

| Method                  | Signature                                     | Description                         |
| ----------------------- | --------------------------------------------- | ----------------------------------- |
| [`hash`](./hash.md)     | `(password: string, salt: string?) -> string` | Hashes a password.                  |
| [`verify`](./verify.md) | `(password: string, hash: string) -> boolean` | Verifies a password against a hash. |
