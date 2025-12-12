# isPositiveNumber

Checks whether a value is a **positive number**.

This helper never throws and never mutates input. Returns `true` only if the value is a primitive, finite number whose value is strictly greater than zero. `NaN`, `Infinity`, `-Infinity` are rejected.

Fractional values are allowed. Strings, objects, arrays, booleans, and boxed numbers are rejected.

## Signature

```ts
function isPositiveNumber(value: unknown): value is number
```

## Parameters

| Name | Type | Description |
|---|---|---|
| value | `unknown` | The value to check. Must be a finite number greater than zero. |

## Returns

Returns `true` if the value is a positive number, otherwise `false`.

## Examples

```ts
isPositiveNumber(0);       // → false
isPositiveNumber(1);       // → true
isPositiveNumber(3.14);    // → true
isPositiveNumber(-5);      // → false
isPositiveNumber("5");     // → false
isPositiveNumber(Infinity);// → false
isPositiveNumber(NaN);     // → false
```

## Notes

- Zero is not considered positive.
- Accepts fractional numbers (greater than `0`).
- Only number primitives are accepted; boxed numbers (`new Number(5)`) are rejected.
- Never throws. Always returns a boolean.
- Use `validatePositiveNumber` if you need a structured `ValidationResult`.
