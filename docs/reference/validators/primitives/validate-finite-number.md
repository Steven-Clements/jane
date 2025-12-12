# validateFiniteNumber

Checks whether a value is a **finite number**. This helper uses the [isFiniteNumber](../../type-guards/primitives/is-finite-number.md) type guard internally. A finite number is any JavaScript number that is not `NaN`, `Infinity`, or `-Infinity`.

It never throws and never mutates input. Use it when you need a strict finite number before normalization or further validation.

## Signature

```ts
function validateFiniteNumber(value: unknown, field: string): ValidationResult<number>
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to validate. |
| field | `string` | The name of the field being validated, used in error reporting. |

## Returns

One of:

- `{ ok: true, value: number }`: If value is a finite number.
- `{ ok: false, field: string, message: string }`: If value is not a finite number.

## Behavior

- Uses [isFiniteNumber](../../type-guards/primitives/is-finite-number.md) internally.
- Accepts integers and fractional numbers.
- Rejects `NaN`, `Infinity`, and `-Infinity`.
- Rejects non-number types.
- Never throws or mutates input.

## Examples

```ts
validateFiniteNumber(123, "count")
// { ok: true, value: 123 }

validateFiniteNumber(1.5, "float")
// { ok: true, value: 1.5 }

validateFiniteNumber(NaN, "notANumber")
// { ok: false, field: "notANumber", message: "Value must be a finite number" }

validateFiniteNumber(Infinity, "inf")
// { ok: false, field: "inf", message: "Value must be a finite number" }

validateFiniteNumber("123", "string")
// { ok: false, field: "string", message: "Value must be a finite number" }
```

## Notes

- This validator does not coerce values. Strings like `"5"` and booleans return an error.
- Because it depends on [isFiniteNumber](../../type-guards/primitives/is-finite-number.md), values such as `NaN`, `Infinity`, and `-Infinity` automatically fail.
- Suitable for validating numeric inputs where fractional values are allowed but must be real, finite numbers.
- The validator never throws and never mutates input. All error reporting goes through structured `ValidationResult` objects.
