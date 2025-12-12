# Validators

Validators ensure that a value meets specific business rules, structural requirements, or type constraints. Unlike simple boolean type guards, they return a structured `ValidationResult<T>` object, indicating success or failure along with contextual error information.

They never throw exceptions and never mutate the input value. A validator is the final gate check for acceptable input.

Validators in Jane are pure, predictable, and side‑effect‑free. They provide strong guarantees about the acceptability of a value before it is processed, parsed, or used in business logic.

## Available Validators

Validators are grouped by the kind of value they check for clarity and discoverability:

- [Primitives](primitives/index.md): Check numeric range, length, negativity, and basic type constraints on primitive values.
- [Structural](structural/index.md): Validate the shape and internal consistency of objects, records, and tuples.
- [Collections](collections/index.md): Validate the size, content, and type uniformity of arrays, sets, maps, and iterable structures.
- [Semantic](semantic/index.md): Validate values with meaning (e.g., date formats, email addresses, URL structure, and so on).

Each validator is small, focused, and designed to be combined with others for complex rulesets.

## When to use Validators

Use validators when:

- You need to enforce specific business constraints on user or external input (for example, age `$\ge 18$`, string length `$\le 255$`).
- You want to confirm that a value is acceptable *after* it has been normalized.
- **You need a structured result** that includes the validated value on success or a descriptive error message and field name on failure.
- You want to build clear, explicit validation layers in your application.

Validators help you build resilient systems by ensuring that only known, acceptable data flows into your core logic. They provide an explicit contract for what your system is prepared to handle.

## Why Validators Matter

Validators form the third layer of Jane’s runtime model:

`type guards → normalizers → validators → parsers`

- Type guards tell you *what* a value is (for example, a string).
- Normalizers tell you *what shape* it should be (such as a trimmed, non-empty string).
- Validators return a `ValidationResult<T>` which tells you *whether it’s acceptable* and provides the clean, typed value `T` upon success.
- Parsers combine all three into a typed result.

Validators are the core mechanism for enforcing data integrity. They remove the need for scattered, defensive checks within your application logic, making your codebase more readable, maintainable, and robust.
