# validateMap

Validates that a value is a **Map** instance. This helper uses the [isMap](../../type-guards/collections/is-map.md) type guard internally. Only native `Map` instances and `Map` wrapper objects created via `Object(...)` pass this check.

It never throws and never mutates input. Use it when you need to validate key–value collections before applying further structural or element‑level validation.

## Signature

```ts
function validateMap(
  value: unknown,
  field: string
): ValidationResult<Map<unknown, unknown>>
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to validate. |
| field | `string` | The name of the field being validated, used in error reporting. |

## Returns

A `ValidationResult<Map<unknown, unknown>>`:

- `{ ok: true, value: Map }`: If the value is a `Map`.
- `{ ok: false, field, message }`: Otherwise.

## Behavior

- Uses [isMap](../../type-guards/collections/is-map.md) internally.
- **Accepts**:
  - `new Map()`.
  - `new Map([...])`.
  - `Object(new Map())`.
  - Subclasses of `Map`.
- **Rejects**:
  - Plain objects
  - Arrays
  - Sets, WeakMaps, WeakSets
  - Primitives
  - Never throws or mutates input.

## Examples

```ts
validateMap(new Map([["a", 1]]), "data")
// { ok: true, value: Map { "a" => 1 } }

validateMap({}, "obj")
// { ok: false, field: "obj", message: "Value must be a Map" }
```

## Notes

- This validator checks only that the value is a `Map`. It does not validate key or value types. For that, use higher‑level helpers.
