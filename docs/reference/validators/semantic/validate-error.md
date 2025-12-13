# validateError

Checks whether a value is an **Error object**. This helper uses [isError](../../type-guards/semantic/is-error.md) internally.

Accepts all native Error types (`Error`, `TypeError`, `RangeError`, etc.) and custom subclasses. Never throws and never mutates input.

## Signature

```ts
function validateError(value: unknown, field: string): ValidationResult<Error>
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to validate. |
| field | `string` | The name of the field being validated, used in error reporting. |

## Returns

One of:

- `{ ok: true, value: Error }`: If the value is an `Error` instance.
- `{ ok: false, field: string, message: string }`: If the value is not an `Error` instance.

## Behavior

-Accepts `Error` objects and all subclasses.
-Rejects primitives, objects, arrays, and non-Error values.
-Performs no coercion.
-Never throws mutates input.

## Examples

```ts
validateError(new Error("oops"), "err")
// { ok: true, value: Error("oops") }

validateError(new TypeError("bad type"), "err")
// { ok: true, value: TypeError("bad type") }

validateError("oops", "err")
// { ok: false, field: "err", message: "Value must be an Error" }

validateError({}, "err")
// { ok: false, field: "err", message: "Value must be an Error" }
```

## Notes

- Suitable for validating caught errors, API inputs, or internal checks.
- Fully compatible with TypeScript strict mode.
- All error reporting uses `ValidationResult`.
