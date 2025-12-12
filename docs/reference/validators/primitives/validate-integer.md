# validateInteger

Checks whether a value is a **finite integer**. This helper uses the [isInteger](../../type-guards/primitives/is-integer.md) type guard, which rejects `NaN`, `Infinity`, `-Infinity`, and non-number types.

It never throws and never mutates input. Use it when you need a strict integer value before normalization or further validation.

## Signature

```ts
function validateInteger(value: unknown, field: string): ValidationResult<number>
```

## Parameters

| Name | Type | Description |
|---|---|---|
| value | `unknown` | The value to validate. |
| field | `string` | The name of the field being validated, used in error reporting. |

## Returns

`ValidationResult<number>` — One of:

- `{ ok: true, value: number }`: If value is a finite integer.
- `{ ok: false, field: string, message: string }`: If value is not a finite integer.

## Behavior

- Uses [isInteger](../../type-guards/primitives/is-integer.md) internally.
- Only finite integers pass.
- Floats, `NaN`, `Infinity`, `-Infinity`, and non-number values fail.
- Never throws or mutates input.

## Examples

```ts
validateInteger(0, "zero")
// { ok: true, value: 0 }

validateInteger(123, "positive")
// { ok: true, value: 123 }

validateInteger(-456, "negative")
// { ok: true, value: -456 }

validateInteger(1.23, "float")
// { ok: false, field: "float", message: "Value must be an integer" }

validateInteger(NaN, "nan")
// { ok: false, field: "nan", message: "Value must be an integer" }

validateInteger(Infinity, "inf")
// { ok: false, field: "inf", message: "Value must be an integer" }

validateInteger("123", "string")
// { ok: false, field: "string", message: "Value must be an integer" }
```

## Notes

- Use `validateInteger` when you require strict finite integers.
- Combine with [normalizeInteger](../../normalizers/primitives/normalize-integer.md) if parsing from strings or other types.
- Fully type-guard-backed, zero-side-effect, predictable behavior.
