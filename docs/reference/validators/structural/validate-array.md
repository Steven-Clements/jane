# validateArray

Checks whether a value is an **array**. This helper uses the [isArray](../../type-guards/structural/is-array.md) type guard internally. Only values for which `Array.isArray(value)` returns `true` pass this check.

It never throws and never mutates input. Use it when you need to ensure that a value is an array before applying further structural or element-level validation.

## Signature

```ts
function validateArray(
  value: unknown,
  field: string
): ValidationResult<unknown[]>
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to validate. |
| field | `string` | The name of the field being validated, used in error reporting. |

## Returns

One of:

- `{ ok: true, value: unknown[] }`: If value is an array.
- `{ ok: false, field: string, message: string }`: If value is not an array.

## Behavior

- Uses [isArray](../../type-guards/structural/is-array.md) internally.
- Only arrays pass.
- Objects, functions, Maps, Sets, Dates, and primitives fail.
- Never mutates input.
- Never throws.

## Examples

```ts
validateArray([1, 2, 3], "items")
// { ok: true, value: [1, 2, 3] }

validateArray({}, "obj")
// { ok: false, field: "obj", message: "Value must be an array" }

validateArray("abc", "str")
// { ok: false, field: "str", message: "Value must be an array" }
```

## Notes

- This validator checks only that the value is an array. It does not validate element types. For that, use higher-level helpers.
- The validator never throws and never mutates input. All error reporting goes through structured `ValidationResult` objects.
