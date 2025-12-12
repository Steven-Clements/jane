# validatePositiveNumber

Validates a value as a positive number (greater than zero).

This helper never throws and never mutates input. Returns a structured `ValidationResult` for composable validation pipelines.

## Signature

```ts
function validatePositiveNumber(
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
validatePositiveNumber(0.1, 'rate');      // → { ok: true, value: 0.1 }
validatePositiveNumber(42, 'count');      // → { ok: true, value: 42 }
validatePositiveNumber(-1, 'index');      // → { ok: false, field: 'index', message: 'Value must be a positive number' }
validatePositiveNumber(0, 'zero');        // → { ok: false, field: 'zero', message: 'Value must be a positive number' }
validatePositiveNumber("5", 'stringVal'); // → { ok: false, field: 'stringVal', message: 'Value must be a positive number' }
```

## Notes

- Only number primitives greater than zero are valid.
- Fractional numbers are allowed.
- Zero, negative numbers, strings, `NaN`, `Infinity`, and non-numeric types fail.
- Use `normalizePositiveNumber` if input may be a string before validation.
