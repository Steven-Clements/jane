# validateObject

Checks whether a value is a **non-null object**. This helper uses the
[isObject](../../type-guards/structural/is-object.md) type guard internally.
A value passes this check only if it is an object in the JavaScript sense
(`typeof value === "object"`) and is not `null`, an array, a function, or a
specialized object such as `Map`, `Set`, or `Date`.

It never throws and never mutates input. Use it when you need to ensure that a
value is a general-purpose object before applying further structural validation.

## Signature

```ts
function validateObject(value: unknown, field: string): ValidationResult<object>
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to validate. |
| field | `string` | The name of the field being validated, used in error reporting. |

## Returns

One of:

- `{ ok: true, value: object }`: If value is a non-null object.
- `{ ok: false, field: string, message: string }`: If value is not a valid object.

## Behavior

- Uses [isObject](../../type-guards/structural/is-object.md) internally.
- Only non-null objects pass.
- Primitives, arrays, and functions fail.
- Never throws or mutates input.

## Examples

```ts
validateObject({ a: 1 }, "data")
// { ok: true, value: { a: 1 } }

validateObject([], "arr")
// { ok: false, field: "arr", message: "Value must be an object" }

validateObject(null, "nothing")
// { ok: false, field: "nothing", message: "Value must be an object" }

validateObject(new Map(), "map")
// { ok: false, field: "map", message: "Value must be an object" }
```

## Notes

- This validator does not check for plain objects. For that, use [validatePlainObject](../../validators/structural/validate-plain-object.md).
- Suitable for validating general-purpose object inputs before applying more specific structural checks.
- The validator never throws and never mutates input. All error reporting goes through structured `ValidationResult` objects.
