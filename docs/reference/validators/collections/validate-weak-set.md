# validateWeakSet

Validates that a value is a **WeakSet** instance. This helper uses the [isWeakSet](../../type-guards/collections/is-weak-set.md) type guard internally. Only native `WeakSet` instances and wrapper objects created with `Object(...)` pass this check.

It never throws and never mutates input. Use it when you need to validate object‑keyed sets before applying further structural or element‑level validation.

## Signature

```ts
function validateWeakSet(
  value: unknown,
  field: string
): ValidationResult<WeakSet<object>>
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to validate. |
| field | `string` | The name of the field being validated, used in error reporting. |

## Returns

One of:

- `{ ok: true, value: WeakSet }`: If value is a `WeakSet`.
- `{ ok: false, field: string, message: string }`: If value is not a `WeakSet`.

## Behavior

- Uses `isWeakSet` internally.
- **Accepts**:
  - `new WeakSet()`.
  - `new WeakSet([object])`.
  - `Object(new WeakSet())`.
  - Subclasses of `WeakSet`.
- **Rejects**:
  - `Set`, `Map`, `WeakMap`.
  - plain objects.
  - Arrays and primitives.
  - Never throws or mutates input.

## Examples

```ts
const key = {};
validateWeakSet(new WeakSet([key]), "cache")
// { ok: true, value: WeakSet { [object Object] } }

validateWeakSet({}, "obj")
// { ok: false, field: "obj", message: "Value must be a WeakSet" }
```

## Notes

- This validator checks only that the value is a `WeakSet`. It does not validate element types. For that, use higher‑level helpers.
