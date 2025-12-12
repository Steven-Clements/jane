# validateNull

Checks whether a value is **null**. This helper uses the [isNull](../../type-guards/primitives/is-null.md) type guard internally. Only the literal value `null` passes this validation.

It never throws and never mutates input. Use it when you need to explicitly validate that a field is null before normalization or further validation.

## Signature

```ts
function validateNull(value: unknown, field: string): ValidationResult<null>
```

## Parameters

| Name | Type | Description |
|---|---|---|
| value | `unknown` | The value to validate. |
| field | `string`| The name of the field being validated, used in error reporting. |

## Returns

One of:

- `{ ok: true, value: null }`: If value is exactly `null`.
- `{ ok: false, field: string, message: string }`: If value is anything other than `null`.
Behavior
- Uses [isNull](../../type-guards/primitives/is-null.md) internally.
- Only the literal `null` passes.
- `undefined` fails.
- All other types fail.
- Never throws or mutates input.

## Examples

```ts
validateNull(null, "maybeNull")
// { ok: true, value: null }

validateNull(undefined, "undef")
// { ok: false, field: "undef", message: "Value must be null" }

validateNull(0, "zero")
// { ok: false, field: "zero", message: "Value must be null" }

validateNull({}, "obj")
// { ok: false, field: "obj", message: "Value must be null" }
```

## Notes

- This validator does not coerce values. Only literal `null` is accepted.
- Because it depends on [isNull](../../type-guards/primitives/is-null.md), values such as undefined, objects, arrays, and primitives automatically fail.
- Suitable for strict validation of nullable fields where `null` is an intentional, explicit value.
- The validator never throws and never mutates input. All error reporting goes through structured `ValidationResult` objects.
