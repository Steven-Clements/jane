# isError

Checks whether a value is an **Error** object.

This helper performs a strict `instanceof` check and never throws or mutates input. It accepts all native error types as well as custom error subclasses.

**Note**: `isError` uses a strict `instanceof Error` check. This means it may return `false` for `Error` objects created in a different execution context (for example, another realm such as an iframe).

## Signature

```ts
function isError(value: unknown): value is Error
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. Must be an `Error` instance (including subclasses and wrapper objects) to return `true`. |

## Returns

A boolean:

- `true`: If the value is an `Error`.
- `false`: Otherwise.

## Examples

```ts
isError(new Error())          // true
isError(new TypeError())      // true
isError(Object(new Error()))  // true

isError({ name: 'Error' })    // false
isError('Error')              // false
isError(null)                 // false
```

## Notes

- This helper accepts wrapper objects because JavaScript treats them as genuine `Error` instances.
- It accepts all native error types and custom subclasses.
- Use `normalizeError` if you need to convert values into `Error` objects.
- Use `validateError` if you need a `Result<T>` instead of a boolean.

## Next up

[isFunction](is-function.md)
