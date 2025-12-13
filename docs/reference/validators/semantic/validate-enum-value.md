# validateEnumValue

Checks whether a value is one of the allowed **enum values**. This helper uses the [isEnumValue](../../type-guards/semantic/is-enum-value.md) type guard internally.

It works with both string and numeric enums. For numeric enums, TypeScript’s reverse mappings are treated as valid values.

This helper never throws and never mutates input. Use it when you need a structured validation result instead of a boolean.

## Signature

```ts
function validateEnumValue<T extends Record<string, unknown>>(
  enumObject: T,
  value: unknown,
  field: string
): ValidationResult<T[keyof T]>
```

### Parameters

| Name | Data type | Description |
|---|---|---|
| enumObject | `Record<string, unknown>` | The enum-like object defining allowed values. |
| value | `unknown` | The value to validate. |
| field | `string` | The name of the field being validated, used in error reporting. |

## Returns

One of:

- `{ ok: true, value: T[keyof T] }`: If the value is one of the enum’s values.
- `{ ok: false, field: string, message: string }`: If the value is not a valid enum value.

## Behavior

- Uses [isEnumValue](../../type-guards/semantic/is-enum-value.md) internally.
- Works with string and numeric enums.
- Accepts reverse-mapped enum keys for numeric enums.
- Performs no coercion.
- Rejects values not present in `Object.values(enumObject)`.
- Never throws or mutates input.

## Examples

```ts
enum Color {
  Red = "red",
  Blue = "blue",
}

validateEnumValue(Color, "red", "color")
// { ok: true, value: "red" }

validateEnumValue(Color, "green", "color")
// { ok: false, field: "color", message: "Value must be a valid enum value" }

enum Status {
  Active = 1,
  Disabled = 2,
}

validateEnumValue(Status, 1, "status")
// { ok: true, value: 1 }

validateEnumValue(Status, "Active", "status")
// { ok: true, value: "Active" }
```

## Notes

- This validator performs no coercion.
- Boxed primitives are rejected.
- Numeric enum reverse mappings are accepted by design.
- Suitable for configuration validation, API inputs, and schema enforcement.
