# isInteger

Checks whether a value is a **finite integer**.

This helper never throws and never mutates input. Use it when you need to confirm integer types before running normalization or validation.

## Signature

```ts
function isInteger(value: unknown): value is number
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. This helper performs a strict `typeof` check and only returns `true` for *finite integers*. |

## Returns

A boolean:

- `true`: If the value is a finite integer.
- `false`: Otherwise.

## Examples

```ts
isInteger(42)          // true
isInteger(0)           // true
isInteger(-10)         // true
isInteger(3.14)        // false
isInteger(NaN)         // false
isInteger(Infinity)    // false
isInteger("123")       // false
isInteger(null)        // false
```

## Notes

- This helper uses `Number.isInteger` internally, which rejects `NaN`, `Infinity`, and `-Infinity`.
- BigInt values are not considered integers by this helper. Use [isBigInteger](is-big-integer.md) for BigInt checks.
- Use `normalizeInteger` if you need to convert values into integers.
- Use `validateInteger` if you need a `Result<T>` instead of a boolean.

## Next up

[isNonEmptyString](is-non-empty-string.md)
