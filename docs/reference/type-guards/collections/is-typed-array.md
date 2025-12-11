# isTypedArray

Checks whether a value is a **TypedArray**. This includes all built‑in typed array types such as `Uint8Array`, `Float32Array`, and `BigInt64Array`. You may optionally enforce a specific `TypedArray` constructor.

This helper never throws and never mutates input.

## Signature

```ts
function isTypedArray<T extends TypedArray = TypedArray>(
    value: unknown,
    expected?: { new (...args: unknown[]): T },
): value is T
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. Must be a `TypedArray` to return `true`. |
| expected | `constructor` | Optional. If provided, the value must be an instance of this specific `TypedArray` type. |

## Returns

A boolean:

- `true`: If the value is a `TypedArray`.
- `true`: If the value is a `TypedArray` and matches the expected type.
- `false`: Otherwise.

## Examples

```ts
isTypedArray(new Uint8Array())         // true
isTypedArray(new Float32Array())       // true
isTypedArray(new Uint8Array(), Uint8Array) // true
isTypedArray(new Uint8Array(), Float32Array) // false

isTypedArray([])                       // false
isTypedArray(new DataView(...))        // false
isTypedArray(null)                     // false
```

## Notes

- This helper uses `ArrayBuffer.isView` and excludes `DataView`, matching the ECMAScript definition of `TypedArray`.
- It accepts `TypedArray` subclasses and wrapper objects.
- Use `validateTypedArray` if you need a `Result<T>` instead of a boolean.

## Next up

[isWeakMap](is-weak-map.md)
