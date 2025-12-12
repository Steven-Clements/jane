# normalizeNegativeNumber

Attempts to normalize a value into a negative number.

This helper never throws and never mutates input. Returns `null` if normalization fails.

## Signature

```ts
function normalizeNegativeNumber(value: unknown): number | null
```

## Parameters

| Name | Type | Description |
|---|---|---|
| value | `unknown` | The value to normalize. |

## Returns

Returns a negative number, or `null` if normalization fails.

## Examples

```ts
normalizeNegativeNumber(-0.1);       // → -0.1
normalizeNegativeNumber(-5);         // → -5
normalizeNegativeNumber("-3.14");    // → -3.14
normalizeNegativeNumber(" -42 ");    // → -42

normalizeNegativeNumber(0);          // → null
normalizeNegativeNumber(5);          // → null
normalizeNegativeNumber("0");        // → null
normalizeNegativeNumber("42");       // → null
normalizeNegativeNumber("abc");      // → null
normalizeNegativeNumber(NaN);        // → null
normalizeNegativeNumber(Infinity);   // → null
normalizeNegativeNumber(undefined);  // → null
```

## Notes

- Only numbers less than zero (`0`) are accepted.
- Fractional numbers are allowed.
- Strings are trimmed and parsed; must represent a strictly negative number.
- Zero, positive numbers, `NaN`, `Infinity`, `-Infinity`, and non-numeric types return `null`.
- Use [validateNegativeNumber](../../validators/primitives/validate-negative-number.md) for structured validation.
