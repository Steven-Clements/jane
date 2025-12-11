# normalizeSafeInteger

Normalizes a value into a **safe integer** (within JavaScript’s `Number.MIN_SAFE_INTEGER` to `Number.MAX_SAFE_INTEGER` range) or returns `null`.

This helper accepts native numbers and string representations of integers. It rejects floats, unsafe integers, scientific notation, signed strings with a plus sign, and any form of coercion. It never throws and never mutates input. Use this when you need a guaranteed safe integer before validation or further processing.

## Signature

```ts
function normalizeSafeInteger(value: unknown): number | null
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to normalize into a safe integer. |

## Returns

One of:

- A safe integer.
- `null`: If the value cannot be interpreted as a safe integer.

## Behavior

- Accepts finite, safe integers.
- Accepts digit‑only strings with an optional leading hyphen (`-`).
- Trims string input before evaluation.
- Rejects:
  - Unsafe integers.
  - Floats.
  - Non‑finite numbers (`Infinity`, `NaN`).
  - Scientific notation ("1e3").
  - Signed strings with a plus sign (`+`).
  - Malformed integers ("--1", "3.14").
  - Any non‑string, non‑number values.
  - No coercion is performed.

## Examples

```ts
normalizeSafeInteger(0)               // 0
normalizeSafeInteger(42)              // 42
normalizeSafeInteger(-7)              // -7
normalizeSafeInteger("0007")          // 7
normalizeSafeInteger(" -12 ")         // -12

normalizeSafeInteger(3.14)            // null
normalizeSafeInteger("3.14")          // null
normalizeSafeInteger("1e3")           // null
normalizeSafeInteger("+5")            // null
normalizeSafeInteger(Number.MAX_SAFE_INTEGER + 1) // null
normalizeSafeInteger(null)            // null
```

## Notes

- Only plain integer strings (optionally negative) are accepted.
- Scientific notation, decimals, and signed values with a plus sign (`+`) are intentionally rejected.
- Use `validateSafeInteger` if you need a `Result<T>` instead of `null`.
