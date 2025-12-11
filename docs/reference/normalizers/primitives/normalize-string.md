# normalizeString

Normalizes a value into a **trimmed string** or returns `null`.

This helper accepts only native JavaScript strings. It trims leading and trailing whitespace but performs no other transformations. It never throws and never mutates input.

Use this when you need a predictable string before validation or further processing.

## Signature

```ts
function normalizeString(value: unknown): string | null
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to normalize into a string. |

## Returns

One of:

- A trimmed string.
- `null`: if the value is not a native string.

## Behavior

- Only native strings are accepted.
- The returned string is trimmed.
- Empty strings remain empty after trimming.
- All non-string values return `null`.
- No coercion (for example, converting numbers to strings) is performed.
- No Unicode normalization or case folding is applied.

## Examples

```ts
normalizeString("hello")          // "hello"
normalizeString("  hello  ")      // "hello"
normalizeString("\nhello\t")      // "hello"

normalizeString("")               // ""
normalizeString("   ")            // ""

normalizeString(123)              // null
normalizeString(true)             // null
normalizeString(null)             // null
normalizeString(undefined)        // null
normalizeString({})               // null
```

## Notes

- This helper is intentionally minimal: it only trims.
- Use [normalizeNonEmptyString](normalize-non-empty-string.md) when empty strings should be rejected.
- Use `validateString` if you need a `Result<T>` instead of `null`.

## Next up

[normalizeNonEmptyString](normalize-non-empty-string.md)
