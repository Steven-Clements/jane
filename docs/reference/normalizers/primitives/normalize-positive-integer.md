# normalizePositiveInteger

Normalizes a value into a **positive integer** (one or greater) or returns `null`.

This helper accepts native numbers and string representations of positive integers. It rejects floats, negative values, scientific notation, and any form of coercion. It never throws and never mutates input. Use this when you need a guaranteed positive integer before validation or further processing.

## Signature

```ts
function normalizePositiveInteger(value: unknown): number | null
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to normalize into a positive integer. |

## Returns

One of:

- A positive integer.
- `null`: If the value cannot be interpreted as a positive integer.

## Behavior

- Accepts finite, integer numbers greater or equal to one.
- Accepts digit‑only strings (leading zeros allowed).
- Trims string input before evaluation.
- Rejects:
  - Empty or whitespace‑only strings.
  - Negative numbers.
  - Zero.
  - floats.
  - Scientific notation.
  - Signed strings (+5, -1).
  - Any non‑string, non‑number values.
  - No coercion is performed.

## Examples

```ts
normalizePositiveInteger(5)          // 5
normalizePositiveInteger("42")       // 42
normalizePositiveInteger("0007")     // 7
normalizePositiveInteger(" 12 ")     // 12

normalizePositiveInteger(0)          // null
normalizePositiveInteger(-1)         // null
normalizePositiveInteger(3.14)       // null
normalizePositiveInteger("3.14")     // null
normalizePositiveInteger("1e3")      // null
normalizePositiveInteger("+5")       // null
normalizePositiveInteger("abc")      // null
normalizePositiveInteger(null)       // null
```

## Notes

- Only digit‑only strings are accepted.
- Scientific notation, decimals, and signed values are intentionally rejected to avoid coercion surprises.
- Use `validatePositiveInteger` if you need a `Result<T>` instead of `null`.
