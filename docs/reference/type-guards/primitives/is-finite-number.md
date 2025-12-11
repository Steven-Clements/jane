# isFiniteNumber

Checks whether a value is a **finite primitive number**. A finite number is a number primitive that is not `NaN`, `Infinity`, or `-Infinity`.

This helper never throws and never mutates input. Use it when you need to confirm that a value is suitable for arithmetic, normalization, or any domain where numeric finiteness is required.

## Signature

```ts
function isFiniteNumber(value: unknown): value is number
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. Must be a finite primitive number to return `true`. |

## Returns

A boolean:

- `true`: If the value is a finite primitive number.
- `false`: Otherwise.

## Examples

```ts
isFiniteNumber(0)        // true
isFiniteNumber(3.14)     // true
isFiniteNumber(-100)     // true

isFiniteNumber(NaN)      // false
isFiniteNumber(Infinity) // false

isFiniteNumber("123")    // false
isFiniteNumber(1n)       // false
```

## Notes

- This helper is stricter than [isNumber](is-number.md), which accepts `NaN`, `Infinity`, and `-Infinity`.
- Wrapper objects (for example, `new Number(5)`) are rejected because they are not number primitives.
- Use [isInteger](is-integer.md) if you need to confirm integer values.
- Use `normalizeFiniteNumber` if you need to coerce values into finite numbers.
- Use `validateFiniteNumber` if you need a `Result<T>` instead of a boolean.

## Next up

[isInteger](is-integer.md)
