# isPromise

Checks whether a value is a **Promise**.

This helper performs a strict `instanceof` check and never throws or mutates input. It accepts native `Promise` instances and `Promise` subclasses, but does not treat arbitrary "thenables" as `Promises`.

## Signature

```ts
function isPromise(value: unknown): value is Promise<unknown>
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. Returns `true` only if the value is a native `Promise` instance or a subclass of `Promise`. |

## Returns

A boolean:

- `true`: If the value is a `Promise`.
- `false`: Otherwise.

## Examples

```ts
isPromise(Promise.resolve())     // true
isPromise(new Promise(() => {})) // true

isPromise({ then() {} })         // false
isPromise('promise')             // false
isPromise(null)                  // false
```

## Notes

- This helper intentionally *does not* treat "thenables" as `Promises`.
- It accepts `Promise` subclasses.
- Use `normalizePromise` if you need to coerce values into Promises.
- Use `validatePromise` if you need a `Result<T>` instead of a boolean.

## Next up

This is the final reference topic. <!-- In the next section, you will learn how to request and receive support. -->

<!-- [Support](../../../support.md) -->
