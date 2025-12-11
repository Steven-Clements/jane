# isPositiveInteger

Checks whether a value is a **positive integer**. A positive integer is defined as a finite number with no fractional component and greater than zero.

This helper never throws and never mutates input. Use it when you need to confirm that a value is suitable for count‑based operations, array lengths, pagination, or any domain where only strictly positive whole numbers are valid.

## Signature

```ts
function isPositiveInteger(value: unknown): value is number
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. Must be a finite integer greater than zero to return `true`. |

## Returns

A boolean:

- `true`: If the value is a finite integer greater than zero.
- `false`: Otherwise.

## Examples

```ts
isPositiveInteger(1)        // true
isPositiveInteger(42)       // true

isPositiveInteger(0)        // false
isPositiveInteger(-1)       // false
isPositiveInteger(1.5)      // false
isPositiveInteger(NaN)      // false
isPositiveInteger(Infinity) // false

isPositiveInteger("1")      // false
isPositiveInteger(1n)       // false
```

## Notes

- This helper does *not* coerce strings or other types into numbers.
- Use `normalizePositiveInteger` if you need coercion or fallback behavior.
- Use `validatePositiveInteger` if you need a `Result<T>` instead of a boolean.
- Big integers are intentionally rejected to avoid silent cross‑type numeric behavior.

## Next up

[isSafeInteger](is-finite-number.md)
