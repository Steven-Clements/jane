# isString

Checks whether a value is a *primitive string*. This helper never throws and never mutates input. It performs a strict `typeof` check and does not coerce values.

## Signature

```ts
function isString(value: any): value is string
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `any` | The value to check. This helper performs a strict `typeof` check and only returns `true` for *finite primitive integers*. |

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
