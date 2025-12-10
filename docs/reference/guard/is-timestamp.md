# isTimestamp

Checks whether a value is a *valid numeric timestamp*. A timestamp is defined as a finite number representing milliseconds since the Unix epoch. This helper never throws and never mutates input. It performs a strict type check and does not coerce strings or other values into numbers.

## Signature

```ts
function isTimestamp(value: unknown): value is number
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. Must be a finite number representing a valid millisecond timestamp to return `true`. |

## Returns

A boolean:

- `true` if the value is a finite number and not `NaN`.
- `false` otherwise.

Examples

```ts
isTimestamp(Date.now())        // true
isTimestamp(1700000000000)     // true

isTimestamp("1700000000000")   // false
isTimestamp(NaN)               // false
isTimestamp(Infinity)          // false
isTimestamp(null)              // false
isTimestamp({})                // false
```

## Notes

- This helper does not validate ranges (e.g., future or past limits).
- This helper does not accept strings, even numeric ones.
- Use `normalizeTimestamp` if you need to coerce values into timestamps.
- Use `validateTimestamp` if you need a `Result<T>` instead of a boolean.
