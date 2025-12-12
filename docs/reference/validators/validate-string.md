# validateString

Validates that a value is a `string`. This helper wraps `normalizeString` and returns a structured validation result instead of `null`.

## Signature

```ts
function validateString(
    value: unknown
): ValidationResult<string>
```

## Behavior

- Delegates to `normalizeString`.
- Returns `{ ok: true, value }` when the value is a valid string.
- Returns `{ ok: false, error }` when the value is not a string.
- Never throws.
- Never mutates input.
- Does not attempt to coerce values into strings.

## Examples

```ts
validateString("hello")
// → { ok: true, value: "hello" }
```

```ts
validateString(123)
// → { ok: false, error: { kind: "invalid_string", message: "...", input: 123 } }
```

## Notes

- Use this when you need structured diagnostics instead of a nullable return.
- Composes naturally with higher‑level validators and schema validators.
- Error objects include the original input for debugging and provenance.
