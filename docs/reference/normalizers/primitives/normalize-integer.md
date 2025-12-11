# normalizeInteger

Normalizes a value into an **integer** or returns `null`. This helper accepts finite native integers and string representations of integers. It trims string input before parsing and rejects floats, `NaN`, `Infinity`, and malformed numeric values.

It never throws and never mutates input. Use this when you need a predictable integer before validation or further processing.

## Signature

```ts
function normalizeInteger(value: unknown): number | null
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to normalize into an integer. |

## Returns

One of:

- A finite integer.
- `null`: If the value cannot be interpreted as an integer.

## Behavior

- Accepts finite native integers.
- Accepts integer strings (trimmed before parsing).
- Rejects:
  - Floats.
  - `NaN`.
  - `Infinity` and `-Infinity`.
  - Empty strings.
  - Whitespace‑only strings.
  - Malformed numeric strings.
  - All non‑string, non‑number values.
  - No mutation, no exceptions, no hidden coercion.

## Examples

```ts
normalizeInteger(42)            // 42
normalizeInteger("42")          // 42
normalizeInteger("  -10  ")     // -10

normalizeInteger(3.14)          // null
normalizeInteger("3.14")        // null
normalizeInteger("")            // null
normalizeInteger("abc")         // null
normalizeInteger(Infinity)      // null
```

## Notes

- Use [normalizeSafeInteger](normalize-safe-integer.md) if you need to enforce the safe integer range.
- Use `validateInteger` if you need a `Result<T>` instead of `null`.
