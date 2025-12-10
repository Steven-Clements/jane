# isBigInteger

Checks whether a value is a *bigint*. A bigint is a primitive numeric type that represents integers of arbitrary precision.

This helper never throws and never mutates input. Use it when you need to confirm bigint types before running normalization or validation.

## Signature

```ts
function isBigInteger(value: unknown): value is bigint
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | unknown | The value to check. This helper returns true only for bigint primitives. |

## Returns

A boolean:

- `true` if the value is a bigint.
- `false` otherwise.

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

- This helper does not accept number values, even if they are integers. Use `isInteger` or `isSafeInteger` for number-based integer checks.
- Bigints are always integers; fractional bigint values do not exist.
- Use `normalizeBigInteger` if you need to convert values into bigints.
- Use `validateBigInteger` if you need a `Result<T>` instead of a boolean.
