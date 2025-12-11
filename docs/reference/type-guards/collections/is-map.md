# isMap

Checks whether a value is a **Map**.

This helper performs a strict instanceof check and never throws or mutates input. It accepts native `Map` instances, `Map` subclasses, and wrapper objects created with `Object(...)`.

## Signature

```ts
function isMap<K = unknown, V = unknown>(value: unknown): value is Map<K, V>
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. Must be a Map instance to return `true`. |

## Returns

A boolean:

- `true`: If the value is a `Map`.
- `false`: Otherwise.

## Examples

```ts
isMap(new Map())          // true
isMap(new Map([['a', 1]]))// true
isMap(Object(new Map()))  // true

isMap({})                 // false
isMap([])                 // false
isMap(null)               // false
```

## Notes

- This helper intentionally accepts `Map` wrapper objects because JavaScript treats them as genuine `Map` instances.
- It does not treat plain objects or array‑likes as Maps.
- Use `validateMap` if you need a `Result<T>` instead of a boolean.

## Next up

[isSet](is-set.md)
