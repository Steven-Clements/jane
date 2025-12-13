# validatePort

Checks whether a value is a **valid TCP/UDP port number**. This helper uses the [isPort](../../type-guards/semantic/is-port.md) type guard internally.

A port is defined as a finite integer between `0` and `65535` (inclusive). This definition matches low-level networking and operating system semantics.

It never throws and never mutates input. Use it when you need a structured validation result instead of a boolean.

## Signature

```ts
function validatePort(
  value: unknown,
  field: string
): ValidationResult<number>
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to validate. |
| field | `string` | The name of the field being validated, used in error reporting. |

## Returns

One of:

- `{ ok: true, value: number }`: If the value is an integer between 0 and 65535 (inclusive).
- `{ ok: false, field: string, message: string }`: If the value is not a valid port number.

## Behavior

- Uses [isPort](../semantic/validate-port.md) internally.
- Accepts finite integers only.
- Accepts values from `0` through `65535` (inclusive).
- Rejects negative numbers.
- Rejects values greater than `65535`.
- Rejects fractional numbers.
- Rejects `NaN`, `Infinity`, and `-Infinity`.
- Rejects non-number values.
- Never throws or mutates input.

## Examples

```ts
validatePort(0, "port")
// { ok: true, value: 0 }

validatePort(80, "port")
// { ok: true, value: 80 }

validatePort(65535, "port")
// { ok: true, value: 65535 }

validatePort(-1, "port")
// { ok: false, field: "port", message: "Value must be a valid port number (0–65535)" }

validatePort("80", "port")
// { ok: false, field: "port", message: "Value must be a valid port number (0–65535)" }
```

## Notes

- This validator performs no coercion. Strings such as `"80"` are rejected.
- Boxed numbers (`new Number(80)`) are rejected.
- Port `0` is accepted by design, as it is a valid value in OS-level networking contexts.
- Use [normalizePort](../../normalizers/semantic/normalize-port.md) if you need to coerce values into valid ports.
- Suitable for validating socket options, low-level network configuration, and protocol implementations.
- The validator never throws and never mutates input. All error reporting is handled through structured `ValidationResult` objects.
