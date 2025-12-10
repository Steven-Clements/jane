# isNumber

Checks whether a value is a primitive number. This helper performs a strict typeof check and does not enforce finiteness.

It accepts `NaN`, `Infinity`, and `-Infinity` because they are still valid number primitives in JavaScript. This helper never throws and never mutates input.

## Signature

```ts
function isNumber(value: unknown): value is number
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. This helper returns true only for primitive numbers. |

## Returns

A boolean:

- `true` if the value is a primitive number.
- `false` otherwise.

## Examples

```ts
isNumber(42)          // true
isNumber(0)           // true
isNumber(-3.14)       // true
isNumber(NaN)         // true
isNumber(Infinity)    // true

isNumber("123")       // false
isNumber(null)        // false
isNumber(1n)          // false
isNumber(new Number(5)) // false
```

## Notes

- This helper does not check for finiteness. Use `isFiniteNumber` if you need to reject `NaN`, `Infinity`, and `-Infinity`.
- Use `isInteger` if you need to confirm integer values.
- Use `normalizeNumber` if you need to convert values into numbers.
- Use `validateNumber` if you need a `Result<T>` instead of a boolean.
