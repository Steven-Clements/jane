# normalizeNonNegativeInteger

Attempts to normalize a value into a non-negative integer.

This helper never throws and never mutates input. Returns `null` if normalization fails.

## Signature

```ts
function normalizeNonNegativeInteger(value: unknown): number | null
```

## Parameters

| Name | Type | Description |
|---|---|---|
| value | `unknown` | The value to normalize. |

## Returns

Returns a non-negative integer, or `null` if normalization fails.

## Examples

```ts
normalizeNonNegativeInteger(0);       // → 0
normalizeNonNegativeInteger(5);       // → 5
normalizeNonNegativeInteger("42");    // → 42
normalizeNonNegativeInteger(" 7 ");   // → 7

normalizeNonNegativeInteger(-1);      // → null
normalizeNonNegativeInteger(3.14);    // → null
normalizeNonNegativeInteger("3.14");  // → null
normalizeNonNegativeInteger("abc");   // → null
normalizeNonNegativeInteger(NaN);     // → null
normalizeNonNegativeInteger(Infinity);// → null
normalizeNonNegativeInteger(undefined);// → null
```

## Notes

- Only integer numbers greater than or equal to 0 are accepted.
- Fractional numbers are rejected.
- Strings are trimmed and parsed, but must represent a non-negative integer.
- `NaN`, `Infinity`, `-Infinity`, negative numbers, and non-numeric types return `null`.
- Use [validateNonNegativeInteger](../../validators/primitives/validate-non-negative-integer.md) for structured validation.
