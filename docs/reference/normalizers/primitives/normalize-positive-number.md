# normalizePositiveNumber

Attempts to normalize a value into a positive number.

This helper never throws and never mutates input. Returns `null` if normalization fails.

## Signature

```ts
function normalizePositiveNumber(value: unknown): number | null
```

## Parameters

| Name | Type | Description |
|---|---|---|
| value | `unknown` | The value to normalize. |

## Returns

| Type | Description |
|---|---|---|
| number | `null` | Returns a positive number, or `null` if normalization fails. |

## Examples

```ts
normalizePositiveNumber(0.1);       // → 0.1
normalizePositiveNumber(5);         // → 5
normalizePositiveNumber("3.14");    // → 3.14
normalizePositiveNumber(" 42 ");    // → 42

normalizePositiveNumber(0);         // → null
normalizePositiveNumber(-1);        // → null
normalizePositiveNumber("-3.14");   // → null
normalizePositiveNumber("abc");     // → null
normalizePositiveNumber(NaN);       // → null
normalizePositiveNumber(Infinity);  // → null
normalizePositiveNumber(undefined); // → null
```

## Notes

- Only numbers greater than zero (`0`) are accepted.
- Fractional numbers are allowed.
- Strings are trimmed and parsed; must represent a strictly positive number.
- Zero, negative numbers, `NaN`, `Infinity`, `-Infinity`, and non-numeric types return `null`.
- Use [validatePositiveNumber](../../validators/primitives/validate-positive-number.md) for structured validation.
