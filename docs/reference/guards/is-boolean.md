# isBoolean

Checks whether a value is a boolean. This helper never throws and never mutates input. Use it when you need to confirm boolean types before running normalization or validation.

## Signature

```ts
function isBoolean(value: unknown): value is boolean
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. This helper performs a strict `typeof` check and only returns `true` for *finite primitive integers*. |

## Returns

A boolean:

- `true` if the value is a boolean.
- `false` otherwise.

## Examples

```ts
isBoolean(true)        // true
isBoolean(false)       // true
isBoolean(0)           // false
isBoolean("true")      // false
isBoolean(null)        // false
isBoolean(undefined)   // false
```

## Notes

- This helper does not coerce truthy or falsy values.
- Use `normalizeBoolean` if you need to convert values into booleans.
- Use `validateBoolean` if you need a `Result<T>` instead of a boolean.
