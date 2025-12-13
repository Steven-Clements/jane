# validateString

Validates that a value is a **primitive string**. This validator relies on [isString](../../type-guards/primitives/is-string.md) internally, performing a strict `typeof` check without coercion. Only primitive strings pass; String objects, numbers, booleans, symbols, objects, arrays, `null`, and `undefined` all fail.

This helper never throws and never mutates input. Use it when you need to confirm that a value is a string before further normalization or validation.

## Signature

```ts
function validateString(value: unknown, field: string): ValidationResult<string>
```

## Parameters

| Name | Type | Description |
|---|---|---|
| value | `unknown` | The value to validate. |
| field | `string` | The name of the field being validated, used in error reporting. |

## Returns

`ValidationResult<string>` — One of:

- `{ ok: true, value: string }`: If value is a primitive string.
- `{ ok: false, field: string, message: string }`: if value is not a string.

## Behavior

- Uses [isString](../../type-guards/primitives/is-non-empty-string.md) internally.
- Strings with a length greater than `0` pass, including whitespace or zero-width characters.
- Empty strings and non-string values fail.
- Never throws or mutates input.

## Examples

```ts
validateNonEmptyString("hello", "name")
// { ok: true, value: "hello" }

validateNonEmptyString(" ", "space")
// { ok: true, value: " " }

validateNonEmptyString("\u200B", "zeroWidth")
// { ok: true, value: "\u200B" }

validateNonEmptyString("", "empty")
// { ok: false, field: "empty", message: "String cannot be empty" }

validateNonEmptyString(123, "age")
// { ok: false, field: "age", message: "String cannot be empty" }
```

## Notes

<!-- - Use [validateNonEmptyString](../../validators/validate-non-empty-string.md) when a string of any content is required. -->
- Combine with [normalizeString](../../normalizers/primitives/normalize-string.md) if trimming or other normalization is needed.
- Strictly primitive strings only; `String` objects fail.
