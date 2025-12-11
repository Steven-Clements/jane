# Type guards

Type guards help you safely branch logic and validate shapes without throwing exceptions. They return simple booleans, never mutate input, and never coerce values. Use them when you need to confirm a value’s type before running a normalization or validation step.

Type guards in Jane are pure, predictable, and consistent. They make your workflows easier to read and easier to reason about.

## Available type guards

Type guards are grouped by category for clarity and searchability:

- [Primitives](./primitives/index.md)
- [Structural](./structural/index.md)
- [Collections](./collections/index.md)
- [Semantic](./semantic/index.md)
- [Protocols](./protocols/index.md)

Each category contains small, focused helpers with zero side effects.

## When to use type guards

Use type guards when:

- You need to branch logic based on type.
- You want to avoid exceptions and implicit coercion.
- You want predictable behavior in pipelines.
- You need to confirm a value’s shape before normalization.
- You want defensive code without clutter or magic.

Type guards are the simplest building blocks in Jane. They narrow unknown input, keep your workflows explicit, and form the foundation for safe normalization and validation

Type guards are the simplest building blocks in Jane. They help you write clear, explicit workflows.
