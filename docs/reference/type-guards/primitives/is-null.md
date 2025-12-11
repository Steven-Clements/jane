# isNull

Checks whether a value is **null**.

This helper performs a strict equality check and never throws or mutates input. Use it when you need to confirm that a value is explicitly `null` before running normalization or validation.

## Signature

```ts
function isNull(value: unknown): value is null
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. This helper returns `true` only when the value is exactly `null`. |

## Returns

A boolean:

- `true`: If the value is null.
- `false`: Otherwise.

## Examples

```ts
isNull(null)        // true

isNull(undefined)   // false
isNull(0)           // false
isNull('')          // false
isNull({})          // false
```

## Notes

- This helper does not treat `undefined` as `null`. Use [isNullOrUndefined](is-null-or-undefined.md) if you need to check for both.
- Use `normalizeNull` if you need to convert values into `null`.
- Use `validateNull` if you need a `Result<T>` instead of a boolean.

## Next up

[isNumber](is-number.md)
