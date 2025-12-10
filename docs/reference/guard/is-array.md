# isArray

Checks whether a value is an *array*. This helper never throws and never mutates input. Use it when you need to confirm that a value is an array before running normalization or validation.

## Signature

```ts
function isArray(value: unknown): value is unknown[]
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. This helper performs a strict `typeof` check and only returns `true` for *finite primitive integers*. |

## Returns

A boolean:

- `true` if the value is an array.
- `false` otherwise.

## Examples

```ts
isArray([])              // true
isArray([1, 2, 3])       // true
isArray(["a", "b"])      // true

isArray({})              // false
isArray(null)            // false
isArray("hello")         // false
isArray(123)             // false
```

## Notes

- This helper uses `Array.isArray` internally.
- Use `normalizeArray` if you need to ensure a value becomes an array.
- Use `normalizeStringArray` if you need an array of strings.
- Use `validateArray` if you need a `Result<T>` instead of a boolean.
