# normalizeFiniteNumber

Normalizes a value into a **finite JavaScript number** or returns `null`.

This helper accepts native numbers and string representations of finite numbers. It rejects non‑finite values, scientific notation, malformed decimals, and any form of coercion. It never throws and never mutates input. Use this when you need a guaranteed finite number before validation or further processing.

## Signature

```ts
function normalizeFiniteNumber(value: unknown): number | null
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to normalize into a finite number. |

Returns

One of:

- A finite number.
- `null`: If the value cannot be interpreted as a finite number.

## Behavior

- Accepts finite numbers.
- Accepts digit‑only or decimal strings with an optional leading hyphen (`-`).
- Trims string input before evaluation.
- Rejects:
  - `Infinity`, `-Infinity`, `NaN`
  - Scientific notation ("1e3")
  - Signed strings with plus signs ("+")
  - Malformed decimals ("3.14.15")
  - Any non‑string, non‑number values
  - No coercion is performed.

## Examples

```ts
normalizeFiniteNumber(3.14)         // 3.14
normalizeFiniteNumber("42")         // 42
normalizeFiniteNumber("0007")       // 7
normalizeFiniteNumber(" -12.5 ")    // -12.5

normalizeFiniteNumber(Infinity)     // null
normalizeFiniteNumber("1e3")        // null
normalizeFiniteNumber("+5")         // null
normalizeFiniteNumber("abc")        // null
normalizeFiniteNumber(null)         // null
```

## Notes

- Only plain numeric strings (integer or decimal) are accepted.
- Scientific notation, signed values with (`+`), and malformed decimals are intentionally rejected.
- Use `validateFiniteNumber` if you need a `Result<T>` instead of `null`.
