# Type guards

Type guards help you safely branch logic and validate shapes without throwing exceptions. They return simple booleans and never mutate input. Use them when you need to confirm a value’s type before running a normalization or validation step.

Type guards are pure, predictable, and consistent. They make your workflows easier to read and easier to reason about.

## Available type guards

Each type guard has its own reference page with examples and edge cases.

### Strings

- [isString](is-string.md): Checks whether a value is a string.
- [isNonEmptyString](is-non-empty-string.md): Checks for a non‑empty string.

### Numbers

- [isNumber](is-number.md): Checks whether a value is a number.
- [isInteger](is-integer.md): Checks whether a value is an integer.

## When to use type guards

Use type guards when:

- You need to branch logic based on type.
- You want to avoid exceptions.
- You want predictable behavior in pipelines.
- You need to confirm a value’s shape before normalization.
- You want to write defensive code without clutter.

Type guards are the simplest building blocks in Jane. They help you write clear, explicit workflows.
