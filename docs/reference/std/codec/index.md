# `codec`

**Codec** stands for **Coder and Decoder**. It refers to the process of:

- **Encoding**: Converting data into a specific format
- **Decoding**: Converting data from a specific format back into a form that preserves the original content

::: warning Codec is **not** responsible for:

- **Serialization** *(e.g., JSON, TOML)*
    - Use the [serde](<../SerDe/index.md>) library
- **Compression** *(e.g., LZ4, Zstd)*
    - Use the [cede](<../CeDe/index.md>) library
- **Cryptography** *(e.g., hashing, encryption)*
    - Use the [crypto](<../../runtime/Crypto/index.md>) library
:::

## Purpose

A codec facilitates data transformation, especially when sending or writing data in a specific format.

## Use Cases

- Transferring data across network boundaries
- Saving data to disk
- Improving query performance
