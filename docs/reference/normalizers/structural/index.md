# Overview

Structural normalizers convert unknown or loosely‑typed input into predictable structural shapes such as arrays, tuples, records, and plain objects. They never throw exceptions, never mutate input, and never perform hidden coercion. Each helper returns either a clean, well‑formed structure or null when normalization is not possible.

Structural normalizers sit one level above primitive normalizers. They ensure that collections, containers, and object‑like values have the correct shape before deeper validation or parsing occurs. These helpers are essential when working with user‑provided data, configuration objects, or any input that must conform to a specific structural contract.

- [normalizePlainObject](normalize-plain-object.md): Accepts only objects with `Object.prototype` or `null` prototypes.
- [normalizeRecord](normalize-record.md): Normalizes key/value dictionaries using a value normalizer.

Each helper is pure, predictable, and designed to compose cleanly with primitive normalizers, validators, and schema‑level utilities.

## When to use structural normalizers

Use structural normalizers when:

- You need to ensure that input has the correct container shape before validating its contents.
- You want to reject exotic or unsafe objects (e.g., class instances, Maps, Sets, Dates).
- You want to enforce predictable iteration or key/value semantics.
- You want to separate “shape checking” from “value checking” for clarity.
- You want to build higher‑level validators or schema definitions on top of safe, canonical structures.

Structural normalizers form the backbone of Jane’s data‑modeling layer. They guarantee that every downstream step receives well‑formed containers, eliminating ambiguity and making complex validation pipelines easier to reason about and maintain.
