# validateDate

Checks whether a value is a valid **Date instance**. This helper uses [isDate](../../type-guards/semantic/is-date.md) internally.

A valid `Date` is an object created using `new Date(...)` whose internal timestamp is finite. Invalid Date objects (`new Date("invalid")`) are rejected.

This helper never throws and never mutates input.

## Signature

```ts
function validateDate(value: unknown, field: string): ValidationResult<Date>
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to validate. |
| field | `string` | The name of the field being validated, used in error reporting. |

## Returns

One of:

- `{ ok: true, value: Date }`: If the value is a valid `Date` instance.
- `{ ok: false, field: string, message: string }`: If the value is not a valid `Date` instance.

## Behavior

- Accepts only Date objects.
- Rejects invalid Dates (date.getTime() is NaN).
- Performs no coercion.
- Never throws or mutates input.

## Examples

```ts
validateDate(new Date("2025-12-12"), "date")
// { ok: true, value: 2025-12-12T00:00:00.000Z }

validateDate(new Date("invalid"), "date")
// { ok: false, field: "date", message: "Value must be a valid Date" }

validateDate("2025-12-12", "date")
// { ok: false, field: "date", message: "Value must be a valid Date" }
```

## Notes

- TypeScript strict mode is satisfied with explicit type casts inside the validator.
- Strings, numbers, and other primitives are not coerced.
- Suitable for API input validation, configuration, and internal data integrity checks.
- All error reporting goes through `ValidationResult`.
