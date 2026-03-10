# Sandbox

Because S2 environments are mostly used to execute untrusted third party code, the `fs` module uses a sandboxed directory which is unescapable.

## Sandboxed Root

All paths passed to `fs` functions are relative to the sandboxed root directory. User-executed code shouldn't be able to escape it.

```
<sandboxed root>/
├── data/
│   └── save.json
└── logs/
    └── output.txt
```

Any attempt to access a path outside this root (e.g., `../../etc/passwd`) will error.

## Patched

### Path Traversal

| Attack Pattern   | Example            | Result                  |
| ---------------- | ------------------ | ----------------------- |
| Parent traversal | `../../etc/passwd` | Error                   |
| Absolute paths   | `/etc/passwd`      | Error                   |
| Null bytes       | `file\0.txt`       | Error                   |
| Symlink escape   | Symlink → outside  | Followed path is denied |

### Symbolic Links

Symlinks linking to a path outside of the sandbox root is denied.
