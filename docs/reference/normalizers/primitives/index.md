# Overview

Primitive normalizers convert unknown or inconsistent input into predictable primitive values. They never throw exceptions, never mutate input, and never perform hidden coercion. Each helper returns either a clean, well‑formed value or null when normalization is not possible.

Primitive normalizers are the simplest and most frequently used normalization tools in Jane. They help you prepare raw input for validation or parsing by ensuring that values are trimmed, canonicalized, or safely interpreted.

- [normalizeBoolean](normalize-boolean.md): Interprets native booleans and `"true"` or `"false"` strings.
- [normalizeNonEmptyString](normalize-non-empty-string.md): Trims native strings and returns a non‑empty result or `null`.
- [normalizeInteger](normalize-integer.md): Converts native integers and integer strings into finite integers.
- [normalizeNumber](normalize-number.md): Converts native numbers and numeric strings into finite numbers.
- [normalizeString](normalize-string.md): Trims native strings and returns them unchanged.

Each helper is pure, predictable, and designed to be composed with validators and parsers.

## When to use primitive normalizers

Use primitive normalizers when:

- You want predictable values before validation.
- You need to clean or standardize user‑provided input.
- You want to avoid ad‑hoc trimming, coercion, or defensive checks.
- You want to separate “cleaning” from “validating” for clarity.

Primitive normalizers form the foundation of safe, explicit data pipelines in Jane. They ensure that every downstream step receives well‑formed input, reducing complexity and eliminating ambiguity.
