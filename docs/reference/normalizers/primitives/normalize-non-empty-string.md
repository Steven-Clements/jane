# normalizeNonEmptyString

Normalizes a value into a **trimmed, non‑empty string** or returns `null`.

This helper accepts only native JavaScript strings. It trims leading and trailing whitespace and rejects empty results. It never throws and never mutates input. Use this when you need a guaranteed non‑empty string before validation or further processing.

## Signature

```ts
function normalizeNonEmptyString(value: unknown): string | null
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to normalize to a non-empty string. |

## Returns

One of:

- A trimmed, non‑empty string.
- `null`: If the value is not a string or becomes empty after trimming.

## Behavior

- Only native strings are accepted.
- The returned string is trimmed.
- If the trimmed result is empty, `null` is returned.
- All non‑string values return `null`.
- No coercion (for example, converting numbers to strings) is performed.

## Examples

```ts
normalizeNonEmptyString("hello")        // "hello"
normalizeNonEmptyString("  hello  ")    // "hello"

normalizeNonEmptyString("")             // null
normalizeNonEmptyString("   ")          // null

normalizeNonEmptyString(123)            // null
normalizeNonEmptyString(null)           // null
normalizeNonEmptyString(undefined)      // null
```

## Notes

- Use [normalizeString](normalize-string.md) if empty strings should be preserved.
- Use `validateNonEmptyString` if you need a `Result<T>` instead of `null`.
