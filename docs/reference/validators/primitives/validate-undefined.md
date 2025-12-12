# validateUndefined

Checks whether a value is **undefined**. This helper uses the [isUndefined](../../type-guards/primitives/is-undefined.md) type guard internally. Only the literal value `undefined` passes this validation.

It never throws and never mutates input. Use it when you need to explicitly validate that a field is undefined before normalization or further validation.

## Signature

```ts
function validateUndefined(value: unknown, field: string): ValidationResult<undefined>
```

## Parameters

| Name | Type | Description |
|---|---|---|
| value | `unknown` | The value to validate. |
| field | `string` | The name of the field being validated, used in error reporting. |

## Returns

One of:

- `{ ok: true, value: undefined }`: If value is exactly `undefined`.
- `{ ok: false, field: string, message: string }`: If value is anything other than `undefined`.

## Behavior

- Uses [isUndefined](../../type-guards/primitives/is-undefined.md) internally.
- Only the literal undefined passes.
- `null` fails.
- All other types fail.
- Never throws or mutates input.

## Examples

```ts
validateUndefined(undefined, "maybeUndef")
// { ok: true, value: undefined }

validateUndefined(null, "nullValue")
// { ok: false, field: "nullValue", message: "Value must be undefined" }

validateUndefined(0, "zero")
// { ok: false, field: "zero", message: "Value must be undefined" }

validateUndefined({}, "obj")
// { ok: false, field: "obj", message: "Value must be undefined" }
```

## Notes

- This validator does not coerce values. Only literal `undefined` is accepted.
- Because it depends on [isUndefined](../../type-guards/primitives/is-undefined.md), values such as `null`, objects, arrays, and primitives automatically fail.
- Suitable for strict validation of optional fields where `undefined` is an intentional, explicit value.
- The validator never throws and never mutates input. All error reporting goes through structured `ValidationResult` objects.
