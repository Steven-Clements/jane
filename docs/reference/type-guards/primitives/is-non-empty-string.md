# isNonEmptyString

Checks whether a value is a primitive, **non‑empty string**. This helper never throws and never mutates input. It performs a strict `typeof` check and does not trim, coerce, or normalize the value. Whitespace and zero‑width characters count as non‑empty. `String` objects (for example, `new String("hello")`) return `false`.

## Signature

```ts
function isNonEmptyString(value: unknown): value is string
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. Must be a primitive string with length > 0 to return true. |

## Returns

A boolean:

- `true`: If the value is a primitive string with length greater than 0.
- `false`: Otherwise.

## Examples

```ts
isNonEmptyString("hello")            // true
isNonEmptyString(" ")                // true (whitespace counts as non-empty)
isNonEmptyString("\u200B")           // true (zero-width space counts as non-empty)
isNonEmptyString("")                 // false
isNonEmptyString(123)                // false
isNonEmptyString(null)               // false
isNonEmptyString(undefined)          // false
isNonEmptyString(new String("x"))    // false
```

## Notes

- This helper does *not* trim whitespace.
- Zero‑width characters still count as non‑empty.
- Returns `false` for String objects (e.g., `new String("x")`).
- Use `normalizeNonEmptyString` if you need trimming and conversion.
- Use `validateNonEmptyString` if you need a `Result<T>` instead of a boolean.

## Next up

[isNonNegativeNumber](is-non-negative-number.md)
