# validateNonEmptyString

Checks whether a value is a **non‑empty string**. This helper performs a strict string check using isNonEmptyString and ensures the string has length > 0. Whitespace and zero-width characters count as non-empty.

It never throws and never mutates input. Use it when you need a string with meaningful content before running normalization or further validation.

## Signature

```ts
function validateNonEmptyString(value: unknown, field: string): ValidationResult<string>
```

## Parameters

| Name | Type | Description |
|---|---|---|
| value | `unknown` | The value to validate. |
| field | `string` | The name of the field being validated, used in error reporting. |

## Returns

`ValidationResult<string>` — One of:

- `{ ok: true, value: string }`: If value is a non-empty string.
- `{ ok: false, field: string, message: string }`: If value is empty or not a string.

## Behavior

- Uses [isNonEmptyString](../../type-guards/primitives/is-non-empty-string.md) internally.
- Strings with a length greater than 0 pass, including whitespace or zero-width characters.
- Empty strings and non-string values fail.
- Never throws or mutates input.

## Examples

```ts
validateNonEmptyString("hello", "name")
// { ok: true, value: "hello" }

validateNonEmptyString("   world  ", "greeting")
// { ok: true, value: "   world  " }

validateNonEmptyString("", "empty")
// { ok: false, field: "empty", message: "String cannot be empty" }

validateNonEmptyString("   ", "spaces")
// { ok: false, field: "spaces", message: "String cannot be empty" }

validateNonEmptyString(123, "age")
// { ok: false, field: "age", message: "Value must be a string" }
```

## Notes

- Use [validateNonEmptyString](validate-non-empty-string.md) when a string with meaningful content is required.
- Combine with [normalizeString](../../normalizers/primitives/normalize-string.md) if trimming or other normalization is desired before validation.
