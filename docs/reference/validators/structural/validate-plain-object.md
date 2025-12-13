# validatePlainObject

Checks whether a value is a **plain object**. This helper uses the [isPlainObject](../../type-guards/structural/is-plain-object.md) type guard internally.

A plain object is one created via an object literal (`{}`) or `new Object()`, where the prototype is **exactly `Object.prototype`**.

Objects with a `null` prototype, custom prototypes, or specialized built-in types do not pass this check.

It never throws and never mutates input. Use it when you need to ensure that a value is a simple, prototype-standard object before applying further structural or key-level validation.

## Signature

```ts
function validatePlainObject(
  value: unknown,
  field: string
): ValidationResult<object>
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to validate. |
| field | `string` | The name of the field being validated, used in error reporting. |

## Returns

One of:

- `{ ok: true, value: object }`: If the value is a plain object whose prototype is exactly `Object.prototype`.
- `{ ok: false, field: string, message: string }`: If value is not a plain object.

## Behavior

- Uses [isPlainObject](../../type-guards/structural/is-plain-object.md) internally.
- Accepts only objects whose prototype is exactly `Object.prototype`.
- **Accepts**:
  - Object literals (`{}`)
  - Objects created with `new Object()`
- **Rejects**:
  - `null`
  - Arrays
  - `Object.create(null)`
  - Functions
  - Built-in objects (`Map`, `Set`, `Date`, `RegExp`).
  - Class instances.
  - All primitive values
  - Performs no coercion.
  - Never throws or mutates input.

## Examples

```ts
validatePlainObject({ a: 1 }, "data")
// { ok: true, value: { a: 1 } }

validatePlainObject(new Object(), "obj")
// { ok: true, value: {} }

validatePlainObject(Object.create(null), "nullProto")
// { ok: false, field: "nullProto", message: "Value must be a plain object" }

validatePlainObject([], "arr")
// { ok: false, field: "arr", message: "Value must be a plain object" }
```

## Notes

- This validator is stricter than [validateObject](validate-object.md), which accepts any non-null object.
- Use this validator when validating:
  - JSON-like data structures
  - Configuration objects
  - Schema-controlled payloads
- The validator never throws and never mutates input. All error reporting goes through structured `ValidationResult` objects.
