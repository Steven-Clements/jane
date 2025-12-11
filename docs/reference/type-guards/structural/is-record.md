# isRecord

Checks whether a value is a **record**-like object with string keys.

A record is defined as:

1. A non-null, non-array object.
2. All of its own property keys are *strings* (symbols are not allowed).
3. Objects with any prototype are accepted, including class instances and objects created with `Object.create(null)`.

This helper never throws and never mutates input. Use it when you need to confirm that a value is suitable for *string-keyed object operations* before running normalization or validation.

## Signature

```ts
function isRecord(value: unknown): value is Record<string, unknown>
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. Must be a non-null, non-array object whose own keys are strings to return `true`. |

## Returns

A boolean:

- `true`: If the value is a non‑null, non‑array object.
- `false`: Otherwise.

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

- This guard is stricter than [isObject](is-object.md) because it rejects arrays.
- Use [isPlainObject](is-plain-object.md) if you also need the prototype to be exactly `Object.prototype`.
- Use `normalizeRecord` if you need to coerce values into records.
- Use `validateRecord` if you need a `Result<T>` instead of a boolean.

## Next up

[isTuple](is-tuple.md)
