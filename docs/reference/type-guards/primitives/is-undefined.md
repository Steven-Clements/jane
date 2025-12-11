# isUndefined

Checks whether a value is **undefined**. This helper performs a strict equality check and never throws or mutates input.

Use it when you need to confirm that a value is explicitly `undefined` before running normalization or validation.

## Signature

```ts
function isUndefined(value: unknown): value is undefined
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. Returns `true` only when the value is exactly `undefined`. |

## Returns

A boolean:

- `true`: If the value is `undefined`.
- `false`: Otherwise.

## Examples

```ts
isUndefined(undefined)   // true

isUndefined(null)        // false
isUndefined(0)           // false
isUndefined('')          // false
isUndefined({})          // false
```

## Notes

- This helper does not treat `null` as `undefined`. Use [isNullOrUndefined](is-null-or-undefined.md) if you need to check for both.
- Use `normalizeUndefined` if you need to convert values into `undefined`.
- Use `validateUndefined` if you need a `Result<T>` instead of a boolean.

## Next up

This is the final topic for primitives. In the next section, we'll cover structural type guards.

[Structural](../structural/index.md)
