# validateTypedArray

Validates that a value is a **TypedArray** instance. This helper uses the [isTypedArray](../../type-guards/collections/is-typed-array.md) type guard internally. Only native TypedArray instances and wrapper objects created via `Object(...)` pass this check.

It never throws and never mutates input. Use it when you need to validate binary data buffers or numeric arrays before applying further structural or element-level validation.

## Signature

```ts
function validateTypedArray(
  value: unknown,
  field: string
): ValidationResult<TypedArray>
```

Where `TypedArray` is the union of all built-in typed array variants:

```ts
type TypedArray =
  | Int8Array
  | Uint8Array
  | Uint8ClampedArray
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array
  | Float64Array
  | BigInt64Array
  | BigUint64Array;
```

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to validate. |
| field | `string` | The name of the field being validated, used in error reporting. |

## Returns

One of:

- `{ ok: true, value: TypedArray }`: If value is a `TypedArray`.
- `{ ok: false, field: string, message: string }`: If value is not a `TypedArray`.

Behavior

- Uses [isTypedArray](../../type-guards/collections/is-typed-array.md) internally.
- **Accepts**:
  - Any built-in `TypedArray` variant.
  - Wrapper objects created using `Object(new Int8Array(...))`.
  - Subclasses of `TypedArray`.
- **Rejects**:
  - Plain arrays.
  - Sets, Maps, WeakSets, WeakMaps.
  - Primitives.
  - Never mutates input.
  - Never throws.

## Examples

```ts
validateTypedArray(new Float32Array([1.1, 2.2]), "floats")
// { ok: true, value: Float32Array [1.1, 2.2] }

validateTypedArray([1, 2, 3], "arr")
// { ok: false, field: "arr", message: "Value must be a TypedArray" }
```

## Notes

- This validator checks only that the value is a `TypedArray`. It does not validate element types or ranges. For that, use higher-level helpers.
