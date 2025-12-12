# validateSafeInteger

Checks whether a value is a **safe integer**. This helper uses the [isSafeInteger](../../type-guards/primitives/is-safe-integer.md) type guard internally. A safe integer is a finite integer within the IEEE‑754 safe range (`Number.MIN_SAFE_INTEGER` through `Number.MAX_SAFE_INTEGER`).

It never throws and never mutates input. Use it when you need a strict safe integer before normalization or further validation.

## Signature

```ts
function validateSafeInteger(value: unknown, field: string): ValidationResult<number>
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to validate. |
| field | `string` | The name of the field being validated, used in error reporting. |

## Returns

One of:

- `{ ok: true, value: number }`: If value is a safe integer.
- `{ ok: false, field: string, message: string }`: If value is not a safe integer.

## Behavior

- Uses [isSafeInteger](../../type-guards/primitives/is-safe-integer.md) internally.
- Only integers within the IEEE‑754 safe range pass.
- Fractional numbers, `NaN`, `Infinity`, `-Infinity`, and non-numbers fail.
- Integers outside the safe range fail.
- Never throws or mutates input.

## Examples

```ts
validateSafeInteger(0, "zero")
// { ok: true, value: 0 }

validateSafeInteger(123, "count")
// { ok: true, value: 123 }

validateSafeInteger(Number.MAX_SAFE_INTEGER, "max")
// { ok: true, value: 9007199254740991 }

validateSafeInteger(Number.MAX_SAFE_INTEGER + 1, "tooLarge")
// { ok: false, field: "tooLarge", message: "Value must be a safe integer" }

validateSafeInteger(1.5, "float")
// { ok: false, field: "float", message: "Value must be a safe integer" }

validateSafeInteger("123", "string")
// { ok: false, field: "string", message: "Value must be a safe integer" }
```

## Notes

- This validator does not coerce values. Strings like `"5"`, booleans, and boxed numbers all return an error.
- Because it depends on [isSafeInteger](../../type-guards/primitives/is-safe-integer.md), values such as `NaN`, `Infinity`, `-Infinity`, and fractional numbers automatically fail.
- Use this validator when you need a guaranteed safe integer for indexing, counts, pagination, or any context where precision matters.
- The validator never throws and never mutates input. All error reporting goes through structured `ValidationResult` objects.
