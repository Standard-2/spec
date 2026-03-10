# S2 Standard Naming Conventions

This document defines the naming standards for the S2 Standard API to ensure consistency, modern aesthetics, and ease of use.

## General Rules

- **Namespace/Library Names**: Use lowercase (e.g., `serde`, `luau`, `reflect`, `crypto`).
- **Type Names**: Use `PascalCase` (e.g., `SerializationFormat`, `CompressionAlgorithm`).
- **File Names**: Match the function or type name exactly (e.g., `fromSource.md`, `SerializationFormat.md`).

## Functions & Methods

- **Casing**: Use `camelCase` (e.g., `fromSource`, `isExecutorThread`).
- **Action-Oriented Verbs**: Start with a verb for functions that perform a distinct action (e.g., `getClipboard`, `setClipboard`, `messageBox`). Do not put the noun first (avoid `clipboardGet`).
- **Dual Getter/Setter Properties**: If a function dynamically acts as *both* a getter and a setter depending on whether arguments are provided, name it after the property itself rather than prefixing it with get/set (e.g., `fpsCap()` gets the cap, `fpsCap(60)` sets it).
- **Boolean States**: Prefix with `is`, `has`, or `can` if the function returns a boolean (e.g., `isLuauFunction`, `hasProperty`).
