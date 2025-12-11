# isSafeInteger

Checks whether a value is a **safe integer**. A safe integer is a finite integer whose absolute value does not exceed `Number.MAX_SAFE_INTEGER`.

This helper never throws and never mutates input. Use it when you need to confirm that a value is suitable for precise integer arithmetic, indexing, or any domain where JavaScript’s integer precision guarantees matter.

## Signature

```ts
function isSafeInteger(value: unknown): value is number
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. Must be a finite integer with a safe range to return `true`. |

## Returns

A boolean:

- `true` if the value is a finite integer within the safe integer range.
- `false` otherwise.

## Examples

```ts
isSafeInteger(0)                        // true
isSafeInteger(42)                       // true
isSafeInteger(Number.MAX_SAFE_INTEGER)  // true

isSafeInteger(Number.MAX_SAFE_INTEGER + 1) // false
isSafeInteger(1.5)                         // false
isSafeInteger(NaN)                          // false

isSafeInteger("1")                          // false
isSafeInteger(1n)                           // false
```

## Notes

- This helper does not coerce strings or other types into numbers.
- Use `normalizeSafeInteger` if you need coercion or fallback behavior.
- Use `validateSafeInteger` if you need a `Result<T>` instead of a boolean.
- Big integers are intentionally rejected to avoid silent cross‑type numeric behavior.
- Safe integers are essential when you need guaranteed precision in JavaScript.

## Next up

[isString](is-string.md)
