# normalizeNumber

Normalizes a value into a **finite number** or returns `null`.

This helper accepts native numbers and numeric strings. It trims string input before parsing and rejects `NaN`, `Infinity`, and malformed numeric values. It never throws and never mutates input.

Use this when you need a predictable number before validation or further processing.

## Signature

```ts
function normalizeNumber(value: unknown): number | null
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to normalize into a finite number. |

## Returns

One of:

- A finite number.
- `null`: If the value cannot be interpreted as a finite number.

## Behavior

- Accepts finite native numbers.
- Accepts numeric strings (trimmed before parsing).
- Rejects:
  - `NaN`.
  - `Infinity` and `-Infinity`.
  - Empty strings.
  - Whitespace‑only strings.
  - Malformed numeric strings.
  - All non‑string, non‑number values.
  - No mutation, no exceptions, no hidden coercion.

## Examples

```ts
normalizeNumber(42)            // 42
normalizeNumber("42")          // 42
normalizeNumber("  3.14  ")    // 3.14
normalizeNumber("-10")         // -10

normalizeNumber("")            // null
normalizeNumber("abc")         // null
normalizeNumber("42px")        // null
normalizeNumber(NaN)           // null
normalizeNumber(Infinity)      // null
normalizeNumber(null)          // null
```

## Notes

- Use [normalizeInteger](normalize-integer.md) or `normalizeSafeInteger` for stricter numeric domains.
- Use `validateNumber` if you need a `Result<T>` instead of `null`.
