# normalizeBoolean

Normalizes a value into a **boolean** or returns `null`. This helper accepts native booleans and string representations of booleans (`"true"` and `"false"`).

It never throws and never mutates input. Use it when you need a predictable boolean before validation or further processing.

## Signature

```ts
function normalizeBoolean(value: unknown): boolean | null
```

## Parameters

| Name | Date type | Description |
|---|---|---|
| value | `unknown` | The value to normalize into a boolean. |

## Returns

One of:

- `true` or `false`.
- `null`: If the value cannot be interpreted as a boolean.

## Behavior

- If the value is already a boolean, it is returned unchanged.
- If the value is a string, it is trimmed and lowercased.
- `"true"` becomes `true`, `"false"` becomes `false`.
- All other values return `null`.
- No mutation, no exceptions, no hidden coercion.

## Examples

```ts
normalizeBoolean(true)            // true
normalizeBoolean(false)           // false

normalizeBoolean("true")          // true
normalizeBoolean("  TRUE  ")      // true
normalizeBoolean("false")         // false
normalizeBoolean(" False ")       // false

normalizeBoolean("yes")           // null
normalizeBoolean(1)               // null
normalizeBoolean(0)               // null
normalizeBoolean(null)            // null
normalizeBoolean(undefined)       // null
```

## Notes

- Only the exact strings `"true"` and `"false"` (case‑insensitive, trimmed) are accepted.
- This helper does not coerce truthy/falsy values like `1`, `0`, `"yes"`, `"no"`, or empty strings.
- Use `validateBoolean` if you need a `Result<T>` instead of `null`.

## Next up

[normalizeString](normalize-non-empty-string.md)
