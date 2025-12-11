# normalizeNonNegativeNumber

Normalizes a value into a **non‑negative finite number** (zero or greater) or returns `null`.

This helper accepts native numbers and string representations of non‑negative numbers. It rejects negative values, non‑finite numbers, scientific notation, and any form of coercion. It never throws and never mutates input. Use this when you need a guaranteed non‑negative number before validation or further processing.

## Signature

```ts
function normalizeNonNegativeNumber(value: unknown): number | null
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to normalize into a non‑negative number. |

## Returns

One of:

- A non‑negative finite number.
- `null`: If the value cannot be interpreted as a non‑negative number.

## Behavior

- Accepts finite numbers greater than or equal to zero.
- Accepts digit‑only or decimal strings (e.g., "3", "3.14", "0007").
- Trims string input before evaluation.
- Rejects:
  - Negative numbers.
  - Non‑finite numbers (Infinity, NaN).
  - Signed strings (+5, -1).
  - Scientific notation ("1e3").
  - Malformed decimals ("3.14.15").
  - Any non‑string, non‑number values.
  - No coercion is performed.

## Examples

```ts
normalizeNonNegativeNumber(0)          // 0
normalizeNonNegativeNumber(3.14)       // 3.14
normalizeNonNegativeNumber("42")       // 42
normalizeNonNegativeNumber("0007")     // 7
normalizeNonNegativeNumber(" 12.5 ")   // 12.5

normalizeNonNegativeNumber(-1)         // null
normalizeNonNegativeNumber("1e3")      // null
normalizeNonNegativeNumber("+5")       // null
normalizeNonNegativeNumber("abc")      // null
normalizeNonNegativeNumber(null)       // null
```

## Notes

- Only plain numeric strings (integer or decimal) are accepted.
- Scientific notation, signed values, and malformed decimals are intentionally rejected.
- Use `validateNonNegativeNumber` if you need a `Result<T>` instead of `null`.
