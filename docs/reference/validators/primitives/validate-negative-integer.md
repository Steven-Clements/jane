# validateNegativeInteger

Validates a value as a negative integer (less than zero).

This helper never throws and never mutates input. Returns a structured `ValidationResult` for composable validation pipelines.

## Signature

```ts
function validateNegativeInteger(
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

- `{ ok: true; value: number }`:  If valid.
- `{ ok: false; field: string; message: string }`: If invalid.

## Examples

```ts
validateNegativeInteger(-1, 'count');    // → { ok: true, value: -1 }
validateNegativeInteger(-42, 'total');  // → { ok: true, value: -42 }
validateNegativeInteger(0, 'zero');     // → { ok: false, field: 'zero', message: 'Value must be a negative integer' }
validateNegativeInteger(3, 'positive'); // → { ok: false, field: 'positive', message: 'Value must be a negative integer' }
validateNegativeInteger(-1.5, 'fraction'); // → { ok: false, field: 'fraction', message: 'Value must be a negative integer' }
validateNegativeInteger("5", 'stringVal'); // → { ok: false, field: 'stringVal', message: 'Value must be a negative integer' }
```

## Notes

- Only integer number primitives less than zero are valid.
- Fractional numbers, zero, positive numbers, strings, `NaN`, `Infinity`, and non-numeric types fail.

Use [normalizeNegativeInteger](../../normalizers/primitives/normalize-negative-integer.md) if input may be a string before validation.
