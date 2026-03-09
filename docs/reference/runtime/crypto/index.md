# `crypto`

**Crypto** stands for **Cryptography**. It provides functions for:

- **Hashing**: Creating a unique, fixed-size representation of data.
- **HMAC**: Creating a keyed-hash message authentication code.
- **Encryption**: Scrambling data to protect it from unauthorized access.
- **Decryption**: Reverting scrambled data back to its original form.
- **Password Hashing**: Securely hashing and verifying passwords using slow algorithms.
- **Secretbox**: High-level authenticated encryption for easy and safe data protection.

::: warning Crypto is **not** responsible for:

- **Encoding** *(e.g., base64, hex)*
  - Use the [codec](<../../std/codec/index.md>) library
- **Compression** *(e.g., lz4, zlib)*
  - Use the [cede](<../../std/cede/index.md>) library
:::

## Purpose

The `crypto` library provides essential cryptographic primitives for secure data handling, authentication, and integrity verification.

## Use Cases

- Verifying data integrity via hashing
- Securely storing sensitive information
- Authenticating requests using HMAC
- Protecting data during transit
