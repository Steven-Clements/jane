# validateBoolean

Checks whether a value is a **boolean**. This helper uses the [isBoolean](../../type-guards/primitives/is-boolean.md) type guard internally. A boolean is one of the two primitive values `true` or `false`.

It never throws and never mutates input. Use it when you need a strict boolean before normalization or further validation.

## Signature

```ts
function validateBoolean(value: unknown, field: string): ValidationResult<boolean>
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to validate. |
| field | `string` | The name of the field being validated, used in error reporting. |

## Returns

One of:

- `{ ok: true, value: boolean }`: If value is a boolean.
- `{ ok: false, field: string, message: string }`: If value is not a boolean.

## Behavior

- Uses isBoolean internally.
- Only primitive booleans (true and false) pass.
- Truthy and falsy values such as 1, 0, "", "true", and "false" fail.
- Boxed booleans (new Boolean(true)) fail.
- Never mutates input.
- Never throws.

## Examples

```ts
validateBoolean(true, "flag")
// { ok: true, value: true }

validateBoolean(false, "flag")
// { ok: true, value: false }

validateBoolean("true", "stringFlag")
// { ok: false, field: "stringFlag", message: "Value must be a boolean" }

validateBoolean(1, "one")
// { ok: false, field: "one", message: "Value must be a boolean" }
```

## Notes

- This validator does not coerce values. Strings like `"true"` and `"false"` return error.
- Because it depends on [isBoolean](../../type-guards/primitives/is-boolean.md), boxed booleans (`Object(true)`) also fail.
- Suitable for strict validation of flags, toggles, and configuration options where boolean semantics must be explicit.
- The validator never throws and never mutates input. All error reporting goes through structured `ValidationResult` objects.
