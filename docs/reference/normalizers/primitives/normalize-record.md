# normalizeRecord

Normalizes a **plain‑object record** by applying a value normalizer to each property.

If any value fails normalization, the entire record is rejected.

## Signature

```ts
function normalizeRecord<T>(
    value: unknown,
    normalizeValue: (v: unknown) => T | null
): Record<string, T> | null
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | A value that may represent a plain object |
| normalizeValue | `(v: unknown) → T` \| `null` | A normalizer applied to each property value. |

## Returns

One of:

- A new `Record<string, T>` containing normalized values.
- `null`: If the input is not a plain object.
- `null`: If any property fails normalization.

## Behavior

- Accepts only plain objects whose prototype is `Object.prototype` or `null`.
- Rejects arrays, functions, class instances, Maps, Sets, Dates, RegExps, and other exotic objects.
- Applies the provided normalizer to each property value.
- Rejects the entire record if any value normalizes to `null`.
- Returns a new object; never mutates the input.
- Never throws.

## Examples

```ts
const normalizeNumber = (v: unknown) =>
    typeof v === "number" ? v : null

normalizeRecord({ a: 1, b: 2 }, normalizeNumber)
// returns { a: 1, b: 2 }

normalizeRecord({ a: 1, b: "x" }, normalizeNumber)
// returns null

normalizeRecord(123, normalizeNumber)
// returns null

normalizeRecord(Object.create(null), normalizeNumber)
// returns a new object with the same keys and normalized values
```

## Notes

- This helper is ideal for validating configuration objects and JSON‑like dictionaries.
- It composes naturally with other normalizers such as `normalizeString`, `normalizeBoolean`, and `normalizePlainObject`.
- Use `validateRecord` if you need a `Result<T>` wrapper instead of `null`.
