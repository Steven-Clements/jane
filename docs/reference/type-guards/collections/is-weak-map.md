# isWeakMap

Checks whether a value is a **WeakMap**.

This helper performs a strict `instanceof` check and never throws or mutates input. It accepts native `WeakMap` instances, `WeakMap` subclasses, and wrapper objects created with `Object(...)`.

## Signature

```ts
function isWeakMap<K extends object = object, V = unknown>(
    value: unknown,
): value is WeakMap<K, V>
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. Must be a WeakMap instance to return `true` |

## Returns

A boolean:

- `true`: If the value is a WeakMap.
- `false`: Otherwise.

## Examples

```ts
isWeakMap(new WeakMap())          // true
isWeakMap(Object(new WeakMap()))  // true

isWeakMap(new Map())              // false
isWeakMap({})                     // false
isWeakMap(null)                   // false
```

## Notes

- This helper intentionally accepts `WeakMap` wrapper objects because JavaScript treats them as genuine `WeakMap` instances.
- It does *not* treat plain objects or Maps as WeakMaps.
- Use `validateWeakMap` if you need a `Result<T>` instead of a boolean.

## Next up

[isWeakSet](is-weak-set.md)
