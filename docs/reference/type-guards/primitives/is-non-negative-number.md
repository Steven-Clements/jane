# isNonNegativeNumber

Checks whether a value is a **non‑negative number**. A non‑negative number is defined as a finite number greater than or equal to zero. Fractional values are allowed.

This helper never throws and never mutates input. Use it when you need to confirm that a value is suitable for ranges, durations, sizes, or any domain where zero or positive numeric values are valid.

## Signature

```ts
function isNonNegativeNumber(value: unknown): value is number
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. Must be a finite number greater than or equal to zero to return `true`. |

## Returns

A boolean:

- `true`: If the value is a finite number greater than or equal to zero.
- `false`: Otherwise.

## Examples

```ts
isNonNegativeNumber(0)        // true
isNonNegativeNumber(3.14)     // true
isNonNegativeNumber(100)      // true

isNonNegativeNumber(-1)       // false
isNonNegativeNumber(NaN)      // false
isNonNegativeNumber(Infinity) // false

isNonNegativeNumber("0")      // false
isNonNegativeNumber(0n)       // false
```

## Notes

- This helper does *not* coerce strings or other types into numbers.
- Use `normalizeNonNegativeNumber` if you need coercion or fallback behavior.
- Use `validateNonNegativeNumber` if you need a `Result<T>` instead of a boolean.
- Big integers are intentionally rejected to avoid silent cross‑type numeric behavior.

## Next up

[isNullOrUndefined](is-null-or-undefined.md)
