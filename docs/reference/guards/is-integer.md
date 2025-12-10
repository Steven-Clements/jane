# isInteger

Checks whether a value is a *finite integer*. This helper never throws and never mutates input. Use it when you need to confirm integer types before running normalization or validation.

## Signature

```ts
function isInteger(value: any): value is number
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `any` | The value to check. This helper performs a strict `typeof` check and only returns `true` for *finite primitive integers*. |

## Returns

A boolean:

- `true` if the value is a finite integer.
- `false` otherwise.

```ts
Examples
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
- Use `normalizeInteger` if you need to convert values into integers.
- Use `validateInteger` if you need a `Result<T>` instead of a boolean.
