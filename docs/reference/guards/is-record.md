# isRecord

Checks whether a value is a *record-like object*. That is, a non‑null, non‑array object whose keys are strings. This helper never throws and never mutates input. Use it when you need to confirm that a value is suitable for string‑keyed object operations before running normalization or validation.

## Signature

```ts
function isRecord(value: unknown): value is Record<string, unknown>
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. Must be a non‑null, non‑array object to return `true`. |

## Returns

A boolean:

- `true` if the value is a non‑null, non‑array object.
- `false` otherwise.

## Examples

```ts
isRecord({})                     // true
isRecord({ a: 1 })               // true
isRecord(Object.create(null))    // true
isRecord(new (class X {})())     // true

isRecord([])                     // false
isRecord(null)                   // false
isRecord("hello")                // false
isRecord(123)                    // false
```

## Notes

- This helper is broader than `isPlainObject` because it allows any prototype.
- Use `isPlainObject` if you need to confirm `Object.prototype` as the prototype.
- Use `normalizeRecord` if you need to ensure the value becomes a record.
- Use `validateRecord` if you need a `Result<T>` instead of a boolean.
