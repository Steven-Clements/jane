# validateTimestamp

Checks whether a value is a **Unix timestamp in milliseconds**. This helper uses the [isTimestamp](../../type-guards/semantic/is-timestamp.md) type guard internally.

A timestamp is defined as a finite integer representing milliseconds since the Unix epoch (`1970-01-01T00:00:00Z`). Negative values are allowed because they represent valid dates before the epoch.

It never throws and never mutates input. Use it when you need a strict numeric timestamp before date construction or temporal calculations.

## Signature

```ts
function validateTimestamp(
  value: unknown,
  field: string
): ValidationResult<number>
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to validate. |
| field | `string` | The name of the field being validated, used in error reporting. |

## Returns

One of:

- `{ ok: true, value: number }`: If the value is a finite integer timestamp.
- `{ ok: false, field: string, message: string }`: If the value is not a valid Unix timestamp in milliseconds.

## Behavior

- Uses [isTimestamp](../../type-guards/semantic/is-timestamp.md) internally.
- Accepts finite integers only.
- Accepts negative timestamps (dates before the Unix epoch).
- Rejects fractional numbers.
- Rejects `NaN`, `Infinity`, and `-Infinity`.
- Rejects non-number values.
- Never throws or mutates input.

## Examples

```ts
validateTimestamp(1700000000000, "createdAt")
// { ok: true, value: 1700000000000 }

validateTimestamp(0, "epoch")
// { ok: true, value: 0 }

validateTimestamp(-1000, "past")
// { ok: true, value: -1000 }

validateTimestamp(1.5, "fraction")
// { ok: false, field: "fraction", message: "Value must be a Unix timestamp in milliseconds" }

validateTimestamp("1700000000000", "string")
// { ok: false, field: "string", message: "Value must be a Unix timestamp in milliseconds" }
```

## Notes

- This validator performs no coercion. Strings, booleans, and boxed numbers are rejected even if they could be converted to valid timestamps.
- The validator intentionally does not impose bounds on the timestamp value. Extremely large or small integers are allowed as long as they are finite integers.
- Use this validator before constructing `Date` objects to ensure predictable behavior.
- Suitable for validating event times, log timestamps, database fields, and API payloads.
- The validator never throws and never mutates input. All error reporting is handled through structured `ValidationResult` objects.
