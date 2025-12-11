# isArray

Checks whether a value is an **array**.

This helper never throws and never mutates input. Use it when you need to confirm that a value is an array before running normalization or validation.

## Signature

```ts
function isArray(value: unknown): value is unknown[]
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The unknown value to check. Must be validated explicitly; no assumptions or coercion are applied. |

## Returns

A boolean:

- `true`: If the value is an array.
- `false`: Otherwise.

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
- Use `validateArray` if you need a `Result<T>` instead of a boolean.

## Next up

[is-non-empty-array](is-non-empty-array.md)
