# validatePlainObject

Checks whether a value is a **plain object**. This helper uses the [isPlainObject](../../type-guards/structural/is-plain-object.md) type guard internally. A plain object is one created with `{}` or `new Object()`, where the prototype is exactly `Object.prototype`.

It never throws and never mutates input. Use it when you need to ensure that a value is a simple, prototype‑standard object before applying further structural validation.

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

- `{ ok: true, value: object }`: If value is a plain object.
- `{ ok: false, field: string, message: string }`: If value is not a plain object.

## Behavior

- Uses [isPlainObject](../../type-guards/structural/is-plain-object.md) internally.
- Only objects whose prototype is exactly `Object.prototype` pass.
- `Object.create(null)` fails.
- Arrays, functions, Maps, Sets, Dates, RegExps, and class instances fail.
- Primitives fail.
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
- Suitable for validating JSON-like structures and configuration objects.
- The validator never throws and never mutates input. All error reporting goes through structured `ValidationResult` objects.
