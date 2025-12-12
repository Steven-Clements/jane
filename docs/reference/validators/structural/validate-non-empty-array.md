# validateNonEmptyArray

Checks whether a value is a **non-empty array**. This helper uses the [isNonEmptyArray](../../type-guards/structural/is-non-empty-array.md) type guard internally. A non-empty array is any array with a length greater than zero.

It never throws and never mutates input. Use it when you need to ensure that a value is an array with at least one element before applying further structural or element-level validation.

## Signature

```ts
function validateNonEmptyArray(
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

- `{ ok: true, value: unknown[] }`: If value is a non-empty array.
- `{ ok: false, field: string, message: string }`: If value is not a non-empty array.

## Behavior

- Uses `isNonEmptyArray` internally.
- Only arrays with at least one element pass.
- Empty arrays fail.
- Objects, functions, Maps, Sets, Dates, and primitives fail.
- Never mutates input.
- Never throws.

## Examples

```ts
validateNonEmptyArray([1, 2, 3], "items")
// { ok: true, value: [1, 2, 3] }

validateNonEmptyArray([], "empty")
// { ok: false, field: "empty", message: "Value must be a non-empty array" }

validateNonEmptyArray("abc", "str")
// { ok: false, field: "str", message: "Value must be a non-empty array" }
```

## Notes

- This validator checks only that the value is a non-empty array. It does not validate element types. For that, use higher-level helpers.
- The validator never throws and never mutates input. All error reporting goes through structured `ValidationResult` objects.
