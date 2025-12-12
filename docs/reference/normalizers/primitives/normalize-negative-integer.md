# normalizeNegativeInteger

Attempts to normalize a value into a negative integer.

This helper never throws and never mutates input. Returns `null` if normalization fails.

## Signature

```ts
function normalizeNegativeInteger(value: unknown): number | null
```

## Parameters

| Name | Type | Description |
|---|---|---|
| value | `unknown` | The value to normalize. |

## Returns

Returns a negative integer, or null if normalization fails.

## Examples

```ts
normalizeNegativeInteger(-1);       // → -1
normalizeNegativeInteger(-42);      // → -42
normalizeNegativeInteger("-7");     // → -7
normalizeNegativeInteger("-100");   // → -100

normalizeNegativeInteger(0);        // → null
normalizeNegativeInteger(5);        // → null
normalizeNegativeInteger("0");      // → null
normalizeNegativeInteger("42");     // → null
normalizeNegativeInteger("3.14");   // → null
normalizeNegativeInteger("-3.14");  // → null
normalizeNegativeInteger("abc");    // → null
normalizeNegativeInteger(NaN);      // → null
normalizeNegativeInteger(Infinity); // → null
```

## Notes

- Only integer numbers less than zero (`0`) are accepted.
- Fractional numbers are rejected.
- Strings are trimmed and parsed but must represent a negative integer.
- `NaN`, `Infinity`, `-Infinity`, zero, positive numbers, and non-numeric types return `null`.
- Use [validateNegativeInteger](../../validators/primitives/validate-negative-integer.md) for structured validation (`ValidationResult`).
