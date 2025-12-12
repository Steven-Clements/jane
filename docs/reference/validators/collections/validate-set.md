# validateSet

Validates that a value is a **Set** instance. This helper uses the [isSet](../../type-guards/collections/is-set.md) type guard internally. Only native `Set` instances and wrapper objects created via `Object(...)` pass this check.

It never throws and never mutates input. Use it when you need to validate unordered collections of unique values before applying further structural or element-level validation.

## Signature

```ts
function validateSet(
  value: unknown,
  field: string
): ValidationResult<Set<unknown>>
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to validate. |
| field | `string` | The name of the field being validated, used in error reporting. |

## Returns

One of:

- `{ ok: true, value: Set }`: If value is a `Set`.
- `{ ok: false, field: string, message: string }`: If value is not a `Set`.

## Behavior

- Uses [isSet](../../type-guards/collections/is-set.md) internally.
- **Accepts**:
  - `new Set()`.
  - `new Set([...])`.
  - `Object(new Set())`.
  - Subclasses of `Set`.
- **Rejects**:
  - Plain objects.
  - Arrays.
  - Maps, WeakSets, WeakMaps.
  - Primitives.
  - Never mutates input.
  - Never throws.

## Examples

```ts
validateSet(new Set([1, 2, 3]), "numbers")
// { ok: true, value: Set { 1, 2, 3 } }

validateSet({}, "obj")
// { ok: false, field: "obj", message: "Value must be a Set" }
```

## Notes

- This validator checks only that the value is a `Set`. It does not validate element types. For that, use higher-level helpers.
