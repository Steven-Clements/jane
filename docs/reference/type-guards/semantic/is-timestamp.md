# isTimestamp

Checks whether a value is a **Unix timestamp in milliseconds**. A timestamp is defined as a finite integer number representing milliseconds since the Unix epoch (`1970‑01‑01T00:00:00Z`).

This helper never throws and never mutates input. Use it when you need to confirm timestamp values before running normalization or validation.

## Signature

```ts
function isTimestamp(value: unknown): value is number
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | true |

## Returns

A boolean:

- `true`: If the value is a finite integer timestamp.
- `false`: Otherwise.

## Examples

```ts
isTimestamp(1700000000000)   // true
isTimestamp(0)               // true
isTimestamp(-1000)           // true (pre‑epoch)

isTimestamp(3.14)            // false
isTimestamp("1700000000000") // false
isTimestamp(NaN)             // false
```

## Notes

- This helper does not accept fractional numbers or strings.
- Negative timestamps are valid and represent dates before the Unix epoch.
- Use `normalizeTimestamp` if you need to coerce values into timestamps.
- Use `validateTimestamp` if you need a `Result<T>` instead of a boolean.

## Next up

This is the final topic for semantic type guards. In the next section, we'll cover type guards for protocols.

[Protocols](../protocols/index.md)
