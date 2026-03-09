# `cede`

**CeDe** stands for **Compression and Decompression**. It refers to the process of:

- **Compression**: Compressing data into its smallest form
- **Decompression**: Reverting compressed data into a form that retains the same output

::: warning CeDe is **not** responsible for:

- **Serialization** *(e.g., json, toml, yaml)*
  - Use the [std/serde](<../serde/index.md>) module
- **Encoding** *(e.g., base64, hex)*
  - Use the [std/codec](<../codec/index.md>) module
- **Cryptography** *(e.g., hashing, encryption)*
  - Use the [runtime/crypto](<../../runtime/crypto/index.md>) module
:::

## Purpose

CeDe helps in the process of data minification, it helps when sending or writing large amounts of data.

## Use Cases

- Transferring large amounts of data between the network boundary
- Saving large amounts of data to the disk
- Improving query performance
