# validateTuple

Validates that a value is a **tuple** matching a specific structure. This helper uses the [isTuple](../../type-guards/structural/is-tuple.md) type guard internally. A tuple is defined as an array with a fixed length where each element satisfies a corresponding guard.

It never throws and never mutates input. Use it when you need to validate structured, position-specific data before applying further processing.

## Signature

```ts
function validateTuple<
  const Guards extends readonly ((value: unknown) => boolean)[]
>(
  value: unknown,
  guards: Guards,
  field: string
): ValidationResult<{
  [I in keyof Guards]:
    Guards[I] extends (value: unknown) => value is infer T ? T : unknown
}>
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value  | `unknown` | The value to validate. Must be an array of the same length as `guards`. |
| guards | `readonly ((value: unknown) => boolean)[]` | One guard per tuple position. |
| field  | `string` | The field name used in error reporting. |

## Returns

A `ValidationResult<T>` where `T` is the inferred tuple type:

- `{ ok: true, value: T }`: If the value is a tuple matching the guards.
- `{ ok: false, field: string, message: string }`: Otherwise.

## Behavior

- Uses [isTuple](../../type-guards/structural/is-tuple.md) internally.
- Value must be an array.
- Array length must match the number of guards.
- Each element must satisfy its corresponding guard.
- Guards must be functions.
- Never throws or mutates input.

## Examples

```ts
validateTuple([1, "x"], [isNumber, isString] as const, "pair")
// { ok: true, value: [1, "x"] }

validateTuple([1, 2], [isNumber, isString] as const, "pair")
// { ok: false, field: "pair", message: "Value must be a tuple matching the specified structure" }
```

## Notes

- This validator is ideal for validating fixed-structure data such as coordinate pairs, key-value pairs, or structured arguments.
- For variable-length arrays, use [validateArray](validate-array.md) or [validateNonEmptyArray](validate-non-empty-array.md).
