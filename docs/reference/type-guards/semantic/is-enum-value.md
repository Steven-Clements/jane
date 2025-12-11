# isEnumValue

Checks whether a value is *one of the allowed* **enum values**. This helper works with both numeric and string enums.

It never throws and never mutates input. Use it when you need to confirm that a value belongs to a specific enum before running normalization or validation.

## Signature

```ts
function isEnumValue<T extends Record<string, unknown>>(
  enumObject: T,
  value: unknown
): value is T[keyof T]
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| enumObject | `Record<string, unknown>` | The enum-like object whose values define the allowed set. |
| value | `unknown` | The value to check. Must match one of the enum’s values to return `true`. |

## Returns

A boolean:

- `true`: If the value is included in `Object.values(enumObject)`.
- `false`: Otherwise.

## Examples

```ts
enum Color {
  Red = "red",
  Blue = "blue",
}

isEnumValue(Color, "red")     // true
isEnumValue(Color, "blue")    // true
isEnumValue(Color, "green")   // false
isEnumValue(Color, 123)       // false

enum Status {
  Active = 1,
  Disabled = 2,
}

isEnumValue(Status, 1)        // true
isEnumValue(Status, 3)        // false
```

For numeric enums, TypeScript generates reverse mappings, which means enum *keys* may also be treated as valid values:

```ts
enum Status {
  Active = 1,
  Disabled = 2,
}

// ["Active", "Disabled", 1, 2]
Object.values(Status)

isEnumValue(Status, "Active") // true
```

## Notes

- Works with both string and numeric enums.
- Uses `Object.values(enumObject).includes(value)` internally.
- Use `normalizeEnum` if you need to convert values into enum values.
- Use `validateEnum` if you need a `Result<T>` instead of a boolean.

## Next up

[isError](is-error.md)
