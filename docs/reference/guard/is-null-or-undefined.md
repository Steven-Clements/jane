# isNullOrUndefined

Checks whether a value is null or undefined. This helper performs strict equality checks and never throws or mutates input. Use it when you need to confirm that a value is explicitly missing before running normalization or validation.

## Signature

```ts
function isNullOrUndefined(value: unknown): value is null | undefined
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. Returns `true` only when the value is exactly `null` or `undefined`. |

## Returns

A boolean:

- `true` if the value is null or undefined.
- `false` otherwise.

## Examples

```ts
isNullOrUndefined(null)        // true
isNullOrUndefined(undefined)   // true

isNullOrUndefined(0)           // false
isNullOrUndefined('')          // false
isNullOrUndefined({})          // false
```

## Notes

- This helper is useful when distinguishing "missing" from "present but falsy".
- Use `isNull` or `isUndefined` if you need to check for one specific case.
- Use `normalizeNullish` if you need to convert nullish values into defaults.
- Use `validateNullish` if you need a `Result<T>` instead of a boolean.
