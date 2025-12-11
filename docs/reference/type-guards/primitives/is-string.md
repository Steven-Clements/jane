# isString

Checks whether a value is a **primitive string**. This helper never throws and never mutates input. It performs a strict `typeof` check and does not coerce values.

## Signature

```ts
function isString(value: unknown): value is string
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. Must be a string (primitive string) to return `true`. |

## Returns

- `true` if the value is a *primitive* string.
- `false` otherwise.

## Examples

```ts
isString("hello")               // true
isString("")                    // true
isString(123)                   // false
isString(null)                  // false
isString(undefined)             // false
isString({})                    // false
isString([])                    // false
isString(new String("hello"))   // false
```

## Notes

- This helper does *not* trim or modify the value.
- This helper returns `false` for String objects (for example, `new String("x")`).
- Use `isNonEmptyString` if you need to ensure the string is not empty.
- Use `normalizeString` if you need to convert values into strings.

## Next up

[isSymbol](is-symbol.md)
