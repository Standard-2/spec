---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "S2"
  text: "Technical Specification & Reference"
  tagline: The formal definition of the Standard2 protocol and its components.
  actions:
    - theme: brand
      text: Documentation
      link: /reference/
    - theme: alt
      text: GitHub
      link: https://github.com/Standard-2

---

## About the S2 Spec

S2 (Standard2) is a naming initiative designed to make custom environments feel more intuitive and efficient. The specification addresses several critical issues in contemporary environments:

- **Unintuitive Environment Standards**: Many environments automatically inject functions, leading to naming conflicts and confusion.
- **Fragmented Aliases**: Years of varied naming schemes have created environment clutter (e.g., `crypt.base64encode` vs `base64_encode`).
- **Incorrect Namespacing**: Libraries are often disorganized, with unrelated functions grouped together. S2 addresses this by enforcing a strict **Namespace/Module** hierarchy.

The S2 Standard provides a clean, consistent, and logically structured API for developers building on Luau executors. By creating a fresh spec, we can not only avoid the pitfalls of previous standards, but implement them in a modern manner.
