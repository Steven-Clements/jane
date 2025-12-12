# validateNegativeNumber

Validates a value as a negative number (less than zero).

This helper never throws and never mutates input. Returns a structured `ValidationResult` for composable validation pipelines.

## Signature

```ts
function validateNegativeNumber(
    value: unknown,
    field: string
): ValidationResult<number>
```

## Parameters

| Name | Type | Description |
|---|---|---|
| value | `unknown` | The value to validate. |
| field | `string`  | The field name for error reporting. |

## Returns

- `{ ok: true; value: number }`: If valid
- `{ ok: false; field: string; message: string }`: If invalid.

## Examples

```ts
validateNegativeNumber(-0.1, 'rate');     // → { ok: true, value: -0.1 }
validateNegativeNumber(-42, 'count');     // → { ok: true, value: -42 }
validateNegativeNumber(0, 'zero');        // → { ok: false, field: 'zero', message: 'Value must be a negative number' }
validateNegativeNumber(1, 'positive');    // → { ok: false, field: 'positive', message: 'Value must be a negative number' }
validateNegativeNumber("5", 'stringVal'); // → { ok: false, field: 'stringVal', message: 'Value must be a negative number' }
```

## Notes

- Only number primitives less than zero are valid.
- Fractional numbers are allowed.
- Zero, positive numbers, strings, `NaN`, `Infinity`, and non-numeric types fail.
- Use [normalizeNegativeNumber](../../normalizers/primitives/normalize-negative-number.md) if input may be a string before validation.
