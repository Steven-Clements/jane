# isBigInteger

Checks whether a value is a **bigint**: A primitive numeric type that represents integers of arbitrary precision.

This helper never throws and never mutates input. Use it when you need to confirm bigint types before running normalization or validation.

## Signature

```ts
function isBigInteger(value: unknown): value is bigint
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. Returns `true` only for bigint primitives. |

## Returns

A boolean:

- `true`: If the value is a bigint.
- `false`: Otherwise.

## Examples

```ts
isBigInteger(10n)                     // true
isBigInteger(999999999999999999n)     // true

isBigInteger(10)                      // false
isBigInteger(3.14)                    // false
isBigInteger(NaN)                     // false
isBigInteger("123")                   // false
```

## Notes

- This helper does not accept number values, even if they are integers.
- Use [isInteger](is-integer.md) or [isSafeInteger](is-safe-integer.md) for number-based integer checks.
- Big integers are always integers; fractional `bigint` values do not exist.
- Use `normalizeBigInteger` if you need to convert values into big integers.
- Use `validateBigInteger` if you need a `Result<T>` instead of a boolean.

## Next up

[isBoolean](is-boolean.md): Checks whether a value is a *boolean*.
