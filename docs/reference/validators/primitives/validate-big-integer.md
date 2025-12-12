# validateBigInteger

Checks whether a value is a **bigint**. This helper uses the [isBigInteger](../../type-guards/primitives/is-big-integer.md) type guard internally. A bigint is a primitive numeric type used for representing integers of arbitrary size.

It never throws and never mutates input. Use it when you need a strict bigint before normalization or further validation.

## Signature

```ts
function validateBigInteger(value: unknown, field: string): ValidationResult<bigint>
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to validate. |
| field | `string` | The name of the field being validated, used in error reporting. |

## Returns

One of:

- `{ ok: true, value: bigint }`: If value is a bigint.
- `{ ok: false, field: string, message: string }`: If value is not a bigint.

## Behavior

- Uses [isBigInteger](../../type-guards/primitives/is-big-integer.md) internally.
- Only bigint primitives pass.
- Numbers, strings, booleans, objects, and arrays fail.
- Never throws or mutates input.

## Examples

```ts
validateBigInteger(1n, "one")
// { ok: true, value: 1n }

validateBigInteger(12345678901234567890n, "large")
// { ok: true, value: 12345678901234567890n }

validateBigInteger(1, "number")
// { ok: false, field: "number", message: "Value must be a bigint" }

validateBigInteger("1", "string")
// { ok: false, field: "string", message: "Value must be a bigint" }
```

## Notes

- This validator does not coerce values. `"5"` and 5 both fail.
- Because it depends on [isBigInteger](../../type-guards/primitives/is-big-integer.md), boxed bigints (`Object(1n)`) also fail.
- Suitable for strict validation of IDs, counters, or domains where arbitrary‑precision integers are required.
- The validator never throws and never mutates input. All error reporting goes through structured `ValidationResult` objects.
