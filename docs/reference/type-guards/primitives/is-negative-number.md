# isNegativeNumber

Checks whether a value is a **negative number**.

This helper never throws and never mutates input. Returns `true` only if the value is a finite number primitive whose value is strictly less than zero.

Fractional values are allowed. Strings, objects, arrays, booleans, and boxed numbers are rejected.

Signature

```ts
function isNegativeNumber(value: unknown): value is number
```

## Parameters

| Name | Type | Description |
|---|---|---|
| value | `unknown` | The value to check. Must be a finite number less than zero (`0`). |

Returns `true` if the value is a negative number, otherwise `false`.

## Examples

```ts
isNegativeNumber(-1);       // → true
isNegativeNumber(-3.14);    // → true
isNegativeNumber(0);        // → false
isNegativeNumber(5);        // → false
isNegativeNumber("5");      // → false
isNegativeNumber(NaN);      // → false
isNegativeNumber(-Infinity);// → false
```

## Notes

- Zero is not considered negative.
- Fractional numbers less than zero are allowed.
- Only number primitives are accepted; boxed numbers (`new Number(-5)`) are rejected.
- Never throws. Always returns a boolean.
- Use [validateNegativeNumber](../../validators/primitives/validate-negative-number.md) if you need a structured `ValidationResult`.
