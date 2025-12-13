# validateRegExp

Checks whether a value is a genuine **RegExp instance**. This helper uses [isRegExp](../../type-guards/semantic/is-reg-exp.md) internally.

It never throws and never mutates input. Wrapper objects or other types are rejected.

## Signature

```ts
function validateRegExp(value: unknown, field: string): ValidationResult<RegExp>
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to validate. |
| field | `string` | The name of the field being validated, used in error reporting. |

## Returns

One of:

- `{ ok: true, value: RegExp }`: If the value is a valid `RegExp` instance.
- `{ ok: false, field: string, message: string }`: If the value is not a `RegExp`.

## Behavior

- Accepts only `RegExp` objects.
- Rejects wrapper objects or other primitives.
- Performs no coercion.
- Never throws or mutates input.

## Examples

```ts
validateRegExp(/abc/, "pattern")
// { ok: true, value: /abc/ }

validateRegExp(new RegExp("abc", "i"), "pattern")
// { ok: true, value: /abc/i }

validateRegExp("abc", "pattern")
// { ok: false, field: "pattern", message: "Value must be a RegExp" }

validateRegExp({}, "pattern")
// { ok: false, field: "pattern", message: "Value must be a RegExp" }
```

## Notes

- Use this validator when exact `RegExp` objects are required.
- Strings, numbers, and other primitives are not coerced.
- Suitable for schema validation, configuration, and API inputs.
- All error reporting goes through `ValidationResult`.
