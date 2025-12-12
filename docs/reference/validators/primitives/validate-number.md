# validateNumber

Checks whether a value is a **primitive number**. This helper performs a strict number check using [isNumber](../../type-guards/primitives/is-number.md). It accepts all number primitives, including `NaN`, `Infinity`, and `-Infinity`.

It never throws and never mutates input. Use it when you need to confirm a value is a number before normalization or further validation.

Signature:

```ts
function validateNumber(value: unknown, field: string): ValidationResult<number>
```

## Parameters

| Name | Type | Description |
|---|---|---|
| value | `unknown` | The value to validate. |
| field | `string` | The name of the field being validated, used in error reporting. |

## Returns

`ValidationResult<number>` — One of:

- `{ ok: true, value: number }`: If value is a primitive number.
- `{ ok: false, field: string, message: string }`: If value is not a number.

## Behavior

- Uses [isNumber](../../type-guards/primitives/is-number.md) internally.
- All primitive numbers pass, including `NaN`, `Infinity`, `-Infinity`.
- Non-number values fail.
- Never throws or mutates input.

## Examples

```ts
validateNumber(0, "zero")
// { ok: true, value: 0 }

validateNumber(-123, "negative")
// { ok: true, value: -123 }

validateNumber(NaN, "nan")
// { ok: true, value: NaN }

validateNumber(Infinity, "inf")
// { ok: true, value: Infinity }

validateNumber("123", "string")
// { ok: false, field: "string", message: "Value must be a number" }

validateNumber(new Number(123), "boxed")
// { ok: false, field: "boxed", message: "Value must be a number" }
```

## Notes

- Use `validateNumber` when you require a strict primitive number.
- Combine with [normalizeNumber](../../normalizers/primitives/normalize-number.md) or other normalizers if needed.
- `NaN` and `Infinite` values are allowed. Use additional validators if you need finite numbers only.
