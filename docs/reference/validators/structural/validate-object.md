# validateObject

Checks whether a value is a non-null object in the JavaScript sense. This helper uses the [isObject](../../type-guards/structural/is-object.md) type guard internally.

A value passes this check if it is an object and *not* one of the following:

- `null`.
- An array.
- A function.
- A primitive value.
- Built-in objects such as `Map`, `Set`, `Date`, and class instances are accepted.

It never throws and never mutates input. Use it when you need to ensure that a value is some kind of object before applying more specific structural validation.

## Signature

```ts
function validateObject(
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

- `{ ok: true, value: object }`: If the value is a non-null object (excluding arrays and functions).
- `{ ok: false, field: string, message: string }`: If the value is not a valid object.

## Behavior

- Uses [isObject](../../type-guards/structural/is-object.md) internally.
- **Accepts any non-null object, including**:
  - Plain objects
  - `Map`
  - `Set`
  - `Date`
  - Class instances
- **Rejects**:
  - `null`
  - Arrays
  - Functions
  - All primitive values
  - Performs no coercion.
  - Never throws or mutates input.

## Examples

```ts
validateObject({ a: 1 }, "data")
// { ok: true, value: { a: 1 } }

validateObject(new Map(), "map")
// { ok: true, value: Map(0) {} }

validateObject(new Date(), "date")
// { ok: true, value: 2025-01-01T00:00:00.000Z }

validateObject([], "arr")
// { ok: false, field: "arr", message: "Value must be an object" }

validateObject(null, "nothing")
// { ok: false, field: "nothing", message: "Value must be an object" }

validateObject(() => {}, "fn")
// { ok: false, field: "fn", message: "Value must be an object" }
```

## Notes

- This validator does not check for plain objects.
- If you need to reject `Map`, `Set`, `Date`, or class instances, use a stricter validator such as [validatePlainObject](./validate-plain-object.md).
- This validator is intentionally broad and is useful as a first-pass structural guard.
- All error reporting is handled through structured `ValidationResult` objects.
- The validator never throws and never mutates input.
