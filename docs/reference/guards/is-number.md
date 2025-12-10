# isNumber

Checks whether a value is a *finite primitive number*. This helper never throws and never mutates input. Use it when you need to confirm numeric types before running normalization or validation.

## Signature

```ts
function isNumber(value: any): value is number
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `any` | The value to check. This helper performs a strict `typeof` check and only returns `true` for *finite primitive integers*. |

## Returns

A boolean:

- `true` if the value is a finite primitive number
- `false` otherwise

## Examples

```ts
isNumber(42)          // true
isNumber(0)           // true
isNumber(-3.14)       // true
isNumber(NaN)         // false
isNumber(Infinity)    // false
isNumber("123")       // false
isNumber(null)        // false
isNumber(undefined)   // false
```

## Notes

- This helper rejects `NaN`, `Infinity`, and `-Infinity` because they are not meaningful numeric values.
- Use `isInteger` if you need to confirm integer values.
- Use `normalizeNumber` if you need to convert values into numbers.
- Use `validateNumber` if you need a `Result<T>` instead of a boolean.
