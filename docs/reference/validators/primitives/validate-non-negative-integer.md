# validateNonNegativeInteger

Validates a value as a non-negative integer (zero or greater).

This helper never throws and never mutates input. Returns a structured `ValidationResult` for composable validation pipelines.

## Signature

```ts
function validateNonNegativeInteger(
    value: unknown,
    field: string
): ValidationResult<number>
```

## Parameters

| Name | Type | Description |
|---|---|---|
| value | `unknown` | The value to validate. |
| field | `string` | The field name for error reporting. |

## Returns

- `{ ok: true; value: number }`: If valid.
- `{ ok: false; field: string; message: string }`: If invalid.

## Examples

```ts
validateNonNegativeInteger(0, 'age');       // → { ok: true, value: 0 }
validateNonNegativeInteger(42, 'count');    // → { ok: true, value: 42 }
validateNonNegativeInteger(-1, 'index');    // → { ok: false, field: 'index', message: 'Value must be a non-negative integer' }
validateNonNegativeInteger(3.14, 'pages');  // → { ok: false, field: 'pages', message: 'Value must be a non-negative integer' }
validateNonNegativeInteger("5", 'total');   // → { ok: false, field: 'total', message: 'Value must be a non-negative integer' }
```

## Notes

Only integer numbers greater than or equal to zero (`0`) are valid.

Fractional numbers, negative numbers, strings, `NaN`, `Infinity`, `-Infinity` and non-numeric types fail.

Use [normalizeNonNegativeInteger](../../normalizers/primitives/normalize-non-negative-integer.md) before validation if input may be a string.
