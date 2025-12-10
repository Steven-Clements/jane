# isNonEmptyString

Checks whether a value is a *primitive, non‑empty string*. This helper never throws and never mutates input. It performs a strict `typeof` check and does not trim or normalize the value.

## Signature

```ts
function isNonEmptyString(value: unknown): value is string
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | Checks whether a value is a primitive string with `length > 0`, without trimming or normalization. |

## Returns

A boolean:

- `true`: If the value is a primitive string with length greater than 0.
- `false` Otherwise.

## Examples

```ts
isNonEmptyString("hello")            // true
isNonEmptyString(" ")                // true (whitespace counts as non-empty)
isNonEmptyString("")                 // false
isNonEmptyString(123)                // false
isNonEmptyString(null)               // false
isNonEmptyString(undefined)          // false
isNonEmptyString(new String("x"))    // false
```

## Notes

- This helper does not trim whitespace.
- Zero‑width characters still count as non‑empty.
- This helper returns `false` for String objects (e.g., `new String("x")`).
- Use `normalizeNonEmptyString` if you need trimming and conversion.
- Use `validateNonEmptyString` if you need a `Result<T>` instead of a boolean.
