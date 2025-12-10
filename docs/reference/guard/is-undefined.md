# isUndefined

Checks whether a value is undefined. This helper performs a strict equality check and never throws or mutates input.

Use it when you need to confirm that a value is explicitly undefined before running normalization or validation.

## Signature

```ts
function isUndefined(value: unknown): value is undefined
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. This helper returns `true` only when the value is exactly `undefined`. |

## Returns

A boolean:

- `true` if the value is undefined.
- `false` otherwise.

## Examples

```ts
isUndefined(undefined)   // true

isUndefined(null)        // false
isUndefined(0)           // false
isUndefined('')          // false
isUndefined({})          // false
```

## Notes

- This helper does not treat `null` as `undefined`. Use `isNullOrUndefined` if you need to check for both.
- Use `normalizeUndefined` if you need to convert values into `undefined`.
- Use `validateUndefined` if you need a `Result<T>` instead of a boolean.
