# isObject

Checks whether a value is an **object**, excluding `null` and arrays.

This helper never throws and never mutates input. Use it when you need to confirm that a value is a non‑null, non‑array object before running normalization or validation.

## Signature

```ts
function isObject(value: unknown): value is object
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. Must be a non‑null, non‑array object to return `true`. |

## Returns

A boolean:

- `true`: If the value is an object, not null, and not an array.
- `false`: Otherwise.

## Examples

```ts
isObject({})                     // true
isObject({ a: 1 })               // true
isObject(Object.create(null))    // true

isObject([])                     // false
isObject(null)                   // false
isObject("hello")                // false
isObject(123)                    // false
```

## Notes

- This helper excludes arrays by design.
- Use [isPlainObject](is-plain-object.md) if you need to confirm `Object.getPrototypeOf(value) === Object.prototype`.
- Use `normalizeObject` if you need to ensure the value becomes an object.
- Use `validateObject` if you need a `Result<T>` instead of a boolean.

## Next up

[isPlainObject](is-plain-object.md)
