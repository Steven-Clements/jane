# Reference

The Reference section documents every helper in Jane. Each page includes a clear description, the function signature, parameter tables, return shapes, examples, and notes. All helpers follow the same predictable structure so you can find what you need quickly.

Use this section when you already understand the concepts and workflows and need precise, implementation‑level details about a specific helper.

## What’s included

Jane’s helpers are organized into several categories. Each category has its own index page and detailed entries for every function.

- **Type guards**: Safe checks for types and shapes.
- **Normalizers**: Pure functions that convert unknown input into predictable forms.
- **Validators**: Boolean or result‑based checks for correctness.
- **Pipelines** — Tools like `pipe()` for composing helpers.

Each category is intentionally small and focused.

## Types

Lightweight utility types that describe the shapes, contracts, and result structures used throughout Jane.

Use these when you need to express normalized forms, validation outcomes, or structural guarantees at the type level without introducing runtime cost.

[Learn more](./types/index.md)

## Type guards

Helpers that check types and shapes without throwing.

Use these when you need safe branching logic or want to narrow unknown input before normalization or validation.

[Learn more](type-guards/index.md)

## Normalizers

Helpers that transform unknown or loosely‑typed input into well‑defined, predictable values.

Use these when you need to coerce external data into safe internal shapes before validation or business logic. Normalizers never throw and never mutate input; they always return a normalized value or a structured failure.

[Learn more](normalizers/index.md)

## Validators

Helpers that check whether a value satisfies a specific contract and return a structured `ValidationResult<T>`.

Use these when you need explicit success/failure reporting, detailed error messages, or when validating nested data structures. Validators never throw and never mutate input, making them ideal for user‑facing or API‑facing validation flows.

[Learn more](validators/index.md)

## How to read this section

Every helper is documented with the same predictable structure:

- A short description.
- The function signature.
- A parameter table.
- The return shape.
- Examples.
- Notes and edge cases.

All entries are self‑contained, deterministic, and free of side effects.

You can read them in any order.
