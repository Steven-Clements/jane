# isWeakSet

Checks whether a value is a **WeakSet**.

This helper performs a strict `instanceof` check and never throws or mutates input. It accepts native `WeakSet` instances, `WeakSet` subclasses, and wrapper objects created with `Object(...)`.

## Signature

```ts
function isWeakSet<T extends object = object>(
    value: unknown,
): value is WeakSet<T>
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. Must be a WeakSet instance to return `true`. |

## Returns

A boolean:

- `true`: If the value is a WeakSet.
- `false`: Otherwise.

## Examples

```ts
isWeakSet(new WeakSet())          // true
isWeakSet(Object(new WeakSet()))  // true

isWeakSet(new Set())              // false
isWeakSet({})                     // false
isWeakSet(null)                   // false
```

## Notes

- This helper intentionally accepts `WeakSet` wrapper objects because JavaScript treats them as genuine `WeakSet` instances.
- It does *not* treat plain objects or Sets as WeakSets.
- Use `validateWeakSet` if you need a `Result<T>` instead of a boolean.

## Next up

This is the final topic for collections. In the next section, we'll cover semantic type guards.

[Semantic](../semantic/index.md)
