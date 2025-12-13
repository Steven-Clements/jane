# validateRecord

Checks whether a value is a **record-like object with string keys**. This helper uses the [isRecord](../../type-guards/structural/is-record.md) type guard internally. A record is any non-null, non-array object whose own enumerable property keys are strings. The object's prototype does not matter.

It never throws and never mutates input. Use it when you need to validate dictionary-like objects before applying further structural or value-level validation.

## Signature

```ts
function validateRecord(
  value: unknown,
  field: string
): ValidationResult<Record<string, unknown>>
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to validate. |
| field | `string` | The name of the field being validated, used in error reporting. |

## Returns

One of:

- `{ ok: true, value: Record<string, unknown> }`: If value is a record.
- `{ ok: false, field: string, message: string }`: If value is not a record.

## Behavior

- Uses [isRecord](../../type-guards/structural/is-record.md) internally.
- Accepts objects with any prototype, including class instances.
- Accepts objects created with `Object.create(null)`.
- Rejects arrays.
- Rejects primitives and `null`.
- Never throws or mutates input.

## Examples

```ts
validateRecord({ a: 1, b: "x" }, "data")
// { ok: true, value: { a: 1, b: "x" } }

validateRecord({}, "empty")
// { ok: true, value: {} }

validateRecord(Object.create(null), "nullProto")
// { ok: true, value: {} }

validateRecord([], "arr")
// { ok: false, field: "arr", message: "Value must be a record" }
```

## Notes

- This validator is more permissive than [validatePlainObject](validate-plain-object.md), which requires the prototype to be exactly `Object.prototype`.
- Suitable for validating dictionary-like structures, configuration maps, and general-purpose objects with string keys.
- The validator never throws and never mutates input. All error reporting goes through structured `ValidationResult` objects.
