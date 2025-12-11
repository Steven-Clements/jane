# isPlainObject

Checks whether a value is a **plain object**. A plain object is one created with `{}` or `new Object()`, where the prototype is exactly `Object.prototype`.

This helper excludes `null`, arrays, class instances, and objects with custom prototypes. It never throws and never mutates input.

## Signature

```ts
function isPlainObject(value: unknown): value is object
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. Must be a non‑null object whose prototype is exactly `Object.prototype` to return `true` |

## Returns

A boolean:

- `true`: If the value is a non‑null object with `Object.prototype` as its prototype.
- `false`: Otherwise.

## Examples

```ts
isPlainObject({})                     // true
isPlainObject({ a: 1 })               // true
isPlainObject(new Object())           // true

isPlainObject([])                     // false
isPlainObject(null)                   // false
isPlainObject(Object.create(null))    // false
isPlainObject(new Date())             // false
isPlainObject(class X {})             // false
isPlainObject(new (class Y {})())     // false
```

## Notes

- This helper is stricter than [isObject](is-object.md). Use `isObject` if you only need to exclude `null` and arrays.
- Use `normalizeObject` if you need to ensure the value becomes an object.
- Use `validateObject` if you need a `Result<T>` instead of a boolean.

## Next up

[isRecord](is-record.md)
