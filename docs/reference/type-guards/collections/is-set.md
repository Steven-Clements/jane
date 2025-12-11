# isSet

Checks whether a value is a **Set**.

This helper performs a strict `instanceof` check and never throws or mutates input. It accepts native Set instances, Set subclasses, and wrapper objects created with `Object(...)`.

## Signature

```ts
function isSet<T = unknown>(value: unknown): value is Set<T>
```

Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. Must be a Set instance to return `true`. |

## Returns

A boolean:

- `true`: If the value is a Set.
- `false`: Otherwise.

## Examples

```ts
isSet(new Set())          // true
isSet(new Set([1, 2, 3])) // true
isSet(Object(new Set()))  // true

isSet({})                 // false
isSet([])                 // false
isSet(null)               // false
```

## Notes

- This helper intentionally accepts `Set` wrapper objects because JavaScript treats them as genuine `Set` instances.
- It does not treat plain objects or array‑likes as Sets.
- Use `validateSet` if you need a `Result<T>` instead of a boolean.

## Next up

[isTypedArray](is-typed-array.md)
