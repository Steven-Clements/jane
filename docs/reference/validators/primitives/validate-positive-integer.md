# validatePositiveInteger

Checks whether a value is a **positive integer**. This helper uses the [isPositiveInteger](../../type-guards/primitives/is-positive-integer.md) type guard internally. A positive integer is a finite number, has no fractional component, and is strictly greater than zero.

It never throws and never mutates input. Use it when you need a strict positive integer before normalization or further validation.

## Signature

```ts
function validatePositiveInteger(value: unknown, field: string): ValidationResult<number>
```

## Parameters

| Name | Type | Description |
|---|---|---|
| value | `unknown` | The value to validate. |
| field | `string`| The name of the field being validated, used in error reporting. |

## Returns

`ValidationResult<number>` — One of:

- `{ ok: true, value: number }`: If value is a positive integer.
- `{ ok: false, field: string, message: string }`: If value is zero, negative, non-integer, or not a number.

## Behavior

- Uses isPositiveInteger internally.
- Only integers > 0 pass.
- Zero, negative integers, fractional numbers, NaN, Infinity, -Infinity, and non-numbers fail.
- Never mutates input.
- Never throws.

## Examples

```ts
validatePositiveInteger(1, "one")
// { ok: true, value: 1 }

validatePositiveInteger(123, "hundredTwentyThree")
// { ok: true, value: 123 }

validatePositiveInteger(0, "zero")
// { ok: false, field: "zero", message: "Value must be a positive integer" }

validatePositiveInteger(-1, "negOne")
// { ok: false, field: "negOne", message: "Value must be a positive integer" }

validatePositiveInteger(1.5, "float")
// { ok: false, field: "float", message: "Value must be a positive integer" }

validatePositiveInteger("123", "string")
// { ok: false, field: "string", message: "Value must be a positive integer" }
```

Notes

- This validator does not coerce values. Strings like "5", booleans, and boxed numbers (`new Number(5)`) all return error.
- Because it depends on [isPositiveInteger](../../type-guards/primitives/is-positive-integer.md), values such as `NaN`, `Infinity`, `-Infinity`, and fractional numbers automatically fail the check.
- Zero (`0`) is not considered a positive integer and is rejected by design.
- Suitable for strict validation of counts, sizes, pagination parameters, array indexes, and any context that requires a guaranteed positive whole number.
- The validator never throws and never mutates input. All error reporting goes through structured `ValidationResult` objects.
