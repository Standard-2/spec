# `codec`

**Codec** stands for **Coder and Decoder**. It refers to the process of:

- **Encoding**: Converting data into a specific format
- **Decoding**: Converting data from a specific format back into a form that preserves the original content

::: warning Codec is **not** responsible for:

- **Serialization** *(e.g., json, toml, yaml)*
  - Use the [std/serde](<../serde/index.md>) module
- **Compression** *(e.g., lz4, zlib)*
  - Use the [std/cede](<../cede/index.md>) module
- **Cryptography** *(e.g., hashing, encryption)*
  - Use the [runtime/crypto](<../../runtime/crypto/index.md>) module
:::

## Purpose

A codec facilitates data transformation, especially when sending or writing data in a specific format.

## Use Cases

- Transferring data across network boundaries
- Saving data to disk
- Improving query performance
