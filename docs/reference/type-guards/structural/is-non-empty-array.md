# isNonEmptyArray

Checks whether a value is a **non‑empty array**. This helper performs a strict `Array` check and verifies that the array contains at least one element.

It never throws and never mutates input. Use it when you need to confirm that a value is an array with meaningful content before running normalization or validation.

## Signature

```ts
function isNonEmptyArray<T = unknown>(value: unknown): value is T[]
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. Must be an array with at least one element to return `true`. |

## Returns

A boolean:

- `true`: If the value is a non‑empty array.
- `false`: Otherwise.

## Examples

```ts
isNonEmptyArray([1])        // true
isNonEmptyArray(['a'])      // true

isNonEmptyArray([])         // false
isNonEmptyArray('abc')      // false
isNonEmptyArray(null)       // false
```

## Notes

- This helper does not validate the contents of the array.
- Use `normalizeNonEmptyArray` if you need to coerce or default empty arrays.
- Use `validateNonEmptyArray` if you need a `Result<T[]>` instead of a boolean.

## Next up

[isObject](is-object.md)
