# Normalizers

Normalizers take unknown, messy, or inconsistent input and convert it into predictable, well‑formed values. They never throw exceptions, never mutate input, and never perform hidden coercion. A normalizer either returns a clean value or null when normalization is not possible.

Normalizers in Jane are pure, explicit, and side‑effect‑free. They make downstream validation and parsing safer, clearer, and easier to reason about.

## Available normalizers

Normalizers are grouped by category for clarity and discoverability:

- [Primitives](primitives/index.md): Trim, canonicalize, or safely interpret primitive values.
<!-- - [Structural](structural/index.md): Normalize objects, records, and tuples into predictable shapes.
- [Collections](collections/index.md): Normalize arrays, sets, maps, and iterable structures.
- [Semantic](semantic/index.md): Normalize values with meaning (dates, ports, JSON, and so on). -->

Each normalizer is small, focused, and designed to be composed with others.

## When to use normalizers

Use normalizers when:

- You want predictable input before validation or parsing.
- You need to clean or standardize user‑provided values.
- You want to avoid ad‑hoc trimming, coercion, or defensive checks.
- You want to collapse messy input into a consistent shape.
- You want to separate “cleaning” from “validating” for clarity.

Normalizers help you build pipelines that are explicit, readable, and safe. They ensure that every value entering a validator or parser is already well‑formed, reducing complexity and eliminating entire classes of bugs.

## Why normalizers matter

Normalizers form the second layer of Jane’s runtime model:

`type guards → normalizers → validators → parsers`

- Type guards tell you *what* a value is.
- Normalizers tell you *what shape* it should be.
- Validators tell you *whether it’s acceptable*.
- Parsers combine all three into a typed result.

Normalizers keep your workflows clean and intentional. They remove ambiguity, reduce branching, and ensure that every step of your pipeline receives predictable input.
