# Algorithms

The **Crypto** module supports various cryptographic algorithms for hashing and encryption.

## Hash Algorithms

| Algorithm    | Notes                                    |
| ------------ | ---------------------------------------- |
| **`md5`**    | Fast but insecure for password hashing.  |
| **`sha1`**   | Legacy, widely used but considered weak. |
| **`sha256`** | Recommended for most use cases.          |
| **`sha512`** | High security 512-bit hash               |

## Password Hash Algorithms

| Algorithm      | Notes                                           |
| -------------- | ----------------------------------------------- |
| **`argon2id`** | Modern, resistant to GPU cracking. Recommended. |
| **`bcrypt`**   | Industry standard, robust and slow.             |
| **`scrypt`**   | Memory-hard algorithm.                          |

## Authenticated Encryption (Secretbox)

| Algorithm               | Mode          | Notes                               |
| ----------------------- | ------------- | ----------------------------------- |
| **`xsalsa20-poly1305`** | Authenticated | High-speed, high-security standard. |

## Cipher Algorithms

| Algorithm         | Mode | Notes                                  |
| ----------------- | ---- | -------------------------------------- |
| **`aes-256-cbc`** | CBC  | Standard block cipher mode.            |
| **`aes-256-gcm`** | GCM  | Authenticated encryption, recommended. |
| **`aes-256-ctr`** | CTR  | Stream cipher mode.                    |

## Use cases

- **sha256** – Standard hashing for checksums and signatures.
- **aes-256-gcm** – Secure encryption with built-in integrity checking.
